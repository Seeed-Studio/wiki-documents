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
  author: Samuel Yang
createdAt: '2024-11-11'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/es/recamera_getting_started/
---

# Guía de inicio rápido de reCamera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

¡Bienvenido a reCamera! Esta guía te ayudará a configurar tu dispositivo rápidamente y empezar a usarlo para desbloquear potentes funciones de IA de visión. Tanto si eres principiante como usuario con experiencia, este recorrido paso a paso te guiará por la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱</font></span></strong>
    </a>
</div>

# Serie de productos

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
        <td>Placa central</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>Placa de sensor</td>
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
        <td>Imán/Soporte de cámara</td>
        <td>Imán/Soporte de cámara</td>
        <td>Imán/Soporte de cámara</td>
        <td>Imán/Soporte de cámara</td>
    </tr>
    <tr>
        <td>Fuente de alimentación</td>
        <td>Cable Type‑C</td>
        <td>Cable Type‑C</td>
        <td>Cable Type‑C</td>
        <td>Cable Type‑C</td>
    </tr>
</table>

## Desempaquetado y encendido

Comienza desempaquetando tu reCamera. Dentro de la caja deberías encontrar:

- reCamera
- Cable Type‑C
- Cable Ethernet

Asegúrate de que todas las partes estén incluidas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Simplemente enciende el dispositivo con el cable Type‑C proporcionado. Cuando veas que la luz verde está encendida, significa que la reCamera está lista para conectarse al mundo.

## Conexión de red

Hay tres métodos para conectar la reCamera a tu red:

### Método 1: Cable USB

**Configuración de red por cable mediante cable USB**

Conecta el cable USB desde la reCamera a tu PC; después podrás visitar ```192.168.42.1``` para ver la página de carga de reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Si tienes una reCamera con función inalámbrica, recomendamos configurar la conexión Wi‑Fi. Solo la versión 2002w tendrá la interfaz de selección de Wi‑Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**Notas para la configuración de red Wi‑Fi:**

1. **Garantiza la misma red**: Asegúrate de que reCamera y tu ordenador estén conectados a la **misma red Wi‑Fi**. Esto garantiza que el desarrollo y la depuración posteriores puedan realizarse con normalidad.

2. **Desactiva la VPN en el ordenador**: Si tienes una VPN activada en tu ordenador, por favor **apaga la VPN** antes de configurar el Wi‑Fi. Las VPN pueden causar problemas de conexión de red e impedir que accedas a reCamera con normalidad.

3. **Cómo cambiar la conexión Wi‑Fi**:
   - En la página de configuración de reCamera (192.168.42.1), encuentra la opción de ajustes de **Network**
   - Haz clic en el **botón Enable WI-FI**
   - Selecciona de la lista la red Wi‑Fi (SSID) a la que deseas conectar
   - Introduce la contraseña de la red Wi‑Fi
   - Haz clic en el botón **Confirm**

4. Después de conectarte correctamente a la red Wi‑Fi, haz clic en el botón “Settings” para entrar en la página de ajustes. Puedes ver la dirección IP de Wi‑Fi junto a “Wi‑Fi IP”.

