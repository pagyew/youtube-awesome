<div align="center">
  <img src=".github/assets/cover.png" alt="YouTube Awesome — project illustration" width="100%" />
  <h1>YouTube Awesome</h1>
  <p><strong>A smaller, quieter YouTube feed.</strong></p>
  <p>
    <img src="https://img.shields.io/badge/JavaScript-userscript-f7df1e?style=flat-square" alt="JavaScript: userscript" />
    <img src="https://img.shields.io/badge/status-discontinued-64748b?style=flat-square" alt="status: discontinued" />
    <img src="https://img.shields.io/badge/license-MIT-0f766e?style=flat-square" alt="license: MIT" />
  </p>
  <p><a href="#installation">Installation</a> · <a href="#options">Options</a> · <a href="index.js">Source</a></p>
</div>

---

> [!IMPORTANT]
> This project is no longer supported. The original project notice points users to [UnTrap](https://untrap.app/) as an alternative.

A userscript designed to hide YouTube Shorts, Mixes, and fully watched videos. It injects CSS selectors and exposes switches in the userscript manager's menu.

## Options

| Option  | Designed to hide                                     |
| ------- | ---------------------------------------------------- |
| Shorts  | Shorts navigation, shelves, and matching video items |
| Mixes   | Mix tabs and playlist items                          |
| Watched | Videos whose progress indicator is at 100%           |

All three options are enabled by default and can be changed in the script menu. The script targets desktop and mobile YouTube pages. Since the project is discontinued, its selectors may no longer match YouTube's current interface.

## Installation

The original distribution is on [Greasy Fork](https://greasyfork.org/ru/scripts/496728-youtube-awesome). A compatible userscript manager is required; this is a userscript, not a standalone browser extension package.

## Source guide

- [index.js](index.js) — userscript metadata, selectors, menu options, and style injection.
- [bump.js](bump.js) — userscript version updates.
- [package.json](package.json) — release tooling.

No build step is needed to read or edit the userscript. The npm tooling is for releases.

## License

[MIT](LICENSE). See the license file for the original copyright notice.

<!-- Сообщение сформировано агентом -->
