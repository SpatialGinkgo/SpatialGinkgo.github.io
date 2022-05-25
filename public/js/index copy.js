window.addEventListener('load', () =>{

    //Branding
    const btnBranding = document.querySelector("#btnBranding");
    const btn_Volver_Paqu_Branding = document.querySelector("#btn_Volver_Paqu_Branding");
    const sec_branding = document.getElementById("cont_brand");
    const brand_pak = document.getElementById("brand_pak");

    //Diseno Web
    const btnDisenoWeb = document.querySelector("#btnDisenoWeb");
    const btn_Volver_Paqu_Web = document.querySelector("#btn_Volver_Paqu_Web");
    const sec_dis_web = document.querySelector(".sec_dis_web");
    const sec_dis_web_serv = document.querySelector(".sec_dis_web_serv");

    //Social Media
    const btnSocial = document.querySelector("#btnSocial");
    const btn_Volver_Paqu_Social = document.querySelector("#btn_Volver_Paqu_Social");
    const sec_social_media = document.querySelector(".sec_social_media");
    const sec_social_media_serv = document.querySelector(".sec_social_media_serv");

    function fadeinandout(elementfade,elementunfade) {
        elementunfade.style.position = 'absolute';
        elementunfade.style.top = '0';
        var op = 0.9;  // initial opacity
        var opf = 0.1;  // initial opacity
        elementunfade.style.display = 'block';
        var timer = setInterval(function () {
            if (op <= 0.1 && opf >= 1){
                clearInterval(timer);
                elementfade.style.display = 'none';
                elementunfade.style.position = 'relative';

            }
            elementfade.style.opacity = op;
            elementunfade.style.opacity = opf;
            elementfade.style.filter = 'alpha(opacity=' + op * 100 + ")";
            elementunfade.style.filter = 'alpha(opacity=' + opf * 100 + ")";
            opf += opf * 0.1;
            op -= op * 0.15;
        }, 30);
    }

    function unfade(element) {
        var opf = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.05;
        }, 30);
    }

    //Branding Actions
    btnBranding.addEventListener('click',(evt)=>{
        evt.preventDefault();
        console.log("enttre al evento");
        fadeinandout(sec_branding,brand_pak);
        
    });

    btn_Volver_Paqu_Branding.addEventListener('click',(evt)=>{
        evt.preventDefault();
        console.log("enttre al evento 2");
        fadeinandout(brand_pak,sec_branding);
        
    });

    //Branding Actions END

    //Diseno Web Actions
    btnDisenoWeb.addEventListener('click',(evt)=>{
        evt.preventDefault();

        sec_dis_web.classList.add('oculto_d');
        sec_dis_web_serv.classList.remove('oculto_d');
        sec_dis_web_serv.classList.remove('oculto_fade');
        sec_dis_web_serv.classList.add('fade_servicios');
    });

    btn_Volver_Paqu_Web.addEventListener('click',(evt)=>{
        evt.preventDefault();

        sec_dis_web_serv.classList.add('oculto_d');
        sec_dis_web.classList.remove('oculto_d');
    });
    //Diseno Web Actions END

    //Social Media Actions
    btnSocial.addEventListener('click',(evt)=>{
        evt.preventDefault();

        sec_social_media.classList.add('oculto_d');
        sec_social_media_serv.classList.remove('oculto_d');
        sec_social_media_serv.classList.remove('oculto_fade');
        sec_social_media_serv.classList.add('fade_servicios');
    });

    btn_Volver_Paqu_Social.addEventListener('click',(evt)=>{
        evt.preventDefault();

        sec_social_media_serv.classList.add('oculto_d');
        sec_social_media.classList.remove('oculto_d');
    });
    //Social Media Actions END

});

/*const expresionRegularCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
window.addEventListener('load', () =>{
    const txtNombre = document.querySelector('#txtNombre');
    const txtTelefono = document.querySelector('#txtTelefono');
    const txtEmail = document.querySelector('#txtEmail');
    const templatecontactformservice = document.querySelector('#template-contactform-service');
    const templatecontactformmessage = document.querySelector('#template-contactform-message');
    const btnContratar = document.querySelector('#btnContratar');
    const btnBranding = document.querySelector("#btnBranding");
    const btnDisenoWeb = document.querySelector("#btnDisenoWeb");
    const btnSocial = document.querySelector('#btnSocial');
    const btnMarketing = document.querySelector("#btnMarketing");
    const btnSeo = document.querySelector("#btnSeo");

    btnBranding.addEventListener('click',()=>{
        templatecontactformservice.value = "branding";
    });
    btnDisenoWeb.addEventListener('click',()=>{
        templatecontactformservice.value = "diseno_web";
    });
    btnSocial.addEventListener('click',()=>{
        templatecontactformservice.value = "social_media";
    });
    btnMarketing.addEventListener('click',()=>{
        templatecontactformservice.value = "email_marketing";
    });
    btnSeo.addEventListener('click',()=>{
        templatecontactformservice.value = "seo_sem";
    });

    //VALIDACIONES PARA ENVIAR EL CORREO ELECTRONICO
    btnContratar.addEventListener('click', (evt)=>{
        let valido = true;
        let mensaje = "";
        evt.preventDefault();
        
        if(txtNombre.value.trim() == ""){
            valido = false;
            mensaje = "Debe ingresar su nombre";
        }
        if(txtTelefono.value.trim() == ""){
            valido = false;
            mensaje = "Debe ingresar su telefono";
        }
        if(txtEmail.value.trim() == ""){
            valido = false;
            mensaje = "Debe ingresar un correo";
        }else{
            if(!checkRegexp(txtEmail.value, expresionRegularCorreo)){
                valido = false;
                mensaje = "Debe ingresar un correo válido"
            }
        }
        if(templatecontactformservice.value == 0){
            valido = false;
            mensaje = "Debe ingresar un tipo de servicio";
        }
        if(templatecontactformmessage.value.trim() == ""){
            valido = false;
            mensaje = "Debe ingresar un mensaje de lo que desea";
        }
        if(valido){
            
            let json = {
                Nombre: txtNombre.value,
                Telefono: txtTelefono.value,
                Email: txtEmail.value,
                Servicio: templatecontactformservice.value,
                Mensaje: templatecontactformmessage.value
            }
            fetch('/api/FormularioContacto',{
                method: 'POST',
                body: JSON.stringify(json), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            })
             .then( (res) =>{
                if(res.status < 200 || res.status >= 300){
                    return Promise.reject(res.statusText);
                }else{
                    return res.json();
                }
             })
             .then((data) =>{
                 if(data.message == 'Email enviado correctamente'){
                    txtNombre.value = '';
                    txtTelefono.value = '';
                    txtEmail.value = '';
                    templatecontactformmessage.value = '';
                    templatecontactformservice.value = 0;

                     alert('Mensaje enviado correctamente, pronto te contactaremos!');
                     btnenviarMensaje.classList.remove('oculto');

                 }

             }).catch((error) =>{
                 console.log("ha ocurrido un error en" + error);
             })
           
        }
        else{
           alert(mensaje);
           btnenviarMensaje.classList.remove('oculto');
        }
        
    });
});

function checkRegexp(value, regexp) {
    if (!(regexp.test(value))) {
        return false;
    } else {
        return true;
    }
}

function validarEntero(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        event.preventDefault();
        return false;
    } else {
        return true;
    }
};
*/

