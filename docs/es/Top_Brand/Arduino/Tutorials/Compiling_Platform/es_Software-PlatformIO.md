---
description: PlatformIO para Placas Compatibles con Arduino
title: PlatformIO para Placas Compatibles con Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-PlatformIO
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Cómo Usar el IDE PlatformIO para Programación con Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.gif"/></div>

Como puedes haber experimentado, el IDE de Arduino puede no ser el mejor IDE para **Programación con Arduino** cuando se trata de productividad, ¡aquí te presentamos una opción más amigable para el desarrollo! Desarrolla [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) en tu entorno de desarrollo favorito usando [**PlatformIO IDE**](https://platformio.org/) en [Microsoft Visual Studio Code](https://code.visualstudio.com/)!

## Qué es PlatformIO

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.png"/></div>

[**PlatformIO**](https://platformio.org/) es una herramienta IDE profesional multiplataforma, multiarquitectura y multi-framework para ingenieros de sistemas embebidos y software que escriben aplicaciones embebidas. Al proporcionar una interfaz IDE universal usando PlatformIO, ¡puedes programar tu hardware de una manera más amigable para el desarrollo!

En esta wiki, podrás configurar PlatformIO para soportar [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) para comenzar tu programación!

*Para más información, por favor visita [PlatformIO](https://docs.platformio.org/en/latest/)*

## Comenzando con Platform IO IDE

PlatformIO soporta algunos de los IDEs y editores de texto más populares como plugins. En esta wiki, se usa **PlatformIO para VSCode** como ejemplo.

Para otros IDEs, por favor revisa los siguientes para referencia:

- Para [CLion](https://docs.platformio.org/en/latest/integration/ide/clion.html#ide-clion)

- [PlatformIO Core (CLI)](https://docs.platformio.org/en/latest/core/index.html#piocore)

### PlatfromIO para VSCode

- **PASO 1. Descargar VSCode**

Descarga e Instala [Microsoft Visual Studio Code](https://code.visualstudio.com/)

- **PASO 2. Descargar los Plugins del IDE PlatformIO para VSCode**

Abre el **Mercado de Extensiones** en VS Code haciendo clic en **Extensiones** en el panel izquierdo o usa el atajo de teclado:

:::note
Atajo de Teclado: `Shift+CTRL+X` en **Windows** o `Shift+CMD+X` en **macOS**.
:::

Busca **`PlatfromIO`** en el Mercado de Extensiones y haz clic en **Instalar**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-1.png"/></div>

- **PASO 3. Abrir la Página de Inicio de PlatformIO**

Haz clic en el botón "PlatformIO Home" en la barra de herramientas inferior de PlatformIO

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-2.png"/></div>

¡Ahora, PlatformIO está instalado en tu PC!

## Configuraciones para Wio Terminal y Seeeduino XIAO

**Wio Terminal y Seeeduino XIAO ahora son oficialmente compatibles con PlatformIO:**

1. Navega a la ubicación raíz de PlatformIO:

      - Para **Unix**: `~/.platformio`

      - Para **Windows**: `C:\Users\{username}.platformio` donde `{username}` es tu nombre de usuario.

2. Navega a la carpeta `platforms`.

3. Descarga el [`platform-atmelsam`](https://github.com/platformio/platform-atmelsam.git) configurado en la carpeta `platforms`.

<div align="center"><img  src="https://files.seeedstudio.com/wiki/platformIO/platformIO-3.png"/></div>

### Placas Compatibles

El `platform-atmelsam` configurado es compatible con las siguientes placas:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Serie Seeeduino Zero:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#d9f5f3', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#83dfd3', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Tip.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{fontWeight: 'bold', marginTop: 10}}>Consejo</p>
    <p style={{fontSize: 14}}>Ya fusionado, pronto ya no será necesario hacer esto manualmente.</p>
  </div>
</div>

## Inicio Rápido

Este tutorial te introduce los conceptos básicos del flujo de trabajo del IDE de PlatformIO y demuestra un ejemplo simple de "Blink" en Wio Terminal.

- Haz clic en el botón **PlatformIO Home**.

- Haz clic en **New Project** y selecciona `Seeed Wio Terminal` como placa.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/platformIO/platformIO-4.png"/></div>

- Abre `main.cpp` bajo la carpeta `src` y copia lo siguiente:

```cpp
#include <Arduino.h>

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

- Abre el archivo de configuración `platformio.ini` y verifica que sea correcto:

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
```

- Construye el proyecto con el botón **Build** en la barra de herramientas de PlatformIO o con atajos de teclado.

:::note
        Construir Proyectos: `ctrl+alt+b` en **Windows** o `cmd+shift+b` en **macOS**.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-5.png"/></div>

- Sube el proyecto a Wio Terminal haciendo clic en el botón **Upload** en la barra de herramientas de PlatformIO.

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-6.png"/></div>

- ¡Ahora deberías ver el LED de Wio Terminal parpadeando!

*Para más información sobre Primeros Pasos con PlatformIO para VSCode, consulta también [aquí](https://docs.platformio.org/en/latest/integration/ide/vscode.html)
.*

## Añadiendo Bibliotecas a PlatformIO

### Importando Bibliotecas Directamente

Para importar bibliotecas directamente a PlatformIO desde Github, puedes configurar el `platformio.ini` y añadir las `lib_deps` con la URL de la biblioteca dependiente como se muestra a continuación:

```ini
lib_deps = https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR
```

**- Ejemplo de Uso:**

```cpp
#include <Arduino.h>
#include<LIS3DHTR.h>

LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

### Importando desde Arduino

Otra forma de importar bibliotecas es apuntar a la ruta de la biblioteca de Arduino en el archivo de configuración `platformio.ini`, por ejemplo:

```ini
lib_extra_dirs = /Users/{username}/Documents/Arduino/libraries
```

:::caution
Esta no es una ruta directa a una biblioteca con código fuente. Debe ser una ruta a un almacenamiento que contenga bibliotecas agrupadas por carpetas. Por ejemplo, `D:\PlatformIO\extra\libraries` pero no `D:\PlatformIO\extra\libraries\FooLibrary`.
:::

Para más opciones de bibliotecas, consulte [**PlatformIO Library docs**](https://docs.platformio.org/en/latest/projectconf/section_env_library.html).

## Usando la Biblioteca ArduinoCore Más Reciente para Seeed

El ArduinoCore en PlatformIO es mantenido por PlatformIO mismo y a veces, no está actualizado con la última versión lanzada por Seeed. En este caso, puede usar el siguiente `platformio.ini`, por ejemplo:

```ini
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
platform_packages = framework-arduino-samd-seeed@https://github.com/Seeed-Studio/ArduinoCore-samd.git
```

## Otras Características Útiles de PlatformIO

- [Monitores Serie](https://docs.platformio.org/en/latest/integration/ide/vscode.html#serial-port-monitor)

- [Depuración](https://docs.platformio.org/en/latest/integration/ide/vscode.html#debugging)
