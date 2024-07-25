const axios = require('axios');
const axiosP = axios.get(`https://api.escuelajs.co/api/v1/products?limit=4&offset=1`)
        .then(res => res)
        .then(value => {
            let arr = value.data
            console.log(arr, ">>")
        })
console.log(axiosP, typeof axiosP)