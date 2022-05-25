// Alert translation:
if(localStorage.getItem('lang') != null){
    if(localStorage.getItem('lang') == "ch"){
        var err01 = 'Bitte geben Sie Ihren Namen ein';
        var err02 = 'Bitte gültige Telefonnummer eingeben (nur Zahlen, mindestens 10 Zeichen)';
        var err03 = 'Bitte gültige E-Mail Adresse eingeben';
        var err04 = 'Bitte wählen Sie die gewünschte Leistung aus';
        var err04b = 'Bitte wählen Sie das Angebot, das Sie interessiert';
        var err05 = 'Bitte geben Sie Details zu Ihren Interessen an unseren Dienstleistungen an';
        var suc01 = 'Nachricht gesendet';
        console.log(err01);
    }else{
        if(localStorage.getItem('lang') == "en"){
            var err01 = 'Please enter your name'; 
            var err02 = 'Please enter your phone (numbers only, minimum 10 characters)';
            var err03 = 'Please write a valid email';
            var err04 = 'Please select the service required';
            var err04b = 'Please select the offer you are interested in';
            var err05 = 'Please write details of your interests in our services';
            var suc01 = 'Message sent successfully';
            console.log(err01);
        }
    }
}


window.addEventListener('load',()=>{
    // Form Inputs and Buttons
    const contractbtn=document.querySelector('#btnContratar');
    const iname=document.querySelector('#txtNombre');
    const imail=document.querySelector('#txtEmail');
    const itelef=document.querySelector('#txtTelefono');
    const iservice=document.querySelector('#contactservice-select');
    const imessage=document.querySelector('#contactmessage');
    const colservice=document.querySelector('#form_servselect');
    const colangebot=document.querySelector('#form_angebselect');
    const iangebot=document.querySelector('#contactserviceangebot-select');
    const is2opt1=document.querySelector('#s2opt1');
    const is2opt2=document.querySelector('#s2opt2');
    const is2opt3=document.querySelector('#s2opt3');
    const is2opt4=document.querySelector('#s2opt4');
    const forminputs = document.getElementsByClassName("forminputs");
        
    //Funcionality of offer buttons
    const btnBrand_K1=document.querySelector('#btnBrand_K1');
    const btnBrand_K2=document.querySelector('#btnBrand_K2');
    const btnBrand_K3=document.querySelector('#btnBrand_K3');
    const btnBrand_K4=document.querySelector('#btnBrand_K4');

    btnBrand_K1.addEventListener('click', ()=>{
        colangebot.classList.remove("dissapear");
        colservice.classList.add("col-md-6");
        jump('lk_contacto');
        iname.focus();
        iservice.value='BRANDING';
        iangebot.value= 'I';
    });

    btnBrand_K2.addEventListener('click', ()=>{
        colangebot.classList.remove("dissapear");
        colservice.classList.add("col-md-6");
        window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#lk_contacto";
        iname.focus();
        iservice.value='BRANDING';
        iangebot.value= 'II';
    });

    btnBrand_K3.addEventListener('click', ()=>{
        colangebot.classList.remove("dissapear");
        colservice.classList.add("col-md-6");
        window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#lk_contacto";
        iname.focus();
        iservice.value='BRANDING';
        iangebot.value= 'III';
    });

    btnBrand_K4.addEventListener('click', ()=>{
        colangebot.classList.remove("dissapear");
        colservice.classList.add("col-md-6");
        window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#lk_contacto";
        iname.focus();
        iservice.value='BRANDING';
        iangebot.value= 'IV';
    });


    var myFunction = function() {
        this.classList.remove('error');
    };

    Array.from(forminputs).forEach(function(element) {
        element.addEventListener('focus', myFunction);
      });

      iservice.addEventListener('change',function() {
          
        if (iservice.value == 'BRANDING'){
            colangebot.classList.remove("dissapear");
            colservice.classList.add("col-md-6");
            is2opt1.innerHTML='1. Sihl 1`250 Sfr.';
            is2opt2.innerHTML='2. Limmat 2`350 Sfr.';
            is2opt3.innerHTML='3. Aare 5`150 Sfr.';
            is2opt4.innerHTML='4. Rein';
        
        }else if (iservice.value == 'WEBDESIGN'){
            colangebot.classList.remove("dissapear");
            colservice.classList.add("col-md-6");
            is2opt1.innerHTML='1. Hönggerberg 1`250 Sfr.';
            is2opt2.innerHTML='2. Üetliberg 2`350 Sfr.';
            is2opt3.innerHTML='3. Matterhorn 5`150 Sfr.';
            is2opt4.innerHTML='4. Dufourspitze';

        }else if (iservice.value == 'SOCIAL MEDIA'){
            colangebot.classList.remove("dissapear");
            colservice.classList.add("col-md-6");
            is2opt1.innerHTML='1. Greifensee 1`250 Sfr.';
            is2opt2.innerHTML='2. Zürichsee 2`350 Sfr.';
            is2opt3.innerHTML='3. Vierwaldstättersee 5`150 Sfr.';
            is2opt4.innerHTML='4. Bodensee';

        }else{
            colangebot.classList.add("dissapear");
            colservice.classList.remove("col-md-6");
        };

    });

    contractbtn.addEventListener('click',(evento)=>{
        evento.preventDefault();
        let valido=true;
        let mensaje='';
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 2000
                      })

        if (iname.value==''){
            iname.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err01
            })
        }else if((itelef.value=='') || !(/^\d+$/.test(itelef.value)) || (itelef.value.length < 10) ){
            itelef.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err02
            })
        }else if(imail.value=='' || !(imail.value.match(/^[\u00C0-\u017Fa-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[\u00C0-\u017Fa-zA-Z0-9-]+(?:\.[\u00C0-\u017Fa-zA-Z0-9-]+)*$/)) || !(imail.value.indexOf('.') !== -1) ){
            imail.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err03
            })
        }else if (iservice.value==''){
            iservice.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err04
            })
        }else if(!colangebot.classList.contains('dissapear')){
            if(iangebot.value==''){
            iangebot.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err04b
            })
            }else if(imessage.value==''){
                imessage.classList.add('error');
                valido=false;
                Toast.fire({
                    icon: 'error',
                    title: err05
                })
            }
        }
        if (valido){
            contractbtn.classList.add('oculto');
            const url = '/api/formKontakt';
            json = {
                iname:    iname.value,
                itelef:   itelef.value,
                imail:    imail.value,
                iservice: iservice.value,
                iangebot: iangebot.value,
                imessage: imessage.value
            };
            // handle load event
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(json), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log("Fetch enviado, respuesta recibida");
                if(res.status < 200 || res.status >= 300){
                    return Promise.reject(res.statusText);
                }else{
                    return res.json();
                }
            })
            .then((data) => {
                $('#template-contactform')[0].reset();
                contractbtn.classList.remove('oculto');
                Toast.fire({
                    icon: 'success',
                    title: suc01
                  })
                
            })
            .catch((err) => {
                console.log(err);
            });
        }else{
            contractbtn.classList.remove('oculto');
            //modalbody.innerHTML = "Ingreso incorrecto!";
            //$("#mensaje").modal();
        }
    });
});