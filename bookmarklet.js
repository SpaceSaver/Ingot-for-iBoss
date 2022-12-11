(async function () {
    eval((await (await fetch("https://cdn.jsdelivr.net/gh/SpaceSaver/Ingot-2@latest/ingot.js")).text()));
})();