---
description: reTerminal-FAQ
title: Preguntas Frecuentes sobre el Uso de reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-FAQ
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Preguntas Frecuentes sobre el Uso de reTerminal

Este documento contiene todas las preguntas frecuentes relacionadas con reTerminal. Esto será muy útil si estás experimentando algún problema al usar el reTerminal.

## P1: ¿Cómo puedo actualizar el firmware STM32 para la LCD de reTerminal?

**Nota:** Si tu reTerminal fue fabricado después del 26/09/2021, el STM32 viene con el firmware V1.8 preinstalado.

Es muy importante asegurarse de que tienes el firmware más reciente instalado en el chip STM32G030 del reTerminal. El STM32G030 es responsable de controlar la LCD del reTerminal. Actualizar el chip STM32 a la versión más reciente será útil para resolver la mayoría de los problemas que puedas enfrentar con la LCD del reTerminal.

Hay 2 métodos para flashear el chip STM32.

- **Método 1:** Conectar directamente al chip STM32 usando el CM4 en el reTerminal y flashear el firmware
- **Método 2:** Conectar físicamente los pines del chip STM32 al GPIO de 40 pines del reTerminal usando cables puente y luego usar OpenOCD para flashear el firmware

El **Método 1** funciona si tienes la **nueva versión (v1.7 o superior)** del firmware STM32 en el reTerminal y por otro lado, el **método 2** solo es necesario si tienes la **versión antigua (inferior a v1.7)** del firmware STM32 en la placa.

### Decidir Qué Método de Flasheo Usar

Ahora vamos a seguir los siguientes pasos para identificar qué versión de la placa tenemos para que podamos elegir el método de flasheo apropiado.

- **Paso 1.** Ingresa a la ventana de terminal del reTerminal y escribe lo siguiente para abrir el archivo de configuración

```sh
sudo nano /boot/config.txt
```

- **Paso 2.** En la parte inferior de este archivo, comenta la línea que dice **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

**Nota:** Esto descargará todos los controladores del reTerminal. Por lo tanto, cuando enciendas el reTerminal la próxima vez, ninguno de los controladores se cargará.

- **Paso 3.** Reinicia el reTerminal

```sh
sudo reboot
```

- **Paso 4.** Hacer que STM32 entre en **modo boot** a través de **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Paso 5.** Listar los dispositivos I2C conectados

```sh
i2cdetect -y 1
```

Si puedes ver la dirección I2C **0x56** como se muestra en la tabla a continuación, tienes la **nueva versión (v1.7 o superior)** del firmware STM32 en la placa.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

Sin embargo, si puedes ver la dirección I2C **0x45** como se muestra en la tabla a continuación, tienes la **versión antigua (inferior a v1.7)** del firmware STM32 en la placa

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Abre el archivo de configuración que usamos anteriormente

```sh
sudo nano /boot/config.txt
```

- **Paso 7.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal** para cargar los controladores nuevamente

```sh
dtoverlay=reTerminal
```

- **Paso 8.** Apagar reTerminal

```sh
sudo poweroff
```

**Nota:** Si ya estás ejecutando el **firmware STM32 v1.8**, una vez que ingreses al **modo boot** a través de **i2c-tools**, la única forma de salir del modo boot es flashear el firmware STM32.

### Conectar al STM32 usando CM4 y flashear el firmware

Si tienes la **nueva versión (v1.7 o superior)** del firmware STM32 en la placa, por favor sigue este método.

- **Paso 1.** Ingresa a la ventana de terminal de reTerminal y escribe lo siguiente para abrir el archivo de configuración

```sh
sudo nano /boot/config.txt
```

- **Paso 2.** En la parte inferior de este archivo, comenta la línea que dice **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **Paso 3.** Reinicia reTerminal

```sh
sudo reboot
```

- **Paso 4.** Crea un nuevo directorio dentro de reTerminal e ingresa a él.

