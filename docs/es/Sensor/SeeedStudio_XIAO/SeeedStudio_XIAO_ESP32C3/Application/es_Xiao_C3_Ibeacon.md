---
description: XIAO ESP32-C3 iBeacon con Sensor BME680 Usando ESP-IDF
title: XIAO ESP32-C3 iBeacon con Sensor BME680 Usando ESP-IDF
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp
slug: /es/xiao-c3-ibeacon
last_update:
  date: 04/14/2025
  author: Priyanshu Roy
---

# XIAO ESP32-C3 iBeacon con Sensor BME680 Usando ESP-IDF

En este tutorial, construiremos un sistema de monitoreo de temperatura de bajo consumo que transmite datos ambientales usando Bluetooth Low Energy (BLE) en formato iBeacon. Usaremos el Seeed Studio XIAO ESP32-C3, la placa de expansión XIAO, y un sensor ambiental Grove BME680. Este proyecto demuestra cómo construir aplicaciones embebidas robustas usando ESP-IDF—el framework de desarrollo oficial de Espressif.

## Descripción General

Nuestro sistema:

1. Leerá temperatura, humedad y presión del sensor BME680
2. Empaquetará estos datos en paquetes de anuncio BLE
3. Se despertará periódicamente, tomará mediciones, anunciará datos, y volverá a dormir para conservar la batería

### Diagrama de Flujo del Sistema

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/1.png" style={{width:300, height:800}}/></div>

Este diagrama de flujo ilustra el ciclo de operación principal de nuestro sistema, desde despertar hasta regresar al sueño profundo.

## Requisitos de Hardware

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base para XIAO</th>
    <th>Grove Sensor Ambiental BME680</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- Cable USB Type-C
- Computadora con ESP-IDF instalado

