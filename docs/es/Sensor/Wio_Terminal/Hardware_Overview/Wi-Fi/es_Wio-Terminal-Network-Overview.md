---
title: Descripción general
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/
slug: /es/Wio-Terminal-Network-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Descripción general

Esta wiki presenta cómo actualizar el firmware más reciente para el Núcleo Inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las librerías dependientes para que el Wio Terminal habilite la conectividad inalámbrica.

:::note
**¡Hemos migrado el Software Wi-Fi a la nueva Estructura eRPC que es más estable y puede funcionar con Bluetooth al mismo tiempo**! ¡Por favor sigue adelante para actualizar al firmware Wi-Fi eRPC y las librerías relacionadas!
:::

## Actualizar el Firmware del Núcleo Inalámbrico

Primero, necesitamos actualizar el firmware para el núcleo inalámbrico Realtek RTL8720 en el Wio Terminal. **Esto es esencial y debe actualizarse al firmware más reciente antes de proceder a los ejemplos.**

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atención</p>
    <p style={{color: '#000000', fontSize: 14}}>¡Por favor actualiza el Núcleo Wi-Fi antes del uso!</p>
  </div>
</div>

### Paso 1 - Borrar el Firmware de Fábrica Inicial

Cuando obtienes tu Wio Terminal por primera vez, necesitas borrar el firmware RTL8720 inicial y flashear el firmware más reciente. Hemos preparado una herramienta para esto llamada **ambd_flash_tool**, y cuando ejecutas esta herramienta, primero habilita una conexión serial desde SAMD51 a RTL8720 para que el firmware se instale en el RTL8720. Esto se hace porque no puedes comunicarte directamente con RTL8720. Después de eso, esta herramienta puede usarse para borrar el firmware existente en el RTL8720 y también flashear el firmware más reciente.

**NOTA**: Solo necesitas borrar el firmware de fábrica por primera vez. Después, puedes flashear nuevo firmware para sobrescribir el firmware existente

#### Para Windows

- **PASO 1:** Abre **Windows PowerShell** en tu PC y ejecuta los siguientes comandos para descargar la herramienta de flasheo

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTA**: Aquí el comando **cd ~** te dirige a tu directorio home y el comando **git clone** descarga el repositorio desde GitHub

- **PASO 2:** Navega al directorio **ambd_flash_tool**

```sh
cd ambd_flash_tool
```

- **PASO 3:** Conecta Wio Terminal a la PC y enciéndelo

- **PASO 4:** Ejecuta el siguiente comando para borrar el firmware inicial

```sh
.\ambd_flash_tool.exe erase
```

**NOTA:** El proceso inicial de borrado puede tomar un tiempo. Por favor, ten paciencia y **no** cierres la ventana

> ¡El puerto serie conectado del Wio Terminal será detectado automáticamente!

**NOTA**: Si quieres abrir la ayuda de uso, ejecuta `.\ambd_flash_tool.exe`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="pir" width={700} height="auto" /></p>

#### Para Mac/ Linux

- **PASO 1:** Abre **Terminal** en tu Mac/Linux y ejecuta los siguientes comandos para descargar la herramienta de flasheo

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTA**: Aquí el comando **cd ~** te dirige a tu directorio home y el comando **git clone** descarga el repositorio desde GitHub

- **PASO 2:** Navega al directorio **ambd_flash_tool**

```sh
cd ambd_flash_tool
```

- **PASO 3:** Conecta Wio Terminal a la PC y enciéndelo

- **PASO 4:** Ejecuta el siguiente comando para borrar el firmware inicial

```sh
python3 ambd_flash_tool.py erase
```

**NOTA**: Asegúrate de tener **Python 3 instalado en tu Mac/Linux**, y el script descargará automáticamente todas las librerías dependientes

> En algunos casos, es posible que solo tengas Python 3 en tu PC, entonces reemplaza `python3 ambd_flash_tool.py` con `python ambd_flash_tool.py`

**NOTA:** El proceso de borrado inicial puede tomar un tiempo. Por favor ten paciencia y **no** cierres la ventana

> ¡El puerto serie conectado del Wio Terminal será detectado automáticamente!

**NOTA**: Si quieres abrir la ayuda de uso, ejecuta `python3 ambd_flash_tool.py`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png" alt="pir" width={750} height="auto" /></p>

### Paso 2 - Flashear el Firmware Más Reciente

#### Para Windows

- Mientras estés dentro del directorio **ambd_flash_tool**, ejecuta el siguiente comando para flashear el **firmware más reciente** al RTL8720

```sh
.\ambd_flash_tool.exe flash
```

#### Para Mac/ Linux

- Mientras estés dentro del directorio **ambd_flash_tool**, ejecuta el siguiente comando para flashear el **firmware más reciente** al RTL8720

```sh
python3 ambd_flash_tool.py flash
```

### Flashear un Firmware Antiguo (Extra - Se Puede Omitir)

Si quieres probar tu código con una versión antigua del firmware, puedes hacerlo siguiendo los pasos a continuación. Sin embargo, si quieres comenzar con el firmware más reciente, puedes quedarte con el paso anterior **(Paso 2)** y omitir este paso

