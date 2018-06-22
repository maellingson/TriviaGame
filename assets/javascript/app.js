var questions = [{
    question: "1. What is the name of Hermione's cat?",
    answers:["James", "Spot", "Crookshanks", "Ozzy"],
    correctAnswer: "Crookshanks"
  }, {
    question: "2. What are Gryffindor's colors?",
    answers:["Red and Purple", "Green and Blue", "Pink and Yellow", "Red and Gold"],
    correctAnswer: "Red and Gold"
  }, {
    question: "3. What did Dumbledore see himself holding when he looked in the mirror of Erised?",
    answers:["Socks", "Money", "A Nimbus 2000", "Cloak of Invisibility"],
    correctAnswer: "Socks"
  }, {
    question: "4. What is the name of an object in which a Dark wizard or witch has hidden a fragment of his or her soul for the purpose of attaining immortality?",
    answers:["A Precious", "A Horcrux", "A Hopeful", "A Horror"],
    correctAnswer: "A Horcrux"
  }, {
    question: "5. Sirius Black could turn into what animal?",
    answers:["A Crow", "A Dog", "A Dolphin", "A Rat"],
    correctAnswer: "A Dog"
  }, {
    question: "6. Who wrote the Harry Potter books?",
    answers:["George R. R. Martin", "J. R. R. Tolkein", "C.S. Lewis", "J.K. Rowling"],
    correctAnswer: "J.K. Rowling"
  }, {
    question: "7. What's the name of the snake language that Harry can speak?:",
    answers:["Snake Speak", "Slytherin", "Parseltonge", "Python"],
    correctAnswer: "Parseltonge"
  },  {
    question: "8. Who is the Gryffindor house ghost?:",
    answers:["Nearly Headless Nick", "Casper", "The Bloody Barron", "Limbless Larry"],
    correctAnswer: "Nearly Headless Nick"
  }, {
    question: "9. Which of the following is NOT a ball used in Quiddich:",
    answers:["Quaffle", "Blobber", "Snitch", "Bludger"],
    correctAnswer: "Blobber"
  }, {
    question: "10. Molly Weasley is known for gifting what at Christmas?",
    answers:["Fruitcakes", "Socks", "Sweaters", "Chocolate Frogs"],
    correctAnswer: "Sweaters"
}];




$('#start').on("click", function() {
    game.start();
  })

     
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function() {
      game.counter--;
      $('#counter').html(game.counter);
      if(game.counter === 0){
        game.done();
      }
    },
    start: function(){
      timer = setInterval(game.countdown, 1000);
      $('#trivia').prepend('<h2> Time Remaining: <span id="counter">60</span> Seconds </h2>')
      $('#start').remove();

      for (var i =0; i < questions.length; i++){
        $('#trivia').append('<h2>' + questions[i].question + '</h2>')
        for (var j = 0; j < questions[i].answers.length; j++){
          $('#trivia').append('<input type="radio" name="question-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j])
        }
      }
    },
    done: function(){
      $.each($('input[name="question-0"]:checked'), function(){
        if($(this).val() === questions[0].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-1"]:checked'), function(){
       if($(this).val() === questions[1].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
     });
     $.each($('input[name="question-2"]:checked'), function(){
       if($(this).val() === questions[2].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
     });
     $.each($('input[name="question-3"]:checked'), function(){
        if($(this).val() === questions[3].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
     });
     $.each($('input[name="question-4"]:checked'), function(){
        if($(this).val() === questions[4].correctAnswer){
          game.correct++;
        } else {
          game.incorrect++;
        }
    });
    $.each($('input[name="question-5"]:checked'), function(){
       if($(this).val() === questions[5].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
    });
    $.each($('input[name="question-6"]:checked'), function(){
       if($(this).val() === questions[6].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
    });
    $.each($('input[name="question-7"]:checked'), function(){
       if($(this).val() === questions[7].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
    });
    $.each($('input[name="question-8"]:checked'), function(){
       if($(this).val() === questions[8].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
    });
    $.each($('input[name="question-9"]:checked'), function(){
       if($(this).val() === questions[9].correctAnswer){
         game.correct++;
       } else {
         game.incorrect++;
       }
     });
      
     this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#trivia h2').remove();
        $('#trivia').html('<h2>Done!</h2>');
        $('#trivia').append('<h3>Correct Answers: ' + this.correct + '</h3>');
        $('#trivia').append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        $('#trivia').append('<h3>Unanswered: ' +(questions.length - (this.incorrect + this.correct)) + '</h3>');
      }

    };
  