## Requisitos de Software

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) (v5.0 o posterior)
- Git
- [Repositorio GitHub del Proyecto](https://github.com/Priyanshu0901/xiao_ibeacon)

## Paso 1: Configuración del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/2.webp" style={{width:800, height:'auto'}}/></div>

1. **Conectar el sensor BME680 a la Placa de Expansión XIAO**:

   - Conecta el sensor Grove BME680 a uno de los puertos I2C en la Placa de Expansión XIAO.
   - El sensor se comunica vía I2C, por lo que cualquier puerto Grove compatible con I2C funcionará.

2. **Montar el XIAO ESP32-C3 en la placa de expansión**:

   - Alinea cuidadosamente e inserta el módulo XIAO ESP32-C3 en la placa de expansión.
   - Asegúrate de que los pines estén correctamente alineados y el módulo esté firmemente asentado.

3. **Conectar a tu computadora**:
   - Usa un cable USB Type-C para conectar la placa de expansión XIAO a tu computadora.

## Paso 2: Configuración del Entorno de Desarrollo

1. **Instalar ESP-IDF**:
   Sigue las [instrucciones oficiales de instalación](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) para tu sistema operativo.

   Para Linux, puedes usar:

   ```bash
   mkdir -p ~/esp
   cd ~/esp
   git clone --recursive https://github.com/espressif/esp-idf.git
   cd esp-idf
   ./install.sh
   . ./export.sh
   ```

2. **Clona el repositorio del proyecto**:

   ```bash
   cd ~/Desktop
   git clone --recurse-submodules https://github.com/Priyanshu0901/xiao_ibeacon.git
   cd xiao_ibeacon
   ```

   :::caution
   La bandera `--recurse-submodules` es crítica ya que el proyecto depende de bibliotecas externas incluidas como submódulos de Git. Sin esto, la compilación fallará.

   Si ya has clonado sin submódulos, ejecuta:

   ```bash
   git submodule update --init --recursive
   ```

   :::

## Paso 3: Estructura del Proyecto y Comprensión de los Componentes

El proyecto consta de tres componentes principales:

1. **Componente del Sensor BME680 (`sensor_t_a_h`)**:

   - Maneja la comunicación con el sensor BME680
   - Gestiona la inicialización del sensor, lectura y procesamiento de datos
   - Proporciona datos de temperatura, humedad y presión

2. **Componente BLE Beacon (`ble_beacon`)**:

   - Configura la pila BLE
   - Crea y transmite anuncios BLE con datos del sensor
   - Gestiona la inicialización y limpieza de BLE

3. **Componente de Gestión de Energía (`power_manager`)**:
   - Maneja la funcionalidad de sueño profundo
   - Gestiona el funcionamiento eficiente en energía
   - Controla las fuentes de activación y duración del sueño

### Interacción de Componentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/3.png" style={{width:800, height:'auto'}}/></div>

Este diagrama muestra cómo los diferentes componentes de software interactúan con los elementos de hardware del sistema.

## Paso 4: Comprensión de la Configuración

Antes de construir, entendamos las configuraciones clave:

1. **Configuraciones de la Aplicación Principal** (en `main.c`):

   - `ADV_TIME_MS`: Duración para el anuncio BLE (500ms)
   - `POLL_INTERVAL_MS`: Con qué frecuencia sondear el sensor (150ms)
   - `TIMEOUT_MS`: Tiempo máximo para esperar las lecturas del sensor (2000ms)
   - `SLEEP_TIME_MS`: Cuánto tiempo dormir entre mediciones (~29.3 segundos)

2. **Configuración del Sensor** (en `components/sensor_t_a_h/Kconfig`):

   ```
   menu "BME68X Configuration"
       config BME68X_I2C_ADDR
           hex "BME68X I2C Address"
           default 0x76
           help
               I2C address of the BME68X sensor. Default is 0x76.
               Use 0x77 if SDO pin is pulled high.

       choice BME68X_INTERFACE
           prompt "BME68X Interface"
           default BME68X_USE_I2C
           help
               Select the interface to use with BME68X sensor.

           config BME68X_USE_I2C
               bool "I2C Interface"

           config BME68X_USE_SPI
               bool "SPI Interface"
       endchoice

       if BME68X_USE_I2C
           config BME68X_I2C_PORT
               int "I2C Port Number"
               range 0 1
               default 0
               help
                   I2C port number for BME68X.

           config BME68X_I2C_SDA_PIN
               int "I2C SDA GPIO"
               range 0 48
               default 12
               help
                   GPIO pin for I2C SDA.

           config BME68X_I2C_SCL_PIN
               int "I2C SCL GPIO"
               range 0 48
               default 13
               help
                   GPIO pin for I2C SCL.

           config BME68X_I2C_CLOCK_SPEED
               int "I2C Clock Frequency (Hz)"
               range 100000 400000
               default 100000
               help
                   I2C clock frequency for BME68X. Standard mode (100 KHz) or Fast mode (400 KHz).
       endif
   endmenu
   ```

3. **Configuración BLE** (en `components/ble_beacon/common.h`):
   El nombre del dispositivo BLE se define en el archivo `common.h`:

   ```c
   #define DEVICE_NAME "Xiao_TempSensor"
   ```

### Modificando Parámetros de Configuración

#### Usando la Herramienta menuconfig de ESP-IDF

El framework ESP-IDF proporciona una herramienta de configuración poderosa llamada **menuconfig** que ofrece una interfaz de usuario basada en texto para modificar la configuración del proyecto. Esta herramienta está basada en Kconfig, el mismo sistema de configuración usado por el kernel de Linux.

Para lanzar la interfaz de configuración:

```bash
idf.py menuconfig
```

Esto mostrará una interfaz de usuario basada en texto con categorías de configuración:

```
    Application Configuration  --->
    ESP-IDF Components         --->
    SDK tool configuration     --->
    Compiler options          --->
    Component config          --->
    Bootloader config         --->
    Serial flasher config     --->
```

**Navegación en menuconfig:**

- Usa las flechas `↑` y `↓` para navegar
- Presiona `Enter` para entrar a un submenú
- Presiona `Esc` para regresar
- Presiona `Espacio` para alternar opciones
- Presiona `Y` para 'Sí' y `N` para 'No' en opciones booleanas
- Presiona `?` para obtener ayuda sobre la opción actualmente seleccionada
- Presiona `Q` o `Esc` múltiples veces para salir, luego `Y` para guardar cambios

**Encontrar la Configuración del Sensor:**

1. Navega a `Component config`
2. Desplázate hacia abajo para encontrar `BME68X Configuration`
3. Presiona `Enter` para ver la configuración del sensor

**Encontrar la Configuración BLE:**

1. Navega a `Component config`
2. Encuentra y entra a `Bluetooth`
3. Selecciona `NimBLE Options`
4. Aquí puedes configurar varios parámetros BLE

##### Configurando los Pines I2C para BME680

Para configurar los pines I2C para el sensor BME680:

1. En menuconfig, navega a: `Component config` → `BME68X Configuration`
2. Selecciona `I2C SDA GPIO` para cambiar el pin SDA
3. Ingresa el número GPIO para SDA (por defecto es 12, pero para XIAO ESP32-C3 con la placa de expansión, usa 6)
4. Selecciona `I2C SCL GPIO` para cambiar el pin SCL
5. Ingresa el número GPIO para SCL (por defecto es 13, pero para XIAO ESP32-C3 con la placa de expansión, usa 7)
6. Si tu sensor tiene una dirección I2C diferente, selecciona `BME68X I2C Address` y modifícala

##### Configurando Parámetros BLE vía menuconfig

Mientras que el nombre del dispositivo se define en el código, otros parámetros BLE pueden configurarse vía menuconfig:

1. Navega a: `Component config` → `Bluetooth` → `NimBLE Options`
2. Aquí puedes modificar:
   - Número máximo de conexiones concurrentes
   - Rol BLE (Central/Periférico/Observador/Difusor)
   - Configuraciones de seguridad
   - Parámetros GAP y GATT
   - Asignaciones de memoria para la pila BLE

##### Opciones de Configuración Avanzada

Para usuarios avanzados, opciones de configuración adicionales están disponibles:

1. **Gestión de Energía:**

   - Navega a: `Component config` → `Power Management`
   - Habilitar/deshabilitar suspensión ligera automática
   - Configurar DFS (Escalado Dinámico de Frecuencia)

2. **Cifrado de Flash:**

   - Navega a: `Security features`
   - Configurar opciones de cifrado de flash para despliegues seguros

3. **Tabla de Particiones:**

   - Navega a: `Partition Table`
   - Modificar el particionado de flash para diferentes necesidades de aplicación

4. **Registro:**
   - Navega a: `Component config` → `Log output`
   - Configurar niveles de registro de depuración y destinos de salida

Después de hacer tus cambios, presiona `Q` para salir y `Y` para guardar cambios. Luego reconstruye el proyecto con:

```bash
idf.py build
```

#### Cambiar el Nombre del Dispositivo BLE

Para cambiar el nombre del dispositivo BLE, necesitas modificar la macro `DEVICE_NAME` en `components/ble_beacon/common.h`:

1. Abre el archivo:

   ```bash
   nano components/ble_beacon/common.h
   ```

2. Encuentra la definición de `DEVICE_NAME` y cámbiala por el nombre que desees:

   ```c
   #define DEVICE_NAME "MyCustomSensor"
   ```

3. Guarda el archivo y reconstruye el proyecto.

## Paso 5: Compilar y Flashear el Proyecto

1. **Navega al directorio del proyecto**:

   ```bash
   cd ~/Desktop/xiao_ibeacon
   ```

2. **Configurar el proyecto**:

   ```bash
   idf.py set-target esp32c3
   idf.py menuconfig
   ```

   Navega por el menú para verificar o ajustar la configuración:

   - Component Config → BME680 Sensor Settings
   - Component Config → BLE Beacon Settings
   - Component Config → Power Management

3. **Compila el proyecto**:

   ```bash
   idf.py build
   ```

4. **Flashea el proyecto al XIAO ESP32-C3**:

   ```bash
   idf.py -p /dev/ttyUSB0 flash
   ```

   Nota: Tu puerto podría ser diferente (Windows: COM3, COM4, etc.)

5. **Monitorea la salida** (opcional):

   ```bash
   idf.py -p /dev/ttyUSB0 monitor
   ```

   Presiona Ctrl+] para salir del monitor.

