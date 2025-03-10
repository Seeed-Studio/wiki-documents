---
description: Getting Started with Seeed Studio XIAO SAMD21
title: Introducción a XIAO SAMD21 de Seeed Studio
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO
last_update:
  date: 02/19/2025
  author: Guillermo
---

# Introducción a XIAO SAMD21 de Seeed Studio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

El **Seeed Studio XIAO SAMD21**, antes llamado **Seeeduino XIAO**, es el primer modelo de la familia [Seeed Studio XIAO](https://www.seeedstudio.com/xiao-series-page), una serie de poderosas placas de desarrollo del tamaño de un pulgar compatibles con Arduino. Utiliza el potente **ATSAMD21G18A-MU**, un microcontrolador de bajo consumo. Por otro lado, esta pequeña placa tiene un buen rendimiento en procesamiento pero consume menos energía. Está diseñada en un tamaño compacto y puede usarse en dispositivos portátiles y proyectos pequeños.

**Seeed Studio XIAO SAMD21** tiene 14 pines, que se pueden usar para 11 interfaces digitales, 11 interfaces analógicas, 10 interfaces PWM (d1-d10), 1 pin de salida DAC en D0, 1 interfaz SWD, 1 interfaz I2C, 1 interfaz SPI, 1 interfaz UART, indicador de comunicación serial (T/R), y una luz de parpadeo (L) a través de la multiplexación de pines. Los colores de los LEDs (Power, L, RX, TX) son verde, amarillo, azul y azul. Además, **Seeed Studio XIAO SAMD21** tiene una interfaz Type-C que puede suministrar energía y cargar el código. Tiene dos botones de reinicio; puedes cortocircuitarlos para reiniciar la placa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## **Documentación**

Existen dos documentos sobre el uso del **XIAO SAMD21 de Seeed Studio** que se centran en diferentes áreas. Consulta la tabla a continuación para obtener más detalles:

|[**Documentación de Seeed**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Documentación de Nanase**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pines|Interfaz|
|Introducción al XIAO SAMD21 de Seeed Studio|XIAO SAMD21 de Seeed Studio con MicroSD Card (SPI)|
|Uso de GPIO en XIAO SAMD21 de Seeed Studio|XIAO SAMD21 de Seeed Studio con GPS (UART)|
|Recursos de XIAO SAMD21 de Seeed Studio|Single Cycle IOBUS|

### **CircuitPython en XIAO SAMD21 de Seeed Studio**

- Comienza con [**CircuitPython en XIAO SAMD21 de Seeed Studio**](http://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython).

## **Características**

- **Potente CPU**: Microcontrolador ARM® Cortex®-M0+ de 32 bits a 48 MHz (SAMD21G18) con 256 KB de Flash y 32 KB de SRAM.
- **Compatibilidad flexible**: Compatible con el IDE de Arduino.
- **Operación fácil del proyecto**: Compatible con protoboard.
- **Tamaño pequeño**: Tan pequeño como un pulgar (21 x 17,8 mm) para dispositivos portátiles y proyectos pequeños.
- **Múltiples interfaces de desarrollo**: 11 pines digitales/analógicos, 10 pines PWM, 1 salida DAC, 1 interfaz SWD, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI.

## **Especificaciones**

|Elemento|Valor|
|---|---|
|CPU|CPU ARM Cortex-M0+ (SAMD21G18) que funciona hasta 48 MHz|
|Memoria Flash|256 KB|
|SRAM|32 KB|
|Pines I/O Digitales|11|
|Pines I/O Analógicos|11|
|Interfaz I2C|1|
|Interfaz SPI|1|
|QTouch|7 (A0, A1, A6, A7, A8, A9, A10)|
|Interfaz UART|1|
|Interfaz de alimentación y carga| Tipo-C|
|Alimentación|3.3V/5V DC|
|Dimensiones|21 x 17,8 x 3,5 mm|

## **Resumen de Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::caution
Para los pines de entrada/salida generales:
El voltaje de trabajo del MCU es de 3.3V. Conectar un voltaje superior a 3.3V a los pines de entrada/salida generales puede dañar el chip.

Para los pines de alimentación:
El circuito integrado DC-DC incorporado puede convertir el voltaje de 5V a 3.3V, lo que permite alimentar el dispositivo con una fuente de 5V a través de los pines VIN y 5V.

El XIAO SAMD21 actualmente solo admite alimentación por batería y **no se puede conectar al puerto Type-C mientras una batería esté conectada**, ya que podría representar un riesgo de seguridad.

Por favor, ten cuidado al usarlo y evita levantar la cubierta del shield.
:::   

### **Entrar en Modo Bootloader**

A veces, el puerto del Seeed Studio XIAO SAMD21 puede desaparecer si ocurre un error durante la programación. Podemos solucionar este problema con el siguiente procedimiento:

- Conecta el Seeed Studio XIAO SAMD21 a tu computadora.  
- Usa unas pinzas o un cable para hacer corto en los pines **RST** dos veces rápidamente.  
- El LED naranja parpadeará y luego permanecerá encendido.  

En este punto, el chip entra en modo **Bootloader** y el puerto de grabación volverá a aparecer.  

El chip SAMD21 tiene dos particiones: una para el **Bootloader** y otra para el programa del usuario. El dispositivo sale de fábrica con un **Bootloader** pregrabado en la memoria del sistema. Podemos alternar entre estos modos siguiendo los pasos anteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **Reinicio**

Si deseas reiniciar el XIAO SAMD21, sigue estos pasos:

- Conecta el XIAO SAMD21 a tu computadora.  
- Usa unas pinzas o un cable para hacer corto en los pines **RST** solo una vez.  
- El LED naranja parpadeará y luego permanecerá encendido.  

**Nota:** El comportamiento del LED integrado es inverso al de un Arduino. En el Seeed Studio XIAO SAMD21, el pin debe estar en **bajo** para encender el LED, mientras que en otros microcontroladores debe estar en **alto**.  

### **Interrupciones**

Todos los pines del XIAO SAMD21 de Seeed Studio admiten interrupciones, excepto los pines **5 y 7**, que **no pueden usarse simultáneamente**. Para más detalles sobre interrupciones, consulta [este enlace](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).  

### **Multiplexación de Pines**

No es necesario configurar manualmente los pines. Después de usarlos, puedes llamarlos directamente mediante una función.  

#### **Entrada y Salida Digital**

- Para usar el pin **6** como entrada/salida digital:

```c
const int buttonPin = 6;     // número del pin del botón pulsador
const int ledPin =  13;      // número del pin del LED

int buttonState = 0;         // variable para leer el estado del botón pulsador

void setup() {
  // inicializar el pin del LED como salida:
  pinMode(ledPin, OUTPUT);
  // inicializar el pin del botón pulsador como entrada:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // leer el estado del botón pulsador:
  buttonState = digitalRead(buttonPin);

  // verificar si el botón pulsador está presionado. Si lo está, buttonState será HIGH:
  if (buttonState == HIGH) {
    // encender el LED:
    digitalWrite(ledPin, HIGH);
  } else {
    // apagar el LED:
    digitalWrite(ledPin, LOW);
  }
}
```

#### **AnalogRead**

- Usa el pin 6 como pin analógico:

```c


void setup() {
  // declarar ledPin como una SALIDA:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // leer el valor del sensor:
  sensorValue = analogRead(sensorPin);
  // encender el ledPin:
  digitalWrite(ledPin, HIGH);
  // detener el programa durante <sensorValue> milisegundos:
  delay(sensorValue);
  // apagar el ledPin:
  digitalWrite(ledPin, LOW);
  // detener el programa durante <sensorValue> milisegundos:
  delay(sensorValue);
}
```

#### **Serial**

- Usa el pin 6 como TX de UART (RX de UART es el pin 7):

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hola Mundo");
    delay(1000);
}
```

#### **I2C**

- Usa el pin **5** como **SCL** de IIC (**SDA** de IIC es el pin **4**):
```c
// Escritor Maestro de Wire
// por Nicholas Zambetti <http://www.zambetti.com>

// Demuestra el uso de la biblioteca Wire
// Escribe datos en un dispositivo esclavo I2C/TWI
// Consulta el ejemplo "Wire Slave Receiver" para su uso con este

// Creado el 29 de marzo de 2006

// Este código de ejemplo es de dominio público.

#include <Wire.h>

void setup()
{
  Wire.begin(); // unirse al bus I2C (la dirección es opcional para el maestro)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // iniciar transmisión al dispositivo #4
  Wire.write("x is ");        // envía cinco bytes
  Wire.write(x);              // envía un byte  
  Wire.endTransmission();    // detener la transmisión
  x++;
  delay(500);
}
```

#### **SPI**

- Usa el pin **8** como **SCK** de SPI (**MISO** es el pin **9**, **MOSI** es el pin **10**).

```c
#include <SPI.h>
const int CS = 7;

void setup (void) {
   digitalWrite(CS, HIGH); // deshabilitar la selección del esclavo (Slave Select)
   SPI.begin();
   SPI.setClockDivider(SPI_CLOCK_DIV8); // dividir la velocidad del reloj por 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // habilitar la selección del esclavo (Slave Select)
   // enviar una cadena de prueba
   for (const char * p = "¡Hola Mundo!\r" ; c = *p; p++) {
      SPI.transfer(c);
   }
   digitalWrite(CS, HIGH); // deshabilitar la selección del esclavo (Slave Select)
   delay(2000);
}
```

#### **QTouch**

Para utilizar QTouch, proporcionamos un proyecto de ejemplo: [Cómo hacer un piano de frutas con la función Q-Touch del Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

#### **Entrada y Salida Analógica**

Aunque el SAMD21 todavía tiene "salidas analógicas" basadas en PWM, también presenta una verdadera salida analógica en forma de un convertidor digital a analógico (DAC). Este módulo puede producir un voltaje analógico entre 0 y 3.3V. Se puede utilizar para producir audio con un sonido más natural o como una especie de "potenciómetro digital" para controlar dispositivos analógicos.

El DAC solo está disponible en el pin A0 de Arduino y se controla usando analogWrite(A0, `<valor>`). El DAC se puede configurar con una resolución de hasta 10 bits (asegúrate de llamar a [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) en tu función **setup**), lo que significa que los valores entre 0 y 1023 ajustarán el voltaje a un rango entre 0 y 3.3V.

Además del DAC, los canales ADC del SAMD21 se destacan frente al ATmega328: están equipados con una resolución de hasta 12 bits. Esto significa que los valores de entrada analógica pueden variar de 0 a 4095, representando un voltaje entre 0 y 3.3V. Para usar los ADC en modo de 12 bits, asegúrate de llamar a [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) en tu función setup.

**Gráfico de Datos del DAC a través del Serial Plotter**

Aquí tienes un ejemplo que demuestra tanto el DAC como el ADC. Para configurar el experimento, conecta A0 a A1 — impulsaremos A0 con un voltaje analógico y luego lo leeremos con **A1**. Es el circuito más simple que hemos usado en un tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
El Seeed Studio XIAO SAMD21 usando la [**placa de expansión Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

Este sketch genera una señal de onda senoidal en A0, con valores que van de 0 a 3.3V. Luego, utiliza A1 para leer esa salida en su ADC y convertirla en un voltaje entre 0 y 3.3V.

Por supuesto, puedes abrir el monitor serial para ver los valores de voltaje transmitidos. Pero si la onda senoidal es difícil de visualizar a través del texto, prueba el nuevo Serial Plotter de Arduino, yendo a Herramientas > Plotter Serial.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

**Código**

```cpp
#define DAC_PIN A0 // Hacer que el código sea un poco más legible

float x = 0; // Valor del cual calcular el seno
float increment = 0.02;  // Valor por el que se incrementa x en cada ciclo
int frequency = 440; // Frecuencia de la onda sinusoidal

void setup() 
{
  analogWriteResolution(10); // Establecer la resolución de salida analógica al máximo, 10 bits
  analogReadResolution(12); // Establecer la resolución de entrada analógica al máximo, 12 bits

  Serial.begin(9600);
}

void loop() 
{
  // Generar un valor de voltaje entre 0 y 1023. 
  // Escalamos una onda sinusoidal entre esos valores:
  // Desplazar 511.5 y luego multiplicar el seno por 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Incrementar el valor de x

  // Generar un voltaje entre 0 y 3.3V.
  // 0 = 0V, 1023 = 3.3V, 512 = 1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Leer A1 (conectado a A0) y convertir ese valor
  // del ADC de 12 bits a un voltaje entre 0 y 3.3V.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Imprimir el voltaje.
  delay(1); // Retraso de 1 ms
}
```

## **Empezando**

### **Hardware**

**Materiales requeridos**

- Seeed Studio XIAO SAMD21 x1
- Computadora x1
- Cable USB tipo C x1

:::tip

Algunos cables USB solo pueden suministrar energía y no transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [el soporte USB 3.1 de Seeed para USB tipo C](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Paso 1. Prepara un Seeed Studio XIAO SAMD21 y un cable Tipo-C.

- Paso 2. Conecta el Seeed Studio XIAO SAMD21 a tu computadora. Luego, el LED amarillo de encendido debería encenderse.

### **Software**

:::note

Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino).
:::

- **Paso 1. Necesitas instalar el software de Arduino.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descarga Arduino IDE</font></span></strong>
    </a>
</div>

**Inicia la aplicación de Arduino**

Haz doble clic en la aplicación de Arduino (arduino.exe) que has descargado previamente.

:::note

Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la página de [Software de Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abre el ejemplo Blink**

Abre el sketch del ejemplo Blink: **Archivo > Ejemplos > 01.Básicos > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3. Agrega Seeeduino a tu Arduino IDE**

Haz clic en **Archivo > Preferencias** y completa el campo URLs adicionales del Administrador de Placas con la URL a continuación:

*<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Herramientas -> Placa -> Gestor de Placas...**, escribe la palabra clave "**Seeed Studio XIAO SAMD21**" en el campo de búsqueda. Aparecerá "Seeed SAMD Boards". Instálalo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4. Selecciona tu placa y puerto**

Después de instalar la placa, haz clic en **Herramientas -> Placa**, busca "**Seeed Studio XIAO**" y selecciónala. Ahora ya has configurado la placa Seeed Studio XIAO SAMD21 para el Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona el dispositivo serial de la placa Arduino desde el menú Herramientas | Puerto Serial. Es probable que sea COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos seriales de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5. Sube el programa**

Ahora, simplemente haz clic en el botón "Subir" en el entorno. Espera unos segundos y si la carga es exitosa, aparecerá el mensaje "Subida completada." en la barra de estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={600} height="auto" /></p>

 Unos segundos después de que termine la carga, deberías ver que el LED en el pin 13 (L) de la placa comienza a parpadear (en color naranja). ¡Si es así, felicidades! Has logrado poner en marcha Arduino. Si tienes problemas, consulta las sugerencias de solución de problemas.

:::note
El tamaño máximo de la memoria flash es de 8 KB. Más información en la hoja de datos del ATSAMD218A-MU en los recursos.
:::

## Ejemplos de Aplicación

- [Cómo usar Seeed Studio XIAO SAMD21 para iniciar sesión en tu Raspberry Pi](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI_spanish)

- [Interfaz de comunicación SPI](https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)

- [Cómo recuperar un XIAO muerto usando Raspberry Pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Gracias a John_Doe por compartirlo.

## Recursos

- **[PDF]** [Hoja de datos del ATSAMD218A-MU](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Esquema de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[Ebook]** [XIAO: Gran potencia, placa pequeña - Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Archivo KiCAD de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Archivo Eagle de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Dimensiones de Seeed Studio XIAO SAMD21 en DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Huella Eagle de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Firmware de fábrica de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Hoja de pines de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Modelo 3D de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

- **[ZIP]** [Archivos de certificación de Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-Certification.zip)

- 🔗 **[Kicad]** [Footprint de Seeed Studio XIAO SAMD21](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
