var old = window.onload

window.onload = function() {
    if (old) old();
    var btns = document.querySelectorAll(".icon-bird");
    Array.from(btns).forEach(btn => {
        if (btn) btn.onclick = function(event) {
            event.preventDefault();
            navigator.clipboard.writeText(this.href);
        };
    });
};
