function convertToRoman(num) {
    const ROMAN_NUMERALS = {
       M:	1000,
       CM:	900,
       D:	500,
       CD:	400,
       C:	100,
       XC:	90,
       L:	50,
       XL:	40,
       X:	10,
       IX:	9,
       V:	5,
       IV:	4,
       I:	1
    }
     const romanNumKeys = Object.keys(ROMAN_NUMERALS);
    
     return romanNumKeys.reduce((accum, key) => {
       while(num >= ROMAN_NUMERALS[key]){
         num -= ROMAN_NUMERALS[key];
         accum += key;
       }
       return accum;
     }, '');
   }
   
   console.log(convertToRoman(3));