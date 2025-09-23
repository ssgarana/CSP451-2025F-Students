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

<<<<<<< HEAD
function isConnected() {
  return connected;
}
=======
function isConnected() { return connected; }
>>>>>>> f5be490507f9c70989b9301cd5751266c94fdb27

async function addUser(userObj) {
  if (!connected) throw new Error('DBNotConnected');
  const id = store.users.length + 1;
  const user = Object.assign({ id, createdAt: Date.now() }, userObj);
  store.users.push(user);
  return user;
}

async function getUserByUsername(username) {
  if (!connected) throw new Error('DBNotConnected');
<<<<<<< HEAD
  return store.users.find((u) => u.username === username) || null;
=======
  return store.users.find(u => u.username === username) || null;
>>>>>>> f5be490507f9c70989b9301cd5751266c94fdb27
}

async function listUsers() {
  if (!connected) throw new Error('DBNotConnected');
  return store.users.slice();
}

<<<<<<< HEAD
module.exports = {
  connect,
  isConnected,
  addUser,
  getUserByUsername,
  listUsers,
  emitter,
};
=======
module.exports = { connect, isConnected, addUser, getUserByUsername, listUsers, emitter };

>>>>>>> f5be490507f9c70989b9301cd5751266c94fdb27
