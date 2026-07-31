---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware MeshCore, compilar el Tracker L1 y flashear el firmware.
title: Tutorial de desarrollo del código fuente de MeshCore
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_l1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/es/meshcore_source_code_pratical_tutorial_l1/
createdAt: '2026-03-27'
updatedAt: '2026-04-02'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Requisitos previos

### Herramienta necesaria

Antes de comenzar, prepara las siguientes herramientas:

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### Instalar PlatformIO

Busca `PlatformIO` en el marketplace de Extensiones de VS Code e instálalo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Después de la instalación, normalmente aparece un icono con forma de hormiga en la barra de herramientas izquierda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Preparación del proyecto

Abre una carpeta en la que quieras tener tu proyecto. Abre la carpeta en la terminal. [Haz clic aquí](https://github.com/meshcore-dev/MeshCore) para hacer git clone del proyecto.

Abre VSCode, luego haz clic en el icono de PlatformIO y elige `select a folder`. Elige la carpeta donde clonaste el proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png" style={{width:700, height:'auto'}}/></div>


PlatformIO instalará automáticamente las dependencias necesarias. Después de que la instalación se complete correctamente, podrás ver `Project has been successfully updated`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:700, height:'auto'}}/></div>


## Desarrollo de firmware

### Tutorial de desarrollo

Encuentra el entorno para tu placa de destino. Toma L1 Pro companion como ejemplo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Board.jpg" style={{width:800, height:'auto'}}/></div>


Entonces PlatformIO preparará las dependencias necesarias para la placa.

Cambia tu código. Se recomienda cambiar el archivo `variant.h` para tu placa.

Después de completar la codificación, ejecuta el siguiente comando para compilar el código y convertirlo en un archivo uf2.

``` bash
pio run -e WioTrackerL1_companion_radio_ble
pio run -e WioTrackerL1_companion_radio_ble -t create_uf2
```

Luego haz doble clic en el botón RST para entrar en modo DFU. Arrastra el archivo uf2 al disco emergente. El archivo uf2 se puede encontrar en `.pio\build\WioTrackerL1_companion_radio_ble`

### Ejemplo

#### Control de pantalla de usuario

Este ejemplo muestra cómo modificar la pantalla de la interfaz de usuario de L1 Pro. Elimina el mensaje que se muestra en la pantalla y muestra "Test" constantemente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Displayy.jpg" style={{width:500, height:'auto'}}/></div>

Copia el siguiente código en `/examples/companion_radio/ui-new/UITask.cpp`

``` python
 if (_page == HomePage::FIRST) {
      display.setColor(DisplayDriver::YELLOW);
      display.setTextSize(2);
      display.drawTextCentered(display.width() / 2, 20, "Test");
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Display.jpg" style={{width:800, height:'auto'}}/></div>

Compílalo y flashea el archivo uf2 en tu L1 Pro.

## (Avanzado) Envío de PR

¡Gracias por considerar contribuir al proyecto MeshCore! ¿Cómo puedes contribuir?
**1. Informar errores (bugs)**

- Usa el rastreador de Issues
- Usa un título claro (por ejemplo, "Crash when calling begin() with invalid pin")
- Describe los pasos exactos para reproducirlo
- Incluye tu placa, versión del IDE, versión de la librería y el fragmento de código relevante
- Adjunta un sketch de ejemplo mínimo y completo si es posible

**2. Sugerir mejoras / nuevas funciones**
- Abre un issue con el prefijo [Feature request]
- Explica el caso de uso → ¿qué problema resolvería esto?
- Describe tu API / comportamiento ideal (los ejemplos de código son muy útiles)
**3. Enviar cambios de código (Pull Requests)**
### Pequeñas correcciones 
(errores tipográficos, comentarios, ejemplos, pequeñas correcciones de bugs)
→ Simplemente abre un pull request — no es necesario un issue previo

### Cambios más grandes / nuevas funciones
1. Abre primero un issue para discutir la idea
2. Obtén una aprobación general del/los mantenedor(es)
3. Haz fork del repositorio desde la rama 'dev' y crea tu rama (fix/xxx, feature/yyy, docs/loquesea)
4. Realiza tus cambios
5. Actualiza o añade ejemplos cuando sea apropiado
6. Añade/actualiza comentarios en el código
7. Envía el pull request

### Directrices para Pull Requests
- Una función / corrección = un pull request (los PR más pequeños son más fáciles y rápidos de revisar)
- Usa mensajes de commit descriptivos
  Bueno: Fix I2C timeout handling on ESP32
  Malo: update
- Haz referencia a cualquier issue relacionado (Fixes #123, Closes #89, etc.)
- Si cambias la API pública, actualiza README.md y library.properties
- Las nuevas funciones deben incluir un sketch de ejemplo en examples/
### Estilo de código
Por favor, sigue el estilo C++ existente (según .clang-format)

- Sangría de 2 espacios (sin tabs)
- camelCase para funciones y variables
- UpperCamelCase / PascalCase para nombres de clases
- Constantes #define en MAYÚSCULAS
- Mantén las líneas < ~100 caracteres cuando sea razonable
(Pero la coherencia con el código existente es más importante que las reglas estrictas)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>