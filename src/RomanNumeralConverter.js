function convertToRoman(num) {

    let result = "";
  
    const numeralDict = {
  
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    }
  
    const letterList = Object.keys(numeralDict);
    
    // we always have to cut down the number until it is less than the largest break point
    let numDigits = num.toString().split("").length;
    let maxLetterDigits = letterList[letterList.length - 1].toString().length;
    while (numDigits >= maxLetterDigits) {
      result += numeralDict[letterList[letterList.length - 1]];
      num -= letterList[letterList.length - 1]
      numDigits = num.toString().split("").length;
    }
  
    // until we reduce num to 0
    let breakPoint;
    while (num > 0) {
      
      // get next breakpoint value (900 if numDigits = 3 and digits[0] is 9)
      let nextValue = num.toString().split("")[0] * Math.pow(10, numDigits - 1);
      for (let i = letterList.length - 2; i >= 0; --i) {
  
        // find the next break point by reducing the breakpoint value until our nextValue is greater than it
        breakPoint = letterList[i];
        if (nextValue >= breakPoint) {
          break;
        }
      }
  
      result += numeralDict[breakPoint];
      num -= breakPoint;
      numDigits = num.toString().split('').length;
    }
    
    return result;
}

let test1 = convertToRoman(3999);
console.log(test1);