---
description: LED RGB Encadenable - Grove está basado en el chip P9813, que es un controlador LED de todos los colores.
title: LED RGB Encadenable - Grove
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Chainable_RGB_LED_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**LED RGB Encadenable - Grove** está basado en el chip P9813, que es un controlador LED de todos los colores. Proporciona tres controladores de corriente constante, así como una salida modulada de 256 tonos de gris. Se comunica con un MCU mediante transmisión de dos hilos (datos y reloj). Esta transmisión se puede utilizar para conectar otros módulos **LED RGB - Grove** en cascada. La regeneración del reloj incorporado mejora la distancia de transmisión. Este módulo Grove es adecuado para cualquier proyecto colorido basado en LED.

## Versión

| Número | Descripción                                                                            | Lanzamiento   | Obtener                                                                                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| v1     | Lanzamiento inicial (beta)                                                             | 5 Mayo 2011   | [![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)                 |
| v2     | Reemplaza P9813S16 con P9813S14 y se cambia el conector Grove de vertical a horizontal | 19 Abril 2016 | [![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-%E2%80%93-Chainable-RGB-Led-V2.0-p-2903.html) |

## Especificaciones

- Voltaje de operación: 5V
- Corriente de operación: 20mA
- Protocolo de comunicación: Serial

Consejo:
Para más información sobre los módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                        | Wio                                                                                                 | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Pimeros pasos

### Juega con [Arduino](/Arduino "Arduino")

En este demo te enseñaremos a encender los LED RGB en todos los colores de los ciclos RGB de manera uniforme.

Para completar este demo, puedes usar uno o más LEDs RGB - Grove. Tenga en cuenta que la interfaz IN de este módulo debe conectarse a D7/D8 del [Shield Base - Grove](/Base_Shield_V2 "Grove - Base Shield") y la interfaz OUT se conecta a la interfaz IN de otro LED RGB - Grove, encadenando más LEDs de esta manera.

- Descarga [LED Encadenable Librería](https://github.com/pjpmarques/ChainableLED) e instala en librería de Arudino. Si no sabes cómo hacerlo, visita [Cómo instalar librerías en Arduino](/How_to_install_Arduino_Library).
- Abre el ejemplo CycleThroughColors con el path: Archivo->Ejemplos->ChainableLED_master y cárgalo al Seeeduino.

```

/*
 * Ejemplo usando la librería  ChainableRGB para controlar un RGB Grove.
 * Este código muestra todos los colores de manera uniforme. Esto se logra utilizando un espacio de color HSB.
 */


#include <ChainableLED.h>

#define NUM_LEDS  5

ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  leds.init();
}

float hue = 0.0;
boolean up = true;

void loop()
{
  for (byte i=0; i<NUM_LEDS; i++)
    leds.setColorHSB(i, hue, 1.0, 0.5);

  delay(50);

  if (up)
    hue+= 0.025;
  else
    hue-= 0.025;

  if (hue>=1.0 && up)
    up = false;
  else if (hue<=0.0 && !up)
    up = true;
}

```

Podrás observar los colores de cinco LED degradándose constantemente.

**Otra aplicación:**
Basado en la [Librería Chainable LED](https://github.com/pjpmarques/ChainableLED), hemos diseñado este demo: El color RGB varía con la temperatura medida por el sensor de temperatura Grove. Varía de verde a rojo cuando la temperatura va de 25 a 32. El código se muestra a continuación.

```
    // demo de temperatura -> rgbLED
    // temperatura de 25 - 32, rgb Led de verde -> rojo
    // Grove-temperatura conectado a A0
    // LED conectado a D7,D8

    #include <Streaming.h>
    #include <ChainableLED.h>

    #define TEMPUP 32
    #define TEMPDOWN 25

    ChainableLED leds(7, 8, 1); // conectar a pin7 y pin8 , un led

    int getAnalog() // obtener valor de A0
    {
        int sum = 0;
        for(int i=0; i<32; i++)
        {
            sum += analogRead(A0);
        }

        return sum>>5;
    }

    float getTemp() // obtener temperatura
    {
        float temperature = 0.0;
        float resistance = 0.0;
        int B = 3975; //B valor del termistor

        int a = getAnalog();

        resistance = (float)(1023-a)*10000/a; //obtener la resistencia del sensor;
        temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15; //convertir a temperature con datasheet ;
        return temperature;
    }

    void ledLight(int dta) // luz del led
    {

        dta = dta/4; // 0 - 255

        int colorR = dta;
        int colorG = 255-dta;
        int colorB = 0;

        leds.setColorRGB(0, colorR, colorG, colorB);
    }

    void setup()
    {
        Serial.begin(38400);
        cout << "hello world !" << endl;
    }

    void loop()
    {
        float temp = getTemp();
        int nTemp = temp*100;

        nTemp = nTemp > TEMPUP*100 ? TEMPUP*100 : (nTemp < TEMPDOWN*100 ? TEMPDOWN*100 : nTemp);
        nTemp = map(nTemp, TEMPDOWN*100, TEMPUP*100, 0, 1023);
        ledLight(nTemp);
        delay(100);
    }
```

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el LED RGB - Grove al puerto D7 del Shield Base

**Paso 2.** Conecta el Shield Base al Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es la primera vez que usas Codecraft, visita [Guía de Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra los bloques como se muestra en la imagen o descarga el archivo cdc que se encuentra al final de esta página.

![](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/img/Chainable_RGB_LED.png)

Carga el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código termine de cargarse, verás prender y apagar.

### Juega con Raspberry Pi

1.Debes tener una Raspberry pi y un grovepi o grovepi+.

2.Debes haber completado la configuración del entorno de desarrollo, si no sabes cómo, haz click [aquí](/GrovePi_Plus).

3.Conexión

- Conecta el módulo al grovepi puerto D7 usando un cable Grove.

4.Navegue al directorio de demos:

```
    cd yourpath/GrovePi/Software/Python/
```

- Para ver el código

```
     nano grove_chainable_rgb_led.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Conecta el primer LED de la cadena LED RGB encadenable al puerto digital D7.
    # In: CI,DI,VCC,GND
    # Out: CO,DO,VCC,GND
    pin = 7

    # Tengo 10 LED conectados en serie con el primero conectado al GrovePi y el último no conectado
    # Primer pin de entrada LED conectado a GrovePi, pin de salida conectado a la segunda entrada de LED, etc.
    numleds = 1

    grovepi.pinMode(pin,"OUTPUT")
    time.sleep(1)

    # LED RGB encadenable métodos
    # grovepi.storeColor(red, green, blue)
    # grovepi.chainableRgbLed_init(pin, numLeds)
    # grovepi.chainableRgbLed_test(pin, numLeds, testColor)
    # grovepi.chainableRgbLed_pattern(pin, pattern, whichLed)
    # grovepi.chainableRgbLed_modulo(pin, offset, divisor)
    # grovepi.chainableRgbLed_setLevel(pin, level, reverse)

    # colores de prueba utilizados en grovepi.chainableRgbLed_test()
    testColorBlack = 0   # 0b000 #000000
    testColorBlue = 1    # 0b001 #0000FF
    testColorGreen = 2   # 0b010 #00FF00
    testColorCyan = 3    # 0b011 #00FFFF
    testColorRed = 4     # 0b100 #FF0000
    testColorMagenta = 5 # 0b101 #FF00FF
    testColorYellow = 6  # 0b110 #FFFF00
    testColorWhite = 7   # 0b111 #FFFFFF

    # patrones usados en grovepi.chainableRgbLed_pattern()
    thisLedOnly = 0
    allLedsExceptThis = 1
    thisLedAndInwards = 2
    thisLedAndOutwards = 3

    try:

        print "Test 1) Initialise"

        # inicializa la cadena de leds
        grovepi.chainableRgbLed_init(pin, numleds)
        time.sleep(.5)

        # cambia color a verde
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # configura led 1 a verde
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 0)
        time.sleep(.5)

        # cambia color a rojo
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # configura led 10 a rojo
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 9)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 2a) Test Patterns - black"

        # prueba patrón 0 - negro (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(1)


        print "Test 2b) Test Patterns - blue"

        # prueba patrón 1 azul
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlue)
        time.sleep(1)


        print "Test 2c) Test Patterns - green"

        # prueba patrón 2 verde
        grovepi.chainableRgbLed_test(pin, numleds, testColorGreen)
        time.sleep(1)


        print "Test 2d) Test Patterns - cyan"

        # prueba patrón 3 cian
        grovepi.chainableRgbLed_test(pin, numleds, testColorCyan)
        time.sleep(1)


        print "Test 2e) Test Patterns - red"

        # prueba patrón 4 rojo
        grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
        time.sleep(1)


        print "Test 2f) Test Patterns - magenta"

        # prueba patrón 5 magenta
        grovepi.chainableRgbLed_test(pin, numleds, testColorMagenta)
        time.sleep(1)


        print "Test 2g) Test Patterns - yellow"

        # prueba patrón 6 amarillo
        grovepi.chainableRgbLed_test(pin, numleds, testColorYellow)
        time.sleep(1)


        print "Test 2h) Test Patterns - white"

        # prueba patrón 7 blanco
        grovepi.chainableRgbLed_test(pin, numleds, testColorWhite)
        time.sleep(1)


        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3a) Set using pattern - this led only"

        # cambia color a rojo
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # configura led 3 a rojo
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 2)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3b) Set using pattern - all leds except this"

        # cambia color a azul
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # configura todos los led a azul excepto el 3
        grovepi.chainableRgbLed_pattern(pin, allLedsExceptThis, 3)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3c) Set using pattern - this led and inwards"

        # cambia color a verde
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # configura leds 1-3 a verde
        grovepi.chainableRgbLed_pattern(pin, thisLedAndInwards, 2)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3d) Set using pattern - this led and outwards"

        # cambia color a verde
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # configura leds 7-10 a verde
        grovepi.chainableRgbLed_pattern(pin, thisLedAndOutwards, 6)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todos apagados)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4a) Set using modulo - all leds"

        # cambia color a negro (todo apagado)
        grovepi.storeColor(0,0,0)
        time.sleep(.5)

        # configura todos los leds a negro
        # offset 0 significa inicia con el primer led
        # divisor 1 signigica todos los leds
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # cambia color a blanco (todo encendido)
        grovepi.storeColor(255,255,255)
        time.sleep(.5)

        # configura todos los leds a blanco
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todo apagado)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4b) Set using modulo - every 2"

        # cambia color a rojo
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # configura cada 2do led a rojo
        grovepi.chainableRgbLed_modulo(pin, 0, 2)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)


        print "Test 4c) Set using modulo - every 2, offset 1"

        # cambia el color a verde
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # configura cada 2do led a verde, offset 1
        grovepi.chainableRgbLed_modulo(pin, 1, 2)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todo apagado)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4d) Set using modulo - every 3, offset 0"

        # cambia color a rojo
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # configura cada 3er led a rojo
        grovepi.chainableRgbLed_modulo(pin, 0, 3)
        time.sleep(.5)

        # cambia color a verde
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # configura cada 3er led a verde, offset 1
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # cambia color a azul
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # configura cada 3er led a azul, offset 2
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # pausa para que veas lo que pasa

        time.sleep(2)

        # reset (todo apagado)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4e) Set using modulo - every 3, offset 1"

        # cambia color a amarillo
        grovepi.storeColor(255,255,0)
        time.sleep(.5)

        # configura cada 4to led a amarillo
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)


        print "Test 4f) Set using modulo - every 3, offset 2"

        # cambia color a magenta
        grovepi.storeColor(255,0,255)
        time.sleep(.5)

        # configura cada 4to led a magenta
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todo apagado)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 5a) Set level 6"

        # cambia color a verde
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # configura leds 1-6 a verde
        grovepi.write_i2c_block(0x04,[95,pin,6,0])
        time.sleep(.5)

        # pausa para que veas lo que pasa
        time.sleep(2)

        # reset (todo apagado)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 5b) Set level 7 - reverse"

        # cambia color a rojo
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # configura leds 4-10 a rojo
        grovepi.write_i2c_block(0x04,[95,pin,7,1])
        time.sleep(.5)


    except KeyboardInterrupt:
        # reset (todo apagado)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        break
    except IOError:
        print "Error"
```

- Toma en cuenta que hay algo de lo que debes preocuparte:

```
    pin = 7         #configurando pin de salida
    numleds = 1     #cantidad de leds que conectas
```

- Todos los métodos que puedes ver en grovepi.py son:

```
    storeColor(red, green, blue)
    chainableRgbLed_init(pin, numLeds)
    chainableRgbLed_test(pin, numLeds, testColor)
    chainableRgbLed_pattern(pin, pattern, whichLed)
    chainableRgbLed_modulo(pin, offset, divisor)
    chainableRgbLed_setLevel(pin, level, reverse)
```

5.Corre el demo.

```
    sudo python grove_chainable_rgb_led.py
```

Es posible que este demo no funcione si tu grovepi no tiene el firmware más reciente. Actualízalo:

```
    cd yourpath/GrovePi/Firmware
    sudo ./firmware_update.sh
```

### Juega con Beaglebone Green

Para comenzar a editar programas en BBG, puedes usar Cloud9 IDE.

Para familiarizarse con el IDE de Cloud9, una buena manera de comenzar es creando una aplicación simple para parpadear uno de los 4 LED programables.

Si es la primera vez que usas Cloud9 IDE, visita este [**link**](/BeagleBone_Green).

**Paso 1:** Configura el pin UART - Grove como GPIO - Grove. Sigue este [**link**](http://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html).

**Paso 2:** Haz click en el "+" en la esquina superior derecha para crear un nuevo archivo.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Chainable_RGB_LED/master/img/C9-create-tab.png)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Chainable_RGB_LED/master/img/C9_newfile.jpg)

**Paso 3:** Copia y pega el siguiente código en la nueva pestaña.

```
import time
import Adafruit_BBIO.GPIO as GPIO
 
CLK_PIN = "P9_22"
DATA_PIN = "P9_21"
NUMBER_OF_LEDS = 1
 
class ChainableLED():
    def __init__(self, clk_pin, data_pin, number_of_leds):
        self.__clk_pin = clk_pin
        self.__data_pin = data_pin
        self.__number_of_leds = number_of_leds
 
        GPIO.setup(self.__clk_pin, GPIO.OUT)
        GPIO.setup(self.__data_pin, GPIO.OUT)
 
        for i in range(self.__number_of_leds):
            self.setColorRGB(i, 0, 0, 0)
 
    def clk(self):
        GPIO.output(self.__clk_pin, GPIO.LOW)
        time.sleep(0.00002)
        GPIO.output(self.__clk_pin, GPIO.HIGH)
        time.sleep(0.00002)
 
    def sendByte(self, b):
        "Envía un bit a la vez, empezando con MSB"
        for i in range(8):
            # Si MSB es 1, escribe 1 y registra, de lo contrario escribe 0 y registra
            if (b & 0x80) != 0:
                GPIO.output(self.__data_pin, GPIO.HIGH)
            else:
                GPIO.output(self.__data_pin, GPIO.LOW)
            self.clk()
 
            # Avanza al siguiente bit para mandar
            b = b << 1
 
    def sendColor(self, red, green, blue):
        "Start by sending a byte with the format '1 1 /B7 /B6 /G7 /G6 /R7 /R6' "
        #prefix = B11000000
        prefix = 0xC0
        if (blue & 0x80) == 0:
            #prefix |= B00100000
            prefix |= 0x20
        if (blue & 0x40) == 0:
            #prefix |= B00010000
            prefix |= 0x10
        if (green & 0x80) == 0:
            #prefix |= B00001000
            prefix |= 0x08
        if (green & 0x40) == 0:
            #prefix |= B00000100
            prefix |= 0x04
        if (red & 0x80) == 0:
            #prefix |= B00000010
            prefix |= 0x02
        if (red & 0x40) == 0:
            #prefix |= B00000001
            prefix |= 0x01
        self.sendByte(prefix)
 
        # Ahora manda los 3 colores
        self.sendByte(blue)
        self.sendByte(green)
        self.sendByte(red)
 
    def setColorRGB(self, led, red, green, blue):
        # Envía prefijo de marco de datos (32x '0')
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
        # Envía datos de color para cada led
        for i in range(self.__number_of_leds):
            '''
            if i == led:
                _led_state[i*3 + _CL_RED] = red;
                _led_state[i*3 + _CL_GREEN] = green;
                _led_state[i*3 + _CL_BLUE] = blue;
            sendColor(_led_state[i*3 + _CL_RED],
                      _led_state[i*3 + _CL_GREEN],
                      _led_state[i*3 + _CL_BLUE]);
            '''
            self.sendColor(red, green, blue)
 
        # Terminar marco de datos (32x "0")
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
 
# Nota: Usa P9_22(UART2_RXD) y P9_21(UART2_TXD) como GPIO.
# Conecta el LED RGB - Grove al puerto UART- Grove de Beaglebone Green.
if __name__ == "__main__":
    rgb_led = ChainableLED(CLK_PIN, DATA_PIN, NUMBER_OF_LEDS)
 
    while True:
        # Primer parámetro: NUMBER_OF_LEDS - 1; Other parameters: the RGB values.
        rgb_led.setColorRGB(0, 255, 0, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 255, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 0, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 255, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 0, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 255, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 255, 255)
        time.sleep(2)
```

**Paso 4:** Guarda el archivo dando click en el icono de disco y asignándole un nombre con la extensión .py

**Paso 5:** Conecta el LED RGB - Grove al pin UART en BBG.

**Paso 6:** Corre el código. Podrás ver el LED RGB cambiar de color cada 2 segundos.

## Recursos

- **[Librería]**[LED RGB librería para P9813](https://github.com/pjpmarques/ChainableLED)
- **[Librería]**[Repositorio de Github para LED RGB Librería (nueva)](https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED)
- **[Librería]** [CodeCraft cdc](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/Chainable%20RGB%20LED.zip)
- **[Eagle]**[ LED RGB archivo eagle V1](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/Chainable_RGB_LED_eagle_file%20V1.zip)
- **[Eagle]**[LED RGB archivo eagle V2](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0.zip)
- **[PDF]**[ LED RGB archivo SCH V1](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/CRGBled%20v1_SCH.pdf)
- **[PDF]**[LED RGB archivo SCH V2](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20SCH.pdf)
- **[PDF]**[LED RGB archivo PCB V1](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/CRGBled%20V1_PCB.pdf)
- **[PDF]**[LED RGB archivo PCB V2](https://github.com/SeeedDocument/Grove-Chainable_RGB_LED/raw/master/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20PCB.pdf)
- **[Datasheet]**[P9813 Hoja de datos](https://raw.githubusercontent.com/SeeedDocument/Grove-Chainable_RGB_LED/master/res/P9813_datasheet.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Chainable_RGB_LED -->

## Proyectos

**Introducción al LED encadenable - Grove**: Este proyecto muestra cómo conectar los LED encadenables Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-to-chainable-led-d668b7/embed' width='350'></iframe>

**Dispositivo DIY para explicar el modelo de color RGB**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/diy-a-device-for-explaining-rgb-color-model-496cbc/embed' width='350'></iframe>

**Acceso de seguridad utilizando Seeeduino Lotus** Cuando tocas la puerta o estés cerca de ella, se abrirá automáticamente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/limanchen/security-access-using-seeeduino-lotus-7eb90f/embed' width='350'></iframe>

## Soporte técnico

Envía cualquier problema técnico o duda a nuestro [foro](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
