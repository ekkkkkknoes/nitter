window.addEventListener("load", function() {
    var btns = document.querySelectorAll(".icon-bird");
    Array.from(btns).forEach(btn => {
        if (btn) btn.onclick = function(event) {
            event.preventDefault();
            navigator.clipboard.writeText(this.href);
        };
    });
}, false);
