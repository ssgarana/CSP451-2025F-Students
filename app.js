// app.js - demo server wiring (not required to run)
const api = require('./modules/api');

async function run() {
  try {
    console.log(await api.register({ username: 'student', password: 'pass1234' }));
    console.log(await api.login({ username: 'student', password: 'pass1234' }));
    console.log('Users:', await api.listUsers());
  } catch (e) {
    console.log('Error:', e.message);
  }
}
run();
