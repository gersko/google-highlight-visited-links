// ==UserScript==
// @name         Google Highlight Visited Links
// @version      1.0
// @description	 Changes the color of visited links in Google to a yellowish orange.
// @icon         https://github.com/gersko/google-highlight-visited-links/raw/main/icon.png
// @author       gersko
// @include      *://*.google.tld/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

const css = `
a:visited {
    color: #fbaf5f !important;"
}
`;

GM_addStyle(css);
