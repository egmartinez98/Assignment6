function showText() {
    "use strict";
    document.getElementById("hidden").setAttribute("class", "form-group show");
}

function hideText() {
    "use strict";
    document.getElementById("hidden").setAttribute("class", "form-group hidden");
}

$("#add1").change(function () {
    "use strict";
    var other = $(this).find("option:selected").attr("id");

    switch (other) {
    case "other":
        showText();
        break;
    default:
        hideText();
    }
});

/*above code is used for showing and hiding other address option*/


var i;

var input = [document.querySelector(".fname"), /*0*/
             document.querySelector(".street"), /*1*/
             document.querySelector(".city"), /*2*/
             document.querySelector(".state"), /*3*/
             document.querySelector(".zip"),  /*4*/
             document.querySelector(".phone"), /*5*/
             document.querySelector(".email")];



function check() {
    "use strict";

    /*from here*/
    var num = /[0-9]/.test(input[0].value);
    window.console.log(num);
    if (num === true) {
        input[0].style.border = "1px solid red";
        input[0].focus();
        window.alert("Only secret agents have numbers in there name's");
        stop.stopImmediatePropagation();
      //  return false;
        
    }
        /*to here is to make sure no numbers are in name*/
    
    
    
    
    
    for (i = 0; i < input.length; i++) {
        
        if (input[i].value === "") {
            input[i].style.border = "1px solid red";
            var ensure = window.alert("Please ensure all areas are filled");
            input[i].focus();
            ensure.stopImmediatePropagation();
        //    return false;
        }
        
        if (input[i].value !== "") {
            input[i].style.border = "";
            
        }
    }
        /*code from here*/
    var re = /^\d{5}(?:[-\s]\d{4})?$/.test(input[4].value);
        
    if (re === false) {
        window.alert(input[4].value + " is not a valid zip code");
        input[4].focus();
        input[4].style.border = "1px solid red";
        stop.stopImmediatePropagation;
      //  return false;
    }
    /*to here is to ensue zip code is valid*/
    
    /*code from here*/
    var rex = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/.test(input[5].value);
    if (rex === false) {
        window.alert(input[5].value + " is not a valid phone number");
        input[5].focus();
        input[5].style.border = "1px solid red";
        stop.stopImmediatePropagation;
        
      //  return false;
    }
        /*to here is to validate phone number*/
          
    var j = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(input[6].value);
    if (j === false) {
        window.alert(input[6].value + " is not a valid email.");
        input[6].focus();
        input[6].style.border = "1px solid red";
        stop.stopImmediatePropagation;
      //  return false;
    }
    
    var state = /^((A[LKSZR])|(C[AOT])|(D[EC])|(F[ML])|(G[AU])|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EHDAINSOT])|(N[EVHJMYCD])|(MP)|(O[HKR])|(P[WAR])|(RI)|(S[CD])|(T[NX])|(UT)|(V[TIA])|(W[AVIY]))$/.test(input[3].value);
    if (state === false) {
        window.alert(input[3].value + " is not a state");
        input[3].focus();
        input[3].style.border = "1px solid red";
        stop.stopImmediatePropagation;
      //  return false;
    }
    
}
document.getElementById("finished").addEventListener("click", function () {
    "use strict";
    check();
    
    var x = window.confirm("Are you sure your done?");
    if (x === true) {
       document.getElementById("bill").setAttribute("class", "show"); 
    }
}, false);

document.getElementById("sub2").addEventListener("click", function () {
    "use strict";
    check();
    
}, false);

/*The above code ensures the user enters a value*/


   


/*Part 2 – Build Your Order*/
var size_cost = {
    hand: {size: "Small", cost: "($9.99)"},
    hand2: {size: "Medium", cost: "($12.99)"},
    hand3: {size: "Large", cost: "($14.99)"},
    thin: {size: "Medium", cost: "($11.99)"},
    thin1: {size: "Large", cost: "($13.99)"},
    new: {size: "Large", cost: "($16.99)"},
    new1: {size: "Extra Large", cost: "($19.99)"},
    gluten: {size: "Small", cost: "($10.99)"}
};