```sh
mkdir STM32
cd STM32
```

<!-- - **Paso 5.** Visita [este enlace](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) y descarga el archivo **stm32flash** y el archivo **STM32G030F6_R2.bin** de la **última versión** de lanzamiento.

**Nota:** Puedes hacer clic en ellos para comenzar la descarga -->

- **Paso 5.** Descarga el archivo **stm32flash** y el **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **Paso 6.** Descomprimir **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **Paso 7.** Ve a la carpeta llamada **stm32flash-0.7** y haz ejecutable la herramienta de flash

```sh
cd stm32flash-0.7/
make
```

- **Paso 8.** Hacer que STM32 entre en **modo boot** a través de **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Paso 9.** Borra la flash en el chip STM32 usando la **herramienta stm32flash**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **Paso 10.** Flashea el firmware al STM32 usando la herramienta stm32flash

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** es el nombre del archivo del nuevo firmware

- **Paso 11.** Modifica el registro OPTR como sigue

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **Paso 12.** Abre el archivo de configuración que usamos antes

```sh
sudo nano /boot/config.txt
```

- **Paso 13.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Paso 14.** Reinicia reTerminal

```sh
sudo reboot
```

<!-- - **Paso 6.** Abre el símbolo del sistema en la PC y navega a la ubicación de los archivos descargados antes

```sh
cd C:\Users\user\Downloads
```

- **Paso 7.** Transfiere los archivos al directorio **STM32** en el reTerminal que creamos anteriormente

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**Nota:** **pi** es el nombre de usuario y **192.168.x.xx** es la dirección IP del reTerminal. También puedes reemplazar esto con el nombre de host del reTerminal.

- **Paso 8.** Dentro de la ventana de terminal del reTerminal, ingresa al directorio **STM32**

```sh
cd STM32
```

Luego verás los archivos que copiamos anteriormente

- **Paso 9.** Hacer que la herramienta de flash sea **ejecutable**

```sh
chmod +x stm32flash
``` -->
<!-- - **Paso 10.** Hacer que STM32 entre en **modo de arranque** a través de **herramientas-i2c**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Paso 11.** Borra la flash en el chip STM32 usando la **herramienta stm32flash**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **Paso 12.** Flashea el firmware al STM32 usando la herramienta stm32flash

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** es el nombre del archivo del nuevo firmware

- **Paso 13.** Modifica el registro OPTR como sigue

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **Paso 14.** Abre el archivo de configuración que usamos antes

```sh
sudo nano /boot/config.txt
```

- **Paso 15.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Paso 16.** Reinicia reTerminal

```sh
sudo reboot
``` -->

¡Ahora has flasheado exitosamente el firmware al STM32!

### Conectar a STM32 usando cables puente y OpenOCD

Si tienes la **versión antigua (inferior a v1.7)** del firmware STM32 en la placa, por favor sigue este método.

- **Paso 1.** Ingresa a la ventana de terminal de reTerminal y escribe lo siguiente para actualizar la lista de paquetes

```sh
sudo apt-get update
```

- **Paso 2.** Instala los siguientes paquetes

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **Paso 3.** Clona el siguiente repositorio y navega hacia él

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **Paso 4.** Visita [este enlace](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) y descarga el archivo **STM32G030F6_R2.bin** de la versión de **lanzamiento más reciente**.

**Nota:** Puedes hacer clic en él para comenzar la descarga

- **Paso 5.** Abre el símbolo del sistema en la PC y navega a la ubicación de los archivos descargados anteriormente

```sh
cd C:\Users\user\Downloads
```

- **Paso 6.** Transfiere los archivos al directorio **openocd** en el reTerminal que creamos anteriormente

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**Nota:** **pi** es el nombre de usuario y **192.168.x.xx** es la dirección IP del reTerminal. También puedes reemplazar esto con el nombre de host del reTerminal.

