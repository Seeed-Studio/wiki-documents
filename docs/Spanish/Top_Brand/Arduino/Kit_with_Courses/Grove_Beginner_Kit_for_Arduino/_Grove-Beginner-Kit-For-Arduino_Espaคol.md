---
description: Grove Beginner Kit para Arduino es uno de los mejores kits introductorios a la plataforma de Arduino. Incluye una tarjeta de desarrollo complatible con Arduino y 10 sensores adicionales, todo en un solo PCB.
title:  Baeginner Kit for Arduino
keywords: 
- Grove
- Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug:  Grove-Beginner-Kit-For-Arduino_Español
last_update:
  date:  06/20/2023
  author:  Mario Andres De los Santos Hernandez
---

# Grove Beginner Kit para Arduino

Grove Beginner Kit para Arduino es uno de los mejores kits introductorios a la plataforma de Arduino. Incluye una tarjeta de desarrollo complatible con Arduino y 10 sensores adicionales, todo en un solo PCB. **Todos los módulos se encuentran conectados al Seeeduino por medio de <em>Stamp holes</em> en el PCB, por ello no es necesario utlizar cables Grove**. Por supuesto, puede retirar los módulos y utilizarlos por medio de cables Grove. Podrá crear cualquier proyecto que quiera con el Grove Beginner Kit para Arduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

## Descripción del Hardware 

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg)

**Note:** Dimensions - 17.69 * 11.64 * 1.88cm

