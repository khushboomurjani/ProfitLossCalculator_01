
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if ( initial < 0 && quantity < 0 && current < 1){
    showOutput(
      `Please note :- The value cannot be less then 0`
    );
  }else{
  if (initial > current) {
    var loss = (Number (initial) - Number(current)) * quantity;
    var lossPercentage = (((loss) / (initial)) * 10).toFixed(2);

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (Number (current) - Number (initial)) * quantity;
    var profitPercentage = (((profit) / (initial)) * 10).toFixed(2);

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
