---
description: Primeros pasos con reCamera
title: Guía de inicio rápido
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899
sidebar_position: 1
last_update:
  date: 04/10/2026
  author: Evelyn Chen & Samuel
createdAt: '2024-11-11'
updatedAt: '2026-04-14'
url: https://wiki.seeedstudio.com/es/recamera_getting_started/
---

# Guía de inicio rápido de reCamera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

¡Bienvenido a reCamera! Esta guía te ayudará a configurar rápidamente tu dispositivo y comenzar a usarlo para desbloquear potentes funciones de visión por IA. Ya seas principiante o un usuario experimentado, este recorrido paso a paso te guiará a través de la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱</font></span></strong>
    </a>
</div>

# Serie de productos

Existen 4 versiones de reCamera:

<table border="1">
    <tr>
        <th> </th>
        <th>reCamera 2002 8GB</th>
        <th>reCamera 2002 64GB</th>
        <th>reCamera 2002w 8GB</th>
        <th>reCamera 2002w 64GB</th>
    </tr>
    <tr>
        <td>Placa base</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>Placa del sensor</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>Placa base</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>Inalámbrico (Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Método de montaje</td>
        <td>Montaje magnético/por soporte de cámara</td>
        <td>Montaje magnético/por soporte de cámara</td>
        <td>Montaje magnético/por soporte de cámara</td>
        <td>Montaje magnético/por soporte de cámara</td>
    </tr>
    <tr>
        <td>Fuente de alimentación</td>
        <td>Cable Tipo - C</td>
        <td>Cable Tipo - C</td>
        <td>Cable Tipo - C</td>
        <td>Cable Tipo - C</td>
    </tr>
</table>

## Desembalaje y encendido

Comienza desempaquetando tu reCamera. Dentro de la caja, deberías encontrar:

- reCamera
- Cable Tipo-C
- Cable Ethernet

Asegúrate de que todas las partes estén incluidas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Simplemente enciende el dispositivo con el cable tipo-C proporcionado. Cuando veas que la luz verde está encendida, significa que el reCamera está listo para conectarse al mundo.

## Conexión de red

Existen tres métodos para conectar el reCamera a tu red:

### Método 1: Cable USB

**Configuración de red cableada mediante cable USB**

Conecta el cable USB desde el reCamera a tu PC, luego puedes visitar ```192.168.42.1``` para ver la página de carga del reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Si tienes un reCamera con función inalámbrica, recomendamos configurar la conexión Wi-Fi. Solo la versión 2002w tendrá la interfaz de usuario de selección de Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**Notas para la configuración de red WiFi:**

1. **Asegurar la misma red**: Por favor, asegúrate de que el reCamera y tu computadora estén conectados a la **misma red WiFi**. Esto garantiza que el desarrollo y la depuración posteriores puedan proceder con normalidad.

2. **Desactivar VPN en la computadora**: Si tienes una VPN habilitada en tu computadora, por favor **apágala** antes de configurar el WiFi. Las VPN pueden causar problemas de conexión de red y evitar que accedas al reCamera normalmente.

3. **Cómo cambiar la conexión WiFi**:
   - En la página de configuración del reCamera (192.168.42.1), encuentra la opción **Configuración de Red**
   - Haz clic en el **botón HABILITAR WI-FI**
   - Selecciona la red WiFi (SSID) a la que deseas conectarte de la lista
   - Ingresa la contraseña del WiFi
   - Haz clic en el botón **Confirmar**

4. Después de conectarte exitosamente al Wi-Fi, haz clic en el botón “Settings” para ingresar a la página de configuración. Puedes ver la dirección IP del Wi-Fi al lado de “Wi-Fi IP”.

Si encuentras algún problema, por favor consulta la [solución de problemas de red](https://wiki.seeedstudio.com/es/recamera_network_connection/).

### Método 2: Ethernet

**Configuración de red por puerto Ethernet**

Si deseas usar el puerto ethernet, puedes usar el cable de la caja para conectarlo a tu router. Nota, esto **NO es POE (Power over Ethernet)**. Aún necesitas el cable tipo-c para encender el dispositivo. Puedes **desatornillar la parte trasera** de la cámara y conectar a través del puerto.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Una vez conectado, puedes encontrar la IP del reCamera en el backend de tu router, luego visitar el sitio web y la plataforma Node-RED.

### Método 3: Modo AP (solo disponible en versiones 2002w)

**Configuración de red inalámbrica en modo AP**

Al encenderse, el reCamera activará el Punto de Acceso (AP) para que cambies las preferencias de red. Abre la lista de Wi-Fi de tu teléfono o portátil, deberías poder ver un nombre de Wi-Fi llamado `reCamera_******`.
El sistema de nomenclatura es ``"recamera_" + los últimos seis dígitos de la dirección mac`` de este dispositivo.
La contraseña predeterminada es `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Conéctate a este AP, y debería aparecer automáticamente un sitio web para ti. Si no, siempre puedes escribir **192.168.16.1** en tu navegador para visitar la página. Luego puedes seleccionar a qué wifi deseas que se conecte el reCamera.
Si tienes más de un reCamera, puedes consultar la [Gestión de dispositivos](https://wiki.seeedstudio.com/es/recamera_getting_started/#gestión-de-múltiples-dispositivos) para averiguar cuál es cuál.

## Acceso web básico

Una vez que hayas conectado el reCamera a tu red, puedes visitar la interfaz web del reCamera accediendo a la dirección IP en el navegador.

- IP de conexión USB: 192.168.42.1
- IP de conexión Wi-Fi o Ethernet: Usa `ifconfig` para averiguarlo o consulta con la gestión de red de tu router.

URLs web:

- **Página de inicio**: `ip_address/#/init`
- **Espacio de trabajo**: `ip_address/#/workspace` (para versión del sistema operativo 0.1.4 y superior)
- **Configuración de red**: `ip_address/#/network`
- **Seguridad**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energía**: `ip_address/#/power`
- **Node-RED original**: ```ip_address:1880```

**Por favor, verifica la versión del sistema operativo de tu dispositivo**. Hay una actualización importante entre la versión 0.1.3 y la 0.1.4. Para una experiencia de usuario más fluida, recomendamos actualizar a la 0.1.5 y superior. Por favor, ve a ```Barra lateral -> Sistema -> Actualización de software``` para verificar la versión del software, y aplica e instala la última versión del sistema operativo. Las instrucciones de actualización se pueden consultar en la [guía de actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#actualización-ota-desde-013-a-la-versión-más-reciente).

### Actualización OTA desde 0.1.3 a la versión más reciente

Si recibiste el primer lote de reCamera, puedes actualizar el sistema operativo a la última versión siguiendo estas instrucciones.

**Paso 1**: Abre el sitio web y navega a ```Barra lateral -> Sistema -> Actualización de software```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Paso 2**: Verifica tu versión del sistema operativo, y haz clic en **Check** y **Apply**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Paso 3**: Espera unos minutos para que se actualice el sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Paso 4**: Reinicia el dispositivo y actualiza la página web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Paso 5**: Ingresarás a la página de carga para cambiar la contraseña. Ahora puedes experimentar la última versión de reCamera con el panel de control de Node-RED siguiendo [estas instrucciones de descarga](https://wiki.seeedstudio.com/es/recamera_getting_started/#acceder-al-panel-de-vista-previa-de-recamera).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Acceder al panel de vista previa de reCamera

Al integrar el dispositivo con Node-RED, proporcionamos un ejemplo de interfaz de usuario de panel de control integrado donde puedes previsualizar el flujo de video, cambiar los modelos deseados. Puedes modificar e integrar libremente con tu propia aplicación.

Si tu versión del sistema operativo es 0.1.5 o superior, el panel de vista previa se mostrará una vez que inicies sesión.

Si actualizas el sistema operativo por tu cuenta, puedes descargar el jsonflow del panel de control desde Sensecraft AI

**Paso 1**. Después de que la actualización finalice, accede a la web ya sea mediante `192.168.42.1` o la IP de red, luego haz clic en ```Descargar flujo del panel de control```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Paso 2**. Navega a la plataforma Sensecraft AI, selecciona la primera Demostración oficial del Panel de control y haz clic en ```Clonar```. Se requiere inicio de sesión para este sitio web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Paso 3**. Selecciona el método de conexión para tu dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Paso 4**. Luego se mostrará el espacio de trabajo de Node-RED con el flujo preconstruido.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Paso 5**. Haz clic en ```Deploy``` y verifica que el flujo ya haya comenzado, luego haz clic en ```dashboard```, ese panel de control se mostrará.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Asegúrate de verificar si el flujo está iniciado o no. A veces, importar un flujo no iniciará automáticamente el flujo, por lo que el panel de control estará vacío. Por favor, haz clic en `Start` en el menú desplegable.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

¡Éxito!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Paso 6**. Puedes ajustar el umbral de ```IoU``` y ```Confidence``` para obtener un resultado más preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Comprensión rápida del flujo

En este flujo de ejemplo, construimos una demostración para contar el número de objetos deseados, como Persona, Gato, Perro y Botella, con una lista desplegable de **Selección de Conteo**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

Al cambiar los `nodos de función` en el flujo, puedes agregar más objetos para contar, o cambiar completamente esta función a otras aplicaciones de visión por computadora.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

Puedes ver qué tipo de objetos se pueden detectar viendo el `nodo del modelo`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Siéntete libre de modificar y jugar con el flujo como desees. Solo ten cuidado de **no** colocar demasiados `nodos de depuración` o `nodos de vista previa` después de los nodos del modelo, ya que imprimir múltiples resultados del modelo de IA consumirá CPU y puede hacer que el dispositivo se bloquee.

### Modelo de Visión por Computadora

Para estos flujos de trabajo proporcionados, el `modelo de detección YOLO11n` está seleccionado por defecto, que es el último modelo de visión por computadora para detección de objetos en tiempo real. También puedes reemplazarlo con otros modelos en el nodo. Si quieres ver qué otros modelos están disponibles, puedes consultar este [wiki](https://wiki.seeedstudio.com/es/recamera_on_device_models/).

**Intersección sobre Unión (IoU)**: IoU es una métrica utilizada para evaluar la superposición entre el cuadro delimitador predicho y el cuadro delimitador de la verdad fundamental. Se calcula como la relación entre el área de intersección de los dos cuadros y el área de unión de los dos cuadros. El valor de IoU está típicamente en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100, un valor de IoU de 0 representa ninguna superposición entre el cuadro predicho y el cuadro de la verdad fundamental. Un valor de 100 indica una coincidencia perfecta, lo que significa que los dos cuadros se superponen completamente.

**Confianza**: La confianza en el modelo YOLO representa la probabilidad de que un cuadro delimitador predicho contenga un objeto y cuán precisa es la predicción. Es un valor entre 0 y 100.0

## Personaliza tu panel de control y compártelo con la Comunidad

Animamos a los usuarios a compartir los paneles de control que desarrollan y crean en la comunidad. Hemos creado una carpeta en [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). Esperamos que todos compartan sus paneles de control allí mediante **pull request**, y nosotros los organizaremos y mostraremos.
Aquí tomaremos como ejemplo agregar una función de luz de relleno al panel de control para simplemente agregar un nodo y controlar reCamera.

**Paso 1**. Arrastra el nodo ```grupo de botones``` al espacio de trabajo. y edítalo con la siguiente configuración.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Paso 2**. Agrega un nuevo nodo de configuración ui-group llamado "Botón de Control", luego guárdalo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Paso 3**. Ve al panel de control 2.0, y coloca el marco del botón de control debajo de la selección del modelo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Paso 4**. Despliega el flujo y ve al panel de control.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demostración**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Paso 5**: No olvides exportar el archivo json del flujo y compartirlo en nuestro github.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Lista de Puertos

La siguiente lista muestra los puertos utilizados por reCamera:

- **Puerto 22**: Utilizado para inicio de sesión SSH remoto y está abierto.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto por defecto.
- **Puerto 80**: Sirve como interfaz del panel de control web para la visualización HTTP de la aplicación Node-RED.
- **Puerto 554**: Empleado para transmisión de video RTSP.
- **Puerto 9090**: Destinado al acceso al terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a las operaciones de Node-RED.

## Restablecimiento de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

Si deseas restablecer el dispositivo, por ejemplo, si olvidaste la contraseña de tu dispositivo, puedes mantener presionado el botón **Usuario** y luego conectar el dispositivo a la alimentación. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadear, suelta el botón Usuario.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
Esto eliminará la información del usuario, incluidas las aplicaciones que hayas desarrollado, o cualquier imagen y video almacenados localmente. Por favor, opera con precaución.
:::

Si deseas restaurar el firmware de tu dispositivo a una versión específica, visita [control de versión del sistema operativo](https://wiki.seeedstudio.com/es/recamera_os_version_control)

## Gestión de Múltiples Dispositivos

Si tienes más de una reCamera, puedes distinguirlas por la **dirección MAC** o el **número de S/N** en la parte posterior del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

O, una vez que conectes el dispositivo a tu computadora portátil a través de USB o AP, puedes ver la dirección MAC usando el siguiente comando

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Orientación de la Cámara

La orientación de vista predeterminada de la cámara es como la imagen de abajo donde el tipo-c está **mirando hacia abajo**. Ten en cuenta que otras orientaciones pueden afectar la precisión del modelo según cómo hayas entrenado el modelo de detección.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Recursos

- [Folleto de reCamera](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [Sistema Operativo reCamera](https://github.com/Seeed-Studio/reCamera-OS)

- [Serie reCamera](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
