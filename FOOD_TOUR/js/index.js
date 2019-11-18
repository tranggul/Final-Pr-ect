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



// let API = "https://sheetdb.io/api/v1/t0pc7n6jn39d5";
//   function clickComment(){
//     let boxcomment;
// let insert = document.getElementById("insert");
// let comment = document.getElementById("comment");
// let send;
//   comment.remove();
 
//   insert.insertAdjacentHTML('afterbegin', `
//   <div id = 'boxcomment'>
//   <p>Give us your feedback</p>
//   <input id = "inputcomment" type="text">
//   <button id ="send">send</button></div>
//   `)
//   boxcomment =document.getElementById('boxcomment');
//    send = document.getElementById("send");
   

//    console.log(send);
//   send.addEventListener('click',async ()=>{
//   let inputValue = document.getElementById("inputcomment");
//   console.log(inputValue.value);
//   const body = {
//     data:[
//         {
           
//             feedback: inputValue.value
//         }
//     ]
// }
// const options = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body:JSON.stringify(body)
// }

// const connection = await fetch(API, options);
// const data = await connection.json();
// console.log(data);
//   boxcomment.remove();
//   insert.insertAdjacentHTML('afterbegin', `<i id = "comment" class='far fa-comment-dots' onclick = "clickComment()" style='font-size:36px; color: #770000'></i>`)
 
// })
//   }
let comment = document.getElementById('comment');
comment.addEventListener('click',()=>{
  document.location.href = '../html/enterFeedback.html';
})