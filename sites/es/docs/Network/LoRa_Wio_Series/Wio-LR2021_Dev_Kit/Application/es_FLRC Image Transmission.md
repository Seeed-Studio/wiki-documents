---
description: Envía imágenes de la cámara entre dos Wio-LR2021 Dev Kits por FLRC a 913,76 MHz, ejecuta modelos de rostro, gestos y contador de agua en el transmisor y visualiza el resultado en un navegador.
title: Demo de transmisión de imágenes por FLRC con Wio-LR2021 Dev Kit
keywords:
  - Wio-LR2021
  - LR2021
  - FLRC
  - transmisión de imágenes
  - cámara
  - detector de rostros
  - reconocimiento de gestos
  - contador de agua
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_flrc_image_transmission_demo
sku: 100038329
type: project
sidebar_position: 1
last_update:
  date: 11/19/2026
  author: David Du
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/es/wio_lr2021_dev_kit_flrc_image_transmission_demo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Demo de transmisión de imágenes por FLRC con Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introducción

Dos Wio-LR2021 Dev Kits son suficientes para construir un enlace de cámara inalámbrico completo. Un kit captura un fotograma de `320 × 240`, ejecuta un pequeño detector en el **ESP32-S3**, dibuja el resultado y comprime el fotograma como JPEG. Envía el JPEG por **FLRC** a 2,6 Mbps. El segundo kit reensambla la imagen en la PSRAM y la sirve desde una página web. Un teléfono o portátil se conecta al punto de acceso del receptor y ve el enlace en un navegador, sin necesidad de instalar ninguna aplicación. El resultado es una secuencia de imágenes fijas, no un flujo de vídeo.

La demo tiene cuatro compilaciones de transmisor. Tres ejecutan un modelo: **detección de rostros**, **reconocimiento de gestos de mano** y **lectura de contador de agua**. La cuarta envía la imagen de la cámara sin inferencia y establece la referencia para el enlace. Flasheas una compilación cada vez, de modo que el mismo hardware de transmisor puede mostrar cualquiera de los cuatro modos.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/flrc_demo_summary.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
La compilación de rostro es un **detector de rostros**, no un sistema de reconocimiento facial. Encuentra un rostro y dibuja un recuadro alrededor. No identifica quién es la persona y no es adecuado para autenticación.
:::

### Lo que vas a construir

- Un **transmisor** que captura una imagen, ejecuta un modelo Swift-YOLO, dibuja recuadros y etiquetas y envía el JPEG anotado por FLRC.
- Un **receptor** que reensambla la imagen, la comprueba y publica el fotograma completo más reciente por Wi‑Fi.
- Una **vista en el navegador** en `192.168.4.1` que muestra la imagen, el contador de imágenes completadas y la tasa de fotogramas actual.

## Cómo funciona

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/flrc_demo_architecture.png" style={{width:1000, height:'auto'}} alt="Diagrama de bloques del enlace de cámara FLRC: cámara, inferencia y JPEG en ESP32-S3, transmisor LR2021, ráfaga FLRC, receptor LR2021, reensamblado en PSRAM, SoftAP y navegador"/>
</div>

### Ruta del transmisor

El transmisor ejecuta toda la canalización en una sola placa:

1. La cámara **GC2145** en el Media HAT captura un fotograma `320 × 240 RGB565`.
2. El **ESP32-S3** redimensiona el fotograma a la entrada del modelo y ejecuta la inferencia.
3. El firmware dibuja cada detección en el fotograma, incluyendo la etiqueta de clase y un porcentaje de confianza. La compilación de contador de agua también dibuja una puntuación por dígito y una línea `READING:`.
4. El fotograma anotado se comprime como JPEG.
5. El LR2021 divide el JPEG en fragmentos, añade un ID de imagen y un CRC32, y envía la imagen en una ráfaga FLRC.

La cámara y el codificador JPEG están fijos en esta compilación de firmware. 

### Ruta del receptor

