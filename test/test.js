
const listProduction = document.querySelectorAll('.list-production')
let current = 0

for (let item of listProduction) {
    console.log(item)
    const partProduction = item.querySelectorAll('.part-production')
    console.log(partProduction)

    const length = partProduction.length
    const btnPrev = item.querySelector('.btnPrev')
    const btnNext = item.querySelector('.btnNext')
    console.log(btnNext)
    console.log(btnPrev)

    const handleChangeSilde = () => {
        if (current == length - 1) {
            current = 0
            let widthImg = partProduction[0].offsetWidth
            item.style.transform = `translateX(0px)`;
            item.querySelector('.active').classList.remove('active')
        }
        else {
            current++
            let widthImg = partProduction[0].offsetWidth;
            item.style.transform = `translateX(${widthImg * -1 * current}px)`;
        }
    }

    let handleEventChangeSilde = setInterval(handleChangeSilde, 4000)


    btnNext.addEventListener('click', () => {
        clearInterval(handleEventChangeSilde)
        handleChangeSilde()
        handleEventChangeSilde = setInterval(handleChangeSilde, 4000)

    })
    btnPrev.addEventListener('click', () => {
        clearInterval(handleEventChangeSilde)
        if (current == 0) {
            current = length - 1
            let widthImg = partProduction[0].offsetWidth;
            listImages.style.transform = `translateX(${widthImg * -1 * current}px)`;
        }
        else {
            current--
            let widthImg = partProduction[0].offsetWidth;
            listImages.style.transform = `translateX(${widthImg * -1 * current}px)`;
        }
        handleEventChangeSilde = setInterval(handleChangeSilde, 4000)


    })
}


// const listImages = document.querySelector('.list-images')
// const imgs = listImages.getElementsByTagName('img')
// let current = 0
// const length = imgs.length
// console.log(listImages)
// const btnPrev = document.querySelector('.btnPrev')
// const btnNext = document.querySelector('.btnNext')


// const handleChangeSilde = () => {
//     if (current == length - 1) {
//         current = 0
//         let widthImg = imgs[0].offsetWidth
//         listImages.style.transform = `translateX(0px)`;
//         document.querySelector('.active').classList.remove('active')
//     }
//     else {
//         current++
//         let widthImg = imgs[0].offsetWidth;
//         listImages.style.transform = `translateX(${widthImg * -1 * current}px)`;
//     }
// }

// let handleEventChangeSilde = setInterval(handleChangeSilde, 4000)

// btnNext.addEventListener('click', () => {
//     clearInterval(handleEventChangeSilde)
//     handleChangeSilde()
//     handleEventChangeSilde = setInterval(handleChangeSilde, 4000)

// })
// btnPrev.addEventListener('click', () => {
//     clearInterval(handleEventChangeSilde)
//     if (current == 0) {
//         current = length - 1
//         let widthImg = imgs[0].offsetWidth;
//         listImages.style.transform = `translateX(${widthImg * -1 * current}px)`;
//     }
//     else {
//         current--
//         let widthImg = imgs[0].offsetWidth;
//         listImages.style.transform = `translateX(${widthImg * -1 * current}px)`;
//     }
//     handleEventChangeSilde = setInterval(handleChangeSilde, 4000)

// })





