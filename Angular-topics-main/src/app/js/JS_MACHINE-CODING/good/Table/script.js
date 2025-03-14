
const tableBody = document.getElementById('table-body');
var sortCofficient = 1;
const tableData=[
    {
        name: 'Abhi', age:25,
    },
    {
        name: 'Hritik', age: 45,
    },
    {
        name: 'Tom', age: 38,
    },
    {
        name: 'Cewton', age: 57,
    },
]

function renderTable(tableData){
    bodyData=''
    tableData.forEach((data) => {
        bodyData = bodyData +   ` <tr>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                </tr>`
    })
    tableBody.innerHTML=bodyData;
}
function sortColumn() {
    tableData.sort((a,b) => {
        return (a.age - b.age) * sortCofficient
    })
    sortCofficient = sortCofficient*-1;
    renderTable(tableData)
}
renderTable(tableData)