var i;
var radios = document.forms["ray"].elements["rad"];

for (i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
        "use strict";
        document.getElementById("size").setAttribute("class", "form-group show");
        
        
        if (this.value === "Hand Tossed") {
            var x = document.getElementById("sel");
            x.remove(x.getElementsByTagName("option"), x.remove(x.getElementsByTagName("option")), x.remove(x.getElementsByTagName("option")), x.remove(x.getElementsByTagName("option")));
            
            
            var p1 = document.createElement("option");
            var n1 = document.createTextNode("Select an Option");
            p1.appendChild(n1);

            var el1 = document.getElementById("sel");
            el1.appendChild(p1);
            
            
            var para = document.createElement("option");
            var node = document.createTextNode(size_cost.hand.size + size_cost.hand.cost);
            para.appendChild(node);

            var ele7 = document.getElementById("sel");
            ele7.appendChild(para).id= "hs";
            
            var para1 = document.createElement("option");
            var node1 = document.createTextNode(size_cost.hand2.size + size_cost.hand2.cost);
            para1.appendChild(node1);

            var element1 = document.getElementById("sel");
            element1.appendChild(para1).id= "hm";
            
            var para2 = document.createElement("option");
            var node2 = document.createTextNode(size_cost.hand3.size + size_cost.hand3.cost);
            para2.appendChild(node2);

            var element = document.getElementById("sel");
            element.appendChild(para2).id= "hl";
            
        }
        
        if (this.value === "Gluten Free") {
            var y = document.getElementById("sel");
            y.remove(y.getElementsByTagName("option"), y.remove(y.getElementsByTagName("option"), y.remove(y.getElementsByTagName("option")), y.remove(y.getElementsByTagName("option"))));
            
            var p2 = document.createElement("option");
            var n2 = document.createTextNode("Select an Option");
            p2.appendChild(n2);

            var el2 = document.getElementById("sel");
            el2.appendChild(p2);
            
            var para3 = document.createElement("option");
            var node3 = document.createTextNode(size_cost.gluten.size + size_cost.gluten.cost);
            para3.appendChild(node3);

            var el = document.getElementById("sel");
            el.appendChild(para3).id= "gs";
        }
        
        if (this.value === "Thin Crust") {
            var z = document.getElementById("sel");
 z.remove(z.getElementsByTagName("option"), z.remove(z.getElementsByTagName("option"), z.remove(z.getElementsByTagName("option")), z.remove(z.getElementsByTagName("option"))));
            
            var p3 = document.createElement("option");
            var n3 = document.createTextNode("Select an Option");
            p3.appendChild(n3);

            var el3 = document.getElementById("sel");
                   el3.appendChild(p3);
            
            var para4 = document.createElement("option");
            var node4 = document.createTextNode(size_cost.thin.size + size_cost.thin.cost);
            para4.appendChild(node4);

            var el = document.getElementById("sel");
            el.appendChild(para4).id= "tm";
            
            var para5 = document.createElement("option");
            var node5 = document.createTextNode(size_cost.thin1.size + size_cost.thin1.cost);
            para5.appendChild(node5);

            var el = document.getElementById("sel");
            el.appendChild(para5).id= "tl";
        }
        
        if (this.value === "New York Style") {
            var a = document.getElementById("sel");
 a.remove(a.getElementsByTagName("option"), a.remove(a.getElementsByTagName("option"), a.remove(a.getElementsByTagName("option")), a.remove(a.getElementsByTagName("option"))));
            
            var p4 = document.createElement("option");
            var n4 = document.createTextNode("Select an Option");
            p4.appendChild(n4);

            var el4 = document.getElementById("sel");
                   el4.appendChild(p4);
            
            var para6 = document.createElement("option");
            var node6 = document.createTextNode(size_cost.new.size + size_cost.new.cost);
            para6.appendChild(node6);

            var el = document.getElementById("sel");
            el.appendChild(para6).id= "nl";
            
            var para7 = document.createElement("option");
            var node7 = document.createTextNode(size_cost.new1.size + size_cost.new1.cost);
            para7.appendChild(node7);

            var el = document.getElementById("sel");
            el.appendChild(para7).id= "nel";
            
            
        }
        document.getElementById("d").disabled = false;
    };
}

