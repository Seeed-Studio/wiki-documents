---
description: Flashear el Firmware Nativo
title: Actualizar y Flashear Firmware
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 11/17/2023
  author: Spencer
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **Cómo Flashear el Firmware Nativo**

El SenseCAP indicator tiene dos MCUs, ESP32-S3 y RP2040. Este tutorial proporciona una guía completa para ayudar a los desarrolladores a comenzar, incluyendo el flasheo del firmware nativo de fábrica listo para usar y la actualización de dispositivos enviados temprano al firmware más reciente.

La actualización del firmware es particularmente aplicable en dos escenarios:

1. Si compraste un producto sin firmware OpenAI antes de junio de 2023, con versión de firmware `1.0.0`, puedes descargar y actualizar al firmware más reciente que incluye funcionalidad OpenAI. El firmware más reciente se puede descargar desde [aquí](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases).
2. Si has desarrollado una aplicación y deseas flashear un firmware personalizado, puedes seguir [el tutorial proporcionado a continuación](#flash-esp32-s3-frimware-using-espressif-idf).

Brevemente, necesitas este tutorial porque:

1. Tienes un firmware que necesitas flashear en el ESP32-S3 o RP2040.
2. Has modificado el código y necesitas compilarlo y flashearlo al dispositivo.

Vamos a sumergirnos en este tutorial.

## Preparación

Para comenzar, todo lo que necesitas es tu SenseCAP Indicator y una computadora Windows/Mac/Linux.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## Obtener el Firmware Nativo

El firmware de envío predeterminado del SenseCAP Indicator es completamente de código abierto tanto para ESP32-S3 como para RP2040.

:::tip Tienes dos opciones para obtener el Firmware Listo para Usar:

- **Código fuente:** Antes de flashearlo, tienes la opción de modificar el código según tus requisitos. Necesitarás una cadena de herramientas([ESP-IDF](#ESP-IDF), [Arduino](#RP_Arduino)) para **compilarlo**.
- **Firmware:** Flashea directamente el archivo binario precompilado sin necesidad de modificación o compilación de código. Usando herramientas como [Esptool](#ESPTOOL) y [Flash Download Tools](#Flash_Tools).
:::

**Código Fuente**

- [🖱️Haz clic para obtener el Código Fuente del Firmware ESP32-S3](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️Haz clic para obtener el Código Fuente de ejemplos Arduino RP2040](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**Firmware**

- [🖱️Haz clic para descargar el firmware ESP32-S3](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️Haz clic para descargar el firmware RP2040](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## Para **ESP32-S3**

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF (Espressif IoT Development Framework) es un marco de desarrollo de software proporcionado por Espressif Systems para diseñar firmware y aplicaciones específicamente para sus series de microcontroladores ESP32 y ESP8266. Para más información, puedes consultar la [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)

Si has optado por compilar el código fuente en firmware, necesitarás el ESP-IDF para realizar el proceso de compilación.

:::note **Nota**:
La versión de ESP-IDF debe ser mayor que v5.0. Si estás usando una versión anterior, necesitarás actualizarla a la versión más reciente.
:::

Para usuarios nuevos, este video puede ayudarte a entender mejor los pasos a continuación:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Set Up the ESP-IDF Toolchain for SenseCAP Indicator on Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

#### **Instalación de la Cadena de Herramientas**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux and MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > Documentación Oficial de Espressif: [Configuración Estándar de la Cadena de Herramientas para Windows](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **Opción 1: Usando el Instalador Sin Conexión**

  Para usuarios de Windows, tienes la opción de descargar el instalador sin conexión de ESP-IDF directamente. Aquí tienes un enlace de descarga directa: [🖱️Descargar Instalador Sin Conexión v5.1.1](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **Opción 2: Usando el Script Recomendado**

Navega a [Using the Command Promp](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)

</TabItem>

<TabItem value="Unix">

  > Documentación Oficial de Espressif: [Configuración Estándar de la Cadena de Herramientas para Linux y macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  Si estás en Linux o MacOS, puedes seguir esta guía para cambiar la versión del repositorio git.

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**Navegar al directorio esp-idf**:

1. Ejecuta `./install.sh esp32s3`, para agregar soporte ESP32-S3 (necesario para SenseCAP indicator)
2. escribe `./export.sh` para configurar las variables PATH e IDF_PATH en la sesión de terminal actual.

si quieres llamarlo en cualquier sesión de shell, puedes agregar la siguiente línea a tu archivo de configuración de shell (ej. ~/.bash_profile):

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

Entonces puedes usar `get_idf` para activar el entorno.[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### Construir Proyecto y flashear {#BUILD}

Si optas por compilar el código fuente en firmware, necesitarás el ESP-IDF para realizar el proceso de compilación.

<!-- Please differentiate between flashing compiled firmware and directly downloading firmware using IDF! -->

Para construir, flashear y monitorear tu proyecto, ejecuta el siguiente comando:

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
Sin `PORT`, el IDF seleccionará automáticamente el puerto disponible.
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->

Hasta este punto, escribiendo el comando `idf.py -p PORT flash`, el firmware ha sido flasheado exitosamente en el ESP32-S3.

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) es una utilidad de código abierto basada en Python que proporciona una forma independiente de la plataforma para comunicarse con el bootloader ROM en chips Espressif.

Esptool puede ser usado como parte de tu script Python. En esta guía, usaremos el `software empaquetado` disponible en la [página de releases de Esptool](https://github.com/espressif/esptool/releases). Elige el software que corresponda al sistema operativo de tu computadora.

#### Usando Esptool para Flashear

Se proporcionan dos scripts que muestran cómo utilizar efectivamente Esptool para flashear firmware en microcontroladores ESP32-S3.

:::note **Nota**:
Ten en cuenta que los scripts proporcionados están adaptados para sistemas operativos Windows. Si estás usando un sistema operativo diferente, necesitarás adaptar los scripts para que se ajusten a tu entorno.
:::

El script merge.bat es particularmente útil ya que consolida inteligentemente el bootloader, la tabla de particiones y los binarios base del indicator en un solo archivo de firmware. Una vez fusionado, este firmware puede ser flasheado sin problemas en el ESP32-S3 usando el script flash.bat. Cuando se te solicite, ingresa el puerto COM correspondiente a tu dispositivo, y el proceso de flasheo se iniciará. La operación completa se puede resumir de la siguiente manera:

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

Alternativamente, si prefieres flashear archivos binarios individuales en lugar de fusionar archivos y luego flashear, puedes usar directamente el script `just_flash.bat`:

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

Y para un proceso de flasheo directo usando el firmware fusionado:

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> Presta mucha atención a la dirección de inicio(0x0), especialmente cuando no fusiones binarios. Para archivos binarios separados, consulta las instrucciones en [Flash Download Tools para archivos binarios separados](#Address_Note). Seguir estas pautas asegura un flasheo sin errores.

Para utilizar estos scripts, guarda el código en archivos de texto separados llamados `merge.bat` y `flash.bat` dentro de la carpeta del proyecto. Este enfoque organizacional simplifica el acceso y uso.

Al emplear estos scripts, optimizas tanto la preparación del firmware como las etapas de flasheo, contribuyendo a un proceso más fluido y confiable.

```
├── indicator_basis
│   ├── CMakeLists.txt
│   ├── build
│   ├── docs
│   ├── main
│   ├── partitions.csv
│   ├── sdkconfig
│   └── .defaults
│   └── flash.bat
│   └── merge.bat
```

1. Fusiona los binarios usando `merge.bat`.
2. Flashea el firmware fusionado usando `flash.bat`.

#### Flasheando Firmware

Para flashear firmware, puedes usar el script `flash.bat` proporcionado. Este script está diseñado para simplificar el proceso de flashear tu firmware en el microcontrolador ESP32-S3.

<details>
   <summary>Mostrar código flash.bat</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: Set Chip
   set chip=esp32s3
   :: Set Baud
   set baud=921600
   :: List COM ports
   echo Available ports and devices:
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: Prompt for port
   :chooseport
   echo.
   echo Please enter the COM port to use (e.g., COM5):
   set /p port=
   :: Check if chosen port is valid and contains "CH340"
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo Port %port% not found
   goto :chooseport
   :flash:: Print chosen parameters
   echo.
   echo You have chosen:
   echo Chip: %chip%
   echo Port: %port% - %device%
   echo Baud: %baud%
   @REM echo Press any key to continue to...
   @REM pause >nul
   :: Run esptool for the single file
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo Flashing with the single file failed with error %ERRORLEVEL%.
   goto :end
   )
   :: End of script
   :end
   endlocal
   ```
</details>

#### Fusión de Binarios

El script `merge.bat` proporcionado se puede usar para fusionar los archivos binarios necesarios en un solo archivo de firmware. Este script simplifica el proceso y asegura una fusión correcta para un flasheo exitoso, lo que te permite flashear un solo archivo bin en lugar de [flashear archivos separados](#Address_Note).

<details>
   <summary>Mostrar código de merge.bat</summary>
   ```bat
   @echo off
   SETLOCAL
   SET CurrentDir=%cd%
   SET ScriptDir=%~dp0
   SET CurrentDir=%CurrentDir:~0,-1%
   SET ScriptDir=%ScriptDir:~0,-1%
   IF NOT "%CurrentDir%"=="%ScriptDir%" (
   cd /d "%ScriptDir%"
   )
   esptool.exe --chip esp32s3 ^
   merge_bin -o indicator_basis_v1.0.0.bin ^
   --flash_mode dio ^
   --flash_size 8MB ^
   0x0 ../../build/bootloader/bootloader.bin ^
   0x8000 ../../build/partition_table/partition-table.bin ^
   0x10000 ../../build/indicator_basis.bin
   ENDLOCAL
   ```
</details>

### **Flash Download Tools** (Solo Windows) {#Flash_Tools}

> **Flash Download Tools** se utilizan para programar o flashear firmware en microcontroladores de las series ESP8266 y ESP32. Proporcionan una interfaz gráfica de usuario (GUI) para que los usuarios puedan flashear firmware fácilmente en los microcontroladores ESP.

Sigue los pasos para flashear un firmware precompilado:

**Descarga:**
[Flash Download Tools (solo para Windows)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **Paso 1**: **Haz doble clic** en el archivo `.exe` para entrar a la interfaz principal de la herramienta.

- **Paso 2**: Selecciona las siguientes opciones:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Opción</th>
        <th>Parámetro</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>Chip Type</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>ESP32-S3</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>WorkMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>Develop</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>LoadMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>UART</div>
        </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **Paso 3**: Conecta el SenseCAP Indicator a tu laptop con un cable USB tipo-C.

- **Paso 4**: En la pestaña SPI Download, haz clic en "..." y navega al firmware que acabas de descargar.

- **Paso 5**: Configura SPI Flash:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Opción</th>
        <th>Parámetro</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI SPEED</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>40MHz</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI MODE</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>DIO</div>
        </td>
    </tr>
  </table>
</div>

- **Paso 6**: Configura el Panel de Descarga:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**: Verifica los puertos en tu Device Manager, el USB-SERIAL es el correcto.
(`Aquí elegimos COM4`)
- **Baud**: 921600 (valor recomendado)

<!-- Previous: Click `Start` Downloading -->

Luego haz clic en `START` para comenzar el flasheo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

Cuando muestre `FINISH`, el flasheo del firmware habrá sido completado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### Flash Download Tools para archivos binarios separados {#Address_Note}

En la guía mencionada anteriormente, el archivo binario "Default_Factory_Firmware_ESP32-S3.bin" fusiona tres binarios en uno.

Sin embargo, si estás usando ESP-IDF para construir firmware, flashear directamente un solo archivo podría resultar en errores. En su lugar, necesitarás encontrar **tres archivos binarios separados** que hayas construido y especificar las direcciones correctas (puedes usar tus propias direcciones) como sigue:

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## Para **RP2040**

### Flashear con Arduino IDE {#RP_Arduino}

La Herramienta de Desarrollo RP2040 aprovecha Arduino para mejorar tu experiencia de codificación.

> El Arduino IDE es software gratuito para codificar placas Arduino. Con su interfaz fácil de usar, puedes escribir y subir código fácilmente. Basado en una versión más simple de C++, ofrece librerías y ejemplos, haciéndolo excelente para principiantes.

**Descarga:**

- **Paso 1**: Instala [Arduino IDE](https://www.arduino.cc/en/software)

- **Paso 2**: Agrega la Placa Raspberry Pi Pico

Abre tu Arduino IDE, haz clic en **Arduino IDE** > **Preferences**, y copia la siguiente URL en **Additional Boards Manager URLs**:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div>
        </td>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

Haz clic en **Tools** > **Board** > **Board Manager**.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

Busca "indicator" e instala "Raspberry Pi Pico/RP2040" en el Board Manager

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **Paso 3**: Agregar Librerías

:::note **Librerías de referencia**

- Sensirion Core: [Librería Sensirion Arduino Core](https://github.com/Sensirion/arduino-core)
- PacketSerial : [Protocolo de comunicación serial](https://github.com/bakercp/PacketSerial)
- Sensirion I2C SGP40 : [Librería del sensor TVOC SGP40](https://github.com/Sensirion/arduino-i2c-sgp40)
- Sensirion I2C SCD4x : [Librería del sensor CO2 SCD41](https://github.com/Sensirion/arduino-i2c-scd4x)
- Sensirion Gas Index Algorithm : [Librería de índice de transferencia](https://github.com/Sensirion/arduino-gas-index-algorithm)
- Seeed_Arduino_AHT20 : [Librería del sensor de temperatura y humedad AHT20](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

En el Arduino IDE, puedes buscarla en el `Library Manager`, por ejemplo `Seeed_Arduino_AHT20`, y luego instalarla.

<details>
<summary>Haz clic para ver la instalación sin conexión</summary>

Para instalarla *sin conexión*, puedes **descargar el zip del repositorio** desde GitHub, navegar a **Sketch** -> **Include Library** -> **Add .ZIP Library**, luego seleccionar las librerías que descargaste.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **Paso 4**: Conecta el dispositivo a tu PC con el cable USB Tipo-C proporcionado.

- **Paso 5**: Selecciona la placa y el puerto

Busca "Indicator" y selecciona la placa `Seeed INDICATOR RP2040` y selecciona el Puerto Serial `usbmodem`.

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
     <td>
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div>
    </td>
  </table>
</div>

- **Paso 6**: Abre el archivo de código de ejemplo

**File** -> **Open**, luego selecciona el archivo de código de ejemplo ([archivo .ino](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/tree/main/examples/indicator_rp2040)).

Proporcionamos un archivo de código de ejemplo, puedes modificar el código según tus necesidades.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **Paso 7**: Verifica y Sube el archivo.

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

Aquí, hemos completado la construcción y flasheo (descarga) del firmware en el RP2040.

### Flashear el archivo .uf2

- **Paso 1**: Conecta el dispositivo a tu PC

Mantén presionado este botón interno usando una aguja, luego conecta el dispositivo a tu PC con el cable USB tipo-C proporcionado, suelta el botón una vez conectado.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **Paso 2**: Flash del Firmware

Después de que la conexión sea exitosa, tu PC mostrará un disco.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

Copia el archivo [.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) al disco, luego el disco se desconectará.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

La actualización se ejecutará automáticamente.

## Protocolo de Comunicación ESP32 & RP2040

ESP32 y RP2040 utilizan comunicación por puerto serie, usando el protocolo de comunicación [cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf). La lista de comandos utilizados en la demostración es la siguiente:

El formato del comando consiste en el tipo de paquete y los parámetros del paquete.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## Recursos

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## FAQ

<details>
    <summary>¿Cómo distinguir el puerto serie?</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      Verifica el puerto en tu Device Manager
      - "USB Serial Device(COMx)" o "USB 串行设备" es para RP2040
      - "USB-SERIAL CH340" es para ESP32
      En resumen, el puerto CH340 es para ESP32.
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" es para RP2040
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **Actualizaciones Recientes**

- 2023-11-17
  - Se eliminó la sección de parcheo
- 2023-08-25
  - Se hizo más clara la sección de Parcheo
- 2023-07-25
  - Se agregó contenido para flashear firmware usando Esptool
- 2023-05-29
  - Se agregó la sección de Parcheo

# **Soporte Técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
