---
description: Uso de Hardware e Interfaces
title: Uso de Hardware e Interfaces
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-hardware-interfaces-usage
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# Uso de Hardware e Interfaces

Este wiki presenta los diversos hardware e interfaces diferentes en el reTerminal y cómo usarlos para expandir las ideas de tu proyecto.

**Nota:** Para algunos hardware e interfaces, las instrucciones de uso serán diferentes entre sí cuando se ejecute la imagen de Raspberry Pi OS, la [imagen Buildroot](https://wiki.seeedstudio.com/es/reTerminal-Buildroot-SDK) y la [imagen Yocto](https://wiki.seeedstudio.com/es/reTerminal-Yocto). Los pasos predeterminados serán para la imagen de Raspberry Pi OS. Sin embargo, si las instrucciones para la imagen Buildroot y la imagen Yocto son diferentes, se indican claramente.

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## Pines Compatibles con Raspberry Pi de 40 Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

Los **40 pines** consisten en **26 GPIO, hasta 5 × I2C, hasta 5 × SPI, hasta 5 × UART, 1 x PCM, 1 x PWM, 1 × interfaz SDIO, 1 × DPI (Pantalla RGB Paralela), hasta 3× salidas GPCLK y 1 interfaz USB**.

La **interfaz USB** se extiende desde la **interfaz USB 2.0 interna** en el Compute Module 4. Así que puedes expandir a aún más conectores USB y obtener velocidades de hasta **480 Mbit/s** usando esta interfaz.

¡También puedes usar estos 40 pines para conectar a **Hats compatibles con Raspberry Pi** y expandir tus proyectos!

[Visita aquí](https://www.seeedstudio.com/hats-shields-c-840.html) para explorar una amplia gama de Hats de Raspberry Pi ofrecidos por Seeed Studio y [visita aquí](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats) para ver aún más Hats de Raspberry Pi de terceros!

Los pines GPIO pueden extraer una corriente máxima de **50mA de forma segura**. Esto significa 50mA distribuidos a través de todos los pines. Por lo tanto, un pin GPIO individual solo puede extraer de forma segura **16mA** de corriente. Por otro lado, la extracción máxima de corriente para cada uno de los pines restantes es **2A**. Ten esto en cuenta cuando conectes hardware adicional a estos pines.

### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg) para una imagen de mayor resolución

### Uso - GPIO

- **Paso 1.** Configurar pin como GPIO

```sh
sudo -i   #enable root account privileges 
cd /sys/class/gpio
echo 23 > export #GPIO23 which is Pin 16
cd gpio23
```

- **Paso 2.** Configurar entrada/salida de GPIO

```sh
echo in > direction  #set GPIO as input
echo out > direction  #set GPIO as output
```

- **Paso 3.** Establecer nivel alto/bajo de GPIO

```sh
echo 1 > value  #set GPIO to high
echo 0 > value  #set GPIO to low
```

- **Paso 4.** Obtener el estado de entrada/salida de GPIO

```sh
cat direction
```

- **Paso 5.** Obtener el estado del nivel GPIO

```sh
cat value
```

- **Paso 6.** Restablecer el pin a su valor predeterminado

```sh
cd ..
echo 23 > unexport
```

#### Uso en imagen Buildroot

- Reemplaza **sudo -i** con **su -** para habilitar los privilegios de cuenta **root**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- **sudo -i** no es necesario porque ya iniciamos sesión como **root**
- Sigue los otros pasos como se mencionó anteriormente

### Uso - I2C

- **Paso 1.** Enciende el reTerminal, haz clic en el icono de Raspberry Pi en la interfaz de escritorio de Raspberry Pi y navega a `Preferences > Raspberry Pi Configuration`

- **Paso 2.** Haz clic en la pestaña `Interfaces` y haz clic en **Enabled** que está junto a **I2C**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Haz clic en **OK**

- **Paso 4.** Conecta un dispositivo I2C al reTerminal

- **Paso 5.** Lista todos los buses I2C disponibles

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **Paso 6.** Escanea las direcciones estándar en el bus I2C 1 (i2c-1)

```sh
i2cdetect -y 1
```

**Nota** 1 representa el número del bus I2C

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

La imagen anterior muestra dispositivos I2C detectados con direcciones 0x20, 0x51, 0x45, 0x19, 0x29 y 0x5c

#### Uso en imagen Buildroot

- No necesitas activar I2C para la imagen Buildroot porque **I2C está habilitado por defecto**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- I2C no está habilitado cuando se enciende. Solo funciona con **modprobe i2c-dev** después de cada arranque. Esto se actualizará una vez que se solucione.

### Uso - SPI

- **Paso 1.** Enciende el reTerminal, haz clic en el icono de Raspberry Pi en la interfaz de escritorio de Raspberry Pi y navega a `Preferences > Raspberry Pi Configuration`

- **Paso 2.** Haz clic en la pestaña `Interfaces` y haz clic en **Enabled** que está junto a **SPI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Conecta un dispositivo SPI al reTerminal

- **Paso 4.** Lista todos los dispositivos SPI disponibles

```sh
ls /dev/spi*
```

Verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **Paso 5.** Abre una ventana de terminal y escribe lo siguiente para descargar una **herramienta de prueba SPI**

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

- **Paso 6.** Cambiar los derechos de usuario de la herramienta

```sh
chmod +x spidev_test
```

- **Paso 7.** Cortocircuita **GPIO 10 (Pin 19)** y **GPIO 9 (Pin 21)** usando un cable puente

**Nota:** Aquí cortocircuitamos los **pines MOSI y MISO**

- **Paso 8.** Ejecuta la siguiente herramienta de prueba SPI

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

Si ves la siguiente salida, SPI está funcionando correctamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### Uso en imagen Buildroot/ Yocto

- Para activar SPI, abre **config.txt** con el comando **vi /boot/config.txt**
- Añade **dtparam=spi=on** al final (presiona **i** para entrar en modo de edición)
- Presiona **ESC** para salir del modo de edición
- Guarda el archivo escribiendo **:wq**
- Reinicia
- La herramienta spidev_test tiene problemas al ejecutarse. Esto se actualizará una vez que se solucione.

## Interfaz de Alta Velocidad para Módulos de Expansión

Hay una interfaz de expansión de alta velocidad en la parte trasera del reTerminal. Consiste en 1 PCIe 1-lane Host Gen 2 (soportando velocidades de hasta 5Gbps), 1 USB 2.0, 1 PoE y 26 GPIOs. Los 26 pines GPIO pueden usarse además como 2 I2C, 2 SPI y 1 UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png) para una imagen de mayor resolución

:::note
Las interfaces PCIe, USB 3.0, 2 x CAN-FD y SDIO3.0 están definidas para productos futuros y por lo tanto no son utilizables en este momento
:::

Planeamos construir módulos de expansión en el futuro para reTerminal y hemos reservado esta interfaz para conectar estos módulos al reTerminal. Lanzaremos una amplia gama de módulos como:

- Módulo de Array de Micrófono y Altavoz
- Módulo de Cámara
- E/S Industrial
- Módulo LoraWAN
- Módulo 5G/4G
- Módulo PoE
- Switch Ethernet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

Hay 2 orificios de tornillo mecánico M4 en el lateral del reTerminal para ayudar a mantener los módulos de expansión en su lugar.

## Interfaz de Cámara CSI

reTerminal tiene una interfaz de cámara MIPI CSI de 2 carriles, lo que significa que puedes conectar hasta 2 cámaras al reTerminal. Una interfaz tiene **15 pines** mientras que la otra interfaz tiene **22 pines**. Así que asegúrate de usar el cable flexible correcto correspondiente a la interfaz que pretendes usar. Estas interfaces de cámara pueden usarse para detección de objetos y aplicaciones de aprendizaje automático.

### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg) para una imagen de mayor resolución

#### Uso

- **Paso 1.** Conecta una cámara a la **interfaz FPC** de **15 pines** o **22 pines**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

- **Paso 2.** Enciende el reTerminal, haz clic en el icono de Raspberry Pi en la interfaz de escritorio de Raspberry Pi y navega a `Preferences > Raspberry Pi Configuration`

- **Paso 3.** Haz clic en la pestaña `Interfaces` y haz clic en **Enabled** que está junto a **Camera**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Haz clic en **Yes** para reiniciar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 5.** Abre una ventana de terminal y escribe lo siguiente para tomar una foto fija y guardarla en el Escritorio

```sh
raspistill -o Desktop/image.jpg
```

**Nota:** Puedes cambiar la ubicación de guardado según tu preferencia

- **Paso 6.** Haz doble clic en el archivo generado en el Escritorio para ver la imagen

- **Paso 7.** Escribe lo siguiente para grabar un video y guardarlo en el Escritorio

```sh
raspivid -o Desktop/video.h264
```

- **Paso 8.** Haz doble clic en el archivo generado en el Escritorio para reproducir el video grabado

Puedes aprender más sobre el uso de la cámara visitando la [documentación oficial de Raspberry Pi](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)

#### Uso en imagen Buildroot/ Yocto

- La interfaz de cámara CSI aún no ha sido probada. Esto se actualizará una vez que sea probada.

## LCD de 5 Pulgadas

La LCD de 5 pulgadas integrada en el reTerminal está conectada a la **interfaz DSI de 30 pines** en la placa portadora interior. Esta LCD soporta **multi-táctil de 5 puntos** y para habilitar esta característica, la LCD está conectada a otra **interfaz TP** en la placa portadora.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png) para una imagen de mayor resolución

