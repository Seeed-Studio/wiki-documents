---
sidebar_position: 13
description: Espacio de trabajo Nvidia Jetson en la plataforma SenseCraft AI
title: Espacio de trabajo reComputer Jetson
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/nvidia-jetson-workspace/
---


## Introducción

Antes de añadir un dispositivo Jetson al espacio de trabajo, primero instala la app SenseCraft AI en el Jetson.

SenseCraft AI-Jetson es un kit de desarrollo y una plataforma diseñada para dispositivos Edge AI NVIDIA Jetson. Simplemente ejecuta el "Quickstart Script" y se mostrará una interfaz de usuario interactiva para ver una aplicación de ejemplo con un vídeo precargado y un modelo de IA precargado. Si quieres añadir tu propia cámara USB o cámara IP, ¡puedes hacerlo fácilmente con unos pocos clics!

**Requisitos de hardware**

- Dispositivo NVIDIA Jetson
- Conectividad a Internet mediante Ethernet/WiFi
- Pantalla

**Requisitos de software**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Inicio rápido**<br />

1. Conecta el Jetson a una pantalla y enciéndelo<br />
2. Conecta un ratón y un teclado al dispositivo y escribe el siguiente comando en una terminal para ejecutar la aplicación

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante la instalación de la aplicación, debes configurar las siguientes opciones opcionales, así que configúralas según tus necesidades

- **[Opcional] ¿Habilitar el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo la frecuencia máxima de los relojes de CPU, GPU y EMC? [y/n] (por defecto: y): y**<br />
proporciona el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo una frecuencia máxima estática para los relojes de CPU, GPU y EMC.

- **[Opcional] ¿Ahorrar espacio desinstalando algunos paquetes innecesarios como libreoffice, cambiar el tamaño de la memoria Swap? (/swapfile) [y/n] (por defecto: n): n**<br />
En caso de memoria insuficiente (especialmente en Jetson Nano), es mejor habilitar la Swap para garantizar el funcionamiento normal del programa.

- **[Opcional] ¿Quieres crear o cambiar el tamaño de la memoria Swap? (/swapfile)?**<br />
Para obtener un mejor rendimiento del Nano, activa la Swap.

- **[Opcional] ¿Usar almacenamiento externo · para guardar el directorio de datos de Docker? (para imágenes y volúmenes de Docker)?**<br />

- **(Recomendado si tu partición raíz es menor de 32 GB). [y/n] (por defecto: n): n**<br />

El programa de edge AI requiere un mínimo de 32G de espacio de almacenamiento para ejecutarse; si no lo tienes, puedes elegir montar el volumen de datos de Docker en un disco externo.

4. Ahora puedes experimentar SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### Añadir dispositivo

1. En la plataforma SenseCraft AI, ve a **`Models`** > **`Workspace`** > **`NVIDIA Jetson`** y haz clic en **`Add Device`**.
2. Introduce un nombre personalizado para el dispositivo y obtén el código de vinculación desde el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. Vuelve a la aplicación SenseCraft AI del dispositivo. Haz clic en "Bind to SenseCraft AI platform", y entonces la aplicación mostrará el código de vinculación y el nombre temporal.

- Código de vinculación: introduce el código de vinculación correcto y válido en la plataforma SenseCraft AI para finalizar la vinculación del dispositivo.
- Nombre temporal: si el código de vinculación está duplicado, entonces debes introducir el nombre temporal correcto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. introduce el código de vinculación correcto y válido y haz clic en el botón "Comfirm"

5. Vinculación correcta, ahora puedes gestionar el dispositivo

:::note

cada cuenta solo puede añadir 5 dispositivos gratuitos

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### Información del dispositivo

La información del dispositivo se divide en tres partes: información general, información del flujo de vídeo y modelo de IA.

### Información general

La información del dispositivo se divide en tres partes: información general, información del flujo de vídeo y modelo de IA. Consulta la siguiente tabla para más detalles

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **Campos** | **Contenido** |
| --- | --- |
| **Nombre del dispositivo** | Nombre personalizado del dispositivo, el usuario puede cambiar el nombre |
| **SN del dispositivo** | Número de serie de producción único del dispositivo |
| **EUI del dispositivo** | EUI del dispositivo |
| **Estado en línea** | Online: el dispositivo está en línea<br />Offline: el dispositivo está fuera de línea, el usuario no puede operar un dispositivo fuera de línea |
| **Módulo equipado** | El módulo del dispositivo |
| **Uso de CPU** | Uso de CPU del dispositivo |
| **Memoria** | Uso de RAM del dispositivo |
| **Almacenamiento** | Uso de disco del dispositivo |
| **Dirección IP** | La dirección IP de red del dispositivo |
| **Dirección MAC** | La dirección MAC del dispositivo |
| **Versión de SenseCraft AI** | Versión de la aplicación SenseCraft AI instalada en el dispositivo |
| **Hora de recopilación** | La hora en que se recopiló por última vez la información del dispositivo |

