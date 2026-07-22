---
title: Despliegue local de Picoclaw en reCamera
description: Este caso de aplicación demuestra el proceso y la aplicación de desplegar Picoclaw localmente en reCamera.
keywords:
  - reCamera
  - Edge AI
slug: /recamera_picoclaw_bak
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif
sidebar_position: 11
last_update:
  date: 2026-06-24
  author: Sizhao zhou
createdAt: '2026-06-24'
updatedAt: '2026-06-24'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/recamera_picoclaw_bak/
---


## 1. Introducción
Creemos que muchas personas quieren implementar sus propias ideas en reCamera pero no pueden hacerlo debido a la falta de habilidades de programación. Aunque proporcionamos node-red, que es muy amigable para principiantes, sus funciones son relativamente simples y no pueden satisfacer requisitos complejos. Para abordar estas necesidades, ofrecemos un caso de despliegue local de Picoclaw en reCamera. Con Picoclaw, puedes dejar que escriba código y depure dispositivos por ti, sin necesidad de hacerlo tú mismo. Por supuesto, no solo puede ayudarte a escribir código, sino también controlar directamente los módulos de hardware integrados. ¡Hay muchas más formas de uso esperando a que las explores!

## 2. Preparación de hardware

- Un reCamera Gimbal
- Un ordenador

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

## 3. Demostración de efectos
### 3.1 Hacer que el gimbal observe los alrededores 
![look around](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_lookaround.gif)
### 3.2 Controlar el hardware integrado mediante lenguaje natural - Controlar la luz LED
![led](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif)
### 3.3 Dejar que el agente escriba y ejecute scripts automáticamente
![script](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_write_code.gif)

## 4. Tutorial de despliegue
Dado que ***openclaw*** requiere una gran cantidad de memoria (>=2GB) para ejecutarse, elegimos desplegar una versión ligera de Claw, llamada ***picoclaw***, que solo necesita 10MB de memoria para ejecutarse y, por lo tanto, es muy adecuada para este proyecto.
### 4.1 Descargar el código fuente de picoclaw
Haz clic en el enlace para descargar el paquete comprimido del código fuente de picoclaw (compatible con reCamera con arquitectura riscv64): [paquete comprimido del código fuente de picoclaw](https://github.com/sipeed/picoclaw/releases/download/nightly/picoclaw_Linux_riscv64.tar.gz)


### 4.2 Conectarse por SSH a reCamera
Después de conectarte a reCamera, introduce los siguientes comandos para acceder al directorio ***userdata*** y crear una carpeta para almacenar el código fuente de picoclaw.

  ```
  ssh recamera@[IP address of reCamera]
  cd /userdata
  mkdir picoclaw
  ```

### 4.3 Subir el paquete comprimido del código fuente a reCamera
Sube el paquete comprimido del código fuente de picoclaw a la carpeta ***/userdata/picoclaw/*** de reCamera.

  ```
  scp picoclaw_Linux_riscv64.tar.gz recamera@[IP address of reCamera]:/userdata/picoclaw
  ```

### 4.4 Descomprimir el paquete comprimido del código fuente
Introduce el siguiente comando en reCamera para descomprimir el paquete comprimido del código fuente de picoclaw.

  ```
  tar -axvf picoclaw_Linux_riscv64.tar.gz
  ```

### 4.5 Iniciar la interfaz web de picoclaw
Introduce el siguiente comando en reCamera para iniciar la interfaz web de picoclaw.

  ```
  ./picoclaw-launcher -no-browser -public
  ```
Después de que el servicio se inicie, abre un navegador y visita ***http://[IP address of reCamera]:18800***, como se muestra en la figura siguiente.
![ip_login](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_login.png)


## 5. Configurar el modelo grande de picoclaw
Después de establecer la contraseña en la interfaz web, configura el modelo grande de picoclaw siguiendo los pasos a continuación.

### 5.1  Encuentra la opción ***Model*** en la barra lateral izquierda y haz clic para entrar.

### 5.2 Desplázate hacia abajo para encontrar el modelo ***deepseek-chat*** y haz clic en el botón ***Edit***, como se muestra en la figura siguiente.
![model_edit](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_model_edit.png)

### 5.3 Introduce tu API Key en el cuadro de entrada API-KEY y haz clic en el botón ***Save*** para guardar la configuración.

### 5.4 Después de una configuración exitosa, haz clic en el botón ***Start Service*** en la esquina superior derecha para iniciar el modelo.
![start_service](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_server_start.png)

### 5.5 Haz clic en la opción ***Chat*** en la parte izquierda para iniciar una conversación con el modelo.

## 6. Conectarse al robot de QQ
Después de establecer la contraseña en la interfaz web, conéctate al robot de QQ siguiendo los pasos a continuación.
### 6.1 Primero, ve a la [Plataforma Abierta de QQ](https://q.qq.com/#/) e inicia sesión en tu cuenta de QQ.

### 6.2  Haz clic en la opción ***Robot*** en la parte izquierda y haz clic en el botón ***Create Robot***, como se muestra en la figura siguiente.
![create_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_creat_qq_bot.png)

### 6.3 Después de crear el robot, configúralo según el tutorial y obtén el ID de Robot y la Clave Secreta correspondientes. Luego vuelve a la interfaz web, encuentra la opción ***Channel*** en la parte izquierda, desplázate hacia abajo para encontrar ***QQ***, haz clic para conectar, rellena el ID y la Clave Secreta y haz clic en Save.
![qq_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_config_qq.png)



## 7. Crea tu propia skill
En el directorio /home/recamera, puedes encontrar la carpeta ***.picoclaw***. Después de entrar en la carpeta, puedes encontrar ***workspace*** y luego una carpeta ***skill*** dentro de ella; aquí es donde creas tus propias skills.

### 7.1 Formato de creación de skill
```
skill-name/
├── SKILL.md            # Required - Main skill file
├── scripts/            # Optional - Executable scripts
├── references/         # Optional - Reference documents (loaded on demand)
└── assets/             # Optional - Resource files for output (templates, images, etc.)
```


## 8. Importar skills de reCamera
Hemos creado varias skills sencillas específicamente adaptadas para reCamera--->[Enlace de skills](https://drive.google.com/drive/folders/1bh-GXnF8QEMQW8UpO1aNcdOcblAF6B5H)
Verás los tres archivos que se muestran en la figura siguiente:
![skill_files](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_skill.png)

- ***recamera_read_manual***
Lee los recursos de hardware de reCamera, similar a una base de conocimiento para reCamera; simplemente colócalo en la carpeta ***skill***.

- ***recamera_video_record***
Una skill para grabar vídeos y tomar fotos (implementada sobre node-red); simplemente colócala en la carpeta ***skill***.

- ***SKILL.md***
Archivo principal que describe los recursos generales de hardware de reCamera Gimbal; colócalo en ***/skill/hardware*** para sobrescribir el archivo original.


## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Proporcionamos múltiples métodos de soporte para garantizar que tu experiencia usando nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>