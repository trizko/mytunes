// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.models.length < 2){
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.models[0].play();
  }

});
