---
description: Getting Started with Wio-E5 mini.
title: mini Wio-E5 
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /es/LoRa_E5_mini
last_update:
  date: 05/26/2025
  author: Guillermo
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

> LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.  
La marca LoRa® es una marca registrada de Semtech Corporation o sus subsidiarias.

El Wio-E5 mini es una placa de desarrollo de tamaño compacto, adecuada para pruebas rápidas y creación de prototipos de pequeño tamaño, que te ayuda a diseñar tu dispositivo IoT inalámbrico LoRaWAN® ideal, con un amplio alcance de transmisión.

El Wio-E5 mini está integrado con el [Módulo Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), que ofrece la primera combinación del mundo de chip LoRa® RF y MCU en un solo y diminuto chip, con certificaciones FCC y CE. Está impulsado por un núcleo ARM Cortex-M4 y el chip LoRa® Semtech SX126X, y es compatible con el protocolo LoRaWAN® en frecuencias globales, así como con las modulaciones (G)FSK, BPSK, (G)MSK y LoRa®.

Conoce más sobre el [Wio-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) aquí.

Comparativa entre el Wio-E5 y el chip LoRa® RFM95:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

El Wio-E5 mini expone todos los GPIOs del módulo Wio-E5, incluyendo UART, ADC, SPI, IIC, etc. También cuenta con botones de RESET y BOOT, y es fácil de usar. Soporta el protocolo LoRaWAN®, y presenta transmisión de ultra largo alcance y consumo de energía ultra bajo: es capaz de alcanzar un rango de transmisión de hasta 10 km, y la corriente en modo de suspensión del módulo Wio-E5 es tan baja como 2.1 µA (modo WOR). Está diseñado con estándares industriales, con un amplio rango de temperatura de trabajo (-40 ℃ ~ 85 ℃), alta sensibilidad entre -116.5 dBm ~ -136 dBm, y potencia de salida de RF de hasta +20.8 dBm a 3.3V.

Además del Wio-E5 mini, también ofrecemos otras opciones como la Placa de Desarrollo Wio-E5, que incluye interfaces más complejas y funciones avanzadas para desbloquear todo el potencial del módulo Wio-E5. Esta ofrece una gama más amplia de protocolos de acceso y una gran variedad de interfaces, permitiéndote probar y prototipar rápidamente el módulo con RS-485, interfaces Grove, y muchos GPIOs. (Más información sobre la Placa de Desarrollo Wio-E5).

Dado que el Wio-E5 es un chip LoRaWAN® con una MCU, existen tres formas principales de utilizar el Wio-E5 mini:

### 1. Conectar el Wio-E5 mini a una PC y controlarlo mediante comandos AT  
La placa cuenta con una función USB a UART integrada, por lo que puedes conectar el Wio-E5 mini a tu PC mediante un cable USB tipo C, y usar software de comunicación serial para enviar comandos AT y leer datos desde la placa.

### 2. Conectar el Wio-E5 mini a otra placa principal mediante UART y controlarlo con comandos AT  
Por ejemplo, puedes conectarlo al Seeeduino XIAO y su placa de expansión vía UART, enviar comandos AT y leer datos desde el Seeeduino XIAO a través del monitor serial del IDE de Arduino.

### 3. Desarrollo de aplicaciones propias usando el SDK  
Puedes desarrollar tu propia placa LoRa® con funciones de MCU utilizando STM32Cube Programmer, el SDK oficialmente proporcionado por STMicroelectronics. Para descargar este recurso, consulta la sección de documentación al final de esta guía.

Con todas las características sobresalientes mencionadas, el Wio-E5 mini será una opción superior para el desarrollo, prueba, prototipado y aplicaciones de dispositivos IoT en escenarios de largo alcance y ultra bajo consumo, como agricultura inteligente, oficina inteligente e industria inteligente.

Si no estás familiarizado con la tecnología LoRa® y LoRaWAN®, consulta este artículo en el blog: [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/)



