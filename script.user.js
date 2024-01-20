// ==UserScript==
// @name         Google Highlight Visited Links
// @version      1.1
// @description	 Changes the color of visited links in google.com to a yellowish orange.
// @icon         https://github.com/gersko/google-highlight-visited-links/raw/main/icon.png
// @author       gersko
// @match        *://*.google.com/*
// @downloadURL  https://github.com/gersko/google-highlight-visited-links/raw/main/script.user.js
// @updateURL    https://github.com/gersko/google-highlight-visited-links/raw/main/script.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(typeof GM_addStyle != "undefined" ? GM_addStyle : (styles) => {
    let styleNode = document.createElement("style");
    styleNode.innerText = styles;
    document.head.appendChild(styleNode);
})(`
a:visited,
a:visited *[role=link] {
    color: #fbaf5f !important;
}
`);
