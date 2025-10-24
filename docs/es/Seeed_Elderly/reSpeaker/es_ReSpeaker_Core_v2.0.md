---
description: ReSpeaker Core v2.0
title: ReSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Core_v2.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

El ReSpeaker Core v2.0 de Seeed está diseñado para aplicaciones de interfaz de voz. Está basado en el Rockchip RK3229, un ARM Cortex A7 de cuatro núcleos, funcionando hasta 1.5GHz, con 1GB de RAM. La placa cuenta con un arreglo de seis micrófonos con algoritmos de voz incluyendo DoA (Dirección de Llegada), BF (Formación de Haz), AEC (Cancelación de Eco Acústico), etc.

ReSpeaker Core v2.0 ejecuta un sistema operativo GNU/Linux. Se beneficia de una comunidad poderosa y activa que permite el uso de software y herramientas existentes para desarrollo, pruebas y despliegue, habilitando un desarrollo rápido de productos.

ReSpeaker Core v2.0 está diseñado como una placa de desarrollo rica en características para que las empresas evalúen. Con este fin, la placa consiste en dos secciones principales, la primera siendo el módulo núcleo central que contiene la CPU, Memoria (RAM) y PMU. La segunda sección es la placa portadora externa que contiene los periféricos como el eMMC, conectores y componentes de conectividad inalámbrica. Cualquiera de las secciones o ambas pueden ser personalizadas a través de los servicios de personalización de Seeed.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## Características

- Solución Todo-en-Uno con SoC de Alto Rendimiento
- 1GB RAM y 4GB eMMC
- Arreglo de 6 Micrófonos  
- USB OTG, dispositivo USB
- WiFi b/g/n y BLE 4.0
- Rango de detección: ~5 metros
- Conector Grove para otros sensores
- Conector de audio de 3.5mm y conector JST2.0
- 8 ADCs de canal para arreglo de 6 micrófonos y 2 loopback (loopback por hardware)

- Sistema Linux basado en Debian
- SDK de C++ y wrapper de Python
- SDK para algoritmo de voz con documentación completa
- Algoritmos y características de voz:

  - Activación por palabra clave
  - BF(Formación de Haz)
  - DoA (Dirección de llegada)
  - NS(Supresión de ruido)
  - AEC (Cancelación de eco acústico) y AGC (Control automático de ganancia)

