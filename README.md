# Train Tracker

A real-time web application to track train statuses by fetching live data using the IRCTC API. Users can input a train number to view details like the train name, number, recently crossed station, and upcoming stations.

## Features

- **Real-time Train Status**: Fetches and displays the train’s live status using the IRCTC API.
- **User-Friendly Interface**: A simple, responsive UI built with HTML, CSS, and JavaScript.
- **Error Handling**: Provides clear feedback to users for invalid inputs or API call failures.

---

## Technologies Used

1. **Frontend**: HTML, CSS, JavaScript.
2. **Backend Integration**: IRCTC API via RapidAPI.
3. **External Libraries**: Fetch API for asynchronous data retrieval.

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/naveen-kampara/train-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd train-tracker
   ```

3. Open the `index.html` file in your web browser to launch the application.

4. Enter a train number and click **Submit** to get the live train status.

---

## API Usage

The application uses the IRCTC API to fetch live train statuses. Ensure you have an API key from RapidAPI to use this project.

Update the `x-rapidapi-key` in the `script.js` file with your API key:

```javascript
headers: {
    'x-rapidapi-key': 'your-api-key-here',
    'x-rapidapi-host': 'irctc1.p.rapidapi.com'
}
```

---

## Screenshots

### Home Interface:



### Train Status Results:



---

## Folder Structure

```
train-tracker/
├── index.html          # Main HTML file
├── style.css           # Stylesheet for the project
├── script.js           # JavaScript logic
├── images/             # Folder containing screenshots
└── README.md           # Project documentation
```

---

## Future Improvements

- **Advanced Search Options**: Add filters for train search, such as start and end stations.
- **Enhanced Error Feedback**: Provide detailed error messages for specific issues like API limits or incorrect train numbers.
- **Mobile Optimization**: Further optimize the design for smaller screens.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

- **Naveen Kampara**: Full-stack developer with a focus on real-time web applications.
- **GitHub**: [naveen-kampara](https://github.com/naveen-kampara)
