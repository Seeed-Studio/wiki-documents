---
description: Grove Kit para Principiantes para Arduino
title: Grove Kit para Principiantes para Arduino
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Beginner-Kit-For-Arduino
last_update:
  date: 2/14/2023
  author: hushuxu
---

# Grove Kit para Principiantes para Arduino

Grove Kit para Principiantes para Arduino es uno de los mejores Kits para Principiantes de Arduino para principiantes. Incluye una Placa compatible con Arduino y 10 sensores adicionales de Arduino, todo en un diseño de PCB de una sola pieza. **Todos los módulos han sido conectados al Seeeduino a través de los orificios de estampado de PCB, por lo que no se necesitan cables Grove para conectar**. Por supuesto, también puedes sacar los módulos y usar cables Grove para conectar los módulos. Puedes construir cualquier proyecto de Arduino que desees con este Grove Kit para Principiantes para Arduino.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Descripción General del Hardware

**Versión anterior** (Antes de octubre de 2025) ↓

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg" style={{width:1000, height:'auto'}}/></div>

**Nueva Versión** (Después de octubre de 2025) ↓

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip Notas de Iteración de Versión Nueva y Antigua
Comparado con la versión anterior, esta nueva versión actualiza ciertos sensores descontinuados. El sensor de temperatura y humedad DHT11 ha sido reemplazado con el sensor de temperatura y humedad DHT20; el sensor de presión barométrica BMP280 ha sido reemplazado con el sensor de presión barométrica SPA06-003.
:::

**Nota:** Dimensiones - 17.69 *11.64* 1.88cm

