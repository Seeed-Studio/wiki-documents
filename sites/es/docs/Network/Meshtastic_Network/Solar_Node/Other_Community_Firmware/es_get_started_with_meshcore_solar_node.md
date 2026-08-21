---
description: Comienza con SenseCAP Solar Node para Meshcore y LoRa. Guía para la instalación del dispositivo, flasheo de firmware y conexión del dispositivo.
title: Comienza con MeshCore en SenseCAP Solar Node
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 8/17/2026
  author: Advent Jiang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/es/get_started_with_meshcore_solar_node/
updatedAt: '2026-08-18'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
Cuando el dispositivo se encuentre en los estados siguientes, no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo podría quedar inservible.
1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::

## Flasheo de firmware

### Método 1 mediante Web Flasher

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo podría dañarse.
:::

Ve a [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio SenseCAP Solar` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Repeater`. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "Solar Node" o "TinyUSB serial". Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flashear firmware

Selecciona la versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Las diferentes versiones del firmware MeshCore difieren en el indicador LoRa TX y en el comportamiento del botón de encendido. Antes de evaluar el estado del dispositivo, confirma la versión de firmware que estás utilizando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/version-different.png" alt="pir" width={800} height="auto" /></p>

:::note
**Diferencias entre versiones de firmware (indicador LoRa TX)**

Los LED indicadores están numerados en la imagen siguiente, para que puedas identificar fácilmente a qué LED se refieren las descripciones de color:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

- **N.º 12 - LED amarillo**: indicador de entrada solar / estado de la luz.
- **N.º 13 - LED azul**: indicador LoRa TX.
- **N.º 14 - LED blanco**: indicador LoRa TX.

Las diferentes versiones del firmware MeshCore encienden distintos LED físicos para LoRa TX:

- v1.12.0 ~ v1.14.0: el LED azul (N.º 13) parpadea durante LoRa TX.
- v1.14.1 ~ v1.15.x: el LED blanco (N.º 14) parpadea durante LoRa TX.
- v1.16.0 y posteriores: el LED azul (N.º 13) vuelve a parpadear durante LoRa TX.
- Ver un destello azul o blanco en diferentes versiones no indica un fallo de hardware.

Los LED rojo, verde y amarillo son principalmente indicadores del estado de alimentación del hardware y no están relacionados con las diferencias de versión del indicador MeshCore TX:

- Rojo: indica principalmente que el dispositivo se está cargando.
- Verde: indica principalmente que la carga se ha completado.
- Amarillo (N.º 12): indica principalmente la entrada solar / estado de la luz.
:::

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "P1 Pro" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso se llene por completo, indicará que el flasheo ha finalizado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastrar y Soltar

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo podría dañarse.
:::

Ve a [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio SenseCAP Solar` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Repeater`. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Verás que aparece un disco llamado `Xiao-Boot` o `Solar Node` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo `NO` se reiniciará automáticamente.

#### Flashear firmware

Elige la última versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Verás que aparece un disco llamado `Xiao-Boot` o `Solar Node` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo NO se reiniciará automáticamente.

## Primeros pasos

Antes del despliegue formal, primero prueba y configura el nodo.

### Instalación

#### Ensamblar el dispositivo

:::danger note
Dado que el dispositivo se utilizará en exteriores durante períodos prolongados, evita instalar el panel en posición horizontal. Se recomienda una instalación inclinada o diagonal para evitar la acumulación de agua. Además, asegúrate de que todos los tornillos estén bien apretados y la tapa esté correctamente instalada. Para una protección impermeable mejorada, también puedes considerar aplicar medidas de sellado adicionales.
:::

- **Lista de piezas**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Paso 1: Conecta la pieza 1 a la parte inferior del dispositivo usando arandelas y tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 2: Conecta la rótula universal (pieza 2) y el soporte (pieza 3) con tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 3: Conecta el cable RF (pieza 4) y la antena (pieza 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 4: Instala el aro de sujeción en la posición adecuada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 5: Conecta el soporte de la rótula universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 6: Afloja los tornillos, ajusta la rótula universal a la posición adecuada y luego aprieta los tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 7: Conecta la antena al dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### Instalar batería y módulo GPS (opcional)

:::tip
Cuando necesites instalar o reemplazar la batería, usa una batería `Button-top` 18650(3.6V).
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
La versión P1-Pro tiene batería y módulo GPS integrados; para la versión P1, el usuario necesita instalar manualmente la batería y el módulo GPS si es necesario.
:::



- Paso 1: Retira todos los tornillos y la tapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Instala la batería y el módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Ensambla la carcasa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Asegúrate de que la carcasa esté correctamente montada y los tornillos bien apretados para mantener la estanqueidad del dispositivo.
:::

#### (Opcional) Actualizar antena

- Puedes reemplazar la antena por una de fibra de vidrio viendo este video.

Si necesitas una antena con mayor ganancia, recomendamos la antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) y la antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

### Encender el dispositivo

El dispositivo necesita activarse conectando el cable USB. Al arrancar, el LED azul se enciende durante unos 3 s, lo que significa que el dispositivo se ha encendido correctamente.

El LED TX solo parpadea cuando el propio Solar Node transmite datos LoRa (por ejemplo, al enviar un anuncio). La recepción de datos no enciende el LED TX. Durante la transmisión LoRa (TX), el color del LED depende de la versión de firmware; consulta las diferencias de versión de firmware indicadas arriba.

:::tip
**Botón de encendido (encender/apagar)**

- MeshCore v1.14.0 y anteriores: no se admite mantener pulsado el botón de encendido para encender/apagar. Si al mantener pulsado Power no hay respuesta, este es el comportamiento normal de la versión de firmware, no un fallo del botón.
- MeshCore v1.14.1 y posteriores: mantén pulsado el botón de encendido durante unos `3s` para encender/apagar el dispositivo. Verás un destello breve de luz blanca, lo que indica que el dispositivo se está encendiendo/apagando correctamente.

**Referencia de botones**

- **Botón de encendido**: encender/apagar (compatible desde la v1.14.1).
- **Botón de reinicio**: reinicia el dispositivo / entra en modo DFU o Bootloader.

No confundas mantener pulsado Power con hacer doble clic en Reset.
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### Configuración

- **Paso 1 Configuración inicial**

Cuando MeshCore se flashea en un dispositivo LoRa por primera vez, es necesario configurar la frecuencia del dispositivo servidor para que utilice la frecuencia que es legal en tu país o región.

[Click here](https://config.meshcore.io/) para configurar el repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cambia la región LoRa y guarda la configuración. Luego `Reboot` el dispositivo, de lo contrario la configuración no surtirá efecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10 %, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::


- **Paso 2 Enviar anuncio**

Haz clic en "send advert" para permitir que otros dispositivos Meshcore vean este repetidor. Entonces el repetidor podrá verse en la lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

Al hacer clic en **Send Advert**, el Solar Node realiza activamente una transmisión LoRa (TX), por lo que el LED TX de la versión de firmware correspondiente debería parpadear brevemente:

- v1.12.0 ~ v1.14.0: el LED azul parpadea
- v1.14.1 ~ v1.15.x: el LED blanco parpadea
- v1.16.0 y posteriores: el LED azul parpadea

El LED TX indica que el propio Solar Node está transmitiendo datos LoRa (TX). No es un indicador de recepción (RX).

- **Paso 3 (opcional) Inicio de sesión de administrador**

La contraseña de administrador predeterminada de un repetidor es `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

Después de iniciar sesión, puedes ver la página de configuración. Ahora puedes ajustar la configuración del repetidor.

Si quieres mostrar la posición del repetidor, puedes habilitar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Además, puedes ajustar el intervalo de difusión de anuncios:

- **Advert interval**: el intervalo de envío del anuncio local / de cero saltos. El rango del intervalo es de 60 a 240 minutos.
- **Flood advert interval**: el intervalo de envío del anuncio de inundación. El rango del intervalo es de 3 a 168 horas.

El periodo real de anuncio depende de la versión de firmware actual y de la configuración guardada en el dispositivo, así que consulta siempre los valores reales de `Advert interval` y `Flood advert interval` en la página de configuración. Si un intervalo se establece en `0`, el anuncio automático correspondiente se desactiva.

**Nota:** Desde MeshCore v1.16.0, el intervalo predeterminado de Flood advert se ha cambiado de 12 horas a 47 horas. Por lo tanto, no recomendamos verificar el dispositivo esperando al anuncio automático. Para verificar la transmisión (TX) y el LED, haz clic en **Send Advert** para activar manualmente una transmisión LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Configurar ruta

Antes de añadir el repetidor a tu ruta, puede que necesites usar el repetidor para enviar primero un anuncio. El repetidor envía anuncios automáticamente a intervalos regulares según el `Advert interval` y el `Flood advert interval` guardados en el dispositivo. Los intervalos dependen de la versión de firmware y de la configuración actual del dispositivo, y pueden ser de varias horas. Recomendamos hacer clic en **Send Advert** para activarlo inmediatamente en lugar de esperar al anuncio automático.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

Puedes configurar manualmente la ruta de envío de mensajes. Conecta tu dispositivo compañero Bluetooth a la app del teléfono. Abre una ventana de mensaje privado. Luego puedes elegir el repetidor detectado para formar tu ruta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Después de configurar la ruta, el método de transmisión cambiará a "n hop". Por ejemplo, si añades 1 repetidor en tu ruta, cambiará a 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

:::note
El repetidor MeshCore no vuelve a enviar cada paquete LoRa que recibe.

- **Caso 1**: Un Companion envía datos → el Solar Node los recibe (RX) → no se necesita respuesta ni reenvío → el Solar Node no realiza una TX → el LED TX no parpadea. Esto es normal.
- **Caso 2**: El Solar Node recibe datos → se necesita una respuesta o reenvío → el Solar Node realiza una transmisión LoRa (TX) → el LED TX parpadea con el color de la versión de firmware correspondiente.

Que el Solar Node reciba correctamente datos LoRa no significa que el LED TX vaya a parpadear. El LED TX solo indica que el propio Solar Node está transmitiendo datos LoRa.

Por ejemplo, cuando solo hay un Companion y un repetidor Solar Node en la red, después de que el Companion envía datos, el Solar Node puede recibir correctamente el paquete sin necesidad de volver a enviarlo. En este caso, no ver parpadear el LED TX no puede utilizarse para juzgar directamente que el repetidor es anómalo.
:::

## Verificar que el dispositivo funciona correctamente

Antes de la verificación, confirma si estás usando solo un dispositivo Solar Node o si también tienes otros dispositivos MeshCore Companion en tu configuración.

Para el modo repetidor, se espera el siguiente comportamiento:

- Cuando el dispositivo está conectado por USB, puede aparecer en línea y ser configurado.
- Después de desconectar la alimentación USB, el dispositivo cambia al modo batería y continúa funcionando como repetidor.
- Cuando el propio Solar Node transmite datos LoRa, el LED TX parpadea brevemente con el color de la versión de firmware correspondiente. Esto es normal e indica actividad LoRa.
- No se espera que el repetidor Solar Node se comporte como un dispositivo independiente conectado al teléfono, a menos que se use junto con un dispositivo Companion.

Para verificar correctamente que el repetidor está funcionando, sigue los dos pasos de verificación activa que se indican a continuación. No confíes en esperar al anuncio automático como método principal de verificación.

### Paso 1: Verificar TX del Solar Node

1. Conecta el Solar Node mediante USB.
2. Abre la página de configuración de MeshCore: [https://config.meshcore.io/](https://config.meshcore.io/).
3. Haz clic en **Send Advert**.
4. Observa el LED TX en el Solar Node.

Cuando el Solar Node envía el anuncio, el LED TX debería parpadear brevemente con el color correspondiente a la versión de firmware:

- v1.12.0 ~ v1.14.0: LED azul
- v1.14.1 ~ v1.15.x: LED blanco
- v1.16.0 y posteriores: LED azul

El Companion debería poder recibir el anuncio del Solar Node. Esto verifica activamente el LoRa TX en la dirección Solar Node → Companion.

### Paso 2: Usar Ping para verificar la comunicación bidireccional

1. En el dispositivo Companion, abre el contacto del Solar Node Repeater y usa la función **Ping**.

Si el ping tiene éxito, ambas direcciones de la comunicación se verifican al mismo tiempo:

- Companion → Solar Node: RX
- Solar Node → Companion: respuesta TX

Cuando el Solar Node envía la respuesta al ping, el LED TX debería parpadear brevemente con el color correspondiente a la versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="Verificar el repetidor Solar Node con Ping desde otro dispositivo MeshCore" width={700} height="auto" /></p>

:::note
El LED TX no es un indicador de RX. Si el Solar Node solo recibe un paquete sin necesidad de responder o reenviar, es posible que el LED no parpadee en absoluto.
:::

:::tip
No recomendamos esperar al anuncio automático para verificar si el dispositivo funciona, porque el intervalo de anuncio puede ser muy largo. Usa **Send Advert** para activar un TX de forma inmediata.
:::

:::note
La app móvil se utiliza principalmente con un dispositivo Companion, no directamente con un Repeater. El propio repetidor no se comportará como un accesorio de teléfono conectado por Bluetooth normal.
:::

Si el comportamiento del LED y el estado de la conexión USB coinciden con la descripción anterior, esto suele indicar un comportamiento normal del repetidor.

## Preguntas frecuentes (FAQ)

### Bucle de arranque (Boot Loop)

- Motivo 

Esto suele estar causado por un fallo al flashear el firmware. Al flashear el firmware, mantén una conexión estable. 

- Solución de problemas

[Haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshcore_solar_node/#flash-erase) para volver a flashear el firmware.

### Dispositivo bloqueado (bricked)

#### Descripción

El dispositivo no responde, no hay LED, no se puede emparejar con tu App.

**1) El dispositivo aún puede entrar en modo DFU, entonces intenta flashear el bootloader**.

#### Flashear el Bootloader

- [Descarga del Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** la desconectes durante el proceso de flasheo.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

Para usuarios de Windows, pulsa la tecla "Win" y la tecla "r", luego introduce "cmd" en la ventana emergente y pulsa "Enter". Esto abrirá la línea de comandos. 

Para usuarios de Mac, pulsa la tecla "Command" y la tecla "Space", así podrás abrir Spotlight. Luego introduce "termial" y pulsa "Return". Esto abrirá la línea de comandos. 

**Requisitos previos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Comprueba en tu línea de comandos si Python y pip se han instalado correctamente.

```
python --version
```

```
python -m pip --version
```

Entonces deberían aparecer "Python xxx" y "pip xxx". Si no es así, intenta instalar Python de nuevo.

<Tabs>
<TabItem value="pypi" label="Instalación desde PyPI">

Este es el método recomendado para instalar la última versión:

```
pip3 install --user adafruit-nrfutil
```

Comprueba la ruta de instalación:

```
python -m pip show adafruit-nrfutil
```

Esta es la ubicación de instalación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, puede que necesites añadir la ruta manualmente. Copia la ubicación de instalación mostrada en el último paso. Luego añádela como se indica a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="Instalación desde el código fuente">

Usa este método si tienes problemas al instalar con PyPi o si quieres modificar la herramienta. Primero clona este repositorio y entra en su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: los siguientes comandos usan `python3`, sin embargo, si estás en Windows, puede que necesites cambiarlo a `python` ya que la instalación de python 3.x en Windows sigue usando el nombre python.exe

Para instalar en el espacio de usuario en tu directorio personal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtienes errores de permisos al ejecutar `pip3 install`, tu `pip3` es antiguo o está configurado para intentar instalar en los directorios del sistema. En ese caso, usa la opción `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si quieres instalar en los directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un binario ejecutable autónomo de la utilidad (Windows y MacOS), ejecuta estos comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrarás el .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).
Cópialo o muévelo a otro lugar para tu comodidad, como un directorio en tu %PATH%.

</TabItem>
</Tabs>

**Paso 2: Comprueba tu número de puerto**

Conecta tu dispositivo al PC y comprueba el número de puerto.

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Flashear el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Cambia COMXX por tu número de puerto COM. Por ejemplo, si tu dispositivo está en el com6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de que introduzcas este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.


- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, podrás [flashear el firmware de la aplicación](https://wiki.seeedstudio.com/es/get_started_with_meshcore_solar_node/#flash-erase).

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.

### Corriente de carga

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

La corriente máxima de carga del Xiao nRF-52840 Plus es de 200 mA. El chip de gestión de carga CN3165 es de 0,99 A. Así que la corriente máxima de carga es de 1 A.

### ¿Por qué mi Solar Node parpadea en blanco en lugar de azul al enviar datos?

Esta es una diferencia de versión del firmware MeshCore, no un fallo de hardware:

- v1.12.0 ~ v1.14.0: LED azul TX
- v1.14.1 ~ v1.15.x: LED blanco TX
- v1.16.0 y posteriores: LED azul TX

Un destello blanco en v1.14.1 ~ v1.15.x no indica un fallo de hardware.

### ¿Por qué no puedo apagar el dispositivo manteniendo pulsado el botón de encendido?

La pulsación prolongada del botón de encendido para encender/apagar es compatible desde MeshCore v1.14.1. En v1.14.0 y anteriores, mantener pulsado el botón de encendido no tiene respuesta, y este es el comportamiento normal de la versión de firmware.

### ¿Por qué mi Solar Node no ha parpadeado durante mucho tiempo?

- El LED TX solo parpadea cuando el propio Solar Node realiza una transmisión LoRa TX.
- RX no necesariamente activa el LED TX.
- El Repeater no reenvía todos los paquetes que recibe.
- El intervalo de anuncio automático puede ser muy largo.
- Desde la v1.16.0, el intervalo predeterminado del anuncio Flood es de 47 horas.
- Si necesitas verificar de inmediato, usa **Send Advert**.

## Recursos
- [Tabla de cálculo de la duración de la batería del Solar Node](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>