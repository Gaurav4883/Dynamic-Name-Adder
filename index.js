// ----------------------------------------------------------------------------------------------------------//
function secondUpdate() {
    console.log('Adding..........................')
    names = document.getElementById('naming').value;
    if (localStorage.getItem('itemsJson') == null) {
        Array1 = [];
        Array1.push(names);
        localStorage.setItem('itemsJson', JSON.stringify(Array1))
    }
    else {
        StringArray = localStorage.getItem('itemsJson');
        Array1 = JSON.parse(StringArray)
        Array1.push(names)
        localStorage.setItem('itemsJson', JSON.stringify(Array1))

    }
    update();
}

//---------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------//

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        Array1 = [];
        localStorage.setItem('itemsJson', JSON.stringify(Array1))
    } else {
        StringArray = localStorage.getItem('itemsJson');
        Array1 = JSON.parse(StringArray)
            ;
    }
    // Send our data to the table
    tablebody = document.getElementById("tableofjs")
    let stringxy = "";
    Array1.forEach((element, index) => {
        stringxy +=
            `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element}</td>
                    <td><button class="btn btn-primary" id="del" onclick="deleted(${index})" >Delete</button></td>
                    </tr>`;
    });
    tablebody.innerHTML = stringxy;
}
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//



// This code is to execute the event listener 
let add = document.getElementById("submitss");
add.addEventListener('click', secondUpdate)
// update call helps in showing the data even if browser is refreshed
update();


// Function to delete the name and passed to on click method in above code of table in stringxy
function deleted(nameIndex) {
    console.log("deleted index:", nameIndex)
    StringArray = localStorage.getItem('itemsJson');
    Array1 = JSON.parse(StringArray);
    Array1.splice(nameIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(Array1));
    update();
}