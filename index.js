

// First dropdown
function show(anything) {
    document.querySelector('.textbox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function() {
    dropdown.classList.toggle('active');
}

// TOYOTA 
function toyota1(head) {
    document.querySelector('.toyota_textbox').value = head;
}

let toyota_list = document.querySelector('.toyota_list');
toyota_list.onclick = function() {
    toyota_list.classList.toggle('active2');
}

let toyota_container = document.querySelector('.toyota_container');
let toyota_head_list = document.querySelector('.toyota_head_list');

toyota_head_list.onclick = function() {
    toyota_container.classList.toggle('show_toyota');
    nissan_container.classList.remove('show_nissan');
    opel_container.classList.remove('show_opel');
    ford_container.classList.remove('show_ford');
    mazda_container.classList.remove('show_mazda');
    isuzu_container.classList.remove('show_isuzu');
}


// NISSAN 
function nissan1(head3) {
    document.querySelector('.nissan_textbox').value = head3;
}

let nissan_list = document.querySelector('.nissan_list');
nissan_list.onclick = function() {
    nissan_list.classList.toggle('active3');
}

let nissan_container = document.querySelector('.nissan_container');
let nissan_head_list = document.querySelector('.nissan_head_list');

nissan_head_list.onclick = function() {
    nissan_container.classList.toggle('show_nissan');
    toyota_container.classList.remove('show_toyota');
    opel_container.classList.remove('show_opel');
    ford_container.classList.remove('show_ford');
    mazda_container.classList.remove('show_mazda');
    isuzu_container.classList.remove('show_isuzu');
}


// OPEL
function opel1(head4) {
    document.querySelector('.opel_textbox').value = head4;
}

let opel_list = document.querySelector('.opel_list');
opel_list.onclick = function() {
    opel_list.classList.toggle('active4');
}


let opel_container = document.querySelector('.opel_container');
let opel_head_list = document.querySelector('.opel_head_list');

opel_head_list.onclick = function() {
    opel_container.classList.toggle('show_opel');
    toyota_container.classList.remove('show_toyota');
    nissan_container.classList.remove('show_nissan');
    ford_container.classList.remove('show_ford');
    mazda_container.classList.remove('show_mazda');
    isuzu_container.classList.remove('show_isuzu');
}


// FORD
function ford1(head5) {
    document.querySelector('.ford_textbox').value = head5;
}

let ford_list = document.querySelector('.ford_list');
ford_list.onclick = function() {
    ford_list.classList.toggle('active5');
}

let ford_container = document.querySelector('.ford_container');
let ford_head_list = document.querySelector('.ford_head_list');

ford_head_list.onclick = function() {
    ford_container.classList.toggle('show_ford');
    toyota_container.classList.remove('show_toyota');
    nissan_container.classList.remove('show_nissan');
    opel_container.classList.remove('show_opel');
    mazda_container.classList.remove('show_mazda');
    isuzu_container.classList.remove('show_isuzu');
}


// MAZDA
function mazda1(head6) {
    document.querySelector('.mazda_textbox').value = head6;
}

let mazda_list = document.querySelector('.mazda_list');
mazda_list.onclick = function() {
    mazda_list.classList.toggle('active6');
}

let mazda_container = document.querySelector('.mazda_container');
let mazda_head_list = document.querySelector('.mazda_head_list');

mazda_head_list.onclick = function() {
    mazda_container.classList.toggle('show_mazda');
    toyota_container.classList.remove('show_toyota');
    nissan_container.classList.remove('show_nissan');
    opel_container.classList.remove('show_opel');
    ford_container.classList.remove('show_ford');
    isuzu_container.classList.remove('show_isuzu');
}


// Isuzu
function isuzu1(head7) {
    document.querySelector('.isuzu_textbox').value = head7;
}

let isuzu_list = document.querySelector('.isuzu_list');
isuzu_list.onclick = function() {
    isuzu_list.classList.toggle('active7');
}


let isuzu_container = document.querySelector('.isuzu_container');
let isuzu_head_list = document.querySelector('.isuzu_head_list');

isuzu_head_list.onclick = function() {
    isuzu_container.classList.toggle('show_isuzu');
    toyota_container.classList.remove('show_toyota');
    nissan_container.classList.remove('show_nissan');
    opel_container.classList.remove('show_opel');
    ford_container.classList.remove('show_ford');
    mazda_container.classList.remove('show_mazda');
}