## Paso 6: Probando el iBeacon

1. **Descarga una aplicación de escáner BLE** en tu smartphone:

   - iOS: "LightBlue" o "nRF Connect"
   - Android: "nRF Connect" o "BLE Scanner"

2. **Abre la aplicación y escanea dispositivos BLE**:

   - Busca un dispositivo llamado "Xiao_TempSensor"
   - Selecciona el dispositivo para ver sus datos de anuncio

3. **Comprende los Datos de Anuncio**:
   El anuncio BLE contiene:

   - Temperatura (en grados Celsius, escalada por 100)
   - Humedad (en porcentaje)
   - Presión (en hPa, escalada por 10)

4. **Comportamiento Esperado**:
   - El dispositivo se despierta aproximadamente cada 30 segundos
   - Toma lecturas del sensor BME680
   - Transmite estos datos durante 500ms
   - Luego entra en sueño profundo para conservar energía

### Scripts de Prueba en Python

El proyecto incluye scripts de Python para ayudar a probar y validar la funcionalidad del beacon BLE. Vamos a explorarlos:

#### Configurando el Entorno de Python

1. Navega al directorio de scripts de prueba:

   ```bash
   cd ~/Desktop/xiao_ibeacon/test_scripts
   ```

2. Ejecuta el script de configuración para crear y configurar un entorno virtual:

   ```bash
   # On Linux/macOS
   chmod +x setup_venv.sh
   ./setup_venv.sh

   # On Windows
   setup_venv.bat
   ```

