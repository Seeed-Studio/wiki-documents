---
description: Getting Started with Wio-E5 Dev Board.
title: Kit de Desarrollo Wio-E5
keywords:
  - wio 
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /es/LoRa_E5_Dev_Board
last_update:
  date: 05/23/2025
  author: Guillermo
---

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

> LoRaWAN® es una marca usada bajo licencia de LoRa Alliance®.
> La marca LoRa® es una marca registrada de Semtech Corporation o sus subsidiarias.

Wio-E5 Development Kit es un conjunto compacto de herramientas de desarrollo para desbloquear el potente rendimiento del [Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html). Está compuesto por una placa de desarrollo Wio-E5 Dev Board, una antena (EU868/US915), un cable USB tipo C y un portapilas para 2 baterías AA de 3V.

La Wio-E5 Dev Board integra el módulo Wio-E5 STM32WLE5JC que soporta el protocolo LoRaWAN® en bandas de frecuencia globales. Expone todos los GPIOs del Wio-E5 y soporta varios protocolos de datos e interfaces como RS-485, Grove, conectores macho/hembra, etc. Es una opción perfecta para pruebas rápidas y prototipado veloz de tus proyectos IoT con LoRa®.

El módulo Wio-E5 STM32WLE5JC, integrado en la placa, es el primer combo mundial que integra el chip RF LoRa y el MCU en un único chip compacto, certificado por FCC y CE. Está basado en un núcleo ARM Cortex-M4 y el chip Semtech SX126X LoRa®, soportando los protocolos LoRaWAN® y LoRa® en frecuencias globales, así como modulaciones (G)FSK, BPSK, (G)MSK y LoRa®.

Puedes aprender más sobre [Wio-E5 aquí](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/).

La Wio-E5 Dev Board ofrece un rango de transmisión de hasta 10 km en espacios abiertos. El consumo en modo sleep es tan bajo como 2.1 uA (modo WOR). Está diseñada con estándares industriales, soportando un rango de temperatura de operación de -40 ℃ a 85 ℃, alta sensibilidad de -116.5 dBm a -136 dBm, y salida de potencia hasta +20.8 dBm a 3.3V.

Además, cuenta con múltiples interfaces, incluyendo todos los 28 pines del Wio-E5, conectores Grove, terminal RS-485, y conectores macho/hembra para facilitar la conexión con sensores y módulos diversos, evitando la soldadura manual de cables. También puede alimentarse fácilmente con 2 baterías AA conectadas al portapilas, permitiendo uso temporal sin fuente externa. Es una placa amigable para pruebas rápidas y prototipado.

Como el Wio-E5 es un chip LoRaWAN® con MCU integrado, existen tres formas principales de utilizar la Wio-E5 Dev Board:

**1: Conectar la Wio-E5 Dev Board al PC vía USB y controlarla mediante comandos AT**

Tiene una función USB a UART integrada. Solo conecta la placa al PC con un cable USB tipo C, usa un software de comunicación serial para enviar comandos AT y leer datos.

**2: Conectar la Wio-E5 Dev Board a otra placa principal vía UART y controlarla con comandos AT**

Por ejemplo, conectar la Wio-E5 Dev Board a Seeeduino XIAO y su placa de expansión vía UART, y enviar comandos AT y leer datos desde el monitor serial del Arduino IDE.

**3: Desarrollar aplicaciones propias usando el SDK**

Desarrolla tu propia placa LoRa® con función MCU usando STM32Cube Programmer, el SDK oficial de STMicroelectronics. Los recursos del SDK están disponibles en la sección de aprendizaje y documentos abajo.

Con todas estas características, la Wio-E5 Dev Board es una excelente opción para desarrollo, pruebas, prototipado y aplicaciones IoT de largo alcance y ultra bajo consumo, como agricultura inteligente, oficinas inteligentes e industria inteligente.

Si no estás familiarizado con la tecnología LoRa® y LoRaWAN®, revisa este blog detallado: [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/).

## Características

