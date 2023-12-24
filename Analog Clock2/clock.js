const numberHour = document.querySelector('.number-hours');

const numberElement = [];

for (let i = 1; i <= 12; i++) {
    // const element = array[i];
    numberElement.push(
        '<span style="--index:${i}><p>${i}</p></span>'
    );
    console.log(i);
}

numberHour.insertAdjacentHTML("afterbegin", numberElement.join(""));