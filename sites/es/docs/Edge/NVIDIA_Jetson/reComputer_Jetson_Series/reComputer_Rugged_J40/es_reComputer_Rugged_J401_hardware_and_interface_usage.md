---
description: Uso de hardware e interfaces para reComputer Rugged J401
title: Uso de hardware e interfaces de reComputer Rugged J401
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - hardware interface
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 08/14/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# Uso de hardware e interfaces de reComputer Rugged J401

Este wiki presenta los distintos componentes de hardware e interfaces de reComputer Rugged J40 y explica cómo utilizarlos para ampliar tus ideas de proyecto. La mayoría de las interfaces en el reComputer Rugged J40 utilizan conectores M12, lo que proporciona resistencia al agua y al polvo con clasificación IP66, así como una excelente resistencia a las vibraciones. Esto lo hace adecuado para despliegues a largo plazo en entornos exteriores hostiles, como a bordo de embarcaciones y en sistemas de monitorización portuaria.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

# Descripción general de las interfaces de hardware

## Alimentación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

reComputer Rugged J401 está equipado con una interfaz de alimentación M12 A-code DC 19-48V, compatible con un amplio rango de entrada de voltaje, lo que lo hace adecuado para diversos entornos de suministro de energía. La definición de la interfaz se muestra en la tabla siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|Uso|Tipo|Color del cable|
|---|---|---|---|
|1|Entrada de alimentación DC|Alimentación|Marrón|
|2|||Blanco|
|3|Tierra|Tierra|Azul|
|4|||Negro|

## Pantalla

Retira los dos tornillos que fijan la tapa lateral impermeable y ábrela para acceder al puerto HDMI 2.1, que proporciona una salida de vídeo de alta calidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## M.2 Key M para SSD y M.2 Key E para Wi-Fi y Bluetooth

El reComputer Rugged J401 incorpora una interfaz M.2 Key E, mediante la cual puedes ampliar las capacidades de Bluetooth y Wi-Fi del dispositivo. Recomendamos utilizar la tarjeta de red inalámbrica Intel Dual Band RTL8822CE.

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, que proporciona velocidades de transferencia de datos ultrarrápidas, ideal para aplicaciones de alto rendimiento.

La ubicación de la interfaz se muestra en la figura siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **Instrucciones de uso**

Si deseas retirar el SSD incluido e instalar uno nuevo, debes asegurarte de que tu SSD cumpla las siguientes dos condiciones:

- Soportar la **ranura M.2 Key M con interfaz x4 PCIe Gen3**.

- Cumplir con la especificación de tamaño **2242**.



Abre la terminal en el dispositivo Jetson e introduce el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

Ejecuta el comando `sudo rm tempfile` para eliminar los archivos de caché una vez finalizada la prueba.

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar los ajustes de Wi-Fi y Bluetooth del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

Por supuesto, también podemos comprobar el estado de funcionamiento del dispositivo utilizando los siguientes comandos.

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## M.2 Key B para módulo 4G/5G

La ranura M.2 Key B es compatible con módulos celulares 4G/5G con soporte para tarjeta Nano SIM.

### Conexión de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### Instrucciones de uso

**Paso 1.** Comprobar el reconocimiento del hardware

```Bash
lsusb 
```

Este comando muestra una lista de todos los dispositivos USB conectados al sistema, junto con su fabricante (ID), tipo y otra información. Por ejemplo, la salida puede mostrar un dispositivo de Quectel Wireless Solutions Co., Ltd. EM12-G, lo que indica que el módulo 5G está presente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**Paso 2.** Confirmar la carga del controlador

Es esencial asegurarse de que el controlador option, que se requiere para el módulo 5G, esté cargado. Podemos usar el comando lsmod para comprobarlo.

```Bash
lsmod | grep option 
```

Si el controlador option se carga correctamente, en la salida se mostrará información relevante sobre dicho controlador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**Paso 3.** Configurar ModemManager

ModemManager es una herramienta para gestionar dispositivos módem, y es necesario instalarla y reiniciarla.

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

El comando apt install se utiliza para instalar el paquete ModemManager, mientras que systemctl restart reinicia el servicio ModemManager para garantizar que la nueva configuración surta efecto.

**Paso 4.** Verificar la identificación del módulo

Podemos usar el comando mmcli -L para comprobar si ModemManager puede identificar correctamente el módulo 5G.

```Bash
mmcli -L 
```

Si se reconoce el módulo 5G, se mostrará una salida similar a /org/freedesktop/ModemManager1/Modem/0, que indica la ruta al dispositivo módem detectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**Paso 5.** Establecer el APN

