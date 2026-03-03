---
description: Presenta cómo usar el SDK de Himax para desarrollar Grove Vision AI V2.
title: Desarrollando Grove Vision AI V2 usando el SDK de Himax
keywords:
- himax
- vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove_vision_ai_v2_himax_sdk
last_update:
  date: 01/17/2023
  author: Citric
---

# Desarrollando Grove Vision AI V2 usando el SDK de Himax

Este tutorial está diseñado para guiarte a través del uso del SDK de Himax para la plataforma Grove Vision AI, con un enfoque en cómo utilizar efectivamente las tarjetas microSD para la gestión de datos y los micrófonos PDM para la captura de audio. Al final de esta guía, aprenderás a implementar estos componentes en tus proyectos de IA, permitiéndote almacenar grandes conjuntos de datos y capturar sonido de alta calidad con facilidad, directamente en tu dispositivo Grove Vision AI.

Aquí tienes una lista del índice de contenidos para este tutorial.

1. [Instalar Ubuntu 22.04 en el Subsistema de Windows para Linux (WSL)](#install-ubuntu-2204-on-windows-subsystem-for-linux-wsl)
2. [Preparación del entorno de compilación](#preparation-of-the-compilation-environment)
3. [Ejecutar el ejemplo de grabación usando el SDK de Himax](#run-the-recording-example-using-the-himax-sdk)
4. [Análisis del Código del SDK de Himax](#himax-sdk-code-analysis)

## Comenzando

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

### Materiales Requeridos

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Si deseas usar rutinas de tarjeta microSD, entonces podrías necesitar comprar tu propia tarjeta microSD (La capacidad más grande probada hasta ahora es de 64GB), el formato de la tarjeta de memoria soportada es: **FAT12/FAT16/FAT32/exFAT**.

## Instalar Ubuntu 22.04 en el Subsistema de Windows para Linux (WSL)

:::tip
Esta sección aplica solo a computadoras Windows; si no estás usando una computadora Windows, omite esta sección y continúa con la **[Preparación del entorno de compilación](#preparation-of-the-compilation-environment)**.
:::

El SDK de Himax necesita ser compilado en un entorno Linux, así que si estás usando una computadora Windows necesitarás instalar WSL. Para instalar Ubuntu 22.04 en el Subsistema de Windows para Linux (WSL), necesitarás seguir estos pasos generales. Antes de comenzar, asegúrate de que estés ejecutando una versión compatible de Windows 10 o Windows 11.

### Paso 1. Descargar e Instalar Ubuntu 22.04.3

Ahora, puedes instalar Ubuntu desde la Microsoft Store:

Abre la Microsoft Store. Busca **Ubuntu 22.04.3 LTS**. Selecciona la versión Ubuntu 22.04.3 LTS de los resultados de búsqueda. Haz clic en "Obtener" o "Instalar" para descargar e instalar la aplicación Ubuntu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/4.png" style={{width:1000, height:'auto'}}/></div>

Alternativamente, puedes instalar Ubuntu usando la línea de comandos. Abre PowerShell o Símbolo del sistema. Ejecuta el siguiente comando:

```shell
wsl --install -d Ubuntu-22.04
```

Una vez que Ubuntu esté instalado, ejecútalo desde el menú Inicio. La primera vez que lo ejecutes, se te pedirá crear una cuenta de usuario y contraseña. Sigue las indicaciones para configurarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/5.png" style={{width:800, height:'auto'}}/></div>

Ahora puedes usar Ubuntu en tu máquina Windows usando WSL. Puedes acceder al terminal de Linux, instalar paquetes y ejecutar aplicaciones de Linux.

:::note
Si has instalado previamente WSL 1 y quieres actualizar a WSL 2, necesitarás seguir algunos pasos adicionales que incluyen instalar el paquete de actualización del kernel de Linux de WSL 2 y configurar tus distribuciones existentes para usar WSL 2. Puedes encontrar las instrucciones para estos pasos adicionales en la [documentación oficial de Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install).
:::

Recuerda consultar la [documentación oficial de Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install) para obtener las instrucciones más actualizadas y consejos de solución de problemas.

## Preparación del entorno de compilación

### Paso 2. Instalar Microsoft VSCode

Visual Studio Code (VSCode) es un editor de código gratuito y de código abierto desarrollado por Microsoft que está disponible para Windows, macOS y Linux. A continuación te guiaré a través de los pasos para instalar VSCode en cada una de estas plataformas.

**Windows**:

1. **Descargar el Instalador:**
   - Visita la [página oficial de descarga de Visual Studio Code](https://code.visualstudio.com/Download).
   - Haz clic en el instalador de Windows para descargar el archivo `.exe`.

2. **Ejecutar el Instalador:**
   - Una vez que la descarga esté completa, ejecuta el instalador (`VSCodeSetup-x.y.z.exe`, donde x.y.z es el número de versión).
   - Sigue las indicaciones en el asistente de configuración. Puedes aceptar las selecciones predeterminadas, aunque es posible que quieras marcar las casillas para agregar VSCode a tu PATH y crear un icono en el escritorio para un acceso fácil.

3. **Completar la Instalación:**
   - Haz clic en 'Finalizar' para completar la instalación. VSCode debería abrirse automáticamente.

4. **Ejecutar VSCode:**
   - Puedes ejecutar VSCode haciendo doble clic en el icono del escritorio o buscándolo en el menú Inicio.

**macOS**:

1. **Descargar el Instalador:**
   - Ve a la [página oficial de descarga de Visual Studio Code](https://code.visualstudio.com/Download).
   - Haz clic en la versión de macOS para descargar el archivo `.zip`.

2. **Instalar la Aplicación:**
   - Una vez que la descarga esté completa, abre el archivo `.zip` para extraer la aplicación.
   - Arrastra y suelta Visual Studio Code en la carpeta Aplicaciones. Esto lo hará disponible en el Launcher.

3. **Ejecutar VSCode:**
   - Abre el Launchpad y haz clic en el icono de Visual Studio Code.
   - La primera vez que abras VSCode, puedes recibir una advertencia ya que fue descargado de Internet. Haz clic en 'Abrir' para continuar.

**Linux**:

Puedes instalar VSCode en Linux usando paquetes snap o a través del repositorio de paquetes para tu distribución. Aquí te muestro cómo hacerlo a través de la línea de comandos para Ubuntu como ejemplo:

1. **Actualizar el Índice de Paquetes (distribuciones basadas en Ubuntu/Debian):**

    ```sh
    sudo apt update
    ```

2. **Instalar las Dependencias (si no están ya instaladas):**

    ```sh
    sudo apt install software-properties-common apt-transport-https wget
    ```

3. **Agregar la Clave GPG y el Repositorio de Microsoft:**

    ```sh
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    ```

4. **Instalar VSCode:**

    ```sh
    sudo apt update
    sudo apt install code
    ```

5. **Ejecutar VSCode:**
   - Puedes iniciar VSCode buscándolo en tu menú de aplicaciones o ejecutando `code` en el terminal.

Para distribuciones que soportan paquetes snap:

```sh
sudo snap install --classic code
```

:::note
Recuerda que los comandos de instalación pueden diferir ligeramente dependiendo de tu distribución de Linux, por lo que deberías consultar la documentación oficial o las instrucciones de gestión de paquetes para tu distribución específica de Linux.
:::

### Paso 3. Instalar Python

Instalar Python 3 es un proceso sencillo que puede variar dependiendo de tu sistema operativo. A continuación, te guiaré a través de los pasos de instalación para Windows, macOS y Linux.

**Windows**:

1. **Descargar Python:**
   - Ve al sitio web oficial de Python en [python.org](https://www.python.org/downloads/windows/).
   - Haz clic en "Download Python" para obtener la última versión para Windows.
   - Elige el instalador ejecutable para la versión que desees.

2. **Ejecutar el Instalador:**
   - Inicia el instalador.
   - Asegúrate de marcar la casilla que dice "Add Python 3.x to PATH" en la parte inferior de la ventana del instalador para garantizar que Python se añada a tus variables de entorno.
   - Haz clic en "Install Now."

3. **Verificar la Instalación:**
   - Abre el Símbolo del sistema y escribe el siguiente comando para verificar que Python esté instalado correctamente:

    ```
    python --version
    ```

    Deberías ver la versión de Python que instalaste.

**macOS**:

1. **Descargar Python:**
   - Visita el sitio web oficial de Python en [python.org](https://www.python.org/downloads/macos/).
   - Haz clic en "Download Python" para obtener la última versión para macOS.
   - Descarga el instalador de macOS de 64 bits.

2. **Ejecutar el Instalador:**
   - Abre el paquete descargado y sigue las instrucciones para instalar Python.

3. **Verificar la Instalación:**
    - Abre Terminal y escribe el siguiente comando:

    ```sh
    python3 --version
    ```

    El sistema debería mostrar la versión de Python instalada.

**Linux**:

Python 3 a menudo viene preinstalado en muchas distribuciones de Linux. Para verificar si Python 3 ya está instalado y para comprobar la versión, abre una terminal e ingresa:

```sh
python3 --version
```

Si Python 3 no está instalado o quieres instalar una versión diferente, puedes usar el gestor de paquetes incluido con tu distribución de Linux.

Por ejemplo, en sistemas basados en Ubuntu o Debian, puedes instalar Python 3 siguiendo estos pasos:

1. **Actualizar Listas de Paquetes:**

   ```sh
   sudo apt update
   ```

2. **Instalar Python 3:**

   ```sh
   sudo apt install python3
   ```

3. **Verificar la Instalación:**

   ```sh
   python3 --version
   ```

En sistemas Fedora o basados en Red Hat, usarías `dnf`:

```sh
sudo dnf install python3
```

En Arch Linux o Manjaro:

```sh
sudo pacman -S python
```

### Paso 4. Instalar python-pip

- **Instalar `pip`**:

  `pip` es el instalador de paquetes para Python. Puedes usarlo para instalar paquetes desde el Índice de Paquetes de Python y otros índices. En Windows y macOS, `pip` se incluye con el instalador de Python. En Linux, es posible que necesites instalarlo por separado:

  Para sistemas basados en Ubuntu o Debian:

  ```sh
  sudo apt install python3-pip
  ```

  Para Fedora:

  ```sh
  sudo dnf install python3-pip
  ```

  Para Arch Linux:

  ```sh
  sudo pacman -S python-pip
  ```

- **Verificar la instalación de `pip`:**

  Verifica la instalación de pip ejecutando:

  ```sh
  pip3 --version
  ```

- **Entornos Virtuales:**

  Es una buena práctica usar entornos virtuales para gestionar las dependencias de tus proyectos de Python. Puedes crear un entorno virtual usando el siguiente comando:

  ```sh
  python3 -m venv /path/to/new/virtual/environment
  ```

Recuerda reemplazar `/path/to/new/virtual/environment` con el directorio donde quieres colocar tu nuevo entorno virtual.

Siguiendo estos pasos, deberías poder instalar Python 3 y `pip` en tu sistema y comenzar con el desarrollo en Python.

### Paso 5. Instalar el entorno de compilación make

Clona el repositorio del proyecto en la ubicación donde quieres guardarlo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Proyecto</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```sh
cd /mnt/c/Users/mengd/Desktop/
git clone https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic.git
```

Luego, por favor abre el proyecto en VSCode e ingresa al entorno Linux escribiendo el comando `wsl` en la terminal de VSCode. (Si estás en MacOS o Linux, este comando no es necesario)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/6.png" style={{width:1000, height:'auto'}}/></div>

A continuación, por favor ejecuta los siguientes comandos en un entorno WSL (Windows) o entorno Linux para instalar el entorno de compilación.

**Instalar Prerrequisitos**

Primero, necesitas instalar `make`, que es una herramienta esencial de automatización de construcción.

```sh
sudo apt install make
```

Escribe tu contraseña cuando se te solicite para proceder con la instalación.

**Descargar Arm GNU Toolchain**

Necesitarás el Arm GNU Toolchain para compilar proyectos ARM. Para descargarlo, navega a tu directorio home y usa `wget` para descargar el paquete. Por favor elige una dirección adecuada para instalarlo y podrás averiguar dónde está. Aquí, lo instalaré en el directorio superior de la carpeta del proyecto.

```sh
cd /mnt/c/Users/mengd/Desktop/
wget https://developer.arm.com/-/media/Files/downloads/gnu/13.2.rel1/binrel/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

Este comando obtendrá la versión especificada de la cadena de herramientas ARM.

**Extraer el Archivo de la Cadena de Herramientas**

Después de descargar la cadena de herramientas, necesitas extraerla. En tu terminal, ejecuta lo siguiente:

```sh
tar -xvf arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

Esto creará un directorio con todos los archivos de herramientas necesarios.

**Actualizar tu PATH**

Finalmente, para usar las herramientas desde cualquier directorio, debes agregar el directorio bin de los archivos extraídos al PATH de tu sistema. Ejecuta este comando:

```sh
export PATH="/mnt/c/Users/mengd/Desktop/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"
```

Para que el cambio sea permanente, debes agregar el comando export a tu `~/.bashrc`, `~/.zshrc`, o al archivo de configuración de tu shell preferido.

```sh
echo 'export PATH="$HOME/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"' >> ~/.bashrc
```

Después, aplica los cambios ejecutando tu perfil o cerrando y reabriendo la terminal:

```sh
source ~/.bashrc
```

**Verificación**

Para verificar que todo esté configurado correctamente, puedes escribir:

```sh
echo $PATH | tr ':' '\n' | grep gnu
arm-none-eabi-gcc --version
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/7.png" style={{width:1000, height:'auto'}}/></div>

Esto debería mostrar la versión del compilador ARM GCC, indicando que está correctamente instalado y accesible desde cualquier lugar de tu sistema.

Ahora, tu entorno está listo para el desarrollo ARM.

:::note
Por favor, no uses `apt install` para instalar el compilador arm, esta versión es demasiado antigua y puede no compilar este proyecto. Por favor, verifica que la versión que estás usando sea la misma que la versión 13.2 en la captura de pantalla.
:::

## Ejecutar el ejemplo de grabación usando el SDK de Himax

### Paso 6. Compilar y subir proyectos de grabación

En este punto, hemos completado la configuración básica del entorno, y luego podemos compilar el proyecto y subirlo. La carpeta del proyecto se llama **EPII_CM55M_APP_S**.

Continúa compilando el proyecto ejecutando los siguientes comandos en el entorno wsl o Linux.

```sh
cd Seeed_Grove_Vision_AI_V2_SD-Mic/EPII_CM55M_APP_S
make clean
```

Luego, abre el archivo **makefile** en la carpeta **EPII_CM55M_APP_S** y cambia la ruta a **GNU_TOOLPATH** en la [línea 47](https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic/blob/3de76e628b74bdb075ea27d6fd98b89d6c2f80bb/EPII_CM55M_APP_S/makefile#L47) del código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/8.png" style={{width:1000, height:'auto'}}/></div>

Esta ruta necesita ser completada con la ruta absoluta a la carpeta `bin` del Arm GNU Toolchain que descomprimiste en el [Paso 5](#step-5-install-the-make-compilation-environment).

Luego guarda el archivo. Ejecuta el siguiente comando para compilar el proyecto.

```sh
make
```

Si la compilación va bien, verás el siguiente resultado de compilación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/1.png" style={{width:1000, height:'auto'}}/></div>

Luego necesitamos convertir el archivo `.elf` a un archivo `.img` para flashear al Grove Vision AI V2. Solo necesitamos ejecutar el script `output.sh`.

```sh
./output.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/2.png" style={{width:1000, height:'auto'}}/></div>

Al ejecutar el script flasher.py, podemos flashear el firmware generado al dispositivo.

:::note
Si tienes una computadora con Windows, crea una nueva terminal y asegúrate de ejecutar los siguientes comandos en un entorno git bash.
:::

```sh
pip install xmodem --user
cd ..
python flasher.py we2_image_gen_local/output_case1_sec_wlcsp/output.img COM3
```

`COM3` en el comando indica el número de puerto del dispositivo, por favor cámbialo según el número de puerto real de tu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/3.png" style={{width:800, height:'auto'}}/></div>

### Paso 7. Grabación y guardado

Luego, podemos comenzar a ejecutar los comandos para grabar con la ayuda del programa de grabación de Python.

```
pip install playsound --user
python getdate.py
```

El código graba un fragmento de audio de aproximadamente 4 segundos y lo guarda en una carpeta llamada `record.wav` en `Seeed_Grove_Vision_AI_V2_SD-Mic`.

## Análisis del Código del SDK de Himax

Para facilitar a los desarrolladores el uso del SDK de Himax para desarrollar hardware en el Grove Vision AI V2, esta sección se enfocará en el código del micrófono y SD en el SDK para usted. La ruta del código del programa principal para este proyecto es la siguiente:

```
EPII_CM55M_APP_S\app\scenario_app\grove_vision_ai\grove_vision_ai.c
```

El código proporcionado configura y utiliza una interfaz de Modulación de Densidad de Pulsos (PDM) para capturar datos de audio en un sistema embebido, transfiriendo los datos usando Acceso Directo a Memoria (DMA). Incorpora varias bibliotecas externas y controladores de dispositivos, involucrando operaciones del sistema de archivos y control de GPIO.

### Incluir Encabezados y Definiciones de Macros

```c
#include <stdio.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>
```

Esta sección incluye cabeceras de la biblioteca estándar de C para entrada/salida, aserciones, tipos de datos booleanos, tipos enteros, operaciones de cadenas y funcionalidades de la biblioteca estándar.

```c
#ifdef TRUSTZONE_SEC
// ...
#endif
```

Este bloque de compilación condicional contiene código de configuración relacionado con la seguridad de TrustZone, que se compila solo si se define la macro `TRUSTZONE_SEC`. Esta sección típicamente incluye características de seguridad, como protección de memoria y llamadas seguras.

### Encabezados del Paquete de Soporte de Dispositivo y Placa

```c
#include "WE2_device.h"
#include "WE2_device_addr.h"
#include "board.h"
#include "hx_drv_scu.h"
#include "hx_drv_spi.h"
#include "hx_drv_gpio.h"
#include "WE2_core.h"
#include "WE2_debug.h"
#include "mmc_we2.h"
#include "hx_drv_swreg_aon.h"
#include "hx_drv_pdm_rx.h"
```

Estos encabezados incluyen definiciones e interfaces específicas del hardware y a nivel de placa, como controladores y configuraciones para GPIO, SPI, y PDM.

### Definición de Buffer de Audio PDM y Bandera de Callback

```c
#define quarter_second_mono_bytes 8000
#define blk_num 20
int16_t audio_buf[blk_num * quarter_second_mono_bytes / 2];
volatile bool rx_cb_flag;
```

Define el tamaño del búfer de audio y el número de bloques, declara un arreglo de enteros como búfer de audio, y una variable bandera `rx_cb_flag` para indicar si la recepción DMA está completa.

### Función de Callback de Recepción DMA PDM

```c
void app_pdm_dma_rx_cb()
{
    // ...
}
```

Define una función de callback que será llamada al completarse la recepción DMA de PDM. La función incluye invalidación de caché para asegurar que los datos se lean desde la memoria actualizada por DMA.

### Función de Configuración PDM

```c
int app_pdm_setting()
{
    // ...
}
```

Configura los parámetros de configuración del dispositivo PDM como la frecuencia de muestreo, canal DMA, fuente de reloj, etc., y asocia las funciones de callback con el dispositivo PDM.

### Función Principal

```c
int app_main(void)
{
    // ...
}
```

La función principal realiza la inicialización y configuración del dispositivo:

- Establece la multiplexación de pines GPIO e inicializa los estados de GPIO.
- Inicializa PDM y configura la transferencia DMA.
- Configura el sistema de archivos FatFS para operaciones de archivos.
- Lee el estado de entrada a través de GPIO y controla el estado de salida.
- Utiliza un bucle para verificar la bandera de recepción DMA y capturar datos de audio.
- Envía datos a la consola de depuración y detiene PDM después de completarse.

### Parte del Micrófono PDM

El código incluye el uso de un micrófono, que se logra a través de la configuración y uso de una interfaz de Modulación de Densidad de Pulsos (PDM).

**Configuración PDM**

```c
int app_pdm_setting()
{
    // PDM configuration settings
    // ...
}
```

Esta función, `app_pdm_setting`, configura los parámetros de configuración del dispositivo PDM. Estos parámetros, como la frecuencia de muestreo, el canal DMA (Acceso Directo a Memoria) y la fuente de reloj, son cruciales para capturar datos del micrófono.

**Inicialización PDM y Configuración de Transferencia DMA**

```c
if (hx_drv_pdm_init(&pdm_dev_info) != PDM_NO_ERROR)
    return -1;

hx_drv_pdm_dma_lli_transfer((void *)audio_buf, blk_num, quarter_second_mono_bytes, 0);
```

Esta sección del código inicializa el dispositivo PDM y configura la transferencia DMA. La llamada a la función `hx_drv_pdm_dma_lli_transfer` inicia el proceso de transferencia DMA, que capturará datos de audio del micrófono conectado y los almacenará en el búfer predefinido `audio_buf`.

**Función de Callback de Recepción DMA PDM**

```c
void app_pdm_dma_rx_cb()
{
    // Callback function invoked when PDM DMA reception is complete
    // ...
}
```

`app_pdm_dma_rx_cb` es una función de callback que se llama una vez que la interfaz PDM ha completado la recepción de datos de audio a través de DMA. Dentro de esta función, los datos de audio recibidos (almacenados en el buffer `audio_buf`) se envían para su posterior procesamiento.

A partir del código descrito, podemos ver que el programa involucra principalmente la configuración y uso de un micrófono para capturar datos de audio.

### Parte de microSD

El código incluye operaciones relacionadas con una tarjeta microSD a través del uso de la biblioteca del sistema de archivos FatFS.

```c
FATFS fs;
TCHAR drv[3] = {_T('0'), _T(':'), _T('0')};
FRESULT res = f_mount(&fs, drv, 1);
bool mount = false;
if (res != FR_OK)
{
    mount = false;
    xprintf("Mount Failed: %d\n", res);
}
else
{
    mount = true;
    xprintf("Mount Success\n");
}
```

Esta sección intenta montar el sistema de archivos ubicado en la tarjeta microSD, lo cual es necesario para realizar operaciones de lectura y escritura en la tarjeta.

```c
FIL file;
res = f_open(&file, _T("/test.txt"), FA_CREATE_ALWAYS | FA_WRITE | FA_READ);
// ...
```

Esta parte del código intenta abrir (o crear si no existe) un archivo llamado "test.txt" en el sistema de archivos montado, que estaría en la tarjeta microSD si el montaje fue exitoso.

```c
res = f_write(&file, buffer, strlen(buffer), NULL);
// ...
```

Aquí, el código intenta escribir datos al archivo que fue abierto previamente. Esta operación guardaría los datos en la tarjeta microSD.

```c
res = f_read(&file, buffer, 512, NULL);
// ...
```

Esta sección lee datos del archivo "test.txt" y los almacena en un búfer. Esta operación recuperaría datos de la tarjeta microSD.

En resumen, el código incluye funcionalidad para montar una tarjeta microSD, crear o abrir un archivo, escribir datos al archivo y leer datos del archivo, indicando que la tarjeta microSD está siendo utilizada para almacenamiento en esta aplicación.

:::tip
El código `grove_vision_ai.c` ya tiene una configuración más completa para el uso del micrófono PDM y la tarjeta de memoria. Sin embargo, dado que la salida del micrófono es a través del puerto serie en el SDK, para guardar el archivo de audio, necesitas usar `getdata.py` para leer el puerto serie y luego transcribirlo. La tarjeta microSD, por otro lado, no requiere un programa Python separado para las tareas de almacenamiento.
:::

## Recursos

- **[GITHUB]** [Repositorio Himax para Grove Vision AI V2](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