1. **[Grove - LED](https://wiki.seeedstudio.com/Grove-Red_LED/):** Módulo LED Simple
2. **[Grove - Buzzer](https://wiki.seeedstudio.com/Grove-Buzzer/):** Zumbador Piezoeléctrico
3. **[Grove - OLED Display 0.96"](https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/):** Resolución de 128×64 pixeles, alto brillo, y alto contraste, diseñado en un compacto módulo de bajo consumo.
4. **[Grove - Button](https://wiki.seeedstudio.com/Grove-Button/):** Botón push momentáneo. 
5. **[Grove - Rotary Potentiometer](https://wiki.seeedstudio.com/Grove-Rotary_Angle_Sensor/):** Potenciómetro Rotatorio.
6. **[Grove - Light](https://wiki.seeedstudio.com/Grove-Light_Sensor/):** Detector de intensidad de luz en el entorno. 
7. **[Grove - Sound](https://wiki.seeedstudio.com/Grove-Sound_Sensor/):**  Detector de intensidad de sonido del entorno. 
8. **[Grove - Temperature & Humidity Sensor](https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/):** Sensa la temperatura y humedad ambiente del entorno. 
9. **[Grove - Air Pressure Sensor](https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BMP280/):** Dedector de presión atmosférica del entorno. 
10. **[Grove - 3-Axis Accelerator](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-1.5g/):** Acelerómetro. Detector de aceleración del dispositivo. 
11. **[Seeeduino Lotus](https://wiki.seeedstudio.com/Seeeduino_Lotus/):** Placa con puertos Grove compatible con Arduino.


**Nota:**
        Por defecto, los módulos están conectados al Seeeduino por medio del PCB usando <em> Stamp Holes. </em> Esto significa que no tendrás que utilizar cables Grove si no desprendes el módulo. Los pines preestablecidos son los siguientes: 

|Módulos|Interfaz|Pines/Dirección|
|---|---|---|
|LED|Digital|D4|
|Zumbador|Digital|D5|
|OLED Display 0.96"|I2C|I2C, 0x78(default)|
|Botón|Digital|D6|
|Potenciometro Rotatorio|Analog|A0|
|Luz|Analógico|A6|
|Sonido|Analógico|A2|
|Sensor de Humedad y Temperatura|Digital|D3|
|Sensor de presión Atmosférica|I2C|I2C, 0x77(default) / 0x76(opcional)|
|Acelerómetro de 3 Ejes|I2C|I2C, 0x19(default)|
 

### Instrucciones de Separación

**Atención:**
    Por favor, sea cuidadoso de no lastimarse utilizando un cuchillo

Si prefiere utilizar los módulos de manera indendiente ¡Pude simplemente seguir estos procedimeintos para desprender los módulos del PCB!

**Paso 1**

Utilice un cuchillo o algún objeto con filo para cortar en la unión de los <em>stamp holes</em> que conectan todo el PCB

**Paso 2**

Mueva los módulos de arriba a abajo, ¡Se desprenderá facilmente!

## Lista de Partes

|Módulos|Cantidad|
|---|---|
|**Sensores**||
|Sensor de Temperatura y Humedad|x1|
|Acelerómetro de 3 Ejes|x1|
|Presión Atmosferica|x1|
|Sensor de Luzx1|
|Sensor de Sonido|x1|
|**Módulos de entrada**||
|PotenciÓmetro Rotatorio|x1|
|Botón|x1|
|**Módulos de salida**||
|LED|x1|
|Zumbador|x1|
|**Módulos de display**||
|OLED Display|x1|
|**Cables Grove**|x6|
|**Cable Micro USB**|x1|


## Objetivos de Aprendizaje 

- Fundamentos de Hardware <em>Open Source</em>.
- Fundamentos de programación en Arduino.
- Principios de comunicaciones y métodos para sensores. 
- Implementación práctica en proyectos con Hardware libre.

### Demostración de Unboxing Plug and Play

El Kit Grove Beginner tiene un demo <em>plug and play</em> listo después del desempacado, donde una vez que alimente el dispositivo ¡Tiene la oportunidad de experimentar con todos los sensores de inmediato! ¡Utilice el botón y potenciómetro rotatorio para probar la demostración de cada sensor!

![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **Deslizar** -> Rotanto el Potenciómetro.
- **Seleccionar** -> Has una pequeña presión en el botón.
- **Salir de la demo actual** -> Manten presionado el botón por un momento. 

Los módulos de Zumbador y LED son usados para indicaciones determindas. 
## Cómo iniciar con Arduino

### Instalar el Arduino IDE

- **Arduino IDE** Es un ambiente de desarrollo integrado para Arduino, el cual es usado para la programación de microcontroladores <em>single-chip</em>, descarga, prueba y así como otras funciones. 
- Descarge e Instale [Arduino IDE](https://www.arduino.cc/en/Main/Software) aquí para el sistema operativo que desee.

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)



### Instalación del controlador USB

- Arduino se conecta al PC por medio de un cable USB. El controlador USB depende del chip USB que se este usando en su Arduino. *Nota: Los chips USB están normalmente impresos en la parte trasera de la tarjeta de desarrollo* 

  - Descarge el [controlador USB CP2102 ](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). **Note:** Deberá descargar la versión correspondiente a su sistema operativo.
  - Una vez que la instalación del controlador este completa, conecte el Arduino en el puerto USB usando el cable USB. 
      - **Para usuarios de Windows:** Puede verlo en `Mi Equipo` -> `Propiedades` -> `Hardware` -> `Administrador de Dispositivos`. Un `COM` aparecerá.
      - **Para usuarios de MacOs** Puede navegar a`` en la equina superior izquierda, y seleccionar `Acerca de este Mac` -> `Informe del Sistema...` -> `USB`. El CP2102 USB Controlador deberá aparecer.
  - Si el controlar no se encuentra instalado, o no se ha intalado correctamente (El módelo no coincide), este aparecerá como "Dispositivo desconocido" en el administrador de dispositivos. En este punto, el controlador deberá ser reinstalado.



### Inico con el IDE de Arduino

1.Abra el **Arduino IDE** en su PC.
2.De click en `Herramientas` -> `Tarjeta` para seleccionar el modelo correcto de tarjeta de desarrollo. Seleccione **Arduino/Genuino Uno** como tarjeta.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/board.png)

3.De click en `Herramientas` -> `Puerto` para seleccionar el puerto correcto (El puerto serial mostado anteriormente en el Administrador de Dispositivos). En este caso, `COM6` ha sido seleccionado. **Para usuarios de MacOs**, deberá ser `/dev/cu.SLAB_USBtoUART`.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.png)


4.Cree un nuevo archivo de Arduino y nombrelo `Hello.ino`, seguido copie el siguiente código en el:

```Cpp
void setup() {
  Serial.begin(9600); // Iniciación del monitor serial con una velocidad de 9600 baudios
}
void loop() {
  Serial.println("Hola, Mundo "); // Imprición de una cadena en el monitor 
  delay(1000); //Espera de 1 segundo
}
```

5.En la esquina superior izquierda del Arduino IDE, encontrará dos botones, **Verificar y Subir**. Primero, presione el botón de Verificar (✓) para compilar. Después de que la complilación sea existosa, presione el botón de Subir (→).

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6.Navegue a `Herramientas` -> `Monitor Serial`, o de click en **Monitor Serial** en la esquina superior derecha (Simbolo de lupa), podrá ver los resultados del programa ejecutandose: 

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**Nota:** Si ha instalado la vesión portable del Arduino IDE desde nuestra unidad USB, podrá encontrar todas las demostraciones en **Archivos** -> **Sketch Book**, así como todas las librerías de los módulos, ¡Estas se encuentran instaladas en el IDE de Arduino!

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png)

**Nota:**
        Todos los módulos se encuentran previamente cabledos en una sola tarjeta electrónica, por lo tanto no es necesario utilizar cables o soldadura. En cualquier caso, si desea separarlos y utilizarlos por medio de cables Grove, por favor revise la guía de separación cuidadosamente.

## Guía de Lecciones 

### Lección 1: Parpadeo con el LED

Ya hemos completado el programa de salida "Hola, mundo". Ahora, aprendamos como iluminar el módulo LED. Sabemos los tres componentes básicos de un sistema de control: Entrada, Control y Salida. Sin embargo, la iluminación del LED utlizada solamente el concepto de Salida. Seeeduino es la unidad de control, el módulo LDES es una unidad de salida, y la salida generada es una señal digital.

<font size="5;font" color="#314B9F">Información de Contexto</font>

- **¿Qué es una señal digital?**

**Señal Digital:** Una señal Digital refiere a que el valor de la amplitud de esta es discreta, la amplitud está limitada a un número finito de valores. En nuestro controlador, las señales digitales cuentan con dos estados: <em>LOW</em> (0V) para 0; <em>HIGH(5V)</em> para 1. Entonces, enviando una señal <em>HIGH</em> o positiva al LED podremos encenderlo.

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)



<font size="5;font" color="#314B9F">Components Involved</font>


    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Cable(Si ha sido desprendido)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)


<font size="5;font" color="#314B9F">Conexión del Hardware</font>

    - **Conexión del Módulo**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB. 
    - Conecte el Seeeduino por medio del cable USB a la computadora. 

<font size="5;font" color="#314B9F">Código</font>


    - Abra el Arduino IDE.
    - Copie el siguiente código, de click en Verificar para revisar errores en la sintaxis. Verifique que no hay ningun error, y carge el código. 

```Cpp
//LED Blink
//El LED se encenderá un segundo y se apagará al siguiente
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



<font size="5;font" color="#314B9F">Análisis del Código</font>


```cpp
setup(){
}
```

La función `setup()` es llamada cuando el sketch comienza. Utilícelo para inicializar variables, configuraciones de los pines, utilizar librerías, etc. La función `setup()` será ejecutada una sola vez cada vez que la tarjeta Arduino sea reiniciada o encendida. 

```cpp
loop(){
}
```
Después de crear  la función `setup()`, la cual inicializa y configura los valores inciales. La función `loop()` es precisamente lo que el nombre suguire, y crea un bucle consecutivo, permitiendo a tu programa cambiar y responder. Utilícelo para controlar la actividad de la tarjeta Arduino. 

```cpp
int ledPin = 4;
```

**Descipción:**

Convierte un valor al tipo de dato int.

**Sintaxis:**

int(**x**) o (int)**x** (Conversión típica en C)

**Parámetros:**

**x**: un valor. Permite tipos de datos: cualquier valor.

Asigna a una variable `int` el 4 y nombrela ledPin.

```cpp
pinMode(ledPin, OUTPUT);
```

**Descripción:**

Configura el pin especificado para comportarse como input o output (Entrada o Salida). Vea la página de Pines Digitales para más detalles de la funcionalidad de los pines. Desde la versión 1.0.1 de Arduino, es posible habilitar las resistencias pull-up internas utilizando el modo `INPUT_PULLUP`. Adicionalmente, el modo `INPUT` explicitamente desactiva los pull-ups internos. 

**Sintaxis**

pinMode(**pin, mode**)

**Parámetros:**

**pin**: El número de pin de Arduino a configurar.

**modo**: `INPUT`, `OUTPUT`, or `INPUT_PULLUP`.

Configure ledPin como OUTPUT. 

```cpp
digitalWrite(ledPin, HIGH);
```

**Descripción:**

Escribe un valor `HIGH` o `LOW` al pin digital. .

Si el pin ha sido consigurado como salida, OUTPUT, usando pinMode(), el valor del voltaje corresponderá al valor de: 5V (o 3.3V en tarjetas a 3.3V) para `HIGH`, 0V(Tierra) para `LOW`.

Si el pin se encuentra configurado como INPUT, digitalWrite() habilitará (HIGH) o dehabilitará (LOW) las resistencias pull-up internas en el pin de entrada. Es recomendable configurar el pinMode() a `INPUT_PULLUP` para habilitar las resistencias. Vea el tutorial de Pines Digitales para más información.

Si no configura el pinMode() como salida, y conecta un LED en el pin, cuando la funcion digitalWrite(HIGH) sea llamada, el LED podría aparecer If you do not set the pinMode() to OUTPUT, and connect an LED to a pin, when calling digitalWrite(HIGH), el LED podría tener una tenue iluminación. Sin una consiguración explicita pinMode(), digitalWrite() habilitará las resistencias internas, las cuales actuarán como una resistencia limitadora de corriente.

**Sintaxis:**

digitalWrite(**pin, value**)

**Parámetros:**

**pin**:  El número del pin Arduino a configurar.

**Valor**: `HIGH` o `LOW`.

Cuando configuramos el ledPin como salida, HIGH significaba la instrucción de mandar un voltaje positivo al pin, y el LED encendera.

```cpp
digitalWrite(ledPin, LOW);
```

De igual manera, cuando el led configurado recibe una señal baja o 0V, este se apaga.

```cpp
delay(1000);
```

**Descripción:**

Pausa el programa por la cantidad de tiempo (en milisegundos) especificadas como parametro. (1000 milisegundos corresponden a un segundo). 

**Sintaxis:**

delay(**ms**)

**Parámetros:** 

**ms**: El número de milisegundo a pausar. Permite el tipo de dato: unsigned long.

El programa espera por 1000ms(1s).

**Demostración del Efecto y Resutado Serial Print:**

El módulo LED estará un segundo encendido y uno apagado. 

**Ajuste del Brillo del LED**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>



En el módulo Grove LED, encontrarás una On the Grove LED module, there is a **resistencia variable que puede ser ajustada usando un desatornillador.** ¡Giralo para hacer el LED un más brillante! 

<font size="5;font" color="#314B9F">Guía de Separación</font>


Si el módulo ha sido separado de la tarjeta. Utilíce cables Grove para conectarlo a puerto digital **D4** del Seeeduino Lotus.  

### Lección 2: Presionando un botón para encender el LED

La primero que necesitas saber es que un botón es una entrada digital, lo cual quiere decir que solo tendremos dos estados: 0 o 1, con ello podremos controlar la salida. 

- **Práctica:** Utilíce el boton para encender y apagar el módulo lED. 

<font size="5;font" color="#314B9F">Componentes Involucrados</font>


    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Button
    4. Grove Cables(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)

<font size="5;font" color="#314B9F">Conexión del Hardware </font>


    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- **Analísis del Hardware**:
    - Input: Botón
    - Control: Seeeduino
    - Output: Módulo LED

Ambos, el sensor y el LED, deberán usar señales digitales, por lo tanto deberán estar conectados a puertos digitales.

- **Código**:
    - Abra el IDE de Arduino.
    - Copie el siguiente código, de click en Verificar para comprobar que no haya algún error en la sintaxis. Verifique que no hay ningún error, y suba el código. 

```Cpp
//Botón para encender y apagar un LED
//Las constantes no cambiaran. Los usaremos aqui para determinar los pines a utilizar:
const int buttonPin = 6;     // El número del pin asignado al botón
const int ledPin =  4;      //El nùmero del pin asignado al LED

// Variables que cambiaran:
int buttonState = 0;         // Variable para almacenar el estado de botón

void setup() {
  // Inicialización del pin del LED como Output:
  pinMode(ledPin, OUTPUT);
  // Inicialización del pin del Botón como entrada:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // Leemos el estado del botón, almacenandolo en nuestra variable
  buttonState = digitalRead(buttonPin);

  // Revisamos si el botón se encuentra presionado. Si es así el estado del botón es HIGH:
  if (buttonState == HIGH) {
    // Encendemos el LED:
    digitalWrite(ledPin, HIGH);
  } else {
    // Apagamos el LED:
    digitalWrite(ledPin, LOW);
  }
}
```



<font size="5;font" color="#314B9F">Analísis del Código</font>


```cpp
pinMode(ledPin, OUTPUT);
```

Definimos el LED cómo salida. 

```cpp
pinMode(buttonPin, INPUT);
```
  
Definimos el botón como una unidad de entrada.



```cpp
buttonState = digitalRead(buttonPin);
```

**Descripción:**

Lee el valor del pin especificado, sea `HIGH` o `LOW`.

**Sintaxis:**

digitalRead(**pin**)

**Parámetros:**

**pin**: El número del `pin` de Arduino que desee leer.

La función es utilizada para leer los estados de los pines digitales, sea HIGH o LOW. Cuando el botón sea presionado, el estado será HIGH, de otra manera será LOW.

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**Descripción:**

Las condicionales if..else permiten un mejor control sobre el flujo del código que la declaración if básica, permitiendo multiples revisiones de manera agrupada. La clausula else (Si al menos un IF existe) será ejecutada siempre que las condiciones en las declaraciones if resulten falsas. El else puede proceder como otra prueba if, entonces multiples pruebas exclusivas pueden ser probadas al mismo tiempo. 

Cada prueba va a proceder a la siguiente hasta que se encuentre una que de un resultado positivo. Cuando un resultado positivo es encontrado, el bloque de código asociado a la prueba será ejecutado, y el programa pasará el resto de los bloques if/else construidos. Si ninguna prueba es verdadera, el bloque predeterminado else será ejecutado, si existe alguno, determinando del comportamiento por defecto. 

Note que el bloque else if puede ser usado con o sin un bloque else para terminar el ciclo, o viceversa. Un número ilimitado de bloques else if pueden ser implementados. 

**Sintaxis:**

```cpp
if (condition1) {
  // Haz cosa A 
}
else if (condition2) {
  // Haz cosa B
}
else {
  // Haz cosa C
}
```

El uso de la declaración es: si la expresión lógica en el paréntesis es verdadera, ejecuta la declaración dentro de las llaves después del IF, si no, ejecuta la declaración dentro de las llaves de else. Si el estado del botón es HIGH, el pin de salida del LED recibirá un voltaje positivo y encenderá el LED, en caso contrario se apagará. 


**Efecto de prueba y resultado Serial Print:**

Presionado el botón logremos encender el módulo LED.

<font size="5;font" color="#314B9F">Guía de Separación</font>


Use el cable Grove para conectar el Grove LED al puerto digital **D4** del Seeeduino Lotus. Conecte el botón Grove al puerto digital **D6**.

### Lección 3: Controlando la Frecuencia de Parpadeo

En la sección anterior, hemos estudiado que un botón solamente tiene dos estados, ON/OFF que corresponden a 0V y 5V, pero en la práctica, necesitamos más estados, no solamente 0V y 5v. Por lo tanto, ¡Necesitamos usar señales analógicas! Un potenciómetro rotatorio es un clásico ejemplo de utilización de señales analógicas. 

<font size="5;font" color="#314B9F">Información de Contexto:</font>

- **¿Qué es una señal analógica?**

**Señales Analógicas:** Las señales varian continuamente en tiempo, valor, amplitud, frecuencia y fase en cualquier momento, tal como una grabación de señales de audio o señal de imagen, etc. La segñal analógica ondas senoidales o triangulares. Los pines analógicos de su microcontrolador puede tener entre 0 y 5v un rango entre 0 y 1023 respectivamente, donde 1023 se encuentra referenciado a 5V, así como 512 a 2.5V. 

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)



- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Potenciómetro rotatorio
    4. Grove Cables(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)



- <font size="5;font" color="#314B9F">Conexión del Hardware</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- **Hardware análisis:**
    - Input: Potenciómetro rotatorio
    - Control: Seeeduino Lotus
    - Output: Módulo LED

La entrada es una señal analógica, por lo tanto se encuentra conectada a un puerto de interfaz analógica, mientras que el módulo LED se encuentra conectado a un puerto de interfaz digital.

- <font size="5;font" color="#314B9F">Código</font>
    - Abra el IDE de Arduino.
    - Copie el siguiente código, de click en Verificar para comprobar que no haya algún error en la sintaxis. Verifique que no hay ningún error, y suba el código. 

```Cpp
//Control rotatorio para LED
int rotaryPin = A0;    // Selección de entrada para el potenciómetro
int ledPin = 4;      // Selección de salida para el LED
int rotaryValue = 0;  // Variable que almacena la información entrante por la rotación. 
void setup() {
  // Declare el ledPin como salida. 
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // Lee el valor del sensor, en este caso el potenciómetro. 
  rotaryValue = analogRead(rotaryPin);
  // Enciende el LED
  digitalWrite(ledPin, HIGH);
  // Mantiene el programa dependiendo el <rotaryvalue> valor del sensor en millisegundos.
  delay(rotaryValue);
  // Apaga el LED:
  digitalWrite(ledPin, LOW);
  // Mantiene el programa dependiendo el <rotaryValue> valor del sensor en millisegundos.
  delay(rotaryValue);
}
```



- <font size="5;font" color="#314B9F">Análisis del Código</font>

```cpp
int rotaryPin = A0;    //Selección del pin para el potenciómetro
int ledPin = 4;      // Selección del pin para el LED
```
**Descripción:**

Te habrás dado cuenta que definimos el rotatePin y ledPin de diferentes maneras. Esto es porqué el Potenciómetro rotatorio genera una señal analógica, y el LED es controlado por medio de una digital. 

Para **definir un pin Analógico**, utilice A + el número del pin (Por ejemplo, `A0`).

Para **definir un pin Digital**, utilice solamente el número de pin (Por ejemplo, `4`).

```cpp
rotaryValue = analogRead(rotaryPin);
```

**Descripción:**

Leer el valor específico de un pin Analógico. Las tarjetas de arduino cuentan con un convertidor multicanal de 10 bits analógico a digital. Esto significa que puede captar voltajes entre 0 y el voltaje de operación (Ya sea 5 o 3.3V), y registrarlos en valores entre 0 y 1023 respectivamente. En el Arduino UNO, por ejemplo, esto representa una resolución de lectura de: 5 volts / 1024 unidades, o 0.0049 volts (4.9mV) por unidad. 

**Sintaxis:**

analogRead(**pin**)

**Parámetros:**

**pin**: El nombre del puerto analógico a leer (De A0 a A5 en la mayoria de las tarjetas). 

**Returns:** La lectura analógica del pin. Sin embargo, se encuentra limitado a la resolución del convertidor analógico-digital (0-1023 para 10 bits o 0-4095 para 12 bits) Tipo de Dato: int. 

Esta función es usada para leer el valor del pin Analógico (posición del potenciómetro rotatorio), el rango de valores es de: 0 ~ 1023.

```cpp
delay(rotaryValue);
```

Función Delay. La duración en millisegundos del delay es el valor entre paréntesis. Esto porque el valor es el valor de la señal analógica recibida en cada movimiento del pin leido, entonces el tiempo del delay puede ser controlado por dicho movimiento.

**Demostración del Efecto y Resutado Serial Print:**

EL movimiento del potenciómetro podrá cambiar la frecuencia de parpadeo del LED.

- <font size="5;font" color="#314B9F">Guía de Separación</font>

Utilice un cable Grove para conectar el módulo LED a la interfaz digital **D4** del Seeeduino Lotus, y un cable Grove para conectar el Potenciómetro a la interfaz analógica **A0**.

### Lección 4: Haciendo el Zumbador sonar BEEP

Al igual que el módulo LED, el Zumbador es un módulo de salida, pero en lugar de encender una luz produce un sonido particular. Esto puede ser usado en multiples situaciónes para indicar propósitos. Estudiamos el uso del potenciómetro en la ultima sección entonces, ¿Cómo podemos usar el potenciómetro para controlar el volumen de nuestro Zumbador? La respuesta ... ¡Esto requiere el uso de control PWM! 

<font size="5;font" color="#314B9F">Información de Contexto:</font>

- **¿Qué es el PWM?**

**Modulación del ancho de Pulso, ó PWM (Por sus siglas en inglés)**, es una técnica para obtener resultados analógicos con puertos digitales. Se utiliza control digital para crear ondas cuadradas, una señal entre encendio y apagado. Este patrón on-off, puede simular voltajes entre 5V y 0V cambiando la porción de tiempo que la señal de encendido es lanzada en relación al tiempo de la señal de apagado. La duración "en-tiempo" (ON TIME) es llamada ancho de pulso. Para obtener variaciones en lo valores analógicos, se módula o cambia el ancho de pulso a criterio del usuario. Si este patron se repite lo suficientemente rápido con el LED, por ejemplo, tendríamos cómo resultado un control del brillo del mismo, ya que la señal estará proporcionando un voltaje estable entre 0 y 5 volts. *Reference: [Arduino](https://www.arduino.cc/en/tutorial/PWM)*

Como lo indica el siguiente diagrama, el uso de `analogWrite()` para generar pulsos pwm, entre más alto sea el ciclo de trabajo, con más fuerza sonará el zumbador.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BuzzerPWM.jpg" /></div>


El Seeeduino cuenta con 6 pines digitales que se encuentran marcados con el símbolo "~", esto significa que dichos puertos puden general señales PWM: 3,5,6,9,10,11. Son conocidos como puertos PWM.



- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove Zumbador (Buzzer)
    3. Grove Cable(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)


- <font size="5;font" color="#314B9F">Conexión del Hardware</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- <font size="5;font" color="#314B9F">Código</font>
    - Abra el IDE de Arduino.
    - Copie el siguiente código, de click en Verificar para comprobar que no haya algún error en la sintaxis. Verifique que no hay ningún error, y suba el código. 

```Cpp
int BuzzerPin = 5;
int Potentiometer = A0;

void setup() {
  pinMode(BuzzerPin, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); //Mapping potentiometer value to PWM signal value
  analogWrite(BuzzerPin, Value);
}
```

- <font size="5;font" color="#314B9F">Análisis del Código</font>

```cpp
Value = map(potentioValue, 0, 1023, 0, 255);
```

**Descripción**

Reasigna un número de un rango a otro. Este es un valor **fromLow** será asignado a **toLow**, un valor  **fromHigh** a **toHigh**, valores intermedios de igual manera a los valores intermedios de la nueva asignación. 

No se restringen a los valores dentro del rango, pues muchas veces los valores fuera de este son intensionados y útiles. La función `constrain()` puede ser usada antes y después de esta función, si se han limitado los rangos deseados.

Note que los "límites inferiores" o cualquier rango puede ser más largo o más corto que el "límite superior" . La función `map()` pude ser utilizada para revertir un rango de números, por ejemplo.

**y = map(x, 1, 50, 50, 1);**

La función puede manejar número negativos de igual manera. Para ello este ejemplo.

**y = map(x, 1, 50, 50, -100);**

Es válida y funciona bien.

La función map() trabaja con enteros, por lo tando no generará fraciones, cuando las matemáticas puedan indicar que deba usarlas. Los restos fraccionales serán truncados y redondeados sin ningún problema. 

**Sintaxis:**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**Parámetross:**

**value**: El dato a mapear. 

**fromLow**: El límite inferior del rango de valores actuales. 

**fromHigh**: El límite superior del rango de valores actuales.

**toLow**: El límite inferior objetivo del nuevo rango de valores. 

**toHigh**: El límite superior objetivo del nuevo rango de valores.

Mapeando la señal analógica de un Potenciómtero (0 a 1023) al volumen de un zumbador (0 a 255).

```cpp
analogWrite(BuzzerPin, Value);
```

**Descripción:**

Escribir un valor analógico (PWM) en un puerto. Puede ser usado para variar la iluminación de un LED o variar la velocidad de un motor. Después de llamar a analogWrite), el puerto generará una onda rectangular en el ciclo establecido hasta que la función sea interrumpida, módificada o suplantada por digitalRead() o digitalWrite(). 

**Sintaxis:**

analogWrite(**pin, value**)

**Parámetros:**

**pin**: El `pin` de Arduino a escribir. Tipo de dato permitido: entero (int). 

**value**: Ciclo de trabajo: entre `0` (simpre apagado) y `255` (siempre encendido). Tipo de dato permitido: entero (int). 

Escribir un valor analógico (PWM) al Zumbador.

**Demostración del Efecto y Resutado Serial Print:**

Ajuste el potenciómetro para ajustar el volumen del Beep del Zumbador. 

- <font size="5;font" color="#314B9F">Guía de Separación</font>

 Utilice un cable Grove para conectar el Zumbador al puerto digital **D5** del Seeeduino Lotus.

-----

- <font size="5;font" color="#314B9F">Uso del PWM</font>

Ya que hemos aprendido el uso del PWM, además de utilizar el PWM para controlar el volumen del sonido del Zumbador, podemos utilizar PWM para controlar la velocidad de un motor, o el brillo de un LED, entre otras cosas. 

En cualquier caso, el módulo LED del Grove Beginner Kit no pude ser usado directamente para controlarlo con PWM, ya que dicho módulo se encuentra conectado al puerto D4, y como hemos mecionado anteriormente, solo los pines PWM son 3, 5, 6, 9, 10, 11. Si quiere controlar el LED con PWM, es necesario desprender el módulo y conectarlo direcamnete por medio de un cable Grove a un puerto PWM funcional.

Considerándo todo, cuando quiera usar la función PWM, asegúrese de seleccionar un pin con el símbolo "~" frente a su nombre. 

### Lección 5:  Hacer un LED inductivo de LUZ. 

El sensor de luz contiene una resistencia fotosensible para medir la intensidad de la luz. La resistencia del resistor fotosensible decrese con el crecimiento de la intensidad de la luz. El LED encenderá cuando el entorno esté oscuro, y permanecerá apagado cuando el ambiente esté iluminado.

En las siguientes secciones, estaremos utilizando el Monitor Serial para observar los resultados de nuestros sensores, ¡Aquí viene una breve introducción! 

<font size="5;font" color="#314B9F">Información de Contexto</font>

- **¿Qué es un Monitor Serial?**

El Monitor Serial es útil para observar resultados en Arduino, puede ser muy útil en terminos de mostrar resultados de sensores, o en terminos de <em>debugging</em> en general. ¡También puedes enviar información de vuelta a tu controlador usando el monitor para realizar ciertas tareas!

 Nota: Confirma que la información transferida por Serial tenga relación con tu código. 

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

Puedes abrir el Monitor Serial en **Herramientas* -> **Monitor Serial**.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)

  
- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Light Sensor
    4. Grove Cable(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)


- <font size="5;font" color="#314B9F"> Conexión del Hardware</font>

    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- **Análisis del Hardware:**

    - Input: Sensor de Luz
    - Control: Seeeduino Lotus
    - Output: Módulo LED

- <font size="5;font" color="#314B9F">Código</font>

    - Abra el IDE de Arduino.
    - Copie el siguiente código, de click en Verificar para comprobar que no haya algún error en la sintaxis. Verifique que no hay ningún error, y suba el código. 

```Cpp
// Switch de Luz
int sensorpin = A6; // Pin analógico donde el sensor se encuentra conectado.
int ledPin = 4;    // Puerto del LED
int sensorValue = 0;        // Valor leido desde el puerto.
int outputValue = 0;        // Valor de salida para el PWM (Salida Analógica)

void setup() {
  pinMode(ledPin,OUTPUT);
  pinMode(sensorpin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // Lectura analógica
  sensorValue = analogRead(sensorpin);

  Serial.println(sensorValue);

  if (sensorValue < 200) {
    digitalWrite(ledPin, LOW);
  }
  else {
    digitalWrite(ledPin, HIGH);
  }

  delay(200);
}
```

También puedes ver la intensidad de la luz leyendo los valores desde el **Monitor Serial**, navega a **Herramientas** -> **Monitor Serial**.

- <font size="5;font" color="#314B9F">Análisis del Código</font>

```cpp
Serial.begin(9600);
```

**Descripción:**

Configura la velocidad de transmisión de datos en bits por segundos (baud) para la transmisión de datos seriales. Para comunicarte con el Monitor Serial, asegúrate de usar alguna de las tasas de lectura enlistadas en el menú en el botón de la esquina derecha en tu pantalla. En cualquier caso, puedes elegir otras velocidades, por ejemplo, para comunicarte con algún componente por medio de los pines 0 y 1, requieres una tasa de lectura en particular.

Un segundo argumento opcional para configurar la información, paridad y alto de bits. Por defecto, este argumento es 8 bits de información y un bit de alto.

El código ejecudandose en la computadora se comunica con la tarjeta de desarrollo, a una velocidad de transmisión (baud rate) de 9600. 
**Sintaxis**

Serial.begin(**Velocidad**)

**Parámetros:**

**Velocidad**: Velocidad de comunicación Serial. i.e `9600`, `115200`, etcétera. 

Configura la velocidad de transmisión en 9600.

```cpp
Serial.println(sensorValue);
```

**Descripción:**

Imprime la información por medio del puerto seríal en formato ASCII legible para humanos, seguido de un carácter de retorno (ASCII 13, or '\r') y un carácter en una nueva linea (ASCII 10, or '\n'). Este comando toma la misma forma de Serial.print().

**Sintaxis:**

Serial.println(**valor**) or Serial.println(**valor**, **formato**)

**Parámetros:** 

**valor**: El valor a imprimir. Tipos de datos permitidos: Cualquier tipo.

**formato**: Especifica la base númerica (para tipos de datos enteros) o el número de decimales (en tipos de punto flotante).

El puerto serial imprime el valor del sensor de Luz. Abre el **Monitor Serial** en la interfaz del IDE, y podrás ver los valores resultantes de la salida del sensor. 

**Demostración del Efecto y Resutado Serial Print:**

El módulo LED se encenderá cuando se encuentre oscuro, y se mantendrá apagado mientras haya luz.

- <font size="5;font" color="#314B9F">Guía de Separación</font>

Utilice los cables Grove para conectar el LED Grove al puerto digital **D4** del Seeeduino Lotus, así mismo conecte el Sensor de Luz Grove en el puerto analógico **A6** del controlador. 

### Lección 6: LED sensible al sonido. 

El sensor de sonido puede detectar la intensidad del sonido en el ambiente, y su salida es simulada. Seguramente has presenciado controles de luz por sonido, pero ahora podremos hacer uno nosotros mismos, y con las bases, este experimento será realmente fácil para ti. Usaremos el Graficador Serial para poder visualizar los resultados.

<font size="5;font" color="#314B9F">Información de Contexto:</font>

- **¿Qué es el Graficador Serial?**

El Graficator Serial o Serial Plotter es muy similar con el  is similar to Serial Monitor, permitiendote gráficar de manera nativa la información obtenida de tu Arduino en tiempo real. Esto es muy útil cuando la información necesita ser visualizada..

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

Puedes abrir el Graficador Serial dando click en **Herramientas** -> **Graficador Serial** ó **Serial Plotter**.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg)

- **Práctica:** El LED se enciende cuando algún sonido se realiza. Cuando no exista algún sonido y se encuentra muy silecioso, el LED se apaga.

- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Sound Sensor
    4. Grove cable(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)



- <font size="5;font" color="#314B9F">Conexión del Hardwaree</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 


- <font size="5;font" color="#314B9F">Código</font>
    - Abra el IDE de Arduino.
    - Copie el siguiente código, de click en Verificar para comprobar que no haya algún error en la sintaxis. Verifique que no hay ningún error, y suba el código. 

```Cpp
//Control de luz por sonido
int soundPin = A2; // El sensor de sonido es analógico, por ello se conecta en este pin.
int ledPin = 4; // LED Digital se conectará en un puerto Digital.
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(soundPin, INPUT);
  Serial.begin(9600);
}
void loop(){
  int soundState = analogRead(soundPin); //Lectura de los valores del sensor de sonido.
  Serial.println(soundState);
  //Si el sonido detectado en el sensor, es mayor a las 400 unidades, la luz será encendida.
  //De otra manera, la luz se mantendrá apagada.
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```
También podrás ver las lecturas de intensidad de luz en el  **Graficador Serial ó Serial Plotter**, navega a **Herramientas** -> **Graficador Serial ó Serial Plotter**.

**Nota: Puedes además ajustar el valor acorde a la intensidad de luz de tu entorno.**

- <font size="5;font" color="#314B9F">Análisis del Código</font>

```cpp
Serial.begin(9600);
```

El software ejecutandose en la computadora se comunica con la tarjeta de desarrollo, y la velocidad de transmisión es de 9600.

```cpp
Serial.print(" ");
```

La función es usada como salida de información desde el puerto serial, la salida esThis function is used to output data from the serial port, la salida será contenida dentro de las comillas.

```cpp
Serial.println( );
```

La declaración es similar a la que se encuentra arriba, excepto que **serial.println** tiene una nueva linea de retorno.

```cpp
Serial.println(soundState);
```

El puerto serial imprime el valor del sensor de sonido. Entonces, abre el **Monitor Serial** en el IDE de Arduino, y podrás visualizar la información de salida del sensor.

**Demostración del Efecto y Resutado Serial Print:**

El módulo de LED se encenderá si el  sonido ambiental es lo suficientemente alto.
- <font size="5;font" color="#314B9F">Guía de Separación</font>

Usa los cables Grove para conectar el LED Grove a la interfaz digital **D4** del Seeeduino Lotus, acto seguido conecta el sensor Grove se sonido en la interfaz analógica **A2**. 


### Lección 7: Mostando Datos en un OLED

El Display OLED puede ser usado en muchas situaciones, ¡Puedes usarlo para visualizar la información de tus sensores!

<font size="5;font" color="#314B9F">Información de Contexto</font>

- **¿Qué son las librerías de Arduino?**

El ambiente de Arduino puede ser extendido atraves del uso de librerías, al igual que la mayoria de las plataformas de programación. Las librerías proveeen funcionalidades extras para usar en los sketch, trabajando con hardware espeficico o manipulando datos. Para usar una librería en un sketch, seleccionala desde **Sketch**->**Incluir Librería**.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg)

For more information, please also visit [How to install Arduino Libraries](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).



- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove cable(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)

- <font size="5;font" color="#314B9F">Conexión del Hardware</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- <font size="5;font" color="#314B9F">Código</font>
    - Abra el IDE de Arduino .
    - Instale **U8g2 library**: Navegue a **Sketch** -> **Incluir Librería** -> **Gestionar Librerias** y busque la palabra "**U8g2**" en el **Gestionador Librerías**. La encontrará como **u8g2 library by oliver**, de click e instale.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png) 

  - Copie el siguiente código, Verifique para revisar errores en la sintaxis. Verifique que no hay ningún error, y puede subir el código.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

- **Análisis del Código**

```cpp
#include <>
```

**Descripción**

`#include` es usado para incluir librerías externas en el sketch. Esto brinda al programador acceso a un gran grupo de librerías estándar en C (Con grupos pre-creados de funciones), además las librerías son escritas específicamente para Arduino.

Note que `#include`, es similar a `#define`, no tiene un punto y coma al final, y el compilador marcará un error si se le agrega.

```cpp
#include <U8x8lib.h>
```

**#include** es una intrucción que introduce un archivo. En este caso estamos utilizando la librería U8x8lib.h.

```cpp
U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
```

**Descripción:**

Una vez que el objeto se ha declarado, puedes utilizar las funciones dentro de las librerías. 

```cpp
u8x8.begin();
```

**Descripción:**

Simplificar la configuación de un display en el ambiente de Arduino. Vea la guía de configuración de la selección de un constructor adecuado para U8g2.

**Sintaxis**

u8x8.begin()

Inicializa la librería u8g2. 

```cpp
u8x8.setFlipMode(1);
```

**Descripción:**

Algunos displays soportan una rotación interna de 180 grados. Esta característica del hardware puede ser controlada con el siguiente procedimiento. Importante: Vuelva a dibujar todo el display cambiando el modo de orientación. Lo mejor es primero limpiar el display, seguido a esto cambie el modo de orientación y finalmente redibuje el contenido. Los resultados serán indefinidos por cualquier contenido en la pantalla.
**Sintaxis:**

u8x8.setFlipMode(**modo**)

**Parámetros:**

**modo**: `0` or `1`

Gira el display 180 grados.

```cpp
u8x8.setCursor();
```

**Descripción:**

Defina el cursor de la función print. Cualquier salida de la función print iniciará en dicha posición.

**Sintaxis:**

u8x8.setCursor(**x, y**)

**Parámetros:**

**x, y**: Posición, Columna/Fila, del cursor de la función print.

Configure la posición del cursor de dibujo.

```cpp
u8x8.setFont()
```

**Descripción:** 

Define la fuente u8x8 para el dibujo glifos y cadenas.

**Sintaxis**

u8x8.setFont(**fuente_8x8**)

Configure la fuente para el display.

```cpp
u8x8.print();
```

Dibuje el contenido en el OLED.

**Demostración del Efecto y Resutado Serial Print:**

Imprime "Hello, World" en el Display OLED. 

**U8g2 Referencia de la Librería**

If you want to more information about U8g2 library, please refer to [here](https://github.com/olikraus/u8g2/wiki/u8g2reference).

- <font size="5;font" color="#314B9F">Guía de Separación</font>

Utiliza un cable Grove para conectar el OLED a la interfaz al puerto **I2C** del Seeeduino Lotus (Nota: La dirección por defaul de I2C es 0x78)

### Lección 8: Detectando Temperatura y Humedad del Entorno

Alguna vez te has preguntado ¿Qué humedad y temperatura tendrá mi entorno? ¿Quieres saber el número exacto? ¿Te gustaría saber si debes elegir un abrigo o sólo una playera hoy? ¡Hagamos un termómetro! 

<font size="5;font" color="#314B9F">Información de Contexto</font>

- **¿Qué es el protócolo I2C?**

**Protócolo:** Aquí tienes una breve explicación sobre el protócolo I2C.EL bus I2C solamente necesita dos cables conectados entre dispositivos para poder crear comunicación entre ellos:  SDA (Serial Data Line) y SCL (Serial Clock Line).

Estas dos lineas son bidireccionales, por lo tanto son lineas I/O. Estas son los componentes principales para comenzar la comunicación y generar el reloj obierto de la transmisión, cualquier dispositivo con una dirección será considerado por el microcontrolador apartir de este momento.

La relación entre maestro y esclavo (Emisor y Receptor) en la transmisión no es constante pero depende de la dirección de la transmisión de información. Sí por ejemplo, el emisor desea enviar información el receptor, primero define la dirección a comunicar, acto seguido comienza a enviar la información de manera activa, y finalmente el maestro termina la transmisión. Sí el maestro debe recibir información del esclavo, este comienza solicitando la dirección del maestro para poder reconocerlo entre los dispositivos.

El maestro entonces recibe la información enviada del dispositivo, y el mismo termina el proceso de recibimiento. En estos casos el host o maestro es responsable de la generación de sincronización del reloj y de la finalización de la transmisión de información. 

- **Práctica:** Haga que el OLED Display muestre la temperatura y humedad ambiental.

- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove Temperature and Temperature Sensor
    4. Grove cable(Sí ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)

- <font size="5;font" color="#314B9F">Conexión de Hardware</font>
    - **Conexión de Módulo**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 


- <font size="5;font" color="#314B9F">Código</font>
    - Abra el IDE de Arduino.
    - Instale la librería **Grove Temperature and Humidity Sensor(DHT11) library**: Navegue  a  **Sketch** -> **Incluir Librería** -> **Gestionar Librerías...** y busque la palabra **Grove Temperature and Humidity Sensor(DHT11)**" en el **Library Manager** e instale.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp-lib.png)

   - Copie el siguiente código, Verifique para revisar errores en la sintaxis. Verifique que no hay ningún error, y puede subir el código.

```Cpp
//Sensor de Temperatura y Humedad
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>

#define DHTPIN 3     //El pin conectado
#define DHTTYPE DHT11   // Módelo de Sensor
DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

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

- <font size="5;font" color="#314B9F">Análisis del Código</font>

```cpp
float temp, humi;
```

Definimos las variables para almacenar las lecturas.

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```
**Descripción:**

Funciones a utilizar para leer la temperatura y humedad de los valores del sensor.

**Sintaxis:**

**dht.readTemperature()** y **dht.readHumidity()**. Ambos regresan un tipo: float (Punto flotante o decimal).

Llama estas funciones para leer la temperatura y humedad almacenandolas dentro de las variables definidas.

**Demostración del Efecto y Resutado Serial Print:**

La temperatura y humedad apareceran en la pantalla OLED.

- <font size="5;font" color="#314B9F">Guía de Separación</font>

Use Grove cable to connect the OLED to Seeeduino Lotus's **I2C** interface (Note: I2C's default address is 0x78). Connect the Grove Temperature and Humidity Sensor to Seeeduino Lotus's digital signal interface **D3**.

### Lesson 9: Measuring Surrounding Air Pressure

El Sensor Grove de Presión de Aire (BMP280) es una tarjeta Grove Air Pressure Sensor(BMP280) es una tarjeta construida alrededor del barometro de alta presición y bajo consumo Bosch BMP280. Este módulo puede ser utilizado para medir la temperatura y presión Atmósferica con gran presición. Considerando que la presión Atmósferica cambia respecto a la altitud, este sensor puede brindar una estimación de la altitud del lugar.

- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove Sensor de Presión de Aire
    3. Grove cable (Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)

- <font size="5;font" color="#314B9F">Conexiòn del Hardware</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- <font size="5;font" color="#314B9F">Código</font>
    - Abre el Arduino IDE
    - Instala la **Librería Grove Barometer Sensor**: Navega a **Sketch** -> **Incluir Library** -> **Gestionar Librerías** y busque la palabra "**Grove BMP280**" en el **Gestor de Librerías**, e instale.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

  - Copie el siguiente código, Verifique para revisar errores en la sintaxis. Verifique que no hay ningún error, y puede subir el código.
  - En este programa, el sensor Barométrico envia la información al Seeeduino por medio del bus I2C y acto seguido el Seeeduino enviará la informaciòn atravez del monitor serial. Abre el **Monitor Serial** para ver los resultados.

```Cpp
//Detección de la presión de aire
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup() {
    Serial.begin(9600);
    if (!bmp280.init()) {
        Serial.println("Dispositivo no conectado o Dañado");
    }
}

void loop() {

    float pressure;

    //Obtención e impresión de temperaturas.
    Serial.print("Temp: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); //La unidad para Celsius, ya que arduino no soporta carácteres especiales.

    //Obtención e Impresión de la presión atmósferica
    Serial.print("Preión: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //get and print altitude data
    Serial.print("Altitud: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//Agregamos una linea nueva cada nuevo registro.

    delay(1000);
}
```

- <font size="5;font" color="#314B9F">Análisis del Código</font>

```cpp
#include <Wire.h>
```

**#include** es una instrucción que introduce la base de un archivo. En este caso utilizaremos la librería `<Wire.h>`, esta librería se encuentra incluida en el IDE de Arduino. 

```cpp
#include "Seeed_BMP280.h"
```
Representa al archivo del Seeed_BMP280.h, el cual nos brinda lo necesario para el funcionamiento. 

```cpp
if (!bmp280.init()) {
    Serial.println("¡Dispositivo no conectado o dañado!");
}
```

**Descripción:**

Para inicializar el sensor de presión de aire utilizamos bmp280.init(). Más adelante utilizaremos esta función en conjunto con una condición if para verificar la correcta inicialización del sensor confirmandonos por medio de un mensaje. Si algun problema llegase a ocurrir, de igual manera nos dará un mensaje "!" lo cual significa NO en programación.

**Sintaxis:**

**bmp280.init()**

si el sensor de Presión de Aire no inicia de manera apropiada. Entonces, un mensaje de error será mostrado en el monitor serial.

```cpp
Serial.print(bmp280.getTemperature());
```

**Descripción:**

Funciones utilizadas para leer el valor de temperatura medida por el sensor. 

**Sintaxis:**

**bmp280.getTemperature()**. Tipo de dato: float (Punto flotante o decimal). 

Imprime los datos de temperatura en el monitor serial.

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**Descripción:**

Funciones utilizadas para medir la presión del aire obtenida por medio del sensor. 

**Sintaxis:**

**bmp280.getPressure()**. Tipo de dato: float (Punto flotante o decimal). 

Imprime la presión del aire actual.

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**Descripción:**

Toma el valor de la presión para convertirla en altitud.

**Sintaxis:**

bmp280.calcAltitude(**float**). Tipo de dato: float (Punto flotante o decimal). 

**Parámetros:**

**float**: Valor de Presión.

Imprime la amplitud. 

**Demostración del Efecto y Resutado Serial Print:**

Las lecturas de presión del Aire serán mostradas en el monitor serial.

- <font size="5;font" color="#314B9F">Guía de Separación</font>

Utiliza un cable Grove para conectar el Sensor Grove de Presión de Aire a la interfaz **I2C** del Seeeduino Lotus. (nota: la direcciones por defecto I2C son  0x77 o 0x76).

### Lección 10: Sensando Movimiento

Este es el ultimo sensor, el acelerómetro de tres ejes, y con este módulo fácilmente podemos agregar monitoreo de movimiento a tus diseños. Por lo tanto, podemos hacer una gran variedad de interesantes pequeños experimentos con las bases de movimiento.

- **Práctica:** Cuando el movimiento es detectado, el zumbador sonará una alarma indicando que el objeto se está moviendo.

- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove Acelerómetro de 3-ejes
    3. Grove cable(Si ha sido separa)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)

- <font size="5;font" color="#314B9F">Conexión del Hardware</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em>Stamp holes</em> en el PCB.
    - El Seeeduino deberá encontrarse conectado a la computadora via USB. 

- <font size="5;font" color="#314B9F">Código</font>
    - Abra el IDE de Arduino. 
    - Descargue [3-Axis Digital Accelerometer( ±2g to 16g)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) desde GitHub. De click en **Sketch** > **Incluir library** > **Agregar Librería .ZIP**, importe la librería al IDE. 
  - Copie el siguiente código, Verifique para revisar errores en la sintaxis. Verifique que no hay ningún error, y puede subir el código.
  - En este programa, el sensor Barométrico envia la información al Seeeduino por medio del bus I2C y acto seguido el Seeeduino enviará la informaciòn atravez del monitor serial. Abre el **Monitor Serial** para ver los resultados.

```Cpp
//Aceleración de la Gravedad
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
        Serial.println("LIS3DHTR no se ha conectado.");
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

- <font size="5;font" color="#314B9F">Análisis del Código</font>

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

Inicialización del módulo utilizando software I2C o hardware I2C.

```cpp
while (!Serial) {};
```

El código se detiene aquí si el monitor serial no se ha abierto, por ello deberá abrir el monitor serial.

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**Descripción:** Inicializa el acelerómetro. 

**Sintaxis:** `LIS.begin(Wire, address)`.

**Descripción:** Define la velocidad de salida de los datos del acelerómetro. 

**Sintaxis:** `LIS.setOutputDataRate(odr_type_t odr)`.

Inicializa el acelerómetro y configura la velocidad de salida en 50Hz.

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**Descripción:** 

Funciones utilizadas para leer el valor del Eje-X del sensor.

**Sintacis::**

**LIS.getAccelerationX()**. Tipo de dato: float (Punto flotante o decimal).

**Description:** 

Funciones utilizada para leer el valor del Eje-Y del sensor. 

**Sintaxis:**

**LIS.getAccelerationY()**. Tipo de dato: float (Punto flotante o decimal).

**Descripción:** 

Funciones utilizadas para leer el valor del Eje-Z del sensor.
 
**Sintaxis:**

**LIS.getAccelerationZ()**.Tipo de dato: float (Punto flotante o decimal).

Imprime los datos de los 3 Ejes en el monitor serial.

**Demostración del Efecto y Resutado Serial Print:**

Las lecturas del Acelerómetro de 3 Ejes serán mostradas en el Monitor Serial.

- <font size="5;font" color="#314B9F">Guía de Separación </font>

Utiliza los cables Grove para conectar el Grove Acelerómetro de 3 ejes (Grove 3-axis Accelerometer) a la interfaz **I2C** del Seeeduino Lotus. (nota: La derección por defecto I2C es 0x19).

## Proyectos Extras

### Proyecto 1: Lámpara de ritmo dinámico musical.

- **Descripción de Proyecto:** En este experimento, haremos que el zumbador reproduzca música agradable, y las luces encenderán de acuerdo a la frecuencia de la música y el ritmo.


- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove LED
    3. Zumbador (Buzzer)
    4. Grove Cables(Si han sido separados)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)


- <font size="5;font" color="#314B9F">Conexión del Hardware</font>
 - **Conexión del Módulo:**
        - Conexión por defecto con <em> Stamp holes </em> en el PCB. 
    - Conecte el Seeeduino por medio del cable USB a la computadora. 

- <font size="5;font" color="#314B9F">Código</font>
    - Abra el Arduino IDE.
    - Copie el siguiente código, de click en Verificar para revisar errores en la sintaxis. Verifique que no hay ningun error, y carge el código. 

```cpp
//Lámpara de ritmo dinámico musical
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

- <font size="5;font" color="#314B9F">Análisis del Código</font>
  
```cpp
#define NTD
```

Aquí definimos la freceuncia de la nota D, el cual se encuentra dividido en bajo, alto, y agudos.

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

Nota: El ritmo se encuentra dividido por un tiempo, medio tiempo, 1/4 tiempo, 1/8 tiempo, especificamos un tiempo en una nota es de 1; Medio tiempo es 0.5; 1/4 de Tiempo es 0.25; 1/8 es 0.125.

```cpp
int tune[]=...
```

Lista de frecuencias acorde al espectro.

```cpp
float durt[]=...
```

Lista de tiempos acorde al espectro.

```cpp
delay(100*durt[x]);
```

Control de las luces LED, encendido y apagado respectivamente. 

**Demostración del Efecto y Resutado Serial Print:**

El Zumbador hará una nota beep mientras el módulo LED parpadea con la misma frecuencia.

- <font size="5;font" color="#314B9F">Guía de Separación </font>


Conecte el LED Grove al puerto digital **D4** del Seeeduino, así mismo el Zumbador (Buzzder) a la interfaz **D5** del mismo tipo.

### Proyecto 2: Haga una Lámpara de Escritorio Inteligente a la inducción de luz y sonido. 

- **Descripción del Proyecto:** Como el nombre infiere, este proyecto consta de crear una pequeña lampara controlable por la Luz y el Sonido. Necesitaremos utilizar el módulo LED como salida. El sensor de Luz y el del sonido serán utilizados como señales de entradas. De esta manera, podrás lograr la función de lámpara inteligente: Si el sonido ambiente se encuenta por encima del nivel preestablecido, entonces la lámpara LED se encenderá, o de igual manera, si el nivel de Luz del ambiente se encuentra debajo de cierto valor, la luz se encenderá de igual manera.

- <font size="5;font" color="#314B9F">Componentes Involucrados</font>
    1. Seeeduino Lotus
    2. Grove LED
    3. Sensor de Luz
    4. Sensor de Sonido
    5. Grove cable(Si ha sido separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)

- <font size="5;font" color="#314B9F">Conexión del Hardware</font>
    - **Conexión del Módulo:**
        - Conexión por defecto con <em> Stamp holes </em> en el PCB. 
    - Conecte el Seeeduino por medio del cable USB a la computadora. 


- <font size="5;font" color="#314B9F">Código</font>
    - Abra el Arduino IDE.
    - Copie el siguiente código, de click en Verificar para revisar errores en la sintaxis. Verifique que no hay ningun error, y carge el código. 

```Cpp
//Lámpara de Escritorio Inteligente
int soundPin = A2; // La señal analógica de sensor de sonido estará en este pin.
int lightPin = A6; //La señal analógica de sensor de luz estará en este pin.
int ledPin = 4; //El LED se encontrará en el pin D4

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // Lee el valor del sensor de sonido.
  int lightState = analogRead(lightPin); // Lee el velor del sensor de luz.
  // Si en valor del sensor es mauyor que 500 o la del sensor del sonido menor a 200, la luz se encenderá.
  //En caso contrario, se apagará.
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); //You can add the "//" to remove the delay
}else{
  digitalWrite(ledPin, LOW);
}
}
```

- <font size="5;font" color="#314B9F">Code Analysis</font>

```cpp
if (soundState > 500 || lightState < 200) {
  ...
}
```

Lo que se encuentra en párentesis es una expresión lógica. Ambas **&&** y **||** son comúnmente usadas para comparaciones lógicas. El uso más común es **if (expression 1 || expression 2)** y **if (expression 1 && expression 2)**.

**||** representa "**or**", si se satisface una u otra, y satisfaca la condición del if.

**&&** significa "**and**", La declaración en el if{} es ejecutada solamente si todas las expresiones en el párentesis son ciertas. 

**Demostración del Efecto y Resutado Serial Print:**

si el sonido  es lo suficientemente alto o la intensidad de la luz suficientemente baja, el módulo LED se encenderá con mayor intensidad.

- <font size="5;font" color="#314B9F">Guía de Separación</font>

Conecta el LED Grove al puerto digital **D4** del Seeeduino Lotus, conecta el Sensor de Luz al puerto analógico **A1**, así mismo conecta el Sensor de Sonido al puerto **A2**, todo utilizando tus cables Grove.

## Crea tus propios módulos & tarjetas 

Después de este periodo de estudio, te encuentras listo para el entendimiento de esquemáticos electrónicos de Arduino y de Hardware <em>Open-Source</em>. Entonces ¿Por qué no ir más allá e intentar crear tus propios módulos o tarjetas de desarrollo?
 
### EDA

Para diseñar tus propias tarjetas, tendrás que diseñar los esquemáticos para tus propios módulos, para ello necesitarás EDA. Nosotros te recomendamos el software libre EDA.

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/) es una suite de software libre para diseño automático de electrónica. Facilita el diseño de esquemáticos para circuitos electrónicos y su conversión a diseños PCB. Este cuenta con un ambiente integrado para la captura de esquemáticos y trazado de diseños de PCB. Además dispone de captura de esquemáticos y trazado de PCB con salida de Gerbers. La suite corre en Windows, Linux y MacOs y se encuentra licenciado bajo GNU GPL v3.

- **Geppetto**

Si no quieres trabajar tu mismo en la creción de un esquemático o trazado, pero deseas convertir tu prototipo basado en los módulos de Seeed en un producto integrado, te recomendamos intentar con Geppetto. 

[Geppetto](https://www.seeedstudio.com/geppetto) es, por mucho, la manera más fácil y menos cara de producir electrónica de calidad. No necesitas saber sobre resistencias, capacitores, inductores, diseño de Pads ni nada de EE para deseñar tu propio módulo. Geppetto tiene una modalida de arrastra y suelta... cualquiera puede crear dispositivos IoT profesionales. Para hacerlo más conveniente para ti, Geppeto tiene una librería de Seeed. ¡Entonces puedes crear tus propios módulos Grove fácilmente! 

### Servicios de PCB

Una vez que termines tu diseño, revisa nuestro [Seeed Fusion servicio PCBA ](https://www.seeedstudio.com/fusion_pcb.html), donde podrás llevar tus diseños a un dispositivo funcional.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

Seeed Studio tiene su propia [Librería de Componentes (Open Parts Library (OPL))](https://www.seeedstudio.com/opl.html) la cual es una colección de más de 10,000 componentes comúnmente utilizados, y especialmente distribuidos para  el servicios de PCBA de Seeed Fusion. Para acelerar el proceso de diseño de PCB, Seeed se encuentra construyendo librerías de componentes para KitCad e Eagle. Cuando todos los componentes provienen del OPL de Seeed y usando el [Servicio de Ensamble PCB (PCBA) de Seeed Fusion](https://www.seeedstudio.com/fusion_pcb.html), la produción completa del PCBA puede ser reducida de 20 a sólo 7 Días.

## Visualizador de Esquemático <em>Online</em>

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

1. [**Grove Beginner Kit para Arduino Wiki]** [PDF](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-ArduinoPDF.pdf)

2. [**Grove Beginner Kit para Arduino Archivos de Diseño,** Esquemático](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

3. **Librerías de Módulos en GitHub:**
      - [Display OLED](https://github.com/olikraus/U8g2_Arduino)
      - [Sensor de Temperatura y Humedad](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
      - [Sensor de presión atmosférica ](https://github.com/Seeed-Studio/Grove_BMP280)
      - [3-Axis Accelerator](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**Datasheet (Hojas de datos) de los sensores**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**Demostración de firmaware inicial para Arduino**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Recursos para el Grove Beginner Kit para Arduino en un solo** [7z] (2020-04-01)](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)

## Más Información. Aprendizaje Continuo 

- [LSTM for live IoT data prediction](https://github.com/256ericpan/LSTM_IoT)

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" />

<a href="https://www.seeedstudio.com/contacts" className="button_email" />

</div>

<div class="button_tech_support_container">
<div>
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" /> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" />
</div>

</div>