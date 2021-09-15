export default {
  global: {
    componenteFormativo:
      'Formalización para unidades productivas según su actividad económica',
    descripcionCurso:
      'Los temas tratados en este componente de formación permiten identificar y conocer, en primer lugar, las entidades de vigilancia y control y en segundo lugar, el diligenciamiento y trámites de la documentación requerida para la formalización de las unidades productivas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Concepto y clasificación de las entidades de vigilancia y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'DIAN',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Alcaldía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Superintendencia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sayco y Acinpro',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Cámaras de Comercio',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Corporaciones autónomas regionales',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Cuerpos de bomberos voluntarios',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Instituto Nacional y Departamental de Salud',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Comités locales de prevención y atención a desastres',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Documentación requerida para la formalización de unidades productivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Trámites',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Pasos previos para la constitución y formalización de las unidades productivas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tramitología ante las entidades de vigilancia y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto de homonimia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Uso de suelos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Registro de marca y logo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Acta o documento privado de constitución',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Escritura pública',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Cuenta bancaria',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Responsabilidades tributarias',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Solicitud del RUT',
            hash: 't_3_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.9',
            titulo: 'Solicitud de facturación',
            hash: 't_3_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.10',
            titulo: 'Firma electrónica',
            hash: 't_3_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.11',
            titulo: 'Facturación electrónica',
            hash: 't_3_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.12',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_3_12',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.13',
            titulo: 'Afiliación a seguridad social',
            hash: 't_3_13',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.14',
            titulo: 'Afiliación a parafiscales',
            hash: 't_3_14',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.15',
            titulo: 'Fondo de cesantías, pensiones',
            hash: 't_3_15',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Confecámaras. (2021). Introducción a Cámaras de Comercio. Naturaleza jurídica de las Cámaras de Comercio. ',
      link:
        'https://www.confecamaras.org.co/representacion-de-la-red/introduccion-a-camaras-de-comercio#:~:text=Las%20C%C3%A1maras%20de%20Comercio%2C%20son,empresariado%20en%20Colombia%2C%20y%20llevar',
    },
    {
      referencia:
        'DANE. (2015). Tercer Censo Nacional Agropecuario. Caracterización de los productores residentes en el área rural dispersa censada. ',
      link:
        'https://www.dane.gov.co/files/CensoAgropecuario/avanceCNA/Boletin%20tecnico_8sep.pdf',
    },
    {
      referencia:
        'Decreto 410 de 1971. [Presidente de la República de Colombia]. Por el cual se expide el Código de Comercio. Marzo 27 de 1971. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Decreto 624 de 1989. [Presidencia de la República de Colombia]. Por el cual se expide el Estatuto Tributario de los Impuestos Administrados por la Dirección General de Impuestos Nacionales. Marzo 30 de 1989. ',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=6533',
    },
    {
      referencia:
        'Decreto 4463 de 2006. [Presidente de la República de Colombia]. Por el cual se reglamenta el Artículo 22 de la Ley 1014 de 2006. Diciembre 15 de 2006. ',
      link:
        'https://www.sic.gov.co/sites/default/files/normatividad/Dec_4463_2006_art_22.pdf',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia:
        'Decreto 1528 de 2015. [Presidente de la República de Colombia]. Por el cual se corrigen unos yerros del Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo, contenidos en los artículos 2.2.4.2.1.6., 2.2.4.6.42. y 2.2.4.10.1. del título 4 del libro 2 de la parte 2, referente a Riesgos Laborales. Julio 16 de 2015. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62875',
    },
    {
      referencia: 'DIAN. (2021). La entidad. ¿Cuál es la naturaleza jurídica? ',
      link:
        'https://www.dian.gov.co/dian/entidad/Paginas/Presentacion.aspx#:~:text=La%20DIAN%20esta%20organizada%20como,de%20Hacienda%20y%20Cr%C3%A9dito%20P%C3%BAblico',
    },
    {
      referencia:
        'Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. N° 41148. ',
    },
    {
      referencia:
        'Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Agosto 18 de 1999. DO. N° 43673. ',
    },
    {
      referencia:
        'Ley 1523 de 2012. Por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones. Abril 24 de 2012. ',
    },
    {
      referencia:
        'Ley 1575 de 2012. Por medio de la cual se establece la Ley General de Bomberos de Colombia. Agosto 21 de 2012. DO. N° 48530. ',
    },
    {
      referencia:
        'Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Enero 26 de 2006. DO. N° 46164. ',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. DO. N° 48488. ',
    },
    {
      referencia:
        'Universidad Piloto de Colombia Seccional del Alto Magdalena. (2020). Inscripción del RUT por primera vez [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=7aBZqxZEqh0',
    },
  ],
  glosario: [
    {
      termino: 'Entidades',
      significado:
        'Colectividad considerada como unidad, y en especial, cualquier corporación, compañía, institución, etc., (persona jurídica).',
    },
    {
      termino: 'Formalización',
      significado:
        'Acción y efecto de formalizarse, dar una estructura formal a una proposición y revestirla de requisitos legales.',
    },
    {
      termino: 'Trámites',
      significado:
        'Cada uno de los pasos y diligencias que hay que recorrer en un asunto hasta su conclusión.',
    },
    {
      termino: 'Vigilancia y control',
      significado:
        'Cuidado y atención exacta en las cosas que están a cargo de cada uno para la comprobación, inspección, fiscalización e intervención.',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 410 de 1971 - Decreto 410 de 1971. [Presidente de la República de Colombia]. Por el cual se expide el Código de Comercio. Marzo 27 de 1971.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      texto:
        'Decreto 1072 de 2015	Decreto 1072 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015.',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      texto:
        'Decreto 1528 de 2015	Decreto 1528 de 2015. [Presidente de la República de Colombia]. Por el cual se corrigen unos yerros del Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo, contenidos en los artículos 2.2.4.2.1.6., 2.2.4.6.42. y 2.2.4.10.1. del título 4 del libro 2 de la parte 2, referente a Riesgos Laborales. Julio 16 de 2015.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62875',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria de la Empresa y los Servicios - Regional Norte de Santander',
      },

      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },

      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },

      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela Gonzalez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
