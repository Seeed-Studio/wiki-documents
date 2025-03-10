---
description: XIAO ESP32C3 Flash-storage
title: Almacenamiento Flash de XIAO ESP32C3
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiaoesp32c3-flash-storage
last_update:
  date: 03/05/2025
  author: Guillermo
---

# XIAO ESP32C3 Almacenamiento Permanente de Datos de Diferentes Maneras

Cuando usamos placas de desarrollo, muchos de nosotros querríamos poder usar la memoria flash en el chip para almacenar algunos datos importantes. Esto requiere un método de almacenamiento que garantice que no se pierdan datos, incluso en caso de que haya un fallo anómalo en la placa de desarrollo.

Este tutorial te enseñará cómo almacenar datos importantes en la memoria flash del XIAO ESP32C3 mediante dos métodos de almacenamiento diferentes:

1. **Primera guía** muestra cómo **guardar datos de manera permanente** en la memoria flash del ESP32 utilizando la biblioteca `Preferences.h`. Los datos almacenados en la memoria flash persisten incluso después de un reinicio o fallo de energía. Usar la biblioteca `Preferences.h` es útil para guardar datos como credenciales de red, claves de API, valores de umbral o incluso el último estado de un GPIO. Aprenderás cómo guardar y leer datos desde la memoria flash.

2. **Segunda guía** explica qué es la **EEPROM** del XIAO ESP32C3 y para qué es útil. También te mostraremos cómo escribir y leer desde la EEPROM, y construyendo un ejemplo de proyecto para poner en práctica los conceptos aprendidos.

La gran mayoría de este artículo proviene de [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/), y algunos de los programas y descripciones han sido ligeramente modificados para adaptarse al XIAO ESP32C3. Agradecimientos especiales a [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/) por proporcionar los tutoriales y métodos. Aquí está el enlace directo a la fuente original:

