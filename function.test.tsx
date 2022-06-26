const fuc = require('./function');

//1-toBe : để so sánh ===
test('Adds 2+2 to equal 4', () => {
    expect(fuc.add(2, 2)).toBe(4);
})

//2-not : trả về phủ định lại 
test('Adds 2+2 to Not equal 5', () => {
    expect(fuc.add(2, 2)).not.toBe(5);
})

//3-toBeNull :so sánh với giá trị null
test(' Should be null: So sánh với null', () => {
    expect(fuc.isNull()).toBeNull();
})

//4-toBeFalsy: so sánh với giá trị false
test(' Should be falsy : So sánh với giá trị false', () => {
    expect(fuc.checkValue(undefined)).toBeFalsy();
})

//5-toEqual: kiểm tra object hay array có giống nhau hay không (toBe thì không làm được)
test(' Should be Brand Traversy object: So sánh object với aray', () => {
    expect(fuc.createUser()).toEqual({
        lastName: 'Son',
        firstName: 'Deptrai',
    });
})

//6-Less than and greater than
test(' Should be under 1600: so sánh nhỏ hơn hoặc bằng 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//7-Regex : Có thể kiểm tra một đoạn văn bản với regular expressions
test('Không có I trong team', () => {
    expect('team').not.toMatch(/I/i);
});

//8-Arrays
test(' Admin should be in usernames : kiểm tra giá trị có trong 1 mảng', () => {
    const usernames = ['sondeptrai', 'son', 'hieu'];
    expect(usernames).toContain('sondeptrai')
})

//9-Working with async data

//9-Promise
test('User fetched name should be Leame Graham', () => {
    expect.assertions(1);
    return fuc.fetchUser()
        .then(data => {
            expect(data.email).toEqual('Sincere@april.biz');
        })
})

//10-Async await
test('User fetched name should be Leame Graham', async() => {
    expect.assertions(1);
    const data = await fuc.fetchUser();
    expect(data.email).toEqual('Sincere@april.biz');
})

//11-number
test('Phep cong 2 voi 2', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); //True ket qua ki vong(4) cao hon doi so la 3
    expect(value).toBeGreaterThanOrEqual(3.4); //True ket qua ki vong(4) cao hon hoac bang doi so la 3.9
    expect(value).toBeLessThan(5)  //True ket qua ki vong(4) nho hon doi so la 5
    expect(value).toBeLessThanOrEqual(4.5) //True ket qua ki vong(4) nho hon hoac bang doi so la 5
})

//12-Arrays
const alphabets = new Array ("aa","bb","cc",'xxx')
  
  test('alphabets co chua xxx', () => {
    expect(alphabets).toContain('xxx');
  });