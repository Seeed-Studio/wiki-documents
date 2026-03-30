---
description: Usa OpenClaw para controlar el reCamera Gimbal
title: Usa OpenClaw para controlar el reCamera Gimbal
keywords:
  - reCamera Gimbal
  - Control sensorial
  - OpenClaw
image: https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_9.png
slug: /use_cpenclaw_to_control_the_recamera_gimbal
sidebar_position: 10
last_update:
  date: 03/27/2026
  author: Xinrui Wu
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
url: https://wiki.seeedstudio.com/es/use_cpenclaw_to_control_the_recamera_gimbal/
---


# Usa OpenClaw para controlar el reCamera Gimbal

## Introducción

Este proyecto rompe con éxito la barrera entre los grandes modelos virtuales y el mundo físico mediante la profunda integración del framework OpenClaw Agent con la cámara edge AI reCamera Gimbal de Seeed Studio.  
Basándonos en la potente arquitectura RISC-V, el entorno low-code integrado Node-RED y la capacidad de cómputo en el borde de 1 TOPS de reCamera, hemos desarrollado una Skill subyacente de interacción dedicada para OpenClaw.  
Ahora, el gran modelo ya no es un "cerebro en un frasco" que solo puede escribir en la pantalla. Tiene un "cuello" que puede girar activamente 360°, "ojos" (captura de imagen + análisis VLM) que pueden ver el mundo físico, "manos" (control de LED) que pueden cambiar el entorno y "oídos y boca" (micrófono y altavoz) para la interacción bidireccional.

A continuación se muestra el efecto de uso después de completar esta demo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw.gif" /></div>

## Preparación de hardware

un reCamerab Gimbal
un ordenador

<table align="center">
 <tr>
  <th>reCamera Gimbal</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 1. Instalar OpenClaw en tu ordenador

:::note
Es necesario tener instalados Git y nodejs antes de la instalación. Si eres usuario de Windows10, también necesitas instalar Visual Studio. Si no está instalado, se producirá un error.
:::

