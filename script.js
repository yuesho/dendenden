const pages = [
    { title: "Itsuki Nakano", url: "index.html", keywords: ["itsuki", "nakano", "fifth", "home", "keigo", "ahoge", "appearance", "personality", "inori", "minase", "voice", "actor"] },
    { title: "Other Characters", url: "characters.html", keywords: ["characters", "nino", "miku", "yotsuba", "ichika", "futaro", "rena"] },
    { title: "Gallery", url: "gallery.html", keywords: ["gallery", "pictures", "images", "art"] },
    { title: "Ichika Nakano", url: "ichika.html", keywords: ["ichika", "first", "eldest", "oldest", "pink", "kana", "hanazawa"] },
    { title: "Nino Nakano", url: "nino.html", keywords: ["nino", "second", "tsundere", "butterfly", "ayana", "taketatsu"] },
    { title: "Yotsuba Nakano", url: "yotsuba.html", keywords: ["yotsuba", "fourth", "airhead", "athletic", "bunny", "green"] },
    { title: "Miku Nakano", url: "miku.html", keywords: ["miku", "third", "dandere", "headphones", "blue", "quiet"] }
];

document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    if (query === "") return;

    const match = pages.find(function (page) {
        return page.title.toLowerCase().includes(query) ||
            page.keywords.some(function (word) {
                return word.includes(query) || query.includes(word);
            });
    });

    if (match) {
        window.location.href = match.url;
    } else {
        alert('No results found for "' + query + '"');
    }
});