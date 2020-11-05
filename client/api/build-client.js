import axios from 'axios'

const buildClient = ({ req }) => {
    if (typeof window === 'undefined') {
        // In the server
        return axios.create({
            baseURL: 'http://auth-srv:3000',
            headers: req.headers,
        })
    } else {
        return axios.create({
            baseURL: '/',
        })
    }
}
export default buildClient
