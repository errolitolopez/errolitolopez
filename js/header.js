function createHeader() {
    const container = document.querySelector('#header-container');
    if (!container) return;

    const header = document.createElement('header');
    header.className = 'fixed-top border-bottom py-2';

    header.innerHTML = `
        <div class="container d-flex align-items-center justify-content-between">
            <a class="navbar-brand" href="https://errolitolopez.site">
                <span class="h2 fw-bold">Errolito Lopez</span>
            </a>

            <ul class="d-flex gap-4 mb-0 list-unstyled align-items-center">
                <li><a href="https://errolitolopez.site/resume" class="text-decoration-none">Resume</a></li>
                <li><a href="https://errolitolopez.site/projects" class="text-decoration-none">Projects</a></li>
                <li>
                    <a href="#" id="themeToggle" class="btn btn-sm d-flex align-items-center justify-content-center border-0" aria-label="Toggle Theme">
                        <i class="bi bi-moon-fill"></i>
                    </a>
                </li>
            </ul>
        </div>
    `;
    container.appendChild(header);

    const body = document.body;
    const toggleButton = document.getElementById('themeToggle');
    const icon = toggleButton.querySelector('i');

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        icon.className = 'bi bi-sun-fill';
    }

    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-theme');
        icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
