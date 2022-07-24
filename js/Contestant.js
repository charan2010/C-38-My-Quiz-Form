class Contestant {
  constructor(){
    this.index = 0;
    this.answer = 0;
    this.name = 0;
  }

  getCount(){
   var contestantCountRef = database.ref('contestantCount');

  contestantCountRef.on("value",(data)=>{
     contestantCount = data.val();
     })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });    
  }
}