## Características

- Todos los GPIOs del Wio-E5 STM32WLE5JC están expuestos  
- Compatible con el plan de frecuencias LoRaWAN® y LoRa® a nivel mundial  
- Rango de transmisión de hasta 10 km (valor ideal en áreas abiertas)  
- Tamaño mini y compacto, ideal para pruebas rápidas y creación de prototipos pequeños  
- Botones de RESET y **BOOT incorporados para mayor comodidad

## Vista General de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parametros</th><th class="tg-6cwf">Especificaciones</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">Tamaño</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - entrada</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Poder - sálida</td>
<td class="tg-g9rn">hasta +20.8 dBm a 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">Frecuencia de trabajo</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">Protocolo</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">Sensitividad</td>
<td class="tg-g9rn">-116.5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Interfaces</td>
<td class="tg-g9rn">USB Tipo C / 2P-2.54mm hoyos / 1*12P-2.54mm Header*2 / SMA-K / IPEX</td>
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
<td class="tg-g9rn">Wio-E5 en modo sleep es tan baja como 2.1uA (WOR mode)</td>
</tr>
</tbody>
</table>
<div></div>
<div></div>
<div></div>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Lista de Partes:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 mini *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antena(EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB Tipo-C (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Sticker*1 </td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">1X12pines machos *2</td>
</tr>
</tbody>
</table>

## Aplicaciones

- Pruebas sencillas del módulo Wio-E5  
- Prototipado rápido de dispositivos LoRa® de pequeñas dimensiones con Wio-E5  
- Desarrollo de cualquier aplicación de comunicación inalámbrica de largo alcance  
- Aprendizaje e investigación de aplicaciones LoRa® y LoRaWAN®

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Application Notes

## Notas de Aplicación

### **1. Firmware AT de Fábrica**

La serie Wio-E5 incluye un firmware con comandos AT integrado, que es compatible con los protocolos LoRaWAN® Clase A/B/C y un amplio plan de frecuencias: EU868/US915/AU915/AS923/KR920/IN865.  
Con este firmware de comandos AT, los desarrolladores pueden crear fácilmente y rápidamente sus prototipos o aplicaciones.

El firmware AT contiene un bootloader para DFU y la aplicación AT. El pin "PB13/SPI_SCK/BOOT" se usa para controlar si el Wio-E5 entra al bootloader o salta a la aplicación AT.  
- Cuando PB13 está en HIGH, el módulo iniciará la aplicación AT tras un reinicio, con una velocidad de baudios predeterminada de 9600.  
- Cuando PB13 está en LOW (presionar el botón "Boot" en el Wio-E5 mini), el módulo permanecerá en el bootloader y enviará el carácter "C" cada 1 segundo a 115200 baudios.

:::tip
- El firmware AT de fábrica está programado con RDP (Read Protection) Nivel 1. Los desarrolladores deben eliminar el RDP con STM32Cube Programmer. Nota: Regresar el RDP a nivel 0 provocará el borrado masivo de la memoria flash y no se podrá restaurar el firmware AT de fábrica.

- El pin "PB13/SPI_SCK/BOOT" en el módulo Wio-E5 es solo un GPIO normal, no es el pin BOOT0 del MCU. Este pin PB13 se usa únicamente en el bootloader del firmware AT de fábrica, para decidir si se salta a la APP o permanece en el bootloader (para DFU). El verdadero pin "BOOT0" no está expuesto en el módulo, así que los usuarios deben tener cuidado al desarrollar aplicaciones de bajo consumo.
:::

### **2. Configuración del Reloj**

#### 2.1 HSE
- Oscilador TCXO de **32 MHz**  
- Fuente de alimentación del TCXO: **PB0-VDD_TCXO**

#### 2.2 LSE
- Oscilador de cristal de **32.768 kHz**

### **3. Conmutador RF**

El **módulo Wio-E5 SOLO transmite a través de RFO_HP**:

- Recepción: **PA4 = 1**, **PA5 = 0**  
- Transmisión (alta potencia de salida, modo SMPS): **PA4 = 0**, **PA5 = 1**

## Primeros Pasos

### Inicio rápido con comandos AT

#### Preparación

- **Paso 1.** Conecta el Wio-E5 mini a la PC mediante un cable USB tipo C  
- **Paso 2.** Abre una herramienta de terminal serial (por ejemplo, el Monitor Serial de Arduino), selecciona el puerto COM correcto, configura la velocidad de baudios en 9600 y selecciona Both NL & CR  
- **Paso 3.** Intenta enviar el comando `"AT"` y verás la respuesta del módulo.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Comandos AT Básicos

| Comando | Respuesta | Descripción |
|--------|-----------|-------------|
| `AT` | `+AT: OK` | Comando de prueba |
| `AT+VER` | `+VER: $MAJOR.$MINOR.$PATCH`<br />`+VER: 4.0.11` | Verifica la versión del firmware |
| `AT+ID`<br />`AT+ID=DevAddr`<br />`AT+ID=DevEui`<br />`AT+ID=AppEui` | `+ID: DevAddr, xx:xx:xx:xx`<br />`+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx`<br />`+ID: AppEui, xx:xx:xx:xx:xx:xx:xx:xx` | Consulta los identificadores del módulo LoRaWAN |
| `AT+ID=DevAddr,"01234567"`<br />`AT+ID=DevEui,"0123456789ABCDEF"`<br />`AT+ID=AppEui,"0123456789ABCDEF"` | `+ID: DevAddr, 01:23:45:67`<br />`+ID: DevEui, 01:23:45:67:89:AB:CD:EF`<br />`+ID: AppEui, 01:23:45:67:89:AB:CD:EF` | Establece nuevos IDs |
| `AT+RESET` | `+RESET: OK` | Reinicia el módulo |
| `AT+MSG="Data to send"` | `+MSG: Start`<br />`+MSG: Done`<br />...otros mensajes dependiendo de la recepción | Envía datos en formato string sin confirmación del servidor |
| `AT+PORT=8` | `+PORT: 8` | Establece el número de puerto (1-255) |
| `AT+ADR=ON`<br />`AT+ADR=OFF`<br />`AT+ADR=?` | `+ADR: ON/OFF` | Activa o desactiva el Adaptive Data Rate |
| `AT+DR`<br />`AT+DR=0` | `+DR: DR0` | Consulta o establece la tasa de datos |
| `AT+DR=EU868` | Listado completo de DRx para EU868 | Define el esquema de tasa de datos por banda |
| `AT+CH`<br />`AT+CH=3` | `+CH: 3,433700000,DR0:DR5` | Consulta configuración de canales |
| `AT+CH=3,"433700000",DR0,DR5` | `+CH: 3,433700000,DR0:DR5` | Configura canal, frecuencia y data rate |
| `AT+CH=3,ON`<br />`AT+CH=3,OFF` |  | Habilita o deshabilita un canal |
| `AT+KEY=NWKSKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` | `+KEY: NWKSKEY ...` | Cambia la clave de sesión de red |
| `AT+KEY=APPSKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` | `+KEY: APPSKEY ...` | Cambia la clave de sesión de aplicación |
| `AT+FDEFAULT` | `+FDEFAULT: OK` | Restaura configuración de fábrica |
| `AT+DFU=ON/OFF`<br />`AT+DFU=?` | `+DFU: ON/OFF` | Activa o consulta el modo DFU |
| `AT+MODE=LWOTAA`<br />`AT+MODE=LWABP`<br />`AT+MODE=TEST` | `+MODE: LWOTAA/LWABP/TEST` | Establece el modo de operación |
| `AT+JOIN`<br />`AT+JOIN=FORCE` | `+JOIN: Done / Failed / Starting...` | Intenta unirse a una red LoRaWAN (OTAA) |

Para más información, ve a: [LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

#### Conectar y enviar datos a The Things Network

- **Paso 1.** Visita el sitio web de [The Things Network](https://www.thethingsnetwork.org) y crea una cuenta nueva.

- **Paso 2.** Después de iniciar sesión, haz clic en tu perfil y selecciona **Console**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Selecciona un clúster para comenzar a agregar dispositivos y gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Haz clic en **Go to applications**. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Haz clic en **+ Add application**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Completa el campo **Application ID** y haz clic en **Create application**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Los campos **Application name** y **Description** no son obligatorios.  
Si dejas en blanco **Application name**, se usará automáticamente el mismo valor que **Application ID**.

La siguiente es la nueva aplicación creada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Haz clic en **+ Add end device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Haz clic en **Manually** para ingresar las credenciales de registro manualmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Selecciona el **Frequency plan** de acuerdo con tu región.  
  Asegúrate de usar la misma frecuencia que el gateway al que conectarás este dispositivo. Selecciona:
  - **MAC Version:** `MAC V1.0.2`
  - **Regional Parameters Version:** `PHY V1.0.2 REV B`  
  Estas configuraciones corresponden al stack de LoRaWAN® del Wio-E5.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Mientras el módulo Wio-E5 siga accesible mediante consola serial, envía los siguientes comandos AT en el monitor serial:

  - `AT+ID=DevEui` Obtiene tu Device EUI
  - `AT+ID=AppEui`, Obtiene tu App EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` Establece tu App Key

La salida será similar a la siguiente:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **Paso 11.** Copia y pega la información anterior en los campos **DevEUI**, **AppEUI** y **AppKey**. El campo **End device ID** se completará automáticamente cuando ingreses **DevEUI**. Finalmente, haz clic en **Register end device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **Paso 12.** Registra tu gateway LoRaWAN® en la consola de TTN. Por favor, consulta las instrucciones mostradas [aquí](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- **Paso 13.** Escribe los siguientes comandos AT para conectarte a TTN:

```
// Si usas US915
AT+DR=US915
AT+CH=NUM,8-15

// Si usas EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

La salida en el monitor serial será similar a la siguiente:

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

Si ves **+JOIN: Network joined** en tu consola serial, ¡eso significa que tu dispositivo se ha conectado exitosamente a TTN!

También puedes verificar el estado de tu dispositivo en la página de **End devices**.

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

Para más información sobre los comandos AT, por favor consulta los [comandos de Wio-E5 AT](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desarrollo con el paquete STM32Cube MCU

Esta sección está dirigida al Wio-E5 mini y tiene como objetivo construir varias aplicaciones utilizando el paquete STM32Cube MCU para la serie STM32WL (SDK).

**Nota:** Hemos actualizado la biblioteca para que sea compatible con la versión v1.1.0, que es la última versión del paquete STM32Cube MCU para la serie STM32WL.

:::note
Por favor, lee primero la sección [Borrar firmware AT de fábrica](https://wiki.seeedstudio.com/LoRa_E5_mini/#21-erase-factory-at-firmware), ya que es necesario borrar el firmware AT de fábrica antes de programar con el SDK. Una vez borrado, NO se puede recuperar.
:::

#### Preparativos

Software:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): for compilation and debugging

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): for programming STM32 devices

Hardware:

- Gateway LoRaWAN® conectado a un servidor de red LoRaWAN® (por ejemplo, TTN).

- Un cable USB Tipo-C y un ST-LINK. Conecta el cable Tipo-C al puerto Tipo-C de la placa para alimentación y comunicación serial. Conecta el ST-LINK a los pines SWD de la siguiente manera:

![conexión](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Descripción general de la configuración de GPIO

Dado que el diseño de hardware de la serie Wio-E5 es un poco diferente del NUCLEO-WL55JC, la placa de desarrollo oficial STM32WL55JC de ST, los desarrolladores deben reconfigurar algunos GPIOs para adaptar los ejemplos del SDK a la serie Wio-E5. Nosotros ya hemos reconfigurado los GPIOs, pero creemos que es importante señalar las diferencias.

|Etiqueta SDK de ejemplo|GPIO del NUCLEO-WL55JC|GPIO del Wio-E5 mini|
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

Ahora exploraremos varias aplicaciones para el Wio-E5 mini utilizando el paquete STM32Cube MCU para la serie STM32WL (SDK).

#### Nodo final LoRaWAN®

Esta aplicación conectará el Wio-E5 mini con TTN (The Things Network) y enviará datos después de conectarse a un gateway LoRaWAN®.

**Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega hasta `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`.

- **Paso 3.** Haz doble clic en el archivo **.project**.

- **Paso 4.** Haz clic derecho sobre el proyecto y selecciona **Propiedades**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca la opción **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores.

![compilar](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Ahora modificaremos nuestro **Device EUI**, **Application EUI**, **Application KEY** y la **Región LoRaWAN®**

- **Paso 7.** Por favor, sigue la [guía](https://wiki.seeedstudio.com/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) para configurar tu aplicación en TTN, obtener tu **Application EUI** y copiarla en la definición de macro `LORAWAN_JOIN_EUI` en el archivo `LoRaWAN/App/se-identity.h`. Por ejemplo, el Application EUI aquí es `80 00 00 00 00 00 00 0x07`:

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Paso 8.** También puedes modificar tu **Device EUI** y **Application Key** configurando las definiciones de macro `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` en `LoRaWAN/App/se-identity.h`. Asegúrate de que `LORAWAN_DEVICE_EUI` y `LORAWAN_NWK_KEY` sean iguales al `Device EUI` y `App Key` que tienes en la consola de TTN.

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

- **Paso 9.** La región LoRaWAN predeterminada es `EU868`. Puedes modificarla configurando la definición de macro `ACTIVE_REGION` en `LoRaWAN/App/lora_app.h`.

```c
// LoRaWAN/App/lora_app.h

/* Configuración de aplicación LoraWAN (Mw es configurado por lorawan_conf.h) */
/* Disponible: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Después de las modificaciones anteriores, **reconstruye** el ejemplo y programa tu Wio-E5. Abre `STM32CubeProgrammer`, conecta el ST-LINK a tu PC, mantén presionado el botón `RESET` de tu dispositivo, luego haz clic en `Connect` y suelta el botón `RESET`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 11.** Asegúrate de que la Protección de Lectura (Read Out Protection) sea `AA`. Si aparece como `BB`, selecciona `AA` y haz clic en `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 12.** Ahora, ve a la página de `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`), selecciona las opciones de programación como en la imagen siguiente, y luego haz clic en `Start Programming`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Verás el mensaje **Download verified successfully** una vez que la programación haya terminado.

- **Paso 13.** Si tu Gateway LoRaWAN® y TTN están configurados, el Wio-E5 se unirá exitosamente después del reinicio. Se enviará un paquete LoRaWAN® de confirmación a TTN cada 30 segundos. El siguiente log aparecerá en el monitor serial (aquí se usa el Monitor Serial de Arduino) si la conexión fue exitosa:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- ¡Felicidades! Ahora has conectado el Wio-E5 a la red LoRaWAN®. ¡Puedes continuar desarrollando aplicaciones más emocionantes para nodos finales LoRaWAN®!

**Nota:** Wio-E5 solo soporta modo de alta potencia, por lo que no puedes usar estas definiciones macro en `radio_board_if.h`:

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Aunque **RBI_CONF_RFO** esté definido como **RBI_CONF_RFO_LP_HP** en `radio_board_if.h`, no se usará porque **USE_BSP_DRIVER** está definido y la función **BSP_RADIO_GetTxConfig()** devuelve **RADIO_CONF_RFO_HP**.

#### FreeRTOS LoRaWAN®

Esta aplicación también conectará el Wio-E5 mini con TTN (The Things Network) y enviará datos tras conectarse a un gateway LoRaWAN®. La diferencia con la aplicación anterior de nodo final LoRaWAN® es que aquella corre sobre hardware desnudo (bare metal) mientras que esta corre bajo FreeRTOS.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo en un archivo ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta los **pasos 4 al 13** de la aplicación anterior **LoRaWAN® End Node** para conectar el Wio-E5 mini con TTN.

#### FreeRTOS LoRaWAN® AT

Esta aplicación también conectará el Wio-E5 mini con TTN (The Things Network) y enviará datos tras conectarse a un gateway LoRaWAN®. La diferencia entre la aplicación FreeRTOS LoRaWAN anterior y esta es que aquí puedes usar comandos AT.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como un archivo ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta los **pasos 4 al 12** de la aplicación anterior **LoRaWAN End Node**

- **Paso 5.** Abre un monitor serial, por ejemplo **Arduino Serial Monitor**, y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Escribe **AT?** y presiona **ENTER** para ver todos los comandos AT disponibles

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Si quieres cambiar **Device EUI**, **Application EUI**, **Application KEY** y **LoRaWAN® Region**, puedes hacerlo usando comandos AT. Sin embargo, estos parámetros ya están configurados en **se-identity.h** y **lora_app.h** en este ejemplo

- **Paso 8.** Escribe **AT+JOIN=1** y verás la siguiente salida una vez que la unión (join) sea exitosa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí se debe usar el formato **AT+JOIN=(Modo)**. **Modo** corresponde a **0 para ABP** o **1 para OTAA**.

#### FreeRTOS LowPower

Esta aplicación activará el modo de bajo consumo en el Wio-E5 mini. Una vez que la aplicación se graba en la placa, esta consumirá energía normalmente durante 2 segundos y luego entrará en modo de bajo consumo durante otros 2 segundos, y así sucesivamente.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como un archivo ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a:  
  `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Haz clic derecho sobre el proyecto y selecciona **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Ve a `C/C++ Build > Settings > MCU Post build outputs`, marca la opción **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilarse sin errores

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Abre `STM32CubeProgrammer`, conecta el ST-LINK a tu PC, mantén presionado el botón `RESET` del dispositivo, luego haz clic en **Connect** y suelta el botón `RESET`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Asegúrate de que la protección de lectura (**Read Out Protection**) esté en `AA`. Si aparece como `BB`, selecciona `AA` y haz clic en **Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Ve a la pestaña `Erasing & Programming`, selecciona la ruta de tu archivo hex (por ejemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`), selecciona las opciones de programación como en la imagen de ejemplo, y haz clic en **Start Programming**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Verás el mensaje **Download verified successfully** una vez que se complete la programación.

- **Paso 10.** Conecta el Wio-E5 mini a una PC mediante un medidor de energía. Notarás que el LED rojo de la placa parpadea cada segundo y la placa alterna entre estados normales y de bajo consumo. (La corriente en el medidor baja durante 1 segundo en modo de bajo consumo y vuelve a subir durante 1 segundo en el estado normal).


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Low Power

Esta aplicación también activa el modo de bajo consumo en el Wio-E5 mini.  
La diferencia entre esta y la aplicación FreeRTOS LowPower es que esta corre sobre bare metal (sin sistema operativo), mientras que la anterior corre bajo FreeRTOS.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descargarlo como archivo ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a: `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Refiérete a los **pasos 4 al 10** de la aplicación anterior **FreeRTOS LowPower** para compilar, programar y verificar el comportamiento en modo bajo consumo. ¡Verás el mismo resultado final en el medidor de energía!

## Resources

Hoja de datos Wio-E5 mini:

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Hoja de datos Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Certificaciones Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">WWio-E5-HF TELEC Certification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC Certification</a></p>

Links relevantes sobre SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Paquete STM32Cube MCU para serie STM32WL</a></p>

## Soporte Técnico y Discusión de Producto

Por favor, envía cualquier problema técnico en nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
