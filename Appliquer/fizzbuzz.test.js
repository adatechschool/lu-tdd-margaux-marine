const fizzbuzz = require('./fizzbuzz');
test('3 returns fizz',() => {
    expect(fizzbuzz(3)).toBe('fizz');
});
test('5 returns buzz',() => {
    expect(fizzbuzz(5)).toBe('buzz');
});
test('15 returns fizzbuzz',() => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
});
test('0 returns fizzbuzz',() => {
    expect(fizzbuzz(0)).toBe('fizzbuzz');
});
test('-3 returns fizzbuzz',() => {
    expect(fizzbuzz(-3)).toBe('fizz');
});
test('-5 returns buzz',() => {
    expect(fizzbuzz(-5)).toBe('buzz');
});
test('-15 returns fizzbuzz',() => {
    expect(fizzbuzz(-15)).toBe('fizzbuzz');
});
test('2000 returns buzz',() => {
    expect(fizzbuzz(2000)).toBe('buzz');
});
test('3003 returns fizz',() => {
    expect(fizzbuzz(3003)).toBe('fizz');
});
test('1500 returns fizzbuzz',() => {
    expect(fizzbuzz(1500)).toBe('fizzbuzz');
});
test('-2002 returns -2002',() => {
    expect(fizzbuzz(-2002)).toBe('-2002');
});
test('arbre returns input error',() => {
    expect(fizzbuzz('arbre')).toBe('input error');
});
test('5.5 returns input error',() => {
    expect(fizzbuzz(5.5)).toBe('input error');
});
test('-5.5 returns input error',() => {
    expect(fizzbuzz(-5.5)).toBe('input error');
});
test('true returns input error',() => {
    expect(fizzbuzz(true)).toBe('input error');
});
test('false returns input error',() => {
    expect(fizzbuzz(false)).toBe('input error');
});