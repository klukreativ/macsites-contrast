import { useColourContext } from '../context/ColourContext';
import ColourPickerCard from './colourpicker-card';

export default function ColourPicker() {
    const primaryFont = "#FFFFFF";
    const secondaryFont = "#000000";
    const { primaryColour, updatePrimaryColour, secondaryColour, updateSecondaryColour } = useColourContext();

    return (
        <section className="thumbnail-cards white my-5">
            <div className="container">
                <div className="row row-eq-height justify-content-center">
                    <ColourPickerCard
                        title={"Primary"}
                        colour={primaryColour}
                        changeColour={updatePrimaryColour}
                        textColour={primaryFont}
                    />
                    <ColourPickerCard
                        title={"Secondary"}
                        colour={secondaryColour}
                        changeColour={updateSecondaryColour}
                        textColour={secondaryFont}
                    />
                </div>
            </div>
        </section>
    )
}