3. Activa el entorno virtual:

   ```bash
   # On Linux/macOS
   source venv/bin/activate

   # On Windows
   venv\Scripts\activate
   ```

El script de configuración instalará los paquetes requeridos:

- `bleak`: Para comunicación BLE
- `colorama`: Para salida de terminal coloreada

#### Usando el Script Escáner BLE

El script escáner BLE (`ble_beacon_scanner.py`) escanea anuncios BLE y muestra datos de sensores de nuestro beacon.

Características clave del escáner:

- Busca un dispositivo llamado "Xiao_TempSensor"
- Decodifica los datos específicos del fabricante para extraer temperatura, humedad y presión
- Muestra valores en una interfaz de terminal formateada
- Se actualiza continuamente conforme se reciben nuevos anuncios

Para ejecutar el escáner:

```bash
python ble_beacon_scanner.py
```

El script mostrará una salida con formato elegante con las últimas lecturas del sensor:

```
╔═══════════════════════════════════════════════╗
║ Xiao Temperature Sensor Beacon Scanner        ║
╠═══════════════════════════════════════════════╣
║ Last Update: 15:42:27                         ║
║ Signal Strength: -63 dBm                      ║
╠═══════════════════════════════════════════════╣
║ Temperature: 23.45 °C                         ║
║ Humidity: 48 %                                ║
║ Pressure: 1013.2 hPa                          ║
╠═══════════════════════════════════════════════╣
║ Press Ctrl+C to exit                          ║
╚═══════════════════════════════════════════════╝
```

Si habilitas el modo de depuración en el script estableciendo `DEBUG_MODE = True`, verás información adicional sobre los anuncios BLE y el análisis de datos.

#### Formato de Datos del Beacon

El beacon transmite datos en un formato comprimido para ajustarse a las limitaciones de anuncios BLE:

1. ID de Compañía: 0x02E5 (Espressif Systems)
2. Temperatura: Entero con signo de 16 bits, escalado por 100 (dividir por 100 para obtener °C)
3. Humedad: Entero sin signo de 8 bits (valor de porcentaje directo)
4. Presión: Entero sin signo de 16 bits, escalado por 10 (dividir por 10 para obtener hPa)

El script de Python decodifica este formato y muestra los valores reales.

#### Flujo del Proceso de Prueba

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/4.png" style={{width:600, height:'auto'}}/></div>

