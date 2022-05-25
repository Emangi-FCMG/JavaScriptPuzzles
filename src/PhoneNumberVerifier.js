function telephoneCheck(str) {

    // check for valid phone number
  
    // there must appear either 10 digits
    // or there must appear 11 digits (leading 1)
  
    // digits must be grouped into (1) 3 3 4
  
    // area codes must have no parenthesis or  a single set of open + close parenthesis
  
    // no alpha characters
    // only non numeric characters are spaces (" "), hyphens ("-")
    
    // immediately rule out strings that contain invalid characters
    if (str.match(/[^ \-()1234567890]/)) { return false; }
  
    // parenthesis
    if (str.indexOf('(') !== -1) {
      if (str.indexOf(')') !== str.indexOf('(') + 4) { return false; }
    } else if (str.indexOf(')') !== -1) { return false; }
  
    let openMatch = str.match(/[(]/g);
    let closeMatch = str.match(/[)]/g);
    if ((openMatch !== null && openMatch.length > 1) || (closeMatch !== null && closeMatch.length > 1)) {
  
      return false;
    }
  
    // remove leading 1s (any other leading numbers will invalidate the number later)
    if (/^[1][^0123456789]/.test(str)) { str = str.replace(/^[1][^0123456789]/, ""); }
  
    // remove first 2 groups of 3 (return false if we don't find them)
    if (!/[0123456789]{3}/.test(str)) { return false; } 
    str = str.replace(/[0123456789]{3}/, "");
  
    if (!/[0123456789]{3}/.test(str)) { return false; } 
    str = str.replace(/[0123456789]{3}/, "");
  
    // remove group of 4 (return false if we don't find one)
    if (!/[0123456789]{4}/.test(str)) { return false; }
    str = str.replace(/[0123456789]{4}/, "");
  
    // check for remaining numbers (there should be none)
    if (str.match(/[0123456789]/) !== null) { return false; }
  
    return true;
  }
  
  telephoneCheck("5555555555");         // true
  telephoneCheck("555-555-5555");       // true
  telephoneCheck("1 555-555-5555");     // true
  telephoneCheck("1 (555) 555-5555");   // true
  telephoneCheck("2(757)622-7382");     // false
  telephoneCheck("2(757)6227382");      // false
  telephoneCheck("11 555-555-5555");    // false
  telephoneCheck("-1 (757) 622-7382");  // false
  telephoneCheck("123**&!!asdf#");      // false
  telephoneCheck("(6054756961)");       // false