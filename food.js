const section_1 = document.querySelector('.section-1');
const section_2 = document.querySelector('.section-2');
const section_3 = document.querySelector('.section-3');
const section_4 = document.querySelector('.section-4');
const section_5 = document.querySelector('.section-5');
const section_6 = document.querySelector('.section-6');
const section_7 = document.querySelector('.section-7');
const section_8 = document.querySelector('.section-8');
const section_9 = document.querySelector('.section-9');
const section_10 = document.querySelector('.section-10');
const section_11 = document.querySelector('.section-11');
const section_12 = document.querySelector('.section-12');
const section_13 = document.querySelector('.section-13');
const section_14 = document.querySelector('.section-14');
const text = document.querySelector('.text');
const con = document.querySelectorAll('.con');
const icon = document.querySelectorAll('.ico-1');
const pwShowHide = document.querySelectorAll('.icon-2');

const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const button_3 = document.getElementById('button_3');
const button_4 = document.getElementById('button_4');
const button_5 = document.getElementById('button_5');
const button_6 = document.getElementById('button_6');
const button_7 = document.getElementById('button_7');

const text_20 = document.querySelector('.text-20');
var Homes = document.querySelectorAll('.Home');
var Menus = document.querySelectorAll('.Menu');



const back_1 = document.getElementById('back-1');
const back_2 = document.getElementById('back-2');
const back_3 = document.getElementById('back-3');
const back_4 = document.getElementById('back-4');
const back_5 = document.getElementById('back-5');
const back_6 = document.getElementById('back-6');
const back_7 = document.getElementById('back-7');
const search = document.getElementById('search');
var items = document.querySelectorAll('.item-1');

const circ_1 = document.getElementById('circ-1');
const circ_2 = document.getElementById('circ-2');
const circ_3 = document.getElementById('circ-3');
const circ_4 = document.getElementById('circ-4');

const left_1 = document.getElementById('left-1');
const left_2 = document.getElementById('left-2');
const left_3 = document.getElementById('left-3');

const right_1 = document.getElementById('right-1');
const right_2 = document.getElementById('right-2');
const right_3 = document.getElementById('right-3');
const right_4 = document.getElementById('right-4');

items.forEach(item => {
    item.addEventListener("click", ()=>{
       
        if (item.style.color == "black") {
            item.style.background = "#ff8a03";
            item.style.color = "white";
        } else {
            item.style.background = "white";
            item.style.color = "black";
        }
    })
});
function circe_1() {
    circ_1.style.opacity = "1";
    circ_2.style.opacity = "0.5";
    circ_3.style.opacity = "0.5";
    circ_4.style.opacity = "0.5";
}

function circe_2() {
    circ_1.style.opacity = "0.5";
    circ_2.style.opacity = "1";
    circ_3.style.opacity = "0.5";
    circ_4.style.opacity = "0.5";
}

function circe_3() {
    circ_1.style.opacity = "0.5";
    circ_2.style.opacity = "0.5";
    circ_3.style.opacity = "1";
    circ_4.style.opacity = "0.5";
}

function circe_4() {
    circ_1.style.opacity = "0.5";
    circ_2.style.opacity = "0.5";
    circ_3.style.opacity = "0.5";
    circ_4.style.opacity = "1";
}

right_1.addEventListener("click", ()=>{
    section_1.style.display ="none";
    section_2.style.display ="block";
    circe_2()
    section_2.classList.add ("active");
})

right_2.addEventListener("click", ()=>{
    section_2.style.display ="none";
    section_3.style.display ="block";
    circe_3()
    section_3.classList.add ("active");
})

right_3.addEventListener("click", ()=>{
    section_3.style.display ="none";
    section_4.style.display ="block";
    circe_4()
    section_4.classList.add ("active");
})

right_4.addEventListener("click", ()=>{
    section_4.style.display ="none";
    section_5.style.display ="block";
    
    section_5.classList.add ("active");
})


left_1.addEventListener("click", ()=>{
    section_1.style.display ="block";
    section_2.style.display ="none";
    circe_1()
    section_1.classList.add ('back');
})

