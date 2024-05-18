// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 
Результат: ['Home','About','FAQ','Contacts']

// let texts = elems.map(elem => {
//     let startIdx = elem.indexOf('>') + 17;
//     let endIdx = elem.indexOf('</p>', startIdx);
//     return elem.substring(startIdx, endIdx);
//   });

//   console.log(texts);

//   Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
// let words = ['стакан','молоко','табуретка','вода'] 

// let newWords = words.map((elem) => {
//    let newArr = elem[0].toUpperCase() + elem.slice(1)
//    return newArr
// })
// console.log(newWords);
// Результат: ['Cтакан','Молоко','Табуретка','Вода']

// Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 

// let names = [ 
// 'Steven King', 
// 'Jonh Snow', 
// 'Oliver', 
// 'Neena Stich',
//  'Grant Laster', 
// 'Persius Master', 
// 'Lest' 
// ] 

// let fullNames = names.map((elem) => {
//    let [firstName, lastname] = elem.split(' ')
//    return [firstName, lastname]
// })

// console.log(fullNames);
// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]

