---
description: NPi i.MX6ULL Dev Board - Linux SBC
title: NPi i.MX6ULL Dev Board - Linux SBC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/NPi-i.MX6ULL-Dev-Board-Linux-SBC
last_update:
  date: 2/15/2023
  author: jianjing Huang 
---
<!-- ---
name: NPi i.MX6ULL Dev Board - Linux SBC
category: Single Board Computer 
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html
wikiurl:
sku: 102991306(emmc)
sku: 102991306(NANO)
--- -->

# NPi i.MX6ULL Dev Board - Linux SBC

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/preview_3.jpg)

La NPi i.MX6ULL Dev Board es una computadora de placa única Linux de bajo consumo de energía construida alrededor del potente i.MX6ULL. Te encantarán los 512MB DDR3L y 512MB NAND integrados, sin mencionar las ricas interfaces y recursos de E/S.

Al mismo tiempo, te proporcionamos una gran cantidad de recursos de software. Puedes encontrar imágenes de distribución del sistema debian/ubuntu/yocto [aquí](https://github.com/Seeed-Studio/image-builder). Mientras tanto, también proporcionamos muchos hats de Pi a nivel de kernel y aplicación. Por lo tanto, puedes colocar tu hat de Pi favorito directamente en esta placa para usarlo. La mayoría de los Pi Hats de SeeedStudio pueden funcionar con la NPi i.MX6ULL Dev Board (excepto NPi i.MX6ULL Dev Board 6-Mic Circular Array Kit for Raspberry Pi y NPi i.MX6ULL Dev Board 4-Mic Linear Array Kit for Raspberry Pi). También puedes usar nuestro Grove base PI Hat para prototipar lo que quieras con módulos Grove. Por favor síguenos en Github para las últimas actualizaciones de software.

Toda la placa está hecha por un módulo central y una placa de expansión, y los componentes son todos de grado industrial.

El módulo central está compuesto por el núcleo i.MX6ULL y 512MB DDR3L, 512MB NAND FLASH (u 8GB eMMC). De hecho, dependiendo de la Flash, la NPi i.MX6ULL Dev Board puede dividirse en dos versiones diferentes.

La placa de expansión incluye principalmente varias interfaces periféricas y entrada y salida, expansión de IO. Incluyendo pero no limitado a dos puertos ethernet de 100M, un puerto USB Host y un puerto USB OTG, una interfaz LCD RGB de 24 bits, 2x cabezales de expansión de E/S de 40 pines, etc. Tal riqueza de recursos satisfará tus diversas necesidades de control. Todas esas características la convierten en una solución perfecta para control industrial, tránsito ferroviario, control de drones y salida de audio, etc.

NPi i.MX6ULL Dev Board - Versión 8G eMMC:

[![Obtener Uno Ahora](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html)

NPi i.MX6ULL Dev Board - Versión 512MB NAND FLASH:

[![Obtener Uno Ahora](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html)

## Características

- Procesador de núcleo Arm-Cortex-A7
- Grado industrial
- Bajo consumo de energía
- SO debian/ubuntu/yocto
- Placa portadora compatible con 40 pines de Raspberry Pi.

## Especificación

|Elemento|Valores|
|----|------|
|Interfaz Periférica| 1 x USB Host<br />2 x interfaz Ethernet 100M<br />1 x interfaz FPC LCD (incluye RGB de 24 bits y control táctil I2C)<br />1 x interfaz de tarjeta SD (en la parte posterior de la placa)<br />1 x interfaz Uart<br />2 x conector de 40 pines|
|LED integrado|3 x LED definido por el usuario<br />1 x LED de alimentación<br />1 x LED de latido|
|Alimentación|1 x interfaz DC (5V±2%)<br />1 x USB Type - C|
|Botón|4 x tecla|
|Interruptor|1 X interruptor DIP de 8 dígitos|
|RTC|1 x ranura de batería RTC|
|CPU|1 X NXP MCIMX6Y2CVM08AB|
|Frecuencia|hasta 800Mhz|
|DDR3L|512MB integrado|
|eMMC|8GB integrado(NPi i.MX6ULL Dev Board - Versión 8G eMMC)|
|NAND|512M integrado(NPi i.MX6ULL Dev Board - Versión 512MB NAND FLASH)|
|dimensión|61mm x 100mm|
|Temperatura de funcionamiento(NPi i.MX6ULL Dev Board - Versión 8G eMMC)| -20℃ ~ 80℃ |
|Temperatura de funcionamiento(NPi i.MX6ULL Dev Board - Versión 512MB NAND FLASH)| -40℃ ~ 80℃ |

:::note
La temperatura de funcionamiento aquí se refiere específicamente al módulo Core, y el rango de temperatura de la Placa Breakout es más estrecho. No hemos probado el rango de temperatura específico de la Placa Breakout.
:::

## Aplicación

- Industrial (gateways CAN-Ethernet, etc.)
- Electrodomésticos (refrigeradores, ondas Type-c, etc.)
- Dispositivos de Hogar Inteligente

## Descripción General del Hardware

### Interfaz

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/NAND-over.jpg)

**Interfaz Ethernet 100M con LEDs**: 2 x interfaces Ethernet 100M

**Conector de Alimentación 5V**: Usar fuente de alimentación única de 5V ± 2%

**Indicador de protección contra sobretensión**: Cuando esta lámpara está encendida, indica que el voltaje está fuera del rango

**USB Device Type C**: Interfaz USB Type C

**UART TTL**: conexión directa desde el puerto serie del controlador principal

**LED de Latido**: La luz de latido parpadeará continuamente después de que el sistema esté funcionando

**LED de Alimentación**: el LED se encenderá cuando se alimente la placa.

**Conector Compatible con Raspberry Pi**: incluye UART, I2C, SPI, PWM y otras interfaces IO compatibles con Raspberry Pi

**Interfaz FPC LCD**: incluye interfaz RGB de 24 bits e interfaz de control de pantalla táctil I2C

**Botón de Reset y Usuario**: Hay 4 botones en total, que son reset, ON / OFF, botón normal y botón de cambio de Modo

**USB Host Type A**: Interfaz USB Host

**Interruptor DIP de 8 Dígitos**: Un interruptor DIP de 8 bits que soporta cambio entre modos de arranque NAND, eMMC, SD y USB

**Conector GPIO Extra**: Contiene un chip 74LV595PW, que expande un IO de 4 canales a 8 canales

**LED de Usuario**: LED programable

**Ranura de Batería RTC**: se puede conectar a la batería CR1220 para alimentar el RTC

**Ranura de Tarjeta SD Type-c**: Ranura de tarjeta SD Type-c, soporta tarjeta SD 3.0

### Función de Pines

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/eMMC-c.jpg)

Para más información puedes ir a [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para ver.

## Introducción al Software

### Trabajo Preparatorio

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC Versión NAND (o Versión eMMC)
- Tarjeta SD de 4GB (o más memoria) y lector de tarjetas SD
- PC o Mac
- [Adaptador USB a Uart](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (opcional)
- Un cable USB type-c

:::caution
Por favor conecta el cable USB suavemente, de lo contrario puedes dañar la interfaz. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic <a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>aquí</b></a> para comprar
:::

**Instalación de Imagen**

necesitas instalar la imagen NPi i.MX6ULL Dev Board - Linux SBC desde tu tarjeta SD para ponerla en funcionamiento. Ofrecemos dos formas de arrancar el NPi i.MX6ULL Dev Board - Linux SBC. Puedes arrancar desde la tarjeta SD o arrancar desde el eMMC (o NAND).

**A. Arrancar desde tarjeta SD**

- **Paso 1.** Selecciona el [firmware](https://files.seeedstudio.com/linux/NPi+i.MX6ULL/imx6ull-debian-buster-console-armhf-latest-2gb.img.xz) más reciente

- **Paso 2.** Conecta una tarjeta SD a una PC o MAC con un lector de tarjetas SD, se requiere una tarjeta SD con más de 4G de memoria.

- **Paso 3.** Haz clic aquí para descargar <a href="https://etcher.io/">Etcher</a>, luego usa Etcher para escribir el archivo ```*.img.xz``` directamente a la tarjeta SD. O extrae el archivo ```*.img.xz``` en un archivo ```*.img```, y luego grábalo en una tarjeta SD usando otra herramienta de escritura de imagen.
<br />

<br />Haz clic en el icono más para añadir el archivo de imagen recién descargado y el software seleccionará automáticamente la tarjeta SD que insertaste. Luego haz clic en Flash! para escribir. Toma aproximadamente 10 minutos terminar.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/etcher.png)

- **Paso 4.** Después de escribir la imagen a la tarjeta SD, inserta la tarjeta SD en NPi i.MX6ULL Dev Board - Linux SBC. Configura el interruptor DIP de 8 dígitos al modo 2-5-8 para habilitar el arranque desde SD.

- **Paso 5.** Usa el puerto USB type-c para alimentar la placa. No saques la tarjeta SD durante la escritura. NPi i.MX6ULL Dev Board - Linux SBC arrancará desde la tarjeta SD, puedes ver los LEDs PWR y Heartbeat encendidos en la Placa.

:::note
si el LED Heartbeat no puede parpadear, significa que el arranque falló. Por favor verifica si la imagen se instaló correctamente.
:::

**B. Arrancar desde tarjeta eMMC (NAND)**

- **Paso 1.** el proceso es el mismo que **A. Arrancar desde tarjeta SD** si inicias por primera vez el NPi i.MX6ULL Dev Board.

- **Paso 2.** Selecciona P22 en `fire-config` para habilitar el arranque flash luego reinicia.

```bash
sudo fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/flasher.png)

- **Paso 3.** Espera a que el LED en la NPi i.MX6ULL Dev Board parpadee continuamente. Esto indica que la grabación de eMMC (o NAND) es exitosa si el LED parpadea continuamente.

- **Paso 4.** Apaga y desconecta la tarjeta SD.

- **Paso 5.** Configura el interruptor DIP de 8 dígitos a EMMC(2-4-5-7) o NAND(2-3-6) y reinicia.

**Consola Serial**

Ahora que tu NPi i.MX6ULL Dev Board - Linux SBC puede arrancar, es posible que quieras obtener acceso al sistema Linux a través de una consola, para configurar el WiFi, etc.
<!-- Tienes dos formas de obtener la consola: -->

<!-- - A. El puerto USB OTG - Esto requiere un sistema Linux en funcionamiento en la placa -->

- B. El puerto UART - Esta es la forma difícil de acceder a la consola, puede usarse para depurar problemas de bajo nivel

<!-- **A. Conexión vía OTG**

- **Paso 1.** Encuentra un cable USB Type-c, y asegúrate de que sea un cable de datos (no solo un cable de alimentación), conecta el extremo USB Type-c al puerto USB Type-c de la NPi i.MX6ULL Dev Board, luego conecta el otro extremo de este cable a tu computadora.

- **Paso 2.** Verifica en tu computadora si el puerto serial ha aparecido:

    - Windows: verifica el administrador de dispositivos, debería haber un nuevo dispositivo serial llamado ```COMx``` donde x es un número creciente.
    - Linux: `ls /dev/ttyACM*`, deberías obtener ```/dev/ttyACMx``` donde x variará dependiendo de qué puerto USB usaste.
    - Mac: `ls /dev/cu.usb*`, deberías obtener ```/dev/cu.usbmodem14xx``` donde xx variará dependiendo de qué puerto USB usaste.

- **Paso 3.** Usa tu herramienta de depuración serial favorita para conectar el puerto serial, el serial tiene: velocidad de baudios 115200, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno. Por ejemplo:

    - Windows: usa [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecciona protocolo ```Serial```, completa el puerto COM correcto de NPi i.MX6ULL Dev Board - Linux SBC, ```115200``` baudios, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno.
    - Linux: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/ttyACM0(,1, y así sucesivamente)``` 115200 o ```screen /dev/ttyUSB0(,1, y así sucesivamente) 115200```
    - Mac: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/cu.usbserial1412(,1422, y así sucesivamente) 115200``` o ```screen /dev/cu.usbmodem1412(,1422, y así sucesivamente) 115200```

- **Paso 4.** El nombre de usuario predeterminado es ```debian```, y la contraseña es ```temppwd```. -->

**B. Conexión vía el puerto UART**

En esta sección te guiaremos sobre cómo establecer una conexión desde tu computadora a tu NPi i.MX6ULL Dev Board usando tu adaptador USB a TTL que se conectará al puerto Uart de la NPi i.MX6ULL Dev Board.

- **Paso 1.** Conecta el puerto Uart y tu PC/Mac con un Adaptador USB a TTL. Si no tienes un Adaptador USB a TTL, puedes hacer clic [aquí](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) para obtener uno.

- **Paso 2.** Usa las siguientes herramientas de depuración Serial con 115200 baudios:
  - Windows: usa [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecciona protocolo ```Serial```, completa el puerto COM correcto de NPi i.MX6ULL Dev Board - Linux SBC, 115200 baudios, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno. puedes ir a
  - Linux: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/ttyACM0(,1, y así sucesivamente) 115200``` o ```screen /dev/ttyUSB0(,1, y así sucesivamente) 115200```.
  - Mac: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/cu.usbserial1412(,1422, y así sucesivamente) 115200``` o ```screen /dev/cu.usbmodem1412(,1422, y así sucesivamente) 115200```.

- **Paso 3.** El nombre de usuario predeterminado es ```debian```, y la contraseña es ```temppwd```.

- **Paso 4.** Si no tienes un Adaptador USB a TTL, también puedes usar un Arduino. Si usas un Arduino, conecta un extremo de un cable puente al pin RESET en el Arduino y el otro extremo al pin GND en el Arduino. Esto omitirá el MCU ATMEGA de tu Arduino y convertirá tu Arduino en un adaptador USB a TTL, ve el tutorial en video [aquí](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Ahora conecta el pin GND en el Arduino al pin GND en el puerto Uart de la NPi i.MX6ULL Dev Board. Conecta el pin Rx en el Arduino al pin Rx en el puerto Uart de la NPi i.MX6ULL Dev Board. Conecta el pin Tx en el Arduino al pin Tx en el puerto Uart de la NPi i.MX6ULL Dev Board. Y por último, conecta el Arduino a tu PC/Mac a través del cable USB del Arduino. Ahora verifica que tu Mac o PC Linux encuentre tu Arduino escribiendo este comando:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

Deberías obtener algo como:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Ahora sigue el paso anterior para conectarte a tu NPi i.MX6ULL Dev Board a través de esta conexión serie.

### Control de Pines

en esta sección te guiaremos sobre cómo controlar los PINES que están en la NPi i.MX6ULL Dev Board usando el shell. Ten en cuenta que debes usar permisos de root para que el comando funcione

```bash
su root
username root password root
```

#### GPIO

En esta sección, explicaremos el principio de control del programa de capa de aplicación relacionado con el controlador del subsistema GPIO de Linux. Ahora controlaremos el Grove - Buzzer para mostrarte cómo usarlo.

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer.html)

- **paso 1.** Configurar GPIO 19 para exportar en /sys/class/gpio.

```
echo 19 > /sys/class/gpio/export
```

La ubicación del GPIO 19 de la NPi i.MX6ULL Dev Board puedes usar [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para verla. El número de pin que obtienes es GPIOx_IOn. necesitas la siguiente fórmula para convertir al índice de gpio.

```
index = GPIO1_IO19 = (1-1)*32 + 19 = 19
index = GPIO4_IO20 = (4-1)*32 + 20 = 116
```

- **paso 2.** Conecta Grove - Buzzer al GPIO 19 en la placa de desarrollo NPi i.MX6ULL con el cable de conversión Grove - 4 pines hembra Jumper a Grove 4 pines.

- **paso 3.** Configura el GPIO 19 al modo de salida

```
echo out > /sys/class/gpio/gpio19/direction
```

- **paso 4.** Configurar GPIO 19 a alto

```
echo 1 > /sys/class/gpio/gpio19/value
```

finalmente, escucharás el sonido que hace el Grove - Buzzer. mientras tanto, sobre el sysfs de gpio necesitarás este [enlace](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt) para obtener más información.

#### ENTRADA

En esta sección, explicaremos el principio de control del programa de capa de aplicación relacionado con el controlador del subsistema de entrada de Linux. Ahora usaremos el `Botón KEY` de la NPi i.MX6ULL Dev Board para mostrarte cómo usarlo.

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC Versión NAND (o Versión eMMC)

**Software**

- **paso 1.** Instala `evtest` para obtener el estado del `Botón KEY`.

```
apt install evtest -y
```

- **paso 2.** Verificar si el `Botón KEY` existe en /dev/input/by-path.

```
root@npi:~# ls -lh /dev/input/by-path
total 0
lrwxrwxrwx 1 root root 9 Feb 14  2019 platform-gpio-keys-event -> ../event0
```

Necesitas ajustar el árbol de controladores si no puedes obtener este resultado.

- **paso 3.** Usa `evtest` para obtener el estado del `KEY Button`. Ten en cuenta que la NPi i.MX6ULL Dev Board tiene cuatro botones que controlan diferentes funciones. solo necesitas controlar el `KEY Button`.

```
root@npi:~# evtest
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:      gpio-keys
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "gpio-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 11 (KEY_0)
Properties:
Testing ... (interrupt to exit)
Event: time 1583478811.552488, type 1 (EV_KEY), code 11 (KEY_0), value 1
Event: time 1583478811.552488, -------------- SYN_REPORT ------------
Event: time 1583478811.752195, type 1 (EV_KEY), code 11 (KEY_0), value 0
Event: time 1583478811.752195, -------------- SYN_REPORT ------------
```

#### UART

En esta sección, explicaremos el uso básico del puerto serie y el equipo terminal. Ahora controlaremos el uart3 para mostrarte cómo usarlo.

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(o eMMC Version)
- PC o Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)

**Software**

- **paso 1.** Selecciona P17 en `fire-config` para habilitar uart3  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/fire-config-uart3-enable.png)

Obtendrás el siguiente comando si se habilitó exitosamente.

```
root@npi:~# ls /dev/ttymxc2
/dev/ttymxc2
```

- **paso 2.** Configurar uart3 usando stty

```
stty -F /dev/ttymxc2 ispeed 115200 ospeed 115200
```

- **paso 3.** Visita el [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para encontrar el número de pin de uart3 de la NPi i.MX6ULL Dev Board.

- **Paso 4.** Conecta Uart3 a tu PC/Mac con un Adaptador USB a TTL. Si no tienes un Adaptador USB a TTL, puedes hacer clic [aquí](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) para obtener uno.

- **Paso 5.** Usa las siguientes herramientas de depuración serie con 115200 baudios:
  - Windows: usa [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecciona el protocolo ```Serial```, completa el puerto COM correcto de la NPi i.MX6ULL Dev Board - Linux SBC, 115200 baudios, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno.puedes ir a
  - Linux: Dependiendo de tu Adaptador USB a TTL, podría ser ```screen /dev/ttyACM0(,1, y así sucesivamente) 115200``` o ```screen /dev/ttyUSB0(,1, y así sucesivamente) 115200```.
  - Mac: Dependiendo de tu Adaptador USB a TTL, podría ser ```screen /dev/cu.usbserial1412(,1422, y así sucesivamente) 115200``` o ```screen /dev/cu.usbmodem1412(,1422, y así sucesivamente) 115200```.

- **Paso 6.** Usa el siguiente comando para probar el envío y recepción de datos:

```
echo seeedstduio > /dev/ttymxc2
```

finalmente, obtendremos la cadena 'seeedstduio' en putty si la conexión es exitosa.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/putty_recive.png)

#### I2C

En esta sección, explicaremos el principio de control del programa de capa de aplicación relacionado con el controlador i2c de Linux. Ahora usaremos i2c1 y Grove - Sensor de Barómetro (BMP280) para explicarte cómo usarlo.

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC Versión NAND (o Versión eMMC)
- [Grove - Cable de Conversión de Jumper Hembra de 4 pines a Grove de 4 pines](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Sensor Ambiental BME280 (Temperatura Humedad Barómetro)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

**Software**

**paso 1.** Instala las i2c-tools usando apt

```
apt install i2c-tools -y
```

**paso 2.** Visita el [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para encontrar el número de pin de I2C1 de la NPi i.MX6ULL Dev Board.

**paso 3.** Conecta Grove - BME280 al I2C1 en la NPi i.MX6ULL Dev Board con Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable.

**paso 4.** Detecta la dirección I2C del Grove - BME280 usando
`i2cdetect`. 0 significa i2c1, así que si quieres detectar i2c2 necesitas usar `i2cdetect -y 1` para detectar.

```
root@npi:~# i2cdetect -y 0
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- 77
```

Ahora, podemos encontrar que la dirección I2C del Grove - BME280 es 0x77.

**paso 5.** Obtener el ID del Grove - BME280 usando i2cget

```
root@npi:~# i2cget -y 0 0x77 0xD0
0x58
```

Finalmente, podemos obtener 0x58 que es el ID del Grove - BME280. Y para más información sobre el Grove - BME280 puedes visitar [wiki](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BME280/) para aprender. El uso de i2c-tool puedes verlo en [enlace](https://www.mankier.com/package/i2c-tools)

#### ADC

En esta sección, explicaremos el principio de control del programa de capa de aplicación relacionado con el controlador ADC de Linux. Ahora usaremos ADC1 y Grove - Rotary Angle Sensor para mostrarte cómo usarlo.

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(o eMMC Version)
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)

**Software**

- **paso 1.** Selecciona P12 en `fire-config` para habilitar ADC1  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/enable-adc.png)

Obtendrás el siguiente comando si se habilitó exitosamente.

```
root@npi:~# ls /sys/bus/iio/devices/iio\:device0
buffer              in_voltage3_raw                sampling_frequency_available
dev                 in_voltage_sampling_frequency  scan_elements
in_conversion_mode  in_voltage_scale               subsystem
in_voltage0_raw     name                           trigger
in_voltage1_raw     of_node                        uevent
in_voltage2_raw     power
```

- **paso 2.** Visita el [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para encontrar el número de pin de ADC1 de la NPi i.MX6ULL Dev Board. Puedes encontrar el número GPIO como se muestra en la siguiente imagen.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/adc-pin-map.png)

**paso 3.** Conecta Grove - Rotary Angle Sensor al ADC1 en la NPi i.MX6ULL Dev Board con Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable.

**paso 4.** Obtén los datos AD del Grove - Grove - Rotary Angle Sensor.

```
root@npi:~# cat /sys/bus/iio/devices/iio\:device0/\\in_voltage3_raw
82
```

Consulte la información anterior para aprender que estamos leyendo el valor analógico de los pines GPIO1_IO3.

#### SPI

En esta sección, explicaremos el principio de control del programa Linux SPI. Ahora usaremos SPI y 2-Channel CAN-BUS(FD) Shield for Raspberry Pi para mostrarle cómo usarlo.

**Materiales Requeridos**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(o eMMC Version)
- [2-Channel CAN-BUS(FD) Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)

**Software**

- **Paso 1.** Según la [guía de instalación](https://wiki.seeedstudio.com/es/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) inserte 2 Channel CAN BUS FD Shield for Raspberry Pi en NPi i.MX6ULL Dev Board.

- **Paso 2.** Seleccione P23 en fire-config para expandir Filesystem.

```bash
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/ExpandSDCard.png)

- **Paso 3.** Instalar dependencias sobre seeed-linux-dtoverlays

```bsah
apt install -y make git device-tree-compiler linux-headers-$(uname -r) gcc
```

- **Paso 4.** Crear e instalar el controlador de NPi i.MX6ULL Dev Board desde `seeed-linux-dtverlays` en GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_imx6ull && make install_imx6ull
```

:::note
Puedes usar mkdir -p /lib/modules/$(uname -r)/extra/seeed para crear archivos si encuentras algún error durante la compilación.
:::

- **Paso 5.** añade el paquete dtbo en `/boot/uEnv.txt` para que se haga efectivo después del reinicio.

```bash
echo dtoverlay=/lib/firmware/imx-MCP2517FD-can0-overlay.dtbo >> /boot/uEnv.txt
reboot
```

- **Paso 6.** Verifica si el controlador se instaló correctamente usando `dmesg`, verás la información a continuación si fue exitoso.

```bash
root@npi:~ insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
root@npi:~ dmesg | grep spi
[    1.057609] spi_imx 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

root@npi:~ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

Puedes encontrar más información sobre el 2-Channel CAN-BUS(FD) Shield visitando [wiki](https://wiki.seeedstudio.com/es/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#install-can-hat)

#### IIS

En esta sección, explicaremos el principio de control del programa IIS de Linux. Ahora usaremos IIS y ReSpeaker 2-Mics Pi HAT para mostrarte cómo usarlo.

**Materiales Requeridos**

- Placa de Desarrollo NPi i.MX6ULL - Versión Linux SBC NAND (o Versión eMMC)
- [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

**Software**

- **Paso 1.** Según la [guía de instalación](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/#getting-started) inserta ReSpeaker 2-Mics Pi HAT en NPi i.MX6ULL Dev Board.

- **Paso 2.** Instala alsa-utils usando `apt`

```bash
sudo apt install alsa-utils -y
```

- **Paso 3.** añadir el paquete dtbo en `/boot/uEnv.txt` para que se haga efectivo después del reinicio.

```bash
sudo sh -c  "echo dtoverlay=/lib/firmware/imx-seeed-voicecard-2mic-overlay.dtbo >> /boot/uEnv.txt"
```

:::note
Necesitas ver la guía de SPI para instalar las dependencias sobre el imx-seeed-voice card-2 mic-overlay.dtbo si no puedes encontrar imx-seeed-voice card-2mic-overlay.dtbo.
:::

- **Paso 4.** Verifica si el controlador se instaló correctamente usando `aplay`, verás la información de abajo si fue exitoso.

```sh
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/snd-soc-seeed-voicecard.ko
debian@npi:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **Paso 5.** Entra en la carpeta `seeed-linux-dtverleys` y configura soundstate como sigue:

```sh
debian@npi:~$ cd seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound.state /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **Paso 6.** ¡Ahora puedes empezar a jugar con ReSpeaker 2-Mics Pi Hat! Para pruebas simples de grabación y reproducción, ejecuta el siguiente comando:

1. Para grabar un audio a `test.wav`:

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. Para reproducir el audio `test.wav`. Recuerda conectar unos auriculares o un altavoz para la salida de audio.

```sh
aplay -Dhw:0 -r 48000 test.wav
```

Para más información sobre el ReSpeaker 2-Mics Pi HAT puedes visitar [wiki](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/)

## Recursos

-----

- **[PDF]** [Hoja de datos i.MX 6ULL](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/IMX6ULLCEC.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Dimensiones Mecánicas SBC Linux](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/Mechanical_Dimensions.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Placa de Expansión SBC Linux](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Breakout-Board-Schematic-V1.0.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Módulo Central SBC Linux](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Core-Module-Schematic-V1.0.pdf)
- **[URL]** [Desarrollo avanzado de sistemas](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL)

## NPi i.MX6ULL Desarrollo avanzado de sistemas

- [Disponibilidad](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Availability)
- [Documentación del Proveedor](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-VendorDocumentation)
- [Requisitos Básicos](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-BasicRequirements)
- [Compilador Cruzado ARM: GCC](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-ARMCrossCompiler:GCC)
- [Cargador de Arranque: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Bootloader:U-Boot)
- [Kernel de Linux](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-LinuxKernel)
- [Sistema de Archivos Raíz](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Ubuntu20.04LTS)
- [Configurar tarjeta microSD](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-SetupmicroSDcard)
- [Instalar Kernel y Sistema de Archivos Raíz](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-InstallKernelandRootFileSystem)
- [Copiar Sistema de Archivos Raíz](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyRootFileSystem)
- [Establecer uname_r en /boot/uEnv.txt](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Setuname_rin/boot/uEnv.txt)
- [Binario del Árbol de Dispositivos](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-DeviceTreeBinary)
- [Copiar Imagen del Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelImage)
- [Copiar Binarios del Árbol de Dispositivos del Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelDeviceTreeBinaries)
- [Copiar Módulos del Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelModules)
- [Tabla de Sistemas de Archivos (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-FileSystemsTable(/etc/fstab))
- [Retirar tarjeta microSD/SD](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RemovemicroSD/SDcard)
- [Comentarios](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Comments)

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
