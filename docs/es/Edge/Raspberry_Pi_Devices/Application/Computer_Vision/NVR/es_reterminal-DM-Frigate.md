---
description: Frigate integrándose con reTerminal DM
title: Frigate integrándose con reTerminal DM
keywords:
  - reTerminal Dm
  - Getting started
  - Frigate
  - Home assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal-DM-Frigate
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 8/25/2023
  author: Kasun Thushara
---

## Introducción

En la era actual de integración perfecta de la tecnología inteligente en nuestras vidas diarias, la demanda de automatización del hogar inteligente y segura es más fuerte que nunca. Imagina un escenario donde tu hogar no solo satisface tus necesidades sino que también detecta y te alerta rápidamente sobre actividades sospechosas en tu patio trasero. Aquí es donde la combinación de hardware avanzado y software de código abierto toma el protagonismo. En este artículo, exploraremos la sinergia entre Seeed Studio reTerminalDM, Home Assistant OS, y el complemento Frigate con Coral AI USB TPU. Este trío ofrece una oportunidad única para una configuración de automatización del hogar centralizada, consciente de la privacidad y impulsada por IA que mejora tu estilo de vida mientras garantiza la seguridad. Únete a nosotros para profundizar en las ventajas y el potencial ilimitado de esta fusión a la vanguardia de la vida inteligente moderna.

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate emerge como un notable grabador de video en red (NVR) de código abierto diseñado para la detección de objetos en tiempo real impulsada por IA. La característica distintiva de Frigate radica en su procesamiento localizado, asegurando que todos los cálculos tengan lugar en tu hardware personal. Este enfoque garantiza la máxima privacidad, ya que las transmisiones de tus cámaras nunca atraviesan fuera de los límites de tu hogar. Con Frigate, obtienes una herramienta poderosa que te permite mejorar la seguridad y el monitoreo a través de tecnología avanzada de reconocimiento de objetos mientras mantienes el control completo sobre tus datos.

### Home assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS es un sistema operativo diseñado específicamente para ejecutar Home Assistant, una plataforma de automatización del hogar de código abierto. Home Assistant te permite controlar y automatizar varios dispositivos inteligentes y servicios en tu hogar.
Home Assistant OS proporciona un entorno optimizado y simplificado para ejecutar Home Assistant. Viene preinstalado con los componentes necesarios para configurar y gestionar tus dispositivos domésticos inteligentes, integrarse con diferentes protocolos y plataformas, y crear rutinas de automatización.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí. Y también necesitas cámaras IP que sean compatibles con este proyecto. Puedes ver esas cámaras compatibles desde el [sitio oficial](https://docs.frigate.video/frigate/hardware) de Frigate.

### Preparación del hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminal-dm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

Teniendo en cuenta los requisitos de energía del acelerador Coral USB, se recomienda encarecidamente utilizar un concentrador USB de alta calidad con alimentación propia. Este concentrador proporcionará suficiente energía para satisfacer las necesidades del acelerador Coral, garantizando un rendimiento estable y óptimo.

:::

### Preparación del software

Recomendamos instalar la última versión del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/).

## Instalar SO Home Assistant Supervised en Raspberry pi

Instalar Home Assistant Supervised en tu reTerminal DM basado en Raspberry Pi CM4 es un proceso integral que combina varios pasos críticos para asegurar una configuración exitosa.

:::note
En algunos pasos, si estás conectado por Wi-Fi, puedes perder la conexión. Se recomienda usar una conexión LAN en su lugar.
:::

### Paso 1: Mejora tu Sistema

- **Comienza ejecutando un registro de actualización del sistema usando el siguiente comando:**

```sh
sudo apt update
```

- **A continuación, procede a instalar las siguientes dependencias:**

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **Reparar instalaciones dañadas**

```sh
sudo apt --fix-broken install
```

- **Reiniciar reTerminal**

```sh
sudo reboot
```

### Paso 2: Integrar Docker

Instalar Docker es fundamental. Es vital evitar instalar Portainer, ya que podría impactar negativamente el proceso de instalación general. Ejecuta los siguientes comandos:

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **Agregar usuario Docker al sistema**

```sh
sudo usermod -aG docker pi
```

- **Verificar si Docker está funcionando correctamente**

```sh
docker --version
```

### Paso 3: Abordar la Versión de CGroup

- **La compatibilidad del Supervisor de Home Assistant depende de un Docker CGroup v1 específico. Para garantizar esta compatibilidad, es necesario realizar los siguientes cambios:**

```sh
sudo nano /etc/default/grub
```

- **Añade esta línea y guárdala.**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Abrir este archivo**

```sh
sudo nano /boot/cmdline.txt
```

- **Agrega esta línea al final de la frase y guárdala.**

