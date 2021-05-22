class Quiz {
  constructor(){
  //  this.title = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("aqua")
    fill(0)
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo() ;   

    if(allContestants !== undefined){
      fill("Red");
      textSize(20);
      var display_Answers = 230;
      for(var plr in allContestants){
        var correctAns = "2";
        console.log(allContestants[plr].answer)
       var correctAns = "2";
       if (correctAns === allContestants[plr].answer)
         fill("Green")
       else
         fill("red");

         display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)

    }

    
  
  }

  }

}