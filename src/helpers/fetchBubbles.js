import axiosWithAuth from './axiosWithAuth';

export const fetchBubbles = () => {
    return  axiosWithAuth().get('/colors')
    .then(res => res)
    .catch(err => console.log(err))
}