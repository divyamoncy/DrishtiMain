window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90|| document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.top = "-1px";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}