## Paso 7: Cómo Funciona - Análisis Profundo

### Inicialización y Lectura del Sensor

El sensor BME680 se inicializa con los siguientes pasos:

1. **Configuración I2C**: Configura la comunicación I2C en los pines apropiados (para XIAO ESP32-C3 con la placa de expansión, GPIO6/GPIO7 para SDA/SCL)
2. **Inicialización del Sensor**: Configura el sensor BME680 con ajustes para mediciones de temperatura, humedad, presión y gas
3. **Proceso de Lectura**: Inicia una medición y espera a que los datos estén listos
4. **Procesamiento de Datos**: Convierte los valores crudos del sensor a mediciones legibles para humanos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/5.png" style={{width:800, height:'auto'}}/></div>

### Anuncio BLE

La funcionalidad BLE opera de la siguiente manera:

1. **Inicialización del Stack BLE**: Configura el stack BLE del ESP32
2. **Configuración de Anuncio**: Configura los parámetros de anuncio (intervalo, formato de datos)
3. **Empaquetado de Datos**: Toma las lecturas del sensor y las empaqueta en datos específicos del fabricante
4. **Inicio/Parada de Anuncio**: Controla el tiempo de anuncio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/6.png" style={{width:800, height:'auto'}}/></div>

### Gestión de Energía

El sistema de gestión de energía utiliza las capacidades de suspensión integradas del ESP32-C3:

1. **Configuración de Suspensión Profunda**: Utiliza la API de suspensión de ESP-IDF (`esp_sleep_enable_timer_wakeup()`) para configurar el temporizador de despertar
2. **Fuente de Despertar**: Configura el temporizador como la única fuente de despertar (el sistema despertará después de una duración especificada)
3. **Entrada a Suspensión**: Apaga de forma segura los periféricos activos antes de entrar en suspensión profunda con `esp_deep_sleep_start()`
4. **Proceso de Despertar**: Cuando el temporizador expira, el sistema realiza un reinicio y reinicia la aplicación desde el principio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/7.png" style={{width:800, height:'auto'}}/></div>

El componente de gestión de energía (`power_manager.c`) proporciona una interfaz simple para manejar los modos de suspensión:

```c
// Initialize power manager
power_manager_init();

// Later, when it's time to sleep:
power_manager_enter_deep_sleep(30000); // Sleep for 30 seconds
```

Cuando el dispositivo entra en sueño profundo, el consumo de energía se reduce drásticamente (a alrededor de 10-20 μA), permitiendo una larga duración de la batería. El dispositivo se apaga completamente y se reiniciará cuando expire el temporizador, por lo que cualquier estado que necesite preservarse debe almacenarse en la memoria RTC o almacenamiento no volátil.

### Perfil de Consumo de Energía

#### Configuración de Perfilado de Energía

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp" style={{width:600, height:'auto'}}/></div>

#### Perfiles de Energía

El sistema tiene fases distintas de uso de energía como se muestra en el perfil de energía a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/9.png" style={{width:800, height:'auto'}}/></div>

**Fases de Energía:**

1. **Fase de Sueño**: ~150μA en modo de sueño profundo (controlador RTC ESP32-C3 activo + bme680 en sueño)
2. **Despertar e Inicializar**: ~40mA durante el arranque e inicialización del sensor
3. **Publicidad BLE Activa**: ~16mA pico durante la transmisión BLE
4. **Limpieza y Entrada a Sueño**: ~5mA durante la limpieza de recursos antes de la entrada a sueño

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/10.png" style={{width:800, height:'auto'}}/></div>

**Cálculo de Duración de Batería:**

- Corriente promedio en sueño profundo (28 segs): 150μA
- Corriente promedio durante fase activa (2 segs): ~40mA
- Corriente promedio efectiva: 3.92 mA (medida durante 1 minuto)
- Con una batería Li-Ion típica de 1500 mAh:
  - 1500 mAh ÷ 3.92 mA ≈ 382 horas ≈ 15.9 días

**Consejos de Optimización de Energía:**