### Eliminar dispositivo

Si has completado el despliegue del modelo de IA y no necesitas gestionar el dispositivo de forma remota, puedes eliminar el dispositivo de la plataforma y el dispositivo podrá realizar inferencia local, gestión de flujos y gestión de modelos de IA de forma independiente en el edge.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### Gestión del flujo de vídeo

Video Stream puede ver los resultados de inferencia en tiempo real de forma remota y gestionar el flujo de vídeo del dispositivo. Se admite añadir flujo, editar flujo, ver flujo y eliminar flujo.

#### Inferencia en tiempo real

Si se han añadido flujos de vídeo al dispositivo, los usuarios pueden ver los resultados de inferencia en tiempo real de todos los flujos en la plataforma. Permite la supervisión en tiempo real de los resultados de inferencia y de las excepciones

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### Añadir flujo

Haz clic en "Add Stream" e introduce información de flujo válida, y luego haz clic en el botón "Confirm" para enviar el nuevo flujo al dispositivo.   El dispositivo tarda un tiempo en añadir un nuevo flujo, la información de la plataforma se actualizará más tarde. Consulta la tabla siguiente para obtener información detallada.

:::note

El dispositivo debe estar en línea para añadir un nuevo flujo

:::

| **Campos** | **Contenido** |
| --- | --- |
| **Nombre del flujo** | 1 Nombre personalizado para este flujo.<br />2 No puede estar vacío |
| **Tipo de vídeo** | 1 Cámara IP: acceder a una cámara IP, es necesario introducir una URL rtsp válida<br />2 Cámara USB: conecta la cámara USB al dispositivo, reconoce automáticamente el USB y luego selecciona la cámara USB correcta en la ruta de vídeo. |
| **Ruta de vídeo** | Ruta de vídeo, el formato lo decide "Video Type"; si es incorrecto, se utilizará el vídeo por defecto. |
| **Modelo de IA del dispositivo** | 1 Selecciona un modelo de IA que ya se haya descargado en el dispositivo<br />2 Si no hay ningún modelo de IA en tu dispositivo, ve a la página AI Models para descargar el modelo en tu dispositivo. |
| **Umbral de confianza** | 1 Umbral de confianza de objeto para la detección.<br />2 Formato: float [0, 1] |
| **Umbral de IoU** | 1 IoU se utiliza para evaluar la precisión de los cuadros delimitadores predichos en comparación con los cuadros delimitadores reales2 Formato: float [0, 1] |
| **FPS** | 1 Fotogramas por segundo del flujo<br />2 Formato: INT [1,60] |
| **Calidad** | 1 Calidad del flujo de salida.  Por defecto: 50<br />2 Formato: int [0,100] |
| **Detecciones máximas** | 1 número máximo de detecciones por imagen. Por defecto:3002 Formato: int [0,1000] |
| **Velocidad de fotogramas en pantalla** | 1 Si se muestra la velocidad de fotogramas del flujo<br />2 Formato: Bool [True,False]<br />● True: mostrar FPS<br />● False: no mostrar FPS |
| **Mostrar reloj** | 1 Si se muestra la hora<br />2 Formato: Bool [True,False]<br />● True: mostrar hora<br />● False: no mostrar hora |

#### Detalle del flujo

Haz clic en el icono "Eye" del flujo, verás la información detallada del flujo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### Editar flujo

Haz clic en el icono "Edit" del flujo, los usuarios pueden editar todas las configuraciones del flujo y hacer clic en el botón "Confirm" para enviar la información de flujo modificada al dispositivo.  El dispositivo tarda un tiempo en actualizar la configuración del flujo, la información de la plataforma se actualizará más tarde

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### Eliminar flujo

Haz clic en el icono "Delete" del flujo para eliminar el flujo. El dispositivo tarda un tiempo en eliminar el flujo, la información de la plataforma se actualizará más tarde

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### Modelo de IA del dispositivo

Gestiona todos los modelos de IA que se han descargado en el dispositivo y admite añadir modelo, ver el detalle del modelo y eliminar modelo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

## **Soporte técnico**

**¿Necesitas ayuda con tu reComputer Jetson? ¡Estamos aquí para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
/div>
