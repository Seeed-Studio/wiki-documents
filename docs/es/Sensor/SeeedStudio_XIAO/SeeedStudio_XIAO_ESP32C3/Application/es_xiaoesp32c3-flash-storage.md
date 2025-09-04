---
description: XIAO ESP32C3 Flash-storage
title: XIAO ESP32C3 Flash-storage
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiaoesp32c3-flash-storage
last_update:
  date: 03/03/2023
  author: Citric
---

# XIAO ESP32C3 Datos Permanentes de diferentes maneras

Cuando usamos placas de desarrollo, muchos de nosotros querremos poder usar la memoria flash en el chip para almacenar algunos datos importantes. Esto requiere un método de almacenamiento que garantice que no se pierdan datos incluso en caso de una placa de desarrollo anormal.

Este tutorial introducirá cómo almacenar datos importantes en la memoria flash del XIAO ESP32C3 desde dos métodos de almacenamiento diferentes como sigue

1. La primera guía muestra cómo **guardar datos permanentemente** en la memoria flash del ESP32 usando la librería `Preferences.h`. Los datos mantenidos en la memoria flash persisten a través de reinicios o fallos de energía. Usar la librería `Preferences.h` es útil para guardar datos como credenciales de red, claves API, valores umbral, o incluso el último estado de un GPIO. Aprenderás cómo guardar y leer datos desde la memoria flash.

2. La segunda guía explica qué es la **EEPROM** del XIAO ESP32C3 y para qué es útil. También vamos a mostrarte cómo escribir y leer desde la EEPROM y construir un ejemplo de proyecto para poner en práctica los conceptos aprendidos.

La gran mayoría de este artículo proviene de [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/), y algunos de los programas y descripciones han sido ligeramente modificados para adaptarse al XIAO ESP32C3. Agradecimientos especiales a [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/) por proporcionar los tutoriales y métodos. Aquí está el enlace directo a la fuente original.

