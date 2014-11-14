// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.models.length < 2){
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song);
    }, this);

    this.on('ended', function(song){
      console.log('hello');
      // if(this.length){
      //   this.playFirst();
      // }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
