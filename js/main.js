(function () {
    const el = document.getElementById("lastUpdated");
    if (el) {
        const d = new Date();
        el.textContent = d.toISOString().slice(0, 10);
    }
})();
