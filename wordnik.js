$(document).ready(function(){
  function getRandomWord(callback){
  $.ajax({
  url: "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
}).done(function(data) {
console.log('api success:');
console.log(data);
    console.log(data[0].word);
    callback(data[0].word);
});
}






$('#NewWord').click(function(){
  

  getRandomWord(function(randWord){
    
    $('#wordAppend').empty();
    $("#wordAppend").append(randWord + ":");
    
    // call getdefiniotion function with word as param
    console.log('27');


    getDefinition(randWord, function(text){
      $('#defAppend').empty();
      $('#defAppend').append(text);
    });
    
    
  });
  
});





function getDefinition(word,callback){
    console.log('44');
  $.ajax({
  url: "http://api.wordnik.com/v4/word.json/"+word+"/definitions?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
}).done(function(data) {
console.log('api success: definition');
console.log(data);
    
    callback(data[0].text);
    
});
}
});