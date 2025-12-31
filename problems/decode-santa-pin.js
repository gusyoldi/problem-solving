function decodeSantaPin(code) {
  const arrOfEncryptedDigits = code
    .replaceAll('[', '')
    .replaceAll(']', ',')
    .split(',');

  arrOfEncryptedDigits.pop();

  if (arrOfEncryptedDigits.length < 4) return null;

  let response = [];
  for (let i = 0; i < arrOfEncryptedDigits.length; i++) {
    let currDigit = arrOfEncryptedDigits[i].split('');

    if (currDigit[0] === '<') {
      response.push(response.at(-1));
    } else {
      let acc;
      for (let u = 0; u < currDigit.length; u++) {
        if (u === 0) {
          acc = currDigit[u] * 1;
        } else {
          if (currDigit[u] === '+') {
            acc = acc + 1;
            if (acc > 9) {
              acc = 0;
              continue;
            }
          } else {
            acc = acc - 1;
            if (acc < 0) {
              acc = 9;
              continue;
            }
          }
        }
      }
      response.push(acc);
    }
  }
  return response.join('');
}

module.exports = decodeSantaPin;
