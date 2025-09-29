---
description: Módulo BLE Bluetooth V4.0 HM-11
title: Módulo BLE Bluetooth V4.0 HM-11
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bluetooth_V4.0_HM_11_BLE_Module
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11%20BLE%20Module.jpg)

Este es un módulo BLE SMD utilizado en nuestro BLE Bee y Xadow BLE. Está basado en el chip TI CC2541, permite construir nodos de red robustos con bajos costos totales de materiales y es altamente adecuado para sistemas de consumo ultrabajos de energía. El módulo es pequeño y fácil de usar, con el firmware preprogramado del fabricante, podrías construir rápidamente comunicaciones BLE a través de su comando AT. Compatible con comunicaciones BLE con iPhone, iPad y Android 4.3.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html)

## Características

---
- Protocolo Bluetooth: Especificación Bluetooth V4.0 BLE

- Frecuencia de trabajo: banda ISM de 2.4 GHz

- Método de interfaz: puerto serie

- Entorno abierto dentro de 30 metros puede realizar comunicación entre módulos

- Envío y recepción sin límite de bytes entre módulos

- Método de modulación: GFSK (Gaussian Frequency Shift Keying)

- Potencia de transmisión: - DBM, 23-6 DBM, 0 DBM, 6 DBM, puede ser modificada por el comando AT

- utiliza chip TI CC2541, espacio de configuración de 256 KB, compatible con comando AT, el usuario puede según necesidad cambiar el rol (modo maestro, esclavo) y la velocidad de baudios del puerto serie, nombre del equipo, parámetros de emparejamiento como contraseñas, uso ágil.

- fuente de alimentación: + 3.3 VDC 50 mA

- temperatura de trabajo: - 5 ~ + 65 Centígrados

## Especificación

---
<table>
<tr>
<th>Especificación</th>
<th>Valor</th>
</tr>
<tr>
<td>Microprocesador</td>
<td>CC2541</td>
</tr>
<tr>
<td>Recursos</td>
<td>Compatible con comando AT, el usuario puede según necesidad cambiar el rol (modo maestro, esclavo) y la velocidad de baudios del puerto serie, nombre del equipo, parámetros de emparejamiento como contraseña, uso flexible.</td>
</tr>
<tr>
<td>Dimensión Externa</td>
<td>13.5mm x 18.5mm x 2.3mm</td>
</tr>
<tr>
<td>Fuente de alimentación</td>
<td>3.3V</td>
</tr>
<tr>
<td>Protocolo de Comunicación</td>
<td>Uart(3.3V LVTTL)</td>
</tr>
<tr>
<td>Cantidad de IO</td>
<td>2</td>
</tr>
<tr>
<td>IO de entrada de tecla</td>
<td>1</td>
</tr>
<tr>
<td>IO de indicadores LED</td>
<td>1</td>
</tr>
<tr>
<td>Conectividad</td>
<td>Socket compatible con XBee</td>
</tr>
</table>

## Características Eléctricas

---
<table>
<tr>
<th>Especificación</th>
<th>Mín</th>
<th>Típ</th>
<th>Máx</th>
<th>Unidad</th>
</tr>
<tr>
<td>Voltaje de Entrada Máximo</td>
<td>-0.3</td>
<td></td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>Voltaje de Entrada de Trabajo</td>
<td>2.0</td>
<td>3.3</td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>Corriente de Transmisión</td>
<td></td>
<td>15</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>Corriente de Recepción</td>
<td></td>
<td>8.5</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>Corriente de Sueño Profundo</td>
<td></td>
<td>600</td>
<td></td>
<td>uA</td>
</tr>
<tr>
<td>Temperatura de Operación</td>
<td>-40</td>
<td></td>
<td>+65</td>
<td>°C</td>
</tr>
</table>

## Definición de pines

---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11_Pinout.jpg)

<table>
<tr>
<th>Pin</th>
<th>Nombre</th>
<th>Descripción</th>
</tr>
<tr>
<td>1</td>
<td>UART_RTS</td>
<td>UART</td>
</tr>
<tr>
<td>2</td>
<td>UART_TX</td>
<td>UART</td>
</tr>
<tr>
<td>3</td>
<td>UART_CTS</td>
<td>UART</td>
</tr>
<tr>
<td>4</td>
<td>UART_RX</td>
<td>UART</td>
</tr>
<tr>
<td>5</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>VCC</td>
<td>Alimentación 3.3V</td>
</tr>
<tr>
<td>10</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>RESETB</td>
<td>Reset, activo bajo al menos durante 5ms</td>
</tr>
<tr>
<td>12</td>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>13</td>
<td>PIO3</td>
<td>Puerto IO, usado para conectar a DHT11/DS18B20</td>
</tr>
<tr>
<td>14</td>
<td>PIO2</td>
<td>Entrada digital, salida</td>
</tr>
<tr>
<td>15</td>
<td>PIO1</td>
<td>Indicador LED</td>
</tr>
<tr>
<td>16</td>
<td>PIO0</td>
<td>Pin de botón</td>
</tr>
</table>

## Comandos AT y Configuración

---
**1） Consultar la dirección MAC nativa
**
Enviar: AT+ADDR?

Enviar después de un retorno exitoso: OK+LADD: dirección MAC (dirección de 12 caracteres)

**2） Consultar la velocidad de baudios
**
Enviar: AT+BAUD?

Enviar después de un retorno exitoso: OK+Get: [para1]

Rango de para1: 0 ~ 8. Los parámetros correspondientes se listan a continuación:

0 -------- 9600

1 -------- 19200

2 -------- 38400

3 -------- 57600

4 -------- 115200

5 -------- 4800

6 -------- 2400

7 -------- 1200

8 -------- 230400

Por defecto: 0(9600)

**3） Establecer la velocidad de baudios
**
Enviar: AT+BAUD[para1]

Enviar después de un retorno exitoso: OK+Set:[para1]

Ejemplo: enviar: AT + BAUD1, retorna: OK+Set: 2. La velocidad de baudios se establece en 19200.

Nota: después del cambio a 1200, el módulo ya no soportará las configuraciones del comando AT, y presionando el PIO0 en espera, el módulo puede restaurar la configuración de fábrica. No se recomienda usar esta velocidad de baudios. Después de establecer la velocidad de baudios, los módulos deben ser encendidos nuevamente para que los parámetros establecidos puedan tomar efecto.

**4） desde el dispositivo conectado a la dirección bluetooth especificada
**
Enviar: AT+CON[para1]

Enviar después de un retorno exitoso: OK+CONN[para2]

El rango de Para2 es: A, E, F

Ejemplo: desde la dirección bluetooth es: 0017EA0943AE, enviando el AT+CON0017EA0943AE, el módulo retorna: OK+CONNA o OK+CONNF CONNE o OK.

**5） eliminación de información de emparejamiento del equipo
**
Enviar: AT+CLEAR

Enviar después de un retorno exitoso: OK+CLEAR

Limpiar exitosamente la información del código de dirección del dispositivo que había estado conectado.

**6） consultar modo de trabajo del módulo
**
Enviar: AT+MODE?

Enviar después de un retorno exitoso: OK+Get: [para]

Para: el rango de 0 ~ 2. 0 representa modo de paso directo, en nombre de la adquisición PIO + control remoto + 1 paso directo, 2 representativo paso directo + modo de control remoto. El valor por defecto es 0.

**7） establecer modo de trabajo del módulo:
**
Enviar: AT+MODE []

Enviar después de un retorno exitoso: OK+Set: [para]

**8） consultar nombre del dispositivo
**
Enviar: AT+NAME?

Enviar después de un retorno exitoso: OK+NAME [para1]

**9） establecer el nombre del dispositivo
**
Enviar: AT+NAME [para1]

Enviar después de un retorno exitoso: OK+Set: [para1]

Ejemplo: Establecer el nombre del dispositivo como Seeed, enviando el AT + NAMESeeed, retorna OK + Set: Seeed AT en este momento, el nombre del módulo bluetooth ha sido cambiado a Seeed.
Nota: después de la ejecución de la instrucción, se requiere electricidad, establecer los parámetros de la aprobación.

**10） consultar contraseña de emparejamiento
**
Enviar: AT+PASS?

Enviar después de un retorno exitoso: OK+PASS: [para1]

El rango de Para1 es 000000 ~ 999999, el valor por defecto es 000000.

**11） establecer contraseña de emparejamiento
**
Enviar el AT+PASS [para1]

Enviar después de un retorno exitoso: OK+Set: [para1]

**12） restaurar configuración de fábrica
**
El AT+RENEW enviar

Enviar después de un retorno exitoso: OK+RENEW

Restaurar la configuración de fábrica por defecto del módulo, la configuración del módulo será restablecida así, volver a la fábrica con el estado de la fábrica por defecto, retraso del módulo 500 ms después del reinicio. Si no es necesario, por favor tenga cuidado.

**13） reinicio del módulo
**
Enviar: AT+RESET

Enviar después de un retorno exitoso: OK+RESET

Después de la ejecución de la instrucción el módulo retrasará 500 ms después del reinicio.

**14） establecer el modo maestro-esclavo
**
Enviar: AT + ROLE [para1]

Enviar después de un retorno exitoso: OK+Set: [para1]

## Código de Ejemplo

---
//maestro

```
/*

 This example code is in the public domain.

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    // set master
    mySerial.print("AT+ROLE1");
    delay(10000);


}

void loop() // run over and over
{

    // set the data rate for the SoftwareSerial port
    mySerial.print("test I am master  ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

//slave

```
/*

 This example code is in the public domain.

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    // set slave
    mySerial.print("AT+ROLE0");
    delay(10000);


}

void loop() // run over and over
{

    // set the data rate for the SoftwareSerial port
    mySerial.print("test I am slave ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

## Proyectos Relacionados

---

### Qué es Grove-Serial Bluetooth

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/7be197fcaee35992babbffd47462bbc0.image.530x397.jpg)

Serial Bluetooth está diseñado para la configuración de conexión serial inalámbrica transparente.

El módulo Bluetooth de puerto serial está completamente calificado con Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulación con transceptor de radio completo de 2.4GHz y banda base.

Utiliza CSR Bluecore 04-External sistema Bluetooth de chip único con tecnología CMOS y con AFH (Adaptive Frequency Hopping Feature).

### Control Remoto IR

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/Seeed-recipe-66-20140625115150.jpg)

Este proyecto utiliza Grove - Water Sensor para crear una solución simple pero efectiva para regar plantas.

Con esta demostración, podemos:

- Integrar todos los comandos remotos en un dispositivo Android

- Comunicar entre Seeeduino y el panel Android vía Bluetooth.

- Control remoto vía IR

[**Quiero hacerlo.**](https://www.seeedstudio.com/recipe/66-ir-remote.html)

[**Más Proyectos Increíbles con Bluetooth**](https://www.seeedstudio.com/recipe/index.php?query=bluetooth)

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
