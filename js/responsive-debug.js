// Debug Information
var dimensionsDiv = document.createElement('div');

dimensionsDiv.setAttribute('class', 'dimensions');
dimensionsDiv.setAttribute('data-dimensions', 'w: ' + window.innerWidth + ' h: ' + window.innerHeight); 

document.body.appendChild(dimensionsDiv);

window.onresize = function(event) {
  dimensionsDiv.setAttribute('data-dimensions', 'w: ' + window.innerWidth + ' h: ' + window.innerHeight); 
  }