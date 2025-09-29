---
description: NFC_Shield_V2.0
title: NFC Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/NFC_Shield_V2.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<table align="center">
  <tbody>
    <tr>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_front.png" alt="pir" width={200} height="auto" /></p>
        </td>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_back.png" alt="pir" width={200} height="auto" /></p>
        </td>
    </tr>
  </tbody>
</table>

NFC (Near Field Communication) es una tecnología que se utiliza ampliamente. Algunas de las aplicaciones de NFC incluyen sistemas de control de acceso inalámbrico (por ejemplo, puertas sin llave y cerraduras), y pagos con dispositivos móviles (por ejemplo, registradoras de tienda que reciben información de pago a través de una aplicación de teléfono).

El NFC Shield cuenta con un módulo transceptor, PN532, que maneja la comunicación inalámbrica a 13.56MHz, esto significa que puedes leer y escribir una etiqueta de 13.56MHz con este shield o implementar intercambio de datos punto a punto (P2P) entre el shield y un teléfono inteligente.

Para esta nueva versión del shield hemos creado un área de antena PCB separada e independiente que te permite extender más fácilmente la interfaz NFC fuera del gabinete de tu circuito principal.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/NFC-Shield-V2.0-p-1370.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

Ideas de Aplicación
-------------------

Si quieres hacer algunos proyectos increíbles con el NFC Shield V2.0, aquí tienes algunos proyectos de referencia.

### Demo del NFC Shield

***Paper Man, un objeto interesante para interactuar con Android***

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Seeed-recipe-paper_man.jpg" alt="pir" width={600} height="auto" /></p>

