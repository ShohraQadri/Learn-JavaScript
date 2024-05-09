// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async is called');
//         resolve();
//     }, 1000);
// })
// promiseOne.then(function () {
//     console.log("hello i am here");
// })

// 

// new Promise(function (resolve, reject) {
//     console.log("task two");
//     resolve();
// }).then(function () {
//     console.log("good morning");
// })

// 

// const promiseTwo = new Promise(function (resolve, reject) {
//     console.log("taks three called");
//     resolve({ userName: 'shohra', email: 'qadri@gmal.com' })
// })
// promiseTwo.then(function (user) {
//     console.log(user);
// })

// 

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("task three is calles");
        let error = false;
        if (!error) {
            resolve({ userName: 'shohra qadri', number: '9089786566' })
        }
        else {
            reject('something is here.')
        }
    }, 1000)
})
promiseThree.then((user) => {
    // console.log(user);
    return user.number
}).then((number) => {
    console.log(number);
}).catch(function (error) {
    console.log('error here');
}).finally(() => {
    console.log('the promises is either resolve or rejcetted');
})

// 

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("task three is calles");
        let error = true;
        if (!error) {
            resolve({ userName: 'shohra qadri', number: '9089786566' })
        }
        else {
            reject('something is here.')
        }
    }, 1000)
})


async function consumepromiseFour() {
    // try {
    //     const response = await fetch('https://randomuser.me/api/');
    //     const data = await response.json();
    //     console.log(data);
    // } catch (error) {
    //     console.log(error);
    // }

    return new Promise((resolve, reject) => {
        const req = new HttpRequest('GET', 'https://randomuser.me/api/');
        console.log("req === ", req);
        this.http.request(req).subscribe((event) => {
            console.log("event === ", event);
        }, (error) => {
            console.log("error === ", error);
            progressSubject.error(error);
            reject(error);
        });
    })
}

consumepromiseFour();


// fetch('https://randomuser.me/api/')
//     // fetch('https://jsonplaceholder.typecode.com/user')
//     .then((responce) => {
//         return responce.json()
//     }).then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
