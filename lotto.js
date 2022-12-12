
let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let input3=document.getElementById("input3")

let displayGen= document.getElementById("display-gen")
let displayRand= document.getElementById("display-rand")

let texter= document.getElementById("texter")
let result= document.getElementById("result")
let formsec= document.forms[0]


// function inpSubmit(){
//     const valueinp=[]
//     valueinp[0]=input1.value
//     valueinp[1]=input2.value
//     valueinp[2]=input3.value

// displayGen.innerHTML=valueinp;
// console.log(typeof(valueinp))
// console.log(typeof(displayGen))
// }

formsec.addEventListener('submit',(evant)=>{
    event.preventDefault();
    const valueinp=[];
valueinp[0]=input1.value
valueinp[1]=input2.value
valueinp[2]=input3.value
displayGen.innerHTML=valueinp;

const generate =[]
for(let i=0;i<6;i++){
    let random = Math.floor(Math.random()*100)
    generate[i]=random
    displayRand.innerHTML = generate
    console.log(random)
}
if(displayGen.innerHTML === ",,"|| displayGen.innerHTML === 0){
    texter.innerHTML = "input your values, "
    texter.style.color = "red"
    texter.style.fontSize = "50px"
    texter.style.textAlign = "center"
}else
if(
    generate.includes(valueinp[0])&&
    generate.includes(valueinp[1])&&
    generate.includes(valueinp[2])){
        texter.innerHTML = "Congratulation, You win!"
        texter.style.color ="green"
        texter.style.fontSize = "50px"
        texter.style.textAlign = "center"
    }else{
    texter.innerHTML = "oops!, You loose"
    texter.style.color ="red"
        texter.style.fontSize = "50px"
        texter.style.textAlign = "center"
    }
    if(valueinp[0]==""&& valueinp[1]=="" && valueinp[2]==""){
        displayRand.style.display ="none"
    }else{
        displayRand.style.display = "inline-block"
    }
    if(valueinp[0].length >=3 || valueinp[1].length >=3 || valueinp[2].length>=3){
        texter.innerHTML = "input must not be more than 2 digits each"
        displayRand.style.display ="none"
    }else{

    }
})

//     for(let i=0;i<=6;i++){
//         let generateNum = Math.floor(Math.random()*10)
//         generate[i]=generateNum
//     }
//     displayRand.innerHTML =generate
// })
// formsection.addEventListener('submit',(event)=>{  
//     event.preventDefault();
//     const numbers = []
//     numbers[0]=document.getElementById('input1').value;
//     numbers[1]=document.getElementById('input2').value;
//     numbers[2]=document.getElementById('input3').value;
//     displayNums.innerHTML = number
//     const generate =[]
//     for (let i =0;i<6;i++){
//         let random = Math.floor(Math.random()*10)
//         generate[i]=random
//         displayGen.innerHTML = generate
//         console.log(random)
//     }
//     if (numbers.length==2||numbers.length==3){
//         const score =[]
//         let c=0
//         for(let c=0;c<numbers.length;c++){
//             if(generate.includes(parseInt(numbers[c]))){
//                 score[c]=numbers[c];
//                 c++
//             }
//             if (displayNums.length ==2 && score.length==2){
//                 error.innerHTML = "congratulation, You Win!"
//                 error.style.color = "green"
//                 error.style.fontsize = "50px"
//                 error.style.textAlign = "center"
//             }
//         }
//     }
//       }) 
//       if (displayNums.innerHTML ===",,"|| displayNums.innerHTML === 0){
//         error.innerHTML = "input your value"
//         error.innerHTML.style.color = "red"
//         error.innerHTML.style.fontsize = "50px"
//         error.innerHTML.style.textAlign = "center"
        
//       } else{
// if (numbers[0]=="" && numbers[1]=="" && numbers[2]==""){
//     displaygen.style.display = "none"
// }else{
//     displaygen.style.display = "inline-block"
// }
// if(numbers[0].length >=3 || numbers[1].length >=3 || numbers[2]){
//     error.innerHTML = "input must not be more than 2 digits each"
//     display.displaygen.style.display ="none"
// }else{
    
// }
//     }
      
     