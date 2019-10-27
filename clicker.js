var score = 0;
var spc = 1;
var autoCost = 25;
var boostCost = 25;
var autoClickStart = false;
var apc = 1;
var btnColours = ["dark", "primary", "success", "danger", "warning", "info", "light"];
var colourCount = 0;

$(".clicker").click(function() {
  score = score + spc;
  $("h1").text(score);
});

$(".autoclick").click(function() {
  if (score >= autoCost) {
    score = score - autoCost;
    autoCost = autoCost * 2;
    apc *= 2;
    autoStart();
  } else {
    alert("Not Enough Points");
  }
  $(".autocost").text("cost: " + autoCost);
  $("h1").text(score);
});

$(".clickboost").click(function() {
  if (score >= boostCost) {
    score = score - boostCost;
    boostCost = boostCost * 2;
    spc = spc + 1;
  } else {
    alert("Not Enough Points");
  }
  $(".boostcost").text("cost: " + boostCost);
  $("h1").text(score);
});

$(".btn-colour").click(function() {
  if (colourCount >= 6) {
    $(".clicker").removeClass("btn-outline-" + btnColours[colourCount]).addClass("btn-outline-" + btnColours[0]);
    colourCount = 0;
  } else {
    $(".clicker").removeClass("btn-outline-" + btnColours[colourCount]).addClass("btn-outline-" + btnColours[colourCount + 1]);
    colourCount++;
  }
});

function autoStart() {
  if (!autoClickStart) {
    autoClickStart = true;
    setInterval(autoScore, 500);
  }
}

function autoScore() {
  score += apc;
  $("h1").text(score);
  autoStart();
}
