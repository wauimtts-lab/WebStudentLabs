/**
 * Лабораторная работа «Основы JavaScript: функции».
 *
 * Реализуйте тело каждой функции. Имена функций и их параметры не изменяйте:
 * по ним работают автоматические тесты в файле core.spec.js.
 * Проверка решения: команда  npm test
 */

/**
 * Задание 1. Проверка на целое число.
 * Верните true, если число n целое, и false в противном случае.
 *
 * Примеры: isInteger(3) → true; isInteger(1.2) → false
 *
 * @param {number} n
 * @returns {boolean}
 */
function isInteger(n) {
    // Ваш код
}

/**
 * Задание 2. Массив чётных чисел.
 * Верните массив чётных чисел от 2 до 20 включительно.
 *
 * Пример: even() → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 *
 * @returns {number[]}
 */
function even() {
    // Ваш код
}

/**
 * Задание 3. Сумма чисел от 1 до n с помощью цикла.
 *
 * Примеры: sumTo(4) → 10; sumTo(100) → 5050
 *
 * @param {number} n — натуральное число
 * @returns {number}
 */
function sumTo(n) {
    // Ваш код
}

/**
 * Задание 4. Сумма чисел от 1 до n с помощью рекурсии.
 * Функция должна вызывать сама себя; циклы не используются.
 *
 * Примеры: recSumTo(4) → 10; recSumTo(100) → 5050
 *
 * @param {number} n — натуральное число
 * @returns {number}
 */
function recSumTo(n) {
    // Ваш код
}

/**
 * Задание 5. Факториал числа n: n! = 1 · 2 · … · n, при этом 0! = 1.
 *
 * Примеры: factorial(4) → 24; factorial(5) → 120
 *
 * @param {number} n — целое неотрицательное число
 * @returns {number}
 */
function factorial(n) {
    // Ваш код
}

/**
 * Задание 6. Проверка, является ли число степенью двойки (1, 2, 4, 8, …).
 *
 * Примеры: isBinary(1) → true; isBinary(2048) → true;
 *          isBinary(0) → false; isBinary(12) → false; isBinary(1023) → false
 *
 * @param {number} n — целое число
 * @returns {boolean}
 */
function isBinary(n) {
    // Ваш код
}

/**
 * Задание 7. n-е число Фибоначчи.
 * Последовательность: 0, 1, 1, 2, 3, 5, 8, 13, …
 * Каждое число равно сумме двух предыдущих; fibonacci(0) = 0, fibonacci(1) = 1.
 *
 * Примеры: fibonacci(1) → 1; fibonacci(2) → 1; fibonacci(7) → 13; fibonacci(10) → 55
 *
 * @param {number} n — целое неотрицательное число
 * @returns {number}
 */
function fibonacci(n) {
    // Ваш код
}

/**
 * Задание 8. Функция с накоплением результата.
 * Верните новую функцию, которая хранит текущее значение (вначале — initialValue).
 *
 * Если operatorFn передана, то при каждом вызове с аргументом newValue
 * возвращённая функция вычисляет operatorFn(текущее значение, newValue),
 * сохраняет результат как новое текущее значение и возвращает его.
 *
 * Если operatorFn не передана, возвращённая функция при любом аргументе
 * возвращает initialValue.
 *
 * Пример:
 *   const multFn = getOperationFn(-1, (a, b) => a * b);
 *   multFn(-1); // → 1   (-1 · -1)
 *   multFn(4);  // → 4   (1 · 4)
 *   multFn(2);  // → 8   (4 · 2)
 *
 *   const staticFn = getOperationFn(-1);
 *   staticFn(7); // → -1
 *
 * @param {*} initialValue — начальное значение
 * @param {Function} [operatorFn] — функция двух аргументов
 * @returns {Function}
 */
function getOperationFn(initialValue, operatorFn) {
    // Ваш код
}

/**
 * Задание 9. Генератор арифметической прогрессии.
 * Верните функцию, которая при первом вызове возвращает start,
 * а при каждом следующем — значение, увеличенное на step.
 * Значения по умолчанию: start = 0, step = 1.
 * Генераторы, созданные разными вызовами sequence, работают независимо.
 *
 * Пример:
 *   const gen = sequence(10, 3);
 *   gen(); // → 10
 *   gen(); // → 13
 *   gen(); // → 16
 *
 * @param {number} [start=0]
 * @param {number} [step=1]
 * @returns {Function}
 */
function sequence(start, step) {
    // Ваш код
}

/**
 * Задание 10. Глубокое сравнение двух значений.
 * Верните true, если значения равны по содержимому, и false в противном случае.
 *
 * Требования:
 *  - примитивы сравниваются по значению; NaN считается равным NaN;
 *  - объекты и массивы сравниваются рекурсивно по всем свойствам,
 *    порядок свойств не важен;
 *  - функции равны, только если это одна и та же функция;
 *  - null и undefined не равны друг другу.
 *
 * Примеры:
 *   deepEqual({a: 'a', b: 'b'}, {b: 'b', a: 'a'})        → true
 *   deepEqual({arr: [1, 2, 3]}, {arr: [1, 2]})            → false
 *   deepEqual({value: undefined}, {value: null})          → false
 *   deepEqual(NaN, NaN)                                   → true
 *
 * @param {*} firstObject
 * @param {*} secondObject
 * @returns {boolean}
 */
function deepEqual(firstObject, secondObject) {
    // Ваш код
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
