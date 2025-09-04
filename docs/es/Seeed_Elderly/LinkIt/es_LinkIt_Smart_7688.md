---
description:  LinkIt Smart 7688
title:  LinkIt Smart 7688
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_Smart_7688
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Linkit_Smart_product.jpg)

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

LinkIt Smart 7688 (una placa controladora compacta) es una placa de desarrollo abierta, basada en la distribución Linux OpenWrt y MT7688 ([hoja de datos](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/MT7688_datasheet.pdf)). La placa está diseñada especialmente para la creación de prototipos de dispositivos IoT de aplicaciones ricas para Smart-Home. La placa ofrece memoria y almacenamiento suficientes para permitir un procesamiento de video robusto. La plataforma también ofrece opciones para crear aplicaciones de dispositivos en lenguajes de programación Python, Node.js y C.
Esta placa es solo una parte de la plataforma MediaTek LinkIt Smart 7688 que incluye otras placas de desarrollo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

---
- Wi-Fi de entrada única salida única (1T1R) 802.11 b/g/n.
- Pines para GPIO, I<sup>2</sup>C, I<sup>2</sup>S, SPI, UART, PWM y Puerto Ethernet.
- CPU MIPS de 580 MHz.
- 32MB Flash y 128MB DDR2 RAM.
- Host USB.
- Ranura Micro SD.

## Ideas de aplicación

---
- Dispositivos IoT de aplicaciones ricas para Smart-Home
- Robótica

## Especificación

---
<table>
  <tr>
    <th>Categoría</th>
    <th>Característica</th>
    <th>Especificación</th>
  </tr>
<tr>
<td rowspan="4"> MPU </td>
<td> Chipset </td>
<td> MT7688AN </td>
</tr>
<tr>
<td> Núcleo </td>
<td> MIPS24KEc </td>
</tr>
<tr>
<td> Velocidad de reloj</td>
<td> 580MHz </td>
</tr>
<tr>
<td> Voltaje de trabajo </td>
<td> 3.3V </td>
</tr>
<tr>
<td> Tamaño PCB </td>
<td> Dimensiones </td>
<td> 55.7 x 26 mm </td>
</tr>
<tr>
<td rowspan="2"> Memoria </td>
<td> Flash </td>
<td> 32MB </td>
</tr>
<tr>
<td> RAM</td>
<td> 128MB DDR2 </td>
</tr>
<tr>
<td rowspan="2"> Fuente de Alimentación </td>
<td> Alimentación USB </td>
<td> 5V (USB micro-B) </td>
</tr>
<tr>
<td> VCC </td>
<td> 3.3V (Pin Breakout) </td>
</tr>
<tr>
<td rowspan="2"> GPIO </td>
<td> Cantidad de Pines </td>
<td> 22 (MT7688AN) </td>
</tr>
<tr>
<td> Voltaje </td>
<td> 3.3V </td>
</tr>
<tr>
<td rowspan="5"> PWM </td>
<td> Cantidad de Pines</td>
<td> 4 (MT7688AN) </td>
</tr>
<tr>
<td> Voltaje </td>
<td> 3.3V </td>
</tr>
<tr>
<td> Resolución Máx. </td>
<td> 7 bits (personalizable) </td>
</tr>
<tr>
<td rowspan="2">Frecuencia Máxima@Resolución </td>
<td>

100kHz@1-bit,
50kHz@2-bit,
25kHz@3-bit,
12.5kHz@4-bit,
6.25kHz@5-bit,
3.125kHz@6-bit,
1.5625kHz@7-bit (Modo estándar)

</td>
</tr>
<tr>
<td>

40MHz@1-bit,
20MHz@2-bit,
10MHz@3-bit,
5MHz@4-bit,
2.5MHz@5-bit,
1.25Mhz@6-bit,
625kHz@7-bit
(Modo rápido)

