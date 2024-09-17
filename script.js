// Making An Object

var serverObj = {
      name: "Maharana Pratap Singh",
      id: "86549",
      phonenumber: "0342-678379-7",
      designation: "Associate Director"
}

var myJSON = JSON.stringify(serverObj);

var newObj = JSON.parse(myJSON);
document.getElementById("result").innerHTML = newObj.name;
 
async function add(a,b) {
       let response = await a + b;
       display(response);
}
function display(some) {
document.getElementById("result").innerHTML = some;

}
add(9,67);

function myDisplayer(value) {
      document.getElementById("myfunction").innerHTML = value;

}

function myClaculator(num1, num2, myfunc) {
     let sum = num1 + num2;
     myfunc(sum);
}

myClaculator(5, 5, myDisplayer);



 


      


