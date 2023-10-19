function rot13(str) {
    let diff = 0;
    let final = '';
    for(let i=0; i<str.length; i++){
      let letterCode = str[i].charCodeAt();
      if(letterCode >= 65 && letterCode <= 90){
        if(letterCode + 13 > 90){
          diff = 13 - (91 - letterCode);
          letterCode = 65 + diff;
        } else {
          letterCode += 13;
        }
      }
      final +=  String.fromCharCode(letterCode);
    }
    return final;
  }
  
  console.log(rot13("SERR PBQR PNZC"));