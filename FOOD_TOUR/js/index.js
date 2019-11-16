let calculate = document.getElementById("calcu");
let container = document.getElementById("container");
let ip1 = document.getElementById("calcu");

function calculateBMI() {
    let weight = document.getElementById("ip1").value;
    let height = document.getElementById("ip2").value;
    let result = weight / (height * height);


    ip1.parentNode.removeChild(ip1);
    container.insertAdjacentHTML("beforeend",`<button id ="book">Book Tour</button>`);
    document.getElementById('book').addEventListener("click", () => {
        if (result<18.5){
            document.location.href = "../html/pageType1.html";
            console.log(a);
        }else if(result>18.5 && result< 22.9 ){
            document.location.href = "../html/pageType2.html";
        }else if(result>23&& result < 24.9){
            document.location.href = "../html/pageType3.html";
        }else if(result > 25 && result < 29.9){
            document.location.href = "../html/pageType4.html";
        }else if(result > 30 &&result < 34.9){
            document.location.href = "../html/pageType5.html";
        }else{
            document.location.href = "../html/pageType6.html";
        }
   })
}
calculate.addEventListener("click", calculateBMI);

