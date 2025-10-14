---
description: El Grove - ADC for Load Cell (HX711) es un convertidor A/D de 24 bits diseñado específicamente para la celda de carga.
title: Primeros pasos Grove - ADC for Load Cell (HX711)
keywords:
- Grove
- weight sensor 
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove_adc_for_load_cell_hx711
last_update:
  date: 05/28/2024
  author: Carla
---

# Grove - ADC for Load Cell (HX711)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

El Grove - ADC for Load Cell (HX711) es un convertidor A/D de 24 bits diseñado específicamente para la celda de carga. Contiene un amplificador programable de bajo ruido integrado con una ganancia opcional de 32, 64 y 128. El chip HX711 integra una fuente de alimentación regulada, un oscilador de reloj integrado y otros circuitos periféricos, que tienen las ventajas de alta integración, respuesta rápida y fuerte anti-interferencia.

:::note
Con el conector Grove y el terminal de tornillo de 4 pines, se vuelve bastante fácil conectar la celda de carga y el microcontrolador, sin necesidad de soldadura. Puedes construir tu propio sistema de sensor de peso Arduino en solo unos pocos pasos simples.
:::

## Especificaciones

<div class="table-center">
 <table align="center">
 <tr>
  <th>Elemento</th>
  <th>Valor</th>
 </tr>
 <tr>
  <td>Batería</td>
  <td>Excluir</td>
 </tr>
 <tr>
  <td>Voltaje de trabajo</td>
  <td>2.6V--5.5V</td>
 </tr>
 <tr>
  <td>Corriente de trabajo</td>
  <td>Menos de 1.5A</td>
 </tr>
 <tr>
  <td>Precisión de detección</td>
  <td>24 bits</td>
 </tr>
 <tr>
  <td>Tasa de datos de salida</td>
  <td>10SPS o 80SPS</td>
 </tr>
 <tr>
  <td>Ganancia opcional</td>
  <td>32 para Canal B/ 64 y 128 para Canal A</td>
 </tr>
 </table>
</div>

## Aplicación

- Básculas electrónicas
- Básculas computadoras de precios
- Básculas de plataforma electrónicas
- Básculas digitales
- Básculas de paquetería postal

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-pin.jpg" style={{width:700, height:'auto'}}/></div>

## Plataformas Compatibles

<div class="table-center">
 <table align="center">
  <tr>
   <th>Arduino</th>
   <th>Raspberry Pi</th>
   <th> </th>
   <th> </th>
   <th> </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

En esta parte, usaremos un **Arduino UNO R4 WiFi** como controlador, mostraremos cómo usar un **Grove - ADC for Load Cell (HX711)** y un **Weight Sensor (Load Cell) 0-500g** para hacer un módulo de medición de peso.

### Preparación de Hardware

**Paso 1.** Preparación de materiales

<div class="table-center">
 <table align="center">
 <tr>
  <th>Arduino UNO R4 WIFi</th>
  <th>Grove - ADC for Load Cell (HX711)</th>
  <th>Weight Sensor (Load Cell) 0-500g</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/1.png" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/2.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Weight-Sensor-Load-Cell-0-500g-p-525.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong></a>
  </div></td>
 </tr>
 </table>
</div>

:::note

- El sensor de peso emite 0V cuando la carga es menor a 150g, no mide directamente la carga. Por lo tanto, se sugiere usar una carga local de 200g para evitar el punto ciego de medición. Lee los datos analógicos de un peso de 200g como sin carga (0g), lee los datos analógicos de un peso de 700g como carga completa (500g).
- ADC para Celda de Carga (HX711) usa el canal A por defecto, si quieres usar otros canales, requerirá que lo sueldes tú mismo.

:::

Y el **Grove - ADC para Celda de Carga (HX711)** también es adecuado para nuestra placa de desarrollo XIAO.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a>
  </div></td>
 </tr>
</table>

**Paso 2.** Conexión del Hardware

