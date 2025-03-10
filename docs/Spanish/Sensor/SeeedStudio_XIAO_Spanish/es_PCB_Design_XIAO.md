---
description: PCB Design for XIAO
title: Diseño de PCB para XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/PCB_Design_XIAO
last_update:
  date: 01/27/2025
  author: Guillermo
---

# Creando componentes XIAO en Flux.ai

Flux es una herramienta de diseño de PCB disponible en navegador que permite una colaboración fluida entre equipos de electrónica. Su interfaz intuitiva permite a los usuarios crear esquemáticos y diseños rápidamente y con facilidad, mientras que sus capacidades de simulación integradas ayudan a asegurar que los diseños sean precisos y estén libres de errores.

En esta sección, vamos a cubrir la creación de componentes de la serie Seeed Studio XIAO en Flux.ai.

## Diseño de PCB de la serie Seeed Studio XIAO en el navegador

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


## Conocimiento sobre Flux.ai - Creación de partes

Las partes en Flux están compuestas por 5 componentes principales. Todos estos componentes son opcionales, pero una parte que falte algún componente no ofrecerá todas sus capacidades:

| Concepto | Descripción |
| --- | --- |
| Esquemático | La vista "interior" de una parte, representada solo por terminales. |
| Símbolo | La representación de una parte cuando se arrastra a otro proyecto, generalmente familiar para los usuarios de otras herramientas. |
| Huella (Footprint) | Representa cómo la parte física se ubicará en la placa. |
| Modelo 3D | Muestra la forma y las dimensiones 3D del componente. |
| Modelo de simulación | Describe cómo debe comportarse la parte durante la simulación. |

## Para Comenzar

### Paso 1 - Crear un nuevo esquema de componente

El primer paso es crear un nuevo proyecto en blanco. Puedes hacerlo desde el menú principal de Flux, en la esquina superior derecha. Los terminales son la base de cada componente que se crea en Flux, ya que permiten que el componente interactúe con el resto del circuito. Para añadir terminales a un nuevo componente, ve a la biblioteca, busca "Terminal" y arrastra tantos como necesites.  

En este ejemplo, vamos a añadir el Seeed Studio XIAO ESP32S3, por lo que añadimos 14 pines de terminal y asignamos nombres y números a cada uno.  

Puedes proporcionar más información sobre tus componentes en las propiedades del componente, como el número de pieza del fabricante (MPN), el nombre del fabricante, la URL de la hoja de datos, entre otros. Ingresar el MPN del componente te ayudará a encontrar la disponibilidad actual en stock y el precio de los componentes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### Paso 2 - Crear un símbolo

Flux funciona de manera ligeramente diferente a otras herramientas que podrías conocer. En Flux, los componentes tienen dos vistas diferentes: el esquema y el símbolo. La vista de esquema del paso 1 solo contiene los terminales. Los símbolos solo son visibles cuando un componente se coloca en un proyecto.  Ahora vamos a crear un símbolo para nuestro XIAO, pero para esto necesitamos usar una herramienta externa como Illustrator o Inkscape. El símbolo diseñado debe estar en formato .svg.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

Aspectos a considerar al diseñar el símbolo ,
- Cada forma y línea debe ser de color blanco, con un ancho de trazo de 1px y sin relleno.,
- Los pines suelen tener una longitud de entre 10 y 18 píxeles.
Una vez diseñado el símbolo, expórtalo como un archivo SVG.

### Paso 3 - Agregar el SVG como un recurso.

Una vez que tengas el archivo SVG, agrégalo como un recurso. Para agregar un archivo externo como recurso, asegúrate de no tener ningún objeto seleccionado (haz clic en el lienzo vacío). En el panel derecho, desplázate hacia abajo hasta encontrar la sección de recursos (assets). Ábrela y haz clic en "Agregar" (o "Administrar"). Esto abrirá el cuadro de diálogo de recursos. Luego, haz clic en "Agregar elemento" y selecciona el archivo desde tu unidad local.
**Ajusta la posición de los pines para que coincidan con el símbolo personalizado.**
Por defecto, todos los terminales estarán ubicados en el centro del símbolo. Para posicionar los terminales en la ubicación deseada, hay algunos pasos adicionales que seguir.