1. **[Grove - LED](https://wiki.seeedstudio.com/es/Grove-Red_LED/):** Módulo LED simple
2. **[Grove - Buzzer](https://wiki.seeedstudio.com/es/Grove-Buzzer/):** Zumbador Piezoeléctrico
3. **[Grove - Pantalla OLED 0.96"](https://wiki.seeedstudio.com/es/Grove-OLED-Display-0.96-SSD1315/):** Resolución de puntos 128×64 Alto brillo, auto-emisión y alta relación de contraste Pantalla grande en un diseño compacto Bajo consumo de energía.
4. **[Grove - Botón](https://wiki.seeedstudio.com/es/Grove-Button/):** Botón Pulsador Momentáneo
5. **[Grove - Potenciómetro Rotatorio](https://wiki.seeedstudio.com/es/Grove-Rotary_Angle_Sensor/):** Potenciómetro Ajustable
6. **[Grove - Luz](https://wiki.seeedstudio.com/es/Grove-Light_Sensor/):** Detecta la intensidad de luz circundante
7. **[Grove - Sonido](https://wiki.seeedstudio.com/es/Grove-Sound_Sensor/):** Detecta la intensidad de sonido circundante
8. **[Grove - Sensor de Temperatura y Humedad](https://wiki.seeedstudio.com/es/Grove-TemperatureAndHumidity_Sensor/):** Detecta los valores de temperatura y humedad circundantes. La versión anterior usaba el sensor DHT11, mientras que las versiones posteriores a 2025.10 usan el sensor DHT20.
9. **Grove - Sensor de Presión de Aire:** Detecta la presión atmosférica circundante

- La versión anterior usaba el [BMP280](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BMP280/).
- La nueva versión fechada en octubre de 2025 usa [SPA06-003](https://wiki.seeedstudio.com/es/grove_barometer_sensor_spa06_003).

10. **[Grove - Acelerómetro de 3 Ejes](https://wiki.seeedstudio.com/es/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR):** Detecta la aceleración del objeto
11. **[Seeeduino Lotus](https://wiki.seeedstudio.com/es/Seeeduino_Lotus/):** Placa Compatible con Arduino con Puertos Grove

**Nota:**
        Por defecto, los módulos Grove están conectados al Seeeduino a través de orificios de estampado de PCB. Esto significa que no necesitas usar cables Grove para conectar si no están separados. Los pines por defecto son los siguientes:

|Módulos|Interfaz|Pines/Dirección|
|---|---|---|
|LED|Digital|D4|
|Buzzer|Digital|D5|
|Pantalla OLED 0.96"|I2C|I2C, 0x78(por defecto)|
|Botón|Digital|D6|
|Potenciómetro Rotatorio|Analógico|A0|
|Luz|Analógico|A6|
|Sonido|Analógico|A2|
|Sensor de Temperatura y Humedad|Digital|D3|
|Sensor de Presión de Aire|I2C|I2C, 0x77(por defecto) / 0x76(opcional)|
|Acelerómetro de 3 Ejes|I2C|I2C, 0x19(por defecto)|

### Instrucción de Separación

**Atención:**
    Ten cuidado de no cortarte las manos al usar un cuchillo

Si prefieres usar los módulos en otro lugar, entonces puedes simplemente seguir los procedimientos para separar los módulos.

**Paso 1**

Usa un cuchillo o un objeto afilado para cortar en los orificios de perforación que conectan los sensores entre sí

**Paso 2**

Agita los módulos hacia arriba y hacia abajo y deberían salir bastante fácilmente.

## Lista de Partes

|Módulos|Cantidad|
|---|---|
|**Sensores**||
|Sensores de Temperatura y Humedad|x1|
|Acelerómetros de 3 Ejes|x1|
|Presión de Aire|x1|
|Sensor de Luz|x1|
|Sensor de Sonido|x1|
|**Módulos de Entrada**||
|Potenciómetro Rotativo|x1|
|Botón|x1|
|**Módulos de Salida**||
|LED|x1|
|Zumbador|x1|
|**Módulo de Pantalla**||
|Pantalla OLED|x1|
|**Cables Grove**|x6|
|**Cable Micro USB**|x1|

## Objetivos de Aprendizaje

- Fundamentos de Sistemas de Hardware de Código Abierto.
- Programación Básica de Arduino.
- Principios y métodos de comunicación para sensores.
- Implementación práctica de proyectos de Hardware de Código Abierto.

### Demo de Desempaquetado Plug and Play

El Kit para Principiantes Grove tiene un demo de desempaquetado plug and play, donde primero conectas la alimentación a la placa, ¡obtienes la oportunidad de experimentar todos los sensores de una vez! ¡Usa el botón y el potenciómetro rotativo para experimentar cada demo de sensor!

![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **Desplazar** -> Rotar Potenciómetro Rotativo
- **Seleccionar** -> Presión Corta del Botón
- **Salir del Demo Actual** -> Presión Larga del Botón

El módulo de zumbador y LED se utilizan para la indicación de teclas.

## Cómo Empezar Con Arduino

### Instalar el IDE de Arduino

- **Arduino IDE** es un entorno de desarrollo integrado para Arduino, que se utiliza para programación de software de microcontroladores de un solo chip, descarga, pruebas y demás.
- Descarga e Instala [Arduino IDE](https://www.arduino.cc/en/Main/Software) para tu sistema operativo deseado aquí.

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)

### Instalar el controlador USB

- Arduino se conecta a la PC a través de un cable USB. El controlador USB depende del tipo de chip USB que estés usando en tu Arduino. *Nota: Los chips USB generalmente están impresos en la parte posterior de la placa de desarrollo.*

  - Descarga el [Controlador USB CP2102](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). **Nota:** Descarga según tu SO.
  - Después de que se complete la instalación del controlador, conecta Arduino al puerto USB de la PC con un cable USB.
    - **Para usuarios de Windows:** Puedes verlo en `Mi PC` -> `Propiedades` -> `Hardware` -> `Administrador de Dispositivos`. Aparecerá un `COM`.
    - **Para usuarios de Mac OS:** Puedes navegar a `` en la esquina superior izquierda, y elegir `Acerca de esta Mac` -> `Informe del Sistema...` -> `USB`. Debería aparecer un Controlador USB CP2102.
  - Si el controlador no está instalado, o si el controlador está instalado incorrectamente (no coincide con el modelo del chip), aparecerá como un "dispositivo desconocido" en el administrador de dispositivos. En este punto, el controlador debe reinstalarse.

### Iniciar el IDE de Arduino

1.Abre el **IDE de Arduino** en tu PC.
2.Haz clic en `Herramientas` -> `Placa`-> `Placas Arduino AVR`-> `Arduino Uno` para seleccionar el Modelo de Placa de Desarrollo correcto. Selecciona **Arduino Uno** como Placa.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/uno_board.jpg)

3.Haz clic en `Herramientas` -> `Puerto` para seleccionar el Puerto correcto (el Puerto Serie mostrado en el Administrador de Dispositivos en el paso anterior). En este caso, se selecciona `COM11`. **Para usuarios de Mac OS**, debería ser `/dev/cu.SLAB_USBtoUART`.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.jpg)

4.Crea un nuevo archivo de Arduino y nómbralo `Hello.ino`, luego copia el siguiente código en él:

```Cpp
void setup() {
  Serial.begin(9600); // initializes the serial port with a baud rate of 9600
}
void loop() {
  Serial.println("hello, world"); // prints a string to a serial port
  delay(1000); //delay of 1 second
}
```

5.En la esquina superior izquierda del IDE de Arduino, hay dos botones, **Verificar y Cargar**. Primero, presiona el botón Verificar(✓) para compilar. Después de que la compilación sea exitosa, presiona el botón de carga(→).

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6.Navega a `Tools` -> `Serial Monitor`, o haz clic en el **Serial Monitor** en la esquina superior derecha(Símbolo de Lupa), puedes ver los resultados de ejecución del programa:

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**Nota:** Si instalaste el IDE de Arduino portátil desde nuestro USB Drive, puedes encontrar todas las demostraciones de módulos en **Files** -> **Sketch Book**, así como todas las librerías de módulos, están preinstaladas con el IDE de Arduino!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png" style={{width:600, height:'auto'}}/></div>

**Nota:**
        Todos los módulos están precableados en una sola placa de circuito, por lo que no se necesitan cables ni soldadura. Sin embargo, si separas los módulos y quieres conectarlos con cables Grove, por favor revisa amablemente la Guía de Separación.

## Guía de Lecciones

### Lección 1: Parpadeando con el LED

Hemos completado el programa de salida "Hello world". Ahora aprendamos cómo encender el módulo LED. Conocemos los tres componentes básicos de un sistema de control: Entrada, Control y Salida. Pero encender el LED usa solo la salida, no la entrada. Seeeduino es la unidad de control, el módulo LED es la unidad de salida y la señal de salida es una señal digital.

Información de Contexto:

- **¿Qué es una Señal Digital?**

**Señal digital:** La señal digital se refiere al valor de la amplitud que es discreto, la amplitud está limitada a un número finito de valores. En nuestro controlador, la señal digital tiene dos estados: LOW(0V) para 0; HIGH(5V) para 1. Así que enviar una señal HIGH al LED puede encenderlo.

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)

Componentes Involucrados
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Cable(Si está Separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)

Conexión de hardware
    - **Conexión de módulo**
        - Conexión predeterminada por orificio de estampado PCB.
    - Conecta el Seeeduino a la computadora a través del cable USB.

-Código de Software

    - Abre el IDE de Arduino.
    - Copia el siguiente código, haz clic en Verificar para revisar errores de sintaxis. Verifica que no haya errores, y puedes cargar el código.

```Cpp
//LED Blink
//The LED will turn on for one second and then turn off for one second
int ledPin = 4;
void setup() {
    pinMode(ledPin, OUTPUT);
}
void loop() {
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
    delay(1000);
}
```

Análisis de Código

```cpp
setup(){
}
```

La función `setup()` se llama cuando un sketch inicia. Úsala para inicializar variables, modos de pines, comenzar a usar librerías, etc. La función `setup()` solo se ejecutará una vez, después de cada encendido o reinicio de la placa Arduino.

```cpp
loop(){
}
```

Después de crear una función `setup()`, que inicializa y establece los valores iniciales, la función `loop()` hace precisamente lo que su nombre sugiere, y se ejecuta en bucle consecutivamente, permitiendo que tu programa cambie y responda. Úsala para controlar activamente la placa Arduino.

```cpp
int ledPin = 4;
```

**Descripción:**

Convierte un valor al tipo de datos int.

**Sintaxis:**

int(**x**) o (int)**x** (conversión de tipo estilo C)

**Parámetros:**

**x**: un valor. Tipos de datos permitidos: cualquier tipo.

Asigna un tipo `int` 4 a la variable llamada ledPin.

```cpp
pinMode(ledPin, OUTPUT);
```

**Descripción:**

Configura el pin especificado para comportarse como una entrada o una salida. Consulta la página de Pines Digitales para obtener detalles sobre la funcionalidad de los pines.

A partir de Arduino 1.0.1, es posible habilitar las resistencias pull-up internas con el modo `INPUT_PULLUP`. Además, el modo `INPUT` desactiva explícitamente las resistencias pull-up internas.

**Sintaxis:**

pinMode(**pin, mode**)

**Parámetros:**

**pin**: el número de pin de Arduino para establecer el modo.

**mode**: `INPUT`, `OUTPUT`, o `INPUT_PULLUP`.

Configurando ledPin al modo de salida.

```cpp
digitalWrite(ledPin, HIGH);
```

**Descripción:**

Escribe un valor `HIGH` o `LOW` a un pin digital.

Si el pin ha sido configurado como OUTPUT con pinMode(), su voltaje se establecerá al valor correspondiente: 5V (o 3.3V en placas de 3.3V) para `HIGH`, 0V (tierra) para `LOW`.

Si el pin está configurado como INPUT, digitalWrite() habilitará (HIGH) o deshabilitará (LOW) la resistencia pull-up interna en el pin de entrada. Se recomienda establecer el pinMode() a `INPUT_PULLUP` para habilitar la resistencia pull-up interna. Consulta el tutorial de Pines Digitales para más información.

Si no estableces el pinMode() a OUTPUT, y conectas un LED a un pin, al llamar digitalWrite(HIGH), el LED puede aparecer tenue. Sin establecer explícitamente pinMode(), digitalWrite() habrá habilitado la resistencia pull-up interna, que actúa como una gran resistencia limitadora de corriente.

**Sintaxis:**

digitalWrite(**pin, value**)

**Parámetros:**

**pin**: el número de pin de Arduino.

**value**: `HIGH` o `LOW`.

Cuando establecemos el ledPin como salida, HIGH significa enviar nivel alto al pin, el LED se enciende.

```cpp
digitalWrite(ledPin, LOW);
```

Cuando configuramos el LED como salida, LOW significa enviar un nivel bajo al pin, el LED se apaga.

```cpp
delay(1000);
```

**Descripción:**

Pausa el programa durante la cantidad de tiempo (en milisegundos) especificada como parámetro. (Hay 1000 milisegundos en un segundo.)

**Sintaxis:**

delay(**ms**)

**Parámetros:**

**ms**: el número de milisegundos a pausar. Tipos de datos permitidos: unsigned long.

Retrasar el programa por 1000ms(1s).

**Efecto de Demostración y Resultado de Impresión Serial:**

El módulo LED estará 1 segundo encendido y 1 segundo apagado.

**Ajuste de Brillo del LED:**

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>
  <br />
</div>

En el módulo LED Grove, hay una **resistencia variable que se puede ajustar usando un destornillador.** ¡Gírala para hacer que el LED se ilumine más brillante!

Guía de Separación

Si los módulos se separan de la placa. Usa un cable Grove para conectar el **LED Grove** a la interfaz digital **D4** del Seeeduino Lotus.

### Lección 2: Presionar Botón para Encender LED

Lo primero que necesitamos saber es que la entrada del botón es una señal digital, y solo hay dos estados, 0 o 1, por lo que podemos controlar la salida basándonos en esos dos estados.

- **Práctica:** Usar botón para ENCENDER y APAGAR el módulo LED

Componentes Involucrados

    1. Seeeduino Lotus
    2. LED Grove
    3. Botón Grove
    4. Cables Grove(Si están separados)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)

Conexión de hardware

    - **Conexión de módulos:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora mediante un cable USB.

- **Análisis de hardware**:
  - Entrada: Botón
  - Control: Seeeduino
  - Salida: módulo LED

Tanto el sensor como el LED usan señales digitales, por lo que deben conectarse a interfaces digitales.

- **Código de software**:
  - Abrir Arduino IDE.
  - Copiar el siguiente código, hacer clic en Verificar para comprobar errores de sintaxis. Verificar que no hay errores, y puedes subir el código.

```Cpp
//Button to turn ON/OFF LED
//Constants won't change. They're used here to set pin numbers:
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  4;      // the number of the LED pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

Análisis del Código

```cpp
pinMode(ledPin, OUTPUT);
```

Define el LED como la unidad de salida.

```cpp
pinMode(buttonPin, INPUT);
```

Define el botón como la unidad de entrada.

```cpp
buttonState = digitalRead(buttonPin);
```

**Descripción:**

Lee el valor de un pin digital especificado, ya sea `HIGH` o `LOW`.

**Sintaxis:**

digitalRead(**pin**)

**Parámetros:**

**pin**: el número de `pin` de Arduino que quieres leer

Esta función se utiliza para leer los estados de los pines digitales, ya sea HIGH o LOW. Cuando se presiona el botón, el estado es HIGH, de lo contrario es LOW.

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**Descripción:**

El if…​else permite un mayor control sobre el flujo del código que la declaración if básica, al permitir que múltiples pruebas se agrupen. Una cláusula else (si existe) se ejecutará si la condición en la declaración if resulta en falso. El else puede preceder a otra prueba if, de modo que múltiples pruebas mutuamente excluyentes pueden ejecutarse al mismo tiempo.

Cada prueba procederá a la siguiente hasta que se encuentre una prueba verdadera. Cuando se encuentra una prueba verdadera, se ejecuta su bloque de código asociado, y el programa luego salta a la línea que sigue a toda la construcción if/else. Si ninguna prueba resulta ser verdadera, se ejecuta el bloque else predeterminado, si está presente, y establece el comportamiento predeterminado.

Tenga en cuenta que un bloque else if puede usarse con o sin un bloque else de terminación y viceversa. Se permite un número ilimitado de tales ramas else if.

**Sintaxis:**

```cpp
if (condition1) {
  // do Thing A
}
else if (condition2) {
  // do Thing B
}
else {
  // do Thing C
}
```

El uso de la declaración es: si la expresión lógica entre paréntesis es verdadera, ejecuta la declaración entre llaves después de **if**, si no, ejecuta la declaración entre llaves después del **else**. Si el estado del botón es alto, el pin LED emite un nivel alto y enciende el LED, de lo contrario apaga el LED.

**Efecto de la Demostración y Resultado de Impresión Serial:**

Presionar el botón encenderá el módulo LED.

Guía de Conexión

Usa un cable Grove para conectar el LED Grove a la interfaz digital **D4** del Seeeduino Lotus. Conecta el Botón Grove a la interfaz digital **D6**.

### Lección 3: Controlando la Frecuencia del Parpadeo

En la sección anterior, estudiamos que el botón solo tiene dos estados, estado ON/OFF correspondiente a 0V y 5V, pero en la práctica, a menudo encontramos la necesidad de muchos estados, no solo 0V y 5V. ¡Entonces necesitas usar Señal Analógica! El Potenciómetro Rotatorio es un ejemplo clásico que usa una señal analógica.

Información de Contexto:

- **Qué es una Señal Analógica**

**Señales analógicas:** Las señales varían continuamente en tiempo y valor, y la amplitud, frecuencia o fase de la señal cambia continuamente en cualquier momento, como la señal de sonido de transmisión actual, o señal de imagen, etc. La señal analógica tiene onda senoidal y onda triangular y así sucesivamente. Los pines analógicos de tu microcontrolador pueden tener entre 0V y 5V mapeados a un rango entre 0 y 1023 donde 1023 está mapeado como 5V y 512 está mapeado como 2.5v y etc.

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)

Componentes Involucrados
    1. Seeeduino Lotus
    2. LED Grove
    3. Interruptor Rotatorio Grove
    4. Cables Grove(Si están separados)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)

Conexión de hardware
    - **Conexión del módulo:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora a través de un cable USB.

- **Análisis de hardware:**

  - Entrada: Potenciómetro Rotatorio
  - Control: Seeeduino Lotus
  - Salida: módulo LED

La entrada es una señal analógica, por lo que está conectada a la interfaz de señal analógica, el módulo LED está conectado a la interfaz de señal digital.

Software

    - Abre Arduino IDE.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```Cpp
//Rotary controls LED
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
int rotaryValue = 0;  // variable to store the value coming from the rotary

void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // read the value from the sensor:
  rotaryValue = analogRead(rotaryPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(rotaryValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(rotaryValue);
}
```

Análisis del Código

```cpp
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
```

**Descripción:**

Puede que encuentres que definimos rotatePin y ledPin de diferentes maneras. Esto es porque el Potenciómetro Rotatorio genera una señal analógica, y el LED es controlado por una señal digital.

Para **definir un Pin Analógico**, usa A + el número del Pin (Por ejemplo aquí `A0`).

Para **definir un Pin Digital**, usa solo el número del pin (Por ejemplo aquí `4`).

```cpp
rotaryValue = analogRead(rotaryPin);
```

**Descripción:**

Lee el valor del pin analógico especificado. Las placas Arduino contienen un convertidor analógico a digital multicanal de 10 bits. Esto significa que mapeará voltajes de entrada entre 0 y el voltaje de operación (5V o 3.3V) en valores enteros entre 0 y 1023. En un Arduino UNO, por ejemplo, esto produce una resolución entre lecturas de: 5 voltios / 1024 unidades o, 0.0049 voltios (4.9 mV) por unidad.

**Sintaxis:**

analogRead(**pin**)

**Parámetros:**

**pin**: el nombre del pin de entrada analógica del cual leer (A0 a A5 en la mayoría de las placas).

**Devuelve:** La lectura analógica en el pin. Aunque está limitada a la resolución del convertidor analógico a digital (0-1023 para 10 bits o 0-4095 para 12 bits). Tipo de dato: int.

Esta función se usa para leer el valor de los pines analógicos (la posición del sensor rotativo), el rango de valores es: 0 ~ 1023.

```cpp
delay(rotaryValue);
```

Función de retardo, La duración en milisegundos del retardo es el valor entre paréntesis. Debido a que el valor es el valor de la señal analógica del pin de la perilla que se está leyendo, el tiempo de retardo puede ser controlado por la perilla.

**Efecto de la Demostración y Resultado de Impresión Serie:**

Girar el Potenciómetro cambiará la frecuencia del parpadeo del LED.

Guía de Conexión

Usa un cable Grove para conectar el LED a la interfaz digital **D4** del Seeeduino Lotus, y un cable Grove para conectar el Grove Rotary Switch a la interfaz de señal analógica **A0**.

### Lección 4: Haciendo que el Zumbador haga BEEP

Al igual que el módulo LED, el Zumbador también es un módulo de salida, en lugar de encenderse produce un sonido de pitido. Esto puede ser usado para muchas situaciones con propósitos de indicación. ¡Aprendamos cómo generar sonido usando el zumbador!

Información de Contexto:

- **¿Cuál es la diferencia entre Zumbador Activo y Pasivo?**

 Hay dos tipos de zumbadores, uno es **activo** y el otro es **pasivo**. Tanto los zumbadores activos como pasivos se usan para hacer sonido en la electrónica.

  El **zumbador activo** tiene una fuente de oscilación interna que hace que el zumbador suene cada vez que se aplica energía. Los zumbadores activos son ampliamente usados en computadoras, impresoras, copiadoras, alarmas, juguetes electrónicos, electrónica automotriz, teléfonos, temporizadores y otros dispositivos de sonido de productos electrónicos.

  Un **zumbador pasivo** no tiene fuente interna de oscilación y necesita ser controlado por **una onda cuadrada** y **una frecuencia diferente**. Actúa como un altavoz electromagnético, y la señal de entrada cambiante produce sonido, en lugar de un tono automáticamente.

 <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/buzzer-ap.jpg" /></div>

En este kit, el **Grove-Buzzer es un zumbador pasivo** por lo que necesita una señal AC para controlarlo. Esto entonces lleva a la siguiente pregunta, ¡cómo generar Onda Cuadrada (señales AC) con Arduino! Bueno, una manera fácil es usar PWM.

- **¿Qué es PWM?**

**Modulación por Ancho de Pulso, o PWM**, es una técnica para obtener resultados analógicos con medios digitales. El control digital se usa para crear una onda cuadrada, una señal conmutada entre encendido y apagado. Este patrón de encendido-apagado puede simular voltajes entre completamente encendido (5 Voltios) y apagado (0 Voltios) cambiando la porción del tiempo que la señal pasa encendida versus el tiempo que la señal pasa apagada. La duración del "tiempo encendido" se llama el ancho de pulso. Para obtener valores analógicos variables, cambias, o modulas, ese ancho de pulso. Si repites este patrón de encendido-apagado lo suficientemente rápido, el resultado es como si la señal fuera un voltaje constante entre 0 y 5v como una señal AC. *Referencia: [Arduino](https://www.arduino.cc/en/tutorial/PWM)*. Esta señal PWM puede entonces ser usada para controlar el zumbador pasivo con facilidad.

Para generar señales PWM en Arduino, puedes usar **`analogWrite()`**, en contraste con usar `digitalWrite()` para generar señales DC.

Hay seis pines digitales en tu Seeeduino que están marcados con el símbolo "~", lo que significa que pueden enviar una señal PWM: 3,5,6,9,10,11. Se llaman pines PWM.

Componentes Involucrados

    1. Seeeduino Lotus
    2. Grove Buzzer
    3. Grove Cable(Si está Separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)

Conexión de Hardware

    - **Conexión del módulo**
        - Conexión predeterminada por orificio de estampado PCB.
    - Conecta el Seeeduino a la computadora a través del cable USB.

Código de Software

    - Abre Arduino IDE.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```Cpp
int BuzzerPin = 5;

void setup() {
  pinMode(BuzzerPin, OUTPUT);
}

void loop() {
  analogWrite(BuzzerPin, 128);
  delay(1000);
  analogWrite(BuzzerPin, 0);
  delay(0);
}
```

Análisis de Código

```cpp
analogWrite(BuzzerPin, 128);
```

**Descripción:**

Escribe un valor analógico (onda PWM) a un pin. Puede usarse para encender un LED con diferentes brillos o mover un motor a varias velocidades. Después de una llamada a analogWrite(), el pin generará una onda rectangular constante del ciclo de trabajo especificado hasta la siguiente llamada a analogWrite() (o una llamada a digitalRead() o digitalWrite()) en el mismo pin.

**Sintaxis:**

analogWrite(**pin, value**)

**Parámetros:**

**pin**: el `pin` de Arduino al que escribir. Tipos de datos permitidos: int.

**value**: el ciclo de trabajo: entre `0` (siempre apagado) y `255` (siempre encendido). Tipos de datos permitidos: int.

Escribe un valor analógico (onda PWM) al Zumbador.

**Efecto de Demostración y Resultado de Impresión Serial:**

El Zumbador suena.

Guía de Conexión

Usa un cable Grove para conectar el Zumbador Grove a la interfaz digital **D5** del Seeeduino Lotus.

-----

Uso de PWM

Ahora que hemos aprendido el uso de PWM, además de usar PWM para controlar el zumbador pasivo, también podemos usar PWM para controlar la velocidad del motor y **el brillo de las luces LED** y etc.

Como indica el diagrama a continuación, usa `analogWrite()` para generar ondas PWM, mientras mayor sea el porcentaje del Ciclo de Trabajo, más brillante será el LED.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/PWM-LED.png" /></div>

Sin embargo, el Módulo LED en el Kit para Principiantes Grove no puede ser controlado directamente por PWM, porque el módulo LED está conectado a D4, y como se mencionó anteriormente, los pines PWM son 3, 5, 6, 9, 10, 11, y el pin 4 no es un pin PWM. Si quieres controlar el LED con PWM, necesitas desconectarlo y usar el cable Grove para conectar al puerto Grove con función PWM.

Por ejemplo, conectemos **Grove-LED a D3 usando un cable Grove**:

!!!Note
    D3 también está interconectado al Sensor de Temperatura y Humedad Grove, y por lo tanto este ejemplo no puede usarse junto con el Sensor de Temperatura y Humedad Grove.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/pwmled-connect.png" /></div>

```cpp
int LED = 3; // Cable connection from LED to D3
int Potentiometer = A0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); //Mapping potentiometer value to PWM signal value
  analogWrite(LED, Value);
}
```

**Compila y sube** el código, ¡deberías poder controlar y ajustar el brillo del LED usando señales PWM!

Análisis del Código

```cpp
Value = map(potentioValue, 0, 1023, 0, 255);
```

**Descripción:**

Re-mapea un número de un rango a otro. Es decir, un valor de **fromLow** se mapearía a **toLow**, un valor de **fromHigh** a **toHigh**, valores intermedios a valores intermedios, etc.

No restringe valores dentro del rango, porque los valores fuera del rango a veces son intencionados y útiles. La función `constrain()` puede usarse antes o después de esta función, si se desean límites a los rangos.

Nota que los "límites inferiores" de cualquier rango pueden ser mayores o menores que los "límites superiores", por lo que la función `map()` puede usarse para invertir un rango de números, por ejemplo

**y = map(x, 1, 50, 50, 1);**

La función también maneja bien los números negativos, por lo que este ejemplo

**y = map(x, 1, 50, 50, -100);**

también es válido y funciona bien.

La función map() usa matemáticas enteras por lo que no generará fracciones, cuando las matemáticas podrían indicar que debería hacerlo. Los residuos fraccionarios se truncan y no se redondean o promedian.

**Sintaxis:**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**Parámetros:**

**value**: el número a mapear.

**fromLow**: el límite inferior del rango actual del valor.

**fromHigh**: el límite superior del rango actual del valor.

**toLow**: el límite inferior del rango objetivo del valor.

**toHigh**: el límite superior del rango objetivo del valor.

Mapeando la señal analógica del sensor potenciómetro (0 a 1023) al volumen de la Luz (0 a 255).

**Efecto de Demostración y Resultado de Impresión Serial:**

Ajusta el potenciómetro para ajustar el brillo del LED.

En resumen, cuando quieras usar la función PWM, asegúrate de seleccionar aquellos pines con un símbolo "~" delante de sus nombres.

### Lección 5: Haciendo un LED de Inducción de Luz

El sensor de luz contiene una resistencia fotosensible para medir la intensidad de la luz. La resistencia de la resistencia fotosensible disminuye con el aumento de la intensidad de la luz. El LED se encenderá si el entorno está oscuro, y permanecerá apagado si el entorno está brillante.

En las siguientes secciones, usaremos el Monitor Serial para observar resultados de nuestros sensores, ¡así que aquí viene la breve introducción!

Información de Fondo:

- **Qué es el Monitor Serial**

El Monitor Serial es una herramienta útil para observar resultados en Arduino, puede ser muy útil en términos de imprimir resultados de los sensores o depurar en general. ¡También puedes enviar datos de vuelta al controlador a través del monitor serial para hacer ciertas tareas! Nota: Asegúrate de que la transferencia de datos Serial coincida con el código.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

Puedes abrir el Monitor Serial haciendo clic en **Tools** -> **Serial Monitor**.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)

Componentes Involucrados

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Sensor de Luz
    4. Grove Cable(Si está separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)

Conexión de hardware

    - **Conexión del módulo:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora a través de un cable USB.

- **Análisis de hardware:**

  - Entrada: Sensor de Luz
  - Control: Seeeduino Lotus
  - Salida: módulo LED

Código de Software

    - Abre Arduino IDE.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```Cpp
// Light Switch
int sensorpin = A6; // Analog input pin that the sensor is attached to
int ledPin = 4;    // LED port
int sensorValue = 0;        // value read from the port
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  pinMode(ledPin,OUTPUT);
  pinMode(sensorpin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(sensorpin);

  Serial.println(sensorValue);

  if (sensorValue < 200) {
    digitalWrite(ledPin, HIGH);
  }
  else {
    digitalWrite(ledPin, LOW);
  }

  delay(200);
}
```

También puedes ver las lecturas de intensidad de luz desde el **Monitor Serie**, navega a **Herramientas** -> **Monitor Serie**.

Análisis de Código

```cpp
Serial.begin(9600);
```

**Descripción:**

Establece la velocidad de datos en bits por segundo (baudios) para la transmisión de datos serie. Para comunicarse con el Monitor Serie, asegúrate de usar una de las velocidades de baudios listadas en el menú de la esquina inferior derecha de su pantalla. Sin embargo, puedes especificar otras velocidades - por ejemplo, para comunicarte a través de los pines 0 y 1 con un componente que requiere una velocidad de baudios particular.

Un segundo argumento opcional configura los bits de datos, paridad y parada. El valor predeterminado es 8 bits de datos, sin paridad, un bit de parada.

El software que se ejecuta en la computadora se comunica con la placa de desarrollo, y la velocidad de baudios es 9600.

**Sintaxis:**

Serial.begin(**speed**)

**Parámetros:**

**speed**: Velocidad de comunicación Serie. es decir `9600`, `115200` y etc.

Establece la velocidad de baudios Serie a 9600.

```cpp
Serial.println(sensorValue);
```

**Descripción:**

Imprime datos al puerto serie como texto ASCII legible por humanos seguido de un carácter de retorno de carro (ASCII 13, o '\r') y un carácter de nueva línea (ASCII 10, o '\n'). Este comando toma las mismas formas que Serial.print().

**Sintaxis:**

Serial.println(**val**) o Serial.println(**val**, **format**)

**Parámetros:**

**val**: el valor a imprimir. Tipos de datos permitidos: cualquier tipo de dato.

**format**: especifica la base numérica (para tipos de datos integrales) o el número de lugares decimales (para tipos de punto flotante).

El puerto serie imprime el valor del sensor de luz. Así que abres el **monitor serie** en la interfaz del IDE, y ves el valor del sensor de salida.

**Efecto de Demostración y Resultado de Impresión Serie:**

El módulo LED se encenderá si está oscuro y permanecerá apagado si está brillante.

Guía de Conexión

Usa el Cable Grove para conectar el Grove LED a la interfaz de señal digital **D4** del Seeeduino Lotus, conecta el Grove Sensor de Luz a la interfaz de señal analógica **A6** del Seeeduino Lotus.

### Lección 6: Luz LED Sensible al Sonido

El sensor de sonido puede detectar la intensidad del sonido del ambiente, y su salida también es simulada. Estoy seguro de que todos han estado expuestos a las luces de control de sonido, pero ahora podemos hacer una nosotros mismos, y con los fundamentos, este experimento será fácil para ustedes. Aquí se usó el Trazador Serie para visualizar los resultados.

Información de Contexto:

- **Qué es el Trazador Serie**

El Trazador Serie es similar al Monitor Serie, permitiéndote graficar nativamente datos serie desde tu Arduino a tu computadora en tiempo real. Esto es muy útil cuando los datos necesitan ser visualizados.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

Puedes abrir el Trazador Serie haciendo clic en **Herramientas** -> **Trazador Serie**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg" style={{width:400, height:'auto'}}/></div>

- **Práctica:** Las luces LED se encienden cuando se hace sonido. Cuando no hay sonido y está muy silencioso, las luces LED se apagan.

Componentes Involucrados

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Sensor de Sonido
    4. Cable Grove(Si está separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)

Conexión de Hardware

    - **Conexión de módulos:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora a través de un cable USB.

Código de Software

    - Abre Arduino IDE.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```Cpp
//Sound Control Light
int soundPin = A2; // Analog sound sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(soundPin, INPUT);
  Serial.begin(9600);
}
void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  Serial.println(soundState);
  // if the sound sensor’s value is greater than 400, the light will be on.
  //Otherwise, the light will be turned off
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```

También puedes ver las lecturas de intensidad de luz desde el **Serial Plotter**, navega a **Tools** -> **Serial Plotter**.

**Nota: También puedes ajustar el valor según la intensidad de luz de tu entorno.**

Análisis del Código

```cpp
Serial.begin(9600);
```

El software que se ejecuta en la computadora se comunica con la placa de desarrollo, y la velocidad de baudios es 9600.

```cpp
Serial.print(" ");
```

Esta función se utiliza para enviar datos desde el puerto serie, la salida es lo que está contenido entre las comillas dobles.

```cpp
Serial.println( );
```

Esta declaración es similar a la anterior, excepto que **serial.println** tiene un retorno de línea nueva.

```cpp
Serial.println(soundState);
```

El puerto serie imprime el valor del sensor de sonido. Así que abres el **monitor serie** en la interfaz del IDE, y ves el valor del sensor de salida.

**Efecto de la Demo y Resultado de Impresión Serie:**

El módulo LED se encenderá si el entorno es lo suficientemente ruidoso.

Guía de Conexión

Usa cables Grove para conectar el Grove LED a la interfaz de señal digital **D4** del Seeeduino Lotus, Conecta el Grove Sensor de Sonido a la interfaz de señal analógica **A2** del Seeeduino Lotus.

### Lección 7: Mostrando Datos en OLED

¡La Pantalla OLED puede usarse para muchas situaciones, donde podrías usarla para visualizar lecturas de sensores!

Información de Contexto:

- **Qué son las Librerías de Arduino**

El entorno de Arduino puede extenderse mediante el uso de librerías, al igual que la mayoría de otras plataformas de programación. Las librerías proporcionan funcionalidades adicionales para usar en sketches, es decir, trabajar con hardware específico o manipular datos. Para usar una librería en un sketch, selecciónala desde **Sketch** ->**Include Library**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg" style={{width:500, height:'auto'}}/></div>

Para más información, por favor visita también [Cómo instalar Librerías de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

Componentes Involucrados

    1. Seeeduino Lotus
    2. Grove OLED
    3. Cable Grove(Si está separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)

Conexión de Hardware

    - **Conexión del módulo:**
        - Conexión por defecto mediante orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora mediante un cable USB.

Código de Software

    - Abre Arduino IDE.
    - Instala la **librería U8g2**: Navega a **Sketch** -> **Include Library** -> **Manage Libraries...** y Busca la palabra clave "**U8g2**" en el **Library Manager**. Es la **librería u8g2 por oliver**, y haz clic luego instalar.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png)

- Copia el siguiente código, haz clic en Verify para verificar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

 U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  //u8x8.setBusClock(100000);  // If you breakout other modules, please enable this line
  u8x8.begin();
  u8x8.setFlipMode(1);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

!!!Atención
  Si separas todos los módulos y usas el OLED Grove por separado, puede que encuentres que no funciona con este código. Si encuentras tal problema, por favor consulta el final de esta sección: Guía de Separación.

- **Análisis del código**

```cpp
#include <>
```

**Descripción:**

`#include` se utiliza para incluir bibliotecas externas en tu sketch. Esto le da al programador acceso a un gran grupo de bibliotecas estándar de C (grupos de funciones pre-hechas), y también bibliotecas escritas especialmente para Arduino.

Ten en cuenta que `#include`, similar a `#define`, no tiene terminador de punto y coma, y el compilador producirá mensajes de error crípticos si añades uno.

```cpp
#include <U8x8lib.h>
```

**#include** es una instrucción que introduce un archivo de cabecera. Aquí usamos la biblioteca U8x8lib.h.

```cpp
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  
```

**Nota**
  
Si separas otros módulos y solo usas OLED, tienes que usar I2C por software:

```cpp
// U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  

U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE); 
```

**Descripción:**

Una vez que el objeto está declarado, puedes usar funciones de la biblioteca.

```cpp
u8x8.begin();
```

**Descripción:**

Procedimiento de configuración simplificado de la pantalla para el entorno Arduino. Consulte la guía de configuración para la selección de un constructor U8g2 adecuado.

**Sintaxis:**

u8x8.begin()

Inicializa la biblioteca u8g2

```cpp
u8x8.setFlipMode(1);
```

**Descripción:**

Algunas pantallas soportan una rotación de 180 grados del búfer de marco interno. Esta característica de hardware puede ser controlada con este procedimiento. Importante: Redibuja la pantalla completa después de cambiar el modo de volteo. Lo mejor es limpiar la pantalla primero, luego cambiar el modo de volteo y finalmente redibujar el contenido. Los resultados serán indefinidos para cualquier contenido existente en la pantalla.

**Sintaxis:**

u8x8.setFlipMode(**mode**)

**Parámetros:**

**mode**: `0` o `1`

Voltea la pantalla 180 grados.

```cpp
u8x8.setCursor();
```

**Descripción:**

Define el cursor para la función de impresión. Cualquier salida de la función de impresión comenzará en esta posición.

**Sintaxis:**

u8x8.setCursor(**x, y**)

**Parámetros:**

**x, y**: Posición de columna/fila para el cursor de la función de impresión.

Establece la posición del cursor de dibujo.

```cpp
u8x8.setFont()
```

**Descripción:**

Define una fuente u8x8 para las funciones de dibujo de glifos y cadenas.

**Sintaxis:**

u8x8.setFont(**font_8x8**)

Establece la fuente para la pantalla.

```cpp
u8x8.print();
```

Dibuja el contenido en el OLED.

**Efecto de Demostración y Resultado de Impresión Serie:**

Imprime Hello World en la Pantalla OLED.

**Referencia de la Biblioteca U8g2**

Si deseas más información sobre la biblioteca U8g2, por favor consulta [aquí](https://github.com/olikraus/u8g2/wiki/u8g2reference).

Guía de Conexión

Usa el cable Grove para conectar el OLED a la interfaz **I2C** del Seeeduino Lotus (Nota: La dirección predeterminada de I2C es 0x78).

!!!Note
    - Si conectas otro módulo para usar el OLED y no funciona, o quieres usar el I2C OLED más rápido (predeterminado: 40KHZ), por favor sigue esta instrucción:

  Haz clic en "Este PC" -> Documentos -> Arduino -> libraries -> U8g2 -> src -> U8x8lib.cpp -> Deslízate a la línea 1334 -> elimina o deshabilita esta línea -> guarda el archivo.

  ```CPP
  Wire.setClock(u8x8->bus_clock);   // just delete or disable this line
  ```

 O puedes configurar el reloj del bus a 100000 y luego añadirlo en el setup().

```cpp
void setup(void) {
  u8x8.setBusClock(100000); //  it for limit the I2C bus clock
  u8x8.begin();
  u8x8.setFlipMode(1);
}
```

### Lección 8: Detectando Temperatura y Humedad del Entorno

¿Alguna vez te has preguntado sobre la temperatura y humedad de tu entorno? ¿Quieres saber el número exacto? ¿Quieres usar una falda o abrigo hoy dependiendo de la temperatura? ¡Hagamos un medidor de temperatura!

Información de Contexto:

- **¿Qué es la Señal de Protocolo (I2C)?**

**Señal de protocolo:** la señal de protocolo que usamos es I2C, así que aquí hay una breve introducción a I2C. El bus I2C solo necesita dos cables en la transmisión de información conectando entre los dispositivos: el SDA (Línea de Datos Serie) y SCL (Línea de Reloj Serie).

Estas dos líneas son líneas I/O bidireccionales, el componente principal usado para iniciar la transferencia de datos del bus, y generar el reloj para abrir el dispositivo de transmisión, cualquier dispositivo que esté siendo direccionado en este momento es considerado desde el dispositivo.

La relación entre maestro y esclavo (emisor y receptor) en el bus no es constante sino que depende de la dirección de transmisión de datos. Si el host quiere enviar datos al dispositivo esclavo, el host primero direcciona el dispositivo esclavo, luego envía activamente datos al dispositivo esclavo, y finalmente termina la transmisión de datos por el host. Si el host va a recibir datos del esclavo, el esclavo es primero direccionado por el maestro.

El host luego recibe los datos enviados desde el dispositivo, y el host termina el proceso de recepción. En este caso. El host es responsable de generar el reloj de temporización y terminar la transferencia de datos.

- **Práctica:** Haz que tu Pantalla OLED muestre la temperatura y humedad ambiental actual.

Componentes Involucrados

    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove Sensor de Temperatura y Temperatura
    4. Grove cable(Si está separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)

Conexión de Hardware

    - **Conexión de módulo:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora vía un cable USB.

**Nota**

Algunos kits actualizados han sido equipados con DHT20. Si tu Detector de Humedad y Temperatura en el kit es negro entonces el detector es DHT20 y el código de ejemplo de este está después del DHT11.

Código de Software(DHT11)

    - Abre Arduino IDE.
    - Descarga e instala la [librería](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) requerida.
    - Copia el siguiente código, haz clic en Verificar para revisar errores de sintaxis. Verifica que no hay errores, y puedes subir el código.

```Cpp
//Temperature and Humidity Sensor
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>

#define DHTPIN 3     // what pin we're connected to
#define DHTTYPE DHT11   // DHT 11 
DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(9600); 
  Serial.println("DHTxx test!");
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}

void loop(void) {

  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();
  
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

Código de Software (DHT20)

    - Abre Arduino IDE.
    - Descarga e instala la [biblioteca](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) requerida.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```cpp
//Temperature and Humidity Sensor
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>
#include "Wire.h"

#define DHTTYPE DHT20   // DHT 20

DHT dht(DHTTYPE);  
#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
 
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif
 
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();
 
    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);
 
    dht.begin();
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}
 
void loop(void) {
 
  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();
 
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

Haz clic en "Monitor" en la esquina superior derecha y verifica el resultado.

Análisis del Código

```cpp
float temp, humi;
```

Define variables para almacenar las lecturas.

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```

**Descripción:**

Funciones que se utilizan para leer los valores de temperatura y humedad del sensor.

**Sintaxis:**

**dht.readTemperature()** y **dht.readHumidity()**. Tipo de retorno: float.

Llama a estas funciones para leer la temperatura y humedad y almacenarlas en variables definidas.

**Efecto de Demostración y Resultado de Impresión Serial:**

La temperatura y humedad del entorno aparecen en la pantalla OLED.

Guía de Conexión

Usa el cable Grove para conectar el OLED a la interfaz **I2C** del Seeeduino Lotus (Nota: La dirección predeterminada de I2C es 0x78). Conecta el Sensor de Temperatura y Humedad Grove a la interfaz de señal digital **D3** del Seeeduino Lotus.

### Lección 9: Midiendo la Presión del Aire Circundante

El Sensor de Presión de Aire Grove es una placa de conexión para medir la presión atmosférica. La versión anterior (antes de octubre de 2025) usaba el sensor BMP280, mientras que la nueva versión (después de octubre de 2025) usa el sensor SPA06-003. Ambos sensores pueden medir con precisión la temperatura y la presión atmosférica. Como la presión atmosférica cambia con la altitud, también pueden medir la altitud aproximada de un lugar.

Componentes Involucrados
    1. Seeeduino Lotus
    2. Sensor de Presión de Aire Grove (BMP280 o SPA06-003)
    3. Cable Grove(si está separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)

Conexión de hardware
    - **Conexión del módulo:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora a través de un cable USB.

Código de Software

#### Para BMP280 (Versión anterior antes de octubre de 2025)

    - Abre Arduino IDE.
    - Instala la **biblioteca del Sensor Barómetro Grove**: Navega a **Sketch** -> **Include Library** -> **Manage Libraries...** y Busca la palabra clave "**Grove BMP280**" en el **Library Manager**, luego instala.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

- Copia el siguiente código, haz clic en Verify para verificar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.
- En este programa, la información del sensor Barómetro se envía desde el sensor al Seeeduino a través del bus I2C y luego el Seeeduino las imprime en el monitor serial. Abre el **monitor serial** para verificar el resultado.

```cpp
//Air pressure detection
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup() {
    Serial.begin(9600);
    if (!bmp280.init()) {
        Serial.println("Device not connected or broken!");
    }
}

void loop() {

    float pressure;

    //get and print temperatures
    Serial.print("Temp: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

    //get and print atmospheric pressure data
    Serial.print("Pressure: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //get and print altitude data
    Serial.print("Altitude: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//add a line between output of different times.

    delay(1000);
}
```

Análisis del Código

```cpp
#include <Wire.h>
```

**#include** es una instrucción que introduce un archivo de cabecera. Aquí usamos la biblioteca Wire.h, esta biblioteca está incluida en Arduino IDE.

```cpp
#include "Seeed_BMP280.h"
```

Representa el archivo de cabecera Seeed_BMP280.h que introduce la ruta actual.

```cpp
if (!bmp280.init()) {
    Serial.println("Device not connected or broken!");
}
```

**Descripción:**

Para inicializar el sensor de presión de aire usando bmp280.init(). Además, usando la condición if para verificar si se inició correctamente entonces omite el mensaje. Si tiene problemas para iniciar entonces imprime el mensaje como ! que significa NO en programación.

**Sintaxis:**

**bmp280.init()**

si el sensor de presión de aire no se inició correctamente, entonces imprime un error al monitor serie.

```cpp
Serial.print(bmp280.getTemperature());
```

**Descripción:**

Funciones que se utilizan para leer el valor de temperatura del sensor.

**Sintaxis:**

**bmp280.getTemperature()**. Tipo de retorno: float

Imprime los datos de temperatura en el monitor serie.

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**Descripción:**

Funciones que se utilizan para leer el valor de presión del aire del sensor.

**Sintaxis:**

**bmp280.getPressure()**. Tipo de retorno: float

Imprime la presión del aire actual.

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**Descripción:**

Toma el valor de presión y puede convertirlo a altitud.

**Sintaxis:**

bmp280.calcAltitude(**float**). Tipo de retorno: float

**Parámetro:**

**float**: Valor de presión.

Imprime la amplitud.

**Efecto de Demostración y Resultado de Impresión Serial:**

Las lecturas de presión del aire se muestran en el Monitor Serial.

Guía de Conexión

Usa un cable Grove para conectar el Sensor de Presión de Aire Grove a la interfaz **I2C** del Seeeduino Lotus usando un cable Grove (nota: la dirección I2C por defecto es 0x77 o 0x76).

#### Para SPA06-003 (Nueva versión después de octubre de 2025)

El SPA06-003 es un sensor de presión barométrica de alta precisión que puede medir tanto presión como temperatura. Aquí se explica cómo usarlo con Arduino:

**Instalación de Librería:**

- Descarga e instala la [librería SPL07-003](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06) para Arduino

- La librería proporciona funciones para leer presión, temperatura y calcular altitud

**Descripción:** Este programa se interfaza con el sensor de presión y temperatura SPL07-003 para monitorear continuamente las condiciones atmosféricas. Inicializa el sensor con configuraciones de muestreo específicas (4Hz para presión con 32 muestras, 4Hz para temperatura con 1 muestra) y lee valores de presión, temperatura y altitud calculada en tiempo real, mostrando los resultados a través de comunicación serial.

```cpp
#include <Wire.h>
#include "SPL07-003.h"

// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start I2C
  //Wire.setSDA(PB7); //for STM32F103C8Tx
  //Wire.setSCL(PB6); //for STM32F103C8Tx
  Wire.begin();

  // Connect to SPL07-003
  if (spl.begin(SPL07_ADDR,&Wire) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

### Lección 10: Detección de Movimiento

Este es el último sensor, el acelerómetro triaxial, y con este módulo, puedes agregar fácilmente monitoreo de movimiento a tu diseño. Así que podemos hacer muchos pequeños experimentos interesantes basados en el movimiento.

- **Práctica:** cuando se detecta movimiento, el zumbador da una alarma indicando que el objeto está en movimiento.

Componentes Involucrados

    1. Seeeduino Lotus
    2. Grove Acelerómetro de 3 ejes
    3. Cable Grove(si está separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)

Conexión de hardware

    - **Conexión del módulo:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora a través de un cable USB.

Código de Software

    - Abre Arduino IDE.
    - Descarga el [Acelerómetro Digital de 3 Ejes( ±2g a 16g)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) desde Github. Haz clic en **Sketch** > **Include library** > **Add .ZIP library**, importa la librería al IDE.
    - Copia el siguiente código, haz clic en Verify para verificar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.
    - En este programa, la información de aceleración se envía desde el sensor al Seeeduino a través del bus I2C y luego Seeeduino los imprime en el monitor serie. Abre el **monitor serie** para verificar el resultado.

```Cpp
//Gravity Acceleration
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //Hardware I2C
    #define WIRE Wire
#endif

void setup() {
    Serial.begin(9600);
    while (!Serial) {};
    LIS.begin(WIRE, 0x19); //IIC init
    delay(100);
    LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
    if (!LIS) {
        Serial.println("LIS3DHTR didn't connect.");
        while (1);
        return;
    }
    //3 axis
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());

    delay(500);
}
```

Análisis del Código

```cpp
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;   //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;        //Hardware I2C
    #define WIRE Wire
#endif
```

Inicializando el módulo usando I2C por software o I2C por hardware.

```cpp
while (!Serial) {};
```

El código se detiene aquí si no abres el monitor serie, así que abre el monitor serie.

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**Descripción:** Inicializa el acelerómetro.

**Sintaxis:** `LIS.begin(Wire, address)`.

**Descripción:** Establece la velocidad de datos de salida del acelerómetro.

**Sintaxis:** `LIS.setOutputDataRate(odr_type_t odr)`.

Inicializa el acelerómetro y establece la velocidad de salida a 50Hz.

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**Descripción:**

Funciones que se utilizan para leer el valor del eje X del sensor.

**Sintaxis:**

**LIS.getAccelerationX()**. Tipo de retorno: float.

**Descripción:**

Funciones que se utilizan para leer el valor del eje Y del sensor.

**Sintaxis:**

**LIS.getAccelerationY()**. Tipo de retorno: float.

**Descripción:**

Funciones que se utilizan para leer el valor del eje Z del sensor.

**Sintaxis:**

**LIS.getAccelerationZ()**. Tipo de retorno: float.

Imprime los datos de los 3 ejes en el monitor serie.

**Efecto de Demostración y Resultado de Impresión Serie:**

Las lecturas del acelerómetro de 3 ejes se muestran en el Monitor Serie.

Guía de Breakout

Usa un cable Grove para conectar el Acelerómetro de 3 ejes Grove a la interfaz **I2C** del Seeeduino Lotus usando un cable Grove (nota: la dirección I2C por defecto es 0x19).

## Proyectos Adicionales

### Proyecto 1: Lámpara de ritmo dinámico musical

- **Descripción del proyecto:** En este experimento, haremos que el buzzer reproduzca música agradable y que las luces led parpadeen según la frecuencia y el ritmo de la música.

Componentes Involucrados

    1. Seeeduino Lotus
    2. LED Grove
    3. Buzzer
    4. Cables Grove(si están separados)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)

Conexión de hardware

    - **Conexión de módulos:**
        - Conexión por defecto mediante orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora mediante un cable USB.

Código de Software

    - Abre Arduino IDE.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```cpp
//Music Dynamic Rhythm Lamp
#define NTD0 -1
#define NTD1 294
#define NTD2 330
#define NTD3 350
#define NTD4 393
#define NTD5 441
#define NTD6 495
#define NTD7 556

#define NTDL1 147
#define NTDL2 165
#define NTDL3 175
#define NTDL4 196
#define NTDL5 221
#define NTDL6 248
#define NTDL7 278

#define NTDH1 589
#define NTDH2 661
#define NTDH3 700
#define NTDH4 786
#define NTDH5 882
#define NTDH6 990
#define NTDH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625

int tune[]=
{
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD3,NTD2,NTD2,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1,
NTD2,NTD2,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD2,
NTD1,NTD2,NTDL5,NTD0,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD4,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1
};

float durt[]=
{
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,0.5,0.5,1,1,
1,0.5,0.5,1,1,
1,1,1,1,
1,1,1,1,
1,1,1,0.5,0.5,
1,1,1,1,
1+0.5,0.5,1+1,
};

int length;
int tonepin=5;
int ledp=4;

void setup()
{
  pinMode(tonepin,OUTPUT);
  pinMode(ledp,OUTPUT);
  length=sizeof(tune)/sizeof(tune[0]);
}

void loop()
{
  for(int x=0;x<length;x++)
  {
    tone(tonepin,tune[x]);
    digitalWrite(ledp, HIGH); 
    delay(400*durt[x]);
    digitalWrite(ledp, LOW);
    delay(100*durt[x]);
    noTone(tonepin);

  }
  delay(4000);
}
```

Análisis del Código
  
```cpp
#define NTD
```

Aquí está la definición de la frecuencia de la tecla D, que se divide en graves, medios y agudos.

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

Nota: el ritmo se divide en un tiempo, medio tiempo, 1/4 de tiempo, 1/8 de tiempo, especificamos que el tiempo de una nota de un tiempo es 1; medio tiempo es 0.5; 1/4 de tiempo es 0.25; 1/8 es 0.125.

```cpp
int tune[]=...
```

Lista las frecuencias según el espectro.

```cpp
float durt[]=...
```

Lista los beats según el espectro.

```cpp
delay(100*durt[x]);
```

Controlar las luces LED encendidas y apagadas respectivamente.

**Efecto de Demostración y Resultado de Impresión Serie:**

El zumbador emitirá una melodía mientras el módulo LED parpadeará con la misma frecuencia.

Guía de Conexión

Conecta el LED Grove a la interfaz de señal digital **D4** del Seeeduino Lotus, conecta el Zumbador a la interfaz de señal digital **D5** del Seeeduino Lotus.

### Proyecto 2: Hacer una lámpara de escritorio inteligente con inducción de sonido y luz

- **Descripción del proyecto:** como su nombre indica, este proyecto consiste en hacer una pequeña lámpara controlada por Sonido y Luz. Necesitamos usar el módulo LED como salida. El sensor de luz y el sensor de sonido se usan para señales de entrada. De esta manera, puedes lograr la función de la lámpara de escritorio inteligente: si el nivel de sonido del entorno está por encima de cierto valor preestablecido, entonces el LED se enciende, o si la intensidad de luz del entorno está por debajo de cierto valor, el módulo LED también se enciende.

Componentes Involucrados

    1. Seeeduino Lotus
    2. LED Grove
    3. Sensor de Luz
    4. Sensor de Sonido
    5. Cable Grove(Si se desconecta)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)

Conexión de Hardware

    - **Conexión del módulo:**
        - Conexión predeterminada por orificio de estampado PCB.
    - El Seeeduino se conecta luego a la computadora a través de un cable USB.

Código de Software

    - Abre Arduino IDE.
    - Copia el siguiente código, haz clic en Verificar para comprobar errores de sintaxis. Verifica que no haya errores, y puedes subir el código.

```Cpp
//light Induction Desk Lamp
int soundPin = A2; // Analog sound sensor is to be attached to analog
int lightPin = A6; //Analog light sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  int lightState = analogRead(lightPin); // Read light sensor’s value
  // if the sound sensor's value is greater than 500 or the sound sensor's is less than 200, the light will be on.
  //Otherwise, the light will be turned off
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); //You can add the "//" to remove the delay
}else{
  digitalWrite(ledPin, LOW);
}
}
```

Code Analysis

```cpp
if (soundState > 500 || lightState < 200) {
  ...
}
```

En paréntesis hay una expresión lógica. Tanto **&&** como **||** se usan comúnmente en expresiones lógicas. El uso común es **if (expresión 1 || expresión 2)** e **if (expresión 1 && expresión 2)**.

**||** representa "**o**", satisface una de ellas, toda la expresión es verdadera, y satisface la condición del juicio if.

**&&** significa "**y**", la declaración en if{} se ejecuta solo si todas las expresiones en paréntesis son verdaderas.

**Efecto de Demostración y Resultado de Impresión Serial:**

Si el sonido circundante es lo suficientemente fuerte o la intensidad de luz es baja, el módulo LED se iluminará con más intensidad.

Guía de Conexión

Conecta el LED Grove a la interfaz de señal digital **D4** del Seeeduino Lotus, Conecta el Sensor de Luz a la interfaz de señal analógica **A1** del Seeeduino Lotus. Conecta el Sensor de Sonido a la interfaz de señal analógica **A2** del Seeeduino Lotus usando un cable Grove.

## Crea Tus Propios Módulos y Placas

Después de este período de estudio, ya tienes una comprensión sistemática de Arduino y hardware de código abierto, así que ¿por qué no ir más lejos y tratar de hacer tu propio módulo o placa de desarrollo?

### EDA

Para diseñar tu propia placa, necesitarás diseñar los esquemáticos de tu propio módulo, lo cual requiere una herramienta EDA para hacerlo. Aquí se recomienda un software EDA de código abierto.

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/) es una suite de software gratuito para automatización de diseño electrónico. Facilita el diseño de esquemáticos para circuitos electrónicos y su conversión a diseños de PCB. Cuenta con un entorno integrado para captura de esquemáticos y diseño de layout de PCB. Los programas manejan Captura de Esquemáticos y Diseño de Layout de PCB con salida Gerber. La suite funciona en Windows, Linux y macOS y está licenciada bajo GNU GPL v3.

- **Upverter**

Si no quieres trabajar en esquemáticos o layout tú mismo, pero quieres convertir tu prototipo basado en módulos de Seeed en un producto integrado, te recomendamos encarecidamente que pruebes Upverter.

Por favor visita la [**Guía de Upverter del Kit para Principiantes Grove para Arduino**](https://wiki.seeedstudio.com/es/Grove-Beginner-Kit-for-Arduino-Upverter-Guide/) para más información.

### Servicios de PCB

Después de que hayas terminado con tu diseño, echa un vistazo al [servicio PCBA de Seeed Fusion](https://www.seeedstudio.com/fusion_pcb.html), que puede ayudar a traducir tus diseños en un dispositivo real que funcione.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

Seeed Studio tiene su propia [Biblioteca de Partes Abiertas (OPL)](https://www.seeedstudio.com/opl.html) que es una colección de más de 10,000 componentes comúnmente usados específicamente obtenidos para el Servicio PCBA de Seeed Fusion. Para acelerar el proceso de diseño de PCB, Seeed está construyendo las bibliotecas de componentes para KiCad y Eagle. Cuando todos los componentes se obtienen de la OPL PCBA de Seeed y se usan con el [servicio de Ensamblaje de PCB de Seeed Fusion (PCBA)](https://www.seeedstudio.com/fusion_pcb.html), todo el tiempo de producción PCBA puede reducirse de 20 días laborales a solo 7 días.

## FAQ

### 1. ¿Cómo remover los módulos electrónicos individuales para su uso?

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove1.jpg)

Mirando de cerca el Kit para Principiantes Grove Para Arduino verás que hay 3 pequeños agujeros entre cada módulo individual y la placa base. Todo lo que necesitas hacer es cortar la placa base del PCB alrededor del módulo desde los pequeños agujeros usando un par de alicates diagonales.

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove2.jpg)

---

**Nota: corta cuidadosamente a lo largo de la periferia del pequeño agujero, no cortes hacia el pequeño agujero (para prevenir cortocircuito del cableado interno y así dañar el módulo); si accidentalmente cortas hacia el pequeño agujero, por favor usa un cuchillo para limpiar el pequeño agujero para prevenir cortocircuito**

---

​![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove3.jpg)

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

1. [**Grove Beginner Kit for Arduino Wiki [PDF]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-ArduinoPDF.pdf)

2. Archivos de Diseño Esquemático

    - [**Grove Beginner Kit for Arduino Archivos de Diseño Esquemático V1.0 Versión de Vista Previa**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

    - [**Grove Beginner Kit for Arduino Archivos de Diseño Esquemático V1.1 Nueva Versión**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove_Beginner_Kit_for_Arduino_v2.3_SCH&PCB_250812.zip)

3. **Librerías de Módulos en Github:**

    - [Pantalla OLED](https://github.com/olikraus/U8g2_Arduino)
    - [Sensor de Temperatura y Humedad](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
    - [Sensor de Presión de Aire (BMP280)](https://github.com/Seeed-Studio/Grove_BMP280)
    - [Sensor de Presión de Aire (SPA06-003)](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06)
    - [Acelerómetro de 3 Ejes](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**Hoja de Datos de Sensores**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**Demo de Firmware Inicial de Arduino**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Grove Beginner Kit For Arduino Recursos en uno [20200401] (7z)**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)

7. [**Grove Beginner Kit For Arduino Curso de Programación Gráfica Codecraft web v7**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Codecraft-Graphical-Programming-Course-web-v7.pdf)

## Más Aprendizaje

- [LSTM para predicción de datos IoT en vivo](https://github.com/256ericpan/LSTM_IoT)

- [Guía para Principiantes de Programación Sin Código para Biología](https://www.biomaker.org/nocode-programming-for-biology-handbook)

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
