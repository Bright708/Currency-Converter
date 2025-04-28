const myApiKey="5a931b3ecde4b26f397780544753083f";
const myApi="https://api.exchangerate.host/convert";
const mFrom=document.getElementById("from");
const mto=document.getElementById("to");
const mamount= document.getElementById("amount");

async function getExchangeRate(from, to, amount) {
    const response=await fetch(`${myApi}?from=${from}&to=${to}&amount=${amount}&access_key=${myApiKey}`);
    const data=await response.json();
    document.getElementById("result").innerHTML=data.result;

    console.log(data);


}
const convert=document.querySelector(".form");
if(convert){
    convert.addEventListener("submit",(event)=>{
        event.preventDefault();
        getExchangeRate(mFrom.value,mto.value,mamount.value);
    })
}