- **Paso 7.** Regresa a la ventana del terminal en reterminal e ingresa lo siguiente dentro del directorio **openocd**

```sh
./bootstrap
```

**Paso 8.** Ingresa lo siguiente

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **Paso 9.** Compílalo

```sh
make
```

- **Paso 10.** Instálalo

```sh
sudo make install
```

- **Paso 11.** Sigue la conexión a continuación para conectar los pines del STM32 al GPIO de 40 pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Los pines del STM32 están ubicados en la parte posterior de la PCBA del reTerminal.

- **Paso 12.** Mientras mantienes la conexión, ingresa el siguiente comando para flashear el firmware al STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**Nota:** Normalmente toma alrededor de 3 segundos terminar el flasheo. Por lo tanto, necesitas **mantener** la conexión anterior durante aproximadamente **3 segundos** hasta que el proceso de flasheo esté completo

Si ves el siguiente log, ¡eso significa que el firmware STM32 se flasheó exitosamente!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **Paso 13.** Desconecta las conexiones y **desconecta físicamente el cable de alimentación directamente** sin el comando **poweroff**

**Nota:** Si no desconectas físicamente el cable de alimentación, el firmware STM32 no se cargará exitosamente

¡Ahora has flasheado exitosamente el firmware al STM32!

### Verificar la versión del firmware STM32G030 instalado

Ahora vamos a verificar la versión del firmware STM32 instalado

- **Paso 1.** Ingresa a la ventana de terminal del reTerminal y escribe lo siguiente para abrir el archivo de configuración

```sh
sudo nano /boot/config.txt
```

- **Paso 2.** En la parte inferior de este archivo, comenta la línea que dice **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **Paso 3.** Reinicia reTerminal

- **Paso 4.** Ingresa lo siguiente dentro de la ventana de terminal de reTerminal para verificar la versión del firmware STM32

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

Si la salida se ve como **0x01 0x07**, eso significa que estás usando la versión de firmware 1.7

- **Paso 5.** Abre el archivo de configuración que usamos antes

```sh
sudo nano /boot/config.txt
```

- **Paso 6.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Paso 7.** Reinicia reTerminal

```sh
sudo reboot
```

## P2: ¿Cómo puedo flashear Raspberry Pi OS que originalmente viene con reTerminal?

Si has flasheado a un SO diferente y quieres volver al Raspberry Pi OS predeterminado que viene con reTerminal, puedes seguir los pasos a continuación

- **Paso 1.** Descarga el Raspberry Pi OS visitando los enlaces a continuación

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Nota:** reTerminal originalmente viene con SO de 32 bits. Sin embargo, también puedes descargar una versión de 64 bits

- **Paso 2.** Extrae el **archivo .zip**

- **Paso 3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 5.** Haz clic en **CHOOSE OS** y selecciona **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Navega a la imagen previamente extraída, selecciónala y haz clic en **open**

- **Paso 7.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 8.** Finalmente, haz clic en **WRITE**

## P3: Cómo actualizar Raspberry Pi OS y los paquetes instalados

Actualizaremos todos los paquetes y también el Raspberry Pi OS a la última versión

- **Paso 1.** Abre una ventana de terminal en el reTerminal y escribe lo siguiente

```sh
sudo apt update
sudo apt full-upgrade
```

- **Paso 2.** Reinstalar los encabezados del kernel

```sh
sudo apt install raspberrypi-kernel-headers
```

- **Paso 3.** Reinicia el reTerminal

```sh
sudo reboot
```

¡Ahora tu Raspberry Pi OS y todos los paquetes necesarios están actualizados!

## P4: ¿Cómo puedo flashear el SO si reemplazo el CM4 con una versión sin eMMC?

Si quieres usar un Compute Module 4 sin eMMC en el reTerminal, entonces necesitas insertar una micro-SD y flashear el SO de tu elección. Sigue los pasos a continuación según tu sistema operativo.

- **Paso 1.** Inserta una tarjeta micro-SD en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

