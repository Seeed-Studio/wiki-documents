---
sidebar_position: 12
description: SenseCraft AI Jetson
title: Kit de herramientas para reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /es/sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
---

SenseCraft AI-Jetson es un kit de herramientas de desarrollo y plataforma diseñada para dispositivos NVIDIA Jetson Edge AI. Simplemente ejecuta el "Script de Inicio Rápido" y se te presentará una interfaz de usuario interactiva para ver una aplicación de ejemplo con un video precargado y un modelo de IA precargado. Si quieres agregar tu propia cámara USB, cámara IP, ¡puedes hacerlo simplemente con unos pocos clics!

Además de los diversos modelos de IA integrados que ofrecemos listos para usar, puedes acceder a una gran cantidad de modelos públicos en la plataforma SenseCraft AI y podrás descargar e implementar modelos de IA para escenarios específicos y crear soluciones de IA personalizadas basadas en tus necesidades. SenseCraft AI es tu socio inteligente de toma de decisiones para visión artificial, proporcionándote capacidades de inferencia y construcción de soluciones simples, flexibles y eficientes.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## Instalar SenseCraft AI-Jetson

**Requisitos de Hardware**

- Dispositivo NVIDIA Jetson
- Conectividad a Internet vía Ethernet/ WiFi
- Pantalla

**Requisitos de Software**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Inicio Rápido**<br />

1. Conecta Jetson a una pantalla y enciéndelo<br />
2. Conecta un mouse y teclado al dispositivo y escribe el siguiente comando en una terminal para ejecutar la aplicación

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante la instalación de la aplicación, necesitas configurar las siguientes configuraciones opcionales, así que configúralas según tus necesidades

- **[Opcional] ¿Habilitar el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo la frecuencia máxima a los relojes de CPU, GPU y EMC? [y/n] (predeterminado: y): y**<br />
proporciona el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo una frecuencia máxima estática a los relojes de CPU, GPU y EMC.

- **[Opcional] ¿Ahorrar espacio desinstalando algunos paquetes innecesarios como libreoffice, cambiar el tamaño de la Memoria Swap? (/swapfile) [y/n] (predeterminado: n): n**<br />
En caso de memoria insuficiente (especialmente jetson nano), es mejor habilitar swap para asegurar el funcionamiento normal del programa.

- **[Opcional] ¿Quieres crear o cambiar el tamaño de la Memoria Swap? (/swapfile)?**<br />
Para obtener mejor rendimiento del nano, activa Swap.

- **[Opcional] ¿Usar · externo para almacenar el directorio de datos de Docker? (para imágenes y volúmenes de docker)?**<br />

- **(Recomendado si tu partición raíz es menor a 32 GB). [y/n] (predeterminado: n): n**<br />

El programa edge ai requiere un mínimo de 32G de espacio de almacenamiento para ejecutarse, si no, puedes elegir montar el volumen de datos de docker en un disco externo.

4. Ahora puedes experimentar SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **Implementar nuevos modelos**

1. Visita la página "AI Models" y selecciona un modelo de IA que necesites<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. Haz clic en el botón "Deploy Model"

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. Revisa el readme para asegurar que el dispositivo tenga instalado SenseCraft AI-Jetson y que el modelo de IA se adapte al tipo de dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. Selecciona un dispositivo en línea

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. El modelo de IA necesita aplicar un flujo de video, si no hay flujo por favor agrega un flujo válido primero. Model zoo enviará la información del flujo al dispositivo directamente.

:::note
para más información sobre flujos por favor revisa Gestión de Flujos
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. Envía el modelo de IA y la información del flujo al dispositivo. La implementación del modelo de IA toma unos minutos, así que puedes salir de la página actual e ir al dispositivo después de unos minutos para ver el modelo de IA implementado

### **Gestión de flujos**

SenseCraft AI-Jetson soporta agregar múltiples flujos de video y soporta agregar cámara USB y cámara IP según tus necesidades.

El número de flujos de video que se pueden agregar depende de los recursos de CPU y memoria del dispositivo. Presta atención al uso de recursos del dispositivo.

#### **Agregar Flujo**

