function createNavbar() {
    const container = document.querySelector('#navbar-container');
    if (!container) return;

    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg sticky-top shadow-sm bg-white';
    nav.id = 'mainNav';

    nav.innerHTML = `
        <div class="container-fluid px-4">
            <a class="navbar-brand" href="https://errolitolopez.site">
                <span class="h2 fw-bold">Errolito Lopez</span>
                <span>/ Java Developer</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="https://errolitolopez.site">About Me</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://errolitolopez.site/resume">Resume</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://errolitolopez.site/projects">Projects</a></li>
                </ul>
            </div>
        </div>
    `;

    container.appendChild(nav);
}