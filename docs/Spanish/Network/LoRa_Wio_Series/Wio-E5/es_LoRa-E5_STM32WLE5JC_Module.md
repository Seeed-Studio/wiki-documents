---
description: Getting Started with Wio-E5 STM32WLE5JC Module.
title: Módulo Wio-E5 STM32WLE5JC
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /es/LoRa-E5_STM32WLE5JC_Module
last_update:
  date: 05/26/2025
  author: Guillermo
---

<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

> LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.  
La marca LoRa® es una marca registrada de Semtech Corporation o sus subsidiarias.

## Introducción al Producto

<iframe width={560} height={315} src="https://www.youtube.com/embed/XIksiHEXT3A?si=UNm6zmbeUVhgfWh4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

:::note
Recientemente hemos lanzado la Serie Wio-E5 basada en el módulo Wio-E5. Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer a los nuevos miembros de la familia Wio-E5, desde el [módulo Grove](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [placas mini de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_mini/) hasta el [Kit de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).  
Para aprender a crear un Nodo Final LoRaWAN con el paquete MCU STM32Cube para la serie STM32WL (SDK), unirte y enviar datos a la red LoRaWAN, consulta las páginas wiki para las [placas mini de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_mini/) y el [Kit de desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

Wio-E5 es un módulo LoRaWAN® de bajo costo, ultra bajo consumo, extremadamente compacto y de alto rendimiento diseñado por Seeed Technology Co., Ltd.  
**Contiene el chip STM32WLE5JC de paquete a nivel de sistema de ST, que es el primer SoC del mundo que integra la combinación de RF LoRa® y chip MCU.**  
Este módulo también incluye un MCU ARM Cortex M4 de ultra bajo consumo y el LoRa® SX126X, por lo tanto soporta el modo (G)FSK y LoRa®. Puede utilizar anchos de banda de 62.5kHz, 125kHz, 250kHz y 500kHz en modo LoRa®, lo que lo hace adecuado para el diseño de diversos nodos IoT, y es compatible con EU868 y US915.

Este módulo Wio E5 está diseñado bajo estándares industriales, por lo que es altamente adecuado para usarse en productos IoT industriales, con un amplio rango de temperatura de trabajo de -40℃ a 85℃.

Si no estás muy familiarizado con LoRa® y LoRaWAN®, consulta este artículo [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) para más detalles.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![SIZE COMPARE](https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg" alt="pir" width={600} height="auto" /></p>

*(Tamaño extremadamente compacto, más pequeño que una moneda de 1 euro)*

## Características

* **Consumo Ultra Bajo de Energía**: tan bajo como 2.1uA en modo de suspensión (modo WOR)

* **Tamaño Extremadamente Compacto**: 12mm * 12mm * 2.5mm, 28 pines SMT

* **Alto Rendimiento**: TXOP=22dBm@868/915MHz; sensibilidad de -136.5dBm para SF12 con 125KHz de ancho de banda

* **Uso de Larga Distancia**: presupuesto de enlace de 158dB

* **Conectividad Inalámbrica**: Protocolo LoRaWAN® embebido, comandos AT, compatible con el plan de frecuencias global de LoRaWAN®

* **Compatibilidad Mundial**: amplio rango de frecuencias; EU868 / US915 / AU915 / AS923 / KR920 / IN865

* **Gran Flexibilidad**: Para usuarios que desean desarrollar software en el MCU del módulo, se pueden manipular fácilmente otros GPIO del MCU, incluyendo UART, I2C, ADC, etc. Estas interfaces GPIO son útiles para usuarios que necesiten expandir periféricos.

* **Certificaciones FCC, CE, IC y Telec**

## Aplicaciones

* Funciona para nodos sensores LoRaWAN® y cualquier aplicación de comunicación inalámbrica.

![applications](https://files.seeedstudio.com/products/317990687/image/application.png)

## Notas de Aplicación

**1. Firmware de Fábrica con Comandos AT**

La serie Wio-E5 tiene un firmware embebido con comandos AT, que soporta los protocolos LoRaWAN® Clase A/B/C y un amplio rango de frecuencias: EU868 / US915 / AU915 / AS923 / KR920 / IN865. Con este firmware AT, los desarrolladores pueden crear fácilmente y rápidamente su prototipo o aplicación.

El firmware AT contiene un bootloader para DFU y la aplicación AT. El pin "PB13/SPI_SCK/BOOT" se usa para controlar si el Wio-E5 permanece en el bootloader o salta a la aplicación AT.  
Cuando PB13 está en ALTO, el módulo saltará a la aplicación AT después del reinicio, con una velocidad por defecto de 9600 baudios.  
Cuando PB13 está en BAJO (presionar el botón "Boot" en el Wio-E5 mini o en el Kit de Desarrollo Wio-E5), el módulo permanecerá en el bootloader, y transmitirá el carácter "C" cada 1 segundo a una velocidad de 115200 baudios.

:::note
* El Firmware AT de fábrica está programado con RDP (Protección de Lectura) Nivel 1. Los desarrolladores deben eliminar el RDP primero con STM32Cube Programmer. Ten en cuenta que al revertir el RDP al nivel 0 se borrará completamente la memoria flash y no se podrá restaurar el Firmware AT de fábrica.

* El pin "PB13/SPI_SCK/BOOT" del módulo Wio-E5 es un GPIO normal, no es el pin "BOOT0" del MCU. Este pin se usa en el bootloader del firmware AT de fábrica para decidir si saltar a la APP o quedarse en el bootloader (para DFU). El verdadero pin "BOOT0" no está disponible en el módulo, así que los usuarios deben tener precaución al desarrollar aplicaciones de bajo consumo.
:::

**2. Configuración del Reloj**

2.1 HSE

* TCXO de 32MHz

* Alimentación del TCXO: PB0-VDD_TCXO

2.2 LSE

* Oscilador de cristal de 32.768KHz

**3. Conmutador RF**

**El módulo Wio-E5 SOLO transmite a través de RFO_HP:**

* Recepción: PA4 = 1, PA5 = 0

* Transmisión (alta potencia de salida, modo SMPS): PA4 = 0, PA5 = 1

## Pinout del Hardware

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pin.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pinout.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pinout.png" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table class="tg">
<thead>
  <tr>
    <th >ITEMs</th>
    <th >Parametetro</th>
    <th colspan="4">Especificaciones</th>
    <th >Unidades</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td  rowspan="2">Estructura</td>
    <td >Tamaño</td>
    <td  colspan="4">12(W)*12(L)*2.5(H)</td>
    <td >mm</td>
  </tr>
  <tr>
    <td >Paquete</td>
    <td  colspan="4">28 pins, SMT</td>
    <td ></td>
  </tr>
  <tr>
    <td  rowspan="18">Características electrónicas</td>
    <td >Entrada</td>
    <td  colspan="4">3.3V type</td>
    <td >V</td>
  </tr>
  <tr>
    <td >Corriente en sleep</td>
    <td  colspan="4">2.1uA(WDT on)</td>
    <td >uA</td>
  </tr>
  <tr>
    <td rowspan="3">Corriente operativa (Transmitter+MCU)</td>
    <td  colspan="4">50mA @10dBm a 434MHz type</td>
    <td  rowspan="3">mA</td>
  </tr>
  <tr>
    <td  colspan="4">111mA @22dBm en 470MHz type</td>
  </tr>
  <tr>
    <td  colspan="4">111mA @22dBm en 868MHz type</td>
  </tr>
  <tr>
    <td rowspan="3">Corriente operativa (Receiver+MCU)</td>
    <td  colspan="4">6.7mA @BW125kHz, 868MHz type</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td  colspan="4">6.7mA @BW125kHz, 434MHz type</td>
  </tr>
  <tr>
    <td  colspan="4">6.7mA @BW125kHz, 470MHz type</td>
  </tr>
  <tr>
    <td  rowspan="3">Salida</td>
    <td  colspan="4">10dBm max @434MHz</td>
    <td  rowspan="3">dBm</td>
  </tr>
  <tr>
    <td colspan="4">22dBm max @470MHz</td>
  </tr>
  <tr>
    <td colspan="4">22dBm max @868MHz</td>
  </tr>
  <tr>
    <td  rowspan="5">Sensitividad</td>
    <td  colspan="4">@SF12, BW125kHz</td>
    <td  rowspan="5">dBm</td>
  </tr>
  <tr>
    <td >Fr(MHz)</td>
    <td >min</td>
    <td >type</td>
    <td >max</td>
  </tr>
  <tr>
    <td >434</td>
    <td >-</td>
    <td >-134.5</td>
    <td >-136</td>
  </tr>
  <tr>
    <td >470</td>
    <td >-</td>
    <td >-136.5</td>
    <td >-137.5</td>
  </tr>
  <tr>
    <td >868</td>
    <td >-</td>
    <td >-135</td>
    <td >-137</td>
  </tr>
  <tr>
    <td rowspan="2">Harmonicos</td>
    <td  colspan="4">&lt; -36dBm bajo 1GHz</td>
    <td >dBm</td>
  </tr>
  <tr>
    <td  colspan="4">&lt; -40dBm sobre 1GHz</td>
    <td >dBm</td>
  </tr>
  <tr>
    <td rowspan="6">Interfaz </td>
    <td >RFIO</td>
    <td colspan="4">Puerto RF</td>
    <td ></td>
  </tr>
  <tr>
    <td >UART</td>
    <td colspan="4">3 grupos de UART, incluyen 2 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td >I2C</td>
    <td colspan="4">1 grupo de I2C, incluye 2 pins</td>
    <td ></td>
  </tr>
  <tr>
    <td >ADC</td>
    <td colspan="4">1 entrada ADC, incluye 1 pins, 12-bit 1Msps</td>
    <td ></td>
  </tr>
  <tr>
    <td >NRST</td>
    <td  colspan="4">pin de entrada de reinicio manual</td>
    <td ></td>
  </tr>
  <tr>
    <td >SPI</td>
    <td colspan="4">1 grupo de SPI, incluye 4 pins</td>
    <td ></td>
  </tr>
</tbody></table>

## Recursos

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 datasheet and specifications</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/RHF0M0E5-HF22-BOM20211111.pdf"> Wio-E5 BOM</a></p>

Certificaciones:

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC Certification</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC Certification</a></p>

Librerias:

* [Wio-E5 kicad library](https://files.seeedstudio.com/products/317990687/res/LoRa-E5_kicad_Library.zip)

* [Wio-E5 HF 3D File](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF_3D_File.stp)

* [Wio-E5 Eagle Library](https://files.seeedstudio.com/wiki/Wio-E5/LORA-E5_Eagle_Library.lbr)

Recursos relevantes de SDK:

* <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## Primeros Pasos

### 1. Inicio rápido con Comandos AT

#### 1.1 Preparación

* **Paso 1.** Conecta la Placa de Desarrollo Wio-E5 a la PC mediante un cable Type-C.

* **Paso 2.** Abre una herramienta de consola serial (por ejemplo, el Monitor Serial de Arduino), selecciona el puerto COM correcto, ajusta la velocidad a 9600 baudios y selecciona Both NL & CR (Nueva línea y retorno de carro).

* **Paso 3.** Intenta enviar "AT" y verás la respuesta del módulo.

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 1.2 Comandos AT Básicos

* `AT+ID` // Leer todo: DevAddr (ABP), DevEui (OTAA), AppEui (OTAA)

* `AT+ID=DevAddr` // Leer DevAddr

* `AT+ID=DevEui` // Leer DevEui

* `AT+ID=AppEui` // Leer AppEui

* `AT+ID=DevAddr,"devaddr"` // Establecer un nuevo DevAddr

* `AT+ID=DevEui,"deveui"` // Establecer un nuevo DevEui

* `AT+ID=AppEui,"appeui"` // Establecer un nuevo AppEui

* `AT+KEY=APPKEY,"clave de 16 bytes"` // Cambiar la clave de sesión de la aplicación

* `AT+DR=band` // Cambiar el plan de bandas

* `AT+DR=SCHEME` // Verificar el plan de banda actual

* `AT+CH=NUM, 0-7` // Habilitar canales del 0 al 7

* `AT+MODE="modo"` // Seleccionar modo de trabajo: LWOTAA, LWABP o TEST

* `AT+JOIN` // Enviar solicitud de unión a la red

* `AT+MSG="Datos a enviar"` // Enviar un mensaje en formato texto sin necesidad de confirmación del servidor

* `AT+CMSG="Datos a enviar"` // Enviar un mensaje en formato texto que debe ser confirmado por el servidor

* `AT+MSGHEX="xx xx xx xx"` // Enviar un mensaje en formato hexadecimal sin necesidad de confirmación del servidor

* `AT+CMSGHEX="xx xx xx xx"` // Enviar un mensaje en formato hexadecimal que debe ser confirmado por el servidor

#### 1.3 Conectar y enviar datos a The Things Network

* **Paso 1.** Visita el sitio web de [The Things Network](https://www.thethingsnetwork.org) y crea una cuenta nueva

* **Paso 2.** Después de iniciar sesión, haz clic en tu perfil y selecciona **Console**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

* **Paso 3.** Selecciona un clúster para comenzar a añadir dispositivos y gateways

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

* **Paso 4.** Haz clic en **Go to applications**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

* **Paso 5.** Haz clic en **+ Add application**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

* **Paso 6.** Llena el campo **Application ID** y haz clic en **Create application**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Los campos **Application name** y **Description** no son obligatorios. Si se deja en blanco el campo **Application name**, se usará por defecto el mismo nombre que el **Application ID**.

A continuación se muestra la aplicación recién creada.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

* **Paso 7.** Haz clic en **+ Add end device**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

* **Paso 8.** Haz clic en **Manually** para introducir las credenciales de registro manualmente

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

* **Paso 9.** Selecciona el **plan de frecuencia** de acuerdo a tu región. Asegúrate también de usar la misma frecuencia que el gateway al que se conectará este dispositivo. Selecciona **MAC V1.0.2** como versión de **LoRaWAN®** y **PHY V1.0.2 REV B** como versión de **Parámetros Regionales**. Estas configuraciones coinciden con la pila LoRaWAN® del Wio-E5.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

* **Paso 10.** Mientras el módulo Wio-E5 siga conectado por la consola serial, envía los siguientes comandos AT en el monitor serial:

  * `AT+ID=DevEui` para obtener el EUI del dispositivo
  * `AT+ID=AppEui` para obtener el EUI de la aplicación
  * `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` para establecer la clave de aplicación (App Key)

La salida será similar a la siguiente:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

* **Paso 11.** Copia y pega la información anterior en los campos **DevEUI**, **AppEUI** y **AppKey**. El campo **End device ID** se completará automáticamente al llenar **DevEUI**. Finalmente, haz clic en **Register end device** (Registrar dispositivo final).

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

* **Paso 12.** Registra tu Gateway LoRaWAN® en la consola de TTN. Consulta las instrucciones mostradas [aquí](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

* **Paso 13.** Escribe los siguientes comandos AT para conectar el dispositivo a TTN:

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

La salida en el monitor serial se debería ver así:

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

Si ves **+JOIN: Network joined** en tu consola serial, ¡significa que tu dispositivo se ha conectado exitosamente a TTN!

También puedes verificar el estado de tu dispositivo en la página de **End devices** (Dispositivos finales).

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

* **Paso 14.** Escribe los siguientes comandos AT para enviar datos a TTN:

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

Para más información sobre los comandos AT, por favor consulta la [Especificación de Comandos AT de Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desarrollo con el paquete STM32Cube MCU

Esta sección está dirigida a los usuarios del Wio-E5 mini / Kit de desarrollo Wio-E5 que desean construir diversas aplicaciones utilizando el paquete STM32Cube MCU para la serie STM32WL (SDK).

**Nota:** Ahora hemos actualizado la librería para soportar la versión v1.1.0, que es la última versión del paquete STM32Cube MCU para la serie STM32WL.

:::note
Por favor, lee primero la sección [Borrar firmware AT de fábrica](https://wiki.seeedstudio.com/LoRa_E5_mini/#21-erase-factory-at-firmware), ya que se necesita borrar el firmware AT de fábrica antes de programar con el SDK. Una vez borrado, este firmware NO PUEDE recuperarse.
:::

#### Preparaciones

Software:

* [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): para compilar y debuggear

* [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): para programar dispositivos STM32

Hardware:

* Gateway LoRaWAN® conectado al servidor de red LoRaWAN® (por ejemplo, TTN)

* Un cable USB Tipo-C y un ST-LINK. Conecta el cable Tipo-C al puerto Tipo-C de la placa para alimentación y comunicación serial. Conecta el ST-LINK a los pines SWD de la siguiente manera:

![conexión](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Resumen de la configuración GPIO

* Como el diseño hardware de la serie Wio-E5 es un poco diferente al NUCLEO-WL55JC, la placa oficial de desarrollo STM32WL55JC de ST, los desarrolladores deben reconfigurar algunos GPIO para adaptar los ejemplos del SDK a la serie Wio-E5. Ya hemos reconfigurado los GPIO, pero consideramos importante señalar las diferencias.

| Etiqueta en ejemplo SDK | GPIO de NUCLEO-WL55JC | GPIO de Wio-E5 mini / Wio-E5 Development Kit |
|------------------------|-----------------------|----------------------------------------------|
| RF_CTRL1               | PC4                   | PA4                                          |
| RF_CTRL2               | PC5                   | PA5                                          |
| RF_CTRL3               | PC3                   | Ninguno                                      |
| BUT1                   | PA0                   | PB13 (Botón Boot)                            |
| BUT2                   | PA1                   | Ninguno                                      |
| BUT3                   | PC6                   | Ninguno                                      |
| LED1                   | PB15                  | Ninguno                                      |
| LED2                   | PB9                   | PB5                                          |
| LED3                   | PB11                  | Ninguno                                      |
| DBG1                   | PB12                  | PA0 (Botón D0)                               |
| DBG2                   | PB13                  | PB10                                         |
| DBG3                   | PB14                  | PB3                                          |
| DBG4                   | PB10                  | PB4                                          |
| USART                  | USART2 (PA2/PA3)      | USART1: PB6=TX, PB7=RX                       |

### Aplicaciones

Ahora exploraremos varias aplicaciones para Wio-E5 mini / Wio-E5 Development Kit con el paquete STM32Cube MCU para la serie STM32WL (SDK).

#### Nodo final LoRaWAN®

Esta aplicación conectará Wio-E5 mini / Wio-E5 Development Kit con TTN (The Things Network) y enviará datos después de conectarse a un gateway LoRaWAN®.

* **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como un archivo ZIP.


<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2.** Extrae el archivo ZIP y navega a `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

* **Paso 3.** Haz doble clic en el archivo **.project**

* **Paso 4.** Haz clic derecho sobre el proyecto y selecciona **Properties**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

* **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

* **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width="520" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Ahora modificaremos nuestro **Device EUI**, **Application EUI**, **Application KEY** y **LoRaWAN Region**

* **Paso 7.** Sigue la [guía](https://wiki.seeedstudio.com/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) para configurar tu aplicación en TTN, obtener tu **Application EUI** y copiarlo en la definición del macro `LORAWAN_JOIN_EUI` en `LoRaWAN/App/se-identity.h`. Por ejemplo, el Application EUI aquí es `80 00 00 00 00 00 00 07`:

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

* **Paso 8.** También puedes modificar tu **Device EUI** y **Application Key**, configurando las definiciones de macro `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` en `LoRaWAN/App/se-identity.h`. Asegúrate de que `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` sean iguales al `Device EUI` y `App Key` configurados en la consola de TTN.

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

* **Paso 9.** La región por defecto de LoRaWAN® es `EU868`, puedes modificarla configurando la definición de macro `ACTIVE_REGION` en `LoRaWAN/App/lora_app.h`.

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

* **Paso 10.** Después de las modificaciones anteriores, **recompila** el ejemplo y programa tu Wio-E5. Abre `STM32CubeProgrammer`, conecta el ST-LINK a tu PC, mantén presionado el botón `RESET` de tu dispositivo, luego haz clic en `Connect` y suelta el botón `RESET`.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

* **Paso 11.** Asegúrate de que la protección de lectura (Read Out Protection) esté en `AA`. Si aparece como `BB`, selecciónala como `AA` y haz clic en `Apply`.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

* **Paso 12.** Ahora, ve a la página de `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\usuario\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`), selecciona las opciones de programación como en la imagen siguiente, y luego haz clic en `Start Programming`.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Verás el mensaje **Download verified successfully** cuando la programación haya finalizado.

* **Paso 13.** Si tu Gateway LoRaWAN® y TTN están configurados, el Wio-E5 se conectará exitosamente después de reiniciar. Un paquete LoRaWAN® de confirmación se enviará a TTN cada 30 segundos. El siguiente log aparecerá en el monitor serial (en este caso usando Arduino Serial Monitor) si la conexión fue exitosa:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width="600" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

* ¡Listo! Ahora has conectado el Wio-E5 a la red LoRaWAN®. ¡Puedes proceder a desarrollar aplicaciones más interesantes para nodos finales LoRaWAN®!

**Nota:** Wio-E5 solo soporta modo de salida de alta potencia, por lo que no puedes usar estas definiciones de macro en `radio_board_if.h`:

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Aunque **RBI_CONF_RFO** esté definido como **RBI_CONF_RFO_LP_HP** en `radio_board_if.h`, no se usará porque **USE_BSP_DRIVER** está definido y la función **BSP_RADIO_GetTxConfig()** devuelve **RADIO_CONF_RFO_HP**.

#### FreeRTOS LoRaWAN®

Esta aplicación también conectará el Wio-E5 mini / Wio-E5 Development Kit con TTN (The Things Network) y enviará datos tras conectarse a un gateway LoRaWAN®. La diferencia entre esta aplicación FreeRTOS LoRaWAN® y la aplicación LoRaWAN End Node anterior es que la anterior corre en bare metal, mientras que esta corre bajo FreeRTOS.

* **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como archivo ZIP.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

* **Paso 3.** Haz doble clic en el archivo **.project**

* **Paso 4.** Refiérete a los **pasos 4 a 13** de la aplicación anterior **LoRaWAN® End Node** para conectar el Wio-E5 mini / Wio-E5 Development Kit con TTN.

#### FreeRTOS LoRaWAN® AT

Esta aplicación también conectará el Wio-E5 mini / Wio-E5 Development Kit con TTN (The Things Network) y enviará datos después de conectarse a un gateway LoRaWAN®. La diferencia con la aplicación FreeRTOS LoRaWAN® anterior es que aquí puedes usar comandos AT.

* **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como archivo ZIP.

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

* **Paso 3.** Haz doble clic en el archivo **.project**

* **Paso 4.** Refiérete a los **pasos 4 a 12** de la aplicación anterior **LoRaWAN® End Node**

* **Paso 5.** Abre un monitor serial, como el **Arduino Serial Monitor**, y verás la siguiente salida

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

* **Paso 6.** Escribe **AT?** y presiona **ENTER** para ver todos los comandos AT disponibles

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

* **Paso 7.** Si aún quieres cambiar el **Device EUI**, **Application EUI**, **Application KEY** y la **Región LoRaWAN**, puedes hacerlo usando comandos AT. Sin embargo, estos parámetros ya están configurados en **se-identity.h** y **lora_app.h** en este ejemplo

* **Paso 8.** Escribe **AT+JOIN=1** y verás la siguiente salida cuando la conexión sea exitosa!

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí se debe usar el formato **AT+JOIN=(Modo)**. **Modo** corresponde a **0 para ABP** o **1 para OTAA**

#### FreeRTOS Modo de Bajo Consumo (LowPower)

Esta aplicación habilitará el modo de bajo consumo en el Wio-E5 mini / Wio-E5 Development Kit. Una vez que la aplicación esté cargada, la placa consumirá energía de forma normal durante 2 segundos, luego entrará en modo de bajo consumo por 2 segundos, y así sucesivamente.

* **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como un archivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

* **Paso 3.** Haz doble clic en el archivo **.project**

* **Paso 4.** Haz clic derecho en el proyecto y selecciona **Properties**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

* **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

* **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width="460" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

* **Paso 7.** Abre `STM32CubeProgrammer`, conecta ST-LINK a tu PC, mantén presionado el botón `RESET` de tu dispositivo, luego haz clic en `Connect` y suelta el botón `RESET`:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

* **Paso 8.** Asegúrate que la Protección de Lectura (Read Out Protection) esté en `AA`; si aparece como `BB`, selecciona `AA` y haz clic en `Apply`:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

* **Paso 9.** Ahora, ve a la página de `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`), selecciona las opciones de programación como en la siguiente imagen, y haz clic en `Start Programming`!

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
Verás el mensaje **Download verified successfully** una vez que la programación haya terminado.

* **Paso 10.** Conecta el Wio-E5 mini / Wio-E5 Development Kit a una PC usando un medidor de corriente. Notarás que el LED rojo de la placa parpadea cada segundo y que la placa alterna entre estados normales y de bajo consumo (la corriente en el medidor baja durante 1 segundo en el estado de bajo consumo y sube durante 1 segundo en el estado normal)

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Bajo Consumo (Low Power)

Esta aplicación también habilitará el modo de bajo consumo en el Wio-E5 mini / Wio-E5 Development Kit. La diferencia entre la aplicación **FreeRTOS LowPower** anterior y esta aplicación de **Low Power** es que la anterior corre bajo FreeRTOS, mientras que esta corre en bare metal (sin sistema operativo).

* **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como un archivo ZIP

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > LowPower`

* **Paso 3.** Haz doble clic en el archivo **.project**

* **Paso 4.** Refiérete a los **pasos 4 a 10** de la aplicación **FreeRTOS LowPower** anterior y verás el mismo resultado final en el medidor de corriente.

## Soporte Técnico y Discusión de Productos

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
