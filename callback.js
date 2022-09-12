function greeting(greetingHandler, name) {
    greetingHandler(name);
}
// const name = "Halim Mama";
// const numbers = [34, 56, 789];
const laptop = {
    price: 45000,
    brand: 'lenevo',
    memory: '8gb'
};

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetNight, 'Tom Salman');

function submitHandler() {
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);