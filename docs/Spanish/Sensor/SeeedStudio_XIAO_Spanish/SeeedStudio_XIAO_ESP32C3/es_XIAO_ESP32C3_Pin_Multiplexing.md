---
description: Pin Multiplexing on Seeed Studio XIAO ESP32C3
title: Multiplexación de pines
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO_ESP32C3_Pin_Multiplexing
last_update:
  date: 02/03/2024
  author: Guillermo
---

# Multiplexación de pines (Pin Multiplexing)

La XIAO ESP32C3 de Seeed Studio tiene interfaces ricas. Hay **11 pines digitales de E/S** que se pueden usar como **pines PWM** y **4 entradas analógicas** que se pueden usar como **pines ADC**. Soporta cuatro interfaces de comunicación serial como **UART, I2C, SPI e I2S**. ¡Esta wiki será útil para aprender sobre estas interfaces e implementarlas en tus próximos proyectos!

## Digital

Conecta un pulsador al Pin D6 y un LED al Pin D10. Luego sube el siguiente código para controlar el encendido/apagado del LED usando el pulsador.

```c
const int buttonPin = D6;     // pulsador conectado al pin digital 6
const int ledPin =  D10;      // LED conectado al pin digital 10
 
int buttonState = 0;         // variable para leer el estado del pulsador
 
void setup() {
  // inicializar el pin del LED como salida:
  pinMode(ledPin, OUTPUT);
  // inicializar el pin del pulsador como entrada:
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // leer el estado del pulsador:
  buttonState = digitalRead(buttonPin);
 
  // verificar si el pulsador está presionado. Si lo está, el estado del pulsador es HIGH:
  if (buttonState == HIGH) {
    // encender el LED:
    digitalWrite(ledPin, HIGH);
  } else {
    // apagar el LED:
    digitalWrite(ledPin, LOW);
  }
}
```

## Digital como PWM

Conecta un LED al Pin D10. Luego sube el siguiente código para ver cómo la luz del LED se desvanece gradualmente.

```cpp
int ledPin = D10;    // LED conectado al pin digital 10

void setup() {
  // declarar el pin del LED como salida
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // desvanecerse de mínimo a máximo en incrementos de 5 puntos:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // establecer el valor (rango de 0 a 255):
    analogWrite(ledPin, fadeValue);
    // esperar 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }

  // desvanecerse de máximo a mínimo en incrementos de 5 puntos:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // establecer el valor (rango de 0 a 255):
    analogWrite(ledPin, fadeValue);
    // esperar 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }
}
```

## Analógico

Conecta un potenciómetro al Pin A0 y un LED al Pin D10. Luego sube el siguiente código para controlar el intervalo de parpadeo del LED al girar el potenciómetro.

:::tip
El rango de mapeo del ADC es de 0 a 2500mV.
:::

```c
const int sensorPin = A0;
const int ledPin =  D10; 

void setup() {
  pinMode(sensorPin, INPUT);  // declarar el pin sensorPin como entrada
  pinMode(ledPin, OUTPUT);   // declarar el pin ledPin como salida
}

void loop() {
  // leer el valor del sensor:
  int sensorValue = analogRead(sensorPin);
  // encender el LED:
  digitalWrite(ledPin, HIGH);
  // detener el programa por <sensorValue> milisegundos:
  delay(sensorValue);
  // apagar el LED:
  digitalWrite(ledPin, LOW);
  // detener el programa por <sensorValue> milisegundos:
  delay(sensorValue);
}
```

## Serial - UART

### Método regular: elige uno entre USB serial o UART0 serial para usar

En esta placa hay 2 interfaces seriales:

- USB Serial
- UART0 Serial

:::note
No existe `Serial2` para XIAO ESP32 C3. 
Además, si necesitas usar `Serial1`, debes definir los pines; de lo contrario, no podrá recibir datos. Para la serie XIAO ESP32, usa `Serial1` de la siguiente manera:

```cpp
Serial1.begin(115200, SERIAL_8N1, D7, D6); // RX, TX
```
:::

Por defecto, el USB serial está habilitado, lo que significa que puedes conectar la placa a una PC a través de USB Tipo-C y abrir el monitor serial en el IDE de Arduino para ver los datos enviados a través del serial.

