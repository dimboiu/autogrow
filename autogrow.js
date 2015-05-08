var Autogrow = (function(id){
  var element = document.getElementById(id);
  var previousHeight = 0;
  element.onkeyup = function(){
      var rowsLength = this.value.split("\n").length;
      if(previousHeight != rowsLength){
        this.rows =  rowsLength;
        previousHeight = rowsLength;
      }
    };
});