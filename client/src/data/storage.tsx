enum Key {
    User= 'activeUser',
}

export const getUser = () => {
    const storedValue = localStorage.getItem(Key.User);
    return storedValue ? JSON.parse(storedValue) : null;
};

export const setUser = (user) => localStorage.setItem(Key.User, JSON.stringify(user));
