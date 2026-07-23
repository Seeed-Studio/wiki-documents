---
description: El reComputer Industrial R22xx es un NVR industrial con IA basado en Raspberry Pi CM5, equipado con un acelerador de IA Hailo-8 que ofrece hasta 26 TOPS. Con 4 puertos Ethernet Gigabit con soporte PoE PSE más un puerto Ethernet Gigabit adicional, permite transmisión de vídeo de gran ancho de banda y un despliegue PoE simplificado para cámaras IP. Ofrece abundantes E/S industriales, conectividad inalámbrica flexible, diseño térmico sin ventilador y un amplio rango de temperatura de funcionamiento de –20 °C a 50 °C, garantizando analítica de vídeo con IA fiable y un funcionamiento continuo y estable en escenarios exigentes.
title: Configurar reComputer Industrial R22xx
keywords:
  - Controlador de Borde
  - Raspberry pi
  - Controlador de Borde
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_configure_system
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_configure_system/
---

## Descripción general

Aprende a configurar y probar los componentes de hardware en la serie reComputer Industrial R22xx después de instalar los dispositivos. Esta wiki cubre el mapeo de GPIO, prueba del LED de USUARIO, comunicación SPI, escaneo de Wi-Fi y Bluetooth, LoRa®, 4G, 5G, pruebas de RS485, RS232, CAN, DI/DO, UPS para apagado seguro y más.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Consultar asignaciones y desplazamientos de GPIO

Para consultar las asignaciones y desplazamientos de GPIO, sigue estos pasos:

1. Copia y pega el siguiente comando para consultar las asignaciones de GPIO:

```bash
cat /sys/kernel/debug/gpio
```

**Este comando mostrará las asignaciones y desplazamientos de GPIO**, proporcionando información esencial para depurar o configurar los pines GPIO.

## Prueba del LED de USUARIO

Proporcionamos LED en tres colores: rojo, azul y verde para que los usuarios los utilicen. Puedes entrar en el directorio /sys/class/leds/ para ver:

**1. Navega al directorio de LED**  

```bash
cd /sys/class/leds/
ls
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.3-1.png" style={{width:800, height:'auto'}}/></div>


Utiliza el siguiente comando para encender el LED del color correspondiente.

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

Esto **encenderá** el LED correspondiente.

**3. Apagar los LED (opcional)**  
Para **apagar** un LED específico, utiliza:

```bash
sudo su
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## Prueba de comunicación SPI

Para probar la comunicación SPI cortocircuitando los pines MISO y MOSI del módulo TPM, sigue estos pasos:

1. Clona el repositorio spidev-test:

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. Entra en el directorio spidev-test:

```bash
cd spidev-test
```

3. Compila el archivo spidev_test.c:

```bash
gcc spidev_test.c -o spidev_test
```

4. Ejecuta el programa spidev_test con el siguiente comando:

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

Este comando prueba la comunicación SPI en el dispositivo SPI especificado (**/dev/spidev10.0**) con salida detallada (-v) y envía el mensaje "hello" (**-p hello**).
Al cortocircuitar los pines MISO y MOSI del módulo TPM, estás creando efectivamente un escenario de bucle de retorno, donde los datos enviados por MOSI se reciben en MISO. Esta configuración te permite probar la comunicación SPI sin un dispositivo real conectado.

## Escaneo de Wi-Fi

Para listar las redes Wi-Fi disponibles y sus detalles, ejecuta:  

```bash
sudo iwlist wlan0 scan
```

- Este comando escanea todas las redes Wi-Fi cercanas y muestra sus SSID, intensidad de señal y tipo de cifrado.  

## Escaneo de Bluetooth  

Para escanear dispositivos Bluetooth, sigue estos pasos:  

**Abre la interfaz de control de Bluetooth:**  

```bash
sudo bluetoothctl
```

Este comando abrirá la interfaz de control de Bluetooth. Desde ahí, puedes ejecutar comandos adicionales para escanear dispositivos Bluetooth cercanos.

**Habilita el escaneo:**  

```bash
scan on
```

Este comando iniciará el escaneo de dispositivos Bluetooth cercanos. Luego puedes usar otros comandos dentro de la interfaz de ***bluetoothctl*** para interactuar con dispositivos Bluetooth, como emparejarlos o conectarte a ellos.

## LoRa® sobre Mini-PCIe

### Configuración LoRa® SPI  

Después de instalar el LoRa® SPI en la ranura Mini-PCIe 2, puedes configurar LoRa® SPI siguiendo estos pasos:

1. Clona el repositorio **SX1302_HAL**:

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. Navega al directorio clonado:

```bash
cd sx1302_hal
```

3. Modifica el archivo de configuración:

