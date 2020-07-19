"use strict";

var x = "";
var i = 0;
fetch("assets/js/data.json")
    .then (function (resp) {
        return resp.json();
    })
    .then (function (data) {
        for (i in data) { 
            if( i == 0 ){
                x += "<div class='col-3'>" +
                    "<div class='accordion text-center active'>" +
                        "<h2>" + data[i].title + "</h2>" +
                    "</div>" +
                    "<div class='panel show'><img src='assets/images/arrow-up.png' alt='' /><div class='text-left'><div>" + data[i].content +
                    "</div></div></div></div>";
            }else{

            x += "<div class='col-3'>" +
                    "<div class='accordion text-center'>" +
                        "<h2>" + data[i].title + "</h2>" +
                    "</div>" +
                    "<div class='panel'><img src='assets/images/arrow-up.png' alt='' /><div class='text-left'><div>" + data[i].content +
                    "</div></div></div></div>";
            }
        }
        document.getElementById("section-content").innerHTML = x;
        var acc = document.getElementsByClassName("accordion");
        var panel = document.getElementsByClassName('panel');

        for (var i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                var setClasses = !this.classList.contains('active');
                setClass(acc, 'active', 'remove');
                setClass(panel, 'show', 'remove');
                
                if (setClasses) {
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        }

        function setClass(els, className, fnName) {
            for (var i = 0; i < els.length; i++) {
                els[i].classList[fnName](className);
            }
        }
    })








    