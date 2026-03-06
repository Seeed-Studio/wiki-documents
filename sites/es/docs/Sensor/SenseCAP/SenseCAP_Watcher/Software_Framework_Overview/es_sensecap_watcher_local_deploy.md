---
description: Este tutorial te guiará sobre cómo desplegar el servicio de IA de Watcher localmente fuera del servicio SenseCraft para usar Watcher.
title: Desplegar las capacidades de IA de Watcher localmente
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png
slug: /watcher_local_deploy
sidebar_position: 3
last_update:
  date: 9/11/2025
  author: Twelve
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/watcher_local_deploy/
---

# Desplegar las capacidades de IA de Watcher localmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/87.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video de Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio Github</font></span></strong>
    </a>
</div><br />

SenseCAP Watcher es un observador de IA para ayudarte a monitorear anomalías dentro de un espacio y luego tomar acciones. Mientras que Watcher puede utilizar los servicios de IA de SenseCraft, también proporciona la opción de desplegar capacidades de IA localmente en tus propios dispositivos, dándote mayor control, privacidad y flexibilidad.

En esta guía completa, te guiaremos a través del proceso de configuración y despliegue de los servicios de IA de Watcher en tus dispositivos locales. Ya sea que estés usando una PC con Windows, una máquina macOS, o un NVIDIA® Jetson AGX Orin, proporcionaremos instrucciones paso a paso para ayudarte a aprovechar el poder de las capacidades de IA de Watcher en tu propio entorno.

A lo largo de esta guía, cubriremos las preparaciones necesarias de software y hardware, el proceso de despliegue para cada plataforma soportada, y cómo utilizar efectivamente los servicios de IA locales de Watcher para desbloquear nuevas posibilidades y mejorar tu productividad. Al final de esta guía, tendrás una comprensión sólida de cómo aprovechar las capacidades de IA de Watcher en tus propios dispositivos, empoderándote para crear soluciones inteligentes y personalizadas adaptadas a tus necesidades.

## Preparación de Software

Para utilizar las capacidades de despliegue local de Watcher, los usuarios primero necesitan descargar el software necesario. El paquete de software incluye la aplicación Watcher y los componentes del Servicio de IA del Dispositivo, que permiten a los usuarios configurar y establecer sus servicios de IA locales.

Los usuarios pueden descargar la APP de Watcher a través de los siguientes enlaces de descarga:

- Para **Windows**:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.exe" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Para Windows 🖱️</font></span></strong>
    </a>
</div>

- Para **macOS**:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.dmg" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Para macOS 🖱️</font></span></strong>
    </a>
</div>

- Para **Linux**:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_arm64_latest.deb" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Para Linux 🖱️</font></span></strong>
    </a>
</div><br />

Por favor, elige el enlace de descarga apropiado basado en tu sistema operativo. La APP de Watcher es compatible con Windows, macOS, y las principales distribuciones de Linux, asegurando una experiencia fluida a través de diferentes plataformas.

## Preparación de Hardware

Para asegurar una experiencia fluida y óptima al desplegar las capacidades de IA de Watcher localmente, tu dispositivo debe cumplir con los requisitos mínimos de hardware. Estos requisitos varían dependiendo de tu sistema operativo. A continuación se muestran los requisitos de hardware para cada plataforma soportada:

<div class="table-center">
  <table align="center">
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Mac</th>
      <th>Linux (arm64)</th>
    </tr>
    <tr>
      <th>Tarjeta Gráfica (Configuración Recomendada)</th>
      <td align="center">GeForece RTX2070</td>
      <td align="center">Apple M1 16 GB</td>
      <td align="center">GeForece RTX2070</td>
    </tr>
    <tr>
      <th>RAM (Configuración Mínima)</th>
      <td align="center">8 GB</td>
      <td align="center">16 GB</td>
      <td align="center">8 GB</td>
    </tr>
    <tr>
      <th>Almacenamiento (Configuración Mínima)</th>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
    </tr>
  </table>
</div>

Es importante tener en cuenta que estos son los requisitos mínimos, y tener especificaciones más altas puede mejorar significativamente el rendimiento y la capacidad de respuesta de los servicios de IA de Watcher. Si planeas desplegar múltiples servicios de IA simultáneamente o procesar grandes cantidades de datos, recomendamos usar dispositivos con configuraciones de hardware más avanzadas.

### Consideraciones de Rendimiento

El rendimiento de los servicios de IA desplegados localmente de Watcher puede variar basado en las especificaciones de hardware de tu dispositivo. Aquí hay algunas pautas generales de rendimiento:

- **RAM**: Mayores cantidades de RAM permiten multitarea más fluida y pueden manejar modelos de IA más complejos y conjuntos de datos más grandes.
- **Tarjeta Gráfica**: Una tarjeta gráfica dedicada como la RTX2070 puede acelerar enormemente los cálculos de IA, especialmente para tareas que involucran visión por computadora y aprendizaje profundo.
- **Almacenamiento**: El espacio de almacenamiento suficiente es esencial para almacenar modelos de IA, conjuntos de datos y salidas generadas. Los 20 GB de almacenamiento recomendados aseguran espacio amplio para los servicios de IA de Watcher.

Al desplegar los servicios de IA de Watcher localmente, es crucial considerar tu caso de uso específico y la complejidad de los modelos de IA que pretendes usar. Si requieres procesamiento en tiempo real o planeas manejar tareas intensivas en recursos, se recomienda optar por configuraciones de hardware de gama alta para asegurar un rendimiento óptimo.

Al cumplir con los requisitos de hardware y considerar los factores de rendimiento mencionados anteriormente, puedes asegurar un despliegue fluido y eficiente de las capacidades de IA de Watcher en tu dispositivo local.

### Benchmark de Dispositivos

Aquí está nuestra línea de tiempo de respuesta después de desplegar servicios de IA en algunos de nuestros dispositivos.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Windows 10 32GB con Tarjeta Gráfica GeForce RTX4060</th>
      <th>Windows 10 16GB sin Tarjeta Gráfica</th>
      <th>Mac Mini M1 (16 GB)</th>
      <th>NVIDIA® Jetson AGX Orin 32GB</th>
    </tr>
    <tr>
      <th>Tiempo de Análisis de Tarea</th>
      <td align="center">5s</td>
      <td align="center">17m14s</td>
      <td align="center">36s</td>
      <td align="center">18s</td>
    </tr>
    <tr>
      <th>Tiempo de Análisis de Imagen</th>
      <td align="center">4s</td>
      <td align="center">4m10s</td>
      <td align="center">8s</td>
      <td align="center">7s</td>
    </tr>
  </table>
</div>

Al comparar los productos de la serie NVIDIA Jetson AGX con tarjetas gráficas de grado de consumidor como la RTX 4090 para tareas relacionadas con IA, la serie Jetson AGX ofrece varias ventajas clave:

1. Confiabilidad de grado industrial: Los productos de la serie Jetson AGX están diseñados para aplicaciones industriales y comerciales, lo que significa que tienen un Tiempo Medio Entre Fallas (MTBF) más largo. Están construidos para operar continuamente, 24/7, sin encontrar problemas. En contraste, las tarjetas gráficas de grado de consumidor como la RTX 4090 no están diseñadas para tal operación demandante las 24 horas del día y pueden no ofrecer el mismo nivel de confiabilidad.

2. Tamaño compacto y bajo consumo de energía: Los productos de la serie Jetson AGX están diseñados con aplicaciones de computación embebida y de borde en mente. Tienen un factor de forma más pequeño y consumen menos energía comparado con tarjetas gráficas de consumidor de gama alta. Esto los hace más adecuados para despliegue en entornos con restricciones de espacio y reduce los costos operativos generales. El menor consumo de energía también significa menos generación de calor, lo cual es crucial para sistemas embebidos y ayuda a minimizar los requisitos de refrigeración.

Además de estas ventajas, la serie Jetson AGX ofrece una pila de software completa optimizada para cargas de trabajo de IA, haciendo más fácil para los desarrolladores crear y desplegar aplicaciones de IA eficientemente. La combinación de confiabilidad de grado industrial, tamaño compacto, bajo consumo de energía y pila de software optimizada hace que la serie Jetson AGX sea una opción atractiva para proyectos y aplicaciones relacionadas con IA, especialmente cuando se compara con tarjetas gráficas de grado de consumidor como la RTX 4090.

## Despliegue en Windows

Para desplegar las capacidades de IA de Watcher en un dispositivo Windows, sigue estos simples pasos.

**Paso 1**. Localiza el archivo `.exe` descargado en la carpeta de descargas de tu computadora o en la ubicación especificada. Haz doble clic en el archivo `.exe` para iniciar el proceso de instalación. El asistente de instalación te guiará a través del proceso de configuración. No necesitas hacer selecciones o configuraciones adicionales durante la instalación.

