function createFooter() {
    const container = document.querySelector('#footer-container');
    if (!container) return;

    const footer = document.createElement('footer');
    footer.className = 'fixed-bottom bg-white text-center py-4 shadow';
    footer.innerHTML = `
        <div class="container">
            <p class="mb-0">&copy; 2026 Errolito Lopez. All Rights Reserved.</p>
        </div>
    `;

    container.appendChild(footer);
}