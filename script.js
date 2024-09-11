document.addEventListener('DOMContentLoaded', function() {
    const needle = document.querySelector('.needle');
    const direction = document.querySelector('.direction');

    function updateCompass() {
        const date = new Date();
        const hours = date.getHours();
        const angle = hours * 30; // 360 degrees / 12 hours = 30 degrees per hour

        needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const directionIndex = Math.floor(hours / 3);
        direction.textContent = directions[directionIndex];
    }

    updateCompass();
    setInterval(updateCompass, 3600000); // Update every hour
});
