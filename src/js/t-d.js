const refs = {
    input: document.querySelector('input'),
    button: document.querySelector('button')
};

const handleInput = (e) => {
    const {value} = e.target;
    console.log('input', value);
};

const handleClick = () => {
    console.log('click...')
}

// refs.input.addEventListener('input', _.throttle(handleInput, 300));
refs.input.addEventListener('input', _.debounce(handleInput, 300));


refs.button.addEventListener('click', handleClick)
refs.input.focus();
refs.button.click();