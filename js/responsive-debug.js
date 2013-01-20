// Debug Information
(function() {

    var doc = document,
        dimensionsDiv = doc.createElement("div");

    dimensionsDiv.className = "dimensions";
    dimensionsDiv.setAttribute('data-dimensions', 'w: ' + window.innerWidth + ' h: ' + window.innerHeight);

    doc.body.appendChild(dimensionsDiv);

    window.onresize = function(e) {
        dimensionsDiv.setAttribute('data-dimensions', 'w: ' + window.innerWidth + ' h: ' + window.innerHeight);
    }

}());
