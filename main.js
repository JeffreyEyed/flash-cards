function hiddenAnswer() {
    const hide = document.getElementById("answer");
    if(hide.style.display === "block") {
      hide.style.display = "none";
    }else{
        hide.style.display = "block";
      } 
}

function add(x,y){
    z = x + y
    document.getElementById("num1").innerHTML = x;
    document.getElementById("symbol").innerHTML = "+";
    document.getElementById("num2").innerHTML = y;
    document.getElementById("answer").innerHTML = z;
    console.log("+")

}

function subtract(x,y){
    z = x - y
    if(x < y){
        return randomItem(items)(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
    }
    document.getElementById("num1").innerHTML = x;
    document.getElementById("symbol").innerHTML = "-";
    document.getElementById("num2").innerHTML = y;
    document.getElementById("answer").innerHTML = z;
    console.log("-")
}

function multiply(x,y){
    z = x * y
    document.getElementById("num1").innerHTML = x;
    document.getElementById("symbol").innerHTML = "x";
    document.getElementById("num2").innerHTML = y;
    document.getElementById("answer").innerHTML = z;
    console.log("*")
}

function divide(x,y){
    z = x / y
    if(y === 0){
        return randomItem(items)(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10))
    }else if(x < y){
        return randomItem(items)(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10))
    }else if((z - Math.floor(z)) !== 0){
        return randomItem(items)(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10))
    }
    document.getElementById("num1").innerHTML = x;
    document.getElementById("symbol").innerHTML = "÷";
    document.getElementById("num2").innerHTML = y;
    document.getElementById("answer").innerHTML = z;
    console.log("/")
}

function randomItem(items){
return items[Math.floor(Math.random()*items.length)]
}
const items = [add, subtract, multiply, divide];

randomItem(items)(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10))

//console.log(randomItem(items)(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)))

//console.log(randomItem(items))
