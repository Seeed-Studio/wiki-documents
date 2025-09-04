---
description:   reTerminal E10-1
title:   reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalBridge
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# **Primeros pasos con reTerminal E10-1**

### **Materiales requeridos**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**Obtener UNO ahora**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**Obtener UNO ahora**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **Preparación preliminar**

#### **Conexión**

Observe la orientación y coloque el reTerminal en el reTerminal E10-1, y fuércelos para que encajen perfectamente. Si el reTerminal E10-1 se enciende en este momento, reTerminal se activará y arrancará en el sistema. Si desea saber más sobre reTerminal, haga clic en [**reTerminal**](https://wiki.seeedstudio.com/es/reTerminal/).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **Instalación y extracción**

En el proceso de usar el reTerminal E10-1, puede ser necesario quitar su carcasa para agregar periféricos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **Instalación del controlador**

Si desea que reTerminal use las funciones de reTerminal E10-1, necesita instalar el controlador para reTerminal antes de comenzar. Siga los comandos en la ventana de terminal de reTerminal.

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
Para **SO de 32 bits** necesitarás añadir el siguiente paso antes de ejecutar `sudo ./scripts/reTerminal.sh`

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

:::

Después de que se complete la instalación, por favor reinicia la máquina. Luego usa el siguiente comando para verificar si el archivo `reTerminal-bridge.dtbo` existe para asegurar que la instalación del controlador esté completa.

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **Instalar Librerías**

Instala la librería de python3.

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

Instala la biblioteca git.

```sh
sudo apt install -y git
```

### **Fuente de Alimentación**

Hay tres métodos para suministrar energía que se muestran a continuación:

- Conector DC
- PoE
- UPS - batería 18650

La batería para este dispositivo es una batería Li-ion recargable NCR18650B. Tenga en cuenta que no se incluye batería en el paquete, mientras que la batería está disponible en tiendas de conveniencia regulares y el cliente necesita prepararla por sí mismo. Y lo que proponemos es Panasonic NCR18650B 3.6V 3400mAh.

#### **Conector DC**

Suministra energía al reTerminal, la placa de expansión y la batería en DC 12V @4A

#### **PoE**

La entrada de alimentación PoE es RJ45 y soporta un máximo de 25W de entrada de energía.

#### **UPS - batería 18650**

2 x portabaterías con pin fijo.

### **Ventilador**

**Materiales requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Ventilador(incluido) x1

Para mantener el reTerminal y reTerminal E10-1 a un nivel de temperatura normal bajo carga pesada. Hay un ventilador de 3 pines dentro del reTerminal E10-1.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

Este ejemplo introduce cómo controlar el ventilador en reTerminal E10-1.

**Paso 1.** Podemos controlar directamente el interruptor del ventilador mediante el siguiente comando.

```sh
#Toggle fan on
raspi-gpio set 23 op pn dh

#Toggle fan off
raspi-gpio set 23 op pn dl
```

**Paso 2.** También podemos habilitar y deshabilitar el ventilador detectando la temperatura de la CPU. Por favor, sigue los pasos a continuación para descargar y ejecutar el programa.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

Aquí está el código **fan.py** para referencia.

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("Error importting Rpi.GPIO")

MAX_TEMP = 40.0
MIN_TEMP = 20.0
 
def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000
 
def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)
 
 # init 23 off
 GPIO.setup(channel,GPIO.OUT,initial=GPIO.LOW)
 is_close = True
 while 1:
  temp = cpu_temp()
  if is_close:
   if temp > MAX_TEMP:
    GPIO.output(channel,GPIO.HIGH)
    is_close = False
  else:
   if temp < MIN_TEMP:
    GPIO.output(channel,GPIO.LOW)
    is_close = True
  time.sleep(2.0)
  GPIO.setwarnings(False) 
 
if __name__ == '__main__':
 main() 
