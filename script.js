var percent, bill, people;
function getPercent(n){
    percent = n/100;
}

function getBill(b){
    bill = b;
}

function calcTip(){
    people = document.getElementById("num-people").value;
    console.log(people);
    if(people == 0){
        //alert("N/A");
        document.getElementById("people-zero").innerHTML = "Can't be Zero!";
    }
    else{
        document.getElementById("people-zero").innerHTML = "";
        var person = (bill * percent) /people;
        document.getElementById("tip-amount").innerHTML = "$" + person.toFixed(2);
        var total = (person + bill/people);
        document.getElementById("total-amount").innerHTML = "$" +  total.toFixed(2);
    }
    
}