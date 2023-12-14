

var text = false;

function ShowPass(){

    var input = document.getElementById("pass");
    var div = document.getElementById("view_id");

    if(!text){
        input.type = 'text';
        div.style.backgroundImage = "url('/UIEPE-GUI-main/hide.png')";
        text = true;
    }else{
        input.type = "password";
        div.style.backgroundImage = "url('/UIEPE-GUI-main/eye.png')";
        text = false;
    }

}

