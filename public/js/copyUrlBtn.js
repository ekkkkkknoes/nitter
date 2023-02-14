var old = window.onload

window.onload = function() {
    if (old) old();
    var btn = document.querySelector(".icon-bird");
    if (btn) btn.onclick = function(event) {
        event.preventDefault();
        navigator.clipboard.writeText(this.href);
    };
};
