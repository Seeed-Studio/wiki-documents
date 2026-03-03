---
description: Un monitor GPIO en tiempo real basado en MicroPython para el Seeed Studio XIAO ESP32-S3 (Sense). Muestra estados de pines digitales en vivo (HIGH/LOW/TOUCH) a través de una interfaz web local usando Thonny.
title: Visor GPIO del Seeed Studio XIAO ESP32-S3 (Sense)
keywords:
- GPIO Viewer
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_10.webp
slug: /XIAO_ESP32S3_GPIO_Viewer
last_update:
  date: 01/06/2026
  author: Utkarsh Bhor Patil, Garla Guo
---

# Visor GPIO del XIAO ESP32-S3 (Sense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_1.png" style={{width:1000, height:'auto'}}/></div>


> [Visor GPIO del XIAO ESP32-S3 (Sense)](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer) es un monitor GPIO en tiempo real basado en MicroPython para el Seeed Studio XIAO ESP32-S3 (Sense). Muestra estados de pines digitales en vivo (HIGH/LOW/TOUCH) a través de una interfaz web local usando Thonny.

## Información Mostrada en la Página Web
- **Monitoreo GPIO e I/O**: Muestra estados GPIO digitales en tiempo real, lecturas ADC en vivo y mapeos claros de números de pines GPIO.
- **Información de Tiempo de Ejecución**: Reporta la frecuencia actual de la CPU y el tiempo de actividad del sistema para reflejar el estado operativo en tiempo real.
- **Memoria y Almacenamiento**: Muestra el uso de memoria heap, porcentaje de uso del sistema de archivos, tamaño de flash y disponibilidad de PSRAM donde sea compatible.
- **Información de Red**: Proporciona diagnósticos de red incluyendo dirección IP, SSID de Wi-Fi conectado, intensidad de señal (RSSI), dirección MAC, gateway y servidor DNS.
- **Firmware y Sistema**: Identifica el modelo del chip, número de núcleos de CPU, versión de MicroPython e información de compilación del firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

## Características
- Muestra estados digitales GPIO en vivo y lecturas ADC, permitiendo depuración visual durante el prototipado y desarrollo
- Opera como un servidor web embebido ligero que funciona completamente en el XIAO ESP32-S3 (Sense), sin requerir software externo o servicios en la nube después del despliegue
- Proporciona una interfaz basada en navegador accesible desde cualquier dispositivo en la misma red local para monitoreo en tiempo real
- Simplifica la validación de entradas de sensores, relés y módulos periféricos sin herramientas de depuración adicionales
- Construido con MicroPython para legibilidad e iteración rápida, mientras mantiene un uso mínimo de recursos adecuado para sistemas embebidos restringidos

## Proceso de Construcción
Este es un flujo de trabajo amigable para principiantes usando MicroPython y el IDE Thonny, te guiará paso a paso desde el principio, comenzando desde descargar las herramientas que necesitarás hasta ejecutar el proyecto GPIOViewer en tu XIAO ESP32-S3 (Sense).

### Prepara Tu Computadora
Antes de tocar la placa XIAO, descarguemos e instalemos el IDE Thonny (tu editor de Python).

1. Abre tu navegador web (como Chrome o Safari).
2. Ve a https://thonny.org – Este es el sitio oficial.
3. Haz clic en el enlace de descarga para tu computadora (Windows, macOS o Linux).
4. Una vez descargado, ejecuta el instalador y sigue las indicaciones en pantalla (haz clic en "Next" → "Install" → "Finish").

> Thonny es el programa que usarás para escribir y subir código Python a tu placa.

### Instalar Herramientas Python Necesarias (Esptool)

Para preparar la placa para MicroPython, necesitamos una pequeña herramienta llamada **esptool**.

1. En tu computadora, encuentra y abre Terminal (Mac/Linux) o Command Prompt (Windows).
2. Escribe esto y presiona Enter:
```
pip install esptool
```
Esto instala la herramienta que nos permitirá poner el firmware de MicroPython en tu placa XIAO.

### Descargar el Firmware de MicroPython

Necesitamos un archivo binario especial que permita a tu placa XIAO ejecutar MicroPython.

1. Abre tu navegador web en https://micropython.org/download/ESP32_GENERIC_S3/
2. Haz clic para descargar el archivo .bin más reciente (ejemplo: ESP32_GENERIC_S3-xxxxx.bin).
3. Guárdalo en algún lugar fácil de encontrar, como tu Escritorio.

### Conecta Tu XIAO ESP32-S3 (Sense) a Tu Computadora

1. Toma un cable USB-C y conecta el XIAO a tu computadora.

