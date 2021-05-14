class Quiz {
  constructor(){
    this.title = createElement('h1')
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
  

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
      fill("Green")
    }else {
      fill("red");
    }
  }
    
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    getContestantInfo( ) ;

    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("NOTE: Contestant who answered correct are highlighhted in green color!", 130,230);

    }
  
  }

}
