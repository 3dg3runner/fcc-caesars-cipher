function rot13(str) {
  // set up encoded & decoded string vars + alphabet array
  let encodedStr = str;
  let decodedStr = "";
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // loop through each character in the encoded string
  for (let char = 0; char < encodedStr.length; char++) {
    // loop variable to see if character exists in alphabet array
    let charFound = false;

    // loop through alphabet array to see if char exists
    for (let i = 0; i < alphabet.length; i++) {
      // set alphabet array index & check for match
      let index = 0;
      if (encodedStr[char] === alphabet[i]) {
        // if match is found, decoded string
        index = i + 13;

        // check to make sure index is within array length
        if (index >= alphabet.length) {
          index -= alphabet.length;
        }
        
        // append decoded char to decoded string var
        decodedStr += alphabet[index];
        charFound = true;
      }
    }

    // if there was no char found in alphabet, append current char
    if (charFound === false) {
      decodedStr += encodedStr[char];
    }
  }
  
  return decodedStr;
}

// algorithm test cases
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
