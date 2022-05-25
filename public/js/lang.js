window.addEventListener('load',() => {
    //console.log(localStorage.getItem('lang'));
    if(localStorage.getItem('lang') != null){
        if(localStorage.getItem('lang') == "ch"){
            aleman();
        }else{
            if(localStorage.getItem('lang') == "en"){
                ingles();
            }
        }
    }else{
        localStorage.setItem('lang','ch');
        aleman();
    }
    const langch = document.querySelectorAll(".langch");
    const langen = document.querySelectorAll(".langen");

    langch.forEach(function myFunction(item) {
        item.addEventListener('click',() => {
            localStorage.setItem('lang','ch');
            window.location.href = "/";
        });
      });

      langen.forEach(function myFunction(item) {
        item.addEventListener('click',() => {
            localStorage.setItem('lang','en');
            window.location.href = "/";
        });
      });


});


function aleman(){
    //TRADUCCION ALEMAN

    //--------------------------------------------------I N D E X    L A N D I N G ----------------------------------------------//

     //--------------------Section0 Navbar----------------
     var titel1=document.getElementsByClassName("nb_txt1");
     var titel2=document.getElementsByClassName("nb_txt2");
     var titel3=document.getElementsByClassName("nb_txt3");
     var titel4=document.getElementsByClassName("nb_txt4");
     var titel5=document.getElementsByClassName("nb_txt5");
     var titel6=document.getElementsByClassName("nb_txt6");

     Array.from(titel1).forEach(function(element) {
         element.innerHTML="BRANDING"
      });
      Array.from(titel2).forEach(function(element) {
        element.innerHTML="WEBDESIGN"
     });
     Array.from(titel3).forEach(function(element) {
        element.innerHTML="SOCIAL MEDIA"
     });
     Array.from(titel4).forEach(function(element) {
        element.innerHTML="E-MAIL-MARKETING"
     });
     Array.from(titel5).forEach(function(element) {
        element.innerHTML="SEO & SEM"
     });
     Array.from(titel6).forEach(function(element) {
        element.innerHTML="MIETEN"
     });


        
     //--------------------Section1 Branding----------------------

     document.querySelector(".sec1txt").innerHTML = "Unter Branding verstehen wir den Prozess der Schaffung einer ansprechenden, positiven Wahrnehmung eines Unternehmens, seiner Produkte oder Dienstleistungen in den Köpfen der Kunden. Dies erreichen wir durch die Entwicklung eines einheitlichen Themas, welches Einfluss auf die gesamte Marketingkommunikation nimmt und so Logo, Design und Leitbild prägt.";

      //--------------------Section1 Pakete Branding----------------------

     document.querySelector("#pbranding_1a").innerHTML = "Die perfekte Wahl für neu gegründete kleine Unternehmen, welche mit ihrem Branding noch am Anfang stehen oder für bestehende Firmen, die ihre Identität respektive ihr Erscheinungsbild anpassen möchten.";
     document.querySelector("#pbranding_1b").innerHTML = "Es beinhaltet: <br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Logo Neugestaltung</b><br/>";
     document.querySelector("#pbranding_2a").innerHTML = "Wenn Sie alle Möglichkeiten nutzen möchten, um Ihre Markenidentität zu fördern, ist dies der erste Schritt, den Sie machen sollten.";
     document.querySelector("#pbranding_2b").innerHTML = "Es umfasst:<br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Logo Umgestaltung</b><br/><b style='font-size: 20px;'><i class='fas fa-check'></i>Basis-Büromaterial mit Logo-Druck</b>";
     document.querySelector("#pbranding_3a").innerHTML = "Ideal für Unternehmen, die eine professionelle Markenidentität aufbauen wollen.";
     document.querySelector("#pbranding_3b").innerHTML = "Es beinhaltet:<br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Logo Umgestaltung</b><br/><b style='font-size: 20px;'><i class='fas fa-check'></i>Markenhandbuch</b>";
     document.querySelector("#pbranding_4a").innerHTML = "Teilen Sie uns Ihre Bedürfnisse und Anforderungen mit, damit wir Ihnen ein massgeschneidertes Angebot unterbreiten können.";
     var btn_kontakt=document.getElementsByClassName("btn_kontakt");
     Array.from(btn_kontakt).forEach(function(element) {
      element.innerHTML="KONTAKT";
   });
   var btn_volver=document.getElementsByClassName("btn_volver");
      Array.from(btn_volver).forEach(function(element) {
       element.value = "Zurück";
    });



     //--------------------Section2 Web Design----------------------
     document.querySelector(".sec2txt").innerHTML = "Webdesign verbindet visuelle und textliche Elemente mit dem Ziel, die Identität Ihrer Organisation zu vermitteln. Die Produkte oder Dienstleistungen werden dabei auf eine möglichst angenehme und für die Zielgruppe zugängliche Weise präsentiert.";

      //--------------------Section2 Pakete Diseno----------------------

      document.querySelector("#pdiseno_1a").innerHTML = "Die beste Wahl für neue Unternehmen auf dem Markt.";
      document.querySelector("#pdiseno_1b").innerHTML = "Es beinhaltet: <br/><span style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i> Landingpage / Zielseite</span>";
      document.querySelector("#pdiseno_2a").innerHTML = "Ideal für Unternehmen, die eine direkte Botschaft auf einer einzigen Seite vermitteln wollen. Der Hauptvorteil ist die Einfachheit.";
      document.querySelector("#pdiseno_2b").innerHTML = "Es beinhaltet: <br/><span style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i> einseitige Webseite</span>";
      document.querySelector("#pdiseno_3a").innerHTML = "Die beste Wahl für Unternehmen, die ihre Produkte oder Dienstleistungen online verkaufen wollen.";
      document.querySelector("#pdiseno_3b").innerHTML = "Es beinhaltet: <br/><span style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i> Webseite</span><br/><span style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i> E-Commerce</span>";
      document.querySelector("#pdiseno_4a").innerHTML = "Wenn Sie ein individuelles Angebot benötigen, rufen Sie uns einfach an oder schicken Sie uns eine Nachricht. Wir beraten Sie gerne persönlich.";

     //--------------------Section3 Social Media----------------------
     
     document.querySelector(".sec3txt").innerHTML = "Die sozialen Medien werden in unserem Leben immer allgegenwärtiger. Mit dem richtigen Ansatz können wir das Beste aus ihnen herausholen. Darauf ankommend, ob wir einfach nur präsent sein wollen, oder eine Online-Gemeinschaft aufbauen, entwickeln wir mit Ihnen die richtige Strategie und setzen diese um.";

     //--------------------Section3 Pakete Social Media----------------------

     document.querySelector("#psocial_1a").innerHTML = "Starten Sie Ihre Social-Media-Präsenz.";
     document.querySelector("#psocial_1b").innerHTML = "Es beinhaltet: <br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Gestalten und Verfassen von 4 massgeschneiderten Posts pro Monat in einem sozialen Netzwerk</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Foto-Shootings</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Monatliche Berichte</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> 100 Sfr. pro Monat Budget für Social-Media Werbung</b>";
     document.querySelector("#psocial_1t").innerHTML = "1'250 Sfr. pro Monat";
     document.querySelector("#psocial_2a").innerHTML = "Ideal für kleine und mittlere Unternehmen.";
     document.querySelector("#psocial_2b").innerHTML = "Es beinhaltet: <br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Gestalten und Verfassen von 8 massgeschneiderten Posts pro Monat in einem sozialen Netzwerk</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Erstellen von 4 individuellen Stories pro Monat</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Verwaltung der Community</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Foto-Shootings</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Monatliche Berichte</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> 200 Sfr. pro Monat Budget für Social-Media Werbung</b>";
     document.querySelector("#psocial_2t").innerHTML = "2'350 Sfr. pro Monat";
     document.querySelector("#psocial_3a").innerHTML = "Ideal für eine mittelgrosse Unternehmung.";
     document.querySelector("#psocial_3b").innerHTML = "Darin enthalten: <br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Gestalten und Verfassen von 12 massgeschneiderten Social Media Posts pro Monat</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Erstellen von 8 individuellen Posts pro Monat</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Verwaltung der Community</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Foto-Shootings</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> Monatliche Berichte</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> 400 Sfr. pro Monat Budget für Social-Media Werbung</b>";
     document.querySelector("#psocial_3t").innerHTML = "5'150 Sfr. pro Monat";
     document.querySelector("#psocial_4a").innerHTML = "Wenn Ihre Unternehmung eine massgeschneiderte Lösung benötigt, lassen Sie es uns wissen und wir werden Ihnen ein entsprechendes Angebot unterbreiten.";
     document.querySelector("#psocial_4t").innerHTML = "_ _ _ _ _ _ _ _ _ Sfr.";


     //--------------------Section4 Marketing----------------------

     document.querySelector(".sec4txt").innerHTML = "Dies ist die effektivste Art, Schweizer Unternehmen anzusprechen. Mit der richtigen Strategie, dem passenden Text, ansprechenden Bildern und der überzeugenden Online-Präsenz haben Sie die Möglichkeit, Ihre Zielgruppe zu erreichen.";


     //--------------------Section5 SEO----------------------

     document.querySelector(".sec5txt").innerHTML = "Die Positionierung in Google ist zentral. Wir positionieren Ihren Firmen-Auftritt gemäss Ihren Wünschen und Anforderungen.";


     //--------------------Section6 Team----------------------
     
     document.querySelector(".s6tl").innerHTML = "Unser Team";
     document.querySelector(".s6txt1").innerHTML = "Geschäftsführer";
     document.querySelector(".s6txt2").innerHTML = "Geschäftsführerin";
     document.querySelector(".s6txt3").innerHTML = "Marketing Director";
     document.querySelector(".s6txt4").innerHTML = "Grafikdesign Director";
     document.querySelector(".s6txt5").innerHTML = "Front-End-Entwickler";
     document.querySelector(".s6txt6").innerHTML = "Grafik Designer";
     document.querySelector(".s6txt7").innerHTML = "Junior Full-Stack-Entwickler";
     document.querySelector(".s6txt8").innerHTML = "Grafik Designerin";


     //--------------------Section7 Contact----------------------

     document.querySelector(".s7lab1").innerHTML = "Name";
     document.querySelector(".s7lab2").innerHTML = "Telefon";
     document.querySelector(".s7lab3").innerHTML = "E-Mail";
     document.querySelector(".s7lab4").innerHTML = "Dienstleistungen";
     document.querySelector(".s7lab4b").innerHTML = "Angebot";
     document.querySelector(".s7lab5").innerHTML = "Nachricht ";
     document.querySelector(".s7sel1Opt1").innerHTML = "Wählen";
     document.querySelector(".s7sel1Opt1b").innerHTML = "Choose";


     document.querySelector(".s7i1").innerHTML = "Telefon";
     document.querySelector(".s7i2").innerHTML = "Adresse";
     document.querySelector(".s7i3").innerHTML = "<strong>Öffnungszeiten:</strong><br/>Montag bis Freitag:<br/>08:00 - 12:00 / 13:00 - 18:00<br/>";



     $('#contact_i3').attr('placeholder','Name');
     $('#contact_i4').attr('placeholder','Telefon');
     $('#contact_i5').attr('placeholder','E-Mail');
     $('#contact_i9').attr('placeholder','Nachricht');




     //--------------------Section8 Footer----------------------

     

}