**Paso 2**. Cuando la instalación esté terminada, inicia la aplicación Watcher. Al iniciar la aplicación por primera vez, se te pedirá que elijas los modelos de IA que deseas usar. Watcher proporciona dos opciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/88.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: Si seleccionas esta opción, haz clic en el botón Aplicar a continuación para comenzar a descargar los modelos de IA requeridos y archivos asociados. Estas descargas adicionales pueden tomar algún tiempo, ya que pueden ser alrededor de **10 GB** en tamaño. Asegúrate de tener una conexión a internet estable y rápida durante el proceso de descarga del modelo para evitar cualquier interrupción o descarga incompleta.
2. OpenAI: Si prefieres usar los modelos de OpenAI, necesitas preparar tu clave API de OpenAI con anticipación. Asegúrate de tener una clave API válida y créditos suficientes para usar los modelos de OpenAI. Cuando se te solicite, ingresa tu clave API para configurar Watcher para usar los servicios de OpenAI.

Elige la opción que mejor se adapte a tus necesidades y recursos. Si tienes amplio espacio de almacenamiento y una conexión a internet confiable, la opción Llama 3.1 + LLaVA proporciona una solución autónoma. Si prefieres la flexibilidad y potencia de los modelos de OpenAI y tienes una clave API lista, selecciona la opción OpenAI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Una vez que los archivos del modelo se descarguen e instalen, Watcher estará listo para usar en tu dispositivo Windows.

## Implementación en MacOS

Para implementar las capacidades de IA de Watcher en un dispositivo macOS, sigue estos pasos.

**Paso 1**. Localiza el archivo `.dmg` descargado en la carpeta de descargas de tu computadora o en la ubicación especificada. Haz doble clic en el archivo `.dmg` para abrirlo. Aparecerá una nueva ventana mostrando el contenido del paquete de instalación.

**Paso 2**. En la nueva ventana, verás el ícono de la aplicación Watcher y un alias para la carpeta Aplicaciones. Haz clic y arrastra el ícono de la aplicación Watcher sobre el alias de la carpeta Aplicaciones dentro de la ventana. Esta acción copiará la aplicación Watcher a la carpeta Aplicaciones de tu computadora.
Una vez que el proceso de copia esté completo, puedes cerrar la ventana `.dmg`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/89.png" style={{width:600, height:'auto'}}/></div>

**Paso 3**. Al iniciar la aplicación por primera vez, Watcher comenzará automáticamente a descargar los modelos de IA requeridos y archivos asociados. Estas descargas adicionales pueden tomar algún tiempo, ya que pueden ser de alrededor de 10 GB de tamaño. Asegúrate de tener una conexión a internet estable y rápida durante el proceso de descarga del modelo para evitar interrupciones o descargas incompletas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/90.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: Si seleccionas esta opción, haz clic en el botón Aplicar a continuación para comenzar a descargar los modelos de IA requeridos y archivos asociados. Estas descargas adicionales pueden tomar algún tiempo, ya que pueden ser de alrededor de **10 GB** de tamaño. Asegúrate de tener una conexión a internet estable y rápida durante el proceso de descarga del modelo para evitar interrupciones o descargas incompletas.

2. OpenAI: Si prefieres usar los modelos de OpenAI, necesitas preparar tu clave API de OpenAI con anticipación. Asegúrate de tener una clave API válida y créditos suficientes para usar los modelos de OpenAI. Cuando se te solicite, ingresa tu clave API para configurar Watcher para usar los servicios de OpenAI.

Elige la opción que mejor se adapte a tus necesidades y recursos. Si tienes amplio espacio de almacenamiento y una conexión a internet confiable, la opción Llama 3.1 + LLaVA proporciona una solución autónoma. Si prefieres la flexibilidad y potencia de los modelos de OpenAI y tienes una clave API lista, selecciona la opción OpenAI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Una vez que los archivos del modelo se descarguen e instalen, Watcher estará listo para usar en tu dispositivo macOS.

## Implementación en NVIDIA® Jetson AGX Orin / Linux

Para implementar las capacidades de IA de Watcher en un NVIDIA® Jetson AGX Orin o un dispositivo Linux, sigue estos pasos.

**Paso 1**. Abre una ventana de terminal en tu Jetson AGX Orin o dispositivo Linux.

**Paso 2**. Navega al directorio donde se encuentra el archivo `.deb` descargado usando el comando `cd`. Ejecuta el siguiente comando para instalar Watcher.

```
sudo dpkg -i watcher_service_x.x.x_arm64.deb
```