**Nota:** Puedes elegir descargar para **Windows, Mac o Ubuntu**

- **Paso 3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 5.** Haz clic en **ELEGIR SO** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**NOTA:** Puedes seleccionar SO como **Ubuntu de 64 bits** navegando a **Otros SO de propósito general**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 6.** Haz clic en **ELEGIR ALMACENAMIENTO** y selecciona la tarjeta micro-sd conectada

- **Paso 7.** Finalmente, haz clic en **ESCRIBIR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 8.** Expulsa la tarjeta micro-SD de la computadora e insértala en el reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Nota:** Necesitas abrir la carcasa del reTerminal para acceder a la ranura de la tarjeta micro-sd

## P5: ¿Cómo puedo iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otros SO usando un convertidor USB a serial?

Si tienes un **Convertidor USB a Serial**, puedes usar los siguientes pasos para iniciar sesión en Raspberry Pi OS

Conecta cables jumper desde un Convertidor USB a Serial a los **pines UART** en el header GPIO de 40 pines del reTerminal como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Ahora configuremos el software en la computadora. Por favor sigue según tu sistema operativo

### Para Windows

- **Paso 1.** Conecta el Convertidor USB a Serial a la PC

- **Paso 2.** Abre el **Administrador de dispositivos** escribiendo **Administrador de dispositivos** en la caja de búsqueda de windows

