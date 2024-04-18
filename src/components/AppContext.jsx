import { createContext } from "react";
import { useDispatch } from "react-redux";

export const AppContext = createContext(
    {
        loc: false,
        setLoc: () => { return null },
        city: '',
        setCity: () => { return null },
        userLocation: { latitude: 0, longitude: 0, error: '' },
        setUserLocation: () => { return null },
        country: '',
        setCountry: () => { return null },
        mode: 'online',
        setMode: () => { return null },
        dispatch: () => { return null },
    });