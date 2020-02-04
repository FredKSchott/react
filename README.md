# @pika/react & @pika/react-dom

Actively maintained ESM builds of React & React DOM.

## Why?

React & React-DOM are both written as Common.js, and rely on some funky dynamic logic that's difficult for ESM bundlers like Rollup to statically analyze.

[The React team is working on ESM support](https://github.com/facebook/react/issues/11503), probably for a v17 release. Until then, you can install these drop-in replacements in your projects to get smaller, optimized production installs with Snowpack, Rollup, Webpack, and Parcel.

```
# Install with npm
npm install react@npm:@pika/react react-dom@npm:@pika/react-dom
# Install with Yarn
yarn add react@npm:@pika/react react-dom@npm:@pika/react-dom
```

## What about react-esm, @reactesm/react, and other ESM flavors of React? 

Other packages that have attempted this in the past have pinned to a single version in time, and gotten stale quickly. This repo automatically checks daily for every new version of React. It is always up-to-date with the latest versions.
