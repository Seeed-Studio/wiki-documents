---
description: Pin multiplexing with Seeed Studio XIAO ESP32S3.
title: Multiplexación de Pines con XIAO ESP32S3 (Sense) de Seeed Studio
keywords:
- esp32s3
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_pin_multiplexing
last_update:
  date: 02/11/2025
  author: Guillermo
---

# Multiplexación de Pines con XIAO ESP32S3 (Sense) de Seeed Studio

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La Seeed Studio XIAO ESP32S3 es una placa de desarrollo potente y versátil que cuenta con una variedad de interfaces periféricas y pines GPIO. Estos pines se pueden usar para diversos fines, como la comunicación con otros dispositivos, la lectura de sensores analógicos, el control de LEDs, y más. En este tutorial, exploraremos el pinout de la XIAO ESP32S3 y su placa relacionada, la XIAO ESP32S3 Sense, y aprenderemos cómo utilizar estos pines para diferentes propósitos. Específicamente, cubriremos el uso de 1x UART, 1x I2C, 1x I2S, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de usuario, 1x LED de carga, 1x botón de reinicio, 1x botón de arranque, y, para la XIAO ESP32S3 Sense, 1x conector B2B (con 2 GPIOs adicionales). Al final de este tutorial, tendrás una buena comprensión del pinout de la XIAO ESP32S3 y podrás utilizarla eficazmente en tus proyectos.

## Comenzando

### Visión general del Pinout

