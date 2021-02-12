console.log('Задание №1');
console.log('\n');
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));
console.log('\n');



console.log('Задание №2');
console.log('\n');
let data = '2025-12-31';
    arr = data.split('-');
    newData = arr[2] + '/' + arr[1] + '/' + arr[0];
    console.log(newData);
console.log('\n');



console.log('Задание №3');
console.log('\n');
str = ('Я учу javascript!')
console.log(str.substring(2,5) + ' ' + str.substring(6,17));
console.log(str.slice(2,5) + ' ' + str.slice(6,17));
console.log(str.substr(2,3) + ' ' + str.substr(6,11));
console.log('\n');



console.log('Задание №4');
console.log('\n');
let sum = 0;
    arr = [4, 2, 5, 19, 13, 0, 10];
for(i = 0; i < arr.length; i++){
    sum += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(sum));
console.log('\n');



console.log('Задание №5');
console.log('\n');
let a = prompt('Введите число');
    b = prompt('Введите число');
    c = Math.abs(a - b);
console.log(c);
console.log('\n');



console.log('Задание №6');
console.log('\n');
date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
console.log('\n');



console.log('Задание №7');
console.log('\n');
str = 'aa aba abba abbba abca abea';
console.log(str.match(/ab+a/gi));
console.log('\n');



console.log('Задание №8');
console.log('\n');
let numberPhone = prompt('Введите номер телефона', '+375 29 1111111');
function getNumberPhone(numberPhone){
    let phone = /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{7})$/;
    if(numberPhone.match(phone)) {
        return true;
    } else {
        alert('Введен некорректный номер телефона');
        return false;
    }
}
console.log(getNumberPhone(numberPhone));
console.log('\n');



console.log('Задание №9');
console.log('\n');
let emailNumber = prompt('Введите адрес электронной почты', 'name@gmail.com');
function getEmailNumber(emailNumber){
    let email = /^([A-Za-z0-9]{2,99})+\@([A-Za-z0-9]{2,11})+\.([A-Za-z]{2,11})$/;
    if(emailNumber.match(email)) {
        return true;
    } else {
        alert('Введен некорректный email');
        return false;
    }
}
console.log(getEmailNumber(emailNumber));
console.log('\n');