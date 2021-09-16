<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OksDEi3Ss84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 En la actualidad para toda iniciativa de emprendimiento y creación de unidades productivas se hace necesario conocer las normas y requisitos que se deben cumplir para su formalización. De igual manera, es importante conocer cuáles son las entidades de control y vigilancia que regulan a las sociedades comerciales, pues permite identificar los documentos y trámites que se deben realizar en cada una de ellas, para la consolidación de las unidades productivas.  


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
