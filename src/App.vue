<template>
<div>
  <header class="header">
    <a href="home.html" class="logo"><img src="../images/logo.png" alt="Joshua Doore" id="imglogo">Joshua Doore</a>
    <form action="" class="search-form">
        <input type="search" placeholder="search here..." id="search-box">
        <label for="search-box" class="fas fa-search"></label>
    </form>
    <div class="icons">
        <div id="menu-btn"><font-awesome-icon icon="bars" @click="menu" size="1x" ></font-awesome-icon></div> 
        <div id="search-btn"><font-awesome-icon icon="search" @click="searchbtn" size="1x" ></font-awesome-icon></div> 
        <div id="cart-btn"><font-awesome-icon icon="shopping-cart" @click="cartbtn" size="1x" ></font-awesome-icon>{{totalItems}}</div> 
        <div id="login-btn"><font-awesome-icon icon="user" @click="loginbtn" size="1x" ></font-awesome-icon></div> 
    </div>
</header>
 <div id="closer"><font-awesome-icon icon="times" @click="closer" size="1x" ></font-awesome-icon></div> 
     <nav class="navbar">
    <a @click="homeMiddleToggle">Home</a>
    <a @click="shopToggle">Shop</a>
    <a @click="aboutToggle">About</a>
    <a @click="teamToggle">Team</a>
    <a @click="blogToggle">Blog</a>
    <a @click="contactToggle">Contact</a>
</nav> 
<div class="shopping-cart">
    <div class="box" v-for="product in products" :key="product">
        <i><font-awesome-icon icon="times" size="2x"></font-awesome-icon></i>
        <img :src="product.image" alt="furniture image">
        <div class="content">
            <h3>{{product.name}}</h3>
            <span class="quantity">1</span>
            <span class="multiply">x</span>
            <span class="price">R {{product.price}}</span>
        </div>
    </div>
    
    <h3 class="total">total: <span>R {{total}}</span></h3>
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
    


  <HomeMiddle v-if="visibleHomeMiddle"/>
  <ShopPage v-if="visibleShop" @totalCart="cartItems" @additionalProducts="cartProducts" />
  <AboutPage v-if="visibleAbout"/>
  <TeamPage v-if="visibleTeam"/>
  <BlogPage v-if="visibleBlog"/>
  <ContactPage v-if="visibleContact"/>
  <FooterLinks/>
  


</div>
</template>

<script>
import ShopPage from './components/Shop.vue'

import FooterLinks from './components/Footer.vue'
import HomeMiddle from './components/HomeCenter.vue'
import AboutPage from './components/About.vue'
import TeamPage from './components/Team.vue'
import BlogPage from './components/Blog.vue'
import ContactPage from './components/Contact.vue'





export default {
  name: 'App',
  components: {
    FooterLinks,
    HomeMiddle,
    ShopPage,
    AboutPage,
    TeamPage,
    BlogPage,
    ContactPage,
  },
  data() {
      return {
        visibleHomeMiddle : true,
        visibleShop : false,
        visibleAbout : false,
        visibleTeam : false,
        visibleBlog : false,
        visibleContact : false,
        totalItems: 0,
        products: [],
        
      }
    },
    computed: {
      total() {
        let total = 0;
        this.products.forEach((item) => {
          total += item.price;
        });
        return total;
      
      }
    },
    methods : {
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
      homeMiddleToggle () {
        this.visibleHomeMiddle = true;
        this.visibleShop = false;
        this.visibleAbout = false;
        this.visibleTeam = false;
        this.visibleBlog = false;
        this.visibleContact=  false;
        this.closer();
      },
      shopToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = true;
        this.visibleAbout = false;
        this.visibleTeam = false;
        this.visibleBlog = false;
        this.visibleContact=  false;
        this.closer();
      },
      aboutToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = false;
        this.visibleAbout = true;
        this.visibleTeam = false;
        this.visibleBlog = false;
        this.visibleContact=  false;
        this.closer();
      },
      teamToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = false;
        this.visibleAbout = false;
        this.visibleTeam = true;
        this.visibleBlog = false;
        this.visibleContact=  false;
        this.closer();
      },
      blogToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = false;
        this.visibleAbout = false;
        this.visibleTeam = false;
        this.visibleBlog = true;
        this.visibleContact=  false;
        this.closer();
      },
      contactToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = false;
        this.visibleAbout = false;
        this.visibleTeam = false;
        this.visibleBlog = false;
        this.visibleContact=  true;
        this.closer();
      },
      cartItems(value) {
        this.totalItems = value;
      },
      cartProducts(value) {
        this.products.push(value);
      }
    }
  
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";

</style>
