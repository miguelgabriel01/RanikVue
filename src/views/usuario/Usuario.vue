<template>
  <section class="usua">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{name: 'Usuario'}">Produtos</router-link></li>
      </ul>
      <ul>
        <li><router-link :to="{name: 'Compras'}">Compras</router-link></li>
      </ul>
      <ul>
        <li><router-link :to="{name: 'Vendas'}">Vendas</router-link></li>
      </ul>
      <ul>
        <li><router-link :to="{name: 'Usuario-editar'}">Editar Usuário</router-link></li>
      </ul>
      <ul>
        <button class="btn" @click.prevent="deslogar">Deslogar</button>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
name:'Usuario',
data(){
  return{
    
  }
},
methods:{
  deslogar(){
    this.$store.dispatch("deslogarUsuario")//chamamos a função que desloga o usuario
    this.$router.push("/login")//redirecionamos ele para a pag de login
  }
}
}
</script>

<style>

</style>