const reg = /(^[A-Z])[a-z][a-z]+/
var btn = document.getElementById('btn');


btn.addEventListener("click", () => {
    var txt = document.getElementById('txt').value;
    if(reg.test(txt) == true){
        document.getElementById("txt2").innerHTML = "Walidacja poprawna";
    }
    else{
        document.getElementById("txt2").innerHTML = "Walidacja niepoprawna!";
    }

});