[¡Hazlo AHORA!](https://www.seeedstudio.com/recipe/40-paper-man-an-interesting-object-to-interact-with-android.html)

[***Más Proyectos Increíbles con NFC Shield V2.0***](https://www.seeedstudio.com/recipe/index.php?query=NFC+Shield)

Características
---------------

- Uso del header ICSP para SPI. Esto significa que el shield funciona con las siguientes placas de desarrollo Arduino: Uno, Mega, Leonardo
- Comunicación NFC inalámbrica a 13.56MHz
- Protocolo SPI - interfaz que ahorra pines y requiere solo 4 pines
- Voltaje de Entrada: 5V del pin de 5V del Arduino
- Corriente Típica: 100mA
- Rango efectivo máximo de 5cm
- Soporta comunicación P2P
- Soporta protocolos ISO14443 Tipo A y Tipo B

Descripción General del Hardware
--------------------------------

Los pines del NFC shield y otros terminales se describen a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Pn532-nfc-shield-pin-description.png" alt="pir" width={600} height="auto" /></p>

**Interfaz del NFC shield**

- D10 y D9 se usan para la selección de chip SPI (CS/SS). D10 está conectado por defecto, para conectar D9 se requiere soldar la almohadilla SS a la almohadilla D9 y raspar la conexión entre SS y D10.
- D2 puede usarse para recibir la señal del pin de solicitud de interrupción (IRQ) del shield. La interrupción no está conectada por defecto, se requiere soldar las almohadillas "D2/INT0" e "IRQ".
- El shield obtiene su interfaz SPI (pines SPI MOSI, MISO y SCK) directamente del header ICSP del Arduino, esto significa que el shield funciona con los siguientes Arduinos: Uno, Mega y Leonardo.
- El terminal ANT1 es donde se conecta la antena NFC (incluida con el shield).
- El shield es alimentado por 5V de la placa Arduino.

La antena del NFC shield, incluida con el shield, es un módulo PCB separado que se conecta al shield mediante un cable. La antena es el área utilizada para recibir y transmitir información.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_Antanna_28x30.5.jpg" alt="pir" width={600} height="auto" /></p>

**Conexión del PCB de la antena NFC**

Configuración del NFC Shield
-----------------------------

### Instalación del Hardware

1. Conecta la Antena NFC al shield.
2. Apila el NFC Shield en tu placa de desarrollo Arduino y conecta la placa a una PC usando un cable USB.

### Instalación de Librerías de Software

- **Paso 1.**  Descarga [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Paso 2.**  Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería **Seeed Arduino NFC** para Arduino.

- **Paso 3.**  Abre el código "WriteTag" a través de la ruta: **File --> Examples --> WriteTag**.

- **Paso 4.**  Modifica el código como se muestra a continuación para habilitar la comunicación SPI.

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}
```

**Menú de librerías disponibles de Arduino**

Ejemplos/Aplicaciones del Shield NFC
------------------------------------

### Ejemplo: NFC WriteTag

Este ejemplo te mostrará cómo usar el shield NFC para escanear una etiqueta NFC y mostrar su información/datos.

En el IDE de Arduino copia, pega y luego sube el código de abajo a tu placa.

#### Código

```cpp
#include <NfcAdapter.h>
#include <PN532/PN532/PN532.h>
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}

void loop() {
    SERIAL.println("\nPlace a formatted Mifare Classic or Ultralight NFC tag on the reader.");
    if (nfc.tagPresent()) {
        NdefMessage message = NdefMessage();
        message.addUriRecord("http://arduino.cc");

        bool success = nfc.write(message);
        if (success) {
            SERIAL.println("Success. Try reading this tag with your phone.");
        } else {
            SERIAL.println("Write failed.");
        }
    }
    delay(5000);
}
```

Para probar el código:

1. Abre la ventana del monitor serie de Arduino
2. Establece la velocidad de baudios a 115200
3. Mantén una etiqueta NFC sobre el área de la antena NFC
4. El escudo NFC escaneará la etiqueta y deberías poder ver el UID de la etiqueta NFC, el tipo de etiqueta y el mensaje (si está disponible) en la ventana del monitor serie. Ve la figura a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Nfc-pn532-output-example-1.png" alt="pir" width={600} height="auto" /></p>

<!-- **Example #1 serial communication window output when scanning an NFC tag.** -->

<!--  ### Example #2: NFC(keyless) Door Lock

Este ejemplo te mostrará cómo usar una etiqueta NFC como llave para abrir una puerta o una cerradura. El mecanismo de la puerta/cerradura se dejará a tu imaginación, solo cubriremos la parte del código NFC.

1.  Do Example #1: NFC Tag Scan, above, to get your NFC tag's UID.
2.  Optional Step - connect a green LED to pin 3 as shown in the figure/schematic below. We'll use this LED to signal a successful match in keys.
3.  Optional Step – connect a red LED to pin 4 as shown in the figure/schematic below. We'll use this LED to signal a mismatched key.
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm.PNG" alt="pir" width={600} height="auto" /></p>

    **NFC lock circuit**
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm-real.png" alt="pir" width={600} height="auto" /></p>

    **NFC lock circuit**

4. En el Arduino IDE crea un nuevo sketch y copia, pega y sube el código de abajo a tu placa Arduino reemplazando la constante de cadena myUID con el UID de tu etiqueta obtenido del Ejemplo \#1.

#### Code
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    String const myUID = "1B B3 C6 EF"; // replace this UID with your NFC tag's UID
    int const greenLedPin = 3; // green led used for correct key notification
    int const redLedPin = 4; // red led used for incorrect key notification

    void setup(void) {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm

        // make LED pins outputs
        pinMode(greenLedPin,OUTPUT);
        pinMode(redLedPin,OUTPUT);

        // turn off the LEDs
        digitalWrite(greenLedPin,LOW);
        digitalWrite(redLedPin,LOW);
    }

    void loop(void) {

        Serial.println("Scanning...");
        if (nfc.tagPresent()) // check if an NFC tag is present on the antenna area
        {
            NfcTag tag = nfc.read(); // read the NFC tag
            String scannedUID = tag.getUidString(); // get the NFC tag's UID

            if( myUID.compareTo(scannedUID) == 0) // compare the NFC tag's UID with the correct tag's UID (a match exists when compareTo returns 0)
            {
              // The correct NFC tag was used
              Serial.println("Correct Key");
              // Blink the green LED and make sure the RED led is off
              digitalWrite(greenLedPin,HIGH);
              digitalWrite(redLedPin,LOW);

              delay(500);
              digitalWrite(greenLedPin,LOW);
              delay(500);
              digitalWrite(greenLedPin,HIGH);
              delay(500);
              digitalWrite(greenLedPin,LOW);
              // put your here to trigger the unlocking mechanism (e.g. motor, transducer)
            }else{
              // an incorrect NFC tag was used
              Serial.println("Incorrect key");
              // blink the red LED and make sure the green LED is off
              digitalWrite(greenLedPin,LOW);
              digitalWrite(redLedPin,HIGH);

              delay(500);
              digitalWrite(redLedPin,LOW);
              delay(500);
              digitalWrite(redLedPin,HIGH);
              delay(500);
              digitalWrite(redLedPin,LOW);
              // DO NOT UNLOCK! an incorrect NFC tag was used.
              // put your code here to trigger an alarm (e.g. buzzard, speaker) or do something else
            }
        }
        delay(2000);
    }
```

Para probar el código/aplicación:

1.  Abre la ventana del monitor serie de Arduino
2.  Mantén la etiqueta NFC con la clave correcta sobre el área de la antena.
3.  El LED verde debería encenderse y la ventana serie debería imprimir "Correct Key"
4.  Ahora mantén una NFC diferente sobre el área de la antena
5.  El LED rojo debería encenderse y la ventana serie debería imprimir "Incorrect Key"
 -->
<!-- ### Ejemplo #3: Cómo usar el Pin de Interrupción (Ejemplo #2: Revisado)

Aunque el código del Ejemplo #2 anterior hace lo que necesitamos, hay un enfoque más elegante para manejar las detecciones de etiquetas NFC. En este ejemplo te mostraremos cómo hacer uso del pin de interrupción en el shield NFC para que en lugar de sondear el shield (preguntando "¿hay una etiqueta presente?") esperemos a que el shield le diga al Arduino que una etiqueta está disponible para ser leída. ¿Por qué querrías hacer esto? Hay muchas razones y las interrupciones son un tema completamente diferente, pero una razón que puede convencerte es que tu proyecto/circuito ahorrará batería ya que no estamos activando el circuito del shield continuamente.

#### Modificación de Hardware

El pin de interrupción (IRQ) del shield NFC está desconectado del pin digital 2 (D2) del Arduino, para conectar el IRQ y el pin D2 juntos, procede a soldar la almohadilla en el shield etiquetada como "D2/INT0 IRQ".

#### Código

Sube el siguiente código a tu placa Arduino:

Para probar el código/aplicación:

1.  Si lo deseas, conecta los LEDs como se muestra en el Ejemplo \#2 anterior.
2.  Abre la ventana del monitor serie de Arduino
3.  Mantén la etiqueta NFC con la clave correcta sobre el área de la antena.
4.  El LED verde debería encenderse y la ventana serie debería imprimir "Correct Key"
5.  Ahora mantén una NFC diferente sobre el área de la antena
6.  El LED rojo debería encenderse y la ventana serie debería imprimir "Incorrect Key"

La ventana serie de nuestra prueba de este código se muestra a continuación, la tuya debería ser similar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-3-nfc-pn532-shield-interrupt-example.png" alt="pir" width={600} height="auto" /></p>

**Salida de la ventana de comunicación serie del ejemplo 3.**

<!-- ### Ejemplo #4: Escribir un Mensaje NDEF a una Etiqueta

Las etiquetas NFC son capaces de almacenar datos, la cantidad de datos depende de cada etiqueta. En este ejemplo almacenaremos dos cadenas/mensajes en una etiqueta, luego podrás leer este mensaje con el código en *Ejemplo \#6: Leer un Mensaje NDEF Desde una Etiqueta*.

Sube el siguiente código a tu placa de desarrollo Arduino.

:::note
Si tu etiqueta NFC no está formateada correctamente (se mostrará "Message write failed" en la ventana de comunicación serie) necesitarás ver si tu etiqueta puede ser formateada con el código en 
:::

#### Código
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
      Serial.println("Place a formatted Mifare Classic NFC tag on the reader.");
      if(nfc.tagPresent())
      {
        NdefMessage message = NdefMessage();
        message.addUriRecord("Hello, world!");
        message.addUriRecord("How are you today?");

        bool success = nfc.write(message);
        if(success)
        {
          Serial.println("The message was successfully written to the tag.");Ho
        }else{
          Serial.println("Message write failed.");
        }
      }

      delay(5000);
    }
