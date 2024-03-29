/////////////////////////////////////////////////////////////////////////////////////////////////
//                                      FOR USER 
// LEFT ----> RIGHT [] [] [] [] []
//Social    
const category1_titles = ['Dvach', 'Youtube', 'VK', 'Gmail', 'Guerrilla Mail'];
const category1_links = [`https://2ch.hk/b`, `https://www.youtube.com`, `https://vk.com`, `https://mail.google.com/mail/u/0/#inbox`, `https://www.guerrillamail.com/inbox`];
//Anime
const category2_titles = ['Nekomori', 'Shikimori', 'Konachan', 'Wall Haven'];
const category2_links = [`https://nekomori.ch`, `https://shikimori.one`, `https://konachan.net`, 'https://wallhaven.cc/search?q=id:5&ref=fp'];
//Favorites
const category3_titles = ['Osu', 'Twitch', 'Rutracker'];
const category3_links = [`https://osu.ppy.sh`, `https://twitch.tv`, `https://rutracker.org`];
//Programming
const category4_titles = ['Github', 'W3 Schools', '4pda'];
const category4_links = [`https://github.com`, `https://www.w3schools.com`, `https://4pda.ru/forum/index.php?act=idx`];
//Music
const category5_titles = ['Gensokyo Radio', 'Spotify', 'LastFm'];
const category5_links = [`https://gensokyoradio.net/music/playing/`, `https://www.spotify.com/us/`, `https://last.fm/ru`];
//In order of left -> right
const categories = ['ソーシャル','アニメ','お気に入り','プログラミング','音楽'];
                                                                          //Background Color
const card_colors = ['#56977C','#7345C3','#410E1A', '#7A94AB', '#D79052', '#2B2F3D', '#f3f3f3'];
                                                                            //Dark  //Light
//////////////////////////////////////////////////////////////////////////////////////////////

let root = document.documentElement;
root.style.setProperty("--youmu", card_colors[0]);
root.style.setProperty("--satori", card_colors[1]);
root.style.setProperty("--reimu", card_colors[2]);
root.style.setProperty("--marisa", card_colors[3]);
root.style.setProperty("--aya", card_colors[4]);
root.style.setProperty("--bg", card_colors[5]);

let links = '';

function showTitles() {
    links = '';
    for (let i=0; i<categories.length; i++) {
        document.getElementById(`category${i+1}`).innerHTML = `<h3>${categories[i]}</h3>`;
    }
}

function showLinks(category_titles, category_links) {
    links ='<div>'
    for (let i=0; i<category_titles.length; i++) {
        links += `<a href='${category_links[i]}'>${category_titles[i]}</a>`;
    }
    links +='</div>'
}

function blurImage(character) {
    document.getElementById(`${character}`).classList.add("blur");
    document.getElementById('settings-btn').classList.add('cardHover');
}

function unblurImage(character) {
    document.getElementById(`${character}`).classList.remove("blur");
    document.getElementById('settings-btn').classList.remove('cardHover');
}

let current_bg = '';
function getSettings() {
    let bg = document.getElementById('bg');
    bg.value = localStorage.getItem("background");
    let message = document.getElementById('message')
    message.value = localStorage.getItem('message');
    if (bg.value != '') {
        document.body.style.background = `url(${bg.value})`;
        document.body.style.backgroundSize = `cover`;
        current_bg = `url(${bg.value})`;
    }
    if (message.value != '') {
       document.getElementById('welcome-message').innerHTML = message.value;
    }
    if (localStorage.getItem("theme") == 'dark') {
        darkTheme();
    }
    if (localStorage.getItem("theme") == 'light') {
        lightTheme();
    }
}

let currentTheme = 'dark';
function darkTheme() {
    if (document.getElementById('bg').value == '') {
        document.body.style.background = card_colors[5];
        current_bg = card_colors[5];
    }
    document.getElementById('settings-btn').style.color = card_colors[6];
    document.getElementById('welcome-message').style.color = card_colors[6];
    document.getElementById('welcome-message').style.textShadow = '4px 4px rgb(0, 0, 0, 0.3)';
    currentTheme = 'dark';
    localStorage.setItem("theme", currentTheme);
}

function lightTheme() {
    if (document.getElementById('bg').value == '') {
        document.body.style.background = card_colors[6];
        current_bg = card_colors[6];
    }
    document.getElementById('settings-btn').style.color = card_colors[5];
    document.getElementById('welcome-message').style.color = card_colors[5];
    document.getElementById('welcome-message').style.textShadow =' 4px 0px rgb(255, 255, 255, 0.7)';
    currentTheme = 'light';
    localStorage.setItem("theme", currentTheme);
}

showTitles();
getSettings();

//Add Event Listeners

let settings = document.getElementById('settings-btn');
settings.onclick = () => {
    document.getElementById(`settings`).classList.toggle("show");
}

let bg = document.getElementById('bg');
bg.onchange = () => {
    current_bg = `url(${bg.value})`;
    current_link = bg.value;
    if (bg.value == '') {
        if (currentTheme == 'dark') {
            current_bg = card_colors[5];
        }
        if (currentTheme == 'light') {
            current_bg = card_colors[6];
        }
    }
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    localStorage.setItem("background", current_link);
}

let message = document.getElementById('message');
message.onchange = () => {
    document.getElementById('welcome-message').innerHTML = message.value;
    localStorage.setItem("message", message.value);
}

let category1 = document.getElementById("category1");
category1.onmouseenter = function() {
    document.getElementById('screen').style.background = card_colors[0];
    document.getElementById('screen').style.opacity = '.7';
    blurImage('youmu-img');
    showLinks(category1_titles,category1_links);
    this.innerHTML = links;
};

category1.onmouseleave = function() {
    document.getElementById('screen').style.opacity = '0';
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('youmu-img');
    showTitles();
}

let category2 = document.getElementById("category2");
category2.onmouseenter = function() {
    document.getElementById('screen').style.background = card_colors[1];
    document.getElementById('screen').style.opacity = '.7';
    blurImage('satori-img');
    showLinks(category2_titles,category2_links);
    this.innerHTML = links;
};

category2.onmouseleave = function() {
    document.getElementById('screen').style.opacity = '0';
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('satori-img');
    showTitles();
}

let category3 = document.getElementById("category3");
category3.onmouseenter = function() {
    document.getElementById('screen').style.background = card_colors[2];
    document.getElementById('screen').style.opacity = '.7';
    blurImage('reimu-img');
    showLinks(category3_titles,category3_links);
    this.innerHTML = links;
};

category3.onmouseleave = function() {
    document.getElementById('screen').style.opacity = '0';
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('reimu-img');
    showTitles();
}

let category4 = document.getElementById("category4");
category4.onmouseenter = function() {
    document.getElementById('screen').style.background = card_colors[3];
    document.getElementById('screen').style.opacity = '.7';
    blurImage('marisa-img');
    showLinks(category4_titles,category4_links);
    this.innerHTML = links;
};

category4.onmouseleave = function() {
    document.getElementById('screen').style.opacity = '0';
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('marisa-img');
    showTitles();
}

let category5 = document.getElementById("category5");
category5.onmouseenter = function() {
    document.getElementById('screen').style.background = card_colors[4];
    document.getElementById('screen').style.opacity = '.7';
    blurImage('aya-img');
    showLinks(category5_titles,category5_links);
    this.innerHTML = links;
};

category5.onmouseleave = function() {
    document.getElementById('screen').style.opacity = '0';
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('aya-img');
    showTitles();
}