- [Memoria Flash del ESP32 – Almacenar Datos Permanentes (Escribir y Leer)](https://randomnerdtutorials.com/esp32-flash-memory/)
- [Explicación de la EEPROM de Arduino – Recordar el Último Estado del LED](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)
- [Guardar Datos Permanentemente en el ESP32 usando la Biblioteca Preferences](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## Guardar Datos Permanentemente usando la Biblioteca Preferences

### Biblioteca Preferences.h

Esta biblioteca se “instala” automáticamente cuando instalas las placas XIAO ESP32C3 en tu IDE de Arduino.

La biblioteca `Preferences.h` se utiliza preferentemente para almacenar valores de variables a través de pares clave:valor. Guardar datos permanentemente puede ser importante para:

- Recordar el último estado de una variable;
- Guardar configuraciones;
- Guardar cuántas veces se activó un dispositivo;
- O cualquier otro tipo de dato que necesites guardar permanentemente.

Si deseas usar el XIAO ESP32C3 para almacenar archivos o cadenas largas de texto o datos, te recomendamos usar una placa de expansión y una tarjeta SD. No recomendamos usar los dos métodos descritos en este tutorial para almacenar grandes volúmenes de datos.

A continuación se detallan las **funciones útiles de la biblioteca Preferences.h**:

**Func 1**. El método `begin()` abre un “espacio de almacenamiento” con un namespace definido. El argumento `false` significa que lo usaremos en modo lectura/escritura. Usa `true` para abrir o crear el espacio de nombres en modo solo lectura.


```c
preferences.begin("my-app", false);
```

En este caso, el nombre del espacio de nombres es *my-app*. El nombre del espacio de nombres está limitado a 15 caracteres.

**Func 2**. Usa `clear()` para borrar todas las preferencias bajo el espacio de nombres abierto (no elimina el espacio de nombres):

```c
preferences.clear();
```

**Func 3**. Elimina una clave del espacio de nombres abierto:

```c
preferences.remove(key);
```

****Func 4**. Usa el método `end()` para cerrar las preferencias bajo el espacio de nombres abierto:

```c
preferences.end();
```

**Func 5**. Debes utilizar diferentes métodos dependiendo del tipo de variable que deseas guardar.

Al usar la biblioteca `Preferences.h`, debes definir el tipo de datos que quieres guardar. Más tarde, si deseas leer esos datos, debes saber el tipo de dato guardado. En otras palabras, el tipo de dato para escribir y leer debe ser el mismo.

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

**Func 6**. Similarly, you should use different methods depending on the variable type you want to get.

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

**Func 7**. Eliminar un espacio de nombres

En la implementación de Arduino de Preferences, no existe un método para eliminar completamente un espacio de nombres. Como resultado, a lo largo de varios proyectos, la partición de almacenamiento no volátil (NVS) del ESP32 puede llenarse. Para borrar completamente y reformatear la memoria NVS utilizada por Preferences, crea un sketch que contenga:

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // borra la partición NVS y...
  nvs_flash_init(); // inicia la partición NVS.
  while(true);
}

void loop() {

}
```

Debes cargar un nuevo sketch en tu placa inmediatamente después de ejecutar el código anterior, o de lo contrario, reformateará la partición NVS cada vez que se encienda.

Para más información, puedes acceder al archivo `Preferences.cpp` [aquí](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp).

### Formas Generales de Usar la Biblioteca Preferences.h

**Paso 1.** Para usar la biblioteca Preferences.h para almacenar datos, primero debes incluirla en tu sketch:

```c
#include <Preferences.h>
```

**Paso 2.** Luego, debes iniciar una instancia de la biblioteca Preferences. Puedes llamarla, por ejemplo, preferences:

```c
Preferences preferences;
```

**Paso 3.** En el setup(), inicializa el Monitor Serial a una tasa de baudios de 115200:

```c
Serial.begin(115200);
```

**Paso 4.** Crea un “espacio de almacenamiento” en la memoria flash llamado my-app en modo lectura/escritura. Puedes darle cualquier otro nombre si lo prefieres:

```c
preferences.begin("my-app", false);
```

**Paso 5.** Usa los métodos get y put para obtener/almacenar el contenido de los datos.

#### Almacenar/obtener datos de tipo llave:valor

Los datos guardados mediante preferences se estructuran de la siguiente manera:

```c
namespace {
  key:value
}
```

Puede guardar diferentes claves en el mismo espacio de nombres, por ejemplo:

```c
namespace {
  key1: value1
  key2: value2
}
```

También puedes tener múltiples namespaces con la misma clave (pero cada clave con su valor):

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

Por ejemplo, almacene el nuevo valor en la clave "counter":

```c
preferences.putUInt("counter", counter);
```

Luego, obtiene el valor de la clave `counter` guardada en las preferencias. Si no encuentra ningún valor, devuelve 0 por defecto (lo cual sucede cuando este código se ejecuta por primera vez).

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

Entonces, tus datos están estructurados de esta manera:

```c
my-app{
  counter: counter
}
```

#### Almacenar/obtener datos de tipo String

El siguiente código guarda de manera permanente tus credenciales de red en la memoria flash del ESP32 utilizando `Preferences.h`.

Crea una clave llamada ssid que guarda el valor de tu SSID (variable ssid) – usa el método `putString()`.

```c
preferences.putString("ssid", ssid);
```

Agrega otra clave llamada password para guardar el valor de la contraseña (variable password):

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

Obtén los valores de SSID y contraseña utilizando el método `getString()`. Debes usar el nombre de la clave que utilizaste para guardar las variables, en este caso, las claves ssid y password:

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

Como segundo argumento de la función `getString()`, pasamos un String vacío. Este es el valor que se devuelve en caso de que no haya claves `ssid` o `password` guardadas en las preferencias.

**Paso 6.** Cierra las Preferencias.

```c
preferences.end();
```

- A continuación se muestra el procedimiento completo para almacenar/obtener datos en formato clave:valor.

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // Abrir las Preferencias con el espacio de nombres "my-app". Cada módulo de la aplicación, biblioteca, etc.
  // debe usar un nombre de espacio de nombres para evitar colisiones en los nombres de las claves. Abriremos el almacenamiento en
  // modo RW (el segundo parámetro debe ser falso).
  // Nota: El nombre del namespace está limitado a 15 caracteres.
  preferences.begin("my-app", false);

  // Eliminar todas las preferencias bajo el espacio de nombres abierto
  //preferences.clear();

  // O eliminar solo la clave counter
  //preferences.remove("counter");

  // Obtener el valor del contador, si la clave no existe, devolver un valor por defecto de 0
  // Nota: El nombre de la clave está limitado a 15 caracteres.
  unsigned int counter = preferences.getUInt("counter", 0);

  // Incrementar el contador en 1
  counter++;

  // Imprimir el valor del contador en el Monitor Serial
  Serial.printf("Valor actual del contador: %u\n", counter);

  // Almacenar el contador en las Preferencias
  preferences.putUInt("counter", counter);

  // Cerrar las Preferencias
  preferences.end();

  // Esperar 10 segundos
  Serial.println("Reiniciando en 10 segundos...");
  delay(10000);

  // Reiniciar el ESP
  ESP.restart();
}

void loop() {

}
```

Sube el código a tu placa y esto es lo que deberías ver en el Monitor Serial:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- A continuación se muestra el procedimiento completo para almacenar/obtener datos de tipo String.

Guardar las credenciales de la red utilizando `Preferences.h`.

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

Sube el código a tu placa y esto es lo que deberías ver en el Monitor Serial:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

Conéctate al Wi-Fi con las credenciales de red guardadas en las Preferencias.

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
    // Connectar a Wi-Fi
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
  // Pon tu código principal aquí, para ejecutarlo repetidamente:
}
```

Sube este código a tu placa después del anterior (para asegurarte de que las credenciales están guardadas). Si todo va como se espera, esto es lo que deberías ver en tu Monitor Serial.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## Almacenar Datos Permanentes usando EEPROM

### ¿Qué es EEPROM?

La EEPROM es una memoria interna del microcontrolador ESP32 que permite mantener datos en memoria incluso después de reiniciar la placa. Cuando trabajas con microcontroladores, es interesante mantener datos en memoria, especialmente cuando la tarjeta se apaga, ya sea de manera intencionada o no, como en el caso de una pérdida de energía eléctrica.

El microcontrolador ESP32 tiene un área de memoria Flash que puede ser interfazada de manera similar a la EEPROM de un Arduino para mantener datos en memoria incluso después de apagar la placa.

:::cautionAttention
Es importante destacar que la EEPROM tiene un tamaño y una vida útil limitados. Las celdas de memoria pueden ser leídas tantas veces como sea necesario, pero el número de ciclos de escritura está limitado a **100,000**. Es recomendable prestar mucha atención al tamaño de los datos almacenados y con qué frecuencia deseas actualizarlos. La memoria EEPROM puede almacenar 512 valores de 0 a 255 o 128 direcciones IP o etiquetas RFID.
:::

El microcontrolador del ESP32 tiene EEPROM (Memoria de Solo Lectura Programable y Eléctricamente Borrable). Este es un espacio pequeño que puede almacenar variables de tipo byte. Las variables almacenadas en la EEPROM se mantienen allí, incluso cuando reinicias o apagas el ESP32. En términos simples, la EEPROM es almacenamiento permanente similar al de un disco duro en las computadoras.

La EEPROM puede ser leída, borrada y reescrita electrónicamente. En Arduino, puedes leer y escribir desde la EEPROM fácilmente usando la biblioteca EEPROM.

Cada posición de la EEPROM puede guardar un byte, lo que significa que solo puedes almacenar números de 8 bits, lo que incluye valores enteros entre 0 y 255.

### Funciones disponibles de EEPROM

Para leer y escribir desde la memoria Flash del ESP32 usando Arduino IDE, utilizaremos la biblioteca EEPROM. Usar esta biblioteca con el ESP32 es muy similar a usarla con Arduino. Así que, si ya has usado la EEPROM en Arduino antes, esto no será muy diferente.

También te recomendamos que le eches un vistazo a nuestro artículo sobre [Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/).

**Función 1**. Inicializar el tamaño de la memoria

Antes de usar la función, debemos inicializar el tamaño de la memoria con `EEPROM.begin()`.

```c
EEPROM.begin(EEPROM_SIZE);
```

**Función 2**. Escribir y Poner

Para escribir datos en la EEPROM, utilizas la función `EEPROM.write()` que toma dos argumentos. El primero es la ubicación o dirección de la EEPROM donde deseas guardar los datos, y el segundo es el valor que queremos guardar:

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
Si queremos almacenar datos de tipo float, normalmente usamos el método `EEPROM.put()` en lugar del método `EEPROM.write()`. Si deseas almacenarlos utilizando el método `write()`, entonces debes usar `EEPROM.writeFloat()`.
:::

**Función 3**. Leer y Obtener

Para leer un byte de la EEPROM, utilizas la función `EEPROM.read()`. Esta función toma la dirección del byte como argumento.

```c
EEPROM.read(address);
```

`EEPROM.read()` es equivalente a usar `EEPROM.get()`.

```c
EEPROM.get(address);
```

Por ejemplo, para leer el byte almacenado previamente en la dirección 0:

```c
EEPROM.read(0);
```

Esto devolvería **9**, que es el valor almacenado en esa ubicación.

:::tip
Si queremos obtener datos de tipo float, normalmente usamos el método `EEPROM.get()` en lugar del método `EEPROM.read()`. Si deseas obtenerlos utilizando el método `read()`, entonces debes usar `EEPROM.readFloat()`.
:::

**Función 4**. Update a value

La función `EEPROM.update()` es particularmente útil. Sólo escribe en el EEPROM si el valor escrito es diferente al ya guardado.

Como la EEPROM tiene una esperanza de vida limitada debido a los ciclos limitados de escritura/borrado, el uso de la función `EEPROM.update()` en lugar de `EEPROM.write()` ahorra ciclos.

Se puede usar la función `EEPROM.update()` de la siguiente manera:

```c
EEPROM.update(address, value);
```

Por el momento, tenemos 9 almacenado en la dirección 0. Entonces, si llamamos:

```c
EEPROM.update(0, 9);
```

No volverá a escribir en la EEPROM, ya que el valor guardado actualmente es el mismo que queremos escribir.

:::note
Para obtener más información sobre el funcionamiento de EEPROM, puede leer la [documentación oficial de Arduino](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear).
:::

### Formas generales de usar EEPROM

Para mostrarte cómo guardar datos en la memoria flash del XIAO ESP32C3, guardaremos el último estado de una salida, en este caso un LED.

Conecta un LED al XIAO ESP32C3 como se muestra en el siguiente diagrama.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

Primero, vas a necesitar incluir la librería EEPROM.

```c
#include <EEPROM.h>
```

Luego, define el tamaño de la EEPROM. Esta es la cantidad de bytes a los que querrás acceder en la memoria flash. En este caso, simplemente guardaremos el estado del LED, por lo que el tamaño de EEPROM se establecerá en 1.

```c
#define EEPROM_SIZE 1
```

También definimos otras variables que se requieren para que este sketch funcione.

```c
// Las constantes no cambiarán. Se usan aquí para establecer los números de los pines:
const int ledPin = D10;      // el número del pin del LED

