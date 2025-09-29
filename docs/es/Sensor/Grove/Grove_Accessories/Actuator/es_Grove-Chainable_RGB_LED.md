---
title: Grove - LED RGB Encadenable
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Chainable_RGB_LED/
slug: /es/Grove-Chainable_RGB_LED
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**Grove - LED RGB Encadenable** está basado en el chip P9813 que es un controlador de LED de color completo. Proporciona 3 controladores de corriente constante así como salida modulada de 256 tonos de gris. Se comunica con un MCU usando transmisión de 2 cables (Datos y Reloj). Esta transmisión de 2 cables puede usarse para conectar en cascada módulos adicionales de **Grove - LED RGB Encadenable**. La regeneración de reloj incorporada mejora la distancia de transmisión. Este módulo Grove es adecuado para cualquier proyecto basado en LEDs coloridos.

Versión
---

| Revisión | Descripciones                                              | Lanzamiento      |Cómo Comprar|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1    | Lanzamiento público inicial (beta)                             | 5 de mayo, 2011  |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
| v2    | Reemplazar P9813S16 con P9813S14 y cambiar conector Grove de Vertical a horizontal | 19 de abril, 2016  |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-%E2%80%93-Chainable-RGB-Led-V2.0-p-2903.html)|

Especificaciones
-------------

- Voltaje de Operación: 5V
- Corriente de Operación: 20mA
- Protocolo de Comunicación: Serie

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Soportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

### Jugar con Arduino

Cuando obtienes Grove - Chainble RGB LED, puedes pensar cómo puedo encenderlo. Ahora te mostraremos esta demostración: todos los colores de RGB ciclan de manera uniforme.

Para completar esta demostración, puedes usar uno o más Grove - Chainable RGB LED. Ten en cuenta que la interfaz IN de un Grove - Chainable RGB LED debe conectarse a D7/D8 del Grove - Base Shield y su interfaz OUT conectarse a la interfaz IN de otro Grove - Chainable RGB LED, encadenando más LED de esta manera.

- Descarga [Chainable LED Library](https://github.com/pjpmarques/ChainableLED) e instálala en la Biblioteca de Arduino. Está el curso sobre [cómo instalar la Biblioteca de Arduino](/es/How_to_install_Arduino_Library) en la página wiki.
- Abre el ejemplo CycleThroughColors por la ruta:File->Examples->ChainableLED_master y súbelo a Seeeduino.

```

/* 
 * Example of using the ChainableRGB library for controlling a Grove RGB.
 * This code cycles through all the colors in an uniform way. This is accomplished using a HSB color space. 
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
    leds.setColorHSL(i, hue, 1.0, 0.5);
    
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

Puedes observar esta escena: los colores de cinco LED harán un degradado de manera consistente.

**Aplicación extendida:**
Basado en [Chainable LED Library](https://github.com/pjpmarques/ChainableLED), hemos diseñado esta demostración: el color RGB varía con la temperatura medida por Grove - temperature. El color RGB varía de verde a rojo cuando la temperatura va de 25 a 32. El código de prueba se muestra a continuación. Hazlo si estás interesado en ello.

```
    // demo of temperature -> rgbLED
    // temperature form 25 - 32, rgbLed from green -> red
    // Grove-temperature plu to A0
    // LED plug to D7,D8

    #include <Streaming.h>
    #include <ChainableLED.h>

    #define TEMPUP 32
    #define TEMPDOWN 25

    ChainableLED leds(7, 8, 1); // connect to pin7 and pin8 , one led

    int getAnalog() // get value from A0
    {
        int sum = 0;
        for(int i=0; i<32; i++)
        {
            sum += analogRead(A0);
        }

        return sum>>5;
    }

    float getTemp() // get temperature
    {
        float temperature = 0.0;
        float resistance = 0.0;
        int B = 3975; //B value of the thermistor

        int a = getAnalog();

        resistance = (float)(1023-a)*10000/a; //get the resistance of the sensor;
        temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15; //convert to temperature via datasheet ;
        return temperature;
    }

    void ledLight(int dta) // light led
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

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - LED RGB Encadenable al puerto D7 en un Base Shield

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Chainable_RGB_LED.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, verás el LED aparecer y desaparecer gradualmente.
:::

### Jugar con Raspberry Pi

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::
1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](/es/GrovePi_Plus).

3.Conexión

- Conecta el sensor al socket D7 del grovepi usando un cable grove.

