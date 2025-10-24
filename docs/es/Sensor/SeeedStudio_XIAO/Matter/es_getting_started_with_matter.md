---
description: Una introducción sobre cómo experimentar rápidamente la iluminación Matter usando la herramienta de despliegue Matter de Espressif.
title: Comenzando con Matter rápidamente con XIAO ESP32
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/getting_started_with_matter
last_update:
  date: 05/11/2024
  author: Citric
---

# Comenzando con Matter rápidamente con la serie XIAO ESP32

:::tip
Este artículo es el segundo tutorial en la serie de desarrollo Matter de Seeed Studio XIAO ESP32. Si aún no has configurado tu entorno ESP-IDF, por favor lee primero el primer tutorial:

- **[Desarrollado en XIAO usando Espressif ESP-IDF](https://wiki.seeedstudio.com/es/xiao_idf)**

Este tutorial se aplica al XIAO ESP32C3, XIAO ESP32S3. El ejemplo Matter proporcionado por Espressif no está disponible temporalmente para el XIAO ESP32C6 porque el pin GPIO8 no está expuesto.
:::

En el mundo de la tecnología del hogar inteligente, Matter ha surgido como un cambio revolucionario, prometiendo revolucionar la forma en que los dispositivos se comunican e interactúan entre sí. Matter es un protocolo estandarizado de código abierto que permite la interoperabilidad perfecta entre dispositivos de hogar inteligente de varios fabricantes. Al proporcionar un lenguaje común y un marco de trabajo, Matter tiene como objetivo simplificar el desarrollo y despliegue de dispositivos IoT, creando una experiencia de hogar inteligente más conectada y fácil de usar.

Como desarrollador o entusiasta, puedes estar ansioso por explorar el potencial de Matter y comenzar a construir tus propios dispositivos compatibles con Matter. Ahí es donde entran en juego la serie XIAO ESP32 y ESPLaunchPad. La serie XIAO ESP32, particularmente el XIAO ESP32C3, XIAO ESP32S3 y XIAO ESP32C6, son placas de desarrollo compactas y potentes que ofrecen una plataforma ideal para crear dispositivos Matter. Con sus características robustas y extensas interfaces periféricas, estas placas proporcionan la base de hardware necesaria para tus proyectos Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

Para agilizar el proceso de desarrollo y hacerlo más accesible, Espressif Systems ha introducido ESPLaunchPad, una plataforma integral que simplifica la grabación de firmware y el aprovisionamiento de dispositivos ESP32. ESPLaunchPad aprovecha el poder del ecosistema ESP RainMaker, permitiéndote configurar y controlar fácilmente tus dispositivos usando una aplicación de smartphone. Al combinar la serie XIAO ESP32 con ESPLaunchPad, puedes comenzar rápidamente con el desarrollo Matter y experimentar los beneficios de este protocolo transformador.

En este tutorial, te guiaremos a través del proceso de usar ESPLaunchPad para grabar rápidamente firmware en tu placa XIAO ESP32 y emparejarla con tu iPhone usando un código QR. Siguiendo estos pasos, podrás establecer una conexión entre tu teléfono y el dispositivo XIAO ESP32, permitiéndote controlar e interactuar con él sin problemas. Esta experiencia práctica te proporcionará una comprensión fundamental de Matter y su potencial en el ecosistema del hogar inteligente.

A lo largo de este tutorial, aprenderás cómo:
1. Configurar tu placa XIAO ESP32 y prepararla para la grabación de firmware.
2. Usar ESPLaunchPad para grabar sin esfuerzo el firmware Matter en tu dispositivo XIAO ESP32.
3. Emparejar tu placa XIAO ESP32 con tu iPhone usando un código QR.
4. Controlar e interactuar con tu dispositivo Matter usando la aplicación de iPhone.
5. Explorar las funcionalidades básicas y capacidades de Matter en un entorno práctico.

Al final de este tutorial, habrás obtenido una comprensión sólida de Matter y su implementación usando la serie XIAO ESP32 y ESPLaunchPad. Estarás equipado con el conocimiento y las habilidades para llevar tu desarrollo Matter más lejos, creando soluciones innovadoras de hogar inteligente que aprovechen el poder de este protocolo revolucionario.

Así que, ¡sumerjámonos y embarquémonos en un emocionante viaje al mundo de Matter con la serie XIAO ESP32 y ESPLaunchPad!

## Preparar el Software

La siguiente lista muestra los sistemas y versiones compatibles para usar en este tutorial.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) o macOS 10.15 o posterior.

<!-- Matter's ESPLaunchPad **no es compatible con Windows**. -->

## Preparar el Hardware

Al final de este tutorial, te mostraremos cómo agregar la serie XIAO ESP32 como un Endpoint de Matter a Apple Home para controlar las tiras LED a través del ecosistema de Apple. Hasta ahora, este tutorial es compatible con los siguientes XIAOs, y puedes elegirlos directamente para el contenido de este curso.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

Además del XIAO, también necesitamos la barra de luces o perla de luz modelo WS281x. Actualmente, el ejemplo de luz proporcionado por Espressif solo admite una sola perla, por lo que ya sea que uses una tira o una perla, solo se encenderá una luz. También recomendaríamos que consigas Grove Base for XIAO para facilitar el cableado.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Base for XIAO</th>
			<th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