- Ultra bajo consumo y alto rendimiento  
- Fácil para pruebas y prototipado rápido  
- Pines GPIO completos expuestos con interfaces ricas como RS-485, Grove, etc.  
- Soporta planes de frecuencia globales LoRaWAN® y LoRa®  
- Alcance de transmisión largo, hasta 10 km (valor ideal en espacio abierto)  

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4071615359366_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/3011615286741_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parámetros</th><th class="tg-6cwf">Especificaciones</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">Tamaño</td>
<td class="tg-g9rn">Wio-E5 Dev Board: 85.6*54mm  Empaque: 200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - suministro</td>
<td class="tg-g9rn">3-5V (Batería) / 5V(USB Tipo-C)</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - salida</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Energía - salida</td>
<td class="tg-g9rn">Hasta +20.8dBm a 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">Frecuencia</td>
<td class="tg-g9rn">EU868 / US915 / AU915 / AS923 / KR920 / IN865</td>
</tr>
<tr>
<td class="tg-g9rn">Protocolo</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">Sensitividad</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Interfaces</td>
<td class="tg-g9rn">USB Tipo C / JST2.0 / Grove*3(IIC*2/UART*1) / RS485 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">Modulación</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">Temperatura operativa</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">Corriente</td>
<td class="tg-g9rn">La corriente del modulo LoRa-E5 en modo sleep es de tan baja como 2.1uA (modo WOR)</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Lista de Partes:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 Dev Board *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antena(EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB Tipo-C (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Portapilas para 2*AA 3V *1</td>
</tr>
</tbody>
</table>

## Applicaciones

- Pruebas fáciles con el módulo Wio-E5  
- Prototipado rápido de dispositivos LoRa® con Wio-E5  
- Desarrollo de cualquier aplicación de comunicación inalámbrica de largo alcance  
- Aprendizaje e investigación de aplicaciones LoRa® y LoRaWAN®  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Notas de Aplicación

**1. Firmware AT de fábrica**

La serie Wio-E5 viene con un firmware AT preinstalado que soporta los protocolos LoRaWAN® Clase A/B/C y un amplio rango de frecuencias: EU868, US915, AU915, AS923, KR920, IN865. Este firmware permite a los desarrolladores construir prototipos o aplicaciones de forma rápida y sencilla mediante comandos AT.

El firmware AT incluye un *bootloader* para actualizaciones por DFU y la aplicación AT. El pin "PB13/SPI_SCK/BOOT" se utiliza para controlar si el módulo arranca en el *bootloader* o en la aplicación AT.  
- Cuando PB13 está en ALTO, el módulo arranca en la aplicación AT después de un reinicio (baudios por defecto: 9600).  
- Cuando PB13 está en BAJO (presionando el botón "Boot" del kit), el módulo permanece en el *bootloader* y transmite el carácter "C" cada segundo a 115200 baudios.

:::note

- El firmware AT de fábrica está programado con protección de lectura RDP nivel 1. Los desarrolladores deben eliminar esta protección con STM32Cube Programmer si desean modificarlo. **Advertencia:** cambiar RDP a nivel 0 borrará toda la memoria flash, y **el firmware AT de fábrica no podrá recuperarse**.  
- El pin "PB13/SPI_SCK/BOOT" es un GPIO normal, no es el pin "BOOT0" del MCU. Solo se usa por el *bootloader* del firmware AT para decidir si entrar en la aplicación o quedarse en *bootloader*. El verdadero pin "BOOT0" no está disponible en el módulo, lo que debe tenerse en cuenta al desarrollar aplicaciones de bajo consumo.

:::

**2. Configuración de Reloj**

**2.1 HSE (Reloj externo de alta velocidad)**  
- Oscilador TCXO de 32 MHz  
- Alimentación del TCXO: PB0 – VDD_TCXO  

**2.2 LSE (Reloj externo de baja velocidad)**  
- Cristal oscilador de 32.768 KHz  

**3. Conmutador RF**

**El módulo Wio-E5 transmite SOLO por RFO_HP:**  
- Recepción: PA4 = 1, PA5 = 0  
- Transmisión (alta potencia de salida, modo SMPS): PA4 = 0, PA5 = 1  

## Primeros Pasos

### Inicio rápido con Comandos AT

#### Preparación

- **Paso 1.** Conecta el Wio-E5 Development Kit al PC mediante un cable USB tipo C  
- **Paso 2.** Abre una herramienta serial (ej. Monitor Serial de Arduino), selecciona el puerto COM correcto, establece la velocidad a 9600 baudios y el formato "Both NL & CR"  
- **Paso 3.** Intenta enviar el comando `"AT"` y verás la respuesta  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Comandos AT Básicos

- `AT+ID` // Leer todo: DevAddr (ABP), DevEui (OTAA), AppEui (OTAA)  
- `AT+ID=DevAddr` // Leer DevAddr  
- `AT+ID=DevEui` // Leer DevEui  
- `AT+ID=AppEui` // Leer AppEui  
- `AT+ID=DevAddr,"devaddr"` // Establecer nuevo DevAddr  
- `AT+ID=DevEui,"deveui"` // Establecer nuevo DevEui  
- `AT+ID=AppEui,"appeui"` // Establecer nuevo AppEui  
- `AT+KEY=APPKEY,"clave de 16 bytes"` // Cambiar la clave de sesión de la aplicación  
- `AT+DR=band` // Cambiar el plan de bandas  
- `AT+DR=SCHEME` // Verificar banda actual  
- `AT+CH=NUM, 0-7` // Habilitar canal 0~7  
- `AT+MODE="mode"` // Seleccionar modo de trabajo: LWOTAA, LWABP o TEST  
- `AT+JOIN` // Enviar solicitud JOIN  
- `AT+MSG="Datos a enviar"` // Enviar trama en formato cadena (no requiere confirmación del servidor)  
- `AT+CMSG="Datos a enviar"` // Enviar trama en formato cadena (requiere confirmación del servidor)  
- `AT+MSGHEX="xx xx xx xx"` // Enviar trama en formato hexadecimal (sin confirmación del servidor)  
- `AT+CMSGHEX="xx xx xx xx"` // Enviar trama en formato hexadecimal (con confirmación del servidor)  

#### Conexión y envío de datos a The Things Network

- **Paso 1.** Visita [The Things Network](https://www.thethingsnetwork.org) y crea una cuenta nueva.  
- **Paso 2.** Después de iniciar sesión, haz clic en tu perfil y selecciona **Console**.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Selecciona un clúster para comenzar a añadir dispositivos y gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Haz clic en **Go to applications** (Ir a aplicaciones).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Haz clic en **+ Add application** (Agregar aplicación).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Completa el campo **Application ID** y haz clic en **Create application** (Crear aplicación).  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Los campos **Application name** (Nombre de la aplicación) y **Description** (Descripción) no son obligatorios. Si se deja en blanco **Application name**, se usará por defecto el mismo valor que **Application ID**.

A continuación se mostrará la aplicación recién creada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Haz clic en **+ Add end device** (Agregar dispositivo final).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Haz clic en **Manually** (Manual), para ingresar manualmente las credenciales de registro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Selecciona el **Frequency plan** (Plan de frecuencias) de acuerdo con tu región. Asegúrate de que sea el mismo plan que el del gateway al que se conectará este dispositivo. Selecciona **MAC V1.0.2** como la **versión de LoRaWAN®** y **PHY V1.0.2 REV B** como la **versión de Parámetros Regionales**. Estas configuraciones corresponden al stack LoRaWAN® del Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Mientras el módulo Wio-E5 siga accesible desde la consola serial, envía los siguientes comandos AT en el monitor serial:

  - `AT+ID=DevEui` para obtener el Device EUI
  - `AT+ID=AppEui` para obtener el App EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` para establecer la App Key

La salida será similar a lo siguiente:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **Paso 11.** Copia y pega esta información en los campos **DevEUI**, **AppEUI** y **AppKey** en la consola. El campo **End device ID** se completará automáticamente al llenar el **DevEUI**. Finalmente, haz clic en **Register end device** (Registrar dispositivo final).



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **Paso 12.** Registra tu **gateway LoRaWAN®** en la consola de TTN. Consulta las instrucciones en este enlace: [Registro de gateway](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- **Paso 13.** Escribe los siguientes comandos AT para conectar el dispositivo a TTN:

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

La salida en el monitor serial debería ser la siguiente:

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

- **Paso 13 (continuación).** Si ves el mensaje **+JOIN: Network joined** en tu consola serial, ¡significa que tu dispositivo se ha conectado exitosamente a TTN!

También puedes verificar el estado de tu dispositivo en la página **End devices** (Dispositivos finales).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **Paso 14.** Escribe los siguientes comandos AT para enviar datos a TTN:

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

Para más información sobre los comandos AT, por favor consulta la [Especificación de Comandos AT del Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desarrollo con el Paquete STM32Cube MCU

Esta sección es para el Kit de Desarrollo Wio-E5, y tiene como objetivo construir varias aplicaciones con el Paquete STM32Cube MCU para la serie STM32WL (SDK).

**Nota:** Hemos actualizado la librería para soportar la versión v1.1.0, que es la última versión del Paquete STM32Cube MCU para la serie STM32WL.

:::note
Por favor, lee la sección [Borrar el Firmware AT de Fábrica](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/#application-notes) primero, ya que es necesario borrar el firmware AT de fábrica antes de programar con el SDK. Una vez borrado, **no se puede recuperar**.
:::

#### Preparativos

**Software:**

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): para compilar y depurar

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): para programar dispositivos STM32

**Hardware:**

- Gateway LoRaWAN® conectado a un servidor de red LoRaWAN® (por ejemplo, TTN)

- Un cable USB tipo C y un ST-LINK. Conecta el cable tipo C al puerto tipo C de la placa para alimentación y comunicación serial. Conecta el ST-LINK a los pines SWD como se muestra a continuación:

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Resumen de la Configuración de GPIO

Como el diseño de hardware de la serie Wio-E5 es un poco diferente del NUCLEO-WL55JC, la placa de desarrollo oficial STM32WL55JC de ST, los desarrolladores deben reconfigurar algunos GPIOs para adaptar el ejemplo del SDK a la serie Wio-E5. Ya hemos reconfigurado los GPIOs, pero creemos que es necesario señalar las diferencias.

|Ejemplo de etiqueta SDK|GPIO de NUCLEO-WL55JC|GPIO del Kit de desarrollo Wio-E5|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Boot Button)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (D0 Button)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### Aplicaciones

Ahora exploraremos varias aplicaciones para el Kit de Desarrollo Wio-E5 utilizando el Paquete STM32Cube MCU para la serie STM32WL (SDK).

#### Nodo Final LoRaWAN®

Esta aplicación conectará el Kit de Desarrollo Wio-E5 con TTN (The Things Network) y enviará datos después de conectarse con un gateway LoRaWAN®.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Haz clic derecho sobre el proyecto y selecciona **Properties (Propiedades)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca la opción **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close (Aplicar y cerrar)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y el proyecto debería compilarse sin errores

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Ahora modificaremos nuestro **Device EUI**, **Application EUI**, **Application KEY** y **Región LoRaWAN**

- **Paso 7.** Por favor, sigue la [guía](https://wiki.seeedstudio.com/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) para configurar tu aplicación en TTN, obtener tu **Application EUI** y copiarlo en la definición de macro `LORAWAN_JOIN_EUI` en `LoRaWAN/App/se-identity.h`. Por ejemplo, el Application EUI aquí es `80 00 00 00 00 00 00 07`:

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Paso 8.** También puedes modificar tu **Device EUI** y **Application Key**, configurando las definiciones de macro `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` en el archivo `LoRaWAN/App/se-identity.h`. Asegúrate de que `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` coincidan con el `Device EUI` y `App Key` en la consola de TTN.

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** La región LoRaWAN® predeterminada es `EU868`, puedes modificarla configurando la macro `ACTIVE_REGION` en `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Después de las modificaciones anteriores, **recompila** el ejemplo y prográmalo en tu Wio-E5. Abre `STM32CubeProgrammer`, conecta el ST-LINK a tu PC, mantén presionado el **Botón RESET** de tu dispositivo, luego haz clic en `Connect` y suelta el **Botón RESET**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 11.** Asegúrate de que la protección de lectura (Read Out Protection) esté en `AA`, si aparece como `BB`, selecciona `AA` y haz clic en `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 12.** Ahora ve a la página `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\usuario\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`), selecciona las opciones de programación como en la imagen siguiente, luego haz clic en `Start Programming`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
Verás el mensaje **Download verified successfully** una vez finalizada la programación.

- **Paso 13.** Si tu Gateway LoRaWAN® y TTN están configurados, ¡el Wio-E5 se unirá correctamente después del reinicio! Se enviará un paquete confirmado de LoRaWAN® a TTN cada 30 segundos. El siguiente log se imprimirá en el monitor serial (aquí se usa el monitor serial de Arduino) si la unión es exitosa:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- ¡Felicidades! ¡Ahora has conectado Wio-E5 a la red LoRaWAN®! Ahora puedes comenzar a desarrollar aplicaciones más emocionantes como Nodo Final LoRaWAN®.

**Nota:** El Wio-E5 solo admite el modo de salida de alta potencia, por lo tanto **no puedes usar** estas definiciones de macro en `radio_board_if.h`:

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Aunque **RBI_CONF_RFO** está definido como **RBI_CONF_RFO_LP_HP** en `radio_board_if.h`, no se utilizará porque **USE_BSP_DRIVER** está definido y la función **BSP_RADIO_GetTxConfig()** devuelve **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

Esta aplicación también conectará el Wio-E5 Development Kit con TTN (The Things Network) y enviará datos después de conectarse a una puerta de enlace LoRaWAN®. La diferencia entre la aplicación anterior **LoRaWAN® End Node** y esta aplicación **FreeRTOS LoRaWAN®** es que la anterior se ejecuta directamente sobre hardware (bare metal), mientras que esta se ejecuta bajo **FreeRTOS**.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega hasta `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta los **pasos del 4 al 13** de la aplicación anterior **LoRaWAN® End Node** para conectar tu Wio-E5 Development Kit con TTN.

#### FreeRTOS LoRaWAN® AT

Esta aplicación también conectará el Wio-E5 Development Kit con TTN (The Things Network) y enviará datos después de conectarse a una puerta de enlace LoRaWAN®. La diferencia con la aplicación anterior **FreeRTOS LoRaWAN®** es que en esta puedes usar **comandos AT**.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega hasta `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta los **pasos del 4 al 12** de la aplicación anterior **LoRaWAN® End Node**

- **Paso 5.** Abre un monitor serial como el **Monitor Serial de Arduino** y verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Escribe **AT?** y presiona **ENTER** para ver todos los comandos AT disponibles

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Si aún deseas cambiar el **Device EUI**, **Application EUI**, **Application KEY** y la **Región LoRaWAN**, puedes hacerlo utilizando comandos AT. Sin embargo, estos parámetros ya están establecidos en los archivos **se-identity.h** y **lora_app.h** en este ejemplo

- **Paso 8.** Escribe **AT+JOIN=1** y verás la siguiente salida una vez que la unión sea exitosa:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí se debe usar el formato **AT+JOIN=(Modo)**. El **Modo** corresponde a **0 para ABP** o **1 para OTAA**.

#### FreeRTOS LowPower

Esta aplicación habilitará el modo de bajo consumo en el Wio-E5 Development Kit. Una vez que la aplicación esté flasheada, la placa consumirá energía normalmente durante 2 segundos, luego entrará en modo de bajo consumo durante 2 segundos, y así sucesivamente.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega hasta `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Haz clic derecho sobre el proyecto y selecciona **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca la opción **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Abre `STM32CubeProgrammer`, conecta el ST-LINK a tu PC, mantén presionado el botón `RESET` de tu dispositivo, luego haz clic en `Connect` y suelta el botón `RESET`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Asegúrate de que la protección de lectura (Read Out Protection) esté en `AA`. Si aparece como `BB`, selecciona `AA` y haz clic en `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Ahora ve a la pestaña `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`), selecciona las opciones de programación como en la siguiente imagen y haz clic en `Start Programming`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Verás el mensaje **Download verified successfully** una vez que la programación haya finalizado.

- **Paso 10.** Conecta el Wio-E5 Development Kit a un PC usando un medidor de energía (power meter). Notarás que el LED rojo de la placa parpadea cada segundo y que la placa alterna entre estados de consumo normal y bajo consumo (la corriente medida por el medidor bajará durante 1 segundo en el estado de bajo consumo y subirá durante 1 segundo en el estado normal).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Bajo Consumo (Low Power)

Esta aplicación también habilitará el modo de bajo consumo en el Wio-E5 Development Kit. La diferencia entre la aplicación **FreeRTOS LowPower** anterior y esta aplicación **Low Power** es que la primera corre bajo FreeRTOS, mientras que esta corre en bare metal (sin sistema operativo).

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar la rama **qian** del repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgala como archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega hasta `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Refiérete a los **pasos 4 a 10** de la aplicación **FreeRTOS LowPower** anterior, y verás la misma salida al final en el medidor de energía.

## Recursos

Hojas de fatos de la placa de desarrollo Wio-E5:

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 Development Board v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 Development Board v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 Development Board v1.0.sch</a></p>

Hojas de Datos de Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Certificaciones para Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">WWio-E5-HF TELEC Certification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC Certification</a></p>

Relevante para SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>

## Soporte Técnico y Discusión de Producto

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