## Panel Táctil para LCD

### Uso

El panel táctil para la LCD está conectado a través de un conector **FPC de 6 pines**. Puedes probarlo usando la herramienta evtest

- **Paso 1.** Escribe lo siguiente para instalar **evtest**, que es una herramienta de monitoreo y consulta de eventos de dispositivos de entrada

```sh
sudo apt install evtest
```

- **Paso 2.** Abrir la herramienta evtest

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

- **Paso 3.** Escribe **1** y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

- **Paso 4.** Toca aleatoriamente en la pantalla LCD del reTerminal y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### Uso en imagen Buildroot

- No necesitas instalar la **herramienta evtest** porque ya está instalada
- Antes de ejecutar **evtest** necesitas cambiar a root escribiendo **su -**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- No necesitas instalar la **herramienta evtest** porque ya está instalada
- Sigue los otros pasos como se mencionó anteriormente

### Conectar otros dispositivos al conector FPC vía I2C

El panel táctil está conectado al reTerminal vía protocolo de comunicación I2C. Así que puedes conectar fácilmente otros dispositivos I2C a esta interfaz FPC de 6 pines si lo prefieres. El diagrama de conexión es el siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

Después de eso sigue los pasos del tema anterior sobre cómo usar I2C

## 4 Botones Programables por el Usuario

