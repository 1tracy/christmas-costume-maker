$(document).ready(function(){

function switcher(clist, i) {
	i = 0;
	this.Next = function() {
		hide_current();
		show_next();
	}

	var hide_current = function() {
		if(clist){
			clist[i].style.visibility = "hidden";
			i++;
		}
	}

	var show_next = function() {
		if(clist){
			if(i == (clist.length)) {
				i = 0;
			}
			clist[i].style.visibility = "visible";
		}
	}
}


  var hat = $(".hat");
  var hair = $(".hair");
  var tops = $(".top");
  var pant = $(".pant");
  var shoe = $(".shoe");

  var hat_picker = new switcher(hat);
  document.getElementById("hat_button").onclick = function() {hat_picker.Next(); };

  var hair_picker = new switcher(hair);
  document.getElementById("hair_button").onclick = function() {hair_picker.Next(); };

	var top_picker = new switcher(tops);
	document.getElementById("top_button").onclick = function() {top_picker.Next(); };

	var pant_picker = new switcher(pant);
	document.getElementById("pant_button").onclick = function() {pant_picker.Next(); };

  var shoe_picker = new switcher(shoe);
  document.getElementById("shoe_button").onclick = function() {shoe_picker.Next(); };

  var coat_picker = new switcher(coat);
  document.getElementById("coat_button").onclick = function() {coat_picker.Next(); };
});


  $("#top_button").click(function(){
  $("#top-menu").css("visibility", "visible"); });
