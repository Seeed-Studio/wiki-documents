---
description: An introduction to how to quickly experience Matter Lighting using Espressif's Matter Deployment Tool.
title: Comenzando con Matter en XIAO ESP32
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/getting_started_with_matter
last_update:
  date: 01/29/2025
  author: Guillermo
---

# Comenzando con Matter en XIAO ESP32

:::tip
Este artículo es el segundo tutorial de la serie de desarrollo de Matter con Seeed Studio XIAO ESP32. Si aún no has configurado tu entorno ESP-IDF, por favor, lee primero el primer tutorial:

- **[Desarrollado en XIAO utilizando Espressif ESP-IDF](https://wiki.seeedstudio.com/xiao_idf)**

Este tutorial es aplicable al XIAO ESP32C3 y al XIAO ESP32S3. El ejemplo de Matter proporcionado por Espressif no está disponible temporalmente para el XIAO ESP32C6 debido a que el pin GPIO8 no está habilitado.
:::

En el mundo de la tecnología de hogares inteligentes, Matter ha emergido como un cambio de juego, prometiendo revolucionar la forma en que los dispositivos se comunican e interactúan entre sí. Matter es un protocolo abierto y estandarizado que permite la interoperabilidad sin problemas entre dispositivos de hogares inteligentes de diversos fabricantes. Al proporcionar un lenguaje común y un marco de trabajo, Matter busca simplificar el desarrollo y la implementación de dispositivos IoT, creando una experiencia de hogar inteligente más conectada y fácil de usar.

Como desarrollador o entusiasta, es posible que estés deseoso de explorar el potencial de Matter y comenzar a construir tus propios dispositivos compatibles con Matter. Ahí es donde entran en juego la serie XIAO ESP32 y el ESPLaunchPad. La serie XIAO ESP32, particularmente el XIAO ESP32C3, XIAO ESP32S3 y XIAO ESP32C6, son placas de desarrollo compactas y potentes que ofrecen una plataforma ideal para crear dispositivos Matter. Con sus robustas características y amplias interfaces periféricas, estas placas proporcionan la base de hardware necesaria para tus proyectos con Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

Para agilizar el proceso de desarrollo y hacerlo más accesible, Espressif Systems ha introducido ESPLaunchPad, una plataforma integral que simplifica el flasheo de firmware y la provisión de dispositivos ESP32. ESPLaunchPad aprovecha el poder del ecosistema ESP RainMaker, permitiéndote configurar y controlar tus dispositivos fácilmente mediante una aplicación para smartphone. Al combinar la serie XIAO ESP32 con ESPLaunchPad, puedes comenzar rápidamente con el desarrollo de Matter y experimentar los beneficios de este protocolo transformador.

En este tutorial, te guiaremos a través del proceso de usar ESPLaunchPad para flashear rápidamente el firmware en tu placa XIAO ESP32 y emparejarla con tu iPhone usando un código QR. Siguiendo estos pasos, podrás establecer una conexión entre tu teléfono y el dispositivo XIAO ESP32, lo que te permitirá controlarlo e interactuar con él de manera fluida. Esta experiencia práctica te proporcionará una comprensión fundamental de Matter y su potencial en el ecosistema de hogares inteligentes.

A lo largo de este tutorial, aprenderás a:
1. Configurar tu placa XIAO ESP32 y prepararla para el flasheo de firmware.
2. Usar ESPLaunchPad para flashear sin esfuerzo el firmware de Matter en tu dispositivo XIAO ESP32.
3. Emparejar tu placa XIAO ESP32 con tu iPhone usando un código QR.
4. Controlar e interactuar con tu dispositivo Matter usando la app para iPhone.
5. Explorar las funcionalidades y capacidades básicas de Matter en un entorno práctico.

Al final de este tutorial, habrás adquirido una sólida comprensión de Matter y su implementación usando la serie XIAO ESP32 y ESPLaunchPad. Estarás equipado con el conocimiento y las habilidades necesarias para llevar tu desarrollo de Matter más allá, creando soluciones innovadoras para el hogar inteligente que aprovechen el poder de este protocolo innovador.

¡Así que, vamos a sumergirnos y embarcarnos en un emocionante viaje al mundo de Matter con la serie XIAO ESP32 y ESPLaunchPad!

## Prepara el Software

A continuación, se presenta la lista de los sistemas y versiones compatibles para su uso en este tutorial:

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) o macOS 10.15 en adelante.

<!-- Matter's ESPLaunchPad is **not supported on Windows**. -->

## Prepara el Hardware

Al final de este tutorial, te mostraremos cómo agregar la serie XIAO ESP32 como un Endpoint de Matter a Apple Home para controlar las tiras de LED a través del ecosistema de Apple. Hasta ahora, este tutorial es compatible con los siguientes modelos de XIAO, y puedes elegirlos directamente para el contenido de este curso.

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

Además del XIAO, también necesitaremos la barra de luces o la perla de luz modelo WS281x. Actualmente, el ejemplo de luz proporcionado por Espressif solo admite una sola perla, por lo que, ya sea que uses una tira o una perla, solo se encenderá una luz. También te recomendamos adquirir Grove Base para XIAO para facilitar el cableado.

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