/*the above code is to comunicate radio button waith drop down menu*/



function hs() {
    document.getElementById("amount").innerHTML = "Total: " + size_cost.hand.cost;
}

function hm() {
    document.getElementById("amount").innerHTML = "Total: " + size_cost.hand2.cost;
}

function hl() {
    document.getElementById("amount").innerHTML = "Total " + size_cost.hand3.cost;
}

function tm() {
    document.getElementById("amount").innerHTML = "Total " + size_cost.thin.cost;
}

function tl() {
    document.getElementById("amount").innerHTML = "Total " + size_cost.thin1.cost;
}

function nl() {
    document.getElementById("amount").innerHTML = "Total " + size_cost.new.cost;
}

function nel() {
    document.getElementById("amount").innerHTML = "Total " + size_cost.new1.cost;
}

function gs() {
    document.getElementById("amount").innerHTML = "Total " + size_cost.gluten.cost;
}

$("#sel").change(function () {
    "use strict";
    var h = $(this).find("option:selected").attr("id");

    switch (h) {
    case "hs":
        hs();
        break;
    
    case "hm":
            hm();
            break;
    case "hl":
            hl();
            break;
        case "tm":
            tm();
            break;
        case "tl":
            tl();
            break;
        case "nl":
            nl();
            break;
        case "nel":
            nel();
            break;
        case "gs":
            gs();
            break;
    }
});


/*the above code is to disply pizaa size/cost in top right corner*/
function copyText() {
     var fname =  document.querySelector(".fname").value;
    document.querySelector("#bill .fname").value  = fname;
        
    var street =  document.querySelector(".street").value;
    document.querySelector("#bill .street").value  = street;
    
    var option =  document.querySelector(".option").value;
    document.querySelector("#bill .option").value  = option;
    
    var city =  document.querySelector(".city").value;
    document.querySelector("#bill .city").value  = city;
    
    var state =  document.querySelector(".state").value;
    document.querySelector("#bill .state").value  = state;
    
    var zip =  document.querySelector(".zip").value;
    document.querySelector("#bill .zip").value  = zip;
    
    var phone =  document.querySelector(".phone").value;
    document.querySelector("#bill .phone").value  = phone;
    
    var email =  document.querySelector(".email").value;
    document.querySelector("#bill .email").value  = email;
}



document.getElementById("billing").onclick = function() {
  copyText();
}
  /*The above code is to copy text field*/


document.getElementById("month").addEventListener("change", function() {
    
expire();

}, false)



function expire() {

var user_input = new Date();
user_input.setFullYear(document.getElementById("year").value, document.getElementById("month").value);

var today = new Date();
today.getFullYear;

if (user_input < today) {
    window.alert("expired card bro");
}
    
}

/*above code is for experiation date*/

function cardValidation() {
 var cardNum = document.getElementById("card").value;
var cardNumArray = cardNum.split("");
var reverse = cardNumArray.reverse();
console.log(reverse);
    var sum = 0;
    
    for (var i = 0; i < reverse.length; i += 1) {
        var double = parseInt(reverse[i]) * 2;
        if (i % 2 == 0) {
            sum += parseInt(reverse[i]);
        } else {
            if (parseInt(reverse[i]) < 5){
                sum += parseInt(reverse[i]) * 2;
            } else if (parseInt(reverse[i]) >= 5) {
                sum += (parseInt(reverse[i]) - 5) * 2 + 1;
            }
        }
        
        
    }
   if (sum % 10 == 0) {
        window.alert("your good to go");
    } else {
        document.getElementById("invalid").innerHTML = "Invalid card bro";
    }
    
}

    

document.getElementById("btn2").addEventListener("click", cardValidation, false)






