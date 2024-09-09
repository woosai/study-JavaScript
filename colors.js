var night = "night";
var day = "day";

function changeTheme(self) {
  if (self.value == night) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    self.value = "day";

    tableBorderColorChange(true);

    setLinkedColor("powderblue");
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    self.value = "night";

    tableBorderColorChange(false);

    setLinkedColor("blue");
  }
}

function tableBorderColorChange(isNight) {
  const colors = ["black", "white"];

  if (isNight) {
    document.documentElement.style.setProperty(
      "--table-border-color",
      colors[1]
    );
  } else {
    document.documentElement.style.setProperty(
      "--table-border-color",
      colors[0]
    );
  }
}

function setLinkedColor(color) {
  var tagA = document.querySelectorAll("a");
  var index = 0;

  for (index = 0; index < tagA.length; index++) {
    tagA[index].style.color = color;
  }
}
