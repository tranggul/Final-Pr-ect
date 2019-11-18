let feedback = document.getElementById('displayfeedback');
let API = "https://sheetdb.io/api/v1/t0pc7n6jn39d5";
async function displayfeedback(){
const connection = await fetch(API);
const data = await connection.json();
console.log(data);
for(let i = 0 ; i < data.length; i++){
    feedback.insertAdjacentHTML("beforeend", `<div><p>${data[i].name}</p><p>${data[i].feedback}</p></div>
    `);
}
}
displayfeedback();