Conecta el Sensor de Gestos Grove al puerto IIC del Arduino UNO R4 WiFi, conecta el Arduino a la PC mediante un cable USB, y la conexión entre Grove - ADC para Celda de Carga (HX711) y el Sensor de Peso (Celda de Carga) 0-500g se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/9.png" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
 <table align="center">
 <tr>
     <th>Grove - ADC para Celda de Carga (HX711)</th>
  <th>Sensor de Peso (Celda de Carga) 0-500</th>
 </tr>
    <tr>
     <td>E+</td>
  <td>Rojo</td>
    </tr>
 <tr>
  <td>E-</td>
  <td>Negro</td>
 </tr>
 <tr>
  <td>INA-</td>
  <td>Blanco</td>
 </tr>
 <tr>
  <td>INA+</td>
  <td>Verde/Azul</td>
 </tr>
 </table>
</div>

:::tip
Usando Grove Base Shield, puedes conectar directamente el módulo HX711 al Arduino UNO R4 WiFi como se muestra a continuación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/3.jpg" style={{width:700, height:'auto'}}/></div>
:::

### Preparación del Software

La herramienta de programación recomendada es el Arduino IDE, y necesitas configurar el entorno Arduino para el XIAO y añadir el paquete de la placa.
:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::
**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

- Si quieres usar **Seeeduino V4.3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/)** para completar la adición.

