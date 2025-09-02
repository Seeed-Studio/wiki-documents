---
description: Integración de Frigate con reTerminal DM
title: Integración de Frigate con reTerminal DM
keywords:
  - reTerminal DM
  - Primeros pasos
  - Frigate
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal-DM-Frigate
last_update:
  date: 04/06/2025
  author: Erick González
---

## Introducción

En la era actual de la integración perfecta de la tecnología inteligente en nuestra vida diaria, la demanda de una automatización del hogar inteligente y segura es más fuerte que nunca. Imagina un escenario en el que tu hogar no solo satisface tus necesidades, sino que además detecta y te alerta rápidamente sobre actividades sospechosas en tu patio trasero. Aquí es donde la combinación de hardware avanzado y software de código abierto toma el protagonismo. En este artículo, exploraremos la sinergia entre Seeed Studio reTerminal DM, Home Assistant OS y el complemento Frigate junto con el Coral AI USB TPU. Este trío ofrece una oportunidad única para una configuración centralizada, respetuosa con la privacidad y basada en IA, que mejora tu estilo de vida mientras garantiza la seguridad. Únete a nosotros para profundizar en las ventajas y el potencial ilimitado de esta fusión, a la vanguardia de la vida inteligente moderna.

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate surge como un notable grabador de video en red (NVR) de código abierto, diseñado para la detección de objetos en tiempo real mediante IA. La característica distintiva de Frigate reside en su procesamiento localizado, lo que garantiza que todos los cálculos se realicen en tu propio hardware. Este enfoque asegura la máxima privacidad, ya que las transmisiones de tus cámaras nunca salen del perímetro de tu hogar. Con Frigate, obtienes una herramienta poderosa que te permite mejorar la seguridad y el monitoreo mediante tecnología avanzada de reconocimiento de objetos, manteniendo el control total sobre tus datos.

### Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS es un sistema operativo diseñado específicamente para ejecutar Home Assistant, una plataforma de automatización del hogar de código abierto. Home Assistant te permite controlar y automatizar diversos dispositivos y servicios inteligentes en tu hogar.  
Home Assistant OS ofrece un entorno optimizado y simplificado para ejecutar Home Assistant. Viene preinstalado con los componentes necesarios para configurar y gestionar tus dispositivos inteligentes, integrarse con diferentes protocolos y plataformas, y crear rutinas de automatización.

## Primeros pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación, como se describe aquí. Además, necesitarás cámaras IP compatibles con este proyecto. Puedes ver las cámaras compatibles en el sitio [oficial de Frigate](https://docs.frigate.video/frigate/hardware).

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

Considerando los requerimientos de potencia del acelerador USB Coral, recomendamos encarecidamente invertir en un hub USB de alta calidad. Este hub proporcionará la energía suficiente para cubrir las necesidades del acelerador Coral, garantizando un rendimiento estable y óptimo.

:::
### Preparación del software

Se recomienda instalar la última versión del sistema operativo Raspberry Pi 64 bits desde su sitio oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos detallados en esta [guía](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/).

## Instalación de Home Assistant Supervised OS en Raspberry Pi

Instalar Home Assistant Supervised en tu reTerminal DM basado en Raspberry Pi CM4 es un proceso integral que combina varios pasos críticos para asegurar una configuración exitosa.

:::note
En algunos pasos, si estás conectado a través de Wi-Fi, podrías perder la conexión. Se recomienda utilizar una conexión LAN en su lugar.
:::

### Paso 1: Mejorar el sistema

- **Comienza ejecutando una actualización del sistema con el siguiente comando:**

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
- **Repara las instalaciones dañadas**

```sh
sudo apt --fix-broken install
```

- **Reinicia el reTerminal**

```sh
sudo reboot
```

### Paso 2: Integrar Docker

La instalación de Docker es fundamental. Es vital evitar la instalación de Portainer, ya que podría afectar negativamente el proceso general de instalación. Ejecuta los siguientes comandos:

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
- **Agrega el usuario Docker al sistema**

```sh
sudo usermod -aG docker pi
```

- **Verifica que Docker funcione correctamente**

```sh
docker --version
```

### Paso 3: Abordar la versión de CGroup

- **La compatibilidad del Supervisor de Home Assistant depende de una versión específica de Docker CGroup v1. Para asegurar esta compatibilidad, es necesario realizar los siguientes cambios:**

```sh
sudo nano /etc/default/grub
```
- **Agrega esta línea y guarda los cambios.**

```sh
systemd.unified_cgroup_hierarchy=false
```
- **Abre este archivo**
```sh
sudo nano /boot/cmdline.txt
```
- **Agrega esta línea al final del contenido y guarda:**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### Paso 4: Instalar OS-Agent (versión 1.3)

Descarga el OS-Agent adecuado según la arquitectura de tu CPU, y luego procede a instalarlo: **Para Raspberry Pi 64 bits, el sistema es linux aarch64**.

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```
- **Instala el agente de Home Assistant OS**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```
- **Verifica que la instalación haya sido exitosa ejecutando:**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### Paso 5: Adquirir Home Assistant Supervised

- **Descarga el paquete más reciente de Home Assistant Supervised:**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### Paso 6: Instalación de Home Assistant Supervised

