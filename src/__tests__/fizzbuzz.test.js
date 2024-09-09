/*
* FizzBuzz
  * 数字を入力すると、入力した数字が返ってくる
  * 3の倍数を入力すると、Fizzが返ってくる
  * 5の倍数を入力すると、Buzzが返ってくる
  * 3と5の公倍数を入力すると、FizzBuzzが返ってくる
*/

const fizzBuzz = require('../js/fizzBuzz');

it('入力した数字が返ってくること', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
});

it('3を入力すると、Fizzが返ってくること', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
});
