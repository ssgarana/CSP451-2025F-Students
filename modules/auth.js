// modules/auth.js
// Simple mock authentication helper module for demo
const crypto = require('crypto');
const users = new Map(); // in-memory store for class demo

function hashPassword(password, salt = null) {
  salt = salt || crypto.randomBytes(8).toString('hex');
  const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
  return { salt, hash };
}

// Check password strength (very simple)
function validatePassword(password) {
  if (!password || password.length < 6) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}

async function registerUser(username, password) {
  if (users.has(username)) throw new Error('UserExists');
  if (!validatePassword(password)) throw new Error('WeakPassword');
  const { salt, hash } = hashPassword(password);
  users.set(username, { username, salt, hash, createdAt: Date.now() });
  return { username };
}

async function authenticateUser(username, password) {
  const user = users.get(username);
  if (!user) return false;
  const { hash } = hashPassword(password, user.salt);
  return hash === user.hash;
}

async function listUsers() {
  return Array.from(users.values()).map((u) => ({
    username: u.username,
    createdAt: u.createdAt,
  }));
}

// Export all functions
module.exports = {
  registerUser,
  authenticateUser,
  listUsers,
  validatePassword,
};