Hay 4 botones programables por el usuario en la parte frontal del reTerminal. ¡Estos botones pueden ser controlados fácilmente usando software y pueden ser asignados para encender/apagar diferentes funciones según tus aplicaciones!

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg) para una imagen de mayor resolución

### Uso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

- **Paso 1.** Abre la herramienta evtest

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **Paso 2.** Escribe **0** y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

- **Paso 3.** Presiona los botones de izquierda a derecha y verás lo siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Los botones están configurados como **a s d f** de **izquierda a derecha** por defecto

- **Paso 4.** Si quieres configurar los botones, escribe lo siguiente

```sh
sudo nano /boot/config.txt
```

- **Paso 5.** Modifica el archivo añadiendo lo siguiente al final

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

**Nota:** Aquí los números hexadecimales 100,101,102 y 103 se asignan a key0, key1, key2. key3 respectivamente

#### Uso en imagen Buildroot

- No necesitas instalar la **herramienta evtest** porque ya está instalada
- Antes de ejecutar **evtest** necesitas cambiar a root escribiendo **su -**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- No necesitas instalar la **herramienta evtest** porque ya está instalada
- Sigue los otros pasos como se mencionó anteriormente

## 3 LEDs Programables por el Usuario

Hay 2 LEDs programables por el usuario en la parte frontal del reTerminal. Estos LEDs pueden encenderse/apagarse usando software y pueden ser útiles en escenarios donde quieras usarlos como LEDs de estado para monitorear diferentes características de hardware. El LED **USR** puede iluminarse en **Verde**, mientras que el LED **STA** puede iluminarse en **Rojo** o **Verde**

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg) para una imagen de mayor resolución

### Uso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

- **Paso 1.** Habilitar privilegios de cuenta root

```sh
sudo -i
```

- **Paso 2.** Ingresa al siguiente directorio

```sh
cd /sys/class/leds
```

- **Paso 3.** Ingresa al siguiente directorio para controlar el **LED USR de Color Verde**

```sh
cd usr_led0
```

- **Paso 4.** Enciende el LED con el brillo máximo

```sh
echo 255 > brightness
```

**Nota:** Puedes introducir valores del 1 al 255 para ajustar los niveles de brillo

- **Paso 5.** Apagar el LED

```sh
echo 0 > brightness
```

- **Paso 6.** Ingresa al siguiente directorio para controlar el **LED STA de Color Rojo**

