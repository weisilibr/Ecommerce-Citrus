import axios from 'axios';


export  function getProducts(){
    return axios.get('http://localhost:4000/products')
    .then(response => response.data)
}
export  function getFashions(){
    return axios.get('http://localhost:4000/fashions')
    .then(response => response.data)
}