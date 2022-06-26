const axios = require("axios");
const fetchUser=  () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')


test("User fetched name should be Leame Graham", async () => {
  const data = await fetchUser();
  expect(data.email).toEqual("Sincere@april.biz");
});
