import React, { useState } from 'react';
import ColourPickerCard from './colourpicker-card';

export default function ColorPicker() {
    const [primaryColour, setPrimaryColour] = useState("#7a003c");
    const [secondaryColour, setSecondaryColour] = useState("#fdbf57");
    const primaryFont = "#FFFFFF";
    const secondaryFont = "#000000";

    const handleChangePrimary = (colour) => setPrimaryColour(colour.hex);
    const handleChangeSecondary = (colour) => setSecondaryColour(colour.hex);

    return (
        <section className="thumbnail-cards white my-5">
            <div className="container">
                <div className="row row-eq-height justify-content-center">
                    <ColourPickerCard
                        title={"Primary"}
                        colour={primaryColour}
                        changeColour={handleChangePrimary}
                        textColour={primaryFont}
                    />
                    <ColourPickerCard
                        title={"Secondary"}
                        colour={secondaryColour}
                        changeColour={handleChangeSecondary}
                        textColour={secondaryFont}
                    />                    
                </div>
            </div>
        </section>
    )
}