- **Paso 3.** Haz clic en la flecha desplegable de **Puertos (COM y LPT)** y encuentra el nombre del puerto serial conectado (ej: **COM7**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **Paso 4.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet donde puedes usarlo para conectarte al reTerminal vía SSH. Puedes omitir este paso si ya tienes Putty instalado

- **Paso 5.** Abre Putty para conectar la PC al reTerminal

- **Paso 6.** Selecciona **Serial** bajo el **Tipo de Conexión**

- **Paso 7.** Configura las configuraciones como sigue:

  - Línea serial: COM7 (elige tu puerto COM)
  - Velocidad: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **Paso 8.** Haz clic en **Abrir**

- **Paso 9.** En la ventana de Putty, ingresa los detalles de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 10.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Para Mac/Linux

- **Paso 1.** Conecta el Convertidor USB a Serie al PC

- **Paso 2.** Abre una **ventana de terminal** en Mac/Linux

- **Paso 3.** Escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 4.** Escribe lo siguiente para instalar **minicom**

```sh
sudo apt-get install minicom
```

- **Paso 5.** Escribe lo siguiente en la terminal para ver los dispositivos serie conectados

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>Ej: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **Paso 6.** Conéctate al dispositivo serie escribiendo lo siguiente

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**Nota:** La velocidad de baudios está configurada a 9600

- **Paso 7.** Después de las conexiones de hardware mencionadas anteriormente, enciende la alimentación desde el enchufe de pared para encender el reTerminal

Ahora has iniciado sesión exitosamente en Raspberry Pi OS.

## P6: No puedo despertar la pantalla LCD del reTerminal después del modo de suspensión

Abre una ventana de terminal después de conectarte a través de SSH o VNC e ingresa los siguientes comandos

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

Esto reinicializará la LCD en el reTerminal

## P7: ¿Cómo puedo arrancar un SO desde una unidad flash USB?

Puedes arrancar un SO desde una unidad flash USB siguiendo los pasos a continuación. Aquí cambiamos el orden de arranque a **Arranque USB > Arranque eMMC**, lo que significa que si el arranque USB falla, arrancará desde eMMC.

**Nota:** Tendrás que usar Ubuntu o MacOS como PC anfitrión para este método.

- **Paso 1.** Retira las 4 cubiertas de goma y abre la carcasa trasera del reTerminal desatornillando los 4 tornillos que están debajo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **Paso 2.** Retira los 2 tornillos para desensamblar el disipador de calor y también los 4 tornillos restantes para desarmar toda la carcasa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 3.** Voltea hacia abajo el **interruptor de modo de arranque** según el diagrama a continuación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Abre una ventana de **Terminal** dentro del PC anfitrión después de conectar al reTerminal y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt update
```

- **Paso 5.** Instala **Git** con el siguiente comando

```sh
sudo apt install git
```

- **Paso 6.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 7.** Clonar e ingresar al repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 8.** Ingresa lo siguiente para instalar **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Paso 9.** Construir e instalar la herramienta usbboot

```sh
make
```

- **Paso 10.** Abrir el archivo de configuración del bootloader

```sh
sudo nano recovery/boot.conf
```

- **Paso 11.** Cambia el campo **BOOT_ORDER** a lo siguiente

```sh
BOOT_ORDER=0xf15
```

**Nota:** Aquí si el arranque USB falla, cambia al arranque eMMC

- **Paso 12.** Ejecuta lo siguiente para actualizar la imagen EEPROM

```sh
cd recovery
./update-pieeprom.sh
```

El archivo pieeprom.bin ahora está listo para ser flasheado al Compute Module 4

- **Paso 13.** Navega de vuelta al directorio **usbboot**

```sh
cd ..
```

- **Paso 14.** Ejecuta la herramienta usbboot para flashear la EEPROM del bootloader

```sh
sudo ./rpiboot -d recovery
```

- **Paso 15.** Conecta reTerminal al PC mediante cable USB Tipo-C

Ahora tomará unos segundos transferir los archivos necesarios al reTerminal.

- **Paso 16.** Apaga reTerminal, cambia el interruptor de Modo de Arranque de vuelta a la posición original y ensambla la carcasa del reTerminal

- **Paso 17.** Conecta una Unidad Flash USB arrancable con un SO adecuado dentro, conéctala a uno de los Puertos USB del reTerminal y enciende reTerminal

Ahora verás reTerminal arrancando desde la Unidad USB conectada

## P8: ¿Por qué hay pegamento negro alrededor de los chips en el CM4?

Hemos aplicado especialmente **adhesivo de relleno inferior de resina epoxi** (que parece pegamento negro) alrededor de los chips en el CM4 para asegurar que los ICs estén bien protegidos. Esto también hace que todo el CM4 sea más confiable.

## P9: ¿Por qué el zumbador, LEDs y botones no funcionan después de instalar los controladores de reTerminal?

reTerminal viene equipado con 2 versiones para el chip de Expansión de E/S. Versión antigua con MCP23008 y versión nueva con PCA9554. Si [instalaste los controladores de reTerminal manualmente](https://wiki.seeedstudio.com/es/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os), por favor verifica lo siguiente.

Primero verifica qué chip está instalado en tu reTerminal.

- Abre ventana de terminal
- i2cdetect -y 1

Si ves la dirección I2C 0x20, el reTerminal está equipado con chip MCP23008

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

Si ves la dirección I2C 0x38, el reTerminal está equipado con chip PCA9554

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

Para reTerminal con chip MCP23008, necesitas hacer lo siguiente.

- sudo nano /boot/config.txt
- Añade "dtoverlay=reTerminal,addr=0x20,mcp23008" al final del archivo
- Ctrl + x > y > ENTER, para guardar y cerrar el archivo
- sudo reboot

Para el reTerminal con el último chip PCA9554, no tienes que hacer ningún cambio.

## P10: ¿Cómo puedo instalar Ubuntu en reTerminal?

- **Paso 1.** Flashea [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) al almacenamiento eMMC de reTerminal

**Nota:** Consulta las instrucciones de flasheo [aquí](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). Después de abrir **Raspberry Pi Imager**, navega a `CHOOSE OS > Use custom` y selecciona la imagen anterior para flashear

- **Paso 2.** Conéctate por SSH al reTerminal y ejecuta los siguientes comandos uno tras otro. Asegúrate de usar **ubuntu** como nombre de usuario y **ubuntu** como contraseña

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **Paso 3.** Ahora, reTerminal arrancará en Ubuntu Desktop, pero con orientación incorrecta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Haz clic en el **icono de encendido** en la esquina superior derecha y haz clic en **Configuración**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **Paso 5.** Selecciona **Pantallas** y elige **Vertical Izquierda** bajo **Orientación** y haz clic en **Aplicar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

¡Finalmente verás el Escritorio de Ubuntu en la orientación correcta!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## P11: La orientación de la pantalla es incorrecta después de instalar Raspberry Pi OS Bullseye

- **Paso 1.** Después de flashear **Raspberry Pi OS Bullseye** en la eMMC de reTerminal, sigue [esta guía](https://wiki.seeedstudio.com/es/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) para instalar los controladores necesarios

- **Paso 2.** Crea un nuevo archivo llamado **monitors.xml** bajo el directorio **.config**

```sh
sudo vi ~/.config/monitors.xml
```

- **Paso 3.** Copia el siguiente contenido en el archivo anterior para configurar explícitamente la pantalla LCD (DSI-1) y guarda el archivo escribiendo **:wq** después de presionar **ESC**

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **Paso 4.** Abrir **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Paso 5.** Añade lo siguiente al archivo

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **Paso 6.** Reinicia reTerminal

```sh
sudo reboot
```

¡Ahora la pantalla se mostrará en la orientación correcta!

## P12: Solución de problemas de inexactitud de la pantalla táctil

Después de configurar la pantalla a la orientación correcta, la posición táctil puede seguir siendo inexacta, causando que el cursor se mueva en direcciones inesperadas cuando tocas un área específica en la pantalla. Para abordar este problema, es esencial seguir los siguientes pasos.

- **Paso 1** : Abre la terminal e ingresa a la carpeta xorg.conf.d escribiendo

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2** : Tendrás acceso al archivo "40-libinput.conf", que puede ser editado usando el comando.

```sh
sudo nano 40-libinput.conf
```

- **Paso 3**: Encuentra la sección InputClass de **touchscreen** InputClass.

- **Paso 4**: Añade la siguiente frase. Puedes consultar la captura de pantalla

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5** : Guarda con Ctrl+O y presiona enter, luego Ctrl+X, después de eso Reinicia

```sh
Sudo reboot 
```

Después de reiniciar, puedes notar que la posición táctil ahora es precisa. Esto significa que cuando tocas un área específica en la pantalla, el cursor se mueve en la dirección deseada.

## P13: Los LEDs y el Buzzer no funcionan después de instalar los controladores de reTerminal

Este problema no durará mucho. Resolveremos completamente este problema más adelante desde los propios controladores de reTerminal

- **Paso 1.** Abre **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Paso 2.** Comenta la siguiente línea y guarda el archivo escribiendo **:wq** después de presionar **ESC**

```sh
#dtoverlay=reTerminal-bridge
```

- **Paso 3.** Reinicia reTerminal

```sh
sudo reboot
```

Ahora los LEDs y el Buzzer funcionarán con normalidad.

## P14: Cómo verificar si el Chip de Cifrado es ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G

| Fecha de Lanzamiento | Versión IC del Chip de Cifrado |
|---|---|
| Antes del 09/03/2021 | ATECC608A-SSHDA-B |
| Sept 2021 - Enero 2022 | ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G |
| Después del 02/01/2022 | ATECC608A-TNGTLSS-G |

 Para verificar qué chip de cifrado por tipo usando el comando ```i2cdetect -y 3``` en Terminal, Si ves ```0x35``` en la tabla de salida entonces el reTerminal está equipado con el chip ATECC608A-TNGTLSS-G, de lo contrario está equipado con ATECC608A-SSHDA-B.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## Recursos

- **[PDF]** [Esquemáticos de reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [Esquemáticos de reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Hoja de Datos del Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentación Oficial de Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
