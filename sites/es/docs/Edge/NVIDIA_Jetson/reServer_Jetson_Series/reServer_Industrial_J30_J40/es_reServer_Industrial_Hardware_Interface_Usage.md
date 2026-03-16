---
description: Uso de la Interfaz de Hardware Industrial de reServer
title: Uso de la Interfaz de Hardware Industrial de reServer
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_hardware_interface_usage
last_update:
  date: 09/22/2023
  author: Lakshantha
sku: 114110247
createdAt: '2023-06-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reserver_industrial_hardware_interface_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Uso del Hardware e Interfaces

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

reServer Industrial incorpora 2 bahías para unidades SATA HDD/ SSD de 2,5" para almacenar fácilmente cientos de grabaciones de vídeo locales en una aplicación de análisis de vídeo. También permite múltiples opciones de conectividad, incluyendo 5 puertos Ethernet RJ-45, 1 RS232/422/485, 4 DI/DO aislados, 1 CAN, 4× USB3.1. El diseño sin ventilador con opciones de montaje versátiles permite el despliegue de -20 a 60 ℃, lo que es ideal para entornos más duros y cargas más pesadas.

reServer Industrial viene con un disipador de calor pasivo y un diseño sin ventilador, lo que lo hace ideal para su uso en entornos exigentes. El disipador de calor pasivo permite una refrigeración eficiente sin necesidad de ventilador, reduciendo el riesgo de fallo de componentes debido al polvo u otros contaminantes. El diseño sin ventilador también reduce los niveles de ruido y el consumo de energía, lo que lo hace adecuado para su uso en entornos sensibles al ruido y minimiza los costes energéticos.

reServer Industrial tiene 5 puertos RJ45 GbE, 4 de los cuales son puertos PoE PSE para proporcionar alimentación a través de Ethernet a dispositivos como cámaras IP. Esto elimina la necesidad de una fuente de alimentación independiente y facilita el despliegue de dispositivos de red en áreas sin tomas de corriente fácilmente disponibles. El puerto GbE restante se utiliza para conectarse a un switch de red o router, permitiendo la comunicación con otros dispositivos en la red y el acceso a Internet.

- **Servidor Compacto Edge AI sin Ventilador:** Impulsado por módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rendimiento de IA que va de 20 TOPS a 100 TOPS, rango de temperatura más amplio de -20 ~ 60°C con flujo de aire de 0.7m/s
- **Procesamiento Multicanal:** 5× GbE RJ45 (4 para 802.3af PSE), maneja múltiples flujos con procesamiento en tiempo real
- **Almacenamiento Expandible:** 2 bahías para unidades SATA HDD/SSD de 2,5", más un zócalo M.2 2280 para SSD NVMe
- **Interfaces Industriales:** Incluye puerto COM, puertos DI/DO, puerto CAN, USB 3.1 y módulo TPM2.0 opcional
- **Conectividad Híbrida:** Compatible con 5G/4G/LTE/LoRaWAN® (módulo opcional) con ranura para tarjeta Nano SIM
- **Certificaciones:** FCC, CE, UKCA, ROHS, KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Desmontar reServer Industrial

En primer lugar, es mejor desmontar la carcasa exterior para acceder a todas las interfaces. Sigue [este documento](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf) para aprender más.

## Conectores Gigabit Ethernet

Hay 5 puertos Ethernet en el reServer Industrial con especificación de 10/100/1000Mbps y 4 de ellos están clasificados como PSE 802.3 af 15 W donde puedes conectar directamente cámaras PoE a estos puertos (LAN1-LAN4). Estos están conectados a través de un módulo PCIe a Ethernet (LAN7430-I/Y9X). Sin embargo, el puerto Ethernet restante (LAN0) en el lado más a la izquierda solo se utiliza para conectarse a un router para internet.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

Hay 2 LED (verde y amarillo) en cada puerto Ethernet que indican lo siguiente

- LED verde: ENCENDIDO solo cuando está conectado a una red de 1000M
- LED amarillo: Muestra el estado de actividad de la red

### Uso

- Antes de conectar cámaras PoE, necesitas habilitar la función PoE para los 4 puertos Ethernet. Habilítala de la siguiente manera:

  <Tabs>
  <TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

    ```sh
    sudo -i
    cd /sys/class/gpio
    echo 315 > export 
    cd gpio315
    echo "out" > direction
    echo 1 > value
    ```

  </TabItem>
  <TabItem value="Jetpack 6" label="Jetpack 6">

    ```sh
    sudo apt update
    sudo apt install gpiod
    gpioset gpiochip2 15=1
    ```

  </TabItem>
  </Tabs>


### Vincular la IP de Red Física a Números eth

  **Las interfaces LAN1 a LAN4 están designadas para PoE.**

  Si necesitas configurar diferentes direcciones IP para cada interfaz PoE, sigue estas instrucciones:

  :::warning
  Los nombres de las interfaces (por ejemplo, `enP1p1s0`) pueden variar según tu sistema. Antes de continuar, ejecuta el siguiente comando para comprobar los nombres reales de las interfaces en tu dispositivo. Los comandos siguientes son solo de referencia — reemplaza el nombre de la interfaz con el que se muestre en tu sistema.

  ```bash
  ifconfig
  ```
  :::

  **Paso 1**: Conecta el dispositivo PoE al reServer Industrial. Crea una nueva conexión para la interfaz de destino. Por ejemplo, para configurar la interfaz `enP1p1s0` y nombrarla `POE1`:

  ```bash
  sudo nmcli connection add type ethernet ifname enP1p1s0 con-name POE1
  ```

  **Paso 2**: Configura la dirección IP. La dirección IP se puede personalizar según el uso real.

  ```bash
  sudo nmcli connection modify POE1 ipv4.addresses 192.168.6.6/24
  ```

  **Paso 3**: Establece el método IPv4 en manual (IP estática).

  ```bash
  sudo nmcli connection modify POE1 ipv4.method manual
  ```

  **Paso 4**: Levanta la conexión.

  ```bash
  sudo nmcli connection up POE1
  ```

  **Paso 5**: Verifica la configuración.

  ```bash
  ifconfig
  ```

