const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


const display = document.getElementById("display");


appendToDisplay = function appendToDisplay(input){
     display.value += input;
 };

 clearDisplay = function clearDisplay(){
    display.value = "";
};

 calculate = function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error"
    }
}
//  function appendToDisplay(input){
//      display.value += input;
//  };

//  function clearDisplay(){
//     display.value = "";
// };

//  function calculate(){
//     try{
//         display.value = eval(display.value);
//     }

//     catch(error){
//         display.value = "Error"
//     }
// }

