<template>

  <StickyHeader/>
  <HomeMiddle/>
  <FooterLinks/>
  <ShopPage/>



</template>

<script>
import ShopPage from './components/Shop.vue'
import StickyHeader from './components/Header.vue'
import FooterLinks from './components/Footer.vue'
import HomeMiddle from './components/HomeCenter.vue'

export default {
  name: 'App',
  components: {
    StickyHeader,
    FooterLinks,
    HomeMiddle,
    ShopPage,
  },
  data() {
      return {
        
      }
    }
  
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";

</style>
