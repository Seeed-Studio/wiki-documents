---
description: El reComputer Industrial R22xx es un NVR de grado industrial impulsado por IA, basado en Raspberry Pi CM5 y equipado con un acelerador de IA Hailo-8 que ofrece hasta 26 TOPS. Con 4 puertos Ethernet Gigabit con soporte PoE PSE más un puerto Ethernet Gigabit adicional, permite transmisión de video de gran ancho de banda y un despliegue PoE simplificado para cámaras IP. Ofrece abundantes E/S industriales, conectividad inalámbrica flexible, diseño térmico sin ventilador y un amplio rango de temperatura de funcionamiento de –20 °C a 50 °C, garantizando analítica de video con IA confiable y operación continua y estable en escenarios exigentes.
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
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_configure_system/
---

## Descripción general

Aprende cómo configurar y probar los componentes de hardware en la serie reComputer Industrial R22xx después de instalar los dispositivos. Este wiki cubre el mapeo de GPIO, prueba del LED de USUARIO, comunicación SPI, escaneo de Wi‑Fi y Bluetooth, LoRa®, 4G, 5G, Zigbee sobre Mini-PCIe, RS485, RS232, CAN, prueba de DI/DO, UPS para apagado seguro y más.

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

## Prueba de la comunicación SPI

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

## Escaneo de Wi‑Fi

Para listar las redes Wi‑Fi disponibles y sus detalles, ejecuta:  

```bash
sudo iwlist wlan0 scan
```

- Este comando escanea todas las redes Wi‑Fi cercanas y muestra sus SSID, intensidad de señal y tipo de cifrado.  

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

4. 4.Agrega el archivo packet_forwarder/reset_lgw.sh:

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

Agrega el código de ejecución:

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

Cambia "com_path": "/dev/spidev0.0" por "com_path": "/dev/spidev2.0".

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

## Red celular 5G sobre M.2 B-KEY

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

Sustituye **phone_number** por el número de teléfono al que deseas llamar.
Asegúrate de incluir un punto y coma ; al final del comando para indicar el final del número de teléfono.

## Red celular 4G sobre Mini-PCIe

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

Será correcto cuando la última línea muestre OK.

> Nota
> El dispositivo necesita esperar un rato y luego podrás ver la dirección IP de usb0 en ifconfig.

Probar el estado de la red y la comunicación：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Zigbee sobre Mini-PCIe

Para probar la **comunicación Zigbee** entre dos módulos Zigbee, sigue estos pasos:  

1. Comprobar los puertos serie disponibles

Utiliza el siguiente comando para comprobar los puertos serie disponibles:

```bash
cat /dev/ttyUSB*
```

**Instalar una herramienta de comunicación serie**

2. Instalar la herramienta de comunicación serie:

```bash
sudo apt-get install cutecom
```

3. Abrir el puerto serie para el coordinador (primer módulo Zigbee):

- Abre la herramienta cutecom y configúrala para el primer puerto serie:
- Velocidad en baudios: ***115200***
- Marca la opción ***"Hex output"*** en la parte inferior de la interfaz.
- Sigue estos pasos para configurar el primer módulo Zigbee:
- Establecer como coordinador: Envía el comando ***‘55 04 00 05 00 05’***, espera la respuesta ***‘55 04 00 05 00 05’***.
- Reiniciar dispositivo: Pulsa el botón de reinicio o envía el comando ***‘55 07 00 04 00 FF FF 00 04’***.
- Formación de red: Envía el comando ***‘55 03 00 02 02’***.

4. Abrir el puerto serie para el router (segundo módulo Zigbee):
Abre otra instancia de ***cutecom*** y configúrala para el segundo puerto serie con los mismos ajustes que antes.
Sigue estos pasos para configurar el segundo módulo Zigbee:

- Establecer como router: Envía el comando ***‘55 04 00 05 01 04’***, espera la respuesta ***‘55 04 00 05 00 05’***.
- Reiniciar dispositivo: Pulsa el botón de reinicio o envía el comando ***‘55 07 00 04 00 FF FF 00 04’***.
- Formación de red: Envía el comando ***‘55 03 00 02 02’***.

