---
description: Comenzando con Wio-E5 mini.
title: Wio-E5 mini
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/es/wio_gps_board/
slug: /es/LoRa_E5_mini
last_update:
  date: 01/30/2023
  author: hushuxu
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

> LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
La marca LoRa® es una marca registrada de Semtech Corporation o sus subsidiarias.

Wio-E5 mini es una placa de desarrollo de tamaño compacto adecuada para pruebas rápidas y construcción de prototipos de tamaño pequeño y te ayuda a diseñar tu dispositivo IoT inalámbrico LoRaWAN® ideal con un rango de transmisión de larga distancia.

Wio-E5 mini está integrado con el [Módulo Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), que ofrece la primera combinación mundial de RF LoRa® y chip MCU en un solo chip diminuto y está certificado por FCC y CE. Está alimentado por el núcleo ARM Cortex-M4 y el chip LoRa® Semtech SX126X y soporta el protocolo LoRaWAN® en frecuencias mundiales y modulaciones (G)FSK, BPSK, (G)MSK y LoRa®.

Aprende más sobre [Wio-E5](https://wiki.seeedstudio.com/es/LoRa-E5_STM32WLE5JC_Module/) aquí.

Más comparación entre el Wio-E5 y el chip LoRa® RFM95:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 mini expone todos los GPIOs del Wio-E5, incluyendo UART, ADC, SPI, IIC, etc. Contiene botones RESET y BOOT y es fácil de usar. Soportando el protocolo LoRaWAN®, Wio-E5 mini presenta transmisión de ultra largo alcance y consumo de energía ultra bajo: es capaz de lograr un rango de transmisión de hasta 10 km, y la corriente de sueño de los módulos Wio-E5 a bordo es tan baja como 2.1 uA (modo WOR). Está diseñado con estándares industriales con una temperatura de trabajo amplia de -40 ℃ ~ 85℃, alta sensibilidad entre -116.5dBm ~ -136 dBm, y potencia de salida RF de hasta +20.8 dBm a 3.3V.

Además del Wio-E5 mini, también proporcionamos otras opciones incluyendo la Placa de Desarrollo Wio-E5 que lleva interfaces y características más complejas para desbloquear el rendimiento más poderoso del módulo Wio-E5. Proporciona una gama más amplia de protocolos de acceso y tipos superabundantes de interfaces. Por lo tanto, puedes probar y prototipar el módulo rápidamente con RS-485, interfaces Grove, y GPIOs ricos. (Aprende más sobre la Placa de Desarrollo Wio-E5)

Dado que Wio-E5 es un chip LoRaWAN® con un MCU, hay tres formas principales de utilizar el Wio-E5 mini:

**1. Conectar Wio-E5 mini a PC y controlar por comandos AT**

Hay una función USB a UART incorporada a bordo, podrías conectar el Wio-E5 mini a tu PC con un cable USB tipo C, y usar software de comunicación serie para enviar comandos AT y leer datos de la placa.

**2. Conectar Wio-E5 mini a otra placa principal vía UART y controlar por comandos AT**

Por ejemplo, conectar Wio-E5 mini a Seeeduino XIAO y la Placa de Expansión vía UART, y enviar comandos AT y leer datos desde Seeeduino XIAO a través del monitor serie del IDE de Arduino.

**3. Desarrollo de Aplicación de Usuario usando SDK**

Desarrolla tu propia placa de desarrollo LoRa® con función MCU usando STM32Cube Programmer, que es el SDK proporcionado oficialmente por STMicroelectronics. Para descargar este recurso SDK, por favor encuentra los recursos en aprendizaje y documentación abajo.

Con todas las características sobresalientes listadas arriba, el Wio-E5 mini será una elección superior para desarrollo de dispositivos IoT, pruebas, prototipado, y aplicaciones en escenarios IoT de larga distancia y consumo de energía ultra bajo como agricultura inteligente, oficina inteligente, e industria inteligente.

Si no estás familiarizado con la tecnología LoRa® y LoRaWAN®, por favor revisa este blog [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) en detalle.

## Características

- Todos los GPIOs del Wio-E5 STM32WLE5JC están disponibles

- Compatible con planes de frecuencia LoRaWAN® y LoRa® globales

- Rango de transmisión de larga distancia hasta 10km (valor ideal en área abierta)

- Tamaño mini y compacto, adecuado para pruebas rápidas y construcción de prototipos de tamaño pequeño

- Convenientes botones RESET y BOOT en la placa

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parámetros</th><th class="tg-6cwf">Especificaciones</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">tamaño</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">voltaje - suministro</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">potencia - salida</td>
<td class="tg-g9rn">hasta +20.8 dBm a 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">frecuencia de trabajo</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">protocolo</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">sensibilidad</td>
<td class="tg-g9rn">-116.5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / 2P-2.54mm Hole / 1*12P-2.54mm Header*2 / SMA-K / IPEX</td>
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
<td class="tg-g9rn">Corriente de reposo del módulo Wio-E5 tan baja como 2.1uA (modo WOR)</td>
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
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Pegatina*1 </td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Pines macho 1X12 *2</td>
</tr>
</tbody>
</table>

## Aplicaciones

- Pruebas fáciles del módulo Wio-E5
- Prototipado rápido de dimensiones pequeñas de dispositivos LoRa® con Wio-E5
- Desarrollo de cualquier aplicación de comunicación inalámbrica de larga distancia
- Aprendizaje e investigación de aplicaciones LoRa® y LoRaWAN®

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Notas de Aplicación

**1. Firmware AT de Fábrica**

La serie wio-E5 tiene un firmware de comandos AT integrado, que soporta el protocolo LoRaWAN® Clase A/B/C y un amplio plan de frecuencias: EU868/US915/AU915/AS923/KR920/IN865. Con este firmware de comandos AT, los desarrolladores pueden construir fácil y rápidamente su prototipo o aplicación.

El firmware de comandos AT contiene un bootloader para DFU y la aplicación AT. El pin "PB13/SPI_SCK/BOOT" se usa para controlar que Wio-E5 permanezca en el bootloader o salte a la aplicación AT. Cuando PB13 está en HIGH, el módulo saltará a la aplicación AT después del reset, con una velocidad de baudios por defecto de 9600. Cuando PB13 está en LOW (presiona el botón "Boot" en Wio-E5 mini), el módulo permanecerá en el bootloader, y seguirá transmitiendo el carácter "C" cada 1S a una velocidad de baudios de 115200.

:::tip

- El Firmware AT de Fábrica está programado con RDP(Protección de Lectura) Nivel 1, los desarrolladores necesitan remover RDP primero con STM32Cube Programmer. Nota que regresar RDP a nivel 0 causará un borrado masivo de la memoria flash y el Firmware AT de Fábrica no podrá ser restaurado nuevamente.
- El pin "PB13/SPI_SCK/BOOT" en el módulo Wio-E5 es solo un GPIO normal, no el pin "BOOT0" del MCU. Este pin "PB13/SPI_SCK/BOOT" se usa en el bootloader del firmware AT de Fábrica, para decidir saltar a APP o permanecer en bootloader(para DFU). El pin real "BOOT0" no sale al módulo, por lo que los usuarios necesitan tener cuidado al desarrollar aplicaciones de bajo consumo

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

## Comenzando

### Inicio rápido de Comandos AT

#### Preparación

- **Paso 1.** Conecta Wio-E5 mini a PC vía un cable Type-C

- **Paso 2.** Abre una herramienta serial(ej. Arduino Serial Monitor), selecciona el puerto COM correcto, establece la velocidad de baudios a 9600 y selecciona Both NL & CR

- **Paso 3.** Intenta enviar "AT" y verás la respuesta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Comandos AT Básicos

| Formato de Comando | Retorno | Descripción |
| --- | --- | --- |
| AT | +AT: OK | Comando de prueba |
| AT+VER | +VER: \$MAJOR.\$MINOR.\$PATCH <br></br> +VER: 4.0.11 | Verificar versión del firmware |
| AT+ID // Leer todo, DevAddr( ABP), DevEui( OTAA), AppEui( OTAA)<br></br>AT+ID = DevAddr // Leer Dirección del Dispositivo<br></br>AT+ID = DevEui // Leer DevEui<br></br>AT+ID = AppEui // Leer AppEui | +ID: DevAddr, xx: xx: xx:xx<br></br>+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx<br></br>+ID: AppEui13, xx:xx:xx:xx:xx:xx:xx | Se usa para verificar el ID del módulo LoRaWAN. El ID se trata como números big endian. |
| AT+ID = DevAddr, "01234567" // Establecer nueva DevAddr<br></br>AT+ID = DevEui, "0123456789ABCDEF" // Establecer nueva DevEui<br></br>AT+ID = AppEui, "0123456789ABCDEF" // Establecer nueva AppEui | +ID: DevAddr, 01:23:45:67<br></br>+ID: DevEui, 01:23:45:67:89:AB:CD:EF<br></br>+ID: AppEui, 01:23:45:67:89:AB:CD:EF | Cambiar el ID |
| AT+RESET | +RESET: OK | Reiniciar el módulo |
| AT+MSG="Data to send" | +MSG: Start<br></br>+MSG: FPENDING // La bandera FPENDING del frame de enlace descendente está activada<br></br>+MSG: Link 20, 1<br></br>+MSG: ACK Received // LinkCheckAns recibido<br></br>+ MSG: MULTICAST // El frame de enlace descendente es un mensaje multicast<br></br>+MSG: PORT: 8; RX: "12345678" //Se recibió mensaje de enlace descendente<br></br>+MSG: RXWIN2, RSSI -106, SNR 4 //Intensidad de señal del frame de enlace descendente<br></br>+MSG: Done | enviar frame en formato string que no necesita ser confirmado por el servidor |
| AT+PORT = "port"<br></br>ej: AT+PORT = 8 //Establecer puerto a 8 | + PORT: 8 | Establecer número de puerto que será usado por el comando MSG/CMSG/MSGHEX/CMSGHEX para enviar mensaje, el número de puerto debe estar en el rango de 1 a 255. |
| AT+ADR=" state"<br></br>ej: AT+ADR=ON // Habilitar función ADR<br></br>AT+ ADR= OFF // Deshabilitar función ADR<br></br>AT+ADR=? // Verificar configuración ADR actual | +ADR: ON  // Consulta/configuración ADR retorna | Establecer función ADR del módulo LoRaWAN |
| AT+DR // Verificar DataRate seleccionado actualmente<br></br>AT+DR=drx // "drx" debe estar en el rango 0~15 | +DR: DR0<br></br>+DR: US915 DR0 SF10 BW12 | Usar DRx definido por LoRaWAN para establecer la tasa de datos del módem AT LoRaWAN. |
| AT+ DR= band //" band" podría ser nombres de banda definidos en el Capítulo 3 Planes de Banda<br></br>AT+ DR= SCHEME // Verificar banda actual | (EU868) +DR: EU868<br></br>+DR: EU868 DR0 SF12 BW125K<br></br>+DR: EU868 DR1 SF11 BW125K<br></br>+DR: EU868 DR2 SF10 BW125K<br></br>+DR: EU868 DR3 SF9 BW125K<br></br>+DR: EU868 DR4 SF8 BW125K<br></br>+DR: EU868 DR5 SF7 BW125K<br></br>+DR: EU868 DR6 SF7 BW125K<br></br>+DR: EU868 DR7 FSK<br></br>+DR: EU868 DR8 RFU<br></br>+DR: EU868 DR9 RFU<br></br>+DR: EU868 DR10 RFU<br></br>+DR: EU868 DR11 RFU<br></br>+DR: EU868 DR12 RFU<br></br>+DR: EU868 DR13 RFU<br></br>+DR: EU868 DR14 RFU<br></br>+DR: EU868 DR15 RFU | Esquema de tasa de datos |
| AT + CH // consultar todos los canales<br></br>AT + CH = ch // verificar frecuencia de canal único |  | Consultar Configuración de Canal |
| AT+CH="chn", ["freq"], ["drmin"], ["drmax"]<br></br>// Cambiar la frecuencia del canal chn a "Freq"<br></br>// "freq" está en MHz.<br></br>// Rango disponible "drmin"/"drmax" DR0 ~ DR15 | +CH: 3,433700000,DR0:DR5<br></br>+CH: 3,433700000,DR | Establecer parámetro de canal del módem LoRaWAN, Establecer frecuencia cero para eliminar un canal. |
| AT+CH=chn,ON<br></br>AT+CH=chn, OFF |  | Habilitar o Deshabilitar Canal |
| AT+ KEY= NWKSKEY, " clave de 16 bytes de longitud"<br></br>ej: AT+KEY=NWKSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>ej: AT+KEY=NWKSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C" | + KEY: NWKSKEY 2B7E151628AED2A6ABF7158809CF4F3C | Cambiar clave de sesión de red (NWKSKEY) |
| AT+ KEY= APPSKEY, " clave de 16 bytes de longitud"<br></br>ej: AT+KEY=APPSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>ej: AT+KEY= APPSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 | + KEY: APPSKEY 2B7E151628AED2A6ABF7158809CF4F3C | Cambiar clave de sesión de aplicación (APPSKEY) |
| AT+ FDEFAULT<br></br>AT+ FDEFAULT= Seeed | +FDEFAULT: OK | Reiniciar módem AT LoRaWAN a configuración predeterminada de fábrica |
| T+ DFU=" Nuevo estado"<br></br>ej: AT+DFU=ON // Habilitar función DFU<br></br>ej: AT+DFU=OFF //Deshabilitar función DFU<br></br>AT+DFU=? // Verificar si DFU está habilitado configuración | +DFU: ON<br></br>+DFU: OFF | Se usa para entrar al modo DFU |
| T+MODE="mode"<br></br>ej: AT+MODE=TEST // Entrar modo TEST<br></br>ej: AT+MODE= LWOTAA // Entrar modo LWOTAA<br></br>ej: AT+MODE= LWABP // Entrar modo LWABP | +MODE: LWABP // Entrar modo TEST exitosamente<br></br>+MODE: LWOTAA // Entrar modo LWOTAA exitosamente<br></br>+MODE: TEST // Entrar modo TEST exitosamente | Se usa para seleccionar modo de trabajo |
| AT + JOIN<br></br>AT + JOIN = FORCE | a) Unión exitosa +JOIN: Starting<br></br>+ JOIN: NORMAL<br></br>+JOIN: NetID 000024 DevAddr 48:00:00:01<br></br>+JOIN: Done<br></br>b) Unión falló<br></br>+JOIN: Join failed<br></br>c) Proceso de unión en curso<br></br>+ JOIN: LoRaWAN modem is busy | Cuando el modo OTAA está habilitado, el comando JOIN se puede usar para unirse a una red conocida |

