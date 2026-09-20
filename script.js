/* =============================================
   REA ROSAL — Profile Website JS
   Subtle interaction enhancements
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    // --- Cursor glow effect on card ---
    const card = document.getElementById('profile-card');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--glow-x', `${x}px`);
        card.style.setProperty('--glow-y', `${y}px`);
        card.style.background = `
            radial-gradient(
                300px circle at ${x}px ${y}px,
                rgba(232, 196, 196, 0.06),
                transparent
            ),
            #fffdf9
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = '#fffdf9';
    });

    // --- Ripple effect on social buttons ---
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(212, 160, 160, 0.25);
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(2.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // --- Parallax floating petals on mouse move ---
    const petals = document.querySelectorAll('.petal');
    const sparkles = document.querySelectorAll('.sparkle');

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        petals.forEach((petal, i) => {
            const depth = (i + 1) * 4;
            petal.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });

        sparkles.forEach((sparkle, i) => {
            const depth = (i + 1) * 6;
            sparkle.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
    });
});
