document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
            setTimeout(() => {
                button.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });
});