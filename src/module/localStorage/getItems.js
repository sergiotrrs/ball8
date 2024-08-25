
const getItems = () => {
    return localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
}

export {getItems}
