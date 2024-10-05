## Quickly - Framework CSS Grid
**Inicio del Proyecto:** 26 de marzo de 2024  
**Última Actualización:** 04 de octubre de 2024  
**Versión Actual:** Nougat 1.1.3
**Sitio Oficial** https://quicklycss.github.io/Quickly/
---
### Descripción

Quickly es un framework CSS innovador y moderno, diseñado para facilitar el desarrollo de interfaces de usuario rápidas y eficientes. Con un enfoque en la simplicidad y la flexibilidad, Quickly proporciona a los desarrolladores herramientas poderosas y estilos predefinidos que permiten crear aplicaciones web visualmente atractivas y altamente funcionales con un esfuerzo mínimo.

### Historia y Evolución
- **Inicio del Proyecto (26-03-2024):** 
Quickly nació como una respuesta a la necesidad de un framework CSS ligero y altamente personalizable. Desde sus inicios, el equipo de desarrollo se centró en crear un conjunto de herramientas que no solo fueran fáciles de usar, sino también robustas y escalables.

- **Actualización y Versión Alfa 1.1.0 (05-04-2024):** 
En menos de dos semanas desde su concepción, Quickly alcanzó su primera versión alfa. La versión Alfa 1.0.0 incluye una colección esencial de componentes y utilidades CSS que cubren las necesidades básicas de la mayoría de los proyectos web. A pesar de estar en su fase alfa, el framework ha sido diseñado con un alto estándar de calidad, asegurando que incluso en sus etapas iniciales, proporcione una base sólida para el desarrollo.

- **Actualización y Versión Beta 1.1.0 (18-08-2024):**
En esta nueva versión Beta, Quickly introduce la clase video, permitiendo una integración multimedia más fluida y adaptable a las necesidades de proyectos dinámicos. Además, se han realizado optimizaciones significativas en el rendimiento y en la documentación, mejorando la experiencia de desarrollo. Esta actualización refleja el compromiso continuo de Quickly con la innovación y la calidad, asegurando que los desarrolladores cuenten con herramientas cada vez más poderosas y fáciles de usar.

- **Actualización y Versión Beta 1.2.0 (20-08-2024):**
En esta nueva versión Beta, Quickly introduce dos nuevas clases para una mejor integración multimedia: .video o .video-h para videos en formato horizontal 16:9, y .video-v para videos en formato vertical 9:16. Esto permite una mayor flexibilidad al adaptar videos a diferentes orientaciones de pantalla. Además, se han realizado mejoras en la documentación y optimizaciones de rendimiento, asegurando que los desarrolladores cuenten con herramientas más versátiles y eficientes.

- **Actualización y Versión Beta 1.2.1 (22-08-2024):**
En la versión Beta 1.2.1, se han realizado actualizaciones en la barra de navegación, eliminando la delimitación de ancho del navbar-container (90%) para ofrecer mayor flexibilidad en el diseño. Además, se ha actualizado la página de inicio con un nuevo template para videos y una sección de características para destacar el contenido audiovisual, junto con pequeños ajustes visuales que mejoran la presentación general del home. Estas mejoras optimizan la experiencia de usuario y la personalización, manteniendo la coherencia visual con versiones anteriores.

- **Actualización y Versión Beta 1.3.0 (24-08-2024):**
En la actualización Beta 1.3.0, se ha agregado la nueva clase fixed a la documentación para mejorar la gestión de la posición fija de los elementos, se corrigieron las alturas de z-index para solucionar problemas de superposición y mejorar la disposición visual, y se incluyó un nuevo template de panel en el index, ofreciendo una opción adicional para la estructuración y diseño de los paneles en el proyecto. Asegúrate de actualizar tu proyecto para aprovechar estas mejoras y correcciones.

- **Lanzamiento de la Versión Oficial 1.0.0 Nougat (01-09-2024):**
En esta primera versión oficial de Quickly, 1.0.0 Nougat, se introduce el soporte completo para Template Grid, permitiendo una mayor flexibilidad y opciones de diseño en la creación de layouts mediante el uso de nuevas clases como .temp-g-5. Se han actualizado los ejemplos para reflejar las últimas mejoras en la organización de la cuadrícula, optimizando tanto para versiones de escritorio como móviles. Además, se incluyen varias optimizaciones de rendimiento y ajustes en la documentación, proporcionando una guía más clara y detallada para implementar rápidamente las funcionalidades del framework. ¡Actualiza tu proyecto para disfrutar de estas nuevas características y mejoras!

- **Actualizacón y corrección de bug de la Versión Oficial 1.0.0 Nougat (06-09-2024):**
Se corrigió un bug en la clase modal ajustando el nivel z-index de 10 a 20, mejorando la visualización. Además, se incorporó un buscador en el índice con soporte para términos en inglés y español, junto con una modal que ofrece respuestas según distintos casos de uso. También se actualizaron los términos del buscador para optimizar su precisión.

