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
                <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img :src="product.image" :alt="product.alt" />
            </div>
            <div class="content">
                <div class="price">{{product.price}}</div>
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
        <div class="box">
            <div class="icons">
                 <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-1.png" alt="product two">
            </div>
            <div class="content">
                <div class="price">R 3999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                   <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="icons">
                 <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-3.png" alt="product three">
            </div>
            <div class="content">
                <div class="price">R 4999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                   <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="icons">
                <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-4.png" alt="product four">
            </div>
            <div class="content">
                <div class="price">R 24999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                   <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="icons">
                 <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-5.png" alt="product five">
            </div>
            <div class="content">
                <div class="price">R 13999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                   <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="icons">
                 <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-6.png" alt="product six">
            </div>
            <div class="content">
                <div class="price">R 1999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                  <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="icons">
                 <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-7.png" alt="product seven">
            </div>
            <div class="content">
                <div class="price">R 12999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                   <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="icons">
                 <a href="#"><font-awesome-icon icon="shopping-cart" size="1x"></font-awesome-icon></a>
                <a href="#" ><i><font-awesome-icon icon="heart" size="1x"></font-awesome-icon></i></a>
                <a href="#"><i><font-awesome-icon icon="eye" size="1x"></font-awesome-icon></i></a>
            </div>
            <div class="image">
                <img src="../../images/product-8.png" alt="product eight">
            </div>
            <div class="content">
                <div class="price">R 43999,00</div>
                <h3>Modern Furniture</h3>
                <div class="stars">
                   <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                    <i><font-awesome-icon icon="star" size="1x"></font-awesome-icon></i>
                   <span> (50) </span>
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
  props: {
    
  },
  data() {
      return {
            products: [
                {
                    name: 'furniture 1',
                    price: 'R 3000,00',
                    image: '../../images/product-8.png',
                    likes: 20,
                    alt: 'image one'
                },
                {
                    name: 'furniture 2',
                    price: 'R 2000,00',
                    image: '../../images/product-2.png',
                    likes: 40,
                    alt: 'image two'
                }
            ]
      }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
