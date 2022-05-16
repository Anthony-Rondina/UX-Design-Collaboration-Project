// users-api.js
import sendRequest from './send-request';


// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  console.log('test3')
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData)
  });
  console.log('test4')
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log('test5')
    return res.json();
    
  } else {
    console.log('test6')
    throw new Error('Invalid Sign Up');
  }
}

export async function checkToken(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}