const refs = {
    step: document.querySelector(".step"),
    value: document.querySelector(".value"),
    decrement: document.querySelector(".decrement"),
    increment: document.querySelector(".increment"),
}

let count = 0;
let step = 1;

const hendleDecrement = () => {
    count -= step;
    render();
};

const hendleIncrement = () => {
    count += step;
    render();
};

const render = () => {
    refs.value.textContent = count;
};


const handleStepChsnge = (event) => {
    step = Number(event.target.value);
    // step = +event.target.value;
}
render();

render();

refs.decrement.addEventListener('click', hendleDecrement );
refs.increment.addEventListener('click', hendleIncrement );

refs.step.addEventListener('change', handleStepChsnge);
