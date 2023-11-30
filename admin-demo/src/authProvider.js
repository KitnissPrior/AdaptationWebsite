import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export const authProvider = (type, params) => {
    // пользователь пытается войти в аккаунт
    if (type === AUTH_LOGIN) {
     const { username } = params;
     localStorage.setItem('username', username)
     return Promise.resolve();
    }
    //пользователь пытается выйти из аккаунта
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
     return Promise.resolve();
    }
    //API выдает ошибку
    if (type === AUTH_ERROR) {
     const { status } = params;
     if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject()
     }
     return Promise.resolve()
    }
    //пользователь переходит в новое место
    if (type === AUTH_CHECK) {
     return localStorage.getItem('username') ?
      Promise.resolve() :
      Promise.reject();
    }
    return Promise.reject('Unknown Method');
   };
