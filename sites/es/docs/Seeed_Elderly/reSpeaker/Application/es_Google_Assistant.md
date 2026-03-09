---
description: Google Assistant para reSpeaker
title: Google Assistant para reSpeaker
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Google_Assistant
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Google_Assistant/
---

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg)

Esta wiki es para ReSpeaker Core v2.0, te recomendamos leer primero la [Wiki de ReSpeaker Core v2.0](https://wiki.seeedstudio.com/es/ReSpeaker_Core_v2.0/#preparation).

## Antes de comenzar

Necesitas hacer las siguientes preparaciones:

- ReSpeaker Core v2.0 con la imagen más reciente
- Red Wi-Fi (asegúrate de poder hacer ping a google con esta red)
- PC o Mac
- Un cable Micro-USB
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Asumimos que has leído la [Preparación](https://wiki.seeedstudio.com/es/ReSpeaker_Core_v2.0/#preparation) y ya has configurado el WiFi y el Serial.

Ahora vamos a jugar 😃

## Comenzando

### Hardware

Esta parte es simple y fácil, solo conecta tu ReSpeaker Core v2.0 a tu computadora a través del puerto `OTG`.

### Software

#### Configura tu Proyecto

- **Paso 1. Añade tu Proyecto**

Abre el [enlace](https://console.actions.google.com/?pli=1) para añadir tu proyecto.

:::note
    Si no tienes una cuenta de google, por favor inicia sesión en google.com primero. 
:::

Haz clic en `Add/Import project`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png)

Luego ingresa tu `Project name` y selecciona el `Country/region`. Después haz clic en `CREATE PROJECT` para continuar.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png)

- **Paso 2. Registrar Modelo**

Haz clic en `Connected properties ->DEVICE MODELS ->REGISTER MODEL` como se muestra en la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png)

Completa la información de tu producto. Luego haz clic en `REGISTER MODEL` para continuar.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png)

Solo haz clic en `NEXT`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png)

Por favor asegúrate de haber seleccionado esta opción `ALL 7 traits`, para que puedas activar todos los permisos. Luego haz clic en `SAVE TRAITS`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png)

Ahora por favor haz clic en el Nombre del Proyecto que acabas de crear. Para esta demostración, como puedes ver, usamos `ReSpeaker Core v2.0`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png)

Verás alguna información como se muestra en la siguiente imagen.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png)

Por favor anota el `Model Id` que es `respeaker-xxxx-respeaker-core-v2.0-xxxxx` en esta demostración, es importante y lo usarás más tarde.

Ahora descarguemos el archivo json. Haz clic en el botón en la esquina superior derecha, luego haz clic en `Download credentials.json` para descargar el archivo json a tu computadora.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png)

Luego usa [WinCP](https://winscp.net/eng/docs/lang:chs) u otras herramientas de transmisión para copiar el archivo json a tu ReSpeaker Core v2.0.
Por ejemplo, lo copiamos a la ruta `/home/respeaker`.

A continuación, por favor haz clic en el engranaje en la esquina superior izquierda, haz clic en `Project settings`, recuerda el `Project ID` que es `` en esta demostración.
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png)

Ok, revisemos de nuevo, en esta sección obtendrás dos IDs.

El Model ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

El Project ID `respeaker-440eb`

Se usarán más tarde.

#### Habilitar la API de Google Assistant

Habilita la API de Google Assistant en el proyecto que seleccionaste (consulta los [Términos de Servicio](https://developers.google.com/assistant/sdk/terms-of-service)). Necesitas hacer esto en la Consola de Cloud Platform.

Solo haz clic [Aquí](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview) para habilitar la API de Google Assistant.

Asegúrate de que los siguientes interruptores estén habilitados (azul):

- `Web & App Activity`
- Además, asegúrate de seleccionar la casilla `Include Chrome browsing history and activity from websites and apps that use Google services`.
- `Device Information`
- `Voice & Audio Activity`

#### Instalar el SDK y el Código de Ejemplo

Puedes consultar el [documento de google](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample) para más detalles sobre esta parte.

Puedes hacer esta parte con python2.7 y python3, en esta demostración usamos python2.7.

**Para python2.7**

**Paso 1.**

Ingresa el siguiente comando:

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate

```

**Paso 2. Obtener el paquete**

El paquete del SDK de Google Assistant contiene todo el código requerido para hacer funcionar Google Assistant en el dispositivo, incluyendo el código de ejemplo.

Instalar las dependencias del sistema del paquete:

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
Use pip to install the latest version of the Python package in the virtual environment:
sudo python -m pip install --upgrade google-assistant-sdk[samples]

```

**Paso 3. Generar credenciales**

Instala o actualiza la herramienta de autorización:

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

Crea la carpeta de destino.

```
sudo mkdir –p /path/to/assistant-sdk/
```

Usa el comando a continuación para copiar `credentials.json` a la ubicación de destino.

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

Toca el comando a continuación para obtener el código de generación de token.

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json

```

:::note
    Al usar el comando anterior, cada vez obtienes un código de autorización diferente. Por favor asegúrate
:::

Luego obtendrás el código, por favor copia el código después de la nota `Please visit this URL to authorize this application:`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png)

Pega el código en tu navegador de Internet, luego presiona la tecla `Enter`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png)

Si todo va bien, aparecerá la siguiente ventana. Elige tu cuenta de Google y selecciona `ALLOW`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png)

Ok, entonces, obtendrás el código de autorización como se muestra en la siguiente imagen.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png)

Copia este código en tu consola
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png)

Luego verás el aviso `credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json`. Eso significa que todo va bien hasta ahora.

#### Instalar Respeakerd

Ejecuta los comandos para instalar respeakerd

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# set respeakerd to pulse mode
sudo vim /etc/respeaker/respeakerd.conf 
# reboot to make it work
sudo reboot
```

#### Activar el Asistente de Google

¿Recuerdas los dos IDs que marcamos antes? Ahora es el momento de usarlos.

Cambia el comando `googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model` con tus propios IDs.

Para el comando anterior, cambia `my-dev-project` por tu `project-id` y cambia `my-model` por tu `Model ID`.

Para esta demostración, debería ser como

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png)
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
