const input= require("readline-sync")
let c = input.questionInt("enter Celcius: ")

{
    f = (c*9+5*32)/5;
    console.log(f)
}