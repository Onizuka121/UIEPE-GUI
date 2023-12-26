var text = false;

function ShowPass() {
  var input = document.getElementById("pass");
  var div = document.getElementById("view_id");

  if (!text) {
    input.type = "text";
    div.style.backgroundImage = "url('hide.png')";
    text = true;
  } else {
    input.type = "password";
    div.style.backgroundImage = "url('eye.png')";
    text = false;
  }
}

function ShowAltro(par) {
  if (par == "ist") {
    let div = document.getElementById("altro_div_ist");
    if (document.getElementById("ist_detenzione").value == "altro istituto") {
      div.innerHTML =
        ' <input type="text" name="altro_ist_detenzione" class="input-in-pratica" placeholder="Inserisci istituto di detenzione" style="width:70%;">';
      return;
    }
    div.innerHTML = "";
  }else{
    let div = document.getElementById("altro_div");
    if (document.getElementById("pos_giuridica").value == "altro") {
      div.innerHTML =
        ' <input type="text" name="altro_posizione_giuridica" class="input-in-pratica" placeholder="Inserisci posizione giuridica" style="width:70%;">';
      return;
    }
    div.innerHTML = "";
  }

}
