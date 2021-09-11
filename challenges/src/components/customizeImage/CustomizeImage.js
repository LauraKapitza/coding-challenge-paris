import './CustomizeImage.css';

function CustomizeImage() {
    const minRange = 0;
    const maxRange = 200;

    return(
        <div className="customize-image">
            <h2>Customize Image</h2>
            <label>
                <input 
                    type="text"
                    

                />
            </label>
            <label>
                <input 
                    type="range"
                    min={minRange}
                    max={maxRange}
                />
            </label>
        </div>
    )
}

export default CustomizeImage;