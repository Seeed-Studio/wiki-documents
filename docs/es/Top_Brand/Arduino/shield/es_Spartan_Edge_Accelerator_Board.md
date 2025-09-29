---
description: Spartan_Edge_Accelerator_Board
title: Placa Aceleradora Spartan Edge

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Spartan-Edge-Accelerator-Board
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-wiki.jpg" alt="pir" width={600} height="auto" /></p>

La Placa Aceleradora Spartan Edge (Placa SEA en resumen) es una placa de desarrollo FPGA ligera, está basada en el chip Xilinx Spartan-7 y sigue el factor de forma de shield de Arduino. Por lo tanto, puedes usarla como un shield de Arduino para controlar una LCD y una cámara o como una placa de desarrollo FPGA independiente. Además, con la ayuda del chip ESP32 integrado, la placa SEA también habilita tu Arduino con función WiFi y Bluetooth.

**Spartan-7** es el chip FPGA más nuevo y más rentable de la familia FPGA de Xilinx, ofrece el mejor rendimiento por vatio de su clase.

Además de eso, proporcionamos las APIs completas de FPGA para Arduino, lo que significa que los usuarios de Arduino pueden usar la función FPGA sin saber nada sobre FPGA. Esta placa ampliará la capacidad de Arduino de muchas maneras como procesamiento simple de imágenes y aplicaciones de visión por computadora, cifrado y descifrado de señales, y muestreo y procesamiento de señales.

## Características

#### Procesamiento de imágenes de alta velocidad

- Interfaz mipi integrada, mini HDMI
- Compatible con cámara Raspberry Pi v1.0 (OV5640)
- Soporte máximo para transmisión de imágenes a 30fps

#### Internet de las Cosas cifrado

- IoT WiFi y Bluetooth con ESP32
- Compatible con AWS, Azure y otros servicios en la nube
- Compatible con algoritmo de cifrado por software

#### Múltiples extensiones de puerto I/O

- 20 puertos I/O extendidos definidos por el usuario (Modo independiente)
- 10 puertos I/O extendidos definidos por el usuario (Modo shield de Arduino)
- APIs completas de FPGA para Arduino

#### Módulos funcionales integrados

- ADC y DAC de 8 bits
- Acelerómetro y giroscopio de 6 ejes
- 2 LEDs RGB de usuario y botones

#### Dos modos de desarrollo personalizados

- Modo Shield de Arduino
- Modo FPGA Independiente

_Observaciones: Los usuarios pueden elegir diferentes cabezales de pines según diferentes necesidades y soldar los pines según sus necesidades de desarrollo._

## Usuarios objetivo

- Desarrolladores de Arduino
- Desarrolladores de IoT
- Desarrolladores de FPGA

## Casos Aplicables

- Entrada de cámara MIPI y salida HDMI ingeniería Vivado
- LED integrado, interruptor DIP, caso de referencia ADC y DAC
- Caso de giroscopio integrado
- Proporcionar expansión GPIO/UART/ADC/DAC/RGB-LED para Arduino
- Caso de generador de señales (requiere configuración de Arduino)
- Caso de generador de señales controlado por ESP32
- Usar el caso de plataforma IoT AWS GreenGrass
- Caso de reconocimiento de colores y seguimiento de objetos
- Caso de reconocimiento gráfico (reconocimiento de triángulo, círculo y cuadrado)
- Caso de Reconocimiento de Caracteres Digitales
- Implementación del algoritmo de cifrado y descifrado AES en FPGA
- Implementación del algoritmo PID en la FPGA

_Nuevas aplicaciones serán actualizadas............._