Abre el archivo de configuración del dispositivo I2C:  

```bash
sudo nano ./libloragw/inc/loragw_i2c.h
```

Cambia esta línea:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

A:  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

Cambia **#define I2C_DEVICE "/dev/i2c-1"** a **#define I2C_DEVICE "/dev/i2c-2".**
Pulsa **ctrl+x** para salir, pulsa **y** para guardar los cambios y luego pulsa **Enter** para volver a la página de la línea de comandos.

4. 4.Añade el archivo packet_forwarder/reset_lgw.sh:

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

Añade el código de ejecución:

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

```

El firmware admite de forma nativa el modelo SPI WM1302-SPI-US915-M. Si deseas utilizar otros modelos, puedes consultar la definición del RESET_PIN correspondiente y modificar el RESET_PIN haciendo referencia a los siguientes comandos.

```bash
cat /sys/kernel/debug/gpio
```

Pulsa **ctrl+x** para salir, pulsa **y** para guardar los cambios y luego pulsa **Enter** para volver a la página de la línea de comandos.

5. Modifica el código de configuración:

```bash
cp ./tools/reset_lgw.sh ./packet_forwarder
```

6. Comenta las líneas 18, 29, 35, 42, 53 y 54 respectivamente:

```bash
nano ./packet_forwarder/global_conf.json.sx1250.US915
```

Cambia "com_path": "/dev/spidev0.0" a "com_path": "/dev/spidev2.0".

```bash
 cd ./packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.7.1-1.png" style={{width:800, height:'auto'}}/></div>




### Configuración LoRa® USB

Para LoRa® USB, los comandos anteriores siguen siendo los mismos que para LoRa® SPI. Sin embargo, el comando final debe cambiarse a:

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

Este comando especifica el archivo de configuración que se utilizará para LoRa® USB.

## Celular 5G sobre M.2 B-KEY

Para interactuar con un módulo 5G/4G usando comandos AT a través de minicom, sigue estos pasos:

1. Crea un nuevo archivo power_5g.sh：

```bash
nano power_5g.sh
```

Ábrelo con sudo nano e introduce el siguiente comando, luego pulsa ***ctrl+x*** para guardar y salir.

```bash
#!/bin/bash

RESET_PIN=655
POWER_PIN=660

if [ ! -d "/sys/class/gpio/gpio$RESET_PIN" ]; then
    echo $RESET_PIN > /sys/class/gpio/export
fi

if [ ! -d "/sys/class/gpio/gpio$POWER_PIN" ]; then
    echo $POWER_PIN > /sys/class/gpio/export
fi

echo "out" > /sys/class/gpio/gpio$RESET_PIN/direction
echo "out" > /sys/class/gpio/gpio$POWER_PIN/direction

echo 1 > /sys/class/gpio/gpio$RESET_PIN/value
echo 1 > /sys/class/gpio/gpio$POWER_PIN/value

echo "Start to reboot 5g module"

echo 0 > /sys/class/gpio/gpio$RESET_PIN/value
sleep 0.05
echo 0 > /sys/class/gpio/gpio$POWER_PIN/value

echo "5g module reboot completed"
```

2. Ejecuta el archivo:

```bash
sudo ./power_5g.sh
```

Después de 10-15 segundos (el módulo tarda un tiempo en encenderse y enumerar el USB), comprueba si aparece el nodo de dispositivo:

```bash
ls /dev/ttyUSB*
```

Salida /dev/ttyUSB0, etc.:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
Abre minicom con el puerto serie y la velocidad en baudios adecuados:

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Este comando abre minicom con el puerto serie especificado (***/dev/ttyUSB2***) a una velocidad en baudios de 115200.

1. Una vez que minicom esté abierto, puedes empezar a enviar comandos AT al módulo 4G. Por ejemplo:

```bash
AT
```

Este comando comprueba si el módulo responde. Deberías recibir una respuesta ***"OK"*** si el módulo funciona correctamente.

2. Para marcar un número de teléfono usando el módulo 4G, puedes usar el comando ATD seguido del número de teléfono:

```bash
ATD<phone_number>;
```

Sustituye **phone_number** por el número de teléfono que quieras marcar.
Asegúrate de incluir un punto y coma ; al final del comando para indicar el final del número de teléfono.

## Celular 4G sobre Mini-PCIe

Crea un nuevo archivo power_4g.sh:

```bash
sudo nano power_4g.sh
```

Ábrelo con sudo nano e introduce el siguiente comando, luego pulsa ctrl+x para guardar y salir.

```bash
# SIM_MUX_SEL
echo 655 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio655/direction
echo 0 > /sys/class/gpio/gpio655/value
echo 660 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio660/direction
echo 1 > /sys/class/gpio/gpio660/value
```

