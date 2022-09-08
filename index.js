const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



 const titleCased = () => {
  const newTutorials = []
  for(const a of tutorials){
    const capturedName = a
    const splittedArray = capturedName.split('');
    let newMessage='';
    splittedArray.map(word =>{
      let wordArray =[0]
      let text = '';
      for (const a of word){
        wordArray.push(a);
      }
      wordArray[0]=wordArray[0].toupperCase();
      for (const b of wordArray){
        text = b;
      }
      newMessage = `${text}`;
      return newMessage;
    })
    newTutorials.push(newMessage.substring(0, newMessage.length - 1));
  }
  return newTutorials;
}
console.log(titleCased())

      
      
      
  
  


