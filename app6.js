// function countDown() {
//     if (count === 0) {
//         console.log("DONE!");
//     } else {
//         count--;
//         num = setTimeout("countdown()", 3000);
//         console.log()
//    }
    
// };


// function countDown(count) {
//     // starts countdown
//     if (count === 0) {
//         console.log("DONE!");
//     } else {
//         console.log(count);
        
//        setTimeout(() => countDown(count-1), 1000);
       
//     }
//   };
  

function randomGame() {
    let num;
    let counter = 0;
    let timer = setInterval(function () {
        num = Math.random();
        counter++
        if (num > 0.75) {
            clearInterval(timer);
            console.log("It took " + counter + " try/tries");
        }
    } , 1000)
}