Antes de comenzar, repasemos todos los pines que tiene la XIAO ESP32S3 y sus funciones con el siguiente esquema.

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense Diagrama Frontal</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense Diagrama Trasero</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense Lista de Pines</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- **5V** - Este es el 5V de salida del puerto USB. También puedes usarlo como entrada de voltaje, pero debes tener algún tipo de diodo (Schottky, de señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo hacia la batería y el cátodo hacia el pin de 5V.

- **3V3** - Esta es la salida regulada del regulador a bordo. Puedes extraer hasta 700mA.

- **GND** - Tierra de alimentación/datos/señales.

### Soldar headers

Para usar las funciones de cada pin según este tutorial, recomendamos soldar los pines de antemano.

Debido al tamaño miniatura de la XIAO ESP32S3, por favor ten cuidado al soldar los encabezados. No debes hacer que diferentes pines se peguen entre sí ni soldar el estaño al escudo u otros componentes. De lo contrario, podría causar un cortocircuito en la XIAO o que no funcione correctamente, y las consecuencias de esto serán responsabilidad del usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

¡Si has elegido la versión Sense, felicidades! Tendrás dos pines GPIO adicionales. Si planeas usarlos, puedes soldar un encabezado separado en ellos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## Digital

La XIAO ESP32S3 tiene hasta 11 pines GPIO regulares y 9 pines analógicos. En este ejemplo, utilizaremos la XIAO ESP32S3, la placa de expansión XIAO y un relé para demostrar cómo utilizar diferentes pines digitales para leer y escribir.

### Preparación del hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Base de Expansión para XIAO con Grove OLED</th>
        <th>Grove - Relé</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Por favor, instala la XIAO ESP32S3 o la versión Sense en la placa de expansión y conecta el relé a la interfaz **A0/D0** de la placa de expansión a través de un cable Grove. Finalmente, conecta la XIAO al computador mediante un cable USB-C.

### Implementación de Software

En este ejemplo, implementaremos el control del estado de encendido/apagado de un relé utilizando un botón conectado a la placa de expansión XIAO. Cuando el botón sea presionado, el relé se encenderá, y cuando el botón sea soltado, el relé se apagará.

```c
const int buttonPin = D1;     // El número del pin del botón
int buttonState = 0;          // Variable para leer el estado del botón
const int relayPin = D0;

void setup() {
  // Inicializar el pin del relé como salida:
  pinMode(relayPin, OUTPUT);
  // Inicializar el pin del botón como entrada con resistencia pull-up:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // Leer el estado del botón:
  buttonState = digitalRead(buttonPin);

  // Verificar si el botón está presionado. Si lo está, el estado del botón es HIGH:
  if (buttonState == HIGH) {
    // Encender el relé:
    digitalWrite(relayPin, HIGH);
  } else {
    // Apagar el relé:
    digitalWrite(relayPin, LOW);
  }
}
```

Si todo va sin problemas, después de cargar el programa, deberás ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
Si deseas utilizar la función digital, deberías usar la letra "D" como prefijo para el número de pin, como D4, D5. En cambio, si deseas usar la función analógica de un pin, deberías usar la letra "A" como prefijo para el número de pin, como A4, A5.
:::

### Para la versión Sense

Para la XIAO ESP32S3 Sense, además de utilizar los 11 pines digitales en la XIAO, también puedes usar los dos pines en la placa de expansión, que son **D11** y **D12**. Si deseas utilizarlos, sigue los pasos a continuación.

#### Paso 1. Cortar la conexión entre J1 y J2.

Debido a la cantidad limitada de pines en el ESP32-S3, los pines D11 y D12 en la placa de expansión Sense están reservados por defecto para el micrófono. Si realmente necesitas usar D11 y D12 para otros fines, puedes voltear la placa de expansión Sense y cortar la conexión entre J1 y J2 a lo largo de la línea blanca entre los dos pads de soldadura usando un cuchillo afilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
Como se puede ver en la imagen, debido a las limitaciones de espacio de la XIAO, muchos diseños de cables son muy compactos. Por lo tanto, al cortar la conexión entre J1 y J2, por favor, ten mucho cuidado de no cortar fuera de la línea blanca, ¡ya que podría causar que la placa de desarrollo deje de funcionar!

Para los dos pines adicionales D11 y D12 en la XIAO ESP32S3 Sense, no hemos definido macros para estos pines. Es decir, no puedes usar D11/A11 o D12/A12 para controlar estos dos pines aún, pero puedes controlar estos pines utilizando los números GPIO, GPIO12 y GPIO13, respectivamente. Presentaremos las definiciones de las macros para estos dos pines lo antes posible, y una vez que se haya hecho, podrás utilizar las definiciones D/A para esos pines.
:::

:::tip
Después de cortar la conexión entre J1 y J2, la función del micrófono en la placa de expansión ya no estará disponible. Si necesitas utilizar la función del micrófono, los pines D11 y D12 no pueden usarse simultáneamente. En este caso, puedes soldar los dos pads de J1 y J2 por separado para restaurar la función del micrófono. Como se muestra en la imagen a continuación, debes soldar por separado las áreas roja y verde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

Para el esquema de circuito real, consulta el siguiente diagrama:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### Paso 2. Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Grove - Relé</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### Paso 3. Implementación del software

El siguiente programa cambia el estado del relé cada 500 milisegundos. Conecta el pin SIG del relé a la interfaz GPIO42 de la placa de expansión.

```c
const int relayPin = 42;

void setup() {
  // inicializa el pin del relé como salida:
  pinMode(relayPin, OUTPUT);
}

void loop() {
    // enciende el relé:
    digitalWrite(relayPin, HIGH);
    delay(500);
    // apaga el relé:
    digitalWrite(relayPin, LOW);
    delay(500);
}
```

El método anterior también es aplicable a las secciones de [Digital como PWM](#digital-como-pwm) y [Análogico](#análogo). Solo necesitas modificar los números de pin de la placa de expansión que deseas usar. Esto no se repetirá más adelante.

:::caution
Para los dos pines adicionales D11 y D12 en el XIAO ESP32S3 Sense, no hemos definido macros para los pines. Es decir, no se puede usar D11/A11 o D12/A12 para controlar estos dos pines aún, pero puedes controlar estos dos pines utilizando los números GPIO, GPIO42 y GPIO41, respectivamente. Presentaremos las definiciones de las macros para estos dos pines lo antes posible, y una vez que la presentación esté lista, podrás usar las definiciones D/A para los pines.
:::

## Digital como PWM

Todos los pines GPIO en el XIAO ESP32S3 son compatibles con la salida PWM. Por lo tanto, puedes usar cualquier pin para generar salida PWM y ajustar el brillo de luces, controlar servos y otras funciones.

### Preparación del hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Base de Expansión para XIAO con Grove OLED</th>
        <th>Grove - LED de Color variable</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Por favor, instala el XIAO ESP32S3 o el Sense en la placa de expansión, luego conecta el LED de color variable a la interfaz A0/D0 de la placa de expansión utilizando un cable Grove. Finalmente, conecta el XIAO a tu computadora a través de un cable USB-C.

### Implementación de software

En este ejemplo, demostraremos cómo utilizar la salida PWM para controlar el brillo de una luz.

```cpp
int LED_pin = D0;    // LED conectado al pin digital 10

void setup() {
  // declarar el pin del LED como salida
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // desvanecerse de mínimo a máximo en incrementos de 5 puntos:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // esperar 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }

  // desvanecerse de máximo a mínimo en incrementos de 5 puntos:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // esperar 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }
}
```

Si el programa se ejecuta con éxito, verás el siguiente efecto de ejecución.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## Analógico

En el XIAO ESP32S3, de los 11 pines GPIO integrados, excepto los pines D6 y D7 que se usan para la comunicación serial, los 9 pines restantes soportan funciones analógicas. Puedes usar estos pines GPIO con funcionalidad analógica para leer valores de sensores que producen señales analógicas, como sensores de oxígeno, sensores de intensidad lumínica, entre otros.

### Preparación del hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Base de Expansión para XIAO con Grove OLED</th>
        <th>Grove - Sensor de Oxígeno</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Por favor, instala el XIAO ESP32S3 o el Sense en la placa de expansión, luego conecta el Sensor de Oxígeno a la interfaz A0/D0 de la placa de expansión con el cable Grove. Finalmente, conecta el XIAO a la computadora a través del cable USB-C.

### Implementación de software

En el siguiente programa, utilizaremos el método `analogRead()` para leer el valor analógico del sensor e imprimir el resultado del sensor utilizando la interfaz Serial.

```cpp
// Código de prueba para el Sensor de Gas (O2) - Grove
// Nota:
// 1. Necesita alrededor de 5-10 minutos para precalentar el sensor
// 2. Descomenta el nombre del módulo que estás utilizando
// 3. Modifica VRefer si es necesario

// comenta lo que no uses
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // voltaje de referencia del ADC
const int pinAdc   = A0;
 
void setup() 
{
    // pon tu código de configuración aquí, para que se ejecute una vez:
    Serial.begin(9600);
    Serial.println("Código de prueba - Sensor de Oxígeno (MIX8410)...");
}

void loop() 
{
    // pon tu código principal aquí, para que se ejecute repetidamente:
    float Vout =0;
    Serial.print("Vout =");
 
    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, La concentración de O2 es ");
    Serial.println(readConcentration());
    delay(500);
}
 
float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }
 
    sum >>= 5;
 
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}
 
float readConcentration()
{
    // Las muestras de Vout están con referencia a 3.3V
    float MeasuredVout = readO2Vout();
 
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //cuando su voltaje de salida es 2.0V,
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
Si deseas usar la función analógica de un pin, debes usar la letra "A" como prefijo para el número del pin, como A4, A5. Por el contrario, si deseas usar la función digital, debes usar la letra "D" como prefijo para el número del pin, como D4, D5.
:::

Después de cargar el programa, abre el Monitor Serial en el IDE de Arduino y configura la velocidad en baudios a 9600. Espera a que el sensor de oxígeno se caliente, y luego podrás ver el valor preciso de la concentración de oxígeno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## Serial

Cuando trabajas con el IDE de Arduino, la comunicación Serial es una parte esencial de muchos proyectos. Para usar Serial en el IDE de Arduino, debes comenzar abriendo la ventana del Monitor Serial. Esto se puede hacer haciendo clic en el icono **Monitor Serial** en la barra de herramientas o presionando la tecla de acceso directo **Ctrl+Shift+M**.

### Uso general

Algunas de las funciones de Serial más comúnmente utilizadas incluyen:

- `Serial.begin()` -- que inicializa la comunicación a una velocidad en baudios especificada;
- `Serial.print()` -- que envía datos al puerto serial en un formato legible;
- `Serial.write()` -- que envía datos binarios al puerto serial;
- `Serial.available()` -- que verifica si hay datos disponibles para ser leídos desde el puerto serial;
- `Serial.read()` -- que lee un solo byte de datos desde el puerto serial;
- `Serial.flush()` -- que espera a que se complete la transmisión de los datos seriales salientes.

Usando estas funciones Serial, puedes enviar y recibir datos entre la placa Arduino y tu computadora, lo que abre muchas posibilidades para crear proyectos interactivos.

Aquí tienes un ejemplo de programa:

```c
void setup() {
  // inicializar la comunicación serial a 9600 bits por segundo:
  Serial.begin(9600);
}

void loop() {
  // enviar datos al puerto serial
  Serial.println("¡Hola Mundo!");

  // leer datos desde el puerto serial
  if (Serial.available() > 0) {
    // leer el byte entrante:
    char incomingByte = Serial.read();
    // imprimir el byte entrante en el monitor serial:
    Serial.print("Recibí: ");
    Serial.println(incomingByte);
  }
  
  // esperar un segundo antes de repetir el ciclo
  delay(1000);
}
```

En este código, primero inicializamos la comunicación Serial a una velocidad en baudios de **9600** usando la función `Serial.begin()` en la función `setup()`. Luego, en la función `loop()`, usamos la función `Serial.print()` para enviar "¡Hola Mundo!" al puerto serial.

También utilizamos la función `Serial.available()` para verificar si hay datos disponibles para ser leídos desde el puerto serial. Si los hay, leemos el byte entrante utilizando la función `Serial.read()` y lo almacenamos en una variable llamada `incomingByte`. Luego, usamos las funciones `Serial.print()` y `Serial.println()` para imprimir "Recibí: " seguido del valor de `incomingByte` en el monitor serial.

Finalmente, agregamos la función `delay()` para esperar un segundo antes de repetir el ciclo. Este código demuestra cómo usar algunas de las funciones más comunes de Serial en el IDE de Arduino para enviar y recibir datos a través del puerto serial.

Después de cargar el programa, abre el Monitor Serial en el IDE de Arduino y configura la velocidad en baudios a 9600. Verás el siguiente mensaje en el monitor serial, que muestra "¡Hola Mundo!" cada segundo. Además, podrás enviar contenido al XIAO ESP32S3 a través del monitor serial, y el XIAO imprimirá cada byte del contenido que envíes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Uso de Serial1

Según los diagramas de pines del XIAO ESP32S3 para parámetros específicos, podemos observar que hay un pin TX y un pin RX. Esto es diferente a la comunicación serial, pero el uso es muy similar, excepto que se deben agregar algunos parámetros adicionales. 
A continuación, utilizaremos los pines proporcionados por el chip para la comunicación serial.

Función principal que debe ser incluida:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- habilita Serial1, el prototipo de la función es: `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  : velocidad en baudios
  - `config`: bits de configuración
  - `rxPin` : Pin de recepción
  - `txPin` : Pin de transmisión

Es importante señalar que si usamos un pin digital para definir, este lugar debe ser `#define RX_PIN D7` y `#define TX_PIN D6`; si usamos un puerto GPIO, debe ser `#define RX_PIN 44` y `#define TX_PIN 43`. Por favor, consulta los diagramas de pines de las diferentes series XIAO para obtener los parámetros específicos.

Aquí tienes un ejemplo de programa:

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
    Serial1.print("Recibí: ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

Después de cargar el programa, abre el Monitor Serial en el IDE de Arduino y configura la velocidad en baudios a 115200. Luego, podrás enviar el contenido que desees al XIAO ESP32S3 a través del monitor serial, y el XIAO imprimirá cada byte del contenido que envíes. En este caso, el contenido que ingresé es "Hello Everyone", y mi gráfico de resultados es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### Uso del Serial Software

Si sientes que un puerto serial de hardware no es suficiente, también puedes utilizar la función de serial software del ESP32 para configurar algunos pines como serial software y expandir la cantidad de puertos seriales.

Por supuesto, recomendamos utilizar el segundo método de asignación de puertos seriales de hardware, ya que es una característica única del ESP32. Puedes leer más sobre esto en la sección [Otro Serial de Hardware](#other-hardware-serial).

Para los productos con chip de la serie ESP32, si necesitas utilizar el puerto serial software, necesitas descargar por separado la biblioteca de puerto serial software de terceros. Se proporciona una referencia aquí.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
Actualmente recomendamos la versión 7.0.0 de la biblioteca EspSoftwareSerial. Otras versiones pueden tener problemas de diferentes grados que impiden que el puerto serial software funcione correctamente.
:::

Dado que has descargado la biblioteca en formato zip, abre tu IDE de Arduino, haz clic en **Sketch > Incluir Biblioteca > Añadir Biblioteca .ZIP**. Elige el archivo zip que acabas de descargar, y si la instalación de la biblioteca fue correcta, verás **Biblioteca añadida a tus bibliotecas** en la ventana de notificación. Esto significa que la biblioteca se ha instalado con éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

Luego, puedes usar el puerto serial software del ESP32. 

:::caution
Si tienes otras bibliotecas de serial software instaladas en tu computadora, es probable que cause un conflicto, así que por favor revisa por ti mismo.
:::

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // inicializar la comunicación serial
  Serial.begin(9600);
  while (!Serial);

  // inicializar el serial software
  mySerial.begin(9600);
}

void loop() {
  // leer datos del serial software
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Datos recibidos: ");
    Serial.println(data);
  }

  // escribir datos al serial software
  mySerial.print("¡Hola Mundo!");

  // esperar un segundo antes de repetir el ciclo
  delay(1000);
}
```

En este programa, primero incluimos la biblioteca `SoftwareSerial.h` para utilizar el serial software. Luego, creamos un nuevo objeto de tipo SoftwareSerial llamado `mySerial`, utilizando los pines 2 y 3 como RX y TX, respectivamente.

En la función `setup()`, inicializamos tanto el serial de hardware (`Serial.begin()`) como el serial software (`mySerial.begin()`).

En la función `loop()`, usamos la función `mySerial.available()` para verificar si hay datos disponibles para leer desde el serial software. Si los hay, leemos el byte entrante utilizando la función `mySerial.read()` y lo almacenamos en una variable llamada `data`. Luego, usamos las funciones `Serial.print()` y `Serial.println()` para imprimir "Datos recibidos: " seguido del valor de `data` en el serial de hardware.

También usamos la función `mySerial.print()` para escribir "¡Hola Mundo!" en el serial software. Esto enviará los datos desde el XIAO al dispositivo conectado al puerto serial software.

Finalmente, agregamos una función `delay()` para esperar un segundo antes de repetir el ciclo.

:::note
Ten en cuenta que, para usar el serial software en el ESP32-S3, necesitas seleccionar los pines apropiados para RX y TX que no estén siendo utilizados para ningún otro propósito. En este ejemplo, hemos utilizado los pines 9 y 10 para RX y TX, respectivamente.
:::

### Otro Serial de Hardware

El ESP32S3 tiene un total de tres interfaces de comunicación UART, numeradas del 0 al 2, que son UART0, UART1 y UART2. Los pines de estos tres puertos seriales no son fijos y pueden ser reasignados a cualquier puerto IO.

Por defecto, no usamos **UART0**, ya que se utiliza para la comunicación serial USB. Puedes usar otros puertos seriales de hardware personalizando el mapeo de los puertos seriales.

```c
// Necesitamos esto para el acceso de bajo nivel para configurarlos.
#include <HardwareSerial.h>

// Definir dos dispositivos Serial mapeados a los dos UART internos
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // Para el USB, solo usa Serial como de costumbre:
    Serial.begin(115200);

    // Configura MySerial0 en los pines TX=D6 y RX=D7 (-1, -1 significa usar los valores predeterminados)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // Y configura MySerial1 en los pines RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

A continuación, tomaremos el [Sensor mmWave de 60GHz - Módulo de Respiración y Latido del Corazón Humano](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html), que está disponible para la venta, como ejemplo, y explicaremos cómo usar los puertos seriales de hardware D9 y D10, así como el puerto serial USB.

Por favor, prepárate para lo siguiente.

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>60GHz mmWave Sensor -<br/>Respiración <br/>y módulo de ritmo cardiáco</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:240, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:240, height:'auto'}}/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Descarga la biblioteca del sensor en tu computadora. Luego, agrégala al IDE de Arduino.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí, queremos analizar la información de los datos de latido del corazón y respiración, luego puedes reescribir tu programa de la siguiente manera.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   // Crea una nueva clase HardwareSerial -- D6/D7