```

Después de que el código se ejecute exitosamente, cuando se detecte que la temperatura de la CPU es superior a 40°C, el ventilador se encenderá. Cuando la temperatura sea inferior a 20°C, el ventilador se apagará.

### **Comunicación CAN**

Una Red de Área de Controlador (CAN) es un estándar robusto de bus vehicular diseñado para permitir que los microcontroladores y dispositivos se comuniquen con las aplicaciones de otros sin una computadora anfitriona.

**Materiales requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- cable macho a macho x2

Este ejemplo presenta cómo usar el CAN en el reTerminal E10-1.

**Paso 1.** Use cables macho a macho para conectar los dos reTerminal E10-1 a través de la interfaz CAN.

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**Paso 2.** Instale las **CAN-utils** por separado para los dos reTerminals.

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils es una colección de herramientas de depuración extremadamente útiles que utilizan la interfaz CAN. Incluye aplicaciones como:

- candump – Volcar paquetes CAN – mostrar, filtrar y registrar en disco.
- canplayer – Reproducir archivos de registro CAN.
- cansend – Enviar una sola trama.
- cangen – Generar tráfico aleatorio.
- canbusload – mostrar la utilización actual del bus CAN.

El código fuente de CAN-utils se puede obtener del [repositorio de GitHub](https://github.com/linux-can/can-utils).

**Paso 3.** Agregar información de configuración para dos reTerminals. Abrir el archivo **/boot/config.txt** con un editor y guardarlo después de agregar `dtoverlay=seeed-can-fd-hat-v2` al final, luego reiniciar reTerminal.

:::note
Sin un EEPROM de ID en el 'hat' que especifique el hardware, el kernel de Linux no descubrirá automáticamente el Controlador CAN en la interfaz SPI. Para cargar el controlador apropiado, debe especificar la configuración de superposición del árbol de dispositivos al arrancar.
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**Paso 4.** La interfaz CAN se comporta como una interfaz de red. Deberías poder obtener varias estadísticas usando ```ifconfig -a``` (configuración de interfaz).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

Usa el comando `cangen can0 -v` para enviar datos aleatorios y probar si la comunicación CAN funciona bien.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**Paso 5.** Puedes activar manualmente la interfaz CAN usando:

```sh
sudo ip link set can0 up type can bitrate 500000
```

**Paso 6.** Descarga el [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple) al reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

Uno de los reTerminals compila y ejecuta el código que envía los datos.

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

Aquí está el código **cantransmit.c** para referencia.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s; 
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 frame.can_id = 0x555;
 frame.can_dlc = 5;
 sprintf(frame.data, "Hello");

 if (write(s, &frame, sizeof(struct can_frame)) != sizeof(struct can_frame)) {
  perror("Write");
  return 1;
 }

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

Otra reTerminal compila y ejecuta el código que recibe los datos.

```sh
gcc canreceive.c -o canreceive
```

Aquí está el código **canreceive.c** para referencia.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 nbytes = read(s, &frame, sizeof(struct can_frame));

  if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

Puedes ver que los dos reTerminals envían y reciben datos exitosamente a través de la interfaz CAN.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

Además de leer, es posible que quieras filtrar las tramas CAN que no son relevantes. Esto ocurre a nivel del controlador y puede ser más eficiente que leer cada trama en una aplicación de modo usuario.

```sh
gcc canfilter.c -o canfilter
```

Aquí está el código **canfilter.c** para referencia.

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Filter Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 /*
 To set up a filter, initialise a single can_filter structure or array of 
 structures and populate the can_id and can_mask. The call setsockopt():
 */
 struct can_filter rfilter[1];

 rfilter[0].can_id   = 0x550;
 rfilter[0].can_mask = 0xFF0;
 //rfilter[1].can_id   = 0x200;
 //rfilter[1].can_mask = 0x700;

 setsockopt(s, SOL_CAN_RAW, CAN_RAW_FILTER, &rfilter, sizeof(rfilter));

 nbytes = read(s, &frame, sizeof(struct can_frame));

 if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 // And finally, if there is no further need for the socket, close it:
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
La mayoría de controladores CAN tienen filtros de aceptación y máscaras incluidos en silicio (hardware). Desafortunadamente, la arquitectura actual realiza el filtrado en el kernel y no es tan óptima, pero aún es mejor que pasar todas las tramas hasta la aplicación en modo usuario.
:::

### **Comunicación RS485**

RS485, también conocido como TIA-485(-A) o EIA-485, es un estándar que define las características eléctricas de drivers y receptores para uso en sistemas de comunicaciones serie. La señalización eléctrica es balanceada, y se soportan sistemas multipunto. Las redes de comunicaciones digitales que implementan el estándar pueden usarse efectivamente a largas distancias y en entornos eléctricamente ruidosos. Múltiples receptores pueden conectarse a dicha red en un bus lineal multidrop.

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [Convertidor Industrial Aislado USB a RS485](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) y cable

Este ejemplo introduce cómo usar el RS485 en el reTerminal E10-1.

**Paso 1.** Dado que la función RS485 usa ttyS0, es necesario cerrar la función de interacción del sistema ttyS0 antes de comenzar.

```sh
sudo raspi-config
```

Selecciona **Interface Options**, **Serial port** en orden.

En la siguiente pantalla se te preguntará si quieres que el shell de inicio de sesión sea accesible a través del puerto serie, selecciona **No**.

Luego en "Do you want to use serial port hardware", asegúrate de que **Yes** esté seleccionado.

Después de que reTerminal haya realizado los cambios, verás el siguiente texto aparecer en la pantalla.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**Paso 2.** Usa un cable para conectar el reTerminal E10-1 a la computadora a través de la interfaz RS485.

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**Paso 3.** Usa el comando `dmesg | grep tty` para ver el nombre del puerto serie. Determina el nombre del puerto serie para la comunicación RS485 con la computadora. Esto puede variar de computadora a computadora. En general, es **ttyS0**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**Paso 4.** Descarga el [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple) al reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

Abre el software del puerto serie en la computadora. Ejecuta el comando `sudo python3 rs485.py` para obtener los siguientes efectos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

Al mismo tiempo, también puedes enviar datos de 16 bytes al reTerminal a través del asistente de puerto serie dentro de los 5 segundos posteriores a recibir el mensaje.

Aquí está el código **rs485.py** para referencia.

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Error importting Rpi.GPIO")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #number of bits per bytes
ser.parity = serial.PARITY_NONE    #set parity check
ser.stopbits = serial.STOPBITS_ONE #number of stop bits

ser.timeout = 0.5                  #non-block read 0.5s
ser.writeTimeout = 0.5             #timeout for write 0.5s
ser.xonxoff = False                #disable software flow control
ser.rtscts = False                 #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False                 #disable hardware (DSR/DTR) flow control

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #flush input buffer
        ser.flushOutput() #flush output buffer
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        #write data
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  #wait 5s
        #read data
        response = ser.read(16)
        print("read 16 byte data:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")
```