Si estas usando el XIAO ESP32C3, conecta la tira LED al pin **D8**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

Si estas usando el XIAO ESP32S3, conecta la tira LED al pin **D9**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

Este tutorial usará el **XIAO ESP32C3** como un ejemplo para darte una visión general de cómo flashear el firmware, agregar dispositivos y lo demás.

## Video Tutoriales

<div class="table-center">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Paso 1. Flashear el firmware de Matter para XIAO ESP32

Conecta la placa XIAO ESP32C3 a tu computadora usando un cable USB. Asegúrate de que la placa sea reconocida correctamente por tu computadora.

<!-- :::caution
Please do not use a Windows computer, you will notice that the Flash button is always greyed out on Windows computers.
::: -->

Abre el sitio web de ESPLaunchPad en tu computadora.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml">
            <strong><span><font color={'FFFFFF'} size={"4"}>Go to ESPLaunchPAD</font></span></strong>
    </a>
</div>

<br />

Selecciona **light** en **Select Application** y selecciona **ESP32C3** en **ESP Chipset Type**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

Posteriormente has click en el botón **Connect** en la esquina superior derecha y selecciona el dispositivo XIAO que has conectado a tu computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

Después has click en el botón **flash** debajo y espera a que el firmware se actualice.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

Una vez que la carga del firmware esté completa, verás algunas ventanas de alerta de acción, así como un código QR. Luego, solo debes hacer clic en **Done**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

Posteriormente haz click en el botón **Reset Device** al lado derecho de la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

Cuando veas el mensaje de depuración (debug), significa que todo está funcionando correctamente. Ahora podemos proceder con la vinculación del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Agregar un dispositivo escaneando el código con la app Home en iPhone.

En la sección de agregar dispositivos, tomaremos el dispositivo de Apple como ejemplo (ya que es lo que tengo disponible). Si tienes un [dispositivo de Google](https://support.google.com/googlenest/answer/12391458?hl=es&co=GENIE.Platform%3DAndroid) o un [dispositivo de Amazon](https://developer.amazon.com/en-US/alexa/matter), también puedes utilizarlos.

Si, como en este artículo, deseas agregar dispositivos usando la app Home para iPhone, necesitas tener un dispositivo Apple como hub de hogar. Los dispositivos actualmente compatibles con Home Hub son HomePod y Apple TV. Lee el [sitio web de Apple para más detalles](https://support.apple.com/en-hk/102557). Para los fines de este tutorial, asumimos que ya has agregado el Home Hub en la app Home.

La app Home se instala por defecto en dispositivos iOS. Si alguna vez la has eliminado, puedes [buscarla](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB) nuevamente en la App Store y descargarla.

Abre la app Home en tu iPhone. Toca el botón **+** en la esquina superior derecha de la pantalla. Selecciona **Agregar o escanear accesorio** en el menú. Usa la cámara de tu iPhone para escanear el código QR proporcionado con el XIAO ESP32C3. La app Home reconocerá el accesorio Matter y lo mostrará como un nuevo accesorio. Toca **Agregar a Casa** para añadir el XIAO ESP32C3 a tu app Home. Consulta las imágenes de operación detalladas a continuación.

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

## Paso 3. Usar el XIAO en la app Home

En la app Home (Casa), localiza el accesorio XIAO ESP32C3 recién agregado. Toca el accesorio para acceder a sus controles. Usa el control deslizante de brillo para ajustar el brillo de las luces conectadas. Toca el ícono de color para cambiar el color de las luces. Puedes elegir entre una variedad de colores predefinidos o usar el selector de colores para crear colores personalizados. Las luces conectadas al XIAO ESP32C3 responderán en tiempo real a los ajustes realizados en la app Home.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

¡Felicidades! Has flasheado con éxito el firmware de las luces en la placa XIAO ESP32C3 utilizando ESPLaunchPad y la has emparejado con la app Home de tu iPhone. Ahora puedes controlar el brillo y el color de las luces conectadas directamente desde tu iPhone, creando una experiencia de iluminación personalizada y conveniente.

Siéntete libre de explorar más funciones avanzadas y opciones de personalización disponibles en la app Home y experimentar con diferentes accesorios de luz compatibles con la placa XIAO ESP32C3. Con esta base, puedes expandir aún más tu configuración de hogar inteligente y crear un espacio de vida verdaderamente conectado y automatizado.

## Solución de problemas

### P1: No se pudo conectar al dispositivo durante mucho tiempo en la app Home.

Si no puedes conectar al dispositivo durante un largo período de tiempo, asegúrate de ver el mensaje de registro después de cargar el firmware. Si no has emparejado el dispositivo por un tiempo largo en este punto, el XIAO podría haberse puesto en modo de espera. En este caso, necesitarás presionar el botón de reinicio en el XIAO o usar la opción de Reiniciar Dispositivo en ESPLaunchPad para reiniciar el dispositivo. Después de eso, intenta agregarlo nuevamente.

Además, podría haber problemas de red. Asegúrate de que el XIAO y tu iPhone estén bajo la misma red LAN. Ambos deben estar conectados a una red de 2.4GHz, no a una de 5GHz. Después de completar la configuración, el teléfono puede usar otras redes, pero el XIAO solo admite redes de 2.4GHz.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>



