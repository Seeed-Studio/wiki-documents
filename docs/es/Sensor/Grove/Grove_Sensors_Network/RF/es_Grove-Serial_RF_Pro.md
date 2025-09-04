---
title: Grove - Serial RF Pro
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Sensor_communication/
slug: /es/Grove-Serial_RF_Pro
last_update:
  date: 01/06/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Twigrf.jpg)

Grove-Serial RF Pro es un transceptor FSK transparente de bajo costo y alto rendimiento que opera a 433/470/868/915 MHz, y el mejor rendimiento es a 433M (por defecto). Hay una interfaz UART que es fácil de realizar la transmisión de datos inalámbrica con solo proporcionar los datos UART. Es flexible para que los usuarios establezcan la velocidad de baudios UART, frecuencia, potencia de salida, velocidad de datos, desviación de frecuencia, ancho de banda de recepción, etc. Es su elección ideal para diseñar productos de transmisión de datos inalámbricos que pueden ser ampliamente utilizados en el campo de transmisión de datos inalámbricos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)

## Seguimiento de Versiones

<table>
<tr>
<th> Revisión</th>
<th> Descripciones</th>
<th> Lanzamiento</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> Lanzamiento público inicial</td>
<td width="200px"> NA</td>
</tr>
</table>

## Características

---

* Compatible con Grove
* Alta potencia de salida
* Alta potencia de salida
* Tamaño pequeño
* Mayor distancia de transmisión

## Ideas de Aplicación

---

* Control remoto, sistema de medición remota
* Medidor inalámbrico
* Control de acceso
* Sistema de identificación
* Recolección de datos
* Electrodomésticos IT
* Sistema de monitoreo de bebés

## Especificaciones

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Elemento</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidad</th>
</tr>
<tr>
<td scope="row">Voltaje de Trabajo</td>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> VDC</td>
</tr>
<tr>
<td scope="row"> Corriente en modo de reposo</td>
<td colspan="3"> 1</td>
<td> uA</td>
</tr>
<tr>
<td scope="row"> potencia de salida</td>
<td> 1</td>
<td> -</td>
<td> 20</td>
<td> dB</td>
</tr>
<tr>
<td scope="row"> Velocidad de Comunicación</td>
<td> 1.2</td>
<td>  -</td>
<td> 115.2</td>
<td> Kbps</td>
</tr>
<tr>
<td scope="row"> Distancia de Transmisión(Máx)</td>
<td colspan="3"> 1</td>
<td> Km</td>
</tr>
<tr>
<td scope="row"> Sensibilidad</td>
<td colspan="3"> -117</td>
<td> dBm</td>
</tr>
<tr>
<td scope="row"> Protocolo de Comunicación</td>
<td colspan="3">  UART</td>
<td> /</td>
</tr>
<tr>
<td scope="row"> Temperatura de Operación</td>
<td> -40</td>
<td>  -</td>
<td> +85</td>
<td> ℃</td>
</tr>
</table>

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Serial_RF_Pro1.jpg)

<table >
<tr>
<th> Tipo de Pin (Nivel lógico 5V)</th>
<th> Descripción</th>
</tr>
<tr>
<td width="100px"> G(GND)</td>
<td width="450px"> Puerto de tierra</td>
</tr>
<tr>
<td> EN(ENABLE)</td>
<td> Establecer en bajo para modo normal como transceptor de datos (Por defecto es bajo con 10k a GND).
Establecer en alto para poner en modo de suspensión.</td>
</tr>
<tr>
<td> CON(CONFIG)</td>
<td> Establecer en bajo para modo de configuración (conectar a GND).
Establecer en alto para comunicación (Por defecto es alto).</td>
</tr>
<tr>
<td> RX</td>
<td> Entrada de datos UART</td>
</tr>
<tr>
<td> TX</td>
<td> Salida de datos UART</td>
</tr>
<tr>
<td> V(VCC)</td>
<td> Diseñado para suministro de 5V(+)</td>
</tr>
<tr>
<td> AT</td>
<td> Pin de antena</td>
</tr>
</table>

## Primeros Pasos

---
Aquí mostramos dos unidades RF Pro Grove transmitiéndose/recibiéndose datos mutuamente. Necesitas dos unidades RF Pro Grove y dos Seeeduino para hacer la demostración.

* Conecta un Grove - Serial RF Pro al UART del [Grove - Base Shield](https://wiki.seeedstudio.com/es/Base_Shield_V2/) y enchufa el Grove - Base Shield en el Seeeduino.

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Rfdemo.jpg)

* Conecta otro Grove - Serial RF Pro al Seeeduino usando el mismo método.

### Métodos de Configuración y Consulta

