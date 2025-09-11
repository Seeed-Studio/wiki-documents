---
description: ReSpeaker Core
title: ReSpeaker Core
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Core
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeaker es una interfaz de voz modular y abierta para hackear las cosas que te rodean. Te permite interactuar con tus electrodomésticos, tu planta, tu oficina, tus dispositivos conectados a internet o cualquier otra cosa en tu vida diaria, todo por medio de tu voz.

- **Es una extensión habilitada por voz para tu entorno**

  ReSpeaker soporta tanto servicios cognitivos en línea como motor de reconocimiento de voz ligero sin conexión. Puedes agregar ReSpeaker a las cosas que te rodean para hacerlas inteligentes (más inteligentes).

- **Es un dispositivo para transmisión de música**

  La interfaz de voz nunca ha estado separada del entretenimiento musical, y ReSpeaker no es la excepción. ReSpeaker soporta Airplay/DLNA para transmisión inalámbrica de música. Solo conecta ReSpeaker a cualquier altavoz común con un cable AUX, y entonces puedes comenzar a disfrutar la música que amas sin presionar un solo botón.

- **Es una herramienta de aprendizaje para niños**

  Más allá del módulo Wi-Fi MT7688 integrado que ejecuta OpenWrt basado en Linux, ReSpeaker también está alimentado por el chip ATmega32u4 y es absolutamente compatible con Arduino, lo que significa que podemos usar ReSpeaker como una poderosa placa Arduino y hacer muchas cosas de 'Arduino'. Es para aprender, es para practicar, y es para divertirse.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## Características

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- Libera Tus Manos: Reconocimiento de voz con o sin Internet
- Transmisión Inalámbrica: transmite música vía Airplay/DLNA
- SDK Fácil de Usar: Para desarrolladores de Python y C/C++
- Características en Crecimiento: Descarga y conecta para enriquecer sus características y funcionalidades.
- Complementos Plug-n-play: Extensible con Arreglo de Micrófonos, Placa de Extensión Grove, Módulos Grove.
- Aplicación sin Instalación: Configura todo en la aplicación basada en web. (Aún No Disponible)

## Especificaciones

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**Especificaciones Técnicas**

- Módulo Wi-Fi AI7688:

  - Sistema operativo: OpenWrt basado en GNU/Linux
  - Red Wi-Fi: Soporta modos Legacy 802.11b/g y HT 802.11n
  - Expansión: Dos cabeceras de expansión para I2C, GPIO y host USB 2.0
  - Interfaces: Puerto AUX de 3.5mm integrado, Micro USB y ranura para tarjeta SD

- Coprocesador ATMega32U4:

  - Puerto serie virtual USB CDC para consola linux
  - 12 indicadores LED RGB programables
  - 8 sensores táctiles integrados

- Códec WM8960:

  - DAC SNR 98dB (ponderado 'A'), THD -84dB a 48kHz, 3.3V  
  - ADC SNR 94dB (ponderado 'A'), THD -82dB a 48kHz, 3.3V  
  - Controlador de Altavoz Clase D Estéreo con 87% de eficiencia (salida 1W)  
  - Controlador de Auriculares integrado  
  - 40mW de potencia de salida en 16Ω a 3.3V  
  - THD -75dB a 20mW, SNR 90dB con carga de 16Ω  
  - PLL integrado proporciona esquema de reloj flexible  
  - Frecuencias de muestreo: 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48 kHz

- Fuente de Alimentación: 5V DC  

- Dimensiones: 70mm de diámetro  

- Peso: 17g

**Diagrama de Pines**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC: Controla codificador/decodificador externo, señal ADC
- GPIO1/I2S_DAC: Controla codificador/decodificador externo, señal DAC
- GPIO2/I2S_LRCLK: Controla codificador/decodificador externo, Reloj de muestra de canal izquierdo/derecho
- GPIO3/I2S_BCLK: Controla codificador/decodificador externo, Reloj de bit
- MCLK_OUT: Reloj maestro para dispositivo externo
- HP_SEL: Selección de canal de auriculares. Si usas ReSpeaker Mic Array para salida de audio, configura HP_SEL en alto
- HP_L: Canal izquierdo de audio analógico desde ReSpeaker Mic Array
- HP_R: Canal derecho de audio analógico desde ReSpeaker Mic Array
- AGND: Tierra analógica para audio

