const reverseStr = require('./reverseString')

test(' reverseString function exists',  () => {
    expect(reverseStr).toBeDefined();
});

test(' String reverses', () => {
    expect(reverseStr('hello')).toEqual('olleh');
});

test(' String reverses with uppercase', () => {
    expect(reverseStr('hello')).toEqual('olleh');
});