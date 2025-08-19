---
description: This tutorial will guide on how to deploy Watcher's AI service locally off the SenseCraft service to use Watcher.
title: Despliegue de las Capacidades de IA de Watcher en Local
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png
slug: /es/watcher_local_deploy
sidebar_position: 3
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Despliega las capacidades de IA de Watcher localmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/87.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Video de Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio en GitHub</font></span></strong>
    </a>
</div><br />

SenseCAP Watcher es un sistema de vigilancia basado en IA que te ayuda a monitorear anomalías en un espacio y tomar acciones. Aunque Watcher puede utilizar servicios de IA en la nube de SenseCraft, también ofrece la opción de desplegar estas capacidades localmente en tus propios dispositivos, brindándote mayor control, privacidad y flexibilidad.

En esta guía completa, te mostraremos cómo configurar y desplegar los servicios de IA de Watcher en tus dispositivos locales. Ya sea que uses una PC con Windows, una Mac o un NVIDIA® Jetson AGX Orin, te proporcionaremos instrucciones paso a paso para que puedas aprovechar el poder de la IA de Watcher en tu propio entorno.

Durante esta guía, cubriremos la preparación de software y hardware, el proceso de despliegue para cada plataforma compatible y cómo utilizar de manera efectiva los servicios de IA locales de Watcher para desbloquear nuevas posibilidades y mejorar tu productividad. Al finalizar, tendrás un conocimiento sólido para usar las capacidades de IA de Watcher en tus propios dispositivos, creando soluciones inteligentes y personalizadas según tus necesidades.

## Preparación de software

Para utilizar las capacidades de despliegue local de Watcher, primero debes descargar el software necesario. El paquete incluye la aplicación Watcher y los componentes del servicio de IA local, que permiten configurar los servicios de IA directamente en tu dispositivo.

Puedes descargar la aplicación Watcher desde los siguientes enlaces:

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

Selecciona el enlace apropiado según tu sistema operativo. La aplicación Watcher es compatible con Windows, macOS y las principales distribuciones de Linux, asegurando una experiencia fluida en múltiples plataformas.

## Preparación de hardware

Para garantizar una experiencia fluida al desplegar las capacidades de IA de Watcher localmente, tu dispositivo debe cumplir con los requisitos mínimos de hardware. Estos varían según el sistema operativo:

<div class="table-center">
  <table align="center">
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Mac</th>
      <th>Linux (arm64)</th>
    </tr>
    <tr>
      <th>Tarjeta Gráfica (configuración recomendada)</th>
      <td align="center">GeForce RTX2070</td>
      <td align="center">Apple M1 16 GB</td>
      <td align="center">GeForce RTX2070</td>
    </tr>
    <tr>
      <th>RAM (configuración mínima)</th>
      <td align="center">8 GB</td>
      <td align="center">16 GB</td>
      <td align="center">8 GB</td>
    </tr>
    <tr>
      <th>Almacenamiento (mínimo)</th>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
    </tr>
  </table>
</div>

> **Nota**: Estos son requisitos mínimos. Si cuentas con especificaciones superiores, el rendimiento de los servicios de IA será significativamente mejor. Para ejecutar múltiples modelos o procesar grandes volúmenes de datos, se recomienda un hardware más avanzado.

### Consideraciones de rendimiento

El desempeño de la IA local de Watcher dependerá del hardware de tu dispositivo. Aquí algunas recomendaciones:

- **RAM**: Más memoria permite ejecutar modelos complejos y trabajar con datasets más grandes.
- **Tarjeta gráfica**: Una GPU dedicada como la RTX2070 acelera el procesamiento, sobre todo en tareas de visión por computadora y aprendizaje profundo.
- **Almacenamiento**: Se requieren al menos 20 GB para modelos, datasets y salidas generadas.

Si buscas procesamiento en tiempo real o tareas exigentes, opta por configuraciones de hardware de gama alta para el mejor rendimiento.

### Comparativa de rendimiento en dispositivos

A continuación, se muestra el tiempo de respuesta tras desplegar los servicios de IA en distintos dispositivos:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Windows 10 32GB con RTX4060</th>
      <th>Windows 10 16GB sin GPU</th>
      <th>Mac Mini M1 (16 GB)</th>
      <th>NVIDIA® Jetson AGX Orin 32GB</th>
    </tr>
    <tr>
      <th>Tiempo de análisis de tarea</th>
      <td align="center">5 s</td>
      <td align="center">17m14s</td>
      <td align="center">36 s</td>
      <td align="center">18 s</td>
    </tr>
    <tr>
      <th>Tiempo de análisis de imagen</th>
      <td align="center">4 s</td>
      <td align="center">4m10s</td>
      <td align="center">8 s</td>
      <td align="center">7 s</td>
    </tr>
  </table>
