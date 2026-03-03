---
description: Módulo bluetooth de puerto serie (Maestro/Esclavo)
title: Módulo bluetooth de puerto serie (Maestro/Esclavo)
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Serial_port_bluetooth_module_Master-Slave
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/newblue_LRG.jpg)

Este módulo es un módulo Bluetooth SPP (Protocolo de Puerto Serie) fácil de usar, diseñado para conexiones serie inalámbricas transparentes.

El módulo Bluetooth de puerto serie es completamente compatible con Bluetooth V2.0+EDR (Tasa de Datos Mejorada) 3Mbps Modulación con transceptor de radio completo de 2.4GHz y banda base. Utiliza CSR Bluecore 04-External sistema Bluetooth de chip único con tecnología CMOS y con AFH (Característica de Salto de Frecuencia Adaptativo). Tiene una huella tan pequeña como 12.7mmx27mm. Esperamos que simplifique su ciclo general de diseño/desarrollo.

**Modelo: [WLS123A1M](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)**

## Características  

### Características de hardware  

- Sensibilidad típica de -80dBm
- Hasta +4dBm de potencia de transmisión RF
- Operación de bajo consumo 1.8V, 1.8 a 3.6V I/O
- Control PIO
- Interfaz UART con velocidad de baudios programable
- Antena integrada
- Conector de borde

### Características de software  

- Velocidad de baudios por defecto: 38400, Bits de datos:8, Bit de parada:1, Paridad:Sin paridad, Control de datos: sí. Velocidades de baudios soportadas:

9600,19200,38400,57600,115200,230400,460800.

- Usa CTS y RTS para controlar el flujo de datos.
- Dado un pulso ascendente en PIO0, el dispositivo será desconectado.
- Puerto de instrucción de estado PIO1: bajo-desconectado, alto-conectado;
- PIO10 y PIO11 pueden conectarse a LED rojo y azul respectivamente. Cuando maestro y esclavo están emparejados, los LED rojo

y azul parpadean 1 vez/2s en intervalos. Mientras está desconectado solo el LED azul parpadea 2 veces/s.

- Se conecta automáticamente al último dispositivo al encender por defecto.
- Permite que el dispositivo emparejado se conecte por defecto.
- Auto-emparejamiento PINCODE:"0000" por defecto
- Auto-reconexión en 30 min cuando se desconecta como resultado de estar fuera del rango de conexión.

## Ideas de aplicación  

- Controlador remoto
- Comunicación inalámbrica

## Precauciones  

- Mientras se usa con Seeeduino / Arduino, configure el voltaje de operación a 5V. De lo contrario use un convertidor de nivel lógico apropiado.
- Mientras se usa con UartSBee, configure el voltaje de operación a 5V
- El comando para cambiar la velocidad de baudios es persistente incluso después del reinicio. Por lo tanto recuerde la velocidad de baudios para el próximo uso.

## Especificación  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-module-pin.JPG)

<table >
<tr>
<th>Pin</th>
<th>#</th>
<th>Tipo de Pad</th>
<th>Descripción</th>
</tr>
<tr>
<td width="100px">PIO11</td>
<td width="100px">34</td>
<td width="350px">Bi-Direccional</td>
<td width="450px">Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO10</td>
<td>33</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO9</td>
<td>32</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO8</td>
<td>31</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO7</td>
<td>30</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO6</td>
<td>29</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO5</td>
<td>28</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO4</td>
<td>27</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO3</td>
<td>26</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO32</td>
<td>25</td>
<td>Bi-Direccional</td>
<td>Línea de entrada/salida programable</td>
</tr>
<tr>
<td>PIO1</td>
<td>24</td>
<td>Bi-Direccional TX EN</td>
<td>Línea de entrada/salida programable, salida de control para PA(si está instalado)</td>
</tr>
<tr>
<td>PIO0</td>
<td>23</td>
<td>Bi-Direccional RX EN</td>
<td>Línea de entrada/salida programable, salida de control para LNA(si está instalado)</td>
</tr>
<tr>
<td>GND</td>
<td>13,21,22</td>
<td>VSS</td>
<td>Punto de tierra</td>
</tr>
<tr>
<td>USB±</td>
<td>15,20</td>
<td>Bi-Direccional</td>
<td></td>
</tr>
<tr>
<td>SPI_CLK</td>
<td>19</td>
<td>Entrada CMOS con pull-down interno débil</td>
<td>Reloj de interfaz periférica serie</td>
</tr>
<tr>
<td>SPI_MISO</td>
<td>18</td>
<td>Entrada CMOS con pull-down interno débil</td>
<td>Salida de datos de interfaz periférica serie</td>
</tr>
<tr>
<td>SPI_MOSI</td>
<td>17</td>
<td>Entrada CMOS con pull-down interno débil</td>
<td>Entrada de datos de interfaz periférica serie</td>
</tr>
<tr>
<td>SPI_CSB</td>
<td>16</td>
<td>Entrada CMOS con pull-up interno débil</td>
<td>Selección de chip para interfaz periférica serie, activo bajo</td>
</tr>
<tr>
<td>NC</td>
<td>14</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.3VCC</td>
<td>12</td>
<td>3.3V</td>
<td>Suministro integrado de 3.3V(+) con salida de regulador lineal en chip dentro de 3.15-3.3V</td>
</tr>
<tr>
<td>RESETB</td>
<td>11</td>
<td>Entrada CMOS con pull-up interno débil</td>
<td>Reinicio si está bajo (mantenido externamente)</td>
</tr>
</table>