function ingles(){
     //TRADUCCION INGLES

    //--------------------------------------------------I N D E X    L A N D I N G ----------------------------------------------//


     //--------------------Section0 Navbar----------------

     var titel1=document.getElementsByClassName("nb_txt1");
     var titel2=document.getElementsByClassName("nb_txt2");
     var titel3=document.getElementsByClassName("nb_txt3");
     var titel4=document.getElementsByClassName("nb_txt4");
     var titel5=document.getElementsByClassName("nb_txt5");
     var titel6=document.getElementsByClassName("nb_txt6");

     Array.from(titel1).forEach(function(element) {
        element.innerHTML="BRANDING"
      });
      Array.from(titel2).forEach(function(element) {
        element.innerHTML="WEB DESIGN"
     });
     Array.from(titel3).forEach(function(element) {
        element.innerHTML="SOCIAL MEDIA"
     });
     Array.from(titel4).forEach(function(element) {
        element.innerHTML="E-MAIL-MARKETING"
     });
     Array.from(titel5).forEach(function(element) {
        element.innerHTML="SEO & SEM"
     });
     Array.from(titel6).forEach(function(element) {
        element.innerHTML="KONTAKT"
     });

        
     //--------------------Section1 Branding----------------------

     document.querySelector(".sec1txt").innerHTML = "We understand branding as the process of creating an appealing, positive perception of a company, its products or services in the minds of customers. We achieve this by developing a unified theme that influences all marketing communication and thus shapes the logo, design and mission statement.";
     
      //--------------------Section1 Pakete Branding----------------------

      document.querySelector("#pbranding_1a").innerHTML = "It is the perfect choice for small companies that are just starting or are implementing a change in their identity/appearance.";
      document.querySelector("#pbranding_1b").innerHTML = "It includes: <br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Logo / Redesign</b><br/>";
      document.querySelector("#pbranding_2a").innerHTML = "When you wish to embark into taking every chance to promote your brand identity this is the first step to make.";
      document.querySelector("#pbranding_2b").innerHTML = "It includes: <br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Logo / Redesign</b><br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Basic stationery with the logo and its identity imprinted</b>";
      document.querySelector("#pbranding_3a").innerHTML = "Ideal for companies that want to build a professional brand identity.";
      document.querySelector("#pbranding_3b").innerHTML = "It includes: <br/><b style='font-size: 20px;'><i class='fas fa-check'></i> Logo / Redesign</b><br/><b style='font-size: 20px;'><i class='fas fa-check'></i>Brand identity handbook</b>";
      document.querySelector("#pbranding_4a").innerHTML = "Let us know your needs and requirements to make a customized offer.";
      var btn_kontakt=document.getElementsByClassName("btn_kontakt");
      Array.from(btn_kontakt).forEach(function(element) {
       element.innerHTML="CONTACT";
    });
    var btn_volver=document.getElementsByClassName("btn_volver");
      Array.from(btn_volver).forEach(function(element) {
       element.value = "Back";
    });


     //--------------------Section2 Web Design----------------------

     document.querySelector(".sec2txt").innerHTML = "Web design combines visual and textual elements with the aim of communicating your organisation's identity. The products or services are presented in a way that is as pleasant as possible and accessible to the target group.";

     //--------------------Section2 Pakete Diseno----------------------

     document.querySelector("#pdiseno_1a").innerHTML = "Best choice for new companies in the market.";
     document.querySelector("#pdiseno_1b").innerHTML = "It includes: <br/><b style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i>Landing/ Contact-page</b>";
     document.querySelector("#pdiseno_2a").innerHTML = "This plan is a perfect fit for companies that want to give a direct message on a single page. The main benefit is simplicity.";
     document.querySelector("#pdiseno_2b").innerHTML = "It includes: <br/><b style='font-size: 20px; color: #eeeeec;font-weight: 100 !important;'><i class='fas fa-check'></i>A one-page Webseite</b>";
     document.querySelector("#pdiseno_3a").innerHTML = "Best choice for businesses that want to sell their products or services online.";
     document.querySelector("#pdiseno_3b").innerHTML = "It includes: <br/><b style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i>Webseite</b><br/><b style='font-size: 20px; color: #eeeeec;font-weight: 200 !important;'><i class='fas fa-check'></i> E-commerce</b>";
     document.querySelector("#pdiseno_4a").innerHTML = "When you require a customized offer, just give us a call or send to us a message.";



     //--------------------Section3 Social Media----------------------

     document.querySelector(".sec3txt").innerHTML = "Social media is becoming more and more ubiquitous in our lives. With the right approach, we can get the most out of it. Depending on whether we simply want to be present or build an online community, we develop the right strategy with you and implement it. ";

     //--------------------Section3 Pakete Social Media----------------------

     document.querySelector("#psocial_1a").innerHTML = "Start your Social Media presence.";
     document.querySelector("#psocial_1b").innerHTML = "It includes: <br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Design and drafting of 4 posts per month on a social network</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Photo-shooting</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Monthly reports</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>100 Sfr. per month Budget for Social Media advertising</b>";
     document.querySelector("#psocial_1t").innerHTML = "1'250 Sfr. per month";
     document.querySelector("#psocial_2a").innerHTML = "Ideal for Small and Medium Enterprises.";
     document.querySelector("#psocial_2b").innerHTML = "It includes: <br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Design and drafting of 8 posts per month on a social network</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>4 stories per month</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Community management</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Photo-shooting</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Monthly reports</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i> 200 Sfr. per month Budget for Social Media advertising</b>";
     document.querySelector("#psocial_2t").innerHTML = "2'350 Sfr. per month";
     document.querySelector("#psocial_3a").innerHTML = "Super service for a Medium-large company.";
     document.querySelector("#psocial_3b").innerHTML = "It includes: <br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Design and drafting of 12 social media posts per month</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>8 stories per month</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Community management</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Photo-shooting</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>Monthly reports</b><br/><b style='font-size: 18px;'><i class='fas fa-check'></i>400 Sfr. per month Budget for Social Media advertising</b>";
     document.querySelector("#psocial_3t").innerHTML = "5'150 Sfr. per month";
     document.querySelector("#psocial_4a").innerHTML = "If your organization needs a tailored-made solution please let us know it and we will make you an appropriate offer.";
     document.querySelector("#psocial_4t").innerHTML = "_ _ _ _ _ _ _ _ _ Sfr.";

     //--------------------Section4 Marketing----------------------

     document.querySelector(".sec4txt").innerHTML = "This is the most effective way to address Swiss companies. With the right strategy, the appropriate text, appealing images and a convincing online presence, you have the opportunity to reach your target group.";


     //--------------------Section5 SEO----------------------

     document.querySelector(".sec5txt").innerHTML = "The positioning in Google is key in today’s world. We position your company’s website according to your wishes and requirements.";


     //--------------------Section6 Team----------------------
     
     document.querySelector(".s6tl").innerHTML = "Our team";
     document.querySelector(".s6txt1").innerHTML = "Managing Director";
     document.querySelector(".s6txt2").innerHTML = "Managing Director";
     document.querySelector(".s6txt3").innerHTML = "Marketing Director";
     document.querySelector(".s6txt4").innerHTML = "Graphic Design Director";
     document.querySelector(".s6txt5").innerHTML = "Front-end Developer";
     document.querySelector(".s6txt6").innerHTML = "Graphic Designer";
     document.querySelector(".s6txt7").innerHTML = "Full-stack Developer Junior";
     document.querySelector(".s6txt8").innerHTML = "Graphic Designer";


     //--------------------Section7 Contact----------------------

     document.querySelector(".s7lab1").innerHTML = "Name";
     document.querySelector(".s7lab2").innerHTML = "Telephone";
     document.querySelector(".s7lab3").innerHTML = "E-Mail";
     document.querySelector(".s7lab4").innerHTML = "Service";
     document.querySelector(".s7lab4b").innerHTML = "Offer";
     document.querySelector(".s7lab5").innerHTML = "Message";
     document.querySelector(".s7sel1Opt1").innerHTML = "Choose";
     document.querySelector(".s7sel1Opt1b").innerHTML = "Choose";



     document.querySelector(".s7i1").innerHTML = "Telephone";
     document.querySelector(".s7i2").innerHTML = "Address";
     document.querySelector(".s7i3").innerHTML = "<strong>Opening hours:</strong><br/>Monday to Friday:<br/>08:00 - 12:00 / 13:00 - 18:00<br/>";


     $('#contact_i3').attr('placeholder','Name');
     $('#contact_i4').attr('placeholder','Phone');
     $('#contact_i5').attr('placeholder','E-Mail');
     $('#contact_i9').attr('placeholder','Your Message');


     //--------------------Section8 Footer----------------------


     

}