#### Para Windows

- **PASO 1:** Visita el repositorio [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) en GitHub

- **PASO 2:** Elige una **versión de lanzamiento** de tu elección y haz clic en **xxx-seeed-ambd-firmware-rpc-vxxx.zip** para descargarlo como un **archivo .zip**

- **PASO 3:** Navega al directorio **ambd_flash_tool** usando **Windows PowerShell** como se mencionó antes y ejecuta el siguiente comando

```sh
.\ambd_flash_tool.exe flash -d [RTL8720-firmware-path]
```

**NOTA:** Reemplaza `[RTL8720-firmware-path]` con la ruta donde descargaste el RTL8720 desde arriba. Esta carpeta debe contener todos estos 3 archivos: `km0_boot_all.bin`, `km0_km4_image2.bin` y `km4_boot_all.bin`

Si todo va bien, deberías ver un mensaje de éxito. ¡Ahora has flasheado el firmware RTL8720 en el núcleo RTL8720!

#### Para Mac/ Linux

- **PASO 1:** Visita el repositorio [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) en GitHub

- **PASO 2:** Elige una versión de lanzamiento de tu elección y haz clic en **xxx-seeed-ambd-firmware-rpc-vxxx.zip** para descargarlo como un **archivo .zip**

- **PASO 3:** Navega al directorio **ambd_flash_tool** usando la **terminal** como se mencionó antes y ejecuta el siguiente comando

```sh
python3 ambd_flash_tool.py flash -d [RTL8720-firmware-path]
```

**NOTA:** Reemplaza `[RTL8720-firmware-path]` con la ruta donde descargaste el RTL8720 desde arriba. Esta carpeta debe contener todos estos 3 archivos: `km0_boot_all.bin`, `km0_km4_image2.bin` y `km4_boot_all.bin`

Si todo va bien, deberías ver un mensaje de éxito. ¡Ahora has flasheado el firmware RTL8720 en el núcleo RTL8720!

## Verificar la Versión del Firmware RTL8720 desde Arduino IDE

Después de instalar el firmware anterior, puedes verificar si el firmware está instalado correctamente, subiendo el siguiente código al Wio Terminal a través del **Arduino IDE**

```cpp
#include "rpcWiFi.h"
#include <erpc/erpc_port.h>
 
void setup() {
    Serial.begin(115200);
    while(!Serial); // Wait to open Serial Monitor
    char* version = rpc_system_version();
    Serial.print("RTL8720 Firmware Version: ");
    Serial.println(version);
    erpc_free(version);
}
 
void loop() {
}
```

Una vez que abras el **Monitor Serie**, deberías ver la **versión del firmware** impresa

## Actualizar Seeed SAMD ArduinoCore

:::note
¡Por favor actualiza el **Seeed SAMD ArduinoCore a la última versión (1.8.1)**!
:::

- **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Tools` -> `Board` -> `Boards Manager`, y busca **Wio Terminal** en el cuadro de búsqueda

- **PASO 2:** Asegúrate de que la última versión (1.8.1) esté instalada. Si no es así, haz clic en el menú desplegable `Select version`, selecciona la última versión y haz clic en `Install`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> También puedes encontrar el código fuente de Seeed SAMD ArduinoCore [**aquí**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Instalación de Librerías

Hay algunas Librerías de Arduino que son necesarias para la conectividad inalámbrica. Hemos incluido todas las librerías relacionadas con conectividad inalámbrica para el Wio Terminal en el **Arduino Library Manager**. ¡Así que simplemente tienes que abrir Arduino Library Manager dentro del Arduino IDE y buscar las librerías que necesitas e instalarlas fácilmente!

### Cómo Instalar una Librería desde Arduino Library Manager

- **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Sketch` -> `Include Library` -> `Manage Libraries...`

- **PASO 2:** Escribe el **nombre de la librería** que necesitamos y selecciona la **última versión** del menú desplegable (si está disponible)

- **PASO 3:** Haz clic en **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Librerías Necesarias para Wi-Fi

Necesitamos las siguientes librerías para comenzar con Wi-Fi en el Wio Terminal. Puedes buscar estas librerías escribiendo el nombre de la librería en el cuadro de búsqueda del Arduino Library Manager.

Para tu conveniencia, hemos reunido todas las librerías juntas. Por lo tanto, para la documentación futura y actualizar la documentación actual, solo necesitas instalar rpcwifi y entonces instalará todas las librerías dependientes de wifi para ti.

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - busca `"seeed rpcwifi"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - busca `"seeed rpcunified"`

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - busca `"seeed mbedtls"`

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - busca `"seeed fs"`

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - busca `"seeed sfud"`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/newliarary.png" alt="pir" width={700} height="auto" /></p>

## Lanzamiento

<table align="center">
  <tbody><tr>
      <td align="center">Fecha de Actualización</td>
      <td align="center">Escritor</td>
      <td align="center">Detalle</td>
    </tr>
    <tr>
      <td align="center">10.12</td>
      <td align="center">BILL and LAKSHANTHA</td>
      <td align="center">Reunir todas las librerías requeridas juntas</td>
    </tr>
  </tbody></table>

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
