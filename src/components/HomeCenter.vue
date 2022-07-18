<template>
  <div>
    
    <section class="home">
    <div class="slides-container">
        <div class="slide active">
            <div class="content">
                <span>New Arrivals</span>
                <h3>Modern Armchair</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <a href="#" class="btn">Shop now</a>
            </div>
            <div class="image">
                <img src="../../images/home-img-1.png" alt="home image 1">
            </div>
        </div>
        <div class="slide">
            <div class="content">
                <span>New Arrivals</span>
                <h3>Hipster couch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <a href="#" class="btn">Shop now</a>
            </div>
            <div class="image">
                <img src="../../images/home-img-2.png" alt="home image 1">
            </div>
        </div>
    </div>
    <div id="slide-next" @click="next"><font-awesome-icon icon="angle-right" size="1x" ></font-awesome-icon></div>
    <div id="slide-prev" @click="prev"><font-awesome-icon icon="angle-left" size="1x" ></font-awesome-icon></div>
</section>
<section class="banner-container">
    <div class="banner">
        <img src="../../images/Banner-1.jpg" alt="Banner image">
        <div class="content">
            <span>Limited Offer</span>
            <h3>Up To 50% Off</h3>
            <a href="#" class="btn">Shop Now</a>
        </div>
    </div>
    <div class="banner">
        <img src="../../images/Banner-2.jpg" alt="Banner image two">
        <div class="content">
            <span>Limited Offer</span>
            <h3>Up To 50% Off</h3>
            <a href="#" class="btn">Shop Now</a>
        </div>
    </div>
    <div class="banner">
        <img src="../../images/Banner-3.jpg" alt="Banner image three">
        <div class="content">
            <span>Limited Offer</span> 
            <h3>Up To 50% Off</h3>
            <a href="#" class="btn">Shop Now</a>
        </div>
    </div>
</section>

  </div>
</template>

<script>
export default {
  name: 'HomeMiddle'
  
  ,
  props: {
    
  },
  data() {
      return {
       index: 0,
      }
    },
    methods: {
        next() {
            let slides = document.querySelectorAll('.home .slides-container .slide');
            slides[this.index].classList.remove('active');
            this.index = (this.index + 1) % slides.length;
            slides[this.index].classList.add('active');
        },
        prev() {
            let slides = document.querySelectorAll('.home .slides-container .slide');
            slides[this.index].classList.remove('active');
            this.index = (this.index - 1 + slides.length) % slides.length;
            slides[this.index].classList.add('active');
        },
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