:::tip
Si la placa no aparece, mantén presionado el botón BOOT mientras la conectas.
:::

2. Después de conectar, tu computadora asignará a la placa un puerto COM (Windows) o un dispositivo tty en Mac/Linux.

### Flashear (Instalar) MicroPython en la Placa

Ahora ponemos el firmware de MicroPython en tu XIAO.

**1. Borrar la memoria flash antigua**

Encuentra el puerto de tu placa y luego en Terminal / Command Prompt escribe:
```
esptool --chip esp32s3 --port COMX erase-flash
```

:::tip
Reemplaza COMX con cualquier puerto que muestre tu sistema, en Mac podría ser /dev/tty.usbmodemXXXX o /dev/tty.usbserialXXXX, mientras que en Linux puede ser /dev/ttyUSB0 o /dev/ttyACM0.
:::

**2. Escribir el firmware**

Aún en Terminal, primero navega a la ubicación de almacenamiento del archivo bin, luego escribe al flash.

```
cd Desktop
esptool.py --chip esp32s3 --port COMX write_flash -z 0x0 ESP32_GENERIC_S3-xxxx.bin
```

Asegúrate de que el nombre del archivo coincida con el archivo `.bin` que descargaste. Este comando instala MicroPython en tu placa.

### Abrir Thonny y Conectar a la Placa

Cierra la terminal, desconecta el cable USB del XIAO, espera 5 segundos, luego conecta el XIAO de nuevo (solo conéctalo sin presionar ningún botón). ¡Ahora verás MicroPython ejecutándose!

1. Abre **Thonny** en tu computadora.
2. Ve a **Run → Configure Interpreter**.
3. Establece **Interpreter** en "MicroPython (ESP32)".
4. Elige el **puerto** que coincida con tu XIAO.
5. Haz clic en OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_3.png" style={{width:800, height:'auto'}}/></div>

Ahora deberías ver un prompt de MicroPython en la parte inferior de Thonny donde puedes escribir comandos de Python.
Intenta escribir:
```
print("Hello from XIAO!")
```
y presiona Enter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_4.png" style={{width:600, height:'auto'}}/></div>

### Descargar los Archivos del Proyecto GPIOViewer

Ahora que tu placa ejecuta MicroPython:

1. Abre un navegador y ve al proyecto de GitHub: https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer/tree/main
2. Haz clic en **Code → Download ZIP** para guardar el proyecto en tu computadora.
3. Extrae el ZIP descargado a una carpeta que recordarás.

### Subir el Proyecto a Tu Placa

En Thonny:

1. Abre la barra lateral **Files** (View → Files).
2. Navega a la carpeta del proyecto que extrajiste. Deberías ver boot.py y main.py.
3. Haz clic derecho en `boot.py` → **Upload to / (root)**.
4. Repite para `main.py`.

Esto pone el código GPIOViewer en tu XIAO y lo configura para ejecutarse cuando la placa se inicie.

### Configurar Tu Wi-Fi (dentro de boot.py)

Antes de iniciar el proyecto:

1. En Thonny abre el archivo `boot.py` que subiste.
2. Encuentra las líneas para tu SSID y contraseña de Wi-Fi.
3. Reemplaza `"Your_WiFi_SSID"` y `"Your_WiFi_Password"` con el nombre y contraseña de tu Wi-Fi doméstico.
4. Guarda el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_5.png" style={{width:600, height:'auto'}}/></div>

### Ejecutar y Ver el Monitor GPIO

1. Con tu placa aún conectada, presiona **Run** (botón verde) en Thonny.
2. Después de unos segundos, tu placa se conectará al Wi-Fi.
3. Mira en la salida de Thonny — mostrará la **dirección IP** que recibe la placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_6.png" style={{width:800, height:'auto'}}/></div>

4. En tu computadora, abre un **navegador web** y escribe esa IP (por ejemplo http://192.168.6.80:8080).
5. Verás el **panel GPIO en tiempo real** mostrando estados de pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

:::tip
1. Antes de **Run**, por favor conecta la antena al XIAO ESP32-S3 (Sense).
2. Si no puedes abrir la página web, la siguiente situación ocurre después de que Thonny se reconecte a la placa:
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_7.png" style={{width:800, height:'auto'}}/></div>
  No te preocupes, este es un comportamiento normal en la configuración MicroPython + Thonny + Servidor Web. Simplemente presiona el botón Reset en la placa una vez, o cierra Thonny.
:::


## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer).
- Un agradecimiento especial a [Utkarsh Bhor Patil](https://github.com/TuzaaBap) por sus esfuerzos dedicados.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>