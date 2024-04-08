const url = 'https://the-weather-api.p.rapidapi.com/api/weather/Kuala%20Lumpur';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5c325c805msh2ce6ec6087272c0p1daf90jsn1b543a3b9337',
        'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the asynchronous function
fetchData();
