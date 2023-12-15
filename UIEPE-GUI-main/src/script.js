

var text = false;

function ShowPass(){

    var input = document.getElementById("pass");
    var div = document.getElementById("view_id");

    if(!text){
        input.type = 'text';
        div.style.backgroundImage = "url('/UIEPE-GUI-main/image/eye.png')";
        text = true;
    }else{
        input.type = "password";
        div.style.backgroundImage = "url('/UIEPE-GUI-main/image/hide.png')";
        text = false;
    }

}

