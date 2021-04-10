# Luís Felipe Souza

## Access :zap:

[luisfmsouza.com.br](http://www.luisfmsouza.com.br) or luisfmsouza.herokuapp.com

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy :rocket:

Heroku Pipeline is taking care of every deploy step.

First, every Pull Request should pass by an review. If everything is ok, deploy to staging is executed and the changes must be merged to `master`.

After the merge, a deploy to staging is automatically started.

If the staging review is ok, Heroku Pipeline also take care of a deploy to production.

Easy to ship and go online!
