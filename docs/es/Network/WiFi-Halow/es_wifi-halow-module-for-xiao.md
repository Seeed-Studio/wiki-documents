---
description: XIAO ESP32S3 con Tutorial del Módulo Wi-Fi HaLow Wio-WM6180
title: Comenzando con el Módulo Wi-Fi HaLow para XIAO
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /es/getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
---


# Comenzando con el Módulo Wi-Fi HaLow para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Este tutorial te guiará a través de la configuración y uso del Módulo Wi-Fi HaLow Wio-WM6180 con un XIAO ESP32S3 para construir un cliente Wi-Fi HaLow. Wi-Fi HaLow (IEEE 802.11ah) está diseñado para aplicaciones IoT de largo alcance y bajo consumo de energía, operando en la banda de frecuencia sub-1 GHz. Te guiaremos a través de la configuración del hardware, configuración del software, y demostraremos cómo establecer conectividad Wi-Fi HaLow para tus proyectos IoT.

### Características Clave

- Conectividad Wi-Fi de largo alcance hasta 1km en línea de vista
- Bajo consumo de energía ideal para dispositivos IoT
- Operación sub-1 GHz para mejor penetración a través de paredes y obstáculos
- Compatible con la placa de desarrollo XIAO ESP32S3
- Proceso de configuración y configuración fácil de seguir

## Descripción General del Hardware

La siguiente tabla describe las especificaciones clave del Módulo Wi-Fi HaLow Wio-WM6180:

| Característica | Valor | Unidad |
|:-------------:|:-----:|:----:|
| Voltaje de Operación | 3.3 | V |
| Corriente de Operación | TBD | mA |
| Protocolo Wi-Fi | IEEE 802.11ah | - |
| Banda de Frecuencia | Sub-1 GHz | - |
| Alcance | Hasta 1 | km |
| Interfaz | SPI | - |
| Dimensiones | TBD | mm |

## ¿Qué es Wi-Fi HaLow?

Wi-Fi HaLow es un protocolo de red inalámbrica basado en el estándar IEEE 802.11ah, específicamente diseñado para aplicaciones de Internet de las Cosas (IoT). Operando en la banda de frecuencia sub-1 GHz (típicamente 900 MHz), Wi-Fi HaLow ofrece varias ventajas significativas sobre el Wi-Fi tradicional:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **Alcance Extendido**: Wi-Fi HaLow puede alcanzar distancias de hasta 1 kilómetro en condiciones de línea de vista, superando por mucho el alcance del Wi-Fi convencional.

2. **Penetración Mejorada**: Las señales de menor frecuencia pueden penetrar mejor a través de paredes y otros obstáculos, haciéndolo ideal para entornos desafiantes.

3. **Bajo Consumo de Energía**: Diseñado pensando en dispositivos IoT, Wi-Fi HaLow permite años de vida útil de la batería para dispositivos conectados.

4. **Escalabilidad**: Soporta miles de dispositivos conectados a un solo punto de acceso, perfecto para despliegues IoT a gran escala.

5. **Seguridad**: Hereda las características de seguridad robustas de la familia Wi-Fi, incluyendo encriptación WPA3.

### Por Qué Importa Wi-Fi HaLow

Wi-Fi HaLow aborda las necesidades crecientes de aplicaciones IoT que requieren conectividad de largo alcance, bajo consumo de energía, y la capacidad de manejar numerosos dispositivos simultáneamente. Cierra la brecha entre el Wi-Fi tradicional y las tecnologías LPWAN, ofreciendo:

- **IoT Industrial**: Permite conectividad confiable en fábricas, almacenes, y entornos industriales.
- **Agricultura Inteligente**: Proporciona cobertura a través de grandes áreas agrícolas para redes de sensores.
- **Ciudades Inteligentes**: Soporta extensas redes de dispositivos conectados en entornos urbanos.
- **Seguimiento de Activos**: Permite el seguimiento de largo alcance de activos y equipos valiosos.

Al combinar la familiaridad del Wi-Fi con los beneficios de conectividad de bajo consumo y largo alcance, Wi-Fi HaLow está preparado para desempeñar un papel crucial en la expansión de aplicaciones IoT a través de varias industrias.

### Arquitectura del Sistema Wi-Fi HaLow

Una red Wi-Fi HaLow típica consiste en varios componentes clave que trabajan juntos para habilitar conectividad IoT de largo alcance y bajo consumo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **Punto de Acceso (AP)**: El hub central de la red Wi-Fi HaLow, responsable de gestionar conexiones y enrutar datos entre dispositivos e internet.

2. **Estaciones (STA)**: Los dispositivos cliente que se conectan al Punto de Acceso. Estos pueden ser sensores, actuadores, u otros dispositivos IoT.

