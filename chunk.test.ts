const chunkArrayTest = require('./chunk');
test(' reverseString function exists',  () => {
    expect(chunkArrayTest).toBeDefined();
});

// test('Chunk an aray of 3 values with length of 1',()   => {
//     const numbers = [1, 2, 3];
//     const len = 1;
//     const chunkedArr = chunkArrayTest(numbers, len);

//     expect(chunkedArr).toEqual([[1],[2],[3]])

//     expect(chunkArrayTest).toBeDefined();
// })