Ejecuta el archivo:

```bash
sudo ./power_4g.sh
```

Entra en minicom para enviar comandos:

```bash
sudo apt install minicom -y
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Pulsa Ctrl+A, Z, E en secuencia. Primero envía AT para probar si está conectado. Si aparece OK, la conexión se ha realizado correctamente.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.9-1.png" style={{width:800, height:'auto'}}/></div>


Después de ejecutar el siguiente comando, el módulo se reiniciará automáticamente. Si no sales de minicom, podrás ver la información de configuración correspondiente.
Acceso a Internet por marcación ECM:

```bash
AT+QCFG="usbnet",1
```

Hasta que la última línea muestre OK, será exitoso.

> Nota
> El dispositivo necesita esperar un rato y luego podrás ver la dirección IP de usb0 en ifconfig.

Probar el estado de la red y la comunicación：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Prueba de RS485

El reComputer Industrial R21xx incluye **2x puertos RS485**. A continuación se muestran sus correspondientes **puertos COM** y **archivos de dispositivo**:  

| **Número de puertos RS485** | **Puerto COM** | **Etiqueta serigrafiada** | **Archivo de dispositivo** |
|---------------------------|--------------|---------------------------|-----------------------------|
| **RS485-2**               | COM2         | A2/B2/GND3                | `/dev/ttyACM1`              |
| **RS485-3**               | COM3         | A3/B3/GND4                | `/dev/ttyACM2`              |

Para probar la función RS485, puedes seguir los pasos a continuación (tomando RS485_1 y RS485_2 como ejemplos):

1. Conecta los terminales A y B de RS485_1 y RS485_2.
2. Abre minicom en dos ventanas de terminal respectivamente:

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 Si hay una placa de expansión, el número debe desplazarse una posición hacia atrás, por ejemplo ***/dev/ttyAcM2***, ***/dev/ttyAcM3***.
:::

3. Las siguientes operaciones deben realizarse en ambos ACM abiertos:

- Pulsa ***Ctrl+A***, luego pulsa ***Z***, y aparecerá la interfaz de Resumen de Comandos de Minicom:
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- Pulsa ***O*** de nuevo para abrir la configuración, selecciona Serial port setup y pulsa ***Enter***; abre todas las interfaces relacionadas con RS485, pulsa ***H/I/J/K/L*** en secuencia para activarlas;
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- Después de que todos muestren "YES", pulsa Enter para volver y luego selecciona Exit para salir.

:::note

Tomando ACM2 y ACM3 como ejemplo:
Si quieres enviar desde ACM2 a ACM3, ACM2 debe configurarse de nuevo: ***ctrl+A***, luego pulsa ***Z*** y luego ***E***, y después inicia el comando de escritura del puerto serie. En este momento, puedes imprimir cadenas en ACM2 libremente y podrás ver el contenido de ACM2 en ACM3 al mismo tiempo;
A la inversa, si quieres enviar desde ACM3 a ACM2, ACM3 debe configurarse de nuevo:  ***ctrl+A***, luego pulsa  ***Z***  y luego  ***E***, y después inicia el comando de escritura del puerto serie. En este momento, puedes imprimir cadenas en ACM3 libremente y podrás ver el contenido de ACM3 en ACM2 al mismo tiempo. Como se muestra en la figura.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## Prueba de RS232

reComputer Industrial R21xx incluye **2x puertos RS232**, y los correspondientes **puertos COM** y **archivos de dispositivo** son los siguientes:

| **Número de puertos RS232** | **Puerto COM** | **Etiqueta serigrafiada** | **Archivo de dispositivo** |
|---------------------------|--------------|---------------------------|-----------------------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1              | `/dev/ttyACM0`              |
| **RS232-2**               | COM2         | RX2/TX2/GND2              | `/dev/ttyACM1`              |

Debido a que RS232 es comunicación full-dúplex, cortocircuita directamente el TX y RX de RS232 para realizar una prueba de bucle de retorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-1.png" style={{width:800, height:'auto'}}/></div>

Necesitas abrir dos terminales, ACM1 si la placa de expansión está conectada, y ACM2 si la placa de expansión no está conectada:
**Terminal 1:***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

Si la placa de expansión no está conectada, necesitas cambiar ***/dev/ttyACM1*** a ***/dev/ttyACM0*** .

**Terminal 2:**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```


El Terminal 1 mostrará el contenido que el Terminal 2 solicita imprimir.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-2.png" style={{width:800, height:'auto'}}/></div>

## Prueba de DI (Entrada Digital)