</td>
</tr>
<tr>
<td> Interrupciones Externas </td>
<td> Cantidad de Pines </td>
<td> 22 (MT7688AN) </td>
</tr>
<tr>
<td rowspan="3"> SPI </td>
<td> Cantidad de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P22, P23, P24 (Compartido con flash integrado), P25 </td>
</tr>
<tr>
<td> Velocidad Máx. </td>
<td> 25 MHz </td>
</tr>
<tr>
<td rowspan="3"> SPI Esclavo </td>
<td> Cantidad de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P28, P29, P30, P31 </td>
</tr>
<tr>
<td> Velocidad Máx. </td>
<td> 25 MHz </td>
</tr>
<tr>
<td rowspan="2"> I<sup>2</sup>S </td>
<td> Cantidad de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P10, P11, P12, P13 </td>
</tr>
<tr>
<td rowspan="3"> I<sup>2</sup>C </td>
<td> Cantidad de conjuntos </td>
<td> 1 </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P20, P21 </td>
</tr>
<tr>
<td> Velocidad </td>
<td> 120K/400K </td>
</tr>
<tr>
<td rowspan="3"> UART Lite </td>
<td> Cantidad de conjuntos </td>
<td> 3 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P8, P9, P16, P17, P18, P19 </td>
</tr>
<tr>
<td> Velocidad Máx. </td>
<td> 0.5Mbps </td>
</tr>
<tr>
<td rowspan="3"> Host USB </td>
<td> Cantidad de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P6, P7 </td>
</tr>
<tr>
<td> Velocidad </td>
<td> Micro-AB </td>
</tr>
<tr>
<td rowspan="3"> Comunicación </td>
<td> Wi-Fi </td>
<td> 1T1R 802.11 b/g/n (2.4G) </td>
</tr>
<tr>
<td> Ethernet </td>
<td> 1-puerto 10/100 FE PHY </td>
</tr>
<tr>
<td> Números de pines </td>
<td> P2, P3, P4, P5 </td>
</tr>
<tr>
<td> Almacenamiento de Usuario </td>
<td> Tarjeta SD </td>
<td> Micro SD SDXC </td>
</tr>
</table>

## Descripción General del Hardware

----
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Component_intro_with_text_1200.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Back_hardware_view_with_text_1200_s.jpg)

:::note
    * Para proteger el producto de operaciones inadecuadas, por favor preste atención a las siguientes notas. Elija un adaptador de corriente más confiable con salida estable. Condiciones recomendadas de la fuente de entrada de alimentación para 7688:
      * - El voltaje de sobretensión de la entrada de alimentación no debe superar 5.5.
      * - La onda de voltaje debe estar dentro de ±100mV del voltaje nominal.
:::

### Lista de partes

<table>
<tr>
<th>Nombre de las partes</th>
<th>Cantidad</th>
</tr>
<tr>
<td> LinkIt<sup>TM</sup> Smart 7688 </td>
<td> 1PC </td>
</tr>
<tr>
<td> Manual </td>
<td> 1PC </td>
</tr>
</table>

## Comenzando

----

### Conectar al sistema operativo embebido

:::note
    Hay dos formas descritas en el manual. Aquí, solo mostramos la forma avanzada (usando un adaptador USB a Serial) que parece un poco más difícil. Pero, te beneficiarás mucho de ella a largo plazo.
:::

#### Materiales requeridos

- LinkIt Smart 7688 × 1
- Cable USB (tipo A a micro tipo-B) × 2
- Adaptador USB a Serial× 1
- Cables puente × 3

### En Windows

**1.** Instala [PuTTy](http://www.putty.org/). PuTTY proporciona un entorno de consola del sistema usando SSH (Secure Socket Shell) para acceder al sistema operativo de la placa de desarrollo.

**2.** Instala [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) Print Service (Para Windows 7, Windows 8, Windows 10).

**3.** Instala el controlador. Si estás usando un cable USB basado en chip FTDI, por favor descarga e instala su controlador desde [aquí](https://www.ftdichip.com/Drivers/VCP.htm). Si tienes problemas con el controlador más reciente, intenta instalar una [versión anterior](https://www.ftdichip.com/Support/Documents/InstallGuides.htm).

**4.** A continuación, necesitas conectar el cable Serial-a-USB a los pines UART del LinkIt Smart 7688 como se muestra en la siguiente tabla:

| Pin en el adaptador USB | Pin correspondiente a conectar en LinkIt Smart 7688 |
|-----------------------------------|--------------------------------------------------------|
| Pin RX | Pin 8 |
| Pin TX | Pin 9 |
| Pin GND | Pin GND |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/LinkIt_Smart_7688_demo_connection_1200_s.jpg)

**5.** Después de conectar el cable Serial a USB, abre el administrador de dispositivos y observa el número de puerto COM como se muestra a continuación. Este número puede variar en diferentes computadoras.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/COM_port.jpg)