## Conectores SATA

reServer Industrial es compatible con 2 HDD/SSD SATA de 2,5" y viene con conectores tanto de datos como de alimentación SATA. Puedes conectar a HDD/ SSD de la siguiente manera

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### Uso

Después de que el sistema se inicie, puedes verificar las unidades SATA conectadas mediante

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer Industrial está equipado con 2 formas diferentes de conectarse a una batería RTC

### Descripción General de la Conexión

- Método 1:

Conecta una **batería de botón CR1220 de 3V** al zócalo RTC en la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté orientado hacia arriba

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- Método 2:

Conecta una **batería de botón CR2302 de 3V con conector JST** al zócalo JST de 2 pines y 1.25mm en la placa como se muestra a continuación

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### Uso

- **Paso 1:** Conecta una batería RTC como se mencionó anteriormente

- **Paso 2:** Enciende reServer Industrial

- **Paso 3:** En el Escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha y hora automáticamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Si no te has conectado a internet mediante Ethernet, puedes configurar manualmente la fecha y hora aquí
:::

- **Paso 4:** Abre una ventana de terminal y ejecuta el siguiente comando para comprobar la hora del reloj de hardware

```sh
sudo hwclock
```

Verás una salida similar a la siguiente, que no es la fecha y hora correctas

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **Paso 5:** Cambia la hora del reloj de hardware a la hora actual del reloj del sistema introduciendo el siguiente comando

```sh
sudo hwclock --systohc
```

- **Paso 6:** Retira cualquier cable Ethernet conectado para asegurarte de que no obtendrá la hora de internet y reinicia la placa

```sh
sudo reboot
```

- **Paso 7:** Comprueba la hora del reloj de hardware para verificar que la fecha y hora se mantienen igual aunque el dispositivo se haya apagado

Ahora crearemos un script para sincronizar siempre el reloj del sistema desde el reloj de hardware en cada arranque.

- **Paso 8:** Crea un nuevo script de shell utilizando cualquier editor de texto de tu preferencia. Aquí usamos el editor de texto **vi**

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Paso 9:** Entra en **modo de inserción** presionando **i**, copia y pega el siguiente contenido dentro del archivo

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Paso 10:** Haz que el script sea ejecutable

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Paso 11:** Crea un archivo systemd

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Paso 12:** Añade lo siguiente dentro del archivo

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **Paso 13:** Recarga el demonio de systemctl

```sh
sudo systemctl daemon-reload 
```

- **Paso 14:** Habilita el servicio recién creado para que se inicie al arrancar y arranca el servicio

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Paso 15:** Verifica que el script esté en ejecución como un servicio systemd

```sh
sudo systemctl status hwtosys.service
```

- **Paso 16:** Reinicia la placa y verás que el reloj del sistema ahora está sincronizado con el reloj de hardware

## M.2 Key M

Fuera de la caja, reServer Industrial incluye un SSD de 128GB conectado a la ranura M.2 Key M, que viene preinstalado con el sistema JetPack.

### Descripción General de la Conexión

Si quieres retirar el SSD incluido e instalar uno nuevo, puedes seguir los pasos a continuación. Aquí solo recomendamos usar SSD de Seeed con almacenamiento de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) y [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) porque solo hemos probado esos SSD. Además, esta interfaz es compatible con SSD PCIe Gen4.0.

- **Paso 1:** Retira el tornillo del SSD preinstalado

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **Paso 2:** Retira el SSD deslizándolo fuera del conector SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **Paso 3:** Inserta un nuevo SSD y vuelve a apretar el tornillo

### Uso

Explicaremos cómo hacer un benchmark sencillo en el SSD conectado

- **Paso 1:** Comprueba la velocidad de escritura ejecutando el siguiente comando

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **Paso 2:** Comprueba la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutarlos después de ejecutar el comando anterior para la velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial viene con un conector mini PCIe que admite módulos 4G y LoRa. Sin embargo, solo puedes conectar un módulo 4G o un módulo LoRa a la vez. Algunos de los módulos 4G vienen con funcionalidad GPS integrada. También hablaremos de esto.

#### Descripción general de la conexión del módulo 4G

Actualmente esta placa es compatible con los módulos EC25EUXGA y EC20CEHCLG.

- **Paso 1:** Apaga la placa si ya está encendida

- **Paso 2:** Retira el separador incluido. Este separador solo es necesario si estás utilizando la interfaz M.2 Key B

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **Paso 3:** Inserta el módulo 4G en la ranura mini PCIe, utiliza los tornillos preinstalados y atorníllalos en los 2 orificios para fijar el módulo 4G en su lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **Paso 4:** Conecta una antena al conector de antena etiquetado como **MAIN**. Aquí necesitas usar un conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **Paso 5:** Inserta una tarjeta nano SIM con capacidad 4G en la ranura SIM de la placa asegurándote de que la superficie dorada de la tarjeta SIM mire hacia arriba. Inserta la tarjeta hasta el fondo para que rebote después de golpear el muelle interno y quede bloqueada en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
Si quieres retirar la tarjeta SIM, empuja la tarjeta hacia dentro hasta golpear el muelle interno para que la SIM salga de la ranura
:::

