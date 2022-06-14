/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = string.split(' ').map((name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString (string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if(i % 2 === 0){
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
  if(action === 'uppercase') {
    return string.toUpperCase();
  } else if(action === 'lowercase'){
    return string.toLowerCase();
  } else if(action === 'fence') {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if(i % 2 === 0){
        newString += string[i].toLowerCase();
      } else {
        newString += string[i].toUpperCase();
      }
    }
    return newString;
  } else if(action === 'capitalize') {
    return string.split(' ').map((name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`).join(' ');
  } else {
    return string;
  }
}

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase()
    case 'lowercase':
      return string.toLowerCase()
    case 'fence':
      let newString = '';
      for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
          newString += string[i].toLowerCase();
        } else {
          newString += string[i].toUpperCase();
        }
      }
      return newString
    case 'capitalize':
      return string.split(' ').map((name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`).join(' ')
    default:
      return string
  }
}

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (const letter of string) {
    console.log(letter);
  }
}

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let index = 0;
  while (index < 5) {
    console.log(string[index]);
    index++;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
  string.split('').forEach((item) => {
    console.log(item);
  });
}
