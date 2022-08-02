<template>
    <div>
<section class="heading">
    <h3>Our Blogs</h3>
    <p><a href="home.html">Home</a> / <span>Blog</span></p>
 </section>

 <section class="blog">
    <h1 class="title"><span>Our Blogs </span><a href="#"> View All >></a></h1>
     <div class="box-container">
        <div class="box" v-for="article in articles" :key="article">
            <div class="image">
                <img img :src="article.image" :alt="article.alt" />
            </div>
            <div class="content">
                <h3>{{article.name}}</h3>
                <p>{{article.snippet}}</p>
                <a href="#" class="btn">Read More</a>
                <div class="icons">
                    <a href="#"><i>{{article.date}}<font-awesome-icon icon="calendar"  size="1x" ></font-awesome-icon></i></a>
                    <a href="#"><i class="fas fa-user"> By {{article.writer}}</i><font-awesome-icon icon="user" size="1x" ></font-awesome-icon></a> 
                </div>
                
            </div>
        </div>
        
     </div>
</section>

    </div>
</template>

<script>
export default {
  name: 'BlogPage'
  
  ,
  props: {
    
  },
  data() {
      return {
        articles: [
                {
                    name: 'Create the Rustic feel in your home',
                    snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!',
                    image: require("../../images/Blog-1.jpg"),
                    alt: 'blog one',
                    date: '10th june 2022 ',
                    writer: 'admin'
                },
                {
                    name: 'Seven ways to revive old furniture',
                    snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!',
                    image: require("../../images/Blog-2.jpg"),
                    alt: 'blog two',
                    date: '17th june 2022 ',
                    writer: 'Dennis'
                },
                {
                    name: '80s hotel furniture is the new in thing!',
                    snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!',
                    image: require("../../images/Blog-3.jpg"),
                    alt: 'blog three',
                    date: '24th june 2022 ',
                    writer: 'Frank'
                },
                {
                    name: '3 things all business need in their lobby',
                    snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!',
                    image: require("../../images/Blog-4.jpg"),
                    alt: 'blog four',
                    date: '1st July 2022 ',
                    writer: 'Ronald'
                },
                {
                    name: 'Modern living furniture 101',
                    snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!',
                    image: require("../../images/Blog-5.jpg"),
                    alt: 'blog five',
                    date: '8th July 2022 ',
                    writer: 'Dennis'
                },
                {
                    name: 'Are these sleek couches even comfortable?',
                    snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!',
                    image: require("../../images/Blog-6.jpg"),
                    alt: 'blog six',
                    date: '15th July 2022 ',
                    writer: 'Deandra'
                },
                


                ]
      }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