**6.** Ejecuta el terminal PuTTY e ingresa el número de puerto COM del dispositivo USB encontrado en el administrador de dispositivos, haz clic en el botón de radio Serial, escribe 57600 en la casilla de Velocidad y haz clic en Abrir, como se muestra a continuación.
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Putty_configuration.jpg)

**7.** Ahora verás texto imprimiéndose como aquellos en una consola de Linux.

### En Mac

**1.** Instala el controlador si es necesario. Consulta el sitio web del fabricante del cable para conocer los requisitos del controlador en Mac y las instrucciones de instalación.

**2.** Conecta el cable a la PC/Laptop y conecta el cable al LinkIt Smart 7688.

**3.** Abre una sesión de Terminal.

**4.** Escribe **ls /dev/cu*** en el Terminal. Deberías ver una lista de dispositivos. Busca algo como cu.usbserial-XXXXXXXX donde XXXXXXXX es usualmente un identificador aleatorio. Este es el dispositivo serial usado para acceder a la consola del sistema. Por ejemplo:

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

**2.** Conecta el cable y conecta el cable al LinkIt Smart 7688.

**3.** Abre una sesión de Terminal.

**4.** Escribe **ls /dev/ttyUSB*** en el Terminal. Deberías ver una lista de dispositivos. Busca algo como cu.usbserial-XXXXXXXX donde XXXXXXXX es usualmente un identificador aleatorio. Este es el dispositivo serie usado para acceder a la consola del sistema. Por ejemplo:

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

#### Ejecutar Blink

**1.** Alimenta tu placa con un cable micro-USB (conecta solo la interfaz USB Power, no la interfaz USB Host).
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Power_up.jpg)

**2.** Inicia PuTTy y conéctate al sistema con el adaptador USB a Serial como se muestra en las secciones anteriores.

**3.** Escribe **python /IoT/examples/blink-gpio44.py** y presiona **Enter** para ejecutar el ejemplo Blink.

:::note
    Ten en cuenta que hay 1 espacio en blanco después de la primera palabra "python", de lo contrario el ejemplo no será encontrado.
:::
**4.** Después de aproximadamente 2 segundos, notarás que el LED Wi-Fi parpadea de manera constante.

**5.** En la consola del sistema, escribe **CTRL + C**, esto terminará el ejemplo.

### Conectar a Internet (Cambiar a modo Station)

Hay dos tipos de modos Wi-Fi: modo AP y modo Station. Consulta [esto](https://answers.yahoo.com/question/index?qid=20061207225409AANCN17) para las diferencias entre ellos.

**1.** Alimenta la placa con un cable micro-USB.

**2.** Abre la utilidad de conexión Wi-Fi en tu computadora y conéctate al punto de acceso llamado LinkIt_Smart_7688_XXXXXX. XXXXXX es un tipo de identificador de hardware que varía de placa a placa.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Connect_wifi.jpg)

**3.** Abre un navegador con la URL mylinkit.local/ o 192.168.100.1, establece la contraseña para root e inicia sesión. Haz clic en Network en la parte superior derecha.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Network_conf.jpg)

**4.** Selecciona el modo Station y haz clic en Refresh o en la flecha hacia abajo a la derecha para encontrar el AP al cual conectarse. Después de haber seleccionado el AP, ingresa la contraseña si es requerida. Haz clic en Configure & Restart para finalizar como se muestra a continuación. Luego espera alrededor de 30 segundos para cambiar de modo.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Station_mode.jpg)

