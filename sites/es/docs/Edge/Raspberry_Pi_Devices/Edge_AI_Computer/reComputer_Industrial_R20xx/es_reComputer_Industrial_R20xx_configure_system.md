---
description: Aprende cómo configurar y probar componentes de hardware en la serie reComputer Industrial R20xx después de instalar dispositivos. Esta wiki cubre mapeo GPIO, pruebas de LED de usuario, comunicación SPI, escaneo Wi-Fi y Bluetooth, LoRa®, 5G, 4G, Zigbee sobre Mini-PCIe, RS485, RS232, pruebas DI/DO y UPS para apagado seguro.
title: Configurar reComputer Industrial R20xx
keywords:
  - Raspberry pi
  - Edge Controller
  - reComputer Industrial R20xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg
slug: /recomputer_industrial_r20xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-09-29'
updatedAt: '2025-11-26'
url: https://wiki.seeedstudio.com/es/recomputer_industrial_r20xx_configure_system/
---

## Descripción General

Aprende cómo configurar y probar componentes de hardware en la serie reComputer Industrial R20xx después de instalar dispositivos. Esta wiki cubre mapeo GPIO, pruebas de LED de usuario, comunicación SPI, escaneo Wi-Fi y Bluetooth, LoRa®, 4G, 5G, Zigbee sobre Mini-PCIe, RS485, RS232, pruebas DI/DO, UPS para apagado seguro y más.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Consultar Mapeos y Desplazamientos GPIO

Para consultar mapeos y desplazamientos GPIO, sigue estos pasos:

1. Copia y pega el siguiente comando para consultar mapeos GPIO:

```bash
cat /sys/kernel/debug/gpio
```

**Este comando mostrará mapeos y desplazamientos GPIO**, proporcionando información esencial para depurar o configurar pines GPIO.

## Pruebas de LED de Usuario

Proporcionamos LEDs en tres colores: rojo, azul y verde para que los usuarios los utilicen. Puedes ingresar al directorio /sys/class/leds/ para ver:

**1. Navegar al directorio LED**  

```bash
cd /sys/class/leds/
ls
```

Usa el siguiente comando para encender el LED del color correspondiente.

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

Esto **encenderá** el LED correspondiente.

**3. Apagar LEDs (opcional)**  
Para **apagar** un LED específico, usa:

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## Pruebas de Comunicación SPI

Para probar la comunicación SPI cortocircuitando los pines MISO y MOSI del módulo TPM, sigue estos pasos:

1. Clona el repositorio spidev-test:

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. Navega al directorio spidev-test:

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

Este comando prueba la comunicación SPI en el dispositivo SPI especificado (**/dev/spidev10.0**) con salida detallada ( -v ) y envía el mensaje "hello" (**-p hello**).
Al cortocircuitar los pines MISO y MOSI del módulo TPM, estás creando efectivamente un escenario de bucle de retorno, donde los datos enviados en MOSI se reciben en MISO. Esta configuración te permite probar la comunicación SPI sin un dispositivo real conectado.

## Escaneo Wi-Fi

Para listar las redes Wi-Fi disponibles y sus detalles, ejecuta:  

```bash
sudo iwlist wlan0 scan
```

- Este comando escanea todas las redes Wi-Fi cercanas y muestra sus SSIDs, intensidad de señal y tipo de cifrado.  

## Escaneo Bluetooth  

Para escanear dispositivos Bluetooth, sigue estos pasos:  

**Abrir la interfaz de control Bluetooth:**  

```bash
sudo bluetoothctl
```

Este comando abrirá la interfaz de control Bluetooth. Desde allí, puedes ejecutar comandos adicionales para escanear dispositivos Bluetooth cercanos.

**Habilitar escaneo:**  

```bash
scan on
```

Este comando iniciará el escaneo de dispositivos Bluetooth cercanos. Luego puedes usar otros comandos dentro de la interfaz ***bluetoothctl*** para interactuar con dispositivos Bluetooth, como emparejar o conectarte a ellos.

## LoRa® sobre Mini-PCIe

### Configuración LoRa® SPI  

Después de instalar el LoRa® SPI en la ranura Mini-PCIe 2, puedes configurar LoRa® SPI, sigue estos pasos:

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
Presiona **ctrl+x** para salir, presiona **y** para guardar cambios, y luego presiona **Enter** para regresar a la página de línea de comandos.

4. 4.Agrega el archivo packet_forwarder/reset_lgw.sh:

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