Sin embargo, si deseas usar UART0 como serial, necesitas conectar el pin D6 como el pin TX y el pin D7 como el pin RX con un adaptador USB-Serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png" alt="pir" width={1000} height="auto" /></div>

Además, necesitas configurar **USB CDC On Boot** a **Deshabilitado** desde el IDE de Arduino.

**NOTA: Cambia la foto cuando la placa aparezca en el Administrador de Placas de Arduino.**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png" alt="pir" width={600} height="auto" /></div>

Sube el siguiente código al IDE de Arduino para enviar la cadena "Hello World!" a través del serial:

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}
 
void loop() {
    Serial.println("Hello World!");
    delay(1000);
}
```

El resultado será el siguiente en el Monitor Serial de Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg" alt="pir" width={450} height="auto" /></div>

### Manera especial: usar el serial USB y UART0/UART1 al mismo tiempo

Muy a menudo, necesitamos usar sensores UART para conectar al puerto serial de hardware del XIAO ESP32C3 para obtener datos, y al mismo tiempo, puede ser necesario usar el serial USB para mostrar los datos en el monitor serial. Esto se puede lograr mediante algunos métodos especiales.

- Código de ejemplo:

```c
// Necesario para el acceso de bajo nivel para configurarlos.
#include <HardwareSerial.h>

// Definir dos dispositivos Serial mapeados a los dos UARTs internos
HardwareSerial MySerial0(0);  // UART0
HardwareSerial MySerial1(1);  // UART1

void setup()
{
    // Para el USB, simplemente usa Serial como de costumbre:
    Serial.begin(115200);  // Inicia la comunicación serial a 115200 baudios por USB

    // Configurar MySerial0 en los pines TX=D6 y RX=D7 (-1, -1 significa usar los valores predeterminados)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);  // Inicia MySerial0 a 9600 baudios
    MySerial0.print("MySerial0");  // Envía "MySerial0" a través del puerto MySerial0

    // Y configurar MySerial1 en los pines RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);  // Inicia MySerial1 a 115200 baudios
    MySerial1.print("MySerial1");  // Envía "MySerial1" a través del puerto MySerial1
}

void loop()
{
    // El loop está vacío en este ejemplo, ya que no se realiza ninguna acción repetitiva.
}
```

Como puedes ver, el XIAO ESP32C3 en realidad tiene tres UARTs disponibles.

A continuación, tomaremos como ejemplo el [Sensor mmWave de 60GHz - Módulo de Respiración y Latido Cardiaco en Reposo Humano](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html), que está disponible para su venta, y explicaremos cómo utilizar los puertos seriales D6 y D7 de hardware y el puerto serial USB.

Por favor, prepárate para lo siguiente.

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
        <th>Sensor mmWave de 60GHz -<br/>Módulo de Respiración en Reposo Humano<br/>y Latido Cardiaco</th>
 </tr>
    <tr>
        <td><div align="center"><img width = {120} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
    </tr>
 <tr>
        <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Consigue uno ahora</a></td>
        <td align = "center"><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">Consigue uno ahora</a></td>
 </tr>
</table>

Descarga la biblioteca del sensor en tu computadora y añádela al IDE de Arduino.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank"><div align="center"><img width = {300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

Aquí queremos analizar la información de los datos de latidos y respiración, luego puedes reescribir tu programa de la siguiente manera.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //Crear una nueva clase HardwareSerial -- D6/D7

// También se puede probar con hardware serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // Código de configuración que se ejecuta una sola vez:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, -1, -1); // A una frecuencia de CPU de 40 MHz, funciona a la mitad de la velocidad definida.

  while(!Serial);   //Cuando se abre el puerto serie, el programa comienza a ejecutarse.

  Serial.println("Listo");

  // radar.ModeSelect_fuc(1);  //1: indica modo de transmisión en tiempo real, 2: indica modo de estado de reposo.
  //Después de configurar el modo, si no ves datos devueltos, puede ser necesario volver a alimentar el sensor.
}

void loop()
{
  // Código principal que se ejecuta repetidamente:
  radar.Breath_Heart();           //Salida de información de respiración y latidos del corazón
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("El sensor detectó que la frecuencia cardíaca actual es: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Válido solo cuando el modo de transferencia de datos en tiempo real está activado
        Serial.print("La forma de onda de la frecuencia cardíaca (onda senoidal) -- punto 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", punto 2: ");
        Serial.print(radar.heart_point_2);
        Serial.print(", punto 3: ");
        Serial.print(radar.heart_point_3);
        Serial.print(", punto 4: ");
        Serial.print(radar.heart_point_4);
        Serial.print(", punto 5: ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("El sensor detecta que la frecuencia respiratoria actual es normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("El sensor detecta que la frecuencia respiratoria actual es demasiado rápida.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("El sensor detecta que la frecuencia respiratoria actual es demasiado lenta.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("Aún no hay información de respiración, por favor espera...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("El sensor detectó que la frecuencia respiratoria actual es: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Válido solo cuando el modo de transferencia de datos en tiempo real está activado
        Serial.print("La forma de onda de la frecuencia respiratoria (onda senoidal) -- punto 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", punto 2: ");
        Serial.print(radar.breath_point_2);
        Serial.print(", punto 3: ");
        Serial.print(radar.breath_point_3);
        Serial.print(", punto 4: ");
        Serial.print(radar.breath_point_4);
        Serial.print(", punto 5: ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);  //Añadir un retraso para evitar bloqueos en el programa
}
```

