import validators from '../src';

describe('ValidationRules.js', () => {
  it('When isNull is passed null returns true', () => {
    const value = null;
    const sut = validators.isNull(value);
    expect(sut).toBe(true);
  });
  it('When isNull is not passed null returns false', () => {
    const value = 'null';
    const sut = validators.isNull(value);
    expect(sut).toBe(false);
  });
  it('When isDefined is passed a defined value returns true', () => {
    const value = null;
    const sut = validators.isDefined(value);
    expect(sut).toBe(true);
  });
  it('When isDefined is passed undefined returns false', () => {
    const value = undefined;
    const sut = validators.isDefined(value);
    expect(sut).toBe(false);
  });
  it('When isRequired is called it returns true is the value is defined and not null', () => {
    const value = 0;
    const sut = validators.isRequired(value);
    expect(sut).toBe(true);
  });
  it('When isRequired is called it returns false if value is null or undefined', () => {
    const value = undefined;
    const sut = validators.isRequired(value);
    expect(sut).toBe(false);

    const v2 = null;
    const sut2 = validators.isRequired(v2);
    expect(sut2).toBe(false);
  });
  it('When isFunction is passed a function returns true', () => {
    const value = () => {};
    const sut = validators.isFunction(value);
    expect(sut).toBe(true);
  });
  it('When isFunction is not passed a function returns false', () => {
    const value = undefined;
    const sut = validators.isFunction(value);
    expect(sut).toBe(false);
  });
  it('When isBoolean is passed a boolean returns true', () => {
    const value = true;
    const sut = validators.isBoolean(value);
    expect(sut).toBe(true);
  });
  it('When isBoolean is not passed a boolean returns false', () => {
    const value = undefined;
    const sut = validators.isBoolean(value);
    expect(sut).toBe(false);
  });
  it('When isNumber is passed a number returns true', () => {
    const value = 1;
    const sut = validators.isNumber(value);
    expect(sut).toBe(true);
  });
  it('When isNumber is not passed a number returns false', () => {
    const value = '1';
    const sut = validators.isNumber(value);
    expect(sut).toBe(false);
  });
  it('When isPositive is passed a positive number returns true', () => {
    const value = 1;
    const sut = validators.isPositive(value);
    expect(sut).toBe(true);
  });
  it('When isPositive is not passed a positive number returns false', () => {
    const value = 0;
    const sut = validators.isPositive(value);
    expect(sut).toBe(false);
  });
  it('When isNegative is passed a negative number returns true', () => {
    const value = -1;
    const sut = validators.isNegative(value);
    expect(sut).toBe(true);
  });
  it('When isNegative is not passed a negative number returns false', () => {
    const value = 0;
    const sut = validators.isNegative(value);
    expect(sut).toBe(false);
  });
  it('When isSting is passed a string returns true', () => {
    const value = '';
    const sut = validators.isString(value);
    expect(sut).toBe(true);
  });
  it('When isSting is not passed a string returns false', () => {
    const value = null;
    const props = { maxLength: 5 };
    const sut = validators.isString(value, props);
    expect(sut).toBe(false);
  });
  it('When isStringWithinLength is not passed a string returns false', () => {
    const value = null;
    const sut = validators.isStringWithMaxLength(value);
    expect(sut).toBe(false);
  });
  it('When isStringWithinLength is passed a string without length returns false', () => {
    const value = 'null';
    const sut = validators.isStringWithMaxLength(value);
    expect(sut).toBe(false);
  });
  it('When isStringWithinLength is passed a string with negative value returns false', () => {
    const value = 'null';
    const length = -5;
    const sut = validators.isStringWithMaxLength(value, length);
    expect(sut).toBe(false);
  });
  it('When isStringWithinLength is passed a string less than the length returns true', () => {
    const value = 'null';
    const length = 5;
    const sut = validators.isStringWithMaxLength(value, length);
    expect(sut).toBe(true);
  });
  it('When isSting is not passed a string greater than or equal to the length returns false', () => {
    const value = 'null';
    const length = 4;
    const sut = validators.isStringWithMaxLength(value, length);
    expect(sut).toBe(false);
  });
  it('When isEmail is not passed a string returns false', () => {
    const value = null;
    const sut = validators.isEmail(value);
    expect(sut).toBe(false);
  });
  it('When isEmail is not passed an email returns false', () => {
    const value = 'testing';
    const sut = validators.isEmail(value);
    expect(sut).toBe(false);
  });
  it('When isEmail is passed an email returns true', () => {
    const value = 'test@dev.com';
    const sut = validators.isEmail(value);
    expect(sut).toBe(true);
  });
  it('When isEmail is passed multiple emails returns false', () => {
    const value = 'test@dev.com  dev@test.com';
    const sut = validators.isEmail(value);
    expect(sut).toBe(false);
  });
  it('When isEmail is passed a string of 250 characters returns false', () => {
    const value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.';
    const sut = validators.isEmail(value);
    expect(sut).toBe(false);
  });
  it('When isEmail is not passed a string returns false', () => {
    const value = null;
    const sut = validators.isEmail(value);
    expect(sut).toBe(false);
  });
  it('When isEmail is not passed an email returns false', () => {
    const value = 'testing';
    const sut = validators.isEmail(value);
    expect(sut).toBe(false);
  });
  it('When isStringWithMinLength is called with a string less than the provided length false is returned', () => {
    const str = 'five';
    const len = 6;
    const sut = validators.isStringWithMinLength(str, len);
    expect(sut).toBe(false);
  });

  it('When isStringWithMinLength is is not passed a string it returns false', () => {
    const str = 5;
    const len = 4;
    const sut = validators.isStringWithMinLength(str, len);
    expect(sut).toBe(false);
  });
  it('When isStringWithMinLength is is not passed a negative length it returns false', () => {
    const str = 'five';
    const len = -4;
    const sut = validators.isStringWithMinLength(str, len);
    expect(sut).toBe(false);
  });

  it('When isStringWithMinLength is is not passed a string that is equal to or greater than the length it returns true', () => {
    const str = 'five';
    const len = 4;
    const sut = validators.isStringWithMinLength(str, len);
    expect(sut).toBe(true);
  });
  it('When isNonEmptyArray is passed an empty array returns false', () => {
    const arr = [];
    const sut = validators.isNonEmptyArray(arr);
    expect(sut).toBe(false);
  });
  it('When isNonEmptyArray is passed an array that has elements it returns true', () => {
    const arr = [1, 2, 3];
    const sut = validators.isNonEmptyArray(arr);
    expect(sut).toBe(true);
  });
  it('When isNonEmptyArray is passed a value that is not an array it returns false', () => {
    const arr = undefined;
    const sut = validators.isNonEmptyArray(arr);
    expect(sut).toBe(false);
  });
});
