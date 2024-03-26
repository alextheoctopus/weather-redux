export default function getUserLocation(setUserLocation) {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
        // get the current users location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // save the geolocation coordinates in two variables
                const { latitude, longitude } = position.coords;
                // update the value of userlocation variable
                setUserLocation({ latitude: latitude, longitude: longitude, error: null });
                localStorage.setItem("coords", JSON.stringify({ latitude: latitude, longitude: longitude }));
            },
            // if there was an error getting the users location
            (error) => {
                console.error('Error getting user location:', error);
                setUserLocation({ latitude: null, longitude: null, error: error });
            }
        );
    }
    // if geolocation is not supported by the users browser
    else {
        console.error('Geolocation is not supported by this browser.');
    }
};

