class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.Congo = 0
      this.xPosition=0
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        xPosition:this.xPosition
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    getPlayerAtEscape(){
      database.ref("PlayerAtEscape").on("value",data => {
        this.Congo = data.val()
      })
    }
  static updatePlayerAtEscape(Congo){
    database.ref("/").update({
      PlayerAtEscape: Congo 
    })
  }
  }
  