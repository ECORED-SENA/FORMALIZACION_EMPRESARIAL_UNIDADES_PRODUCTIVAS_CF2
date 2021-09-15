<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Documentación requerida para la formalización de unidades productivas

    p.mb-5 En este apartado se abordarán los requerimientos para la formalización de unidades productivas, este se dividirá en trámites necesarios para la creación y, los pasos previos para la consolidación y formalización.  

    separador
    #t_2_1.titulo-segundo
      h2 2.1 Trámites
    p.mb-5 Los trámites necesarios para la gestión y creación de una unidad productiva se presentan a continuación: 
    .row.justify-content-around.align-items-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-2")
          .row(titulo="Inscripción de Industria y Comercio")
            .col-md-6.mb-4.mb-md-0.p-5
              p Esta inscripción se realiza en las secretarías de hacienda municipal de donde se encuentra ubicada y va a funcionar la unidad productiva.
          
            .col-md-6.px-5
              figure
                img.img-250.img-c(src='@/assets/tema1/img-20.svg')
                

          div(titulo="Consulta de usos del suelo")
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p Esta consulta se realiza en el Departamento Administrativo o Área de Planeación municipal o departamental, esto va acorde con el Plan de Ordenamiento Territorial (POT).  
            
              .col-md-6.px-5
                figure
                  img.img-250.img-c(src='@/assets/tema1/img-21.svg')

          div(titulo="Inscripción del RUT y asignación del NIT")
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p Esto se realiza en la Dirección de Impuestos y Aduanas Nacionales (DIAN) lo puede hacer de forma virtual y después se acerca a la entidad para solicitar copia del RUT. #[strong Registro Único Tributario (RUT) - Número de Identificación Tributaria (NIT).]           
              .col-md-6.px-5
                figure
                  img.img-c(src='@/assets/tema1/img-22.svg')                

          div(titulo="Los establecimientos comerciales")
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p Tendrán visitas de inspección, vigilancia y control por parte de las entidades reguladoras, en el cual deberán cumplir con los requerimientos exigidos para su funcionamiento, entre estas se encuentran:
                ul.lista-ul
                  li 
                    i.iii.fas.fa-check
                    | #[strong Condiciones sanitarias y ambientales.]
                  li 
                    i.iii.fas.fa-check
                    | #[strong Prevención y seguridad industrial.]
                  li 
                    i.iii.fas.fa-check
                    | #[strong La reproducción de música y videos.]
            
              .col-md-6.px-5
                figure
                  img.img-250.img-c(src='@/assets/tema1/img-23.svg')         

    separador            
    #t_2_2.titulo-segundo
      h2 2.2 Pasos previos para la constitución y formalización de las unidades productivas 
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.align-self-center
        .row.justify-content-around.align-items-center
          .col-lg-4 
            figure.mb-5
                img(src='@/assets/tema1/img-24.png')
          .col-lg-8.fnd-1.p-5         
            p En este apartado se van a ver los pasos a seguir para la formalización de una unidad productiva, los cuales se explicarán en tres tiempos, el primero de ellos es la consulta, que se refiere al tipo de empresa, el nombre y marca; el segundo de ellos es el diligenciamiento, en el que se realiza el registro, inscripción y documentación requerida; y el tercero de ellos es la formalización, en este se formaliza en la Cámara de Comercio. 

    h5 Consulta
    p.mb-5 Al momento de materializar una idea o consolidar una idea de negocio es importante saber qué tipo de sociedad económica se va a tener en cuenta para formalizar esa unidad productiva, por eso la consulta es fundamental para poder identificar cuál tipo de empresa conviene, cuál sería el nombre que llevará la unidad productiva, en qué actividades económicas se clasifica la unidad productiva y de esta forma, consolidar una marca productiva y que se pueda consolidar en el mercado. En el siguiente gráfico interactivo, se pueden conocer los diferentes tipos de consultas:
    .row.justify-content-around.align-items-center.mb-5
      .col-10.row.justify-content-around.align-items-center    
        h5.mb-4.text-center Tipos de consulta
        .row.justify-content-around.align-items-center.fnd-2.mb-4
          .col-lg-4.mb-lg-0.align-self-center 
            figure
                img(src='@/assets/tema1/img-25.svg')
          .col-lg-8.p-5    
            .cc1.img-c.mb-4
              h1.img-c.cc3 1     
            h6.text-center Consulta tipo de empresa:
            p.text-center Indica los conceptos y las diferentes formas que existen, según la norma, de consolidar una empresa o unidad productiva.

        .row.justify-content-around.align-items-center.fnd-2.mb-4
          .col-lg-8.p-5    
            .cc1.img-c.mb-4
              h1.img-c.cc3 2
            h6.text-center Consulta de nombre:
            p.text-center Esto se puede hacer de forma gratuita y en tiempo real para evitar la homonimia, así establece el nombre o razón social para la unidad productiva.           
          .col-lg-4.mb-lg-0.align-self-center 
            figure
                img(src='@/assets/tema1/img-26.svg')


        .row.justify-content-around.align-items-center.fnd-2.mb-4
          .col-lg-4.mb-lg-0.align-self-center 
            figure
                img(src='@/assets/tema1/img-27.png')
          .col-lg-8.p-5    
            .cc1.img-c.mb-4
              h1.img-c.cc3 3  
            h6.text-center Consulta de marca: 
            p.text-center La marca se puede registrar y verificar en la Superintendencia de Industria y Comercio (SIC) y de paso verificar requisitos y tarifas. 

        .row.justify-content-around.align-items-center.fnd-2.mb-4
          .col-lg-8.p-5    
            .cc1.img-c.mb-4
              h1.img-c.cc3 4   
            h6.text-center Consulta de actividad económica: 
            p.text-center Aquí podrá clasificar la categoría de su actividad económica (Código CIIU).        
          .col-lg-4.mb-lg-0.align-self-center 
            figure
                img(src='@/assets/tema1/img-28.svg')

        .row.justify-content-around.align-items-center.fnd-2.mb-4
          .col-lg-4.mb-lg-0.align-self-center 
            figure
                img(src='@/assets/tema1/img-29.svg')
          .col-lg-8.p-5    
            .cc1.img-c.mb-4
              h1.img-c.cc3 5  
            h6.text-center Consulta de uso de suelos: 
            p.text-center Esta depende del Plan de Ordenamiento Territorial (POT) y permitirá verificar si se puede realizar la actividad económica en la dirección registrada o establecida. 

        .row.justify-content-around.align-items-center.fnd-2.mb-4
          .col-lg-8.p-5    
            .cc1.img-c.mb-4
              h1.img-c.cc3 6    
            h6.text-center Simulador de pagos: 
            p.text-center Esto lo puede realizar en las Cámaras de Comercio de su localidad, ahí podrá consultar el valor por registro de documentos y derechos de matrícula.       
          .col-lg-4.mb-lg-0.align-self-center 
            figure
                img(src='@/assets/tema1/img-30.svg')
    p.mb-5 Otras consultas importantes que se deben tener en cuenta son las de seguridad industrial, urbanismo, sanidad y política ambiental. 

    h5 Diligenciamiento

    p.mb-5 Después de tener claro el tipo de empresa o unidad productiva a consolidar es importante iniciar con el diligenciamiento de los formularios y documentos necesarios para la formalización. En caso de tener dudas se puede acercar a la Cámara de Comercio de su localidad en donde podrá solicitar asesoría para la consolidación o para resolver dudas sobre el proceso de formalización de la unidad productiva. Algunos de estos documentos son: 

    .row.mb-5 
      .col-lg-6
        figure
          img.img-350.img-c(src='@/assets/tema1/img-31.svg')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Registro Cámara de Comercio")
            p Deberá solicitar los formularios de inscripción, dependiendo del tipo de empresa o sociedad comercial. 

          .row(numero="2" titulo="Realizar inscripción del RUT")
            p Se debe registrar en el Registro Único Tributario (RUT) y obtener el NIT o Número de Identificación Tributaria, esto se realiza en la DIAN para tramitar en la Cámara de Comercio.
          
          .row(numero="3" titulo="Elaborar documento de constitución")
            p Se puede realizar minuta ante notario y esta será revisada y aprobada, o también por medio de documento privado (Art. 22 Ley 1014 de 2006) según el Decreto 4463 de 2006. 

          .row(numero="4" titulo="Diligenciar formulario de registro único empresarial")
            p Aquí se debe diligenciar toda la información del Registro Mercantil y de las entidades encargadas, entre los trámites se tienen: 
            ul.lista-ul
              li 
                i.ii.fas.fa-angle-right
                | Registro del establecimiento comercial (pueden ser los que quieran).
              li 
                i.ii.fas.fa-angle-right
                | Adquirir la Matrícula Mercantil de su unidad productiva.
              li 
                i.ii.fas.fa-angle-right
                | Certificado de existencia y representación legal (Matrícula Mercantil). 
              li 
                i.ii.fas.fa-angle-right
                | Cancelar derechos correspondientes de la Cámara de Comercio y solicitar el registro de libros exigidos por la ley. 
              li 
                i.ii.fas.fa-angle-right
                | Matrícula de Industria y Comercio ante la Secretaría de Hacienda Municipal.
            p.mb-3 Una vez constituida la unidad productiva se notifica a los entes de vigilancia y control de su registro.

    h5 Formalización
    p Después de diligenciar los documentos para su formalización en la Cámara de Comercio es necesario dar seguimiento al proceso y realizar los siguientes trámites que son necesarios para la empresa y los empleados, en el siguiente orden: 
    .row
      .col.fnd-3.p-5.m-2
        .cc2.img-c.mb-4
          h1.cc3 1
        h6 Dirigirse a la Cámara de Comercio
        p Debe conocer el estado del proceso y es necesario consultar en su Cámara de Comercio local o donde registró su unidad productiva.
        
      .col.fnd-3-.p-5.m-2
        .cc2.img-c.mb-4
          h1.img-c.cc3 2
        h6.texto-blanco Impresión
        p.texto-blanco En algunas Cámaras de Comercio se puede realizar los trámites de forma virtual, pero es necesario imprimir los formularios para archivar, ser firmados y entregar en la ventanilla única para su pago.
       
      .col.fnd-3.p-5.m-2
        .cc2.img-c.mb-4
          h1.img-c.cc3 3
        h6 Tramitar en las entidades promotoras de salud (EPS)
        ul.lista-ul
          li 
            i.iii.fas.fa-check
            | Las afiliaciones de los trabajadores al sistema de seguridad social.
          li 
            i.iii.fas.fa-check
            | Afiliar al sistema pensional y de cesantías a los trabajadores. 
          li 
            i.iii.fas.fa-check
            | Inscribir a sus trabajadores a una caja de compensación familiar. 

      .col.fnd-3-.p-5.m-2
        .cc2.img-c.mb-4
          h1.img-c.cc3 4
        h6.texto-blanco Estado del proceso
        p.texto-blanco Es responsabilidad del empresario estar atento al proceso y dar seguimiento a la creación de la unidad productiva, es preciso resaltar que tienen un tiempo límite para completar la minuta de la constitución.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