## Instrucciones del Software  

#### Mapa de Funcionamiento  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-1.jpg)

#### Diagrama de Flujo  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-2.jpg)

#### Comandos para cambiar la configuración predeterminada  

**1. Establecer MODO de trabajo**

<table>
<tr>
<td width="200px">\r\n+STWMOD=0\r\n</td>
<td width="400px">Establecer el modo de trabajo del dispositivo como cliente (esclavo). Guardar y Reiniciar.</td>
</tr>
<tr>
<td>\r\n+STWMOD=1\r\n</td>
<td>Establecer el modo de trabajo del dispositivo como servidor (maestro). Guardar y Reiniciar.</td>
</tr>
</table>

**Nota:** **\r\n** es necesario para la operación y el valor son **0x0D 0x0A** en Hex. **\r** y **\n** representan **retorno de carro** y **avance de línea**(o siguiente línea),

**2.Establecer BAUDRATE**

<table>
<tr>
<td width="200px">\r\n+STBD=115200\r\n</td>
<td width="400px">Establecer baudrate 115200. Guardar y Reiniciar.</td>
</tr>
<tr>
<td colspan="2">Baudrate soportado: 9600, 19200,38400,57600,115200,230400,460800.</td>
</tr>
</table>

**3. Establecer NOMBRE del Dispositivo**

<table>
<tr>
<td width="200px">\r\n+STNA=abcdefg</td>
<td width="400px">Establecer nombre del dispositivo como "abcdefg". Guardar y Reiniciar.</td>
</tr>
</table>

**4. Conectar automáticamente el último dispositivo emparejado al encender**

<table>
<tr>
<td width="200px">\r\n+STAUTO=0\r\n</td>
<td width="400px">Conexión automática prohibida. Guardar y Reiniciar.</td>
</tr>
<tr>
<td width="200px">\r\n+STAUTO=1\r\n</td>
<td width="400px">Permitir conexión automática. Guardar y Reiniciar.</td>
</tr>
</table>

**5. Permitir que el dispositivo emparejado se conecte a mí**

<table>
<tr>
<td width="200px">\r\n+STOAUT=0\r\n</td>
<td width="400px">Prohibido. Guardar y Reiniciar.</td>
</tr>
<tr>
<td width="200px">\r\n+STOAUT=1\r\n</td>
<td width="400px">Permitir. Guardar y Reiniciar.</td>
</tr>
</table>

**6. Establecer PINCODE**

<table>
<tr>
<td width="200px">\r\n +STPIN=2222\r\n</td>
<td width="400px">Establecer pincode "2222", Guardar y Reiniciar.</td>
</tr>
</table>

**7. Eliminar PINCODE(introducir PINCODE por MCU)**

<table>
<tr>
<td width="200px">\r\n+DLPIN\r\n</td>
<td width="400px">Eliminar pincode. Guardar y Reiniciar.</td>
</tr>
</table>

**8. Leer CÓDIGO DE DIRECCIÓN local**

<table>
<tr>
<td width="200px">\r\n+RTADDR\r\n</td>
<td width="400px">Devolver dirección del dispositivo.</td>
</tr>
</table>

**9. Reconexión automática cuando el dispositivo maestro está fuera del rango válido (el dispositivo esclavo se reconectará automáticamente en 30 min cuando esté fuera del rango válido)**

