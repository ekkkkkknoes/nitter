window.addEventListener("load", function() {
    var btns = document.querySelectorAll(".copy-url");
    Array.from(btns).forEach(btn => {
        if (btn) btn.onclick = function(event) {
            event.preventDefault();
            navigator.clipboard.writeText(this.href);
        };
    });
}, false);