- **Paso 6:** Añade un jumper entre los pines **SIM_MUX_SEL** y **GND** en el **Header J8 (Control and UART)**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **Paso 6:** Enciende la placa

#### Uso del módulo 4G - Prueba de marcación

Cuando se utiliza el módulo EC25, el módulo se iniciará automáticamente y estará listo para usar. Sin embargo, cuando se utiliza el módulo EC20, es necesario reiniciar el módulo para que funcione

- **Paso 1:** Si estás utilizando el módulo EC25, puedes omitir este paso. Sin embargo, si estás utilizando el módulo EC20, introduce los siguientes comandos para acceder al pin GPIO309 que es responsable de reiniciar el módulo 4G

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

Para el módulo EC25, el LED2 se encenderá en verde tan pronto como la placa se inicie. Para el módulo EC20, el LED2 se encenderá en verde después de reiniciar el módulo como se explicó anteriormente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **Paso 2:** Instala minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Paso 3:** Entra en la consola serie del módulo 4G conectado para poder introducir comandos AT e interactuar con el módulo 4G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Paso 4:** Pulsa **Ctrl+A** y luego pulsa **E** para activar el eco local

- **Paso 5:** Introduce el comando **"AT"** y pulsa intro. Si ves la respuesta "OK", el módulo 4G está funcionando correctamente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **Paso 6:** Introduce el comando **"ATI"** para comprobar la información del módulo

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **Paso 7:** Para probar el módulo, introduce el siguiente comando para llamar a otro número de teléfono

```sh
ATD<phone_number>;
```

Y verás la siguiente salida

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

Si el número de teléfono introducido puede recibir la llamada, el módulo está funcionando como se espera

#### Uso del módulo 4G - Conectarse a Internet

##### Módulo EC25

Si estás utilizando el módulo EC25, sigue los pasos siguientes

- **Paso 1:** Después de abrir la consola serie del módulo 4G como se explicó anteriormente (sección Uso del módulo 4G - Prueba de marcación), ejecuta el siguiente comando para conectarte a Internet. Aquí sustituye **YOUR_APN** por el APN de tu proveedor de red

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

Si la conexión es correcta, debería mostrar **OK** como puedes ver en la imagen anterior

- **Paso 2:** Reinicia el módulo 4G ejecutando lo siguiente

```sh
AT+CFUN=1,1
```

Ahora perderás la conexión con el módulo 4G en los terminales serie

- **Paso 3:** Cierra **minicom** pulsando **CTRL + A** y luego **Q**

- **Paso 4:** Escribe **ifconfig** y verás una dirección IP en la interfaz **usb0**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Paso 5:** Puedes intentar hacer ping a un sitio web como se indica a continuación para comprobar si hay conectividad a Internet

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### Módulo EC20

Si estás utilizando el módulo EC20, sigue los pasos siguientes

- **Paso 1:** Si ya has reiniciado el módulo 4G como se explicó en la sección anterior (sección Uso del módulo 4G - Prueba de marcación) para el módulo EC20, puedes omitir este paso. Sin embargo, si aún no lo has hecho, hazlo ahora

- **Paso 2:** Entra en la consola serie del módulo 4G e introduce el siguiente comando para establecer el modo ECM

```sh
AT+QCFG="usbnet",1
```

- **Paso 3:** Reinicia el módulo 4G

- **Paso 4:** Dentro de la consola del módulo 4G, ejecuta el siguiente comando para conectarte a Internet. Aquí sustituye **YOUR_APN** por el APN de tu proveedor de red

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **Paso 6:** Escribe **ifconfig** y verás una dirección IP en la interfaz **usb1**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **Paso 7:** Puedes intentar hacer ping a una URL como se indica a continuación para comprobar si hay conectividad a Internet

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### Uso del módulo 4G - Conectarse al GPS

Algunos módulos 4G vienen con módulos GPS integrados. Tanto los módulos EC25EUXGA como EC20CEHCLG vienen con módulos 4G integrados.

- **Paso 1:** Reinicia el módulo GPS ejecutando los siguientes comandos

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **Paso 2:** Obtén los datos GPS ejecutando los siguientes comandos

```sh
sudo cat /dev/ttyUSB1
```

Y verás una salida como la siguiente

```sh
seeed@seeed-x:~$ sudo cat /dev/ttyUSB1
[sudo] password for seeed:
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
```

#### Descripción general de la conexión del módulo LoRa

Actualmente esta placa es compatible con el módulo WM1302 SPI. Puedes usar la [versión US](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) o la [versión EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) que están disponibles en nuestro Bazaar.

- **Paso 1:** Apaga la placa si ya está encendida

- **Paso 2:** Inserta el módulo LoRa en la ranura mini PCIe y utiliza los tornillos preinstalados y atorníllalos en los 2 orificios para fijar el módulo LoRa en su lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **Paso 3:** Conecta una antena al conector de antena. Aquí necesitas usar un conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
Asegúrate de que no haya ningún jumper entre los pines **SIM_MUX_SEL** y **GND** en el **Header J8 (Control and UART)**. Este jumper solo es necesario cuando se utilizan módulos 4G
:::

- **Paso 4:** Enciende la placa

#### Uso del módulo LoRa - Prueba de RF LoRa