- [ESP32 Flash Memory – Store Permanent Data (Write and Read)](https://randomnerdtutorials.com/esp32-flash-memory/)

- [Arduino EEPROM Explained – Remember Last LED State](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)

- [ESP32 Save Data Permanently using Preferences Library](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## Guardar Datos Permanentemente usando la Librería Preferences

### Librería Preferences.h

Esta librería se "instala" automáticamente cuando instalas las placas XIAO ESP32C3 en tu Arduino IDE.

La librería `Preferences.h` se usa preferiblemente para almacenar valores de variables a través de pares clave:valor. Guardar datos permanentemente puede ser importante para:

- Recordar el último estado de una variable;

- Guardar configuraciones;

- Guardar cuántas veces se activó un aparato;

- O cualquier otro tipo de datos que necesites guardar permanentemente.

Si quieres usar XIAO ESP32C3 para almacenar archivos o cadenas muy largas o datos, te recomendamos que uses la placa de expansión y tarjeta SD, no recomendamos que uses los dos métodos en este tutorial.

Lo siguiente son **Funciones Útiles de la Librería Preferences.h**

**Func 1**. El método `begin()` abre un "espacio de almacenamiento" con un namespace definido. El argumento false significa que lo usaremos en modo lectura/escritura. Usa true para abrir o crear el namespace en modo solo lectura.

```c
preferences.begin("my-app", false);
```

En este caso, el nombre del espacio de nombres es my-app. El nombre del espacio de nombres está limitado a 15 caracteres.

**Func 2**. Usa `clear()` para limpiar todas las preferencias bajo el espacio de nombres abierto (no elimina el espacio de nombres):

```c
preferences.clear();
```

**Func 3**. Eliminar una clave del espacio de nombres abierto:

```c
preferences.remove(key);
```

**Func 4**. Usa el método `end()` para cerrar las preferencias bajo el espacio de nombres abierto:

```c
preferences.end();
```

**Func 5**. Debes usar diferentes métodos dependiendo del tipo de variable que quieras guardar.

Cuando uses la librería `Preferences.h`, debes definir el tipo de datos que quieres guardar. Más tarde, si quieres leer esos datos, debes conocer el tipo de datos guardado. En otras palabras, el tipo de datos de escritura y lectura debe ser el mismo.

Puedes guardar los siguientes tipos de datos usando `Preferences.h`: char, Uchar, short, Ushort, int, Uint, long, Ulong, long64, Ulong64, float, double, bool, string y bytes.

<table align="center">
  <tbody><tr>
      <td align="center">Char</td>
      <td align="left"><code>putChar(const char*key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Char</td>
      <td align="left"><code>putUChar(const char* key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Short</td>
      <td align="left"><code>putShort(const char*key, int16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Short</td>
      <td align="left"><code>putUShort(const char* key, uint16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Int</td>
      <td align="left"><code>putInt(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Int</td>
      <td align="left"><code>putUInt(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long</td>
      <td align="left"><code>putLong(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long</td>
      <td align="left"><code>putULong(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long64</td>
      <td align="left"><code>putLong64(const char*key, int64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long64</td>
      <td align="left"><code>putULong64(const char* key, uint64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Float</td>
      <td align="left"><code>putFloat(const char*key, const float_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Double</td>
      <td align="left"><code>putDouble(const char* key, const double_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Bool</td>
      <td align="left"><code>putBool(const char*key, const bool value)</code></td>
    </tr>
    <tr>
      <td align="center">String</td>
      <td align="left"><code>putString(const char* key, const String value)</code></td>
    </tr>
    <tr>
      <td align="center">Bytes</td>
      <td align="left"><code>putBytes(const char*key, const void* value, size_t len)</code></td>
    </tr>
  </tbody></table>

**Func 6**. De manera similar, debes usar diferentes métodos dependiendo del tipo de variable que quieras obtener.

<table align="center">
    <tr>
     <td align="center">Char</td>
     <td align="left"><code>getChar(const char*key, const int8_t defaultValue)</code></td>
 </tr>
 <tr>
     <td align="center">Unsigned Char</td>
     <td align="left"><code>getUChar(const char* key, const uint8_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Short</td>
     <td align="left"><code>getShort(const char*key, const int16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Short</td>
     <td align="left"><code>getUShort(const char* key, const uint16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Int</td>
     <td align="left"><code>getInt(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Int</td>
     <td align="left"><code>getUInt(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long</td>
     <td align="left"><code>getLong(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long</td>
     <td align="left"><code>getULong(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long64</td>
     <td align="left"><code>getLong64(const char*key, const int64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long64</td>
     <td align="left"><code>gettULong64(const char* key, const uint64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Float</td>
     <td align="left"><code>getFloat(const char*key, const float_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Double</td>
     <td align="left"><code>getDouble(const char* key, const double_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Bool</td>
     <td align="left"><code>getBool(const char*key, const bool defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char* key, const String defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char*key, char* value, const size_t maxLen)</code></td>
 </tr>
    <tr>
     <td align="center">Bytes</td>
     <td align="left"><code>getBytes(const char*key, void* buf, size_t maxLen)</code></td>
 </tr>
</table>


**Func 7**. Eliminar un Namespace

En la implementación de Arduino de Preferences, no hay un método para eliminar completamente un namespace. Como resultado, a lo largo de varios proyectos, la partición de Preferences del almacenamiento no volátil (nvs) del ESP32 puede llenarse. Para borrar completamente y reformatear la memoria NVS utilizada por Preferences, crea un sketch que contenga:

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // erase the NVS partition and...
  nvs_flash_init(); // initialize the NVS partition.
  while(true);
}

void loop() {

}
```

Debes descargar un nuevo sketch a tu placa inmediatamente después de ejecutar lo anterior, o reformateará la partición NVS cada vez que se encienda.

Para más información, puedes acceder al archivo Preferences.cpp [aquí](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp).

### Formas generales de usar la biblioteca Preferences.h

**Paso 1.** Para usar la biblioteca Preferences.h para almacenar datos, primero necesitas incluirla en tu sketch:

```c
#include <Preferences.h>
```

**Paso 2.** Luego, debes iniciar una instancia de la biblioteca Preferences. Puedes llamarla preferences, por ejemplo:

```c
Preferences preferences;
```

**Paso 3.** En el `setup()`, inicializa el Monitor Serie a una velocidad de baudios de 115200.

```c
Serial.begin(115200);
```

**Paso 4.** Crea un "espacio de almacenamiento" en la memoria flash llamado `my-app` en modo lectura/escritura. Puedes darle cualquier otro nombre.

```c
preferences.begin("my-app", false);
```

**Paso 5.** Usa los métodos get y put para obtener/almacenar contenido de datos.

#### Almacenar/obtener datos de pares Clave:valor

Los datos guardados usando preferences están estructurados así:

```c
namespace {
  key:value
}
```

Puedes guardar diferentes claves en el mismo espacio de nombres, por ejemplo:

```c
namespace {
  key1: value1
  key2: value2
}
```

También puedes tener múltiples espacios de nombres con la misma clave (pero cada clave con su valor):

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

Por ejemplo, almacena el nuevo valor en la clave "counter":

```c
preferences.putUInt("counter", counter);
```

Luego, obtiene el valor de la clave `counter` guardada en las preferencias. Si no encuentra ningún valor, devuelve 0 por defecto (lo que sucede cuando este código se ejecuta por primera vez).

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

Entonces, tus datos están estructurados de esta manera:

```c
my-app{
  counter: counter
}
```

#### Almacenar/obtener datos String

Los siguientes códigos guardan tus credenciales de red permanentemente en la memoria flash del ESP32 usando `Preferences.h`.

Crea una clave llamada ssid que guarde tu valor SSID (variable ssid) – usa el método `putString()`.

```c
preferences.putString("ssid", ssid);
```

Añade otra clave llamada password para guardar el valor de la contraseña (variable password):

```c
preferences.putString("password", password);
```

Entonces, tus datos están estructurados de esta manera:

```c
my-app{
  ssid: ssid
  password: password
}
```

Obtén los valores de SSID y contraseña usando el método `getString()`. Necesitas usar el nombre de clave que utilizaste para guardar las variables, en este caso, las claves ssid y password:

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

Como segundo argumento de la función `getString()`, pasamos una cadena vacía. Este es el valor devuelto en caso de que no haya claves `ssid` o `password` guardadas en las preferencias.

**Paso 6.** Cierra las Preferencias.

```c
preferences.end();
```

- El procedimiento completo para almacenar/obtener datos de pares Clave:valor se muestra a continuación.

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // Open Preferences with my-app namespace. Each application module, library, etc
  // has to use a namespace name to prevent key name collisions. We will open storage in
  // RW-mode (second parameter has to be false).
  // Note: Namespace name is limited to 15 chars.
  preferences.begin("my-app", false);

  // Remove all preferences under the opened namespace
  //preferences.clear();

  // Or remove the counter key only
  //preferences.remove("counter");

  // Get the counter value, if the key does not exist, return a default value of 0
  // Note: Key name is limited to 15 chars.
  unsigned int counter = preferences.getUInt("counter", 0);

  // Increase counter by 1
  counter++;

  // Print the counter to Serial Monitor
  Serial.printf("Current counter value: %u\n", counter);

  // Store the counter to the Preferences
  preferences.putUInt("counter", counter);

  // Close the Preferences
  preferences.end();

  // Wait 10 seconds
  Serial.println("Restarting in 10 seconds...");
  delay(10000);

  // Restart ESP
  ESP.restart();
}

void loop() {

}
```

Sube el código a tu placa y esto es lo que deberías obtener en el Monitor Serie:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- El procedimiento completo de almacenar/obtener datos de cadena se muestra a continuación.

Guardar credenciales de red usando `Preferences.h`.

```c
#include <Preferences.h>

Preferences preferences;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);
  preferences.putString("ssid", ssid); 
  preferences.putString("password", password);

  Serial.println("Network Credentials Saved using Preferences");

  preferences.end();
}

void loop() {

}
```

Sube el código a tu placa y esto es lo que deberías obtener en el Monitor Serie:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

Conectar a Wi-Fi con Credenciales de Red Guardadas en Preferencias.

```c
#include <Preferences.h>
#include "WiFi.h"

Preferences preferences;

String ssid;
String password;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();
  
  preferences.begin("credentials", false);
 
  ssid = preferences.getString("ssid", ""); 
  password = preferences.getString("password", "");

  if (ssid == "" || password == ""){
    Serial.println("No values saved for ssid or password");
  }
  else {
    // Connect to Wi-Fi
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    WiFi.begin(ssid.c_str(), password.c_str());
    Serial.print("Connecting to WiFi ");
    Serial.println(ssid);
    Serial.println(password);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print('.');
      delay(1000);
    }
    Serial.println(WiFi.localIP());  
  }
}

void loop() {
  // put your main code here, to run repeatedly:
}
```

Sube este código a tu placa después del anterior (para asegurar que tienes las credenciales guardadas). Si todo va como se espera, esto es lo que deberías obtener en tu Monitor Serie.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## Almacenar Datos Permanentes usando EEPROM

### ¿Qué es EEPROM?

La EEPROM es una memoria interna del microcontrolador ESP32 que permite mantener en memoria datos después de reiniciar la placa. Cuando se trabaja con microcontroladores, es interesante mantener datos en memoria especialmente cuando la tarjeta se apaga ya sea deseado o no, como en el caso de una pérdida de energía eléctrica.

El microcontrolador ESP32 tiene un área de memoria Flash que puede ser interfaceada como la EEPROM de un Arduino para mantener datos en memoria incluso después de que la placa se apague.

:::caution
Una cosa importante a tener en cuenta es que la EEPROM tiene un tamaño y vida útil limitados. Las celdas de memoria pueden ser leídas tantas veces como sea necesario pero el número de ciclos de escritura está limitado a **100,000**. Es recomendable prestar mucha atención al tamaño de los datos almacenados y con qué frecuencia quieres actualizarlos. La memoria EEPROM puede almacenar 512 valores de 0 a 255 o 128 direcciones IP o etiquetas RFID.
:::

El microcontrolador en el ESP32 tiene EEPROM (Memoria de Solo Lectura Programable Eléctricamente Borrable). Este es un pequeño espacio que puede almacenar variables de byte. Las variables almacenadas en la EEPROM se mantienen allí, incluso cuando reinicias o apagas el ESP32. Simplemente, la EEPROM es almacenamiento permanente similar a un disco duro en computadoras.

La EEPROM puede ser leída, borrada y reescrita electrónicamente. En Arduino, puedes leer y escribir desde la EEPROM fácilmente usando la biblioteca EEPROM.

Cada posición de EEPROM puede guardar un byte, lo que significa que solo puedes almacenar números de 8 bits, que incluye valores enteros entre 0 y 255.

### Funciones EEPROM Disponibles

Para leer y escribir desde la memoria flash del ESP32 usando Arduino IDE, usaremos la biblioteca EEPROM. Usar esta biblioteca con el ESP32 es muy similar a usarla con Arduino. Así que, si has usado la EEPROM de Arduino antes, esto no es muy diferente.

Por lo tanto, también recomendamos echar un vistazo a nuestro artículo sobre [Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/).

**Func 1**. Inicializar el tamaño de memoria

Antes de usar la función, tenemos que inicializar el tamaño de la memoria con `EEPROM.begin()`.

```c
EEPROM.begin(EEPROM_SIZE);
```

**Func 2**. Escribir y Colocar

Para escribir datos en la EEPROM, usas la función `EEPROM.write()` que toma dos argumentos. El primero es la ubicación o dirección de la EEPROM donde quieres guardar los datos, y el segundo es el valor que queremos guardar:

```c
EEPROM.write(address, value);
```

`EEPROM.write()` es equivalente a usar `EEPROM.put()`.

```c
EEPROM.put(address, value);
```

Por ejemplo, para escribir 9 en la dirección 0, tendrás:

```c
EEPROM.write(0, 9);
```

:::tip
Si queremos almacenar datos float, normalmente usamos el método `EEPROM.put()` en lugar del método `EEPROM.write()`. Si quieres almacenarlo usando el método write(), entonces necesitas usar `EEPROM.writeFloat()`.
:::

**Func 3**. Leer y Obtener

Para leer un byte de la EEPROM, usas la función `EEPROM.read()`. Esta función toma la dirección del byte como argumento.

```c
EEPROM.read(address);
```

`EEPROM.read()` es equivalente a usar `EEPROM.get()`.

```c
EEPROM.get(address);
```

Por ejemplo, para leer el byte almacenado previamente en la dirección 0.:

```c
EEPROM.read(0);
```

Esto devolvería **9**, que es el valor almacenado en esa ubicación.

:::tip
Si queremos obtener datos float, usualmente utilizamos el método `EEPROM.get()` en lugar del método `EEPROM.read()`. Si quieres obtenerlo usando el método read(), entonces necesitas usar `EEPROM.readFloat()`.
:::

**Func 4**. Actualizar un valor

La función `EEPROM.update()` es particularmente útil. Solo escribe en la EEPROM si el valor escrito es diferente del que ya está guardado.

Como la EEPROM tiene una expectativa de vida limitada debido a los ciclos limitados de escritura/borrado, usar la función `EEPROM.update()` en lugar de `EEPROM.write()` ahorra ciclos.

Usas la función `EEPROM.update()` de la siguiente manera:

```c
EEPROM.update(address, value);
```

En este momento, tenemos 9 almacenado en la dirección 0. Entonces, si llamamos:

```c
EEPROM.update(0, 9);
```

No escribirá en la EEPROM nuevamente, ya que el valor actualmente guardado es el mismo que queremos escribir.

:::note
Para aprender más sobre la operación de EEPROM, puedes leer la [documentación oficial de Arduino](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear).
:::

### Formas generales de usar la EEPROM

Para mostrarte cómo guardar datos en la memoria flash del XIAO ESP32C3, guardaremos el último estado de una salida, en este caso un LED.

Conecta un LED al XIAO ESP32C3 como se muestra en el siguiente diagrama esquemático.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

Primero, necesitas incluir la biblioteca EEPROM.

```c
#include <EEPROM.h>
```

Luego, defines el tamaño de la EEPROM. Este es el número de bytes a los que querrás acceder en la memoria flash. En este caso, solo guardaremos el estado del LED, por lo que el tamaño de la EEPROM se establece en 1.

```c
#define EEPROM_SIZE 1
```

También definimos otras variables que son necesarias para hacer funcionar este sketch.

```c
// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)
```

En el `setup()` inicializas la EEPROM con el tamaño predefinido.

```c
EEPROM.begin(EEPROM_SIZE);
```

Para asegurarte de que tu código se inicialice con el último estado del LED, en el `setup()`, debes leer el último estado del LED desde la memoria flash. Está almacenado en la dirección cero.

Luego, solo necesitas encender o apagar el LED de acuerdo al valor leído desde la memoria flash.

```c
digitalWrite (ledPin, ledState);
```

En la sección de la función `loop()`, todo lo que necesitamos hacer es cambiar el estado del LED durante un período de tiempo.

```c
// check to see if it's time to blink the LED; that is, if the difference
// between the current time and last time you blinked the LED is bigger than
// the interval at which you want to blink the LED.
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
}
```

A continuación, necesitamos determinar si la cuenta regresiva ha terminado, cambiar el estado del LED después de que haya terminado, y almacenarlo en la memoria flash.

```c
EEPROM.write(0, ledState);
```

Finalmente, usamos EEPROM.commit() para que los cambios surtan efecto.

```c
EEPROM.commit();
```

El siguiente es el procedimiento completo.

:::caution
Ten en cuenta que **no debes** ejecutar este ejemplo durante mucho tiempo. En este ejemplo, escribiremos la EEPROM cada diez segundos, y ejecutar este ejemplo durante mucho tiempo **reducirá considerablemente** la vida útil de la EEPROM.
:::

```c
// include library to read and write from flash memory
#include <EEPROM.h>

// define the number of bytes you want to access
#define EEPROM_SIZE 1

// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)

void setup() { 
  Serial.begin(115200);
  
  // initialize EEPROM with predefined size
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // read the last LED state from flash memory
  ledState = EEPROM.read(0);
  // set the LED to the last stored state
  digitalWrite(ledPin, ledState);
}

void loop() {
  // here is where you'd put code that needs to be running all the time.

  // check to see if it's time to blink the LED; that is, if the difference
  // between the current time and last time you blinked the LED is bigger than
  // the interval at which you want to blink the LED.
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // save the LED state in flash memory
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("State saved in flash memory");

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
  }
}
```

Sube el código a tu placa y esto es lo que deberías obtener en el Monitor Serie:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

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
