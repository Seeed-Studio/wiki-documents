---
description: Tutorial XIAO ESP32S3 con Modulo Wio-WM6180 Wi-Fi HaLow
title: Primeros Pasos con el Módulo Wi-Fi HaLow para XIAO
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /es/getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 05/19/2025
  author: Guillermo
---


# Primeros Pasos con el Módulo Wi-Fi HaLow para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Este tutorial te guiará en la configuración y uso del Módulo Wi-Fi HaLow Wio-WM6180 con una XIAO ESP32S3 para construir un cliente Wi-Fi HaLow. Wi-Fi HaLow (IEEE 802.11ah) está diseñado para aplicaciones IoT de largo alcance y bajo consumo energético, operando en la banda de frecuencia sub-1 GHz. A lo largo del tutorial, revisaremos la configuración del hardware, la configuración del software y demostraremos cómo establecer conectividad Wi-Fi HaLow para tus proyectos IoT.

### Características Clave

- Conectividad Wi-Fi de largo alcance de hasta 1 km en línea de vista
- Bajo consumo de energía ideal para dispositivos IoT
- Operación en sub-1 GHz para mejor penetración a través de paredes y obstáculos
- Compatible con la placa de desarrollo XIAO ESP32S3
- Proceso de configuración fácil de seguir

## Descripción General del Hardware

La siguiente tabla resume las especificaciones clave del Módulo Wi-Fi HaLow Wio-WM6180:

| Característica       | Valor             | Unidad |
|:--------------------:|:-----------------:|:------:|
| Voltaje de operación | 3.3               | V      |
| Corriente de operación | TBD             | mA     |
| Protocolo Wi-Fi      | IEEE 802.11ah     | -      |
| Banda de frecuencia  | Sub-1 GHz         | -      |
| Alcance              | Hasta 1           | km     |
| Interfaz             | SPI               | -      |
| Dimensiones          | TBD               | mm     |

## ¿Qué es Wi-Fi HaLow?

Wi-Fi HaLow es un protocolo de red inalámbrica basado en el estándar IEEE 802.11ah, diseñado específicamente para aplicaciones del Internet de las Cosas (IoT). Operando en la banda de frecuencia sub-1 GHz (típicamente 900 MHz), Wi-Fi HaLow ofrece varias ventajas importantes sobre el Wi-Fi tradicional:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **Alcance Extendido**: Wi-Fi HaLow puede alcanzar distancias de hasta 1 kilómetro en condiciones de línea de vista, superando con creces el alcance del Wi-Fi convencional.

2. **Mejor Penetración**: Las señales de menor frecuencia pueden penetrar mejor a través de paredes y otros obstáculos, lo que lo hace ideal para entornos desafiantes.

3. **Bajo Consumo de Energía**: Diseñado pensando en los dispositivos IoT, Wi-Fi HaLow permite años de duración de batería para los dispositivos conectados.

4. **Escalabilidad**: Soporta miles de dispositivos conectados a un solo punto de acceso, perfecto para implementaciones IoT a gran escala.

5. **Seguridad**: Hereda las sólidas funciones de seguridad de la familia Wi-Fi, incluida la encriptación WPA3.


### ¿Por Qué es Importante Wi-Fi HaLow?

Wi-Fi HaLow responde a las crecientes necesidades de las aplicaciones IoT que requieren conectividad de largo alcance, bajo consumo energético y la capacidad de manejar numerosos dispositivos simultáneamente. Llena el vacío entre el Wi-Fi tradicional y las tecnologías LPWAN, ofreciendo:

- **IoT Industrial**: Habilita conectividad confiable en fábricas, almacenes y entornos industriales.
- **Agricultura Inteligente**: Proporciona cobertura en grandes áreas agrícolas para redes de sensores.
- **Ciudades Inteligentes**: Soporta redes extensas de dispositivos conectados en entornos urbanos.
- **Rastreo de Activos**: Permite el seguimiento a larga distancia de activos y equipos valiosos.

Al combinar la familiaridad del Wi-Fi con los beneficios de conectividad de bajo consumo y largo alcance, Wi-Fi HaLow está preparado para desempeñar un papel crucial en la expansión de las aplicaciones IoT en diversas industrias.

### Arquitectura del Sistema Wi-Fi HaLow

