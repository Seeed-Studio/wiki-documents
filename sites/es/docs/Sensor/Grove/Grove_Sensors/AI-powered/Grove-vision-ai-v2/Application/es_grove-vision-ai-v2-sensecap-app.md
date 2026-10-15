---
description: Presenta cómo conectar Grove Vision AI V2 a la aplicación SenseCAP Mate.
title: Conectar Grove Vision AI V2 a la aplicación SenseCAP Mate
keywords:
  - sensecap mate
  - grove vision ai v2
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /connect_vision_ai_v2_to_sensecap_mate
sku: 101021112,E23011220,104990982
last_update:
  date: 01/19/2024
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/connect_vision_ai_v2_to_sensecap_mate/
---

# Conectar Grove Vision AI V2 a la aplicación SenseCAP Mate

**[SenseCAP Mate APP](https://sensecap-mate-download.seeed.cn/)** es una aplicación potente para visualización de datos y gestión remota de dispositivos.

- Ahorra tiempo: proporciona una experiencia de escanear y usar para permitir a los usuarios completar toda la configuración en 4 pasos
- Funciona para personas con poca o ninguna experiencia técnica para comenzar fácilmente con datos de sensores
- Adquiere y visualiza datos en interfaces de usuario limpias
- Establece intervalos de tiempo: mejora la eficiencia de la batería
- Establece valores umbral: enfócate en los datos para los que necesitas tomar acción
- Envía alarmas si los datos están fuera del rango seguro

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Aprende Más 🖱️</font></span></strong>
    </a>
</div>

Este tutorial te guiará sobre cómo acceder a Grove Vision AI V2 y XIAO ESP32C3 en la aplicación SenseCAP Mate.

## Comenzando

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

### Materiales Requeridos

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32C3</th>
			<th>Grove Vision AI V2</th>
      <th>Módulo de Cámara OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Luego necesitas conectar el XIAO y el Grove Vision AI V2 a través de la fila de pines (o usar la placa de expansión y la interfaz Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

### Preparación del Software

Conecta el XIAO ESP32C3 a tu computadora usando un cable USB-C adecuado. Asegúrate de que los controladores del dispositivo estén instalados correctamente.

Abre la [Herramienta SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) en tu navegador web. Esta podría ser un servicio proporcionado por el fabricante o una herramienta de terceros diseñada para flashear dispositivos ESP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>


Luego selecciona **XIAO ESP32S3** y haz clic en **Connect**.

:::caution
¡Ten en cuenta que aunque aquí se selecciona el XIAO ESP32S3, seguimos usando el XIAO ESP32C3!
:::

Haz clic en el botón de abajo para descargar el archivo de firmware y haz clic en el botón **Add File** en la página web para flashear el firmware `XIAO_C3_as_AT_module.bin` para la dirección `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Descargar el archivo</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, haz clic en el botón **Flash** y espera a que el programa se cargue exitosamente antes de **desconectar** el XIAO ESP32C3 de la computadora.

## Registrarse para una cuenta SenseCAP y preparación del software

### Paso 1. Registrarse para una cuenta SenseCAP

Si estás usando SenseCAP por primera vez, entonces puede que necesites registrar una cuenta en el **[sitio web de SenseCAP](https://sensecap.seeed.cc)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png" style={{width:1000, height:'auto'}}/></div>

Después de registrarte, por favor inicia sesión en el sitio web de SenseCAP.

### Paso 2. Descargar la APP SenseCAP Mate a tu teléfono móvil.

Si quieres verificar los mensajes de tu dispositivo en cualquier momento y lugar, puede que quieras considerar instalar la APP SenseCAP Mate, un dispositivo móvil que usa SenseCAP. Haciendo clic en el botón de abajo, puedes elegir instalar la APP SenseCAP Mate de una manera que te convenga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecap-mate-download.seeed.cn/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Descargar APP 🖱️</font></span></strong>
    </a>
</div>

## Configuración del Dispositivo en SenseCAP

### Paso 3. Agregar Dispositivo

Volvamos al lado web y comencemos agregando un Grove Vision AI V2.

En la barra de catálogo del lado izquierdo de la página, selecciona **Development Kit** y haz clic en el botón **Create Development Kit** en el medio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png" style={{width:1000, height:'auto'}}/></div>

Por favor nombra tu dispositivo y selecciona el dispositivo como **Grove - Vision AI V2** y haz clic en el botón **Confirm**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png" style={{width:600, height:'auto'}}/></div>

Después de crear un nuevo dispositivo, por favor haz clic en el botón **Connect** en el lado derecho del dispositivo, y se mostrará una serie de ventanas emergentes para conectar los dispositivos requeridos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png" style={{width:1000, height:'auto'}}/></div>

Por favor guarda esta información de credenciales, la usaremos más tarde en la configuración de red.

## Preparación del modelo SenseCraft AI y configuración MQTT

### Paso 4. Conectar el Grove Vision AI V2 al Asistente de Modelo SenseCraft AI

Continuemos los pasos anteriores haciendo clic en el botón **Deploy** en el medio de la página, en este punto saltaremos directamente a la página de implementación del modelo SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/14.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/15.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Subir un modelo adecuado

Primero selecciona **Grove - Vision AI V2** en la barra de catálogo de la izquierda, luego selecciona el modelo que quieres usar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/16.png" style={{width:1000, height:'auto'}}/></div>

Una vez que estés en la página del modelo, puedes leer una descripción detallada de este modelo o implementar el modelo en la página. Haz clic en el botón **Deploy Model** en la esquina superior derecha de la página para entrar a la página de implementación del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/17.png" style={{width:1000, height:'auto'}}/></div>

Conecta el Grove Vision AI V2 con el XIAO ESP32C3 y la cámara instalada a la computadora a través del cable USB-C.

:::tip
El cable debe conectar el Grove Vision AI V2 a la computadora, no el XIAO.
:::

Luego haz clic en el botón **Connect** de abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/18.png" style={{width:1000, height:'auto'}}/></div>

En la nueva ventana, haz clic en **Confirm** y selecciona el número de puerto donde se encuentra el dispositivo. Espera de 1 a 2 minutos para que el modelo se suba.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/19.png" style={{width:1000, height:'auto'}}/></div>

Si la carga del modelo es exitosa, puedes ver la pantalla en vivo en el Preview y también deberías poder ver información sobre el modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/20.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si no hay pantalla mostrada en Preview o no hay información en la información del modelo, puede haber un problema con el modelo y necesitas reseleccionar el modelo o subirlo de nuevo.
:::

### Paso 6. Configurar la red para Grove Vision AI V2 & XIAO

Abre la página de configuración del Model Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/21.png" style={{width:1000, height:'auto'}}/></div>

Por favor activa el botón MQTT e ingresa la siguiente información que necesitas llenar en la página.

- **SSID & Password**: El nombre y contraseña de la red a la que quieres que XIAO se conecte. XIAO solo soporta WiFi 2.4G, la red 5G no está disponible.

Por favor llena la configuración de red de acuerdo a la información del dispositivo del Grove Vision AI V2 que hemos agregado por SenseCAP en el **[Paso 3](#paso-3-agregar-dispositivo)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/23.png" style={{width:1000, height:'auto'}}/></div>

Luego haz clic en el botón Save de abajo. Después de guardar, **no significa que el Grove Vision AI V2 haya sido escrito correctamente**, por favor regresa a **Process** en la barra de menú izquierda y verifica si la dirección IP del dispositivo ha aparecido y si el estado de la conexión MQTT es correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Cuando se muestra la IP Address, significa que no hay problema con WIFI, y Service status debe ser el texto en la figura para representar normal, nota que si WIFI no es normal, MQTT definitivamente no es normal; cuando acabas de cambiar, puede mostrar desconectado, y necesitas esperar alrededor de 10s más o menos, no necesitas refrescar para ver el estado, y mostrará el estado más nuevo después del cambio de estado automáticamente.
:::

Cuando termines, haz clic en el botón **Stop** para detener el razonamiento, y haz clic en **Disconnect** para desconectar el puerto serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png" style={{width:1000, height:'auto'}}/></div>

## Observaciones del Lado PaaS y la APP SenseCAP Mate

### Paso 7. Ver los resultados en la APP Mate

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/22.png" style={{width:1000, height:'auto'}}/></div>

Ahora podemos abrir nuestro móvil e introducir nuestro número de cuenta y contraseña para iniciar sesión. El móvil sincronizará la información del dispositivo PaaS.

:::caution
Por favor selecciona el sitio correcto para el cual te registraste.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png" style={{width:400, height:'auto'}}/></div>

Después de iniciar sesión, selecciona tu dispositivo recién creado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png" style={{width:400, height:'auto'}}/></div>

Una vez que ingreses al dispositivo, puedes observar la pantalla y los resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png" style={{width:400, height:'auto'}}/></div>

## Solución de Problemas

### P1: Problema de Red

Si sigues observando direcciones IP apareciendo y desapareciendo en la página de Proceso, entonces la red puede estar inestable. Puedes considerar cambiar de red o reemplazar la antena con una más potente.

### P2: ¿Por qué no puedo ver la pantalla en la APP Mate?

Solo una de las vistas previas en vivo en SSCMA y los resultados de vista previa en SenseCAP PaaS puede estar activa al mismo tiempo. Así que ten en cuenta que necesitas desactivar la visualización en tiempo real de la pantalla de inferencia en la página de Proceso en SenseCraft AI.

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

