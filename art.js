const asciiArtGallery = [

String.raw`
     __    _____     _____     _____    _____   ______  _____   _____    
    /_/\  ) ___ (  /\_____\  /\  __/\  ) ___ ( / ____/\/\ __/\ ) ___ (   
    ) ) )/ /\_/\ \( (_____/  ) )(_ ) )/ /\_/\ \) ) __\/) )__\// /\_/\ \  
 _ /_/ // /_/ (_\ \\ \__\   / / __/ // /_/ (_\ \\ \ \ / / /  / /_/ (_\ \ 
/_/\ \ \\ \ )_/ / // /__/_  \ \  _\ \\ \ )_/ / /_\ \ \\ \ \_ \ \ )_/ / / 
)_) ) ) )\ \/_\/ /( (_____\  ) )(__) )\ \/_\/ /)____) )) )__/\\ \/_\/ /  
\_\___\/  )_____(  \/_____/  \/____\/  )_____( \____\/ \/___\/ )_____(   `,

String.raw`
             _        _            _               _               _            _             _             _       
            /\ \     /\ \         /\ \            / /\            /\ \         / /\         /\ \           /\ \     
            \ \ \   /  \ \       /  \ \          / /  \          /  \ \       / /  \       /  \ \         /  \ \    
            /\ \_\ / /\ \ \     / /\ \ \        / / /\ \        / /\ \ \     / / /\ \__   / /\ \ \       / /\ \ \   
           / /\/_// / /\ \ \   / / /\ \_\      / / /\ \ \      / / /\ \ \   / / /\ \___\ / / /\ \ \     / / /\ \ \  
  _       / / /  / / /  \ \_\ / /_/_ \/_/     / / /\ \_\ \    / / /  \ \_\  \ \ \ \/___// / /  \ \_\   / / /  \ \_\ 
 /\ \    / / /  / / /   / / // /____/\       / / /\ \ \___\  / / /   / / /   \ \ \     / / /    \/_/  / / /   / / / 
 \ \_\  / / /  / / /   / / // /\____\/      / / /  \ \ \__/ / / /   / / /_    \ \ \   / / /          / / /   / / /  
 / / /_/ / /  / / /___/ / // / /______     / / /____\_\ \  / / /___/ / //_/\__/ / /  / / /________  / / /___/ / /   
/ / /__\/ /  / / /____\/ // / /_______\   / / /__________\/ / /____\/ / \ \/___/ /  / / /_________\/ / /____\/ /    
\/_______/   \/_________/ \/__________/   \/_____________/\/_________/   \_____\/   \/____________/\/_________/     
                                                                                                                    `,

String.raw`
______/\\\\\\\\\\\_________________________________________/\\\\\\\\\\\\\__________________________________________________________        
 _____\/////\\\///_________________________________________\/\\\/////////\\\________________________________________________________       
  _________\/\\\____________________________________________\/\\\_______\/\\\________________________________________________________      
   _________\/\\\_________/\\\\\________/\\\\\\\\____________\/\\\\\\\\\\\\\\______/\\\\\_____/\\\\\\\\\\_____/\\\\\\\\_____/\\\\\____     
    _________\/\\\_______/\\\///\\\____/\\\/////\\\___________\/\\\/////////\\\___/\\\///\\\__\/\\\//////____/\\\//////____/\\\///\\\__    
     _________\/\\\______/\\\__\//\\\__/\\\\\\\\\\\____________\/\\\_______\/\\\__/\\\__\//\\\_\/\\\\\\\\\\__/\\\__________/\\\__\//\\\_   
      __/\\\___\/\\\_____\//\\\__/\\\__\//\\///////_____________\/\\\_______\/\\\_\//\\\__/\\\__\////////\\\_\//\\\________\//\\\__/\\\__  
       _\//\\\\\\\\\_______\///\\\\\/____\//\\\\\\\\\\___________\/\\\\\\\\\\\\\/___\///\\\\\/____/\\\\\\\\\\__\///\\\\\\\\__\///\\\\\/___ 
        __\/////////__________\/////_______\//////////____________\/////////////_______\/////_____\//////////_____\////////_____\/////_____`                                                                                                                   



];

const randomArt = asciiArtGallery[Math.floor(Math.random() * asciiArtGallery.length)];

document.getElementById("asciiHeader").textContent = randomArt;

const aboutArt = String.raw`
    ___    __                __ 
   /   |  / /_  ____  __  __/ /_
  / /| | / __ \/ __ \/ / / / __/
 / ___ |/ /_/ / /_/ / /_/ / /_  
/_/  |_/_.___/\____/\__,_/\__/  
                                
`;

const projectsArt = String.raw`
    ____               _           __      
   / __ \_________    (_)__  _____/ /______
  / /_/ / ___/ __ \  / / _ \/ ___/ __/ ___/
 / ____/ /  / /_/ / / /  __/ /__/ /_(__  ) 
/_/   /_/   \____/_/ /\___/\___/\__/____/  
                /___/                      
`;

document.getElementById("aboutHeader").textContent = aboutArt;
document.getElementById("projectsHeader").textContent = projectsArt;


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
                                                 