left_2.addEventListener("click", ()=>{
    section_2.style.display ="block";
    section_3.style.display ="none";
    circe_2()
    section_2.classList.add ('back');
    section_2.classList.remove('active');
})

left_3.addEventListener("click", ()=>{
    section_3.style.display ="block";
    section_4.style.display ="none";
    circe_3()
    section_3.classList.add ('back');
    section_3.classList.remove('active');
})



button_1.addEventListener("click", function(){
    section_5.style.display ="none";
    section_6.style.display ="block";

    section_6.classList.add ("active");
})

button_2.addEventListener("click", function(){
    section_5.style.display ="none";
    section_7.style.display ="block";

    section_7.classList.add ("active");
})

button_3.addEventListener("click", function(){
    section_6.style.display ="none";
    section_10.style.display ="block";

    section_10.classList.add ("active");
})

button_4.addEventListener("click", function(){
    section_7.style.display ="none";
    section_10.style.display ="block";

    section_10.classList.add ("active");
})

text.addEventListener("click", function(){
    section_8.style.display ="block";
    section_7.style.display ="none";
    section_6.style.display ="none";
    section_8.classList.add ("active");
})

button_5.addEventListener("click", function(){
    section_9.style.display ="block";
    section_8.style.display ="none";

    section_9.classList.add ("active");
})

button_6.addEventListener("click", function(){
    section_6.style.display ="block";
    section_9.style.display ="none";

    section_6.classList.add ("back");
    section_6.classList.remove ("active");
})

back_1.addEventListener("click", function(){
    section_5.style.display ="block";
    section_6.style.display ="none";

    section_5.classList.add ('back');
    section_5.classList.remove('active');
})

back_2.addEventListener("click", function(){
    section_6.style.display ="block";
    section_7.style.display ="none";

    section_6.classList.add ('back');
    section_6.classList.remove('active');
})

back_3.addEventListener("click", function(){
    section_6.style.display ="block";
    section_8.style.display ="none";

    section_6.classList.add ('back');
    section_6.classList.remove ('active');
})

back_4.addEventListener("click", function(){
    section_8.style.display ="block";
    section_9.style.display ="none";

    section_8.classList.remove ('active');
    section_8.classList.add ('back');
})

back_5.addEventListener("click", function(){
    section_11.style.display ="block";
    section_12.style.display ="none";

    section_11.classList.add ('back');
    section_11.classList.remove ('active');
})



button_7.addEventListener("click", function(){
    section_11.style.display ="block";
    section_10.style.display ="none";

    section_11.classList.add ("active");
})


Menus.forEach(Menu => {
    Menu.addEventListener("click", function(){
        section_13.style.display ="block";
        section_12.style.display ="none";
        section_11.style.display = "none";
        section_14.style.display ="none";
        
        section_10.style.display ="none";
        section_13.classList.add ("active");
    })
});




search.addEventListener("click", function(){
    section_12.style.display ="block";
    section_11.style.display ="none";

    section_12.classList.add ("top");
})


text_20.addEventListener("click", function(){
    section_14.style.display ="block";
    section_12.style.display ="none";
    section_13.style.display ="none";
    section_11.style.display ="none";
    section_10.style.display = "none";    
    section_9.style.display ="none";
    section_14.classList.add ("active");
})

back_6.addEventListener("click", function(){
    section_11.style.display ="block";
    section_13.style.display ="none";
    section_11.classList.remove ('active');
    section_11.classList.add ('back');
})
back_7.addEventListener("click", function(){
    section_13.style.display ="block";
    section_14.style.display ="none";

    section_13.classList.add ('back');
    section_13.classList.remove ('active');
})



Homes.forEach(Home => {
    Home.addEventListener("click", ()=>{
        section_11.style.display = "block";
        section_12.style.display ="none";
        section_13.style.display ="none";
        section_10.style.display ="none";
        section_14.style.display ="none";
        section_6.style.display ="none";
        section_11.classList.add ('back');
        section_11.classList.remove('active');
    });
});


pwShowHide.forEach (eyeIcon =>{
    eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.querySelectorAll('.password');

        pwFields.forEach(password => {
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
            
        })
    })
})