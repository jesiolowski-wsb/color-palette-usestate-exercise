import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"

const ColorPalette = () => {
    // Declare a state variable called 'colors' and its setter function 'setColors'
    const [colors, setColors] = useState(["#FF0000", "#00FF00", "#0000FF"]);

    // Declare a state variable called 'newColor' and its setter function 'setNewColor'
    const [newColor, setNewColor] = useState("");

    useEffect(() => {
        // Update document title when the colors array changes
        document.title = `Color Palette (${colors.length})`;
    }, [colors]);

    // Function to handle adding a new color to the palette
    const addColor = () => {
        if (newColor) {
            setColors([...colors, newColor]);
            setNewColor("");
        }
    };

    // Function to handle removing a color from the palette
    const removeColor = (index) => {
        const updatedColors = [...colors];
        updatedColors.splice(index, 1);
        setColors(updatedColors);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Color Palette</h2>
            <div className="row align-items-center">
                <div className="col-auto">
                    <input
                        type="color"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={addColor}>
                        Add Color
                    </button>
                </div>
                <div className="col">
                    <p className="mb-0">Total Colors: {colors.length}</p>
                </div>
            </div>
            <div className="row mt-3">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="col-2 mb-3"
                        style={{
                            backgroundColor: color,
                            height: '80px',
                        }}
                        onClick={() => removeColor(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;
