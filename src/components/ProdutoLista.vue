<template>
   <section class="produto-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0]" :alt="produto.fotos[0]">
      <p class="precp">{{produto.preco}}</p>

      <h2 class="titulo">{{produto.nome}}</h2>
      <p>{{produto.descricao}}</p>
    </div>
   </section>
</template>

<script>
import {api} from '../services.js'
import {serialize} from  '../helpers.js'

export default {
name:'ProdutoLista',
data(){
  return{
    produtos:null,
    produtosPorPagina:9
  }
},
methods: {
  getProdutos(){
    api.get(this.url)//usa como parametro a url para fazer a requisição com o axios
   .then(response => {
     this.produtos = response.data
   }) 
  }
},
computed:{
  url(){
    const query = serialize(this.$route.query);
    //faz uma concatenação para buscar os produtos na url
    return `/produto?_limit=${this.produtosPorPagina}${query}`
  }
},
watch:{
  url(){
    //sempre que a url for mudada(em casos de busca por produtos) vai ser feita uma nova chamada a api
    this.getProdutos();
  }
},
created(){
  //sempre que o componente for iniciado, fara uma requisião a api buscando os produtos
  this.getProdutos()
}
}
</script>

<style>

</style>