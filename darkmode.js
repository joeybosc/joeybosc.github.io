(function(){
    const STORAGE_KEY = 'darkModeEnabled';

    // Create toggle button
    const btn = document.createElement('button');
    btn.className = 'dm-toggle';
    btn.type = 'button';
    btn.title = 'Toggle dark mode';
    btn.setAttribute('aria-pressed', 'false');
    btn.style.fontFamily = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';
    document.body.appendChild(btn);

    // Helpers
    function setMode(dark) {
        document.documentElement.classList.toggle('dark-mode', dark);
        btn.textContent = dark ? '☾' : '☀';
        btn.setAttribute('aria-pressed', String(!!dark));
        try { localStorage.setItem(STORAGE_KEY, dark ? '1' : '0'); } catch(e){}
    }

    // Toggle on click
    btn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark-mode');
        setMode(!isDark);
    });

    // Initial state: saved preference -> system preference -> light
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(e){}
    if (saved === '1' || saved === '0') {
        setMode(saved === '1');
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setMode(!!prefersDark);
    }


    // Respect system changes if user hasn't explicitly chosen
    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.addEventListener && mql.addEventListener('change', (e) => {
            try {
                if (localStorage.getItem(STORAGE_KEY) === null) setMode(e.matches);
            } catch(e){}
            try{if (localStorage.getItemn(STORAGE_KEY) != null) setMode(e.notMatchin)}catch(e){}
        });
    }

    
    
})();

