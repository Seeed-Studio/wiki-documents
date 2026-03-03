---
description: Uso de Hardware e Interfaces para reComputer Industrial Serie J30 y Serie J40
title: reComputer Industrial J40, J30 Uso de Hardware e Interfaces
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

Este wiki presenta los diversos hardware e interfaces diferentes en el reComputer Industrial J4012, J4011, J3011, J3010 y cómo usarlos para expandir las ideas de tu proyecto.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

## Cámaras CSI

reComputer Industrial está equipado con **2x conectores de cámara MIPI CSI de 15 pines de 2 carriles** y las siguientes cámaras son compatibles

- Cámaras IMX219

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- Cámaras IMX477

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<!-- - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html) -->
<!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) -->
<!-- - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
- [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

### Descripción General de la Conexión

Aquí los 2 conectores de cámara CSI están marcados como **CAM0 y CAM1**. Puedes conectar una cámara a cualquier conector de los 2 o conectar 2 cámaras a ambos conectores al mismo tiempo.

**Paso 1:** Tira suavemente del bloqueo de color negro en el conector CSI

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

**Paso 2:** Inserta el cable de cinta de 15 pines en el conector asegurándote de que los contactos dorados estén mirando hacia abajo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

**Paso 3:** Empuja el bloqueo de color negro para fijar el cable de cinta en su lugar

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### Uso

Primero necesitas configurar la placa para cargar el controlador apropiado para la cámara específica que vas a usar. Para esto el sistema JetPack tiene una herramienta integrada para soportar cámaras IMX219 e IMX477.

**Paso 1:** Abre la terminal y ejecuta lo siguiente

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

**Paso 2:** Selecciona **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

**Paso 3:** Selecciona **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

**Paso 4:** Selecciona la cámara que deseas usar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

**Paso 5:** Selecciona **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

**Paso 6:** Selecciona **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

**Paso 7:** Presiona cualquier tecla en el teclado y el dispositivo se reiniciará con la configuración de cámara aplicada

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

Puedes usar cámaras CSI de 2 métodos diferentes. Sigue los comandos a continuación según el conector de la cámara.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">

Para el puerto CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para puerto CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
Si deseas cambiar más configuraciones de la cámara, puedes escribir **"nvgstcapture-1.0 --help"** para acceder a todas las opciones configurables disponibles.
:::

</TabItem>

<TabItem value="Método 2" label="Método 2">

Para puerto CAM0

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

Para el puerto CAM1

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
Si deseas cambiar más configuraciones de la cámara, puedes actualizar los argumentos como **ancho, alto, velocidad de fotogramas, formato**, etc.
:::

</TabItem>
</Tabs>

## RTC

reComputer Industrial está equipado con 2 formas diferentes de conectar a una batería RTC

### Descripción de la Conexión

- Método 1:

Conecta una **batería de celda tipo moneda CR1220 de 3V** al socket RTC en la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté mirando hacia arriba

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- Método 2:

Conecta una **batería de celda tipo moneda CR2302 de 3V con conector JST** al socket JST de 2 pines de 1.25mm en la placa como se muestra a continuación

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### Uso

:::danger
Ten en cuenta que si tu dispositivo reComputer ya ha sido actualizado a JetPack 6 o posterior, el RTC funcionará normalmente sin configuración adicional. Si estás usando JetPack 5, necesitarás consultar el siguiente contenido para configurar el servicio de sincronización del reloj.
:::

**Paso 1:** Conecta una batería RTC como se mencionó anteriormente

**Paso 2:** Enciende el reComputer Industrial

**Paso 3:** En el Escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Configuración > Fecha y Hora`, conéctate a una red mediante un cable Ethernet y selecciona **Fecha y Hora Automáticas** para obtener la fecha/hora automáticamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Si no te has conectado a internet mediante Ethernet, puedes configurar manualmente la fecha y la hora aquí.
:::

**Paso 4:** Abre una ventana de terminal y ejecuta el siguiente comando para verificar la hora del reloj de hardware

```sh
sudo hwclock
```

Verás una salida similar a la siguiente que no es la fecha/hora correcta

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

**Paso 5:** Cambia la hora del reloj de hardware a la hora actual del reloj del sistema ingresando el siguiente comando

```sh
sudo hwclock --systohc
```

**Paso 6:** Retira cualquier cable Ethernet conectado para asegurarte de que no obtenga la hora de internet y reinicia la placa

```sh
sudo reboot
```

**Paso 7:** Verificar la hora del reloj de hardware para confirmar que la fecha/hora permanece igual aunque el dispositivo haya sido apagado

Ahora crearemos un script para sincronizar siempre el reloj del sistema desde el reloj de hardware en cada arranque.

**Paso 8:** Crear un nuevo script de shell usando cualquier editor de texto de su preferencia. Aquí usamos el editor de texto **vi**

```sh
sudo vi /usr/bin/hwtosys.sh 
```

**Paso 9:** Ingresa al **modo de inserción** presionando **i**, copia y pega el siguiente contenido dentro del archivo

```sh
#!/bin/bash

sudo hwclock --hctosys
```

**Paso 10:** Hacer el script ejecutable

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

**Paso 11:** Crear un archivo systemd

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

**Paso 12:** Añade lo siguiente dentro del archivo

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**Paso 13:** Recargar el daemon de systemctl

```sh
sudo systemctl daemon-reload 
```

**Paso 14:** Habilitar el servicio recién creado para que se inicie al arrancar y iniciar el servicio

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**Paso 15:** Verificar que el script esté funcionando como un servicio systemd

```sh
sudo systemctl status hwtosys.service
```

**Paso 16:** Reinicia la placa y verás que el reloj del sistema ahora está sincronizado con el reloj de hardware

## M.2 Key M

De fábrica, reComputer Industrial incluye un SSD de 128GB conectado al slot M.2 Key M, que viene preinstalado con el sistema JetPack.

### Descripción General de la Conexión

Si deseas remover el SSD incluido e instalar uno nuevo, puedes seguir los pasos a continuación. Aquí solo recomendamos usar SSDs de Seeed con almacenamiento de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) y [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) porque solo hemos probado esos SSDs. Además, esta interfaz soporta SSDs PCIe Gen4.0.

- **Paso 1:** Remueve el tornillo del SSD preinstalado

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **Paso 2:** Remueve el SSD deslizándolo alejándolo del conector SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **Paso 3:** Inserta un nuevo SSD y aprieta de nuevo el tornillo

### Uso

Explicaremos cómo hacer una prueba de rendimiento simple en el SSD conectado

- **Paso 1:** Verifica la velocidad de escritura ejecutando el comando a continuación

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Paso 2:** Verifica la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutar esto después de ejecutar el comando anterior para la velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial viene con un conector mini PCIe que soporta módulos 4G y LoRa. Sin embargo, solo puedes conectar un módulo 4G o un módulo LoRa a la vez.

### Descripción General de la Conexión del Módulo 4G

Actualmente esta placa soporta los módulos EC25EUXGA y EC20CEHCLG.

- **Paso 1:** Apaga la placa si ya está encendida

- **Paso 2:** Retira el separador incluido. Este separador solo es necesario si estás usando la interfaz M.2 Key B

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **Paso 3:** Desliza el módulo 4G en la ranura mini PCIe, usa los tornillos preinstalados y atorníllelos en los 2 agujeros para asegurar el módulo 4G en su lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **Paso 4:** Conecta una antena al conector de antena etiquetado como **MAIN**. Aquí necesitas usar un conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **Paso 5:** Inserta una tarjeta nano SIM habilitada para 4G en la ranura de tarjeta SIM en la placa asegurándote de que la superficie dorada de la tarjeta SIM esté mirando hacia abajo. Aquí inserta la tarjeta completamente para que rebote después de golpear el resorte interno y se bloquee en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
Si deseas retirar la tarjeta SIM, presiónala hacia adentro para activar el resorte interno de modo que la SIM salga de la ranura.
:::

- **Paso 6:** Añade un puente entre los pines **SIM_MUX_SEL** y **GND** en el **Conector J8 (Control y UART)**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **Paso 6:** Enciende la placa

### Uso del Módulo 4G - Prueba de Marcado

Cuando uses el módulo EC25, el módulo se iniciará automáticamente y estará listo para usar. Sin embargo, cuando uses el módulo EC20, necesitas reiniciar el módulo para que funcione

**Paso 1:** Si estás usando el módulo EC25, puedes omitir este paso. Sin embargo, si estás usando el módulo EC20, ingresa los siguientes comandos para acceder al pin GPIO309 que es responsable de reiniciar el módulo 4G.

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=1
```

</TabItem>
</Tabs>

Para el módulo EC25, LED2 se encenderá en verde tan pronto como la placa se inicie. Para el módulo EC20, LED2 se encenderá en verde después de reiniciar el módulo como se explicó anteriormente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

**Paso 2:** Instalar minicom

```sh
sudo apt update
sudo apt install minicom -y
```

**Paso 3:** Ingresa a la consola serie del módulo 4G conectado para que podamos introducir comandos AT e interactuar con el módulo 4G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Paso 4:** Presiona **Ctrl+A** y luego presiona **E** para activar el eco local

**Paso 5:** Ingresa el comando **"AT"** y presiona enter. Si ves la respuesta como "OK", el módulo 4G está funcionando correctamente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

**Paso 6:** Ingresa el comando **"ATI"** para verificar la información del módulo

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

**Paso 7:** Para probar el módulo, ingresa el siguiente comando para llamar a otro número de teléfono

```sh
ATD<phone_number>;
```

Y verás la siguiente salida

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

Si el número de teléfono ingresado puede recibir la llamada, el módulo está funcionando como se esperaba

### Uso del Módulo 4G - Conectar a Internet

#### Módulo EC25

Si estás usando el módulo EC25, sigue los siguientes pasos

- **Paso 1:** Después de abrir la consola serie del módulo 4G como se explicó anteriormente (sección Uso del Módulo 4G - Probar Marcado), ejecuta el siguiente comando para conectarte a internet. Aquí reemplaza **YOUR_APN** con el APN de tu proveedor de red

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

En una conexión exitosa, debería mostrar **OK** como puedes ver en la imagen anterior

- **Paso 2:** Reinicia el módulo 4G ejecutando lo siguiente

```sh
AT+CFUN=1,1
```

Ahora perderás la conexión al módulo 4G en las terminales serie

- **Paso 3:** Cierra **minicom** presionando **CTRL + A** y luego **Q**

- **Paso 4:** Escribe **ifconfig** y verás una dirección IP en la interfaz **usb0**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Paso 5:** Puedes intentar hacer ping a un sitio web como se muestra a continuación para verificar si hay conectividad a internet

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### Módulo EC20

Si estás usando el módulo EC20, sigue los pasos a continuación

- **Paso 1:** Si ya has reiniciado el módulo 4G como se explicó en la sección anterior (sección Uso del Módulo 4G - Prueba de Marcado) para el módulo EC20, puedes omitir este paso. Sin embargo, si aún no lo has hecho, por favor hazlo ahora

- **Paso 2:** Ingresa a la consola serie del módulo 4G e introduce el siguiente comando para configurar al modo ECM

```sh
AT+QCFG="usbnet",1
```

- **Paso 3:** Reinicia el módulo 4G

- **Paso 4:** Dentro de la consola del módulo 4G, ejecuta el siguiente comando para conectarte a internet. Aquí reemplaza **YOUR_APN** con el APN de tu proveedor de red

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **Paso 6:** Escribe **ifconfig** y verás una dirección IP en la interfaz **usb1**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **Paso 7:** Puedes intentar hacer ping a una URL como se muestra a continuación para verificar si hay conectividad a internet

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### Descripción General de la Conexión del Módulo LoRa

Actualmente esta placa soporta el módulo WM1302 SPI. Puedes usar ya sea la [versión US](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) o la [versión EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) que está disponible en nuestro Bazaar.

- **Paso 1:** Apaga la placa si ya está encendida

- **Paso 2:** Desliza el módulo LoRa en la ranura mini PCIe y usa los tornillos preinstalados y atorníllelos en los 2 orificios para asegurar el módulo 4G en su lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **Paso 3:** Conecta una antena al conector de antena. Aquí necesitas usar un conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
Asegúrate de que no haya un puente entre los pines **SIM_MUX_SEL** y **GND** en el **encabezado J8 (Control y UART)**. Este puente solo es necesario cuando se usan módulos 4G.
:::

- **Paso 4:** Enciende la placa

### Uso del Módulo LoRa - Prueba de RF LoRa

Cuando el módulo LoRa esté conectado, verás que los LEDs verde y azul del módulo se encienden

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **Paso 1:** Ingresa el siguiente comando para verificar si el módulo LoRa es detectado por el sistema

```sh
i2cdetect -r -y 7
```

Si ves la siguiente salida, el módulo es detectado por el sistema

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Paso 2:** Ingresa los siguientes comandos para compilar y construir la herramienta de transmisión de señales LoRa

:::danger
Ten en cuenta que esta **herramienta de transmisión de señales LoRa** solo es aplicable a JetPack 5. Si deseas probar la funcionalidad del módulo LoRa en JetPack 6, consulta el [esquema](https://github.com/Seeed-Studio/OSHW-Jetson-Series/blob/main/reComputer%20Jetson%20carrier%20board/reComputer%20Industrial%20J201/Schematic/reComputer%20Industrial%20J201_V1.2.pdf) y el [pinmux](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) para determinar los nombres de los pines, y utiliza el comando `gpioset` para configurar el estado del pin.
:::

```bash
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

Si ves el resultado de abajo y el LED en el módulo LoRa se vuelve ROJO, eso significa que el módulo está transmitiendo señales RF exitosamente

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

Para detener la transmisión, puedes presionar **CTRL + C** en el teclado.

### Uso del Módulo LoRa - Conectar a TTN

Ahora nos conectaremos a TTN (The Things Network) y usaremos el reComputer Industrial como un gateway LoRaWAN de TTN

- **Paso 1:** Ingresa lo siguiente para preparar el reenviador de paquetes

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Paso 2:** Ejecuta lo siguiente según el módulo LoRa que estés usando. Aquí hemos probado la versión SPI US915

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Sin embargo, los comandos para otros módulos diferentes son los siguientes

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

Después de ejecutar el comando anterior, verás la siguiente salida con la última línea mostrando la información del **EUI del concentrador**. Por favor, conserva esta información porque la usaremos más tarde al configurar la puerta de enlace con TTN

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Paso 3:** Visita [esta URL](https://console.cloud.thethings.network) para ingresar a la consola de TTN y selecciona una región de tu elección

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Paso 4:** Inicia sesión si ya tienes una cuenta, o regístrate para una nueva cuenta si no tienes una

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Paso 5:** Haz clic en **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Paso 6:** Haz clic en **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Paso 7:** Ingresa el **EUI del Concentrador** que obtuviste anteriormente dentro de la sección **Gateway EUI** y haz clic en **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **Paso 8:** Ingresa el **plan de frecuencia** según el módulo LoRa que estés usando. Aquí estamos usando la versión US915 del módulo y por lo tanto hemos seleccionado **United Stated 902-928 MHz, FSB 2 (used by TTN)**. Después de eso haz clic en **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
El **ID de Gateway** se ha completado automáticamente por ti. Sin embargo, puedes cambiarlo a lo que prefieras. El **nombre del Gateway** no es obligatorio de llenar. No obstante, también puedes completarlo según tu preferencia.
:::

- **Paso 9:** Toma nota de la **Dirección del Servidor de Gateway** en la página principal del gateway

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Paso 9:** En el reTerminal Industrial, edita el archivo **global_conf_json** que usamos junto con el comando **lora_pkt_fwd**. Aquí necesitas cambiar las opciones **gateway_ID**, **server_address**, **serv_port_up** y **serv_port_down** como sigue

  - gateway_ID: EUI del Concentrador del dispositivo
  - server_address: Dirección del Servidor de Gateway de TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Paso 10:** Vuelve a ejecutar el reenviador de paquetes

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Si ves la siguiente salida, eso significa que el dispositivo se ha conectado exitosamente con TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reComputer Industrial viene con un conector M.2 Key B que soporta módulos 4G y 5G. Actualmente hemos probado el **módulo 5G SIM8202G-M2**

### Descripción General de la Conexión del Módulo 5G

- **Paso 1:** Apaga la placa si ya está encendida

- **Paso 2:** Asegúrate de que el separador esté en su lugar y luego retira el tornillo superior del separador

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **Paso 2:** Desliza el módulo 5G en la ranura M.2 Key B y atornilla el tornillo del separador para asegurar el módulo 5G en su lugar (hablar sobre el separador)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **Paso 3:** Conecta 4 antenas a los conectores de antena en el módulo. Aquí necesitas usar un conector IPEX 4

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **Paso 4:** Inserta una tarjeta nano SIM habilitada para 5G en la ranura de tarjeta SIM en la placa asegurándote de que la superficie dorada de la tarjeta SIM esté mirando hacia abajo. Aquí inserta la tarjeta completamente para que rebote después de golpear el resorte interno y se bloquee en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
Si deseas retirar la tarjeta SIM, presiónala hacia adentro para activar el resorte interno de modo que la SIM salga de la ranura.
:::

- **Paso 5:** Enciende la placa

### Uso del Módulo 5G - Prueba de Marcado

Al usar el módulo 5G SIM8202G-M2, el módulo no se iniciará automáticamente. Por lo tanto, primero necesitamos alternar algunos GPIOs para hacerlo iniciar

**Paso 1:** Ingresa lo siguiente para iniciar el módulo 5G

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=0
sudo gpioset --mode=wait gpiochip1 25=1
sudo gpioset --mode=wait gpiochip1 14=0
```

:::note
Por favor, abre múltiples terminales para ejecutar estos comandos y asegúrate de que cada ventana de terminal permanezca activa.
:::

</TabItem>
</Tabs>

Una vez ejecutado lo anterior, el LED2 se encenderá en verde como se muestra a continuación

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

**Paso 2:** Instalar minicom

```sh
sudo apt update
sudo apt install minicom -y
```

**Paso 3:** Ingresa a la consola serie del módulo 5G conectado para que podamos introducir comandos AT e interactuar con el módulo 5G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Paso 4:** Ingresa el comando **"AT"** y presiona enter. Si ves la respuesta como "OK", el módulo 5G está funcionando correctamente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

**Paso 5:** Ingresa el comando **"ATI"** para verificar la información del módulo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

**Paso 6:** Para probar el módulo, ingresa el siguiente comando para llamar a otro número de teléfono

```sh
ATD<phone_number>;
```

Y verás la siguiente salida

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

## DI/ DO

reComputer Industrial soporta 4 canales de entrada digital y 4 canales de salida digital, todos los cuales están ópticamente aislados para proteger efectivamente la placa principal de picos de voltaje u otras perturbaciones eléctricas. También hay una interfaz CAN en este mismo conector que discutiremos más adelante en esta wiki

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### Tabla de Asignación de Pines DI/ DO

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nombre de Etiqueta</th>
      <th>Señal de Esquemático</th>
      <th>Número de Pin del Módulo</th>
      <th>Número BGA</th>
      <th>Número GPIO</th>
      <th>Límites V/A</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Entrada</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>12V/ 20mA corriente en total</td>
      <td rowSpan={4}>Entrada Digital de 12V, la señal de tierra necesita<br />estar conectada a GND_DI (Pin2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>Salida</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>40V/40mA carga por pin</td>
      <td rowSpan={4}>Salida digital, voltaje máximo de resistencia<br />40V, la señal de tierra necesita estar<br />conectada a GND_DO(Pin8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>Bus CAN con señales diferenciales estándar, <br />la señal de tierra necesita estar conectada a GND_ISO (Pin 12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Tierra</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>La señal de tierra de referencia para la Entrada<br />Digital de 12V, que también es la ruta de retorno para el DI</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>La señal de tierra de referencia de la salida digital, que también es la ruta de retorno del DO</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>La señal de tierra de referencia para CAN</td>
    </tr>
  </tbody>
</table>

:::danger
Ten en cuenta que los números de pines en la tabla anterior solo son válidos para JetPack 5. Podemos obtener los números de pines para JetPack 6 de las siguientes maneras:

1. Usa el comando `gpioinfo` para obtener la tabla GPIO.
2. Verifica el **Número BGA** para encontrar el número de pin correspondiente en JetPack 6.

:::

### Descripción general de conexión para DI

Puedes realizar la conexión para DI siguiendo el diagrama a continuación. Es mejor agregar una resistencia en serie para la línea DI. Aquí hemos probado con una resistencia de 4.7kΩ conectada al pin DI1.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Uso para DI

Necesitas ingresar un voltaje de 12V en la línea DI para que sea detectado como una entrada

**Paso 1:** Realiza las conexiones como se muestra arriba al **pin DI1** e ingresa **12V**

**Paso 2:** Abre y verifica el estado para DI1 de la siguiente manera:

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05

cat value
```

:::note
Puedes consultar la **Tabla de Asignación de Pines DI/DO** para encontrar el número GPIO y el número BGA. En el ejemplo anterior, para el pin DI1, el número GPIO es 453 y el número BGA es PQ.05.
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioget gpiochip0 105
```

</TabItem>
</Tabs>

Si devuelve 0, significa que hay entrada de 12V. Si devuelve 1, significa que no hay voltaje de entrada.

### Descripción General de Conexión para DO

Puedes realizar la conexión para DO siguiendo el diagrama a continuación. Es mejor añadir una resistencia en serie para la línea DO. Aquí hemos probado con una resistencia de 4.7kΩ

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Uso para DO

Aquí necesitas conectar una carga como se menciona en el diagrama anterior. La forma más fácil de probar esto sería conectar un multímetro si tienes acceso a uno, o de lo contrario conectar una carga que requiera menos de 40V de voltaje máximo

**Paso 1:** Realiza las conexiones como se muestra arriba al **pin DO1** e introduce **40V como máximo**

**Paso 2:** Abre y enciende el GPIO para D01 de la siguiente manera:

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction

echo 1 > value
```

:::note
Puedes consultar la **Tabla de Asignación de Pines DI/DO** para encontrar el número GPIO y el número BGA. En el ejemplo anterior, para el pin DO1, el número GPIO es 399 y el número BGA es PI.00.
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip0 51=1
```

</TabItem>
</Tabs>

Si la carga está encendida o el multímetro muestra el voltaje que has introducido, la prueba está funcionando correctamente.

## CAN

reComputer Industrial cuenta con una interfaz CAN que soporta el protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. La interfaz CAN está aislada usando aislamiento capacitivo, lo que proporciona excelente protección EMI y asegura comunicación confiable en aplicaciones industriales y de automatización. Una resistencia terminal de 120Ω ha sido instalada por defecto y puedes activar y desactivar esta resistencia usando GPIO.

Nota: La interfaz CAN usa una fuente de alimentación aislada, lo que significa que la señal de tierra para dispositivos externos conectados a la interfaz CAN debe conectarse al pin CG

### Descripción General de Conexión con Adaptador USB a CAN

Para probar e interfaz con el bus CAN, conecta un adaptador USB a CAN a los conectores CAN en la placa como se muestra a continuación

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Aquí hemos usado [Adaptador Analizador USB a CAN con Cable USB](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) disponible en nuestro Bazaar.

### Uso con Adaptador USB a CAN

- **Paso 1:** Descarga el controlador para el adaptador USB a CAN que estás usando desde el sitio web del fabricante e instálalo. En nuestro caso, según el adaptador que usamos, los controladores se pueden encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Paso 2:** Algunos adaptadores también vienen con el software necesario para la PC para comunicarse con el dispositivo CAN. En nuestro caso, según el adaptador que usamos, hemos descargado e instalado el software que se puede encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Paso 3:** Abre una ventana de terminal en el reComputer Industrial y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 4:** Escribe **ifconfig** en la terminal y verás la interfaz CAN habilitada

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Paso 5:** Abre el software CAN que instalaste anteriormente. En este caso, abriremos el software que instalamos según el adaptador CAN que estamos usando

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Paso 6:** Conecta el adaptador USB a CAN a la PC y abre el **Administrador de dispositivos** buscándolo en la barra de búsqueda de Windows. Ahora verás el adaptador conectado bajo **Puertos (COM y LPT)**. Anota el puerto serie que aparece aquí. Según la imagen de abajo, el puerto serie es **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Paso 7:** Abre el software CAN, haz clic en **Refresh** junto a la sección **COM**, haz clic en el menú desplegable y selecciona el puerto serie según el adaptador conectado. Mantén el **COM bps** en el valor predeterminado y haz clic en **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Paso 8:** Mantén el **Mode** y **CAN bps** en los valores predeterminados, cambia el **Type** a **Standard frame** y haz clic en **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Paso 9:** En reComputer Industrial, ejecuta el siguiente comando para enviar una señal CAN a la PC

```sh
cansend can0 123#abcdabcd
```

Ahora verás la señal anterior recibida por el software como se muestra a continuación

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Paso 10:** En reComputer Industrial, ejecuta el siguiente comando para esperar a recibir señales CAN desde la PC

```sh
candump can0 &
```

- **Paso 11:** En el software CAN, haz clic en **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Ahora verás que es recibido por reComputer Industrial como se muestra a continuación

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### Descripción general de la conexión con reTerminal DM

Si tienes acceso a un [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), puedes comunicarte con él directamente porque reTerminal DM también tiene una interfaz CAN.

Consulta la imagen a continuación para conectar reComputer Industrial y reTerminal DM a través de CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Uso con reTerminal DM

- **Paso 1:** Antes de usar reTerminal DM, visita [esta wiki](https://wiki.seeedstudio.com/es/reterminal-dm) para comenzar con reTerminal DM

- **Paso 2:** Abre una ventana de terminal en el reComputer Industrial y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 3:** Abre una ventana de terminal en el reTerminal DM y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 4:** Abre una ventana de terminal en el reTerminal DM y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 5:** Si escribes **ifconfig** en ambos dispositivos, verás que las interfaces CAN están habilitadas

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Paso 6:** En el reTerminal DM, ejecuta lo siguiente para esperar a recibir señales CAN del reComputer Industrial

```sh
candump can0 &
```

- **Paso 7:** En el reComputer Industrial, ejecuta el siguiente comando para enviar una señal CAN al reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Ahora lo verás recibido por reTerminal DM como sigue

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Paso 8:** Repite el **paso 6 y paso 7** pero intercambiando los dispositivos. Usa reTerminal DM para enviar señales CAN y usa reComputer Industrial para recibirlas

## Interfaces RS232/ RS422/ RS485

reComputer Industrial tiene un conector DB9 que soporta los protocolos de comunicación RS232, RS422 y RS485 y hay un panel de interruptores DIP a bordo para cambiar entre las diferentes opciones de interfaz

Puedes ver el panel de interruptores DIP como se muestra a continuación:

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
Asegúrate de retirar la cubierta de plástico amarilla antes de usar el panel de interruptores DIP.
:::

Y la siguiente tabla explica los diferentes modos basados en las posiciones del interruptor DIP

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>Modo</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>RS-232 Puro</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Activo Bajo</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Activo Alto</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422 con resistor de terminación</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>RS-232 Puro</td>
      <td>1T/1R RS-232 coexiste con RS485</td>
    </tr>
    <tr>
      <td>aplicación sin la necesidad del bus</td>
    </tr>
    <tr>
      <td>IC conmutador (para uso especial).</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 con resistor de terminación</td>
    </tr>
    <tr>
      <td>TX ENABLE Activo Bajo</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Bajo Consumo</td>
      <td rowSpan={2}>Todos los pines I/O están en Alta Impedancia</td>
    </tr>
    <tr>
      <td>Apagado</td>
    </tr>
  </tbody>
</table>

:::note
De fábrica, el modo predeterminado de los interruptores estará configurado en RS485 con 010.
:::

La tabla anterior tiene en cuenta los primeros tres interruptores del panel de interruptores DIP. Sin embargo, el cuarto interruptor es responsable de alternar la velocidad de cambio que está directamente relacionada con la velocidad de datos

<table>
  <thead>
    <tr>
      <th />
      <th>Estado</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />Este Transceptor Multiprotocolo RS232/RS422/RS485 limita la velocidad de comunicación como sigue:<br />RS-232: Velocidad Máxima de Datos es 1.5Mbps<br />RS-485/RS-422; Velocidad Máxima de Datos es 10Mbps<br />La Velocidad Máxima de Datos real depende del SO Jetson Usado</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: Velocidad Máxima de Datos es 250Kbps<br />RS-485/RS-422: Velocidad Máxima de Datos es 250kbps</td>
    </tr>
  </tbody>
</table>

Aquí usaremos adaptadores USB a RS232, RS485 y RS422 para probar las interfaces. Así que antes de continuar, necesitas instalar una aplicación de terminal serie en tu PC. Aquí te recomendamos instalar **Putty** que es fácil de configurar y usar.

- **Paso 1:** Visita [este sitio web](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) y descarga Putty según la arquitectura de tu PC

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Aquí hemos seleccionado Putty según el PC que usamos que es una máquina X86 windows de 64 bits

- **Paso 2:** Abre la configuración descargada y sigue las indicaciones para instalar la aplicación

### Descripción General de Conexión

Puedes referirte a la numeración de pines del conector DB9 y la tabla para hacer las conexiones

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>MODO</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PIN</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

### Descripción General de Conexión RS232

Aquí puedes usar un adaptador USB a RS232 para probar la interfaz. Hemos usado [Adaptador USB a RS232 UGREEN](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nuestras pruebas.

**Paso 1:** Apaga la placa

**Paso 2:** Aquí tenemos 2 opciones para configurar los interruptores DIP. Ya sea en modo 001 o modo 101. Las posiciones del interruptor para cada modo se muestran a continuación

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

**Paso 3:** Conecta el adaptador USB a RS232 al conector DB9. Aquí hemos conectado el adaptador que mencionamos anteriormente

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

**Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

**Paso 5:** Enciende la placa

### Uso de RS232

**Paso 1:** Puede que necesites instalar un controlador para el adaptador que estás usando o Windows instalará automáticamente el controlador por ti. Ve al Administrador de Dispositivos escribiendo **Administrador de Dispositivos** en la búsqueda de Windows y verifica si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

**Paso 2:** Si no puedes ver el adaptador, necesitas instalar el controlador según el adaptador que estés usando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes [esta página](https://www.ugreen.com/pages/download), buscar **20201** como el número de modelo y descargar el controlador correspondiente

**Paso 3:** Abre Putty en el PC, selecciona la sección **Terminal** y configura lo siguiente

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**Paso 4:** Selecciona **Session**, bajo **Connection type**, selecciona **Serial**, configura el número de puerto serie según lo que veas en **Administrador de Dispositivos**, mantén la Velocidad como predeterminada (9600) y haz clic en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

**Paso 5:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para enviar una señal desde el reComputer al PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

Ahora verás este mensaje mostrado en Putty

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

**Paso 6:** En la ventana del terminal de reTerminal Industrial, escribe lo siguiente para esperar a recibir señales desde la PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana del terminal de reComputer Industrial

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### Descripción General de la Conexión RS422

Aquí puedes usar un adaptador USB a RS422 para probar la interfaz. Hemos usado el [Adaptador DTech USB a RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

**Paso 1:** Apaga la placa

**Paso 2:** Aquí tenemos 2 opciones para configurar los interruptores DIP. Ya sea en modo 000 o modo 100. Las posiciones del interruptor para cada modo se muestran a continuación

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

**Paso 3:** Conecta el adaptador USB a RS422 al conector DB9 usando cables jumper como se muestra a continuación. Aquí hemos conectado el adaptador que mencionamos anteriormente

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

**Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

**Paso 5:** Enciende la placa

### Uso de RS422

**Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás usando o Windows instalará automáticamente el controlador por ti. Ve al Administrador de dispositivos escribiendo **Administrador de dispositivos** en la búsqueda de Windows y verifica si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**Paso 2:** Si no puedes ver el adaptador, necesitas instalar el controlador según el adaptador que estés usando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

**Paso 3:** Abre Putty en la PC, selecciona la sección **Terminal** y configura lo siguiente

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**Paso 4:** Selecciona **Session**, bajo **Connection type**, selecciona **Serial**, configura el número de puerto serie según lo que veas en el **Administrador de dispositivos**, mantén la velocidad como predeterminada (9600) y haz clic en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**Paso 5:** En la ventana del terminal de reTerminal Industrial, escribe lo siguiente para enviar una señal desde el reComputer a la PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

Ahora verás este mensaje mostrado en Putty

**Paso 6:** En la ventana del terminal de reTerminal Industrial, escribe lo siguiente para esperar a recibir señales desde la PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana del terminal de reComputer Industrial

### Descripción general de la conexión RS485

Aquí puedes usar un adaptador USB a RS422 para probar la interfaz. Hemos usado el [Adaptador USB a RS485 DTech](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

**Paso 1:** Apaga la placa

**Paso 2:** Aquí tenemos 3 opciones para configurar los interruptores DIP. Ya sea en modo 010, modo 011 o modo 110. Las posiciones del interruptor para cada modo se muestran a continuación

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

**Paso 3:** Conecta el adaptador USB a RS422 al conector DB9 usando cables puente como se muestra a continuación. Aquí hemos conectado el adaptador que mencionamos anteriormente

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

**Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

**Paso 5:** Enciende la placa

### Uso de RS485

**Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás usando o Windows instalará automáticamente el controlador por ti. Ve al Administrador de dispositivos escribiendo **Administrador de dispositivos** en la búsqueda de Windows y verifica si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**Paso 2:** Si no puedes ver el adaptador, necesitas instalar el controlador según el adaptador que estés usando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

**Paso 3:** Abre Putty en la PC, selecciona la sección **Terminal** y configura lo siguiente

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**Paso 4:** Selecciona **Session**, bajo **Connection type**, selecciona **Serial**, configura el número de puerto serie según lo que veas en el **Administrador de dispositivos**, mantén la velocidad como predeterminada (9600) y haz clic en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**Paso 5:** En la ventana del terminal de reTerminal Industrial, escribe lo siguiente para enviar una señal desde el reComputer a la PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=0
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

Ahora verás este mensaje mostrado en Putty

**Paso 6:** En la ventana del terminal de reTerminal Industrial, escribe lo siguiente para esperar a recibir señales desde la PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=1
cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana del terminal de reComputer Industrial

## Conectores Gigabit Ethernet

Hay dos conectores Gigabit Ethernet (10/100/1000M) en el reComputer Industrial y funcionan de diferentes maneras

- El conector del extremo izquierdo está conectado directamente al módulo Jetson y puede proporcionar funcionalidad PoE con especificación **PSE 802.3 af, 15W**. Esto significa que puedes conectar una cámara IP PoE o cualquier otro dispositivo PoE a este puerto para proporcionar energía al dispositivo conectado.
- El otro conector está conectado a través de un módulo PCIe a Ethernet (LAN7430-I/Y9X)

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

Hay 2 LEDs (verde y amarillo) en cada puerto Ethernet que indican lo siguiente

- LED Verde: ENCENDIDO solo cuando está conectado a una red de 1000M
- LED Amarillo: Muestra el estado de actividad de la red

## USB

reComputer Industrial viene con 3 conectores USB3.2 integrados y tiene las siguientes características:

- En los conectores USB apilados dobles, los puertos USB superior e inferior comparten un IC limitador de corriente, con una capacidad total de suministro de energía de corriente de salida máxima de 2.1A (uno solo también puede ser 2.1A). Si supera 2.1A, entrará en estado de protección contra sobrecorriente.
- En el conector USB individual junto a los conectores USB apilados dobles, tiene una capacidad total de suministro de energía de corriente de salida máxima de 2.1A. Si supera 2.1A, entrará en estado de protección contra sobrecorriente.
- El módulo Orin NX viene con 3 USB3.2, de los cuales solo uno se usa en reComputer y se convierte a 3 vías. (USB3.1 TYPE-A x2 - J4 y USB3.1 TYPE-A x1 -J3).
- Solo admite USB Host, no modo Device
- Proporciona 5V 2.1A
- Intercambiable en caliente

### Uso

Explicaremos cómo hacer una prueba de rendimiento simple en una unidad flash USB conectada

- **Paso 1:** Verifica la velocidad de escritura ejecutando el siguiente comando

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Paso 2:** Verifica la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutar esto después de ejecutar el comando anterior para la velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## LED Configurable

Hay un LED de color verde ubicado en la placa como se muestra a continuación. Por defecto actúa como el LED que muestra que el dispositivo está funcionando correctamente. Sin embargo, también puedes programar este LED para que se ENCIENDA y APAGUE mediante el sistema

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### Uso

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

**Paso 1:** Ingresa los siguientes comandos en una ventana de terminal para acceder al LED de color verde

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

**Paso 2:** Apagar el LED

```sh
echo 0 > value 
```

**Paso 3:** Encender el LED

```sh
echo 1 > value 
```

Si has terminado de usar el LED, puedes ejecutar lo siguiente

```sh
cd ..
echo 329 > unexport
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

Apagar el LED:

```sh
sudo gpioset gpiochip1 13=0
```

Encender el LED:

```bash
sudo gpioset gpiochip1 13=1
```

</TabItem>
</Tabs>

## Monitorear el Rendimiento del Sistema

Podemos usar la aplicación **jetson stats** para monitorear las temperaturas de los componentes del sistema y verificar otros detalles del sistema como

- Ver las utilizaciones de CPU, GPU, RAM
- Cambiar modos de energía
- Configurar a velocidades máximas de reloj
- Verificar información de JetPack

- **Paso 1:** En las ventanas de terminal de reComputer Industrial, escriba lo siguiente

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **Paso 2:** Reinicia la placa

```sh
sudo reboot
```

- **Paso 3:** Escribe lo siguiente en la terminal

```sh
jtop
```

Ahora la aplicación **jtop** se abrirá de la siguiente manera

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **Paso 4:** ¡Aquí puedes navegar por las diferentes páginas de las aplicaciones y explorar todas las características!

## WiFi y Bluetooth

reComputer Industrial no viene con WiFi y Bluetooth incluidos de fábrica. Pero hay una sección reservada en la PCB para que se pueda soldar un módulo WiFi/Bluetooth a la placa. Aquí hemos reservado el espacio para soportar un módulo **BL-M8723DU1**.

### Descripción de la Conexión

- **Paso 1:** Si quieres soldar el módulo **BL-M8723DU1** por ti mismo, puedes hacerlo. Pero no lo recomendamos porque si dañas la placa en el proceso, la garantía quedará anulada. Lo que recomendamos es usar nuestro servicio profesional para ayudarte a soldar este módulo en la placa y puedes enviar un correo electrónico a order@seeed.cc con tu solicitud.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **Paso 2:** Conecta dos antenas a los dos conectores de antena en la placa para WiFi y Bluetooth. Aquí necesitas usar un conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### Uso

- **Paso 1:** Enciende la placa y una vez que el dispositivo arranque en Ubuntu Desktop, haz clic en el menú desplegable en la esquina superior derecha, navega a `Settings > Wi-Fi` y activa el botón en la barra de título para habilitar WiFi. Después de eso selecciona una red WiFi, ingresa la contraseña requerida y conéctate a ella

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **Paso 2:** En la misma ventana, elige **Bluetooth** y activa el botón en la barra de título para habilitar Bluetooth. Después de eso selecciona un dispositivo Bluetooth para conectarte a él

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial viene con una interfaz TPM para conectar un módulo TPM externo. Aquí hemos probado con un Módulo TPM2.0 basado en Infineon SLB9670.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### Descripción de la Conexión

Conecta el módulo TPM al conector TPM como se muestra a continuación

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### Uso

Verifica si el módulo TPM está cargado correctamente ejecutando los siguientes comandos

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

Y verás la salida como sigue

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## Máximo Rendimiento en reComputer Industrial

Si quieres habilitar el máximo rendimiento en el reComputer Industrial, por favor sigue las siguientes instrucciones

- **Paso 1:** Ingresa el siguiente comando para habilitar el modo de máxima potencia

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

Aquí pedirá escribir **YES** para reiniciar la placa

- **Paso 2:** Una vez que la placa haya arrancado, ingrese el siguiente comando para establecer los relojes de la CPU a la frecuencia máxima

```sh
sudo jetson_clocks
```

## Tabla GPIO

Puedes acceder a la tabla GPIO del reComputer Industrial para familiarizarte with todas las asignaciones de pines.

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

Ejecuta lo siguiente dentro de una terminal para acceder a ella

```bash
sudo cat /sys/kernel/debug/gpio
```

Y verás la salida como sigue

```bash
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

Ejecuta lo siguiente dentro de una terminal para acceder a él.

```bash
gpioinfo
```

Y verás la salida como sigue

```bash
seeed@seeed-desktop:~$ gpioinfo 
gpiochip0 - 164 lines:
 line   0:      "PA.00" "regulator-vdd-3v3-sd" output active-high [used]
 line   1:      "PA.01"       unused   input  active-high 
 line   2:      "PA.02"       unused   input  active-high 
 line   3:      "PA.03"       unused   input  active-high 
 line   4:      "PA.04"       unused   input  active-high 
 line   5:      "PA.05"       unused   input  active-high 
 line   6:      "PA.06"       unused   input  active-high 
 line   7:      "PA.07"       unused   input  active-high 
 line   8:      "PB.00"       unused   input  active-high 
 line   9:      "PC.00"       unused   input  active-high 
 line  10:      "PC.01"       unused   input  active-high 
 line  11:      "PC.02"       unused   input  active-high 
 line  12:      "PC.03"       unused   input  active-high 
 line  13:      "PC.04"       unused   input  active-high 
 line  14:      "PC.05"       unused   input  active-high 
 line  15:      "PC.06"       unused   input  active-high 
 line  16:      "PC.07"       unused   input  active-high 
 line  17:      "PD.00"       unused   input  active-high 
 line  18:      "PD.01"       unused   input  active-high 
 line  19:      "PD.02"       unused   input  active-high 
 line  20:      "PD.03"       unused   input  active-high 
 line  21:      "PE.00"       unused   input  active-high 
 line  22:      "PE.01"       unused   input  active-high 
 line  23:      "PE.02"       unused   input  active-high 
 line  24:      "PE.03"       unused   input  active-high 
 line  25:      "PE.04"       unused   input  active-high 
 line  26:      "PE.05"       unused   input  active-high 
 line  27:      "PE.06"       unused   input  active-high 
 line  28:      "PE.07"       unused   input  active-high 
 line  29:      "PF.00"       unused   input  active-high 
 line  30:      "PF.01"       unused   input  active-high 
 line  31:      "PF.02"       unused   input  active-high 
 line  32:      "PF.03"       unused   input  active-high 
 line  33:      "PF.04"       unused   input  active-high 
 line  34:      "PF.05"       unused   input  active-high 
 line  35:      "PG.00" "Force Recovery" input active-low [used]
 line  36:      "PG.01"       unused   input  active-high 
 line  37:      "PG.02"    "Suspend"   input   active-low [used]
 line  38:      "PG.03"       unused   input  active-high 
 line  39:      "PG.04"       unused   input  active-high 
 line  40:      "PG.05"       unused   input  active-high 
 line  41:      "PG.06"       unused   input  active-high 
 line  42:      "PG.07"       unused   input  active-high 
 line  43:      "PH.00"       unused   input  active-high 
 line  44:      "PH.01"       unused   input  active-high 
 line  45:      "PH.02"       unused   input  active-high 
 line  46:      "PH.03" "camera-control-output-low" output active-high [used]
 line  47:      "PH.04"       unused   input  active-high 
 line  48:      "PH.05"       unused   input  active-high 
 line  49:      "PH.06"       unused  output  active-high 
 line  50:      "PH.07"       unused   input  active-high 
 line  51:      "PI.00"       unused  output  active-high 
 line  52:      "PI.01"       unused   input  active-high 
 line  53:      "PI.02"       unused   input  active-high 
 line  54:      "PI.03"       unused   input  active-high 
 line  55:      "PI.04"       unused   input  active-high 
 line  56:      "PI.05"       kernel   input  active-high [used]
 line  57:      "PI.06"       unused   input  active-high 
 line  58:      "PJ.00"       unused   input  active-high 
 line  59:      "PJ.01"       unused   input  active-high 
 line  60:      "PJ.02"       unused   input  active-high 
 line  61:      "PJ.03"       unused   input  active-high 
 line  62:      "PJ.04"       unused   input  active-high 
 line  63:      "PJ.05"       unused   input  active-high 
 line  64:      "PK.00"       unused   input  active-high 
 line  65:      "PK.01"       unused   input  active-high 
 line  66:      "PK.02"       unused   input  active-high 
 line  67:      "PK.03"       unused   input  active-high 
 line  68:      "PK.04"       unused  output  active-high 
 line  69:      "PK.05"       unused  output  active-high 
 line  70:      "PK.06"       unused   input  active-high 
 line  71:      "PK.07"       unused   input  active-high 
 line  72:      "PL.00"       unused   input  active-high 
 line  73:      "PL.01"       unused   input  active-high 
 line  74:      "PL.02"       unused   input  active-high 
 line  75:      "PL.03"       unused   input  active-high 
 line  76:      "PM.00"       kernel   input  active-high [used]
 line  77:      "PM.01"       unused   input  active-high 
 line  78:      "PM.02"       unused   input  active-high 
 line  79:      "PM.03"       unused   input  active-high 
 line  80:      "PM.04"       unused   input  active-high 
 line  81:      "PM.05"       unused   input  active-high 
 line  82:      "PM.06"       unused   input  active-high 
 line  83:      "PM.07"       unused   input  active-high 
 line  84:      "PN.00"       unused   input  active-high 
 line  85:      "PN.01"  "interrupt"   input  active-high [used]
 line  86:      "PN.02"       unused   input  active-high 
 line  87:      "PN.03"       unused   input  active-high 
 line  88:      "PN.04"       unused   input  active-high 
 line  89:      "PN.05"       unused   input  active-high 
 line  90:      "PN.06"       unused   input  active-high 
 line  91:      "PN.07"       unused   input  active-high 
 line  92:      "PP.00"       unused   input  active-high 
 line  93:      "PP.01"       unused   input  active-high 
 line  94:      "PP.02"       unused   input  active-high 
 line  95:      "PP.03"       unused   input  active-high 
 line  96:      "PP.04"       unused   input  active-high 
 line  97:      "PP.05"       unused   input  active-high 
 line  98:      "PP.06"       unused   input  active-high 
 line  99:      "PP.07"       unused   input  active-high 
 line 100:      "PQ.00"       unused   input  active-high 
 line 101:      "PQ.01"       unused   input  active-high 
 line 102:      "PQ.02"       unused   input  active-high 
 line 103:      "PQ.03"       unused  output  active-high 
 line 104:      "PQ.04"       unused   input  active-high 
 line 105:      "PQ.05"       unused   input  active-high 
 line 106:      "PQ.06"       unused   input  active-high 
 line 107:      "PQ.07"       unused   input  active-high 
 line 108:      "PR.00"       unused   input  active-high 
 line 109:      "PR.01"       unused   input  active-high 
 line 110:      "PR.02"       unused   input  active-high 
 line 111:      "PR.03"       unused   input  active-high 
 line 112:      "PR.04"       unused   input  active-high 
 line 113:      "PR.05"       unused   input  active-high 
 line 114:      "PX.00"       kernel   input  active-high [used]
 line 115:      "PX.01"       kernel   input  active-high [used]
 line 116:      "PX.02"       unused   input  active-high 
 line 117:      "PX.03"       unused   input  active-high 
 line 118:      "PX.04"       unused   input  active-high 
 line 119:      "PX.05"       unused   input  active-high 
 line 120:      "PX.06"       unused   input  active-high 
 line 121:      "PX.07"       unused   input  active-high 
 line 122:      "PY.00"       unused   input  active-high 
 line 123:      "PY.01"       unused   input  active-high 
 line 124:      "PY.02"       unused   input  active-high 
 line 125:      "PY.03"       unused   input  active-high 
 line 126:      "PY.04"       unused   input  active-high 
 line 127:      "PY.05"       unused   input  active-high 
 line 128:      "PY.06"       unused   input  active-high 
 line 129:      "PY.07"       unused   input  active-high 
 line 130:      "PZ.00"       unused   input  active-high 
 line 131:      "PZ.01"       "vbus"   input   active-low [used]
 line 132:      "PZ.02"       unused   input  active-high 
 line 133:      "PZ.03"       unused   input  active-high 
 line 134:      "PZ.04"       unused   input  active-high 
 line 135:      "PZ.05"       unused   input  active-high 
 line 136:      "PZ.06"   "spi0 CS0"  output   active-low [used]
 line 137:      "PZ.07"       unused   input  active-high 
 line 138:     "PAC.00"       unused  output  active-high 
 line 139:     "PAC.01"       unused   input  active-high 
 line 140:     "PAC.02"       unused   input  active-high 
 line 141:     "PAC.03"       unused   input  active-high 
 line 142:     "PAC.04"       unused   input  active-high 
 line 143:     "PAC.05"       unused   input  active-high 
 line 144:     "PAC.06"       unused   input  active-high 
 line 145:     "PAC.07"       unused   input  active-high 
 line 146:     "PAD.00"       unused   input  active-high 
 line 147:     "PAD.01"       unused   input  active-high 
 line 148:     "PAD.02"       unused   input  active-high 
 line 149:     "PAD.03"       unused   input  active-high 
 line 150:     "PAE.00"       unused   input  active-high 
 line 151:     "PAE.01"       unused   input  active-high 
 line 152:     "PAF.00"       unused   input  active-high 
 line 153:     "PAF.01"       unused   input  active-high 
 line 154:     "PAF.02"       unused   input  active-high 
 line 155:     "PAF.03"       unused   input  active-high 
 line 156:     "PAG.00"       unused   input  active-high 
 line 157:     "PAG.01"       unused   input  active-high 
 line 158:     "PAG.02"       unused   input  active-high 
 line 159:     "PAG.03"       unused   input  active-high 
 line 160:     "PAG.04"       unused   input  active-high 
 line 161:     "PAG.05"       unused   input  active-high 
 line 162:     "PAG.06"       unused   input  active-high 
 line 163:     "PAG.07"       unused   input  active-high 
gpiochip1 - 32 lines:
 line   0:     "PAA.00"       unused   input  active-high 
 line   1:     "PAA.01"       unused   input  active-high 
 line   2:     "PAA.02"       unused   input  active-high 
 line   3:     "PAA.03"       unused   input  active-high 
 line   4:     "PAA.04"       unused  output  active-high 
 line   5:     "PAA.05" "regulator-vdd-3v3-pcie" output active-high [used]
 line   6:     "PAA.06"       unused   input  active-high 
 line   7:     "PAA.07"       unused   input  active-high 
 line   8:     "PBB.00"       unused   input  active-high 
 line   9:     "PBB.01"       unused   input  active-high 
 line  10:     "PBB.02"       unused   input  active-high 
 line  11:     "PBB.03"       unused  output  active-high 
 line  12:     "PCC.00"       unused  output  active-high 
 line  13:     "PCC.01"       unused  output  active-high 
 line  14:     "PCC.02"       unused  output  active-high 
 line  15:     "PCC.03"        "mux"  output  active-high [used]
 line  16:     "PCC.04"       unused   input  active-high 
 line  17:     "PCC.05"       unused   input  active-high 
 line  18:     "PCC.06"       unused   input  active-high 
 line  19:     "PCC.07"       unused   input  active-high 
 line  20:     "PDD.00"       unused   input  active-high 
 line  21:     "PDD.01"       unused   input  active-high 
 line  22:     "PDD.02"       unused   input  active-high 
 line  23:     "PEE.00"       unused   input  active-high 
 line  24:     "PEE.01"       unused   input  active-high 
 line  25:     "PEE.02"       unused   input  active-high 
 line  26:     "PEE.03"       unused   input  active-high 
 line  27:     "PEE.04"      "Power"   input   active-low [used]
 line  28:     "PEE.05"       unused   input  active-high 
 line  29:     "PEE.06"       unused   input  active-high 
 line  30:     "PEE.07"       unused   input  active-high 
 line  31:     "PGG.00"       unused   input  active-high 
gpiochip2 - 16 lines:
 line   0:     "wl_dis" "gpio_xten_pin@0" output active-high [used]
 line   1: "hst_wake_wl" "gpio_xten_pin@1" output active-high [used]
 line   2: "wl_wake_hst" "gpio_xten_pin@2" output active-low [used]
 line   3:     "bt_dis" "gpio_xten_pin@3" output active-high [used]
 line   4: "hst_wake_bt" unused input active-high 
 line   5: "bt_wake_hst" unused input active-high 
 line   6: "spi0_rst_3v3" "gpio_xten_pin@6" output active-low [used]
 line   7:  "gpio_pin7" "gpio_xten_pin@7" output active-low [used]
 line   8: "can_120R_en" unused input active-high 
 line   9: "M2B_PCIe_rst" unused input active-high 
 line  10: "USB_HUB_rst" "gpio_xten_pin@10" output active-high [used]
 line  11: "PCIe_ETH_rst" unused input active-high 
 line  12: "M2B_WOWWAN"       unused   input  active-high 
 line  13: "M2B_DPR_3V3" unused input active-high 
 line  14: "SIM_MUX_SEL" unused input active-high 
 line  15: "gpio_pin15"       unused   input  active-high 
```

</TabItem>
</Tabs>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