Sube el programa, luego abre el monitor serie y configura la velocidad en baudios a 115200.  

A continuación, podemos conectar el sensor al XIAO ESP32C3 utilizando el siguiente método de conexión.

<div align="center"><img width = {700} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"/></div>

Si todo sale bien, verás mensajes de datos en el monitor serie.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

### Uso de Serial1  

Según los diagramas de pines del XIAO ESP32C3 para parámetros específicos, podemos observar que hay un pin TX y un pin RX.  
Esto es diferente de la comunicación serial estándar, pero su uso es muy similar, con la excepción de que se deben agregar algunos parámetros adicionales.  
Así que, a continuación, utilizaremos los pines expuestos por el chip para la comunicación serial.  

Función principal que debe incluirse:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- enable Serial1,the function prototype : `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :baud rate
  - `config`:Configuration bit
  - `rxPin` :Receive Pin
  - `txPin` :Send Pin

Vale la pena señalar que si usamos un puerto de pin digital para definir, este lugar debe ser `#define RX_PIN D7` y `#define TX_PIN D6`. Consulta los diagramas de pines de las diferentes series de XIAO para obtener parámetros específicos.  

Aquí tienes un programa de ejemplo:

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

Después de subir el programa, abre el Monitor Serie en el IDE de Arduino y configura la velocidad en baudios a 115200. Luego, puedes enviar el contenido que desees al XIAO ESP32C3 a través del Monitor Serie, y el XIAO imprimirá cada byte del contenido que envíes.  

En este caso, el contenido ingresado es "Hello Everyone", y el resultado obtenido es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>


### Serial por Software  

Para usar serial por software, instala la biblioteca [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial).

:::tip
Actualmente, recomendamos la versión 7.0.0 de la biblioteca EspSoftwareSerial. Otras versiones pueden presentar diversos problemas que impidan el correcto funcionamiento del puerto serial por software.
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

Este ejemplo configura el puerto serial por software en los pines `D7 (RX)` y `D6 (TX)` a 9600 baudios. Monitorea tanto el puerto serial por hardware (USB) como el puerto serial por software, retransmitiendo los datos recibidos entre ellos.

## I2C

### Conexión de hardware

Conecta un [Grove - Display OLED Amarillo y Azul 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) al XIAO ESP32C3 siguiendo la conexión de hardware de la siguiente manera:

|  Grove - OLED Yellow&Blue Display 0.96 (SSD1315) |  XIAO ESP32C3 |
|-----------|-----------|
| SCL       | SCL       |
| SDA       | SDA       |
| VCC       | 5V        |
| GND       | GND       |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png" alt="pir" width={1000} height="auto" /></div>

