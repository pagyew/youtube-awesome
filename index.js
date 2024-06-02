// ==UserScript==
// @name         YouTube Shortsless
// @namespace    https://github.com/pagyew
// @version      0.2.0
// @description  Removes everything related to shorts on YouTube
// @author       Vladislav Tsepilov (https://github.com/pagyew)
// @license      MIT
// @homepageURL  https://github.com/pagyew/youtube-shortsless
// @supportURL   https://github.com/pagyew/youtube-shortsless
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const selectors = [
      // Menus
      'ytm-pivot-bar-item-renderer:has(.pivot-shorts)',
      'ytd-mini-guide-entry-renderer:has(a#endpoint[title="shorts" i])',
      'ytd-guide-entry-renderer:has(a#endpoint[title="shorts" i])',

      // Tabs
      'yt-chip-cloud-chip-renderer:has(yt-formatted-string[title*="shorts" i])',
      'yt-tab-shape[tab-title="shorts" i]',

      // Sections
      'ytm-reel-shelf-renderer',
      'ytd-reel-shelf-renderer',
      'ytm-item-section-renderer:has(.big-shorts-singleton)',
      'ytd-rich-section-renderer:has(ytd-rich-shelf-renderer)',

      // Videos
      'ytd-video-renderer:has(a#thumbnail[href*="shorts" i])',
  ];

  function removeElement(el) {
    el.remove();
  };

  function removeElementBySelector(target, selector) {
    target.querySelectorAll(selector).forEach(removeElement);
  };

  function searchAndRemove({ target }) {
    selectors.forEach(removeElementBySelector.bind(null, target));
  };

  function callback(mutations) {
    mutations.forEach(searchAndRemove);
  };

  searchAndRemove({ target: document.body });

  const observer = new MutationObserver(callback);

  observer.observe(
    document.body,
    {
      childList: true,
      subtree: true
    }
  );
})();