Para más información, consulte [la Especificación de Comandos](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf).

#### Conectar y enviar datos a The Things Network

- **Paso 1.** Visite el sitio web de [The Things Network](https://www.thethingsnetwork.org) y regístrese para una nueva cuenta

- **Paso 2.** Después de iniciar sesión, haga clic en su perfil y seleccione **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Seleccione un clúster para comenzar a agregar dispositivos y gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Haga clic en **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Haga clic en **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Complete el **Application ID** y haga clic en **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí **Application name** y **Description** no son campos obligatorios. Si **Application name** se deja en blanco, utilizará el mismo nombre que **Application ID** por defecto

La siguiente es la aplicación recién creada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Haga clic en **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Haga clic en **Manually**, para ingresar las credenciales de registro manualmente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Paso 9.** Seleccione el **Frequency plan** según su región. También asegúrese de usar la misma frecuencia que el gateway al cual conectará este dispositivo. Seleccione **MAC V1.0.2** como la **LoRaWAN® version** y **PHY V1.0.2 REV B** como la **Regional Parameters version**. Estas configuraciones son según el stack LoraWAN® del Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **Paso 10.** Mientras el módulo Wio-E5 aún sea accesible a través de la consola serial, envíe los siguientes comandos AT en el monitor serial:

  - `AT+ID=DevEui` para obtener su Device EUI
  - `AT+ID=AppEui`, para obtener su App EUI
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

Esta sección es para Wio-E5 mini, con el objetivo de construir varias aplicaciones con el Paquete MCU STM32Cube para la serie STM32WL (SDK).

**Nota:** Ahora hemos actualizado la biblioteca para soportar v1.1.0 que es la versión más reciente del Paquete MCU STM32Cube para la serie STM32WL.

:::note
Por favor lea primero la sección [Borrar Firmware AT de Fábrica](https://wiki.seeedstudio.com/es/LoRa_E5_mini/#21-erase-factory-at-firmware), ya que necesitamos borrar el Firmware AT de Fábrica antes de programar con el SDK. Después de borrar el Firmware AT de Fábrica NO se puede recuperar.
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

|Etiqueta del Ejemplo SDK|GPIO de NUCLEO-WL55JC|GPIO de Wio-E5 mini|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Botón Boot)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (Botón D0)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### Aplicaciones

Ahora exploraremos varias aplicaciones para Wio-E5 mini con STM32Cube MCU Package para la serie STM32WL (SDK).

#### Nodo Final LoRaWAN®

Esta aplicación conectará Wio-E5 mini con TTN (The Things Network) y enviará datos después de conectarse con una puerta de enlace LoRaWAN®.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Paso 3.** Haz doble clic en el archivo **.project**

  **Nota:** Para MAC, debería tomar una de las opciones siguientes para abrir el proyecto:

  - **1.** Navega a `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`. Haz doble clic en el archivo "LoRaWAN_End_Node.ioc".

  - **2.** Usa "Import Projects from File System or Archieve" como se muestra en las imágenes siguientes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Haz clic derecho en el proyecto y haz clic en **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5.** Navega a `C/C++ Build > Settings > MCU Post build outputs`, marca **Convert to Intel Hex file (-O ihex)** y haz clic en **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **Build 'Debug'**, y debería compilar sin errores

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Ahora modificaremos nuestro **Device EUI**, **Application EUI**, **Application KEY** y **Región LoRawan®**

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

- **Paso 9.** La Región LoRaWAN predeterminada es `EU868`, puedes modificarla configurando la definición de macro `ACTIVE_REGION` en `LoRaWAN/App/lora_app.h`

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

Esta aplicación también conectará Wio-E5 mini con TTN (The Things Network) y enviará datos después de conectarse con una puerta de enlace LoRaWAN®. La diferencia entre la aplicación anterior LoRaWAN® End Node y esta aplicación FreeRTOS LoRaWAN® es que la anterior se ejecuta en bare metal mientras que esta se ejecuta bajo FreeRTOS.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** ¡Consulta el **paso 4 - paso 13** de la aplicación anterior **LoRaWAN® End Node** para conectar Wio-E5 mini con TTN!

#### FreeRTOS LoRaWAN® AT

Esta aplicación también conectará Wio-E5 mini con TTN (The Things Network) y enviará datos después de conectarse con una puerta de enlace LoRaWAN®. La diferencia entre la aplicación anterior FreeRTOS LoRaWAN y esta aplicación es que puedes usar comandos AT.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta el **paso 4 - paso 12** de la aplicación anterior **LoRaWAN End Node**

- **Paso 5.** Abre un monitor serie como **Arduino Serial Monitor** y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Escribe **AT?** y presiona **ENTER** para ver todos los comandos AT disponibles

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Si aún quieres cambiar **Device EUI**, **Application EUI**, **Application KEY** y **LoRawan® Region**, puedes cambiarlos usando comandos AT. Sin embargo, estos parámetros ya están configurados en **se-identity.h** y **lora_app.h** en este ejemplo

- **Paso 8.** Escribe **AT+JOIN=1** y verás la siguiente salida una vez que la unión sea exitosa!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aquí se debe usar el formato **AT+JOIN=(Mode)**. **Mode** corresponde a **0 para ABP** o **1 para OTAA**

#### FreeRTOS LowPower

Esta aplicación habilitará el modo de bajo consumo en Wio-E5 mini. Una vez que la aplicación esté cargada, la placa consumirá energía normalmente durante 2 segundos y entrará en modo de bajo consumo durante 2 segundos y así sucesivamente.

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

Verás el mensaje **Download verified successfully**, una vez que la programación haya terminado.

- **Paso 10.** Conecta el Wio-E5 mini a una PC conectando un medidor de potencia. Notarás que el LED rojo en la placa parpadea cada segundo y la placa alterna entre estados normal y de bajo consumo (La corriente en el medidor de potencia baja durante 1 segundo para el estado de bajo consumo y vuelve a subir durante 1 segundo para el estado de funcionamiento normal)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Bajo Consumo

Esta aplicación también habilitará el modo de bajo consumo en el Wio-E5 mini. La diferencia entre la aplicación anterior de Bajo Consumo FreeRTOS y esta aplicación de Bajo Consumo es que la anterior se ejecuta bajo FreeRTOS mientras que esta se ejecuta en bare metal.

- **Paso 1.** Haz clic [aquí](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar el repositorio **Seeed-Studio/LoRaWan-E5-Node** y descárgalo como un archivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Extrae el archivo ZIP y navega a `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Paso 3.** Haz doble clic en el archivo **.project**

- **Paso 4.** Consulta el **paso 4 - paso 10** de la aplicación anterior de **Bajo Consumo FreeRTOS** y verás la misma salida al final en el medidor de potencia!

## Recursos

Hoja de datos del Wio-E5 mini:

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Hoja de datos del Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Hoja de datos y especificaciones del Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Especificación de comandos AT del Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Hoja de datos del STM32WLE5JC</a></p>

Certificaciones del Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Certificación Wio-E5-HF CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Certificación FCC del Wio-E5-HF -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Certificación FCC del Wio-E5-HF -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Certificación TELEC del Wio-E5-HF</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Certificación IC del Wio-E5-HF</a></p>

SDK relevante:

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
