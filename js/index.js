var currentQuestion = getQuestion();

// Au chargement de l'application
$(document).on("ready", function() {
  updateUserStatus();
  displayQuestion(currentQuestion);
});

// Lors du click sur continuer (error, success)
$('.success .new-question, .error .new-question').click(function(){
  currentQuestion = getQuestion();
  displayQuestion(currentQuestion);
});

// Evènement à binder à chaque changement de page
$(document).on('pagechange', function() {  
  $(".answers .true-false > *").on('click', function (e) {
    $(this).parent().children().removeClass('selected');
    $(this).addClass('selected');
  });
  
  // Lors de la sélection d'une propotion (qcm simple)
  $(".answers .qcm:not(.multiple) > *").on('click', function (e) {
    $(this).parent().children().removeClass('selected');
    $(this).addClass('selected');
  });
  
  // Lors de la selection d'une proposition (qcm multiple)
  $(".answers .qcm.multiple > *").on('click', function (e) {
    if(!$(this).hasClass('selected')) {
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  }); 
  
  // validation par appui sur la touche entrée lors de la saisie des réponses (unique-answer)
  $('.unique-answer input').on('keyup', e => {
    if(e.originalEvent.key == "Enter") {
      validate(getUserAnswer());
    }
  });
});

// évènement pour la validation de la question (room)
$('.room .actions .validate').click((e) => {
  e.preventDefault();
  validate(getUserAnswer());
});

// Lors de l'appui du boutton valider (modification du nom d'utilisateur)
$('.user .actions .validate').click((e)=>{
  e.preventDefault();
  let currentUsername= $('.user .user-info input')[0].value;
  if(currentUsername == ""){
    alert("Entrez votre pseudo svp!");
    return ;
  }
  $('.user .user-info input')[0].value="";
  setUserInfo ({username: currentUsername.trim().slice(0,10)});
  updateUserStatus();
  location.hash='home';
});