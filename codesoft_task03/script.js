
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            if (value === 'C') {
                display.textContent = '0';
            } else if (value === '=') {
                try {
                    display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
        });
    });
});