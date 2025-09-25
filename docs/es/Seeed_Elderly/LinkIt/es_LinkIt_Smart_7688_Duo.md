---
description: LinkIt Smart 7688 Duo
title: LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Linkit_7688_DUO_Product_view.jpg)

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

LinkItTM Smart 7688 Duo (una placa controladora compacta) es una placa de desarrollo abierta basada en MT7688 ([hoja de datos](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/MT7688_datasheet.pdf)) y ATmega32u4. La placa es compatible con sketches de Arduino Yun y está basada en la distribución Linux OpenWrt. La placa está diseñada especialmente para permitir la creación de prototipos de dispositivos IoT de aplicaciones ricas para hogar inteligente u oficina[1]. Como es compatible con Arduino, puedes usar diferentes características de Arduino Yun y LinkIt Smart 7688 Duo[2]. Esto te ayudará a construir aplicaciones ricas basadas en varios sketches de Arduino Yun robustos y compilados. La placa te ofrece la memoria y almacenamiento de paquetes para permitir procesamiento de video robusto. La plataforma también ofrece opciones para crear aplicaciones de dispositivos en lenguajes de programación Python, Node.js y C.

:::note
- Solo un controlador puede ser el controlador principal de la placa a la vez.
- Esta placa es solo una parte de la plataforma MediaTek LinkItTM Smart 7688 que incluye otras placas de desarrollo.

:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- CPU MIPS de 580 MHz
- Wi-Fi de entrada única salida única (1T1R) 802.11 b/g/n (2.4G)
- Pines para GPIO, I2C, I2S, SPI, SPIS, UART, PWM y Puerto Ethernet
- 32MB Flash y 128MB DDR2 RAM
- Host USB
- Ranura Micro SD
- Soporte para API de Arduino (ATmega32U4)

## Ideas de aplicación

- Dispositivo IoT/Gateway
- Robótica
- Enseñanza y aprendizaje

## Especificaciones

- MPU
  - Chipset: MT7688AN
  - Núcleo: MIPS24KEc
  - Velocidad de Reloj: 580MHz
  - Voltaje de Trabajo: 3.3V
- MCU
  - Chipset: ATmega32U4
  - Núcleo: Atmel AVR
  - Velocidad de Reloj: 8MHz
  - Voltaje de Trabajo: 3.3V
- Memoria
  - Flash: 32MB
  - RAM: 128MB DDR2
- GPIO
  - Cantidad de Pines: 3(MT7688AN), 24(ATmega32U4)
  - Voltaje: 3.3V
- PWM
  - Cantidad de Pines: 8(Atmega32U4)
  - Voltaje: 3.3V
  - Resolución Máx.: 16 bits(personalizable)
- ADC
  - Cantidad de Pines: 12(ATmega32U4)
  - Resolución: 10 bits
- Interrupciones Externas: 8
- SPI/SPIS
  - Números de pines: S0, S1, S2, S3
  - Velocidad Máx.: 4MHz
- I2C
  - Número de Pin: D2/D3
  - Velocidad: 400KHz
- UART Lite
  - 1 para ATmega32U4, 1 para MT7688AN
  - Número de Pin: P8/P9(MT7688AN), D0/D1(ATmega32U4)
- Host USB
  - Número de Pin: P6/P7
  - Tipo de Conector: Micro-AB
- Comunicación
  - Wi-Fi: 1T1R 802.11 b/g/n (2.4G)
  - Ethernet: PHY FE 10/100 de 1 puerto
  - Números de Pines: P2/P3/P4/P5
- Almacenamiento de Usuario: Tarjeta SD Micro SD/SDXC
- Tamaño: 60.8x26.0mm

## Descripción general del hardware

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Front_component_view_with_text_1200_s.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_backview_with_text_1200.jpg)

:::note
    * Para proteger el producto de operaciones incorrectas, preste atención a las siguientes notas. Elija un adaptador de alimentación más confiable con salida estable. Condiciones recomendadas de la fuente de entrada de alimentación para 7688:
          * El voltaje de sobretensión de la entrada de alimentación no debe superar 5.5.
          * La onda de voltaje debe estar dentro de ±100mV del voltaje nominal.
:::

## Primeros pasos

### Conectándose al sistema operativo embebido

:::note
    Hay dos formas descritas en el manual. En este caso, solo mostramos un método avanzado (usando adaptador USB a Serial) que podría parecer un poco más difícil. Pero, se beneficiará mucho de él a largo plazo.
:::

#### Materiales requeridos

- LinkIt Smart 7688 x 1
- Cable USB (tipo A a micro tipo-B) x 1
- Adaptador USB a Serial x 1
- Cables puente x 3

