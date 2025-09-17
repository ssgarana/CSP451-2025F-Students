// db-demo.js - example usage
const db = require('./modules/db');

async function runDemo() {
  await db.connect();
  console.log('Is connected?', db.isConnected());
  await db.addUser({ username: 'shamin' });
  await db.addUser({ username: 'ilaha' });
  console.log('Users:', await db.listUsers());
}
runDemo();
