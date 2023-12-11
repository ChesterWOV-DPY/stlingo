const chapterLinks = document.querySelectorAll('button.go');

if (chapterLinks.length === 0) {
    throw new Error('unable to find chapter links');
}

for (let link of chapterLinks) {
    link.addEventListener('click', e => {
        window.location.assign(`./chapter${e.target.dataset.chapter}.html`)
    })
}