4.Navega al directorio de las demos:

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

    # Connect first LED in Chainable RGB LED chain to digital port D7
    # In: CI,DI,VCC,GND
    # Out: CO,DO,VCC,GND
    pin = 7

    # I have 10 LEDs connected in series with the first connected to the GrovePi and the last not connected
    # First LED input socket connected to GrovePi, output socket connected to second LED input and so on
    numleds = 1  

    grovepi.pinMode(pin,"OUTPUT")
    time.sleep(1)

    # Chainable RGB LED methods
    # grovepi.storeColor(red, green, blue)
    # grovepi.chainableRgbLed_init(pin, numLeds)
    # grovepi.chainableRgbLed_test(pin, numLeds, testColor)
    # grovepi.chainableRgbLed_pattern(pin, pattern, whichLed)
    # grovepi.chainableRgbLed_modulo(pin, offset, divisor)
    # grovepi.chainableRgbLed_setLevel(pin, level, reverse)

    # test colors used in grovepi.chainableRgbLed_test()
    testColorBlack = 0   # 0b000 #000000
    testColorBlue = 1    # 0b001 #0000FF
    testColorGreen = 2   # 0b010 #00FF00
    testColorCyan = 3    # 0b011 #00FFFF
    testColorRed = 4     # 0b100 #FF0000
    testColorMagenta = 5 # 0b101 #FF00FF
    testColorYellow = 6  # 0b110 #FFFF00
    testColorWhite = 7   # 0b111 #FFFFFF

    # patterns used in grovepi.chainableRgbLed_pattern()
    thisLedOnly = 0
    allLedsExceptThis = 1
    thisLedAndInwards = 2
    thisLedAndOutwards = 3

    try:

        print "Test 1) Initialise"

        # init chain of leds
        grovepi.chainableRgbLed_init(pin, numleds)
        time.sleep(.5)

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set led 1 to green
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 0)
        time.sleep(.5)

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set led 10 to red
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 9)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 2a) Test Patterns - black"

        # test pattern 0 - black (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(1)


        print "Test 2b) Test Patterns - blue"

        # test pattern 1 blue
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlue)
        time.sleep(1)


        print "Test 2c) Test Patterns - green"

        # test pattern 2 green
        grovepi.chainableRgbLed_test(pin, numleds, testColorGreen)
        time.sleep(1)


        print "Test 2d) Test Patterns - cyan"

        # test pattern 3 cyan
        grovepi.chainableRgbLed_test(pin, numleds, testColorCyan)
        time.sleep(1)


        print "Test 2e) Test Patterns - red"

        # test pattern 4 red
        grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
        time.sleep(1)


        print "Test 2f) Test Patterns - magenta"

        # test pattern 5 magenta
        grovepi.chainableRgbLed_test(pin, numleds, testColorMagenta)
        time.sleep(1)


        print "Test 2g) Test Patterns - yellow"

        # test pattern 6 yellow
        grovepi.chainableRgbLed_test(pin, numleds, testColorYellow)
        time.sleep(1)


        print "Test 2h) Test Patterns - white"

        # test pattern 7 white
        grovepi.chainableRgbLed_test(pin, numleds, testColorWhite)
        time.sleep(1)


        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3a) Set using pattern - this led only"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set led 3 to red
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3b) Set using pattern - all leds except this"

        # change color to blue
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # set all leds except for 3 to blue
        grovepi.chainableRgbLed_pattern(pin, allLedsExceptThis, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3c) Set using pattern - this led and inwards"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set leds 1-3 to green
        grovepi.chainableRgbLed_pattern(pin, thisLedAndInwards, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3d) Set using pattern - this led and outwards"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set leds 7-10 to green
        grovepi.chainableRgbLed_pattern(pin, thisLedAndOutwards, 6)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4a) Set using modulo - all leds"

        # change color to black (fully off)
        grovepi.storeColor(0,0,0)
        time.sleep(.5)

        # set all leds black
        # offset 0 means start at first led
        # divisor 1 means every led
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # change color to white (fully on)
        grovepi.storeColor(255,255,255)
        time.sleep(.5)

        # set all leds white
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4b) Set using modulo - every 2"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set every 2nd led to red
        grovepi.chainableRgbLed_modulo(pin, 0, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)


        print "Test 4c) Set using modulo - every 2, offset 1"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set every 2nd led to green, offset 1
        grovepi.chainableRgbLed_modulo(pin, 1, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4d) Set using modulo - every 3, offset 0"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set every 3nd led to red
        grovepi.chainableRgbLed_modulo(pin, 0, 3)
        time.sleep(.5)

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set every 3nd led to green, offset 1
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # change color to blue
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # set every 3nd led to blue, offset 2
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4e) Set using modulo - every 3, offset 1"

        # change color to yellow
        grovepi.storeColor(255,255,0)
        time.sleep(.5)

        # set every 4nd led to yellow
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)


        print "Test 4f) Set using modulo - every 3, offset 2"

        # change color to magenta
        grovepi.storeColor(255,0,255)
        time.sleep(.5)

        # set every 4nd led to magenta
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 5a) Set level 6"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set leds 1-6 to green
        grovepi.write_i2c_block(0x04,[95,pin,6,0])
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 5b) Set level 7 - reverse"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set leds 4-10 to red
        grovepi.write_i2c_block(0x04,[95,pin,7,1])
        time.sleep(.5)


    except KeyboardInterrupt:
        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        break
    except IOError:
        print "Error"
