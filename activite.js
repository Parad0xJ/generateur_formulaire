 function main() {
    //Ajout de la balise hr et stylisation
    $('#droite').append('<hr>').css('color', '#8e05bc');
    $('hr').css({
       'border': '2px solid',
       'border-radius': '10px'
    });
    $('#btn1, #btn2, #btn3').css('margin-left', '10px');

    // Appuie sur le bouton 1 Label
    $('#btn1').on('click', function () {
       //Insertion div #contD aprés hr
       $('hr').after('<div id="contD">Texte du label : <input type="text" id="inpt1"> <button id="btn4">OK</button> <button id="cxl">Annuler</button> <div id="infos"></div></div>');
       //Affichage avec effet fadeIn() au click
       $('#contD').hide();
       $('#contD').fadeIn(1200, 'linear');
       //Desactivation des boutons 1 2 3
       $('#btn1, #btn2, #btn3').attr('disabled', 'disabled');
       //Appel Ajax fichier aide
       $('#infos').load('aide.html #label', function () {
          $(this).hide().fadeIn(1200, 'linear').css({
             color: '#67437c',
             'font-size': '14px','margin-top': '15px'
          });


       });


       //Appuie sur le bouton 4 créé dynamiquement
       $('#btn4').on('click', function () {
          //creation variable avec valeur textuel de  inpt1
          var $tl = $('#inpt1').val();
          console.log($tl); // verif.--> Debug
          $('#gauche').append('<span>' + $tl + '</span>');
          $('#contD, #infos').fadeOut('slow');
          $('#btn1,#btn2,#btn3').removeAttr('disabled');
       });

       //Appuie sur le bouton Annuler
       $('#cxl').on('click', function () {
          //Vide le texte dans le inpt text
          $('#inpt1').val('');
          //Efface la div conteneur + les infos Ajax avec effet
          $('#contD, #infos').fadeOut('slow');
          //Ré active les 3 boutons 
          $('#btn1,#btn2,#btn3').removeAttr('disabled');

       });
    });

    $('#btn2').on('click', function () {
       $('hr').after('<div id="contDb">ID de la zone de texte : <input type="text" id="inpt2"> <button id="btn5">OK</button> <button id="cxl">Annuler</button> <div id ="infos2"></div> </div>');
       $('#contDb').hide();
       $('#contDb').fadeIn(1200, 'linear');
       $('#btn1, #btn2, #btn3').attr('disabled', 'disabled');
       //Appel ajax pour le fichier aide
       $('#infos2').load('aide.html #zoneText', function () {
          $(this).hide().fadeIn(1200, 'linear').css({
             color: '#67437c',
             'font-size': '14px','margin-top': '15px'
          });
       });

       $('#btn5').on('click', function () {
          var $zdt = $('#inpt2').val();
          $('#gauche').append('<input type="text" id="' + $zdt + '"> <br>');
          $('#contDb,#infos2').fadeOut('slow');
          $('#btn1,#btn2,#btn3').removeAttr('disabled');
       });

       $('#cxl').on('click', function () {
          $('#inpt2').val('');
          //Efface la div conteneur
          $('#contDb,#infos2').fadeOut('slow');
          $('#btn1,#btn2,#btn3').removeAttr('disabled');
       });
    });

    $('#btn3').on('click', function () {
       $('hr').after('<div id="contDt">Texte du bouton : <input type="text" id="inpt3"> <button id="btn6">OK</button> <button id="cxl">Annuler</button> <div id="infos3"></div> </div>');
       $('#contDt').hide();
       $('#contDt').fadeIn(1200, 'linear');
       $('#btn1, #btn2, #btn3').attr('disabled', 'disabled');
       //Appel ajax fichier aide
       $('#infos3').load('aide.html #btn', function () {
          $(this).hide().fadeIn(1200, 'linear').css({
             color: '#67437c',
             'font-size': '14px','margin-top': '15px'
          });
       });

       $('#btn6').on('click', function () {
          var $okBtn = $('#inpt3').val();
          $('#gauche').append('<button id="left">' + $okBtn + '</button>');
          $('#left').css({
             'margin-top': '15px',
             'margin-left': '25px',

          });
          $('#contDt,#infos3').fadeOut('slow');
          $('#btn1,#btn2,#btn3').removeAttr('disabled');
       });
       //Click sur le bouton Annuler
       $('#cxl').on('click', function () {
          //Vide le input text
          $('#inpt3').val('');
          //Efface la div conteneur
          $('#contDt,#infos3').fadeOut('slow');
          //Ré active les boutons #1 #2 #3
          $('#btn1,#btn2,#btn3').removeAttr('disabled');
       });
    });


 }
 $(document).ready(main);