<table>
<tr>
<td width="200px">\r\n+LOSSRECONN=0\r\n</td>
<td width="400px">Prohibir reconexión automática.</td>
</tr>
<tr>
<td width="200px">\r\n+LOSSRECONN=1\r\n</td>
<td width="400px">Permitir reconexión automática.</td>
</tr>
</table>

#### Comandos para Operación Normal  

**1. Consultar**

<table>
<tr>
<td colspan="2" width="600px">**a) Maestro**</td>
</tr>
<tr>
<td width="200px">\r\n+INQ=0\r\n</td>
<td width="400px">Detener Consulta</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>Comenzar/Reiniciar Consulta</td>
</tr>
<tr>
<td colspan="2" width="600px">**b) Esclavo**</td>
</tr>
<tr>
<td>\r\n+INQ=0\r\n</td>
<td>Deshabilitar ser consultado</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>Habilitar ser consultado</td>
</tr>
</table>

Cuando el comando **+INQ=1** es exitoso, los LEDs rojo y verde parpadean alternativamente.

**2. El módulo Bluetooth devuelve el resultado de la consulta**

<table>
<tr>
<td width="250px">\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n</td>
<td width="500px">Dispositivo Bluetooth serie con la dirección "aa,bb,cc,dd,ee,ff" y el nombre "name" es consultado</td>
</tr>
</table>

**3. Conectar dispositivo**

<table>
<tr>
<td width="250px">\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n</td>
<td width="500px">Conectar a un dispositivo con dirección "aa,bb,cc,dd,ee,ff"</td>
</tr>
</table>

**4. El módulo Bluetooth solicita ingresar PINCODE**

\r\n+INPIN\r\n

**5. Ingresar PINCODE**

<table>
<tr>
<td colspan="2">\r\n+RTPIN=code\r\n</td>
</tr>
<tr>
<td>Ejemplo: RTPIN=0000</td>
<td>Ingresar PINCODE que son cuatro ceros</td>
</tr>
</table>

**6. Desconectar dispositivo** Poner PIO0 en alto desconectará el dispositivo Bluetooth actualmente en funcionamiento.

**7. Devolver estado** \r\n+BTSTA:**xx**\r\n
 **xx** estado:

- 0 - Inicializando
- 1 - Listo
- 2 - Consultando
- 3 - Conectando
- 4 - Conectado

(**Nota:** Esto no es un comando, sino la información devuelta por el módulo después de cada comando)  

## Idea Adicional  

- [Cómo configurar la conexión de PC con Serial Bluetooth Grove](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

- [Configurar conexiones entre dos módulos Bluetooth paso a paso](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

## Recursos  

- **[Software]**   [Instrucciones de software](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_Software_Instruction.pdf)

- **[Hoja de datos]**  [Hoja de datos del módulo Bluetooth](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_module.pdf)

## Soporte  

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

## Cómo comprar  

Haz clic aquí para comprar: [Módulo bluetooth de puerto serie (Maestro/Esclavo)](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)

## Ver También  

- [Grove - Serial Bluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

- [Bluetooth Bee - Independiente](https://www.seeedstudio.com/depot/bluetooth-bee-standalone-p-1157.html?cPath=139_142)

- [Bluetooth Shield](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=132_134)

- [Bluetooth Bee](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), ver archivos de código fuente para detalles.

## Enlaces Externos  

Enlaces a páginas web externas que proporcionan más ideas de aplicación, documentos/hojas de datos o librerías de software

## Proyectos Relacionados

Si quieres hacer algunos proyectos increíbles con el módulo bluetooth de puerto serie, aquí hay algunos proyectos de referencia.

### Controlar Múltiples Motores Servo Desde una App Android

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Control_Multiple_servo_Motor_From_android_app.jpg)

Esta es una demostración interesante hecha con Arduino y [Grove](https://seeeddoc.github.io/Grove_System/).
Este es un tutorial completo sobre cómo controlar múltiples motores servo desde una app android.

[**Quiero hacerlo.**](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)

### Comparte Tus Proyectos Increíbles Con Nosotros

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa lo que seas y lo que hayas hecho, hacker, maker, artista e ingenieros,

mientras comiences a compartir tus trabajos con otros,

estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://www.seeedstudio.com/recipe/), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

- Los Usuarios Principales, son aquellos que muestran altos intereses y contribuciones significativas en los productos de Seeed.
- Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos comentarios valiosos de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y para la mayoría de casos si nuestros Usuarios Principales tienen buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios de PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

<font color="#FF0000">Obtén más información sobre Usuario Principal por favor envía un email a: recipe@seeed.cc</font>

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
