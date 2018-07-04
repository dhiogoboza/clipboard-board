function enableAll(selector) {
    var clipboard = new Clipboard(selector);
    
    $(selector).on("change", function() {
        
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    enableAll("#child .btn");
});

