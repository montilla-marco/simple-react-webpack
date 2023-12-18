# Webpack 5 Boilerplate

> Webpack 5 boilerplate with Babel, React, and SASS on board

## Setup

Install dependencies

```sh
$ npm i
```

## Scripts

#### Run the local webpack-dev-server with hot module reload on [http://localhost:8080/](http://localhost:8080/)

```sh
$ npm run start
```

#### Build the current application for production

```sh
$ npm run build
```

# Practical Guidelines About State
 - Use a state variable for any data that the component should keep track of "remember" over time.
 - Whenever you want something in the component to be dynamic, create a piece of state related to that "thing".
 - If you want change the way a comnponent looks, or the data its displays, update its state.
 - For data that should no trigger component re-renders, don't use state().


# Reference
note: https://jsramblings.com/creating-a-react-app-with-webpack/,
      https://javascript.plainenglish.io/webpack-in-2021-typescript-jest-sass-eslint-7b4640842e27

