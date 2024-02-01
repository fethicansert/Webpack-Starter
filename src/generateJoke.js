// All API endpoints follow their respective browser URLs, but we adjust the response formatting 
// to be more suited for an API based on the provided HTTP Accept header.

// Diffrent Accept header diffrent response format for this API
// text/html - HTML response (default response format)
// application/json - JSON response we use this
// text/plain - Plain text response

export default async function generateJoke() {
    const config = {
        headers: {
            Accept: 'appliaction/json' //JSON response
        }
    }

    const response = await fetch('https://icanhazdadjoke.com',{headers: { Accept: 'application/json'}});
    const data = await response.json();
    
    return data;
}