```

- Ten en cuenta que hay algo de lo que te tienes que preocupar:

```
    pin = 7         #setting up the output pin
    numleds = 1     #how many leds you plug
```

- También todos los métodos que puedes ver en grovepi.py son:

```
    storeColor(red, green, blue)
    chainableRgbLed_init(pin, numLeds)
    chainableRgbLed_test(pin, numLeds, testColor)
    chainableRgbLed_pattern(pin, pattern, whichLed)
    chainableRgbLed_modulo(pin, offset, divisor)
    chainableRgbLed_setLevel(pin, level, reverse)
```

5.Run the demo.

```
    sudo python3 grove_chainable_rgb_led.py
```

6.Esta demostración puede no funcionar si tu grovepi no tiene el firmware más reciente, actualiza el firmware.

```
    cd yourpath/GrovePi/Firmware
    sudo ./firmware_update.sh
```

### Con Beaglebone Green

Para comenzar a editar programas que residen en BBG, puedes usar el IDE Cloud9.

Como un ejercicio simple para familiarizarse con el IDE Cloud9, crear una aplicación simple para hacer parpadear uno de los 4 LEDs programables por el usuario en el BeagleBone es un buen comienzo.

Si esta es tu primera vez usando el IDE Cloud9, por favor sigue este [**enlace**](/es/BeagleBone_Green).

**Paso1:** Configura el socket Grove - UART como un Socket Grove - GPIO, simplemente sigue este [**enlace**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html).

**Paso2:** Haz clic en el "+" en la parte superior derecha para crear un nuevo archivo.

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9_newfile.jpg)

**Paso3:** Copia y pega el siguiente código en la nueva pestaña

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
        "Send one bit at a time, starting with the MSB"
        for i in range(8):
            # If MSB is 1, write one and clock it, else write 0 and clock
            if (b & 0x80) != 0:
                GPIO.output(self.__data_pin, GPIO.HIGH)
            else:
                GPIO.output(self.__data_pin, GPIO.LOW)
            self.clk()
 
            # Advance to the next bit to send
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
 
        # Now must send the 3 colors
        self.sendByte(blue)
        self.sendByte(green)
        self.sendByte(red)
 
    def setColorRGB(self, led, red, green, blue):
        # Send data frame prefix (32x '0')
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
        # Send color data for each one of the leds
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
 
        # Terminate data frame (32x "0")
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
 
# Note: Use P9_22(UART2_RXD) and P9_21(UART2_TXD) as GPIO.
# Connect the Grove - Chainable RGB LED to UART Grove port of Beaglebone Green.
if __name__ == "__main__":
    rgb_led = ChainableLED(CLK_PIN, DATA_PIN, NUMBER_OF_LEDS)
 
    while True:
        # The first parameter: NUMBER_OF_LEDS - 1; Other parameters: the RGB values.
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

**Paso4:** Guarda el archivo haciendo clic en el icono del disco y dándole un nombre con la extensión .py.

**Paso5:** Conecta el LED RGB Encadenable Grove al socket UART Grove en BBG.

**Paso6:** Ejecuta el código. Encontrarás que el LED RGB está cambiando de color cada 2 segundos.

# Archivo eagle del LED RGB Encadenable V1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1%20(2).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Archivo eagle del LED RGB Encadenable V2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20(1).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Recursos

---------

- **[Librería]**[Librería de LED RGB Encadenable para el P9813](https://github.com/pjpmarques/ChainableLED)
- **[Librería]**[Repositorio Github para la Librería de LED RGB Encadenable (nueva)](https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED)
- **[Librería]** [Código CodeCraft](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable%20RGB%20LED.zip)
- **[Eagle]**[Archivo eagle del LED RGB Encadenable V1](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1.zip)
- **[Eagle]**[Archivo eagle del LED RGB Encadenable V2](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0.zip)
- **[Hoja de datos]**[Hoja de datos P9813](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/P9813_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Chainable_RGB_LED -->

## Proyectos

**Grove - Introducción al LED Encadenable**: Este proyecto muestra cómo conectar un LED encadenable a Grove.
<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-to-chainable-led-d668b7/embed' width='350'></iframe>

**Construye un dispositivo para explicar el modelo de color RGB**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/diy-a-device-for-explaining-rgb-color-model-496cbc/embed' width='350'></iframe>

**Acceso de Seguridad Usando Seeeduino Lotus** Cuando tocas la puerta o te acercas a la puerta, la puerta se abrirá automáticamente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/limanchen/security-access-using-seeeduino-lotus-7eb90f/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
