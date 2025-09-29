---
sidebar_position: 13
description: Espacio de Trabajo Nvidia Jetson en la Plataforma SenseCraft AI
title: Espacio de Trabajo reComputer Jetson
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /es/nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## Primeros Pasos

Antes de agregar un dispositivo Jetson al espacio de trabajo, primero instale la aplicación SenseCraft AI en el jetson.

SenseCraft AI-Jetson es un kit de herramientas de desarrollo y plataforma diseñada para dispositivos NVIDIA Jetson Edge AI. Simplemente ejecute el "Script de Inicio Rápido" y se le presentará una interfaz de usuario interactiva para ver una aplicación de ejemplo con un video precargado y un modelo de IA precargado. Si desea agregar su propia cámara USB, cámara IP, ¡puede hacerlo simplemente en unos pocos clics!

**Requisitos de Hardware**

- Dispositivo NVIDIA Jetson
- Conectividad a Internet vía Ethernet/ WiFi
- Pantalla

**Requisitos de Software**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Inicio Rápido**<br />

1. Conecte Jetson a una pantalla y enciéndalo<br />
2. Conecte un mouse y teclado al dispositivo y escriba el siguiente comando en una terminal para ejecutar la aplicación

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante la instalación de la aplicación, necesita configurar las siguientes configuraciones opcionales, así que configúrelas según sus necesidades

- **[Opcional] ¿Habilitar el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo la frecuencia máxima a los relojes de CPU, GPU y EMC? [y/n] (predeterminado: y): y**<br />
proporciona el script jetson_clocks para maximizar el rendimiento de Jetson estableciendo una frecuencia máxima estática a los relojes de CPU, GPU y EMC.

- **[Opcional] ¿Ahorrar espacio desinstalando algunos paquetes innecesarios como libreoffice, cambiar el tamaño de la Memoria Swap? (/swapfile) [y/n] (predeterminado: n): n**<br />
En el caso de memoria insuficiente (especialmente jetson nano), es mejor habilitar swap para asegurar el funcionamiento normal del programa.

- **[Opcional] ¿Desea crear o cambiar el tamaño de la Memoria Swap? (/swapfile)?**<br />
Para obtener mejor rendimiento del nano, active Swap.

- **[Opcional] ¿Usar · externo para almacenar el directorio de datos de Docker? (para imágenes y volúmenes de docker)?**<br />

- **(Recomendado si su partición raíz es menor a 32 GB). [y/n] (predeterminado: n): n**<br />

El programa edge ai requiere un mínimo de 32G de espacio de almacenamiento para ejecutarse, si no, puede elegir montar el volumen de datos de docker en un disco externo.

4. Ahora puede experimentar SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### Agregar Dispositivo

1. Haga clic en el botón "Add Device" en la Página del Espacio de Trabajo de Dispositivos
2. Ingrese un nombre personalizado del dispositivo y obtenga el código de vinculación del dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. Regrese a la aplicación SenseCraft AI del dispositivo. Haga clic en "Bind to SenseCraft AI platform", y luego la aplicación mostrará el código de vinculación y el nombre temporal.

- Código de Vinculación: ingrese el código de vinculación correcto y válido en SenseCraft AI-Model Zoo para finalizar la vinculación del dispositivo.
- Nombre Temporal: si el código de vinculación está duplicado, entonces necesita ingresar el nombre temporal correcto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. ingrese el código de vinculación correcto y válido y haga clic en el botón "Comfirm"

5. Vinculación exitosa, ahora puede administrar el dispositivo

:::note

cada cuenta solo puede agregar 5 dispositivos gratuitos

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### Información del Dispositivo

La información del dispositivo se divide en tres partes, información general, información de flujo de video y modelo de IA.

### Información General

La información del dispositivo se divide en tres partes, información general, información de flujo de video y modelo de IA. Por favor consulte la tabla a continuación para más detalles

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **Campos** | **Contenido** |
| --- | --- |
| **Nombre del Dispositivo** | Nombre personalizado del dispositivo, el usuario puede cambiar el nombre |
| **SN del Dispositivo** | Número de serie de producción único del dispositivo |
| **EUI del Dispositivo** | EUI del dispositivo |
| **Estado en Línea** | En línea: el dispositivo está en línea<br />Fuera de línea: el dispositivo está fuera de línea, el usuario no puede operar el dispositivo fuera de línea |
| **Módulo Equipado** | El módulo del dispositivo |
| **Uso de CPU** | Uso de CPU del dispositivo |
| **Memoria** | Uso de RAM del dispositivo |
| **Almacenamiento** | Uso de disco del dispositivo |
| **Dirección IP** | La dirección IP de red del dispositivo |
| **Dirección MAC** | La dirección MAC del dispositivo |
| **Versión de SenseCraft AI** | Versión de la Aplicación SenseCraft AI instalada en el dispositivo |
| **Tiempo de Recolección** | El tiempo cuando se recopiló la última información del dispositivo |

