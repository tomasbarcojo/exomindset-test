const func = (diccionario, palabra) => {
  let dic = {};
  diccionario.forEach(e => dic[e] = 0);

  let wordLength = '';
  let arrResultado = [];

  for (const el of diccionario) { 
    if (el.length > wordLength) wordLength = el.length;
  }

  let aux = wordLength;

  for (let i = 0; i < palabra.length; i += wordLength) {
    let cuttedWord = ''
    if (palabra.length - aux < wordLength) {
      cuttedWord = palabra.slice(i);
      i += palabra.length; 
    } else {
      cuttedWord = palabra.slice(i, aux);
    }

    aux += wordLength;

    for (const key in dic) {
      for (let j = 0; j < cuttedWord.length; j++) {
        const str = cuttedWord.slice(j, key.length * (j + 1));

        if (str === key) {
          dic[key] += 1
        };

      }
    }
    for (const key in dic) {
      let elemResultado = dic[key];
      while (elemResultado > 0) {
        arrResultado.push(key);
        elemResultado--;
      }
      dic[key] = 0;
    }
  }

  return arrResultado;
}

console.log(func(['a', 'aa', 'aaa'], 'aaabaa'));
// console.log(func(['a', 'aa', 'aaa'], 'caabaa'));
// console.log(func(['a', 'aa', 'aaa'], 'aaccaa'));