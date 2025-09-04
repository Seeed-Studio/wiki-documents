---
description: Atom Node
title: Atom Node
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Atom_Node
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

Es posible que quieras crear un sistema de alarma DIY para monitorear la humedad del suelo en tu jardín. Mientras aún estás acostado cómodamente en la cama por la mañana temprano, podrías necesitar un dispositivo que automáticamente abra la caseta del perro para que tu mascota salga y disfrute de la cálida luz del sol. Sin embargo, el complejo software y hardware te detienen. Ahora, aquí llega Atom barriendo el camino a través de los cardos y espinas; ayudándote a completar estos maravillosos proyectos caseros.

Atom es un nodo en el internet de las cosas. No solo puede trabajar de forma independiente sino también coordinarse con otros dispositivos. Atom es altamente expandible y fácil de usar. Las interfaces estándar Grove permiten conexiones con diferentes sensores. Atom cumple tareas de manera inteligente: los abundantes datos recopilados se transmiten al actuador de forma inalámbrica. Lo que es más fascinante es que puedes terminar todas las tareas simplemente configurando tu teléfono Android.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom cuenta con transmisión inalámbrica de datos y monitoreo móvil. Equipado con interfaz estándar Bee, los Atoms pueden conectarse a XBee, RFBee y Bluetooth Bee para formar una red de comunicación inalámbrica, que recopila y gestiona los datos automáticamente. Atom también puede subir los datos de diferentes sensores a la Nube, haciendo conveniente analizar datos en todo momento y lugar simplemente a través de navegadores Web.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)

## Características

---
- Configuración centrada en dispositivos móviles/Apps
- Código Abierto
- Topología flexible de redes inalámbricas desde Ad-hoc hasta mesh
- Batería incorporada
- Una variedad de Indicadores, Fácil de distinguir el estado de trabajo
- Filosofía Piel-Esqueleto-Tripas

## Especificaciones

---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Típico</th>
<th scope="col">Unidad</th>
</tr>
<tr>
<th scope="row">Voltaje de Alimentación USB</th>
<td>4.75-5.25</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Corriente de Reposo(conectar RF Bee)</th>
<td>25~40</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Voltaje GPIO</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Capacidad de Batería</th>
<td>300</td>
<td>mAH</td>
</tr>
<tr>
<th scope="row">Corriente de Carga</th>
<td>300-500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Interfaz USB</th>
<td>MICRO USB</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Frecuencia de Trabajo</th>
<td>16</td>
<td>MHz</td>
</tr>
<tr>
<th scope="row">Voltaje de Alimentación Grove</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Corriente de Salida(Máx)</th>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Tiempo de Trabajo Continuo(Máx)</th>
<td>22</td>
<td>h</td>
</tr>
<tr>
<th scope="row">Frecuencia de Respuesta del Sensor Fotosensible</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">Indicación de Batería Baja</th>
<td>3.71</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Frecuencia de respuesta del sensor fotosensible</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">Distancia de Comunicación RF BEE (seeed) (Máx) en exteriores</th>
<td>200</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Distancia de Comunicación Xbee(Xbee) (Máx) en exteriores</th>
<td>30</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Distancia de Comunicación Bluetooth Bee(seeed) (Máx) en exteriores</th>
<td>20</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Conector Grove</th>
<td>3(IIC;UART;PWM)</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Socket Bee de 20 Pines</th>
<td>Compatible con Rfbee,Xbee,Bluetooth Bee</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Indicador de carga de dos colores</th>
<td>Verde/Rojo</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Indicador de usuario de dos colores</th>
<td>Verde/Rojo</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Frecuencia del Zumbador</th>
<td>2.7±0.3</td>
<td>K</td>
</tr>
</table>

## Topología

Atom Node tiene conectores de sensor/actuador para funcionar solo. Con XBee u otros módulos de comunicación RF abiertos, también está listo para comunicarse en topologías de red versátiles cuando se usa en múltiples. Por ejemplo:

**1. El primer Modo:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

En este modo, el sensor y el actuador están conectados a un Atom Node. Atom Node lee los datos del sensor y determina si activar el Actuador para ejecutar acciones relacionadas. La Demo 1 en el uso está funcionando en este modo.

