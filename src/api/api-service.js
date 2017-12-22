import axios from 'axios'

class ApiService {
    getAllTodos() {
        return axios.get('/static/todos.json')
    }
}

export default new ApiService()