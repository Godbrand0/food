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
const text = document.querySelector('.text');
const con = document.querySelectorAll('.con');
const icon = document.querySelectorAll('.ico-1');

const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const button_3 = document.getElementById('button_3');
const button_4 = document.getElementById('button_4');
const button_5 = document.getElementById('button_5');
const button_6 = document.getElementById('button_6');
const button_7 = document.getElementById('button_7');
const text_2 = document.getElementById('text-2');
const text_17 = document.getElementById('text-17');


const back_1 = document.getElementById('back-1');
const back_2 = document.getElementById('back-2');
const back_3 = document.getElementById('back-3');
const back_4 = document.getElementById('back-4');
const back_5 = document.getElementById('back-5');
const back_6 = document.getElementById('back-6');
const back_7 = document.getElementById('back-7');
const search = document.getElementById('search');





button_1.addEventListener("click", function(){
    section_1.style.display ="none";
    section_2.style.display ="block";

    section_2.classList.add ("active");
})

button_2.addEventListener("click", function(){
    section_1.style.display ="none";
    section_3.style.display ="block";

    section_3.classList.add ("active");
})

button_3.addEventListener("click", function(){
    section_2.style.display ="none";
    section_6.style.display ="block";

    section_6.classList.add ("active");
})

button_4.addEventListener("click", function(){
    section_3.style.display ="none";
    section_6.style.display ="block";

    section_6.classList.add ("active");
})

text.addEventListener("click", function(){
    section_4.style.display ="block";
    section_3.style.display ="none";
    section_2.style.display ="none";
    section_4.classList.add ("active");
})

button_5.addEventListener("click", function(){
    section_5.style.display ="block";
    section_4.style.display ="none";

    section_5.classList.add ("active");
})

button_6.addEventListener("click", function(){
    section_2.style.display ="block";
    section_5.style.display ="none";

    
})

back_1.addEventListener("click", function(){
    section_1.style.display ="block";
    section_2.style.display ="none";

    section_1.classList.add ('back');
})

back_2.addEventListener("click", function(){
    section_1.style.display ="block";
    section_3.style.display ="none";

    section_1.classList.add ('back');
})

back_3.addEventListener("click", function(){
    section_2.style.display ="block";
    section_4.style.display ="none";

    section_2.classList.add ('back');
    section_2.classList.remove ('active');
})

back_4.addEventListener("click", function(){
    section_4.style.display ="block";
    section_5.style.display ="none";

    section_4.classList.remove ('active');
    section_4.classList.add ('back');
})

back_5.addEventListener("click", function(){
    section_7.style.display ="block";
    section_8.style.display ="none";

    section_7.classList.add ('back');
    section_7.classList.remove ('active');
})



button_7.addEventListener("click", function(){
    section_7.style.display ="block";
    section_6.style.display ="none";

    section_7.classList.add ("active");
})

text_2.addEventListener("click", function(){
    section_9.style.display ="block";
    section_8.style.display ="none";

    section_9.classList.add ("active");
})



search.addEventListener("click", function(){
    section_8.style.display ="block";
    section_7.style.display ="none";

    section_8.classList.add ("top");
})


text_17.addEventListener("click", function(){
    section_10.style.display ="block";
    section_8.style.display ="none";

    section_10.classList.add ("active");
})

back_6.addEventListener("click", function(){
    section_8.style.display ="block";
    section_9.style.display ="none";
    section_8.classList.remove ('active');
    section_8.classList.add ('back');
})
back_7.addEventListener("click", function(){
    section_8.style.display ="block";
    section_10.style.display ="none";

    section_8.classList.add ('back');
})