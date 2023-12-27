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

let richiedente1_is_visible = false;
let richiedente2_is_visible = false;

function ShowRichiedente1(){

  if(!richiedente1_is_visible){
   document.getElementById("cont_richiedente_info").innerHTML = ' <div class="label-checkbox-container" id="check_div_info2"><div><input type="checkbox" name="informazioni_pratica" value="Segnalato dall\'Assistente Sociale incaricato"><label>Segnalato dall\'Assistente Sociale incaricato</label></div><div><input type="checkbox" name="informazioni_pratica" value="Occorre designare un Assistente Sociale"><label>Occorre designare un Assistente Sociale</label></div><div><input type="checkbox" name="informazioni_pratica" value="Non occorrono ulteriori interventi"><label>Non occorrono ulteriori interventi</label></div><div> <input type="checkbox" name="informazioni_pratica" value="Trattasi di problemi risolvibili dagli operatori"><label>Trattasi di problemi risolvibili dagli operatori</label></div><div> <input type="checkbox" name="informazioni_pratica" value="Segnalato alla Direzione e agli Educatori"><label>Segnalato alla Direzione e agli Educatori</label></div> <div><input type="checkbox" name="informazioni_pratica" value="E\' necessario fornire riscontro"> <label>E\' necessario fornire riscontro</label></div></div>';
  }
  //no innehtml andiamo di display ( none o flex ) e giochiamo con i width

}