## Primeros Pasos

---

### ¿Qué debo hacer cuando obtengo por primera vez un ReSpeaker Core?

**1. Preparativos**

- ReSpeaker Core
- PC o Mac
- Red Wi-Fi
- Tarjeta SD

**2. Conectar a la consola serie**

- Para Windows, se recomienda [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

  - Conecta ReSpeaker a tu PC vía USB, verifica el "Administrador de dispositivos" para el puerto COM. Aquí mi puerto COM de ReSpeaker es COM31.

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - Selecciona Serial bajo Tipo de conexión. En el campo Línea serie, ingresa el puerto COM para tu ReSpeaker. En el campo Velocidad, escribe 57600.

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - Haz clic en Abrir. Cuando veas una pantalla en blanco, presiona la tecla Enter.

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- Para Linux/Mac

  - Conecta ReSpeaker a tu PC vía USB
  - Abre una sesión de Terminal
  - Escribe ls /dev/tty.usb* en el Terminal. Deberíamos ver una lista de dispositivos. Busca algo como tty.usbmodemXXXXX donde XXXXX es usualmente un identificador aleatorio. Este es el dispositivo serie usado para acceder a la consola del sistema. Luego usa la utilidad screen para conectarte al puerto serie y establece la velocidad de baudios a 57600. Esto es porque la velocidad de baudios de la consola del sistema es 57600 por defecto.

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. Configurar Wi-Fi**

ReSpeaker está configurado en Modo Repetidor por defecto, y tienes que conectarlo a una red inalámbrica existente antes de disfrutar del reconocimiento de voz con Internet.

Cuando enciendas ReSpeaker por primera vez, creará una red Wi-Fi llamada "ReSpeakerXXXXXX". Aquí "XXXXXX" son los últimos 6 dígitos de la dirección MAC de tu ReSpeaker, que está marcada en la placa. Conecta tu computadora a esta red.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
Si "ReSpeakerXXXXXX" no aparece, pero se encuentra "LinkIt_Smart_7688_XXXXXX". Por favor haz clic [aquí](https://wiki.seeedstudio.com/es/ReSpeaker_Core/#q20-system-recovery-by-factory-image).
:::

Una vez que hayas obtenido una dirección IP, abre un navegador web e ingresa 192.168.100.1 en la barra de direcciones. Después de unos segundos, aparecerá una página web pidiendo el ssid y la contraseña de una red Wi-Fi existente.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

Selecciona la Wi-Fi a la que deseas conectarte e ingresa la contraseña. Cuando presiones el botón OK, ReSpeaker se unirá a la red especificada.

Ahora tu ReSpeaker puede acceder a Internet.

También, aquí hay otra forma de configurar Wi-Fi con línea de comandos.
Podemos usar wictl para escanear el wifi y conectarlo.

```
root@mylinkit:~# wictl
0, SEEED-MKT
1, Xiaomi_Youth
2, ChinaNet-Z5C4
3, STU-EE
4, EMBEST_WIFI
5, SEEED-MKT
6, nobody
7, SEEED-MKT
8, se.VPN
9, Moovent_HK_2G
10, LinkIt_Smart_7688_1D917A
11, SEEED-MKT
12, SEEED-MKT
13, zhongrixing
Please choose your wifi: 8
Please input the wifi password: 88888888
udhcpc (v1.23.2) started
Sending discover...
Sending discover...
Sending select for 192.168.199.153...
Lease of 192.168.199.153 obtained, lease time 43200
udhcpc: ifconfig apcli0 192.168.199.153 netmask 255.255.255.0 broadcast 192.168.199.255
udhcpc: setting default routers: 192.168.199.1
success
root@mylinkit:~#
```

:::note
Si no puedes conectar Wifi con los métodos anteriores, por favor realiza un restablecimiento de fábrica ingresando el comando firstboot.
:::

Después de que la función Wifi esté habilitada, podemos usar SSH para conectar Respeaker con el siguiente comando. Podemos obtener la dirección IP de Respeaker desde
&lt;http://192.168.100.1/#!/overview&gt; WAN IP. La contraseña es root.

```
ssh root@ssh *.*.*.*

```

**4. Usar Tarjeta SD para Extender el Almacenamiento**

Muy a menudo, una cantidad limitada de almacenamiento está disponible en dispositivos embebidos (ReSpeaker tiene solo 5M de almacenamiento flash a bordo disponible para los usuarios). Más almacenamiento para aplicaciones y datos puede expandir el potencial de ReSpeaker, por lo que usar una tarjeta SD para extender el almacenamiento como un **extroot** es una buena opción.

Al emplear **extroot**, la expansión de la capacidad de almacenamiento de tu sistema de archivos raíz se logra usando un dispositivo de almacenamiento añadido.
Durante el proceso de arranque, el espacio de almacenamiento externo se monta como el sistema de archivos raíz, o en una configuración de superposición sobre el sistema de archivos original.

- Asegúrate de que tu tarjeta SD esté conectada a ReSpeaker y que /dev/mmcblk0p1 pueda ser detectado por df -h o ls /dev.

```
root@ReSpeaker:/# df -h
Filesystem                Size      Used Available Use% Mounted on
rootfs                    1.8M    832.0K    960.0K  46% /
/dev/root                29.0M     29.0M         0 100% /rom
tmpfs                    61.7M    276.0K     61.5M   0% /tmp
/dev/mtdblock6            1.8M    832.0K    960.0K  46% /overlay
overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
tmpfs                   512.0K         0    512.0K   0% /dev
/dev/mmcblk0p1            7.4G      2.5M      7.4G   0% /tmp/run/mountd/mmcblk0p1
```

- Formatea tu tarjeta SD en dos particiones, una es FAT32, la otra es EXT4. El sistema de archivos EXT4 será como un extroot mientras que FAT32 será como un dispositivo de almacenamiento normal, que es capaz de transferir archivos entre ReSpeaker y tu PC.

```
 umount /dev/mmcblk0p1
 fdisk /dev/mmcblk0
  ------------------ fdisk ------------------------
 >Command (m for help):o
 >Created a new DOS disklabel
 >Command (m for help):n
 >Partition type
 p   primary (0 primary, 0 extended, 4 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 1):1
 >First sector (2048-15523839, default 2048):
 >Last sector, +sectors or +size{K,M,G,T,P} (2048-15523839, default 15523839): +2G
 >Command (m for help):n
 >Partition type
 p   primary (1 primary, 0 extended, 3 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 2):2
 >First sector (4196352-15523839, default 4196352):
 >Last sector, +sectors or +size{K,M,G,T,P} (4196352-15523839, default 15523839):
 >Command (m for help):w
 >The partition table has been altered.
 >Calling i[  292.010000]  mmcblk0: p1 p2
 >octl() to re-read partition table.
 >Syncing disks.
  ------------------ end ------------------------

 mkfs.fat /dev/mmcblk0p1
 mkfs.ext4 /dev/mmcblk0p2

 # reload mtk_sd kernel module
 rmmod mtk_sd
 insmod mtk_sd

```

- Prepara tu superposición raíz de almacenamiento externo.

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- Crea fstab con el siguiente comando. Este comando creará una plantilla fstab habilitando todas las particiones y estableciendo la partición '/mnt/mmcblk0p2' como partición '/overlay'.

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- Verificar si es montable en overlay.

```
 root@mylinkit:/# mount /dev/mmcblk0p2 /overlay/
 root@ReSpeaker:/# df -h
  Filesystem                Size      Used Available Use% Mounted on
  rootfs                    1.8M    832.0K    960.0K  46% /
  /dev/root                29.0M     29.0M         0 100% /rom
  tmpfs                    61.7M    276.0K     61.5M   0% /tmp
  /dev/mtdblock6            5.2G     11.8M      4.9G   0% /overlay
  overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
  tmpfs                   512.0K         0    512.0K   0% /dev
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /tmp/run/mountd/mmcblk0p2
  /dev/mmcblk0p1            2.0G      4.0K      2.0G   0% /tmp/run/mountd/mmcblk0p1
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /overlay
```

- Reinicia ReSpeaker y verifica nuevamente. Si la tarjeta SD se monta automáticamente, has terminado. Para más información sobre **extroot**, haz clic [aquí](https://wiki.openwrt.org/doc/howto/extroot).

**5. Instalar software en ReSpeaker**

Después de extender el almacenamiento con una tarjeta SD, hay suficiente almacenamiento para instalar software en ReSpeaker.

Instalar git

```
 opkg update
 opkg install git git-http
```

**6. Actualizar Biblioteca de Python**

```
git clone https://github.com/respeaker/respeaker_python_library.git
cd respeaker_python_library
python setup.py install
```

### Primera impresión con Interacción de Voz - ReSpeaker, reproducir música

Con la API de Bing Speech, ReSpeaker puede activarse y reconocer audio proveniente del micrófono en tiempo real, o reconocer audio desde un archivo.

Para usar la API de Bing Speech, primero tienes que obtener una clave de Microsoft Cognitive Services desde [aquí](https://www.microsoft.com/cognitive-services/en-us/speech-api), y copiarla a BING_KEY = '' , luego guarda el siguiente código en playmusic.py y ejecútalo

```sh
# stop mopidy and alexa to avoid USB device occupation
/etc/init.d/mopidy stop
/etc/init.d/alexa stop
python playmusic.py
```

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/getbingapi.png)

```
import logging
import time
import os
from threading import Thread, Event
from respeaker import Microphone
from respeaker.bing_speech_api import BingSpeechAPI

# use madplay to play mp3 file     
os.system('madplay')               

# get a key from https://www.microsoft.com/cognitive-services/en-us/speech-api
BING_KEY = ''      


def task(quit_event):                                                         
    mic = Microphone(quit_event=quit_event)                                   
    bing = BingSpeechAPI(key=BING_KEY)                                        

    while not quit_event.is_set():
        if mic.wakeup('respeaker'):        
            print('Wake up')               
            data = mic.listen()            
            try:                      
                text = bing.recognize(data)
                if text:           
                    print('Recognized %s' % text)
                    if 'play music' in text:
                        print('I will play music!')
                        os.system('madplay Tchaikovsky_Concerto_No.1p.mp3')
            except Exception as e:               
                print(e.message)                 

def main():                                                              
    logging.basicConfig(level=logging.DEBUG)                                                           
    quit_event = Event()        
    thread = Thread(target=task, args=(quit_event,))
    thread.start()                          
    while True:                             
        try:                                
            time.sleep(1)                           
        except KeyboardInterrupt:                   
            print('Quit')                           
            quit_event.set()
            break        
    thread.join()                

if __name__ == '__main__':       
    main()                  
```

Después de que aparezca "INFO:mic:Start Detecting", intenta decir "ReSpeaker" para activar el programa, y di "play music" para que reproduzca música. Entonces ReSpeaker reproducirá "Tchaikovsky_Concerto_No.1p.mp3" en la ruta actual con la herramienta **madplay**.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

Si ves el código de error a continuación, mopidy se está ejecutando en segundo plano y está usando el dispositivo USB. Así que intenta ejecutar /etc/init.d/mopidy stop mopidy y ejecuta tu comando nuevamente.

```
root@ReSpeaker:~# python playmusic.py
Usage: madplay [OPTIONS] FILE [...]
Try `madplay --help' for more information.
Exception in thread Thread-2:
Traceback (most recent call last):
File "/usr/lib/python2.7/threading.py", line 810, in __bootstrap_inner
```

## Aplicación

---

### Piano de frutas

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano.PNG)

En lugar del módulo Wi-Fi MT7688 integrado que ejecuta OpenWrt basado en Linux, ReSpeaker también está alimentado por el chip ATmega32u4 y es absolutamente compatible con Arduino, lo que significa que podemos usar ReSpeaker como una potente placa Arduino y hacer muchas cosas de 'Arduino'. Es para aprender, es para practicar, y es para divertirse.

Por ejemplo, puedes programarlo con Arduino IDE para tener un piano DIY especial que está construido sobre 8 tomates cherry conectados a los 8 sensores táctiles de ReSpeaker.
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. git clone &lt;https://github.com/respeaker/piano.git&gt;  En ReSpeaker, descarga el repositorio
2. Descarga [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) en tu computadora
3. Sube [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) al Arduino Leonardo de ReSpeaker (ATmega32U4)
4. Ejecuta python piano.py en la consola serial de ReSpeaker

### Nube del Clima

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

Weather Cloud es un proyecto increíble para ReSpeaker. Esta genial construcción convierte un ReSpeaker en una Nube del Clima, que es capaz de mostrarte el clima con luces y sonidos vívidos.

En este proyecto, Openwrt se encarga de obtener información meteorológica en tiempo real de Internet, hacer interacción de voz y salida de audio, mientras que Arduino es responsable de controlar los LEDs RGB coloridos.

1. git clone &lt;https://github.com/jerryyip/WeatherCloud.git&gt;  en ReSpeaker, descarga el repositorio
2. Descarga [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) en tu computadora
3. Sube [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) en ReSpeaker Arduino Library al Arduino de ReSpeaker
4. Obtén el appid de OpenWeatherMap desde [aquí](http://openweathermap.org/appid) y cópialo a appID = "" en main.py, no olvides agregar tu ciudad en city=""
5. Detén el servicio mopidy en OpenWrt antes de usar el puente SPI
/etc/init.d/mopidy stop
6. Ejecuta python main.py y di "ReSpeaker, ¿cómo está el clima?" a ReSpeaker.
7. Para más detalles sobre cómo hacer una Nube del Clima, por favor haz clic [aquí](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/).

## ReSpeaker Mic Array

---

### [ReSpeaker Mic Array](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

El ReSpeaker Mic Array puede ser apilado (conectado) directamente en la parte superior del ReSpeaker Core para mejorar significativamente la experiencia de interacción de voz. Está desarrollado basado en el Smart Microphone XVSM-2000 de XMOS. La placa integra 7 micrófonos PDM para ayudar a mejorar el rendimiento DSP acústico de ReSpeaker a un nivel mucho más alto.

## Acerca de nuestro software

---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arduino Library proporciona las siguientes características:

- Detección táctil capacitiva soportada
- Driver de LED RGB WS2812 implementado
- Puente USB a Serial construido y puente SPI entre - Arduino (ATmega32U4) y OpenWrt basado en linux (MT7688)

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeaker es un proyecto abierto para crear objetos habilitados por voz. La biblioteca python de ReSpeaker es una biblioteca python de código abierto para proporcionar funciones básicas de interacción de voz.

Usa PocketSphinx para detección de palabras clave y usa webrtcvad para detección de actividad de voz.

### [Más información por favor ve a nuestros Repositorios de GitHub](https://github.com/respeaker)

## FAQ

---
**P1: ¿Cómo hacer un Restablecimiento de Fábrica?**

- Abre la consola serie o una sesión ssh y ejecuta firstboot. [Más detalles](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset).

**P2: ¿Cómo Recuperarse de una actualización fallida?**

- Cuando el respeaker falla al arrancar en su sistema openwrt, no podemos acceder al sistema a través del terminal web, ssh o consola serie. Podemos seguir las [Instrucciones de Recuperación](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade) para recuperarlo.

**P3: ReSpeaker no puede encontrar mi Wi-Fi**

- Intenta primero el [restablecimiento de fábrica](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset).
- Y el Canal 12 de Wi-Fi no es compatible con ReSpeaker. Asegúrate de que tu router no esté usando ese canal.

**P4: Configuración de Wifi**

- Te aconsejamos configurar Wi-Fi a través de [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi) y si no se puede usar, prueba la herramienta de línea de comandos [wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi) en la consola serie.

**P5: ¿Cómo cambiar el idioma de reconocimiento de la API de voz de BING?**

- Si no necesitas cambiar las palabras de activación, simplemente cambia text = bing.recognize(data) por text = bing.recognize(data,language="zh-CN") está bien. [Más detalles](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py).

**P6: Recibí mensaje de advertencia de tarjeta SD "El volumen no fue desmontado correctamente. Algunos datos pueden estar corruptos. Por favor ejecuta fsck"**

- Si los archivos en la tarjeta SD están bien, ignóralo. De lo contrario, intenta formatearla con [sd card formatter](https://www.sdcard.org/downloads/formatter_4/).

**P7: Flash defectuoso desde Arduino**

- Re-flashea el bootloader en openwrt.

```
/etc/init.d/mopidy stop  # stop mopidy if it's running, mopidy-hallo plugin will use SPI
/etc/init.d/alexa stop      # stop alexa if it's running
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**P8: Olvidé la contraseña de la WebUI**

- Restablecer la contraseña de juci

```
orangectl passwd root 12345678  //replace 12345678 with the password you want to set
```

**P9: ¿Cómo soportar google speech u otro motor de Voz a Texto (STT)?**

- Instala la biblioteca speech_recognition siguiendo la [guía](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)

**P10: Error al ejecutar Alexa con el error "IOError: [Errno -9998] Invalid number of channels"**

- Hay otra aplicación o instancia de alexa usando el dispositivo de entrada de audio. Ejecuta /etc/init.d/alexa stop y /etc/init.d/mopidy stop para detenerlos. Para deshabilitar que mopidy se inicie automáticamente, ejecuta /etc/init.d/mopidy disable.

**P11: Error al ejecutar python playmusic.py**

- Debería ser que mopidy está ejecutándose en segundo plano y está usando el dispositivo USB. intenta ejecutar /etc/init.d/mopidy stop para detener mopidy y ejecuta tu comando nuevamente.

**P12: No tengo una conexión RPC**

- Necesitas volver a flashear el firmware, siguiendo la [guía](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)

**P13: SFTP & FTP**

- No tenemos un FTP en respeaker, solo SFTP.

**P14: Consola serie bloqueada**

- Intenta actualizar el [código de arduino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino).

**P15: ¿Cómo deshabilitar el modo 'ap'?**

- Podríamos establecer la bandera 'ssid' de la interfaz 'ap' a '' en vi /etc/config/wireless. Entonces el ap estará oculto.

**P16: Problema con la tarjeta de sonido I2C**

- Necesitamos verificar el nombre compatible del controlador del codec y la dirección i2c del codec. Luego reconstruir el firmware de la imagen.

**P17: Respeaker se despierta frecuentemente incluso sin voz.**

- Podemos reducir la tasa de falsos positivos aumentando el umbral en keyword.txt, pero también reduce la sensibilidad.
- Otra forma es adaptar tu voz con el módulo acústico actual, más detalles vía [http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt).
- Mejorará efectivamente el reconocimiento individual de palabras clave, pero puede hacer que el reconocedor sea menos general.

**P18: ¿Cómo controlar los pines GPIO desde respeaker?**

- Podemos usar [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py)
- El ejemplo es [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py), que usa GPIOs para simular SPI

**P19: ¿Cómo cambiar la palabra de activación?**

- keywords.txt contiene palabras clave y su umbral. Por ejemplo, keywords.txt de [aquí](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt) es

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 respeaker es una palabra clave, 1e-30 es su umbral. Para mejorar la sensibilidad, podemos disminuir el umbral, por ejemplo, 1e-50. Debemos saber que disminuir el umbral aumentará la Tasa de Aceptación Falsa.

Si quieres añadir una nueva palabra clave, primero debes añadir la palabra clave a [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt). El dictionary.txt es como:

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 La primera parte es un nombre (respeaker, alexa o music), la segunda parte son sus fonemas. Puedes encontrar palabras en un diccionario grande en [aquí](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt).

- luego cambia el código:

 ```
 if mic.wakeup('respeaker'):
 ```

- El directorio de la palabra clave es `/root/respeaker_python_library/respeaker/pocketsphinx-data`

**P20: Recuperación del sistema mediante imagen de fábrica.**

Nota: Si no puedes actualizar tu ReSpeaker vía Web o no puedes visitar [http://192.168.100.1/home.html](http://192.168.100.1/home.html), por favor haz clic [aquí](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin). para descargar el firmware más reciente en tu computadora, cópialo a una tarjeta SD e inserta la tarjeta SD en el ReSpeaker.

Conéctate a la [consola serie](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console). del ReSpeaker, escribe las siguientes líneas de comando para actualizar el firmware:

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

ReSpeaker tardará aproximadamente 3 minutos en instalar el firmware y reiniciar, por favor **no apagues** ReSpeaker durante la actualización.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/systemupdate2.png)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

----

- **[Eagle]**[ReSpeaker Core v1.0 SCH](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 BRD](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 Esquemático(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB inferior(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB superior(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[Documento]**[ReSpeaker_Detalle](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [Hoja de Datos AI7688](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

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

