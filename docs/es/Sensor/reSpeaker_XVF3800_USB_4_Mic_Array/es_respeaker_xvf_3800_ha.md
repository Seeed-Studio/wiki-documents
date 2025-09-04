---
description: Experimenta el poder del ReSpeaker XVF3800 USB 4-Mic Array—un arreglo de micrófonos circular avanzado con AEC, beamforming, supresión de ruido y captura de voz de 360°. Emparejado con el compacto XIAO ESP32S3, ofrece control de voz de alto rendimiento para dispositivos inteligentes, robótica y aplicaciones IoT. Únete a nosotros mientras demostramos la integración perfecta con Home Assistant para controlar dispositivos usando comandos de voz.

title: Control de Voz para Hogar Inteligente con Home Assistant

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /es/respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 7/30/2025
  author: Kasun Thushara
---

## Descripción General

Habla con espacios inteligentes con el nuevo **ReSpeaker XMOS XVF3800 con XIAO ESP32S3** enciende las luces, sube el volumen de la música, o incluso pregunta sobre el clima usando la voz

En este capítulo usaremos el ReSpeaker XMOS XVF3800 con XIAO ESP32S3 Asistente de Voz HA para conectar el interruptor inteligente Sonoff para realizar control de voz del interruptor de luz.


<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Hardware Requerido

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 con XIAO ESP32S3</th>
        <th>Dispositivo Home Assistant</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Actualización de firmware

Para obtener la mejor experiencia de reproducción, necesitamos actualizar el firmware XMOS a
Descarga el firmware desde aquí. En tu computadora, conecta el ReSpeaker XMOS XVF3800 con XIAO ESP32S3 y ejecuta el en nuestra guía:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_firmware.PNG" alt="pir" width={800} height="auto" /></p>

:::note
El arreglo de micrófonos XVF3800 necesita un MCLK de 12.288 MHz para funcionar, pero ESPHome (usado en Home Assistant) no puede generarlo debido a limitaciones de la API. Este firmware hace que el XVF3800 actúe como el maestro I2S en su lugar, por lo que puede generar sus propios relojes sin necesidad de MCLK del ESP32.
Nuestro firmware corrige esta limitación, por lo que el micrófono funciona correctamente con Home Assistant.
:::

Puedes descargar el Firmware desde [Aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s) 

La guía de instalación está [Aquí](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware)

## Preparar ReSpeaker XMOS XVF3800 con XIAO ESP32S3 

Ve a **Home Assistant > Configuración > Complementos**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

Haz clic en **Tienda de complementos** (generalmente en la parte inferior derecha)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

Bajo **Complementos oficiales**, busca e instala **ESPHome Device Builder**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

Después de la instalación, haz clic en **Iniciar** para ejecutar el complemento ESPHome.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

Habilita **Iniciar al arrancar, Watchdog y Mostrar en la barra lateral** para un acceso más fácil.

Desde la barra lateral de Home Assistant, ve a **ESPHome Builder**.

Haz clic en **+ NUEVO DISPOSITIVO**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

Cuando se te solicite, haz clic en **OMITIR** – crearemos la configuración manualmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

Selecciona tu nueva entrada de dispositivo y haz clic en **EDITAR**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

Reemplaza el contenido con tu **configuración YAML personalizada** 

Puedes encontrar el archivo YAML desde [Aquí](https://github.com/respeaker/reSpeaker_XVF3800_ESPHome_Assistant)

Una vez que tu YAML esté guardado, haz clic en **INSTALAR**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

Elige **Descarga Manual**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

Espera a que el firmware se compile.

Descarga el archivo de firmware .bin generado a tu computadora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

Conecta la placa **ESP32-S3** (con XVF3800 conectado) a tu PC usando un **cable USB Type-C**.

Abre [**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard) en Chrome o Edge.

Haz clic en **CONECTAR** y elige el puerto serie apropiado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

Una vez conectado, haz clic en **INSTALAR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

Selecciona el archivo .bin que acabas de descargar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

Espera a que la instalación se complete (puede tomar unos minutos).

Después del éxito, verás un mensaje de confirmación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

Regresa a **Home Assistant > Configuración > Dispositivos y servicios**.

Deberías ver **ESPHome** listado como una integración descubierta.

Haz clic en **CONFIGURAR**, luego **Enviar** para finalizar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## Añade tu dispositivo inteligente

Configura el dispositivo **Sonoff BASICR2** según el manual de usuario del fabricante. Necesitarás crear una cuenta de eWELink.

### Instalar HACS

Si no está ya instalado, sigue la guía oficial para configurar el [**Home Assistant Community Store**](https://hacs.xyz/docs/use/):

Abre **HACS** desde la barra lateral.
Busca **Sonoff LAN** en la sección de Búsqueda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

Haz clic en **Instalar** para añadir la integración.
Reinicia Home Assistant para aplicar los cambios.

### Sonoff

Navega a **Configuración → Dispositivos y Servicios**.
Haz clic en **Añadir Integración**.
Busca y selecciona **Sonoff**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

Introduce tus **credenciales de cuenta eWeLink** para autenticarte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

Una vez conectado exitosamente, verás las entidades asociadas listadas bajo:
**Configuración → Dispositivos y Servicios → Entidades**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Asistente de Voz con Nabu Cloud


En esta demostración, estamos mostrando cómo conectar con **Home Assistant Cloud (Nabu Casa)** usando voz. La configuración es simple, y puedes aprovechar una **prueba gratuita de un mes** para explorar todas sus capacidades.
Con la **palabra de activación** integrada: "Okay Nabu", puedes activar comandos de voz sin esfuerzo e **integrarte perfectamente** con dispositivos y servicios **en cualquier lugar, en cualquier momento** — todo sin configuraciones complejas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

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

