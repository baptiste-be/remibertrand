document.addEventListener("DOMContentLoaded", () => {
    const menu = document.createElement("div");
    menu.id = "menu-contextuel";
    menu.textContent = "© 2026 Rémi Bertrand";
    document.body.appendChild(menu);

    Object.assign(menu.style, {
        position: "absolute",
        background: "rgba(0,0,0,0.55)",
        color: "white",
        padding: "6px 12px",
        borderRadius: "6px",
        display: "none",
        fontSize: "12px",
        fontFamily: "Arial, sans-serif",
        backdropFilter: "blur(3px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        zIndex: "9999",
        userSelect: "none"
    });

    document.addEventListener("contextmenu", e => {
        if (e.target.closest("#modal-3d")) return;
        e.preventDefault();
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
        menu.style.display = "block";
    });

    document.addEventListener("click", () => {
        menu.style.display = "none";
    });

    document.addEventListener("wheel", () => {
        menu.style.display = "none";
    });

    document.addEventListener("scroll", () => {
        menu.style.display = "none";
    });

    document.addEventListener("touchmove", () => {
        menu.style.display = "none";
    });

    document.addEventListener("dragstart", e => {
        e.preventDefault();
    });

    document.addEventListener("drop", e => {
        e.preventDefault();
    });
});
