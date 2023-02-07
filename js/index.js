var currentQuestion = getQuestion();

$(document).on("ready", function() {
  displayQuestion(currentQuestion);
});

$('.success .new-question, .error .new-question').click(function(){
  currentQuestion = getQuestion();
  displayQuestion(currentQuestion);
});

$(document).on('pagechange', function() {  
  $(".answers .true-false > *").on('click', function (e) {
    $(this).parent().children().removeClass('selected');
    $(this).addClass('selected');
  });
  
  $(".answers .qcm:not(.multiple) > *").on('click', function (e) {
    $(this).parent().children().removeClass('selected');
    $(this).addClass('selected');
  });
  
  $(".answers .qcm.multiple > *").on('click', function (e) {
    if(!$(this).hasClass('selected')) {
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  }); 

  // validation par appui sur la touche entrée lors de la saise des réponses (unique-answer)
  $(".unique-answer").on('keyup', (e) => {
    if(e.originalEvent.key === 'Enter') {
      validate(getUserAnswer());
    }
  });
});

// évènement pour la validation de la question
$('.actions .validate').click((e) => {
  e.preventDefault();
  validate(getUserAnswer());
})

$('.unique-answer input').on('keyup', e => {
  if(e.originalEvent.key == "Enter") {
    validate(getUserAnswer());
  }
})

/**
 * Récolte et renvoie la réponse de l'utilisateur depuis le DOM
 * 
 * @returns {String}
 */
function getUserAnswer() {
  let userAnswer = "";
  switch(currentQuestion.type) {
    case 'qcm' : 
      userAnswer = $('.answers .selected').html()
      break;
    case 'qcm multiple' : 
      userAnswer = Array.from($('.answers .selected')).map(el => el.innerHTML);
      break;
    case 'unique-answer' :
      userAnswer = document.querySelector('.answers input').value;
      break;
    case 'true-false':
      userAnswer = $('.answers .selected').data('value');
      break;
    }
  
  return userAnswer;
}


/**
 * 
 * @param {String | Array | Boolean} userAnswer la réponse de l'utilisateur
 * @returns Renvoie vers la bonne page de status (échec ou succès)
 */
function validate(userAnswer) {
  let success = true;
  switch(currentQuestion.type) {
    case 'unique-answer' :
      if(userAnswer.trim() === ""){
        alert("Vous devez saisir une réponse !");
        return;
      }
      console.log(currentQuestion.answer, userAnswer)
      if((''+currentQuestion.answer).trim().toLowerCase() !== userAnswer.trim().toLowerCase()) {
        success = false;
      }
      break;
    case 'true-false' :
      if(userAnswer === undefined) {
        alert("Vous devez choisir une option !");
        return;
      }
      if(currentQuestion.answer != userAnswer) {
        success = false;
      }
      break;
    case 'qcm' :
      let indAnswer = currentQuestion.propositions.indexOf(userAnswer);
      
      if(indAnswer === -1) {
        alert("Veuillez sélectionner votre réponse !");
        return;
      }
      if(indAnswer != currentQuestion.answer) {
        success = false;
      }
      break;
    case 'qcm multiple' :
      if(userAnswer.length === 0) {
        alert("Veuillez sélectionner au moins une réponse !")
        return;
      }
      if(currentQuestion.answers.length != userAnswer.length) {
        success = false;
      } else {
        let correctAnswers = currentQuestion.answers.map(a => currentQuestion.propositions[a]);
        success = correctAnswers.every(a => userAnswer.indexOf(a) !== -1);
      }
      break;
  }
  
  console.log(success);
  if(success) {
    location.hash = "success";
    let [answer, desc] = getStatus(success);

    $('.page.success .description p').html(desc);
    $('.page.success .answer p').html(answer);

  } else {
    location.hash = "error";
    let [answer, desc] = getStatus(success);

    $('.page.error .description p').html(desc);
    $('.page.error .answer p').html(answer);

  }
}


/**
 * Récupères des informations à propos de la question courante
 * 
 * @param {Boolean} succeed Si oui ou non la réponse à la question est correcte
 * @returns Un tableau contenant la vraie réponse et la description à la question
 */
function getStatus(succeed) {
  let answerText = "", descText = "";
  switch(currentQuestion.type) {
    case 'true-false' : 
      if(succeed) {
        answerText = "La réponse était bien <b>Vrai</b>";
      } else {
        answerText = "La bonne réponse était <b>Faux</b>"
      }
      break;
    case 'qcm':
      if(succeed) {
        answerText = `La bonne réponse était bien : <b>${currentQuestion.propositions[currentQuestion.answer]}</b>`;
      } else {
        answerText = `Malheureusement la bonne réponse était : <b>${currentQuestion.propositions[currentQuestion.answer]}</b>`;
      }
      break;
    case 'qcm multiple' :
      // si c'est une seule réponse, on l'affiche
      if (succeed) {
        answerText = currentQuestion.answers.length === 1 ? 'La ' : "Les ";
        answerText += "bonne" + (currentQuestion.answers.length === 1 ? '' : "s");
        answerText += " réponse" + (currentQuestion.answers.length === 1 ? '' : "s");
        answerText += " étai"  + (currentQuestion.answers.length === 1 ? 't' : "ent");
        answerText += " bien : ";
        answerText += currentQuestion.answers.map(a => `<li style="margin-left: 5px;"><i>${currentQuestion.propositions[a]}</i></li>`).join('');
      } else {
        answerText = "Malheureusement "
        answerText += currentQuestion.answers.length == 1 ? 'la ' : "les ";
        answerText += "bonne" + (currentQuestion.answers.length == 1 ? '' : "s");
        answerText += " réponse" + (currentQuestion.answers.length == 1 ? '' : "s");
        answerText += " étai"  + (currentQuestion.answers.length == 1 ? 't' : "ent : ");
        answerText += currentQuestion.answers.map(a => `<li style="margin-left: 5px;"><i>${currentQuestion.propositions[a]}<i></li>`).join('');
      }
      break;
      case 'unique-answer' : 
        if(succeed) {
          answerText = (Math.random() < 0.5 ? "Bien joué ! " : '') + `La bonne réponse était bien :  <b>${currentQuestion.answer}</b>`;
        } else {
          answerText = Math.random() < 0.5 
            ? "Oh la la ! Vous auriez dû dire : <b>" + currentQuestion.answer + "</b>"
            : `Malheureusement la bonne réponse était : <b>${currentQuestion.answer}</b>`;
        }
        break;
  }
  descText = currentQuestion.description;
  return [answerText, descText];
}


/**
 * Renvoie une question tirée au hasard dans le tableau des questions
 * @returns {Object}
 */
var i = 0;
function getQuestion() {
  let ind = Math.floor(Math.random() * dataQuestions.length);
  return dataQuestions[35];
}

/**
 * Tire un nombre aléatoire entre deux extrêmes 
 * 
 * @param {Number} a Valeur minimale
 * @param {Number} b Valeur maximale
 * @returns Nombre tiré aléatoirement
 */
function rand(a, b) {
  let random = Math.floor(Math.random() * ( b - a + 1)) + a;
  return random;
}

/**
 * Afficher une question tirée au hasard dans la room
 * 
 * @param {Object} question Question à afficher dans l'interface utilisateur
 */
function displayQuestion(question) {
  console.log(question);
  // selon le type de la question
  let questionSection = $('.room .question');
  questionSection.html(question.question);
  
  let answerSection = $('.room .answers');
  let html = "";
  switch(question.type) {
    case 'true-false':
      html += '<div class="true-false">';
        html += '<div class="true" data-value="1">Vrai</div>';
        html += '<div class="false" data-value="0">Faux</div>';
      html += '</div>';
      break;
    case 'qcm': case 'qcm multiple':
      // mélanger les propositions
      let propositions = [...question.propositions];
      for(let i = 0; i < question.propositions.length - 2; i++) {
        let randIndice = rand(i+1, question.propositions.length - 1);
        let tmp = propositions[i];
        propositions[i] = propositions[randIndice];
        propositions[randIndice] = tmp;
      }
      html += "<div>";
        html += question.type === 'qcm' ? '' : '<span class="multiple-choix-label">Plusieurs choix sont possibles !</span>';
        html += '<div class="' + question.type + '">';
          for(prop of propositions) {
            html += '<div>' + prop + '</div>'
          }
        html += '</div>';
      html += '</div>';
    break;
    case 'unique-answer':
      html += '<div class="unique-answer">';
        html += '<input type="text" placeholder="Votre réponse ..."  />';
      html += '</div>';
    break;
  }
  answerSection.html(html);
}