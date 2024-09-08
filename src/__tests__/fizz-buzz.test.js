const fizzBuzz = require('../js/fizz.buzz')

it('1を返すこと', () => {
  expect(fizzBuzz()).toBe(1);
});

it('入力した数字を返すこと', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(3)).toBe(3);
});