**5.** Inicia PuTTy y conéctate al sistema con el adaptador USB a Serial como se muestra en la sección anterior.

**6.** Escribe ifconfig y encuentra la dirección IP de inet addr como se muestra a continuación:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/IFCONFIG.jpg)

:::note
    Seguirá entrando en modo Station después de reiniciar el sistema. Presiona el botón wi-fi al menos 5 segundos para volver al modo AP. Nota: Será necesario reiniciar el SO embebido usando el comando reboot.
:::
**7.** Escribe la IP en una nueva pestaña del navegador y podrás iniciar sesión en la interfaz de usuario Web para configurar el sistema.

**8.** Ahora tanto la computadora host como el LinkIt Smart 7688 están conectados a internet. Escribe ping **www.mediatek.com** en la consola y obtendrás:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Ping_result.jpg)

**9.** Ahora puedes usar internet para configurar tu sistema en la placa de desarrollo.

## Demo: Un ejemplo de Hello world

---

:::note
    Para evitar quedarse sin memoria durante el desarrollo de aplicaciones nativas, deberías configurar el entorno de desarrollo de aplicaciones nativas en un entorno host más potente que te permita compilar de forma cruzada el formato ejecutable del objetivo LinkIt Smart 7688. La siguiente tabla muestra una descripción general de los lenguajes de programación de LinkIt Smart 7688 y los entornos de desarrollo relacionados en la computadora host.
:::

| Lenguaje de programación | Herramientas y bibliotecas                | Aplicaciones                                    | Plataformas host soportadas |
|--------------------------|-------------------------------------------|-------------------------------------------------|-----------------------------|
| C/C++                    | Cadena de herramientas de compilación cruzada | Programación de sistemas                        | OS X Linux                  |
| Python                   | Runtime de Python en LinkIt Smart 7688   | Prototipado Red Biblioteca puente Arduino      | OS X Linux Windows          |
| Node.js                  | Runtime de Node.js en LinkIt Smart 7688  | Prototipado Red                                 | OS X Linux  Windows         |

### Un ejemplo de Hello world en Python

**1.** Usa FileZilla y consulta este [tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29), la dirección IP del servidor (reemplaza **nombre del host**) es la dirección inet encontrada en la sección anterior [Cambiar a modo Station](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode), el nombre de usuario es root y la contraseña es la contraseña que estableciste en esa sección.

**2.** Abre un editor de texto, copia y pega el código de ejemplo a continuación y guárdalo como **helloworld.py**.

```
print "Hello World!"
```

**3.** Copia el archivo **helloworld.py** al sistema en el entorno de desarrollo objetivo (LinkIt Smart 7688) con FileZilla, colócalo bajo la carpeta **root**.

**4.** Ejecuta PuTTy y conéctate al sistema con el adaptador USB a Serial.

**5.** Establece el directorio de trabajo en **/root** e ingresa **python helloworld.py** para ejecutar.

**6.** ¡Ahora puedes ver **Hello World**! impreso en la consola.

## Preguntas Frecuentes

[Aquí](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq) están las preguntas frecuentes de Mediatek.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

----
- **[Eagle]** [LinkIt_Smart_7688](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip)
- **[PDF]** [LinkIt_Smart_7688 PCB](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688%20Layout.pdf)
- **[PDF]** [LinkIt_Smart_7688 Esquema](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688.pdf)
- **[Documento]** [Manual](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Manual.zip)
- **[Documento]** [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
- **[Documento]** [Recursos de MediaTek LinkIt? Smart 7688:](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
- **[Documento]** [Instrucciones_actualización_firmware](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688_Firmware_upgrade.zip)
- **[Documento]** [Certificados](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688-Certificate.zip)
- **[Documento]** [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## Proyectos

**myva-Home (Automatización del hogar controlada por voz)**: Mi Hogar Activado/Controlado por Voz, Usando el Linkit Smart y un Android con ejemplos y librerías fáciles de usar

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/smerkousdavid/myva-home-voice-controlled-home-automation-f4cfe3/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
