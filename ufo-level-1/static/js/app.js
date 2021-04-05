// G et a reference to the table body 
var tbody = d3.select('tbody');

//  console.log the UFO data from data.js 
console.log(data);


data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value)
    });
});

