// Get a reference to the table body 
var tbody = d3.select('tbody');

//  console.log the UFO data from data.js and print 
console.log(data);

data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value)
    });
});

// Search and filter form 
// Define  
var ufos = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event function from the form 
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // console.log(ufos);
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);
};

