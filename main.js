var myArray = [
    {
        'name': 'Calvin', 'goals': '13', 'assists': '11', 'position': 'GK'
    },
    {
        'name': 'Mo', 'goals': '1', 'assists': '1', 'position': 'ST'
    },
    {
        'name': 'Jodi', 'goals': '1', 'assists': '1', 'position': 'MID'
    },
    {
        'name': 'Diego', 'goals': '0', 'assists': '0', 'position': 'MID'
    },
    {
        'name': 'Elan', 'goals': '5', 'assists': '1', 'position': 'ST'
    },
    {
        'name': 'Jesse', 'goals': '12', 'assists': '9', 'position': 'MID'
    },
    {
        'name': 'Matthew', 'goals': '1', 'assists': '3', 'position': 'DEF'
    },
    {
        'name': 'Rynell', 'goals': '19', 'assists': '1', 'position': 'ST'
    },
    {
        'name': 'Tumi', 'goals': '12', 'assists': '5', 'position': 'MID'
    },
    {
        'name': 'Basla', 'goals': '7', 'assists': '3', 'position': 'MID'
    },
    {
        'name': 'Ethan', 'goals': '0', 'assists': '0', 'position': 'RW'
    },
    {
        'name': 'Jordan', 'goals': '6', 'assists': '2', 'position': 'RW'
    },
    {
        'name': 'Nahum', 'goals': '0', 'assists': '1', 'position': 'DEF'
    },
    {
        'name': 'Nathan', 'goals': '1', 'assists': '0', 'position': 'ST'
    },
    {
        'name': 'Latham', 'goals': '10', 'assists': '3', 'position': 'RW'
    },
    {
        'name': 'Kirwan', 'goals': '2', 'assists': '1', 'position': 'ST'
    },
    {
        'name': 'Cullen', 'goals': '2', 'assists': '4', 'position': 'MID'
    },
    {
        'name': 'Luke', 'goals': '0', 'assists': '0', 'position': 'DEF'
    },
    {
        'name': 'Matthew S', 'goals': '1', 'assists': '1', 'position': 'DEF'
    },
    {
        'name': 'Anele', 'goals': '1', 'assists': '0', 'position': 'GK'
    },
    {
        'name': 'Dillon', 'goals': '0', 'assists': '2', 'position': 'DEF'
    },
    {
        'name': 'Lyndon', 'goals': '5', 'assists': '6', 'position': 'DEF'
    },
    {
        'name': 'Leighton', 'goals': '15', 'assists': '6', 'position': 'LW'
    },
    {
        'name': 'Adrian', 'goals': '7', 'assists': '3', 'position': 'LW'
    },
 
]

buildTable(myArray) 
 
function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''

    for (var i = 0; i < data.length; i++) { 
        var row = `<tr>
                   <td>${data[i].name}</td>
                   <td>${data[i].goals}</td>
                   <td>${data[i].assists}</td>
                   <td>${data[i].position}</td>
                   </tr>`
        table.innerHTML += row
    } 
}  


$('th').on('click', function () {
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)
 
    if (order == 'desc') {
        $(this).data('order', 'asc')
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    } else {
        $(this).data('order', 'desc')
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'
    }
    $(this).html(text) 
    buildTable(myArray) 
}) 

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
} 