Si estás usando el XIAO ESP32C3, conecta la tira LED al pin **D8**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

Si estás usando el XIAO ESP32S3, conecta la tira LED al pin **D9**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

Este tutorial usará el **XIAO ESP32C3** como ejemplo para darte una visión general de cómo flashear el firmware, añadir dispositivos y el resto.

## Tutoriales en Video

<div class="video-container">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Paso 1. Flashear Firmware Matter para XIAO ESP32

Conecta la placa XIAO ESP32C3 a tu computadora usando un cable USB. Asegúrate de que la placa sea reconocida correctamente por tu computadora.

<!-- :::caution
Por favor no uses una computadora Windows, notarás que el botón Flash siempre está deshabilitado en computadoras Windows.
::: -->

Abre el sitio web ESPLaunchPad en tu computadora.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Ir a ESPLaunchPAD</font></span></strong>
    </a>
</div>

<br />

Selecciona **light** en **Select Application** y selecciona **ESP32C3** en **ESP Chipset Type**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

Luego haz clic en el botón **Connect** en la esquina superior derecha y selecciona el dispositivo XIAO que has conectado a tu computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

Luego haz clic en el botón **flash** de abajo y espera a que se cargue el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

Una vez que se complete la carga del firmware, verás algunas cajas de alerta de acción así como un código QR, y simplemente haremos clic en **Done**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

Luego haz clic en el botón **Reset Device** en el lado derecho de la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

Cuando veas el mensaje de depuración, significa que todo está yendo muy bien. Ahora podemos proceder con la vinculación del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Agregar un dispositivo escaneando el código usando la APP Home de iPhone

En la sección sobre agregar dispositivos, tomaremos el dispositivo de Apple como ejemplo (ya que es todo lo que tengo a mano). Si tienes [dispositivo de Google](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid) o [dispositivo de Amazon](https://developer.amazon.com/en-US/alexa/matter) a mano, tal vez también puedas usarlos.

Si, como en este artículo, quieres agregar dispositivos usando la APP Home para iPhone, necesitas tener un dispositivo Apple como hub doméstico. Los dispositivos actualmente compatibles con Home Hub son HomePod y Apple TV, lee el [sitio web de Apple para más detalles](https://support.apple.com/en-hk/102557). Para el propósito de este tutorial, se asume que ya has agregado el Home Hub en la APP Home.

La APP Home está instalada por defecto en dispositivos iOS. Si alguna vez la has eliminado, puedes [buscarla](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB) nuevamente en la App Store y descargarla.

Abre la App Home en tu iPhone. Toca el botón **+** en la esquina superior derecha de la pantalla. Selecciona **Add or Scan Accessory** del menú. Usa la cámara de tu iPhone para escanear el código QR proporcionado con el XIAO ESP32C3. La App Home reconocerá el Accesorio Matter y lo mostrará como un nuevo accesorio. Toca **Add to Home** para agregar el XIAO ESP32C3 a tu App Home. Por favor consulta las imágenes detalladas de operación a continuación.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 4</th>
      <th>Página 5</th>
      <th>Página 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 7</th>
      <th>Página 8</th>
      <th>Página 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Paso 3. Usando el XIAO en la aplicación Home

En la aplicación Home, localiza el accesorio XIAO ESP32C3 recién añadido. Toca en el accesorio para acceder a sus controles. Usa el deslizador de brillo para ajustar el brillo de las luces conectadas. Toca en el icono de color para cambiar el color de las luces. Puedes elegir entre una variedad de colores predefinidos o usar el selector de color para crear colores personalizados. Las luces conectadas al XIAO ESP32C3 responderán en tiempo real a los ajustes realizados en la aplicación Home.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

¡Felicidades! Has flasheado exitosamente el firmware de luz en la placa XIAO ESP32C3 usando ESPLaunchPad y lo has emparejado con la aplicación Home de tu iPhone. Ahora puedes controlar el brillo y color de las luces conectadas directamente desde tu iPhone, creando una experiencia de iluminación personalizada y conveniente.

Siéntete libre de explorar más características avanzadas y opciones de personalización disponibles en la aplicación Home y experimenta con diferentes accesorios de luz compatibles con la placa XIAO ESP32C3. Con esta base, puedes expandir aún más tu configuración de hogar inteligente y crear un espacio de vida verdaderamente conectado y automatizado.

## Solución de problemas

### P1: Falló la conexión al dispositivo durante mucho tiempo en la aplicación Home.

Si fallas en conectarte al dispositivo durante un período extendido de tiempo, asegúrate de ver el mensaje de log después de subir el firmware. Si no has emparejado el dispositivo durante mucho tiempo en este punto, el XIAO puede entrar en modo de espera, en cuyo caso necesitarás presionar el botón Reset en el XIAO o usar Reset Device en ESPLaunchPad para reiniciar el dispositivo. Después de eso intenta añadirlo nuevamente.

Aparte de eso, podrían haber problemas de red. Por favor asegúrate de que XIAO y tu iPhone estén bajo la misma LAN. Y ambos necesitan estar conectados a una red de 2.4GHz, no red de 5GHz. Después de que la configuración esté hecha, el teléfono puede usar otras redes. Pero XIAO solo soporta red de 2.4GHz.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


