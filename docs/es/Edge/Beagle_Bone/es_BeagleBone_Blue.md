---
description: BeagleBone® Blue
title: BeagleBone® Blue
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BeagleBone_Blue
last_update:
  date: 1/10/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover.jpg" /></div>

BeagleBone® Blue está basado en el diseño de hardware de código abierto extremadamente exitoso de BeagleBone® Black, una computadora de hardware abierto de alta expansión, enfocada en makers, con soporte de la comunidad, creada por la Fundación BeagleBoard.Org.

BeagleBone® Blue combina la interfaz WiLink™ WiFi/Bluetooth flexible de alto rendimiento del BeagleBone® Black Wireless y las capacidades de robótica del Robotics Cape de Strawson Design. BeagleBone® Blue tiene gestión integrada de batería LiPo de 2 celdas (2S) con cargador y LEDs indicadores del nivel de batería, 8 salidas para servomotores, 4 controladores de motor DC, 4 entradas de codificador cuadrático, una amplia gama de conectores GPIO y protocolos serie incluyendo CAN, una IMU de 9 ejes y barómetro, 4 entradas ADC, una interfaz USB para PC, un puerto host USB 2.0, un botón de reinicio, un botón de encendido, dos botones configurables por el usuario y seis LEDs indicadores. Construido sobre el System-In-Package de Octavo Systems que integra un procesador ARM TI de alto rendimiento y 512MB de DDR3, BeagleBone® Blue arranca Linux en aproximadamente 10 segundos y te permite comenzar a desarrollar a través de tu navegador web en menos de 5 minutos con solo un cable USB.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

----

- **Procesador: Octavo Systems OSD3358 1GHz ARM® Cortex-A8**
  - 512MB DDR3 RAM
  - Gestión de energía integrada
  - 2×32-bit 200-MHz unidades programables en tiempo real (PRUs)
  - ARM Cortex-M3
  - Almacenamiento flash eMMC de 8-bit 4GB integrado programado con Debian Linux

- **Conectividad y sensores**
  - Batería: soporte LiPo de 2 celdas con balanceado, entrada de cargador 9-18V
  - Inalámbrico: 802.11bgn, Bluetooth 4.1 y BLE
  - Control de motores: 8 salidas servo 6V, 4 salidas motor DC, 4 entradas codificador cuadrático
  - Sensores: IMU de 9 ejes, barómetro
  - Conectividad: cliente y host USB 2.0 de alta velocidad
  - Interfaz de usuario: 11 LEDs programables por el usuario, 2 botones programables por el usuario
  - Interfaces de conexión fácil para agregar sensores adicionales como:
    - GPS, radio DSM2, UARTs, SPI, I2C, analógico 1.8V, GPIOs 3.3V