```sh
cd ..
cd usr_led1
```

- **Paso 7.** Repite los pasos 4 - 5 para controlar el LED

- **Paso 8.** Ingresa al siguiente directorio para controlar el **LED STA de Color Verde**

```sh
cd ..
cd usr_led2
```

- **Paso 9.** Repite los pasos 4 - 5 para controlar el LED

#### Uso en imagen Buildroot

- Reemplaza **sudo -i** con **su -** para habilitar los privilegios de cuenta **root**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- **sudo -i** no es necesario porque ya iniciamos sesión como **root**
- Sigue los otros pasos como se mencionó anteriormente

## Puerto Ethernet Gigabit

reTerminal tiene un Conector Ethernet Gigabit (RJ45) integrado. Este puerto está conectado al **PHY Ethernet Gigabit** del módulo CM4 que está basado en **Broadcom BCM54210PE**. También es **compatible con IEEE 1588-2008**.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png) para una imagen de mayor resolución

## Co-Procesador de Cifrado

reTerminal tiene características de seguridad como un **co-procesador criptográfico Microchip ATECC608A** con almacenamiento de claves seguro basado en hardware. También tiene almacenamiento protegido para hasta 16 claves, certificados o datos. Proporciona soporte de hardware para firma simétrica, verificación, acuerdo de claves – ECDSA. Tiene soporte de hardware para algoritmos simétricos, gestión de claves de red y arranque seguro.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg) para una imagen de mayor resolución

### Uso

- **Paso 1.** Lista todos los buses I2C disponibles

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **Paso 2.** Escanea las direcciones estándar en el bus I2C 3 (i2c-3)

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

**Nota:** 3 representa el número de bus I2C

El dispositivo con dirección I2C **0x60** es el coprocesador de cifrado

#### Uso en imagen Buildroot

- Funciona como se indica arriba

#### Uso en imagen Yocto

- I2C no está habilitado al encender. Solo funciona con **modprobe i2c-dev** después de cada arranque. Esto se actualizará una vez que se solucione.

## RTC

El RTC integrado en el reTerminal está basado en **NXP Semiconductors PCF8563T** y utiliza una **batería CR1220** para alimentarlo. Tiene una corriente de respaldo baja; típicamente 0.25μA a VDD = 3.0 V y una temperatura = 25°C. Puede utilizarse para proyectos donde necesites implementar funciones de mantenimiento de tiempo.

**Nota:** Una batería CR1220 ya está instalada de fábrica.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg) para una imagen de mayor resolución

### Uso

Escribe el siguiente comando para obtener la información de fecha y hora del RTC

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### Uso en imagen Buildroot

- Primero escribe **su -** para habilitar la cuenta **root**
- Luego escribe **hwclock**

#### Uso en imagen Yocto

- **sudo** no es necesario porque ya iniciamos sesión como **root**
- Solo escribe **hwclock**

## Sensor de Luz

reTerminal está equipado con un sensor de luz digital **Levelek LTR-303ALS-01** y está conectado a la **interfaz FPC de 6 pines**. Se puede usar para detectar los niveles de luz en el entorno y también se puede usar para **ajuste automático del brillo de la retroiluminación LCD** según los niveles de luz circundantes.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg) para una imagen de mayor resolución

### Uso

- **Paso 1.** Habilitar privilegios de cuenta root

```sh
sudo -i
```

- **Paso 2.** Ingresa al siguiente directorio

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **Paso 3.** Escribe lo siguiente para obtener el valor de intensidad de luz en **Lux**

