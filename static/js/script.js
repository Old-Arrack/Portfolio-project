var box = document.getElementById("DropBox").style;
var drop_down = true;

var goto = document.querySelector("#GoTo");
var contact = document.querySelector("#ContactMe");
if (goto) {
    contact.scrollIntoView();
}

const animated = document.querySelector(".drop-box");
animated.addEventListener('animationend', () => {
    if (drop_down) {
        box.display = "none";
    }
});

window.addEventListener('resize', function(event){
    if (window.innerWidth > 990.4) {
        box.display = "none";
    }
});

window.onscroll = function() {barAnimation()};

function barAnimation() {
     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 100) {
        var colours = ["#F16529", "#2965f1", "#f0db4f", "#50C878"];
        var div_list = document.querySelectorAll(".animate-sk");

        for (var i=0; i<div_list.length; i++) {
            div_list[i].style.backgroundColor = colours[i];
            div_list[i].style.animationName = "expand-bar";
        }
     }
}

function drop() {
    if (drop_down) {
        box.display = "block";
        drop_down = false;
        box.animationName = "slide-down"
        box.animationDuration = "1s";
    }
    else {
        box.animationName = "slide-up";
        box.animationDuration = "1s";
        drop_down = true;
    }
}

function show_link(img) {
    var link = document.querySelector(`#Link_${img}`).style;
    var img = document.querySelector(`#Img_${img}`).style;
    img.opacity = "80%";

    link.color = "white";
    link.cursor = "pointer";
    link.textDecoration = "none";
    link.display = "block";
}

function hide_link(img) {
    var link = document.querySelector(`#Link_${img}`).style;
    var img = document.querySelector(`#Img_${img}`).style;
    img.opacity = "100%";
    link.display = "none";
}