El módulo estará listo para el estado de Configuración si el pin ENABLE está en bajo, el pin CONFIG está en bajo. Estará en Configuración
si los LED rojo y verde se mantienen encendidos. Entonces puedes Configurar y consultar en el módulo.

* Conecta el pin CON a LOW/GND para entrar al modo de configuración.

* Envía comandos para modificar y consultar la configuración del módulo. La descripción de instrucciones de Configuración y Consulta ver [Referencia](https://wiki.seeedstudio.com/es/Grove-Serial_RF_Pro/#reference).

El formato de instrucción de Configuración es AA+FA+[instrucción]+[parámetro]. La instrucción es de 1 byte, el parámetro son los datos HEX de 0-4 bytes (en orden big-endian, con el byte alto antes del byte bajo).

**Nota:**

1) Recuerda la velocidad de transferencia UART (por defecto es 9600, mejor no cambiarla) si haces algún cambio, o no podrás controlar el módulo. La velocidad de transferencia de la instrucción cambiará en consecuencia si cambias la velocidad de transferencia del UART. El rango de velocidad de transferencia de la instrucción es de 1.2Kbps – 115.2K bps.

2) Descripción de Función de LED:

- Los LED rojo y verde parpadearán cuando haya energía y el módulo esté funcionando.
* El módulo estará listo para el modo de configuración si el pin EN(ENABLE) está en bajo (por defecto está en bajo), el pin CON(Config) está en bajo. Cuando esté en modo de configuración, los LED rojo y verde estarán ambos encendidos sólidamente. - Los LED verde y rojo no estarán encendidos sólidamente si el módulo no está en modo de configuración.
* El LED rojo parpadea cuando el módulo está transmitiendo, el LED rojo se apagará cuando la transmisión termine.
* El LED verde está apagado cuando el módulo está esperando datos para ser recibidos, el LED verde parpadeará una vez cuando el módulo reciba datos.

### Modo de Comunicación

