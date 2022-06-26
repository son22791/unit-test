function compileTestCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling Test goes as expected', () => {
    expect(() => compileTestCode()).toThrow();
    expect(() => compileTestCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileTestCode()).toThrow('you are using the wrong JDK');
    expect(() => compileTestCode()).toThrow(/using/);
  });