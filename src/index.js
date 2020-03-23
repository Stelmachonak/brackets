module.exports = function check(str, bracketsConfig) {
    let strArr = str.split(""),
        stack = [],
        open = [],
        close = [],
        closeIndex,
        openIndex;


    // Если в строке не равное количество скобок, то возвращаем false
        if (strArr.length % 2 !== 0) {
          return false;
      }
  

    // Заполняю массивы нужными скобками для проверки
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (Array.isArray(bracketsConfig[i])) {
            open.push(bracketsConfig[i][0]);
            close.push(bracketsConfig[i][1]);
            continue;
        }
    }
    
    // Проверяем каждый символ в строке
    for (let j = 0; j < strArr.length; j++) {
        openIndex = open.indexOf(strArr[j]);
        if (openIndex !== -1) {
            openIndex = 1;
            // Нашли открывающую скобку. Помещаем ее в стек
            stack.push(openIndex);
            continue;
        }
        closeIndex = close.indexOf(strArr[j]);
        if (closeIndex !== -1) {
            closeIndex = 1;
            // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }

    open = [];
    close = [];
    return true;
};