**2. El segundo Modo:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

En este modo, el sensor y el actuador están conectados a dos Atom Node. Atom Node recibe los datos del sensor que son enviados por otro Atom Node a través de RFBee y determina si activar su propio actuador para ejecutar acciones relacionadas. La Demo 2 en el uso está funcionando en este modo.

**3. El tercer Modo:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

En este modo, el sensor está conectado a un Atom Node (aquí lo llamamos AtomSensor). Otros Atom Nodes reciben los datos del sensor que son enviados por AtomSensor a través de RFBee y determinan si activar su propio actuador para ejecutar acciones relacionadas.

## La Estructura

Las soluciones Node están diseñadas alineadas con la filosofía SSG (piel esqueleto intestino).
Intestino: electrónicos en el interior

Esqueleto: Un marco de aluminio mínimo para protección y fijación, dejando suficientes aberturas para atender varios sensores/actuadores

Tamaño del Producto:82mm*63.5mm*17mm

Material:Aluminio 5052

Acabado: Anodizado Negro/Plateado

Características Destacadas: Estructura de bisagra

Limpieza de Piezas: Eliminar todas las rebabas y esquinas afiladas. Limpiar todos los aceites, suciedad u otros contaminantes

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Esperemos con ansias estos prototipos...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

## El Hardware

---
El sistema adopta Atmel 32U4 como el chip principal. Y está equipado con socket de interfaz Bee estándar para comunicación inalámbrica. Adopta alimentación de 3.3V, y la interfaz de alimentación externa es Micro USB. Cuando se conecta con fuente de alimentación externa, se convertirá a 3.3V a través del circuito de voltaje ajustable DC‐DC (basado en chip TD6810), y suministrará energía para todo el sistema. Mientras tanto, la fuente de alimentación de 5V carga la batería de Litio a través del IC gestor de carga CN3065.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC, un Microcontrolador AVR de 8-bit;

**U3:** TD6810-ADJ IC, Regulador Reductor Síncrono de 1.5MHz 800mA Dropout;

**U4:** CN3065 IC, Chip de gestión de carga.

**Micro USB:** Carga para Batería de Litio y programación.

**Indicador de Carga:** Durante el proceso de carga, el indicador es rojo; cuando termina la carga, se vuelve verde. Cuando no está conectado a fuente de alimentación externa o cuando la batería está en estado normal, el indicador no se encenderá. Cuando está en nivel de batería baja (no conectar a alimentación externa), muestra rojo.

**Indicador de Usuario:** El parpadeo verde indica transmisión de datos, el parpadeo rojo indica inicialización. La luz roja indica en modo de configuración.

**Sensor de Luz:** Recibe parámetros codificados que envía el dispositivo Android.

**Conector ADC:** Puede conectar Sensores (no es conector IIC).

**Conector PWM:** Puede conectar Actuadores (no es conector IIC).

**Conector IIC:** Puede conectar Sensores o Actuadores (es conector IIC).

**<font color="red">Nota:</font>** Un atom node no puede conectar simultáneamente dos o más Sensores (Actuadores).

**Características Clave**

- MCU compatible con Arduino

- Batería LiPo y circuito cargador

- LED/LDR para configuración de parámetros

- Conector Sensor/Actuador

- Socket compatible con XBee

- Cable Micro USB para programación y alimentación

- Diseño de bajo consumo

**Diagrama de Bloques**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Beacon_ATOM_hardware.jpg)

**Instrucción de diseño de hardware**

[https://www.seeedstudio.com/wiki/images/1/1b/Beacon_Atom_Hardware_Design_Analysis_.pdf](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

**Descripción General de Atom Node**

Ahora veamos cómo se ve Atom Node.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Hardware_View.jpg)

## El firmware y el software

---

### El firmware

