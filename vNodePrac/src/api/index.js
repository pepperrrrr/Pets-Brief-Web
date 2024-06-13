import axios from 'axios'

export const getPetsData = () => {
    return axios.request({
        method:'get',
        url: '/api/home'
    })
}