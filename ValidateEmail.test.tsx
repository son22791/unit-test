const validateEmail = (inputText) => {
  const mailFormat =
    /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/;
  if (inputText.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
};

test("Check email address return true", () => {
  // Input
  const email = "son@gmail.com";

  // Output
  const outPut = true;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address Leading space return false", () => {
  // Input
  const email = " son@gmail.com";

  // Output
  const outPut = false;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address no @ return false", () => {
  // Input
    const email ="songmail.com";

  // Output
  const outPut = false;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address only numbers return false", () => {
  // Input
  const email ="1234567890";

  // Output
  const outPut = false;
  
  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address only letters return false", () => {
  // Input
  const email ="son";

  // Output
  const outPut = false;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address use other characters -_. return false", () => {
  // Input
  const email ="son@gmail,com";

  // Output
  const outPut = false;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address no domail return false", () => {
  // Input
  const email ="son@email@com";

  // Output
  const outPut = false;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});
test("Check email address duplicate @ return false", () => {
  // Input
  const email ="s@on@email.com";

  // Output
  const outPut = false;

  // Assert
  expect(validateEmail(email)).toBe(outPut);
});