## Especificaciones

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-dc35{background-color:#f9f9f9;border-color:inherit;vertical-align:top}
.tg .tg-l711{border-color:inherit}
.tg .tg-us36{border-color:inherit;vertical-align:top}
.tg .tg-4646{background-color:#f9f9f9;border-color:inherit}
.tg .tg-gcw3{border-color:#000000}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-gcw3" colSpan={3}>Características</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>Soc(Rockchip RK3229)</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">Cortex-A7 de Cuatro Núcleos, hasta 1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP, Soporta OpenGL ES1.1/2.0</td>
    </tr>
    <tr>
      <td className="tg-dc35">Memoria</td>
      <td className="tg-dc35">1GB RAM(El Módulo Núcleo incluye RAM y PMU)</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>Sistema</td>
      <td className="tg-us36">Voltaje de Operación:3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">80 pines en módulo</td>
    </tr>
    <tr>
      <td className="tg-us36">PMU en módulo</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>Periférico</td>
      <td className="tg-dc35">Redes</td>
      <td className="tg-dc35">WiFi b/g/n;<br />BLE 4.0;<br />Ethernet</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USB Host;   1 x USB OTG;    1 x USB power</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x conector Grove (I2C y Digital)</td>
    </tr>
    <tr>
      <td className="tg-us36">Video</td>
      <td className="tg-us36">Decodificación de video 4K VP9 y 4K 10bits H265/H264, hasta 60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">Audio</td>
      <td className="tg-dc35">Frecuencia de Muestreo Máxima: 96Khz;<br />Arreglo de 6 Micrófonos;<br />Conector de Audio de 3.5mm;<br />Conector de salida de audio JST2.0</td>
    </tr>
    <tr>
      <td className="tg-us36">Almacenamiento</td>
      <td className="tg-us36">4GB eMMC integrado;<br />Ranura SD</td>
    </tr>
    <tr>
      <td className="tg-dc35">Otros</td>
      <td className="tg-dc35">12 x LEDs RGB;<br />8 pines GPIO</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>Consumo de Energía</td>
      <td className="tg-us36">Modo Standby</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">Trabajo con Modo Algoritmo</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    Esta tabla solo enumera las especificaciones básicas del ReSpeaker Core v2.0, para parámetros más profesionales consulte [Especificación Acústica y Eléctrica del ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf).
:::

## Descripción General del Hardware

**Interfaz y almacenamiento**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> Conector de auriculares de 3.5mm:**
Salida de audio. Puedes conectar altavoces activos o auriculares a este puerto.

- **<font face="" size="3" font color="ff0000">②</font> USB OTG:**
Este puerto USB se utiliza para conectar a tu computadora a través del modo serie de putty (u otras herramientas serie).

- **<font face="" size="3" font color="ff0000">③</font> Entrada de alimentación USB:**
Este puerto se utiliza para proporcionar energía al Respeaker Core v2.0.

- **<font face="" size="3" font color="ff0000">④</font>**Conector de altavoz:**
Salida de audio para altavoces pasivos. Socket Jst 2.0.

- **<font face="" size="3" font color="ff0000">⑤</font> UART:**
También puedes conectar el ReSpeaker Core v2.0 con tu computadora a través de este puerto UART.

- **<font face="" size="3" font color="ff0000">⑥</font> 8 Pines GPIO:**
Interfaz de Entrada y Salida de Propósito General para aplicaciones extendidas.

- **<font face="" size="3" font color="ff0000">⑦</font> Ranura para tarjeta SD:**
Para insertar tarjeta micro-SD.

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC:**
Tarjeta Multimedia Integrada. Puedes grabar la imagen en eMMC, para que el ReSpeaker Core v2.0 pueda arrancar desde el eMMC.

- **<font face="" size="3" font color="ff0000">⑨</font> Host USB:**
Puedes conectar dispositivos USB, como ratón USB, teclado USB y memoria USB al ReSpeaker Core v2.0 a través de estos dos hosts USB.

- **<font face="" size="4" font color="ff0000">Ⓐ</font> Ethernet:**
Acceso a Internet.

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI:**
Salida de video.

- **<font face="" size="4" font color="ff0000">Ⓒ</font> Antena Bluetooth y WIFI:**
La antena integrada es para WIFI y Bluetooth. También proporcionamos una interfaz para antena 2.4G o antena PCB.

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Socket Grove:**
Socket Grove para digital o I2C.

**Diagrama del Sistema**

Puedes hacer clic para ver la imagen original

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**Distribución de Pines**

**Definición del índice de pines para conectores**

| Conector de 8 pines | Socket Grove |
|--------------|-------------|
| ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/GPIO.png)|![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/socketBLACK.png)|

**Pines GPIO**

MRAA| ÍNDICE PIN HEADER | PIN SYSFS |PIN RK3229
--|--|--|--
0 |0| 1091| GPIO2_D3
1 |1|   --| VCC
2 |2| 1043| GPIO1_B3
3 |3| 1127| GPIO3_D7
4 |4| 1017| GPIO0_C1
5 |5| 1067| GPIO2_A3
6 |6|   --| GND
7 |7| 1013| GPIO0_B5
8 |8| 1085| GPIO2_C5
9 |9| 1084| GPIO2_C4
10|10| --| VCC
11|11| --| GND

**Pines I2C**

|MRAA |ÍNDICE PIN HEADER |PIN SYSFS| PIN RK3229|
|--|--|--|--|
|0 |8 |-- |I2C2_SCL|
|0 |9 |-- |I2C2_SDA|

**Dimensiones**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_2.png)

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=10325e7b-718b-477f-80d1-c85f5c2289c7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Aplicaciones

- Altavoz inteligente
- Sistemas de asistente de voz inteligente
- Grabadoras de voz
- Sistema de conferencias de voz
- Equipo de comunicación para reuniones
- Robot de interacción por voz
- Asistente de voz para automóvil
- Otros escenarios que necesiten comando de voz

## Primeros Pasos

### Preparación

Esta parte te dirá:

- Cómo instalar la imagen
- Cómo acceder a la consola serie
- Cómo configurar WiFi
- Cómo conectarse a SSH y VNC
- Cómo configurar Bluetooth
- Prueba de grabación y reproducción de audio

**Prerrequisitos**

- ReSpeaker Core V2.0
- Red Wi-Fi
- Tarjeta SD de 4GB (o más) y lector de tarjetas SD
- PC o Mac
- [Adaptador USB a Uart](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (Opcional)
- Adaptador Micro USB de 5V 1A para alimentación (Opcional)
- dos cables Micro-USB

:::caution
Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar la interfaz. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>aquí</b></a> para comprar
:::

**Instalación de Imagen**

Similar al Raspberry Pi, necesitas instalar la imagen del ReSpeaker Core v2.0 desde una tarjeta SD para empezar a funcionar. Ofrecemos dos formas de arrancar el Respeaker core v2.0. Puedes arrancar desde la tarjeta SD o arrancar desde el eMMC.

**A. Arrancar desde la tarjeta SD**

- **Paso 1.** Haz clic en [mirror-azure](http://respeaker.seeed.io/images/) para descargar nuestros archivos zip de imagen más recientes: ```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` o ```respeaker-debian-9-iot-sd-********-4gb.img.xz```.

|Sección|Descripción|
|---|----|
|**iot** / **lxqt**|La versión **lxqt** viene con una GUI de escritorio mientras que la versión **iot** no. Si eres nuevo en ReSpeaker Core v2.0, se recomienda la versión **lxqt**.|
|**flasher** / **sd**|La versión **flasher** se usa para flashear el eMMC integrado, después del flasheo puedes remover la tarjeta SD. La versión **sd** requerirá que la tarjeta SD permanezca insertada todo el tiempo.|

Para desarrollo, recomendamos la versión **lxqt + sd**. Por favor descarga el archivo **respeaker-debian-9-lxqt-sd-[fecha]-4gb.img.xz**.

:::caution
Esta wiki está basada en la versión de imagen **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz**.
:::

- **Paso 2.** Conecta la tarjeta SD a tu PC o MAC con un lector de tarjetas SD. Necesitas una tarjeta SD con una capacidad de más de 4G.

- **Paso 3.** Haz clic para descargar [Etcher](https://etcher.io/) aquí, y graba el archivo ```*.img.xz``` directamente a tu tarjeta SD con Etcher. O descomprime el archivo ```*.img.xz``` a un archivo ```*.img```, luego grábalo a la tarjeta SD con otras herramientas de escritura de imágenes.
<br />

<br />Haz clic en el icono Plus para añadir la imagen que acabas de descargar, el software seleccionará automáticamente la tarjeta SD que conectaste. Luego haz clic en Flash! para comenzar la grabación. Tomará aproximadamente 10 minutos terminar.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **Paso 4.** Después de escribir la imagen a la tarjeta SD, inserta la tarjeta SD en tu ReSpeaker Core v2.0. Alimenta la placa usando el puerto micro USB PWR_IN y NO remuevas la tarjeta SD después de encender. ReSpeaker Core v2.0 arrancará desde la tarjeta SD, y puedes ver los LEDs USER1 y USER2 encenderse. USER1 está típicamente configurado al arranque para parpadear en un patrón de latido y USER2 está típicamente configurado al arranque para encenderse durante los accesos a la tarjeta SD. Ahora, deberías ir a la siguiente parte: Consola Serial.

**B. Arrancar desde la eMMC**

No hay firmware en la EMMC al salir de fábrica, puedes grabar los archivos de imagen de ReSpeaker a la eMMC del ReSpeaker (memoria flash integrada) usando tu PC o Mac. Entonces el ReSpeaker arrancará desde su eMMC (memoria flash integrada) y no desde la tarjeta SD.

- **Paso 1.** Descarga nuestro archivo zip de imagen más reciente ```respeaker-debian-9-iot-flasher-********-4gb.img.xz``` o ```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz``` en mirror-azure. La versión lxqt viene con escritorio Debian y la versión iot no. Y la versión flasher es para grabar eMMC, y la versión sd es para arrancar desde tarjeta SD.

- **Paso 2.** Graba el archivo ```*.img.xz``` directamente a la tarjeta SD con Etcher, o descomprime el archivo ```*.img.xz``` a un archivo ```*.img```, luego grábalo a la tarjeta SD con otras herramientas de escritura de imágenes.

- **Paso 3.** Después de grabar la tarjeta SD, inserta la tarjeta SD en el ReSpeaker Core v2.0. Alimenta la placa usando el puerto micro USB PWR_IN y no remuevas la tarjeta SD mientras esté grabando.

Durante el proceso de grabación, verás los LEDs USER1 y USER2 parpadear alternativamente. Tomará aproximadamente 10 minutos completarse. Cuando los LEDs se apaguen, puedes apagar la placa, sacar la tarjeta SD y encender nuevamente. Si los LEDs se encienden, eso significa que la imagen fue grabada a la eMMC correctamente.

También puedes verificar la versión de la imagen con este comando: cat /etc/issue.net.

**Consola Serial**

Ahora tu ReSpeaker Core v2.0 puede arrancar, podrías querer obtener acceso al sistema Linux a través de una consola, para configurar el WiFi, etc. Tienes dos formas de obtener la consola:

- A. El puerto USB OTG - Esto requiere un sistema Linux funcionando en la placa

- B. El puerto UART - Esta es la forma difícil de acceder a la consola, puede usarse para depurar problemas de bajo nivel

**A. Conexión vía OTG**

- **Paso 1.** Encuentra un cable micro USB, y por favor asegúrate de que sea un cable de datos (no solo un cable de alimentación), conecta el extremo micro USB al puerto micro USB **OTG** del ReSpeaker (Hay dos puertos micro USB en la placa ReSpeaker, que están etiquetados con diferentes serigrafías, uno es **PWR_IN** y otro es **OTG**), luego conecta el otro extremo de este cable a tu computadora.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **Paso 2.** Verifica en tu computadora si el puerto serial ha aparecido:

  - Windows: verifica el administrador de dispositivos, debería haber un nuevo dispositivo serial llamado ```COMx``` donde x es un número creciente. Si usas windows XP/7/8, tal vez necesites instalar [controladores CDC de windows](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z).
  - Linux: `ls /dev/ttyACM*`, deberías obtener ```/dev/ttyACMx``` donde x variará dependiendo de qué puerto USB usaste.
  - Mac: `ls /dev/cu.usb*`, deberías obtener ```/dev/cu.usbmodem14xx``` donde xx variará dependiendo de qué puerto USB usaste.

- **Paso 3.** Usa tu herramienta de depuración serial favorita para conectar el puerto serial, el serial tiene: velocidad de baudios 115200, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno. Por ejemplo:

  - Windows: usa [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecciona protocolo ```Serial```, llena el puerto COM correcto del ReSpeaker Core v2.0, ```115200``` baudios, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno.
  - Linux: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/ttyACM0(,1, y así sucesivamente)``` 115200 o ```screen /dev/ttyUSB0(,1, y así sucesivamente) 115200```
  - Mac: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/cu.usbserial1412(,1422, y así sucesivamente) 115200``` o ```screen /dev/cu.usbmodem1412(,1422, y así sucesivamente) 115200```

- **Paso 4.** El nombre de usuario predeterminado es ```respeaker```, y la contraseña también es ```respeaker```.

**B. Conexión vía el puerto UART**

En esta sección te guiaremos sobre cómo establecer una conexión desde tu computadora a tu ReSpeaker usando tu adaptador USB a TTL que será conectado al puerto Uart del ReSpeaker (el puerto Uart ubicado justo a la izquierda del conector del altavoz ReSpeaker).

- **Paso 1.** Conecta el puerto Uart y tu PC/Mac con un Adaptador USB a TTL. Nota que el voltaje de RX/TX es 3.3V. Si no tienes un Adaptador USB a TTL, puedes hacer clic [aquí](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) para obtener uno.

- **Paso 2.** Usa las siguientes herramientas de depuración Serial con 115200 baudios:
  - Windows: usa [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecciona protocolo ```Serial```, llena el puerto COM correcto del ReSpeaker Core v2.0, 115200 baudios, 8Bits, Paridad Ninguna, Bits de Parada 1, Control de Flujo Ninguno.
  - Linux: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/ttyACM0(,1, y así sucesivamente) 115200``` o ```screen /dev/ttyUSB0(,1, y así sucesivamente) 115200```.
  - Mac: Depende de tu Adaptador USB a TTL, podría ser ```screen /dev/cu.usbserial1412(,1422, y así sucesivamente) 115200``` o ```screen /dev/cu.usbmodem1412(,1422, y así sucesivamente) 115200```.

- **Paso 3.** El nombre de usuario de inicio de sesión es respeaker, y la contraseña también es respeaker.

- **Paso 4.** Si no tienes un Adaptador USB a TTL, también puedes usar un Arduino. Si usas un Arduino, conecta un extremo de un cable puente al pin RESET del Arduino y el otro extremo al pin GND del Arduino. Esto omitirá el MCU ATMEGA de tu Arduino y convertirá tu Arduino en un adaptador USB a TTL, ve el tutorial en video [aquí](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Ahora conecta el pin GND del Arduino al pin GND del puerto Uart del Respeaker. Conecta el pin Rx del Arduino al pin Rx del puerto Uart del Respeaker. Conecta el pin Tx del Arduino al pin Tx del puerto Uart del Respeaker. Y por último, conecta el Arduino a tu PC/Mac a través del cable USB del Arduino. Ahora verifica que tu Mac o PC Linux encuentre tu Arduino escribiendo este comando:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

Deberías obtener algo como:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Ahora sigue el paso 2 anterior para conectarte a tu Respeaker a través de esta conexión serie. Y ten en cuenta que este es un procedimiento único ya que a continuación configurarás tu Respeaker para conectividad Wi-Fi y luego te conectarás vía ssh o VNC en adelante.

**Configuración de Red**

**A. Configuración de Wi-Fi**

Configura la red de tu ReSpeaker con la herramienta Network Manager, nmtui. nmtui ya estará instalado en la imagen del ReSpeaker.

```
sudo nmtui              # respeaker user needs sudo
```

Entonces verás una página de configuración como esta, selecciona ```Activate a connection``` y presiona la tecla ```Enter```.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

Selecciona tu Wi-Fi para ReSpeaker v2.0, presiona la tecla ```Enter``` y escribe tu contraseña de Wi-Fi y presiona la tecla ```Enter``` nuevamente. Cuando veas una marca ```*```, significa que tu ReSpeaker se ha conectado exitosamente a tu red Wi-Fi. Presiona la tecla ```Esc``` dos veces para salir de la herramienta de configuración del administrador de red.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

Ahora encuentra la dirección IP de tu ReSpeaker usando el comando a continuación.

```
ip address
```

En el ejemplo a continuación, podemos ver que la dirección IP de este ReSpeaker es ```192.168.7.108```

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```

Además de la interfaz gráfica del Administrador de Red, el Administrador de Red también tiene una herramienta de línea de comandos. Si te estás conectando a una red Wi-Fi oculta, necesitarás usar esta herramienta de línea de comandos:

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. Conectividad Ethernet**

Puedes conectarte a una red usando un cable Ethernet. Solo conecta el cable Ethernet que esté conectado a Internet y estará listo.

**Conectar a SSH y VNC**

**A. SSH**

El servidor SSH se inicia automáticamente en ReSpeaker v2.0. Para usuarios de Windows, hay clientes SSH de terceros disponibles. Para usuarios de Linux/Mac, el cliente SSH está integrado.

- Windows: Usa PUTTY, selecciona el protocolo SSH, completa la dirección IP correcta y haz clic en abrir. Inicia sesión como usuario respeaker y la contraseña también es respeaker.

- Linux/Mac:

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
Ten en cuenta que si experimentas un rendimiento lento usando SSH, por favor cambia a una red WiFi menos congestionada.
:::

**B. VNC**

Para obtener la autorización de Alexa, necesitas usar VNC Viewer. El sistema tiene un servidor VNC integrado. El servidor VNC lanzará la GUI de escritorio **lxqt** que es un entorno de escritorio Qt ligero.
El servicio VNC también se inicia automáticamente. Usa [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) o [VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en) para conectarte al escritorio del ReSpeaker Core v2.0.

Para usar VNC, conecta tu PC/Mac y ReSpeaker v2.0 a la misma red Wi-Fi. Luego abre VNC Viewer, escribe ```192.168.xxx.xxx``` en la barra de direcciones. ```192.168.xxx.xxx``` es la dirección IP de la placa, puedes usar el comando **ifconfig** para verificar. Si encuentras ```Unencrypted connection```, haz clic en Continue para continuar. La contraseña es ```respeaker```.

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
Ten en cuenta que la conexión VNC depende de la buena calidad de la red, por favor ten la preparación mental de que probablemente obtendrás una tasa de refresco muy baja de la pantalla VNC.
:::

**Conectar a Altavoz o Auriculares**

La placa usa el códec integrado del SOC para renderizar la reproducción. Tanto el puerto de altavoz JST como el puerto de auriculares son impulsados por su propio amplificador, y ambos amplificadores están conectados al mismo códec del SOC. El controlador de tarjeta de sonido que SEEED implementó maneja tanto el dispositivo de captura como el dispositivo de reproducción. Por lo tanto, no hay una tarjeta de sonido de captura o reproducción discreta en la lista de dispositivos ALSA. Todas se llaman seeed-8mic-voicecard.

La forma más simple de escuchar sonido de la placa es conectar unos auriculares. Si prefieres un altavoz fuerte, la placa puede proporcionar hasta 8W de capacidad de impulso.

**Configuración de Bluetooth**

**Activar el bluetooth**

Por favor ejecuta los comandos a continuación para actualizar y activar el Bluetooth del ReSpeaker Core v2.0:

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
Si la actualización falla, por favor cambie a otra WiFi con buena condición de red y realice la actualización nuevamente.
:::

Luego active el bluetooth con el comando:

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**Usando el ReSpeaker Core v2.0 como un Dispositivo Altavoz Bluetooth-Esclavo**

Cuando el ReSpeaker Core v2.0 se reinicie, abre el bluetooth de tu teléfono o computadora, encontrarás un dispositivo bluetooth llamado **ReSpeaker-xxxx**.
Selecciónalo y conéctate a él. Conecta un altavoz o auriculares al ReSpeaker Core v2.0 luego reproduce música y disfruta de tu altavoz bluetooth.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**Usando el ReSpeaker Core v2.0 como un Dispositivo Reproductor Bluetooth-Maestro**

Además de funcionar simplemente como un altavoz bluetooth, también puede servir como un reproductor bluetooth para hackear tus auriculares bluetooth o altavoz bluetooth.
OK, vamos a hackear.

- **Paso 1.** Escribe `bluetoothctl` para abrir el shell de bluetooth.

- **Paso 2.** Escribe `scan on` para escanear tu dispositivo bluetooth.

- **Paso 3.** Cuando el ReSpeaker Core v2.0 encuentre tu dispositivo objetivo, escribe `scan off`.
Para esta wiki, digamos, los auriculares MDR-1000X son nuestro objetivo, marca el ID del dispositivo Device `04:5D:4B:81:35:84`.

```
respeaker@v2:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **Paso 4.** Ahora usa el comando `pair + ID del dispositivo` para emparejar el dispositivo bluetooth con el ReSpeaker Core v2.0.

- **Paso 5.** Cuando veas el mensaje `Pairing successful`, toca `connect + ID del dispositivo`.

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

Si aparece `Connection successful`, ¡configuración exitosa!

Puedes escribir `exit` o `quit` para salir del shell, luego usa los comandos a continuación para probar tu dispositivo bluetooth.

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**Grabar y Reproducir**

**1.Prueba vía ALSA**

Como esta es una documentación técnica de la fase de desarrollo, el índice del dispositivo de sonido puede cambiar entre versiones. Así que primero verifica el índice correcto del dispositivo con los siguientes comandos:

```
respeaker@v2:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 0: 100b0000.i2s1-ac108-pcm0 ac108-pcm0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

respeaker@v2:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 1: 100b0000.i2s1-rk3228-hifi rk3228-hifi-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

Encuentra la tarjeta de sonido cuyo nombre tenga el prefijo **seeed**. Para el ejemplo anterior, el dispositivo de captura es **hw:0,0**, lo que significa tarjeta **0**/dispositivo **0**.
El dispositivo de reproducción es **hw:0,1**, lo que significa tarjeta **0**/dispositivo **1**.. Luego prueba la grabación y reproducción de sonido con los siguientes comandos:

```
# record & playback 2 channels audio
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,1 -r 16000 -c 2 hello.wav

# If you want to output the sound by the bluetooth device, you need to use the command below to play
aplay -r 16000 -c 2 hello.wav

# record 8 channels audio
# there are 6 microphones on board, and ac108 compose the 2 remaining channels.
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello_8ch.wav
```

Además puedes grabar y reproducir al mismo tiempo.

```
arecord | aplay
```

**2. Prueba a través de PulseAudio**

Primero verifica si PulseAudio está ejecutándose:

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

Si no es así, consulta la documentación de PulseAudio para habilitar el auto-spawn de PulseAudio. Luego prueba con:

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

Además, el dispositivo ALSA predeterminado ahora se conecta a PulseAudio, por lo que usar los siguientes comandos también reproduce/graba sonido a través de PulseAudio:

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

Hasta ahora hemos aprendido las operaciones básicas de la placa ReSpeaker Core v2.0, sigamos adelante. Podemos usar ReSpeaker Core v2.0 para construir nuestro propio dispositivo AVS(Alexa Voice Service) o dispositivo Dueros(Asistente de voz de Baidu).

## Jugar con Wio Link

Por favor sigue [ReSpeaker Core V2 & Wio Link Tutorial](https://wiki.seeedstudio.com/es/ReSpeaker_Core_V2_&_Wio_Link/) para usar el ReSpeaker Core V2 para controlar Wio Link a través de IFTTT.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Jugar con GPIO

Esta parte introducirá cómo usar **MRAA** y **UPM** para controlar GPIO y el Socket Grove en Respeaker Core v2.0.

- **Paso 1. Actualizar las librerías MRAA y UPM a la última versión**

Primero, necesitamos instalar los paquetes MRAA y UPM más recientes.

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **Paso 2. Verificar la información de tu plataforma**

```
#only have bus 0 and id=03(/dev/i2c-3), 0 is the i2c number for mraa and upm
respeaker@v2:~$ mraa-i2c list
Bus   0: id=03 type=linux

#mraa gpio numbers and system gpio numbers and it's pinmux
respeaker@v2:~$ mraa-gpio list
00      GPIO91: GPIO
01         VCC:
02      GPIO43: GPIO
03     GPIO127: GPIO
04      GPIO17: GPIO
05      GPIO67: GPIO
06         GND:
07      GPIO13: GPIO
08    I2C2_SCL: I2C  
09    I2C2_SDA: I2C  
10         VCC:
11         GND:
12      GPIO66: GPIO
```

La descripción de las definiciones de PIN para la placa ReSpeaker Core v2.0, consulte [Pin Out](#)

- **Paso 3. Demostraciones con MRAA o UPM**

**A. Usar la Biblioteca MRAA**

**Controlar GPIO Directamente**

Materiales

| ReSpeaker Core v2.0 |  Grove - Zumbador |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

Conecte el pin **SIG** del sensor PIR Grove al pin de cabecera **0** del ReSpeaker Core v2.0 con un puente. No olvide cablear el VCC y GND al mismo tiempo. Luego escriba el código a continuación en su consola

``` python
respeaker@v2:~$ python
Python 2.7.13 (default, Jan 19 2017, 14:48:08)
[GCC 6.3.0 20170118] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import mraa
>>> x = mraa.Gpio(0)
>>> x.dir(mraa.DIR_OUT)
0
>>> x.write(0)
0
>>> x.write(1)
0
>>>
```

Cuando presiones **x.write(1)**, escucharás un grito del zumbador.

**Ejemplo de Sensor de Movimiento PIR**

Materiales

| ReSpeaker Core v2.0 |  Grove -  Sensor de Movimiento PIR |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

En este ejemplo, vamos a escuchar el disparador del sensor PIR Grove, en código Python.
Conecta el pin **D1** del sensor PIR Grove al pin de cabecera **0** del ReSpeaker Core v2.0 con un jumper. No olvides cablear el VCC y GND al mismo tiempo.
Luego copia el código de abajo en un nuevo archivo y guárdalo como un archivo python, nómbralo como **mraa_pir.py**. Copia este archivo en tu ReSpeaker Core v2.0.

``` python
import mraa

def on_trigger(gpio):
    print("pin " + repr(gpio.getPin(True)) + " = " + repr(gpio.read()))

pin = 0

try:
    x = mraa.Gpio(pin)
    print("Starting ISR for pin " + repr(pin))
    x.dir(mraa.DIR_IN)
    # respeaker v2 only support EDGE_BOTH
    x.isr(mraa.EDGE_BOTH, on_trigger, x)
    var = raw_input("Press ENTER to stop")
    x.isrExit()
except ValueError as e:
    print(e)

```

Luego ejecuta el código con el comando de abajo. (asegúrate de estar ubicado en la carpeta que contiene el mraa_pir.py que acabas de guardar)

``` python
sudo python mraa_pir.py
```

El resultado será como

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. Usar la Biblioteca UPM**

El proyecto UPM implementa controladores de sensores basados en la biblioteca MRAA, por lo que ya no necesitamos preocuparnos por la programación GPIO o cuál es la dirección I2C de un sensor, toda la información y lógica predeterminada para un sensor en particular ha sido envuelta en una biblioteca UPM. UPM ha soportado un montón de sensores. [Módulos UPM](https://iotdk.intel.com/docs/master/upm/modules.html). Pero ten en cuenta que no confirmamos que cada sensor funcione en el ReSpeaker Core v2.0.

**Ejemplo para el Sensor de Luz Digital Grove**

Materiales

| ReSpeaker Core v2 |  Grove - Sensor de Luz Digital |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

Este es un ejemplo para el Sensor de Luz Digital Grove, que está copiado del repositorio github de UPM.

Por favor conecta el Sensor de Movimiento PIR en tu Respeaker Core v2.0 a través del conector Grove.
Luego copia el código de abajo en un nuevo archivo y guárdalo como un archivo python, nómbralo como **tsl2561.py**. Copia este archivo en tu ReSpeaker Core v2.0.

``` python
#!/usr/bin/env python
# Author: Zion Orent <zorent@ics.com>
# Copyright (c) 2015 Intel Corporation.
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_tsl2561 as upmTsl2561

def main():
    # Instantiate a digital light sensor TSL2561 on I2C
    myDigitalLightSensor = upmTsl2561.TSL2561()

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myDigitalLightSensor
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    while(1):
        print("Light value is " + str(myDigitalLightSensor.getLux()))
        time.sleep(1)
if __name__ == '__main__':
    main()
```

El resultado debería ser algo como:

``` python
respeaker@v2:~$ python tsl2561.py       
Light value is 0
Light value is 38
Light value is 20
Light value is 54
Light value is 13
Light value is 44
Light value is 31  
```

## Preguntas Frecuentes

**P1: ¿Cómo grabar y reproducir con Audacity?**

  **R1:** La versión **lxqt** tiene Audacity preinstalado. Por favor haz clic en el **botón Pájaro** en la esquina inferior izquierda, y lo encontrarás en **Sonido y Video -> Audacity**.

  Cuando hayas abierto Audacity, por favor haz clic en la pequeña flecha negra para elegir el dispositivo de grabación y reproducción y configúralo como se muestra en la imagen a continuación.

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  Debes elegir Seeed-8mic-voicecard tanto para el dispositivo de grabación como de reproducción. Y puedes elegir 1/2/4/6/8 canales para grabar y reproducir. Como puedes ver,
  hay 8 canales en la imagen, sin embargo no hay datos en los canales 7 y 8. Eso es porque estos dos canales son los canales de reproducción.
  El canal 7 es para los Auriculares de 3.5mm y el canal 8 para el Altavoz JST2.0 (Si no tienes un cable JST, también puedes usar jumpers). Digamos que usamos el Altavoz JST:

- Paso 1. Configura como se muestra en la imagen anterior, haz clic en el botón **Grabar**, graba un período de audio.
- Paso 2. Haz clic en el botón **Detener**, entonces verás que los canales 7 y 8 están vacíos.
- Paso 3. Haz clic en el botón **Grabar** nuevamente, esta vez encontrarás que el Canal 8 cambió.

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**P2: ¿Cómo acceder al AP del ReSpeaker Core v2.0?**

**R2:** Puedes usar un cable de dos hilos para alimentar el ReSpeaker Core v2.0. Cuando el sistema esté funcionando, el Respeaker Core v2.0 puede actuar como un AP. Puedes usar tu computadora para
acceder a este AP. Como muestra la imagen. Puedes seguir los pasos para configurar el WiFi del ReSpeaker Core v2.0.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **Paso 1.** Ejecuta el comando a continuación para activar el AP del ReSpeaker Core v2.0.

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **Paso 2.** Accede al AP del ReSpeaker Core v2.0. Después de que el ReSpeaker Core v2.0 se reinicie, usa tu teléfono o computadora para buscar el WiFi. Encontrarás que el nombre del AP es algo como
   **ReSpeaker_xxxx**, el usuario es **respeaker**, la contraseña también es **respeaker**.

- **Paso 3.** Ahora puedes usar Putty, modo SSH para acceder a la Consola Serial. La ip de la Wlan1 es **192.168.42.1**, necesitas usar esta ip para configurar la conexión.
Y el nombre de usuario del ReSpeaker Core v2.0 es **respeaker**, la contraseña es **respeaker**.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **Paso 3.** Cuando accedas a la Consola Serial, puedes [configurar el WiFi](https://wiki.seeedstudio.com/es/ReSpeaker_Core_v2.0/#a-wi-fi-setting-up)

**P3: ¿Cómo ajustar el volumen?**

**R3:** Puedes usar Alsamixer para ajustar el volumen de reproducción y la sensibilidad de captura.

- **Paso 1.** Escribe el siguiente código para abrir Alsamixer:

```
alsamixer
```

- **Paso 2.** Presiona **F6** en tu teclado para elegir la tarjeta **Seeed-8mic-voicec**.
- **Paso 3.** Encontrarás la interfaz como se muestra en la imagen a continuación. Puedes elegir la voz de reproducción o el canal de grabación presionando la tecla **Derecha** o **Izquierda**.
Y puedes ajustar el valor presionando la tecla **Arriba** o **Abajo**.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**P4: ¿Cómo usar el botón de usuario?**
**R4:** Como puedes ver, hay un botón de usuario en la parte posterior del ReSpeaker Core v2.0. Aquí proporcionamos una demostración en python para mostrar cómo usarlo.

- **Paso 1.** Ejecuta el comando a continuación:

```
sudo pip install evdev
```

- **Paso 2.** Copia el código a continuación y guárdalo como un archivo de python, llamémoslo **usrer_button.py**.

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar esta demostración.

```
sudo python usrer_button.py
```

Entonces verás que el resultado es algo así:

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**P5: La computadora no puede reconocer el ReSpeaker Core v2.0, ¿problema de controlador?**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**R5:** Esto puede suceder cuando conectas el ReSpeaker Core v2.0 con tu computadora vía OTG o UART.
Esto se debe a que el controlador CDC Serial tiene un conflicto con otro controlador OTG. Por favor desinstala el controlador en conflicto
 y conecta el ReSpeaker Core v2.0 nuevamente.

**P6: ¿Qué pasa si quiero usar la antena externa?**

**R6:** El ReSpeaker Core v2.0 usa **AP6212** para proporcionar tanto WiFi como Bluetooth, comparten la misma antena.
En lugar de la antena integrada, puedes usar una antena externa. Para hacerlo, necesitas remover una resistencia y soldarla
en las nuevas almohadillas, como se muestra a continuación：

- Primero necesitas remover la resistencia en la caja naranja.
- Luego por favor suéldala en la caja verde.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**P7: ¿Cómo construir mi propio firmware flasher? Para que pueda grabar mi propio firmware al resto de ReSpeaker Core v2.0.**

**R7:** por favor ejecuta el constructor de imágenes en un sistema ARM debian con RAM>2G.

Aquí están las instrucciones detalladas.

- Paso 1. git clone [repositorio image_builder](https://github.com/respeaker/image_builder)
- Paso 2. modifica la ruta de carga @ /publish/respeaker.io_stable.sh
- Paso 3. sudo ./publish/respeaker.io_stable.sh

**P8: Cuando conecto la tarjeta SD grabada al ReSpeaker Core v2.0, no hay puerto COM en el administrador de dispositivos y no hay pantalla en la interfaz HDMI.**

**R8:** Por favor usa el adaptador USB a TTL para conectar directamente a UART, verás los siguientes errores.

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

La causa raíz es que las tarjetas SD antiguas no funcionan con el sistema linux. Por favor, cambie a tarjetas SD recientes, que soporten todos los comandos eMMC, como ScanDisk Ultra.

## Recursos

- **[Algoritmos]** [Algoritmos de procesamiento de audio front-end incluyendo AEC, Beamforming, NS y KWS](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Demo de Google Assistant](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Demo de Traducción de Voz de Microsoft](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [Biblioteca de LEDs RGB](https://github.com/respeaker/pixel_ring)
- **[PDF]** [Descargar PDF de Esta Wiki](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Hoja de Datos Rockchip RK3229 V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [Dimensiones de la Placa](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [Modelos 3D Para ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [Carcasa ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [Soporte ReSpeaker Core v2.0](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [Dibujo de Ensamblaje del Soporte ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [Especificación Acústica y Eléctrica de ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[MásLectura]** [Página de documentos Mraa Python](http://iotdk.intel.com/docs/master/mraa/python/)
- **[MásLectura]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[MásLectura]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[Código Fuente]** [Código fuente ReSpeaker Core v2.0](https://github.com/respeaker/rk-linux-develop)

## Proyectos

**ReSpeaker Core v2.0 - Demo de Alexa**

En esta demostración, usamos ReSpeaker Core v2.0 para hablar con Alexa. Puedes hacer cualquier pregunta y hablar con ReSpeaker Core v2.0 como un amigo. Además, este producto puede funcionar con Google Assistant y Bing también. La palabra de activación es Snowboy, y por supuesto puedes crear tu propia palabra de activación.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<br />

**ReSpeaker Core v2.0 - Prueba de Distancia de Activación**

En esta demostración, hemos probado la distancia de activación de ReSpeaker Core v2.0. Usamos Alexa con la palabra de activación Snowboy. Como puedes ver en la pantalla, el "Alexa:status code 204" significa que Alexa se activó exitosamente.

¡Con algoritmos avanzados y seis micrófonos de alta calidad, el resultado es increíble! ¡Podemos activar el ReSpeaker Core v2.0 desde 16 metros (52 pies) de distancia!

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ReSpeaker Core v2.0 - Sistema de Recepción por Voz**

Este sistema inteligente consiste en un asistente de voz (ReSpeaker Core v2.0) y un asistente telefónico (Linklt One). Como puedes ver, cuando un visitante le dice al asistente de voz el nombre de la persona que está buscando, el pequeño asistente inteligente reconocerá y buscará a la persona en su base de datos. Si hay un nombre coincidente, nuestro asistente lo llamará. Y cuando la persona confirme la identidad del visitante, solo necesita enviar el mensaje "Abrir" para abrir la puerta para que el visitante pueda entrar.

¿Qué tal tener un sistema de recepción por voz así en frente de tu casa o espacio de trabajo? ¿No es genial?

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />

**ReSpeaker Core v2.0 - Sistema Simple de Recepción por Voz**

La función básica del servicio de recepción es saludar a los visitantes, hacerlos sentir bienvenidos y prevenir el acceso no autorizado a la oficina. Aprovechamos las funciones del ReSpeaker Core v2.0 para diseñar un Servicio de Recepción por Voz. El sistema puede interactuar con el visitante y dejar un mensaje a la persona a ser visitada. En el futuro, podemos diseñar una pequeña base de datos de lista telefónica de empleados de oficina, el empleado puede dejar un mensaje al sistema, el sistema usa las funciones GPIO del ReSpeaker Core v2.0 para abrir las puertas para el visitante. Usamos los servicios de voz a texto de Microsoft Bing y las APIs de mensajes de Twilio/Tencent para crear los scripts de python. Para más información, por favor consulte [Sistema de Recepción por Voz ReSpeaker](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c).

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
