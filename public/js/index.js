window.addEventListener('load', () =>{


    function toggle (collapseelement,shownelement) {
        collapseelement.classList.toggle("hide");
        shownelement.classList.toggle("hide");
      
      };

    //Branding
    const btnBranding = document.getElementById("btnBranding");
    const btnBrandingback= document.getElementById("btnBrandingback");
    const brandcollapse=document.getElementById("collapse");
    const branduncollapse=document.getElementById("otherdiv");

    btnBranding.addEventListener('click',function(){
        toggle(brandcollapse,branduncollapse);
    });

    btnBrandingback.addEventListener('click',function(){
        toggle(brandcollapse,branduncollapse);
    });

    //Diseno Web
    const btnDisenoWeb = document.querySelector("#btnDisenoWeb");
    const btnDisenoback = document.querySelector("#btn_Volver_Paqu_Web");
    const disenocollapse=document.getElementById("collapse2");
    const disenouncollapse=document.getElementById("otherdiv2");

    btnDisenoWeb.addEventListener('click',function(){
        toggle(disenocollapse,disenouncollapse);
    });

    btnDisenoback.addEventListener('click',function(){
        toggle(disenocollapse,disenouncollapse);
    });

    //Social Media
    const btnSocial = document.querySelector("#btnSocial");
    const btnSocialback = document.querySelector("#btn_Volver_Paqu_Social");
    const socialcollapse=document.getElementById("collapse3");
    const socialuncollapse=document.getElementById("otherdiv3");
    const longt = document.getElementById("vierwald");

    btnSocial.addEventListener('click',function(){
        console.log("PRINT "+longt.clientWidth);
        toggle(socialcollapse,socialuncollapse);

    });

    btnSocialback.addEventListener('click',function(){
        toggle(socialcollapse,socialuncollapse);
    });

    
    

    

   

    

    

    //Responsive
    

    //Branding Actions

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
});