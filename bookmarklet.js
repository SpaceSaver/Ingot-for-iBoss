(async function () {
    eval((await (await fetch("https://cdn.jsdelivr.net/gh/FogNetwork/Ingot@latest/ingot.min.js")).text()).replace("window.location.toString().startsWith(\"https://chrome.google.com/webstore\")", "true").replaceAll(/^((?!https:\/\/))chrome\./g, "opener.chrome."));
})();