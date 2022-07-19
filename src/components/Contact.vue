<template>
    <div>
         <section class="heading">
    <h3>Contact Us</h3>
    <p><a href="home.html">Home</a> / <span>Contact Us</span></p>
 </section>

 <div class="contact">
    <form action="">
        <h3>Get In Touch With Us</h3>
        <span>Your Name</span>
        <input type="text" class="box">
        <span>Your Contact Number</span>
        <input type="number" class="box">
        <span>Your E-mail</span>
        <input type="email" class="box">
        <span>Your Message</span>
        <textarea class="box" name="" id="" cols="10" rows="5"></textarea>
        <input type="submit" value="Send Message" class="btn">
    </form>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.663977654207!2d-111.30760908401939!3d53.99098913392953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a7390404f3d2cf%3A0xcb10bbfef8bbd12c!2sUFO%20Landing%20Pad!5e0!3m2!1sen!2sza!4v1657642084364!5m2!1sen!2sza" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
 
    </div>
</template>

<script>
export default {
  name: 'ContactPage'
  
  ,
  props: {
    
  },
  data() {
      return {
       
      }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