</div>

### Ventajas del Jetson AGX frente a tarjetas RTX de consumo

1. **Fiabilidad industrial**: Los productos Jetson AGX están diseñados para aplicaciones industriales, con mayor vida útil y operación 24/7 sin fallos, a diferencia de las tarjetas de consumo como la RTX 4090.
2. **Tamaño compacto y bajo consumo**: Ideales para entornos con espacio limitado y aplicaciones en el borde (edge computing). Generan menos calor y requieren menor refrigeración.

Además, Jetson AGX incluye un stack de software optimizado para IA, facilitando el desarrollo y despliegue de aplicaciones inteligentes.

## Despliegue en Windows

Sigue estos pasos para desplegar Watcher en Windows:

**Paso 1**. Ubica el archivo `.exe` descargado y haz doble clic para iniciar la instalación. El asistente te guiará, no es necesario configurar nada adicional.

**Paso 2**. Al finalizar, abre la aplicación Watcher. La primera vez se te pedirá seleccionar los modelos de IA:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/88.png" style={{width:800, height:'auto'}}/></div>

1. **Llama 3.1 + LLaVA**: Watcher descargará modelos (~10 GB). Asegúrate de contar con buena conexión.
2. **OpenAI**: Prepara tu API Key y créditos. Introduce la clave cuando se solicite.

Selecciona la opción que se ajuste a tus recursos. Llama 3.1 + LLaVA es autónoma. OpenAI ofrece más potencia si ya cuentas con clave y créditos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Una vez descargados los modelos, Watcher estará listo para usarse en tu equipo Windows.

## Despliegue en macOS

Para desplegar Watcher en macOS, sigue estos pasos:

**Paso 1**. Ubica el archivo `.dmg` descargado y ábrelo. Aparecerá una nueva ventana con el contenido del paquete.

**Paso 2**. Arrastra el ícono de la aplicación Watcher hacia la carpeta "Applications" dentro de esa ventana. Esto copiará la app en tu sistema. Una vez finalizado el proceso, puedes cerrar la ventana `.dmg`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/89.png" style={{width:600, height:'auto'}}/></div>

**Paso 3**. Al iniciar la aplicación por primera vez, Watcher comenzará automáticamente a descargar los modelos de IA necesarios y los archivos asociados. Estas descargas pueden tardar, ya que ocupan alrededor de **10 GB**. Asegúrate de contar con una conexión a internet rápida y estable para evitar interrupciones o descargas incompletas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/90.png" style={{width:800, height:'auto'}}/></div>

1. **Llama 3.1 + LLaVA**: Si seleccionas esta opción, Watcher descargará automáticamente los modelos y archivos necesarios. La descarga puede tardar debido al tamaño (~**10 GB**). Es importante contar con buena conexión durante este proceso.

2. **OpenAI**: Si prefieres usar los modelos de OpenAI, deberás tener preparada tu clave API. Asegúrate de que sea válida y que tengas créditos disponibles. Cuando se te solicite, introduce tu clave API para configurar Watcher con los servicios de OpenAI.

Elige la opción que mejor se ajuste a tus necesidades y recursos. Si tienes suficiente espacio y una buena conexión, la opción de Llama 3.1 + LLaVA es una solución autónoma. Si prefieres la flexibilidad y potencia de OpenAI y ya cuentas con clave API, selecciona esa opción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Una vez descargados e instalados los modelos, Watcher estará listo para usarse en tu dispositivo macOS.

## Despliegue en NVIDIA® Jetson AGX Orin / Linux

Para desplegar las capacidades de IA de Watcher en un dispositivo **Jetson AGX Orin** o en **Linux**, sigue estos pasos:

**Paso 1**. Abre una ventana de terminal en tu dispositivo Jetson AGX Orin o Linux.

**Paso 2**. Navega al directorio donde se encuentra el archivo `.deb` descargado utilizando el comando `cd`. Ejecuta el siguiente comando para instalar Watcher:

```
sudo dpkg -i watcher_service_x.x.x_arm64.deb
```

