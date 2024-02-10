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

function ShowAltro(par = "") {
  if (par == "ist") {
    let div = document.getElementById("altro_div_ist");
    if (document.getElementById("ist_detenzione").value == "altro istituto") {
      div.innerHTML =
        ' <input type="text" name="altro_ist_detenzione" class="input-in-richiesta" placeholder="Inserisci istituto di detenzione" style="width:70%;">';
      return;
    }
    div.innerHTML = "";
  } else {
    let div = document.getElementById("altro_div");
    if (document.getElementById("pos_giuridica").value == "altro") {
      div.innerHTML =
        ' <input type="text" name="altro_posizione_giuridica" class="input-in-richiesta" placeholder="Inserisci posizione giuridica" style="width:70%;">';
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

  if(id_element =="rad_per_ord_rat" || id_element == "rad_per_ord_trib"){
    document.getElementById("select_affid_FFOO").selectedIndex = 0;
    document.getElementById("select_perv_FFOO").selectedIndex = 0;
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
      return;
    }
    if (value == "Appuntamento sottoscrizione MAP") {
      Show_$_Hide("div_sub_cases_4_1");
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
  if(id_element != "select_invio_com"){
    document.getElementById("select_invio_com").selectedIndex = 0;
  }
 
  document.getElementById("select_info_generali").selectedIndex = 0;
  div_altro.style.display = "none";
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

let divs_case_doc = [
  "div_doc_case_data",
  "div_doc_case_prog_tratt_map",
  "div_doc_case_tribunale",
  "div_doc_case_altro",
  "div_elenc_doc_si"
];

function ControlAndShowCaseDoc(id_el_to_show){

  let value = document.getElementById(id_el_to_show).value;
  value = value.trim();

  if(id_el_to_show == "select_proc_lavoro_succ_doc_si"){
    if(value == "Fornito appuntamento sottoscrizione AP" || value == "Fornito appuntamento sottoscrizione MAP" ){
      document.getElementById("div_doc_processo_lavoro_data_si").style.display = "flex";
      document.getElementById("div_proc_lavoro_succ_doc_si").style.display = "flex";
      return;
    }

    document.getElementById("div_doc_processo_lavoro_data_si").style.display = "none";

    return;
  }

  divs_case_doc.forEach(function (div_id){
    document.getElementById(div_id).style.display = "none";
  });

  if(value == "si, pervenuta documentazione"){
    document.getElementById("div_elenc_doc_si").style.display = "flex";
    document.getElementById("div_proc_lavoro_succ_doc_si").style.display = "flex";
    document.getElementById("div_proc_lavoro_succ_doc_no").style.display = "none";
    //hide div of no 
    return;
  }

  if(value == "no, pervenuta documentazione"){
    document.getElementById("div_proc_lavoro_succ_doc_si").style.display = "none";
    document.getElementById("div_proc_lavoro_succ_doc_no").style.display = "flex";
    document.getElementById("div_doc_processo_lavoro_data_si").style.display = "none";
    document.getElementById("select_proc_lavoro_succ_doc_si").selectedIndex = 0;
    document.getElementById("select_tipo_doc_si").selectedIndex = 0;
    return;
  }

  

  if(value == "Richiesta TO udienza per programma di trattamento MAP"){
    document.getElementById("div_doc_case_data").style.display = "flex";
    document.getElementById("div_doc_case_prog_tratt_map").style.display = "flex";
  }

  if(value == "Comunicazione Procura della Repubblica presso Tribunale di…."){
    document.getElementById("div_doc_case_tribunale").style.display = "flex";
   
  }
  if(value == "Richiesta Tribunale di Sorveglianza per udienza"){
    document.getElementById("div_doc_case_data").style.display = "flex";
  }
  if(value == "Altro"){
    document.getElementById("div_doc_case_altro").style.display = "flex";
  }

  document.getElementById("div_elenc_doc_si").style.display = "flex";
 

}


