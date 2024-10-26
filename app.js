const buttons = document.querySelectorAll('#grid');
const customBtn = document.querySelector('#custom');
const dollarInput = document.querySelector('.dollar');
const personInput = document.querySelector('.person')
const resetBtn = document.querySelector('#btn');
const hidden = document.querySelector('#hidden');

let tipPercent = 0;

function calculateResult() {
const inputDollar = parseFloat(dollarInput.value);
const inputPerson = parseInt(personInput.value);

if(isNaN(inputDollar) || inputDollar <= 0) {
    document.querySelector('#amount').placeholder = '$0.00';
    document.querySelector('#total').placeholder = '$0.00';
    return;
} if(isNaN(inputPerson) || inputPerson <= 0){
    hidden.style.display = 'block';
    document.querySelector('#amount').placeholder = '$0.00';
    document.querySelector('#total').placeholder = '$0.00';
} else {
    hidden.style.display = 'none';
}
   
 const inputAmount = (inputDollar * (tipPercent /100)) / inputPerson;
 const inputTotal = (inputDollar + inputDollar * (tipPercent / 100)) / inputPerson;

 if(isFinite(inputAmount) && isFinite(inputTotal)) {
 document.querySelector("#amount").placeholder = `$${inputAmount.toFixed(2)}`;
 document.querySelector("#total").placeholder = `$${inputTotal.toFixed(2)}`;
 } else {
    document.querySelector('#amount').placeholder = '$0.00';
    document.querySelector('#total').placeholder = '$0.00';
 }
} 
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        tipPercent = parseInt(button.value);
        customBtn.value = '';
        calculateResult();
    });
}) ;

customBtn.addEventListener('input', function() {
    tipPercent = parseFloat(customBtn.value) || 0;
    calculateResult();
});

dollarInput.addEventListener('input', function() {
    calculateResult();
});
personInput.addEventListener('input', function() {
    calculateResult();
});

resetBtn.addEventListener('click', () => {
    init();
 })
function init() {
    document.querySelector('.dollar').value = '';
    document.querySelector('.person').value = '';
    document.querySelector('#amount').placeholder = '$0.00';
    document.querySelector('#total').placeholder = '$0.00';
 };
init();