### En Windows

**1.** Instale [PuTTy](http://www.putty.org/). PuTTY proporciona un entorno de consola del sistema usando SSH (Secure Socket Shell) para acceder al sistema operativo de la placa de desarrollo.

**2.** Instale [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) Print Service (Para Windows 7, Windows 8, Windows 10).

**3.** Instale el controlador. Si está usando un cable USB basado en chip FTDI, descargue e instale su controlador desde [aquí](https://www.ftdichip.com/Drivers/VCP.htm). Si tiene problemas con el controlador más reciente, intente instalar una [versión anterior](https://www.ftdichip.com/Support/Documents/InstallGuides.htm).

**4.** A continuación, necesita conectar el cable Serial-a-USB a los pines UART del LinkIt Smart 7688 como se muestra en la siguiente tabla:

| Pin en el adaptador USB | Pin correspondiente a conectar en LinkIt Smart 7688 |
|-----------------------------------|--------------------------------------------------------|
| Pin RX | Pin 8 |
| Pin TX | Pin 9 |
| Pin GND | Pin GND |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_view_1200_s.jpg)

**5.** Después de conectar el cable Serial a USB, abra el administrador de dispositivos y observe el número de puerto COM como se muestra en la Figura 22. Este número puede variar en diferentes computadoras.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/COM_port.jpg)

**6.** Inicie el terminal PuTTY e ingrese el número de puerto COM del dispositivo USB encontrado en el administrador de dispositivos, haga clic en el botón de radio Serial, escriba 57600 en el cuadro de Velocidad y haga clic en Abrir, como se muestra en la Figura 23.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Putty_configuration.jpg)

**7.** Para salir de la consola del sistema, haga clic en el **icono de cerrar** en la parte superior derecha de las ventanas de PuTTY.

### En Mac

**1.** Instale el controlador si es necesario. Consulte el sitio web del fabricante del cable para conocer los requisitos del controlador en Mac y las instrucciones de instalación.

**2.** Conecte el cable a la PC/Laptop y conecte el cable al LinkIt Smart 7688.

**3.** Abra una sesión de Terminal.

**4.** Escriba **ls /dev/cu** en el Terminal. Debería ver una lista de dispositivos. Busque algo como cu.usbserial-XXXXXXXX donde XXXXXXXX es generalmente un identificador aleatorio. Este es el dispositivo serial utilizado para acceder a la consola del sistema.

**Por ejemplo:**

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** Usa la utilidad screen para conectarte al puerto serie y establece la velocidad de baudios a 57600. Esto es porque la velocidad de baudios de la consola del sistema es 57600 por defecto. Por ejemplo:

```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```

**6.** Ahora deberías estar conectado a la consola del sistema. Presiona ENTER en la Terminal para mostrar el prompt. Notarás que el prompt se ha vuelto diferente de tu aplicación Terminal de OS X, es el prompt del LinkIt Smart 7688 y se ve como lo siguiente:

```
  root@myLinkIt:/#
```

**7.** Ya estás listo para realizar cambios en el sistema LinkIt Smart 7688 a través de esta consola.

### En Linux

**1.** Instala el controlador si es necesario. Consulta el sitio web del fabricante del cable para conocer los requisitos del controlador en Linux y las instrucciones de instalación.

**2.** Conecta el cable y conecta el cable al LinkIt Smart 7688 Duo.

**3.** Abre una sesión de Terminal.

**4.** Escribe **ls /dev/ttyUSB*** en el Terminal. Deberías ver una lista de dispositivos. Busca algo como cu.usbserial-XXXXXXXX donde XXXXXXXX suele ser un identificador aleatorio. Este es el dispositivo serie utilizado para acceder a la consola del sistema. Por ejemplo:

```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```

**5.** Usa la utilidad **screen** para conectarte al puerto serie y establece la velocidad de baudios a **57600**. Esto es porque la velocidad de baudios de la consola del sistema es 57600 por defecto. Por ejemplo:

```
$sudo screen /dev/ttyUSB0 57600
```

**6.** Ahora deberías estar conectado a la consola del sistema. Presiona ENTER en la Terminal para mostrar el prompt. Notarás que el prompt se ha convertido en una aplicación regular diferente, es el prompt del LinkIt Smart 7688 y se ve como lo siguiente:

```
  root@myLinkIt:/#
```

**7.** Ya estás listo para realizar cambios en el sistema LinkIt Smart 7688 a través de esta consola.

### Ejecutando el ejemplo Blink

#### Materiales Requeridos

- LinkIt Smart 7688 x 1
- Cable USB (tipo A a micro tipo-B) x 1
- Adaptador USB a Serial x 1
- Cables jumper x 3