// También puedes intentar con serial hardware
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // Código de configuración que se ejecuta una vez:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // a la frecuencia del CPU de 40MHz, funciona a la mitad de la velocidad definida.

  while(!Serial);   // Cuando el puerto serial esté abierto, el programa comenzará a ejecutarse.

  Serial.println("Listo");

  // radar.ModeSelect_fuc(1);  // 1: indica el modo de transmisión en tiempo real, 2: indica el modo de estado de reposo.
  // Después de configurar el modo, si no ves datos devueltos, es posible que debas volver a alimentar el sensor.
}

void loop()
{
  // Código principal que se ejecuta repetidamente:
  radar.Breath_Heart();           // Salida de información de respiración y latidos del corazón
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("El sensor ha monitorizado el valor actual de la frecuencia cardíaca: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  // Válido solo cuando el modo de transferencia de datos en tiempo real está activado
        Serial.print("La forma de onda de la frecuencia cardíaca (onda seno) -- punto 1: ");
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
        Serial.print("El sensor ha monitorizado el valor actual de la frecuencia respiratoria: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  // Válido solo cuando el modo de transferencia de datos en tiempo real está activado
        Serial.print("La forma de onda de la frecuencia respiratoria (onda seno) -- punto 1: ");
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
  delay(200);                       // Añadir tiempo de retraso para evitar el bloqueo del programa
}
```

Carga el programa, luego abre el monitor serie y configura la velocidad de baudios a 115200.  

Si todo funciona correctamente, verás mensajes de datos en el monitor serie.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC  

XIAO ESP32S3 tiene una interfaz I2C que se puede utilizar para la transmisión de datos y el procesamiento de muchos sensores, así como para el uso de algunas pantallas OLED.  

### Preparación del hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Base de Expansion para XIAO con Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La pantalla OLED en la placa de expansión de XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C de XIAO a través del circuito I2C de la placa. Por lo tanto, podemos conectar directamente XIAO a la placa de expansión y programarla para mostrar contenido en la pantalla.  

### Implementación del software  

Este ejemplo muestra cómo usar la pantalla OLED en la Seeed Studio Expansion Base para XIAO ESP32S3.  

#### Paso 1. Instala la Seeed Studio XIAO ESP32S3 en la placa de expansión y conecta el cable Type-C.  

#### Paso 2. Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Paso 3. Copia el código y pégalo en el IDE de Arduino, luego cárgalo.

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reloj=*/ SCL, /* datos=*/ SDA, /* reinicio=*/ U8X8_PIN_NONE);   // OLEDs sin reinicio de pantalla

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // establece un número de 1 a 3, la pantalla girará 180°
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("¡Hola Mundo!");
}
```

En las primeras líneas del código, incluimos las bibliotecas necesarias, como `Arduino.h`, `U8x8lib.h` y `Wire.h`. La biblioteca `U8x8lib.h` proporciona funciones para controlar la pantalla OLED, mientras que la biblioteca `Wire.h` permite la comunicación I2C.  

En la función `setup()`, inicializamos la pantalla OLED con la función `u8x8.begin()`. También configuramos el modo de rotación de la pantalla con `u8x8.setFlipMode()`, lo que permite girar la pantalla 180 grados.  

En la función `loop()`, establecemos la fuente con `u8x8.setFont()`, especificamos la posición del cursor con `u8x8.setCursor()` y, finalmente, usamos `u8x8.print()` para mostrar el texto "¡Hola Mundo!" en la pantalla OLED.  

Si cargas este programa en la XIAO ESP32S3, verás el contenido mostrado en la pantalla OLED de la placa de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI  

El chip ESP32-S3 integra múltiples periféricos, incluyendo una interfaz SPI que puede utilizarse para conectar dispositivos SPI externos como memoria flash, pantallas, sensores y más. Además, el ESP32-S3 admite un modo de transferencia SPI de alta velocidad, que puede alcanzar una tasa máxima de transferencia de 80 MHz, satisfaciendo las necesidades de la mayoría de los dispositivos SPI.  

### Preparación del hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Después de preparar el hardware como se mencionó anteriormente, utiliza cables de conexión para conectar la interfaz SPI de XIAO con la pantalla OLED. Consulta el siguiente diagrama para el método de conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### Implementación del software  

A continuación, tomaremos el siguiente programa como ejemplo para mostrar cómo utilizar la interfaz SPI para controlar la pantalla OLED.  

Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"¡Hola Seeed!");
  } while ( u8g2.nextPage() );
}
```

En la función `setup()`, la clase `U8G2_SH1107_128X128_1_4W_HW_SPI` se instancia con los argumentos apropiados del constructor que especifican los pines utilizados para selección de chip (cs), datos/comando (dc) y reinicio. Luego, se llama a la función `u8g2.begin()` para inicializar la pantalla.

En la función `loop()`, la pantalla se actualiza con nuevo contenido utilizando las funciones `u8g2.firstPage()`, `u8g2.setFont()` y `u8g2.drawStr()`. La función `u8g2.firstPage()` configura el búfer de la pantalla para escribir, mientras que `u8g2.nextPage()` muestra el contenido actualizado. El bucle do-while asegura que el contenido se muestre continuamente hasta que el programa sea detenido.

En general, este código demuestra cómo utilizar la biblioteca U8g2 para controlar una pantalla OLED y mostrar texto en ella.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### Para la versión Sense  

Si adquiriste la versión Sense y necesitas conectar la placa de expansión, ten en cuenta que la tarjeta SD en la placa de expansión ocupará los pines SPI, lo que podría hacer que los pines SPI no estén disponibles.  

Las interfaces de pads de soldadura proporcionadas en la placa de expansión Sense permiten a los usuarios seleccionar las funciones requeridas. Entre ellas, la función del pad de soldadura **J3** es habilitar la funcionalidad SPI o de la tarjeta SD.

<table align="center">
	<tr>
	    <th>Si deseas usar los pines SPI / Deshabilita la tarjeta SD de la placa de expansión.</th>
	    <th>Si deseas habilitar la tarjeta SD en la placa de expansión / Deshabilita los pines SPI.</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>Corta a lo largo de la línea blanca delgada para desconectar la conexión del pad de soldadura.</td>
    <td>Suelda los dos pads de soldadura juntos.</td>
  </tr>
</table>

:::caution
Como se puede ver en la imagen, debido a las limitaciones de espacio de XIAO, muchos de los diseños de los cables son muy compactos. Por lo tanto, al cortar la conexión de J3, ten mucho cuidado de no cortar fuera de la línea blanca, ¡ya que de lo contrario podría causar un mal funcionamiento de la placa de desarrollo!
:::

:::caution
Por sentido común, se describió anteriormente el J3 simplemente como una interfaz que activa o desactiva la función de la tarjeta SD, pero esto en realidad no es preciso. La conexión real del circuito se muestra a continuación. Cortar J3 en realidad desconecta las resistencias de pull-up de R4 a R6, lo que es la razón principal por la que se desactiva la función de la tarjeta SD mientras que la función SPI se restablece a la normalidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## Pines táctiles

Además de los pines funcionales comunes mencionados anteriormente, XIAO ESP32S3/XIAO ESP32S3 Sense también tiene 9 pines de detección táctil A0~A5, A8~A10.  

Podemos verificar si un pin ha sido tocado leyendo su valor analógico, lo cual es muy conveniente. El siguiente programa se utiliza para detectar si el pin A5 ha sido tocado.

```c
const int touch_pin = A5;
 