El firmware que se ha cargado en Atom Node puede controlar sensores y actuadores.
Sensores disponibles para Atom Node:

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">Nombre</th>
<th scope="col">Tipo</th>
<th scope="col">Modo de Control</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Grove - Button</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Grove - Tilt Switch</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Grove - Line Finder</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Grove - PIR Motion Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Grove - Infrared Reflective Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Grove - Magnetic switch</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Grove - Touch Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Grove - IR Distance Interrupter</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Grove - Hall Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Grove - Collision Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Grove - Moisture sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Grove - Light Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Grove - Rotary Angle Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">44</th>
<td>Grove - Temprature Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">45</th>
<td>Grove - Water Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">46</th>
<td>Grove - 80cm Infrared Proximity Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">47</th>
<td>Grove - Infrared Temperature Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">48</th>
<td>Grove - Slide Potentiometer</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">59</th>
<td>Grove - Air quality sensor 1.0</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">50</th>
<td>Grove - Electricity Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">51</th>
<td>Grove - Alcohol Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
</table>

Actualmente puede controlar casi todos los sensores. Es visible que el firmware es potente.
Actuadores disponibles para Atom Node:

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">Nombre</th>
<th scope="col">Tipo</th>
<th scope="col">Modo de Control</th>
</tr>
<tr>
<th scope="row">128</th>
<td>Grove - Relay</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">129</th>
<td>Grove - LED</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">135</th>
<td>Grove - Multi Color Flash LED (5mm)</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">136</th>
<td>Grove - Variable Color LED</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">137</th>
<td>Grove - Buzzer</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">138</th>
<td>Grove - Vibrator</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">201</th>
<td>Grove - OLED Display 128*64</td>
<td>Actuador</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">202</th>
<td>Grove - OLED 96x96</td>
<td>Actuador</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">223</th>
<td>Grove - LED Bar</td>
<td>Actuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">224</th>
<td>Grove - Infrared Emitter</td>
<td>Actuador</td>
<td>IR</td>
</tr>
</table>

### El software

Existe un programa de aplicación para configurar los módulos Atom Node. El programa se ejecuta en dispositivos Android. Durante el proceso de configuración, el área de pantalla del dispositivo Android parpadeará para transmitir parámetros codificados al Atom Node a través de un transistor fotosensible. La interfaz de configuración se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Configuration_Interface_.png)

## Uso

---
Atom Node es una solución de hardware de código abierto para el Internet de las Cosas, que puede soportar varios sensores y actuadores Grove para recopilar datos físicos y realizar ciertas acciones. El Atom Node necesita ser configurado antes de ser puesto en uso. Después de la configuración, varios módulos pueden recopilar y transmitir datos de forma inalámbrica a través de RFBee.

Nos gustaría tomar el sensor de temperatura como ejemplo para ilustrar el uso del Atom Node. Intentemos hacer que esto suceda: cuando la temperatura exceda los 28 ℃, sonará un zumbador.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Effect_diagram.jpg)

**Trabajo preparatorio:**
Para usar el dispositivo, necesitas al menos un RFBee/Xbee (cuando uses solo un Atom Node, no es necesario) y un dispositivo Android (el Atom Node no lo incluye). Si quieres que el Atom Node funcione, son esenciales. Y por favor asegúrate de que la velocidad de baudios del RFBee/XBee esté configurada en 57,600. Si no, necesitas modificar la configuración, usando tu propio método o subir la demostración del [archivo de biblioteca:RFBee](https://files.seeedstudio.com/wiki/Atom_Node/res/RFBee.zip) al RFBee. Luego descarga [el paquete del programa de aplicación:BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip) e instálalo en un dispositivo Android.

### Demo 1: Usar un Atom Node

Ahora usando un Atom Node trabajando en modo IFTTT, sigue los pasos a continuación:

<!-- *   Conecta un Grove - Temperature al puerto ADC y Grove - Buzzer al puerto PWM usando [cables universales de 4 pines Grove](/es/Grove_System/#grove-cables). -->

- Conecta el RFBee en el Socket Bee.
- Presiona el botón en un lado del Atom Node para encenderlo. El LED en el otro lado se encenderá. Luego presiona el botón nuevamente para hacer que el Atom Node entre en modo de configuración. Mientras tanto, el indicador de usuario está rojo.

- Abre la aplicación Atom Node; puedes ver la siguiente interfaz:

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Interface1.jpg)

- Haz clic en el signo más en la esquina superior derecha para agregar un dispositivo, aparecerá un panel de selección.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface2.jpg)