5. Comprobar el estado del dispositivo:
Envía el comando ***‘55 03 00 00 00’*** para comprobar el estado del dispositivo. Espera una respuesta similar a ***‘55 2a 00 00 00 01 XX XX XX XX’***, donde ‘XX’ representa la información del dispositivo.
6. Entrar en modo transparente:
Si la formación de red es correcta, entra en modo transparente enviando el comando ***55 07 00 11 00 03 00 01 13***. Ambos módulos deben estar en modo transparente para la comunicación directa. Para salir del modo transparente, envía "+++".
7. Notas adicionales:

- Si la configuración del router falla, es posible que el dispositivo ya sea un coordinador. Abandona la red usando el comando '55 07 00 04 02 xx xx xx'.
- Prueba la potencia de transmisión usando los comandos '55 04 0D 00 00 0D' (consulta) y '55 04 0D 01 XX XX' (ajuste).
Asegúrate de reemplazar ***/dev/ttyUSB*** con el puerto serie correcto para cada módulo Zigbee. Sigue estos pasos cuidadosamente para probar con éxito la comunicación Zigbee entre los dos módulos.

## Prueba de RS485

El reComputer Industrial R21xx incluye **2x puertos RS485**. A continuación se muestran sus correspondientes **puertos COM** y **archivos de dispositivo**:  

| **Número de puertos RS485** | **Puerto COM** | **Etiqueta serigrafiada** | **Archivo de dispositivo** |
|---------------------------|----------------|---------------------------|-----------------------------|
| **RS485-2**               | COM2           | A2/B2/GND3                | `/dev/ttyACM1`              |
| **RS485-3**               | COM3           | A3/B3/GND4                | `/dev/ttyACM2`              |

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

- Pulsa ***Ctrl+A***, luego pulsa ***Z***, y aparecerá la interfaz de resumen de comandos de Minicom:
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
|---------------------------|----------------|---------------------------|-----------------------------|
| **RS232-1**               | COM1           | RX1/TX1/GND1              | `/dev/ttyACM0`              |
| **RS232-2**               | COM2           | RX2/TX2/GND2              | `/dev/ttyACM1`              |

Dado que RS232 es comunicación full-dúplex, cortocircuita directamente el TX y RX de RS232 para realizar una prueba de bucle de retorno.

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

El tipo de entrada de los puertos DI es PNP. Admite tensión de entrada de 5VDC~24VDC, corriente - 1000mA.
Para probar la funcionalidad de DI, puedes seguir estos pasos para probarla:

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
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO5</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

El tipo de salida de los puertos DO es transistor. Admite tensión de salida inferior a 60 VDC, capacidad de corriente - 500 mA.
Para probar la funcionalidad de DO, puedes seguir estos pasos para probarla:

1. Se ha completado la conexión entre el puerto DO de reComputer Industrial R21xx y la carga externa.
2. Introduce el siguiente comando para establecer la salida en nivel alto o nivel bajo：

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

Dado que el reComputer Industiral R22xx está equipado solo con una única interfaz CAN, no puede realizar pruebas de bucle de retorno de forma independiente. Para verificar su funcionalidad de comunicación, se requiere un dispositivo par externo o un adaptador USB-a-CAN. Para esta prueba, el reComputer Industiral R21xx (que cuenta con interfaces CAN dobles) servirá como nodo par para establecer una conexión con el reComputer Industiral R22xx. Consulta el siguiente tutorial para conocer los esquemas de conexión específicos y los pasos de configuración:

1. Utiliza dos cables DuPont para hacer un cortocircuito entre H-H y L-L de can0 y can1 para formar una prueba de bucle mínimo.

```bash
CAN_H─────●───── CAN-H
CAN_L─────●───── CAN-L
G_CAN_H─────●───── G_CAN
```

2. Confirma que las dos interfaces de red can0 y can1 realmente aparecen en el sistema para evitar que el controlador no se cargue:

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



## Prueba del concentrador USB

Para probar el concentrador USB, puedes usar los siguientes pasos:

