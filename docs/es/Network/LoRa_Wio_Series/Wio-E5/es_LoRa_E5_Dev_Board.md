---
description: Comenzando con la Placa de Desarrollo Wio-E5.
title: Kit de Desarrollo Wio-E5
keywords:
  - wio 
image: https://wiki.seeedstudio.com/es/wio_gps_board/
slug: /es/LoRa_E5_Dev_Board
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

> LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.

El Kit de Desarrollo Wio-E5 es un conjunto de herramientas de desarrollo compacto para que puedas desbloquear el poderoso rendimiento del [Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html). Consiste en una Placa de Desarrollo Wio-E5, una antena (EU868/US915), un cable USB tipo C y un portapilas de 2*AA 3V.

La Placa de Desarrollo Wio-E5 incorpora el Módulo Wio-E5 STM32WLE5JC que soporta el protocolo LoRaWAN® en banda de frecuencia global. Expone todos los GPIOs del Wio-E5 soportando varios protocolos de datos e interfaces incluyendo RS-485, Grove, conectores macho/hembra, etc. Sería una elección perfecta para pruebas rápidas y prototipado rápido de tus proyectos IoT LoRa®.

La Placa de Desarrollo Wio-E5 incorpora el [Módulo Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), que es la primera combinación mundial de chip RF LoRa y MCU en un solo chip diminuto y está certificado por FCC y CE. Está alimentado por el núcleo ARM Cortex-M4 y el chip LoRa® Semtech SX126X, soporta tanto el protocolo LoRaWAN® como LoRa® en frecuencia mundial y modulaciones (G)FSK, BPSK, (G)MSK y LoRa®.

