const fs = require("fs").promises;
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");

const VERSION = "16.12.0";
process.env.npm_package_dependencies_react = VERSION;
const reactEcmascript = require("react-ecmascript");

rimraf.sync(`./staging/react/${VERSION}`);
rimraf.sync(`./staging/react-dom/${VERSION}`);
reactEcmascript().then(async sources => {
  console.log(Object.keys(sources));
  mkdirp.sync(`./staging/react/${VERSION}/types`);
  mkdirp.sync(`./staging/react-dom/${VERSION}/types`);

  await fs.writeFile(
    `./staging/react/${VERSION}/source.development.js`,
    sources["react.development.mjs"]
  );
  await fs.writeFile(
    `./staging/react-dom/${VERSION}/source.development.js`,
    sources["react-dom.development.mjs"].replace(
      `import React from "./react.development.mjs";`,
      `import React from "react";`
    )
  );
  await fs.writeFile(
    `./staging/react/${VERSION}/source.production.js`,
    sources["react.production.min.mjs"]
  );
  await fs.writeFile(
    `./staging/react-dom/${VERSION}/source.production.js`,
    sources["react-dom.production.min.mjs"].replace(
      `import React from "./react.production.min.mjs";`,
      `import React from "react";`
    )
  );

  await fs.copyFile(
    `./node_modules/@types/react/index.d.ts`,
    `./staging/react/${VERSION}/types/index.d.ts`
  );
  await fs.copyFile(
    `./node_modules/@types/react/global.d.ts`,
    `./staging/react/${VERSION}/types/global.d.ts`
  );
  await fs.copyFile(
    `./node_modules/@types/react/experimental.d.ts`,
    `./staging/react/${VERSION}/types/experimental.d.ts`
  );
  await fs.copyFile(
    `./node_modules/@types/react-dom/index.d.ts`,
    `./staging/react-dom/${VERSION}/types/index.d.ts`
  );
  await fs.copyFile(
    `./node_modules/@types/react-dom/experimental.d.ts`,
    `./staging/react-dom/${VERSION}/types/experimental.d.ts`
  );

  await fs.writeFile(
    `./staging/react/${VERSION}/package.json`,
    `{
      "name": "@pika/react",
      "version": "${VERSION}",
      "license": "MIT",
      "description": "An actively maintained ESM build of React, the JavaScript library for building user interfaces.",
      "main": "source.production.js",
      "module": "source.production.js",
      "homepage": "https://reactjs.org/",
      "bugs": {
        "url": "https://github.com/facebook/react/issues"
      },
      "dependencies": {},
      "keywords": [
        "react"
      ],
      "repository": {
        "type": "git",
        "url": "git+https://github.com/facebook/react.git",
        "directory": "packages/react"
      }
    }`
  );
  await fs.writeFile(
    `./staging/react-dom/${VERSION}/package.json`,
    `{
      "name": "@pika/react-dom",
      "description": "An actively maintained ESM build of React-DOM, a package for working with the DOM.",
      "version": "${VERSION}",
      "license": "MIT",
      "main": "source.production.js",
      "module": "source.production.js",
      "peerDependencies": {
        "@pika/react": "^16.0.0"
      },
      "keywords": [
        "react"
      ],
      "homepage": "https://reactjs.org/",
      "bugs": {
        "url": "https://github.com/facebook/react/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/facebook/react.git",
        "directory": "packages/react-dom"
      }
    }`
  );

  await fs.copyFile(
    `./node_modules/react/README.md`,
    `./staging/react/${VERSION}/README.md`
  );
  await fs.copyFile(
    `./node_modules/react-dom/README.md`,
    `./staging/react-dom/${VERSION}/README.md`
  );

  await fs.copyFile(
    `./node_modules/react/LICENSE`,
    `./staging/react/${VERSION}/LICENSE.txt`
  );
  await fs.copyFile(
    `./node_modules/react-dom/LICENSE`,
    `./staging/react-dom/${VERSION}/LICENSE.txt`
  );
});
