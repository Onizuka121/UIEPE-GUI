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

let id_divs_parent_with_radio = [
  "select_affid_FFOO",
  "select_perv_FFOO",
  "rad_per_ord_trib",
  "rad_per_ord_rat",
];

function ControlAndShowSubCase(id_element, id_div_optional_to_keep = null) {
  id_element = id_element.trim();
  let value = document.getElementById(id_element).value;
  let div_altro = document.getElementById("altro_div2");
  value = value.trim();

  if (test()) {
    document.getElementsByName("tipo_pervenuta").forEach(function (el) {
      el.checked = false;
    });
  }
  function test() {
    let bool = true;
    id_divs_parent_with_radio.forEach(function (element) {
      if (element == id_element) {
        bool = false;
        return;
      }
    });
    return bool;
  }
  if (id_element != "select_invio_com") {
    if (value == "seleziona") {
      if (!(id_element == "select_case_non_in_carico" ||id_element == "select_case_in_carico")) {
        document.getElementById("div_sub_cases_2_1").style.display = "none";
        return;
      }
    }
    if (value == "Contatto con A.S incaricato assente") {
      Show_$_Hide("div_sub_cases_1");
      div_altro.style.display = "none";
      document.getElementById("select_invio_com").selectedIndex = 0;
      return;
    }
    if (
      value == "Sollecito Invio Indagine di Servizio Sociale per udienza" ||
      value == "Sollecito Invio Indagine di Servizio Sociale per riunione GOT"
    ) {
      Show_$_Hide("div_sub_cases_2");
      div_altro.style.display = "none";
      return;
    }

    if(value == "Sapere se l’incarico è assegnato e conoscere nominativo AS"){
      Show_$_Hide("div_sub_cases_5");
      return;
    }

    if(value == "Si forniscono informazioni a carattere generale"){
      Show_$_Hide("div_sub_cases_6");
      return;
    }

    if(value == "Altro" && id_element == "select_info_generali"){
      Show_$_Hide("altro_div6","div_sub_cases_6");
      return;
    }

    if (
      value ==
      "Presentazione istanza urgente e non differibile di modifica prescrizioni"
    ) {
      Show_$_Hide("div_sub_cases_3");
      return;
    }

    if (value == "Appuntamento sottoscrizione verbale AP") {
      Show_$_Hide("div_sub_cases_4");
      if (last_index_of_select_element == 3) {
        select_element.remove(last_index_of_select_element);
        last_index_of_select_element--;
      }
      return;
    }
    if (value == "Appuntamento sottoscrizione MAP") {
      Show_$_Hide("div_sub_cases_4_1");
      let newOption = new Option(text_value, text_value);
      select_element.add(newOption);
      last_index_of_select_element++;
      return;
    }

    if (
      value ==
      "Pervenuta ordinanza Tribunale di Sorveglianza notificata da FFOO"
    ) {
      Show_$_Hide("div_sub_cases_4_1", "div_sub_cases_4");
      return;
    }

    if (
      value ==
      "Pervenuta ordinanza di ratifica dell’affidamento provvisorio notificata da FFOO"
    ) {
      Show_$_Hide("div_sub_cases_4_2", "div_sub_cases_4");
      return;
    }
    if (value == "Si , fornito di appuntamento") {
      Show_$_Hide(
        "div_sub_cases_2_1",
        id_div_optional_to_keep,
        "div_sub_cases_4"
      );
      return;
    }

    if (
      value == "No , si attende ordinanza" ||
      value == "Emerge difficoltà da sottoporre a capo area: invio a capo area"
    ) {
      Show_$_Hide("div_sub_cases_4_1", "div_sub_cases_4");
      return;
    }
    if (value == "No , si attende ordinanza di ratifica") {
      Show_$_Hide("div_sub_cases_4_2", "div_sub_cases_4");
      return;
    }
  } else {
    if (value == "Altro") {
      div_altro.style.display = "flex";
      return;
    }
  }
  if (id_element != "select_invio_com" && id_element != "select_info_generali") {
    Show_$_Hide(null);
  }
  if(id_element == "select_info_generali"){
    Show_$_Hide("div_sub_cases_6","select_info_generali");
    return;
  }
  document.getElementById("select_invio_com").selectedIndex = 0;
  document.getElementById("select_affid_FFOO").selectedIndex = 0;
  document.getElementById("select_perv_FFOO").selectedIndex = 0;
  document.getElementById("select_info_generali").selectedIndex = 0;
}

let id_divs = [
  "div_sub_cases_1",
  "div_sub_cases_2",
  "div_sub_cases_2_1",
  "div_sub_cases_3",
  "div_sub_cases_4",
  "div_sub_cases_4_1",
  "div_sub_cases_4_2",
  "altro_div2",
  "div_sub_cases_5",
  "div_sub_cases_6",
  "altro_div6"

];

function Show_$_Hide(
  id_div_to_show = null,
  id_div_to_keep = null,
  id_super_div_to_keep = null
) {
  if (id_div_to_show != null) {
    document.getElementById(id_div_to_show).style.display = "flex";
  }
  id_divs.forEach(For);
  function For(doc) {
    if (
      doc != id_div_to_show &&
      doc != id_div_to_keep &&
      doc != id_super_div_to_keep
    ) {
      document.getElementById(doc).style.display = "none";
    }
  }
}
