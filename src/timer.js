

const getTimer = () =>  ` 
<div class="timer">
<span class="value"> yyyy-mm-dd hh:mm:ss </span>
<button data-action="start">start</button>
<button data-action="stop" disabled>stop</button>
</div>
`;

export class Timer {
    constructor({ selector }) {
        this.value = 1;
        this.parent = document.querySelector(selector);
        // console.log(this.parent);
        this.parent.insertAdjacentHTML('beforeend', getTimer());
        
        this.valueSpan = this.parent.querySelector('.value');
        this.startButton = document.querySelector('[data-action="start"]');
        this.stopButton = document.querySelector('[data-action="stop"]');

        this.startButton.addEventListener('click', this.start.bind(this));
        this.stopButton.addEventListener('click', this.stop.bind(this));
        this.render();
    }
    render() {
        this.valueSpan.textContent = this.value;
        this.value += 1;
    }

    start() {
        // console.log('start');
        this.timerId = setInterval(this.render.bind(this), 1000);
        this.startButton.setAttribute('disabled', true);
        this.stopButton.removeAttribute('disabled');
    }

    stop () {
        // console.log('stop');
        clearInterval(this.timerId);
        this.stopButton.setAttribute('disabled', true);
        this.startButton.removeAttribute('disabled');
    }
};