let send = document.getElementById('send');
let API = "https://sheetdb.io/api/v1/t0pc7n6jn39d5";
let count=0;
send.addEventListener('click',async ()=>{
    count  = count+1;
    if(count>0 && count < 2){
        document.getElementById('camon').insertAdjacentHTML('afterbegin', `<p>
        Cảm ơn bạn đã có những đóng góp cho trang web của chúng tôi. Chúng tôi sẽ sớm hoàn thiện để cung cấp những trải nghiệm tốt hơn.
    </p>`);
console.log("a");
    }
      let name = document.getElementById("name");
      let feedback = document.getElementById('userfeedback');
     
      const body = {
        data:[
            {
                name: name.value,
                feedback: feedback.value,
            }
        ]
    }
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(body)
    }
    
    const connection = await fetch(API, options);
    const data = await connection.json();
    console.log(data);
   
     
    })
