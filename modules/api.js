// modules/api.js - fake API layer for demo
const auth = require('./modules/auth'); // uses auth module
const db = require('./modules/db');     // uses db module

async function ensureDb() {
  if (!db.isConnected()) await db.connect();
}

async function register(reqBody) {
  await ensureDb();
  const { username, password } = reqBody;
  if (!auth.validatePassword(password)) throw new Error('WeakPassword');
  const user = await db.addUser({ username });
  await auth.registerUser(username, password);
  return { message: 'Registered', userId: user.id };
}

async function login(reqBody) {
  await ensureDb();
  const ok = await auth.authenticateUser(reqBody.username, reqBody.password);
  if (!ok) throw new Error('InvalidCredentials');
  return { message: 'Login OK' };
}

async function listUsers() {
  await ensureDb();
  return await db.listUsers();
}

// Exported fake endpoints
module.exports = { register, login, listUsers };
