<template>
    <div>
         <section class="team">
    <h1 class="title"><span>Our Team </span><a href="#"> View All >></a></h1>
    <div class="box-container">
        <div class="box"  v-for="member in members" :key="member">
            <div class="share">
               <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
                    <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></a>
                    <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }"/></a>
                    <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></a>
            </div>
            <div class="images"><img img :src="member.image" :alt="member.alt" /></div>
            
            <div class="user">
                <h3>{{member.name}}</h3>
                <span>{{member.job}}</span>
            </div>
            </div>
        
    </div>
 </section>
    </div>
</template>

<script>
export default {
  name: 'TeamPage'
  
  ,
  props: {
    
  },
  data() {
      return {
         members: [
                {
                    name: 'Charlie Kelly',
                    job: 'Lead Designer',
                    image: require('../../images/team-1.jpg'),
                    alt: 'member one'
                },
                 {
                    name: 'Ronald Macdonald',
                    job: 'Marketing Lead',
                    image: require('../../images/team-2.jpg'),
                    alt: 'member two'
                },
                {
                    name: 'Dennis Reynolds',
                    job: 'Design Analyst',
                    image: require('../../images/team-3.jpg'),
                    alt: 'member three'
                },
                {
                    name: 'Deandra Reynolds',
                    job: 'Bird',
                    image: require('../../images/team-4.jpg'),
                    alt: 'member four'
                },
                {
                    name: 'Matthew mara',
                    job: 'Designer',
                    image: require('../../images/team-5.jpg'),
                    alt: 'member five'
                },
                {
                    name: 'Frank Reynolds',
                    job: 'President',
                    image: require('../../images/team-6.jpg'),
                    alt: 'member six'
                },
                ]
      }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
