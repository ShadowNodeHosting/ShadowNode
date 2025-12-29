document.addEventListener('DOMContentLoaded', () => {
    const dots = [
        { id: 'dot1', angle: 0 },
        { id: 'dot2', angle: 45 },
        { id: 'dot3', angle: 120 },
        { id: 'dot4', angle: 150 },
        { id: 'dot5', angle: 210 }
    ];

    const animationDuration = 6000;
    const svgElement = document.getElementById('svg-animation');
    const triangleAnimation = svgElement.getElementById('triangle-animation');

    triangleAnimation.addEventListener('repeatEvent', () => {
        dots.forEach(dot => {
            const dotElement = document.getElementById(dot.id);
            dotElement.classList.remove('blink');
        });

        dots.forEach(dot => {
            const dotElement = document.getElementById(dot.id);
            setTimeout(() => {
                dotElement.classList.add('blink');
            }, (dot.angle / 360) * animationDuration);
        });
    });

    dots.forEach(dot => {
        const dotElement = document.getElementById(dot.id);
        setTimeout(() => {
            dotElement.classList.add('blink');
        }, (dot.angle / 360) * animationDuration);
    });
});