reComputer Industrial R21xx contiene 4x puertos DI, el usuario puede configurar estos puertos según las necesidades reales.

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Número de puertos</th>
        <th>Puertos DI</th>
        <th>GPIO extendido correspondiente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DI1</td>
        <td>GPIO588</td>
      </tr>
      <tr>
        <td>DI2</td>
        <td>GPIO589</td>
      </tr>
      <tr>
        <td>DI3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DI4</td>
        <td>GPIO595</td>
      </tr>
    </tbody>
  </table>
</div>

El tipo de entrada de los puertos DI es PNP. Soporta tensión de entrada de 5VDC~24VDC, corriente - 1000mA.
Para probar la funcionalidad de DI, puedes seguir estos pasos para probarlo:

1. Se ha completado la conexión entre el puerto DI de reComputer Industrial R21xx y la carga externa.
2. Introduce el siguiente comando para obtener el estado del GPIO：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. Cuando el nivel externo es alto, el valor de ***/sys/class/gpio/gpio588/value*** es 0; cuando el nivel externo es bajo, ***/sys/class/gpio/gpio588/value*** es 1.

## DO (Salida Digital)

reComputer Industrial R21xx contiene 4x puertos DO, el usuario puede configurar estos puertos según las necesidades reales.

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Número de puertos</th>
        <th>Puertos DI</th>
        <th>GPIO extendido correspondiente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DO1</td>
        <td>GPIO638</td>
      </tr>
      <tr>
        <td>DO2</td>
        <td>GPIO637</td>
      </tr>
      <tr>
        <td>DO3</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

El tipo de salida de los puertos DO es transistor. Soporta tensión de salida inferior a 60 VDC, capacidad de corriente - 500 mA.
Para probar la funcionalidad de DO, puedes seguir estos pasos para probarlo:

1. Se ha completado la conexión entre el puerto DO de reComputer Industrial R21xx y la carga externa.
2. Introduce el siguiente comando para establecer la salida a nivel alto o nivel bajo：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. Cuando el nivel externo es alto, el valor de  /sys/class/gpio/gpio638/value   es 0; cuando el nivel externo es bajo,  /sys/class/gpio/gpio638/value  es 1.

## Prueba de CAN

### Prueba de bucle de retorno

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Número de puertos</th>
        <th>Puertos DI</th>
        <th>GPIO extendido correspondiente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">2</td>
        <td>CAN_H/CAN_L</td>
        <td>can0</td>
      </tr>
    </tbody>
  </table>
</div>

Dado que el reComputer Industiral R22xx está equipado solo con una única interfaz CAN, no puede realizar pruebas de bucle de retorno independientes. Para verificar su funcionalidad de comunicación, se requiere un dispositivo par externo o un adaptador USB-a-CAN. Para esta prueba, el reComputer Industiral R21xx (que cuenta con interfaces CAN dobles) servirá como nodo par para establecer una conexión con el reComputer Industiral R22xx. Consulta el siguiente tutorial para conocer los esquemas de conexión específicos y los pasos de configuración:

1. Utiliza dos cables DuPont para cortocircuitar los H-H y L-L de can0 y can1 para formar una prueba de bucle mínimo.

```bash
CAN_H─────●───── CAN-H
CAN_L─────●───── CAN-L
G_CAN_H─────●───── G_CAN
```