Reemplaza `watcher_service_x.x.x_arm64.deb` con el nombre real del archivo `.deb` descargado. El proceso de instalación comenzará. Es posible que se te solicite ingresar tu contraseña del sistema para autorizar la instalación. Espera a que la instalación se complete. El terminal mostrará el progreso y cualquier información adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/91.png" style={{width:800, height:'auto'}}/></div>

**Paso 3**. Una vez que la instalación esté terminada, puedes iniciar Watcher escribiendo watcher en el terminal o encontrándolo en tu lanzador de aplicaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/92.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: Si seleccionas esta opción, haz clic en el botón Aplicar a continuación para comenzar a descargar los modelos de IA requeridos y archivos asociados. Estas descargas adicionales pueden tomar algún tiempo, ya que pueden ser de alrededor de **10 GB** de tamaño. Asegúrate de tener una conexión a internet estable y rápida durante el proceso de descarga del modelo para evitar interrupciones o descargas incompletas.

2. OpenAI: Si prefieres usar los modelos de OpenAI, necesitas preparar tu clave API de OpenAI con anticipación. Asegúrate de tener una clave API válida y créditos suficientes para usar los modelos de OpenAI. Cuando se te solicite, ingresa tu clave API para configurar Watcher para usar los servicios de OpenAI.

Elige la opción que mejor se adapte a tus necesidades y recursos. Si tienes amplio espacio de almacenamiento y una conexión a internet confiable, la opción Llama 3.1 + LLaVA proporciona una solución autónoma. Si prefieres la flexibilidad y potencia de los modelos de OpenAI y tienes una clave API lista, selecciona la opción OpenAI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Similar a las instalaciones de Windows y macOS, Watcher comenzará automáticamente a descargar los modelos de IA requeridos y asociados.

## Configurar el uso de servicios de IA locales en la APP SenseCraft

Para usar los servicios de IA locales proporcionados por Watcher en la APP SenseCraft, sigue estos pasos concisos:

**Paso 1**. Abre la APP Watcher en tu dispositivo y haz clic en el botón **Iniciar Servicio** en la sección inferior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/94.png" style={{width:800, height:'auto'}}/></div>

**Paso 2**. En la APP SenseCraft, navega a la interfaz de Watcher y toca el botón de configuración en la esquina superior derecha. Selecciona **Servicio de IA del Dispositivo** del menú de configuración.

**Paso 3**. Copia la URL y el Token de la pantalla principal de la APP Watcher.

**Paso 4**. Pega la URL y el Token en sus respectivos campos en la configuración del **Servicio de IA del Dispositivo** dentro de la APP SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/93.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 5**. Ahora puedes asignar tareas a Watcher a través de la APP SenseCraft, y Watcher las procesará usando sus capacidades de IA implementadas localmente.

:::caution
Ten en cuenta que es importante asegurarse de que tu computadora cumpla con las configuraciones de computadora recomendadas en **[Preparación de Hardware](#preparación-de-hardware)**. Si está por debajo de la configuración recomendada, entonces es posible que no recibas los resultados de reconocimiento y mensajes de alarma a tiempo, ya que tu computadora puede estar trabajando a plena capacidad analizando una de tus imágenes, momento en el cual Watcher parecerá estar en un estado constante de observación.
:::

Al completar estos pasos, puedes aprovechar el poder de los servicios de IA de Watcher directamente en tu dispositivo, asegurando privacidad mejorada y la capacidad de personalizar convenientemente tu propio sistema integrado. Con las capacidades de IA de Watcher ejecutándose localmente, puedes realizar tareas avanzadas, análisis y automatización de manera segura y eficiente, todo mientras mantienes tus datos bajo tu control.

Continuaremos agregando tutoriales sobre el uso del **[Bloque de Mensaje HTTP](https://wiki.seeedstudio.com/es/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)** para el envío de mensajes después de la implementación localizada en el directorio de Aplicaciones, ¡así que mantente atento!

## FAQ

### El Servicio SenseCap Watcher no funciona

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq1.png" style={{width:800, height:'auto'}}/></div>

La IP del Host del Servicio debe ser la dirección IP de tu computadora, si no es así, el Servicio SenseCAP Watcher no funcionará. Necesitas solucionarlo siguiendo estos pasos.

1. Presiona Win + R > escribe "ncpa.cpl" > Enter.

2. Haz clic derecho en "Wi-Fi" o Ethernet > selecciona "Propiedades".

3. Haz doble clic en IPv4 o IPv6 > Haz clic en "Avanzado".

4. Desmarca Métrica Automática > Ingresa 1 (o tu número deseado) > Haz clic en OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq2.png" style={{width:800, height:'auto'}}/></div>

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
