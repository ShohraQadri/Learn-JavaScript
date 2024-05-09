const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');
    const result1 = document.querySelector('#result1');
    const result2 = document.querySelector('#result2');


    result.innerHTML = `${height}`
    if (height < 0 || height === '' || isNaN(height)) {
        result1.innerHTML = `please enter a valid number ${height} !`
        result1.style.color = 'red';
    }
    else if (Weight < 0 || Weight === '' || isNaN(Weight)) {
        result2.innerHTML = `please enter a valid number ${Weight} !`
        result2.style.color = 'red';
    }
    else {
        const bmi = (Weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
    }

})
// clock

const clock = document.querySelector('#clock')
setInterval(function () {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);