Cuando el módulo LoRa está conectado, verás que los LED verde y azul del módulo se encienden

- **Paso 1:** Introduce el siguiente comando para comprobar si el sistema detecta el módulo LoRa

```sh
i2cdetect -r -y 7
```

Si ves la siguiente salida, el sistema ha detectado el módulo

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Paso 2:** Introduce los siguientes comandos para compilar y construir la herramienta de transmisión de señales LoRa

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

Si ves el siguiente resultado y el LED del módulo LoRa se vuelve ROJO, significa que el módulo está transmitiendo señales RF correctamente

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

Para dejar de transmitir, puedes pulsar **CTRL + C** en el teclado.

#### Uso del módulo LoRa - Conectarse a TTN

Ahora nos conectaremos a TTN (The Things Network) y utilizaremos el reServer Industrial como una pasarela LoRaWAN de TTN

- **Paso 1:** Introduce lo siguiente para preparar el packet forwarder

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Paso 2:** Ejecuta lo siguiente según el módulo LoRa que estés utilizando. Aquí hemos probado la versión SPI US915

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

Después de ejecutar el comando anterior, verás la siguiente salida con la última línea mostrando la información del **concentrator EUI**. Por favor guarda esta información porque la usaremos más tarde al configurar la gateway con TTN

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Paso 3:** Visita [este enlace](https://console.cloud.thethings.network) para entrar en la consola de TTN y selecciona la región de tu preferencia

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Paso 4:** Inicia sesión si ya tienes una cuenta, o regístrate para una nueva cuenta si aún no tienes una

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Paso 5:** Haz clic en **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Paso 6:** Haz clic en **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Paso 7:** Introduce el **Concentrator EUI** que obtuviste antes dentro de la sección **Gateway EUI** y haz clic en **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **Paso 8:** Introduce el **Frequency plan** de acuerdo con el módulo LoRa que estés utilizando. Aquí estamos usando la versión US915 del módulo y por lo tanto hemos seleccionado **United Stated 902-928 MHz, FSB 2 (used by TTN)**. Después de eso haz clic en **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
El **Gateway ID** se ha rellenado automáticamente por ti. Sin embargo, puedes cambiarlo a lo que prefieras. **Gateway name** no es obligatorio de rellenar. Sin embargo, también puedes rellenarlo según tu preferencia
:::

- **Paso 9:** Toma nota de la **Gateway Server Address** en la página principal de la gateway

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Paso 9:** En la reTerminal Industrial, edita el archivo **global_conf_json** que usamos junto con el comando **lora_pkt_fwd**. Aquí necesitas cambiar las opciones **gateway_ID**, **server_address**, **serv_port_up** y **serv_port_down** como se indica a continuación

  - gateway_ID: Concentrator EUI del dispositivo
  - server_address: Gateway Server Address de TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Paso 10:** Vuelve a ejecutar el packet forwarder

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Si ves la siguiente salida, significa que el dispositivo se ha conectado correctamente con TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reServer Industrial viene con un conector M.2 Key B que soporta módulos 4G y 5G. Actualmente hemos probado el **módulo 5G SIM8202G-M2**

### Descripción general de la conexión del módulo 5G

- **Paso 1:** Apaga la placa si ya está encendida

- **Paso 2:** Asegúrate de que el separador esté en su lugar y luego retira el tornillo superior del separador

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **Paso 2:** Inserta el módulo 5G en la ranura M.2 Key B y atornilla el tornillo del separador para fijar el módulo 5G en su lugar (hablar sobre el separador)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **Paso 3:** Conecta 4 antenas a los conectores de antena del módulo. Aquí necesitas usar un conector IPEX 4

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **Paso 4:** Inserta una tarjeta nano SIM habilitada para 5G en la ranura de la tarjeta SIM de la placa asegurándote de que la superficie dorada de la tarjeta SIM esté hacia abajo. Aquí inserta la tarjeta hasta el fondo para que rebote después de golpear el muelle interno y quede bloqueada en su lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
Si quieres retirar la tarjeta SIM, empuja la tarjeta hacia dentro para golpear el muelle interno de modo que la SIM salga de la ranura
:::

- **Paso 5:** Enciende la placa

### Uso del módulo 5G - Prueba de llamada

Cuando se utiliza el módulo 5G SIM8202G-M2, el módulo no se iniciará automáticamente. Así que primero necesitamos conmutar algunos GPIO para que arranque

- **Paso 1:** Introduce lo siguiente para iniciar el módulo 5G

```sh
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

Una vez que lo anterior se ejecute, el LED2 se encenderá en verde

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **Paso 2:** Instala minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Paso 3:** Entra en la consola serie del módulo 5G conectado para que podamos introducir comandos AT e interactuar con el módulo 5G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Paso 4:** Introduce el comando **"AT"** y pulsa intro. Si ves la respuesta "OK", el módulo 5G está funcionando correctamente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **Paso 6:** Introduce el comando **"ATI"** para comprobar la información del módulo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **Paso 7:** Para probar el módulo, introduce el siguiente comando para llamar a otro número de teléfono

```sh
ATD<phone_number>;
```

Y verás la siguiente salida

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### Uso del módulo 5G - Conectarse a Internet

Próximamente

## DI/ DO

reServer Industrial soporta 4 canales de entrada digital y 4 canales de salida digital, todos los cuales están ópticamente aislados para proteger eficazmente la placa principal de picos de tensión u otras perturbaciones eléctricas. También hay una interfaz CAN en este mismo conector que trataremos más adelante en este wiki

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### Tabla de asignación de pines DI/ DO

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Label Name</th>
      <th>Schematic Signal</th>
      <th>Module Pin Number</th>
      <th>BGA Number</th>
      <th>GPIO Number</th>
      <th>V/A Limits</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Input</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>12V/ 20mA current in total</td>
      <td rowSpan={4}>Entrada digital de 12V, la señal de tierra debe<br />estar conectada a GND_DI (Pin2/4/6)</td>
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
      <td rowSpan={4}>Output</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>40V/40mA load per pin</td>
      <td rowSpan={4}>Salida digital, tensión máxima soportada<br />40V, la señal de tierra debe estar conectada a<br />GND_DO(Pin8/10)</td>
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
      <td rowSpan={2}>Bus CAN con señales diferenciales estándar, <br />la señal de tierra debe estar conectada a GND_ISO (Pin 12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Ground</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>La señal de tierra de referencia para la entrada digital de 12V,<br />que también es la ruta de retorno para el DI</td>
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

### Descripción general de la conexión para DI

Puedes realizar la conexión para DI siguiendo el diagrama de abajo. Es mejor añadir una resistencia en serie para la línea DI. Aquí hemos probado con una resistencia de 4,7kΩ conectada al pin DI1.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Uso para DI

Necesitas introducir un voltaje de 12V en la línea DI para que sea detectada como una entrada. El comando para habilitar DI / DO es diferente entre Jetpack 5 y Jetpack 6. 



<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **Paso 1:** Realiza las conexiones como se muestra arriba al **pin DI1** e introduce **12V**

- **Paso 2:** Abre el GPIO para DI1 como se indica a continuación

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
Puedes consultar la **Tabla de asignación de pines DI/ DO** para encontrar el número de GPIO y el número BGA. En el ejemplo anterior, para el pin DI1, el número de GPIO es 453 y el número BGA es PQ.05
:::

- **Paso 3:** Ejecuta lo siguiente para comprobar el estado

```sh
cat value
```

Si la salida es 0, significa que hay una entrada de 12V. Si la salida es 1, significa que no hay voltaje de entrada.

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **Paso 1:** Realiza las conexiones como se muestra arriba al **pin DI1** e introduce **12V**

- **Paso 2:** Comprueba el **line offset** de DI1 en chip0:

```sh
gpioinfo gpiochip0
```
Encuentra el **line offset** correspondiente según el número BGA. El **line offset** de DI1 es `105`.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-di.jpg"/></div>


:::note
Puedes consultar la **Tabla de asignación de pines DI/ DO** para encontrar el número de GPIO y el número BGA. En el ejemplo anterior, para el pin DI1, el número de GPIO es 453 y el número BGA es PQ.05	
:::

- **Paso 3:**
Para leer el **line offset 105** en gpiochip0, correspondiente a DI1:
```sh
sudo gpioget gpiochip0 105
```
Una salida de 0 indica un nivel bajo. Una salida de 1 indica un nivel alto.  
El formato del comando es el siguiente `sudo gpioset <gpiochip> <line>`.

</TabItem>
</Tabs>


### Descripción general de la conexión para DO

Puedes realizar la conexión para DO siguiendo el diagrama de abajo. Es mejor añadir una resistencia en serie para la línea DO. Aquí hemos probado con una resistencia de 4.7kΩ

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Uso para DO

Aquí necesitas conectar una carga como se indica en el diagrama anterior. La forma más sencilla de probar esto sería conectar un multímetro si tienes acceso a uno, o bien conectar una carga que requiera menos de 40V de voltaje máximo. El comando para habilitar DI / DO es diferente entre Jetpack 5 y Jetpack 6. 


<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **Paso 1:** Realiza las conexiones como se muestra arriba al **pin DO1** e introduce **40V como máximo**

- **Paso 2:** Abre el GPIO para D01 como se indica a continuación

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
Puedes consultar la **Tabla de asignación de pines DI/ DO** para encontrar el número de GPIO y el número BGA. En el ejemplo anterior, para el pin DO1, el número de GPIO es 399 y el número BGA es PI.00
:::

- **Paso 3:** Ejecuta lo siguiente para encender el pin

```sh
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **Paso 1:** Realiza las conexiones como se muestra arriba al **pin DO1** e introduce **40V como máximo**

- **Paso 2:** Comprueba el **line offset** de DO1 en chip0:

```sh
gpioinfo gpiochip0
```
Encuentra el **line offset** correspondiente según el número BGA. El **line offset** de DO1 es `51`.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-do.jpg"/></div>



:::note
Puedes consultar la **Tabla de asignación de pines DI/ DO** para encontrar el número de GPIO y el número BGA. En el ejemplo anterior, para el pin DO1, el número de GPIO es 399 y el número BGA es PI.00
:::

- **Paso 3:**
Utiliza el siguiente comando para controlar el estado de DO1:
```sh
# set to 12v
sudo gpioset --mode=wait gpiochip0 51=0

# set to 0v
sudo gpioset --mode=wait gpiochip0 51=1
```
El formato del comando es el siguiente `sudo gpioset <gpiochip> <line>=<value>`.

</TabItem>
</Tabs>

Si la carga se enciende o el multímetro muestra el voltaje que has introducido, la prueba está funcionando correctamente.

## CAN

reServer Industrial incorpora una interfaz CAN que soporta el protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. La interfaz CAN está aislada mediante aislamiento capacitivo, lo que proporciona una excelente protección EMI y garantiza una comunicación fiable en aplicaciones industriales y de automatización. Se ha instalado por defecto una resistencia terminal de 120Ω y puedes activar o desactivar esta resistencia usando GPIO.

Nota: La interfaz CAN utiliza una fuente de alimentación aislada, lo que significa que la señal de tierra para los dispositivos externos conectados a la interfaz CAN debe conectarse al pin CG

### Descripción general de la conexión con adaptador USB a CAN

Para probar e interconectarse con el bus CAN, conecta un adaptador USB a CAN a los conectores CAN de la placa como se muestra a continuación

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Aquí hemos utilizado el [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) disponible en nuestro Bazaar.

### Uso con adaptador USB a CAN

- **Paso 1:** Descarga el controlador para el adaptador USB a CAN que estés utilizando desde la página web del fabricante e instálalo. En nuestro caso, según el adaptador que usamos, los controladores se pueden encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Paso 2:** Algunos adaptadores también incluyen el software necesario para el PC con el fin de comunicarse con el dispositivo CAN. En nuestro caso, según el adaptador que usamos, hemos descargado e instalado el software que se puede encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Paso 3:** Abre una ventana de terminal en el reServer Industrial y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Paso 4:** Escribe **ifconfig** en el terminal y verás que la interfaz CAN está habilitada

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Paso 5:** Abre el software CAN que has instalado antes. En este caso, abriremos el software que instalamos según el adaptador CAN que estamos utilizando

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Paso 6:** Conecta el adaptador USB a CAN al PC y abre el **Device Manager** buscándolo en la barra de búsqueda de Windows. Ahora verás el adaptador conectado bajo **Ports (COM & LPT)**. Toma nota del puerto serie que aparece aquí. Según la imagen de abajo, el puerto serie es **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Paso 7:** Abre el software CAN, haz clic en **Refresh** junto a la sección **COM**, haz clic en el menú desplegable y selecciona el puerto serie según el adaptador conectado. Mantén **COM bps** por defecto y haz clic en **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Paso 8:** Mantén **Mode** y **CAN bps** por defecto, cambia **Type** a **Standard frame** y haz clic en **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Paso 9:** En el reServer Industrial, ejecuta el siguiente comando para enviar una señal CAN al PC

```sh
cansend can0 123#abcdabcd
```

Ahora verás la señal anterior recibida por el software como se muestra a continuación

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Paso 10:** En el reServer Industrial, ejecuta el siguiente comando para esperar a recibir señales CAN desde el PC

```sh
candump can0 &
```

- **Paso 11:** En el software CAN, haz clic en **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Ahora verás que es recibido por el reServer Industrial como se indica a continuación

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### Descripción general de la conexión con reTerminal DM

Si tienes acceso a un [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), puedes comunicarte con él directamente porque reTerminal DM también tiene una interfaz CAN.

Consulta la imagen de abajo para conectar reServer Industrial y reTerminal DM mediante CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Uso con reTerminal DM

- **Paso 1:** Antes de usar reTerminal DM, visita [este wiki](https://wiki.seeedstudio.com/es/reterminal-dm) para comenzar con reTerminal DM

- **Paso 2:** Abre una ventana de terminal en el reServer Industrial y ejecuta los siguientes comandos para configurar y habilitar la interfaz CAN

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

- **Paso 6:** En el reTerminal DM, ejecuta lo siguiente para esperar a recibir señales CAN desde el reServer Industrial

```sh
candump can0 &
```

- **Paso 7:** En el reServer Industrial, ejecuta el siguiente comando para enviar una señal CAN al reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Ahora verás que es recibido por el reTerminal DM como se muestra a continuación

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Paso 8:** Repite el **paso 6 y el paso 7** pero intercambiando los dispositivos. Usa el reTerminal DM para enviar señales CAN y usa el reServer Industrial para recibirlas

## Interfaces RS232/ RS422/ RS485

reServer Industrial tiene un conector DB9 que admite los protocolos de comunicación RS232, RS422 y RS485 y hay un panel de interruptores DIP a bordo para cambiar entre las diferentes opciones de interfaz

Puedes ver el panel de interruptores DIP como se muestra a continuación:

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

Y la siguiente tabla explica los diferentes modos según las posiciones de los interruptores DIP

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
      <td>Pure RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422 with termination resistor</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>Pure RS-232</td>
      <td>1T/1R RS-232 co-exists with RS485</td>
    </tr>
    <tr>
      <td>application without the need for the bus</td>
    </tr>
    <tr>
      <td>switch IC (for special usage).</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 with termination resistor</td>
    </tr>
    <tr>
      <td>TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Low Power</td>
      <td rowSpan={2}>All I/O pins are High Impedance</td>
    </tr>
    <tr>
      <td>Shutdown</td>
    </tr>
  </tbody>
</table>

:::note
Recién sacado de la caja, el modo predeterminado de los interruptores estará configurado en RS485 con 010 desde fábrica
:::

La tabla anterior tiene en cuenta los primeros tres interruptores del panel de interruptores DIP. Sin embargo, el cuarto interruptor es responsable de alternar la velocidad de transición (slew rate), que está directamente relacionada con la velocidad de datos

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
      <td>SLEW= Vcc<br />Este transceptor multiprotocolo RS232/RS422/RS485 limita la velocidad de comunicación de la siguiente manera:<br />RS-232: la velocidad de datos máxima es 1.5Mbps<br />RS-485/RS-422; la velocidad de datos máxima es 10Mbps<br />La velocidad de datos máxima real depende del Jetson SO Mused</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: la velocidad de datos máxima es 250Kbps<br />RS-485/RS-422: la velocidad de datos máxima es 250kbps</td>
    </tr>
  </tbody>
</table>

Aquí usaremos adaptadores USB a RS232, RS485 y RS422 para probar las interfaces. Así que antes de continuar, necesitas instalar una aplicación de terminal serie en tu PC. Aquí te recomendamos instalar **Putty**, que es fácil de configurar y usar.

- **Paso 1:** Visita [este sitio web](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) y descarga Putty de acuerdo con la arquitectura de tu PC

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Aquí hemos seleccionado Putty de acuerdo con el PC que usamos, que es una máquina Windows X86 de 64 bits

- **Paso 2:** Abre el instalador descargado y sigue las indicaciones para instalar la aplicación

### Descripción general de la conexión

Puedes consultar la numeración de pines del conector DB9 y la tabla para realizar las conexiones

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

Aquí puedes usar un adaptador USB a RS232 para probar la interfaz. Hemos utilizado el [Adaptador UGREEN USB a RS232](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nuestras pruebas.

- **Paso 1:** Apaga la placa

- **Paso 2:** Aquí tenemos 2 opciones para configurar los interruptores DIP. Ya sea en modo 001 o en modo 101. Las posiciones de los interruptores para cada modo se muestran a continuación

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **Paso 3:** Conecta el adaptador USB a RS232 al conector DB9

- **Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

- **Paso 5:** Enciende la placa

### Uso de RS232

- **Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás usando o Windows instalará automáticamente el controlador por ti. Ve al Administrador de dispositivos escribiendo **Device Manager** dentro de la búsqueda de Windows y comprueba si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **Paso 2:** Si no puedes ver el adaptador, necesitas instalar el controlador de acuerdo con el adaptador que estás usando. Generalmente puedes encontrar estos controladores en el sitio web del fabricante. Para el adaptador que estamos usando, puedes visitar [esta página](https://www.ugreen.com/pages/download), buscar **20201** como número de modelo y descargar el controlador en consecuencia

- **Paso 3:** Abre Putty en el PC, selecciona la sección **Terminal** y configura lo siguiente

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Paso 4:** Selecciona **Session**, bajo **Coonection type**, selecciona **Serial**, establece el número de puerto serie según lo que veas en **Device Manager**, mantén la velocidad por defecto (9600) y haz clic en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **Paso 4:** En la ventana de terminal del reServer Industrial, escribe lo siguiente para enviar una señal desde el reServer Industrial al PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

Ahora verás este mensaje mostrado en Putty

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **Paso 5:** En la ventana de terminal del reTerminal Industrial, escribe lo siguiente para esperar a recibir señales desde el PC

```sh
sudo cat /dev/ttyTHS0
```

- **Paso 6:** En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana de terminal del reServer Industrial

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### Descripción general de la conexión RS422

Aquí puedes usar un adaptador USB a RS422 para probar la interfaz. Hemos utilizado el [Adaptador DTech USB a RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

- **Paso 1:** Apaga la placa

- **Paso 2:** Aquí tenemos 2 opciones para configurar los interruptores DIP. Ya sea en modo 000 o modo 100. Las posiciones de los interruptores para cada modo se muestran a continuación

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **Paso 3:** Conecta el adaptador de USB a RS422 al conector DB9 usando cables Jumper como se muestra a continuación. Aquí hemos conectado el adaptador que hemos mencionado arriba

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

- **Paso 5:** Enciende la placa

### Uso de RS422

- **Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás usando o Windows instalará automáticamente el controlador por ti. Ve al Administrador de dispositivos escribiendo **Device Manager** dentro de la búsqueda de Windows y comprueba si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Paso 2:** Si no puedes ver el adaptador, necesitas instalar el controlador de acuerdo con el adaptador que estás usando. Generalmente puedes encontrar estos controladores en la página web del fabricante. Para el adaptador que estamos usando, puedes consultar [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Paso 3:** Abre Putty en el PC, selecciona la sección **Terminal** y configura lo siguiente

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Paso 4:** Selecciona **Session**, bajo **Coonection type**, selecciona **Serial**, establece el número de puerto serie de acuerdo con lo que ves en **Device Manager**, mantén la velocidad por defecto (9600) y haz clic en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Paso 4:** En la ventana de terminal de reServer Industrial, escribe lo siguiente para enviar una señal desde el reServer Industrial al PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

Ahora verás este mensaje mostrado en Putty

- **Paso 5:** En la ventana de terminal de reTerminal Industrial, escribe lo siguiente para esperar a recibir señales desde el PC

```sh
sudo cat /dev/ttyTHS0
```

- **Paso 6:** En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana de terminal de reServer Industrial

### Descripción general de la conexión RS485

Aquí puedes usar un adaptador de USB a RS422 para probar la interfaz. Hemos utilizado [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

- **Paso 1:** Apaga la placa

- **Paso 2:** Aquí tenemos 3 opciones para configurar los interruptores DIP. Ya sea en modo 010 o modo 011 o modo 110. Las posiciones de los interruptores para cada modo se muestran a continuación

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **Paso 3:** Conecta el adaptador de USB a RS422 al conector DB9 usando cables Jumper como se muestra a continuación. Aquí hemos conectado el adaptador que hemos mencionado arriba

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **Paso 4:** Conecta el otro extremo a uno de los puertos USB de tu PC

- **Paso 5:** Enciende la placa

### Uso de RS485

- **Paso 1:** Es posible que necesites instalar un controlador para el adaptador que estás usando o Windows instalará automáticamente el controlador por ti. Ve al Administrador de dispositivos escribiendo **Device Manager** dentro de la búsqueda de Windows y comprueba si puedes ver el adaptador conectado como un dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Paso 2:** Si no puedes ver el adaptador, necesitas instalar el controlador de acuerdo con el adaptador que estás usando. Generalmente puedes encontrar estos controladores en la página web del fabricante. Para el adaptador que estamos usando, puedes consultar [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Paso 3:** Abre Putty en el PC, selecciona la sección **Terminal** y configura lo siguiente

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Paso 4:** Selecciona **Session**, bajo **Coonection type**, selecciona **Serial**, establece el número de puerto serie de acuerdo con lo que ves en **Device Manager**, mantén la velocidad por defecto (9600) y haz clic en **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Paso 4:** En la ventana de terminal de reServer Industrial, escribe lo siguiente para enviar una señal desde el reServer Industrial al PC

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

Ahora verás este mensaje mostrado en Putty

- **Paso 5:** En la ventana de terminal de reTerminal Industrial, escribe lo siguiente para esperar a recibir señales desde el PC

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **Paso 6:** En Putty, escribe cualquier cosa, presiona **ENTER** y se mostrará en la ventana de terminal de reServer Industrial

## USB

reServer Industrial viene con 3 conectores USB3.2 a bordo y tiene las siguientes características:

- En los conectores USB apilados dobles, los puertos USB superior e inferior comparten un CI limitador de corriente, con una capacidad total de suministro de energía de 2.1A de corriente máxima de salida (uno solo también puede ser 2.1A). Si supera 2.1A, entrará en el estado de protección contra sobrecorriente.
- En el conector USB único junto a los conectores USB apilados dobles, tiene una capacidad total de suministro de energía de 2.1A de corriente máxima de salida. Si supera 2.1A, entrará en el estado de protección contra sobrecorriente.
- El módulo Orin NX viene con 3 USB3.2, de los cuales solo uno se usa en reServer Industrial y se convierte en 3 vías. (USB3.1 TYPE-A x2 - J4 y USB3.1 TYPE-A
x1 -J3).
- Solo admite USB Host, no el modo Device
- Proporciona 5V 2.1A
- Intercambiable en caliente

### Uso

Explicaremos cómo hacer un benchmark sencillo en una unidad flash USB conectada

- **Paso 1:** Comprueba la velocidad de escritura ejecutando el siguiente comando

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Paso 2:** Comprueba la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutarlos después de ejecutar el comando anterior para la velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### LED configurable

Hay un LED de color verde ubicado en la placa como se muestra a continuación. Por defecto actúa como el LED que muestra que el dispositivo está funcionando correctamente. Sin embargo, también puedes programar este LED para encenderlo y apagarlo mediante el sistema

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### Uso

- **Paso 1:** Introduce los siguientes comandos en una ventana de terminal para acceder al LED de color verde

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **Paso 2:** Apaga el LED

```sh
echo 0 > value 
```

- **Paso 3:** Enciende el LED

```sh
echo 1 > value 
```

Si has terminado de usar el LED, puedes ejecutar lo siguiente

```sh
cd ..
echo 329 > unexport
```

## Supervisar el rendimiento del sistema

Podemos usar la aplicación **jetson stats** para supervisar las temperaturas de los componentes del sistema y comprobar otros detalles del sistema tales como

- Ver las utilizaciones de CPU, GPU y RAM
- Cambiar los modos de energía
- Establecer los relojes al máximo
- Comprobar la información de JetPack

- **Paso 1:** En las ventanas de terminal de reServer Industrial, escribe lo siguiente

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **Paso 2:** Reinicia la placa

```sh
sudo reboot
```

- **Paso 3:** Escribe lo siguiente en el terminal

```sh
jtop
```

Ahora la aplicación **jtop** se abrirá como se muestra a continuación

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **Paso 4:** Aquí puedes recorrer las diferentes páginas de las aplicaciones y explorar todas las funciones.

## TPM

reServer Industrial viene con una interfaz TPM para conectar un módulo TPM externo. Aquí hemos probado con un módulo TPM2.0 basado en Infineon SLB9670.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### Descripción general de la conexión

Conecta el módulo TPM al conector TPM como se muestra a continuación

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### Uso

Comprueba si el módulo TPM está cargado correctamente ejecutando los siguientes comandos

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

Y verás la salida como se muestra a continuación

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## Rendimiento máximo en reServer Industrial

Si quieres habilitar el rendimiento máximo en el reServer Industrial, sigue las siguientes instrucciones

- **Paso 1:** Introduce el siguiente comando para habilitar el modo de máxima potencia

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

Aquí pedirá escribir **YES** para reiniciar la placa  

- **Paso 2:** Una vez que la placa haya arrancado, introduce el siguiente comando para establecer las frecuencias de la CPU a la frecuencia máxima

```sh
sudo jetson_clocks
```

## Tabla GPIO

Puedes acceder a la tabla GPIO del reServer Industrial para familiarizarte con todos los mapeos de pines.

Ejecuta lo siguiente dentro de un terminal para acceder a ella

```sh
sudo cat /sys/kernel/debug/gpio
```

Y verás la salida como se muestra a continuación

```sh
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

## Recursos

(cambia los enlaces)

- [Hoja de datos de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [Guía de referencia de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [Comparación de dispositivos NVIDIA Jetson y placas carrier](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Archivo 3D de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Soporte técnico

No dudes en enviar incidencias en nuestro [foro](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
