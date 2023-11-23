import { useState, createContext } from "react";

export const ColourContext = createContext();

export function useColourContext() {
    return useContext(ColourContext);
}

export function ColourProvider({ children }) {
    const [primaryColour, setPrimaryColour] = useState('#7a003c');
    const [secondaryColour, setSecondaryColour] = useState('fdbf57');

    const updatePrimaryColour = (newColour) => setPrimaryColour(newColour.hex);
    const updateSecondaryColour = (newColour) => setSecondaryColour(newColour.hex);

    return (
        <ColourContext.Provider value={{primaryColour, updatePrimaryColour, secondaryColour, updateSecondaryColour}}>
            {children}
        </ColourContext.Provider>
    );
}