```

Para probar el código anterior:

1.  Abre una ventana de comunicación serie de Arduino
2.  Mantén la etiqueta NFC sobre el área de la antena del shield NFC y espera a que aparezca el mensaje de éxito o fallo como se muestra en la figura a continuación.
3.  Retira la etiqueta NFC del área de la antena tan pronto como se muestre el mensaje de éxito para evitar una reescritura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-4-write-ndef-message-to-tag.png" alt="pir" width={600} height="auto" /></p>

**Ventana de comunicación serie para el ejemplo de mensaje NDEF escrito en la tarjeta.**

<!-- ### Example #5: Format a Tag as NDEF

Tu nueva etiqueta NFC podría no estar formateada como NDEF inicialmente. Para formatear una etiqueta como NDEF sube el siguiente código a tu placa de desarrollo Arduino:

#### Code
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
        Serial.println("Place an unformatted Mifare Classic tag on the reader.");
        if (nfc.tagPresent()) {

            bool success = nfc.format();
            if (success) {
              Serial.println("Success, tag formatted as NDEF.");
            } else {
              Serial.println("Format failed.");
            }

        }
        delay(5000);
    }
```

Para probar/ejecutar el código:

1.  Abre la ventana de comunicación serie de Arduino.
2.  Mantén la etiqueta NFC que deseas formatear sobre el área de la antena del escudo NFC.
3.  Espera a que aparezca el mensaje de éxito o fallo como se muestra en la figura a continuación.
4.  Retira la etiqueta NFC del área de la antena para evitar un reformateo.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Si tu etiqueta falló al formatearse, inténtalo de nuevo. Si falla, tu etiqueta no es capaz de formatearse como NDEF.
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-5-format-nfc-tag-as-ndef.png" alt="pir" width={600} height="auto" /></p>