### **Comunicación RS232**

RS-232 o Estándar Recomendado 232 es un estándar introducido originalmente en 1960 para la transmisión de comunicación serie de datos. Define formalmente las señales que conectan entre un DTE y un DCE. Comparado con interfaces posteriores como RS-422, RS-485 y Ethernet, RS-232 tiene menor velocidad de transmisión, longitud máxima de cable más corta, mayor oscilación de voltaje, conectores estándar más grandes, sin capacidad multipunto y capacidad multidrop limitada.

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [Convertidor Industrial Aislado USB a RS232](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) y cable

Este ejemplo introduce cómo usar el RS232 en el reTerminal E10-1.

**Paso 1.** Dado que la función RS485 usa ttyS0, es necesario cerrar la función de interacción del sistema ttyS0 antes de comenzar.

```sh
sudo raspi-config
```

Selecciona **Interface Options**, **Serial port** en orden.

En la siguiente pantalla se te preguntará si quieres que el shell de inicio de sesión sea accesible a través del puerto serie, selecciona **No**.

Luego en "Do you want to use serial port hardware", asegúrate de que **Yes** esté seleccionado.

Después de que reTerminal haya realizado los cambios, verás el siguiente texto aparecer en la pantalla.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**Paso 2.** Usa un cable para conectar el reTerminal E10-1 a la computadora a través de la interfaz RS232.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**Paso 3.** Usa el comando `dmesg | grep tty` para ver el nombre del puerto serie. Determina el nombre del puerto serie para la comunicación RS232 con la computadora. Esto puede variar de computadora a computadora. En general, es **ttyS0**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**Paso 4.** Descarga el [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple) al reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

Uno de los reTerminals compila y ejecuta el código que envía los datos.

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

Aquí está el código **rs232_send.py** para referencia.

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # Please modify here according to the serial port name displayed by reTerminal
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

Otra reTerminal compila y ejecuta el código que recibe los datos.

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

