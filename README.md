# @pika/react & @pika/react-dom

Actively maintained ESM builds of React & React DOM, published to NPM.

## Why?

React & React-DOM are both written as Common.js, and rely on some funky dynamic logic that's difficult for ESM bundlers like Rollup to statically analyze.

This package used to be the only way to use React in an ESM-only environment. However, Snowpack v2.0+ introduced the ability to use the "react" & "react-dom" packages directly. **These packages are no longer necessary for Snowpack.** We'll even warn if you use them! This repo only exists now for projects that need native ESM or that don't support more advanced CJS upconversions (ex: [Vite](https://github.com/vitejs/vite-plugin-react)).

[The React team is working on ESM support](https://github.com/facebook/react/issues/11503), probably for a v17 release. Until then, you can install these drop-in replacements in your projects to get smaller, optimized production installs with Snowpack, Rollup, Webpack, and Parcel.

```bash
# Install with npm
npm install react@npm:@pika/react react-dom@npm:@pika/react-dom
# Install with Yarn
yarn add react@npm:@pika/react react-dom@npm:@pika/react-dom
```

## What about react-esm, @reactesm/react, and other ESM flavors of React? 

Other packages that have attempted this in the past have pinned to a single version in time, and gotten stale quickly. This repo automatically checks daily for every new version of React. It is always up-to-date with the latest versions.


## How to Build Locally

```
git clone ${REPO}
npm install
node ./build-react.js
```