- Reducir el tiempo de publicidad para minimizar períodos de alta corriente
- Usar la menor potencia de publicidad factible
- Deshabilitar periféricos no utilizados
- Optimizar el proceso de lectura del sensor
- Considerar extender la duración del sueño

## Paso 8: Personalizar el Proyecto

Puedes personalizar varios aspectos del proyecto:

1. **Cambiar la Duración del Sueño**:

   - Edita `SLEEP_TIME_MS` en `main.c` para ajustar qué tan frecuentemente se toman las lecturas

2. **Modificar Configuraciones del Sensor**:

   - Usa `idf.py menuconfig` para cambiar las tasas de muestreo del sensor, filtros, etc.

3. **Ajustar Parámetros BLE**:

   - Cambia el nombre del dispositivo o el intervalo de publicidad en el componente de beacon BLE

4. **Añadir Sensores Adicionales**:
   - Extiende el componente del sensor para incluir otros sensores Grove

### Añadir Tu Propio Sensor

Para integrar un sensor diferente en este proyecto, sigue estos pasos:

1. **Crear un Nuevo Componente de Sensor**:

   ```bash
   # Create component directory structure
   mkdir -p components/my_new_sensor/include
   touch components/my_new_sensor/CMakeLists.txt
   touch components/my_new_sensor/Kconfig
   touch components/my_new_sensor/my_new_sensor.c
   touch components/my_new_sensor/include/my_new_sensor.h
   ```

2. **Implementar la Interfaz del Componente**:

   - Definir función de inicialización
   - Crear funciones de lectura de datos
   - Configurar cualquier configuración necesaria

   Archivo de cabecera de ejemplo (`my_new_sensor.h`):

   ```c
   #pragma once
   #include <stdbool.h>
   #include "esp_err.h"

   typedef struct {
       float value1;
       float value2;
       // Additional sensor values
   } my_sensor_data_t;

   /**
    * @brief Initialize the sensor
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_init(void);

   /**
    * @brief Read data from the sensor
    * @param data Pointer to structure to store readings
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_read(my_sensor_data_t *data);
   ```

3. **Configure Build System**:
   Example `CMakeLists.txt`:

   ```cmake
   idf_component_register(
       SRCS "my_new_sensor.c"
       INCLUDE_DIRS "include"
       REQUIRES driver
   )
   ```

4. **Actualizar la Aplicación Principal**:

   - Añade tu componente a las dependencias de la aplicación principal
   - Inicializa tu sensor en el flujo de la aplicación principal
   - Incluye las lecturas de tu sensor en los datos de anuncio BLE

   Ejemplo de integración en `main.c`:

   ```c
   #include "my_new_sensor.h"

   void app_main(void) {
       // Initialize other components
       // ...

       // Initialize your new sensor
       ESP_ERROR_CHECK(my_new_sensor_init());

       // Read from your sensor
       my_sensor_data_t sensor_data;
       ESP_ERROR_CHECK(my_sensor_read(&sensor_data));

       // Modify BLE data to include your sensor readings
       // ...
   }
   ```

5. **Extender Datos de Publicidad BLE**:

   - Actualiza el componente de baliza BLE para incluir los datos de tu sensor en las publicidades
   - Asigna IDs de tipo de datos apropiados para tus nuevas mediciones

6. **Actualizar Configuración**:
   - Añade opciones Kconfig para tu sensor en `components/my_new_sensor/Kconfig`
   - Esto permite a los usuarios configurar tu sensor a través de menuconfig

Siguiendo este enfoque estructurado, puedes integrar sensores adicionales de manera fluida mientras mantienes la arquitectura modular del proyecto.

## Solución de Problemas

### Consejos Importantes

:::tip
**Sin Salida Serial Durante Operación Normal**  
Para una eficiencia energética óptima, el dispositivo no emite información de depuración a través del puerto serial durante la operación normal. El LED tampoco parpadeará cuando el dispositivo esté en modo de sueño profundo. Esto es intencional para minimizar el consumo de energía.

**Reflashear el Dispositivo**  
Para reflashear el dispositivo:

