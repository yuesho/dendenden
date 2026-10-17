const pages = [
    { title: "Itsuki Nakano", url: "index2.html", keywords: ["itsuki", "nakano", "fifth", "home", "keigo", "ahoge", "appearance", "personality", "inori", "minase", "voice", "actor"] },
    { title: "Other Characters", url: "characters.html", keywords: ["characters", "nino", "miku", "yotsuba", "ichika", "futaro", "rena"] },
    { title: "Gallery", url: "gallery.html", keywords: ["gallery", "pictures", "images", "art"] }
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