CRUISE is a project which can easily manage the Continuous Integration (CI) servers, monitor or set their status.

## Project structure

The source contains two parts. One is the package `mock-server` which is the mock server for development usage.

The rest is the UI project CRUISE.

## Useful scripts

### `yarn install:all`

Please clone or download this project to your local, and then use this script to install the dependencies.

This will install dependencies for both UI project and mock server project.

### `yarn start:all`

This will Start Cruise project and mock server together.

The cruise project is run in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Please refer mock-server's README about more information.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
