document.getElementById("status").addEventListener('click', async () => {
    // Clear the result container before making the new API call
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    const trainNumber = document.getElementById("trainNumber").value;
    const url = `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=0`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c16b50efd3mshede43b8499bff66p117642jsnee7623c111d2',
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log(result.data.train_number);

        // Create a div element to hold train details and assign a class to it
        const details = document.createElement('div');
        details.className = "card";
        
        // Access previous and upcoming stations safely
        const previousStations = result.data.previous_stations || [];
        const upcomingStations = result.data.upcoming_stations || [];
        
        const reached = previousStations.length ? previousStations[previousStations.length - 1].station_name : 'No previous stations';
        const nextStation = upcomingStations.length > 1 ? upcomingStations[1].station_name : 'No upcoming stations';

        // Populate the details element with train information
        details.innerHTML = `
            <h1>Train Name: ${result.data.train_name}</h1><br>
            Train Number: ${result.data.train_number}<br>
            Train crossed: <b>${reached} station</b><br>
            Upcoming station: <b>${nextStation}<b/>
        `;
        resultContainer.appendChild(details);
    } catch (error) {
        console.error('Error fetching train status:', error);
        // Optionally, display the error message to the user
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Failed to fetch train status. Please try again.';
        resultContainer.appendChild(errorMsg);
    }
});
