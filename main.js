var initialPrice = document.querySelector("#initial");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
var chkbutton = document.querySelector("#btn");
var OPdiv = document.querySelector("#output-box");
var ErDiv = document.querySelector("#errMsg");
chkbutton.addEventListener("click" , calculateProfitLoss);

function calculateProfitLoss() {
  var IP = Number(initialPrice.value);
  var CP = Number(currentPrice.value);
  var SQ = Number(stockQuantity.value);

  if (IP === 0 || CP === 0 || SQ === 0 || IP === null || CP === null || SQ === null) {
      ErDiv.style.display = "block";
      OPdiv.style.display = "none";
  } else {
     if ( CP === IP) {
        ErDiv.style.display = "none";
        OPdiv.style.display = "block";
        OPdiv.style.color = 'grey';
        OPdiv.innerText = "No Profit or Loss"; 
    } else if ( IP > CP ) {
      var loss = (IP - CP)*SQ;
      var losspercent = (loss/IP)*100;
      ErDiv.style.display = "none";
      OPdiv.style.display = "block";
      OPdiv.style.color = 'red';
      OPdiv.innerText = "Loss Is " + loss + " And Loss Percent is " + losspercent + "%";
    } else if ( CP > IP ) {
      var profit = (CP - IP)*SQ;
      var profitpercent = (profit/IP)*100;
      ErDiv.style.display = "none";
      OPdiv.style.display = "block";
      OPdiv.style.color = 'blue';
      OPdiv.innerText = "Profit Is " + profit + " And Profit Percent is " + profitpercent + "%";
    } 
  }
}