---
description: Tutorial del módulo Wi-Fi HaLow Wio-WM6108 con XIAO ESP32S3
title: Introducción al módulo Wi-Fi HaLow para XIAO
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /getting_started_with_wifi_halow_module_for_xiao
sku: 109100041
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
createdAt: '2025-02-13'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/getting_started_with_wifi_halow_module_for_xiao/
---


# Introducción al módulo Wi-Fi HaLow para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Este tutorial te guiará en la configuración y uso del módulo Wio-WM6108 Wi-Fi HaLow con un XIAO ESP32S3 para construir un cliente Wi-Fi HaLow. Wi-Fi HaLow (IEEE 802.11ah) está diseñado para aplicaciones IoT de largo alcance y bajo consumo, que operan en la banda de frecuencia sub-1 GHz. Veremos la configuración de hardware, la configuración de software y mostraremos cómo establecer conectividad Wi-Fi HaLow para tus proyectos IoT.

### Características clave

- Conectividad Wi-Fi de largo alcance de hasta 1 km en línea de vista
- Bajo consumo de energía, ideal para dispositivos IoT
- Funcionamiento en sub-1 GHz para mejor penetración a través de paredes y obstáculos
- Compatible con la placa de desarrollo XIAO ESP32S3
- Proceso de configuración y ajuste fácil de seguir

## Descripción general del hardware

La siguiente tabla describe las especificaciones clave del módulo Wio-WM6108 Wi-Fi HaLow:

| Característica | Valor | Unidad |
|:-------------:|:-----:|:----:|
| Tensión de funcionamiento | 3.3 (Digital) / 5.0 (RF front-end)| V |
| Corriente de funcionamiento | TBD | mA |
| Protocolo Wi-Fi | IEEE 802.11ah | - |
| Banda de frecuencia | Sub-1 GHz | - |
| Alcance | Hasta 1 | km |
| Interfaz | SPI | - |
| Dimensiones | TBD | mm |

:::caution Both 3.3/5.0V power supply are required
Esta placa requiere **dos** entradas de alimentación separadas:
- El **pad de 3.3V** alimenta los raíles digitales del módulo.
- El **pad de 5.0V** alimenta el front-end de RF (amplificador de potencia TX) a través de un raíl separado.

Cuando el módulo está conectado a una placa de expansión XIAO, ambos raíles de alimentación se proporcionan automáticamente a través del conector de expansión.

Sin embargo, **cuando se cablea la placa a un sistema host mediante la interfaz de pads (por ejemplo, una Raspberry Pi a través de SPI), debes conectar todos los 5V, 3.3V y GND.**

Si solo se conecta 3.3V, el módulo podrá cargar firmware y recibir normalmente, pero **no puede transmitir a la potencia nominal.**
:::

## ¿Qué es Wi-Fi HaLow?

Wi-Fi HaLow es un protocolo de red inalámbrica basado en el estándar IEEE 802.11ah, diseñado específicamente para aplicaciones de Internet de las Cosas (IoT). Al operar en la banda de frecuencia sub-1 GHz (normalmente 900 MHz), Wi-Fi HaLow ofrece varias ventajas significativas sobre el Wi-Fi tradicional:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **Alcance extendido**: Wi-Fi HaLow puede alcanzar distancias de hasta 1 kilómetro en condiciones de línea de vista, superando ampliamente el alcance del Wi-Fi convencional.

2. **Mejor penetración**: Las señales de menor frecuencia pueden penetrar mejor a través de paredes y otros obstáculos, lo que lo hace ideal para entornos exigentes.

3. **Bajo consumo de energía**: Diseñado pensando en los dispositivos IoT, Wi-Fi HaLow permite años de vida útil de la batería para los dispositivos conectados.

4. **Escalabilidad**: Admite miles de dispositivos conectados a un solo punto de acceso, perfecto para despliegues IoT a gran escala.

5. **Seguridad**: Hereda las sólidas funciones de seguridad de la familia Wi-Fi, incluida la encriptación WPA3.

### Por qué importa Wi-Fi HaLow