El APN (Access Point Name) es fundamental para conectar un dispositivo móvil a la red. Usaremos el comando nmcli para crear un perfil de portador. Tomando como ejemplo China Mobile, podemos crear un archivo de configuración con los siguientes comandos:

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando añade una nueva conexión de tipo GSM (Global System for Mobile Communications), especificando el APN como "CMNET" y utilizando configuración IPv4 automática.

**Paso 6.** Activar la conexión

Después de crear el perfil de portador, necesitamos activar la conexión.

```Bash
sudo nmcli con up "gsm" 
```

Este comando activa la conexión GSM y, si tiene éxito, se mostrará un mensaje de confirmación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**Paso 7.** Volver a verificar la identificación del módulo

Ejecuta de nuevo el comando mmcli -L para asegurarte de que el módulo sigue siendo reconocido después de configurar el APN.

```Bash
mmcli -L 
```

**Paso 8.** Comprobar el estado del módulo

Por último, podemos usar el comando mmcli -m 0 para ver información detallada sobre el módulo, como la asignación de IP, el operador y el estado de la conexión de red.

```Bash
mmcli -m 0 
```

Este comando proporciona detalles completos sobre el módulo 5G, incluidos su fabricante, modelo, tecnologías de red admitidas y actuales, estado del dispositivo y operadores de red conectados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

El reComputer Rugged J401 proporciona 1 puerto RJ45 Ethernet Gigabit estándar (10/100/1000M) (J35) y 4 puertos RJ45 Gigabit PSE (Power Sourcing Equipment) (J36–J39). El puerto Gigabit estándar se utiliza para la conectividad general de red. Los puertos PSE son compatibles con los estándares IEEE 802.3af/at, lo que permite suministrar energía a través de Ethernet a dispositivos conectados como cámaras IP y puntos de acceso inalámbricos, con una salida máxima de 15,4 W por puerto (802.3af). Esto lo hace ideal para aplicaciones industriales, AMR y de computación perimetral en exteriores, eliminando la necesidad de un cableado de alimentación independiente. Todos los puertos Gigabit se derivan del controlador PCIe dentro del módulo Jetson Orin y admiten autonegociación 10/100/1000M.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

## USB

El reComputer Rugged J401 proporciona 4 puertos USB 3.2 Type-A (a través de un hub USB 3.1 Gen1 interno, que admite tasas de datos de hasta 5 Gbps para conectar periféricos de alta velocidad, dispositivos de almacenamiento o cámaras) y 1 puerto USB 2.0 Type-C de depuración (que funciona como consola serie para acceder a registros del sistema, depurar problemas de arranque y realizar actualizaciones de firmware).

### Prueba de velocidad USB-A

Crea un script para probar la velocidad del dispositivo USB:

```Bash
vim test_usb.sh
```

Pega el siguiente contenido:

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

Pulsa Esc para salir del modo Insert, luego escribe `:w` y pulsa Intro para guardar el script, y después sal del proceso.

Haz que el script sea ejecutable y pruébalo:

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### Puerto USB 2.0 tipo C

Usando este puerto serie, a través del cable de datos USB-C, puedes monitorizar en el PC la información de depuración de entrada y salida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

Instala el controlador Silicon Labs CP210x Universal Windows VCP en Windows.

En el Administrador de dispositivos, localiza y confirma el puerto COM asignado al dispositivo serie

(COM8 en la captura de pantalla).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

Ejecuta el siguiente comando en PowerShell：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

Inicia sesión con nombre de usuario y contraseña.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

El reComputer Rugged J401 incluye un RTC de hardware con batería de respaldo para un cronometraje preciso. 

### Conexión de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### Instrucciones de uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Enciende el reComputer Rugged J401.