```sh
cat in_illuminance_input 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

El sensor de luz está conectado al reTerminal a través del **protocolo de comunicación I2C**. Por lo tanto, puedes conectar fácilmente otros dispositivos I2C a esta **interfaz FPC de 6 pines** si lo prefieres. El diagrama de conexión es el siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

Después de eso, sigue los pasos del tema anterior sobre cómo usar I2C

#### Uso en imagen Buildroot

- Reemplaza **sudo -i** con **su -** para habilitar los privilegios de cuenta **root**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- **sudo -i** no es necesario porque ya iniciamos sesión como **root**
- Sigue los otros pasos como se mencionó anteriormente

## Acelerómetro

El **acelerómetro de 3 ejes STMicroelectronics LIS3DHTR** integrado se puede usar para realizar muchas aplicaciones diferentes con el reTerminal. Puedes usarlo para cambiar automáticamente la orientación de la pantalla mientras rotas el reTerminal y mucho más.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg) para una imagen de mayor resolución

### Uso

- **Paso 1.** Abre la herramienta evtest

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **Paso 2.** Escribe **1** y verás los valores de aceleración X,Y,Z

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### Uso en imagen Buildroot

- No necesitas instalar la **herramienta evtest** porque ya está instalada
- Antes de ejecutar **evtest** necesitas cambiar a **root** escribiendo **su -**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- No necesitas instalar la **herramienta evtest** porque ya está instalada
- Sigue los otros pasos como se mencionó anteriormente

## Zumbador

Hay un zumbador integrado en el reTerminal. Este puede ser controlado usando software. Este zumbador puede ser usado como un indicador en diferentes aplicaciones.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg) para una imagen de mayor resolución

### Uso

- **Paso 1.** Habilita los privilegios de cuenta root

```sh
sudo -i
```

- **Paso 2.** Ingresa al siguiente directorio

```sh
cd /sys/class/leds/usr_buzzer
```

- **Paso 3.** Enciende el zumbador

```sh
echo 1 > brightness
```

- **Paso 4.** Apagar el zumbador

```sh
echo 0 > brightness
```

#### Uso en imagen Buildroot

- Reemplaza **sudo -i** con **su -** para habilitar los privilegios de cuenta **root**
- Sigue los otros pasos como se mencionó anteriormente

#### Uso en imagen Yocto

- **sudo -i** no es necesario porque ya iniciamos sesión como **root**
- Sigue los otros pasos como se mencionó

## Puertos USB 2.0

Raspberry Pi CM4 ya tiene un **Hub USB 2.0 integrado**. Este Hub se extiende a **2 Puertos USB 2.0** en el reTerminal como **USB HOST**

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg) para una imagen de mayor resolución

### Uso

- **Paso 1.** Conecta un dispositivo USB a uno de los puertos USB 2.0 en el reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

- **Paso 2.** Lista el dispositivo USB conectado escribiendo lo siguiente en una ventana de terminal

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

- **Paso 3.** Escribe lo siguiente para obtener más información sobre el dispositivo USB conectado, como el tamaño de la unidad, particiones, punto de montaje, etc

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

- **Paso 4.** Accede al dispositivo USB conectado y lista todos los archivos en su interior

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**Nota:** El punto de montaje cambiará de un dispositivo USB a otro

## Ranura para Tarjeta Micro-SD

reTerminal está equipado con una **ranura para tarjeta micro-sd**. Esto es útil cuando quieres **instalar el sistema operativo** en una tarjeta micro-SD, mientras se usa el **módulo CM4 sin eMMC**. Se recomienda usar una tarjeta con un mínimo de al menos 8GB. ¡Sigue [este enlace](https://wiki.seeedstudio.com/es/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version) para aprender más!

### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg) para una imagen de mayor resolución

## Puerto Micro HDMI

Hay un puerto micro HDMI en el reTerminal y puedes usarlo para conectar a pantallas HDMI mediante un **cable micro HDMI a HDMI estándar**. Soporta hasta resolución 4K a 60fps.

### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg) para una imagen de mayor resolución

### Uso

- **Paso 1.** Conecta una pantalla HDMI al puerto micro-HDMI del reTerminal usando un cable micro-HDMI a HDMI estándar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="250" height="auto"/></p>

- **Paso 2.** Enciende el reTerminal y verás la salida de la interfaz tanto en la pantalla LCD del reTerminal como en la pantalla HDMI conectada

**Nota:** Si conectas una pantalla mientras el reTerminal está encendido, necesitas escribir **sudo service lightdm restart** para mostrar la interfaz en la pantalla HDMI conectada.

- **Paso 3.** Escribe lo siguiente en una ventana de terminal para instalar la utilidad **Screen Configuration**

```sh
sudo apt install arandr
```

- **Paso 4.** Haz clic en el icono de Raspberry Pi en la esquina superior izquierda y navega a `Preferences > Screen Configuration`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 5.** Dentro de la ventana **Screen Layout Editor**, navega a `Configure > Screens > HDMI-1 > Resolution` y ajusta seleccionando la resolución de la pantalla HDMI conectada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** También puedes cambiar la **frecuencia** y la **orientación** de la pantalla

- **Paso 6.** Arrastra las dos cajas para cambiar la disposición de las pantallas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 7.** Haz clic en la **marca de verificación** para aplicar la configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### Uso en imagen Buildroot/ Yocto

- La conexión en caliente no funciona por el momento. Esto se actualizará una vez que se solucione.
- Por lo tanto, necesitas primero conectar a la pantalla HDMI y luego encender el reTerminal
- Ten en cuenta que el paquete **arandr** no está disponible para la imagen del sistema Buildroot

## Puerto USB Type-C

El **Puerto USB Type-C** en el reTerminal puede usarse para **alimentar el reTerminal usando 5V/4A (recomendado)**. Sin embargo, también puede usarse para actuar como un **Dispositivo USB** donde puedes conectar el reTerminal a una **PC HOST** y el reTerminal actuará como un **Dispositivo de Almacenamiento Masivo USB**. Aquí, podrás acceder al **eMMC integrado** del reTerminal a través de una PC y flashear un **sistema operativo** al eMMC. ¡Haz clic [aquí](https://wiki.seeedstudio.com/es/reTerminal/#flash-to-emmc-cm4-emmc-version) para aprender más!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## Montura de Cámara Estándar (1/4 pulgada)

reTerminal tiene una **montura de cámara estándar con un diámetro de 1/4 pulgada**. Por lo tanto, puedes conectar el reTerminal a un **trípode estándar**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## Librería Python para reTerminal

Hemos preparado una **librería Python** que te permite usar el hardware integrado en el reTerminal. Actualmente el **acelerómetro, LEDs de usuario, botones de usuario y zumbador** pueden ser accedidos usando esta librería Python.

### Instalación

Abre una ventana de terminal en el reTerminal y ejecuta lo siguiente

```sh
sudo pip3 install seeed-python-reterminal
```

**Nota:** El código fuente se puede encontrar [aquí](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal)

### Uso

- **Paso 1.** Crear un nuevo **archivo python** y abrir usando el **editor de texto nano**

```sh
nano test.py
```

- **Paso 2.** Ingresa los códigos de python

- **Paso 3.** Presiona **CTRL + X** y luego presiona **Y** para guardar el archivo

- **Paso 4.** Finalmente ejecuta el archivo

```sh
python3 test.py
```

Puedes seguir los pasos anteriores para probar las siguientes funciones de hardware. Los códigos Python incluidos bajo cada sección pueden ingresarse directamente en el archivo test.py y luego ejecutar el archivo

#### Prueba de LEDs de Usuario

```python
import seeed_python_reterminal.core as rt
import time

