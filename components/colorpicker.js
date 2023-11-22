import React, { useState } from 'react';
import { BlockPicker } from 'react-color';
import chroma from 'chroma-js';
import ThumbnailContent from './thumbnail-content';

import ColourPickerCard from './colourpicker-card';

export default function ColorPicker() {
    const [primaryColour, setPrimaryColour] = useState("#7a003c");
    const [secondaryColour, setSecondaryColour] = useState("#fdbf57");

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
                        textColour={"#FFFFFF"}
                    />
                    <ColourPickerCard
                        title={"Secondary"}
                        colour={secondaryColour}
                        changeColour={handleChangeSecondary}
                        textColour={"#000000"}
                    />                    
                </div>
            </div>
        </section>

    )
}