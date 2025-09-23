// modules/db.js - fake DB module for classroom demo
const EventEmitter = require('events');
const emitter = new EventEmitter();

let connected = false;
let store = { users: [] };

function connect(connectionString) {
  return new Promise((resolve) => {
    setTimeout(() => {
      connected = true;
      emitter.emit('connected');
      resolve(true);
    }, 150);
  });
}

function isConnected() {
  return connected;
}

async function addUser(userObj) {
  if (!connected) throw new Error('DBNotConnected');
  const id = store.users.length + 1;
  const user = Object.assign({ id, createdAt: Date.now() }, userObj);
  store.users.push(user);
  return user;
}

async function getUserByUsername(username) {
  if (!connected) throw new Error('DBNotConnected');
  return store.users.find((u) => u.username === username) || null;
}

async function listUsers() {
  if (!connected) throw new Error('DBNotConnected');
  return store.users.slice();
}

module.exports = {
  connect,
  isConnected,
  addUser,
  getUserByUsername,
  listUsers,
  emitter,
};