1. Comprueba si el concentrador USB es detectado ejecutando el comando ***lsusb***. Este comando lista todos los dispositivos USB conectados, incluidos los concentradores.

```bash
lsusb
```

Al ejecutar este comando se debería mostrar información sobre los dispositivos USB conectados a tu sistema, incluidos los concentradores USB presentes.
Si el concentrador USB funciona correctamente, deberías ver sus detalles listados en la salida del comando lsusb. Si no aparece en la lista, puede haber un problema con el concentrador o con su conexión al sistema. En tales casos, puede que necesites solucionar problemas del concentrador USB o de sus conexiones.

## Prueba del RTC (reloj en tiempo real)

Para probar la funcionalidad del reloj en tiempo real (RTC), sigue estos pasos:

1. Desactiva la sincronización automática de hora:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Ajusta la hora:
Configura el RTC a una fecha y hora específicas:

```bash
sudo hwclock --set --date "2025-10-23 16:00:00"
```

3. Sincronizar la hora del RTC con el sistema
Actualiza la hora del sistema para que coincida con la hora del RTC:  

```bash
sudo hwclock --hctosys
```

4. Comprueba la hora del RTC:

```bash
sudo hwclock -r
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

Este comando desencadena un fallo del kernel y debería hacer que el watchdog reinicie el sistema.

5. Supervisa el sistema para confirmar que se reinicia después del período de tiempo de espera especificado.
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

Si ves ***tpm0*** y ***tpmrm0*** en la salida, significa que los dispositivos TPM (Trusted Platform Module) se detectan y están disponibles en tu sistema. Esto indica que el hardware TPM es reconocido y accesible, lo cual es una buena señal. Puedes continuar usando funcionalidades o aplicaciones relacionadas con TPM sabiendo que los dispositivos están presentes y accesibles.

## ATECC608A

Para interactuar con el dispositivo ATECC608A y generar un número de serie aleatorio, sigue estos pasos:

1. Clona el repositorio atecc-util:

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. Extrae el contenido del paquete .deb en el directorio actual:

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. Navega al directorio atecc:

```bash
cd usr/bin
```

4. Genera un número de serie aleatorio:

```bash
./atecc -b 10 -s 192 -c 'serial'
```

Este comando indica a la utilidad ATECC que use la ranura 10 (-b 10), establezca el tamaño del número de serie en 192 bits ***(-s 192)*** y genere un número de serie aleatorio ***(-c 'serial')***. La salida será el número de serie generado, como ***"01235595d3d621f0ee"***.
Este proceso te permite interactuar con el dispositivo ATECC608A y realizar varias operaciones, como generar números de serie aleatorios.

## Interactuar con la EEPROM

Aquí están los comandos para interactuar con una EEPROM (memoria de solo lectura programable y borrable eléctricamente):

1. Concede permisos completos (lectura, escritura y ejecución) al archivo de dispositivo de la EEPROM:

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. Escribe la cadena "This is a test string" en el dispositivo EEPROM:

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. Lee el contenido del dispositivo EEPROM y lo muestra en formato ***hexadecimal*** usando la utilidad hexdump:

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Comprobación de la detección del SSD

Para listar los discos, incluido el SSD, puedes usar el comando fdisk -l. Así es como se hace:

```bash
sudo fdisk -l
```

Este comando mostrará una lista de todos los discos conectados a tu sistema, incluido el SSD si se detecta correctamente. Busca las entradas que representen tu SSD. Normalmente comienzan con ***/dev/sd*** seguido de una letra (por ejemplo, ***/dev/sda, /dev/sdb,*** etc.).
Una vez que identifiques la entrada correspondiente a tu SSD, puedes proceder a particionarlo o formatearlo según sea necesario.

## SAI para apagado seguro

Se utiliza un GPIO6 entre la CPU y la entrada de alimentación de CC para avisar a la CPU cuando se interrumpe la fuente de alimentación. Entonces la CPU debería hacer algo urgente en un script antes de que se agote la energía del supercondensador y ejecutar un "$ shutdown".
Otra forma de usar esta función es iniciar un apagado cuando cambie el pin GPIO. El pin GPIO dado se configura como una tecla de entrada que genera eventos KEY_POWER. Este evento es gestionado por systemd-logind iniciando un apagado.

1. Conexión de hardware.

Asegúrate de que el pin ***'CM5_UPS_DET'*** del dispositivo SAI esté conectado al pin GPIO16 del dispositivo R21xx.

2. Modifica el archivo de configuración.

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

4. Prepara el script de Python

- Crea un nuevo archivo de script de Python:

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

Guarda y sal del editor (presiona ***`Ctrl+O`*** para guardar, ***`Enter`*** para confirmar y ***`Ctrl+X`*** para salir).

5. Ejecuta el script.

- Abre la terminal.
- Ejecuta el siguiente comando para ejecutar el script:

```bash
sudo python3 ups_shutdown.py
```

:::note
 Usa `sudo` para asegurarte de que el script tenga permisos suficientes para ejecutar el comando de apagado.
:::

6. Simula una prueba de fallo de alimentación

- Corta la fuente de alimentación externa.
- Observa si el sistema guarda automáticamente los datos y se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. Verifica el resultado

- Vuelve a conectar la fuente de alimentación.
- Comprueba si los datos del sistema están completos y si se inicia con normalidad.

:::note

1. Para la función de UPS, ponte en contacto con nosotros para obtener más información.
2. La señal de alarma es activa en BAJO.

:::

## Acelerador de IA

La ranura M.2 M-KEY 2280 en el reComputer Industrial R21xx está diseñada para alojar un acelerador de IA PCIE M.2. Y la serie R21xx-12 viene preinstalada con una aceleradora de IA Hailo-8 M.2 de hasta 26TOPS.
Si compraste el producto de la serie R21xx-10, tendrás que adquirir el módulo NPU de Hailo para habilitar la funcionalidad de IA.
El dispositivo viene con el controlador del acelerador Hailo preinstalado, por lo que puedes usarlo directamente y ejecutar el caso de prueba:

1. Navega al directorio del caso de prueba

```bash
cd /mnt/hailo-rpi5-examples/
```

2. Inicia el entorno virtual

```bash
source ./setup_env.sh
```

3. Ejecuta el ejemplo de detección simple

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

Para cerrar la aplicación, presiona ***`Ctrl+C`*** .
Esta es una versión ligera del ejemplo de detección, centrada principalmente en demostrar el rendimiento de Hailo mientras se minimiza la carga de la CPU. La canalización interna de procesamiento de vídeo de GStreamer se simplifica minimizando las tareas de procesamiento de vídeo, y se utiliza el modelo YOLOv6 Nano.

:::note
Si el reComputer que compraste no incluye Hailo-8 y estás considerando adquirir un dispositivo Hailo para su integración, consulta la documentación oficial de Hailo (https://github.com/hailo-ai) para configurar el firmware y el entorno, y ejecutar los ejemplos para verificar que el dispositivo pueda utilizarse con normalidad.
:::

## Cámara IP PoE

:::note
- No se deben configurar los cuatro puertos Ethernet en el mismo segmento de red: hacerlo provocará conflictos de red y fallos de comunicación.
- Los puertos Ethernet no admiten conexión en caliente: debes apagar tanto la placa de desarrollo como las cámaras antes de conectar o desconectar los cables Ethernet; la conexión en caliente puede causar daños permanentes en el hardware de los puertos.
- Está estrictamente prohibida la fuente de alimentación externa para las cámaras IP: las cámaras deben alimentarse únicamente a través de PoE mediante el cable Ethernet; proporcionar alimentación externa adicional puede causar un retorno de corriente y dañar los puertos Ethernet de la placa de desarrollo.
:::

1. Conecta el cable de red e inicia el puerto de red:

```bash
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

