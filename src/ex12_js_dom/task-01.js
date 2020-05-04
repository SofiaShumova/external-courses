let arrayImage = [
    "https://zastavok.net/main/animals/158530956659.jpg",
    "https://st.depositphotos.com/2036077/2010/i/450/depositphotos_20100929-stock-photo-abstract-image-of-cubes-background.jpg",
    "https://bipbap.ru/wp-content/uploads/2018/06/img_resize.jpg",
    "https://bipbap.ru/wp-content/uploads/2018/06/3c980dd2e9c909ada7377cc89885231b.jpg",
    "https://bipbap.ru/wp-content/uploads/2018/06/3ee998952c2016c72a9ad131db1ea00d.jpg",
    "https://bipbap.ru/wp-content/uploads/2018/06/background-backgrounds-floral-flower-Favim.com-2429619.jpg"
]
let slider = {
    state: {
        firstImage: -1,
        secondImage: 0,
        thirdImage: 1
    },
    increment: function () {
        if (slider.state["thirdImage"] < arrayImage.length) {
            for (let key in slider.state) {
                slider.state[key] += 1
            }
            updateViewSlider()
        }
    },
    decrement: function () {
        if (slider.state["firstImage"] > -1) {
            for (let key in slider.state) {
                slider.state[key] -= 1
            }
            updateViewSlider()
        }
    },
    end: false,
    start: true
}
function updateViewSlider() {
    for (let prop in slider.state) {
        let elem = document.getElementById(prop);
        if (prop === "firstImage" && slider.state[prop] === -1 ||
            prop === "thirdImage" && slider.state[prop] === arrayImage.length) {
            elem.style.visibility = "hidden"
        } else {
            elem.style.visibility = "visible"
            elem.src = arrayImage[slider.state[prop]]
        }
        elem.setAttribute("class", prop === "secondImage" ? "animationCenter" : "animationClass");
    }
    setTimeout(() => {
        for (let prop in slider.state) {
            setTimeout(document.getElementById(prop).setAttribute("class", ""), 1000)
        }
    }, 300)
}
updateViewSlider()

document.getElementById("buttonNext").onclick = slider.increment
document.getElementById("buttonPrevious").onclick = slider.decrement