2. Confirma que las dos interfaces de red can0 y can1 aparecen en el sistema para evitar que el controlador no se cargue:

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```


3. Configura las dos interfaces CAN a 500 kbit/s y ponlas en línea, listas para enviar y recibir datos (ajústalas a nivel bajo por seguridad):
R22xx:
```bash
sudo ip link set can0 down
sudo ip link set can0 up type can bitrate 500000
```
R21xx:
```bash
sudo ip link set can1 down
sudo ip link set can1 up type can bitrate 500000
```

4. Prueba de comunicación (unidireccional)
Utiliza can-utils para enviar y recibir datos.

Paso A: R21xx (CAN1) envía → R22xx (CAN0) recibe

- R22xx: candump can0

- R21xx: cansend can1 123#DE.AD.BE.EF.CA.FE.00.11

Paso B: R22xx (CAN0) envía → R21xx (CAN1) recibe

- R21xx: candump can1

- R22xx: cansend can0 555#1122334455667788



## Prueba del Hub USB

Para probar el hub USB, puedes usar los siguientes pasos:

1. Comprueba si el hub USB es detectado ejecutando el comando ***lsusb***. Este comando lista todos los dispositivos USB conectados, incluidos los hubs.

```bash
lsusb
```

Al ejecutar este comando se debería mostrar información sobre los dispositivos USB conectados a tu sistema, incluidos los hubs USB presentes.
Si el hub USB funciona correctamente, deberías ver sus detalles listados en la salida del comando lsusb. Si no aparece listado, puede haber un problema con el hub o con su conexión al sistema. En tales casos, es posible que necesites solucionar problemas del hub USB o de sus conexiones.

## Prueba de RTC (Reloj en Tiempo Real)

:::note
Dado que el dispositivo reComputer está equipado con el chip CM5, hay dos unidades RTC en el dispositivo: ① El RTC integrado de CM5 (rtc0); ② El RTC ensamblado en reComputer (rtc1).

rtc0 no puede conservar los datos de tiempo. Por lo tanto, para usar la función RTC, necesitas especificar manualmente el número de dispositivo rtc1 al configurar la hora.
:::

Para probar la funcionalidad del Reloj en Tiempo Real (RTC), sigue estos pasos:

1. Desactiva la sincronización automática de hora:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Configurar la hora:
Configura el RTC a una fecha y hora específicas:

```bash
sudo hwclock --set --date "2025-7-17 12:00:00" -f /dev/rtc1
```

3. Sincronizar la hora del RTC con el sistema
Actualiza la hora del sistema para que coincida con la hora del RTC:  

```bash
sudo hwclock --hctosys -f /dev/rtc1
```

4. Comprobar la hora del RTC:

```bash
sudo hwclock -r -f /dev/rtc1
```

Este comando leerá y mostrará la hora almacenada en el RTC.

5. Desconecta la fuente de alimentación del RTC, espera unos minutos, luego vuelve a conectarla y comprueba de nuevo la hora del RTC para ver si ha conservado la hora correcta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.17-1.png" style={{width:800, height:'auto'}}/></div>

## Prueba del temporizador watchdog

Para realizar una prueba del watchdog, sigue estos pasos:

1. Instala el software del watchdog:

```bash
sudo apt install watchdog
```

2. Edita el archivo de configuración del watchdog:

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modifica la configuración de la siguiente manera:

```bash
watchdog-device = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval = 15
max-load-1 = 24
#max-load-5 = 18
#max-load-15 = 12
realtime = yes
priority = 1
```

Puedes ajustar otros parámetros según sea necesario.

3. Asegúrate de que el servicio del watchdog se esté ejecutando:

```bash
sudo systemctl start watchdog
```

4. Para probar la funcionalidad del watchdog, ejecuta el siguiente comando para simular un bloqueo del sistema:

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

Este comando provoca un fallo del kernel y debería hacer que el watchdog reinicie el sistema.

5. Supervisa el sistema para confirmar que se reinicia después del periodo de tiempo de espera especificado.
Estos pasos te ayudarán a probar y garantizar la funcionalidad del temporizador watchdog en tu sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## Controlar el zumbador mediante GPIO  

El GPIO correspondiente al zumbador es gpio627. Introduce el siguiente script para encender/apagar el zumbador:

1. Encender el zumbador:

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. Apagar el zumbador :Turn off the buzzer :

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

Si conectas un módulo TPM 2.0 al dispositivo, el siguiente código puede ayudar a comprobar la conexión TPM.

```bash
ls /dev | grep tpm
```  

**Interpretación de la salida:**  

Si ves ***tpm0*** y ***tpmrm0*** en la salida, significa que los dispositivos TPM (Trusted Platform Module) se detectan y están disponibles en tu sistema. Esto indica que el hardware TPM es reconocido y accesible, lo cual es una buena señal. Puedes continuar utilizando funcionalidades o aplicaciones relacionadas con TPM sabiendo que los dispositivos están presentes y accesibles.

## ATECC608A

Para interactuar con el dispositivo ATECC608A y generar un número de serie aleatorio, sigue estos pasos:

1. Clonar el repositorio atecc-util:

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. Extraer el contenido del paquete .deb en el directorio actual:

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. Navegar al directorio atecc:

```bash
cd usr/bin
```

4. Generar un número de serie aleatorio:

```bash
./atecc -b 10 -s 192 -c 'serial'
```

Este comando indica a la utilidad ATECC que use la ranura 10 (-b 10), establezca el tamaño del número de serie en 192 bits ***(-s 192)*** y genere un número de serie aleatorio ***(-c 'serial')***. La salida será el número de serie generado, como ***"01235595d3d621f0ee"***.
Este proceso te permite interactuar con el dispositivo ATECC608A y realizar varias operaciones, como generar números de serie aleatorios.

## Interactuar con la EEPROM

Aquí están los comandos para interactuar con una EEPROM (Electrically Erasable Programmable Read-Only Memory):

1. Conceder permisos completos (lectura, escritura y ejecución) al archivo de dispositivo de la EEPROM:

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. Escribir la cadena "This is a test string" en el dispositivo EEPROM:

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. Leer el contenido del dispositivo EEPROM y mostrarlo en formato ***hexadecimal*** usando la utilidad hexdump:

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Comprobación de la detección del SSD

Para listar los discos, incluido el SSD, puedes usar el comando fdisk -l. Aquí se indica cómo:

```bash
sudo fdisk -l
```

Este comando mostrará una lista de todos los discos conectados a tu sistema, incluido el SSD si se detecta correctamente. Busca las entradas que representen tu SSD. Normalmente comienzan con ***/dev/sd*** seguido de una letra (por ejemplo, ***/dev/sda, /dev/sdb,*** etc.).
Una vez que identifiques la entrada correspondiente a tu SSD, puedes proceder a particionarlo o formatearlo según sea necesario.

## SAI para apagado seguro

Se utiliza un GPIO6 entre la CPU y la entrada de alimentación de CC para avisar a la CPU cuando se interrumpe la fuente de alimentación. Entonces la CPU debería hacer algo urgente en un script antes de que se agote la energía del supercondensador y ejecutar un "$ shutdown".
Otra forma de usar esta función es iniciar un apagado cuando cambie el pin GPIO. El pin GPIO dado se configura como una tecla de entrada que genera eventos KEY_POWER. Este evento es gestionado por systemd-logind iniciando un apagado.

1. Conexión de hardware.

Asegúrate de que el pin ***'CM5_UPS_DET'*** del dispositivo UPS esté conectado al pin GPIO16 del dispositivo R21xx.

2. Modificar el archivo de configuración.

- Abre la terminal.
- Ejecuta el siguiente comando para editar el archivo de configuración:

```bash
sudo nano /boot/firmware/config.txt
```

3. Añade el siguiente contenido al final del archivo:

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

Guarda y sal del editor (pulsa ***`Ctrl+O`*** para guardar, ***`Enter`*** para confirmar y ***`Ctrl+X`*** para salir).

4. Preparar el script en Python

- Crea un nuevo archivo de script en Python:

```bash
cd ~
sudo nano ups_shutdown.py
```

- Copia y pega el siguiente código en el archivo:

```bash
import RPi.GPIO as GPIO
import time, os