Para más recursos de casos, por favor visita [esta página de Github.](https://github.com/Pillar1989)

## Especificaciones

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parámetro</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>FPGA</h4></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>Chip FPGA</h4></td>
    <td><h4>Spartan-7 XC7S15</h4></td>
  </tr>  
  <tr>
    <td><h4>Celdas Lógicas</h4></td>
    <td><h4>12,800</h4></td>
  </tr>
  <tr>
    <td><h4>Slics</h4></td>
    <td><h4>2000</h4></td>
  </tr>
  <tr>
    <td><h4>Flip-Flops CLB</h4></td>
    <td><h4>16000</h4></td>
  </tr>
  <tr>
    <td><h4>RAM Distribuida Máx. (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>RAM de Bloque/FIFO c/ ECC (36 kb cada uno)</h4></td>
    <td><h4>10</h4></td>
  </tr>
    <tr>
    <td><h4>RAM Distribuida Máx. (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>RAM de Bloque Total (Kb)</h4></td>
    <td><h4>360</h4></td>
  </tr>
  <tr>
    <td><h4>RAM Distribuida Máx. (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>Tiles de Gestión de Reloj (1 MMCM + 1 PLL)</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Slices DSP</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h3>Inalámbrico</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>Chip Inalámbrico</h4></td>
    <td><h4>Espressif ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>WiFi</h4></td>
    <td><h4>802.11 b/g/n 2.4GHz</h4></td>
  </tr>
  <tr>
    <td><h4>Bluetooth</h4></td>
    <td><h4>Bluetooth 4.1 con BLE</h4></td>
  </tr>
  <tr>
    <td><h3>Periférico</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>Video</h4></td>
    <td><h4>Mini HDMI x1</h4></td>
  </tr>
  <tr>
    <td><h4>Cámara</h4></td>
    <td><h4>Interfaz CSI/MIPI x1 (compatible con Raspberry Pi Camera V1 - OV5640)</h4></td>
  </tr>
  <tr>
    <td><h4>Tarjeta SD</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h4>Slices DSP</h4></td>
    <td><h4>Ranura para tarjeta Micro SD/TF x1</h4></td>
  </tr>
  <tr>
    <td><h4>GPIO FPGA</h4></td>
    <td><h4>Conector de 10 pines (IO9~IO0)</h4></td>
  </tr>
  <tr>
    <td><h4>GPIO Arduino</h4></td>
    <td><h4>Conector de 32 pines (factor de forma Arduino)</h4></td>
  </tr>
  <tr>
    <td><h4>Grove</h4></td>
    <td><h4>Conector Grove x2 (I2C/D2)</h4></td>
  </tr>
  <tr>
    <td><h4>LED</h4></td>
    <td><h4>LED Monocromático x2<br/>LED RGB x2</h4></td>
  </tr>
  <tr>
    <td><h4>Botón</h4></td>
    <td><h4>Boot x1<br/>Reset x1<br/>Reset FPGA x1<br/>Usuario x2</h4></td>
  </tr>
  <tr>
    <td><h4>Interruptor</h4></td>
    <td><h4>Interruptor de Modo de Alimentación x1<br/>Interruptor DIP de 5 Canales x1</h4></td>
  </tr>
  <tr>
    <td><h3>Alimentación</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>Voltaje de Operación</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>Voltaje IO</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>Modo de Alimentación</h4></td>
    <td><h4>USB Tipo C 5V<br/>VIN 8~17V<br/>Arduino Micro USB 5V</h4></td>
  </tr>
  <tr>
    <td><h3>Otros</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>ADC</h4></td>
    <td><h4>ADC1173 de 8 bits</h4></td>
  </tr>
  <tr>
    <td><h4>Acelerómetro y Giroscopio</h4></td>
    <td><h4>LSM6DS3TR de 6 ejes</h4></td>
  </tr>
  </tbody></table>

:::caution
El voltaje de E/S del shield SEA es de 5V, y el voltaje de E/S del FPGA es de 3.3V, por lo que hicimos un divisor de voltaje para hacer compatibles los voltajes de E/S. El voltaje de E/S de 3.3V de la serie SAM D21 será menor a 3.3V después de la división de voltaje, lo cual no es suficiente para manejar la E/S del FPGA. Por lo tanto, actualmente, la placa de desarrollo SEA solo soporta placas Arduino de E/S de 5V, como [Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html) y [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html).
:::

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-pin.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Número</h3></td>
    <td><h3>Detalle</h3></td>
  </tr>
  <tr>
    <td><h4>1</h4></td>
    <td><h3>FPGA : XC7S15-1FTGB196C</h3></td>
  </tr>
  <tr>
    <td><h4>2</h4></td>
    <td><h4>WiFi/Bluetooth : ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>3</h4></td>
    <td><h4>Acelerómetro y Giroscopio de 6 ejes : LSM6DS3TR</h4></td>
  </tr>  
  <tr>
    <td><h4>4</h4></td>
    <td><h4>DAC : DAC7311IDCKR</h4></td>
  </tr>
  <tr>
    <td><h4>5</h4></td>
    <td><h4>Buck-DCDC : TPS62130</h4></td>
  </tr>
  <tr>
    <td><h4>6</h4></td>
    <td><h4>USB-a-UART : CP2102-GMR</h4></td>
  </tr>
  <tr>
    <td><h4>7</h4></td>
    <td><h4>USB : Type-C</h4></td>
  </tr>
  <tr>
    <td><h4>8</h4></td>
    <td><h4>Mini HDMI</h4></td>
  </tr>
  <tr>
    <td><h4>9</h4></td>
    <td><h4> Interfaz CSI ：Cámara MIPI (compatible con Raspberry Pi Camera V1 - OV5640)</h4></td>
  </tr>
  <tr>
    <td><h4>10</h4></td>
    <td><h4>Cabecera Arduino : Compatible con Arduino UNO</h4></td>
  </tr>
  <tr>
    <td><h4>11</h4></td>
    <td><h4>Interruptores DIP :<br/>K1-K4 interruptores de usuario<br/>K5 Cambiar Modo de Programación FPGA<br/>->>>> JTAG : Usando la Herramienta de Programación oficial de Xilinx<br/>->>>> Slave : <a href="https://github.com/Pillar1989/spartan-edge-esp32-boot" target="_blank"><span>Usando ESP32 para Programar el FPGA</span></a></h4></td>
  </tr>
  <tr>
    <td><h4>12</h4></td>
    <td><h4>Botón ESP32 ：Boot y RST</h4></td>
  </tr>
  <tr>
    <td><h4>13</h4></td>
    <td><h4>Botón FPGA ：USER1 USER2 FPGA_RST</h4></td>
  </tr>
  <tr>
    <td><h4>14</h4></td>
    <td><h4>LED de Usuario: L1/L2/RGB1/RGB2<br/>PWR : Encendido<br/>FPGA_DONE : Se enciende después de programar el FPGA con esp32.</h4></td>
  </tr>
  <tr>
    <td><h4>15</h4></td>
    <td><h4>Interruptor de Alimentación :<br/>USB->Alimentado por USB Type C (5V DC)<br/>5V->Alimentado por Pin VIN (8~17V DC)</h4></td>
  </tr>
  <tr>
    <td><h4>16</h4></td>
    <td><h4>Modo de Alimentación:<br/>OFF->Aislar la fuente de alimentación de Arduino y Shield<br/>ON->Conectar Alimentación de Arduino y Shield</h4></td>
  </tr>
  <tr>
    <td><h4>17</h4></td>
    <td><h4>Cabecera de Salida DAC y Entrada ADC</h4></td>
  </tr>
  <tr>
    <td><h4>18</h4></td>
    <td><h4>FPGA IO : IO9~IO0</h4></td>
  </tr>
  <tr>
    <td><h4>19</h4></td>
    <td><h4>Interfaz de Descarga FPGA JTAG</h4></td>
  </tr>
  <tr>
    <td><h4>20</h4></td>
    <td><h4>Conector Grove : 1x I2C; 1x D2&D3</h4></td>
  </tr>
  <tr>
    <td><h4>21</h4></td>
    <td><h4>Antena de chip cerámico</h4></td>
  </tr>
  <tr>
    <td><h4>22</h4></td>
    <td><h4>ADC : ADC1173</h4></td>
  </tr>
  <tr>
    <td><h4>23</h4></td>
    <td><h4>Flash SPI : W25Q32JVZPIG</h4></td>
  </tr>
  <tr>
    <td><h4>24</h4></td>
    <td><h4>Interruptor Analógico ：DG2788A</h4></td>
  </tr>
  <tr>
    <td><h4>25</h4></td>
    <td><h4>LDO : XC6221B102MR</h4></td>
  </tr>
  <tr>
    <td><h4>26</h4></td>
    <td><h4>LDO : RT9013-18GB</h4></td>
  </tr>
  <tr>
    <td><h4>27</h4></td>
    <td><h4>LDO : CJ1117-3V3</h4></td>
  </tr>
  <tr>
    <td><h4>28</h4></td>
    <td><h4>Ranura para tarjeta SD : Tarjeta Micro SD/TF</h4></td>
  </tr>
  </tbody></table>

## Comenzando

La Placa Aceleradora Spartan Edge puede funcionar en dos modos:

- Modo shield de Arduino
- Modo independiente

En resumen, puede funcionar como un shield de Arduino para brindar características de FPGA y Inalámbricas al Arduino, también puede funcionar como una placa de desarrollo FPGA sin un Arduino.

### Modo shield de Arduino

En este wiki, usamos Seeeduino V4.2, también puedes usar Arduino UNO, son completamente compatibles entre sí.

#### Hardware

**Materiales requeridos**

- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Placa Aceleradora Spartan Edge](#A) x1
- [Tarjeta Micro SD o tarjeta TF](https://www.seeedstudio.com/micro-SD-Card-Card-with-Card-Reader-32GB-Class-10-p-4082.html) x1
- [Cable de datos USB Type C](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

**Conexión de Hardware**

- Paso1. Inserta la tarjeta Micro SD o tarjeta TF en la ranura de tarjeta SD
- Paso2. Conecta la Placa SEA al Arduino
- Paso3. Usa uno de los siguientes tres métodos para alimentar el sistema

<table align="center">
  <tbody>
  <tr>
    <td><h3>Puerto de Alimentación</h3></td>
    <td><h3>Voltaje de Entrada</h3></td>
    <td><h3>Posición del Interruptor de Alimentación</h3></td>
    <td><h3>Posición del Modo de Alimentación</h3></td>
  </tr>
  <tr>
    <td><h4>Alimentado por puerto USB Type C de la placa SEA</h4></td>
    <td><h4>5V DC</h4></td>
    <td><h4>USB</h4></td>
    <td><h4>ON</h4></td>
  </tr>
  <tr>
    <td><h4>Alimentado por puerto micro USB de Seeeduino V4.2</h4></td>
    <td><h4>5V DC</h4></td>
    <td><h4>-</h4></td>
    <td><h4>ON</h4></td>
  </tr>  
  <tr>
    <td><h4>Alimentado por puerto DC de Seeeduino V4.2</h4></td>
    <td><h4>8~17V DC</h4></td>
    <td><h4>5V</h4></td>
    <td><h4>ON</h4></td>
  </tr>
</tbody></table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-combine-2.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
También puedes alimentar tanto la placa SEA como el Arduino al mismo tiempo, pero asegúrate de haber configurado la Posición del Modo de Alimentación en **OFF**. Solo entonces, la alimentación del sistema estará aislada, y podrás alimentar el Arduino y la placa SEA por separado.
:::

-------

#### Arranque ESP32 de la Placa Aceleradora Spartan Edge

En primer lugar, para trabajar con Arduino, debemos cargar el bitstream (Lógica FPGA) desde la tarjeta SD al FPGA integrado (xc7s15). La siguiente biblioteca te mostrará cómo hacer esto a través del ESP32 integrado.

una biblioteca para la Placa Aceleradora Spartan Edge

El propósito de esta biblioteca es cargar el bitstream (Lógica FPGA) desde la tarjeta SD al FPGA integrado (xc7s15) mediante el ESP32 integrado.

El entorno de desarrollo de software es [Arduino IDE](https://www.arduino.cc/en/Main/Software) con [soporte para placas ESP32](https://github.com/espressif/arduino-esp32).

Desde la versión 1.6.4, Arduino permite la instalación de paquetes de plataforma de terceros usando el Gestor de Placas. Tenemos paquetes disponibles para Windows, Mac OS y Linux (32 y 64 bits).

- Instala el Arduino IDE upstream actual en el nivel 1.8 o posterior. La versión actual está en el [sitio web de Arduino](https://arduino.cc/en/main/software).
- Inicia Arduino y abre la ventana de Preferencias.
- Introduce ```https://dl.espressif.com/dl/package_esp32_index.json``` en el campo _URLs Adicionales del Gestor de Placas_. Puedes añadir múltiples URLs, separándolas con comas.
- Abre el Gestor de Placas desde el menú Herramientas > Placa e instala la plataforma _esp32_ (y no olvides seleccionar tu placa ESP32 desde el menú Herramientas > Placa después de la instalación).
- selecciona _**herramientas->placa->DOIT ESP32 DEVKIT**_

Enlace de versión estable: `https://dl.espressif.com/dl/package_esp32_index.json`  
Enlace de versión de desarrollo: `https://dl.espressif.com/dl/package_esp32_dev_index.json`  
Si quieres más detalles, puedes hacer clic en el [enlace](https://github.com/espressif/arduino-esp32)

##### Uso de la Biblioteca

- **1.Descarga la Biblioteca de Arranque ESP32**

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-esp32-boot/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-boot.png" /></a></p>

Luego añade esta biblioteca a tu Arduino IDE.

Si no sabes cómo instalar la biblioteca, por favor consulta amablemente:  

 [Instalación de Bibliotecas Adicionales de Arduino](https://www.arduino.cc/en/Guide/Libraries)

 Puedes encontrar dos carpetas de ejemplo en esta biblioteca

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/example.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Ejemplo</h3></td>
    <td><h3>Descripción</h3></td>
  </tr>
  <tr>
    <td><h4>01LoadDefaultBitstream</h4></td>
    <td><h4>Este ejemplo cargará el archivo de la tarjeta SD /overlay/default.bit al FPGA</h4></td>
  </tr>
  <tr>
    <td><h4>02LoadConfigBitstream</h4></td>
    <td><h4>Este ejemplo leerá un archivo en formato ini /board_config.ini en la tarjeta SD, luego cargará el bitstream especificado por el valor de la clave overlay_on_boot al FPGA.</h4></td>
  </tr>  
  </tbody></table>

- **2.Preparar la tarjeta SD**  
  2.1 Formatear la tarjeta SD con el sistema de archivos FAT16/FAT32.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/format.jpg" alt="pir" width={600} height="auto" /></p>

  2.2 Crear una subcarpeta de nivel superior llamada **overlay** en la tarjeta SD.  
  2.3 Colocar tu bitstream o archivos de [bitstream de ejemplo](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio) (deben tener una extensión .bit) en la carpeta **overlay**.  

:::tip
El bitstream de ejemplo: extensión GPIO controlada por interfaz SPI, con soporte para ADC/DAC/RGB-LED, ver [código fuente](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio).
:::

  2.4 Si ejecutas el ejemplo 01LoadDefaultBitstream, renombra el archivo bitstream en **overlay** a **default.bit**.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/folder.jpg" alt="pir" width={600} height="auto" /></p>

  2.5 Si ejecutas el ejemplo 02LoadConfigBitstream, coloca [**board_config.ini**](https://github.com/Pillar1989/spartan-edge-esp32-boot/blob/master/extras/board_config.ini) en la carpeta raíz de la tarjeta SD.  
  2.6 Insertar la tarjeta SD en la placa Spartan (Edge Accelerator).  

- **3.Cargar ejemplo**  
  3.1 Conectar la placa Spartan a través del cable USB Type-C a la PC, e instalar el controlador USB232 (chip CP2102).  
  3.2 Girar el interruptor de alimentación (cerca de la ranura USB Type-C) al lado USB para encender la placa.  
  3.3 Abrir uno de los ejemplos de la biblioteca con Arduino IDE.  
  3.4 Verificar la configuración de placa y puerto en Arduino IDE como se describe en la sección anterior.  
  3.5 Presionar el botón 'BOOT' en la placa Sparton y mantenerlo presionado por más de 1 segundo para forzar al ESP32 a entrar en modo Bootloader.  
  3.6 Presionar el botón 'Upload' en Arduino IDE para cargar el ejemplo (binario compilado) al ESP32.  

- **4.Ejecutar ejemplo**  
  4.1 Asegurarse de que el interruptor DIP K5 de la placa (el último) esté en el lado Slave(ON), lo cual habilita la programación del FPGA por otro dispositivo(MCU).  
  4.2 Presionar el botón 'RST' en la placa Spartan para iniciar el ejemplo.  
  4.3 Después de que el ejemplo arranque unos segundos, el LED FPGA_DONE(color rojo) en la placa se encenderá.

------

#### Ejemplo de E/S de la placa Spartan Edge Accelerator

Luego, el siguiente tutorial te mostrará cómo controlar los recursos GPIO/ADC/DAC/RGB-LED de la placa Spartan Edge Accelerator con Arduino.

- Descargar la biblioteca de ejemplo de E/S:

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-ioex/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-IO.png" /></a></p>

- Agregar esta biblioteca a tu Arduino IDE. Si no sabes cómo instalar la biblioteca, por favor consulta:  

 [Instalación de bibliotecas adicionales de Arduino](https://www.arduino.cc/en/Guide/Libraries)

- Ubicar la carpeta `examples`, elegir cualquier ejemplo, hacer doble clic en el archivo .ino.

- Cargar la demostración. Si no sabes cómo cargar el código, por favor consulta [Cómo cargar código](https://wiki.seeedstudio.com/es/Upload_Code/).

### Modo independiente

#### Hardware

**Materiales requeridos**

- [Placa Spartan Edge Accelerator](#A) x1
- [Cable de datos USB Type C](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

Simplemente alimentar la placa Spartan Edge Accelerator a través del cable USB Type C.

#### Software

La placa Spartan Edge Accelerator también puede funcionar como una placa de desarrollo FPGA tradicional. El siguiente tutorial te mostrará cómo usarla en modo independiente.

En esta sección, aprenderás sobre las características del modo Proyecto para la creación de proyectos, gestión de archivos fuente, análisis de diseño, definición de restricciones y gestión de ejecución de síntesis e implementación. Esto podría usarse como referencia rápida.

Primero que todo, debes descargar la biblioteca de tutorial de vivado, necesitaremos algunos archivos fuente.

<p style={{textAlign: 'center'}}><a href="https://github.com/swjtu-mxb/vivado-tutorial/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/Vivado-Tutorial-Library.png" /></a></p>

- **Paso 1: Crear un proyecto**

  _Iniciar Vivado_

  _Crear un nuevo proyecto_

1. Después de que Vivado se abra, selecciona **Create Project** en la página Getting Started.

2. Haz clic en **Next** en el asistente New Project

3. Especifica el nombre del proyecto y la ubicación (Selecciona "**Create project subdirectory**" para crear una carpeta para tu proyecto)

4. Haz clic en **Next**.

5. Selecciona **RTL Project** como el **Project Type** y haz clic en **Next**.(Selecciona **Do not specify sources at this time** y agrega tus archivos poco después)

   _(Vivado Design Suite permite diferentes puntos de entrada de diseño dependiendo de tus tipos de archivo fuente y tareas de diseño. Puedes elegir el tipo de proyecto adecuado.)_

6. Selecciona la parte **xc7s15ftgb196-1** para el proyecto, y haz clic en Next, como se muestra en la figura 1.

7. Haz clic en **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/1.png" alt="pir" width={600} height="auto" /></p>

El IDE de Vivado abre project_tutorial en el diseño predeterminado, como se muestra en la figura 2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/2.png" alt="pir" width={600} height="auto" /></p>

El **Flow Navigator** muestra el proceso básico de diseño claramente.

Las **Sources** están compuestas por **Constraints**, **Simulation** **Sources** y **Utility** **Sources**.

Los **Design Runs** crean synth_1 e impl_1 por defecto.

El **estado de ejecución** de vivado se muestra en la esquina superior derecha.

- **Paso 2: Agregar y crear tus archivos**

  *en este paso, agregamos **test.v** , **test_pin.xdc** , **test_sim.v** en nuestro proyecto. Estos archivos están ubicados en diferentes carpetas de **vivado_tutorial/vivado_tutorial.srcs***

1. Haz clic en **Add Sources** en el **PROJECT MANAGER** del Flow **Navigator** para agregar archivo **RTL**.

2. Selecciona **Add or create design sources** y haz clic en Next.

3. Haz clic en el botón y selecciona opciones o haz clic directamente en las opciones para añadir o crear archivos, como se muestra en la figura 3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/3.png" alt="pir" width={600} height="auto" /></p>

4. Aquí, añadimos archivos RTL directamente. Selecciona **Add Files** y añade el archivo **test.v** en tu directorio, como se muestra en la figura 4.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/4.png" alt="pir" width={600} height="auto" /></p>

5. Haz clic en **Finish**.

6. Haz clic en **Add Sources** en el **PROJECT MANAGER** del Flow **Navigator** nuevamente para añadir el **archivo de restricciones**.

7. Selecciona **Add or create constraints** y haz clic en Next.

8. Haz clic en **Add Files** y añade tu archivo de restricciones **test_pin.xdc**, como se muestra en la figura 5

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/5.png" alt="pir" width={600} height="auto" /></p>

9. Haz clic en **Finish**.

10. Haz clic en **Add Sources** en el **PROJECT MANAGER** del Flow **Navigator** nuevamente para añadir el **archivo de simulación**.

11. Selecciona **Add or create simulation sources** y haz clic en Next.

12. Haz clic en **Add Files** y añade tu archivo de simulación **test_sim.v**, como se muestra en la figura 6

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/6.png" alt="pir" width={600} height="auto" /></p>

13. Haz clic en **Finish**.

     Finalmente, el archivo que añadimos aparecerá en **Sources**, como se muestra en la figura 7.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/7.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3: Elaborando el Diseño RTL**

  El IDE de Vivado incluye un entorno de análisis RTL y personalización de IP. También hay varias Verificaciones de Reglas de Diseño RTL (DRCs) para examinar formas de mejorar el rendimiento o la potencia en el diseño RTL.

1. Selecciona Open Elaborated Design en el Flow Navigator para elaborar el diseño.

2. Asegúrate de que el menú desplegable Layout Selector en la barra de herramientas principal tenga seleccionado Default Layout. El Elaborated Design habilita varias vistas de análisis incluyendo RTL Netlist, Schematic y Graphical Hierarchy. Las vistas tienen una función de selección cruzada, que te ayuda a depurar y optimizar el RTL.

3. Explora la jerarquía lógica en la ventana RTL Netlist y examina el Schematic. Puedes navegar por el esquemático haciendo doble clic en las celdas para adentrarte en la jerarquía, o usando comandos como Expand Cone o Expand/Collapse del menú emergente Schematic.

4. Selecciona cualquier instancia lógica en el Schematic y haz clic derecho para seleccionar los comandos **Go to Source** o **Go to Definition**.

5. Haz clic en la ventana Messages en la parte inferior del IDE de Vivado, y examina los mensajes.

6. Haz clic en el botón **Collapse All** en la barra de herramientas Messages.

7. Expande el Elaborated Design y los mensajes, como se muestra en la figura 8.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/8.png" alt="pir" width={600} height="auto" /></p>

8. Haz clic en uno de los enlaces y el Editor de Texto abre el archivo fuente RTL con la línea relevante resaltada.
9. Cierra las ventanas del Editor de Texto.
10. Cierra el Elaborated Design haciendo clic en la **X** en el lado derecho del banner de la ventana Elaborated Design, y haz clic en OK para confirmar.

- **Paso 4: Usando el Catálogo IP**

  El Catálogo IP de Xilinx proporciona acceso a las funciones de configuración y generación de IP de Vivado. Puedes ordenar y buscar en el Catálogo de varias maneras. Los IP pueden ser personalizados, generados e instanciados.

1. Haz clic en el botón **IP Catalog** en el Flow Navigator, bajo Project Manager.

2. Navega por el Catálogo IP para examinar las diversas categorías y capacidades de filtrado de IP.

3. Elige el IP correspondiente y realiza la personalización y configuración nativa del IP dentro de la herramienta y selecciona **OK**

4. Cierra la pestaña IP Catalog haciendo clic en la X en la pestaña de la ventana.

- **Paso 5: Ejecutando Simulación de Comportamiento**

  El IDE de Vivado integra el Simulador de Vivado, que te permite añadir y gestionar fuentes de simulación en el proyecto. Puedes configurar opciones de simulación, y crear y gestionar conjuntos de fuentes de simulación. Puedes ejecutar simulación de comportamiento en fuentes RTL, antes de la síntesis.

1. En el Flow Navigator, bajo Project Manager, haz clic en el comando Settings. El cuadro de diálogo Settings se abre con Project Settings en la parte superior, y Tool Settings debajo de eso, como se muestra en la figura 9.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/9.png" alt="pir" width={600} height="auto" /></p>

2. Examina las configuraciones disponibles en la página **Simulation**, luego haz clic en **Cancel** para cerrar el cuadro de diálogo.
3. Haz clic en el comando **Run Simulation** en el Flow Navigator, luego haz clic en **Run Behaviora Simulation** en el submenú, como se muestra en la figura 10.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/10.png" alt="pir" width={600} height="auto" /></p>

4. Arrastra la barra hacia la izquierda y usa estas herramientas para acercar o alejar para ver la imagen apropiada, como se muestra en la figura 11 y figura 12.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/11.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/12.png" alt="pir" width={600} height="auto" /></p>

5. Haz clic en **X** en la esquina superior derecha de la figura 13 y haz clic en **OK** para cerrar la SIMULATION.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/13.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6: Revisando la Configuración de Ejecución del Diseño**

Las ejecuciones de diseño son una forma de configurar y almacenar las muchas opciones disponibles en los diferentes pasos del proceso de síntesis e implementación. Puedes configurar estas opciones y guardar las configuraciones como estrategias para usar en futuras ejecuciones.

1. En el Flow Navigator, bajo Project Manager, haz clic en el comando **Settings**.

2. Selecciona la página **Synthesis** bajo Project Settings. Para una descripción completa de estas opciones, consulta la _Vivado Design Suite User Guide: Synthesis_([UG901](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug901-vivado-synthesis.pdf)).

3. Selecciona la página **Implementation** bajo Project Settings. Para una descripción completa de estas opciones, consulta la _Vivado Design Suite User Guide: Implementation_([UG904](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug904-vivado-implementation.pdf )).

- **Paso 7: Sintetizar e Implementar el Diseño**

  Después de configurar las opciones de ejecución de síntesis e implementación, puedes **ejecutar síntesis** y **ejecutar implementación** en **Design Runs** o hacer clic en el botón o hacer clic en los botones correspondientes en el **Flow Navigator** para hacer esto. El **estado de ejecución** de vivado se muestra en la esquina superior derecha mientras se Sintetiza e Implementa.

​ Para este tutorial, ejecutaremos estos pasos en Design Runs.

1. Haz clic derecho en syth_1 y selecciona **Launch Runs**, como se muestra en la figura 14.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/14.png" alt="pir" width={600} height="auto" /></p>

2. Haz clic en ok y el estado de ejecución se muestra en la esquina superior derecha, como se muestra en la figura 15.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/15.png" alt="pir" width={600} height="auto" /></p>

3. Haz clic en **Open Synthesized Design** para mayor diseño y análisis. Puedes ver **Report Timing Summary**, **Report Utilization** y otros, como se muestra en la figura 16.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/16.png" alt="pir" width={600} height="auto" /></p>

4. Ejecuta Implementation de la misma manera, como se muestra en la figura 17.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/17.png" alt="pir" width={600} height="auto" /></p>

5. Haz clic en **Open implemented Design** para ver los reportes después de la implementación

- **Paso 8: Generar un Archivo Bitstream**

  Después de **Implementar el Diseño,** podemos ver síntesis e implementación Completas en **Design Runs**, como se muestra en la figura 18.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/18.png" alt="pir" width={600} height="auto" /></p>

 Haz clic en **Generate Bitstream** en el Flow Navigator.

- **Paso 9: Descargar el archivo**

  Después de **Generate Bitstream,** tienes dos formas de cargar el archivo al FPGA.

  Puedes usar la interfaz JTAG (en la esquina Superior-Derecha de la figura 19) para cargar el archivo bit al FPGA en vivado, o usar el ESP32 (en la esquina Inferior-Derecha de la figura 19) para cargar el archivo bit al FPGA.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/19.png" alt="pir" width={600} height="auto" /></p>

  **Sigue los pasos a continuación, para cargar bitstream al FPGA a través de la interfaz JTAG**

1. Alimenta la placa y conecta el [Platform Cable USB II](https://www.xilinx.com/products/boards-and-kits/hw-usb-ii-g.html) (O Cable Compatible).

2. Haz clic en **Open Target** y **Auto Connect** en el Flow Navigator.

3. Mientras te conectas a la placa exitosamente, haz clic en **Program Device** y elige el archivo bit y haz clic en **Program**, como se muestra en la figura 20

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/20.png" alt="pir" width={600} height="auto" /></p>

1. Después de descargar el archivo bit, el **led** **FPGA**_**DONE** se encenderá.

   *En este proyecto, si presionas cualquier tecla o ambas (**USER1** y **USER2**), **LED L1** se apagará.*

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan Edge Accelerator Board v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Hoja de Datos de FPGAs Spartan-7](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan-7%20FPGAs%20Data%20Sheet.pdf)
- **[PDF]** [Hoja de Datos ESP32](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/ESP32-datasheet.pdf)
- **[PDF]** [Archivo Eagle de Spartan-Edge-Accelerator-Board](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/tree/master/res/Spartan%20Edge%20Accelerator%20Board%20v1.0/202002626_Spartan%20Edge%20Accelerator%20Board%20v1.0_SCH%20%26%20PCB)

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
