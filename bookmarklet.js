(async function () {
    eval((await (await fetch("https://cdn.jsdelivr.net/gh/SpaceSaver/Ingot-2@latest/ingot.js")).text()).replace("window.location.toString().startsWith(\"https://chrome.google.com/webstore\")", "true").replaceAll(/^((?!https:\/\/))chrome\./g, "opener.chrome."));
})();