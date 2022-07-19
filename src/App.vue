<template>

  <StickyHeader/>
  <nav class="navbar">
    <a @click="homeMiddleToggle">Home</a>
    <a @click="shopToggle">Shop</a>
    <a @click="aboutToggle">About</a>
    <a @click="teamToggle">Team</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
</nav>
  <HomeMiddle v-if="visibleHomeMiddle"/>
  <ShopPage v-if="visibleShop"/>
  <AboutPage v-if="visibleAbout"/>
  <TeamPage v-if="visibleTeam"/>
  <blogPage v-if="visibleBlog"></blogPage>
  <FooterLinks/>
  



</template>

<script>
import ShopPage from './components/Shop.vue'
import StickyHeader from './components/Header.vue'
import FooterLinks from './components/Footer.vue'
import HomeMiddle from './components/HomeCenter.vue'
import AboutPage from './components/About.vue'
import TeamPage from './components/Team.vue'
import BlogPage from './components/Blog.vue'





export default {
  name: 'App',
  components: {
    StickyHeader,
    FooterLinks,
    HomeMiddle,
    ShopPage,
    AboutPage,
    TeamPage,
    BlogPage,
  },
  data() {
      return {
        visibleHomeMiddle : true,
        visibleShop : false,
        visibleAbout : false,
        visibleTeam : false,
        visibleBlog : false,


      }
    },
    props: {
      
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
        this.closer();
      },
      shopToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = true;
        this.visibleAbout = false;
        this.visibleTeam = false;
        this.closer();
      },
      aboutToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = false;
        this.visibleAbout = true;
        this.visibleTeam = false;
        this.closer();
      },
      teamToggle () {
        this.visibleHomeMiddle = false;
        this.visibleShop = false;
        this.visibleAbout = false;
        this.visibleTeam = true;
        this.closer();
      }
    }
  
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";

</style>
