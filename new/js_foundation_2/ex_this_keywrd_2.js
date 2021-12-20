const character = {
    name: 'Simon',
    getCharacter (){
      return this.name;
    }
  };

  console.log(character.getCharacter());
 
  const giveMeTheCharacterNOW = character.getCharacter();
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW); //this should return 'Simon' bud doesn't