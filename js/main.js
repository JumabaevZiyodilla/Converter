var elCurrencyForm = document.querySelector(".currency-form");
var elCurrencyInput = document.querySelector(".currency-input");
var elCurrencySelect = document.querySelector(".currency-select");

var elCurrencyOption = document.querySelector(".currency-option");
var elResult = document.querySelector(".result");
var elValue = elCurrencySelect;
var elText = elCurrencySelect;

elCurrencyForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elCurrencyInputValue = elCurrencyInput.value;
    elResult.textContent = elCurrencyInputValue * elValue.value;
})