Wi-Fi HaLow responde a las crecientes necesidades de las aplicaciones IoT que requieren conectividad de largo alcance, bajo consumo de energía y la capacidad de manejar numerosos dispositivos simultáneamente. Cierra la brecha entre el Wi-Fi tradicional y las tecnologías LPWAN, ofreciendo:

- **IoT industrial**: Permite conectividad fiable en fábricas, almacenes y entornos industriales.
- **Agricultura inteligente**: Proporciona cobertura en grandes áreas agrícolas para redes de sensores.
- **Ciudades inteligentes**: Admite amplias redes de dispositivos conectados en entornos urbanos.
- **Seguimiento de activos**: Permite el seguimiento de largo alcance de activos y equipos valiosos.

Al combinar la familiaridad de Wi-Fi con las ventajas de la conectividad de largo alcance y bajo consumo, Wi-Fi HaLow está llamado a desempeñar un papel crucial en la expansión de las aplicaciones IoT en diversas industrias.

### Arquitectura del sistema Wi-Fi HaLow

Una red típica de Wi-Fi HaLow consta de varios componentes clave que trabajan juntos para habilitar la conectividad IoT de largo alcance y bajo consumo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **Punto de acceso (AP)**: El concentrador central de la red Wi-Fi HaLow, responsable de gestionar las conexiones y enrutar los datos entre los dispositivos y Internet.

2. **Estaciones (STA)**: Los dispositivos cliente que se conectan al punto de acceso. Estos pueden ser sensores, actuadores u otros dispositivos IoT.

3. **Gateway**: Actúa como un puente entre la red Wi-Fi HaLow y otras redes (por ejemplo, Ethernet o celular).

En este tutorial, configuraremos el XIAO ESP32S3 como un cliente Estación (STA) que se conecta a un punto de acceso Wi-Fi HaLow. El XIAO utilizará el módulo WM6108 para establecer y mantener la conexión HaLow.

## Framework MM-IoT-SDK