// Las variables cambiarán:
int ledState = LOW;  // ledState se usa para establecer el estado del LED

// En general, deberías usar "unsigned long" para las variables que contienen tiempo
// El valor rápidamente se volvería demasiado grande para que un int lo almacene
unsigned long previousMillis = 0;  // almacenará el último momento en que se actualizó el LED

// Las constantes no cambiarán:
const long interval = 10000;  // intervalo para parpadear (en milisegundos)
```

En `setup()` inicializarás EEPROM con el tamaño predefinido.

```c
EEPROM.begin(EEPROM_SIZE);
```

Para asegurarte de que tu código se inicialice con el último estado del LED, en el setup(), debes leer el último estado del LED desde la memoria flash. Está almacenado en la dirección cero.

Luego, solo necesitas encender o apagar el LED de acuerdo con el valor leído desde la memoria flash.

```c
digitalWrite (ledPin, ledState);
```

En la sección de la función loop(), todo lo que necesitamos hacer es cambiar el estado del LED a lo largo del tiempo.

```c
// verificar si es tiempo de parpadear el LED; es decir, si la diferencia
// entre el tiempo actual y el último momento en que parpadeaste el LED es mayor que
// el intervalo en el que deseas que parpadee el LED.
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // guardar el último momento en que parpadeaste el LED
    previousMillis = currentMillis;
    Serial.println("Estado cambiado");
    // si el LED está apagado, enciéndelo y viceversa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // establecer el LED con el estado de la variable ledState:
    digitalWrite(ledPin, ledState);
}
```

A continuación, necesitamos determinar si la cuenta regresiva ha terminado, cambiar el estado del LED después de que haya terminado y almacenarlo en la memoria flash.

```c
EEPROM.write(0, ledState);
```

Finalmente, usamos EEPROM.commit() para que los cambios tomen efecto.

```c
EEPROM.commit();
```

Lo siguiente es el procedimiento completo.

:::cautionAttention
Ten en cuenta que **no deberías** ejecutar este ejemplo durante mucho tiempo. En este ejemplo, escribiremos en la EEPROM cada diez segundos, y ejecutar este ejemplo durante mucho tiempo **reducirá significativamente** la vida útil de la EEPROM.
:::

```c
// incluir la librería para leer y escribir en la memoria flash
#include <EEPROM.h>

