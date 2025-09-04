---
description: Diseño de PCB para XIAO
title: Diseño de PCB para XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/PCB_Design_XIAO
last_update:
  date: 11/07/2023
  author: Matthew
---

# Creando Componentes XIAO en Flux.ai

Flux es una herramienta de diseño de PCB basada en navegador que permite una colaboración fluida entre equipos de electrónica. La interfaz intuitiva de la herramienta permite a los usuarios crear esquemáticos y diseños de manera rápida y fácil, mientras que sus capacidades de simulación integradas ayudan a asegurar que los diseños sean precisos y libres de errores.

En esta sección vamos a cubrir la Creación de Componentes de la serie Seeed Studio XIAO en Flux.ai.

## Diseño de PCB de la Serie Seeed Studio XIAO en Navegador

### Seeed Studio XIAO SAMD21

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>


### Seeed Studio XIAO RP2040

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />


### Seeed Studio XIAO nRF52840

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />


### Seeed Studio XIAO nRF52840 Sense

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>


### Seeed Studio XIAO ESP32C3

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />


### Seeed Studio XIAO ESP32S3

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-esp32s3?editor=schematic&embed=1">
</iframe>


### Seeed Studio XIAO ESP32S3 Sense

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />


## Conocimiento sobre Flux.ai - Creando partes

Las partes en Flux están compuestas de 5 componentes principales. Todos estos componentes son opcionales, pero una parte que carezca de un componente no ofrecerá todas sus capacidades:

| Concepto | Descripción |
| --- | --- |
| Esquemático | La vista "interna" de una parte, representada solo por terminales. |
| Símbolo | La representación de una parte cuando se arrastra a otro proyecto, generalmente familiar para los usuarios de otras herramientas. |
| Huella | Representa cómo la parte física se ubicará en la placa. |
| Modelo 3D | Muestra la forma y dimensiones 3D de la parte. |
| Modelo de simulación | Describe cómo debe comportarse la parte durante la simulación. |

## Comenzando

### Paso 1 - Creando un nuevo esquemático de parte

El primer paso es crear un nuevo proyecto en blanco, puedes hacerlo en el menú principal de Flux en la esquina superior derecha. Los terminales son la base de cada parte que se crea en Flux. Permiten que la parte interactúe con el resto del circuito. Para añadir terminales a una nueva parte, ve a la biblioteca, busca "Terminal" y arrastra tantos como necesites.

En este ejemplo vamos a añadir el Seeed Studio XIAO ESP32S3 así que simplemente añadí 14 pines terminales y les di nombres y números

Puedes dar más información sobre tus partes en las propiedades de la parte como el número de parte del fabricante (MPN), nombre del fabricante, URL de la hoja de datos... etc. Introducir el MPN del componente te ayudará a encontrar la disponibilidad actual de stock y el precio de los componentes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### Paso 2 - Creando un símbolo

Flux funciona de manera ligeramente diferente a otras herramientas que podrías estar acostumbrado a usar. En Flux, las partes tienen dos
vistas diferentes, el esquemático y el símbolo. La vista esquemática del paso 1 solo
contiene los terminales. Los símbolos solo son visibles cuando una parte se coloca en un proyecto. Ahora
vamos a crear un símbolo para nuestro xiao pero para eso necesitamos usar alguna herramienta externa como
illustrator o Inkscape. el formato del símbolo diseñado necesita estar en .svg

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

Cosas a considerar al diseñar el símbolo,
- cada forma y línea debe ser blanca, con ancho de trazo de 1px y sin relleno.,
- Los pines típicamente tienen de 10 a 18 píxeles de largo.
Ahora exporta el símbolo como un archivo SVG.

### Paso 3 - Añadir el SVG como un recurso.

Una vez que tengas el archivo SVG, añádelo como un recurso. Para añadir un archivo externo como recurso. Asegúrate de que ningún objeto haya sido seleccionado (haz clic en el lienzo vacío). En el panel derecho, desplázate
hacia abajo hasta que encuentres el panel de recursos. Ábrelo y haz clic en "Añadir" (o "Gestionar"). Esto
abrirá el diálogo de recursos. Luego haz clic en "Añadir elemento" y selecciona el archivo desde tu unidad local.
**Hacer coincidir la posición del pin con el símbolo personalizado.**
Por defecto, todos los terminales estarán ubicados en el centro del símbolo. Para posicionar los
terminales en la ubicación deseada, hay algunos pasos más.

1. Publica la parte en la biblioteca.
2. Crea un nuevo proyecto en blanco y arrastra la parte que estás importando.
3. Notarás que ambos terminales están en el centro del símbolo. Ahora regresa a la
    parte importada.
4. Necesitarás hacer este proceso para cada terminal en tu parte.
a) Selecciona el terminal y encuentra el menú "Propiedades" en el panel del lado derecho.
b) En el campo "Posición del Pin del Símbolo", escribe las coordenadas x e y deseadas para que
    el terminal se sitúe en el símbolo.
c) Publica la parte y regresa al nuevo proyecto. Verás una leyenda "Actualización disponible para
    tus partes" en la parte inferior izquierda. Haz clic en "Revisar" y acepta los cambios.
d) Notarás que los terminales se han movido. Podrías necesitar repetir este proceso
    algunas veces para conseguir la posición perfecta.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>


### Paso 4 - Creando una huella

Las huellas son muy simples de crear en Flux. Consisten en pads, líneas, formas y nodos de texto que pueden añadirse directamente en el editor de PC de Flux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>


Cuando creas por primera vez una huella en flux, todos los pads estarán en un lugar, que
aparecerá como pequeños puntos.
 Para cambiar la posición del pad
 Selecciona el pad a mover en el panel derecho en reglas específicas del objeto encuentra regla de posición,
 Introduce las posiciones x e y deseadas en milímetros.


### Paso 5 - Modificando el tamaño y forma del pad

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>


Al hacer clic en uno de los pads puedes cambiar su forma, posición, diámetro del agujero y
otras propiedades. Para xiao elegí un pad de tamaño 3mm*2mm y agujero de 1.1mm. Coloqué cada pin
a 2.54mm de distancia utilizando la posición x e y en milímetros.
**Añadiendo modelo 3d**

Ahora necesitamos añadir un modelo 3d de xiao, flux soporta archivo .step para modelos 3d, puedes
descargarlo desde la página wiki oficial.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>


Puedes subir el modelo 3d desde la sección de recursos. Más detalles sobre añadir el modelo 3d
están disponibles en el video.
Puedes cambiar la posición x y z y rotación desde la regla específica del objeto. Usando esto
puedes posicionar el modelo 3d encima de los pads de soldadura.
**Publicando en la biblioteca**
Después de crear un componente, es hora de publicarlo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>


Selecciona el logo de flux en la esquina superior izquierda luego selecciona publicar cambios.
Ahora nuestros componentes estarán disponibles en nuestro perfil, también aparecerán en la búsqueda de la
biblioteca pública

## Qué Más - Video del Tutorial

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaboradores de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6).
- Gracias a los esfuerzos de [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