Visita la página oficial de OpenClaw para ver el tutorial de instalación detallado: [OpenClaw-Personal AI Assistant](https://openclaw.ai/)

Después de la instalación, puedes entrar directamente en la página web para intentar chatear con él. Si en este momento puedes obtener respuesta con normalidad, entonces has instalado y configurado correctamente OpenClaw. Continúa paso a paso. Si hay algún problema con la instalación de OpenClaw, por favor encuentra la causa y resuélvelo por tu cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_2.png" /></div>

También puedes hacer clic en la página "Overview" en el lado izquierdo para comprobar si el "Status" es normal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_3.png" /></div>

## 2. Importar las Skills de reCamera Gimbal

### 2.1 Nueva carpeta de skills

En la carpeta donde está instalado OpenClaw, busca `workspace` y crea una nueva carpeta llamada "skills" en esta ruta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_1.png" /></div>

### 2.2 Descargar el proyecto reCamera Gimbal en GitHub

La dirección del proyecto es:

```
https://github.com/Seeed-Projects/reCamera_Gimbal-OpenClaw
```

Después de descargar y descomprimir, coloca la carpeta "recamera-gimbal" del proyecto en la carpeta "skills" creada en el paso 2.1.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_8.png" /></div>

### 2.3 Configuración de openclaw.json

openclaw.json se encuentra en la carpeta donde instalaste OpenClaw. Este archivo contiene todas las configuraciones que necesitas para acceder al modelo de IA. Lo que necesitas hacer es añadir el siguiente contenido sobre reCamera Gimbal a openclaw.json:

:::note

1. Sustituye "C :\\ Users\\seeed\\.openclaw\\workspace\\skills" por la ruta real de tu carpeta skills

2. Sustituye "192.168.31.198" por la dirección IP real de tu reCamera Gimbal

3. Sustituye "recamera.1" por la contraseña real de tu reCamera Gimbal

:::

```json
"skills": {
    "load": {
      "extraDirs": [
        "C:\\Users\\seeed\\.openclaw\\workspace\\skills"
      ]
    },
    "entries": {
      "recamera-gimbal": {
        "enabled": true,
        "env": {
          "RECAMERA_IP": "192.168.31.198",
          "RECAMERA_PASS": "recamera.1"
        }
      }
    }
  }
```

:::note
Si quieres escribir tus propias Skills, consulta la [specification](https://agentskills.io/specification#allowed-tools-field) oficial de redacción
:::

## 3. Abre SenseCraft para desplegar la aplicación

### 3.1 Configurar reCamera Gimbal

Primero, no conectes la alimentación de reCamera Gimbal, conecta directamente el Type-C al ordenador y accede a 192.168.42.1. Después de entrar, haz clic en "Login to SenseCraft" en la esquina inferior izquierda. Después de iniciar sesión, conéctale WiFi para asegurarte de que el WiFi conectado sea el mismo que el de tu ordenador. Luego comprueba la dirección IP de reCamera Gimbal, copia la dirección IP y accede a ella para ver si se puede acceder con normalidad.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_5.png" /></div>

### 3.2 Despliegue de la aplicación

Abre la [Application](https://sensecraft.seeed.cc/ai/application) de SenseCraft, busca el proyecto llamado "OpenClaw & reCamera Gimbal", haz clic en "Deploy Application"-"Visit Workspace Via USB", y el flujo de trabajo que veas después del despliegue debería ser como se muestra en la siguiente figura:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_4.png" /></div>

## 4. Probar el motor y hacer fotos

A continuación, desconecta el cable Type-C, conecta la fuente de alimentación de 12 V, espera a que se complete la calibración automática de reCamera Gimbal, vuelve a visitar la dirección IP anterior en el navegador, entra en la interfaz de reCamera Gimbal y asegúrate de que Node-RED haya comenzado a funcionar con normalidad. A continuación, probamos si las dos interfaces HTTP expuestas pueden funcionar con normalidad:

### 4.1 Probar el motor

Primero prueba si el motor del gimbal funciona con normalidad, por favor sustituye "`<DEVICE_IP>`" por la IP real de tu reCamera Gimbal:

```http
http://<DEVICE_IP>:1880/api/gimbal?yaw=120&pitch=90
```

Si todo es normal, entonces cuando visites este sitio web, verás que el motor de reCamera Gimbal ha girado, y puedes sustituir 120 y 90 por otros ángulos.

### 4.2 Probar la foto

Luego prueba si la foto funciona con normalidad, por favor sustituye "`<DEVICE_IP>`" por la IP real de tu reCamera Gimbal:

```http
http://<DEVICE_IP>:1880/api/photo
```

Si todo está bien, entonces cuando visites esta URL, podrás ver en la página web la imagen que reCamera Gimbal acaba de tomar.

:::note
Asegúrate de que reCamera Gimbal y tu ordenador estén conectados a la misma red WiFi
:::

## 5. Prueba en OpenClaw

Antes de la prueba necesitamos confirmar dos cosas:

### 5.1 Asegúrate de que tus Skills estén configuradas correctamente

Si has configurado las Skills según el paso 2, en la interfaz de OpenClaw, después de hacer clic en "Skills" en el lado izquierdo y luego hacer clic en "WORKSPACE SKILLS", deberías poder ver el "recamera-gimbal" que has configurado localmente"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_6.png" /></div>

### 5.2 Asegúrate de que tu modelo esté configurado correctamente

Asegúrate de que tu modelo esté configurado correctamente. Después de hacer clic en "Agent" en el lado izquierdo, puedes ver el modelo que has configurado en "Primary model". Aquí estoy usando el modelo GLM4.7.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_7.png" /></div>

### 5.3 Empieza a controlar tu reCamera con OpenClaw Gimbal

Por favor dile directamente a OpenClaw en la ventana de chat "turn on the LED of the camera", "look around to see if there is anyone", "record a 5s audio and play it" y otras tareas, o puedes probar tareas más complicadas, como "turn on the sentinel mode of the reCamera (quickly scan around, one scan cycle, that is, one scan circle is controlled within 6s), if there is a person wearing a white T-shirt in the picture, you will turn on the camera light and play test.wav audio, analyze the content of the picture and save the picture to the local", y luego espera un momento para ver la reacción de reCamera Gimbal.

:::note
La ejecución de tareas por parte de OpenClaw será muy lenta, y las instrucciones complejas tardarán unos dos o tres minutos en mostrar el efecto, así que espera pacientemente, esto es normal.
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