Una red Wi-Fi HaLow típica consta de varios componentes clave que trabajan en conjunto para habilitar la conectividad IoT de largo alcance y bajo consumo:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **Punto de Acceso (AP)**: El centro de la red Wi-Fi HaLow, responsable de gestionar las conexiones y enrutar los datos entre los dispositivos y el internet.

2. **Estaciones (STA)**: Dispositivos cliente que se conectan al Punto de Acceso. Estos pueden ser sensores, actuadores u otros dispositivos IoT.

3. **Gateway (Pasarela)**: Actúa como un puente entre la red Wi-Fi HaLow y otras redes (por ejemplo, Ethernet o celular).

En este tutorial, configuraremos el XIAO ESP32S3 como un cliente Estación (STA) que se conecta a un Punto de Acceso Wi-Fi HaLow. El XIAO utilizará el módulo WM6180 para establecer y mantener la conexión HaLow.

## Framework MM-IoT-SDK 

El módulo WM6180 utiliza el [MM-IoT-SDK de MorseMicro](https://github.com/MorseMicro/mm-iot-esp32), el cual proporciona:

- **Soporte Multiprotocolo**: Permite una integración fluida con diversos protocolos IoT
- **Gestión de Bajo Consumo**: Consumo de energía optimizado para dispositivos alimentados por batería
- **Funciones de Seguridad**: Mecanismos de cifrado y autenticación integrados
- **Configuración Sencilla**: API simplificada para la configuración y gestión de red

La arquitectura del MM-IoT-SDK se compone de varias capas:

1. **Capa de Abstracción de Hardware (HAL)**: Proporciona una interfaz unificada para diferentes plataformas de hardware
2. **Stack de Red**: Implementa el stack del protocolo Wi-Fi HaLow
3. **Capa de Aplicación**: Ofrece APIs para desarrollo de aplicaciones y gestión de dispositivos

Este framework permite a los desarrolladores implementar rápidamente la funcionalidad Wi-Fi HaLow, manteniendo flexibilidad para aplicaciones personalizadas.


## Materiales Requeridos

Estos son los materiales necesarios para ejecutar este tutorial.


<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
            <th>Módulo Wio-WM6180 Wi-Fi HaLow para XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:90, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
Este tutorial es aplicable a toda la serie XIAO ESP32. Usaremos el XIAO ESP32S3 Sense como ejemplo en este tutorial.
:::

Además de lo anterior, es posible que necesites preparar antenas adicionales adecuadas para el uso con WiFi-HaLow. A continuación se presentan los modelos de antenas verificados y recomendados.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Long Range Indoor Antenna Kit</th>
            <th>2.6dBi Long Range Antenna</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Para conectar la antena al módulo WiFi-HaLow, es posible que también necesites adquirir un **cable de antena SMA a I-PEX**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Cable de antena SMA a I-PEX</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Si es la primera vez que lo usas, puedes consultar el siguiente video para la instalación de la antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Install ESP-IDF v5.1.1

## Instalar ESP-IDF v5.1.1

Antes de comenzar a programar, necesitamos instalar ESP-IDF v5.1.1 en tu computadora. ESP-IDF es el framework oficial de desarrollo para los chips de la serie ESP32.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**Paso 1.** Descarga el instalador de herramientas de ESP-IDF para Windows

Descarga el [Instalador de Herramientas de ESP-IDF](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) para Windows. Este instalador incluye todas las herramientas necesarias para el desarrollo con ESP-IDF.

**Paso 2.** Ejecuta el instalador

1. Ejecuta el instalador descargado como administrador
2. Sigue las instrucciones para instalar Python, Git y otras herramientas necesarias
3. Cuando se te solicite, selecciona las siguientes opciones:

   * Instalar ESP-IDF v5.1.1
   * Instalar Python
   * Instalar Git
   * Agregar ESP-IDF Tools al Path

**Paso 3.** Verifica la instalación

Abre una nueva ventana de Símbolo del sistema (Command Prompt) y ejecuta:

```bash
esp-idf --version
```

Si la instalación fue exitosa, deberías ver el número de versión 5.1.1.

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Paso 1.** Instalar los prerrequisitos

Abre la Terminal e instala Homebrew si aún no lo tienes:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Instala los paquetes necesarios:

```bash
brew install cmake ninja dfu-util
```

**Paso 2.** Descargar e instalar ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Paso 3.** Configurar las variables de entorno

```bash
. $HOME/esp/esp-idf/export.sh
```

Agrega esta línea a tu archivo `~/.profile` o `~/.zshrc` para que las variables de entorno se configuren automáticamente al abrir una nueva terminal.


</TabItem>

<TabItem value="Linux" label="Linux">

### **Paso 1.** Instalar prerrequisitos

Para Ubuntu y Debian, ejecuta en la terminal:

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

> 💡 Para otras distribuciones, instala los paquetes equivalentes de acuerdo con tu sistema.

---

### **Paso 2.** Descargar e instalar ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

---

### **Paso 3.** Configurar las variables de entorno

```bash
. $HOME/esp/esp-idf/export.sh
```

Para que las variables se carguen automáticamente cada vez que abras la terminal, agrega esta línea al final de tu archivo `~/.bashrc`:

```bash
echo '. $HOME/esp/esp-idf/export.sh' >> ~/.bashrc
```

Luego, recarga la configuración con:

```bash
source ~/.bashrc
```

</TabItem>
</Tabs>

:::tip
Después de la instalación, es posible que necesites reiniciar tu computadora para asegurarte de que todas las variables de entorno se configuren correctamente.
:::

:::note
Para obtener instrucciones más detalladas sobre cómo instalar ESP-IDF v5.1.1, puedes consultar la documentación oficial de Espressif:
- [Guía de inicio de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)
:::

## Clonar y Configurar el Repositorio mm-iot-esp32

Sigue estos pasos para clonar el repositorio mm-iot-esp32 y configurar las variables de entorno:

<Tabs>
<TabItem value="Windows" label="Windows">

**Step 1.** Clona el repositorio
```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Exporta variables IDF
```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**Step 3.** Establece la variable de entorno MMIOT_ROOT

Puedes establecer esto de forma permanente a través de las Propiedades del Sistema de Windows:
1. Abre las Propiedades del Sistema (Win + R, escribe `sysdm.cpl`)
2. Haz clic en "Variables de entorno"
3. En "Variables de usuario", haz clic en "Nueva"
4. Nombre de la variable: `MMIOT_ROOT`
5. Valor de la variable: `C:\Users\TuUsuario\mm-iot-esp32` (reemplaza con tu ruta real)
6. Haz clic en "Aceptar" para guardar

Alternativamente, puedes establecerla de forma temporal en el Command Prompt (cmd):
```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Paso 1.** Clona el repositorio
```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Paso 2.** Exporta variables IDF
```bash
cd ~/mm-iot-esp32
source export.sh
```

**Paso 3.** Establece la variable de entorno MMIOT_ROOT

Para uso temporal:
```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, agrega a tu archivo shell de configuración:
```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Luego recarga tu configuración shell:
```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**Step 1.** Clona el repositorio
```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Exporta variables IDF
```bash
cd ~/mm-iot-esp32
source export.sh
```

**Step 3.** Establece la variable de entorno MMIOT_ROOT

Para uso temporal:
```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, agrega a tu archivo shell de configuración:
```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Luego recarga tu archivo shell de configuración:
```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
Asegúrate de usar rutas absolutas al configurar la variable de entorno MMIOT_ROOT. Las rutas relativas pueden causar problemas al compilar los proyectos.
:::

:::note
Después de configurar las variables de entorno, es posible que necesites cerrar y volver a abrir tu terminal para que los cambios surtan efecto.
:::

## Compilar el Firmware de Ejemplo

El repositorio mm-iot-esp32 incluye varias aplicaciones de ejemplo que demuestran diferentes funcionalidades. A continuación se explica cómo compilar y configurar estos ejemplos:

### Ubicación de las Aplicaciones de Ejemplo

Todas las aplicaciones de ejemplo se encuentran en el directorio `examples` del repositorio. Algunos ejemplos disponibles son:

- `scan`: Ejemplo de escaneo Wi-Fi
- `iperf`: Ejemplo de servidor iperf
- `sta_reboot`: Ejemplo de reinicio de estación Wi-Fi
- `sta_connect`: Ejemplo de conexión de estación Wi-Fi
- `web_camera_server`: Ejemplo de servidor de cámara web
- Y más...

### Configurar las Credenciales de Red

Antes de compilar el firmware, necesitas configurar los ajustes de red en el archivo de configuración del ejemplo:

1. Navega al directorio del ejemplo que hayas elegido:

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. Edita el archivo de configuración:

```bash
# Abre el archivo de configuración
nano src/mm_app_loadconfig.c
```

3. En este archivo, puedes modificar:

- El código de país (debe establecerse en **US**, ya que el producto actualmente solo está disponible para América del Norte)
- Las credenciales de red Wi-Fi HaLow
- Otros parámetros relacionados con la red

:::caution
Nota importante sobre el código de país:
- El código de país debe establecerse en "US", ya que este producto actualmente solo está disponible para el mercado de América del Norte
- El producto aún no está disponible en otras regiones debido a requisitos regulatorios
- Usar el producto en regiones fuera de América del Norte puede violar regulaciones locales
:::

### Proceso de Compilación

Después de configurar los ajustes de red, puedes compilar el firmware utilizando los siguientes comandos:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note
- El comando `idf.py set-target` solo necesita ejecutarse una vez por cada ejemplo
- `idf.py fullclean` garantiza una compilación limpia eliminando todos los artefactos de compilaciones anteriores
- Después de una compilación exitosa, el archivo binario del firmware se ubicará en el directorio `build`
:::

### Salida de la Compilación

Después de una compilación exitosa, deberías ver una salida similar a esta:

```bash
# Project build complete. To flash, run this command:
# 
idf.py -p (PORT) flash
```

A continuación, mostraremos algunos ejemplos.

## Ejemplo 1. scan

Este ejemplo demuestra cómo escanear redes Wi-Fi HaLow disponibles en tu área. Sigue estos pasos para compilar y ejecutar el ejemplo de escaneo:

### Paso 1: Navegar al Ejemplo de Escaneo

```bash
cd ~/mm-iot-esp32/example/scan
```

### Paso 2: Configura el código de país

1. Abre el archvio de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Localiza y modifica la línea de país del código:

```c
#define COUNTRY_CODE "US"  // Debe usar "US" porque el producto solo se encuentra disponible en Norte América
```

### Paso 3: Configuración del Hardware

1. Conecta el módulo Wi-Fi HaLow Wio-WM6180 a tu XIAO ESP32S3

2. Conecta el XIAO ESP32S3 a tu computadora mediante USB

### Paso 4: Compilar y Grabar

Ejecuta los siguientes comandos en orden:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Monitorear Resultados

Si todo funciona correctamente:
- El monitor serial se iniciará automáticamente después de grabar el firmware
- El programa comenzará a escanear redes Wi-Fi HaLow
- Si hay alguna puerta de enlace Wi-Fi HaLow dentro del alcance, su información se mostrará en el monitor serial

Ejemplo de salida en el monitor serial:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>


:::tip
- Asegúrate de que haya puertas de enlace Wi-Fi HaLow en tu área para detectar redes
- El proceso de escaneo se ejecuta continuamente, por lo que verás actualizaciones periódicas de las redes disponibles
- Presiona Ctrl+C para detener el monitor y salir del programa
:::

:::note
Si no ves ninguna red:
- Verifica que tu puerta de enlace Wi-Fi HaLow esté encendida y funcionando
- Comprueba que estés dentro del rango de la puerta de enlace
- Asegúrate de que el módulo esté correctamente conectado a tu XIAO ESP32S3
:::

## Ejemplo 2. iperf

Este ejemplo demuestra cómo probar el rendimiento de red de tu conexión Wi-Fi HaLow usando iPerf. Sigue estos pasos para compilar y ejecutar el ejemplo de iPerf:

### Paso 1: Naviga el Ejemplo iPerf

```bash
cd ~/mm-iot-esp32/example/iperf
```

### Paso 2: Configurar Ajustes de Red

1. Abre el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifica los siguiens parámetros:

```cpp
// Establece el código de país (debe ser "US" para Norte America)
#define COUNTRY_CODE "US"

// Establece tus credenciales de red Wi-Fi HaLow
#define SSID             Your_HaLow_SSID           // Remplaza con el nombre de tu red
#define SAE_PASSPHRASE   Your_Password             // Remplaza con la contraseña de tu red
```

### Paso 3: Configuración del Hardware

1. Conecta el módulo Wi-Fi HaLow Wio-WM6180 a tu XIAO ESP32S3  
2. Conecta el XIAO ESP32S3 a tu computadora mediante USB

### Paso 4: Compilar y Grabar

Ejecuta los siguientes comandos en orden:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Ejecutar Prueba de Rendimiento

Una vez que el programa esté funcionando correctamente, verás que el servicio iPerf se inicia. Ahora puedes ejecutar pruebas de rendimiento desde tu puerta de enlace Wi-Fi HaLow.

Para la prueba IPv4, ejecuta este comando en tu puerta de enlace:

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

Para la prueba IPv6, ejecuta este comando en tu puerta de enlace:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

Los parámetros explicados:

- `-c`: Ejecutar en modo cliente
- `-p`: Número de puerto
- `-i`: Intervalo de reporte (1 segundo)
- `-u`: Usar protocolo UDP
- `-b`: Ancho de banda objetivo (20 Mbps)
- `-V`: Modo IPv6 (solo para pruebas IPv6)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
- Asegúrate de que tu dispositivo esté conectado correctamente a la red Wi-Fi HaLow antes de ejecutar la prueba de rendimiento
- La dirección IP del dispositivo se mostrará en el monitor serial después de la conexión
- Puedes ajustar el ancho de banda (parámetro -b) según tus necesidades de prueba
:::

:::note
Problemas comunes y soluciones:
- Si la conexión falla, verifica tus credenciales de red
- Si el servicio iPerf no se inicia, revisa las conexiones de hardware
- Si el rendimiento es bajo, asegúrate de estar dentro de un buen rango de la puerta de enlace
:::

## Ejemplo 3. web_camera_server

Este ejemplo demuestra cómo transmitir la cámara desde el XIAO ESP32S3 Sense a través de la red Wi-Fi HaLow. Sigue estos pasos para compilar y ejecutar el servidor de cámara web:

### Paso 1: Navega al Ejemplo de la Cámara Web

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### Paso 2: Configura Ajustes de Red

1. Abre el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifica las credenciales para Wi-Fi HaLow:

```cpp
// Establece tus configuraciones Wi-Fi HaLow
#define SSID              Your_HaLow_SSID           // Remplaza con el nombre de tu red
#define SAE_PASSPHRASE    Your_Password             // Remplaza con la contraseña de tu red
```

### Paso 3: Configuración del Hardware

1. Conecta el módulo Wi-Fi HaLow Wio-WM6180 a tu XIAO ESP32S3 Sense  
2. Asegúrate de que el módulo de cámara en tu XIAO ESP32S3 Sense esté correctamente conectado  
3. Conecta el XIAO ESP32S3 Sense a tu computadora mediante USB  

### Paso 4: Compilar y Grabar

Ejecuta los siguientes comandos en orden:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Acceder a la Transmisión de la Cámara

Una vez que el programa esté funcionando correctamente:

1. Anota la dirección IP que se muestra en el monitor serial  
2. Abre un navegador web en cualquier dispositivo conectado a la misma red que tu puerta de enlace Wi-Fi HaLow  
3. Ingresa la dirección IP en la barra de direcciones del navegador  
4. Ahora deberías poder ver la transmisión en vivo de la cámara desde tu XIAO ESP32S3 Sense  

URL de ejemplo:

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Para una mejor experiencia de transmisión:
- Asegura buenas condiciones de iluminación para una mejor calidad de imagen
- Mantén el XIAO ESP32S3 Sense dentro del buen rango de la puerta de enlace Wi-Fi HaLow
- Usa un navegador web moderno para una compatibilidad óptima
:::

:::note
Solución de problemas:
- Si no puedes acceder a la transmisión de la cámara, verifica que tu dispositivo esté en la misma red que la puerta de enlace Wi-Fi HaLow
- Si la imagen no se muestra, revisa que el módulo de cámara esté correctamente conectado
- Si la transmisión se ve lenta o con retraso, intenta acercarte a la puerta de enlace Wi-Fi HaLow
:::

## Recursos

- **[GITHUB]** [Repositorio mm-iot-esp32](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [Documento mm-iot](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [Archivo KiCAD PCB WI-FI_HALOW_FGH100M_EXT01_V30](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Especificaciones del Módulo de Corto Alcance_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