void setup(void) {
  Serial.begin(9600);
}
 
void loop(void) {
  Serial.print("Touch value: ");
  Serial.println(analogRead(touch_pin));
  delay(1000);
}
```

Después de cargar el programa, abre el monitor serial y establece la velocidad en baudios a 9600. Luego, toca el pin A5 y notarás que el valor de lectura analógica será significativamente mayor que el valor antes de tocarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## Pines USB

El ESP32-S3 es un microcontrolador que integra funcionalidades de Wi-Fi y Bluetooth, y sus pines D+ y D- se utilizan para admitir la comunicación USB. Específicamente, estos dos pines son líneas de señal diferencial utilizadas para la transmisión de datos a alta velocidad entre dispositivos y hosts USB 2.0.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

El pin D+ es la línea de polaridad positiva utilizada para enviar datos, mientras que el pin D- es la línea de polaridad negativa utilizada para enviar datos. Cuando un dispositivo USB se conecta a un host, el host detecta cambios de voltaje en estos dos pines para determinar el estado de conexión del dispositivo y la velocidad de transmisión. Durante la transmisión de datos, los pines D+ y D- transmiten alternadamente los bits de datos y las señales de sincronización para lograr una transmisión de datos confiable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## Pines JTAG

La interfaz JTAG (Joint Test Action Group) del ESP32-S3 es una interfaz de depuración y prueba que se puede utilizar para depuración y programación de hardware a muy bajo nivel durante el desarrollo, la depuración y las pruebas. La interfaz JTAG incluye un conjunto de líneas de señal estándar, que incluyen líneas de reloj, líneas de entrada de datos, líneas de salida de datos, líneas de selección de modo de prueba, líneas de reloj de modo de prueba, entre otras.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

La interfaz JTAG del ESP32-S3 se puede utilizar para los siguientes fines:

1. **Depuración**: La interfaz JTAG se puede usar para depurar y ejecutar paso a paso en el chip ESP32-S3, lo que ayuda a los desarrolladores a encontrar y resolver errores de código.

2. **Flasheo de programas**: A través de la interfaz JTAG, se pueden cargar programas o firmware de depuración en el chip ESP32-S3.

3. **Lectura del estado de la CPU**: La interfaz JTAG se puede usar para leer el estado de la CPU, el contenido de la memoria y los valores de los registros del chip ESP32-S3 para depuración y pruebas.

Es importante tener en cuenta que el uso de la interfaz JTAG requiere dispositivos de hardware y herramientas de software dedicados, así como conocimientos y habilidades profesionales correspondientes. Por lo tanto, en general, la interfaz JTAG solo se usa en escenarios específicos como desarrollo, depuración y pruebas. Para los usuarios generales, usar otras funciones e interfaces del ESP32-S3 ya es suficiente.

Si deseas saber más sobre la depuración JTAG, por favor consulta la [documentación oficial de ESP32](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html).

## Solución de problemas

### P1: ¿Por qué estoy obteniendo el siguiente error al usar el monitor serial?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

R: Si te encuentras con este tipo de error, por favor activa el interruptor **USB CDC On Boot**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

Este problema también puede manifestarse como una salida serial vacía en Arduino IDE 2.x, y también puede ser causado por esta misma razón.

### P2: ¿Qué características soporta o no soporta el ESP-32?

R: A continuación, se muestra una lista de las características soportadas/no soportadas por el [ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html). A partir del 10 de abril de 2023.

| Periférico     | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | Comentarios            |
|----------------|---------------|---------------|---------------|---------------|------------------------|
| ADC            | Sí            | Sí            | Sí            | Sí            |                        |
| Bluetooth      | Sí            | No soportado  | No soportado  | No soportado  | Bluetooth Clásico      |
| BLE            | Sí            | No soportado  | Sí            | Sí            |                        |
| DAC            | Sí            | Sí            | No soportado  | No soportado  |                        |
| Ethernet       | Sí            | No soportado  | No soportado  | No soportado  | (*)                    |
| GPIO           | Sí            | Sí            | Sí            | Sí            |                        |
| Sensor Hall    | Sí            | No soportado  | No soportado  | No soportado  |                        |
| I2C            | Sí            | Sí            | Sí            | Sí            |                        |
| I2S            | Sí            | Sí            | Sí            | Sí            |                        |
| LEDC           | Sí            | Sí            | Sí            | Sí            |                        |
| Motor PWM      | No            | No soportado  | No soportado  | No soportado  |                        |
| Contador de Pulso | No         | No            | No            | No            |                        |
| RMT            | Sí            | Sí            | Sí            | Sí            |                        |
| SDIO           | No            | No            | No            | No            |                        |
| SDMMC          | Sí            | No soportado  | No soportado  | Sí            |                        |
| Timer          | Sí            | Sí            | Sí            | Sí            |                        |
| Sensor de Temperatura | No    | Sí            | Sí            | Sí            |                        |
| Táctil         | Sí            | Sí            | No soportado  | Sí            |                        |
| TWAI           | No            | No            | No            | No            |                        |
| UART           | Sí            | Sí            | Sí            | Sí            |                        |
| USB            | No soportado  | Sí            | Sí            | Sí            | Solo ESP32-C3 CDC/JTAG |
| Wi-Fi          | Sí            | Sí            | Sí            | Sí            |                        |

### Q3: ¿Por qué siempre veo los mensajes de depuración del chip en el monitor serial?

R: Puedes intentar desactivar la salida de los mensajes de depuración utilizando el siguiente método: **Herramienta -> Nivel de depuración del núcleo: -> Ninguno** en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

Sin embargo, este método no siempre funciona, de hecho, la información de depuración del ESP32-S3 siempre se imprime desde el puerto serial, lo cual no se puede cambiar. Por favor, perdónalo, ¡simplemente está demasiado ansioso por hacerte saber que está funcionando correctamente!

### Q4: ¿Por qué, después de cortar la conexión de J3, todavía pruebo obtener los pines D8 y D9 altos? ¿Y la escritura en la tarjeta microSD todavía tiene una probabilidad de éxito?

En cuanto al diseño de la tarjeta SD, el circuito correcto debe tener resistores de pull-up para que la tarjeta microSD funcione correctamente. Si descubres que el nivel de los pines y la lectura y escritura de la tarjeta siguen siendo normales después de cortar J3, esto puede ser solo una situación afortunada. No te recomendamos leer ni escribir en la tarjeta en este caso, ya que podría provocar la pérdida de los datos escritos. Si bien los pines D8 y D9 pueden tener su nivel modificado escribiendo un nivel bajo después de cortar J3.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>







