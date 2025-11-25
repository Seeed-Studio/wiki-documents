---
description: Proporciona un tutorial para integrar reCamera con n8n. N8N está instalado en la máquina virtual.
title: Introducción a n8n
keywords:
  - reCamera
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/n8n_11.png
slug: /es/getting_started_for_n8n_with_recamera
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---
# Introducción a n8n con reCamera

## Introducción

reCamera es una cámara inteligente que soporta reconocimiento visual local y puede generar resultados de detección en tiempo real en el dispositivo. n8n es una herramienta de flujo de trabajo de automatización de código abierto. Los usuarios pueden construir rápidamente varios procesos de notificación, almacenamiento o vinculación de aplicaciones a través de una interfaz visual. Este tutorial introduce cómo enviar la información reconocida por reCamera en forma de texto a n8n, permitiendo que sirva como fuente de activación para el flujo de trabajo. De esta manera, los usuarios pueden integrar fácilmente eventos de detección de cámara en sus propios sistemas de automatización, logrando funciones básicas como alertas de mensajes, registro de logs y llamadas a servicios de terceros, sentando las bases para lógica de negocio más compleja en el futuro.

## Preparación de Hardware

Una reCamera (puede ser cualquiera de la serie 2002, versión HQ POE, o versión pan-tilt, pero ten en cuenta que la versión POE no tiene funcionalidad WiFi y requiere un switch con función POE para ser conectado en el mismo segmento de red)  
una computadora (Una máquina virtual configurada con Ubuntu 22.04, utilizada para instalar n8n)

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. Instalar n8n (en máquina virtual)

### (1) Instalar Docker

```bash
sudo apt update
sudo apt install -y docker.io
```

Después de que la instalación esté completa, habilitar y configurar el arranque

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Verificar que la instalación fue exitosa:

```bash
docker --version
```

Si ves algo como:

```nginx
Docker version 28.2.2, build ...
```

### (2) Permitir que el usuario actual use docker directamente (sin sudo cada vez)

```bash
sudo usermod -aG docker $USER
```

Luego salir de la terminal actual e iniciar sesión nuevamente.

```bash
docker ps
```

### (3) Ejecutar contenedor n8n

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

La primera ejecución descargará automáticamente la imagen n8n, aproximadamente varios cientos de MB, un poco largo

### (4) Acceder a n8n

Abrir un navegador Firefox en la máquina virtual e ingresar:

```bash
http://localhost:5678
```

Puedes ingresar a la interfaz n8n para crear una cuenta.

## 2. Configurar n8n

### (1) Crear un nodo "Webhook" para recibir datos de ReCamera

Hacer clic en Personal-Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_1.png" /></div>

Hacer clic en el signo más-cuadro de búsqueda para ingresar "webhook"-hacer clic en el primer nodo "Webhook"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_2.png" /></div>

Ahora hemos ingresado a la interfaz de configuración. Aquí necesitamos modificar dos lugares. Primero, seleccionar "HTTP Method" como "POST". Luego, modificar "Path" como cualquier nombre. Aquí tomaré "recamera_detect" como ejemplo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_3.png" /></div>

Después de este paso, se ha guardado automáticamente. En este momento, hacer clic en "Back to canvas" en la esquina superior izquierda para regresar a la interfaz principal y prepararse para crear el siguiente nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_4.png" /></div>

### (2) Crear nodo "Code" para procesar datos recibidos

Hacer clic en el signo más-ingresar "code" en el cuadro de búsqueda-hacer clic en el primer nodo "Code"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_5.png" /></div>

Luego seleccionar "Code in JavaScript"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_6.png" /></div>

Reemplazar el contenido original con el siguiente código:

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_7.png" /></div>

Hacer clic en "Back to canvas" en la esquina superior izquierda para regresar a la interfaz principal

## 3. Configurar Node-Red

primero abrir la interfaz n8n de la máquina virtual, hacer doble clic en el nodo "Webhook" que configuraste anteriormente, ingresar a la interfaz de configuración del nodo Webhook, y luego hacer clic en "Production URL" para copiar la siguiente dirección "POST"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_8.png" /></div>

Los pasos de configuración anteriores son los mismos que los de [Home Assistant](https://wiki.seeedstudio.com/es/getting_started_for_home_assistant_with_recamera/), excepto que al configurar el nodo "http request", la dirección URL necesita ser modificada, es decir, la dirección POST que acabas de copiar en la máquina virtual, y luego la dirección localhost necesita ser modificada a la dirección IP de tu máquina virtual.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_9.png" /></div>

Ver IP de la Máquina Virtual

```bash
ifconfig
```

:::note
¡Por favor recuerda! ¡¡¡Asegúrate de conectar Recamera a la red!!! De lo contrario, la comunicación no será posible.
:::

## 4. Abrir Active e ingresar a la interfaz Executions para ver el mensaje

Hacer clic en el interruptor "Inactive" en la esquina superior derecha para convertirlo en Active verde, luego hacer clic en "Executions"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_10.png" /></div>

En este momento, verás que hay muchas marcas de tiempo en la izquierda que se han estado actualizando. Si ves que las marcas de tiempo se han estado actualizando, ¡significa que los datos de tu reCamera se han conectado a la plataforma n8n!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_11.png" /></div>

Si quieres ver el contenido de detección de un cierto tiempo, puedes hacer doble clic en esa marca de tiempo, y luego hacer doble clic en "Code in JavaScript" para ver el OUTPUT en la derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_12.png" /></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
