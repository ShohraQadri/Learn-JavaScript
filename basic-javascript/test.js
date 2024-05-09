// const sayShohra = function () {
//     console.log('Shohra')
// }
// const Changename = function () {
//     document.getElementById('text').innerHTML = 'Shohra Naseem'
// }
// const changeme = setTimeout(Changename, 2000)

// document.querySelector('#stop').addEventListener('click', function () {
//     clearTimeout(changeme)
//     console.log('stopped')
// })


// const Wishes = function () {
//     document.getElementById('text').innerHTML = "Good morning shohra"
//     setTimeout()
// }
const changemeStart = function () {
    document.querySelector('#Start').addEventListener('click', function () {
        document.getElementById('text').innerHTML = "Good morning shohra qadri";
        setTimeout()
    })
}

document.querySelector('#stop').addEventListener('click', function () {
    // clearTimeout(timeout)
    console.log('hii');
    document.getElementById('text').innerHTML = "Good Night shohra qadri";
    setTimeout()
})

setTimeout(changemeStart, 1000)
// clearTimeout(interval)