const abtTxt = document.querySelector('.line2 b');
const meDesc = {
    "text" : [
        "a gamer.",
        "a web developer.",
        "in Kitchener, Canada."
    ],
    "width" : [
        170,
        324,
        394
    ]
}

const setTextAndWidth = (i) => {
    setTimeout(() => {
        console.log(i);
        abtTxt.innerHTML = meDesc['text'][i];
        abtTxt.style.width = meDesc['width'][i] + "px";
    }, 1000);
};

setInterval(() => {
    for(let i = 1; i <= meDesc['text'].length; i++){
        setTimeout(() => {
            console.log(i);
            abtTxt.innerHTML = meDesc['text'][i - 1];
            abtTxt.style.width = meDesc['width'][i - 1] + "px";
            setTimeout(() => {
                abtTxt.style.width = 0;
            }, 1000 * i);
        }, 2000 * i);
    }
}, 9000);