export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users')) || [];
};

export const saveUser = (user) => {
  const users = getUsers();
  localStorage.setItem('users', JSON.stringify([...users, user]));
};

export const loginUser = (identifier, password) => {
  const users = getUsers();
  return users.find(user =>
    (user.username === identifier || user.email === identifier) &&
    user.password === password
  );
};

export const setCurrentUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};
