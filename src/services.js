import axios from 'axios'

//criamos a url base do nosso projeto apos instanciar o axios
const axiosInstace = axios.create({
  baseURL:'http://localhost:3000'
})

export const api = {
  //metodos get
  get(endpoint){
    return axiosInstace.get(endpoint);
  },

  //metodos post
  post(endpoint,body){
    return axiosInstace.post(endpoint, body);
  },

}
  //api cep
  export function getCep(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)  
  }
