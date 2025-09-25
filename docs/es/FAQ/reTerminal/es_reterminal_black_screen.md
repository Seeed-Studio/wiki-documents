---
description: reTerminal-FAQ
title: Cómo solucionar el problema de pantalla negra en reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal_black_screen
last_update:
  date: 11/15/2023
  author: Kasun Thushara
---

reTerminal viene con los controladores necesarios preinstalados de fábrica, por lo que no necesitas instalar controladores adicionales.<br/>
Sin embargo, si tu pantalla no se muestra correctamente y permanece negra, sigue los pasos de solución de problemas a continuación para identificar y resolver el problema paso a paso.

## Paso 1: Verificar el estado de parpadeo de los LEDs

### Si la luz PWR no está encendida

  Debes verificar el estado de la fuente de alimentación porque puede haber un problema con la alimentación eléctrica. Además, para descartar cualquier dificultad de hardware, asegúrate de que el módulo CM4 dentro del reTerminal esté conectado correctamente.

### Si la luz PWR está encendida pero la luz SYS no está encendida

  Necesitas flashear el sistema de fábrica original nuevamente. Puedes proceder directamente a esta sección."

### Si ambas luces están encendidas

  Esta situación ocurre debido a problemas con el controlador que controla la pantalla LCD. En este punto, sigue los pasos de solución de problemas proporcionados en el [**segundo paso**](/es/reterminal_black_screen/#second-confirm-whether-you-have-installed-a-new-system) y ejecútalos paso a paso.

## Paso 2: Confirmar si has instalado un nuevo sistema

:::caution

- Si flasheas un nuevo SO por tu cuenta y la pantalla LCD no se muestra correctamente, necesitas [**instalar los controladores necesarios de reTerminal**](/es/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) por separado.

- Si no has flasheado tu propio SO pero la pantalla permanece negra, procede directamente a [**Flashear Raspberry Pi OS que originalmente viene con reTerminal**](/es/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

- Si estás intentando instalar **Raspbian OS**, hemos realizado pruebas y encontrado que tanto las versiones de *32 bits como de 64 bits* de **Bulleseye** funcionan bien con reTerminal sin encontrar ningún **problema de pantalla negra**. Además, también hemos probado la nueva versión **Bookworm** de *64 bits*, y funciona sin problemas en reTerminal.

:::

### Instalar controladores de reTerminal después de flashear nuevo Raspberry Pi OS/ Ubuntu OS u otro SO

El hardware que necesita controladores incluye la **pantalla LCD de 5 pulgadas, panel táctil, acelerómetro, sensor de luz, LEDs de usuario, botones de usuario, RTC, zumbador, coprocesador criptográfico**.
Por lo tanto, instalar este controlador permite el funcionamiento adecuado de la pantalla LCD mientras usas nuevo Raspberry Pi OS/ Ubuntu OS u otro SO.

- **1.** Clona el siguiente repositorio

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **2.** Ingresa al repositorio

```sh
cd seeed-linux-dtoverlays
```

:::note
Para **SO de 32 bits** necesitarás añadir el siguiente paso antes de ejecutar `sudo ./scripts/reTerminal.sh`. Después de completar la instalación, recuerda **reiniciar** reTerminal para que los cambios surtan efecto.

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

:::

- **3.** Escribe lo siguiente para instalar los controladores

```sh
sudo ./scripts/reTerminal.sh
```

Verás la siguiente salida si has instalado exitosamente los controladores

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **4.** Reinicia el reTerminal

```sh
sudo reboot
```

Finalmente, puedes usar la pantalla LCD normalmente en el nuevo sistema.

### Flashear Raspberry Pi OS que se envía originalmente con reTerminal

:::caution
Si has flasheado a un OS diferente y quieres volver al Raspberry Pi OS predeterminado que se envía con reTerminal, puedes seguir los pasos a continuación
:::

Podemos flashear **Raspberry Pi OS / Ubuntu OS de 64 bits u otro OS** en el **almacenamiento eMMC** del CM4 en el reTerminal. Si nunca has flasheado un sistema en reTerminal antes, te recomendamos encarecidamente que sigas [Flashear Raspberry Pi OS/ Ubuntu OS de 64 bits u Otro OS a eMMC](/es/flash_different_os_to_emmc) para prepararte para el flasheo del sistema, lo cual incluye **instalar los controladores necesarios**.

Una vez que los [controladores necesarios](/es/flash_different_os_to_emmc) estén instalados, solo tienes que conectar el puerto USB Type-C del reTerminal a tu PC. Cuando abras el Explorador de Archivos y veas que el eMMC del Compute Module 4 se muestra como un dispositivo de almacenamiento masivo USB, puedes realizar los siguientes pasos:

- **1.** Descarga el Raspberry Pi OS visitando los enlaces a continuación

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Nota:** reTerminal se envía originalmente con OS de 32 bits. Sin embargo, también puedes descargar una versión de 64 bits

- **2.** Extrae el **archivo .zip**

- **3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **5.** Haz clic en **CHOOSE OS** y selecciona **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** Navega a la imagen previamente extraída, selecciónala y haz clic en **open**

- **7.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **8.** Finalmente, haz clic en **WRITE**

Finalmente, puedes usar la pantalla LCD normalmente en el sistema original.

## Si el Paso1/2 aún no logra resolver el problema de la pantalla - Actualizar el firmware STM32 para la LCD de reTerminal

:::note
Si tu reTerminal fue fabricado después del 26/09/2021, el STM32 viene con firmware V1.8 preinstalado.
:::

Es muy importante asegurarse de que tengas el firmware más reciente flasheado en el chip STM32G030 en el reTerminal. STM32G030 es responsable de manejar la LCD en el reTerminal. Actualizar el chip STM32 a la versión más reciente será útil para resolver la mayoría de los problemas que enfrentes con la LCD del reTerminal.

Hay 2 métodos para flashear el chip STM32.

- **Método 1:** Conectar directamente al chip STM32 usando el CM4 en el reTerminal y flashear el firmware
- **Método 2:** Conectar físicamente los pines del chip STM32 al GPIO de 40 pines del reTerminal usando cables puente y luego usar OpenOCD para flashear el firmware

**Método 1** funciona si tienes la **nueva versión (v1.7 o superior)** del firmware STM32 en el reTerminal y por otro lado, **método 2** solo es necesario si tienes la **versión antigua (inferior a v1.7)** del firmware STM32 en la placa.

### Decidir Qué Método de Flasheo Usar

Ahora vamos a seguir los siguientes pasos para identificar qué versión de la placa tenemos para que podamos elegir el método de flasheo apropiado.

- **1.** Ingresa a la ventana de terminal del reTerminal y escribe lo siguiente para abrir el archivo de configuración

```sh
sudo nano /boot/config.txt
```

- **2.** En la parte inferior de este archivo, comenta la línea que dice **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

**Nota:** Esto descargará todos los controladores del reTerminal. Por lo tanto, cuando enciendas el reTerminal la próxima vez, ninguno de los controladores se cargará.

- **3.** Reinicia el reTerminal

```sh
sudo reboot
```

- **4.** Hacer que STM32 entre en **modo boot** a través de **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **5.** Listar los dispositivos I2C conectados

```sh
i2cdetect -y 1
```

Si puedes ver la dirección I2C **0x56** como se muestra en la tabla a continuación, tienes la **nueva versión (v1.7 o superior)** del firmware STM32 en la placa.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

Sin embargo, si puedes ver la dirección I2C **0x45** como se muestra en la tabla a continuación, tienes la **versión antigua (inferior a v1.7)** del firmware STM32 en la placa

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **6.** Abre el archivo de configuración que usamos anteriormente

```sh
sudo nano /boot/config.txt
```

- **7.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal** para cargar los controladores nuevamente

```sh
dtoverlay=reTerminal
```

- **8.** Apagar reTerminal

```sh
sudo poweroff
```

**Nota:** Si ya estás ejecutando **firmware STM32 v1.8**, una vez que ingreses al **modo boot** a través de **i2c-tools**, la única forma de salir del modo boot es flashear el firmware STM32.

### Conectar al STM32 usando CM4 y flashear el firmware

:::caution
Si tienes la **nueva versión (v1.7 o superior)** del firmware STM32 en la placa, por favor sigue este método.
:::

- **1.** Ingresa a la ventana de terminal de reTerminal y escribe lo siguiente para abrir el archivo de configuración

```sh
sudo nano /boot/config.txt
```

- **2.** En la parte inferior de este archivo, comenta la línea que dice **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **3.** Reinicia reTerminal

```sh
sudo reboot
```

- **4.** Crea un nuevo directorio dentro de reTerminal e ingresa a él.

```sh
mkdir STM32
cd STM32
```

<!-- - **5.** Visita [este enlace](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) y descarga el archivo **stm32flash** y el archivo **STM32G030F6_R2.bin** de la **última versión** de lanzamiento.

**Nota:** Puedes hacer clic en ellos para comenzar la descarga -->

- **5.** Descarga el archivo **stm32flash** y el **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **6.** Descomprime **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **7.** Ve a la carpeta llamada **stm32flash-0.7** y haz que la herramienta de flash sea ejecutable

```sh
cd stm32flash-0.7/
make
```

- **8.** Hacer que STM32 entre en **modo boot** a través de **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **9.** Borra la flash en el chip STM32 usando la **herramienta stm32flash**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **10.** Flashea el firmware al STM32 usando la herramienta stm32flash

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** es el nombre del archivo del nuevo firmware

- **11.** Modifica el registro OPTR como sigue

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **12.** Abre el archivo de configuración que usamos antes

```sh
sudo nano /boot/config.txt
```

- **13.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **14.** Reinicia reTerminal

```sh
sudo reboot
```

<!-- - **6.** Abre el símbolo del sistema en la PC y navega a la ubicación de los archivos descargados antes

```sh
cd C:\Users\user\Downloads
```

- **7.** Transfiere los archivos al directorio **STM32** en el reTerminal que creamos antes

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**Nota:** **pi** es el nombre de usuario y **192.168.x.xx** es la dirección IP del reTerminal. También puedes reemplazar esto con el nombre de host del reTerminal.

- **8.** Dentro de la ventana de terminal del reTerminal, ingresa al directorio **STM32**

```sh
cd STM32
```

Luego verás los archivos que copiamos anteriormente

- **9.** Haz que la herramienta de flash sea **ejecutable**

```sh
chmod +x stm32flash
``` -->

<!-- - **10.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **11.** Borra la flash en el chip STM32 usando la **herramienta stm32flash**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **12.** Flashea el firmware al STM32 usando la herramienta stm32flash

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** es el nombre del archivo del nuevo firmware

- **13.** Modifica el registro OPTR como sigue

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **14.** Abre el archivo de configuración que usamos antes

```sh
sudo nano /boot/config.txt
```

- **15.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **16.** Reinicia reTerminal

```sh
sudo reboot
``` -->

¡Ahora has flasheado exitosamente el firmware al STM32!

### Conectar a STM32 usando cables puente y OpenOCD

:::caution
Si tienes la **versión antigua (inferior a v1.7)** del firmware STM32 en la placa, por favor sigue este método.
:::

- **1.** Ingresa a la ventana de terminal de reTerminal y escribe lo siguiente para actualizar la lista de paquetes

```sh
sudo apt-get update
```

- **2.** Instala los siguientes paquetes

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **3.** Clona el siguiente repositorio y navega hacia él

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **4.** Visita [este enlace](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) y descarga el archivo **STM32G030F6_R2.bin** de la versión de **lanzamiento más reciente**.

**Nota:** Puedes hacer clic en él para comenzar la descarga

- **5.** Abre el símbolo del sistema en la PC y navega a la ubicación de los archivos descargados anteriormente

```sh
cd C:\Users\user\Downloads
```

- **6.** Transfiere los archivos al directorio **openocd** en el reTerminal que creamos anteriormente

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**Nota:** **pi** es el nombre de usuario y **192.168.x.xx** es la dirección IP del reTerminal. También puedes reemplazar esto con el nombre de host del reTerminal.

- **7.** Regresa a la ventana del terminal en reterminal e ingresa lo siguiente dentro del directorio **openocd**

```sh
./bootstrap
```

- **8.** Ingresa lo siguiente

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **9.** Compílalo

```sh
make
```

- **10.** Instálalo

```sh
sudo make install
```

- **11.** Sigue la conexión a continuación para conectar los pines del STM32 al GPIO de 40 pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Los pines del STM32 están ubicados en la parte posterior de la PCBA del reTerminal.

- **12.** Mientras mantienes la conexión, ingresa el siguiente comando para flashear el firmware al STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**Nota:** Normalmente toma alrededor de 3 segundos terminar el flasheo. Así que necesitas **mantener** la conexión anterior durante aproximadamente **3 segundos** hasta que el proceso de flasheo esté completo

Si ves el siguiente log, ¡eso significa que el firmware STM32 se flasheó exitosamente!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **13.** Desconecta las conexiones y **desconecta físicamente el cable de alimentación directamente** sin el comando **poweroff**

**Nota:** Si no desconectas físicamente el cable de alimentación, el firmware STM32 no se cargará exitosamente

¡Ahora has flasheado exitosamente el firmware al STM32!

### Verificar la versión del firmware STM32G030 instalado

Ahora vamos a verificar la versión del firmware STM32 instalado

- **1.** Ingresa a la ventana de terminal del reTerminal y escribe lo siguiente para abrir el archivo de configuración

```sh
sudo nano /boot/config.txt
```

- **2.** En la parte inferior de este archivo, comenta la línea que dice **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **3.** Reinicia reTerminal

- **4.** Ingresa lo siguiente dentro de la ventana de terminal de reTerminal para verificar la versión del firmware STM32

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

Si la salida se ve como **0x01 0x07**, eso significa que estás usando la versión de firmware 1.7

- **5.** Abre el archivo de configuración que usamos antes

```sh
sudo nano /boot/config.txt
```

- **6.** En la parte inferior de este archivo, descomenta la línea que dice **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **7.** Reinicia reTerminal

```sh
sudo reboot
```

## Flashear Raspberry Pi OS que es la versión más nueva - Bookworm

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/bookworm.jpeg" alt="pir" width={600} height="auto" /></p>

Hemos preparado una imagen con el último OS Bookworm, el lanzamiento más reciente de los oficiales de Raspberry Pi. Si encuentras algún problema, especialmente aquellos discutidos anteriormente, recomendamos encarecidamente seguir estos pasos para una experiencia más fluida.

:::note
Antes de proceder, asegúrate de **bajar el interruptor de modo de arranque**. A continuación, ejecuta el **instalador de configuración rpiboot**. Las instrucciones detalladas sobre cómo realizar estos pasos se proporcionan [**aquí**](https://wiki.seeedstudio.com/es/flash_different_os_to_emmc/).

:::

- **1.** Descarga el Raspberry Pi OS visitando los enlaces a continuación

  <!-- - [64-bit Bookworm-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz) -->

| Versión                     | Descripción      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux versión 6.6.20 | más reciente |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux versión 6.6.20           | más reciente |
| [2023_11_15_bookworm_64.img.gz](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz)               | 64bit Debian12(bookworm) Linux versión 6.1  | lanzamiento |

- **2.** Extrae el **archivo .zip**

- **3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **5.** Haz clic en **ELEGIR SO** y selecciona **Usar personalizado**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** Navega a la imagen previamente extraída, selecciónala y haz clic en **abrir**

- **7.** Haz clic en **ELEGIR ALMACENAMIENTO** y selecciona la unidad eMMC conectada

- **8.** Finalmente, haz clic en **ESCRIBIR**

Finalmente, **cambia el interruptor de Modo de Arranque*** de vuelta a la posición original y ensambla la carcasa del reTerminal. Luego **enciende la alimentación**. puedes usar la pantalla LCD normalmente en el sistema original.
