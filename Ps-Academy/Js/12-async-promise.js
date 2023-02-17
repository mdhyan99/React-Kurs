let myPromise = new Promise((succes, error) => {
    const x = 0;
    if (x === 1) {
        succes("this Ok");
    } else {
        error("this failid");
    }
}).then(
    (resolve) => console.log(resolve),
    (rejected) => console.log(rejected)
);

// multi Promise

// let eat = true;
// let play = false;
// let sleep = true;

// let eating = new Promise((succes, error) => {
//     if (eat) {
//         succes("i am eating");
//     } else {
//         error(" not eating");
//     }
// });

// let playing = new Promise((succes, error) => {
//     if (play) {
//         succes("i am playing");
//     } else {
//         error(" not playing");
//     }
// });

// let sleeping = new Promise((succes, error) => {
//     if (sleep) {
//         succes("i am sleeping");
//     } else {
//         error(" not sleeping");
//     }
// });

// eating.then(
//     (resolve) => {
//         console.log(resolve)

//         playing.then((resolve) => {
//             console.log(resolve)   // hier play ist false dann prüft nicht weiter

//             sleeping.then(
//                 (resolve) => console.log(resolve),
//                 (rejected) => console.log(rejected)
//             );
//         },
//         (rejected) => console.log(rejected) // hier play ist false dann prüft nicht weiter
//         // drückt not playing und stoped
//         );

//     },
//     (rejected) => console.log(rejected)
// );



let eat = true;
let play = false;
let sleep = true;

const eating = () => {
    return new Promise((succes, error) => {
        if (eat) {
            succes("i am eating");
        } else {
            error(" not eating");
        }
    });
};

const playing = () => {
    return new Promise((succes, error) => {
        if (play) {
            succes("i am playing");
        } else {
            error(" not playing");
        }
    });
};

const sleeping = () => {
    return new Promise((succes, error) => {
        if (sleep) {
            succes("i am sleeping");
        } else {
            error(" not sleeping");
        }
    });
};

// const run = async () => {
    async function run() {  
    try {
        
        const eatMassage = await eating();
        console.log(eatMassage);
        const playMassage = await playing();
        console.log(playMassage);
        const sleepMassage = await sleeping();
        console.log(sleepMassage);

    } catch (error) { console.log(error); }
};
run();
