window.addEventListener('load', (event) => {
    let theme = localStorage.getItem('theme');
    if (theme === null) {
        theme = 'light';
        localStorage.setItem('theme', theme);
    }
    document.body.className = theme + '-mode';
});

document.getElementById('theme-toggle').addEventListener('change', function() {
    let theme = this.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.body.className = theme + '-mode';
});