- **Actualización y nuevas características de la Versión Oficial 1.1.0 Nougat (16-09-2024):**
La versión se ha actualizado a Nougat 1.1.0, incorporando nuevas animaciones de entrada que se activan mediante los atributos [data-Qy-r] y [data-Qy-rb]. Estas clases permiten aplicar efectos como fade, flip y zoom en múltiples direcciones, lo que mejora la interactividad visual de manera significativa. Las transiciones han sido optimizadas para ofrecer una experiencia más fluida y personalizable. Además, se ha mejorado la estabilidad del sistema, garantizando un rendimiento más eficiente en la ejecución de las animaciones.

- **Actualización y corrección de errores de la Versión 1.1.1 Nougat (18-09-2024):**
En esta versión se ha corregido un bug relacionado con las animaciones 'run back' en dispositivos móviles. Ahora, las animaciones se ejecutan de manera controlada tanto al hacer scroll hacia abajo como hacia arriba, garantizando una experiencia de usuario más fluida. Se ha optimizado el comportamiento del IntersectionObserver, evitando la activación repetitiva de las animaciones y mejorando el rendimiento en dispositivos móviles. Estos ajustes aseguran una mayor estabilidad en la ejecución de los efectos visuales, preservando la interactividad y personalización que caracteriza a las animaciones activadas por los atributos [data-Qy-r] y [data-Qy-rb].

- **Actualización y corrección de errores de la Versión 1.1.2 Nougat (23-09-2024):**
- Corregido el manejo de la visibilidad de elementos animados en la versión móvil.
- Añadida la lógica para recoger elementos con atributos `data-Qy-r` y `data-Qy-rb`, mejorando el rendimiento en móviles.
- Implementadas funciones para calcular posiciones de elementos en relación al viewport.
- Optimizado el CSS para las animaciones, asegurando una transición suave de opacidad y transformaciones.

- **Actualización y mejora para soporte futuro del menú para Wordpress:**
- Mejora en el control del menú desplegable para dispositivos móviles.
- Se solucionó el problema de cierre inesperado de submenús al interactuar en la versión móvil.

### Quickly: Un Framework Basado en CSS Grid
Quickly es un framework de trabajo CSS basado en CSS Grid, HTML y Javascript que te permite crear rápidamente diseños modernos y receptivos para tus proyectos web.

### Características
    - **Basado en CSS Grid:** 
    Aprovecha todo el poder y la flexibilidad de CSS Grid para crear diseños complejos de manera sencilla.
    
    - **Receptivo:** 
    Los diseños creados con Quickly se adaptan fácilmente a diferentes tamaños de pantalla y dispositivos.
    
    - **Fácil de usar:** 
    Con una sintaxis clara y simple, Quickly te permite construir diseños de manera eficiente y sin complicaciones.
    
    - **Personalizable:** 
    Adapta fácilmente el aspecto y la funcionalidad de Quickly a tus necesidades específicas.

### Instalación
Para empezar a usar Quickly en tu proyecto, simplemente incluye los archivos CSS y JS en tu proyecto HTML.

#### CSS
Añade el siguiente enlace en la sección `<head>` de tu archivo HTML:<br>
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/QuicklyCSS/Quickly@main/dist/v-1/css/quickly.min.css"&gt;

#### JS
Añade el siguiente enlace antes del cierre de la etiqueta `<body>` de tu archivo HTML:
#### JS Componentes<br>
&lt;script src="https://cdn.jsdelivr.net/gh/QuicklyCSS/Quickly@main/dist/v-1/js/quicklyComp.min.js"&gt; &lt;/script&gt;
#### JS Formulario<br>
&lt;script src="https://cdn.jsdelivr.net/gh/QuicklyCSS/Quickly@main/dist/v-1/js/quicklyForm.min.js"&gt; &lt;/script&gt;

### Futuro del Proyecto
El equipo de Quickly está comprometido con la mejora continua y la expansión del framework. Las próximas versiones se centrarán en la adición de nuevos componentes, mejoras de rendimiento y características avanzadas que facilitarán aún más el desarrollo web. Con una comunidad creciente y activa, Quickly está destinado a convertirse en una herramienta esencial para desarrolladores de todo el mundo.

Quickly no solo es un framework CSS, sino una plataforma que impulsa la creatividad y la eficiencia en el diseño y desarrollo web. Únete a nosotros en este emocionante viaje y descubre cómo Quickly puede transformar tu flujo de trabajo y potenciar tus proyectos web.

### Documentación y Recursos
Para obtener más información y empezar a utilizar Quickly, visita nuestro sitio web oficial: [QuicklyCSS](https://quicklycss.github.io/Quickly/)

---
¡Esperamos que disfrutes usando Quickly y que te ayude a llevar tus proyectos al siguiente nivel! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
Para más información escribenos a: getquicklycss@gmail.com

Diseñado y construido por Alex Osses ❤️ desde Chile.
