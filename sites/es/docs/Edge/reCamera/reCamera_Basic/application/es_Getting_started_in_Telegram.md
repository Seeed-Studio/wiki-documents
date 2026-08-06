---
description: Proporciona un tutorial para integrar reCamera con Telegram. Depende de n8n.
title: Primeros pasos en Telegram
keywords:
  - reCamera
  - Telegram
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png
slug: /getting_started_in_Telegram_work_with_recamera
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-20'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/getting_started_in_Telegram_work_with_recamera/
---


# Acoplar reCamera n8n Telegram

## Introducción

Entre los diversos escenarios de aplicación de IoT, el intercambio de información y el procesamiento automático entre dispositivos suelen demostrar más el valor del sistema que la mera capacidad de reconocimiento. reCamera ofrece capacidades estables de reconocimiento visual con IA local, mientras que n8n proporciona una plataforma flexible de orquestación visual para el procesamiento de datos y la automatización de procesos. Cuando se combinan, la información de detección ya no se limita a los dispositivos locales, sino que puede convertirse en una fuente de eventos que puede aprovecharse aún más.

Este tutorial presenta un método de integración sencillo y eficiente: los resultados de reconocimiento de reCamera se envían en forma de texto a n8n, y luego n8n los envía automáticamente al Bot personal de Telegram creado por el usuario a través de la API. A través de este enlace, cualquier evento de reconocimiento puede enviarse inmediatamente al dispositivo móvil, construyendo así un sistema de notificaciones ligero que abarca múltiples dispositivos y plataformas. Todo el proceso no requiere escribir código complejo; solo es necesario completar la configuración de los nodos necesarios para lograr rápidamente el objetivo.

## Preparación de hardware

Una reCamera (puede ser cualquiera de la serie 2002, la versión HQ POE o la versión con giro e inclinación, pero ten en cuenta que la versión POE no tiene funcionalidad WiFi y requiere que se conecte un switch con función POE en el mismo segmento de red)  
un ordenador (una máquina virtual configurada con Ubuntu 22.04, utilizada para instalar n8n)

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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

Una vez completada la instalación, habilita y configura el arranque

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Verifica que la instalación se haya realizado correctamente:

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

Luego sal de la terminal actual e inicia sesión de nuevo.

```bash
docker ps
```

### (3) Ejecutar el contenedor de n8n

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

La primera ejecución descargará automáticamente la imagen de n8n, de varios cientos de MB, tardará un poco

### (4) Acceder a n8n

Abre un navegador Firefox en la máquina virtual e introduce:

```bash
http://localhost:5678
```

Puedes entrar en la interfaz de n8n para crear una cuenta.

## 2. Configurar n8n

### (1) Crear un nodo "Webhook" para recibir datos de reCamera

Haz clic en Personal-Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_1.png" /></div>

Haz clic en el signo más, en el cuadro de búsqueda escribe "webhook" y haz clic en el primer nodo "Webhook"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_2.png" /></div>

Ahora hemos entrado en la interfaz de configuración. Aquí necesitamos modificar dos lugares. Primero, selecciona "HTTP Method" como "POST". Luego, modifica "Path" con cualquier nombre. Aquí tomaré "recamera_detect" como ejemplo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_3.png" /></div>

Después de este paso, se ha guardado automáticamente. En este momento, haz clic en "Back to canvas" en la esquina superior izquierda para volver a la interfaz principal y prepararte para crear el siguiente nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_4.png" /></div>

### (2) Crear el nodo "Code" para procesar los datos recibidos

Haz clic en el signo más, escribe "code" en el cuadro de búsqueda y haz clic en el primer nodo "Code"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_5.png" /></div>

Luego selecciona "Code in JavaScript"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_6.png" /></div>

Sustituye el contenido original por el siguiente código:

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_7.png" /></div>

Haz clic en "Back to canvas" en la esquina superior izquierda para volver a la interfaz principal

## 3. Configurar Telegram

### (1) Crear un Bot de Telegram y obtener su API

Abre Telegram y busca "BotFather"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_8.png" /></div>

Crea tu Bot, rellena el nombre del robot y el nombre de usuario y luego haz clic en "CREATE BOT"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_9.png" /></div>

Entonces aparecerá esta interfaz. Después del icono de llavero, hay una cadena de efectos de partículas, que es la API del Bot que creaste. Haz clic en "Copy" y la usarás más tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_10.png" /></div>

### (2) Busca userinfobot para obtener tu Chat ID personal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_11.png" /></div>

Después de hacer clic para entrar, haz clic en "Start" en la esquina superior derecha. En este momento, devuelve un mensaje que contiene tu ID. Recuerda este ID, que se utilizará más tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_12.png" /></div>

### (3) continuar configurando n8n y añadir un tercer nodo

Haz clic en el signo más, en el cuadro de búsqueda escribe "telegram" y haz clic en el primer nodo "Telegram"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_13.png" /></div>

Después de hacer clic, sigue escribiendo "message" y selecciona "Send a text message"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_14.png" /></div>

Después de entrar en el nodo, selecciona "Create new credentila"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_15.png" /></div>

Luego copia la API de tu Bot que acabas de copiar en "Access Token" y haz clic en "Save" en la esquina superior derecha"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_16.png" /></div>

Después de hacer clic en "Save", el sistema verificará si la API existe. Si todo es correcto, aparecerán las palabras "Connection tested successfully". En este momento, haz clic en Exit en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_17.png" /></div>

Luego rellena el Chat ID personal que obtuviste antes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_18.png" /></div>

Luego rellena "Text":

```
当前人数：{{ $json["peopleCount"] }}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_19.png" /></div>

Haz clic en "Back to canvas" en la esquina superior izquierda para volver a la interfaz principal

## 4. Configurar Node-Red

Primero, abre la interfaz de n8n de la máquina virtual, haz doble clic en el nodo "Webhook" que configuraste antes, entra en la interfaz de configuración del nodo Webhook y luego haz clic en "Production URL" para copiar la siguiente dirección "POST"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_20.png" /></div>

Los pasos de configuración anteriores son los mismos que en [Home Assistant](https://wiki.seeedstudio.com/es/getting_started_for_home_assistant_with_recamera/), solo que al configurar el nodo "http request", es necesario modificar la dirección URL, es decir, la dirección POST que acabas de copiar en la máquina virtual, y luego modificar localhost por la dirección IP de tu máquina virtual

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_21.png" /></div>

Ver IP de la máquina virtual

```bash
ifconfig
```

:::note
¡Por favor recuerda! ¡Asegúrate de conectar Recamera a la red! De lo contrario, no será posible la comunicación.
:::

## 5. Activar y entrar en la interfaz Executions para ver el mensaje

Haz clic en el interruptor "Inactive" en la esquina superior derecha para cambiarlo a Active en verde y luego haz clic en "Executions"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_22.png" /></div>

En este momento, verás que hay muchas marcas de tiempo a la izquierda que se han estado actualizando. Si ves que las marcas de tiempo se han estado actualizando, ¡significa que los datos de tu reCamera se han conectado a la plataforma n8n!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_23.png" /></div>

Luego revisa tu Telegram, debería haber muchos recordatorios de mensajes; en este momento, ¡has enviado correctamente el mensaje de reCamera a Telegram!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png" /></div>

Si deseas ver el contenido de detección de un momento determinado, puedes hacer doble clic en esa marca de tiempo y luego hacer doble clic en "Code in JavaScript" para ver el OUTPUT en la derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_25.png" /></div>

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