Aprende más sobre [Wio-E5](https://wiki.seeedstudio.com/es/LoRa-E5_STM32WLE5JC_Module/) aquí.

La Placa de Desarrollo Wio-E5 tiene un rango de transmisión de larga distancia del Wio-E5 de hasta 10km en área abierta. La corriente de reposo de los módulos Wio-E5 en la placa es tan baja como 2.1 uA (modo WOR). Está diseñada con estándares industriales con una temperatura de trabajo amplia de -40 ℃ ~ 85℃, alta sensibilidad entre -116.5 dBm ~ -136 dBm, y potencia de salida de hasta +20.8dBm a 3.3V.

La Placa de Desarrollo Wio-E5 también tiene interfaces ricas. Desarrollada para desbloquear la funcionalidad completa del módulo Wio-E5, la Placa de Desarrollo Wio-E5 ha expuesto los 28 pines completos del Wio-E5 y proporciona interfaces ricas incluyendo conectores Grove, terminal RS-485, conectores de pines macho/hembra para que puedas conectar sensores y módulos con diferentes conectores y protocolos de datos, ahorrándote tiempo en soldadura de cables. También podrías alimentar fácilmente la placa conectando el portapilas con 2 baterías AA, habilitando uso temporal cuando falta una fuente de alimentación externa. Es una placa amigable para el usuario para pruebas fáciles y prototipado rápido.

Dado que Wio-E5 es un chip LoRaWAN® con un MCU, hay tres formas principales de utilizar la Placa de Desarrollo Wio-E5:

**1: Conectar la Placa de Desarrollo Wio-E5 a PC vía USB y controlar por comandos AT**

Hay una función USB a UART incorporada en la placa, podrías simplemente conectar la Placa de Desarrollo Wio-E5 a tu PC con un cable USB tipo C, y usar software de comunicación serie para enviar comandos AT y leer datos de la placa

**2: Conectar la Placa de Desarrollo Wio-E5 a otra placa principal vía UART y controlar por comandos AT**

Por ejemplo, conectar la Placa de Desarrollo Wio-E5 a Seeeduino XIAO y la Placa de Expansión vía UART, y enviar comandos AT y leer datos desde Seeeduino XIAO a través del monitor serie del IDE de Arduino.

**3: Desarrollar aplicación de usuario usando SDK**

Desarrolla tu propia placa de desarrollo LoRa® con función MCU usando STM32Cube Programmer, que es el SDK proporcionado oficialmente por STMicroelectronics. Para descargar este recurso SDK, por favor encuentra los recursos en aprendizaje y documentación más abajo.

Con todas las características destacadas listadas arriba, la Placa de Desarrollo Wio-E5 será una elección superior para desarrollo de dispositivos IoT, pruebas, prototipado y aplicaciones en escenarios IoT de larga distancia y consumo ultra-bajo de energía como agricultura inteligente, oficina inteligente e industria inteligente.

Si no estás familiarizado con la tecnología LoRa® y LoRaWAN®, por favor revisa este blog [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) en detalle.

## Características

- Consumo de energía ultra bajo y alto rendimiento

- Pruebas fáciles y prototipado rápido

- Todos los GPIOs disponibles en interfaces ricas, incluyendo RS-485, Grove, y etc.

- Plan de frecuencias LoRaWAN® y LoRa® global soportado

- Rango de transmisión de larga distancia hasta 10km (valor ideal en área abierta)

## Descripción General del Hardware

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
<td class="tg-g9rn">Wio-E5 Dev Board: 85.6*54mm  Paquete: 200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - suministro</td>
<td class="tg-g9rn">3-5V (Batería) / 5V(USB Type C)</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - salida</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Potencia - salida</td>
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
<td class="tg-g9rn">Sensibilidad</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / JST2.0 / Grove*3(IIC*2/UART*1) / RS485 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">modulación</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">temperatura de trabajo</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">corriente</td>
<td class="tg-g9rn">Corriente de reposo del módulo LoRa-E5 tan baja como 2.1uA (modo WOR)</td>
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
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Portapilas 2*AA 3V *1</td>
</tr>
</tbody>
</table>

## Aplicaciones

- Pruebas fáciles del módulo Wio-E5
- Prototipado rápido de dispositivos LoRa® con Wio-E5
- Desarrollo de cualquier aplicación de comunicación inalámbrica de larga distancia
- Aprendizaje e investigación de aplicaciones LoRa® y LoRaWAN®

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Notas de Aplicación

**1. Firmware AT de Fábrica**

La serie Wio-E5 tiene un firmware de comandos AT integrado, que soporta el protocolo LoRaWAN® Clase A/B/C y un amplio plan de frecuencias: EU868/US915/AU915/AS923/KR920/IN865. Con este firmware de comandos AT, los desarrolladores pueden construir fácil y rápidamente su prototipo o aplicación.

El firmware de comandos AT contiene un bootloader para DFU y la aplicación AT. El pin "PB13/SPI_SCK/BOOT" se usa para controlar que Wio-E5 permanezca en el bootloader o salte a la aplicación AT. Cuando PB13 está en HIGH, el módulo saltará a la aplicación AT después del reset, con una velocidad de baudios predeterminada de 9600. Cuando PB13 está en LOW (presiona el botón "Boot" en el Kit de Desarrollo Wio-E5), el módulo permanecerá en el bootloader, y seguirá transmitiendo el carácter "C" cada 1S a una velocidad de baudios de 115200.

:::note

- El Firmware AT de Fábrica está programado con RDP(Protección de Lectura) Nivel 1, los desarrolladores necesitan remover RDP primero con STM32Cube Programmer. Nota que regresar RDP a nivel 0 causará un borrado masivo de la memoria flash y el Firmware AT de Fábrica no podrá ser restaurado nuevamente.
- El pin "PB13/SPI_SCK/BOOT" en el módulo Wio-E5 es solo un GPIO normal, no el pin "BOOT0" del MCU. Este pin "PB13/SPI_SCK/BOOT" se usa en el bootloader del firmware AT de Fábrica, para decidir si saltar a APP o permanecer en bootloader(para DFU). El pin real "BOOT0" no se conecta al módulo, por lo que los usuarios necesitan tener cuidado al desarrollar aplicaciones de bajo consumo.

:::

**2. Configuración de Reloj**

2.1 HSE

- TCXO de 32MHz

- Fuente de alimentación TCXO: PB0-VDD_TCXO

2.2 LSE

- Oscilador de cristal de 32.768KHz

**3. Conmutador RF**

**El módulo Wio-E5 SOLO transmite a través de RFO_HP:**

- Recibir: PA4=1, PA5=0

- Transmitir(alta potencia de salida, modo SMPS): PA4=0, PA5=1

## Primeros Pasos

### Inicio rápido de Comandos AT

#### Preparación

- **Paso 1.** Conecta el Kit de Desarrollo Wio-E5 a la PC mediante un cable Type-C

- **Paso 2.** Abre una herramienta serial(ej. Monitor Serial de Arduino), selecciona el puerto COM correcto, establece la velocidad de baudios a 9600 y selecciona Both NL & CR

- **Paso 3.** Intenta enviar "AT" y verás la respuesta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Comandos AT Básicos

- AT+ID // Leer todo, DevAddr(ABP), DevEui(OTAA), AppEui(OTAA)

- AT+ID=DevAddr // Leer DevAddr

- AT+ID=DevEui // Leer DevEui

- AT+ID=AppEui // Leer AppEui

- AT+ID=DevAddr,"devaddr" // Establecer nuevo DevAddr

- AT+ID=DevEui,"deveui" // Establecer nuevo DevEui

- AT+ID=AppEui,"appeui" // Establecer nuevo AppEui

- AT+KEY=APPKEY,"16 bytes length key" // Cambiar clave de sesión de aplicación

- AT+DR=band // Cambiar los Planes de Banda

- AT+DR=SCHEME // Verificar banda actual

- AT+CH=NUM, 0-7 // Habilitar canal 0~7

- AT+MODE="mode" // Seleccionar modo de trabajo: LWOTAA, LWABP o TEST

- AT+JOIN // Enviar solicitud JOIN

- AT+MSG="Data to send" // Usar para enviar trama en formato string que no necesita ser confirmada por el servidor

- AT+CMSG="Data to send" // Usar para enviar trama en formato string que debe ser confirmada por el servidor

- AT+MSGHEX="xx xx xx xx" // Usar para enviar trama en formato hex que no necesita ser confirmada por el servidor

- AT+CMSGHEX="xx xx xx xx" // Usar para enviar trama en formato hex que debe ser confirmada por el servidor

#### Conectar y enviar datos a The Things Network

- **Paso 1.** Visita el sitio web de [The Things Network](https://www.thethingsnetwork.org) y regístrate para una nueva cuenta

- **Paso 2.** Después de iniciar sesión, haz clic en tu perfil y selecciona **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Selecciona un clúster para comenzar a agregar dispositivos y gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Haz clic en **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Haz clic en **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Completa **Application ID** y haz clic en **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí **Application name** y **Description** no son campos obligatorios. Si **Application name** se deja en blanco, usará el mismo nombre que **Application ID** por defecto

La siguiente es la aplicación recién creada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Haz clic en **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Haz clic en **Manually**, para ingresar las credenciales de registro manualmente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Selecciona el **Frequency plan** según tu región. También asegúrate de usar la misma frecuencia que el gateway al cual conectarás este dispositivo. Selecciona **MAC V1.0.2** como la **LoRaWAN® version** y **PHY V1.0.2 REV B** como la **Regional Parameters version**. Estas configuraciones son según el stack LoraWAN® de Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Mientras el módulo Wio-E5 aún sea accesible a través de la consola serial, envía los siguientes comandos AT en el monitor serial:

  - `AT+ID=DevEui` para obtener tu Device EUI
  - `AT+ID=AppEui`, para obtener tu App EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` para establecer la App Key

La salida será la siguiente:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **Paso 11.** Copia y pega la información anterior en los campos **DevEUI**, **AppEUI** y **AppKey**. El campo **End device ID** se llenará automáticamente cuando completemos **DevEUI**. Finalmente haz clic en **Register end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **Paso 12.** Registra tu Gateway LoRaWAN® con la Consola de TTN. Por favor consulta las instrucciones mostradas [aquí](https://wiki.seeedstudio.com/es/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- **Paso 13.** Escribe los siguientes comandos AT para conectarte a TTN

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

La salida en el monitor serie será la siguiente:

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

Si ves **+JOIN: Network joined** en tu consola serie, ¡eso significa que tu dispositivo se ha conectado exitosamente a TTN!

También puedes verificar el estado de tu dispositivo en la página **End devices**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **Paso 14.** Escribe los siguientes comandos AT para enviar datos a TTN

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

Para más información sobre los Comandos AT, consulte [Especificación de Comandos AT de Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desarrollar con el Paquete MCU STM32Cube

Esta sección es para el Kit de Desarrollo Wio-E5, con el objetivo de construir varias aplicaciones con el Paquete MCU STM32Cube para la serie STM32WL (SDK).

**Nota:** Ahora hemos actualizado la biblioteca para soportar v1.1.0 que es la versión más reciente del Paquete MCU STM32Cube para la serie STM32WL.

:::note
Por favor lea primero la sección [Borrar Firmware AT de Fábrica](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/#application-notes), ya que necesitamos borrar el Firmware AT de Fábrica antes de programar con el SDK. Después de borrar el Firmware AT de Fábrica NO se puede recuperar.
:::

#### Preparativos

Software:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): para compilación y depuración

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): para programar dispositivos STM32

Hardware:

- Gateway LoRaWAN® conectado a Servidor de Red LoRaWAN® (ej. TTN)

- Un cable USB Tipo-C y un ST-LINK. Conecte el cable Tipo-C al puerto Tipo-C de la placa para alimentación y comunicación serie. Conecte el ST-LINK a los pines SWD como sigue

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Resumen de Configuración de GPIO

- Como el diseño de hardware de la serie Wio-E5 es un poco diferente al NUCLEO-WL55JC, la placa de desarrollo oficial STM32WL55JC de ST, los desarrolladores necesitan reconfigurar algunos gpios, para adaptar el ejemplo del SDK a la serie Wio-E5. Ya hemos reconfigurado los GPIOs, pero creemos que es necesario señalar la diferencia.

|Etiqueta del Ejemplo SDK|GPIO de NUCLEO-WL55JC|GPIO del Kit de Desarrollo Wio-E5|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|Ninguno|
|BUT1|PA0|PB13 (Botón Boot)|
|BUT2|PA1|Ninguno|
|BUT3|PC6|Ninguno|
|LED1|PB15|Ninguno|
|LED2|PB9|PB5|
|LED3|PB11|Ninguno|
|DBG1|PB12|PA0 (Botón D0)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### Aplicaciones

Ahora exploraremos varias aplicaciones para el Kit de Desarrollo Wio-E5 con el Paquete MCU STM32Cube para la serie STM32WL (SDK).

#### Nodo Terminal LoRaWAN®

Esta aplicación conectará el Kit de Desarrollo Wio-E5 con TTN (The Things Network) y enviará datos después de conectarse con una puerta de enlace LoRaWAN®.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Paso 3.** Haz doble clic en el archivo **.project**

  **Nota:** Para MAC, debería tomar una de las opciones siguientes para abrir el proyecto:

  - **1.** Navega a `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`. Haz doble clic en el archivo "LoRaWAN_End_Node.ioc".

  - **2.** Usa "Import Projects from File System or Archieve" como en las imágenes siguientes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Haz clic derecho en el proyecto y haz clic en **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Ahora modificaremos nuestro **Device EUI**, **Application EUI**, **Application KEY** y **LoRawan Region**

- **Paso 7.** Por favor sigue la [guía](https://wiki.seeedstudio.com/es/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) aquí para configurar tu aplicación TTN, obtén tu **Application EUI** y cópialo a la definición de macro `LORAWAN_JOIN_EUI` en `LoRaWAN/App/se-identity.h`, por ejemplo, el Application EUI aquí es `80 00 00 00 00 00 00 0x07`:

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Paso 8.** También puedes modificar tu **Device EUI** y **Application Key**, configurando la definición de macro `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` en `LoRaWAN/App/se-identity.h`. Asegúrate de que `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` sean iguales al `Device EUI` y `App Key` en la consola de TTN.

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

- **Paso 9.** La Región LoRaWAN® predeterminada es `EU868`, puedes modificarla configurando la definición de macro `ACTIVE_REGION` en `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Después de las modificaciones anteriores, **reconstruye** el ejemplo y programa tu Wio-E5. Abre `STM32CubeProgrammer`, conecta ST-LINK a tu PC, mantén presionado el `Botón RESET` de tu dispositivo, luego haz clic en `Connect` y suelta el `Botón RESET`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 11.** Asegúrate de que la Protección de Lectura sea `AA`, si se muestra como `BB`, selecciona `AA` y haz clic en `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 12.** Ahora, ve a la página `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`), selecciona las opciones de programación como se muestra en la siguiente imagen, ¡luego haz clic en `Start Programming`!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
Verás el mensaje **Download verified successfully**, una vez que la programación haya terminado.

- **Paso 13.** Si tu Gateway LoRaWAN® y TTN están configurados, ¡Wio-E5 se unirá exitosamente después del reinicio! Un paquete LoRaWAN® de confirmación será enviado a TTN cada 30 segundos. El siguiente registro se imprimirá en el monitor serie (aquí se usa el Monitor Serie de Arduino) si la unión es exitosa:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- ¡Felicidades! ¡Ahora has conectado Wio-E5 a la Red LoRaWAN®! ¡Ahora puedes proceder a desarrollar aplicaciones de Nodo Final LoRaWAN® más emocionantes!

**Nota:** Wio-E5 solo soporta modo de salida de alta potencia, por lo que no puedes usar estas definiciones de macro en `radio_board_if.h`:

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Aunque **RBI_CONF_RFO** está definido como **RBI_CONF_RFO_LP_HP** en `radio_board_if.h`, no se utilizará porque **USE_BSP_DRIVER** está definido y la función **BSP_RADIO_GetTxConfig()** devuelve **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

Esta aplicación también conectará el Kit de Desarrollo Wio-E5 con TTN (The Things Network) y enviará datos después de conectarse con una puerta de enlace LoRaWAN®. La diferencia entre la aplicación anterior de Nodo Final LoRaWAN® y esta aplicación FreeRTOS LoRaWAN® es que la anterior se ejecuta en metal desnudo mientras que esta se ejecuta bajo FreeRTOS.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** ¡Consulta el **paso 4 - paso 13** de la aplicación anterior **Nodo Final LoRaWAN®** para conectar el Kit de Desarrollo Wio-E5 con TTN!

#### FreeRTOS LoRaWAN® AT

Esta aplicación también conectará el Kit de Desarrollo Wio-E5 con TTN (The Things Network) y enviará datos después de conectarse con una puerta de enlace LoRaWAN®. La diferencia entre la aplicación anterior FreeRTOS LoRaWAN® y esta aplicación es que puedes usar comandos AT.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta el **paso 4 - paso 12** de la aplicación anterior **Nodo Final LoRaWAN®**

- **Paso 5.** Abre un monitor serie como **Arduino Serial Monitor** y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Escribe **AT?** y presiona **ENTER** para ver todos los comandos AT disponibles

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Si aún quieres cambiar **Device EUI**, **Application EUI**, **Application KEY** y **LoRawan Region**, puedes cambiarlos usando comandos AT. Sin embargo, estos parámetros ya están configurados en **se-identity.h** y **lora_app.h** en este ejemplo

- **Paso 8.** Escribe **AT+JOIN=1** y verás la siguiente salida una vez que la unión sea exitosa!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí se debe usar el formato **AT+JOIN=(Mode)**. **Mode** corresponde a **0 para ABP** o **1 para OTAA**

#### FreeRTOS LowPower

Esta aplicación habilitará el modo de bajo consumo en el Kit de Desarrollo Wio-E5. Una vez que la aplicación esté cargada, la placa consumirá energía normalmente durante 2 segundos y entrará en modo de bajo consumo durante 2 segundos y así sucesivamente.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Haz clic derecho en el proyecto y haz clic en **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Abre `STM32CubeProgrammer`, conecta ST-LINK a tu PC, mantén presionado el `Botón RESET` de tu dispositivo, luego haz clic en `Connect` y suelta el `Botón RESET`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Asegúrate de que la Protección de Lectura sea `AA`, si se muestra como `BB`, selecciona `AA` y haz clic en `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Ahora, ve a la página `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`), selecciona las opciones de programación como en la siguiente imagen, ¡luego haz clic en `Start Programming`!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Verás el mensaje **Descarga verificada exitosamente**, una vez que la programación haya terminado.

- **Paso 10.** Conecta el Kit de Desarrollo Wio-E5 a una PC conectando un medidor de potencia. Notarás que el LED rojo en la placa parpadea cada segundo y la placa alterna entre estados normales y de bajo consumo (La corriente en el medidor de potencia baja durante 1 segundo para el estado de bajo consumo y vuelve a subir durante 1 segundo para el estado de funcionamiento normal)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Bajo Consumo

Esta aplicación también habilitará el modo de bajo consumo en el Kit de Desarrollo Wio-E5. La diferencia entre la aplicación anterior de FreeRTOS LowPower y esta aplicación de Bajo Consumo es que la anterior se ejecuta bajo FreeRTOS mientras que esta se ejecuta en bare metal.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar la rama **qian** del repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta el **paso 4 - paso 10** de la aplicación anterior **FreeRTOS LowPower** y verás la misma salida al final en el medidor de potencia!

## Recursos

Hoja de Datos de la Placa de Desarrollo Wio-E5:

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 Development Board v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 Development Board v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 Development Board v1.0.sch</a></p>

Hoja de Datos Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Hoja de datos y especificaciones Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Especificación de Comandos AT Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Hoja de Datos STM32WLE5JC</a></p>

Certificaciones Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Certificación Wio-E5-HF CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Certificación FCC Wio-E5-HF -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Certificación FCC Wio-E5-HF -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Certificación TELEC Wio-E5-HF</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Certificación IC Wio-E5-HF</a></p>

SDK Relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Paquete MCU STM32Cube para la serie STM32WL</a></p>

## Soporte Técnico y Discusión de Productos

Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
