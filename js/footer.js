function createFooter() {
    const container = document.querySelector('#footer-container');
    if (!container) return;

    const footer = document.createElement('footer');
    footer.className = 'fixed-bottom border-top text-center py-2';
    footer.innerHTML = `
        <div class="container">
            <p class="mb-0">&copy; 2026 Errolito Lopez. All Rights Reserved.</p>
        </div>
    `;

    container.appendChild(footer);
}