**Paso 3.** En el escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, ve a `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha y hora automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

Si no te has conectado a Internet mediante Ethernet, puedes configurar manualmente la fecha y hora aquí.

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para comprobar la hora del reloj de hardware:

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Verás que el sistema ha perdido la alimentación pero la hora sigue funcionando con normalidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

> Las pruebas y una introducción se añadirán una vez que la documentación esté completa.
> 
> 

## DI/DO

Las interfaces DI/DO de reComputer Rugged J401 están integradas en el conector J47 2x10P, compartiendo la interfaz con las interfaces CAN. Admiten 2 canales de entrada digital y 2 canales de salida digital, con transmisión de señal estable y adaptación de voltaje de grado industrial, adecuados para conectar sensores digitales, relés y otros dispositivos periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### Conexión de hardware

Los pines DI/DO correspondientes en la interfaz M12 se muestran en la figura siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

Canales de entrada digital (DI) / salida digital (DO)

### Instrucciones de uso

#### Operación de salida digital (DO)

Las interfaces DO adoptan salida de drenador abierto. Puedes configurar el nivel de salida (alto/bajo) mediante comandos para controlar periféricos como relés y LED.

Ejecuta el siguiente comando para habilitar el canal DO (salida de 12 V, alimentado por la resistencia de pull-up externa y la fuente de alimentación de 12 V):

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

Ejecuta el siguiente comando para deshabilitar el canal DO (salida ~0 V):

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO antes de tirar a alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO después de tirar a alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **Operación de entrada digital (DI)**

Utiliza el comando `gpioget` para leer el nivel de entrada del canal DI (valor devuelto `1` = nivel alto, `0` = nivel bajo) y obtener el estado de los dispositivos periféricos.

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

El reComputer Rugged J401 está equipado con una interfaz UART independiente (UART1) que admite los modos de comunicación RS232, RS422 y RS485, con transmisión de señal estable y amplia compatibilidad con dispositivos periféricos.

### Conexión de hardware

Canales de la interfaz UART

Cambia entre los modos RS232, RS485 y RS422 alternando el interruptor SW3.

Nota: Cuando el interruptor está presionado hacia abajo (ON), el bit es 0; cuando no está presionado, el bit es 1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Modo|Estado|
|---|---|---|---|---|
|0|0|0|RS-422 Full Duplex|1T/1R RS-422|
|0|0|1|RS-232 puro|3T/5R RS-232|
|0|1|0|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE <br />Activo en bajo|
|0|1|1|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE activo en alto|
|1|0|0|RS-422 Full Duplex|RS-422 con resistencia de terminación|
|1|0|1|RS-232|1T/1R RS-232 coexiste con la aplicación RS485 sin necesidad del bus de conmutación de bus (para uso especial)|
|1|1|0|RS-485|1T/1R RS-485 con resistencia de terminación, TX ENABLE activo en bajo|
|1|1|1|Apagado|Todos los pines de E/S están en alta impedancia|



## SPI

### Conexión de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### Instrucciones de uso

Utiliza cables Dupont para conectar los pines principales del canal SPI de destino (toma /dev/spidev0.0 como ejemplo): conecta el pin MOSI a su pin MISO (para realizar transmisión/recepción de datos en bucle).

El diagrama de cableado es el siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**Paso 1: Cargar el módulo del kernel SPI (prerrequisito)**

Antes de operar la interfaz SPI, asegúrate de que el módulo del kernel `spidev` esté cargado (el sistema por defecto puede precargarlo, pero se recomienda verificarlo manualmente):

```Bash
sudo modprobe spidev
```

Si el comando se ejecuta sin mensajes de error, significa que el módulo se ha cargado correctamente; si el módulo ya está cargado, el comando no devolverá ninguna información, lo cual es un fenómeno normal.

**Paso 2: Ver los nodos de dispositivo SPI**

Introduce el siguiente comando en el terminal para ver el nombre del dispositivo mapeado por la interfaz SPI de reComputer Rugged J401:

```Bash
ls /dev/spidev*
```

Si no se muestra ningún nodo de dispositivo, significa que el módulo `spidev` no se ha cargado correctamente. Vuelve a ejecutar `sudo modprobe spidev` y comprueba el registro del sistema para la resolución de problemas.

**Paso 3: Obtener y compilar el código de prueba SPI**

Obtén el código de prueba `spidev-test` desde GitHub y compílalo:

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Paso 4: Ejecutar el programa de prueba SPI**

Introduce el siguiente comando en el terminal para ejecutar el programa de prueba SPI (toma `/dev/spidev2.0` como ejemplo):

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**Paso 5: Verificar el resultado de la prueba**

Después de ejecutar el comando de prueba, puedes observar en el terminal el estado de transmisión y recepción de datos de la interfaz SPI0.0. La salida principal es la siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> Criterio clave de evaluación: si los datos TX (transmitidos) son consistentes con los datos RX (recibidos), indica que la prueba de bucle SPI se ha realizado correctamente y que la función de la interfaz SPI es normal.
> 
> 

## **I2C**

El Rugged J401 proporciona una interfaz I2C a través del conector J8 de 2x10 pines, lo que permite una fácil conexión de sensores y periféricos para la expansión del sistema.

### **Conexión de hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

Conecta tu dispositivo I2C a la interfaz I2C en la placa portadora:

- Tierra -> Ground (Pin 1)

- SDA -> SDA (Pin 16)

- SCL -> SCL (Pin 14)

- VCC -> 3V3 (Pin 20)

### **Instrucciones de uso**

**Paso 1.** Instala las herramientas de prueba I2C:

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**Paso 2.** Ver los mapeos del bus I2C:

```Bash
i2cdetect -l
```

**Paso 3.** Escanear dispositivos en el bus I2C:

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## Recursos

- [reComputer Rugged J40 Datasheet](#) *(próximamente)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
