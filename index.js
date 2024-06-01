// ==UserScript==
// @name         YouTube Shortsless
// @namespace    https://github.com/pagyew
// @version      0.1.0
// @description  Removes everything related to shorts on YouTube
// @author       Vladislav Tsepilov (https://github.com/pagyew)
// @license      MIT
// @homepageURL  https://github.com/pagyew/youtube-shortsless
// @supportURL   https://github.com/pagyew/youtube-shortsless
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const selectors = [
      'yt-chip-cloud-chip-renderer:has(yt-formatted-string[title*="shorts" i])',
      'ytd-mini-guide-entry-renderer:has(a#endpoint[title="shorts" i])',
      'ytd-guide-entry-renderer:has(a#endpoint[title="shorts" i])',
      'ytd-rich-section-renderer:has(ytd-rich-shelf-renderer)',
      'ytd-item-section-renderer:has(ytd-reel-shelf-renderer)',
      'ytd-video-renderer:has(a#thumbnail[href*="shorts" i])',
      'yt-tab-shape[tab-title="shorts" i]',
      'ytd-reel-shelf-renderer'
  ]

  function removeElement(el) {
    el.remove()
  }

  function removeElementBySelector(target, selector) {
    target.querySelectorAll(selector).forEach(removeElement)
  }

  function searchAndRemove({ target }) {
    selectors.forEach(removeElementBySelector.bind(null, target))
  }

  function callback(mutations) {
    mutations.forEach(searchAndRemove)
  };

  function onLoad() {
      const observer = new MutationObserver(callback)

      observer.observe(
        document.body,
        {
          childList: true,
          subtree: true
        }
      )
  }

  window.addEventListener('load', onLoad)
})();
