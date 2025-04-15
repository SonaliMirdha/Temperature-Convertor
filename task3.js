function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.innerHTML = '<span style="color: red; font-weight: bold;">Please enter a valid number.</span>';
        return;
    }

    let convertedTemp = 0;
    let convertedUnit = '';

    switch (unit) {
        case 'celsius':
            convertedTemp = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'fahrenheit':
            convertedTemp = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            break;
        case 'kelvin':
            convertedTemp = temperature - 273.15;
            convertedUnit = 'Celsius';
            break;
        default:
            result.innerHTML = '<span style="color: red; font-weight: bold;">Invalid unit selected.</span>';
            return;
    }

    // Corrected innerHTML assignment
    result.innerHTML = `<span style="color: #4CAF50; font-weight: bold; font-size: 1.2em;">
        Converted Temperature: ${convertedTemp.toFixed(2)} °${convertedUnit}
    </span>`;
}