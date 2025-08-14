document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator-button');

    // Add event listeners to all calculator buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.textContent);
        });
    });

    // Handle keyboard input
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const validKeys = '0123456789.+-*/';
        if (validKeys.includes(key)) {
            handleButtonClick(key);
        } else if (key === 'Enter') {
            event.preventDefault(); // Prevent default Enter key behavior
            handleButtonClick('=');
        } else if (key === 'Backspace') {
            handleButtonClick('←');
        } else if (key === 'Escape') {
            handleButtonClick('C');
        }
    });

    // Main function to handle all button clicks and key presses
    const handleButtonClick = (value) => {
        const currentDisplay = display.value;

        switch (value) {
            case 'C':
                display.value = '0'; // Reset display to '0'
                break;
            case '←':
                // Remove the last character, if the display is not already empty or '0'
                if (currentDisplay.length > 1 && currentDisplay !== 'Error') {
                    display.value = currentDisplay.slice(0, -1);
                } else {
                    display.value = '0'; // If only one character is left, reset to '0'
                }
                break;
            case '=':
                try {
                    // Use eval() to calculate the expression
                    const result = eval(currentDisplay);
                    // Check for invalid results (e.g., division by zero)
                    if (result === Infinity || result === -Infinity || isNaN(result)) {
                        throw new Error('Invalid calculation');
                    }
                    // Round to a reasonable number of decimal places to avoid floating point issues
                    display.value = Number(result.toFixed(8));
                } catch (error) {
                    // Display 'Error' if the calculation fails
                    display.value = 'Error';
                }
                break;
            default:
                // Handle numbers and operators
                if (currentDisplay === '0' || currentDisplay === 'Error') {
                    display.value = value; // Replace the initial '0' or 'Error'
                } else {
                    // Append the new value to the existing display value
                    display.value += value;
                }
                break;
        }
    };
});
