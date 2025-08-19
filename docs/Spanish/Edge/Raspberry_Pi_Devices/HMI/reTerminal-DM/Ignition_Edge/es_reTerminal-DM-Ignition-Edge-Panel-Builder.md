---
description: reTerminal DM Ignition Edge Panel Builder Hello World
title: reTerminal DM Ignition Edge Panel Builder Hello World
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 04/06/2025
  author: Erick González
---

:::note
Este documento asume que ya tienes un Gateway de Ignition Edge en funcionamiento y en tu red.  
Antes de intentar estas instrucciones, sigue [Primeros pasos con Ignition Edge](/es/reTerminal-DM-Getting-Started-with-Ignition-Edge) si necesitas ayuda con esto.
:::

## Requisitos de Hardware
- PC / Mac con capacidad de terminal SSH  
- PC / Mac con suficiente espacio en disco para instalar las aplicaciones Designer de Ignition  
- Fuente de alimentación DC de 12-24V  
- Cable Ethernet  
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo!🖱️</font></span></strong>
    </a>
</div>

<br />

## Licenciamiento
Este tutorial no requerirá la activación de ningún producto, aunque podría causar algunas interrupciones durante la serie dependiendo del ritmo al que sigas las instrucciones. Los productos de Ignition Edge requieren una licencia para su uso completo en producción. Existe una versión de prueba del producto disponible que tiene soporte completo de sus funciones; sin embargo, borrará sus datos cada dos horas.

Para obtener una licencia para el producto, deberás contactar a un representante de ventas de Inductive Automation o adquirirla directamente en la [página de precios de Ignition de Inductive Automation](https://inductiveautomation.com/pricing/ignition).

Para ingresar la licencia, simplemente sigue la banner verde que te solicita activar Ignition en la página de inicio de tu Gateway de Ignition Edge. Asegúrate de que tu dispositivo edge tenga conexión a Internet e ingresa la cadena de 6 u 8 caracteres; el dispositivo tardará unos segundos en activarse.

## Creando una Vista Hello World Con Panel Designer

Para demostrar cómo crear una página básica y mostrarla en una URL fija, crearemos un proyecto de perspectiva 'hello world' y lo veremos en el gateway usando un navegador web.

Para cargar la página principal del gateway, inicia un navegador web ya sea en el reTerminal en `localhost:8088` O desde otro dispositivo en la red en `{reterminalhostname}:8088` O desde cualquier lugar de la red con la dirección IP del reTerminal, es decir, `{reterminalip}:8088`

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### Instalar y Configurar Ignition Edge Panel Builder

En la pantalla principal del gateway hay un botón para descargar el Designer Launcher. El Designer Launcher es el software de diseño HMI que se instala en tu PC/Mac local y carga remotamente los diseños en el reTerminal DM.

Comienza descargando y ejecutando este instalador. Detectará tu sistema operativo e instalará una aplicación en tu máquina con un instalador muy básico. Una vez completada la instalación, se te preguntará si deseas importar tu configuración desde el gateway: haz clic en **yes**.

Inicia el Ignition Designer Launcher recién instalado; debería mostrar la conexión a tu dispositivo. Haz clic en tu dispositivo y luego haz clic en el botón “open designer” que ahora estará habilitado en la esquina inferior.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

Ahora deberías ver un aviso de inicio de sesión. Ingresa tus credenciales de administrador de Ignition que configuraste durante la puesta en marcha de tu Gateway Edge.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### Crear y Cargar un Panel

1. En la columna de la izquierda, expande "Perspectives" y haz clic derecho en "Views".  
2. Crea una nueva vista y asígnale el nombre "hello-world".  
3. Busca el panel de componentes, que a veces se encuentra en una pestaña oculta a la derecha. Busca una "label" y arrástrala al lienzo.  
4. Haz doble clic en la label y cambia su texto a "hello world".  
5. Guarda el archivo y, en el menú superior, navega a File -> Update Project para publicar el proyecto actualizado (también conocido como "sesión Perspective") en el gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

Ahora que has actualizado tu sesión Perspective, esta está en vivo y puedes navegar hacia ella usando un navegador web.  
Para obtener ayuda para encontrar la URL de la vista que acabas de crear, puedes regresar al Launcher del Gateway Edge y ver las sesiones Perspective activas. Esto lanzará una página web con la URL de inicio de tu sesión.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## Ampliando tu HMI
Ya has configurado lo básico del módulo Perspective de Ignition para potenciar los elementos visuales de tu reTerminal. Para crear visuales más potentes aprovechando toda la plataforma Ignition, probablemente necesitarás configurar servidores de tags, bases de datos historiales, etc., lo cual está fuera del alcance de este tutorial. Para aprender más sobre la plataforma Ignition, puedes consultar su excelente documentación e instrucciones gratuitas en [Inductive University](https://inductiveuniversity.com/).

## Perspective vs Vision
Ignition ofrece dos softwares de creación de paneles y es una pregunta común decidir cuál utilizar. Existe una considerable superposición en funcionalidades entre ambos, pero hay algunos factores clave que pueden ayudarte a tomar la decisión.

### ¿Tus usuarios serán prioritariamente móviles? Elige Perspective.
Si deseas usar paquetes nativos de iOS o Android, como servicios de localización o cámaras, solo tendrás acceso a estas funciones a través de Perspective.

### ¿Quieres que la experiencia se sienta más nativa que en un navegador web? Elige Vision.
Si prefieres evitar la sensación de muchas aplicaciones web modernas (como Google Drive, Outlook para web, Zoom para web, etc.) y deseas ofrecer una experiencia de usuario completamente inmersiva, entonces deberías elegir Vision.

### ¿Tus usuarios van a realizar múltiples tareas en este dispositivo? Elige Perspective.
Perspective es una tecnología basada en JavaScript y depende de un navegador web para mostrar la aplicación. Vision es una aplicación basada en Java y fue diseñada originalmente para paneles HMI dedicados, asumiendo que la máquina anfitriona estará completamente dedicada a tu aplicación. Si tus usuarios a veces desean minimizar el HMI para usar otra aplicación en el sistema operativo, deberías elegir Perspective.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte a través de diferentes canales y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