3. **Gateway**: Actúa como un puente entre la red Wi-Fi HaLow y otras redes (ej., Ethernet o celular).

En este tutorial, configuraremos el XIAO ESP32S3 como un cliente Estación (STA) que se conecta a un Punto de Acceso Wi-Fi HaLow. El XIAO usará el módulo WM6180 para establecer y mantener la conexión HaLow.

## Marco de Trabajo MM-IoT-SDK

El módulo WM6180 utiliza [MM-IoT-SDK de MorseMicro](https://github.com/MorseMicro/mm-iot-esp32), que proporciona:

- **Soporte Multi-protocolo**: Permite integración perfecta con varios protocolos IoT
- **Gestión de Bajo Consumo**: Consumo de energía optimizado para dispositivos alimentados por batería
- **Características de Seguridad**: Mecanismos de cifrado y autenticación integrados
- **Configuración Fácil**: API simplificada para configuración y gestión de red

La arquitectura MM-IoT-SDK consta de varias capas:

1. **Capa de Abstracción de Hardware (HAL)**: Proporciona una interfaz unificada para diferentes plataformas de hardware
2. **Pila de Red**: Implementa la pila de protocolo Wi-Fi HaLow
3. **Capa de Aplicación**: Ofrece APIs para desarrollo de aplicaciones y gestión de dispositivos

Este marco de trabajo permite a los desarrolladores implementar rápidamente la funcionalidad Wi-Fi HaLow mientras mantiene flexibilidad para aplicaciones personalizadas.

## Materiales Requeridos

Aquí están los materiales necesarios para ejecutar este tutorial.

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
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
Este tutorial es aplicable a toda la serie XIAO ESP32. Usaremos XIAO ESP32S3 Sense como ejemplo en este tutorial.
:::

Además de lo anterior, es posible que necesites preparar antenas adicionales adecuadas para el uso de WiFi-Halow. Aquí están los modelos de antena verificados y recomendados.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Kit de Antena Interior de Largo Alcance</th>
            <th>Antena de Largo Alcance 2.6dBi</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Para conectar la antena al módulo WiFi-Halow, también puede que necesites comprar el **Cable de Antena SMA a I-PEX**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Cable de Antena SMA a I-PEX</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Si lo estás usando por primera vez, puedes consultar el siguiente video para la instalación de la antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalar ESP-IDF v5.1.1

Antes de comenzar a programar, necesitamos instalar ESP-IDF v5.1.1 en tu computadora. ESP-IDF es el framework de desarrollo oficial para los chips de la serie ESP32.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**Paso 1.** Descargar el Instalador de Herramientas ESP-IDF para Windows

Descarga el [Instalador de Herramientas ESP-IDF](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) para Windows. Este instalador incluye todas las herramientas necesarias para el desarrollo con ESP-IDF.

**Paso 2.** Ejecutar el instalador

1. Ejecuta el instalador descargado como administrador
2. Sigue las indicaciones para instalar Python, Git y otras herramientas requeridas
3. Cuando se te solicite, selecciona las siguientes opciones:
   - Instalar ESP-IDF v5.1.1
   - Instalar Python
   - Instalar Git
   - Agregar Herramientas ESP-IDF al Path

**Paso 3.** Verificar la instalación

Abre un nuevo Símbolo del sistema y ejecuta:

```bash
esp-idf --version
```

Si la instalación fue exitosa, deberías ver el número de versión 5.1.1.

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Paso 1.** Instalar prerrequisitos

Abre Terminal e instala Homebrew si aún no lo has hecho:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Instala los paquetes requeridos:

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

Añade esta línea a tu `~/.profile` o `~/.zshrc` para configurar automáticamente las variables de entorno al abrir una nueva terminal.

</TabItem>

<TabItem value="Linux" label="Linux">

**Paso 1.** Instalar prerrequisitos

Para Ubuntu y Debian:

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

Para otras distribuciones, por favor instala los paquetes equivalentes.

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

Añade esta línea a tu `~/.bashrc` para configurar automáticamente las variables de entorno al abrir una nueva terminal.

</TabItem>
</Tabs>

:::tip
Después de la instalación, es posible que necesites reiniciar tu computadora para asegurar que todas las variables de entorno estén configuradas correctamente.
:::

:::note
Para instrucciones más detalladas sobre la instalación de ESP-IDF v5.1.1, puedes consultar la documentación oficial de Espressif:

- [Guía de Inicio de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## Clonar y Configurar el Repositorio mm-iot-esp32

Sigue estos pasos para clonar el repositorio mm-iot-esp32 y configurar las variables de entorno:

<Tabs>
<TabItem value="Windows" label="Windows">

**Paso 1.** Clonar el repositorio

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Paso 2.** Exportar variables IDF

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**Paso 3.** Establecer la variable de entorno MMIOT_ROOT

Puedes establecer esto permanentemente a través de las Propiedades del Sistema de Windows:

1. Abrir Propiedades del Sistema (Win + R, escribir `sysdm.cpl`)
2. Hacer clic en "Variables de entorno"
3. Bajo "Variables de usuario", hacer clic en "Nuevo"
4. Nombre de variable: `MMIOT_ROOT`
5. Valor de variable: `C:\Users\TuNombreDeUsuario\mm-iot-esp32` (reemplazar con tu ruta actual)
6. Hacer clic en "Aceptar" para guardar

Alternativamente, puedes establecerlo temporalmente en el Símbolo del sistema:

```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Paso 1.** Clonar el repositorio

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Paso 2.** Exportar variables IDF

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Paso 3.** Establecer la variable de entorno MMIOT_ROOT

Para uso temporal:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, añade a tu archivo de configuración de shell:

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Luego recarga la configuración de tu shell:

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**Paso 1.** Clonar el repositorio

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Paso 2.** Exportar variables IDF

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Paso 3.** Establecer la variable de entorno MMIOT_ROOT

Para uso temporal:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, añade a tu archivo de configuración de shell:

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Luego recarga la configuración de tu shell:

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
Asegúrate de usar rutas absolutas al configurar la variable de entorno MMIOT_ROOT. Las rutas relativas pueden causar problemas al compilar proyectos.
:::

:::note
Después de configurar las variables de entorno, es posible que necesites cerrar y reabrir tu terminal para que los cambios surtan efecto.
:::

## Compilando Firmware de Ejemplo

El repositorio mm-iot-esp32 incluye varias aplicaciones de ejemplo que demuestran diferentes funcionalidades. Aquí te mostramos cómo compilar y configurar estos ejemplos:

### Ubicación de las Aplicaciones de Ejemplo

Todas las aplicaciones de ejemplo se pueden encontrar en el directorio `examples` del repositorio. Los ejemplos disponibles incluyen:

- `scan`: Ejemplo de escaneo Wi-Fi
- `iperf`: Ejemplo de servidor iperf
- `sta_reboot`: Ejemplo de reinicio de estación Wi-Fi
- `sta_connect`: Ejemplo de conexión de estación Wi-Fi
- `web_camera_server`: Ejemplo de servidor de cámara web
- Y más...

### Configurar Credenciales de Red

Antes de compilar el firmware, necesitas configurar los ajustes de red en el archivo de configuración del ejemplo:

1. Navega al directorio del ejemplo elegido:

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. Edita el archivo de configuración:

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. En este archivo, puedes modificar:

- Código de país (debe establecerse en **US** ya que el producto actualmente solo está disponible para América del Norte)
- Credenciales de red Wi-Fi HaLow
- Otros parámetros relacionados con la red

:::caution
Nota Importante Sobre el Código de País:

- El código de país debe establecerse en "US" ya que este producto actualmente solo está disponible para el mercado de América del Norte
- El producto aún no está disponible para otras regiones debido a requisitos regulatorios
- Usar el producto en regiones distintas a América del Norte puede violar las regulaciones locales

:::

### Proceso de Construcción

Después de configurar los ajustes de red, puedes construir el firmware usando estos comandos:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- El comando `idf.py set-target` solo necesita ejecutarse una vez para cada ejemplo
- `idf.py fullclean` asegura una compilación limpia eliminando todos los artefactos de compilación previos
- Después de una compilación exitosa, el binario del firmware se ubicará en el directorio `build`

:::

### Salida de Compilación

Después de una compilación exitosa, deberías ver una salida similar a esta:

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

A continuación, demostraremos algunos ejemplos.

## Ejemplo 1. escaneo

Este ejemplo demuestra cómo escanear las redes Wi-Fi HaLow disponibles en tu área. Sigue estos pasos para compilar y ejecutar el ejemplo de escaneo:

### Paso 1: Navegar al Ejemplo de Escaneo

```bash
cd ~/mm-iot-esp32/example/scan
```

### Paso 2: Configurar el Código de País

1. Abrir el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Localiza y modifica la línea del código de país:

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### Paso 3: Configuración del Hardware

1. Conecta el Módulo Wi-Fi HaLow Wio-WM6180 a tu XIAO ESP32S3

2. Conecta el XIAO ESP32S3 a tu computadora vía USB

### Paso 4: Compilar y Flashear

Ejecuta los siguientes comandos en secuencia:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Monitorear Resultados

Si todo está funcionando correctamente:

- El monitor serie se iniciará automáticamente después del flasheo
- El programa comenzará a escanear redes Wi-Fi HaLow
- Si hay gateways Wi-Fi HaLow en el rango, su información se mostrará en el monitor serie

Ejemplo de salida en el monitor serie:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Asegúrate de que haya gateways Wi-Fi HaLow en tu proximidad para detectar redes
- El proceso de escaneo se ejecuta continuamente, por lo que verás actualizaciones periódicas de las redes disponibles
- Presiona Ctrl+C para detener el monitor y salir del programa

:::

:::note
Si no ves ninguna red:

- Verifica que tu gateway Wi-Fi HaLow esté encendido y funcionando
- Comprueba que estés dentro del rango del gateway
- Asegúrate de que el módulo esté conectado correctamente a tu XIAO ESP32S3

:::

## Ejemplo 2. iperf

Este ejemplo demuestra cómo probar el rendimiento de red de tu conexión Wi-Fi HaLow usando iPerf. Sigue estos pasos para construir y ejecutar el ejemplo de iPerf:

### Paso 1: Navegar al Ejemplo de iPerf

```bash
cd ~/mm-iot-esp32/example/iperf
```

### Paso 2: Configurar los Ajustes de Red

1. Abrir el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifica los siguientes parámetros:

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### Paso 3: Configuración del Hardware

1. Conecta el Módulo Wi-Fi HaLow Wio-WM6180 a tu XIAO ESP32S3
2. Conecta el XIAO ESP32S3 a tu computadora vía USB

### Paso 4: Compilar y Flashear

Ejecuta los siguientes comandos en secuencia:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Ejecutar Prueba de Rendimiento

Una vez que el programa se ejecute exitosamente, verás que el servicio iPerf se inicia. Ahora puedes ejecutar pruebas de rendimiento desde tu gateway Wi-Fi HaLow.

Para pruebas IPv4, ejecuta este comando en tu gateway:

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

Para pruebas IPv6, ejecuta este comando en tu gateway:

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

- Asegúrate de que tu dispositivo se haya conectado exitosamente a la red Wi-Fi HaLow antes de ejecutar la prueba de rendimiento
- La dirección IP del dispositivo se mostrará en el monitor serie después de la conexión
- Puedes ajustar el ancho de banda (parámetro -b) según tus necesidades de prueba

:::

:::note
Problemas comunes y soluciones:

- Si la conexión falla, verifica las credenciales de tu red
- Si el servicio iPerf no inicia, revisa las conexiones de tu hardware
- Si el rendimiento es pobre, asegúrate de estar dentro de un buen rango del gateway

:::

## Ejemplo 3. web_camera_server

Este ejemplo demuestra cómo transmitir la alimentación de cámara desde XIAO ESP32S3 Sense a través de la red Wi-Fi HaLow. Sigue estos pasos para construir y ejecutar el servidor de cámara web:

### Paso 1: Navegar al Ejemplo de Cámara Web

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### Paso 2: Configurar los Ajustes de Red

1. Abrir el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifica las credenciales de Wi-Fi HaLow:

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### Paso 3: Configuración del Hardware

1. Conecta el Módulo Wi-Fi HaLow Wio-WM6180 a tu XIAO ESP32S3 Sense
2. Asegúrate de que el módulo de cámara en tu XIAO ESP32S3 Sense esté conectado correctamente
3. Conecta el XIAO ESP32S3 Sense a tu computadora vía USB

### Paso 4: Compilar y Flashear

Ejecuta los siguientes comandos en secuencia:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Acceder al Feed de la Cámara

Una vez que el programa se esté ejecutando exitosamente:

1. Anota la dirección IP mostrada en el monitor serie
2. Abre un navegador web en cualquier dispositivo conectado a la misma red que tu gateway Wi-Fi HaLow
3. Ingresa la dirección IP en la barra de direcciones de tu navegador
4. Ahora deberías ver el feed de cámara en vivo desde tu XIAO ESP32S3 Sense

URL de ejemplo:

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Para la mejor experiencia de transmisión:

- Asegúrate de tener buenas condiciones de iluminación para una mejor calidad de imagen
- Mantén el XIAO ESP32S3 Sense dentro de un buen rango del gateway Wi-Fi HaLow
- Usa un navegador web moderno para una compatibilidad óptima

:::

:::note
Solución de problemas:

- Si no puedes acceder a la transmisión de la cámara, verifica que tu dispositivo esté en la misma red que el gateway Wi-Fi HaLow
- Si la imagen no se muestra, verifica que el módulo de la cámara esté conectado correctamente
- Si la transmisión está lenta, intenta acercarte más al gateway Wi-Fi HaLow

:::

## Recursos

- **[GITHUB]** [Repositorio mm-iot-esp32](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [Documento mm-iot](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [Archivo PCB KiCAD WI-FI_HALOW_FGH100M_EXT01_V30](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

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
