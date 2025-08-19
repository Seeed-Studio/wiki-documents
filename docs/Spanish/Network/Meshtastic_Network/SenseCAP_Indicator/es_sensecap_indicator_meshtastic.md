---
description: Get Started with SenseCAP Indicator for Meshtastic
title: Primeros Pasos con SenseCAP Indicator para Meshtastic
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /es/sensecap_indicator_meshtastic
last_update:
  date: 05/29/2025
  author: Guillermo
---


<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

**SenseCAP Indicator** es un dispositivo con pantalla táctil de 4 pulgadas diseñado para **Meshtastic®**, impulsado por dos microcontroladores (MCUs), el **ESP32** y el **RP2040**, y compatible con **Wi-Fi**, **Bluetooth Low Energy (BLE)** y **LoRa®**. Es una plataforma de desarrollo IoT potente y completamente de código abierto.

### Características

- **Compatible con Meshtastic:** Viene preinstalado con el firmware de Meshtastic, listo para usarse al encenderlo. También puedes actualizar el firmware con *Meshtastic Flasher*.
- **MCUs dobles y abundantes GPIOs:** Equipado con los potentes ESP32-S3 y RP2040, y más de 400 GPIOs compatibles con Grove para opciones de expansión flexibles.
- **Concentrador local LoRa® para conectividad IoT:** Integrado con el chip LoRa® Semtech SX1262, puede convertirse en una pasarela (gateway) LoRaWAN® de un solo canal mediante un tutorial. Alternativamente, puedes conectar dispositivos LoRa® a plataformas IoT populares como Matter vía Wi-Fi.
- **Plataforma completamente de código abierto:** Aprovecha al máximo el ecosistema open-source de ESP32 y Raspberry Pi para desarrollar aplicaciones sin límites.
- **Adecuado para múltiples escenarios de uso:** Puede utilizarse como nodo de escritorio o nodo vehicular para Meshtastic, así como pasarela LoRaWAN® de un solo canal.

### Especificaciones

| Característica              | Detalles                                                  |
|----------------------------|-----------------------------------------------------------|
| **Pantalla**               | Pantalla táctil capacitiva RGB de 3.95 pulgadas           |
| **Resolución de pantalla** | 480 x 480 píxeles                                         |
| **Alimentación**           | 5V-DC, 1A                                                 |
| **Batería**                | No incluida / No disponible                               |
| **Procesador**             | - ESP32-S3: Xtensa® de doble núcleo, 32 bits, hasta 240 MHz<br />- RP2040: Dual ARM Cortex-M0+ hasta 133 MHz |
| **Memoria Flash**          | - ESP32-S3: 8MB<br />- RP2040: 2MB                          |
| **Almacenamiento externo** | Compatible con tarjetas microSD de hasta 32 GB (no incluida) |
| **Wi-Fi**                  | 802.11b/g/n, 2.4GHz                                       |
| **Bluetooth**              | Bluetooth 5.0 LE                                          |
| **LoRa (SX1262)**          | Compatible con frecuencias de 862–930 MHz                 |
| **Zumbador**               | MLT-8530, frecuencia de resonancia: 2700 Hz (no implementado aún) |
| **Certificación**          | CE / FCC                                                  |

### Vista General del Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>


## Flashear Firmware

:::tip NUEVA INTERFAZ MUI (Fancy UI)
Para ingresar a la página de vista previa de MUI 2.6, presiona las siguientes teclas en el teclado de tu computadora: ↑&nbsp;↑&nbsp;↓&nbsp;↓&nbsp;←&nbsp;→&nbsp;←&nbsp;→&nbsp;b&nbsp;a (Esta es la famosa secuencia "Konami") Una vez hecho esto, la página se volverá negra y podrás ver la opción de versión preliminar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/2.6-ver.png" alt="pir" width={800} height="auto" /></p>
:::

### Flashear el Firmware de Aplicación

**Video Instructivo**

<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecciona el dispositivo de destino como `Seeed SenseCAP Indicator` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Mantén presionado el botón mientras conectas el cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Activa la opción `Full Erase and Install` y haz clic en `Erase Flash and Install`.

Se mostrarán dos puertos. Selecciona el puerto `USB serial port` y haz clic en `Connect`.

:::caution note
Por favor selecciona el puerto `USB Serial`, no el `INDICATOR RP2040`.
:::



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Flashear el Firmware de GPS

El SenseCAP Indicator no tiene GPS incorporado. Para obtener ubicación GPS, se necesita un [Módulo GPS Grove](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html).  
Conecta el módulo GPS al puerto Grove y luego flashea el firmware GPS.

* **[Descargar firmware GPS](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Mantén presionado este botón interno con una aguja, luego conecta el dispositivo a tu PC mediante el cable USB tipo-C provisto. Suelta el botón una vez que esté conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Descarga el archivo `UF2` y cópialo a la unidad `RPI-RP2`. El firmware se instalará automáticamente una vez copiado y el dispositivo se reinicie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

Descarga la aplicación `Meshtastic`:

- [App para iOS](https://meshtastic.org/docs/category/apple-apps/)
- [App para Android](https://meshtastic.org/docs/category/android-app/)

### Conectarse desde la App

- Enciende el dispositivo.  
- La pantalla mostrará la dirección MAC del dispositivo actual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Selecciona el dispositivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

* Introduce el código y luego haz clic en `Emparejar` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* Haz clic en `+` y selecciona el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* Introduce el código (por defecto es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarte a través de la red mesh, debes establecer tu región. Esta configuración determina el rango de frecuencias que usará tu dispositivo y debe ajustarse de acuerdo con tu ubicación geográfica.

<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarte a través de la red mesh, debes establecer tu **región**.  
Esta configuración determina el rango de frecuencias que usará tu dispositivo y debe ajustarse según tu ubicación geográfica.

---

### Lista de Regiones

| **Código de Región** | **Descripción**             | **Rango de Frecuencia (MHz)** | **Ciclo de Trabajo (%)** | **Límite de Potencia (dBm)** |
|:--------------------:|:---------------------------:|:-----------------------------:|:-------------------------:|:----------------------------:|
| UNSET                | Sin definir                 | N/A                           | N/A                       | N/A                          |
| US                   | Estados Unidos              | 902.0 - 928.0                 | 100                       | 30                           |
| EU_868               | Unión Europea 868 MHz       | 869.4 - 869.65                | 10                        | 27                           |

Consulta la lista completa en: [Regiones LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/).

:::info
**EU_868** debe cumplir con una limitación de ciclo de trabajo del 10% por hora, calculado cada minuto sobre una base de 1 hora móvil. Tu dispositivo dejará de transmitir si alcanza este límite, y reanudará cuando sea permitido.
:::

Una vez que configures la región LoRa en tu dispositivo, puedes proceder a ajustar otras [Configuraciones LoRa](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Precauciones

#### Selección de Rol

:::caution
NO selecciones el rol de `Repetidor`, ya que esto hará que el dispositivo se reinicie constantemente.
:::

#### Módulo GPS

Si no has conectado el módulo GPS, desactiva la función GPS en la app `Meshtastic`. De lo contrario, el dispositivo seguirá intentando detectar el módulo GPS, lo que provocará un arranque muy lento de la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>

## Soporte Técnico y Discusión de Producto

**¡Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para ayudarte!**

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.
