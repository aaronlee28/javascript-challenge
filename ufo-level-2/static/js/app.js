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
form.on("submit",runEnter);

// Complete the event function from the form 
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement2.property("value");
    var inputElement3 = d3.select("#state");
    var inputValue3 = inputElement3.property("value");
    var inputElement4 = d3.select("#country");
    var inputValue4 = inputElement4.property("value");
    var inputElement5 = d3.select("#shape");
    var inputValue5 = inputElement5.property("value");
    console.log(inputValue);
    // console.log(ufos);
    var filteredData = ufos.filter(ufo => (inputValue ===""|| ufo.datetime === inputValue)&&
                                          (inputValue2 ===""|| ufo.city === inputValue2)&&
                                          (inputValue3 ===""|| ufo.state === inputValue3)&&
                                          (inputValue4 ===""|| ufo.country === inputValue4)&&
                                          (inputValue5 ===""|| ufo.shape === inputValue5));
    console.log(filteredData);
    

    var tbody = d3.select('tbody');
    tbody.html("");
    filteredData.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        });
    });
}
