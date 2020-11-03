
const queries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)'
}
const mediaQueryLists = {

};

const keys = Object.keys(queries);
const matches = {};

keys.forEach(media => {
    if (typeof queries[media] === 'string') {
        mediaQueryLists[media] = window.matchMedia(queries[media]);
        matches[media] = mediaQueryLists[media].matches;
    } else {
        matches[media] = false
    }
});



