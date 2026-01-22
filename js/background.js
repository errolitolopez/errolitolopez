function createBackground() {
    const container = document.getElementById('background-container');
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'position-fixed top-0 start-0 w-100 h-100 z-n1';

    wrapper.innerHTML = `
        <div class="container-fluid h-100 p-0">
            <div class="row g-0 h-100">
                <div class="col-6 color-custom"></div>
                <div class="col-6 bg-white"></div>
            </div>
        </div>
    `;

    container.appendChild(wrapper);
}