### Configuración de software

- **Paso 1.** Abre el IDE de Arduino, navega a `Programa > Incluir Biblioteca > Administrar Bibliotecas...`

- **Paso 2.** Busca **u8g2** e instálala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

Paso 3. Sube el siguiente código para mostrar cadenas de texto en el Display OLED.

```cpp
//#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //I2C a baja velocidad

void setup(void) {
  u8g2.begin();
//  u8x8.setFlipMode(1);   // establece el número de 1 a 3, la pantalla girará 180 grados
}

void loop(void) {
  u8g2.clearBuffer();                   // limpia la memoria interna
  u8g2.setFont(u8g2_font_ncenB08_tr);   // elige una fuente adecuada
  u8g2.drawStr(0,15,"Hello World!");    // escribe algo en la memoria interna
  u8g2.drawStr(0,30,"Hello World!");
  u8g2.drawStr(0,40,"Hello World!");
  u8g2.sendBuffer();                    // transfiere la memoria interna a la pantalla
//  delay(1000);  
}
```

## SPI

### Conexión de hardware

Conecta un [Grove - Sensor Barométrico de Alta Precisión (DPS310)](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html) al XIAO ESP32C3 siguiendo la conexión de la siguiente manera.

| Grove - Sensor Barométrico de Alta Precisión (DPS310) | XIAO ESP32C3 |
|-----------|------------|
| 3V3        | 3V3       |
| SDI        | MOSI      |
| GND        | GND       |
| SDO        | MISO      |
| CSK        | SCK       |
| CS         | CS        |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png" alt="pir" width={1000} height="auto" /></div>

### Configuración de software

- **Paso 1**. Descarga la [Biblioteca Seeed_Arduino_DPS310](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310) como un archivo zip.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png" alt="pir" width={1000} height="auto" /></div>

- **Paso 2**. Abre el IDE de Arduino, navega a `Programa > Incluir Biblioteca > Agregar Biblioteca .ZIP...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3**. Navega a `Archivo > Ejemplos > DigitalPressureSensor > spi_background` para abrir el ejemplo **spi_background**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png" alt="pir" width={450} height="auto" /></div>

Alternativamente, puedes copiar el código de abajo también:

```cpp
#include <Dps310.h>

// Objeto Dps310
Dps310 Dps310PressureSensor = Dps310();

void setup() {
    // Número de pin de la línea de selección de esclavo
    // XMC2GO
    int16_t pin_cs = SS;
    // Para XMC 1100 Bootkit & XMC4700 Relax Kit, descomentar la siguiente línea
    // int16_t pin_cs = 10;

    Serial.begin(9600);
    while (!Serial);

    // Llamar a begin para inicializar el Dps310
    // El parámetro pin_nr es el número del pin CS en tu microcontrolador
    Dps310PressureSensor.begin(SPI, pin_cs);

    // Tasa de medición de temperatura (valor de 0 a 7)
    // 2^temp_mr resultados de medición de temperatura por segundo
    int16_t temp_mr = 2;
    // Tasa de sobre-muestreo de temperatura (valor de 0 a 7)
    // 2^temp_osr mediciones internas de temperatura por resultado
    // Un valor más alto aumenta la precisión
    int16_t temp_osr = 2;
    // Tasa de medición de presión (valor de 0 a 7)
    // 2^prs_mr resultados de medición de presión por segundo
    int16_t prs_mr = 2;
    // Tasa de sobre-muestreo de presión (valor de 0 a 7)
    // 2^prs_osr mediciones internas de presión por resultado
    // Un valor más alto aumenta la precisión
    int16_t prs_osr = 2;
    // startMeasureBothCont habilita el modo en segundo plano
    // La temperatura y la presión se miden automáticamente
    // No se puede tener alta precisión y altas tasas de medición al mismo tiempo.
    // Consulta la hoja de datos (o prueba y error) para más información
    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
    // Usa una de las líneas comentadas a continuación en su lugar para medir solo temperatura o presión
    // int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
    // int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);

    if (ret != 0) {
        Serial.print("¡Inicialización FALLIDA! ret = ");
        Serial.println(ret);
    } else {
        Serial.println("¡Inicialización completa!");
    }
}

