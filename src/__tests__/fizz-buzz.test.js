const fizzBuzz = require('../js/fizz.buzz')

it('入力した数字を返すこと', () => {
  expect(fizzBuzz(1)).toBe(1);
});

it('3を入力した場合、fizzを返すこと', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});
