<template>
  <div>
    <section class="heading">
    <h3>Our Shop</h3>
    <p><a href="home.html">Home</a> / <span>Shop</span></p>
 </section>
     <section class="category">
    <h1 class="title"><span>Our Categories</span><a href="#"> View All >></a></h1>
    <div class="box-container">
        <a href="#" class="box">
            <img src="../../images/icon-1.png" alt="icon image">
            <h3>Home Sofas</h3>
        </a>
        <a href="#" class="box">
            <img src="../../images/icon-2.png" alt="icon image">
            <h3>Working Tables</h3>
        </a>
        <a href="#" class="box">
            <img src="../../images/icon-3.png" alt="icon image">
            <h3>Bedside Tables</h3>
        </a>
        <a href="#" class="box">
            <img src="../../images/icon-4.png" alt="icon image">
            <h3>Office Chairs</h3>
        </a>
        <a href="#" class="box">
            <img src="../../images/icon-5.png" alt="icon image">
            <h3>Cupboards</h3>
        </a>
    </div>
 </section>

<section class="products">
    <h1 class="title"><span>Our Products</span><a href="#"> View All >></a></h1>
    <div class="box-container">
        <div v-for="product in products" :key="product" class="box">
            <div class="icons">
                <a @click="addItemToCart(product)"><font-awesome-icon icon="shopping-cart" size="1x" ></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img :src="product.image" :alt="product.alt" />
            </div>
            <div class="content">
                <div class="price">R {{product.price}}</div>
                <h3>{{product.name}}</h3>
                <div class="stars">
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> {{product.likes}}</span>
                </div>
            </div>
        </div>
        
        
    </div>
</section>


  </div>
</template>

<script>


export default {
  name: 'ShopPage'
  ,
  props:
  ["numberOfProducts"]
  ,
  data() {
      return {
            cart: [],
            items: 1,
            products: [
                {
                    name: 'The classic',
                    price: 3499.99,
                    image: require('../../images/product-1.png'),
                    likes:'(34)',
                    alt: 'image one'
                },
                {
                    name: 'Lounge button chair',
                    price: 4999.99,
                    image: require('../../images/product-2.png'),
                    likes: '(23)',
                    alt: 'image two'
                },
                {
                    name: 'Pink Self Standing Sofa',
                    price: 2499.99,
                    image: require('../../images/product-3.png'),
                    likes: '(42)',
                    alt: 'image three'
                },
                {
                    name: 'Brown Three Seater Couch',
                    price: 12999.99,
                    image: require('../../images/product-4.png'),
                    likes: '(59)',
                    alt: 'image four'
                },
                {
                    name: 'Vintage Self Standing Bed Frame and Side',
                    price: 42999.99,
                    image: require('../../images/product-5.png'),
                    likes: '(15)',
                    alt: 'image five'
                },
                {
                    name: 'Classic Bar Stool',
                    price: 999.99,
                    image: require('../../images/product-6.png'),
                    likes: '(115)',
                    alt: 'image six'
                },
                {
                    name: 'Full Modern Dining Room Set',
                    price: 29999.99,
                    image: require('../../images/product-7.png'),
                    likes: '(20)',
                    alt: 'image seven'
                },
                {
                    name: 'Modern Patio Umbrella full',
                    price: 39999.99,
                    image: require('../../images/product-8.png'),
                    likes: '(65)',
                    alt: 'image eight'
                }
            ]
      }
    },
    methods: {

        addItemToCart(product) {  
        this.cart.push(product);
        this.$emit('totalCart', this.numberOfProducts);
        this.$emit('additionalProducts',product);
        
        },
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
