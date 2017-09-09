var hashesarr = { "/goose/goosebacteroidetes.html":'/goose/goosebacteroidetes/', 
"#!another-news/dkc8":'/another-new-page/', 
"#!something-old/eckje8":'/something-new/' };
for (var hash in hashesarr) {
var patt = new RegExp(hash);
if (window.location.hash.match(patt) !== null) {
window.location.href = hashesarr[hash]; 
} 
}