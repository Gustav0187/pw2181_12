

var inicioApp = function(){
    var Aceptar = function(){
        var usuario=$("#txtUsuario").val();
        var clave=$("#txtClave").val();
        
        var parametros="opc=validaentrada"+
                       "&usuario="+usuario+
                       "&clave="+clave+
                       "&aleatorio="+Math.random();
        $.ajax({
            cache:false,
            type: "POST",
            dataType: "json",
            url: "php/validaentrada.php",
            data: parametros,
            success: function(response){
                if(response.respuesta == true){
                    //Ocultamos el inicio
                    $("#secInicio").hide("slow");
                    //Aparecemos Usuarios
                    $("#frmUsuarios").show("slow");
                    //Ponemos el cursor en el primer cuadro de texto
                    $("#txtNombreUsuario").focus();
                }else{
                    alert("Usuario o Clave incorrecta");
                }

            },
            error: function(xhr,ajaxOptions,throwError){
                console.log(xhr);
               
            }
        });
    }
    var buscarUsuario = function(){
        var usuario = $("#txtNombreUsuario").val();
        var parametros = "opc=buscarUsuario"+
                         "&usuario=" + usuario + 
                         "&aleatorio=" + Math.random(); 
        
        if (usuario != "") {
            $.ajax({
            cache:false,
            type: "POST",
            dataType: "json",
            url: "php/buscarusuario.php",
            data: parametros,
            success: function(response){
                if (response.respuesta == true) {
                    $("#txtNombre").val(response.nombre);
                    $("#txtClaveUsuario").val(response.clave);
                }else{
                    $("#txtNombre").focus();
                }  
            },
            error: function(xhr,ajaxOptions,throwError){
                
               
            }
        });
        }
    }
    var teclaNombreUsuario = function(tecla){
        if (tecla.which == 13) { //Enter
            buscarUsuario();
        }
    }
    $("#btnAceptar").on("click",Aceptar);
    $("#txtNombreUsuario").on("keypress",teclaNombreUsuario)
}

$(document).ready(inicioApp);