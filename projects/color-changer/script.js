const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target.id);
        if (event.target.id === 'yellow') {
            document.body.style.background = 'yellow';
            document.body.style.color = 'white';

        }
        if (event.target.id === 'red') {
            document.body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'purple') {
            document.body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'green') {
            document.body.style.backgroundColor = event.target.id;
        }

    });
});


