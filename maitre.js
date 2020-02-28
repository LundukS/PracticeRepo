function calculate(){
    var total = document.getElementById("total").value;
    var rate = document.getElementById("ro").value;
    var tip = parseFloat(total)*parseFloat(ro/100);
    var tax = parseFloat(total)*0.0550;
    var grand = parseFloat(total)+(tip)+(tax);
if(!isNaN(grand)){
    document.getElementById("t").innerHTML = "$ "+tip.toFixed(3);
    document.getElementById("sam").innerHTML = "$ "+tax.toFixed(3);
    document.getElementById("sum").innerHTML = "$ "+grand.toFixed(3);
}

}