El receptor no ejecuta ningún modelo. Escucha en la misma frecuencia FLRC y mueve los paquetes recibidos a la PSRAM con SPI DMA. El ESP32-S3 reensambla los fragmentos, comprueba el tamaño y el CRC32 y publica la imagen completa más reciente. Una imagen incompleta se descarta en lugar de mostrarse por partes.

El ESP32-S3 también ejecuta un `SoftAP` y un pequeño servidor HTTP. La página solicita el JPEG más reciente y los contadores aproximadamente cada 200 ms, por lo que el navegador siempre muestra el fotograma completo más reciente. Toda la inferencia y el dibujado ocurren antes de la transmisión; el navegador recibe un JPEG terminado.

### Por qué FLRC

LoRa intercambia tasa de datos por alcance. FLRC hace lo contrario: envía una ráfaga corta a una tasa alta y acepta un alcance menor. A 2,6 Mbps, un JPEG de 320 × 240 ocupa una fracción de segundo de tiempo en el aire. Eso es lo que hace posible una demo de cámara en una radio de clase LoRa.

La cifra de 2,6 Mbps es la tasa aérea de FLRC, no la tasa de fotogramas. La captura, la inferencia, la codificación JPEG, la transmisión y el reensamblado añaden tiempo. La sección [Performance](#rendimiento) muestra las tasas del lado del receptor medidas en los clips.

## Preparación de hardware

### Lo que necesitas

| Elemento | Cantidad | Notas |
| --- | --- | --- |
| Wio-LR2021 Dev Kit | 2 | Un transmisor, un receptor |
| Media HAT con cámara GC2145 | 1 | Solo encaja en el transmisor |
| Antena sub‑GHz | 2 | Una en cada placa, marcada `SUB-1G` |
| Antena de 2,4 GHz | 1 | Solo receptor; se conecta al pad U.FL de 2,4 GHz del ESP32-S3, no al SMA `LR-2.4G` |
| Cable USB-C | 2 | Capaz de datos, no solo de carga |
| Fuente de alimentación USB | 2 | 5 V; un puerto de ordenador es suficiente |
| Teléfono o portátil | 1 | Wi‑Fi de 2,4 GHz |

### Paso 1 — Colocar las antenas

Enrosca la antena sub‑GHz en el conector `SUB-1G` de cada placa. Aprieta solo con la mano. En el receptor, coloca la antena de 2,4 GHz en el pad U.FL del ESP32-S3 marcado `2.4G`. Deja vacío el SMA `LR-2.4G`.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/install_antenna.jpg" style={{width:600, height:'auto'}}/>
</div>

:::caution
Transmitir con un puerto de antena abierto puede forzar el amplificador de potencia. Coloca la antena antes de encender cualquiera de las placas.
:::

### Paso 2 — Colocar el Camera HAT en el transmisor

Alinea los dos zócalos de 16 pines del Media HAT con los headers del transmisor, pin 1 con pin 1. Presiona hacia abajo de forma uniforme en ambos extremos. La cámara forma parte del HAT, por lo que no se necesita un cable FPC separado.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/connect_media_hat.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::caution
No conectes ni retires el camera HAT mientras la placa esté alimentada. Apaga la placa y desconecta el USB-C primero.
:::

Deja el receptor sin camera HAT. Usa la antena sub‑GHz, la antena de 2,4 GHz y alimentación, pero no cámara.

### Paso 3 — Marcar los roles

Etiqueta las placas antes de flashearlas:

- **Transmisor:** camera HAT, antena sub‑GHz, USB-C para alimentación y flasheo.
- **Receptor:** antena sub‑GHz, antena de 2,4 GHz en el pad U.FL del ESP32-S3, USB-C a un ordenador o cargador.

Ambas placas se ven iguales y el firmware es diferente. Una etiqueta en la parte posterior evita tener que reflashear más tarde.

### Paso 4 — Alimentar ambas placas

Conecta USB-C a ambas placas. El receptor necesita alimentación para el punto de acceso y el servidor web; el transmisor necesita alimentación para la cámara y la radio. La demo grabada usa alimentación por USB.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/power_dev_kit.jpg" style={{width:600, height:'auto'}}/>
</div>

## Preparación de software

Descarga el firmware para el **Receptor**: 
 - [Receiver Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-rx-260914-1522.bin)

Descarga el firmware para el **Transmisor**:
  - [Face Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-face-detection-260914-1520.bin)
  - [Gesture Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-gesture-detection-260914-1525.bin)
  - [Meter Reading Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-digital-meter-water-260914-1523.bin)

### Flashear el receptor

<Tabs groupId="flash-tool">
<TabItem value="esptool" label="esptool">

Cierra cualquier terminal serie que esté usando el puerto y luego ejecuta:

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-rx-260914-1522.bin
```

Sustituye `<PORT>` por el puerto de la placa:

| Sistema | Puerto |
| --- | --- |
| Windows | `COM5` o el número en el Administrador de dispositivos |
| macOS | `/dev/cu.usbmodem*` |
| Linux | `/dev/ttyACM0` |

</TabItem>
<TabItem value="gui" label="ESP Flash Download Tool">

1. Abre **ESP Flash Download Tool** y selecciona **ESP32-S3**.
2. Añade `flrc-rx-260914-1522.bin`.
3. Establece la dirección de descarga en `0x0`.
4. Selecciona el puerto e inicia la descarga.
5. Pulsa **RESET** en la placa cuando la herramienta termine.

</TabItem>
</Tabs>

### Flashear el transmisor

Repite el mismo procedimiento con una compilación de transmisor. Empieza con la compilación de rostro:

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-tx-face-detection-260914-1520.bin
```

Para cambiar el modo, flashea una compilación de transmisor diferente. El receptor se mantiene como está.

:::caution
Escribe la imagen combinada en `0x0`. No uses los offsets de bootloader o aplicación de una compilación dividida. No desconectes la placa mientras la escritura esté en curso. El flasheo sustituye el firmware de fábrica.
:::

### Abrir el registro serie

Ambas compilaciones imprimen mensajes de arranque y estado a `115200` baudios, `8 data bits`, `no parity` y `1 stop bit`. El puerto es USB CDC, por lo que la tasa de baudios es nominal.

- Los transmisores de IA imprimen el nombre del modelo, el modo de cámara y la configuración de FLRC.
- El receptor imprime el punto de acceso, el contador de imágenes y cualquier imagen descartada.

## Ejecutar la demo

### Paso 1 — Arrancar el receptor

Conecta el receptor a USB-C y pulsa **RESET** una vez. Espera a que aparezca el punto de acceso. El SSID empieza por `Wio-LR2021-FLRC-RX-` y termina con cuatro caracteres hexadecimales derivados de la dirección MAC Wi‑Fi del receptor. La contraseña es `12345678`.

Si la red no aparece, abre el registro serie y busca el mensaje del punto de acceso. Comprueba que la compilación de receptor está flasheada y que la antena de 2,4 GHz está colocada en el pad U.FL del ESP32-S3. Confirma que la placa tiene una alimentación estable de 5 V.

### Paso 2 — Conecta tu dispositivo con navegador

Conéctate a la red `Wio-LR2021-FLRC-RX-xxxx` desde un teléfono o portátil. Mantén el dispositivo en esta red; no necesita acceso a internet.

En algunos teléfonos, los datos móviles toman el control cuando el punto de acceso no tiene internet. Desactiva los datos móviles para la prueba o elige la opción que mantiene la conexión Wi‑Fi.

### Paso 3 — Abre la página

Abre un navegador y ve a:

```
http://192.168.4.1
```

La página muestra un fondo negro, dos líneas de texto blanco y la imagen más reciente. No hay inicio de sesión ni panel de control.

### Paso 4 — Apunta el transmisor

Enciende el transmisor y apunta la cámara al sujeto. La primera imagen puede tardar unos segundos. Para obtener el mejor resultado:

- Mantén al sujeto dentro del encuadre y a una distancia cómoda.
- Usa una iluminación uniforme. Un contraluz fuerte o reflejos intensos ocultan al sujeto.

## Lo que ves

### El encabezado de la página

La página muestra dos contadores y una tasa encima de la imagen:

```
Received frames: 174 (image 23)
FPS: 2.22
```

- **Received frames** cuenta las imágenes JPEG que el receptor ha completado.
- **image** es el ID de imagen asignado por el transmisor.
- **FPS** es la tasa de extremo a extremo que midió el receptor.

El conteo de fotogramas y el ID de imagen son independientes y no necesitan coincidir. Pueden diferir después de un reinicio.

### Detección de rostros

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/face_detect.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

La compilación de rostro dibuja un recuadro magenta alrededor del rostro detectado y una barra de etiqueta con `face` y un porcentaje de confianza. La barra se sitúa en la esquina superior izquierda del recuadro. La página no rota los fotogramas; monta la cámara en la orientación en la que quieras ver la imagen.

El detector no identifica a la persona. Dos personas diferentes producen la misma etiqueta `face`.

### Reconocimiento de gestos

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/gesture_meter_recognition.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

La compilación de gestos dibuja un recuadro alrededor de la mano y la etiqueta como `paper`, `rock` o `scissors`. En este fotograma el modelo devolvió dos candidatos superpuestos para el mismo puño, por lo que el transmisor dibujó dos recuadros y dos etiquetas. El firmware no fusiona candidatos duplicados. La puntuación más alta es el mejor candidato.

Muestra una mano a la vez y mantén los dedos dentro del encuadre. Evita un fondo recargado. El modelo está entrenado en los tres gestos, no en poses de mano arbitrarias.

### Lectura de contador de agua

La compilación de contador de agua dibuja un recuadro alrededor de cada dígito e imprime una puntuación encima del recuadro. Añade una línea amarilla `READING:` en la parte inferior de la imagen. La lectura se ensambla a partir de los dígitos detectados. Puede cambiar de un fotograma a otro cuando el contador está inclinado o los dígitos están parcialmente ocultos.

Esto es una ayuda para la lectura, no un lector de contadores certificado. Comprueba la lectura con el contador antes de usarla en cualquier flujo de facturación o de informes.

### Línea base de cámara en bruto

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/raw_camera.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

La compilación en bruto envía la imagen de la cámara sin inferencia. Es el modo más rápido en la demo y la mejor manera de comprobar el enlace antes de añadir un modelo. El clip muestra una imagen invertida; el receptor muestra el JPEG tal como llega y no lo rota. Monta la cámara en posición vertical para una vista vertical.

## Rendimiento

Estas tasas se leyeron desde la página del receptor en los clips de demostración. Son tasas de extremo a extremo: captura, inferencia, dibujo, codificación JPEG, transmisión FLRC y reensamblado están todos incluidos.

| Compilación del transmisor | Trabajo en el dispositivo | Tasa observada |
| --- | --- | --- |
| Cámara en bruto | Captura, JPEG, FLRC | 7.6–9.9 fps, pico de `11.27` fps |
| Detección de rostros | Modelo 96 × 96, dibujo, JPEG, FLRC | alrededor de `2.2` fps |
| Reconocimiento de gestos | Modelo 192 × 192, dibujo, JPEG, FLRC | alrededor de `0.9` fps |
| Lectura de contador de agua | Modelo 192 × 192, dibujo, JPEG, FLRC | alrededor de `0.8` fps |

En esta demo, la compilación en bruto es el techo para la canalización, no una tasa garantizada. Las compilaciones de IA son más lentas porque el modelo se ejecuta en cada fotograma. Los modelos de 192 × 192 también tardan más que el modelo de rostro de 96 × 96. La tasa FLRC de 2.6 Mbps no es la tasa de fotogramas; el tamaño de la imagen y el procesamiento por fotograma son los que dominan.

## Recursos

### Firmware

- 🗃️ [**Wio-LR2021 Dev Kit FLRC Image Demo Firmware Set**](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/FLRC_Image_Demo_Firmware_Set.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
