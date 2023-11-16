import chroma from 'chroma-js';

export default function Body() {
    return (
        <div className="col-6">
            <p style={{color: 'blue', backgroundColor: 'lightblue'}}>Hi there</p>
            {chroma.contrast('blue', 'lightblue')}
        </div>
    )
}