Sube el código de abajo al Seeeduino, Por favor haz clic [aquí](https://wiki.seeedstudio.com/es/Upload_Code) si no sabes cómo subir.

```
//send data routine

// link between the computer and the SoftSerial Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//SoftSerial Shield is connected to the Software UART:D2&D3

#include <SoftwareSerial.h>

SoftwareSerial SoftSerial(11, 10); // TX, RX
int buffer[64];
int count=0;
void setup()
{
    SoftSerial.begin(9600);               // the SoftSerial baud rate
    Serial.begin(9600);             // the Serial port of Arduino baud rate.

}

void loop()
{
    delay(1000);
    SoftSerial.write(0xAA);
    SoftSerial.write(0xFA);
    SoftSerial.write(0xE1);

    if (SoftSerial.available())              // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())          // reading data into char array
        {
            buffer[count++]=SoftSerial.read();     // writing data into array
            if(count == 64)break;
        }
        for (int i=0; i<count; i++) {
            Serial.print(buffer[i],HEX);            // if no data transmission ends, write buffer to hardware serial port
        }
        clearBufferArray();              // call clearBufferArray function to clear the stored data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());       // write it to the SoftSerial shield
    Serial.println("...");
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

* Puedes ver como se muestra a continuación después de abrir el monitor serie.

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Communication_result.jpg)

## Referencia

---
La siguiente tabla lista los comandos y respuestas involucrados en la interacción con Serial RF Pro v0.9b.


<table>
  <tbody><tr>
      <th>Instrucción(HEX)</th>
      <th>Descripción</th>
      <th>Instrucción de configuración(HEX)</th>
      <th>Valor de Retorno</th>
      </tr>
    <tr>
      <td>F0</td>
      <td>Restablecer a parámetros predeterminados (excepto velocidad de transferencia UART), no sigue parámetro</td>
      <td width="400px">AA FA F0</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>E1</td>
      <td>Leer el parámetro de configuración actual, no sigue parámetro</td>
      <td>AA FA E1</td>
      <td>16 bytes: (**siguiendo el orden a continuación**) <pre>frecuencia de trabajo-4 bytes,{"\n"}velocidad de datos inalámbricos-4 bytes,{"\n"}ancho de banda de recepción-2 bytes,{"\n"}desviación de frecuencia-1 byte,{"\n"}potencia de transmisión-1 byte,{"\n"}velocidad de transferencia UART-4 bytes{"\n"}</pre></td>
      </tr>
    <tr>
      <td>D2</td>
      <td>Configurar frecuencia de trabajo，[parámetro]4 bytes，[parámetro] Unidad :Hz. Rango de configuración: *HM-TRP-433: 414000000-454000000Hz; *   HM-TRP-470: 450000000-490000000Hz; *HM-TRP-868: 849000000-889000000Hz; *   HM-TRP-915: 895000000-935000000Hz</td>
      <td>Ejemplo: *Instrucción de configuración: AA FA D2 **36 89 CA C0**, configurar frecuencia como 915000000Hz.(**0x36 89 CA C0=915000000**) *   Instrucción de configuración: AA FA D2 **19 DE 50 80**, configurar frecuencia como 434000000Hz.(**0x19 DE 50 80=434000000**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>C3</td>
      <td>Configurar velocidad de datos inalámbricos，[parámetro]4 bytes，[parámetro] unidad :bps. Rango de configuración:1200-115200 bps</td>
      <td>Ejemplo: *Instrucción de configuración: AA FA C3 **00 00 25 80**,configurar velocidad de transferencia como 9600bps.(**0x00 00 25 80=9600**) *   Instrucción de configuración: AA FA C3 **00 00 96 00**, configurar velocidad de transferencia como 38400bps.(**0x00 00 96 00=38400**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>B4</td>
      <td>Configurar ancho de banda de recepción，[parámetro]2 bytes，[parámetro]Unidad :KHz Rango de configuración:30-620KHz</td>
      <td>Ejemplo: *Instrucción de configuración: AA FA B4 **00 69**, configurar banda de recepción como 105KHz.(**0x00 69=105**) *   Instrucción de configuración: AA FA B4 **01 2C**, configurar banda de recepción como 300KHz.(**0x01 2C=300**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>A5</td>
      <td>Configurar desviación de frecuencia，[parámetro]1 byte，[parámetro]Unidad :KHz Rango de configuración:10-160KHz</td>
      <td>Ejemplo: *Instrucción de configuración: AA FA A5 **23**, configurar frecuencia de modulación como 35KHz.(**0x23=35**) *   Instrucción de configuración: AA FA A5 **32**, configurar frecuencia de modulación como 50KHz.(**0x32=50**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>96</td>
      <td>Configurar potencia de transmisión ,[parámetro]1 byte，0~7 niveles Rango de configuración:0-7 niveles(1-20 dBm)</td>
      <td>Ejemplo: *Instrucción de configuración: AA FA 96 **07**, configurar potencia de transmisión como nivel 7 (+20 dBm) *   Instrucción de configuración:AA FA 96 **03**, configurar potencia de transmisión como nivel 3 (+8 dBm) <pre>Nivel de potencia de transmisión{"     "}Potencia de transmisión{"\n"}7{"                                 "}+20dBm{"\n"}6{"                                 "}+17dBm{"\n"}5{"                                 "}+14dBm{"\n"}4{"                                 "}+11dBm{"\n"}3{"                                 "}+8dBm{"\n"}2{"                                 "}+5dBm{"\n"}1{"                                 "}+2dBm{"\n"}0{"                                 "}+1dBm{"\n"}</pre></td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>1E</td>
      <td>Configurar velocidad de transferencia UART，[parámetro]4 bytes，[parámetro] unidad: bps Rango de configuración:1200-115200 bps</td>
      <td>Ejemplo: *Instrucción de configuración :AA FA 1E **00 00 25 80**,configurar velocidad como 9600bps.(**0x00 00 25 80=9600**) *   Instrucción de configuración :AA FA 1E **00 00 96 00**, configurar velocidad como 38400bps.(**0x00 00 96 00=38400**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>87</td>
      <td>Intensidad de señal inalámbrica al recibir datos útiles, no sigue [parámetro]</td>
      <td>Instrucción de configuración：AA FA 87<br /><img src="https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/WirelesssignalstrengthRSSI.jpg" /></td>
      <td>El valor RSSI es de 8 bits, rango: 0-255</td>
      </tr>
    <tr>
      <td>78</td>
      <td>Intensidad de señal inalámbrica de interferencia, no sigue [parámetro]<br />Nota：<br />*Índice de modulación : h = Fd/Rb, El rango es 0.5 ~ 32.<br />*   Si h &gt; 1, BW =Rb+2Fd; Si h &lt; 1, BW =2Rb+ Fd.</td>
      <td>Instrucción de configuración：AA FA 78</td>
      <td>El valor RSSI es de 8 bits , rango: 0-255</td>
      </tr>
</tbody>
</table>

## Recursos

* **[Código]** [Código de Demostración Serial RF Pro](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/Grove-Serial_RF_Pro_Demo_Code.zip)

* **[Hoja de Datos]** [Hoja de Datos de Módulos Transceptores de 100mW Serie HM-TRP de HopeRF V1.0](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/HM-TRP-RS232_enV1.0_20120604.pdf)

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