// definir el número de bytes que deseas acceder
#define EEPROM_SIZE 1

// las constantes no cambiarán. Se usan aquí para establecer los números de los pines:
const int ledPin = D10;      // el número del pin del LED

// las variables cambiarán:
int ledState = LOW;  // ledState se usa para establecer el estado del LED

// En general, debes usar "unsigned long" para las variables que almacenan tiempo
// El valor rápidamente se volvería demasiado grande para que un int lo almacene
unsigned long previousMillis = 0;  // almacenará el último momento en que se actualizó el LED

// las constantes no cambiarán:
const long interval = 10000;  // intervalo para parpadear (en milisegundos)

void setup() { 
  Serial.begin(115200);
  
  // inicializar la EEPROM con el tamaño predefinido
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // leer el último estado del LED desde la memoria flash
  ledState = EEPROM.read(0);
  // establecer el LED en el último estado almacenado
  digitalWrite(ledPin, ledState);
}

void loop() {
  // aquí es donde pondrías el código que debe ejecutarse todo el tiempo.

  // verificar si es tiempo de parpadear el LED; es decir, si la diferencia
  // entre el tiempo actual y el último momento en que parpadeaste el LED es mayor que
  // el intervalo en el que deseas que parpadee el LED.
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // guardar el último momento en que parpadeaste el LED
    previousMillis = currentMillis;
    Serial.println("Estado cambiado");
    // si el LED está apagado, encenderlo y viceversa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // guardar el estado del LED en la memoria flash
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("Estado guardado en la memoria flash");

    // establecer el LED con el estado de la variable ledState:
    digitalWrite(ledPin, ledState);
  }
}
```

Sube el código a tu placa y esto es lo que deberías ver en el Monitor Serial:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

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
