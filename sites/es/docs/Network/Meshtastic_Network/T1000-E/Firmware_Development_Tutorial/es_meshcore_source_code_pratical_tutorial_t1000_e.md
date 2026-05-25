---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware MeshCore, compilar el T1000-E y flashear el firmware.
title: Tutorial de desarrollo del código fuente de MeshCore
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_t1000_e
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/es/meshcore_source_code_pratical_tutorial_t1000_e/
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

Después de la instalación, normalmente aparecerá un icono con forma de hormiga en la barra de herramientas izquierda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Preparación del proyecto

Abre una carpeta en la que quieras tener tu proyecto. Abre la carpeta en la terminal. [Haz clic aquí](https://github.com/meshcore-dev/MeshCore) para clonar el proyecto con git.

Abre VSCode, luego haz clic en el icono de PlatformIO y elige `select a folder`. Elige la carpeta donde clonaste el proyecto.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO instalará automáticamente las dependencias necesarias. Después de que la instalación se complete correctamente, podrás ver `Project has been successfully updated`


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:800, height:'auto'}}/></div>


## Desarrollo de firmware

### Tutorial de desarrollo

Encuentra el entorno para tu placa de destino. Toma T1000-E Bluetooth Companion como ejemplo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000EBoard.jpg" style={{width:800, height:'auto'}}/></div>


Entonces PlatformIO preparará las dependencias requeridas para la placa.

Modifica tu código. Se recomienda cambiar el archivo `variant.h` correspondiente a tu placa.

Después de completar la codificación, ejecuta el siguiente comando para compilar el código y convertirlo a un archivo uf2.

``` bash
pio run -e t1000e_companion_radio_ble
pio run -e t1000e_companion_radio_ble -t create_uf2
```

Mantén pulsado el botón del dispositivo y, a continuación, conecta rápidamente el cable de carga dos veces; el LED verde quedará encendido de forma fija. Arrastra el archivo uf2 a la unidad que aparece. El archivo uf2 se puede encontrar en `.pio\build\t1000e_companion_radio_ble`

### Ejemplo

#### Control de la luz de usuario

Este ejemplo muestra cómo controlar la luz de usuario para que permanezca encendida constantemente. Copia el siguiente código en `/examples/companion_radio/ui-new/ui-orig/UITask.cpp`

``` python
void UITask::userLedHandler() {
#ifdef PIN_STATUS_LED
#ifdef T1000_E
  // T1000-E: keep status LED continuously on.
  digitalWrite(PIN_STATUS_LED, LED_STATE_ON);
  return;
#endif
  static int state = 0;
  static int next_change = 0;
  static int last_increment = 0;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000ELight.jpg" style={{width:900, height:'auto'}}/></div>


Compílalo y flashea el archivo uf2 en tu T1000-E.

## (Avanzado) Envío de PR

¡Gracias por considerar contribuir al proyecto MeshCore! ¿Cómo puedes contribuir?
**1. Informar errores (bugs)**

- Usa el rastreador de Issues
- Usa un título claro (por ejemplo, "Crash when calling begin() with invalid pin")
- Describe los pasos exactos para reproducirlo
- Incluye tu placa, versión del IDE, versión de la biblioteca y fragmento de código relevante
- Adjunta un ejemplo mínimo y completo si es posible

**2. Sugerir mejoras / nuevas funciones**
- Abre un issue con el prefijo [Feature request]
- Explica el caso de uso → ¿qué problema resolvería esto?
- Describe tu API / comportamiento ideal (los ejemplos de código son muy útiles)
**3. Enviar cambios de código (Pull Requests)**
### Pequeñas correcciones 
(errores tipográficos, comentarios, ejemplos, pequeñas correcciones de bugs)
→ Simplemente abre un pull request — no es necesario un issue previo

### Cambios mayores / nuevas funciones
1. Abre primero un issue para discutir la idea
2. Obtén un visto bueno general del/de los mantenedor(es)
3. Haz un fork del repositorio desde la rama 'dev' y crea tu rama (fix/xxx, feature/yyy, docs/loquesea)
4. Realiza tus cambios
5. Actualiza o añade ejemplos cuando sea apropiado
6. Añade/actualiza comentarios en el código
7. Envía el pull request

### Directrices para Pull Requests
- Una función / corrección = un pull request (los PR pequeños son más fáciles y rápidos de revisar)
- Usa mensajes de commit descriptivos
  Bueno: Fix I2C timeout handling on ESP32
  Malo: update
- Hace referencia a cualquier issue relacionado (Fixes #123, Closes #89, etc.)
- Si cambias la API pública, actualiza README.md y library.properties
- Las nuevas funciones deben incluir un ejemplo en la carpeta examples/
### Estilo de código
Por favor, sigue el estilo C++ existente (según el .clang-format)

- Sangría de 2 espacios (sin tabuladores)
- camelCase para funciones y variables
- UpperCamelCase / PascalCase para nombres de clases
- Constantes #define en MAYÚSCULAS
- Mantén las líneas < ~100 caracteres cuando sea razonable
(Pero la consistencia con el código existente es más importante que las reglas estrictas)
