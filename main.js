// ==UserScript==
// @name         Favicon Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change favicon on website with a delay
// @author       Hehoku
// @match        https://devv.ai
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        var newFaviconURL = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🚀</text></svg>";

        var link = document.createElement('link'),
            oldLink = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');

        link.rel = 'icon';
        link.href = newFaviconURL;

        if (oldLink) {
            document.head.removeChild(oldLink);
        }

        document.head.appendChild(link);
    }, 1000); // Executes the script after a delay of 1000 milliseconds (1 second)
})();