El módulo WM6108 utiliza el [MM-IoT-SDK de MorseMicro](https://github.com/MorseMicro/mm-iot-esp32), que proporciona:

- **Soporte multiprotocolo**: Permite una integración fluida con varios protocolos IoT
- **Gestión de bajo consumo**: Consumo de energía optimizado para dispositivos alimentados por batería
- **Funciones de seguridad**: Mecanismos integrados de cifrado y autenticación
- **Configuración sencilla**: API simplificada para la configuración y gestión de la red

La arquitectura de MM-IoT-SDK consta de varias capas:

1. **Capa de abstracción de hardware (HAL)**: Proporciona una interfaz unificada para diferentes plataformas de hardware
2. **Pila de red**: Implementa la pila de protocolo Wi-Fi HaLow
3. **Capa de aplicación**: Ofrece APIs para el desarrollo de aplicaciones y la gestión de dispositivos

Este framework permite a los desarrolladores implementar rápidamente la funcionalidad Wi-Fi HaLow manteniendo la flexibilidad para aplicaciones personalizadas.

## Materiales necesarios

Estos son los materiales necesarios para seguir este tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>Módulo Wi-Fi HaLow Wio-WM6108 para XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
Este tutorial solo es aplicable a la serie XIAO ESP32-S3. Usaremos XIAO ESP32S3 Sense como ejemplo en este tutorial.
:::

Además de lo anterior, es posible que necesites preparar antenas adicionales adecuadas para el uso con WiFi-Halow. Aquí están los modelos de antena verificados y recomendados.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Kit de antena de interior de largo alcance</th>
            <th>Antena de largo alcance de 2.6dBi</th>
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

Para conectar la antena al módulo WiFi-Halow, también puede que necesites comprar el **cable de antena SMA a I-PEX**.

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

Si lo utilizas por primera vez, puedes consultar el siguiente vídeo para la instalación de la antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalar ESP-IDF v5.1.1

Antes de empezar a programar, necesitamos instalar ESP-IDF v5.1.1 en tu ordenador. ESP-IDF es el framework de desarrollo oficial para los chips de la serie ESP32.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**Paso 1.** Descarga el instalador de ESP-IDF Tools para Windows

Descarga el [ESP-IDF Tools Installer](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) para Windows. Este instalador incluye todas las herramientas necesarias para el desarrollo con ESP-IDF.

**Paso 2.** Ejecuta el instalador

1. Ejecuta el instalador descargado como administrador
2. Sigue las indicaciones para instalar Python, Git y otras herramientas necesarias
3. Cuando se te solicite, selecciona las siguientes opciones:
   - Instalar ESP-IDF v5.1.1
   - Instalar Python
   - Instalar Git
   - Añadir ESP-IDF Tools al Path

**Paso 3.** Verifica la instalación

Abre una nueva ventana de Command Prompt y ejecuta:

```bash
esp-idf --version
```

Si la instalación se realizó correctamente, deberías ver el número de versión 5.1.1.

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Paso 1.** Instala los prerrequisitos

Abre Terminal e instala Homebrew si aún no lo has hecho:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Instala los paquetes necesarios:

```bash
brew install cmake ninja dfu-util
```

**Paso 2.** Descarga e instala ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Paso 3.** Configura las variables de entorno

```bash
. $HOME/esp/esp-idf/export.sh
```

Añade esta línea a tu `~/.profile` o `~/.zshrc` para configurar automáticamente las variables de entorno al abrir un nuevo terminal.

</TabItem>

<TabItem value="Linux" label="Linux">

**Paso 1.** Instala los prerrequisitos

Para Ubuntu y Debian:

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

Para otras distribuciones, instala los paquetes equivalentes.

**Paso 2.** Descarga e instala ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Paso 3.** Configura las variables de entorno

```bash
. $HOME/esp/esp-idf/export.sh
```

Añade esta línea a tu `~/.bashrc` para configurar automáticamente las variables de entorno al abrir un nuevo terminal.

</TabItem>
</Tabs>

:::tip
Después de la instalación, puede que necesites reiniciar tu ordenador para asegurarte de que todas las variables de entorno se configuren correctamente.
:::

:::note
Para obtener instrucciones más detalladas sobre la instalación de ESP-IDF v5.1.1, puedes consultar la documentación oficial de Espressif:

- [Guía de inicio de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## Clonar y configurar el repositorio mm-iot-esp32

Sigue estos pasos para clonar el repositorio mm-iot-esp32 y configurar las variables de entorno:

<Tabs>
<TabItem value="Windows" label="Windows">

**Paso 1.** Clona el repositorio

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Paso 2.** Exporta las variables de IDF

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**Paso 3.** Configura la variable de entorno MMIOT_ROOT

Puedes configurarla de forma permanente a través de las Propiedades del sistema de Windows:

1. Abre System Properties (Win + R, escribe `sysdm.cpl`)
2. Haz clic en "Environment Variables"
3. En "User variables", haz clic en "New"
4. Nombre de la variable: `MMIOT_ROOT`
5. Valor de la variable: `C:\Users\YourUsername\mm-iot-esp32` (sustituye por tu ruta real)
6. Haz clic en "OK" para guardar

Como alternativa, puedes configurarla temporalmente en Command Prompt:

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

**Paso 2.** Exporta las variables de IDF

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Paso 3.** Configura la variable de entorno MMIOT_ROOT

Para uso temporal:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, añádela a tu archivo de configuración del shell:

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

**Paso 1.** Clona el repositorio

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Paso 2.** Exporta las variables de IDF

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Paso 3.** Configura la variable de entorno MMIOT_ROOT

Para uso temporal:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, añádela a tu archivo de configuración del shell:

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
Asegúrate de utilizar rutas absolutas al configurar la variable de entorno MMIOT_ROOT. Las rutas relativas pueden causar problemas al compilar proyectos.
:::

:::note
Después de configurar las variables de entorno, puede que necesites cerrar y volver a abrir tu terminal para que los cambios surtan efecto.
:::

## Compilación del firmware de ejemplo

El repositorio mm-iot-esp32 incluye varias aplicaciones de ejemplo que demuestran diferentes funcionalidades. A continuación se explica cómo compilar y configurar estos ejemplos:

### Ubicación de las aplicaciones de ejemplo

Todas las aplicaciones de ejemplo se encuentran en el directorio `examples` del repositorio. Los ejemplos disponibles incluyen:

- `scan`: ejemplo de escaneo Wi-Fi
- `iperf`: ejemplo de servidor iperf
- `sta_reboot`: ejemplo de reinicio de estación Wi-Fi
- `sta_connect`: ejemplo de conexión de estación Wi-Fi
- `web_camera_server`: ejemplo de servidor de cámara web
- Y más...

### Configurar las credenciales de red

Antes de compilar el firmware, debes configurar los ajustes de red en el archivo de configuración del ejemplo:

1. Ve al directorio del ejemplo que hayas elegido:

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. Edita el archivo de configuración:

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. En este archivo, puedes modificar:

- Código de país (debe establecerse en **US** ya que el producto actualmente solo está disponible para Norteamérica)
- Credenciales de la red Wi-Fi HaLow
- Otros parámetros relacionados con la red

:::caution
Nota importante sobre el código de país:

- El código de país debe establecerse en "US" ya que este producto actualmente solo está disponible para el mercado norteamericano
- El producto aún no está disponible para otras regiones debido a requisitos regulatorios
- El uso del producto en regiones fuera de Norteamérica puede infringir las normativas locales

:::

### Proceso de compilación

Después de configurar los ajustes de red, puedes compilar el firmware utilizando estos comandos:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- El comando `idf.py set-target` solo necesita ejecutarse una vez por cada ejemplo
- `idf.py fullclean` garantiza una compilación limpia eliminando todos los artefactos de compilaciones anteriores
- Tras una compilación correcta, el binario del firmware se encontrará en el directorio `build`

:::

### Resultado de la compilación

Después de una compilación correcta, deberías ver una salida similar a esta:

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

A continuación, mostraremos algunos ejemplos.

## Ejemplo 1. scan

Este ejemplo muestra cómo escanear las redes Wi-Fi HaLow disponibles en tu entorno. Sigue estos pasos para compilar y ejecutar el ejemplo de escaneo:

### Paso 1: Ir al ejemplo de Scan

```bash
cd ~/mm-iot-esp32/example/scan
```

### Paso 2: Configurar el código de país

1. Abre el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Localiza y modifica la línea del código de país:

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### Paso 3: Configuración de hardware

1. Conecta el módulo Wio-WM6108 Wi-Fi HaLow a tu XIAO ESP32S3

2. Conecta el XIAO ESP32S3 a tu ordenador mediante USB

### Paso 4: Compilar y flashear

Ejecuta los siguientes comandos en secuencia:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Monitorizar los resultados

Si todo funciona correctamente:

- El monitor serie se iniciará automáticamente después del flasheo
- El programa comenzará a escanear redes Wi-Fi HaLow
- Si hay pasarelas Wi-Fi HaLow dentro del alcance, su información se mostrará en el monitor serie

Salida de ejemplo en el monitor serie:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Asegúrate de que haya pasarelas Wi-Fi HaLow en tu entorno para poder detectar redes
- El proceso de escaneo se ejecuta de forma continua, por lo que verás actualizaciones periódicas de las redes disponibles
- Pulsa Ctrl+C para detener el monitor y salir del programa

:::

:::note
Si no ves ninguna red:

- Verifica que tu pasarela Wi-Fi HaLow esté encendida y funcionando
- Comprueba que estás dentro del alcance del gateway
- Asegúrate de que el módulo esté correctamente conectado a tu XIAO ESP32S3

:::

## Ejemplo 2. iperf

Este ejemplo muestra cómo probar el rendimiento de red de tu conexión Wi‑Fi HaLow usando iPerf. Sigue estos pasos para compilar y ejecutar el ejemplo de iPerf:

### Paso 1: Navegar al ejemplo de iPerf

```bash
cd ~/mm-iot-esp32/example/iperf
```

### Paso 2: Configurar los ajustes de red

1. Abre el archivo de configuración:

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

### Paso 3: Configuración de hardware

1. Conecta el módulo Wio-WM6108 Wi‑Fi HaLow a tu XIAO ESP32S3
2. Conecta el XIAO ESP32S3 a tu ordenador mediante USB

### Paso 4: Compilar y flashear

Ejecuta los siguientes comandos en secuencia:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Ejecutar la prueba de rendimiento

Una vez que el programa se esté ejecutando correctamente, verás que el servicio iPerf se inicia. Ahora puedes ejecutar pruebas de rendimiento desde tu gateway Wi‑Fi HaLow.

Para pruebas IPv4, ejecuta este comando en tu gateway:

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

Para pruebas IPv6, ejecuta este comando en tu gateway:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

Explicación de los parámetros:

- `-c`: Ejecutar en modo cliente
- `-p`: Número de puerto
- `-i`: Intervalo de informe (1 segundo)
- `-u`: Usar protocolo UDP
- `-b`: Ancho de banda objetivo (20 Mbps)
- `-V`: Modo IPv6 (solo para pruebas IPv6)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Asegúrate de que tu dispositivo se haya conectado correctamente a la red Wi‑Fi HaLow antes de ejecutar la prueba de rendimiento
- La dirección IP del dispositivo se mostrará en el monitor serie después de la conexión
- Puedes ajustar el ancho de banda (parámetro -b) según tus necesidades de prueba

:::

:::note
Problemas comunes y soluciones:

- Si la conexión falla, verifica tus credenciales de red
- Si el servicio iPerf no se inicia, comprueba tus conexiones de hardware
- Si el rendimiento es deficiente, asegúrate de estar dentro de un buen alcance del gateway

:::

## Ejemplo 3. web_camera_server

Este ejemplo muestra cómo transmitir la señal de la cámara desde XIAO ESP32S3 Sense a través de la red Wi‑Fi HaLow. Sigue estos pasos para compilar y ejecutar el servidor de cámara web:

### Paso 1: Navegar al ejemplo de cámara web

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### Paso 2: Configurar los ajustes de red

1. Abre el archivo de configuración:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifica las credenciales de Wi‑Fi HaLow:

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### Paso 3: Configuración de hardware

1. Conecta el módulo Wio-WM6108 Wi‑Fi HaLow a tu XIAO ESP32S3 Sense
2. Asegúrate de que el módulo de cámara de tu XIAO ESP32S3 Sense esté correctamente conectado
3. Conecta el XIAO ESP32S3 Sense a tu ordenador mediante USB

### Paso 4: Compilar y flashear

Ejecuta los siguientes comandos en secuencia:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Paso 5: Acceder a la señal de la cámara

Una vez que el programa se esté ejecutando correctamente:

1. Anota la dirección IP que se muestra en el monitor serie
2. Abre un navegador web en cualquier dispositivo conectado a la misma red que tu gateway Wi‑Fi HaLow
3. Introduce la dirección IP en la barra de direcciones de tu navegador
4. Ahora deberías ver la señal de la cámara en vivo desde tu XIAO ESP32S3 Sense

URL de ejemplo:

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Para obtener la mejor experiencia de transmisión:

- Asegura buenas condiciones de iluminación para una mejor calidad de imagen
- Mantén el XIAO ESP32S3 Sense dentro de un buen alcance del gateway Wi‑Fi HaLow
- Usa un navegador web moderno para una compatibilidad óptima

:::

:::note
Solución de problemas:

- Si no puedes acceder a la señal de la cámara, verifica que tu dispositivo esté en la misma red que el gateway Wi‑Fi HaLow
- Si la imagen no aparece, comprueba que el módulo de cámara esté correctamente conectado
- Si la transmisión tiene retraso, intenta acercarte al gateway Wi‑Fi HaLow

:::

## Recursos

- **[GITHUB]** [Repositorio mm-iot-esp32](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [Documento mm-iot](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [Archivo PCB KiCAD WI-FI_HALOW_FGH100M_EXT01_V30](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