num = 0

GPIO.setmode(GPIO.BCM)

# Set GPIO16 to input mode
# Add 500ms anti-shake time to stabilize the software
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.add_event_detect(16, GPIO.FALLING, bouncetime=500)

while True:
    if GPIO.event_detected(16):
        print("...External power off...")
        print("")

        # Sync data to disk
        os.system('sync')
        print("...Data saving...")
        print("")

        # Sleep for 3 seconds
        time.sleep(3)

        # Synchronize data again
        os.system('sync')

        # Countdown 5 seconds
        while num < 5:
            print('----------')
            s = 5 - num
            print('---' + str(s) + '---')
            num = num + 1
            time.sleep(1)
            print('----------')

        # Execute shutdown command
        os.system('sudo shutdown -h now')
```

Guarda y sal del editor (pulsa ***`Ctrl+O`*** para guardar, ***`Enter`*** para confirmar y ***`Ctrl+X`*** para salir).

5. Ejecutar el script.

- Abre la terminal.
- Ejecuta el siguiente comando para ejecutar el script:

```bash
sudo python3 ups_shutdown.py
```

:::note
 Usa `sudo` para asegurarte de que el script tenga permisos suficientes para ejecutar el comando de apagado.
:::

6. Simular una prueba de fallo de alimentación

- Corta la fuente de alimentación externa.
- Observa si el sistema guarda automáticamente los datos y se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. Verificar el resultado

- Vuelve a conectar la fuente de alimentación.
- Comprueba si los datos del sistema están completos y si se inicia con normalidad.

:::note

1. Para la función de SAI, ponte en contacto con nosotros para obtener más información.
2. La señal de alarma es activa en nivel BAJO.

:::

## Acelerador de IA

La ranura M.2 M-KEY 2240 en el reComputer Industrial R21xx está diseñada para alojar un acelerador de IA PCIE M.2. Y la serie R21xx-12 viene preinstalada con una aceleración de IA Hailo-8 M.2 de hasta 26TOPS.
Si compraste el producto de la serie R21xx-10, necesitarás adquirir el módulo NPU de Hailo para habilitar la funcionalidad de IA.
El dispositivo viene preinstalado con el controlador del acelerador Hailo, por lo que puedes usarlo directamente y ejecutar el caso de prueba:

1. Navegar al directorio del caso de prueba

```bash
cd /mnt/hailo-rpi5-examples/
```

2. Iniciar el entorno virtual

```bash
source ./setup_env.sh
```

3. Ejecutar el ejemplo de detección simple

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

Para cerrar la aplicación, pulsa ***`Ctrl+C`*** .
Esta es una versión ligera del ejemplo de detección, centrada principalmente en demostrar el rendimiento de Hailo mientras se minimiza la carga de la CPU. La canalización interna de procesamiento de video de GStreamer se simplifica minimizando las tareas de procesamiento de video, y se utiliza el modelo YOLOv6 Nano.

:::note
Si el reComputer que compraste no incluye Hailo-8 y estás considerando adquirir un dispositivo Hailo para integrarlo, consulta la documentación oficial de Hailo (https://github.com/hailo-ai) para configurar el firmware y el entorno, y ejecutar los ejemplos para verificar que el dispositivo pueda utilizarse con normalidad.
:::

## Cámara IP PoE


La serie reComputer Industrial R22xx está diseñada para flujos de video IP de alta densidad y automatización industrial. Cuenta con **5 puertos físicos Gigabit Ethernet** con una arquitectura de bus híbrida para garantizar el máximo ancho de banda y estabilidad.

**Distribución del bus interno:**

* **eth0 (Nativo)**: Conectado directamente al SoC. Ofrece la latencia más baja y se recomienda como **enlace ascendente principal (WAN)** o **puerto de gestión**.
* **eth1 (Extensión USB)**: El puerto independiente situado junto al puerto nativo. Se extiende a través del **bus USB 3.0** y admite **salida PoE**.
* **eth2, eth3, eth4 (Extensión PCIe)**: Los tres puertos consecutivos. Se extienden a través del **bus PCIe** y admiten **salida PoE**.


1. Especificaciones técnicas

| Categoría | Especificación | Notas |
| :--- | :--- | :--- |
| **Puertos totales** | 1 (Nativo) + 4 (Extendidos) | 5x RJ45 Gigabit Ethernet |
| **Modo PoE** | **Alternativa A (Modo A)** | Alimentación suministrada a través de los pares de datos (1/2, 3/6) |
| **Salida PoE por puerto** | **12W** (Máx.) | Optimizado para cámaras IP estándar |
| **Salida PoE en paralelo** | Los 4 puertos admiten 12W simultáneamente | Requiere suficiente potencia de entrada del sistema |
| **Rango de entrada de alimentación** | **9V - 36V DC** | El circuito elevador interno aumenta hasta **48V** para PoE |
| **Características de seguridad** | Protección contra sobrecorriente y subtensión | **El hot-plugging está estrictamente prohibido** |

2. Directrices críticas de seguridad
* **NO HOT-PLUGGING**: 
    > **ADVERTENCIA**: Conectar o desconectar cables Ethernet mientras la alimentación PoE está activa (GPIO en High) puede causar sobretensiones transitorias que pueden dañar los chips LAN7800 o los puentes PCIe. Sigue siempre el principio de "**Conectar primero, alimentar después**".
* **Recomendaciones de alimentación**:
    > Aunque el dispositivo admite entrada de 9V, recomendamos utilizar una fuente de alimentación industrial de **24V** con al menos **72W** (3A) de capacidad para garantizar una alta eficiencia de conversión cuando los 4 puertos PoE estén a plena carga (4 × 12W).


3. Pasos de configuración

- Paso 1: Deshabilitar servicios en conflicto
Para evitar que los gestores de red de escritorio sobrescriban la configuración industrial de IP estática, deshabilita `NetworkManager`.

```bash
# Switch to systemd-networkd
sudo systemctl disable --now NetworkManager
sudo systemctl mask NetworkManager
sudo systemctl enable --now systemd-networkd
```

- Paso 2: Habilitar alimentación automática para PoE (GPIO)
Añade los siguientes comandos a `/etc/rc.local` antes de la línea `exit 0` para asegurarte de que la alimentación PoE se habilite al arrancar.

```bash
# Export and set PoE Enable Pin (Example: GPIO 532)
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

