
const isValidUsername = (username) => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(username);
const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

export {isValidUsername, isValidPassword};