- **Compatibilidad de Software**
  - [Debian](http://elinux.org/Beagleboard:BeagleBoneBlack_Debian)
  - [ROS](https://dscl.lcsr.jhu.edu/home/courses/me530707_2017_edumip_ros)
  - [ArduPilot](https://github.com/mirkix/ardupilotblue)
  - Programación gráfica con [LabVIEW](https://github.com/ktalke12/Labview-MiP)
  - IDE Cloud9 en Node.js con biblioteca BoneScript
  - Además de mucho más

## Especificaciones

----

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-dlfj{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n.tg .tg-14gg{background-color:#ffffff;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-88pu{background-color:#ffffff;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 824}}>
    <colgroup>
      <col style={{width: 275}} />
      <col style={{width: 252}} />
      <col style={{width: 297}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls">Elemento</th>
        <th className="tg-l5ls" colSpan={2}>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-q7v3">Procesador<br />(Integrado en <br />el OSD3358)</td>
        <td className="tg-dlfj" colSpan={2}>● AM335x 1GHz ARM® Cortex-A8<br />● Acelerador gráfico SGX530<br />● Acelerador de punto flotante NEON<br />● 2x PRU microcontroladores de 32 bits a 200MHz</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Memoria</td>
        <td className="tg-dlfj" colSpan={2}>● 512MB DDR3800MHZ RAM (Integrada en el OSD3358)<br />● 4GB 8-bit eMMC almacenamiento flash integrado<br />● Conector SD/MMC para microSD</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={18}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Conectividad<br /></td>
        <td className="tg-dlfj">Puerto cliente USB 2.0 de alta velocidad</td>
        <td className="tg-14gg">Acceso a USB0, modo cliente vía microUSB</td>
      </tr>
      <tr>
        <td className="tg-dlfj">Puerto host USB 2.0 de alta velocidad</td>
        <td className="tg-14gg">Acceso a USB1, conector tipo A, 500mA LS/FS/HS</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={6}><br /><br />WiLink1835 <br />WiFi 802.11 b/g/n 2.4GHz.<br />Soporta los siguientes modos:</td>
        <td className="tg-88pu">2x2 MIMO</td>
      </tr>
      <tr>
        <td className="tg-88pu">AP</td>
      </tr>
      <tr>
        <td className="tg-88pu">SmartConfig</td>
      </tr>
      <tr>
        <td className="tg-88pu">STA</td>
      </tr>
      <tr>
        <td className="tg-88pu">Wi-Fi Direct</td>
      </tr>
      <tr>
        <td className="tg-88pu">Mesh sobre Wi-Fi basado en 802.11s</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={3}><br />Puerto serie<br /></td>
        <td className="tg-14gg">UART0, UART1, UART5 disponibles vía conectores JST de 4 pines</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART2 disponible vía conector JST de 6 pines (conector estilo GPS EM-506)</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART4 RX disponible vía conector DSM2 de 3 pines</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>WiLink 1835 Bluetooth 4.1 con BLE</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>I2C1 disponible vía conector JST de 4 pines</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>SPI1 CS0 (S1.1) y SPI1 CS1 (S1.2) disponibles vía conectores JST de 6 pines</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>CAN disponible vía conector JST de 4 pines (incluye transceptor CAN TCAN1051)</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>8 GPIOs (GP0 y GPI1) disponibles vía conectores JST de 6 pines</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Entradas ADC 0 a 3 disponibles vía conector JST de 6 pines</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Salida de alimentación 3.3VDC y 5VDC vía conector JST de 4 pines</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br />Gestión de energía</td>
        <td className="tg-dlfj" colSpan={2}>Se utiliza PMIC TPS65217C junto con un LDO separado para proporcionar energía al sistema (Integrado en el OSD3358)</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Cargador de batería LiPo de 2 celdas (2S) (alimentado por conector DC de 9 – 18VDC): <br />i., 4 LEDs de nivel de batería; <br />ii.,1 LED de cargador</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Regulador 6VDC 4A para alimentar salidas de servomotores</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Soporte de depuración</td>
        <td className="tg-dlfj" colSpan={2}>Puntos de prueba JTAG</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Fuente de alimentación</td>
        <td className="tg-dlfj" colSpan={2}>i.,  microUSB USB,<br />ii., Conector de batería LiPo de 2 celdas (2S),<br />iii.,Conector DC de 9 - 18VDC</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Entrada/Salida del usuario</td>
        <td className="tg-dlfj" colSpan={2}>i.,Botón de encendido; ii.,Botón de reinicio; iii.,Botón de arranque; iv.,2 botones configurables por el usuario;<br />v.,6 LEDs configurables por el usuario;vi LED de encendido</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Control de motores (requiere alimentación desde conector DC o batería 2S)</td>
        <td className="tg-dlfj" colSpan={2}>i.,  4 controladores de motor DC,<br />ii., 4 entradas de codificador de cuadratura,<br />iii.,8 salidas de servomotor</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Sensores<br /></td>
        <td className="tg-dlfj" colSpan={2}>i., IMU de 9 ejes,<br />ii.,Barómetro</td>
      </tr>
    </tbody>
  </table>
</div>

--------

## Ideas de Aplicación

- Internet de las Cosas

- Casa Inteligente
- Industrial
- Automatización y Control de Procesos
- Interfaz Humano-Máquina
- control de motores
- control de UAV
- Robot

## Descripción General del Hardware

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Hardware_overviw.png" /></div>

## Primeros Pasos

----

### Preparación

#### PASO 1. Actualizar la imagen más reciente

Cuando recibas un BeagleBone®Blue de seeed, la imagen ya está grabada en la eMMC integrada. Lo que significa que puedes omitir este paso. Sin embargo, recomendamos encarecidamente que actualices a la imagen más reciente.

**i.** Haz clic y descarga la imagen más reciente desde [beagleboard.org](https://beagleboard.org/latest-images).

:::note
Las imágenes "IoT" proporcionan más espacio libre en disco si no necesitas usar una interfaz gráfica de usuario (GUI). Debido a las necesidades de tamaño, esta descarga puede tomar 30 minutos o más.
:::

Se proporciona la distribución Debian para las placas. El archivo que descargues tendrá una extensión .img.xz. Esta es una imagen comprimida sector por sector de la tarjeta SD.

**ii.** Conecta la tarjeta SD a tu PC o MAC con un lector de tarjetas SD. Necesitas una tarjeta SD con una capacidad de más de 4G.

**iii.** Descarga e instala [Etcher](https://etcher.io/)

Haz clic para descargar aquí, y graba el archivo ```*.img.xz``` directamente a tu tarjeta SD con Etcher. O descomprime el archivo ```*.img.xz``` a un archivo ```*.img```, luego grábalo a la tarjeta SD con otras herramientas de escritura de imágenes.

Haz clic en el icono Plus para añadir la imagen que acabas de descargar, el software seleccionará automáticamente la tarjeta SD que conectaste. Luego haz clic en Flash! para comenzar la grabación. Tomará aproximadamente 20 minutos para grabar.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png" /></div>

Luego expulsa la tarjeta SD e insértala en tu BeagleBone® Blue.

#### PASO 2. Alimentación y arranque

Conecta el BeagleBone® Blue a tu computadora con el Cable Micro-USB.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/connect.jpg" /></div>

:::caution
Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar la interfaz. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic aquí para comprar. Si quieres usar los módulos de Control de Motor del BeagleBone® Blue, la alimentación a través del Puerto USB no es suficiente, necesitas usar el Puerto DC-DC o batería 2S.
:::

Verás el LED de alimentación (PWR o ON) encendido de forma constante. En un minuto aproximadamente, deberías ver los otros LEDs parpadeando en sus configuraciones predeterminadas.

- USR0 está típicamente configurado al arranque para parpadear en un patrón de latido
- USR1 está típicamente configurado al arranque para encenderse durante los accesos a la tarjeta SD (microSD)
- USR2 está típicamente configurado al arranque para encenderse durante la actividad de la CPU
- USR3 está típicamente configurado al arranque para encenderse durante los accesos a la eMMC
- El LED WIFI está típicamente configurado al arranque para encenderse con la asociación de red WiFi (solo BeagleBone® Blue)

Con las imágenes más recientes, ya no debería ser necesario instalar controladores para que tu sistema operativo te dé acceso de red-sobre-USB a tu Beagle. En caso de que estés ejecutando una imagen más antigua, un sistema operativo más antiguo o necesites controladores adicionales para acceso serie a placas más antiguas, los enlaces a los controladores antiguos están a continuación.

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-gvcd{background-color:#ffffff;border-color:#000000;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-l0dh{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;text-decoration:underline;\n  vertical-align:top}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 826}}>
    <colgroup>
      <col style={{width: 148}} />
      <col style={{width: 155}} />
      <col style={{width: 523}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8">Sistema Operativo</th>
        <th className="tg-wzu8">Controladores USB</th>
        <th className="tg-wzu8">Comentarios</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-v0nz">Windows <br />(64-bit)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe" target="_blank" rel="noopener noreferrer">Instalador de 64-bit</a><br /></td>
        <td className="tg-gvcd" rowSpan={2}>Si tienes dudas, prueba primero el instalador de 64-bit.<br /><br />● La advertencia de Certificación de Controladores de Windows puede aparecer dos o tres veces. Haz clic en "Ignorar", "Instalar" o "Ejecutar"<br />● Para verificar si estás ejecutando Windows de 32 o 64-bit ve esto aquí<a href="https://support.microsoft.com/kb/827218" target="_blank" rel="noopener noreferrer">Enlace</a>.<br />● En sistemas sin la versión de servicio más reciente, puedes obtener un error (0xc000007b). En ese caso, por favor haz clic aquí para instalar y reintentar.<br />● Puede que necesites reiniciar Windows.<br />● Estos controladores han sido probados para funcionar hasta Windows 10.</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Windows <br />(32-bit)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe" target="_blank" rel="noopener noreferrer">Instalador de 32-bit</a><br /></td>
      </tr>
      <tr>
        <td className="tg-v0nz">Mac OS X<br /></td>
        <td className="tg-v0nz"> <a href="https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg" target="_blank" rel="noopener noreferrer">Red</a> <a href="https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg" target="_blank" rel="noopener noreferrer">Serie</a></td>
        <td className="tg-gvcd">Instala tanto el controlador de Red como el Serie.</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Linux</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh" target="_blank" rel="noopener noreferrer">mkudevrule.sh</a></td>
        <td className="tg-gvcd">La instalación de controladores no es requerida, pero podrías encontrar útiles algunas reglas udev.</td>
      </tr>
    </tbody>
  </table>
</div>

#### PASO 3. Navega a tu Beagle

Usando Chrome o Firefox (Internet Explorer NO funcionará), navega al servidor web que se ejecuta en tu placa. Cargará una presentación que te muestra las capacidades de la placa. Usa las teclas de flecha de tu teclado para navegar por la presentación.

Cuando el arranque esté completo, debería aparecer un adaptador de red en tu computadora. Puedes hacer clic para ingresar al [IDE Cloud 9](http://beaglebone.local:3000/).

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cloud9.png" /></div>

#### PASO 4. Conectar a wifi

Abre una nueva terminal, luego escribe el comando a continuación

```
root@beaglebone:/var/lib/cloud9# connmanctl
connmanctl> enable wifi
Enabled wifi
connmanctl> tether wifi disable
Error disabling wifi tethering: Already disabled
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO seeed                wifi_f45eabf743ad_7365656564_managed_psk
    CHAIHUOMAKERS        wifi_f45eabf743ad_4348414948554f4d414b455253_managed_psk
    DIRECT-99-HP DeskJet 4670 series wifi_f45eabf743ad_4449524543542d39392d4850204465736b4a6574203436373020736572696573_managed_psk
    mostfun-5bf7         wifi_f45eabf743ad_6d6f737466756e2d35626637_managed_psk
    DIRECT-TNDESKTOP-71PTKLKmsXO wifi_f45eabf743ad_4449524543542d544e4445534b544f502d373150544b4c4b6d73584f_managed_psk
    HPKJ                 wifi_f45eabf743ad_48504b4a_managed_psk
    ChinaNet-yTGy        wifi_f45eabf743ad_4368696e614e65742d79544779_managed_psk
    GPKJ1                wifi_f45eabf743ad_47504b4a31_managed_psk
    GUMO                 wifi_f45eabf743ad_47554d4f_managed_psk
    jdsfkf               wifi_f45eabf743ad_6a6473666b66_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_f45eabf743ad_7365656564_managed_psk
Error /net/connman/service/wifi_f45eabf743ad_7365656564_managed_psk: Already connected
connmanctl> quit
root@beaglebone:/var/lib/cloud9# ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr f4:5e:ab:f7:43:ad  
          inet addr:192.168.199.145  Bcast:192.168.199.255  Mask:255.255.255.0
          inet6 addr: fe80::f65e:abff:fef7:43ad/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST DYNAMIC  MTU:1500  Metric:1
          RX packets:8920 errors:0 dropped:0 overruns:0 frame:0
          TX packets:3531 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1166820 (1.1 MiB)  TX bytes:3352208 (3.1 MiB)

root@beaglebone:/var/lib/cloud9#
```

Cuando escribas ```ifconfig wlan0``` y la dirección de internet sea algo como 192.168.199.145, felicidades, te has conectado al wifi exitosamente.

Cuando el BeagleBone® Blue se conecte a Internet, te recomendamos encarecidamente que uses el comando de abajo para actualizar tu BeagleBone® Blue.

```
sudo apt-get update
sudo apt-get upgrade
```

Puede tomar mucho tiempo actualizar, pero vale la pena.

### Demo.1  Parpadeo

Esta es una demostración de Javascript.

Haz clic en el botón **File->New File->** en la esquina superior derecha del IDE Cloud9.

:::note
después de crear el archivo, simplemente no olvides guardar el archivo mientras añades el tipo de archivo.
:::

copia el código de abajo y haz clic en **Run**

```
var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
setInterval(toggle, 1000);

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("USR2", state);
}
```

Entonces verás parpadear el LED USER2.

### Demo.2  USAR GPIO Con Grove-LED

**Paso 1.** Por favor prepara el material según la Lista de partes a continuación.

| BeagleBone® Blue | Grove - LED Socket Kit|Grove Cable adaptador(6pin)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-White-LED-p-2016.jpeg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Universal-4-Pin-to-Beaglebone-Blue-6-Pin-Female-JST%2FSH-Conversion-Cable-%2810-pcs-pack%29-p-3027.html)|

**Paso 2.** Conecta el LED Socket Kit a la interfaz **GPIO** de 6 pines del BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/LED.jpg" /></div>

**Paso 3.** Abre una nueva terminal en el IDE Cloud9, escribe el código a continuación en esta terminal.

```
cd /sys/class/gpio
echo 49 >export
cd gpio49
echo out >direction
while sleep 1;
do echo 0 >value;
sleep 1;
echo 1 >value;
done

```

Ahora verás tu LED encenderse en modo latido.

### Demo.3  USAR UART Con Grove-GPS

**Paso 1.** Por favor prepara el material según la Lista de partes a continuación.

| BeagleBone® Blue | Grove - LED Socket Kit|Grove Cable adaptador(4pin)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-GPS.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/grove-gps-p-959.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**Paso 2.** Conecta el sensor Grove-GPS a la interfaz **UART1** de 4 pines del BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS_hARD.jpg" /></div>

**Paso 3.** Abre una nueva terminal en el IDE Cloud9, escribe el código a continuación en esta terminal.

```
apt install tio
tio /dev/ttyO1 -b 9600
```

Luego verás la información GPS en la terminal como se muestra en la imagen a continuación.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS.png" /></div>

### Demo.4  USAR I2C Con Grove-Digital Light Sensor

**Paso 1.** Por favor prepara el material según la Lista de partes a continuación.

| BeagleBone® Blue | Grove - LED Socket Kit|Grove Cable adaptador(4pin)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_Light_Sensor.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**Paso 2.** Conecta el Grove-Digital Light Sensor a la interfaz **I2C** de 4 pines del BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_light.jpg" /></div>

**Paso 3.** Abre una nueva terminal en el IDE Cloud9, escribe el código a continuación en esta terminal.

```
cd /sys/bus/i2c/devices/i2c-1;
echo tsl2561 0x29 >new_device;
watch -n0 cat 1-0029/iio\:device0/in_illuminance0_input

```

Entonces obtendrás el valor de luz como se muestra en la imagen a continuación.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_520.png" /></div>

## Lista de Compatibilidad Grove

Grove es un sistema de prototipado con conectores modulares y estandarizados. Grove adopta un enfoque de bloques de construcción para ensamblar electrónicos. Comparado con el sistema basado en jumpers o soldadura, es más fácil de conectar, experimentar y construir, y simplifica el sistema de aprendizaje, pero no hasta el punto de volverse simplista. Algunos de los otros sistemas de prototipado que existen reducen el nivel a bloques de construcción. Es bueno aprender de esa manera, pero el sistema Grove te permite construir sistemas reales. Requiere algo de aprendizaje y experiencia para conectar las cosas.

La lista a continuación son los módulos Grove que funcionan bien con BeagleBone® Blue.

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-fhi2{background-color:#ffffff;color:#000000;font-size:20px;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-366q{background-color:#ffffff;color:#000000;font-size:18px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fhi2">SKU</th>
        <th className="tg-fhi2">Artículo</th>
        <th className="tg-fhi2">Tipo de E/S</th>
        <th className="tg-fhi2">Voltaje de Trabajo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-366q">101020017</td>
        <td className="tg-366q">Grove - Sensor de Ángulo Rotativo</td>
        <td className="tg-366q">Analógico</td>
        <td className="tg-366q">Puede funcionar a 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020048</td>
        <td className="tg-366q">Grove - Sensor de Ángulo Rotativo(P)</td>
        <td className="tg-366q">Analógico</td>
        <td className="tg-366q">Puede funcionar a 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020036</td>
        <td className="tg-366q">Grove - Potenciómetro Deslizante</td>
        <td className="tg-366q">Analógico</td>
        <td className="tg-366q">Puede funcionar a 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020031</td>
        <td className="tg-366q">Grove - Sensor de Vibración Piezoeléctrico</td>
        <td className="tg-366q">Analógico</td>
        <td className="tg-366q">Puede funcionar a 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - Botón</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - Botón(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020001</td>
        <td className="tg-366q">Grove - Codificador</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - Interruptor(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - Interruptor de Inclinación</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - Sensor de Agua</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - Sensor de Colisión</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020030</td>
        <td className="tg-366q">Grove - Codificador de Ratón</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - LED Verde</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - LED Rojo</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020172</td>
        <td className="tg-366q">Grove - Detector de Línea v1.1</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - Sensor de Agua</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020019</td>
        <td className="tg-366q">Grove - Sensor de Temperatura y Humedad Pro</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020020</td>
        <td className="tg-366q">Grove - Sensor de Movimiento PIR</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020052</td>
        <td className="tg-366q">Grove - Sensor GSR</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020175</td>
        <td className="tg-366q">Grove - Interruptor de Distancia IR v1.2</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020033</td>
        <td className="tg-366q">Grove - Sensor de Frecuencia Cardíaca con Clip para Oreja</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020037</td>
        <td className="tg-366q">Grove - Sensor Táctil</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020030</td>
        <td className="tg-366q">Grove - Sensor de Luz Digital</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020232</td>
        <td className="tg-366q">Grove - Reconocedor de Voz v1.0</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - Sensor de Colisión</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020005</td>
        <td className="tg-366q">Grove - Controlador EL</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030009</td>
        <td className="tg-366q">Grove - LED Blanco</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030010</td>
        <td className="tg-366q">Grove - LED Azul</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - LED Rojo</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - LED Verde</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030014</td>
        <td className="tg-366q">Grove - LED Multicolor Intermitente (5mm)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020001</td>
        <td className="tg-366q">Grove - LED de Color Variable</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020005</td>
        <td className="tg-366q">Grove - Tira de Luces LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020048</td>
        <td className="tg-366q">Grove - LED RGB Encadenable v2.0</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - Switch(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - Button(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - Button</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020038</td>
        <td className="tg-366q">Grove - Magnetic Switch</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - Tilt Switch</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020005</td>
        <td className="tg-366q">Grove - Relay</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">107020000</td>
        <td className="tg-366q">Grove - Buzzer</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020014</td>
        <td className="tg-366q">Grove - Dry-Reed Relay</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020003</td>
        <td className="tg-366q">Grove - Vibration Motor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">108020021</td>
        <td className="tg-366q">Grove - Mini Fan v1.1</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020004</td>
        <td className="tg-366q">Grove - Solid State Relay</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020007</td>
        <td className="tg-366q">Grove - Screw Terminal</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020008</td>
        <td className="tg-366q">Grove - MOSFET</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020212</td>
        <td className="tg-366q">Grove - Sensor de Temp y Humedad(SHT31)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020192</td>
        <td className="tg-366q">Grove - Sensor de Barómetro (BMP280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020080</td>
        <td className="tg-366q">Grove - IMU 9DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020054</td>
        <td className="tg-366q">Grove - Acelerómetro Digital de 3 Ejes(±16g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020252</td>
        <td className="tg-366q">Grove - IMU 10DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020193</td>
        <td className="tg-366q">Grove - Sensor de Barómetro(BME280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020082</td>
        <td className="tg-366q">Grove - Sensor de Frecuencia Cardíaca de Clip para Dedo con carcasa</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020050</td>
        <td className="tg-366q">Grove - Giroscopio Digital de 3 Ejes</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020024</td>
        <td className="tg-366q">Grove - Sensor de Frecuencia Cardíaca de Clip para Dedo</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020081</td>
        <td className="tg-366q">Grove - Acelerómetro y Brújula de 6 Ejes v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020071</td>
        <td className="tg-366q">Grove - Acelerómetro Digital de 3 Ejes(±400g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030008</td>
        <td className="tg-366q">Grove - Pantalla OLED 0.96''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030011</td>
        <td className="tg-366q">Grove - Pantalla OLED 1.12''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020006</td>
        <td className="tg-366q">Grove - Hub I2C</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020013</td>
        <td className="tg-366q">Grove - ADC I2C</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">113020003</td>
        <td className="tg-366q">Grove - GPS</td>
        <td className="tg-366q">UART</td>
        <td className="tg-366q">3.3V</td>
      </tr>
    </tbody>
  </table>
</div>

## Preguntas Frecuentes

Por favor haz clic aquí para ver todas las preguntas frecuentes de BeagleBone® Blue.

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-----

- **[Esquemático]** [Esquemático de BeagleBone® Blue](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip)
- **[Grove]** [Lista de Compatibilidad Grove de BeagleBone® Blue.xlsx](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/res/Beaglebone%20Blue%20Grove%20Compatibility%20List.xlsx)
- **[LecturasAdicionales]** [Página Principal de BeagleBoard](http://beagleboard.org/)
- **[LecturasAdicionales]** [Primeros Pasos con BeagleBoard](http://beagleboard.org/getting-started)
- **[LecturasAdicionales]** [Solución de Problemas](http://beagleboard.org/getting-started#troubleshooting)
- **[LecturasAdicionales]** [Documentación de hardware](http://beagleboard.org/getting-started#hardware)
- **[LecturasAdicionales]** [Proyectos de BeagleBoard](http://beagleboard.org/project)

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
