---
description: Seeeduino v4.0
title: Seeeduino v4.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_v4.0
last_update:
  date: 1/11/2023
  author: shuxu hu
---

<!-- <p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg" border=0 /></a></p>  -->
![ingrese la descripción de la imagen aquí](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg)

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
<a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></a>
El Seeeduino v4.0 es una placa de desarrollo de microcontrolador ATMEGA328. El ATMEGA328P-MU es un microcontrolador AVR de 8 bits de alto rendimiento y bajo consumo. El Seeeduino v4.0 tiene 14 pines de entrada/salida digital (6 de los cuales pueden usarse como salidas PWM) y 6 pines analógicos. La placa también cuenta con un microcontrolador ATMEGA16U2 que actúa como un chip convertidor UART-a-USB, lo que significa que la placa puede funcionar básicamente como un chip FTDI.

El Seeeduino v4.0 hereda todas las características del Arduino Duemilanove y Uno, pero también añade algunas propias. Esta placa es compatible con el diseño de pines del Duemilanove y Uno, y con los orificios para tornillos y dimensiones de la placa del Duemilanove.

Para una explicación detallada y descripción general de todas las características, consulte la sección en este WiKi titulada [Interfaz de la Placa, Características y Componentes](https://seeeddoc.github.io/Seeeduino_v4.0/#Board_Interface.2C_Features.2C_and_Components).

## Interfaz de la Placa, Características y Componentes

La placa Seeeduino ofrece una variedad de características, algunas de las cuales no se encuentran en otras placas duino (por ejemplo, lógica de 5V o 3.3V, pads de cabecera adicionales, conectores USB-a-UART directos). Vea a continuación una descripción detallada de la interfaz de la placa y sus características únicas.

![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png)
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png" alt="pir" width={600} height="auto" /></p>

### 1. Pads J2

Conectados a los pines PB4, PB5, PB6 y PB7 del ATMEGA16U2 (chip U5).

### 2. LEDs L, TX, RX

El LED "L" está conectado al pin digital 13, puede usarse como LED de "estado" en sus proyectos. Los LEDs TX y RX funcionan automáticamente, le permiten saber cuándo la placa está enviando o recibiendo información respectivamente.

### 3. Puerto Micro USB

Puerto usado para conectar la placa a su PC para programación. Micro USB es la versión ubicua de USB, que se encuentra en la mayoría de teléfonos Android y otros dispositivos. Probablemente tenga docenas de estos cables por su casa.

### 4. Interruptor Deslizante SW2 (5V 3V3)

Interruptor deslizante usado para cambiar el nivel lógico y la salida de alimentación de la placa a 5V o 3.3V. Hoy en día muchos sensores nuevos y excelentes están siendo desarrollados para trabajar con 3.3V, con otras placas duino necesitaría colocar un convertidor de nivel lógico entre la placa y estos sensores, ¡con la placa Seeeduino V4.0 todo lo que tiene que hacer es deslizar el interruptor!

### 5. Conector de Alimentación DC

El conector de alimentación DC permite que su placa Seeeduino sea alimentada desde un adaptador de pared para que pueda suministrar más energía a su proyecto si es necesario, por ejemplo cuando use motores DC u otros dispositivos de alta potencia. La entrada DC puede ser de 7V-12V.

### 6. ICSP U5

Puerto ICSP y SPI para el chip ATMEGA16U2.

### 7. U5

Chip ATMEGA16U2. Este chip se encarga de la conexión USB a UART que se usa para programar el ATMEGA328P-MU (U1) y también puede usar el puerto tipo FTDI.

### 8. Botón SW1 (Reset)

Este botón está convenientemente ubicado en el lateral para permitirle reiniciar la placa Seeeduino incluso cuando hay un shield colocado encima. Este no es el caso en otras placas duino donde el botón está colocado arriba haciéndolo difícil de acceder.

### 9. Pads de Cabecera Adicionales (Digital)

A veces es muy conveniente conectar un sensor/dispositivo a su placa directamente en lugar de pasar por una protoboard, o tal vez quiera soldar el sensor directamente a la placa una vez que haya completado su proyecto, o quizás quiera monitorear la salida de los pines mientras están siendo usados por otros dispositivos. En cualquier caso hemos añadido estos pads adicionales para ayudarle en el camino.

### 10. U1

El chip ATmega328P-MU, este es el cerebro de la placa, donde va el código que escriba para ser ejecutado.

### 11. Pads de Cabecera Adicionales (Alimentación y Analógico)

Al igual que los Pads Digitales de Cabecera Adicionales, estas conexiones extra son algo que personalmente hemos llegado a darnos cuenta de que la gente necesita en sus proyectos, especialmente las conexiones de alimentación si quiere alimentar más de un sensor/dispositivo sin el uso de una protoboard.

### 12. Pads/Puerto UART-a-USB (FTDI)

Esta es la salida/entrada de la función UART-a-USB del chip ATMEGA16U2 (U5). Puede usar este puerto para comunicarse directamente con dispositivos que requieren una conexión UART a serie, es excelente para probar rápidamente estos dispositivos sin escribir código. Este puerto hace que la placa Seeeduino funcione esencialmente como un chip FTDI si es necesario.

El voltaje de salida de VCC será de 5V o 3.3V, lo que haya seleccionado usando SW2.

### 13. ICSP U1

Esta es la conexión ICSP para el ATmega328P-MU, está ubicada en la posición estándar ICSP/SPI para hardware compatible con Arduino Uno, Due, Mega y Leonardo (por ejemplo, shields) que puedan usar este conector. Los pines SPI en este puerto: MISO, SCK y MOSI, también están conectados a los pines digitales 12, 13 y 11 respectivamente, igual que los del Arduino Uno.

### 14. Conectores Grove

[Nuestro almacén](https://www.seeedstudio.com/depot/) tiene una variedad de sensores/dispositivos que pueden hacer uso de esta conexión I2C o UART. Además vendemos conectores Grove independientes para ayudarte a hacer tus propias conexiones de sensores. El conector Grove I2C también está conectado a los pines analógicos 4 y 5 para SDA y SCL respectivamente si prefieres usar esos pines en su lugar. El conector Grove UART está conectado a los pines digitales 0 y 1 para RX y TX respectivamente.

### 15. Pines PWM

Los pines digitales 3, 5, 6, 8, 9 y 10 pueden usarse para modulación por ancho de pulso (PWM).

## Especificaciones

- Microcontrolador: ATmega328P-MU

- Voltaje de Operación: 5V o 3.3V(selección por interruptor deslizante)
- Pines E/S Digitales:14

- Canales PWM:6

- Canales de Entrada Analógica:6

- Entrada Jack DC:7v-12v

- Corriente DC por Pin E/S: 40 mA

- Memoria Flash: 32 KB (ATmega328P-MU)

- RAM: 2 KB (ATmega328P-MU)

- EEPROM:1 KB (ATmega328P-MU)

- Velocidad de Reloj:16 MHz

## Instalación del Controlador  

### Automática

Los controladores de Arduino/Seeeduino están incluidos con el [Software de Arduino](https://arduino.cc/en/main/software).  En Windows, una vez que el Software de Arduino está instalado, conecta tu placa Seeeduino al puerto USB de tu PC y la instalación del controlador comenzará automáticamente como se muestra en la captura de pantalla a continuación:

<!-- [](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png" alt="pir" width={600} height="auto" /></p>
Ventana de instalación del controlador Seeeduino V4.0 como aparece en Windows.

Después de un par de minutos (2-5), el controlador debería completar su instalación y verás esta ventana:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png" alt="pir" width={600} height="auto" /></p>

Ventana de instalación completa del controlador Seeeduino V4 como aparece en Windows.

En este punto el Seeeduino V4.0 está listo para usar.

### Manual

En Windows, si la instalación automática del controlador falla puedes instalar los controladores manualmente, están ubicados en la carpeta del Software de Arduino, para hacerlo sigue estos pasos:

**1.** Abre la ventana "Administrador de dispositivos" buscándola y haciendo clic en "Administrador de dispositivos" como se muestra en la imagen animada a continuación. Alternativamente, si esto no funciona para ti, puedes hacer clic derecho en "Mi PC"-&gt;Administrar-&gt;Administrador de dispositivos.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_how_to_open_device_manager_window.gif)  

**2.** En la ventana "Administrador de dispositivos", bajo "Puertos (COM&amp;LPT)" u "Otros dispositivos" busca "Puerto Serie USB", esta es la placa Seeeduino pero aún no ha sido reconocida por Windows. Haz clic derecho y selecciona "Actualizar software de controlador..."

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg" alt="pir" width={600} height="auto" /></p>

**3.** A continuación, elige la opción "Buscar software de controlador en mi equipo".

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg" alt="pir" width={600} height="auto" /></p>

**4.** Finalmente, encuentra y selecciona la carpeta llamada "Drivers", ubicada en la carpeta de descarga del Software de Arduino.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg" alt="pir" width={600} height="auto" /></p>

**5.** Si el controlador se instaló exitosamente deberías ver el cuadro de diálogo a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg" alt="pir" width={600} height="auto" /></p>

**6.** En la ventana "Administrador de dispositivos" el dispositivo en el que hiciste clic derecho ahora debería mostrar "Arduino Uno (COMXX)" o "Puerto Serie USB(COMXX)" como se muestra a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg" alt="pir" width={600} height="auto" /></p>

**7.** Y cuando abras el IDE de Arduino el mismo puerto COM también estará disponible. Recuerda cerrar y abrir el IDE de Arduino si estaba abierto durante la instalación del controlador o el puerto Serie no será visible.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg" alt="pir" width={600} height="auto" /></p>

## Ejemplos/Aplicaciones

### Ejemplo 1: Tu Primer Programa Arduino/Seeeduino (Parpadeo de LED)

Como se describe en la sección "Interfaz de la Placa, Características y Componentes" de este WiKi, la placa Seeeduino tiene un LED integrado conectado al pin 13. En este ejemplo te mostraremos cómo hacer parpadear ese LED. Hacer parpadear un LED es el programa más simple que se puede escribir para familiarizarse con el hardware y software de una placa.

Para hacer parpadear el LED en tu placa Seeeduino, sigue los pasos en la imagen animada a continuación:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif" alt="pir" width={600} height="auto" /></p>

O si prefieres, hemos listado y descrito cada uno de los pasos:

**1.** Abre el IDE de Arduino
**2.** Selecciona la placa Seeeduino yendo a Tools-&gt;Board-&gt;Arduino Uno. La placa Seeeduino es reconocida como una placa Arduino Uno.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg" alt="pir" width={600} height="auto" /></p>

**3.** Asegúrate de que el puerto COM serie donde está conectada tu placa Seeeduino esté seleccionado yendo a Tools-&gt;Serial Port-&gt;COMXX donde COMXX es el puerto COM de tu placa.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg" alt="pir" width={600} height="auto" /></p>

**4.** Abre el ejemplo "Blink" yendo a File-&gt;Examples-&gt;0.1Basics-&gt;Blink. Se abrirá una nueva ventana con código, puedes cerrar la ventana anterior/original de Arduino.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg" alt="pir" width={600} height="auto" /></p>

**5.** En esta nueva ventana haz clic en el botón "Upload", esto subirá/enviará el código a tu placa Seeeduino. Espera unos segundos para que aparezca el mensaje "Done Uploading", este mensaje indica que el código fue escrito exitosamente en la placa y está listo para usar.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg" alt="pir" width={600} height="auto" /></p>

**6.** El LED azul integrado en la placa Seeduino debería comenzar a parpadear como se muestra a continuación:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif" alt="pir" width={600} height="auto" /></p>

### Ejemplo 2: UART-a-USB (FTDI) y Lógica de 3.3V - Comenzando Con El Módulo WiFi ESP8266 Sin Circuitería Extra y Sin Escribir Software

Dos grandes características de la placa Seeeduino V4.0 cuando se compara con sus competidores es su capacidad de cambiar entre lógica de 5V y 3.3V, y su puerto USB-a-UART que esencialmente la convierte en un dispositivo tipo FTDI excelente para comenzar rápidamente con dispositivos que usan el protocolo/interfaz UART.

En este ejemplo te mostraremos cómo usar el popular [módulo WiFi ESP8266](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html?cPath=19_20). Este ejemplo es increíble porque con otras placas duino necesitarías un convertidor de voltaje, un convertidor de lógica, y software para controlar dos puertos Serie separados, pero con la placa Seeeduino ninguna de estas tres cosas es requerida.

**Paso 1: Poniendo La Placa En Modo 3.3V**

**1.** Retira todas las fuentes de alimentación de la placa Seeeduino para que esté completamente apagada.
**2.** Desliza el interruptor SW2 hacia la configuración 3V3.

**Paso 2: Conexiones ESP8266-Seeeduino**

Conecta tu módulo WiFi ESP8266 a la placa Seeeduino como sigue (Ve la foto a continuación para un esquema):

<table>
<tr>
<th>Pin Seeeduino</th>
<th>Pin ESP8266</th>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>TX</td>
<td>RX</td>
</tr>
<tr>
<td>RX</td>
<td>TX</td>
</tr>
<tr>
<td>CH_PD</td>
<td>VCC</td>
</tr>
<tr>
<td>VCC</td>
<td>VCC</td>
</tr>
</table>

:::note
     Esquemático del Seeeduino V4.0 y ESP8266. SW2 muestra la configuración en 5V pero por favor deslízalo hacia 3V3.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Envío de Comandos**

**1.** Conecta tu placa Seeeduino al puerto USB de tu PC.
**2.** Abre el IDE de Arduino
**3.** Sube un programa en blanco a tu placa, o asegúrate de que el programa que tiene no use ninguna función Serial.

```cpp
void setup()
{

    }

    void loop()
{

    }
```

**4.** Abre la ventana "Monitor Serie" de Arduino.

**5.** En la ventana del Monitor Serie cambia tu configuración a "Both NL &amp;CR" y la velocidad de baudios a "9600", o la velocidad de baudios correcta para tu ESP8266 ya que podría ser diferente.

**6.** El ESP8266 está listo para recibir y enviar información/comandos. Intenta enviar "AT+RST" para reiniciar el módulo, luego envía "AT+CWLAP" para listar todos los puntos de acceso que tu ESP8266 es capaz de detectar. Ve la imagen a continuación para una respuesta de ejemplo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png" alt="pir" width={600} height="auto" /></p>

## Seguimiento de Versiones  

A continuación se muestra una lista de cambios que se han hecho a la placa Seeeduino a través de todas las versiones.

<table>
  <tbody>
    <tr>
      <th>Revisión</th>
      <th>Descripciones</th>
      <th>Fecha de Lanzamiento</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width="300px">Seeeduino V0.9</td>
      <td width="500px">Lanzamiento público inicial</td>
      <td width="200px"></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v1.1</td>
      <td>
        1.  Corregido error - vía innecesaria en el cable del Pin4.
        2.  Corregido error - Etiqueta cubierta por error por los interruptores.
        3.  Añadido puerto I2C y de sensor.
        4.  Añadido un capacitor de 100uF para el interruptor vcc.
        5.  Agrupados nuevos pines de cuadrícula de 100mil.
        6.  Reemplazados botones de reinicio con metálicos.
        7.  Reorganizados textos y etiquetas para indicaciones más claras.
      </td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.12</td>
      <td>
        1.  Cero consumo de energía externa cuando está apagado
        2.  Interruptores más fuertes
        3.  Segunda fuente de alimentación para entrada directa de 5V. [Precaución] ¡USA SOLO 5V!
        4.  Capacidad de controlador de 150mA bajo 3.3V
        5.  PCB delgado de 1.0mm para peso más ligero
        6.  Fila extra reservada para cabeceras de pines
      </td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.2</td>
      <td>
        1.  Selección automática de alimentación USB/EXT
        2.  Actualización del capacitor de alimentación
        3.  Limpieza de diseños
        4.  Reinicio más fácil
        5.  Cristal de cuarzo real
        6.  Cambio del diodo de alimentación externa a 1N4004 (más potencia en el pin Vin)
      </td>
      <td>16 Dic, 2010</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.21</td>
      <td>
        1.  Actualizado a conector mini USB más fuerte.
      </td>
      <td>12 Ene, 2011</td>
    </tr>
    <tr>
      <td>Seeeduino v3.0</td>
      <td>
        1.  cambiar conector JST a conector DC Jack
      </td>
      <td>1 Ene, 2012</td>
    </tr>
    <tr>
      <td>Seeeduino v4.0</td>
      <td>
        1.  Remover interruptor RST
        2.  ATMEGA16U2 como chip convertidor de bus USB
        3.  Convertidor DC-a-DC para reducir la disipación de energía
        4.  Micro USB
        5.  Bootloader UNO
      </td>
      <td>1 Sep, 2014</td>
    </tr>
  </tbody>
</table>

## Reporte de Error

- La serigrafía de PWM tiene un error. Los pines de PWM deberían ser D9, D10, D11. Corregiremos este error lo antes posible.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos/Referencias

- **[Eagle]**  [Archivo Eagle de Seeeduino v4.0](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip)
- **[PDF]**[PDF de Seeeduino v4.0](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.pdf)
- **[EAGLE]**[Esquemático de Seeeduino v4.0](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.sch)
- **[PDF]**  [Archivo SCH de Seeeduino v4.0](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_pdf.pdf)
- **[Datasheet]**  [Resumen de ATMEGA328P-MU](http://www.atmel.com/Images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Summary.pdf)
- **[Datasheet]** [Resumen de ATMEGA16U2](http://www.atmel.com/Images/7799S.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