void loop() {
    uint8_t pressureCount = 20;
    float pressure[pressureCount];
    uint8_t temperatureCount = 20;
    float temperature[temperatureCount];

    // Esta función escribe los resultados de las mediciones continuas en los arreglos dados como parámetros
    // Los parámetros temperatureCount y pressureCount deben contener los tamaños de los arreglos temperature y pressure cuando se llama a la función
    // Después de que la función termine, temperatureCount y pressureCount contienen la cantidad de valores escritos en los arreglos
    // Nota: El Dps310 no puede guardar más de 32 resultados. Cuando su buffer de resultados esté lleno, no guardará nuevos resultados de medición
    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

    if (ret != 0) {
        Serial.println();
        Serial.println();
        Serial.print("¡ERROR! ret = ");
        Serial.println(ret);
    } else {
        Serial.println();
        Serial.println();
        Serial.print(temperatureCount);
        Serial.println(" valores de temperatura encontrados: ");
        for (int16_t i = 0; i < temperatureCount; i++) {
            Serial.print(temperature[i]);
            Serial.println(" grados Celsius");
        }

        Serial.println();
        Serial.print(pressureCount);
        Serial.println(" valores de presión encontrados: ");
        for (int16_t i = 0; i < pressureCount; i++) {
            Serial.print(pressure[i]);
            Serial.println(" Pascales");
        }
    }

    // Esperar un tiempo para que el Dps310 pueda rellenar su buffer
    delay(10000);
}
```

- **Paso 4.** Carga los códigos y abre el **Monitor Serial**

**Nota:** Una vez que cargues los códigos, no se ejecutarán automáticamente hasta que hagas clic en **Monitor Serial** en la esquina superior derecha de la ventana de Arduino.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg" alt="pir" width={600} height="auto" /></div>

¡Ahora verás los datos de temperatura y presión mostrados uno después del otro en el monitor serial como se muestra arriba!


### Nota sobre la asignación de pines del XIAO ESP32C3

### D9

El pin D9 del XIAO ESP32C3 está conectado al GPIO9 (15) del ESP32-C3, a una resistencia de pull-up (R6) y al botón de BOOT. El botón de BOOT (y el botón RESET) te permite cambiar manualmente el Modo de Arranque (Boot Mode) del ESP32-C3.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

Al presionar el botón BOOT, se conecta D9 a GND. **Por lo tanto, es mejor utilizar D9 como una entrada de interruptor.**

### D6

El pin D6 del XIAO ESP32C3 está conectado a U0TXD (28) del ESP32-C3. El estado de funcionamiento del primer y segundo cargador de arranque se muestra como texto en U0TXD.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

El pin D6 está configurado como una salida UART al inicio, por lo que si lo usas como entrada, podrías generar accidentalmente una corriente alta. **Por lo tanto, se recomienda usar el pin D6 solo en modo de salida.**

Sin embargo, dado que D6 es una salida UART, debes tener en cuenta algunos detalles: uno es que está en estado ALTO en modo de espera cuando no está comunicando. El otro es que la salida de texto del primer y segundo cargador de arranque. La señal cambia entre ALTO y BAJO inmediatamente después del inicio, y debe contrarrestarse si es necesario.

Así que intenta no usar D6. (Está bien usarlo, por supuesto, después de entenderlo).

### D8

El pin D8 del Seeed Studio XIAO ESP32C3 está conectado a GPIO8 (14) del ESP32-C3. 

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

GPIO8 se referencia cuando el modo de arranque está configurado para descargar el boot manteniendo presionado el botón BOOT y debe estar en nivel ALTO en ese momento. (En [este enlace](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) se menciona: "La combinación de anclaje GPIO8 = 0 y GPIO9 = 0 es inválida y provocará comportamientos inesperados.")

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

Si usas el arranque de descarga, **agrega una resistencia pull-up para poner GPIO8 en nivel ALTO en el momento del arranque**.

Un agradecimiento especial a mi colega de SeeedJP, **matsujirushi**, por probar y contribuir a esta sección. Aquí está el enlace de referencia al artículo original.

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)

