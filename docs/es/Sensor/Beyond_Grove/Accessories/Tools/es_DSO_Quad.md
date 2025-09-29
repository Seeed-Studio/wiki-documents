---
title: DSO Quad
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DSO_Quad/
slug: /es/DSO_Quad
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad también conocido como DSO203 es un osciloscopio digital de 4 canales de tamaño de bolsillo para tareas comunes de ingeniería electrónica. Está basado en ARM cortex M3 (STM32F103VCT6), proporcionando una tasa de muestreo de 72MS/s con FPGA integrada y ADC de alta velocidad. Un disco USB interno de 2MB puede ser usado para almacenar capturas de formas de onda, aplicaciones de usuario y para actualizar firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

## Características

---

* Tamaño de bolsillo y peso ligero
* Dos canales analógicos de 36MS/s, Hasta 72MS/s si se configura a canal único.**(Actualizado a Dos canales analógicos de 72MS/s, Hasta 144MS/s si se configura a canal único desde la versión .sys v1.31)**
* Dos canales digitales
* Generador de Señales
* Varias Opciones de Disparo
* Almacenamiento fácil de formas de onda
* Actualización de firmware
* Aplicaciones de usuario
* Código abierto

**Fuente(s):** [Soporte de características](http://www.downloadranking.com/privacypolicy.php)

## Ideas de Aplicación

---

### Aplicaciones de usuario

Proyectos en curso:

* Puerto GCC con FFT, espectrograma y varias correcciones [por pmos69 y marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

* Interfaz de usuario alternativa [por gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

* Puerto GCC del firmware por defecto [por tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

* Graficador de respuesta de frecuencia [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

* Aplicación de ejemplo FFT [por gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

* Analizador lógico [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

* Entorno de programación Pawn y varias aplicaciones [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

* Puerto de SYS a gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

* Tetris [por LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

<big>Colección de Ideas </big>

**Aplicaciones**

* "Modo Simple" - donde solo las funciones más básicas están disponibles para ayudar a personas sin experiencia.
* ["Modo multímetro" - funciones básicas de multímetro (VOM AC/DC, pico/rms/delta sería bueno)](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)

  * Detallado en [https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)
* Análisis de protocolo/captura de datos - Serial, I2C, SPI, CAN
* Capacidad de medición LCR (uH, uF y R) - El generador de señales incorporado hace esto natural. Existen tres métodos, todos requiriendo componente(s) externo(s) [Ejemplo](http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance)
* Analizador de Semiconductores - Usar el DAC para probar y graficar la respuesta de voltaje de un diodo / transistor (y simplemente identificar componentes, como la configuración de pines del transistor y polaridad)
* Analizador de espectro RF
* Un modo X-Y 2D que grafica los canales analógicos uno contra el otro en dos ejes con un canal digital funcionando opcionalmente como habilitador/deshabilitador de "haz".
  * [Algo](https://forum.seeedstudio.com/) parece existir? No en APP2.50 aún.

* Un Decodificador/Analizador y generador DMX (usado en conjunto con un IC RS485 externo) haría de este un gadget MUY útil para técnicos de teatro.

* Modo televisión (TV analógica) : Mostrar cuadro/campo/línea (seleccionar campo A/B) o número de línea. Mostrar diagrama vectorscopio. Mostrar contenido (es decir: la imagen de TV).

* Sincronización con un segundo DSO Quad para una señal analógica/digital de 4 canales, quizás similar a USBscope50 [movido desde HARDWARE]

usar 'wave out' para generar un pulso/paso cuando la unidad maestra se dispare, usar C/D como disparador para esclavo(s)

* Crear software de control remoto USB, tal que si la LCD se rompe, aún puedas usarlo con software de PC. [movido desde HARDWARE]
* Transmitir datos a PC - Usar PC como buffer de almacenamiento, con poder de procesamiento adicional. Una PC podría decodificar palabras I2C y otros protocolos donde el Quad no podría. [movido desde HARDWARE]

* Función de ruido blanco - agregar a las funciones del generador

**Mejoras**

* Un analizador de espectro mostrando una vista desde una perspectiva de frecuencia/tiempo
* Transformada Rápida de Fourier, sería bueno y fácil para ver datos de espectro de una sola señal.

**Orientado a Hardware/Dispositivo**

* SDR (Radio definida por software) nota que solo tenemos USB velocidad completa (12Mb/s)

* Preamplificador 10x muy necesario!!!
* Agregar botones de bisel para menús de acceso más fácil.
* Agregar 2 canales analógicos más, Quizás vía dongle USB.

* Agregar puerto para dispositivos de expansión, tal que un dispositivo complementario pueda ofrecer más capacidades, como generación RF, o un generador de funciones que sea capaz de amplitudes mayores. En particular una salida de +5v y 3.3v sería útil.

**Otro**

* Aplicación de servicio para personal de soporte técnico. Podría dividir la pantalla y mostrar instrucciones como "Verificar si el puerto 3, pin 5 tiene una señal, si no xyz podría estar roto". Podría haber un botón siguiente y para cada paso el texto, la escala de tiempo correcta, valores de disparo etc. son seleccionados
* Mi teléfono está basado en ARM, quizás hacer una versión USB de esto y una app para mi teléfono, que permita a mi teléfono ser la pantalla / pantalla táctil asegurada.
* Funciones matemáticas simples en ambos canales analógicos y señal generada.

* Dos entradas totalmente separadas de tierra habilitarían medir entradas, que no están referenciadas a la misma tierra. (como en el osciloscopio personal de dos canales Velleman)
* Diodo de protección contra sobrevoltaje de entrada debería ser agregado para proteger el dispositivo de picos de HV

* Sobremuestreo y su implementación por software podría disminuir el ruido, y aumentar la profundidad de bits efectiva
* Técnica especial de muestreo de tiempo equivalente, podría aumentar el ancho de banda para señales repetitivas

* Modo sin almacenamiento que barre constantemente el área visible en lugar de almacenar en un búfer fuera de pantalla enorme. Configuré la tasa de muestreo a 50ms en la versión actual (ej. para observar una señal de audio) solo actualiza la pantalla una vez cada pocos segundos, debería actualizarse continuamente.

* _Por favor añade más ideas..._

Consulta también información sobre desarrollo de aplicaciones para el DSO Quad

## Especificaciones

---
<table >
<tr>
<td> Canal analógico *2 </td>
<td> [CH_A] [CH_B] </td>
</tr>
<tr>
<td> Canal digital* 2 </td>
<td> [CH_C] [CH_D] </td>
</tr>
<tr>
<td> Escala vertical </td>
<td> 20mV-10V/div (paso 1-2-5) en sonda x1 / 200mV -100V/div (paso 1-2-5) en sonda x10 </td>
</tr>
<tr>
<td> Resolución vertical </td>
<td> 8 bit </td>
</tr>
<tr>
<td> Acoplamiento de entrada </td>
<td> AC/DC </td>
</tr>
<tr>
<td> Voltaje máximo de entrada </td>
<td> 80Vpp (sonda x1) / 400Vpp (sonda x10) </td>
</tr>
<tr>
<td> Almacenamiento </td>
<td> 4K por canal / 8K en canal único </td>
</tr>
<tr>
<td> Tipo de trigger por software </td>
<td> flanco, pulso, nivel (por añadir) </td>
</tr>
<tr>
<td> Tipo de trigger por hardware </td>
<td> flanco </td>
</tr>
<tr>
<td> Fuente de trigger </td>
<td> CH1/CH2/EXT </td>
</tr>
<tr>
<td> Modo de trigger </td>
<td> Auto, Normal, Single, SCAN, None </td>
</tr>
<tr>
<td> Generador de señal de prueba </td>
<td> 10Hz a 8MHz 2.8Vpp Onda Cuadrada, ciclo de trabajo 10~90% ajustable / 10Hz a 20kHz 2.8Vpp Seno, Cuadrada, Diente de sierra, onda Triangular </td>
</tr>
<tr>
<td> Almacenamiento </td>
<td> disco USB interno de 2MB, archivo BMP, DAT </td>
</tr>
<tr>
<td> Medición automática </td>
<td> Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty </td>
</tr>
<tr>
<td> Medición con cursor </td>
<td> Nivel, Voltaje </td>
</tr>
<tr>
<td> Modo de visualización </td>
<td> CH1, CH2, EXT, CH1+CH2, CH1-CH2 </td>
</tr>
<tr>
<td> Modo de muestreo </td>
<td> tiempo real </td>
</tr>
<tr>
<td> Tasa de muestreo </td>
<td> 30S/s - 72MS/s </td>
</tr>
<tr>
<td> Alimentación </td>
<td> batería LiPo </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 98 *60* 14.5 (mm) </td>
</tr>
<tr>
<td> Peso </td>
<td> 80g (sin batería) </td>
</tr>
<tr>
<td> Accesorios incluidos en el paquete </td>
<td> 2 sondas de osciloscopio mcx, 2 sondas digitales mcx </td>
</tr>
</table>

## Componentes

---
Por favor añade enlaces a las hojas de datos de los componentes principales como

<table >
<tr>
<td> CPU                 </td>
<td> 72 Mhz - ARM 32-bit Cortex™-M3 CPU - STM32F103VC [[2]](http://www.st.com/internet/mcu/product/164492.jsp)</td>
</tr>
<tr>
<td> FPGA                </td>
<td>ICE65F_VQ100 [[3]](http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf)</td>
</tr>
<tr>
<td> TFT                 </td>
<td></td>
</tr>
<tr>
<td> ADC                 </td>
<td> AD9288-40 [[4]](http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf)</td>
</tr>
<tr>
<td> OP-Amps             </td>
<td> OPA2354 [[5]](http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf)</td>
</tr>
<tr>
<td> Interruptores MOSFET     </td>
<td></td>
</tr>
<tr>
<td> Almacenamiento USB         </td>
<td></td>
</tr>
<tr>
<td> (añadir más aquí)     </td>
<td></td>
</tr></table>

## Precaución

---
El funcionamiento inadecuado de este dispositivo podría resultar en lesiones físicas y/o daños al dispositivo. Tenga en cuenta todas las precauciones necesarias y asegúrese de leer toda la documentación antes de usar el dispositivo.

## Actualización del firmware

---
Tenga en cuenta que este procedimiento actualmente solo funciona en Windows. [Las instrucciones para Linux están aquí](/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware"). (2011-04-29) Si podemos hacer que el disco de actualización funcione en Linux y Mac, sería bastante fácil escribir una aplicación para automatizar este proceso para usuarios menos experimentados. Incluso podría ser posible que el programa de actualización verifique la versión del hardware para evitar cargar el firmware incorrecto.

### Dónde encontrar el firmware

Aquí está el [firmware más reciente](https://files.seeedstudio.com/wiki/DSO_Quad/res/PA1_V113.zip).

También podría [compilar el firmware desde el código fuente](/DSO_Quad-Building_Firmware "DSO Quad:Building Firmware").

### Advertencia de versión

**ADVERTENCIA**: Es importante que use el firmware para su versión particular de hardware. La versión del hardware se muestra en la pantalla de inicio cuando arranca el dispositivo. Pida ayuda en los foros si no puede determinar su versión de hardware. Si carga el firmware incorrecto, podría inutilizar el dispositivo.

### Procedimiento de actualización

(Solo Windows) Conecte el DSO Quad a su PC con un cable mini USB. Mantenga presionado el botón "&gt;||" (reproducir/pausa) mientras enciende el dispositivo. Su dispositivo ahora está en modo de actualización de firmware, y debería aparecer un disco USB en su sistema. Copia los archivos de firmware uno a la vez, y cada vez que copie un archivo nuevo, el dispositivo se desconectará para preparar el archivo. Cuando el disco se reconecte, la extensión del archivo que cargó cambiará (".rdy" significa que la carga funcionó correctamente).

El orden en que carga los archivos SÍ importa. Comience cargando los archivos .hex (el orden no es importante). Para cargar los archivos .BIN, necesita cargar primero el archivo .ADR correspondiente. Esto le dice al dispositivo dónde poner el archivo binario (por ejemplo, cargue CFG_FPGA.ADR primero, luego cargue xxxxFPGA.BIN inmediatamente después). Si comete un error, elimine todos los archivos y comience de nuevo.

Cuando termine de cargar todos los archivos de firmware, apague el dispositivo para completar la actualización. Cuando arranque el dispositivo nuevamente, sus versiones de firmware deberían estar actualizadas. Si obtiene un error en la pantalla de inicio, intente cargar el firmware nuevamente, siguiendo cuidadosamente las instrucciones anteriores.

Más detalles e instrucciones para Linux aquí: [DSO_Quad:Upgrading_Firmware](/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware")

### Descripciones de archivos

<table>
<tr>
<th> Tipo de archivo </th>
<th> Formato del nombre de archivo </th>
<th> Descripción</th>
</tr>
<tr>
<td> Archivo FPGA </td>
<td> xxxxFPGA.BIN </td>
<td> datos de configuración para el FPGA</td>
</tr>
<tr>
<td> Archivo de logo </td>
<td> logo_xxx.BIN </td>
<td> Cree cualquier archivo .BMP de 16 colores 64*256 (tamaño de archivo = 46.9KB), y cambie la extensión a .INF. Esta es la imagen mostrada en la pantalla de inicio.</td>
</tr>
<tr>
<td> Archivo del sistema </td>
<td> SYS_xxxx.hex </td>
<td> ??? (se necesita descripción)</td>
</tr>
<tr>
<td> Archivo de aplicación </td>
<td> APP_xxxx.hex </td>
<td> ??? (se necesita descripción)</td>
</tr>
<tr>
<td> Archivo de dirección </td>
<td> xxxx.ADR </td>
<td> Estos archivos le dicen al dispositivo dónde poner el siguiente archivo .BIN que cargue. Hay uno para el archivo FPGA, y uno para el archivo LOGO. Los archivos están nombrados para que sepa cuál va con cuál.</td>
</tr></table>

**nota:** a medida que estén disponibles versiones más nuevas, estos nombres de archivo pueden aparecer ligeramente diferentes. Las x representan valores que podrían cambiar con el tiempo.

### Diseño de memoria

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/DSOQuad-bug-2.jpg)

<table  cellpadding="1" cellspacing="1">
<tr>
<td> Inicio</td>
<td> Fin</td>
<td> Tamaño</td>
<td> nota</td>
</tr>
<tr>
<td> 0x00000</td>
<td> 0x03fff</td>
<td> 16384</td>
<td> DFU</td>
</tr>
<tr>
<td> 0x04000</td>
<td> 0x0bfff</td>
<td> 32768</td>
<td> SYS</td>
</tr>
<tr>
<td> 0x0c000</td>
<td> 0x13fff</td>
<td> 32768</td>
<td> APP1 (predeterminado)</td>
</tr>
<tr>
<td> 0x14000</td>
<td> 0x1bfff</td>
<td> 32768</td>
<td> APP2</td>
</tr>
<tr>
<td> 0x1c000</td>
<td> 0x23fff</td>
<td> 32768</td>
<td> APP3</td>
</tr>
<tr>
<td> 0x24000</td>
<td> 0x2bfff</td>
<td> 32768</td>
<td> APP4</td>
</tr>
<tr>
<td> 0x2c000</td>
<td> 0x3d7ff</td>
<td> 71680</td>
<td> Flujo de bits FPGA (La hoja de datos dice que el tamaño máximo es 533KBit, así que esto es un poco grande)</td>
</tr>
<tr>
<td> 0x3d800</td>
<td> 0x3ffff</td>
<td> 10240</td>
<td> Logo (bmp, 256x64, 4 bit)</td>
</tr></table>

Nota: La dirección base de la flash es 0x08000000, pero está reflejada por el chip en 0x00000000 cuando BOOT0 está en bajo.

## Páginas Relacionadas

* [DSO Quad:Calibración](https://wiki.seeedstudio.com/es/DSO_Quad-Calibration)

* [DSO Quad:Actualización de Firmware](https://wiki.seeedstudio.com/es/DSO_Quad/#upgrading-firmware)

* [DSO Quad:Beta HW](https://wiki.seeedstudio.com/es/DSO_Quad-Beta_HW)

## Enlaces Externos

1. Blog de Seeedstudio [[6]](https://www.seeedstudio.com/blog/tag/dso-quad/)

2. Más fotos en flickr [[7]](http://www.flickr.com/photos/seeedstudio/tags/dsoquad/)

3. [Aplicación DS203 en inspección BMW (Chino, traducido automáticamente al inglés)](http://translate.google.gr/translate?js=n&amp;prev=_t&amp;hl=zh-CN&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;sl=zh-CN&amp;tl=en&amp;u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54) [[Página original](http://www.minidso.com/forum/viewtopic.php?f=4&amp;t=54) ] - Algunos técnicos que trabajan para BMW inspeccionaron el automóvil con un DSO203, además del tamaño de palma y rendimiento práctico, el DSO203 opera perfectamente en la inspección del bus BWM:FlexRay.

## Recursos

---

* [Firmware más reciente V2.72](https://files.seeedstudio.com/products/109990015/DS203.V2.72.zip)
* [Esquemático y firmware (HW2.2 ~ HW2.72)](https://wiki.seeedstudio.com/es/DSO_Quad/#upgrading-firmware)

* [Foro de discusión con recursos para HW2.6](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)

* [DS203_yijian_app_user_manual.rar‎](https://files.seeedstudio.com/wiki/DSO_Quad/res/DS203_yijian_app_user_manual.rar)

* [Manual DSO Quad](https://files.seeedstudio.com/wiki/DSO_Quad/res/DSO203_user_Guide_2.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