Agrega el código de ejecución:

```bash
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=623    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

Presiona **ctrl+x** para salir, presiona **y** para guardar cambios, y luego presiona **Enter** para regresar a la página de línea de comandos.

5. Modifica el código de configuración:

```bash
sudo vim ./tools/reset_lgw.sh
```

Actualiza las configuraciones de pines:

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Comenta las líneas 18, 29, 35, 42, 53 y 54 respectivamente:

```bash
......
# echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
......
# echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
......
# echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."
......
# echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
# echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
```

Presiona  ctrl+x  para salir, presiona  y  para guardar cambios, y luego presiona  Enter  para regresar a la página de línea de comandos.

6. reemplaza el puerto SPI predeterminado del Módulo LoraWAN® en el archivo de configuración global_conf.json.sx1250.US915 (Los archivos de configuración se seleccionan según el módulo que estés usando):

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

Modifica el parámetro com_path, cambia  ***"com_path": "/dev/spidev0.0"*** a  ***"com_path": "/dev/spidev2.0"***.

7. Compila el código:

```bash
sudo make
```

Estos pasos configurarán LoRa® SPI y ejecutarán el reenviador de paquetes con el archivo de configuración especificado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### Configuración LoRa® USB

Para LoRa® USB, los comandos anteriores siguen siendo los mismos que para LoRa® SPI. Sin embargo, el comando final necesita cambiarse a:

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

Este comando especifica el archivo de configuración que se utilizará para LoRa® USB.

## 5G Celular sobre M.2 B-KEY

Para interactuar con un módulo 5G/4G usando comandos AT a través de minicom, sigue estos pasos:

1. Crea un nuevo archivo power_5g.sh:

```bash
nano power_5g.sh
```

Abre con sudo nano e ingresa el siguiente comando, luego presiona ***ctrl+x*** para guardar y salir.

```bash
#!/bin/bash

RESET_PIN=645
POWER_PIN=639

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

2. Ejecutar el archivo:

```bash
sudo ./power_5g.sh
```

Después de 10-15 segundos (el módulo tarda un tiempo en encenderse y enumerar USB), verificar si aparece el nodo del dispositivo:

```bash
ls /dev/ttyUSB*
```

Salida /dev/ttyUSB0, etc.:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
Abrir minicom con el puerto serie y la velocidad de baudios apropiados:

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Este comando abre minicom con el puerto serie especificado (***/dev/ttyUSB2***) a una velocidad de baudios de 115200.

1. Una vez que minicom esté abierto, puedes comenzar a enviar comandos AT al módulo 4G. Por ejemplo:

```bash
AT
```

Este comando verifica si el módulo responde. Deberías recibir una respuesta ***"OK"*** si el módulo está funcionando correctamente.

2. Para marcar un número de teléfono usando el módulo 4G, puedes usar el comando ATD seguido del número de teléfono:

```bash
ATD<phone_number>;
```

Reemplaza **phone_number** con el número de teléfono deseado que quieres marcar.
Asegúrate de incluir un punto y coma ; al final del comando para indicar el final del número de teléfono.

## 4G Celular sobre Mini-PCIe

Crear un nuevo archivo power_4g.sh:

```bash
sudo nano power_4g.sh
```

Abrir con sudo nano e introducir el siguiente comando, luego presionar ctrl+x para guardar y salir.

```bash
# SIM_MUX_SEL
echo  643  >  export
echo  out  >  gpio643/direction
echo  0  >  gpio643/value
```

Ejecutar el archivo:

```bash
sudo ./power_4g.sh
```

Después de 10-15 segundos (el módulo tarda un tiempo en encenderse y enumerar USB), verificar si aparece el nodo del dispositivo:

```bash
ls /dev/ttyUSB*
```

Salida /dev/ttyUSB0.
Confirmar la acción real del GPIO:

```bash
cat /sys/class/gpio/gpio645/value # should be 0
cat /sys/class/gpio/gpio639/value # should be 0
```

Ambos valores son 0 → el script se ha bajado correctamente y el módulo está en estado de funcionamiento.
Entrar a minicom para enviar comandos:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

● Presionar ***Ctrl+A,Z,E*** en secuencia. Primero enviar AT para probar si está conectado. Si aparece OK, la conexión es exitosa.
Después de ejecutar el siguiente comando, el módulo se reiniciará automáticamente. Si no sales de minicom, puedes ver la información de configuración correspondiente.
Acceso a Internet por marcado ECM:

```bash
AT+QCFG="usbnet",1
```

Hasta que la última línea muestre OK, será exitoso.

> Nota
> El dispositivo necesita esperar un tiempo, y luego puedes ver la dirección IP de usb0 en ifconfig.

Probar el estado de la red y la comunicación:

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Zigbee sobre Mini-PCIe

Para probar la **comunicación Zigbee** entre dos módulos Zigbee, sigue estos pasos:  

1. Verificar Puertos Serie Disponibles

Usa el siguiente comando para verificar los puertos serie disponibles:

```bash
cat /dev/ttyUSB*
```

**Instalar una Herramienta de Comunicación Serie**

2. Instalar Herramienta de Comunicación Serie:

```bash
sudo apt-get install cutecom
```

3. Abrir Puerto Serie para Coordinador (Primer Módulo Zigbee):

- Abrir la herramienta cutecom y configurarla para el primer puerto serie:
- Velocidad de baudios: ***115200***
- Marcar la opción ***"Hex output"*** en la parte inferior de la interfaz.
- Seguir estos pasos para configurar el primer módulo Zigbee:
- Establecer como coordinador: Enviar comando ***'55 04 00 05 00 05'***, esperar respuesta ***'55 04 00 05 00 05'***.
- Reiniciar dispositivo: Presionar botón de reinicio o enviar comando ***'55 07 00 04 00 FF FF 00 04'***.
- Formación de red: Enviar comando ***'55 03 00 02 02'***.

4. Abrir Puerto Serie para Router (Segundo Módulo Zigbee):
Abrir otra instancia de ***cutecom*** y configurarla para el segundo puerto serie con la misma configuración que antes.
Seguir estos pasos para configurar el segundo módulo Zigbee:

- Establecer como router: Enviar comando ***'55 04 00 05 01 04'***, esperar respuesta ***'55 04 00 05 00 05'***.
- Reiniciar dispositivo: Presionar botón de reinicio o enviar comando ***'55 07 00 04 00 FF FF 00 04'***.
- Formación de red: Enviar comando ***'55 03 00 02 02'***.

5. Verificar Estado del Dispositivo:
Enviar comando ***'55 03 00 00 00'*** para verificar el estado del dispositivo. Esperar una respuesta similar a ***'55 2a 00 00 00 01 XX XX XX XX'***, donde 'XX' representa información del dispositivo.
6. Entrar en Modo Transparente:
Si la formación de red es exitosa, entrar en modo transparente enviando el comando ***55 07 00 11 00 03 00 01 13***. Ambos módulos deben estar en modo transparente para comunicación directa. Para salir del modo transparente, enviar "+++".
7. Notas Adicionales:

- Si la configuración del router falla, el dispositivo puede ya ser un coordinador. Salir de la red usando el comando '55 07 00 04 02 xx xx xx'.
- Probar la potencia de transmisión usando los comandos '55 04 0D 00 00 0D' (consulta) y '55 04 0D 01 XX XX' (establecer).
Asegúrate de reemplazar ***/dev/ttyUSB*** con el puerto serie correcto para cada módulo Zigbee. Sigue estos pasos cuidadosamente para probar la comunicación Zigbee entre los dos módulos exitosamente.

## Pruebas RS485

El reComputer Industrial R20xx incluye **tres puertos RS485**. A continuación se muestran sus **puertos COM** y **archivos de dispositivo** correspondientes:  

| **Número de Puertos RS485** | **Puerto COM** | **Etiqueta Serigrafía** | **Archivo de Dispositivo** |
|------------------------------|----------------|-------------------------|----------------------------|
| **RS485-2**                  | COM2           | A2/B2/GND2              | `/dev/ttyACM1`             |
| **RS485-3**                  | COM3           | A3/B3/GND3              | `/dev/ttyACM2`             |
| **RS485-4**                  | COM4           | A4/B4/GND4              | `/dev/ttyACM3`             |

Para probar la función RS485, puedes seguir los pasos a continuación (tomando RS485_1 y RS485_2 como ejemplos):

1. Por favor conecta A y B de RS485_1 y RS485_2.
2. Abrir minicom en dos ventanas de terminal respectivamente:

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 Si hay una placa de expansión, el número necesita moverse hacia atrás un lugar, por ejemplo ***/dev/ttyAcM2***, ***/dev/ttyAcM3***.
:::

3. Las siguientes operaciones necesitan realizarse en ambos ACMs abiertos:

- Presionar ***Ctrl+A***, luego presionar ***Z***, y aparecerá la interfaz de Resumen de Comandos de Minicom:
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- Presionar ***O*** nuevamente para abrir la configuración, seleccionar Serial port setup, y presionar ***Enter***; Abrir todas las interfaces relacionadas con RS485, presionar ***H/I/J/K/L*** en secuencia para abrir;
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- Después de que todos los "YES" se muestren, presionar Enter para regresar, y luego seleccionar Exit para salir.

:::note

Tomando ACM2 y ACM3 como ejemplo:
Si quieres enviar desde ACM2 a ACM3, ACM2 necesita configurarse nuevamente: ***ctrl+A***, luego presionar ***Z*** y luego ***E***, y luego iniciar el comando de escritura del puerto serie. En este momento, puedes imprimir cadenas en ACM2 a voluntad, y puedes ver el contenido de ACM2 en ACM3 al mismo tiempo;
Por el contrario, si quieres enviar desde ACM3 a ACM2, ACM3 necesita configurarse nuevamente: ***ctrl+A***, luego presionar ***Z*** y luego ***E***, y luego iniciar el comando de escritura del puerto serie. En este momento, puedes imprimir cadenas en ACM3 a voluntad, y puedes ver el contenido de ACM3 en ACM2 al mismo tiempo. Como se muestra en la figura.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## Pruebas RS232

reComputer Industrial R20xx incluye 1x puerto RS232, y los puertos COM correspondientes y archivos de dispositivo son los siguientes:

| **Número de Puertos RS232** | **Puerto COM** | **Etiqueta Serigrafía** | **Archivo de Dispositivo** |
|------------------------------|----------------|-------------------------|----------------------------|
| **RS232-1**                  | COM1           | RX1/TX1/GND1            | `/dev/ttyACM0`             |

Debido a que RS232 es comunicación full-duplex, cortocircuita directamente TX y RX de RS232 para realizar una prueba de bucle de retorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.12_rs232_testing_1.png" style={{width:800, height:'auto'}}/></div>

Necesitas abrir dos terminales, ACM1 si la placa de expansión está conectada, y ACM2 si la placa de expansión no está conectada:
**Terminal 1:***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

Si la placa de expansión no está conectada, necesitas cambiar ***/dev/ttyACM1*** a ***/dev/ttyACM0***.

**Terminal 2:**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

Terminal 1 mostrará el contenido solicitado por Terminal 2 para ser impreso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.12_rs232_testing_2.png" style={{width:800, height:'auto'}}/></div>

## Pruebas DI (Entrada Digital)

reComputer Industrial R20xx contiene 8x puertos DI, el usuario puede configurar estos puertos según las necesidades reales.

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
        <td rowspan="8">8</td>
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
      <tr>
        <td>DI5</td>
        <td>GPIO573</td>
      </tr>
      <tr>
        <td>DI6</td>
        <td>GPIO574</td>
      </tr>
      <tr>
        <td>DI7</td>
        <td>GPIO575</td>
      </tr>
      <tr>
        <td>DI8</td>
        <td>GPIO576</td>
      </tr>
    </tbody>
  </table>
</div>

El tipo de entrada de los puertos DI es PNP. Soporta voltaje de entrada de 5VDC~24VDC, corriente - 1000mA.
Para probar la funcionalidad de DI, puedes seguir estos pasos para probarlo:

1. La conexión entre el puerto DI del reComputer Industrial R20xx y la carga externa ha sido completada.
2. Ingresa el siguiente comando para obtener el estado del GPIO：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. Cuando el nivel externo es alto, el valor de ***/sys/class/gpio/gpio588/value*** es 0; cuando el nivel externo es bajo, ***/sys/class/gpio/gpio588/value*** es 1.

## DO (Salida Digital)

reComputer Industrial R20xx contiene 8x puertos DO, el usuario puede configurar estos puertos según las necesidades reales.

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
        <td rowspan="8">8</td>
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
      <tr>
        <td>DO6</td>
        <td>GPIO577</td>
      </tr>
      <tr>
        <td>DO7</td>
        <td>GPIO594</td>
      </tr>
      <tr>
        <td>DO8</td>
        <td>GPIO596</td>
      </tr>
    </tbody>
  </table>
</div>

El tipo de salida de los puertos DO es transistor. Soporta voltaje de salida - bajo 60 VDC, capacidad de corriente - 500 mA.
Para probar la funcionalidad de DO, puedes seguir estos pasos para probarlo:

1. La conexión entre el puerto DO del reComputer Industrial R20xx y la carga externa ha sido completada.
2. Ingresa el siguiente comando para establecer la salida a nivel alto o nivel bajo：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. Cuando el nivel externo es alto, el valor de  /sys/class/gpio/gpio638/value   es 0; cuando el nivel externo es bajo,  /sys/class/gpio/gpio638/value  es 1.

## Prueba del Hub USB

Para probar el hub USB, puedes usar los siguientes pasos:

1. Verifica si el hub USB es detectado ejecutando el comando ***lsusb***. Este comando lista todos los dispositivos USB conectados, incluyendo hubs.

```bash
lsusb
```

Ejecutar este comando debería mostrar información sobre los dispositivos USB conectados a tu sistema, incluyendo cualquier hub USB que esté presente.
Si el hub USB está funcionando correctamente, deberías ver sus detalles listados en la salida del comando lsusb. Si no está listado, puede haber un problema con el hub o su conexión al sistema. En tales casos, puede que necesites solucionar problemas del hub USB o sus conexiones.

## Prueba del RTC (Reloj de Tiempo Real)

Para probar la funcionalidad del Reloj de Tiempo Real (RTC), sigue estos pasos:

1. Deshabilita la sincronización automática de tiempo:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Establece la hora:
Establece el RTC a una fecha y hora específica:

```bash
sudo hwclock --set --date "2025-7-17 12:00:00"
```

3. Sincroniza la Hora del RTC al Sistema
Actualiza la hora del sistema para que coincida con la hora del RTC:  

```bash
sudo hwclock --hctosys
```

4. Verifica la hora del RTC:

```bash
sudo hwclock -r
```

Este comando leerá y mostrará la hora almacenada en el RTC.

5. Desconecta la fuente de alimentación del RTC, espera unos minutos, luego reconéctala y verifica la hora del RTC nuevamente para ver si mantuvo la hora correcta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1.png" style={{width:800, height:'auto'}}/></div>

## Prueba del Temporizador Watchdog

Para realizar una prueba de watchdog, sigue estos pasos:

1. Instala el software watchdog:

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

Puedes ajustar otras configuraciones según sea necesario.

3. Asegúrate de que el servicio watchdog esté ejecutándose:

```bash
sudo systemctl start watchdog
```

4. Para probar la funcionalidad del watchdog, ejecuta el siguiente comando para simular un cuelgue del sistema:

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

Este comando desencadena un fallo del kernel y debería hacer que el watchdog reinicie el sistema.

5. Monitorea el sistema para confirmar que se reinicia después del período de tiempo de espera especificado.
Estos pasos te ayudarán a probar y asegurar la funcionalidad del temporizador watchdog en tu sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## Controlando el Zumbador vía GPIO  

El GPIO correspondiente al zumbador es gpio627. Ingresa el siguiente script para encender/apagar el zumbador :

1. Encender el zumbador :

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. Apagar el zumbador :Apagar el zumbador :

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

Si conectas el módulo TPM 2.0 al dispositivo, el siguiente código puede ayudar a verificar la conexión TPM.

```bash
ls /dev | grep tpm
```  

**Interpretando la Salida:**  

Si ves ***tpm0*** y ***tpmrm0*** en la salida, significa que los dispositivos TPM (Módulo de Plataforma Confiable) son detectados y están disponibles en tu sistema. Esto indica que el hardware TPM es reconocido y accesible, lo cual es una buena señal. Puedes proceder con el uso de funcionalidades o aplicaciones relacionadas con TPM sabiendo que los dispositivos están presentes y accesibles.

## ATECC608A

Para interactuar con el dispositivo ATECC608A y generar un número de serie aleatorio, sigue estos pasos:

1. Clona el Repositorio atecc-util:

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. Extrae el contenido del paquete .deb al directorio actual:

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. Navega al Directorio atecc:

```bash
cd usr/bin
```

4. Genera un Número de Serie Aleatorio:

```bash
./atecc -b 10 -s 192 -c 'serial'
```

Este comando instruye a la utilidad ATECC para usar el slot 10 (-b 10), establecer el tamaño del número de serie a 192 bits ***(-s 192)***, y generar un número de serie aleatorio ***(-c 'serial')***. La salida será el número de serie generado, como ***"01235595d3d621f0ee"***.
Este proceso te permite interactuar con el dispositivo ATECC608A y realizar varias operaciones, como generar números de serie aleatorios.

## Interactuando con EEPROM