- Paso 3: Despliegue de IP multi-interfaz
Asigna subredes independientes a cada puerto y utiliza **RouteMetric** para garantizar que `eth0` siga siendo la puerta de enlace predeterminada para el acceso a Internet.

```bash
# Configure eth0 (WAN/DHCP) - Highest Priority
sudo bash -c 'cat > /etc/systemd/network/10-eth0.network <<EOF
[Match]
Name=eth0
[Network]
DHCP=yes
[DHCPv4]
RouteMetric=10
EOF'

# Configure eth1-eth4 (Static IP Segments)
for i in {1..4}; do
sudo bash -c "cat > /etc/systemd/network/20-eth$i.network <<EOF
[Match]
Name=eth$i
[Network]
Address=10.0.$((i+2)).10/24
[IPv4]
RouteMetric=$((100+i))
EOF"
done
```

4. Verificación y resolución de problemas

- Comprobar conectividad del bus
Utiliza `lspci` y `lsusb` para verificar que todos los controladores sean reconocidos por el sistema:
* **Puertos extendidos PCIe (eth2-4)**: Ejecuta `lspci | grep Ethernet`
* **Puerto extendido USB (eth1)**: Ejecuta `lsusb -t` y busca el controlador `lan78xx`.



5. Preguntas frecuentes (FAQ)
* **P: ¿Por qué mi cámara se reinicia constantemente?**
    * R: Comprueba si el consumo de energía de la cámara supera los **12W**. Las cámaras PTZ de alta potencia o aquellas con iluminadores IR potentes pueden superar este límite.
