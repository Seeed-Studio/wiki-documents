---
description: Uso de hardware e interfaces para la serie industrial J20 de reComputer
title: Uso de hardware e interfaces industriales J20 de reComputer
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Industrial_J20_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

EstA wiki presenta los distintos hardwares e interfaces de reComputer industrial J2012, J2011 y cómo utilizarlos para ampliar tus ideas de proyectos.

## Desmontar la reComputer industrial

En primer lugar, es mejor desmontar la cobertura exterior para acceder a todas las interfaces.
Desatornilla los 4 tornillos ubicados en la parte posterior de la siguiente manera para poder desmontar la reComputer Industrial

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## Cámaras CSI

La reComputer Industrial está equipada con **2 conectores de cámara MIPI CSI de 15 pines y 2 carriles** y las siguientes cámaras son compatibles

- Cámaras IMX219

  - [Raspberry Pi Cámara V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP Cámara con 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Cámara con 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Cámara con 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP Cámara con 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS Módulo de cámara CMOS](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP Módulo de cámara 3D estéreo](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP Cámara de visión nocturna IR con 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR Cámara de 8MP con 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS Módulo de cámara CMOS](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- Cámaras IMX477

  - [Raspberry Pi Cámara de alta calidad](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi Cámara HQ - M12](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera para Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### Descripción general de conexiones

Aquí los 2 conectores de la cámara CSI están marcados como **CAM0 y CAM1**. Puedes conectar una cámara a cualquiera de los 2 o conectar 2 cámaras a ambos conectores al mismo tiempo.

- **Paso 1:** Retira con cuidado el bloqueo de color negro del conector CSI.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **Paso 2:** Inserta el cable plano de 15 pines en el conector asegurándote de que los dedos dorados apunten hacia abajo.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **Paso 3:** Empuja el bloqueo de color negro para bloquear el cable plano en su lugar.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### Uso

Primero necesitas configurar la placa para cargar el controlador apropiado para la cámara específica que utilizarás. Para este sistema JetPack tiene una herramienta incorporada para admitir cámaras IMX219 e IMX477.

- **Paso 1:** Abre la terminal y ejecuta lo siguiente

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **Paso 2:** Selecciona **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **Paso 3:** Selecciona **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **Paso 4:** Selecciona la cámara que deseas utilizar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **Paso 5:** Selecciona **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **Paso 6:** Selecciona **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **Paso 7:** Presiona cualquier tecla del teclado y el dispositivo se reiniciará con la configuración de cámara aplicada

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

Puedes utilizar cámaras CSI de 2 métodos diferentes. Sigue los siguientes comandos de acuerdo con el conector de la cámara.

- Método 1:

Para el puerto CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para el puerto CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::nota
Si deseas cambiar más configuraciones de la cámara, puedes escribir **"nvgstcapture-1.0 --help"** para acceder a todas las opciones configurables disponibles
:::

- Método 2:

Para el puerto CAM0

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

Para el puerto CAM1

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::nota
Si deseas cambiar más configuraciones de la cámara, puedes actualizar los argumentos como **ancho, alto, velocidad de fotogramas, formato**, etc.
:::

## RTC

La reComputer industrial está equipada con 2 formas diferentes de conectarse a una batería RTC

### Descripción general de conexión

- Método 1:

Conecta una **batería de tipo CR1220 de 3 V** al conector RTC de la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté hacia arriba

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- Método 2:

Conecta una **batería de tipo CR2302 de 3 V con conector JST** al conector JST de 2 pines y 1,25 mm de la placa como se muestra a continuación.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### Uso

- **Paso 1:** Conecta una batería RTC como se mencionó anteriormente

- **Paso 2:** Prende la reComputer industrial

- **Paso 3:** En el escritorio de Ubuntu, haz click en el menú desplegable en la esquina superior derecha, navega hasta `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha/hora automáticamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::nota
Si no te has conectado a Internet a través de Ethernet, puedes configurar manualmente la fecha/hora aquí
:::

- **Paso 4:** Abre una terminal y ejecuta el siguiente comando para verificar la hora del reloj del hardware

```sh
sudo hwclock
```

Verás un resultado similar al siguiente, que no es la fecha/hora correcta

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **Paso 5:** Cambia la hora del reloj del hardware a la hora actual del reloj del sistema ingresando el siguiente comando

```sh
sudo hwclock --systohc
```

- **Paso 6:** Retira todos los cables Ethernet conectados para asegurarte de que no pierdas el tiempo de Internet y reinicia la placa.

```sh
sudo reboot
```

- **Paso 7:** Verifica la hora del reloj del hardware para verificar que la fecha/hora permanezca igual aunque el dispositivo esté apagado

Ahora crearemos un script para sincronizar siempre el reloj del sistema desde el reloj del hardware en cada arranque.

- **Paso 8:** Crea un nuevo script de shell utilizando cualquier editor de texto de tu preferencia. Aquí usamos el editor de texto **vi**

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Paso 9:** Ingresa al **modo de inserción** presionando **i**, copia y pega el siguiente contenido dentro del archivo

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Paso 10:** Hacer ejecutable el script

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Paso 11:** Crear un archivo systemd

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Paso 12:** Agrega lo siguiente dentro del archivo

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **Paso 13:** Recarga el daemon systemctl

```sh
sudo systemctl daemon-reload 
```

- **Paso 14:** Habilita el servicio recién creado para que se inicie al arrancar e inicia el servicio

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Paso 15:** Verifica que el script esté funcionando como un servicio systemd

```sh
sudo systemctl status hwtosys.service
```

- **Paso 16:** Reinicia la placa y verás que el reloj del sistema ahora está sincronizado con el reloj del hardware. 

## M.2 Key M

Fuera de la caja, la reComputer industrial incluye un SSD de 128 GB conectado a la ranura M.2 Key M, que está preinstalado con el sistema JetPack.

### Descripción general de conexión

Si deseas quitar el SSD incluido e instalar uno nuevo, puedes seguir los pasos a continuación. Aquí solo recomendamos utilizar SSD Seeed con [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) and [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) de almacenamiento porque solo hemos probado esos SSD. Además, esta interfaz admite SSD PCIe Gen4.0.

- **Paso 1:** Retira el tornillo SSD preinstalado

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **Paso 2:** Retira el SSD deslizándolo hacia afuera del conector SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **Paso 3:** Inserta un nuevo SSD y aprieta el tornillo

### Uso

Te explicaremos cómo hacer un benchmark simple en el SSD conectado.

- **Paso 1:** Verifica la velocidad de escritura ejecutando el siguiente comando

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Paso 2:** Verifica la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutar esto después de ejecutar el comando anterior para velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

La reComputer industrial viene con un conector mini PCIe que admite módulos 4G y LoRa. Sin embargo, sólo puedes conectar un módulo 4G o un módulo LoRa a la vez.

### Descripción general de conexión del módulo 4G

Actualmente esta placa admite módulos EC25EUXGA y EC20CEHCLG.

- **Paso 1:** Apaga la placa si ya está encendida.

- **Paso 2:** Retira el separador incluido. Este separador solo es necesario si estás utilizando la interfaz M.2 Key B

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **Paso 3:** Desliza el módulo 4G en la ranura mini PCIe, usa los tornillos preinstalados y atornilla los 2 orificios para asegurar el módulo 4G en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **Paso 4:** Conecta una antena al conector de antena etiquetada como **MAIN**. Aquí necesitas usar un conector IPEX.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **Paso 5:** Inserta una tarjeta nano SIM habilitada para 4G en la ranura para tarjeta SIM de la placa asegurándote de que la superficie dorada de la tarjeta SIM quede hacia abajo. Aquí inserta la tarjeta hasta el fondo para que rebote después de golpear el resorte interno y se bloquee en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::nota
Si deseas quitar la tarjeta SIM, empújala hacia adentro para golpear el resorte interno para que la SIM salga de la ranura.
:::

- **Paso 6:** Agrega un puente entre los pines **SIM_MUX_SEL** y **GND** en el encabezado **J8 (Control y UART)**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **Paso 6:** Enciende la placa

### Uso del módulo 4G: marcación de prueba

Al utilizar el módulo EC25, el módulo se iniciará automáticamente y estará listo para usarse. Sin embargo, cuando utilices el módulo EC20, deberás restablecer el módulo para que funcione.

- **Paso 1:** Si estás utilizando el módulo EC25, puedes omitir este paso. Sin embargo, si estás utilizando el módulo EC20, ingresa los siguientes comandos para acceder al pin GPIO298 que es responsable de restablecer el módulo 4G.

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

Para el módulo EC25, el LED2 se iluminará en verde tan pronto como se inicie la placa. Para el módulo EC20, el LED2 se iluminará en verde después de restablecer el módulo como se explicó anteriormente.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

- **Paso 2:** Instalar minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Paso 3:** Ingresar a la consola serial del módulo 4G conectado para que podamos ingresar comandos AT e interactuar con el módulo 4G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Paso 4:** Presiona **Ctrl+A** y luego presiona **E** para activar el eco local

- **Paso 5:** Ingresa el comando **"AT"** y presiona enter. Si ves la respuesta como "OK", el módulo 4G está funcionando correctamente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **Paso 6:** Ingresa el comando **"ATI"** para verificar la información del módulo

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **Paso 7:** Para probar el módulo, ingresa el siguiente comando para llamar a otro número de teléfono 

```sh
ATD<phone_number>;
```

Y verás el siguiente resultado.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

Si el número de teléfono ingresado puede recibir la llamada, el módulo está funcionando como se esperaba

### Uso del módulo 4G: conectarse a Internet

#### Módulo EC25

Si estás utilizando el módulo EC25, sigue los pasos mostrados a continuación

- **Paso 1:** Después de abrir la consola serial del módulo 4G como se explicó anteriormente (Uso del módulo 4G - Sección Marcación de prueba), ejecuta el siguiente comando para conectarte a Internet. Aquí reemplaza **YOUR_APN** con el APN de tu proveedor de red

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

Si la conexión es exitosa, debería aparecer **OK** como puedes ver en la imagen de arriba.

- **Paso 2:** Reinicia el módulo 4G ejecutando lo siguiente

```sh
AT+CFUN=1,1
```

Ahora perderás la conexión al módulo 4G en el terminal serial.

- **Paso 3:** Cierra **minicom** presionando **CTRL + A** y luego **Q**

- **Paso 4:** Escribe **ifconfig** y verás una dirección IP en la interfaz **usb0**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Paso 5:** Puedes intentar hacer ping a un sitio web de la siguiente manera para verificar si hay conectividad a Internet.

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### Módulo EC20

Si estás utilizando el módulo EC20, sigue los pasos mostrados a continuación

- **Paso 1:** Si ya reiniciaste el módulo 4G como se explica en la sección anterior (Uso del módulo 4G - sección Marcación de prueba) para el módulo EC20, puedes omitir este paso. Sin embargo, si aún no lo has hecho, hazlo ahora.

- **Paso 2:** Ingresa a la consola serial del módulo 4G e ingresa el siguiente comando para configurarlo en modo ECM

```sh
AT+QCFG="usbnet",1
```

- **Paso 3:** Resetea el módulo 4G

- **Paso 4:** Dentro de la consola del módulo 4G, ejecuta el siguiente comando para conectarte a Internet. Aquí reemplaza **YOUR_APN** con el APN de tu proveedor de red

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **Paso 6:** Escribe **ifconfig** y verás una dirección IP en la interfaz **usb1**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **Paso 7:** Puedes intentar hacer ping a una URL de la siguiente manera para verificar si hay conectividad a Internet.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### Descripción general del módulo de conexión LoRa

Actualmente esta placa admite el módulo SPI WM1302. Puedes usar [versión de EE. UU.](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) o [versión de EE. UU.](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) disponibles en nuestra web.

- **Paso 1:** Apaga la placa si ya está encendida.

- **Paso 2:** Desliza el módulo LoRa en la ranura mini PCIe y usa los tornillos preinstalados y atornilla a los 2 orificios para asegurar el módulo 4G en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **Paso 3:** Conecta una antena al conector de antena. Aquí necesitas usar un conector IPEX.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::nota
Asegúrate de que no haya ningún puente entre los pines **SIM_MUX_SEL** y **GND** en el encabezado **J8 (Control y UART)**. Este puente sólo es necesario cuando se utilizan módulos 4G.
:::

- **Paso 4:** Enciende la placa

### Uso del módulo LoRa: prueba de LoRa RF

Cuando el módulo LoRa esté conectado, verás que los LED verde y azul del módulo se iluminan.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **Paso 1:** Ingresa el siguiente comando para verificar si el sistema detecta el módulo LoRa

```sh
i2cdetect -r -y 7
```

Si ves el siguiente resultado, el sistema detecta correctamente el módulo

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Paso 2:** Ingresa los siguientes comandos para compilar y construir la herramienta de transmisión de señales LoRa

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

Si ves el resultado a continuación y el LED del módulo LoRa se vuelve ROJO, eso significa que el módulo está transmitiendo señales de RF con éxito.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

Para detener la transmisión, puedes presionar **CTRL + C** en el teclado.

### Uso del módulo LoRa: conéctate a TTN

Ahora nos conectaremos a TTN (The Things Network) y usaremos la reComputer industrial como puerta de enlace TTN LoRaWAN.

- **Paso 1:** Ingresa lo siguiente para preparar el reenviador de paquetes

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Paso 2:** Ejecuta lo siguiente según el módulo LoRa que estés utilizando. Aquí hemos probado la versión SPI US915.

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

Después de ejecutar el comando anterior, verás el siguiente resultado con la última línea que muestra la información del **concentrador EUI**. Conserva esta información porque la usaremos más adelante cuando configuremos la puerta de enlace con TTN.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Paso 3:** Visita [esta URL](https://console.cloud.thethings.network) para ingresar a la consola TTN y seleccionar una región de tu elección

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Paso 4:** Inicia sesión si ya tienes una cuenta o regístrate para obtener una nueva cuenta si no tienes una

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Paso 5:** Haz click en **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Paso 6:** Haz click en **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Paso 7:** Ingresa el **Concentrator EUI** que obtuviste antes dentro de la sección **Gateway EUI** y haz click en **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>


- **Paso 8:** Ingresa el **Frequency plan** según el módulo LoRa que estés utilizando. Aquí estamos usando la versión US915 del módulo y por lo tanto hemos seleccionado **United States 902-928 MHz, FSB 2 (used by TTN)**. Después de eso, haz click en **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::nota
El **Gateway ID** se ha completado automáticamente. Sin embargo, puedes cambiarlo a lo que prefieras. **Gateway name** no es obligatorio. Sin embargo, también puedes llenarlo según tu preferencia.
:::

- **Paso 9:** Tomea nota de la **Gateway Server Address** en la página de inicio principal de la puerta de enlace.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Paso 9:** En la reTerminal industrial, edita el archivo **global_conf_json** que usamos junto con el comando **lora_pkt_fwd**. Aquí debes cambiar las opciones **gateway_ID**, **server_address**, **serv_port_up** y **serv_port_down** de la siguiente manera

  - gateway_ID: Concentrador EUI desde dispositivo
  - server_address: Dirección del servidor de puerta de enlace de TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Paso 10:** Vuelve a ejecutar el reenviador de paquetes

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Si ves el siguiente resultado, significa que el dispositivo se ha conectado correctamente con TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

La reComputer industrial viene con un conector M.2 Key B que admite módulos 4G y 5G. Actualmente hemos probado el **módulo SIM8202G-M2 5G**

### Descripción general de la conexión del módulo 5G

- **Paso 1:** Apaga la placa si ya está encendida.

- **Paso 2:** Asegúrate de que el separador esté en su lugar y luego retira el tornillo superior del separador.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **Paso 2:** Desliza el módulo 5G en la ranura M.2 Key B y atornilla el tornillo del separador para asegurar el módulo 5G en su lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **Paso 3:** Conecta 4 antenas a los conectores de antena del módulo. Aquí necesitas usar un conector IPEX 4.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **Paso 4:** Inserta una tarjeta nano SIM habilitada para 5G en la ranura para tarjeta SIM de la placa asegurándote de que la superficie dorada de la tarjeta SIM quede hacia abajo. Aquí inserta la tarjeta hasta el fondo para que rebote después de golpear el resorte interno y se bloquee en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::nota
Si deseas quitar la tarjeta SIM, empújala hacia adentro para golpear el resorte interno para que la SIM salga de la ranura.
:::

- **Paso 5:** Encendido del tablero

### Uso del módulo 5G: marcación de prueba

Cuando se utiliza el módulo SIM8202G-M2 5G, el módulo no se iniciará automáticamente. Entonces, primero debemos alternar algunos GPIO para que comience.

- **Paso 1:** Ingresa lo siguiente para iniciar el módulo 5G

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 0 > value

cd..
echo 330 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 319 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

Una vez ejecutado lo anterior, el LED2 se iluminará en verde como se muestra a continuación.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **Paso 2:** Instalar minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Paso 3:** Ingresar a la consola serial del módulo 5G conectado para que podamos ingresar comandos AT e interactuar con el módulo 5G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Paso 4:** IngresA el comando **"AT"** y presiona enter. Si ves la respuesta como "OK", el módulo 5G está funcionando correctamente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **Paso 6:** Ingresa el comando **"ATI"** para verificar la información del módulo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>


- **Paso 7:** Para probar el módulo, ingresa el siguiente comando para llamar a otro número de teléfono

```sh
ATD<phone_number>;
```

Y verás el siguiente resultado.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### Uso del módulo 5G: conectarse a Internet

Proximamente

## DI/ DO 

La reComputer industrial admite 4 canales de entrada digital y 4 canales de salida digital, todos los cuales están aislados ópticamente para proteger eficazmente la placa base contra picos de voltaje u otras perturbaciones eléctricas. También hay una interfaz CAN en este mismo conector que discutiremos más adelante en esta wiki.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### Tabla de asignación de PINs DI/ DO

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nombre de la etiqueta</th>
      <th>Señal del esquemático</th>
      <th>Número de pin del módulo</th>
      <th>Número BGA</th>
      <th>Número de GPIO</th>
      <th>Límites de V/A</th>
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
      <td>440</td>
      <td rowSpan={4}>12V/ 20mA</td>
      <td rowSpan={4}>12V Entrada digital, la señal de tierra debe<br />conectarse a GND_DI (Pin2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PS.04</td>
      <td>453</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>441</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PN.01</td>
      <td>419</td>
    </tr>
    <tr>
      <td rowSpan={4}>Salida</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PT.06</td>
      <td>463</td>
      <td rowSpan={4}>40V/40mA de carga por PIN</td>
      <td rowSpan={4}>Salida digital, resistencia máxima<br />voltaje de 40V, la señal de tierra debe<br />conectarse a GND_DO(Pin8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PT.07</td>
      <td>464</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PU.00</td>
      <td>465</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PT.05</td>
      <td>462</td>
    </tr>
    <tr>
      <td rowSpan={2}>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>Bus CAN con señales diferenciales estándar, <br /> la señal de tierra debe conectarse a GND_ISO (Pin 12)</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>Tierra</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>La señal de tierra de referencia para el 12V Digitales<br />Entrada, que también es la ruta de retorno para la DI</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>La señal de tierra de referencia de la salida digital, que también es la ruta de retorno del DO</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>La señal de tierra de referencia para CAN</td>
    </tr>
  </tbody>
</table>

### Descripción general de conexión para DI

Puedes realizar la conexión para DI siguiendo el diagrama mostrado a continuación. Es mejor agregar una resistencia en serie para la línea DI. Aquí hemos probado con una resistencia de 4,7 kΩ conectada al pin DI1.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Uso para DI

Debes ingresar un voltaje de 12 V en la línea DI para que se detecte como entrada

- **Paso 1:** Realiza las conexiones como se muestra arriba al **pin DI1** y la entrada **12V**

- **Paso 2:** Abre la GPIO para DI1 de la siguiente manera

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::nota
Puedes consultar la **Tabla de asignación de pines DI/DO** para encontrar el número GPIO y el número BGA. En el ejemplo anterior, para el pin DI1, el número GPIO es 440 y el número BGA es PQ.05
:::

- **Paso 3:** Ejecuta lo siguiente para verificar el estado.

```sh
cat value
```

Si sale 0, eso significa que hay una entrada de 12V. Si genera 1, eso significa que no hay voltaje de entrada.

### Descripción general de la conexión para DO

Puedes realizar la conexión para DO siguiendo el diagrama a continuación. Es mejor agregar una resistencia en serie para la línea DO. Aquí hemos probado con una resistencia de 4,7kΩ.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Uso para DO

Aquí debes conectar una carga como se muestra en el diagrama anterior. La forma más sencilla de probar esto sería conectar un multímetro si tienes acceso a uno, o conectar una carga que requiera menos de 40 V de voltaje máximo.

- **Paso 1:** Haz las conexiones como se muestra arriba al **pin DO1** e ingresa **40 V como máximo**

- **Paso 2:** Abre la GPIO para D01 de la siguiente manera

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::nota
Puedes consultar la **Tabla de asignación de pines DI/DO** para encontrar el número GPIO y el número BGA. En el ejemplo anterior, para el pin DO1, el número GPIO es 463 y el número BGA es PT.06
:::

- **Paso 3:** Ejecuta lo siguiente para activar el pin.

```sh
echo 1 > value
```

Si la carga está encendida o el multímetro genera el voltaje que ingresaste, la prueba está funcionando correctamente.

## CAN

La reComputer industrial cuenta con una interfaz CAN que admite el protocolo CAN FD (Velocidad de datos flexible de la red de área del controlador) a 5 Mbps. La interfaz CAN está aislada mediante aislamiento capacitivo, lo que proporciona una excelente protección EMI y garantiza una comunicación confiable en aplicaciones industriales y de automatización. Se ha instalado una resistencia terminal de 120 Ω de forma predeterminada y puedes activarla y desactivarla mediante GPIO.

Nota: La interfaz CAN utiliza una fuente de alimentación aislada, lo que significa que la señal de tierra para dispositivos externos conectados a la interfaz CAN debe conectarse al pin CG.

### Descripción general de la conexión con adaptador USB a CAN

Para probar e interactuar con el bus CAN, conecta un adaptador USB a CAN a los conectores CAN en la placa como se muestra a continuación.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Aquí hemos utilizado el [Adaptador de analizador USB a CAN con cable USB](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) disponible en nuestra web.

### Uso con adaptador USB a CAN

- **Paso 1:** Descarga el controlador para el adaptador USB a CAN que estás utilizando del sitio web del fabricante e instálalo. En nuestro caso, según el adaptador que utilizamos, se pueden encontrar los drivers [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Paso 2:** Algunos adaptadores también vienen con el software necesario para que la PC se comunique con el dispositivo CAN. En nuestro caso, según el adaptador que utilizamos, hemos descargado e instalado el software que se encuentra [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Paso 3:** Abre una terminal en la reComputer industrial y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 4:** Escribe **ifconfig** en la terminal y verás la interfaz CAN habilitada

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Paso 5:** Abre el software CAN que instalaste anteriormente. En este caso abriremos el software que instalamos según el adaptador CAN que estemos usando

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Paso 6:** Conecta el adaptador USB a CAN a la PC y abre el **Administrador de dispositivos** buscándolo en la barra de búsqueda de Windows. Ahora verás el adaptador conectado en **Puertos (COM y LPT)**. Toma nota del puerto serie que aparece aquí. Según la imagen a continuación, el puerto serie es **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Paso 7:** Abre el software CAN, haz click en **Refresh** junto a la sección **COM**, haz click en el menú desplegable y selecciona el puerto serie según el adaptador conectado. Manten los **COM bps** predeterminados y haz click en **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Paso 8:** Manten el **Mode** y **CAN bps** predeterminados, cambia el **Type** a **Standard Frame** y haz click en **Set and start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Paso 9:** En la reComputer industrial, ejecuta el siguiente comando para enviar una señal CAN a la PC

```sh
cansend can0 123#abcdabcd
```

Ahora verás la señal anterior recibida por el software como se muestra a continuación

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Paso 10:** En la reComputer industrial, ejecuta el siguiente comando para esperar a recibir señales CAN desde la PC

```sh
candump can0 &
```

- **Paso 11:** En el software CAN, haz click en **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Ahora lo verás recibido por la reComputer industrial de la siguiente manera

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### Descripción general de la conexión con reTerminal DM

Si tienes acceso a [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), puedes comunicarte con él directamente porque reTerminal DM también tiene una interfaz CAN.

Consulta la imagen a continuación para conectar la reComputer industrial y reTerminal DM a través de CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Uso con reTerminal DM

- **Paso 1:** Antes de usar reTerminal DM, visita [esta wiki](https://wiki.seeedstudio.com/reterminal-dm) para comenzar con reTerminal DM

- **Paso 2:** Abre una ventana de terminal en la reComputer industrial y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 3:** Abre una terminal en reTerminal DM y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 4:** Abra una ventana de terminal en reTerminal DM y ejecute los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 5:** Si escribes **ifconfig** en ambos dispositivos, verás que las interfaces CAN están habilitadas

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Paso 6:** En reTerminal DM, ejecuta lo siguiente para esperar a recibir señales CAN de la reComputer Industrial

```sh
candump can0 &
```

- **Paso 7:** En la reComputer Industrial, ejecuta el siguiente comando para enviar una señal CAN a la reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Ahora lo verás recibido por reTerminal DM de la siguiente manera

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Paso 8:** Repetir **paso 6 y paso 7** pero intercambiando los dispositivos. Utiliza reTerminal DM para enviar señales CAN y utiliza la reComputer Industrial para recibirlas

## interfaces RS232/ RS422/ RS485

La reComputer Industrial tiene un conector DB9 que admite los protocolos de comunicación RS232, RS422 y RS485 y hay un panel de interruptores DIP integrado para cambiar entre las diferentes opciones de interfaz.

Puedes ver el panel de interruptores DIP como se muestra a continuación:

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::nota
Asegúrate de quitar la cubierta de plástico amarilla antes de usar el panel de interruptores DIP.
:::

Y la siguiente tabla explica los diferentes modos según las posiciones del interruptor DIP

<table>
  <thead>
    <tr>
      <th />
      <th>MODO_0</th>
      <th>MODO_1</th>
      <th>MODO_2</th>
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
      <td>RS-422 Duplex completo</td>
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
      <td>RS-485 Medio Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE bajos</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Medio Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE alto</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Duplex completo</td>
      <td>1T/1R RS-422 con resistencia</td>
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
      <td>aplicación sin necesidad del bus</td>
    </tr>
    <tr>
      <td>switch IC (Para uso especial).</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 Medio Duplex</td>
      <td>1T/1R RS-485 con resistencia</td>
    </tr>
    <tr>
      <td>TX ENABLE bajo</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Low Power</td>
      <td rowSpan={2}>Todos los pines I/O tienen alta impedancia</td>
    </tr>
    <tr>
      <td>Apagado</td>
    </tr>
  </tbody>
</table>

:::nota
Fuera de la caja, el modo predeterminado de los interruptores se configurará en RS485 con 010 de fábrica.
:::

La tabla anterior tiene en cuenta los primeros tres interruptores del panel de interruptores DIP. Sin embargo, el cuarto interruptor es responsable de alternar la velocidad de respuesta que está directamente relacionada con la velocidad de datos.

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
      <td>Vcc<br />Este transceptor multiprotocolo RS232/RS422/RS485 limita la velocidad de comunicación de la siguiente manera :<br />RS-232: Velocidad máxima de datos 1.5Mbps<br />RS-485/RS-422; Velocidad máxima de datos 10Mbps<br />La velocidad de datos máxima real depende del Jetson OS usado</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>GND<br />RS-232: la velocidad máxima de datos es de 250 Kbps<br />RS-485/RS-422: Velocidad máxima de datos 250kbps</td>
    </tr>
  </tbody>
</table>

Aquí usaremos adaptadores USB a RS232, RS485 y RS422 para probar las interfaces. Entonces, antes de continuar, debes instalar una aplicación de terminal serial en tu PC. Aquí te recomendamos que instales **Putty**, que es fácil de configurar y usar.

- **Paso 1:** Visita [está página web](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) y descarga Putty según la arquitectura de tu PC

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Aquí hemos seleccionado Putty según la PC que usamos, que es una máquina X86 con Windows de 64 bits.

- **Paso 2:** Abre la configuración descargada y sigue las indicaciones para instalar la aplicación.

### Descripción general de la conexión

Puedes consultar la numeración de pines del conector DB9 y la tabla para realizar las conexiones.

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

### Descripción general de la conexión RS232 

Aquí puedeS utilizar un adaptador USB a RS232 para probar la interfaz. Hemos usado [el adaptador UGREEN USB a RS232](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nuestras pruebas.

- **Paso 1:** Apaga la placa

- **Paso 2:** Aquí tenemos 2 opciones para configurar los interruptores DIP. Ya sea en modo 001 o en modo 101. Las posiciones del interruptor para cada modo se muestran a continuación.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **Paso 3:** Conecta el adaptador USB a RS232 al conector DB9. Aquí hemos conectado el adaptador que hemos mencionado anteriormente.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

- **Paso 5:** Enciende la placa

### Uso del RS232

- **Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás utilizando o Windows instalará automáticamente el controlador. Ve al Administrador de dispositivos escribiendo **Administrador de dispositivos** dentro de la búsqueda de Windows y verifica si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **Paso 2:** Si no puedes ver el adaptador, debes instalar el controlador de acuerdo con el adaptador que estés utilizando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes consultar [esta página](https://www.ugreen.com/pages/download), busca **20201** como número de modelo y descarga el controlador correspondiente

- **Paso 3:** Abre Putty en la PC, selecciona la sección **Terminal** y configura lo siguiente

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Paso 4:** Selecciona **Session**, en **Connection type**, selecciona **Serial**, configura el número de puerto serie de acuerdo con lo que ves en **Administrador de dispositivos**, manten la Velocidad predeterminada (9600) y haz click en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **Paso 4:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para enviar una señal desde el reComputer a la PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

Ahora verás este mensaje en Putty.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **Paso 5:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para esperar a recibir señales de la PC

```sh
sudo cat /dev/ttyTHS0
```

- **Paso 6:** En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana del terminal reComputer Industrial.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### Descripción general de conexión RS422

Aquí puedes utilizar un adaptador USB a RS422 para probar la interfaz. hemos usado [Adaptador DTech USB to RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

- **Paso 1:** Apaga la placa

- **Paso 2:** Aquí tenemos 2 opciones para configurar los interruptores DIP. Ya sea en modo 000 o en modo 100. Las posiciones del interruptor para cada modo se muestran a continuación.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **Paso 3:** Conecta el adaptador USB a RS422 al conector DB9 usando cables como se muestra a continuación. Aquí hemos conectado el adaptador que hemos mencionado anteriormente.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

- **Step 5:** Prende la placa

### Uso de RS422

- **Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás utilizando o Windows instalará automáticamente el controlador. Ve al Administrador de dispositivos escribiendo **Administrador de dispositivos** dentro de la búsqueda de Windows y verifica si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Paso 2:** Si no puedes ver el adaptador, debes instalar el controlador de acuerdo con el adaptador que estés utilizando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes consultar [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Paso 3:** Abre Putty en la PC, selecciona la sección **Terminal** y configura lo siguiente

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Paso 4:** Selecciona **Sesión**, en **Tipo de conexión**, selecciona **Serie**, configura el número de puerto serie de acuerdo con lo que ves en el **Administrador de dispositivos**, manten la Velocidad predeterminada (9600) y haz click en **Abrir**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Paso 4:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para enviar una señal desde el reComputer a la PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

Ahora verás este mensaje en Putty.

- **Paso 5:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para esperar a recibir señales de la PC

```sh
sudo cat /dev/ttyTHS0
```

- **Paso 6:** En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana del terminal reComputer Industrial.

### Descipción general de RS485

Aquí puedes utilizar un adaptador USB a RS422 para probar la interfaz. hemos usado [el adaptador DTech USB to RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

- **Paso 1:** Apaga la placa

- **Paso 2:** Aquí tenemos 3 opciones para configurar los interruptores DIP. Ya sea en modo 010 o modo 011 o modo 110. Las posiciones del interruptor para cada modo se muestran a continuación.

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **Paso 3:** Conecta el adaptador USB a RS422 al conector DB9 usando cables como se muestra a continuación. Aquí hemos conectado el adaptador que hemos mencionado anteriormente. 

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

- **Paso 5:** Prende la placa

### Uso de RS485

- **Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás utilizando o Windows instalará automáticamente el controlador. Ve al Administrador de dispositivos escribiendo **Administrador de dispositivos** dentro de la búsqueda de Windows y verifica si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Paso 2:** Si no puede ver el adaptador, debes instalar el controlador de acuerdo con el adaptador que estés utilizando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes consulta [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Paso 3:** Abre Putty en la PC, selecciona la sección **Terminal** y configura lo siguiente

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Paso 4:** Selecciona **Session**, en **Connection type**, selecciona **Serial**, configura el número de puerto serie de acuerdo con lo que ves en **Administrador de dispositivos**, manten la Velocidad predeterminada (9600) y haz click en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Paso 4:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para enviar una señal desde el reComputer a la PC

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

Ahora verás este mensaje en Putty.

- **Paso 5:** En la ventana del terminal reTerminal Industrial, escribe lo siguiente para esperar a recibir señales de la PC

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **Paso 6:** En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana del terminal reComputer Industrial.

## Conectores Gigabit Ethernet

Hay dos conectores Gigabit Ethernet (10/100/1000M) en la reComputer Industrial y funcionan de diferentes maneras.

- El conector más a la izquierda está conectado directamente al módulo Jetson y puede proporcionar funcionalidad PoE con la especificación **PSE 802.3 af, 15W**. Esto significa que puedes conectar una cámara IP PoE o cualquier otro dispositivo PoE a este puerto para proporcionar energía al dispositivo conectado.
- El otro conector está conectado a través de un módulo PCIe a Ethernet (LAN7430-I/Y9X).

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

Hay 2 LED (verde y amarillo) en cada puerto Ethernet que indican lo siguiente

- LED verde: encendido solo cuando está conectado a una red de 1000 M
- LED amarillo: muestra el estado de actividad de la red

## USB

reComputer Industrial viene con 3 conectores USB3.2 integrados y tiene las siguientes características:
- En los conectores USB apilados dobles, los puertos USB superior e inferior comparten un IC limitador de corriente, con una capacidad de fuente de alimentación total de 2,1 A de corriente de salida máxima (el único también puede ser 2,1 A). Si supera los 2,1 A, entrará en el estado de protección contra sobrecorriente.
- En el conector USB único junto a los conectores USB dobles apilados, tiene una capacidad de fuente de alimentación total de 2,1 A de corriente de salida máxima. Si supera los 2,1 A, entrará en el estado de protección contra sobrecorriente.
- El módulo Orin NX viene con 3 USB3.2, de los cuales solo uno se usa en reComputer y se convierte a 3 vías. (USB3.1 TIPO-A x2 - J4 ​​y USB3.1 TIPO-A
x1 -J3).
- Solo admite host USB, no modo dispositivo
- Suministra 5V 2.1A
- Intercambiable rapidamente

### Uso

Explicaremos cómo hacer una prueba comparativa simple en una unidad flash USB conectada.

- **Paso 1:** Verifica la velocidad de escritura ejecutando el siguiente comando

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Paso 2:** Verifica la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutar esto después de ejecutar el comando anterior para velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## LED Configurable

Hay un LED de color verde ubicado en el tablero como se muestra a continuación. De forma predeterminada, actúa como el LED que muestra que el dispositivo está funcionando correctamente. Sin embargo, también puedes programar este LED para que el sistema lo encienda y apague.

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### Uso

- **Paso 1:** Ingresa los siguientes comandos en una ventana de terminal para acceder al LED de color verde

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
cd PCC.01
echo out > direction 
```

- **Paso 2:** Apaga el LED

```sh
echo 0 > value 
```

- **Paso 3:** Prende el LED

```sh
echo 1 > value 
```

Si has terminado de usar el LED, puedes ejecutar lo siguiente

```sh
cd ..
echo 318 > unexport
```

## Monitorear el rendimiento del sistema

Podemos usar la aplicación **jetson stats** para monitorear las temperaturas de los componentes del sistema y verificar otros detalles del sistema, como

- Visualizar utilización de CPU, GPU, RAM
- Cambiar modos de alimentación
- Configurar ciclos máximos de reloj
- Revisar información de JetPack

- **Paso 1:** En las ventanas del terminal reComputer Industrial, escribe lo siguiente

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

- **Paso 4:** ¡Aquí puedes recorrer las diferentes páginas de las aplicaciones y explorar todas las funciones!

## WiFi y Bluetooth

La reComputer Industrial no viene con WiFi y Bluetooth listos para usar. Pero hay una sección reservada en la PCB para poder soldar un módulo WiFi/Bluetooth a la placa. Aquí hemos reservado el espacio para admitir un módulo **BL-M8723DU1**.

### Descripción general de la conexión

- **Paso 1:** Si deseas soldar el módulo **BL-M8723DU1** tu mismo, puedes soldarlo. Pero no recomendamos esto porque si dañas la placa en el proceso, la garantía quedará anulada. Lo que recomendamos es utilizar nuestro servicio profesional para ayudarte a soldar este módulo en la placa y puedes enviar un correo electrónico a order@seeed.cc con tu solicitud.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **Paso 2:** Conecta dos antenas a los dos conectores de antena de la placa para WiFi y Bluetooth. Aquí necesitas usar un conector IPEX.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### Uso

- **Paso 1:** Enciende la placa y una vez que el dispositivo inicie en Ubuntu Desktop, haz click en el menú desplegable en la esquina superior derecha, navega hasta "Settings > Wi-Fi" y activa el botón en la barra de título para habilitar WiFi. Después de eso, selecciona una red WiFi, ingresa la contraseña requerida y conéctate a ella.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **Paso 2:** En la misma ventana, elige **Bluetooth** y activa el botón en la barra de título para habilitar Bluetooth. Después de eso, selecciona un dispositivo Bluetooth para conectarte a él.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

La reComputer Industrial viene con una interfaz TPM para conectar un módulo TPM externo. Aquí hemos probado con un módulo TPM2.0 basado en Infineon SLB9670.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### Descripción general de conexión

Conecta el módulo TPM al conector TPM como se muestra a continuación

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### Uso

Comprueba si el módulo TPM está cargado correctamente ejecutando los siguientes comandos

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

Y verás el resultado de la siguiente manera

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## Máximo rendimiento en la reComputer Industrial

Si deseas habilitar el máximo rendimiento en la reComputer Industrial, sigue las instrucciones a continuación

- **Paso 1:** Ingresa el siguiente comando para habilitar el modo de potencia máxima

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

Aquí te pedirá que escribas **SÍ** para reiniciar la placa.

- **Paso 2:** Una vez que se inicia la placa, ingresa el siguiente comando para configurar los relojes de la CPU a la frecuencia máxima

```sh
sudo jetson_clocks
```

## Tabla GPIO

Puedes acceder a la tabla GPIO de reComputer Industrial para familiarizarte con todas las asignaciones de pines.

Ejecuta lo siguiente dentro de una terminal para acceder a ella.

```sh
sudo cat /sys/kernel/debug/gpio
```

Y verás el siguiente output:

```sh
gpiochip3: GPIOs 289-304, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-289 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-290 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-291 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-292 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-293 (hst_wake_bt         |gpio_xten_pin@4     ) out hi
 gpio-294 (bt_wake_hst         |gpio_xten_pin@5     ) out hi ACTIVE LOW
 gpio-295 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-296 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-297 (can_120R_en         )
 gpio-298 (M2B_PCIe_rst        )
 gpio-299 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-300 (PCIe_ETH_rst        )
 gpio-301 (M2B_WOWWAN          |gpio_xten_pin@12    ) out hi ACTIVE LOW
 gpio-302 (M2B_DPR_3V3         |gpio_xten_pin@13    ) out hi ACTIVE LOW
 gpio-303 (SIM_MUX_SEL         |gpio_xten_pin@14    ) out hi ACTIVE LOW
 gpio-304 (gpio_pin15          |gpio_xten_pin@15    ) out hi ACTIVE LOW

gpiochip2: GPIOs 305-334, parent: platform/c2f0000.gpio, tegra194-gpio-aon:
 gpio-305 (PAA.00              )
 gpio-306 (PAA.01              )
 gpio-307 (PAA.02              )
 gpio-308 (PAA.03              )
 gpio-309 (PAA.04              )
 gpio-310 (PAA.05              )
 gpio-311 (PAA.06              )
 gpio-312 (PAA.07              )
 gpio-313 (PBB.00              )
 gpio-314 (PBB.01              )
 gpio-315 (PBB.02              )
 gpio-316 (PBB.03              )
 gpio-317 (PCC.00              )
 gpio-318 (PCC.01              |pwr                 ) out hi
 gpio-319 (PCC.02              )
 gpio-320 (PCC.03              |mux                 ) out hi
 gpio-321 (PCC.04              )
 gpio-322 (PCC.05              )
 gpio-323 (PCC.06              )
 gpio-324 (PCC.07              )
 gpio-325 (PDD.00              )
 gpio-326 (PDD.01              )
 gpio-327 (PDD.02              )
 gpio-328 (PEE.00              )
 gpio-329 (PEE.01              )
 gpio-330 (PEE.02              )
 gpio-331 (PEE.03              )
 gpio-332 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-333 (PEE.05              )
 gpio-334 (PEE.06              )
gpiochip1: GPIOs 335-503, parent: platform/2200000.gpio, tegra194-gpio:
 gpio-335 (PA.00               )
 gpio-336 (PA.01               )
 gpio-337 (PA.02               )
 gpio-338 (PA.03               )
 gpio-339 (PA.04               )
 gpio-340 (PA.05               )
 gpio-341 (PA.06               )
 gpio-342 (PA.07               )
 gpio-343 (PB.00               )
 gpio-344 (PB.01               )
 gpio-345 (PC.00               )
 gpio-346 (PC.01               )
 gpio-347 (PC.02               )
 gpio-348 (PC.03               )
 gpio-349 (PC.04               )
 gpio-350 (PC.05               )
 gpio-351 (PC.06               )
 gpio-352 (PC.07               )
 gpio-353 (PD.00               )
 gpio-354 (PD.01               )
 gpio-355 (PD.02               )
 gpio-356 (PD.03               )
 gpio-357 (PE.00               )
 gpio-358 (PE.01               )
 gpio-359 (PE.02               )
 gpio-360 (PE.03               )
 gpio-361 (PE.04               )
 gpio-362 (PE.05               )
 gpio-363 (PE.06               )
 gpio-364 (PE.07               )
 gpio-365 (PF.00               )
 gpio-366 (PF.01               )
 gpio-367 (PF.02               )
 gpio-368 (PF.03               )
 gpio-369 (PF.04               )
 gpio-370 (PF.05               )
 gpio-371 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-372 (PG.01               )
 gpio-373 (PG.02               |fixed-regulators:reg) out lo
 gpio-374 (PG.03               |wifi-enable         ) out hi
 gpio-375 (PG.04               )
 gpio-376 (PG.05               )
 gpio-377 (PG.06               )
 gpio-378 (PG.07               )
 gpio-379 (PH.00               )
 gpio-380 (PH.01               )
 gpio-381 (PH.02               )
 gpio-382 (PH.03               )
 gpio-383 (PH.04               )
 gpio-384 (PH.05               )
 gpio-385 (PH.06               )
 gpio-386 (PH.07               )
 gpio-387 (PI.00               )
 gpio-388 (PI.01               )
 gpio-389 (PI.02               )
 gpio-390 (PI.03               )
 gpio-391 (PI.04               )
 gpio-392 (PJ.00               )
 gpio-393 (PJ.01               )
 gpio-394 (PJ.02               )
 gpio-395 (PJ.03               )
 gpio-396 (PJ.04               )
 gpio-397 (PJ.05               )
 gpio-398 (PK.00               )
 gpio-399 (PK.01               )
 gpio-400 (PK.02               )
 gpio-401 (PK.03               )
 gpio-402 (PK.04               )
 gpio-403 (PK.05               )
 gpio-404 (PK.06               )
 gpio-405 (PK.07               )
 gpio-406 (PL.00               )
 gpio-407 (PL.01               )
 gpio-408 (PL.02               )
 gpio-409 (PL.03               )
 gpio-410 (PM.00               )
 gpio-411 (PM.01               |hdmi2.0_hpd         ) in  lo IRQ
 gpio-412 (PM.02               )
 gpio-413 (PM.03               )
 gpio-414 (PM.04               )
 gpio-415 (PM.05               )
 gpio-416 (PM.06               )
 gpio-417 (PM.07               )
 gpio-418 (PN.00               |fixed-regulators:reg) out lo
 gpio-419 (PN.01               )
 gpio-420 (PN.02               )
 gpio-421 (PO.00               )
 gpio-422 (PO.01               )
 gpio-423 (PO.02               )
 gpio-424 (PO.03               )
 gpio-425 (PO.04               )
 gpio-426 (PO.05               )
 gpio-427 (PP.00               )
 gpio-428 (PP.01               )
 gpio-429 (PP.02               )
 gpio-430 (PP.03               )
 gpio-431 (PP.04               )
 gpio-432 (PP.05               )
 gpio-433 (PP.06               )
 gpio-434 (PP.07               )
 gpio-435 (PQ.00               )
 gpio-436 (PQ.01               )
 gpio-437 (PQ.02               )
 gpio-438 (PQ.03               )
 gpio-439 (PQ.04               )
 gpio-440 (PQ.05               )
 gpio-441 (PQ.06               )
 gpio-442 (PQ.07               )
 gpio-443 (PR.00               )
 gpio-444 (PR.01               |phy_reset           ) out hi
 gpio-445 (PR.02               )
 gpio-446 (PR.03               )
 gpio-447 (PR.04               )
 gpio-448 (PR.05               )
 gpio-449 (PS.00               )
 gpio-450 (PS.01               )
 gpio-451 (PS.02               )
 gpio-452 (PS.03               )
 gpio-453 (PS.04               )
 gpio-454 (PS.05               )
 gpio-455 (PS.06               )
 gpio-456 (PS.07               )
 gpio-457 (PT.00               )
 gpio-458 (PT.01               )
 gpio-459 (PT.02               )
 gpio-460 (PT.03               )
 gpio-461 (PT.04               )
 gpio-462 (PT.05               )
 gpio-463 (PT.06               )
 gpio-464 (PT.07               )
 gpio-465 (PU.00               )
 gpio-466 (PV.00               )
 gpio-467 (PV.01               )
 gpio-468 (PV.02               )
 gpio-469 (PV.03               )
 gpio-470 (PV.04               )
 gpio-471 (PV.05               )
 gpio-472 (PV.06               )
 gpio-473 (PV.07               )
 gpio-474 (PW.00               )
 gpio-475 (PW.01               )
 gpio-476 (PX.00               )
 gpio-477 (PX.01               )
 gpio-478 (PX.02               )
 gpio-479 (PX.03               )
 gpio-480 (PX.04               )
 gpio-481 (PX.05               )
 gpio-482 (PX.06               )
 gpio-483 (PX.07               )
 gpio-484 (PY.00               )
 gpio-485 (PY.01               )
 gpio-486 (PY.02               )
 gpio-487 (PY.03               )
 gpio-488 (PY.04               )
 gpio-489 (PY.05               )
 gpio-490 (PY.06               )
 gpio-491 (PY.07               )
 gpio-492 (PZ.00               )
 gpio-493 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-494 (PZ.02               )
 gpio-495 (PZ.03               )
 gpio-496 (PZ.04               )
 gpio-497 (PZ.05               )
 gpio-498 (PZ.06               |cs_gpio             ) out lo
 gpio-499 (PZ.07               |cs_gpio             ) out hi
 gpio-500 (PFF.00              )
 gpio-501 (PFF.01              )
 gpio-502 (PGG.00              )
 gpio-503 (PGG.01              )

gpiochip0: GPIOs 504-511, parent: i2c/4-003c, max77620-gpio, can sleep:
 gpio-510 (                    |gpio_default        ) in  hi
 gpio-511 (                    |gpio_default        ) in  hi
```

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>