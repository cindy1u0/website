function addPic(path, alt, title, name) {
  return '<div class="hoverEffect">' +
    '<img src=' + path + 'alt="hanamikoji" class="image">' +
    '<div class="overlay">' +
    '<p style="font-size:30px">HANAMIKOJI DORI<br><br>Japan 8/12/2016</p>' +
    '</div>' +
    '</div>'
}

document.getElementById("hana").innerHTML = addPic("hana.jpg", 2, 3, 2);
