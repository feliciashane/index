console.log("Hello world!");


var acousticGuitar = new Pizzicato.Sound('audio/piano.mp3', function() {
    // Sound loaded!
    acousticGuitar.play();
});
     

function changeImage()
{
element=document.getElementById('example')
if (element.src.match("out"))
  {
  element.src="img/plant1_before.png";
  }
else
  {
  element.src="img/plant1_after.png";
  }
}