**Salida de la ventana de comunicación serie al formatear una etiqueta NFC a NDEF.**

```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
      Serial.println("\nScan an NFC tag\n");
      if (nfc.tagPresent()) // Do an NFC scan to see if an NFC tag is present
      {
          NfcTag tag = nfc.read(); // read the NFC tag
          if(tag.hasNdefMessage())
          {
            NdefMessage message = tag.getNdefMessage();
            for(int i=0;i<message.getRecordCount();i++)
            {
              NdefRecord record = message.getRecord(i);
              int payloadLength = record.getPayloadLength();
              byte payload[payloadLength];
              record.getPayload(payload);
              Serial.write(payload,payloadLength);
            }
          }
      }
      delay(500); // wait half a second (500ms) before scanning again (you may increment or decrement the wait time)
    }
```

Para probar el código anterior:

1.  Abre una ventana de comunicación serie de Arduino
2.  Mantén una etiqueta NFC con un mensaje NDEF sobre el área de la antena del escudo NFC.
3.  El mensaje NDEF escrito en la etiqueta debería mostrarse como se muestra en la figura a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-6-read-ndef-message.png" alt="pir" width={600} height="auto" /></p>

**Salida de la ventana de comunicación serie para lectura de mensaje NDEF**
 -->
<!-- ### Ejemplo #7: Cómo Cambiar el Pin de Selección de Chip de D10 a D9

#### Modificación de Hardware

1.  Raspa la conexión de las almohadillas etiquetadas "SS" y "D10" en el escudo
2.  Conecta/suelda las almohadillas "SS" y "D9" en el escudo.

Entonces puedes usar el mismo código en los ejemplos anteriores pero con el pin 9 en lugar del 10 para la interfaz PN532:

#### Código

    PN532_SPI interface(SPI, 9); // crear una interfaz SPI para el escudo con el terminal SPI CS en el pin digital 9
 -->
<!-- ### Ejemplo #8: Usar Dos Escudos NFC Con Una Placa Arduino

#### Modificación de Hardware

1.  Realiza la modificación de hardware descrita en el Ejemplo \#7 en uno de los dos escudos.
2.  Apila ambos escudos en la Placa Arduino.

Ahora puedes crear dos objetos NFC separados, uno para cada escudo, como sigue:

#### Código
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi1(SPI, 10); //create a SPI interface for the shield with the SPI CS terminal at digital pin 10
	NfcAdapter nfc1 = NfcAdapter(pn532spi1); create an NFC adapter object for shield one
	PN532_SPI pn532spi2(SPI, 9); //create a SPI interface for the shield with the SPI CS terminal at digital pin 9
	NfcAdapter nfc2 = NfcAdapter(pn532spi2); create an NFC adapter object for shield two
	
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

``` 
 -->

## Preguntas Frecuentes

**P1: ¿Cuál es la longitud del cable? ¿Y qué tan largo puede ser si quiero uno más largo?**

R1: El cable que vendemos con el shield NFC es de 12cm. Si quieres uno más largo, por favor que no sea más de 15cm con un conector IPX/U.FL.

**P2: ¿Se pueden agregar dos o más antenas al NFC Shield V2.0 (SKU: 113030001)?**

R2: El shield NFC v2 está basado en el chip PN532. Ten en cuenta que el diseño solo soporta una antena.

## Visor Online del Esquemático del Archivo Eagle del NFC Shield v2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor Online del Esquemático del Archivo Eagle del NFC Shield v2.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Esquemático del NFC Shield v2.0](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_Schematic.pdf)
- [Archivo Eagle del NFC Shield v2.0](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip)
- [Esquemático del NFC Shield v2.1](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1.pdf)
- [Archivo Eagle del NFC Shield v2.1](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip)
- [Hoja de Datos del PN532](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/PN532.pdf)
- [FAQ del NFC Shield](http://support.seeedstudio.com/knowledgebase/articles/462025-nfc-shield-sku-sld01097p)
- [Librería Arduino NFC de Seeed](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)
- [Librería PN532](https://github.com/Seeed-Studio/PN532)aaa

## Proyecto

**Paper Man** Una forma interesante de comunicarse con tu dispositivo Android a través de la tecnología NFC.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/xiaobo__/paper-man-0a6833/embed" width={350} />

**Auto Remoto Controlado por Tarjeta NFC** Desafía tu coordinación: construye tu propio auto controlado por NFC

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/litliao/nfc-card-controlled-remote-car-af27c9/embed" width={350} />

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/NFC_Shield_V2.0 -->

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