Hagamos una pausa por un momento para introducir brevemente la interfaz.

1) Nombre del Dispositivo: esto puede ser cualquier palabra. Como "Sensor-temperatura" o cualquier palabra que te guste.

2) Sensor: elige un sensor.

3) El resto de la configuración es para el Actuador. Si no necesitas uno, elige NULL y el resto de las opciones se ignoran automáticamente.

Ahora configurémoslo y establecemos el nombre del dispositivo como "temp".

- Consulta la imagen a continuación, Ingresa "temp" como el nombre del dispositivo. Elige "Grove - Temperature" en "Sensor" y elige "Grove - Buzzer" en Actuador. Elige cualquier otra opción además de "Null" en "Sensor Radio Frequency", Ingresa el valor "if" y elige on en "then":
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface9.png)

<font color="red">En modo independiente, la fuente de activación debe elegir el dispositivo mismo, por lo tanto debes elegir "temp" en el cuadro desplegable de "Trigger from". Pero ahora solo hay una opción "Null". Solo ignora este problema. Después de que veas el nombre del dispositivo en la lista de dispositivos, puedes reconfigurar cuando el nombre del dispositivo aparezca en "Trigger from".</font>

- Colócalo en la pantalla del dispositivo Android. Nota que el sensor de luz está mirando hacia la pantalla. Es mejor que el brillo de la pantalla esté configurado alrededor del 35%.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface3.jpg)

<!-- *   Haz clic en "Submit". Comenzará la configuración. <font color="red">Después de una configuración exitosa, el indicador de usuario se enciende en verde y parpadea.</font>Si la configuración falla, haz clic en Again. Si sigue fallando, puedes consultar [FAQ](/es/Atom_Node). -->

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface4.jpg)

- Hemos completado la configuración, puedes verla en la lista de dispositivos ahora.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

<font color="red">Recuerda que acabas de seleccionar la fuente de activación como Null. Necesitas reconfigurarla.</font>

- Una vez que el sensor de temperatura lea un valor que exceda los 28 ℃, el zumbador sonará.

### Demo 2: Usar dos Atom Node

Usando dos Atom Nodes trabajando en modo IFTTT, puedes seguir los pasos a continuación:

- Conecta un Grove - Temperature al puerto ADC del Atom Node y conecta un RFBee (Velocidad de baudios 57,600) al socket Bee.

- Conecta un Grove - Buzzer al puerto PWM de otro Atom Node y conecta un RFBee al Socket bee.

- Abre la aplicación Atom Node. Haz clic en el signo más en la esquina superior derecha. Establecemos el nombre del dispositivo como "temp" y elegimos Grove - Temperature en "sensor" como sigue:
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface6.jpg)

- Enciende el Atom Node y entra en modo de configuración presionando el botón, luego colócalo en la pantalla Android. Haz clic en Submit. Comenzará la configuración.

- Después de completar la configuración de un Atom Node, puedes verlo en la lista de dispositivos.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

- Luego configura el otro Atom Node, conectando un Grove - Buzzer de manera similar.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface7.jpg)

Al configurar el actuador, establece el nombre del actuador. Luego elige la fuente de activación del actuador en "Trigger from". Nos gustaría usar el dispositivo previamente configurado "temp" para activar el actuador: por lo tanto deberíamos elegir "temp" en el cuadro desplegable de "Trigger from". Hay algunas otras condiciones de activación y acciones, como "If" y "then" que te ayudan a construir un enlace entre una cierta condición y las acciones correspondientes. Por cierto, los valores de "If" siempre deben seguir el tipo de datos del Sensor que usaste.

- Cuando los dos Nodos han sido configurados, comenzará a funcionar. Entonces puedes ver que el LED del usuario está verde.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface8.jpg)

## Descripción del Estado de Funcionamiento