2. Configura el puerto de red:

Se recomienda usar systemd-networkd para la gestión de red; la configuración no se perderá después de un reinicio y no habrá conflictos con otras herramientas de red. Los pasos se dividen en dos partes: "Pruebas y verificación temporales" y "Solidificación de la configuración permanente".

```bash
sudo systemctl enable --now systemd-networkd
sudo systemctl status systemd-networkd | grep -E 'active|error'
```
:::Note: Los puertos de red físicos corresponden a direcciones de puertos de red virtuales:
ETH0-eth0
ETH1-eth4
ETH2-eth3
ETH3-eth2
ETH4-eth1
:::

3. Usando eth1 como ejemplo, donde la dirección IP de la cámara IP es 10.0.3.200, el método de configuración del puerto de red es el siguiente:

- Configurar IP temporalmente:

```bash
# Clear existing IP on eth1 to avoid conflicts
sudo ip addr flush dev eth1

# Shut down the port and reconfigure
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# Verify IP configuration (should display inet 10.0.3.10/24)
ip addr show eth1 | grep inet

# Test connectivity with the camera (0% packet loss indicates normal status)
ping 10.0.3.200 -I eth1 -c 3
```

- Configurar IP permanentemente:

```bash
# Create the eth1 configuration file
sudo nano /etc/systemd/network/eth1.network

[Match]
Name=eth1 # Matches the interface name; replace if the actual name differs (e.g., enx00e04c68xxxx)

[Network]
Address=10.0.3.10/24 # Static IP and subnet mask
DHCP=no # Disable DHCP auto-acquisition
IPv6AcceptRA=no # Disable IPv6 to reduce interference

#[Link]
NamePolicy=kernel database onboard slot path # Maintain stable interface naming
```