```sh

systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### Paso 4: Instalar OS-Agent (ver. 1.3)

Descarga el OS-Agent adecuado basado en la arquitectura de tu CPU, y luego procede a instalarlo: **Para Raspberry Pi de 64 bits el SO es linux aarch64**.

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **Instalar el Agente de Home Assistant OS**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **Asegúrate de que la instalación fue exitosa ejecutando**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### Paso 5: Adquirir Home Assistant Supervised

- **Descargar el paquete más reciente de Home Assistant Supervised:**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### Paso 6: Instalación Supervisada de Home Assistant

Importante: Este paso requiere una conexión LAN, ya que el Wi-Fi podría interrumpirse durante el proceso:

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### Paso 7: Solucionar Errores de Instalación

En caso de errores de instalación, rectifícalos ejecutando:

```sh
sudo apt --fix-broken install
```

Al corregirse exitosamente, aparecerá una pantalla azul que te permitirá seleccionar el modelo **Raspberry Pi4 64**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### Paso 8: Finalizar la Instalación y Configuración de Wi-Fi

Permite unos minutos para que Home Assistant se vuelva accesible en http://[tu_IP_raspberry]:8123.
:::note
Si encuentras problemas de conectividad Wi-Fi después de reiniciar, sigue estos pasos:
:::


- Para habilitar 'dhcpcd', ejecuta el siguiente comando:

```sh
sudo systemctl enable dhcpcd
```

- Deshabilita el servicio de red con el comando:

```sh
sudo systemctl disable networking
```

- Reinicia la Raspberry Pi para aplicar los cambios:

```sh
sudo reboot
```

:::note
Para resolver los "problemas del Network Manager" (encontrados en Configuración), puedes solucionar la situación iniciando y luego habilitando el Network Manager. Utiliza el siguiente comando para lograrlo:
:::

```sh
sudo systemctl enable NetworkManager
```

## Instalar Broker MQTT

- Navega a Configuración > Complemento > Haz clic en Broker MQTT.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- Presiona instalar y después de la instalación habilita el inicio en el arranque

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- Navega a Configuración > Dispositivos y Servicios > Configurar Broker MQTT.

## Instalar Frigate (Acceso Completo)

### Paso 1: Clonar Repositorio

- Navega a Configuración > Complemento > Tienda de Complementos > Menú > repositorios

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- Añade la URL del repositorio: https://github.com/blakeblackshear/frigate-hass-addons. Entonces podrás ver el complemento Frigate en la Tienda de Complementos.

### Paso 2: Instalar el Complemento NVR Frigate de Acceso Completo

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### Paso 3: Crear frigate.yml

- Para proceder con este paso, necesitarás un editor de archivos. Accede a la opción "Explorar Sistema de Archivos" ubicada en la esquina superior izquierda del editor de archivos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- Crea un nuevo archivo llamado frigate.yml

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- A continuación, puedes utilizar el siguiente fragmento de código para evaluar si puedes recuperar exitosamente las transmisiones de video RTSP de tus cámaras IP. Copia el código proporcionado y pégalo en tu archivo `frigate.yml`. Se recomienda encarecidamente seguir las pautas proporcionadas en el [sitio oficial de Frigate](https://docs.frigate.video/guides/getting_started) para obtener instrucciones completas. Recuerda reemplazar los marcadores de posición con tu nombre de cámara específico, resolución e IP de transmisión de la cámara. Esta personalización asegurará una integración precisa con la configuración de tu cámara.

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: False # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

### Paso 4: Iniciar frigate

- Antes de iniciar Frigate, asegúrate de que el modo de protección esté deshabilitado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- Una vez que inicies Frigate, es importante monitorear el registro de cerca para cualquier problema potencial que pueda surgir. Si no han surgido problemas, procede a hacer clic en el icono de Frigate ubicado en la barra lateral. Esta acción te otorgará acceso a la interfaz y funcionalidades de Frigate.

### Paso 5: Verificar el Stream

Si todo funciona correctamente obtendrás el stream.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### Paso 6: Habilitar detección de objetos

Para lograr esto, el Coral USB Accelerator Edge TPU es esencial. Aunque puedes conectarlo directamente a un puerto USB, puede haber casos donde no funcione como se espera debido a sus mayores requerimientos de energía. Por lo tanto, recomendamos encarecidamente utilizar un hub USB confiable con alimentación. Esto asegurará una entrega de energía estable y un rendimiento óptimo para el Coral USB Accelerator, mejorando su compatibilidad y efectividad.

- Cambia el archivo frigate.yml con el código fuente de abajo

```sh
mqtt:
  enabled: False
  
detectors: # <---- add detectors
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: True # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

- Reinicia el complemento Frigate. Luego haz clic en el icono de Frigate en la barra lateral. A continuación, haz clic en la transmisión y tendrás una vista completa de la transmisión. Por defecto puedes detectar personas y puedes dibujar un cuadro delimitador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

Y aquí está la demostración

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" /></center>

Puedes detectar muchos objetos diferentes y enviar notificaciones a tu teléfono móvil también. Para eso necesitas cambiar el frigate.yml. Así que te recomendamos encarecidamente que eches un vistazo rápido a las siguientes guías.

## Recursos

- **[Página Web]** [Documentación Oficial de Frigate](https://docs.frigate.video/)

- **[Página Web]** [Foro de Home Assistant](https://community.home-assistant.io/)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
