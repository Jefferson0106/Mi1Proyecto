<template>
    <div>
        <TablaWe/>
        <!--FooterDe/> !--->
       
</div>
</template>

<script>
import TablaWe from '@/components/TablaWe.vue';
//import FooterDe from '@/components/FooterDe.vue';
export default {
    name:"UsersComp",
    components: {
        TablaWe,
       // FooterDe
    }
}
</script>

<style scoped>
  .video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%; /* Ajusta el ancho según tus necesidades */
  margin: 0 auto; /* Centra horizontalmente */
  }
</style>