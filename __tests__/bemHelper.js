var bem = require('../src/BemHelper.js').bem;

describe('Utils: bemHelper', () => {
  it('should create my class', () => {
    // expect(bem()).toEqual('');
    // expect(bem("block")).toEqual('block');
    // expect(bem('block', 'element')).toEqual('element block__element');
  });

  // it('should create my classes with boolean modifier', () => {
  //   expect(bem('first-class', {
  //     disabled: false,
  //   })).toEqual('first-class');

  //   expect(bem('first-class', {
  //     disabled: true,
  //   })).toEqual('first-class first-class--disabled');
  // });

  // it('should create my classes with string modifier', () => {
  //   expect(bem('first-class', {
  //     size: '',
  //   })).toEqual('first-class');

  //   expect(bem('first-class', {
  //     size: 'small',
  //   })).toEqual('first-class first-class--small');
  // });

  // it('should create my classes with multiples modifiers', () => {
  //   expect(bem('first-class', {
  //     size: '',
  //     disabled: false,
  //   })).toEqual('first-class');

  //   expect(bem('first-class', {
  //     size: 'small',
  //     disabled: true,
  //   })).toEqual('first-class first-class--small first-class--disabled');
  // });
});
