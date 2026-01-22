function createHeader() {
    const container = document.querySelector('#header-container');
    if (!container) return;

    const header = document.createElement('header');
    header.className = 'bg-white border-bottom py-3';

    header.innerHTML = `
        <div class="container d-flex align-items-center justify-content-between">
            <a class="navbar-brand" href="https://errolitolopez.site">
                <span class="h2 fw-bold">Errolito Lopez</span>
            </a>

            <ul class="d-flex gap-4 mb-0 list-unstyled">
                <li><a href="https://errolitolopez.site/resume" class="text-decoration-none text-dark">Resume</a></li>
                <li><a href="https://errolitolopez.site/projects" class="text-decoration-none text-dark">Projects</a></li>
            </ul>
        </div>
    `;

    container.appendChild(header);
}
