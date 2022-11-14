function addZeroes(num, len) {
  let numberWithZeroes = String(num);
  let counter = numberWithZeroes.length;

  while (counter < len) {
    numberWithZeroes = `0${numberWithZeroes}`;
    counter += 1;
  }
  return numberWithZeroes;
}

export default addZeroes;
