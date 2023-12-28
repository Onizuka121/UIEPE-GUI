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
  } else {
    let div = document.getElementById("altro_div");
    if (document.getElementById("pos_giuridica").value == "altro") {
      div.innerHTML =
        ' <input type="text" name="altro_posizione_giuridica" class="input-in-pratica" placeholder="Inserisci posizione giuridica" style="width:70%;">';
      return;
    }
    div.innerHTML = "";
  }
}

function ControlAndShowSubCase(id_select) {
  let value = document.getElementById(id_select).value;
  let div_altro = document.getElementById("altro_div2");

  if (id_select != "select_invio_com") {
    if (value == "Contatto con A.S incaricato assente") {
      document.getElementById("div_sub_cases_1").style.display = "flex";
      document.getElementById("div_sub_cases_2").style.display = "none";
      div_altro.style.display = "none";
      document.getElementById("select_invio_com").selectedIndex = 0;
      return;
    }
    if (value == "Sollecito Invio Indagine di Servizio Sociale per udienza") {
      document.getElementById("div_sub_cases_2").style.display = "flex";
      document.getElementById("div_sub_cases_1").style.display = "none";
      div_altro.style.display = "none";
      return;
    }
    /*    PENSARE AD UN'ALTRA STRUTTURA DELLA FUNZIONA ( ALCUNE COSE SI RIPETONO TROPPE VOLTE )###
    if (value == "Sollecito Invio Indagine di Servizio Sociale per riunione GOT") {
      document.getElementById("div_sub_cases_2").style.display = "flex";
      document.getElementById("div_sub_cases_1").style.display = "none";
      div_altro.style.display = "none";
      return;
    }
    */
    document.getElementById("div_sub_cases_1").style.display = "none";
    document.getElementById("div_sub_cases_2").style.display = "none";
    
  } else {
    if (value == "Altro") {
      div_altro.style.display = "flex";
      return;
    }
  }
  document.getElementById("select_invio_com").selectedIndex = 0;
  div_altro.style.display = "none";
}
