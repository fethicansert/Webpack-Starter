import genereteJoke from './generateJoke.js'
import '../stlyes/main.scss' //importing css wtf dude normaliy we link ? now I need package manager called css-loader
                             //after importing css i have to inject his css to DOM right ? now use style loader to inject css to DOM
                             //style-loader takes CSS you've imported in your JavaScript files, and injects them as <style></style> tags into the DOM.
                             //Creates `style` nodes from JS strings <style>body{bla bla bla}</>
console.log(genereteJoke()); 
console.log(genereteJoke());

//npm init <initializer> can be used to set up a new or existing npm package.
//require simdi calisiyor npm yukledigim icin mi node_modules sayesinde mi ?