Si encuentras algún problema, consulta la [solución de problemas de red](https://wiki.seeedstudio.com/es/recamera_network_connection/).

### Método 2: Ethernet

**Configuración de red mediante puerto Ethernet**

Si deseas usar el puerto Ethernet, puedes usar el cable incluido en la caja para conectarlo a tu router. Ten en cuenta que esto **no es POE (Power over Ethernet)**. Aún necesitas el cable Type‑C para encender el dispositivo. Puedes **desatornillar la parte trasera** de la cámara y conectar a través del puerto.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Una vez conectado, puedes encontrar la IP de la reCamera en el panel de administración de tu router y luego visitar la página web y la plataforma Node-RED.

### Método 3: Modo AP (solo disponible en versiones 2002w)

**Configuración de red inalámbrica en modo AP**

Al encenderse, reCamera activará el punto de acceso (AP) para que puedas cambiar la preferencia de red. Abre la lista de Wi‑Fi de tu teléfono u ordenador portátil; deberías poder ver un nombre de red Wi‑Fi llamado `reCamera_******`.
El sistema de nomenclatura es ``"recamera_" + los últimos seis dígitos de la dirección MAC`` de este dispositivo.
La contraseña predeterminada es `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Conéctate a este AP y una página web debería aparecer automáticamente. Si no es así, siempre puedes escribir **192.168.16.1** en tu navegador para visitar la página. Luego podrás seleccionar a qué red Wi‑Fi quieres que se conecte la reCamera.
Si tienes más de una reCamera, puedes consultar la [gestión de dispositivos](https://wiki.seeedstudio.com/es/recamera_getting_started/#gestión-de-múltiples-dispositivos) para averiguar cuál es cuál.

## Acceso web básico

Una vez que hayas conectado la reCamera a tu red, puedes visitar la interfaz web de reCamera accediendo a la dirección IP en el navegador.

- IP de conexión por USB: 192.168.42.1
- IP de conexión por Wi‑Fi o Ethernet: usa `ifconfig` para averiguarla o consulta la gestión de red de tu router.

URLs web:

- **Página de inicio**: `ip_address/#/init`
- **Espacio de trabajo**: `ip_address/#/workspace` (para versión del sistema operativo 0.1.4 y superior)
- **Configuración de red**: `ip_address/#/network`
- **Seguridad**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Alimentación**: `ip_address/#/power`
- **Node-RED original**: ```ip_address:1880```

**Por favor, comprueba la versión del sistema operativo de tu dispositivo**. Hay una actualización importante entre las versiones 0.1.3 y 0.1.4. Para una experiencia de usuario más fluida, recomendamos actualizar a 0.1.5 o superior. Ve a ```Sidebar -> System -> Software Update``` para comprobar la versión del software y aplicar e instalar la última versión del sistema operativo. Para las instrucciones de actualización, consulta la [guía de actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#guía-de-actualización-ota-de-013-a-la-última-versión).

### Actualización OTA de 0.1.3 a la última versión

Si tienes el primer lote de reCamera, puedes actualizar el sistema operativo a la versión más reciente siguiendo estas instrucciones.

**Paso 1**: Abre la página web y navega a ```Sidebar -> System -> Software Update```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Paso 2**: Comprueba la versión de tu sistema operativo y haz clic en **Check** y **Apply**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Paso 3**: Espera unos minutos para actualizar el sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Paso 4**: Reinicia el dispositivo y actualiza la página web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Paso 5**: Entrarás en la página de carga para cambiar la contraseña. Ahora puedes experimentar la versión más reciente de reCamera con el panel de Node-RED siguiendo [estas instrucciones de descarga](https://wiki.seeedstudio.com/es/recamera_getting_started/#acceder-al-panel-de-previsualización-de-recamera).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Acceder al panel de previsualización de reCamera

Al integrar el dispositivo con Node-RED, proporcionamos un ejemplo de interfaz de panel integrada donde puedes previsualizar el flujo de vídeo y cambiar los modelos deseados. Puedes modificarlo libremente e integrarlo con tu propia aplicación.

Si la versión de tu sistema operativo es 0.1.5 o superior, el panel de previsualización se mostrará una vez que inicies sesión.

Si actualizas el sistema operativo por tu cuenta, puedes descargar el flujo json del panel desde Sensecraft AI

**Paso 1**. Una vez finalizada la actualización, accede a la web mediante `192.168.42.1` o la IP de red y luego haz clic en ```Download dashborad flow```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Paso 2**. Navega a la plataforma Sensecraft AI, selecciona la primera Demo oficial de Dashboard y haz clic en ```Clone```. Es necesario iniciar sesión en este sitio web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Paso 3**. Selecciona el método de conexión para tu dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Paso 4**. Entonces se mostrará el espacio de trabajo de Node-RED con el flujo preconstruido.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Paso 5**. Haz clic en ```Deploy``` y comprueba que el flujo ya se ha iniciado; luego haz clic en ```dashboard```, y se mostrará ese panel.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Asegúrate de comprobar si el flujo está iniciado o no. A veces, al importar un flujo, este no se inicia automáticamente, por lo que el panel quedará vacío. Haz clic en `Start` en el menú desplegable.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

¡Éxito!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Paso 6**. Puedes ajustar el umbral de ```IoU``` y ```Confidence``` para obtener un resultado más preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Comprensión rápida del flujo

En este flujo de ejemplo construimos una demostración para contar el número de objetos deseados como Persona, Gato, Perro y Botella con una lista desplegable de **Counting Selection**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

Cambiando los `function nodes` en el flujo, puedes añadir más objetos para ser contados, o cambiar completamente esta función a otras aplicaciones de visión por computador.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

Puedes ver qué tipo de objetos se pueden detectar viendo el `model node`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Siéntete libre de retorcer y jugar con el flujo de la forma que quieras. Solo ten cuidado de **no** poner demasiados `debug nodes` o `preview nodes` después de los model nodes, ya que imprimir múltiples resultados del modelo de IA consumirá CPU y provocará que el dispositivo se bloquee.

### Modelo de Visión por Computador

Para estos flujos de trabajo proporcionados, `YOLO11n detection model` está seleccionado por defecto, que es el último modelo de visión por computador para detección de objetos en tiempo real. También puedes reemplazarlo por otros modelos en el nodo. Si quieres ver qué otros modelos están disponibles, puedes consultar este [wiki](https://wiki.seeedstudio.com/es/recamera_on_device_models/).

**Intersection over Union (IoU)**: IoU es una métrica utilizada para evaluar la superposición entre el cuadro delimitador predicho y el cuadro delimitador de referencia. Se calcula como la razón entre el área de intersección de los dos cuadros y el área de unión de los dos cuadros. El valor de IoU normalmente está en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100; un valor de IoU de 0 representa que no hay superposición entre el cuadro predicho y el cuadro de referencia. Un valor de 100 indica una coincidencia perfecta, lo que significa que los dos cuadros se superponen completamente.

**Confidence**: Confidence en el modelo YOLO representa la probabilidad de que un cuadro delimitador predicho contenga un objeto y cuán precisa es la predicción. Es un valor entre 0 y 100.0

## Personaliza tu panel y compártelo con la Comunidad

Animamos a los usuarios a compartir los paneles que desarrollan y crean en la comunidad. Hemos creado una carpeta en [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). Esperamos que todos compartan allí sus paneles mediante **pull request**, y nosotros los organizaremos y mostraremos.
Aquí tomaremos como ejemplo añadir una función de luz de relleno al panel para simplemente añadir un nodo y controlar reCamera.

**Paso 1**. Arrastra el nodo ```button group``` al área de trabajo y edítalo con la siguiente configuración.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Paso 2**. Añade un nuevo nodo de configuración ui-group llamado "Control Button", y luego guárdalo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Paso 3**. Ve al panel 2.0 y coloca el marco del botón de control bajo la selección del modelo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Paso 4**. Despliega el flujo y ve al panel.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demostración**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Paso 5**: No olvides exportar el archivo json del flujo y compartirlo en nuestro GitHub.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Lista de Puertos

A continuación se enumeran los puertos utilizados por reCamera:

- **Puerto 22**: Utilizado para inicio de sesión remoto por SSH y está abierto.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto por defecto.
- **Puerto 80**: Sirve como la interfaz web del panel para la visualización HTTP de la aplicación Node-RED.
- **Puerto 554**: Empleado para la transmisión de video RTSP.
- **Puerto 9090**: Destinado al acceso al terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a las operaciones de Node-RED.

## Restablecimiento de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

Si deseas restablecer el dispositivo, por ejemplo si olvidas el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la alimentación. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadear, suelta el botón User.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
Esto eliminará la información del usuario, incluidas las aplicaciones que hayas desarrollado, o cualquier imagen y video almacenado localmente. Por favor, opera con precaución.
:::

Si deseas restaurar el firmware de tu dispositivo a una versión específica, visita [os version control](https://wiki.seeedstudio.com/es/recamera_os_version_control)

## Gestión de Varios Dispositivos

Si tienes más de una reCamera, puedes distinguirlas por la **dirección MAC** o el **número S/N** en la parte posterior del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

O, una vez que conectes el dispositivo a tu portátil mediante USB o AP, puedes ver la dirección MAC usando el siguiente comando

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Orientación de la Cámara

La orientación predeterminada de la vista de la cámara es como en la imagen de abajo, donde el conector type-c está **mirando hacia abajo**. Ten en cuenta que otras orientaciones pueden afectar a la precisión del modelo en función de cómo entrenaste el modelo de detección.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Recursos

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Serie](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
