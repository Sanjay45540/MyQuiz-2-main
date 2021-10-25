class Quiz {
  constructor(){}

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

 start(){
    
      contestant = new Contestant();
      
        contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0)
    textSize(30)
    text("Result of the quiz",340,50)
    fill("Green")
    textSize(20)
    text("a:2",300,290)
    fill("Red")
    text("b:1",300,320)

    textSize(21);
    fill("Blue")
    text("Note: Contestant who answered correct are highlighted in green color!",125,230)



    Contestant.getPlayerInfo();
    
  }
}
for(var plr in allContestants){
  debugger;
  var correctAns="2"
  if(correctAns===allContestants[plr].answer)
  fill("Green")
  else
  ("Red")

  diplay_Answers+=30;
  textSize(20);
  text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_Answers)

}