#### Hacer Funcionar Blink

**1.** Alimenta tu placa con un cable micro-USB (conecta solo la interfaz USB Power, no la interfaz USB Host).

**2.** Ejecuta PuTTy y conéctate al sistema con el adaptador USB a Serial como se muestra en las secciones anteriores.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_to_computer.jpg)

**3.** Escribe **python /IoT/examples/blink-gpio44.py** y presiona **Enter** para ejecutar el ejemplo Blink.
:::note
    Ten en cuenta que hay 1 espacio en blanco después de la primera palabra "python", de lo contrario el ejemplo no será encontrado.
:::
**4.** Después de aproximadamente 2 segundos, notarás que el LED Wi-Fi parpadea constantemente.

**5.** En la consola del sistema, escribe **CTRL + C**, esto terminará el ejemplo.

### Conectar a Internet (Cambiar a modo Station)

Hay dos tipos de modos Wi-Fi: modo AP y modo Station. Consulta aquí las diferencias entre ellos.

**1.** Alimenta la placa con un cable micro-USB.

**2.** Abre la utilidad de conexión Wi-Fi en tu computadora y conéctate al punto de acceso llamado LinkIt_Smart_7688_XXXXXX. XXXXXX es un tipo de identificador de hardware que varía de placa a placa.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_wifi.jpg)

**3.** Abre un navegador con la URL mylinkit.local/ o 192.168.100.1, establece la contraseña para root e inicia sesión. Haz clic en Network en la parte superior derecha.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Network_conf.jpg)

**4.** Selecciona el modo Station y haz clic en Refresh o en la flecha hacia abajo a la derecha para encontrar el AP al cual conectarse. Después de haber seleccionado el AP, ingresa la contraseña si es requerida. Haz clic en Configure & Restart para finalizar como se muestra a continuación. Luego espera alrededor de 30 segundos para cambiar de modo.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Station_mode.jpg)

**5.** Ejecuta PuTTy y conéctate al sistema con el adaptador USB a Serial como se muestra en la sección anterior.

**6.** Escribe ifconfig y encuentra la dirección IP de inet addr como se muestra a continuación:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/IFCONFIG.jpg)

:::note
    Seguirá entrando en modo Station después de reiniciar el sistema. Presiona el botón wi-fi al menos 5 segundos para volver al modo AP. Nota: Será necesario reiniciar el OS embebido usando el comando reboot.
:::
**7.** Escribe la IP en una nueva pestaña del navegador y puedes iniciar sesión en la interfaz de usuario Web para configurar el sistema.

**8.** Ahora tanto la computadora host como el LinkIt Smart 7688 están conectados a internet. Escribe ping [www.mediatek.com](https://www.mediatek.com/) en la consola y obtendrás:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Ping_result.jpg)

**9.** Ahora puedes usar internet para configurar tu sistema en la placa de desarrollo.

### Instalando el entorno de programación Arduino

Esta placa de desarrollo tiene características que son compatibles con Arduino. Así que puedes aplicar tu código Arduino a las plataformas 7688 lo que hace que el proceso de prototipado sea más rápido. En esta sección, te mostraremos cómo construir un entorno de programación Arduino.

#### Descargar e instalar Arduino IDE

Puedes [instalar Arduino IDE 1.6.5](https://www.arduino.cc/en/Main/Software) en tu computadora.

Configurar Arduino IDE para la Plataforma LinkIt Smart 7688

#### Instalando el paquete de soporte de placa desarrollado

Arduino IDE 1.6.5 soporta integración de placas de terceros usando la herramienta **Board Manager**. La placa de desarrollo LinkIt Smart 7688 es un plug-in para Arduino IDE y necesitarás instalar el paquete de placa para que Arduino soporte la placa LinkIt. Por favor sigue los pasos a continuación:

**1.** En Arduino IDE, en el menú File haz clic en Preferences luego inserta

```
http://download.labs.mediatek.com/package_mtk_linkit_smart_7688_index.json
```

al campo URLs adicionales del Gestor de Placas:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_package.jpg)

**2.** Asegúrate de que tu computadora esté conectada a internet. [Descarga](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt.zip) **LinkIt**, descomprímelo y copia los archivos en la carpeta **packages** que se encuentra en la misma ubicación que el archivo **Preferences.txt**. Haz clic en la sección marcada con el rectángulo rojo siguiente para abrir la ubicación del archivo **Preferences.txt**.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_preferences.txt_location_s.jpg)

**3.** En el menú **Herramientas** de Arduino apunta a **Placa**.

