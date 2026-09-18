document.addEventListener("DOMContentLoaded", function () {
    var treeImage = document.getElementById("treeImage");

    treeImage.addEventListener("mouseover", function () {
      treeImage.src = "images/10Landscape_Start.jpg";
    });

    treeImage.addEventListener("mouseout", function () {
      treeImage.src = "images/10Landscape_Working.jpg";
    });
  });