- Si quieres usar **Arduino UNO R4 WiFi** para las rutinas posteriores, por favor haz clic en **Tools-> Board-> Boards Manager...**, escribe la palabra clave "UNO R4 WiFi" en el campo de búsqueda e instala la versión más reciente (o la versión que quieras usar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>

### Descripción general de la biblioteca Arduino HX711

#### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles.

- `void begin(byte dout, byte pd_sck, byte gain )` —— Inicializa la biblioteca con el pin de salida de datos, pin de entrada de reloj y factor de ganancia. La selección del canal se realiza pasando la ganancia apropiada, el valor predeterminado de la biblioteca es "128" (Canal A).
 	- **Parámetros de entrada:**
  		- **byte dout：** Pasado como dout (convertido a byte) cableado del circuito HX711.
  		- **byte pd_sck：** Pasado como pd_sck (convertido a byte) cableado del circuito HX711.
  		- **byte gain = 128：**
   			- Con un factor de ganancia de 64 o 128, se selecciona el canal A.
   			- Con un factor de ganancia de 32, se selecciona el canal B.

- `bool is_ready()` —— Verifica si el HX711 está listo. De la hoja de datos: Cuando los datos de salida no están listos para recuperación, el pin de salida digital DOUT está alto. La entrada de reloj serial PD_SCK debe estar baja. Cuando DOUT pasa a bajo, indica que los datos están listos para recuperación.

- `void wait_ready(unsigned long delay_ms = 0);` —— Espera a que el chip esté listo.

- `bool wait_ready_retry(int retries = 3, unsigned long delay_ms = 0)` —— Espera a que el chip esté listo reintentando por una cantidad específica de intentos.

- `bool wait_ready_timeout(unsigned long timeout = 1000, unsigned long delay_ms = 0)` —— Espera a que el chip esté listo hasta que se agote el tiempo de espera.

- `void set_gain(byte gain = 128)` —— establece el factor de ganancia; toma efecto solo después de una llamada a read().
 	- **Parámetros de entrada:**
  		- **byte gain = 128：** El canal A puede configurarse para una ganancia de 128 o 64; el canal B tiene una ganancia fija de 32.

- `long read()` —— espera a que el chip esté listo y devuelve una lectura

- `long read_average(byte times = 10)` —— devuelve una lectura promedio.
 	- **Parámetros de entrada:**
  		- **byte times = 10:** times = cuántas veces leer.

- `double get_value(byte times = 1)` —— devuelve (read_average() - OFFSET), es decir, el valor actual sin el peso de tara.
 	- **Parámetros de entrada:**
  		- **byte times = 1:** times = cuántas lecturas hacer.
- `float get_units(byte times = 1)` —— devuelve get_value() dividido por SCALE, es decir, el valor crudo dividido por un valor obtenido mediante calibración.
 	- **Parámetros de entrada:**
  		- **byte times = 1:** times = cuántas lecturas hacer.

- `void tare(byte times = 10)` —— establece el valor OFFSET para el peso de tara.
 	- **Parámetros de entrada:**
  		- **byte times = 10:** times = cuántas veces leer el valor de tara.

- `void set_scale(float scale = 1.f)` —— establece el valor SCALE; este valor se usa para convertir los datos crudos a datos "legibles por humanos" (unidades de medida)

- `float get_scale()` —— obtiene el SCALE actual

- `void set_offset(long offset = 0)` —— establece OFFSET, el valor que se resta de la lectura real (peso de tara)

- `long get_offset()` —— obtiene el OFFSET actual

- `void power_down()` —— pone el chip en modo de apagado

- `void power_up()` —— despierta el chip después del modo de apagado

#### Instalación

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/bogde/HX711" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Ya que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo cual significa que la biblioteca se instaló exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### Demostración de Ejemplo

**Paso 1.**  Antes de la medición del Grove - ADC for Load Cell (HX711), el **PD_SCK** debe ser puesto a tierra para prepararlo para el trabajo y la celda de carga debe ser calibrada. El código de ejemplo `Grove_ADC_for_Load_Cell_(HX711)` es el siguiente:

```cpp
#include "HX711.h"

// HX711 circuit wiring
const int LOADCELL_DOUT_PIN = 3;  //Set your I2C pin
const int LOADCELL_SCK_PIN = 2;


HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("HX711 Demo");

  Serial.println("Initializing the scale");

  // Initialize library with data output pin, clock input pin and gain factor.
  // Channel selection is made by passing the appropriate gain:
  // - With a gain factor of 64 or 128, channel A is selected
  // - With a gain factor of 32, channel B is selected
  // By omitting the gain factor parameter, the library
  // default "128" (Channel A) is used here.
  
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  Serial.println("Before setting up the scale:");
    if (scale.wait_ready_timeout(1000)) {
    long reading = scale.read();
    Serial.print("HX711 reading: ");
    Serial.println(reading);
  } else {
    Serial.println("HX711 not found.");
  }   // print a raw reading from the ADC

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));   // print the average of 20 readings from the ADC

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));  // print the average of 5 readings from the ADC minus the tare weight (not set yet)

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1); // print the average of 5 readings from the ADC minus tare weight (not set) divided
      // by the SCALE parameter (not set yet)

  scale.set_scale(2280.f);                      // this value is obtained by calibrating the scale with known weights; see the README for details
  scale.tare();            // reset the scale to 0

  Serial.println("After setting up the scale:");

  Serial.print("read: \t\t");
  Serial.println(scale.read());                 // print a raw reading from the ADC

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));       // print the average of 20 readings from the ADC

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));  // print the average of 5 readings from the ADC minus the tare weight, set with tare()

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);        // print the average of 5 readings from the ADC minus tare weight, divided
      // by the SCALE parameter set with set_scale

  Serial.println("Readings:");
}

void loop() {
  Serial.print("one reading:\t");
  Serial.print(scale.get_units(), 1);
  Serial.print("\t| average:\t");
  Serial.println(scale.get_units(10), 1);

  scale.power_down();           // put the ADC in sleep mode
  delay(5000);
  scale.power_up();
}

```

**Paso 2.** Por favor haz clic en el menú desplegable de selección de placa, y luego haz clic en "Select other board and port...".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/4.png" style={{width:400, height:'auto'}}/></div>

**Paso 3.** Y luego busca y selecciona "Arduino UNO R4 WiFi".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/5.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** Por favor haz clic en "upload" para cargar el firmware en Arduino.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/6.png" style={{width:400, height:'auto'}}/></div>

**Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. Cuando veas la impresión serie "After setting up the scale:", espera unos segundos y aplica fuerza al **Sensor de Peso (Celda de Carga) 0-500g**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/10.gif" style={{width:400, height:'auto'}}/></div>

**Paso 6.** El resultado debería verse como se muestra a continuación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/7.png" style={{width:800, height:'auto'}}/></div>

## Recursos

**[PDF]**[Hoja de datos INA125](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/res/INA125.pdf)

**[PDF]**[Hoja de datos HX711](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/HX711.pdf)

**[ZIP]**[Grove - ADC para celda de carga (HX711)-Archivo de Esquemático](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/Grove%20-%20ADC%20for%20load%20cell%20(HX711)_SCH%26PCB.zip)

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
