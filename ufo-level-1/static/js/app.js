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


function mySearch() {
    var input, table, tr, td, i, txtValue;
    input = document.getElementById("datetime").value;
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }



// function mySearch() {
//     var input, table, tr, td, i, txtValue;
//     input = document.getElementById("datetime").value;
//     table = document.getElementById("ufo-table");
//     tr = table.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//           txtValue = td.textContent || td.innerText;
//           if (txtValue > -1) {
//             tr[i].style.display = "";
//           } else {
//             tr[i].style.display = "none";
//           }
//         }
//       }
//     }