**4.** Ahora debería aparecer un elemento LinkIt Smart 7688 en la lista de placas del Gestor de Placas y elige el puerto con **COMxx** (**LinkIt Smart 7688 Duo**).

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_SDK.jpg)

**5.** La instalación está completa.

### Instalación del Controlador del Puerto COM de LinkIt Smart 7688 Duo

Después de instalar el paquete de la placa, conecta LinkIt Smart 7688 Duo a tu computadora y deberías ver un puerto COM serie USB en el administrador de dispositivos con el siguiente ID de puerto:

- Puerto COM del cargador de arranque: VID=0x0E8D, PID=0xAB00
- Puerto COM del Sketch de Arduino: VID=0x0E8D, PID=0xAB01

A continuación, necesitarás instalar controladores dependiendo de tu sistema operativo. Los pasos son:

:::note
    Para Windows 10, no es necesario instalar un controlador. Sin embargo, se necesitan pasos adicionales para asegurar que Windows 10 reconozca la placa. Conecta LinkIt Smart 7688 Duo a tu máquina Windows 10, luego presiona rápidamente el botón de reinicio del MCU dos veces dentro de 700 milisegundos. El sistema ahora debería reconocer LinkIt Smart 7688 Duo como un Dispositivo Serie USB (COM5). El número 5 puede ser diferente en diferentes máquinas. Solo necesitas hacer esto la primera vez que la placa se conecte a tu máquina Windows.
:::
:::note
    Para Windows 8, el sistema puede bloquear la instalación del controlador. Sigue este enlace para saber cómo deshabilitar la aplicación de firma de controladores en Windows 8. Después de que la aplicación de firma esté deshabilitada, sigue los pasos en Windows 7 a continuación para instalar el controlador.
:::
:::note
    Para Windows 7, encuentra el controlador INF del puerto COM Serie en la siguiente ruta. También puedes instalarlo desde aquí.
`<Ubicación de Preferencias del IDE de Arduino>`Arduino15/packages/LinkIt/hardware/avr/0.1.5/driver/linkit_smart_7688.inf
:::
Encontrarás la ubicación de preferencias de Arduino en **Archivo -> Preferencias**, ve la **ruta de preference.txt**.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Preference_location.jpg)

Haz clic derecho en linkit_smart_7688.inf y selecciona instalar, aparece una ventana de seguridad y **haz clic en Instalar este software de controlador de todos modos**. Esto completa la instalación del controlador.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Driver_inst_alert.jpg)

- Para Ubuntu Linux, debería funcionar sin instalar un controlador. LinkIt Smart 7688 debería estar en la carpeta /dev y montado como ttyUSB0. El número 0 puede ser diferente en cada máquina Ubuntu.
- Para OS X, tampoco se requiere instalar un controlador, LinkIt Smart 7688 Duo se monta como un dispositivo serie bajo /dev/tty.usbmodem1413. El número 1413 puede ser diferente en cada máquina OS X.

## Demo: Un ejemplo de Hello world

:::note
    Para evitar quedarse sin memoria durante el desarrollo de aplicaciones nativas, deberías configurar el entorno de desarrollo de aplicaciones nativas en un entorno host más potente que te permita compilar de forma cruzada el formato ejecutable del objetivo LinkIt Smart 7688. La siguiente tabla muestra una visión general de los lenguajes de programación del LinkIt Smart 7688 y los entornos de desarrollo relacionados en el ordenador host.
:::
### Python

**1.** Usa FileZilla y consulta este [tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29), la dirección IP del servidor (reemplaza **host name**) es la inet addr encontrada en la sección anterior [Cambiar a modo Station](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode), el nombre de usuario es root y la contraseña es la contraseña que estableciste en esa sección.

**2.** Abre un editor de texto, copia y pega el código de ejemplo de abajo y guárdalo como **helloworld.py**.

```
print "Hello World!"
```

**3.** Copia el archivo **helloworld.py** al sistema en el entorno de desarrollo objetivo (LinkIt Smart 7688) con FileZilla, colócalo bajo la carpeta **root**.

**4.** Ejecuta PuTTy y conéctate al sistema con el adaptador USB a Serial.

**5.** Establece el directorio de trabajo en **/root** e ingresa **python helloworld.py** para ejecutar.

**6.** ¡Ahora puedes ver **Hello World**! impreso en la consola.

### Arduino

#### En la computadora host (lado Arduino)

El lado del MCU está escrito como un sketch de Arduino. En este ejemplo, el sketch simplemente escucha el comando enviado desde el lado MPU (Linux) y cambia el LED integrado en consecuencia.

**1.** Primero, conecta el LinkIt Smart 7688 Duo a tu PC, luego abre Arduino IDE y pega el siguiente código de sketch en el IDE:

