console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function () {
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}

document.getElementById('run').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    output.value = null;
    console.logs = [];

    try {
        eval(input);
        output.value = console.logs.join('');
        console.clear();
    } catch (err) {
        output.value = err;
    }
})