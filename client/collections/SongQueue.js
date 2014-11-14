// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add remove', function(){
      if(this.length){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
      if(this.length === 0){
        this.trigger('stop');
      }
    }, this);

    this.on('ended', function(song){
      this.remove(song);
      if(this.length){
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