Importante: Este paso requiere una conexión LAN, ya que la conexión Wi-Fi podría interrumpirse durante el proceso:

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### Paso 7: Solucionar errores de instalación

En caso de errores durante la instalación, corrígelos ejecutando:

```sh
sudo apt --fix-broken install
```

Una vez solucionados los errores, aparecerá una pantalla azul que te permitirá seleccionar el modelo **Raspberry Pi4 64**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### Paso 8: Finalizar la instalación y configuración de Wi-Fi

Permite unos minutos para que Home Assistant sea accesible en http://[tu_IP_de_Raspberry]:8123.

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

Para resolver los "problemas del Network Manager" (encontrados en la configuración), puedes corregir la situación iniciando y habilitando posteriormente el Network Manager. Utiliza el siguiente comando para hacerlo:

:::
  
```sh
sudo systemctl enable NetworkManager
```

## Instalar MQTT Broker

- Navega a Configuración > Complementos > Haz clic en MQTT Broker.
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- Presiona instalar y, después de la instalación, habilita el inicio automático en el arranque.
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- Navega a Configuración > Dispositivos y Servicios > Configurar MQTT Broker.

## Instalar Frigate (Acceso Completo)

### Paso 1: Clonar el repositorio

- Navega a Configuración > Complementos > Tienda de Complementos > Menú > repositorios
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- Agrega la URL del repositorio: https://github.com/blakeblackshear/frigate-hass-addons. Luego, podrás ver el complemento Frigate en la Tienda de Complementos.

### Paso 2: Instalar el complemento NVR Frigate de Acceso Completo

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### Paso 3: Crear frigate.yml

- Para proceder con este paso, necesitarás un editor de archivos. Accede a la opción "Browse File System" ubicada en la esquina superior izquierda del editor de archivos.
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- Crea un nuevo archivo llamado `frigate.yml`
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- A continuación, puedes utilizar el siguiente fragmento de código para comprobar si puedes recuperar con éxito las transmisiones RTSP de tus cámaras IP. Copia el código proporcionado y pégalo en tu archivo `frigate.yml`. Se recomienda encarecidamente seguir las pautas indicadas en el [sitio oficial de Frigate](https://docs.frigate.video/guides/getting_started) para obtener instrucciones completas. Recuerda reemplazar los marcadores de posición con el nombre específico de tu cámara, resolución y la IP del stream de la cámara. Esta personalización garantizará una integración precisa con tu configuración de cámaras.

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ Nombra la cámara
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- La transmisión que deseas usar para la detección
          roles:
            - detect
    detect:
      enabled: False # <---- desactiva la detección hasta que tengas una transmisión de cámara funcional
      width: 1280 # <---- actualiza según la resolución de tu cámara
      height: 720 # <---- actualiza según la resolución de tu cámara
      fps: 5
```

### Paso 4: Iniciar Frigate

- Antes de iniciar Frigate, asegúrate de que el modo de protección esté deshabilitado.
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- Una vez inicies Frigate, es importante monitorear el registro de eventos para detectar cualquier posible inconveniente. Si no surge ningún problema, procede a hacer clic en el ícono de Frigate ubicado en la barra lateral. Esta acción te permitirá acceder a la interfaz y funcionalidades de Frigate.

### Paso 5: Verificar la transmisión

Si todo funciona correctamente, verás la transmisión.
  
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### Paso 6: Habilitar la detección de objetos

Para lograrlo, es esencial el Coral USB Accelerator Edge TPU. Aunque puedes conectarlo directamente a un puerto USB, podrían ocurrir casos en los que no funcione como se espera debido a sus mayores requerimientos de potencia. Por ello, recomendamos encarecidamente utilizar un hub USB de alta calidad. Esto asegurará una entrega de energía estable y un rendimiento óptimo para el Coral USB Accelerator, mejorando su compatibilidad y efectividad.

- Modifica el archivo `frigate.yml` con el siguiente código:

```sh
mqtt:
  enabled: False
  
detectors: # <---- agrega detectores
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ Nombra la cámara
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- La transmisión que deseas usar para la detección
          roles:
            - detect
    detect:
      enabled: True # <---- activa la detección una vez que tengas una transmisión funcional
      width: 1280 # <---- actualiza según la resolución de tu cámara
      height: 720 # <---- actualiza según la resolución de tu cámara
      fps: 5
```

- Reinicia el complemento de Frigate. Luego, haz clic en el ícono de Frigate en la barra lateral. A continuación, haz clic en la transmisión para obtener una vista completa. Por defecto, se detecta la presencia de personas y se dibuja un recuadro delimitador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

Y aquí tienes la demostración:

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" /></center>

Puedes detectar muchos objetos diferentes y enviar notificaciones a tu teléfono móvil. Para ello, es necesario modificar el archivo `frigate.yml`. Por ello, te recomendamos encarecidamente que consultes las siguientes guías.

## Recursos

- **[Página Web]** [Documentación oficial de Frigate](https://docs.frigate.video/)

- **[Página Web]** [Foro de Home Assistant](https://community.home-assistant.io/)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte en diversos canales, asegurando que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