print("STA ON, USR OFF")
rt.sta_led = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR ON")
rt.sta_led = False
rt.usr_led = True
time.sleep(1)

print("STA RED, USR OFF")
rt.sta_led_green = False
rt.sta_led_red = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR OFF")
rt.sta_led = False
rt.usr_led = False
```

#### Prueba del Zumbador

```python
import seeed_python_reterminal.core as rt
import time

print("BUZZER ON")
rt.buzzer = True
time.sleep(1)

print("BUZZER OFF")
rt.buzzer = False
```

#### Prueba de Botones de Usuario

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.button as rt_btn


device = rt.get_button_device()
while True:
    for event in device.read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")
```

#### Prueba del Acelerómetro

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel


device = rt.get_acceleration_device()
while True:
    for event in device.read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"name={str(accelEvent.name)} value={accelEvent.value}")
```

#### Prueba del Acelerómetro y Botones

```python
import asyncio
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel
import seeed_python_reterminal.button as rt_btn


async def accel_coroutine(device):
    async for event in device.async_read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"accel name={str(accelEvent.name)} value={accelEvent.value}")


async def btn_coroutine(device):
    async for event in device.async_read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")


accel_device = rt.get_acceleration_device()
btn_device = rt.get_button_device()

asyncio.ensure_future(accel_coroutine(accel_device))
asyncio.ensure_future(btn_coroutine(btn_device))

loop = asyncio.get_event_loop()
loop.run_forever()
```

#### Uso en imagen Buildroot

- Esta biblioteca se añadirá más tarde a la imagen Buildroot
- Primero escriba **su -** para habilitar la cuenta root
- Luego escriba **pip3 install seeed-python-reterminal**
- use **vi** como editor de texto al crear los archivos Python
- La demostración de Accel + botón tiene un problema. Esto se actualizará una vez que se solucione

#### Uso en imagen Yocto

- Aunque Python está instalado, pip no está instalado. Más tarde empaquetaremos esta biblioteca dentro de esta imagen del sistema

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