1. Presiona el botón de reset en la placa XIAO cuando inicies el proceso de flasheo
2. Sincroniza tu comando de flasheo para que coincida con el breve período activo (cuando el dispositivo no está en sueño profundo)
3. Alternativamente, mantén presionado el botón de reset, inicia el comando de flasheo, y suelta el botón de reset cuando comience el flasheo

**Re-habilitar Salida de Depuración para Desarrollo**  
Cuando desarrolles tus propios módulos o depures, puedes re-habilitar la salida serial:

1. Ejecuta `idf.py menuconfig`
2. Navega a `Component config` → `Log output`
3. Establece el nivel de log por defecto a `INFO` o `DEBUG`
4. Configura el destino de salida de log como `UART0`
5. Recuerda deshabilitar el logging verboso nuevamente antes de desplegar para preservar la vida de la batería

:::

### Sensor No Detectado

Si encuentras problemas con la detección del sensor:

1. **Verificar Conexiones**:

   - Asegúrate de que el cable Grove esté conectado correctamente tanto al sensor como a la placa de expansión
   - Verifica que estés usando un puerto Grove I2C

2. **Problemas de Dirección I2C**:

   - La dirección I2C por defecto para BME680 es 0x76. Algunos módulos podrían usar 0x77.
   - Edita la dirección I2C en la configuración si es necesario

3. **Problemas de Alimentación**:
   - Asegúrate de que el XIAO esté recibiendo suficiente energía
   - Prueba un cable USB o puerto diferente

### BLE No Está Publicitando

Si las publicidades BLE no son detectadas:

1. **Verificar Aplicación Escáner BLE**:

   - Prueba una aplicación escáner BLE diferente
   - Asegúrate de que Bluetooth esté habilitado en tu teléfono

2. **Monitorear Salida de Depuración**:

   - Usa `idf.py monitor` para verificar mensajes de error

3. **Duración de Publicidad**:
   - La configuración por defecto solo publicita por 500ms. Si te lo pierdes, incrementa `ADV_TIME_MS` en `main.c`

### Fallas de Compilación o Flasheo

Si encuentras problemas de compilación o flasheo:

1. **Versión ESP-IDF**:

   - Asegúrate de estar usando ESP-IDF v5.0 o más reciente
   - Ejecuta `. $IDF_PATH/export.sh` (Linux/macOS) o `%IDF_PATH%\export.bat` (Windows) antes de los comandos

2. **Conexión USB**:

   - Verifica que la conexión USB sea estable
   - Prueba presionar el botón de reset en la placa de expansión XIAO antes del flasheo

3. **Problemas de Puerto**:
   - Identifica el puerto correcto con `ls /dev/tty*` (Linux/macOS) o Administrador de Dispositivos (Windows)
   - Usa la bandera `-p` con el puerto correcto

## Conclusión

Ahora has construido un sistema de monitoreo ambiental eficiente en energía que usa BLE para transmitir datos de temperatura, humedad, presión y calidad del aire. Este proyecto demuestra varios conceptos importantes:

1. **Integración de Sensores**: Trabajar con sensores I2C en ESP-IDF
2. **Comunicación BLE**: Crear y gestionar publicidades BLE
3. **Gestión de Energía**: Implementar sueño profundo para operación eficiente en batería
4. **Desarrollo ESP-IDF**: Usar el framework oficial de Espressif para desarrollo ESP32

### Arquitectura General del Sistema

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/11.png" style={{width:800, height:'auto'}}/></div>

Esta base puede extenderse para crear nodos sensores IoT más complejos, sistemas de monitoreo ambiental, o soluciones de seguimiento de activos.

## Recursos

- [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/)
- [Wiki XIAO ESP32-C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/)
- [Hoja de Datos BME680](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/)
- [Repositorio GitHub del Proyecto](https://github.com/Priyanshu0901/xiao_ibeacon)

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [Priyanshu Roy](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=106309063&issue=Seeed-Studio%7Cwiki-documents%7C2422) por sus esfuerzos dedicados. Tu trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

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
