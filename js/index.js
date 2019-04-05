const display = document.querySelector('.display');// створили змінну для виведення значень
const digitsOpers = document.querySelectorAll('.digits button, .operations button'); //створили зміну для кнопок з цифрами і для кнопок з діями
// кнопки це по суты масив у рядку 3 задаємо для кожного елементу масиву додали evenlistern на подію
digitsOpers.forEach(digit => digit.addEventListener('click' ,digitOperPressed ));// прикожному натисканні кнопки буде відпрацбовувати функція digitOperPressed
//digit це значення яке ми будемо отримувати при натисканні на кнопки калькулятора
// digitOperPressed- коли натискається кнопка спрацьовує ця функція
function digitOperPressed(e) {// e- event якась подія яку буде виконувати функція
  e.preventDefault();   //дія перша preventDefault відключає відправку форми
 display.value += e.target.innerText; // e.target таргет це якраз кнопка яку натиснули
}// innertext вмыст кнопки

//ця частина для дорівнюю
const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);// при натисканні = буде виконуватись функція 

function equalPressed(e){
    e.preventDefault();
    display.value = eval(display.value);// display.value - це значення та команди  які відображаються на дисплеї
}