---
<table cellspacing="0">
<tr>
<th scope="col">Operación</th>
<th scope="col">Estado</th>
</tr>
<tr>
<th> Presionar el botón de encendido</th>
<td> El LED de encendido se encenderá(Azul)</td>
</tr>
<tr>
<th> Presionar el botón de encendido después de encender el Atom Node</th>
<td> El LED de encendido está encendido(Azul), el LED del usuario se encenderá(si no está emparejado, el LED del usuario es rojo; Después de emparejarse exitosamente, el LED del usuario es verde y parpadea)</td>
</tr>
<tr>
<th> Presionar el botón de encendido cuando está en modo de configuración</th>
<td> El LED de encendido está encendido(Azul), el LED del usuario se apagará</td>
</tr>
<tr>
<th> Presión larga del botón de encendido</th>
<td> Todos los LED se apagarán y el Zumbador sonará</td>
</tr>
<tr>
<th> Doble clic del botón de encendido</th>
<td> El Indicador del usuario se apagará o encenderá</td>
</tr>
<tr>
<th> Cuatro clics del botón de encendido</th>
<td> todos los indicadores mantienen sus estados</td>
</tr>
<tr>
<th> Conectar el Atom Node a la PC usando cable USB</th>
<td> El LED de carga se encenderá(El LED de carga es rojo durante la carga, Después de completar la carga, el LED de carga es Verde), el LED de encendido se encenderá</td>
</tr>
</table>

## Actualizar el firmware

---

### Conectar el dispositivo e instalar el controlador

- Descarga [el Archivo del Controlador de Atom Node](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Driver.zip) y guárdalo.
- Conecta el cable Micro-USB al Atom Node y conecta el otro extremo del conector Micro-USB al puerto USB de la computadora.
- Espera el aviso de nuevo hardware encontrado. Si el instalador no se ejecuta automáticamente, navega al Administrador de dispositivos de Windows y busca la entrada de Seeeduino Lite.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/A_Unknow_Device.jpg)

- Haz clic derecho y elige Actualizar controlador. Cuando se te pregunte si instalar automáticamente o desde una ubicación específica, selecciona "Buscar software de controlador en mi equipo".

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_Driver.jpg)

- Elige "Buscar el mejor controlador en estas ubicaciones", y marca la casilla "incluir esta ubicación en la búsqueda". Haz clic en el botón Examinar y navega a la unidad que has descargado. Selecciona la carpeta drivers y haz clic en **Aceptar**.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Browse_the_Driver.jpg)

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_the_Driver.jpg)

### Modificar archivos: boards.txt y USBCore.cpp

- Abre el directorio Arduino-1.0.1/hardware/arduino/cohttps://files.seeedstudio.com/wiki/Atom_Node/res/arduino, reemplaza el archivo: USBCore.cpp con [el nuevo USBCore.cpp](https://files.seeedstudio.com/wiki/Atom_Node/res/USBCore.zip).

- Y reemplaza el archivo: boards.txt con [el nuevo boards.txt](https://files.seeedstudio.com/wiki/Atom_Node/res/Boards-Atom_Node-.txt) en la ruta: Arduino-1.0.1/hardware/arduino.

### Descargar los archivos de biblioteca requeridos y el firmware de Atom.Node

- El firmware más reciente de Atom.Node: [https://github.com/reeedstudio/Atom_Node](https://github.com/reeedstudio/Atom_Node)

- La biblioteca más reciente de Atom.Node: [https://github.com/reeedstudio/Atom_Node_Libraries](https://github.com/reeedstudio/Atom_Node_Libraries)

### Cargar programa usando Arduino IDE

- Abre el archivo Atom_Node.ino del firmware de Atom.Node

- Selecciona Seeeduino Node del menú Herramientas | Placa del entorno Arduino. Y selecciona el puerto correcto.
- Compila y carga el código.

Ahora has completado la actualización del firmware.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Atom_Node_Eagle_File.zip](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip)

- [Biblioteca de Atom Node](https://github.com/reeedstudio/Atom_Node_Libraries)

- [Firmware de Atom Node](https://github.com/reeedstudio/Atom_Node)

- [El programa de aplicación: BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip)

- [Instrucciones de diseño de hardware](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

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