```
void setup() {
    Serial.begin(115200); // open serial connection to USB Serial port (connected to your computer)
    Serial1.begin(57600); // open internal serial connection to MT7688
    // in MT7688, this maps to device
    pinMode(13, OUTPUT);
}
void loop() {
    int c = Serial1.read(); // read from MT7688
    if (c != -1) {
        switch(c) {
        case '0': // turn off D13 when receiving "0"
            digitalWrite(13, 0);
            break;
        case '1': // turn off D13 when receiving "1"
            digitalWrite(13, 1);
            break;
        }
    }
}
```

**2.** Luego elige el puerto COM correcto desde el IDE (verifica tu administrador de dispositivos) haciendo clic en **Tools -> Port**.

**3.** Sube el sketch a la placa. Nota que la placa aún no está parpadeando - necesitarás escribir un programa en el lado de Linux para hacerla parpadear, que es el siguiente paso.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Blink_in_arduino.jpg)

#### En la placa de desarrollo (lado Linux)

**1.** Usa un editor de texto de tu elección y crea un nuevo archivo (un archivo Python), luego copia el siguiente código y guárdalo.

```
import serial
import time
s = None
def setup():
    global s
# open serial COM port to /dev/ttyS0, which maps to UART0(D0/D1)
# the baudrate is set to 57600 and should be the same as the one
# specified in the Arduino sketch uploaded to ATmega32U4.
s = serial.Serial("/dev/ttyS0", 57600)
def loop():
# send "1" to the Arduino sketch on ATmega32U4.
# the sketch will turn on the LED attached to D13 on the board
s.write("1")
time.sleep(1)
# send "0" to the sketch to turn off the LED
s.write("0")
time.sleep(1)
if __name__ == '__main__':
setup()
while True:
loop()
```

**2.** Ejecuta este programa Python en la consola del sistema - este programa básicamente escribe una cadena de 1 y 0 al puerto /dev/ttyS0 que se mapea a la interfaz Serial1 en Arduino. El sketch de Arduino que fue subido en la sección anterior recibirá la cadena y luego hará parpadear el LED integrado en consecuencia.

Ahora puedes extender el sketch de Arduino para controlar otros dispositivos como PWM, dispositivos I2C y sincronizar los estados extendiendo los mensajes de comando entre Arduino y el lado de Linux. Si necesitas incluir más tipos de periféricos, puedes usar algunas librerías externas para implementar el protocolo de comunicación. Uno de estos protocolos - Firmata se describe en la siguiente sección.

## Preguntas Frecuentes

[Aquí](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq) están las preguntas frecuentes de Mediatek.

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/317080023_DIP_Module;LinkIt_Smart_7688_Duo;2x20P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Archivos de esquemáticos de hardware](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Hardware_Schematics.zip)
- [Manual](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Manual.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
- [Recursos de MediaTek LinkIt? Smart 7688:](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
- [Cómo flashear el firmware a través de una unidad USB](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Linkit_Smart_7688_DUO_Firmware.pdf)
- [Certificados](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt_Smart_7688_Duo-Certificate.zip)
- [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## Proyecto

**Monitoreo Inteligente del Hogar Basado en Alexa**: ¿Estás en tu oficina y quieres saber sobre tu hogar? ¡Controla tus dispositivos domésticos y recibe alertas sobre el hogar sin importar dónde te encuentres!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adithya-tg/alexa-based-smart-home-monitoring-e36b7f/embed' width='350'></iframe>

**Lámpara Inteligente DIY - Controlada por Interruptor de Palanca y Alexa**: Construye una lámpara inteligente que puede ser controlada accionando un interruptor y Alexa, por solo $35.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/darian-johnson/diy-smart-lamp-controlled-by-toggle-switch-and-alexa-7de243/embed' width='350'></iframe>

**ReRouter - Crea un Router IoT Extensible**: Integra una impresora a mi Router, para que mi abuelo o yo podamos escribir cosas en una página web y hacer que la impresora las imprima.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/seeed-studio/rerouter-make-an-extensible-iot-router-12f1e3/embed' width='350'></iframe>

**Controlador de acuario IOT**: Un controlador de acuario impreso en 3D de código abierto con capacidades IOT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/roroid/iot-aquarium-controller-448dac/embed' width='350'></iframe>

**Iluminación Inteligente y Notificaciones**: Usando un MediaTek LinkIt Smart 7688 Duo para conectar de forma inalámbrica LEDs inteligentes a tu sistema de automatización del hogar.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phigax/smart-lighting-and-notifications-1c8a1b/embed' width='350'></iframe>

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
