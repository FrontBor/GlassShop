let input = document.querySelector('.product__singup input');
let button = document.querySelector('.product__singup button');

button.onclick = () => {
    alert(input.value);
    console.log('работает');
}
