---
sidebar_position: 12
description: SenseCraft AI Jetson
title: Kit de herramientas para reComputer Jetson
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-jetson/
---

SenseCraft AI-Jetson es un kit de desarrollo y una plataforma diseñada para dispositivos NVIDIA Jetson Edge AI. Simplemente ejecuta el "Quickstart Script" y se te presentará una interfaz de usuario interactiva para ver una aplicación de ejemplo con un vídeo precargado y un modelo de IA precargado. Si quieres añadir tu propia cámara USB o cámara IP, ¡puedes hacerlo fácilmente con unos pocos clics!

Además de los diversos modelos de IA integrados que ofrecemos listos para usar, puedes acceder a una gran cantidad de modelos públicos en la plataforma SenseCraft AI y podrás descargar e implementar modelos de IA para escenarios específicos y crear soluciones de IA personalizadas según tus necesidades. SenseCraft AI es tu socio de toma de decisiones inteligente para visión por IA, proporcionándote capacidades de inferencia y creación de soluciones simples, flexibles y eficientes.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## Instalar SenseCraft AI-Jetson

**Requisitos de hardware**

- Dispositivo NVIDIA Jetson
- Conectividad a Internet mediante Ethernet/WiFi
- Pantalla

**Requisitos de software**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Inicio rápido**<br />

1. Conecta Jetson a una pantalla y enciéndelo<br />
2. Conecta un ratón y un teclado al dispositivo y escribe el siguiente comando en una terminal para ejecutar la aplicación

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante la instalación de la aplicación, debes configurar las siguientes opciones opcionales, así que configúralas según tus necesidades

- **[Opcional] ¿Habilitar el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo la frecuencia máxima de los relojes de CPU, GPU y EMC? [y/n] (predeterminado: y): y**<br />
proporciona el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo una frecuencia máxima estática para los relojes de CPU, GPU y EMC.

- **[Opcional] ¿Ahorrar espacio desinstalando algunos paquetes innecesarios como libreoffice, cambiar el tamaño de la memoria Swap? (/swapfile) [y/n] (predeterminado: n): n**<br />
En caso de memoria insuficiente (especialmente en Jetson Nano), es mejor habilitar swap para garantizar el funcionamiento normal del programa.

- **[Opcional] ¿Quieres crear o cambiar el tamaño de la memoria Swap? (/swapfile)?**<br />
Para obtener un mejor rendimiento de Nano, activa Swap.

- **[Opcional] ¿Usar almacenamiento externo · para guardar el directorio de datos de Docker? (para imágenes y volúmenes de Docker)?**<br />

- **(Recomendado si tu partición raíz es menor de 32 GB). [y/n] (predeterminado: n): n**<br />

El programa de edge AI requiere un mínimo de 32G de espacio de almacenamiento para ejecutarse; si no lo tienes, puedes optar por montar el volumen de datos de Docker en un disco externo.

4. Ahora puedes experimentar SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **Implementar nuevos modelos**

1. Visita la página “AI Models“ y selecciona un modelo de IA que necesites<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. Haz clic en el botón "Deploy Model"

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. Revisa el read me para asegurarte de que el dispositivo tiene instalado SenseCraft AI-Jetson y de que el modelo de IA se adapta al tipo de dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. Selecciona un dispositivo en línea

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. El modelo de IA necesita aplicar un flujo de vídeo; si no hay flujo, añade primero un flujo válido. Model zoo enviará la información del flujo directamente al dispositivo.

:::note
para más información sobre flujos, consulta Streams Management
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. Envía el modelo de IA y la información del flujo al dispositivo. La implementación del modelo de IA tarda unos minutos, por lo que puedes salir de la página actual e ir al dispositivo después de unos minutos para ver el modelo de IA implementado

### **Gestión de Streams**

SenseCraft AI-Jetson admite añadir múltiples flujos de vídeo y admite añadir cámaras USB y cámaras IP según tus necesidades.

El número de flujos de vídeo que se pueden añadir depende de los recursos de CPU y memoria del dispositivo. Presta atención al uso de recursos del dispositivo.

#### **Añadir Stream**

