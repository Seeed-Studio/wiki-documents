---
description: reTerminal DM Ignition Edge Panel Builder Hola Mundo
title: reTerminal DM Ignition Edge Panel Builder Hola Mundo
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 09/29/2023
  author: Corey Thompson
---

:::note
Este documento asume que ya tienes un Gateway Ignition Edge en funcionamiento y conectado a tu red. 
Antes de seguir estas instrucciones, consulta [Empezando con Ignition Edge](/es/reTerminal-DM-Getting-Started-with-Ignition-Edge) si necesitas asistencia con esto.
:::

## Prerrequisitos de Hardware
- PC / Mac con capacidad de terminal SSH
- PC / Mac con capacidad de disco duro disponible para instalar las aplicaciones Designer de Ignition
- Fuente de alimentación DC de 12-24V
- Cable Ethernet
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

## Licenciamiento
Este tutorial no requerirá la activación de ningún producto, aunque puede causar alguna interrupción durante la serie dependiendo del ritmo al que estés trabajando mientras sigues el tutorial. Los productos Ignition Edge requieren una licencia para uso completo en producción. Hay una versión de prueba del producto disponible que tiene soporte completo de características, sin embargo, borrará sus datos cada dos horas.

Para obtener una licencia para el producto, necesitarás contactar a un representante de ventas de Inductive Automation o puedes comprar la tuya propia en la página de [precios de Inductive Automation Ignition](https://inductiveautomation.com/pricing/ignition).

Para ingresar la licencia, simplemente sigue el banner verde que te solicita activar ignition en la página de inicio de tu Gateway Ignition Edge. Asegúrate de que tu dispositivo edge tenga conectividad a internet e ingresa la cadena de 6 u 8 caracteres y el dispositivo tomará unos segundos para activarse.

## Creando una Vista Hello World Con Panel Designer

Para demostrar cómo crear una página básica y mostrarla en una URL fija, crearemos un proyecto perspective 'hello world' y lo veremos en el gateway usando un navegador web.

Para cargar la página de inicio del gateway, lanza un navegador web ya sea en el propio reTerminal en `localhost:8088` O desde otro dispositivo en la red en `{reterminalhostname}:8088` O desde cualquier lugar en la red con la dirección IP del propio reTerminal en `{reterminalip}:8088`

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### Instalar y Configurar Ignition Edge Panel Builder

En la pantalla de inicio del gateway hay un botón para descargar el Designer Launcher. El Designer Launcher es el software diseñador de HMI que se instala en tu PC/Mac local y carga remotamente los diseños en el reTerminal DM.

Comienza descargando y ejecutando este instalador. Detectará tu sistema operativo e instalará una aplicación en tu máquina con un instalador muy básico. Después de que la instalación esté completa, preguntará si te gustaría importar tu configuración desde el gateway - haz clic en **sí**.

Lanza el recién instalado Ignition Designer Launcher, debería mostrar la conexión a tu dispositivo. Haz clic en tu dispositivo y luego haz clic en el botón 'open designer' que ahora está habilitado en la esquina inferior.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

Ahora deberías ver aparecer un prompt de inicio de sesión. Ingresa tus credenciales de administrador de Ignition que fueron ingresadas durante la configuración de tu Edge Gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### Crear y Cargar un Panel

1. En la columna izquierda, expande 'Perspectives' y haz clic derecho en 'Views'
2. Crea una nueva vista y dale el nombre 'hello-world'
3. Encuentra la paleta de componentes, que a veces está en un contenedor de pestañas oculto a tu derecha. Busca un 'label' y arrástralo al lienzo.
4. Haz doble clic en el label y cambia tu texto a 'hello world'
5. Guarda el archivo y en la barra de menú superior navega a File -> Update Project para publicar el proyecto actualizado (también conocido como 'sesión Perspective') al gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

Ahora que has actualizado tu sesión Perspective, ¡está en vivo y puedes navegar a ella con un navegador web!
Para obtener ayuda encontrando la URL para la vista que acabamos de crear, puedes regresar al Edge Gateway Launcher y ver las sesiones Perspective activas. Esto lanzará un navegador en la URL de la página de inicio de tu sesión.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## Expandiendo tu HMI
Ahora has configurado los conceptos básicos del módulo Perspective de Ignition para potenciar las visualizaciones de tu ReTerminal. Para crear visualizaciones más potentes aprovechando toda la plataforma Ignition, probablemente necesitarás configurar Servidores de Tags, Bases de Datos de Historiador, etc., lo cual está fuera del alcance de este tutorial. Para aprender más sobre la plataforma Ignition, utiliza su excelente documentación e instrucciones gratuitas en [Inductive University.](https://inductiveuniversity.com/)

## Perspective Vs Vision
Ignition ofrece dos softwares constructores de paneles y es una pregunta común decidir cuál usar. Hay mucha superposición en funcionalidad entre los dos, pero hay un par de factores clave decisivos para tomar la decisión.

### ¿Tus usuarios serán móviles primero? Elige Perspective.
Si deseas usar paquetes nativos de iOS o Android como servicios de ubicación o cámaras, solo tendrás acceso a estas características a través de Perspective.

### ¿Quieres sentirte más nativo que un navegador web? Elige Vision.
Si quieres evitar la sensación de muchas aplicaciones web modernas (como Google Drive, Outlook para web, Zoom para web, etc.) y sumergir completamente la experiencia de tu usuario, entonces deberías elegir Vision.

### ¿Tus usuarios realizarán múltiples tareas en este dispositivo? Elige Perspective
Perspective es una pila tecnológica basada en javascript y depende de un navegador web para mostrar la aplicación. Vision es una aplicación basada en Java y fue originalmente construida para paneles HMI dedicados y asume que la máquina anfitriona estará completamente dedicada a tu aplicación. Si tu usuario a veces querrá minimizar el HMI para usar otra aplicación en el sistema operativo, deberías elegir Perspective.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
