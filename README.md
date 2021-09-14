## Introduction

This codebase contains a simple React Application with code samples, webpack development and production configuration, AJAX calls, React Router 4, Redux, Redux-Thunk, Jest based Test cases for Component, Reducers, Actions, Thunk, Store, JWT Authentication, Dynamic Component Loading, Code Splitting, RxJS & an example shopping cart implementation.

The code base is build from various workshops by Gopalakrishnan at NodeSense, the fine tuning of the code is still in progress. 

## Get Started

- Install Node.js 14.x LTS

> git clone https://github.com/nodesense/react-app

> cd react-app

> npm install

> npm start


>   npm run test -- --coverage .




Open browser with port localhost:3000

To build the production bundle, you can use below command

> npm run build


## Debug The Test Cases using Jest and Visual Studio Code

1. In VS Code Extension, install Jest extention. Reload needed for VS Code
2. refer this article   https://morioh.com/p/272084f50134
3. Create one launch.json file
4. Patch  "console": "internalConsole",   "internalConsoleOptions": "openOnSessionStart",


## Google API Login

1. https://console.cloud.google.com/apis/dashboard
2. OAuth consent Screen Screen [app name, support email, developer contact info]
3. Add/Remove scope, ensure that you have email, profile and openid selected.
4. Once all done with Oauth consent, go to Credentials page
5. Add Credentials, select OAuth Client ID
6. In Application Type, Select Web Application
7. App name
8. Authorized JavaScript origins, add http://localhost:3000 and one more http://localhost:8088
9. Authorized redirect URIs, add http://localhost:3000 and one more http://localhost:8088
10. Click on Create Button
11. Google shall show Client id, make note and use the same for react-google-login plugin
12. Now work with react login, use a plugin npm package react-google-login
13. Install npm package  `npm install react-google-login`
14. https://www.npmjs.com/package/react-google-login
15. Adjust import statement, set the client id
16. Refer Header.js



## Restful API Server

To fetch the data from APIs, we need to have restful-server to be available in local machine,
the restful-server is available on https://github.com/nodesense/restful-server

Please follow the instruction to setup restful server. 

If you want to change the end points from 7070 in react app, look into config folder, you can find config/development.json and config/production.json files.


For login page, use below credential

username: admin, password: admin

username: staff, password: staff

username: user, password: user

## Unit Test

We have working unit tests for few of the files, they are stored as filename.spec.js convention. We have test cases included for component, action, thunk, store, mocking fetch responses.

To run the tests,

> npm test

To run tests with coverage

> npm run test-coverage

## Webpack

We have `webpack.config.js', 'webpack.prod.config.js` config files located under same folder, they have vendor bundle, css, configuration 

## TODO
Below works are in merging process, may take some time to complete the merge. 

  Web socket [in progress]
  React Virtualized
  Chart Integration
  

# Setup your own project

## NPM Introduction

Node Package Manager (npm) is installed along with Node.js installation. `npm` command helps to install packages from registry.npmjs.org website. `npm` command install packages on *node_modules* folder on the project directory.

## To create npm project,

> mkdir react-app

> cd react-app

below command creates default *package.json* in your current working directory *react-app*

> npm init -y

## install react packages

on npm 3.x, *--save* option helps to save the install package name in the package dependencies.

> npm install react react-dom prop-types --save

For React-Router,

> npm install react-router-dom --save

For redux,

> npm install redux react-redux redux-thunk --save

For RxJS,

> npm install rxjs --save

For jQuery

> npm install jquery --save

For Fetch (Ajax calls) polyfills

> npm install whatwg-fetch --save


For code splitting, split a modules that can be loaded separately 

> npm install react-loadable  --save

## Babel Setup

Babel is a transpiler, convert ES2016 (ES6), ES2016, ES2017, ES.NEXT to the ES5, the old JavaScript.

> npm install babel-preset-env babel-preset-stage-2 babel-preset-react --save-dev

Create the `.babelrc` in the project root directory

```
{
    "presets": ["env", "stage-2", "react"],
     "plugins": [
        "syntax-dynamic-import"
    ]
} 
```


Few more things with babel setup, when we need support for ES8 async/await keywords [to avoid  regeneratorRuntime issue]

> npm install --save babel-polyfill

Below lines must be added on top of main.js file.

```
import "babel-polyfill";
```

To support code splitting, lazy laod components bundle on need,

> npm install babel-plugin-syntax-dynamic-import --save-dev

## Webpack setup

Webpack bundles many javascripts file into single js file, helps to load files faster in the browser. 

We use src/main.js as an entry file, all files imported within main.js and its sub-files are bundled into app.bundle.js, served from memory. 

> npm install webpack webpack-dev-server babel-core babel-loader --save-dev

Install below plug-ins to handle css entries specific to components on its relative path.

> npm install extract-text-webpack-plugin css-loader file-loader style-loader --save-dev

webpack config files are kept under src/config/webpack.config.js, src/config/webpack.prod.config.js

For production bundle, we need to copy the assets folders (copy-webpack-plugin), generate scripts and link tag dynamically based on hash code (html-webpack-plugin), clear the dist folder for every build (clean-webpack-plugin), For that, we need addtional plug-ins.


> npm install copy-webpack-plugin html-webpack-plugin clean-webpack-plugin --save-dev

## JEST

Jest is a test runner, uses jasmine for test description, comes with all packages pre-installed including test coverage. 

`__mocks__` is useful if you want to mock any files in the system, so that jest can import mock file rather than real project file.

> npm install jest babel-jest enzyme enzyme-adapter-react-16 react-test-renderer --save-dev

to run test cases,

> npm test

to run test cases with code coverage,

> npm run test-coverage

test cases to be stored in `__tests__` folder or stored with extenstion .spec.js or .test.js file in project directory. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
