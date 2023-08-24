let output;
const takeInput =()=>{
let inNum =Array.from(document.getElementsByClassName("btnIn"));
    inNum.forEach(e => {
        e.addEventListener("click",()=>{
            // console.log(e.innerHTML);
            document.getElementById("output").innerHTML += e.innerHTML;
            output = document.getElementById("output").innerHTML;
            console.log(output);
        });
    })
}
takeInput();

// All clear function
const allClear = ()=>{
    document.getElementById("output").innerHTML = "";
}

// Delete function
const userDelete = ()=>{
    let outString = document.getElementById("output").innerHTML;
    outString = outString.slice(0,outString.length - 1);
    document.getElementById("output").innerHTML = outString;
    console.log(outString);
}

// operater button function
const addFunc = (element)=>{
    element.addEventListener("click",()=>{
        let out = document.getElementById("output").innerHTML;
        let lastChar = document.getElementById("output").innerHTML.charAt(out.length - 1);
        let str = "+-÷×";
        if (out !="" && !(str.includes(lastChar))) {
            let condition = out.includes(str); 
            if (condition) {
                console.log("yes");
                evaluate();
            } else { 
                document.getElementById("output").innerHTML += element.innerHTML;
                console.log(element.innerHTML);
            }
        }
    })

}

// evaulating result
const evaluate = ()=>{
    let evalString = document.getElementById("output").innerHTML;
    let lastChar = parseInt(evalString.charAt(evalString.length - 1));
    if (evalString != "" && Number.isInteger(lastChar) ) {    
        evalString = evalString.replaceAll("÷","/");
        evalString = evalString.replaceAll("×","*");
        let ans = eval(evalString);
        document.getElementById("output").innerHTML = ans;
        console.log(ans);
    }
}

// implementing function button
let btn =Array.from(document.getElementsByClassName("btnControls"));
btn.forEach(element => {
    let caseMatch = element.innerHTML;
    switch (caseMatch) {
        case "AC":
          element.addEventListener("click",allClear);  
            break;
        case "DEL":
          element.addEventListener("click",userDelete);  
            break;
        case "×":
        case "÷":
        case "+":
        case "-": 
            addFunc(element);
            break;
        case "=":
          element.addEventListener("click",evaluate);  
            break;

    }
    // console.log(element.innerHTML);
});
