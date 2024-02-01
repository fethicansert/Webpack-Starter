import './styles/main.scss' //importing css wtf dude normaliy we link ? now I need package manager called css-loader
                             //after importing css i have to inject his css to DOM right ? now use style loader to inject css to DOM
                             //style-loader takes CSS you've imported in your JavaScript files, and injects them as <style></style> tags into the DOM.
                             //Creates `style` nodes from JS strings <style>body{bla bla bla}</>
import image from './assets/laugh-emoji.png';
import generateJoke from './generateJoke';




//npm init <initializer> can be used to set up a new or existing npm package.
//require simdi calisiyor npm yukledigim icin mi node_modules sayesinde mi ?


const jokeEmoji = document.getElementById('jokeEmoji');
jokeEmoji.src = image;

async function setJoke(){
    const data = await generateJoke();
    const jokeText = document.getElementById('jokeText');
    jokeText.innerHTML = data.joke;
}

document.getElementById('jokeButton').addEventListener('click', setJoke);

setJoke();
//wepback go check for .sass type files and bundle them 
//HELLO HELL