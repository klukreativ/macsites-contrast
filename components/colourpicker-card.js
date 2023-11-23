import { BlockPicker } from 'react-color';
import chroma from 'chroma-js';

export default function ColourPickerCard({ title, colour, changeColour, textColour }) {
    const colors=['#7a003c', '#fdbf57', '#11688d', '#a5c263', '#1b656d', '#8331a7'];

    return (
        <div className="col-lg-6 mb-3">
            <div className="card card-shadow border-top-0">
                <div className="card-main border-top h-100">
                    <div className="card border-0 no-shadow card-hover">
                        <BlockPicker
                            width={"100%"}
                            color={colour}
                            onChangeComplete={changeColour}
                            colors={colors}
                            triangle={"hide"}
                        />
                        <div className="card-body pb-0">
                            <h3 className="card-title">{title} Colour</h3>
                            <div className="card-text mb-0">
                                <div style={{backgroundColor: colour, color: textColour, borderRadius: "1em", padding: "0.5em 1em", width: "fit-content", margin: "1em 0"}}>Sample Text</div>
                                <p>The colour you chose, {colour.toUpperCase()}, will be paired with a font with the value of {textColour}.</p>
                                <p>The minimum contrast ratio recommended to meet AODA standards for text is 4.5:1.</p>
                                <p>The contrast level between your chosen colour and the font is {Math.round(chroma.contrast(colour, textColour) * 100) / 100} which {chroma.contrast(colour, textColour) >= 4.5 ? 'meets' : 'does not meet'} the standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}