- Guardar y salir: Presiona Ctrl+O → Enter para confirmar → Presiona Ctrl+X.

Otros puertos de red se configuran de la misma manera, admitiendo hasta 4 cámaras IP montadas simultáneamente. 
Ejemplo de cuatro configuraciones de cámaras IP, utilizando las relaciones de la siguiente tabla:

| Puerto Ethernet	| IP correspondiente de la cámara	| IP estática de la placa de desarrollo	| Usuario y contraseña de la cámara| 
| eth1	| 10.0.3.200	| 10.0.3.10	| admin & c32bdc3e| 
| eth2	| 10.0.2.200	| 10.0.2.10	| admin & c32bdc3e| 
| eth3	| 10.1.4.200	| 10.1.4.10	| admin & 9c7d1f96| 
| eth4	| 10.1.1.200	| 10.1.1.1	| admin & c32bdc3e  | 
Sigue los pasos anteriores para configurar cada segmento de red:

```bash
# ========== Batch Temporary Configuration for eth1-eth4 and Connectivity Testing ==========

# eth1 (Corresponding to camera 10.0.3.200)
sudo ip addr flush dev eth1
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# eth2 (Corresponding to camera 10.0.2.200)
sudo ip addr flush dev eth2
sudo ip link set eth2 down
sudo ip addr add 10.0.2.10/24 dev eth2
sudo ip link set eth2 up

# eth3 (Corresponding to camera 10.1.4.200)
sudo ip addr flush dev eth3
sudo ip link set eth3 down
sudo ip addr add 10.1.4.10/24 dev eth3
sudo ip link set eth3 up

# eth4 (Corresponding to camera 10.1.1.200)
sudo ip addr flush dev eth4
sudo ip link set eth4 down
sudo ip addr add 10.1.1.1/24 dev eth4
sudo ip link set eth4 up

# Verify IP configuration for all ports (should display the static IP for each port)
echo -e "\n==== IP Configuration Status for Each Port ===="
ip addr show | grep -E 'eth[1-4]|inet '

# Test connectivity with all cameras (0% packet loss indicates normal status)
echo -e "\n==== Connectivity Test for Each Camera ===="
ping 10.0.3.200 -I eth1 -c 3
ping 10.0.2.200 -I eth2 -c 3
ping 10.1.4.200 -I eth3 -c 3
ping 10.1.1.200 -I eth4 -c 3
```

Luego usa VLC para el acceso: 

```bash
vlc rtsp://admin:c32bdc3e@10.0.3.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.0.2.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:9c7d1f96@10.1.4.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.1.1.200/h264/ch1/main/av_stream --no-one-instance
```

Si necesitas cerrar todas las ventanas de las cámaras, ejecuta el siguiente comando:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

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
