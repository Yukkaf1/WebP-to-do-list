// console.log('start')
// fetch('https://hn.algolia.com/api/v1/search?query=cats')
// .then(resp => resp.json())
// .then(data => console.log(data))
// .then(() => {
//     console.log('end')
// })
// .catch(error => {
//     console.log(error.message);
// });


 // --- Promise.all

 const asyncFn1 = () => {
     return new Promise((resolve, reject) =>
     {
         setTimeout(() => {
             console.log('hallo from timer 1');
             resolve('hurray 1!')
         }, 2000)
     });
 };

 const asyncFn2 = () => {
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            console.log('hallo from timer 2');
            resolve('hurray 2!')
        }, 1000)
    });
};

// asyncFn1();
// asyncFn2();

// asyncFn1().then(() => {
// asyncFn2();
// });

// Promise.all([asyncFn1(), asyncFn2()]).then(([resp1, resp2]) => {
//     console.log(resp1);
//     console.log(resp2);

// })

Promise.allSettled([asyncFn1(), asyncFn2()]).then(([resp1, resp2]) => {
    console.log(resp1);
    console.log(resp2);

})