1. Visita la página Streams y haz clic en el ícono +<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. Configura el mensaje válido del nuevo flujo de video, por favor revisa la tabla a continuación para detalles<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **Campos** | **Contenido** |
| --- | --- |
| **Stream Name** | 1 nombre personalizado para este flujo.<br />2 No puede estar vacío |
| **Video Type** | 1 Cámara IP：Acceder a una cámara IP, necesita ingresar una url rtsp válida<br />2 Cámara USB：Conectar la cámara usb al dispositivo, reconocer automáticamente el usb, y luego seleccionar la cámara usb correcta en la ruta de video. |
| **Video Path** | Ruta de Video, formato decidido por "Video Type", si está incorrecto, se usará el video predeterminado. |
| **Device AI Model** | 1 Seleccionar un modelo de IA que ya esté descargado en el dispositivo<br />2 Si no hay modelo de IA en tu dispositivo, por favor ve a la página AI Models para descargar el modelo a tu dispositivo. |
| **Confidence Threshold** | 1 Umbral de confianza del objeto para detección.<br />2 Formato:float [0, 1] |
| **IoU Threshold** | 1 IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras verdaderas2 Formato:float [0, 1] |
| **FPS** | 1 Fotogramas por segundo del flujo<br />2 Formato: INT [1,60] |
| **Quality** | 1 Calidad del flujo de salida. Predeterminado: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecciones por imagen.Predeterminado:3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Si mostrar la tasa de fotogramas del flujo<br />2 Formato:Bool [True,False]<br />● True: mostrar FPS<br />● False: no mostrar FPS |
| **Display Clock** | 1 Si mostrar la hora<br />2 Formato:Bool [True,False]<br />● True: mostrar hora<br />● False: no mostrar hora |

3. Haz clic en el botón "Save" y regresa a la página de inicio para revisar el nuevo flujo y el resultado de detección de IA.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **Eliminar Stream**

Ve a los detalles del stream y haz clic en el icono "Delete" para eliminar el stream<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **Gestión de Modelos de IA**

Gestiona todos los modelos de IA que han sido descargados en el dispositivo.

- El modelo de IA mostrará el nombre del stream que usa el modelo.<br />
- Los modelos de IA no utilizados en stream pueden ser eliminados<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **Configuraciones**

#### **Acerca de**

La información del dispositivo, para más información por favor revisa la siguiente tabla <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **Campos** | **Contenido** |
| --- | --- |
| **Producto** | El módulo del dispositivo |
| **IP** | La dirección IP de red del dispositivo |
| **Número de serie** | Número de serie único de producción del dispositivo |
| **Dirección MAC** | Dirección MAC de red |
| **Uso de CPU** | Uso de CPU del dispositivo |
| **RAM** | RAM del dispositivo |
| **Swap** | Swap del dispositivo |
| **Uso de disco** | Uso de disco del dispositivo |
| **Versión de Cuda** | La versión de Cuda instalada en el dispositivo |
| **Versión de Jetpack** | La versión de jetpack instalada en el dispositivo |

#### **Vincular a la plataforma SenseCraft AI**

SenseCraft AI -Jetson está diseñado para IA de borde. La inferencia de IA y el procesamiento de stream de video se realiza localmente en el dispositivo, solo si necesitas descargar más modelos de IA necesitas vincular el dispositivo al [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home), y puedes remover el dispositivo de la plataforma una vez descargado.

1. Visita [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)<br />
2. Regístrate con una dirección de correo electrónico válida. La cuenta de SenseCraft-AI Model Zoo es la misma que la cuenta de SenseCAP cloud, si ya tienes una cuenta de SenseCAP Cloud, puedes iniciar sesión directamente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. Visita "Device Workspace" y haz clic en el botón "Add Device".<br />
4. Ingresa un nombre personalizado del dispositivo y obtén el código de vinculación del dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. Regresa a la aplicación SenseCraft AI del dispositivo. Haz clic en "Bind to SenseCraft AI platform", y luego la aplicación mostrará el código de vinculación y el nombre temporal.

- Código de Vinculación: ingresa el código de vinculación correcto y válido en [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) para finalizar la vinculación del dispositivo.<br />
- Nombre Temporal: si el código de vinculación está duplicado entonces necesitas ingresar el nombre temporal correcto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. ingresa el código de vinculación correcto y válido y haz clic en el botón "Comfirm"<br />
7. Vinculación exitosa, ahora puedes agregar nuevos modelos de IA desde el model zoo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Desvincular**

Si no necesitas gestionar remotamente tu dispositivo en la plataforma de IA puedes eliminar el dispositivo de tu cuenta de la plataforma de IA. Puedes desvincular desde el dispositivo o en la plataforma<br />

- Desvincula el dispositivo del AI model zoo, Haz clic en "Delete"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- Desvincula el dispositivo deshabilitando "Bind to SenseCraft AI platform"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **Actualización de la App**

Las actualizaciones de la App SenseCraft AI se categorizan en automáticas y manuales, las cuales puedes configurar según tus necesidades.

**Actualización automática**: verifica actualizaciones cada 5 minutos, cuando se detecta una nueva versión, la información se actualizará automáticamente, no necesitas hacerlo manualmente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**Actualización manual**: verifica manualmente las actualizaciones, y haz clic en el botón Update para actualizar cuando se detecte una nueva versión

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **Soporte Técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
