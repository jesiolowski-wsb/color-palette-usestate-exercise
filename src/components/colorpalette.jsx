import React, {useEffect, useState} from "react";

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
        <div>
            <h2>Color Palette</h2>
            <input
                type="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                placeholder="Enter a color"
            />
            <button onClick={addColor}>Add Color</button>
            <p>Total Colors: {colors.length}</p>
            <div className="color-container">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="color"
                        style={{
                            backgroundColor: color,
                            border: "1px solid black",
                            height: "100px",
                        }}
                        onClick={() => removeColor(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;
