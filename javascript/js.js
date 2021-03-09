var spelets = 0;
var uzvara = document.getElementById("uzvara");
function create(){
    let x = document.getElementById("izmers").value;
    if(((x*x/2 % 2)) != 0){
        reload();
        alert("Izvēlētā laukuma izmēra kvadrātam jādalās ar divi!");
    }else{
        spelets++;
        let table = document.getElementById("laukums");
        var pari = x*x/2;
        let skaitli = [];

    //    skaitli[0] = 101;

       //pirmā array 
        for(t = 0; t < x*x/2; t++){

            var randsk = Math.floor(Math.random() * 50) + 1;
            while(skaitli.includes(randsk)){
                var randsk = Math.floor(Math.random() * 50) + 1;
            }
            skaitli[t] = randsk;
        }

    //katram pirmā array skaitlim izveidoju bināro skaitli un ieliku visus savā array
        let biskaitli= [];
        for (t = 0; t < (x*x)/2; t++){
            biskaitli[t] = dec2bin(skaitli[t]);
        }

        let koparray = [];
        for(var i = 0; i < x*x/2; i ++){
            koparray[i] = skaitli[i]
        }
        for(var i = 0; i<x*x/2; i++){
            koparray[i+(x*x/2)] = biskaitli[i];
        }
        shuffleArray(koparray);



        for(let i =0; i< x; i++){

            let row = table.insertRow(i);        
            for(let j =0; j< x; j++){

                let button = document.createElement('BUTTON');
                button.classList.add("grid");

                //document.getElementsByClassName('grid').style.color = 'black';
                button.id = koparray[x*i+j];


                var text = document.createTextNode(koparray[x*i+j]);
                button.appendChild(text);

                let cell = row.insertCell(j);
                cell.appendChild(button);

                var pirma;
                var otra;
                var pogasspiesana = 0;

                button.onclick=()=>{

                    if(button.style.backgroundColor == 'green'){
                        
                    }else{
                    
                    button.style.color = "white";
                    setTimeout(function(){
                        button.style.color = "black";    
                    }, 3000)
                    
                    pogasspiesana++;
                    if(pogasspiesana == 1){
    //                  document.getElementById(pirma).style.backgroundColor = 'black';
    //                  document.getElementById(otra).style.backgroundColor = 'black';
                        pirma = button.id;
                    }else if(pogasspiesana == 2){
                        otra = button.id;  
                        //alert(otra);
                        salidzinasana(pirma,otra);
                        pogasspiesana =0;
                        
                        if(uzminetie == pari){
                            setTimeout(function(){
                                var laiks = time.toString();
                                window.location.href = "uzvara.html";
                                alert("Jūsu laiks ir: " +laiks); 
                            }, 1500)
                        }
                    }

    //                else if(pogasspiesana >2){
    //                    pogasspiesana =0;
    //                    //button.parentNode.parentNode.parentNode.remove();
    //                }

                    }
                }
            }   
        }
    }
}
function salidzinasana(pirma,otra){
    pirmastr = pirma.toString();
    
    if(pirmastr.length <= 2& dec2bin(pirma) == otra){
        document.getElementById(pirma).style.backgroundColor = 'green';
        document.getElementById(otra).style.backgroundColor = 'green';
        uzminetie++;
        console.log(uzminetie);
    }else if(dec2bin(otra) == pirma){
        document.getElementById(pirma).style.backgroundColor = 'green';
        document.getElementById(otra).style.backgroundColor = 'green';
        uzminetie++;
        console.log(uzminetie);
    }
    else{
        document.getElementById(pirma).style.backgroundColor = 'red';
        document.getElementById(otra).style.backgroundColor = 'red';
        console.log(uzminetie);
        setTimeout(function(){
        document.getElementById(pirma).style.backgroundColor = 'black';
        document.getElementById(otra).style.backgroundColor = 'black';
        }, 1000)
    }
}

var reply_click = function()
{
    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
}

//$(document).ready(function() {
// 
// $("#button1").click(function(event){
//  <b>alert($(this).prop("value"));</b>
// });
//  
// $button.click(function(event){
//  <b>alert($(this).prop("name"));</b>
// });

function dec2bin(dec){
    var str = (dec >>> 0).toString(2);
    var gar = str.length;
    for(var i = 0; i < 6-gar; i ++){
        str = "0"+str;
    }
    return str;
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

    var timer = document.getElementById("timer");
    let spelet = document.getElementById("sakt");
    let reset = document.getElementById("reset");
    let izmerss = document.getElementById("izmers");
    let izvelies = document.getElementById("izvelies");
    var time = 0;
    var intervals;
    var uzminetie = 0;
    
    
    function tiritsakt(){
//        if(spelets>0){
//          button.parentNode.parentNode.parentNode.remove();  
//        }
        spelet.remove();
        create();
        izmerss.remove();
        izvelies.remove();
        intervals = setInterval(function(){
            time++;
            timer.innerHTML = time +"s";
        }, 1000);
    }
    function reload(){
        location.reload();
    }
    
    spelet.addEventListener("click", tiritsakt);
    reset.addEventListener("click", reload);
    
    

  