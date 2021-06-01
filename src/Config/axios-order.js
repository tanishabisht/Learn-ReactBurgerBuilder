import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reactjs-burger-builder-4e2e5-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

export default instance