1. Publish the part to the library.
2. Create a New blank project and drag the part you're importing.
3. You'll notice that both terminals are at the centre of the symbol. Now go back to the
    imported part.
4. You'll need to do this process for every terminal in your part.
a) Select the terminal and find the "Properties" menu in the right-side panel.
b) In the "Symbol Pin Position" field, type the desired x and y coordinates for the
    terminal to sit on the symbol.
c) Publish the part and go back to the new project. You'll see a "Update available for
    your parts" legend in the bottom left. Click on "Review" and accept the changes.
d) You'll notice that the terminals have moved. You might need to repeat this process
    a few times to nail the perfect position.

1. Publica el componente en la biblioteca.  
2. Crea un nuevo proyecto en blanco y arrastra el componente que estás importando.  
3. Notarás que los terminales están en el centro del símbolo. Ahora regresa al componente importado.  
4. Deberás realizar este proceso para cada terminal en tu componente.  
a) Selecciona el terminal y busca el menú "Properties" en el panel derecho.  
b) En el campo "Symbol Pin Position", escribe las coordenadas X y Y deseadas para que el terminal se ubique correctamente en el símbolo.  
c) Publica el componente y regresa al nuevo proyecto. Verás una leyenda en la parte inferior izquierda que dice "Update available for your parts". Haz clic en "Review" y acepta los cambios.  
d) Notarás que los terminales se han movido. Es posible que necesites repetir este proceso algunas veces para lograr la posición perfecta.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>


### Paso 4 - Crear una huella (footprint)

Las huellas (footprints) son muy fáciles de crear en Flux. Consisten en pads, líneas, formas y nodos de texto que se pueden agregar directamente en el editor de PC de Flux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>


Cuando creas una huella (footprint) por primera vez en Flux, todos los pads estarán en un solo lugar, lo que aparecerá como pequeños puntos.
 Para cambiar la posición de un pad:
 Selecciona el pad que deseas mover. En el panel derecho, en las reglas específicas del objeto, busca la regla de "Posición". ,
 Ingresa las posiciones x e y deseadas en milímetros.


### Paso 5 - Modificar el tamaño y la forma de los pads

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>


Al hacer clic en uno de los pads, puedes cambiar su forma, posición, diámetro del agujero y otras propiedades. Para el XIAO, utilicé un pad de tamaño 3 mm x 2 mm con un agujero de 1.1 mm. Coloqué cada pin con una separación de 2.54 mm utilizando las posiciones en milímetros de los ejes x e y.
**Agregar un modelo 3D**

Ahora necesitamos agregar un modelo 3D del XIAO. Flux es compatible con archivos en formato .step para modelos 3D. Puedes descargarlo desde la página oficial de la wiki.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>


Puedes cargar el modelo 3D desde la sección "Assist". Hay más detalles sobre cómo agregar el modelo 3D disponibles en el video.
Puedes cambiar la posición (x, y, z) y la rotación desde las reglas específicas del objeto. Utilizando estas opciones, puedes posicionar el modelo 3D sobre los pads de soldadura.
**Publicar en la biblioteca**
Después de crear un componente, es momento de publicarlo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>


Selecciona el logotipo de Flux en la esquina superior izquierda y luego elige "Publicar cambios".  
Ahora, nuestros componentes estarán disponibles en nuestro perfil y también aparecerán en la búsqueda de la biblioteca pública.

## ¿Qué más? - Video del tutorial

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ Proyecto de colaborador

- Este proyecto es respaldado por [Seeed Studio Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6).
- Gracias [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283) por tus esfuerzos, tu trabajo será [exhibido](https://wiki.seeedstudio.com/Honorary-Contributors/) en el programa honorario de colaboradores.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
