---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware MeshCore, compilar el nodo solar y flashear el firmware.
title: Tutorial de desarrollo del código fuente de MeshCore
keywords:
  - MeshCore
  - Código fuente
  - PlatformIO
  - Nodo solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_solar_node
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/es/meshcore_source_code_pratical_tutorial_solar_node/
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

Abre VSCode, luego haz clic en el icono de PlatformIO, elige `select a folder`. Elige la carpeta donde clonaste el proyecto.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO instalará automáticamente las dependencias necesarias. Después de que la instalación se complete correctamente, podrás ver `Project has been successfully updated`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## Desarrollo de firmware

### Tutorial de desarrollo

Encuentra el entorno para tu placa objetivo. Toma el repetidor de nodo solar como ejemplo:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

Entonces PlatformIO preparará las dependencias necesarias para la placa.

Cambia tu código. Se recomienda cambiar el archivo `variant.h` para tu placa.

Después de completar la codificación, ejecuta el siguiente comando para compilar el código y convertirlo en un archivo uf2.

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

Luego haz doble clic en el botón RST para entrar en modo DFU. Arrastra el archivo uf2 al disco emergente. El archivo uf2 se puede encontrar en `.pio\build\SenseCap_Solar_repeater`

### Ejemplo

#### Control de luz de usuario

Este ejemplo muestra cómo escribir un bucle intermitente para la luz de usuario. Copia el siguiente código en `/examples/simple_repeater/main.cpp`

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

y escribe el bucle:

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

Compílalo y flashea el archivo uf2 en tu nodo solar.

## (Avanzado) Envío de PR

Gracias por considerar contribuir al proyecto MeshCore. ¿Cómo puedes contribuir?
**1. Informar errores (bugs)**

- Usa el rastreador de Issues
- Usa un título claro (por ejemplo, "Crash when calling begin() with invalid pin")
- Describe los pasos exactos para reproducirlo
- Incluye tu placa, versión del IDE, versión de la biblioteca y el fragmento de código relevante
- Adjunta un sketch de ejemplo mínimo y completo si es posible

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
2. Obtén una aprobación general del/los mantenedor(es)
3. Haz fork del repositorio desde la rama 'dev' y crea tu rama (fix/xxx, feature/yyy, docs/whatever)
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
(pero la coherencia con el código existente es más importante que las reglas estrictas)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

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