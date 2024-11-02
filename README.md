# Greenhouse Monitoring System

This repository contains a web application for monitoring and managing a greenhouse environment. The system utilizes IoT devices, such as ESP32 and Arduino, to collect real-time data from various sensors within the greenhouse. The data is then stored and managed using Firebase, providing a reliable backend for data handling and user authentication.

## Features

- **Real-Time Data Collection**: Connects to IoT devices (ESP32, Arduino) to gather data on temperature, humidity, soil moisture, and other environmental factors.
- **Firebase Integration**: Utilizes Firebase for data storage, ensuring secure and scalable data management. Supports real-time updates and synchronization.
- **User Authentication**: Implements Firebase Authentication to manage user access and ensure that only authorized users can view or modify greenhouse data.
- **Responsive Web Interface**: Provides a user-friendly web interface for users to monitor greenhouse conditions, view historical data, and receive alerts based on predefined thresholds.
- **Data Visualization**: Includes charts and graphs for visual representation of sensor data, making it easier to analyze trends over time.

## Technologies Used

- **IoT Devices**: ESP32, Arduino
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Firestore, Authentication)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dasitha-dinith-dilshan/green-house-dashboard.git
   ```

2. Install the required libraries and dependencies (if any).

3. Set up your Firebase project and configure the authentication and Firestore settings.

4. Update the configuration files in the project with your Firebase credentials.

5. Open the `index.html` file in your browser to view the application.