* **P: ¿Puedo usar entrada de 12V DC para PoE?**
    * R: Sí. El circuito interno elevará 12V a 48V. Sin embargo, asegúrate de que tu fuente de alimentación de 12V pueda manejar una corriente alta, ya que la pérdida de conversión es mayor a voltajes de entrada más bajos.
* **P: El nombre de la interfaz no es eth1-4.**
    * R: Utiliza `ip link` para encontrar el nombre real del kernel (por ejemplo, `enp1s0`) y actualiza el campo `Name=` en tus archivos `.network`.

6. Estado de compatibilidad con cámaras PoE de 4 canales：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

### reComputer R22 y reCamera

Esta guía proporciona un recorrido paso a paso para conectar una reCamera — una cámara de IA modular y de código abierto basada en la plataforma RISC-V y diseñada para un rápido despliegue de Edge AI — al reComputer R22 a través de PoE. Cubre el despliegue de un flujo RTSP usando Node-RED y la previsualización de la transmisión en vivo en el R22.

1. Conexión de hardware e inicialización

  * **Modelos compatibles:** serie reCamera (versión PoE, por ejemplo, LH-AR01).
  * **Conexión física:** Conecta la reCamera a cualquier puerto PoE (**eth1-eth4**) en el R22 usando un cable Ethernet estándar.
  * **Habilitar alimentación PoE:**
    Ejecuta los siguientes comandos en la terminal del R22 para habilitar la salida de 48V:
    ```bash
    # Enable GPIO 652
    echo 652 > /sys/class/gpio/export
    echo out > /sys/class/gpio/652/direction
    echo 1 > /sys/class/gpio/652/value
    ```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/ip.png" style={{width:800, height:'auto'}}/></div>

2. Configuración de reCamera (importación de Node-RED con un clic)

Utiliza el `flows.json` preconfigurado para desplegar rápidamente un flujo RTSP autenticado.

- **Acceder al panel:** Abre tu navegador y ve a `http://10.0.3.200:1880` (IP predeterminada de reCamera).
- **Importar configuración:**
      * Haz clic en el icono de menú `≡` en la esquina superior derecha -\> **Import**.
      * Sube el archivo [**flows.json**](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/flows.json) y haz clic en **Import**.
- **Autenticación personalizada (obligatoria):**
      * Haz doble clic en el nodo **`RTSP Output`** en el flujo.
      * En la sección **Authentication**, establece tus credenciales:
          * **Username:** `seeed`
          * **Password:** `seeed`
- **Desplegar:** Haz clic en el botón rojo **Deploy** en la esquina superior derecha.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/config.png" style={{width:800, height:'auto'}}/></div>

3. Previsualización del flujo de video en el R22

Dado que el R22 (basado en CM4/CM5) admite decodificación por hardware, recomendamos usar VLC o FFplay para la verificación.

4. Opción A: Usar la interfaz gráfica de VLC (recomendado)

- Escribe `vlc` en la terminal del R22 para abrir el reproductor.
- Ve a **Media** -\> **Open Network Stream**.
- Introduce la URL RTSP autenticada:
    ```text
    rtsp://seeed:seeed@10.0.3.200:554/live
    ```
- Haz clic en **Play**.

5. Opción B: Usar la línea de comandos (prueba rápida)

Copia y ejecuta directamente el siguiente comando:

```bash
ffplay -fflags nobuffer -flags low_delay rtsp://seeed:seeed@10.0.3.200:554/live
```

-----

6. Resolución de problemas

| Problema | Causa potencial | Solución |
| :--- | :--- | :--- |
| **No se puede hacer ping a 10.0.3.200** | Conflicto de IP interna del R22 | Comprueba si `eth3/eth4` usan ambos `10.0.3.10`. Cambia uno manualmente. |
| **reCamera no arranca** | Alimentación PoE no habilitada | Asegúrate de que `GPIO 652` esté establecido en `1` y que la potencia de entrada sea \> 12V/3A. |
| **Retraso/latencia de video** | Problemas de red o MTU | Asegúrate de que no haya tráfico de difusión intenso entre el R22 y la reCamera. |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/recamera.png" style={{width:800, height:'auto'}}/></div>



## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
