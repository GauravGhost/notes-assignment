const Fuse = require('fuse.js');

function fuzzySearch(list, query) {
    const fuseOptions = {
        isCaseSensitive: false,
        includeScore: true,
        shouldSort: false,
        threshold: 0.2,
        keys: [
            "title",
            "content"
        ]
    };
    const fuse = new Fuse(list, fuseOptions);

    return fuse.search(query)
}