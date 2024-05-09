
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 1; i <= 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};


console.log(randomColor());



let intervalId;

const startChangingColor = function () {
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
    console.log("Color-changing started");
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    console.log("Color-changing stopped");
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);



const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="table">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>`;
});