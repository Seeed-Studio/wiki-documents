---
description: Comenzando con reCamera
title: Guía de Inicio Rápido
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899
sidebar_position: 1
last_update:
  date: 02/15/2025
  author: Evelyn Chen
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recamera_getting_started/
---

# Guía de Inicio Rápido de reCamera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

¡Bienvenido a reCamera! Esta guía te ayudará a configurar rápidamente tu dispositivo y comenzar a usarlo para desbloquear potentes características de IA-Visión. Ya seas principiante o usuario experimentado, este tutorial paso a paso te guiará a través de la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱</font></span></strong>
    </a>
</div>

# Serie de Productos

Hay 4 versiones de reCamera:

<table border="1">
    <tr>
        <th> </th>
        <th>reCamera 2002 8GB</th>
        <th>reCamera 2002 64GB</th>
        <th>reCamera 2002w 8GB</th>
        <th>reCamera 2002w 64GB</th>
    </tr>
    <tr>
        <td>Placa Principal</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>Placa del Sensor</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>Placa Base</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>Inalámbrico(Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Método de Montaje</td>
        <td>Magnético/Soporte de Cámara</td>
        <td>Magnético/Soporte de Cámara</td>
        <td>Magnético/Soporte de Cámara</td>
        <td>Magnético/Soporte de Cámara</td>
    </tr>
    <tr>
        <td>Fuente de Alimentación</td>
        <td>Cable Type - C</td>
        <td>Cable Type - C</td>
        <td>Cable Type - C</td>
        <td>Cable Type - C</td>
    </tr>
</table>

## Desempaque y Encendido

Comience desempacando su reCamera. Dentro de la caja, debería encontrar:

- reCamera
- Cable Tipo-C
- Cable Ethernet

Asegúrese de que todas las partes estén incluidas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Simplemente encienda el dispositivo con el cable tipo-C proporcionado. Cuando vea que la luz verde está encendida, eso significa que la reCamera está lista para conectarse al mundo.

## Conexión de Red

Hay tres métodos para conectar la reCamera a su red:

### Método 1: Cable USB

**Configuración de Red Cableada vía Cable USB**

Conecte el cable USB de la reCamera a su PC, luego puede visitar ```192.168.42.1``` para ver la página de carga de la reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Si tiene una reCamera con función inalámbrica, recomendamos configurar la conexión Wi-Fi. Solo la versión 2002w tendrá la interfaz de usuario de Selección Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

Si encuentra algún problema, por favor consulte la [solución de problemas de red](https://wiki.seeedstudio.com/es/recamera_network_connection/).

### Método 2: Ethernet

**Configuración de Red por Puerto Ethernet**

Si desea usar el puerto ethernet, puede usar el cable de la caja para conectar a su router. Tenga en cuenta que esto **no es POE (Power over Ethernet)**. Aún necesita el tipo-c para encender el dispositivo. Puede **desenroscar la parte trasera** de la cámara y conectar a través del puerto.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Una vez conectado, puede encontrar la IP de la reCamera en el backend de su router, luego visitar el sitio web y la plataforma Node-RED.

### Método 3: Modo AP (solo disponible con versiones 2002w)

**Configuración de Red Inalámbrica en modo AP**

Al encender, la reCamera activará el Punto de Acceso (AP) para que pueda cambiar las preferencias de red. Abra la lista Wi-Fi de su teléfono o laptop, debería poder ver un nombre Wi-Fi llamado `reCamera_******`.
El sistema de nomenclatura es ``"recamera_" + los últimos seis dígitos de la dirección mac`` en este dispositivo.
La contraseña predeterminada es `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Conéctese a este AP, y un sitio web debería aparecer automáticamente. Si no, siempre puede escribir **192.168.16.1** en su navegador para visitar la página. Luego puede seleccionar a qué wifi desea que se conecte la reCamera.
Si tiene más de una reCamera, puede consultar la [Gestión de Dispositivos](https://wiki.seeedstudio.com/es/recamera_getting_started/#multi-devices-management) para averiguar cuál es cuál.

## Acceso Web Básico

Una vez que haya conectado la reCamera a su red, puede visitar la interfaz web de la reCamera accediendo a la dirección IP en el navegador.

- IP de conexión USB: 192.168.42.1
- IP de conexión Wi-Fi o Ethernet: Use `ifconfig` para averiguar o consulte con la gestión de red de su router.

URLs web:

- **Página de Inicio**: `ip_address/#/init`
- **Espacio de Trabajo**: `ip_address/#/workspace` (para versión de OS 0.1.4 y superior)
- **Configuración de Red**: `ip_address/#/network`
- **Seguridad**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energía**: `ip_address/#/power`
- **Node-RED Original**: ```ip_address:1880```

**Por favor verifique la versión del OS de su dispositivo**. Hay una actualización importante entre la versión 0.1.3 y 0.1.4. Para una experiencia de usuario más fluida, recomendamos actualizar a 0.1.5 y superior. Por favor vaya a ```Barra Lateral -> Sistema -> Actualización de Software``` para verificar la versión del software, y aplicar e instalar la última versión del OS. Las instrucciones de actualización consulte la [guía de actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

### Actualización OTA de 0.1.3 a la última versión

Si obtuvo el primer lote de reCamera, puede actualizar el OS a la última versión siguiendo esta instrucción.

**Paso 1**: Abra el sitio web y navegue a ```Barra Lateral -> Sistema -> Actualización de Software```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Paso 2**: Verifique su versión de OS, y haga clic en **Verificar** y **Aplicar**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Paso 3**: Espere unos minutos para actualizar el sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Paso 4**: Reinicie el dispositivo y actualice el sitio web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Paso 5**: Entrará a la página de carga para cambiar la contraseña. Ahora puede experimentar la versión más nueva de reCamera con el panel de Node-RED siguiendo [esta instrucción de descarga](https://wiki.seeedstudio.com/es/recamera_getting_started/#access-recamera-preview-dashboard).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Acceder al panel de vista previa de reCamera

Al integrar el dispositivo con Node-RED, proporcionamos un ejemplo de interfaz de usuario de panel integrado donde puede previsualizar la transmisión de video, cambiar los modelos deseados. Puede modificar libremente e integrar con su propia aplicación.

Si su versión de OS es 0.1.5 o superior, el panel de vista previa se mostrará una vez que inicie sesión.

Si actualiza el OS por sí mismo, puede descargar el jsonflow del panel desde Sensecraft AI

**Paso 1**. Después de que termine la actualización, acceda a la web ya sea por `192.168.42.1` o IP de red, luego haga clic en ```Descargar flujo del panel```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Paso 2**. Navega a la plataforma Sensecraft AI, selecciona el primer Dashboard Demo oficial y haz clic en ```Clone```. Es necesario iniciar sesión en este sitio web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Paso 3**. Selecciona el método de conexión para tu dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Paso 4**. Entonces se mostrará el espacio de trabajo de Node-RED con el flujo pre-construido.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Paso 5**. Haz clic en ```Deploy``` y verifica que el flujo ya esté iniciado, luego haz clic en ```dashboard```, ese panel se mostrará.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Asegúrate de verificar si el flujo está iniciado o no. A veces importar un flujo no iniciará automáticamente el flujo, por lo tanto el panel estará vacío. Por favor haz clic en `Start` en el menú desplegable.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

¡Éxito!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Paso 6**. Puedes ajustar el umbral de ```IoU``` y ```Confidence``` para obtener un resultado más preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Comprensión rápida del flujo

En este flujo de ejemplo construimos una demostración de conteo de números de objetos deseados como Persona, Gato, Perro y Botella con una lista desplegable de **Selección de Conteo**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

Al cambiar los `nodos de función` en el flujo, puedes agregar más objetos para ser contados, o cambiar completamente esta función a algunas otras aplicaciones de visión por computadora.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

Puedes ver qué tipo de objetos pueden ser detectados viendo el `nodo del modelo`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Siéntete libre de modificar y jugar con el flujo de cualquier manera que quieras. Solo ten cuidado de **no** poner demasiados `nodos de depuración` o `nodos de vista previa` después de los nodos del modelo, ya que imprimir múltiples resultados del modelo de IA consumirá CPU y causará que el dispositivo se bloquee.

### Modelo de Visión por Computadora

Para estos flujos de trabajo proporcionados, el `modelo de detección YOLO11n` está seleccionado por defecto, que es el modelo de visión por computadora más reciente para detección de objetos en tiempo real. También puedes reemplazarlo con otros modelos en el nodo. Si quieres ver qué otros modelos están disponibles, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/recamera_on_device_models/).

**Intersección sobre Unión (IoU)**: IoU es una métrica utilizada para evaluar la superposición entre la caja delimitadora predicha y la caja delimitadora de verdad fundamental. Se calcula como la relación del área de intersección de las dos cajas al área de unión de las dos cajas. El valor de IoU típicamente está en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100, un valor de IoU de 0 representa ninguna superposición entre la caja predicha y la caja de verdad fundamental. Un valor de 100 indica una coincidencia perfecta, lo que significa que las dos cajas se superponen completamente.

**Confianza**: La confianza en el modelo YOLO representa la probabilidad de que una caja delimitadora predicha contenga un objeto y qué tan precisa es la predicción. Es un valor entre 0 y 100.0

## Personaliza tu panel de control y compártelo con la Comunidad

Animamos a los usuarios a compartir los paneles de control que desarrollan y crean en la comunidad. Hemos creado una carpeta en [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). Esperamos que todos compartan sus paneles de control allí mediante **pull request**, y nosotros los organizaremos y mostraremos.
Aquí tomaremos como ejemplo agregar una función de luz de relleno al panel de control para simplemente añadir un nodo y controlar reCamera.

**Paso 1**. Arrastra el nodo ```button group``` al espacio de trabajo y edítalo con la siguiente configuración.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Paso 2**. Añade un nuevo nodo de configuración ui-group llamado "Control Button", luego guárdalo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Paso 3**. Ve al panel de control 2.0 y coloca el marco del botón de control debajo de la selección de modelo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Paso 4**. Despliega el flujo y ve al panel de control.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demo**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Paso 5**: No olvides exportar el archivo json del flujo y compartirlo en nuestro github.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Lista de Puertos

La siguiente lista muestra los puertos utilizados por reCamera:

- **Puerto 22**: Utilizado para inicio de sesión SSH remoto y está abierto.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto por defecto.
- **Puerto 80**: Sirve como interfaz del panel de control web para la visualización HTTP de la aplicación Node-RED.
- **Puerto 554**: Empleado para transmisión de video RTSP.
- **Puerto 9090**: Destinado para acceso a terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a las operaciones de Node-RED.

## Restablecimiento de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

Si deseas restablecer el dispositivo, como por ejemplo si olvidas el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la alimentación. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadeando, suelta el botón User.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
Esto eliminará la información del usuario, incluyendo las aplicaciones que hayas desarrollado, o cualquier imagen y video de almacenamiento local. Por favor, opera con precaución.
:::

Si deseas restaurar el firmware de tu dispositivo a una versión específica, por favor visita [control de versión del sistema operativo](https://wiki.seeedstudio.com/es/recamera_os_version_control)

## Gestión de Múltiples Dispositivos

Si tienes más de una reCamera, puedes distinguirlas por la **dirección mac** o **número S/N** en la parte posterior del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

O, una vez que conectes el dispositivo a tu laptop a través de USB o AP, puedes ver la dirección mac usando el siguiente comando

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Orientación de la Cámara

La orientación predeterminada de la vista de la cámara es como la imagen de abajo donde el tipo-c está **mirando hacia abajo**. Ten en cuenta que otras orientaciones podrían afectar la precisión del modelo basándose en cómo entrenaste el modelo de detección.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Recursos

- [Folleto de reCamera](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [Serie reCamera](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