### Eliminar Dispositivo

Si ha completado el despliegue del Modelo de IA y no necesita administrar el dispositivo remotamente, puede remover el dispositivo de la plataforma y el dispositivo puede hacer inferencia local, administración de flujo y administración de modelo de IA independientemente en el borde.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### Administración de Flujo de Video

El Flujo de Video puede ver los resultados de inferencia en tiempo real remotamente y administrar el flujo de video del dispositivo. Soporta agregar flujo, editar flujo, ver flujo y eliminar flujo.

#### Inferencia en tiempo real

Si se han agregado flujos de video al dispositivo, los usuarios pueden ver resultados de inferencia en tiempo real para todos los flujos en la plataforma. Permite monitoreo en tiempo real de resultados de inferencia y excepciones

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### Agregar Flujo

Haga clic en "Add Stream" e ingrese información de flujo válida, y luego haga clic en el botón "Confirm" para enviar el nuevo flujo al dispositivo. Toma tiempo para que el dispositivo agregue un nuevo flujo, la información de la plataforma se actualizará más tarde. por favor consulte la tabla a continuación para información detallada.

:::note

El dispositivo debe estar en línea para agregar un nuevo flujo

:::

| **Campos** | **Contenido** |
| --- | --- |
| **Nombre del Flujo** | 1 nombre personalizado para este flujo.<br />2 No puede estar vacío |
| **Tipo de Video** | 1 Cámara IP：Acceder a una cámara IP, necesita ingresar una url rtsp válida<br />2 Cámara USB：Conectar la cámara usb al dispositivo, reconocer automáticamente el usb, y luego seleccionar la cámara usb correcta en la ruta de video. |
| **Ruta de Video** | Ruta de Video, formato decidido por "Tipo de Video", si es incorrecto, se usará el video predeterminado. |
| **Modelo de IA del Dispositivo** | 1 Seleccionar un modelo de IA que ya esté descargado en el dispositivo<br />2 Si no hay modelo de IA en su dispositivo, por favor vaya a la página de Modelos de IA para descargar el modelo a su dispositivo. |
| **Umbral de Confianza** | 1 Umbral de confianza del objeto para detección.<br />2 Formato:float [0, 1] |
| **Umbral IoU** | 1 IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras verdaderas2 Formato:float [0, 1] |
| **FPS** | 1 Cuadros por segundo del flujo<br />2 Formato: INT [1,60] |
| **Calidad** | 1 Calidad del flujo de salida. Predeterminado: 50<br />2 Formato: int [0,100] |
| **Detecciones Máximas** | 1 número máximo de detecciones por imagen.Predeterminado:3002 Formato: int [0,1000] |
| **Mostrar Tasa de Cuadros** | 1 Si mostrar la tasa de cuadros del flujo<br />2 Formato:Bool [True,False]<br />● True: mostrar FPS<br />● False: no mostrar FPS |
| **Mostrar Reloj** | 1 Si mostrar la hora<br />2 Formato:Bool [True,False]<br />● True: mostrar hora<br />● False: no mostrar hora |

#### Detalle del stream

Haz clic en el ícono "Ojo" del stream, verás la información detallada del stream

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### Editar Stream

Haz clic en el ícono "Editar" del stream, los usuarios pueden editar todas las configuraciones del stream y hacer clic en el botón "Confirmar" para enviar la información modificada del stream al dispositivo. Toma tiempo para que el dispositivo actualice la configuración de streaming, la información de la plataforma se actualizará más tarde

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### Eliminar Stream

Haz clic en el ícono "Eliminar" del stream para eliminar el stream. Toma tiempo para que el dispositivo elimine el stream, la información de la plataforma se actualizará más tarde

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### Modelo AI del Dispositivo

Gestiona todos los modelos AI que han sido descargados en el dispositivo y soporta agregar modelo, ver el detalle del modelo y eliminar modelo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

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
