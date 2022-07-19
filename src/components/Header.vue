<template>
  <div>
         <header class="header">
    <a href="home.html" class="logo"><img src="../../images/logo.png" alt="Joshua Doore" id="imglogo">Joshua Doore</a>
    <form action="" class="search-form">
        <input type="search" placeholder="search here..." id="search-box">
        <label for="search-box" class="fas fa-search"></label>
    </form>
    <div class="icons">
        <div id="menu-btn"><font-awesome-icon icon="bars" @click="menu" size="1x" ></font-awesome-icon></div> 
        <div id="search-btn"><font-awesome-icon icon="search" @click="searchbtn" size="1x" ></font-awesome-icon></div> 
        <div id="cart-btn"><font-awesome-icon icon="shopping-cart" @click="cartbtn" size="1x" ></font-awesome-icon>{{currentCart.length}}</div> 
        <div id="login-btn"><font-awesome-icon icon="user" @click="loginbtn" size="1x" ></font-awesome-icon></div> 
    </div>
</header>
 <div id="closer"><font-awesome-icon icon="times" @click="closer" size="1x" ></font-awesome-icon></div> 
    

<div class="shopping-cart">
    <div class="box" :shoppingCart="currentCart" v-for="product in currentCart" :key="product">
        <i><font-awesome-icon icon="times" size="2x"></font-awesome-icon></i>
        <img :src="product.image" alt="furniture image">
        <div class="content">
            <h3>{{product.name}}</h3>
            <span class="quantity">1</span>
            <span class="multiply">x</span>
            <span class="price">{{product.price}}</span>
        </div>
    </div>
    <div class="box">
        <i><font-awesome-icon icon="times" size="2x"></font-awesome-icon></i>
        <img src="../../images/cart-img-2.jpg" alt="furniture image">
        <div class="content">
            <h3>Arm Chair Leather </h3>
            <span class="quantity">1</span>
            <span class="multiply">x</span>
            <span class="price">R4 999.00</span>
        </div>
    </div>
    <div class="box">
        <i><font-awesome-icon icon="times" size="2x"></font-awesome-icon></i>
        <img src="../../images/cart-img-3.jpg" alt="furniture image">
        <div class="content">
            <h3>Conversation Seat White</h3>
            <span class="quantity">1</span>
            <span class="multiply">x</span>
            <span class="price">R4 999.00</span>
        </div>
    </div><div class="box">
       <i><font-awesome-icon icon="times" size="2x"></font-awesome-icon></i>
        <img src="../../images/cart-img-4.jpg" alt="furniture image">
        <div class="content">
            <h3>Yellow Couch Stand Alone</h3>
            <span class="quantity">1</span>
            <span class="multiply">x</span>
            <span class="price">R4 999.00</span>
        </div>
    </div>
    <h3 class="total">total: <span>R5 299.00</span></h3>
    <a href="#" class="btn">checkout cart</a>

</div>
<div class="login-form">
    <form action="">
        <h3>Login Form</h3>
        <input type="text" placeholder="enter your email" class="box">
        <input type="password" placeholder="enter your password" class="box">
        <div class="remember">
            <input type="checkbox" id="remember-me">
            <label for="remember-me">Remember me</label>
        </div>
        <input type="submit" class="btn" value="Login now">
        <p>Forgot password? <a href="#">Click here</a></p>
        <p>Don't have an account? <a href="#">Create now</a></p>
    </form>
</div>
    
  </div>
</template>

<script>
//import TestComp from './TestComp.vue';
export default {
    name: "StickyHeader",
    
    props: {
      
    },
    data() {
      return {
        currentCart:[],
      }
    },
    methods: {
      closer() {
      let closer = document.querySelector('#closer');
      let navbar = document.querySelector('.navbar');
      let cart = document.querySelector('.shopping-cart');
      let login = document.querySelector('.login-form');
      closer.style.display = 'none';
      navbar.classList.remove('active');
      cart.classList.remove('active');
      login.classList.remove('active');
      },
      menu(){
        let closer = document.querySelector('#closer');
        let navbar = document.querySelector('.navbar');
        closer.style.display = 'block';
        navbar.classList.toggle('active');
      },
      cartbtn() {
        let closer = document.querySelector('#closer');
        let cart = document.querySelector('.shopping-cart');
        closer.style.display = 'block';
        cart.classList.toggle('active');
      },
      loginbtn() {
        let closer = document.querySelector('#closer');
        let login = document.querySelector('.login-form');
        closer.style.display = 'block';
        login.classList.toggle('active');
      },
      searchbtn () {
        let searchForm = document.querySelector('.header .search-form');
        searchForm.classList.toggle('active');
      },
      
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

