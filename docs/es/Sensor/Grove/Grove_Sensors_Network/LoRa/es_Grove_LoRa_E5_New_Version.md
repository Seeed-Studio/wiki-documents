---
title: Grove - Wio-E5
nointro: null
keywords:
  - LoRa
  - E5
  - Grove
description: Grove LoRa-E5, un módulo LoRa potente y versátil de Seeed Studio. Explora sus características, hojas de datos, certificaciones y SDKs relevantes
image: https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg
slug: /es/Grove_LoRa_E5_New_Version
last_update:
  date: 07/25/2024
  author: Spencer
---

<div class="table-center">
  <table align="center">
    <tr>
        <th>Grove Wio E5</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg" style={{width:'auto', height:320}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.

Antes de profundizar en el Grove Wio-E5, entendamos brevemente el Wio-E5.

El [Wio-E5](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) está alimentado por el STM32WLE5JC, que integra un MCU ARM Cortex M4 de ultra bajo consumo y radio RF LoRa® SX126x en un solo chip. Es un módulo RF inalámbrico que soporta protocolos LoRa® y LoRaWAN® en frecuencias EU868 y US915, así como modulación (G)FSK, BPSK, (G)MSK y LoRa®. Y ha obtenido certificaciones FCC, CE, IC y Telec (Para más información sobre Wio-E5, consulte la [wiki de Wio-E5](https://wiki.seeedstudio.com/es/LoRa-E5_STM32WLE5JC_Module/).)

El [Grove Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) incorpora este Wio-E5 de ultra bajo consumo. Con conectores Grove integrados para una fácil integración plug-and-play, proporciona a su placa de desarrollo capacidades poderosas para transmisión de ultra largo alcance.

Como una actualización de nuestra versión anterior - [Grove - Long Range 868MHz](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - alimentado por [Módulo Transceptor RFM95 de ultra largo alcance](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html), Grove LoRa-E5 incorporado con [Módulo Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) es un módulo radio inalámbrico LoRa® de alto rendimiento y fácil uso que soporta protocolo LoRaWAN®.

Más comparación entre el chip Wio-E5 y RFM95:
![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png)

Al conectar Grove - Wio-E5 a sus placas de desarrollo, sus dispositivos pueden comunicarse y controlar el Wio-E5 convenientemente mediante comando AT a través de conexión UART. Grove Wio-E5 será una opción superior para desarrollo de dispositivos IoT, pruebas, y escenarios IoT de larga distancia y ultra bajo consumo como agricultura inteligente, oficina inteligente e industria inteligente. Está diseñado con estándares industriales con una amplia temperatura de trabajo de -40℃ ~ 85℃, alta sensibilidad entre -116.5 dBm y -136 dBm, y potencia de salida entre 10 dBm y 22 dBm.

## Características

- Wio-E5 (STM32WLE5JC) incorporado
- Soporta protocolo LoRaWAN® en banda de frecuencia EU868/US915
- Rango de transmisión ultra largo hasta 10km (Valor ideal en espacio abierto)
- Control fácil mediante comando AT vía conexión UART
- Prototipado rápido con interfaces Grove plug-and-play
- Ultra bajo consumo de energía y alto rendimiento

## Descripción del Hardware

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4081615359627_.pic_hd.jpg)

1. Wio-E5 STM32WLE5JC ([Hoja de datos](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))

2. Conector MHF IPEX

3. Antena de Alambre

4. Conector Grove

5. Indicadores LED

<!-- 不准确，只是一个模组，并不支持编程  -->
<!-- ## Platform Supported
<table>
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/products/113020091/Raspberry_Pi-Logo.wine.png" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
  </tr>
</table>

## Especificación

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">Lista de Partes:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Grove - Wio-E5 PCBA *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Grove Cable Universal*1</td>
</tr>
</tbody>
</table>
</div>

<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">Parámetros Generales</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j">Voltaje <span>de Alimentación: </span></td>
<td class="tg-uu1j">3.3V - 5V</td>
</tr>
<tr>
<td class="tg-uu1j">Potencia <span>de Salida: </span></td>
<td class="tg-uu1j">Hasta +20 dBm a 3.3V</td>
</tr>
<tr>
<td class="tg-uu1j">Frecuencia de Trabajo</td>
<td class="tg-uu1j">868/915MHz</td>
</tr>
<tr>
<td class="tg-uu1j">Protocolo</td>
<td class="tg-uu1j">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-uu1j">Sensibilidad</td>
<td class="tg-uu1j">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-uu1j">Modulación</td>
<td class="tg-uu1j">LoRa®, (G)FSK, (G)MSK y BPSK</td>
</tr>
<tr>
<td class="tg-uu1j">Corriente</td>
<td class="tg-uu1j">Solo 60uA en modo de suspensión</td>
</tr>
<tr>
<td class="tg-uu1j">Tamaño</td>
<td class="tg-uu1j">20*40mm</td>
</tr>
<tr>
<td class="tg-uu1j">Temperatura de Trabajo</td>
<td class="tg-uu1j">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>
</div>

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


## Aplicación

- Funciona para nodos sensores LoRaWAN® y cualquier aplicación de comunicación inalámbrica
- Pruebas y desarrollo de dispositivos IoT

![](https://files.seeedstudio.com/products/317990687/image/application.png)


## Notas de Aplicación

#### Nota 1. Firmware AT de Fábrica

La serie Wio-E5 tiene un **firmware de comandos AT integrado**, que soporta el protocolo LoRaWAN® *Clase A/B/C* y un amplio plan de frecuencias: *EU868/US915/AU915/AS923/KR920/IN865*. Con este firmware de comandos AT, los desarrolladores pueden construir fácil y rápidamente su prototipo o aplicación.

El firmware de comandos AT contiene un bootloader para DFU y la aplicación AT. El pin "PB13/SPI_SCK/BOOT" se usa para controlar que Wio-E5 permanezca en el bootloader o salte a la aplicación AT. Cuando PB13 está en HIGH, el módulo saltará a la aplicación AT después del reset, con una velocidad de baudios predeterminada de 9600. Cuando PB13 está en LOW (presiona el botón "Boot" en Wio-E5 Dev Board o Wio-E5 mini), el módulo permanecerá en el bootloader, y seguirá transmitiendo el carácter "C" cada 1S a una velocidad de baudios de 115200.

:::caution attention

- El Firmware AT de Fábrica está programado con RDP(Protección de Lectura) Nivel 1, los desarrolladores necesitan remover RDP primero con STM32Cube Programmer. Ten en cuenta que regresar RDP a nivel 0 causará un borrado masivo de la memoria flash y el Firmware AT de Fábrica no podrá ser restaurado nuevamente.
- El pin "PB13/SPI_SCK/BOOT" en el módulo Wio-E5 es solo un GPIO normal, no el pin "BOOT0" del MCU. Este pin "PB13/SPI_SCK/BOOT" se usa en el bootloader del firmware AT de Fábrica, para decidir si saltar a APP o permanecer en bootloader(para DFU). El pin real "BOOT0" no sale al módulo, por lo que los usuarios deben tener cuidado al desarrollar aplicaciones de bajo consumo.
:::

#### Nota 2. Configuración de Reloj

2.1 HSE

- TCXO de 32MHz
- Fuente de alimentación TCXO: PB0-VDD_TCXO

2.2 LSE

- Oscilador de cristal de 32.768KHz

#### Nota 3. Conmutador RF

**El módulo Wio-E5 SOLO transmite a través de RFO_HP:**

- Recibir: PA4=1, PA5=0
- Transmitir(alta potencia de salida, modo SMPS): PA4=0, PA5=1

#### Nota 4. Guía de flujo de trabajo general - Configuración y Uso de Grove LoRa E5

Grove LoRa E5 viene con firmware LoRaWAN integrado que proporciona un servidor AT (consulta la [Especificación de Comandos AT LoRa-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)).

Como cualquier dispositivo no codificado de forma fija, puedes definir cada EUI y clave API según sea necesario. Consulta este flujo de trabajo para más detalles: [Aplicación LoRaWAN de SenseCAP Indicator](https://wiki.seeedstudio.com/es/SenseCAP_Indicator_Application_LoRaWAN/#HEAD_register_device).

El flujo de trabajo típico para tu producto (XIAO [cualquier microcontrolador] + Grove E5) sería el siguiente:

1. Registrar el dispositivo en el Servidor de Red LoRaWAN para obtener credenciales: EUI y clave.
2. Configurar tu dispositivo LoRa E5 para establecer el EUI y otros parámetros.
3. Disfrútalo: envía y recibe mensajes. Nota: Debes estar cubierto por un Gateway LoRaWAN accesible.

Para tu proyecto Arduino, recomendamos esta biblioteca(repositorio) para configurar tu dispositivo: [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5).

Asegúrate de que tu LNS (Servidor de Red LoRaWAN) esté configurado correctamente, y verifica que tus credenciales y parámetros LoRa coincidan.

## Ejemplos y Demo

1. [Grove - Wio-E5 P2P Example](https://wiki.seeedstudio.com/es/Grove_Wio_E5_P2P/) Usando la función UART pura para comunicarse entre dos dispositivos wio-e5
2. [Grove - Wio-E5 TTN Demo](https://wiki.seeedstudio.com/es/Grove_Wio_E5_TTN_Demo/) Acceder a la red LoRaWAN TTN a través de Wio-E5
3. [Grove - Wio-E5 Helium Demo](https://wiki.seeedstudio.com/es/Grove_Wio_E5_Helium_Demo/) Conectándose a la red IoT Helium usando el módulo Grove - Wio-E5 y el módulo Seeeduino XIAO
4. [Grove - Wio-E5 Used with Arduino Uno R4 Demo](https://wiki.seeedstudio.com/es/Grove_Wio_E5_SenseCAP_Cloud_Demo/)
5. [Grove - Wio-E5 Used with XIAO ESP32S3 Demo](https://wiki.seeedstudio.com/es/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3/)
6. [Using Wio-E5 and XIAO ESP32S3 on PlatformIO(Arduino) to access LoRaWAN network](/es/platformio_wio_e5/) Una guía práctica. Detalla la integración de Wio-E5 con placas compatibles con Arduino usando PlatformIO para una conectividad LoRaWAN eficiente.

## Recursos

**Hoja de datos:**

- [Grove Wio-E5 v1.0.brd](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd)
- [Grove Wio-E5 v1.0.pdf](https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf)
- [Grove Wio-E5 v1.0.sch](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch)
- [Wio-E5 datasheet and specifications](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf)
- [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- [STM32WLE5JC Datasheet](https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf)

**Certificaciones:**

- [Wio-E5-HF Certification CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [Wio-E5-HF FCC Certification -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [Wio-E5-HF FCC Certification -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)
- [Wio-E5-HF TELEC Certification](https://files.seeedstudio.com/products/317990687/res/Telec.zip)
- [Wio-E5-HF IC Certification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf)

**SDK relevante:**

- [STM32Cube MCU Package for STM32WL series](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## ✨ Proyecto de Colaborador

- Gracias a uno de los amigos de Seeed Studio, Andres, por construir la [librería Grove - Wio-e5, proporcionando múltiples ejemplos](https://github.com/andresoliva/LoRa-E5), adecuada para placas Arduino como Arduino Nano 33 BLE Sense, y más importante aún [compatible con el XIAO ESP32S3 Sense](https://github.com/andresoliva/LoRa-E5).
- Esto permitirá al usuario una interacción fácil, clara y segura con el módulo LoRa de SeedStudio Grove - Wio-E5 y esperamos que sea usado tanto como una herramienta educativa para aquellos **que están dando sus primeros pasos en LoRa** así como **preparado para aquellos que buscan usar este módulo en proyectos de bajo consumo**.

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