Aquí está el código **rs232_receive.py** para referencia.

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
try:
    print("Start receiving data now!\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **Ethernet**

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

Este ejemplo presenta cómo probar la conexión ethernet en reTerminal E10-1.

**Paso 1.** Descarga el **iperf3** para reTerminal y computadora.

```sh
git clone https://github.com/esnet/iperf.git
```

**Paso 2.** Usa los siguientes códigos para instalar **iperf3**

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**Paso 3.** Usar reTerminal como servidor.

```sh
iperf3 -s
```

Usa una computadora para probar la velocidad de red conectada al reTerminal. En este momento, mantén la computadora y el reTerminal en la misma red de área local.

```sh
iperf3 -c 192.168.xxx.xxx
```

*La dirección "192.168.xxx.xxx" anterior es la dirección del reTerminal.*

Por ejemplo, en mi configuración la dirección ip del reTerminal es ```192.168.31.187```:

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

Si necesitas completar más funciones de prueba de red, puedes consultar el uso de parámetros de consulta en el sitio web del proyecto [iperf](https://github.com/esnet/iperf).

### **WM1302 (USB/SPI) LoRaWAN Gateway**

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN Gateway Module (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

La diferencia entre el módulo USB y SPI se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

Este ejemplo presenta cómo usar WM1302 LoRaWAN Gateway en reTerminal E10-1.

**Paso 1.** Instala el módulo WM1302 en el reTerminal E10-1, y luego fíjalo con tornillos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

Luego gira el botón junto al ventilador a PCIE.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**Paso 2.** escribe `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

- Selecciona Interface Options
- Selecciona SPI, luego selecciona **Yes** para habilitarlo
- Selecciona I2C, luego selecciona **Yes** para habilitarlo
- Selecciona Serial Port, luego selecciona **No** para "Would you like a login shell..." y selecciona **Yes** para "Would you like the serial port hardware..."

Después de esto, por favor reinicia Raspberry Pi para asegurar que estas configuraciones funcionen.

**Paso 3.** Descarga el [código WM1302](https://github.com/Lora-net/sx1302_hal) al reTerminal y compílalo.

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Paso 4.** Configura el script de reinicio. Primero descarga el archivo a **sx1302_hal/packet_forwarder** usando el comando

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

Luego ejecuta la siguiente prueba de código según tu versión de WM1302.

```sh
USB version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**Paso 5.** Regístrate en el [sitio web de TTN](https://www.thethingsnetwork.org/) e inicia sesión en tu cuenta. Si no tienes una, por favor regístrate. Luego ingresa a la interfaz de Gateway y haz clic en "Get Starting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

Selecciona tu región.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

Elige "Go to gateways"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

Haz clic en **Add gateway** para agregar el dispositivo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

Entre ellos, el valor de **Gateway EUI** se mostrará en el registro cuando se ejecute la prueba en el **paso 4**. El plan de frecuencia en las opciones de Lora (tomando la versión europea como ejemplo) selecciona **Europe 863-870 MHz (SF9 for RX2 - recommended)**. Luego haz clic en **Create gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**Paso 6.** (Tomando la versión europea como ejemplo)
Si es la versión SPI, edita **global_conf.json.sx1250.EU868** en **sx1302_hal/packet_forwarder**.

Si es la versión USB, edita **global_conf.json.sx1250.EU868.USB** en **sx1302_hal/packet_forwarder**.

Busca **gateway_conf** en el archivo correspondiente.

- Luego cambia el **gateway_ID** por el **Gateway EUI** completado en la página web.

- **server_address** se modifica a la **Gateway Server address** en la página web.

- Tanto **serv_port_up** como **serv_port_up** se modifican a **1700**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**Paso 7.** Ejecuta el comando del **paso 4** nuevamente, y podrás ver la información de conexión del dispositivo en la página web más tarde.

```sh
USB version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
El tutorial anterior está basado en la versión europea del WM1302. Si estás usando la versión estadounidense del WM1302, los pasos son generalmente los mismos, pero los archivos a modificar y ejecutar en el tutorial serán diferentes. El nombre del archivo se refiere a la versión que compraste y las [siguientes páginas](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder).
:::

### **Expansión de Disco Duro**

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Conector M.2 B key x1

Este ejemplo introduce cómo instalar y verificar el funcionamiento del disco duro en reTerminal E10-1.

**Paso 1.** Abre la cubierta trasera del reTerminal E10-1, inserta el SSD M.2 en el Conector Mini-PCIe y fíjalo con tornillos. Cierra la cubierta trasera, conecta el reTerminal y enciéndelo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

Luego gira el botón junto al ventilador a M.2.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**Paso 2.** Ingresa el comando para ver si el dispositivo de almacenamiento SSD es detectado.

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**Paso 3.** También podemos usar el comando dd para probar la velocidad de lectura y escritura del disco duro.

```sh
Read
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
Write
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
Asegúrate de estar usando M.2 B key.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### Formatear Disco Duro

:::caution
El siguiente paso borrará todos tus datos del SSD que has conectado al reTerminal E10-1, también si has seleccionado el medio de unidad incorrecto, así que por favor asegúrate de haber seguido los pasos a continuación cuidadosamente y asegúrate de entender el propósito de cada uno de los pasos.
:::

- **Herramientas de Software utilizadas**: ```lsblk```, ```fdisk```, ```mkfs```, ```mount```, ```umount```

**Paso 1.** Encuentra el Nombre de tu dispositivo SSD
una vez que hayas conectado tu SSD en el reTerminal E10-1 y lo hayas conectado al reTerminal, abre la terminal una vez que el sistema se haya encendido, luego escribe el siguiente comando:

```sh
lsblk
```

deberías ver algo similar:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**Paso 2.** Usar fdisk para particionar tu SSD

:::caution
Perderás los datos en el SSD que has conectado al reTerminal E10-1, después de seguir este paso.
:::

Siguiendo los pasos anteriores, escribe el siguiente comando en la terminal, nota el /dev/**sdX** donde la **X** es el **Nombre del dispositivo SSD** que has elegido para formatear, asegúrate de que no haya otras unidades USB conectadas al reTerminal, a menos que estés seguro del nombre correcto del dispositivo.

```sh
sudo fdisk /dev/sdX
```

Por ejemplo, en mi caso:

```sh
sudo fdisk /dev/sda
```

deberías ver algo similar a lo que se muestra a continuación:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

En el prompt de fdisk:

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

Primero escribe **```d```** para eliminar las particiones en el dispositivo SSD.

Luego seguido de escribir **```n```** para crear una nueva partición en el dispositivo SSD.

Después de eso deberías ver el siguiente mensaje:

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

Escribe **```p```** para crear una partición primaria, luego seguido de **```1```**.

Luego para el primer sector, puedes presionar **ENTER** para usar por defecto el sector inicial de la unidad, o podrías especificar dónde iniciar la partición 1 en tu SSD en una ubicación de sector específica. En mi caso simplemente presioné Enter para el valor por defecto.

Luego seguido de seleccionar el último sector para la partición 1, si quieres utilizar todo el espacio de la unidad para la partición 1 simplemente presiona **ENTER**, o puedes escribir la ubicación de sector específica para el final de la partición 1, esto también significa el tamaño de almacenamiento de la partición 1 que estás creando.

Luego presiona **```Y```** para eliminar la firma.

Luego seguido de **```w```** para escribir los cambios y luego salir del prompt de fdisk.

Aquí hay un ejemplo del proceso:
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**Paso 3.** Formatear tu partición SSD al formato ext4
Ahora deberías crear una partición/es para tu SSD, necesitas formatear la partición/es al formato ext4 para poder montarla y usarla. Para hacerlo usando mkfs.ext4:

```bash
sudo mkfs.ext4 /dev/sdXX
```

de manera similar donde ```sdXX``` es el nombre del dispositivo de tu SSD, en mi caso uso ```/dev/sda1``` como:

```bash
sudo mkfs.ext4 /dev/sda1
```

y en el ```Proceed anyway? (y,N)``` escribe **```y```** y **```ENTER```**, luego espera un par de segundos hasta que el proceso termine.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**Paso 4.** Montar la partición
Ahora puedes montar el SSD para usarlo como disco externo para almacenamiento adicional.

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

donde **"YOUR USER NAME"** es el nombre de usuario de tu sistema reTerminal y **"THE NAME YOU WANT TO MOUNT THE DRIVE"** es el nombre que creas para montar tu unidad, el **/dev/sdXX** es el nombre del dispositivo de la partición SSD que quieres montar.

por ejemplo en mi caso:

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

Para verificar si el SSD se montó exitosamente mediante:

```bash
lsblk
```

deberías ver una salida similar a la mía, donde **```/dev/sda1```** está montado en **```/media/seeed/SSD```**:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **Módulo 4G EC25-EUX**

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Módulo 4G EC25-EUX x1
- Tarjeta SIM x1

**Paso 1.** Abre la cubierta trasera del reTerminal E10-1, luego instala el EC25-EUX y la tarjeta SIM en el reTerminal E10-1.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

Luego gira el botón junto al ventilador a PCIE.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**Paso 2.** Verifica si el EC25-EUX es detectado usando ```lsusb```

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Paso 3.** Instala la herramienta de comunicación serie minicom.

```sh
sudo apt install minicom
```

**Paso 4.** Conecta el módulo 4G EC25-EUX a través de minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

una vez que se abra la conexión serie, escriba AT y presione 'Enter', y debería ver OK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Paso 5.** Habilitar el módulo 4G para conectarse a la red 4G

Por favor inserte la tarjeta SIM habilitada para 4G en la ranura de la tarjeta SIM en el soporte de la batería Li-Po, donde la ranura de la tarjeta SIM soporta tarjetas micro SIM, así que si tiene una tarjeta nano SIM necesita encontrar un adaptador de tarjeta micro SIM para convertir a tarjeta micro SIM.

En la misma ventana serie de minicom por favor escriba:

```sh
AT+QCFG="usbnet"
```

Devolverá algo como ```+QCFG: "usbnet",0,``` pero necesitamos que esté configurado en 1 (modo ECM), así que ingresa el siguiente comando:

```sh
AT+QCFG="usbnet",1
```

Luego ingresa el siguiente comando para forzar el reinicio del módem:

```sh
AT+CFUN=1,1
```

Luego podrías reiniciar o esperar un tiempo para que el módulo obtenga internet de tu operador de tarjeta SIM.

También puedes usar el comando `ifconfig` para consultar el estado de red del reTerminal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **Audio**

Para satisfacer las necesidades multimedia de diferentes usuarios, se instalan un módulo de altavoz y dos módulos de micrófono dentro del reTermnal E10-1 para lograr las necesidades de reproducir sonido y grabar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**Materiales Requeridos**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

**Paso 1.** Descargar e instalar el controlador.

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**Paso 2.** Añadir elementos de configuración. Añadir `dtoverlay=seeed-2mic-voicecard` al `/boot/config.txt`. Luego reiniciar el dispositivo.

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

para verificar si has modificado `/boot/config.txt` puedes usar el editor de texto `nano` para abrir el archivo y desplazarte hasta la última línea para verificar:

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

Una vez que se haya añadido al `/boot/config.txt` puedes reiniciar ahora:

```bash
sudo reboot
```

Después de esperar el reinicio, usa el comando `arecord -l` para ver el dispositivo de grabación.

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

Como se muestra en la figura anterior, **card 0 device 0** es el dispositivo que necesitamos usar para grabar.

**Paso 3.** Según la información anterior, usa el comando para realizar la operación de grabación y guardado.

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**Análisis de Parámetros**

- **-D** especifica el dispositivo de grabación, 0,0 significa tarjeta 0 dispositivo 0, que es bcm2835-i2s-wm8960-hifi wm8960-hifi-0.
- **-d** especifica la duración de la grabación, en segundos.
- **-f** especifica el formato de grabación, solo soporta cd, cdr, dat.
- **-r** especifica la frecuencia de muestreo en Hz.
- **-c** especifica el número de canales.
- **-t** especifica el formato de archivo generado.

:::

**Paso 4.** Verificar el dispositivo de reproducción.

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**Paso 5.** Ajusta el volumen apropiado para reproducir el sonido.

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## Recursos

## Preguntas Frecuentes

1. ¿Qué tipo de baterías 18650 son compatibles?

Respuesta: Se recomienda Panasonic NCR18650B 3.6V 3400mAh.

2. ¿Las baterías necesitan tener su propia protección contra sobrecorriente/subtensión/sobretensión?

Respuesta: No, porque reTerminal E10-1 tiene circuito de protección de batería

3. ¿Qué modelo de controlador CAN y RS485 utiliza?

Respuesta:

- Controlador 485：TP485E
- Controlador CAN：MCP2518FDT-E/QBB

4. Instalé E10 ayer, ¿la información de la batería (nivel de carga) es correcta? la muestra en rojo (0%) incluso si acabo de sacarlas del cargador.

```
Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10
```

Función de visualización de energía: aún no desarrollada, pero hemos recibido tu sugerencia y programaremos el desarrollo de esta función

5. ¿La extensión reterminal proporciona otro puerto ethernet (separado) --> así tenemos dos puertos ethernet?

Estos dos puertos se pueden usar simultáneamente sin afectarse entre sí.

6. ¿El RS232 y RS485 son independientes/separados (a veces, en algunos hardware, solo puedes usar uno...)

Solo puedes usar RS232 o RS485 a la vez.

## Recursos

- [Archivo esquemático formato DSN](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.DSN)
- [Archivo de diseño de placa PCB](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.brd)
- [Versión PDF del esquemático](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge_SCH.pdf)

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