1. Visita la página Streams y haz clic en el icono +<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. Configura la información válida del nuevo flujo de vídeo, consulta la tabla siguiente para más detalles<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **Campos** | **Contenido** |
| --- | --- |
| **Stream Name** | 1 Nombre personalizado para este flujo.<br />2 No puede estar vacío |
| **Video Type** | 1 Ip camera: Accede a una cámara IP, necesitas introducir una URL rtsp válida<br />2 Usb camera: Conecta la cámara USB al dispositivo, reconoce automáticamente el USB y luego selecciona la cámara USB correcta en la ruta de vídeo. |
| **Video Path** | Ruta de vídeo, el formato lo decide "Video Type"; si es incorrecto, se utilizará el vídeo predeterminado. |
| **Device AI Model** | 1 Selecciona un modelo de IA que ya se haya descargado en el dispositivo<br />2 Si no hay ningún modelo de IA en tu dispositivo, ve a la página AI Models para descargar el modelo en tu dispositivo. |
| **Confidence Threshold** | 1 Umbral de confianza del objeto para la detección.<br />2 Formato: float [0, 1] |
| **IoU Threshold** | 1 IoU se utiliza para evaluar la precisión de los cuadros delimitadores predichos en comparación con los cuadros delimitadores reales2 Formato: float [0, 1] |
| **FPS** | 1 Fotogramas por segundo del flujo<br />2 Formato: INT [1,60] |
| **Quality** | 1 Calidad del flujo de salida.  Predeterminado: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecciones por imagen. Predeterminado: 3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Si se muestra la tasa de fotogramas del flujo<br />2 Formato: Bool [True,False]<br />● True: mostrar FPS<br />● False: no mostrar FPS |
| **Display Clock** | 1 Si se muestra la hora<br />2 Formato: Bool [True,False]<br />● True: mostrar hora<br />● False: no mostrar hora |

3. Haz clic en el botón "Save" y vuelve a la página de inicio para comprobar el nuevo flujo y el resultado de la detección de IA.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **Eliminar Stream**

Ve a los detalles del flujo y haz clic en el icono "Delete" para eliminar el flujo<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **Gestión de modelos de IA**

Gestiona todos los modelos de IA que se han descargado en el dispositivo.

- El modelo de IA mostrará el nombre del flujo que utiliza el modelo.<br />
- Los modelos de IA que no se utilizan en ningún flujo se pueden eliminar<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **Configuración**

#### **Acerca de**

La información del dispositivo, para más información consulta la siguiente tabla <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **Campos** | **Contenido** |
| --- | --- |
| **Product** | El módulo del dispositivo |
| **IP** | La dirección IP de red del dispositivo |
| **Serial number** | Número de serie de producción único del dispositivo |
| **MAC address** | Dirección MAC de red |
| **CPU Usage** | Uso de CPU del dispositivo |
| **RAM** | RAM del dispositivo |
| **Swap** | Swap del dispositivo |
| **Disk usage** | Uso de disco del dispositivo |
| **Cuda version** | La versión de Cuda instalada en el dispositivo |
| **Jetpack version** | La versión de Jetpack instalada en el dispositivo |

#### **Vincular a la plataforma SenseCraft AI**

SenseCraft AI para Jetson está diseñado para edge AI. La inferencia de IA y el procesamiento de flujos de vídeo se realizan localmente en el dispositivo. Solo si necesitas descargar más modelos de IA necesitas vincular el dispositivo a la [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home); puedes eliminar el dispositivo una vez descargados.

1. Visita [SenseCraft AI](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home).<br />
2. Regístrate con una dirección de correo electrónico válida. La cuenta de SenseCraft AI es la misma que la cuenta de SenseCAP Cloud; si ya tienes una, puedes iniciar sesión directamente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. Navega a **`Models`** > **`Workspace`** > **`NVIDIA Jetson`** y haz clic en **`Add Device`**.<br />
4. Introduce un nombre personalizado para el dispositivo y obtén el código de vinculación desde el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. Vuelve a la aplicación SenseCraft AI del dispositivo. Haz clic en "Bind to SenseCraft AI platform", y entonces la aplicación mostrará el código de vinculación y el nombre temporal.

- Bind Code: introduce el código de vinculación correcto y válido en la [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home) para terminar de vincular el dispositivo.<br />
- Temporary Name: si el código de vinculación está duplicado, entonces necesitas introducir el nombre temporal correcto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. introduce el código de vinculación correcto y válido y haz clic en el botón "Comfirm"<br />
7. Vinculación correcta, ahora puedes añadir nuevos modelos de IA desde el model zoo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Ubind**

Si no necesitas gestionar tu dispositivo de forma remota en la plataforma de IA, puedes eliminar el dispositivo de la cuenta de tu plataforma de IA. Puedes desvincularlo desde el dispositivo o desde la plataforma<br />

- Desvincula el dispositivo del AI mode zoo, haz clic en "Delete"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- Desvincula el dispositivo deshabilitando "Bind to SenseCraft AI platform"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **Actualización de la aplicación**

Las actualizaciones de la aplicación SenseCraft AI se dividen en actualizaciones automáticas y manuales, que puedes configurar según tus necesidades.

**Actualización automática**: busca actualizaciones cada 5 minutos; cuando se detecta una nueva versión, la información se actualizará automáticamente, sin necesidad de hacerlo manualmente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**Actualización manual**: comprueba manualmente si hay actualizaciones y haz clic en el botón Update para actualizar cuando se detecte una nueva versión

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **Soporte técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
