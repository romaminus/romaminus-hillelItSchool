export const fetchTodos = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id ? id : ''}`);
    if (!response.ok) {
        throw new Error('Ooups, failed to fetch todos from server');
    }
    return response.json();
}