Aquí están los comandos para interactuar con una EEPROM (Memoria de Solo Lectura Programable Eléctricamente Borrable):

1. Otorga permisos completos (lectura, escritura y ejecución) al archivo del dispositivo EEPROM:

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. Escribe la cadena "This is a test string" al dispositivo EEPROM:

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. Lee el contenido del dispositivo EEPROM y lo muestra en formato ***hexadecimal*** usando la utilidad hexdump:

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Verificando la Detección del SSD

Para listar los discos, incluyendo el SSD, puedes usar el comando fdisk -l. Así es como:

```bash
sudo fdisk -l
```

Este comando mostrará una lista de todos los discos conectados a tu sistema, incluyendo el SSD si está detectado correctamente. Busca entradas que representen tu SSD. Típicamente comienzan con ***/dev/sd*** seguido de una letra (ej. ***/dev/sda, /dev/sdb,*** etc.).
Una vez que identifiques la entrada correspondiente a tu SSD, puedes proceder con particionarlo o formatearlo según sea necesario.

## UPS para Apagado Seguro

Un GPIO6 entre la CPU y la entrada de alimentación DC se usa para alarmar a la CPU cuando la fuente de alimentación se cae. Entonces la CPU debería hacer algo urgente en un script antes del agotamiento de energía del supercapacitor y ejecutar un "$ shutdown".
Otra forma de usar esta función es Iniciar un apagado cuando el pin GPIO cambia. El pin GPIO dado se configura como una tecla de entrada que genera eventos KEY_POWER. Este evento es manejado por systemd-logind iniciando un apagado.

1. Conexión de hardware.

Por favor asegúrate de que el pin ***'CM5_UPS_DET'*** del dispositivo UPS esté conectado al pin GPIO16 del dispositivo R20xx.

2. Modificar el archivo de configuración.

- Abrir la terminal.
- Ejecutar el siguiente comando para editar el archivo de configuración:

```bash
sudo nano /boot/firmware/config.txt
```

3. Agregar el siguiente contenido al final del archivo:

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

Guardar y salir del editor (presionar ***`Ctrl+O`*** para guardar, ***`Enter`*** para confirmar, y ***`Ctrl+X`*** para salir).

4. Preparar el script de Python

- Crear un nuevo archivo de script de Python:

```bash
cd ~
sudo nano ups_shutdown.py
```

- Copiar y pegar el siguiente código en el archivo:

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

Guardar y salir del editor (presionar ***`Ctrl+O`*** para guardar, ***`Enter`*** para confirmar, y ***`Ctrl+X`*** para salir).

5. Ejecutar el script.

- Abrir la terminal.
- Ejecutar el siguiente comando para ejecutar el script:

```bash
sudo python3 ups_shutdown.py
```

:::note
 Usar `sudo` para asegurar que el script tenga permisos suficientes para ejecutar el comando de apagado.
:::

6. Simular prueba de falla de energía

- Cortar la fuente de alimentación externa.
- Observar si el sistema guarda automáticamente los datos y se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. Verificar el resultado

- Reconectar la fuente de alimentación.
- Verificar si los datos del sistema están completos y se inicia normalmente.

:::note

1. Para la función UPS, por favor contáctanos para más información.
2. La señal de alarma es activa en BAJO.

:::

## Acelerador de IA

La ranura M.2 M-KEY 2280 en el reComputer Industrial R20xx está diseñada para acomodar un Acelerador de IA PCIE M.2. Y la serie R20xx-12 ha sido preinstalada con un Hailo-8 M.2 de Aceleración de IA de hasta 26TOPS.
Si compraste el producto de la serie R20xx-10, necesitarás comprar el módulo NPU de Hailo para habilitar la funcionalidad de IA.
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

Para cerrar la aplicación, presionar ***`Ctrl+C`*** .
Esta es una versión ligera del ejemplo de detección, enfocándose principalmente en demostrar el rendimiento de Hailo mientras minimiza la carga de CPU. El pipeline interno de procesamiento de video GStreamer está simplificado minimizando las tareas de procesamiento de video, y se utiliza el modelo YOLOv6 Nano.

:::note
Si el reComputer que compraste no incluye Hailo-8 y estás considerando comprar un dispositivo Hailo para integración, por favor consulta la documentación oficial de Hailo (https://github.com/hailo-ai) para configurar el firmware y el entorno, y ejecutar los ejemplos para verificar que el dispositivo pueda usarse normalmente.
:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