Reemplaza `watcher_service_x.x.x_arm64.deb` con el nombre real del archivo `.deb` descargado. Comenzará el proceso de instalación. Es posible que se te pida ingresar tu contraseña del sistema para autorizar. Espera a que finalice la instalación. La terminal mostrará el progreso y cualquier información adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/91.png" style={{width:800, height:'auto'}}/></div>

**Paso 3**. Una vez finalizada la instalación, puedes iniciar Watcher escribiendo `watcher` en la terminal o buscándolo en el lanzador de aplicaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/92.png" style={{width:800, height:'auto'}}/></div>

1. **Llama 3.1 + LLaVA**: Si eliges esta opción, Watcher comenzará automáticamente la descarga de los modelos de IA requeridos (~**10 GB**). Asegúrate de contar con una conexión rápida y estable para evitar interrupciones.

2. **OpenAI**: Si prefieres usar los modelos de OpenAI, prepara tu clave API válida y con créditos disponibles. Cuando se te solicite, ingresa tu clave para configurar el acceso.

Selecciona la opción que mejor se ajuste a tus necesidades. Si tienes espacio y buena conectividad, la opción Llama 3.1 + LLaVA es autónoma. Si prefieres la potencia de OpenAI y tienes la clave, usa esa opción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Al igual que en Windows y macOS, Watcher iniciará automáticamente la descarga de los modelos y archivos necesarios.

## Configurar el uso de IA local en la aplicación SenseCraft

Para usar los servicios de IA local proporcionados por Watcher dentro de la aplicación SenseCraft, sigue estos pasos:

**Paso 1**. Abre la aplicación Watcher en tu dispositivo y haz clic en el botón **CLICK TO START SERVICE** (Hacer clic para iniciar el servicio) en la parte media izquierda. Espera a que el botón cambie a **SERVICE IS STARTED** (Servicio iniciado).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/94.png" style={{width:800, height:'auto'}}/></div>

**Paso 2**. En la aplicación SenseCraft, ve a la interfaz de Watcher y toca el botón de ajustes en la esquina superior derecha. Selecciona **Device AI Service** desde el menú.

**Paso 3**. Copia la URL y el Token desde la pantalla principal de la aplicación Watcher.

**Paso 4**. Pega la URL y el Token en los campos correspondientes dentro de los ajustes de **Device AI Service** en la app SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/93.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 5**. Ahora puedes asignar tareas a Watcher desde la app SenseCraft, y este las procesará usando sus capacidades de IA desplegadas localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/95.png" style={{width:800, height:'auto'}}/></div>

:::caution
Ten en cuenta que es importante que tu computadora cumpla con las configuraciones recomendadas en la sección de **[Preparación de Hardware](#preparación-de-hardware)**. Si tu equipo no cumple con los requisitos, puede que no recibas los resultados de reconocimiento o alertas a tiempo, ya que podría estar ocupado analizando una imagen. En ese caso, Watcher parecerá estar en un estado constante de observación.
:::

Al completar estos pasos, podrás aprovechar al máximo las capacidades de IA de Watcher directamente en tu dispositivo, garantizando mayor privacidad y control. Esto te permitirá realizar tareas avanzadas, análisis y automatización de manera segura y eficiente, manteniendo siempre tus datos bajo tu control.

> Seguiremos publicando más tutoriales sobre el uso del **[bloque de mensajes HTTP](https://wiki.seeedstudio.com/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)** para notificaciones tras el despliegue local, en el directorio de la aplicación. ¡Mantente al tanto!

## Preguntas Frecuentes (FAQ)

### El servicio de SenseCAP Watcher no funciona

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq1.png" style={{width:800, height:'auto'}}/></div>

La IP del Host del Servicio debe ser la dirección IP de tu computadora. Si no lo es, el servicio no funcionará correctamente. Corrígelo siguiendo estos pasos:

1. Presiona `Win + R`, escribe `ncpa.cpl` y presiona Enter.  
2. Haz clic derecho en tu conexión (Wi-Fi o Ethernet) y selecciona **Propiedades**.  
3. Haz doble clic en **Protocolo de Internet versión 4 (TCP/IPv4)** o IPv6 y luego haz clic en **Avanzado**.  
4. Desmarca **Métrica automática**, ingresa `1` (o el valor deseado) y haz clic en **Aceptar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq2.png" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y garantizar que tu experiencia sea lo más fluida posible. Contamos con múltiples canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


