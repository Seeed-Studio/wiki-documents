---
description: Integración de Frigate con reTerminal
title: Integración de Frigate con reTerminal
keywords:
  - reTerminal
  - Frigate
  - Home assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal_frigate_spanish
last_update:
  date: 02/17/2025
  author: Erick González
---


## Introducción

En la era actual de integración fluida de tecnología inteligente en nuestras vidas diarias, la demanda de automatización del hogar inteligente y segura es más fuerte que nunca. Imagina un escenario donde tu hogar no solo satisface tus necesidades, sino que también detecta y te alerta sobre actividades sospechosas en tu jardín. Aquí es donde la combinación de hardware avanzado y software de código abierto juega un papel fundamental. En este artículo, exploraremos la sinergia entre Seeed Studio reTerminal, Home Assistant OS y el complemento Frigate con Coral AI USB TPU. Este trío ofrece una oportunidad única para una configuración centralizada, consciente de la privacidad y dirigida por IA para la automatización del hogar, mejorando tu estilo de vida mientras asegura tu seguridad. Acompáñanos a explorar las ventajas y el potencial ilimitado de esta fusión en la vanguardia de la vida inteligente moderna.

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate surge como un notable grabador de video en red (NVR) de código abierto, diseñado para detección de objetos en tiempo real impulsada por IA. La característica distintiva de Frigate radica en su procesamiento localizado, asegurando que todos los cálculos se realicen en tu hardware personal. Este enfoque garantiza la máxima privacidad, ya que las transmisiones de tus cámaras nunca salen fuera de los límites de tu hogar. Con Frigate, obtienes una herramienta poderosa que te permite mejorar la seguridad y el monitoreo a través de tecnología avanzada de reconocimiento de objetos, manteniendo el control total sobre tus datos.

### Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS es un sistema operativo diseñado específicamente para ejecutar Home Assistant, una plataforma de automatización del hogar de código abierto. Home Assistant te permite controlar y automatizar varios dispositivos inteligentes y servicios en tu hogar. Home Assistant OS proporciona un entorno optimizado para ejecutar Home Assistant. Viene preinstalado con los componentes necesarios para configurar y gestionar tus dispositivos inteligentes, integrar diferentes protocolos y plataformas, y crear rutinas de automatización.


## Empezando
Antes de comenzar con este proyecto, es posible que necesites preparar tu hardware y software de antemano, tal como se describe aquí. También necesitarás cámaras IP compatibles con este proyecto. Puedes ver las cámaras compatibles en el [sitio oficial de Frigate](https://docs.frigate.video/frigate/hardware).

### Preparación del hardware
<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

Teniendo en cuenta los requisitos de potencia del acelerador USB Coral, recomendamos encarecidamente invertir en un hub USB de alta calidad. Este hub proporcionará la potencia suficiente para satisfacer las necesidades del acelerador Coral, asegurando un rendimiento estable y óptimo.

:::
### Preparación del software

Recomendamos instalar la última versión de Raspberry Pi 64 bit OS desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, por favor sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

## Instalar Home Assistant Supervised OS en Raspberry Pi.

Instalar Home Assistant Supervised en tu Raspberry Pi 4 es un proceso completo que abarca varios pasos clave para asegurar una instalación exitosa.

:::note
En algunos pasos, si estás conectado a través de Wi-Fi, puedes perder la conexión. Se recomienda utilizar una conexión LAN en su lugar.

:::

### Paso 1: Mejora tu sistema

- **Comienza ejecutando un registro de actualización del sistema con el siguiente comando:**

```sh
sudo apt update
```

- **Luego, procede a instalar las siguientes dependencias:**

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

- **Arregla las instalaciones rotas**

```sh
sudo apt --fix-broken install
```

- **Reinicia el reTerminal**

```sh
sudo reboot
```

### Paso 2: Integrar Docker
Instalar Docker es fundamental. Es importante evitar instalar Portainer, ya que podría afectar negativamente el proceso de instalación en general. Ejecuta los siguientes comandos:

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **Añade el usuario de Docker al sistema**

```sh
sudo usermod -aG docker pi
```

- **Verifica si Docker está funcionando correctamente**

```sh
docker --version
```

### Paso 3: Abordando la versión de CGroup

- **La compatibilidad del Supervisor de Home Assistant depende de un CGroup v1 específico de Docker. Para asegurar esta compatibilidad, se deben realizar los siguientes cambios:**

```sh
sudo nano /etc/default/grub
```

- **Añade esta línea y guárdala.**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Abre este archivo**
```sh
sudo nano /boot/cmdline.txt
```

- **Añade esta línea al final de la frase y guárdala.**

```sh

systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### Paso 4: Instalar OS-Agent (ver. 1.3)
Descarga el OS-Agent adecuado según la arquitectura de tu CPU y luego procede a instalarlo: **Para Raspberry Pi 64 bit OS es linux aarch64**.

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **Instalar el agente de Home Assistant**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **Asegúrate de que la instalación fue exitosa ejecutando**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### Paso 5: Adquirir Home Assistant Supervised

- **Descarga el paquete más reciente de Home Assistant Supervised:**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### Paso 6: Instalación de Home Assistant Supervised

Importante: Este paso requiere una conexión LAN, ya que el Wi-Fi podría interrumpirse durante el proceso:

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### Paso 7: Abordar errores de instalación

En caso de errores de instalación, corrígelos ejecutando:

```sh
sudo apt --fix-broken install
```

Una vez corregidos los errores, aparecerá una pantalla azul que te permitirá seleccionar el modelo **Raspberry Pi4 64**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### Paso 8: Finalizar la instalación y configurar Wi-Fi

Espera unos minutos para que Home Assistant sea accesible en http://[tu_raspberry_IP]:8123. 

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

- Reinicia el Raspberry Pi para aplicar los cambios:
```sh
sudo reboot
```

:::note

Para resolver los "problemas del Administrador de Red," (encuéntralo en la configuración) puedes solucionar el problema iniciando y luego habilitando el Administrador de Red. Utiliza el siguiente comando para hacerlo:

:::
```sh
sudo systemctl enable NetworkManager
```

## Instalar MQTT Broker

- Navega a Configuración > Complemento  > Haz clic en MQTT Broker.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- Haz clic en instalar y, después de la instalación, habilita el inicio automático al arrancar.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- Navega a Configuración > Dispositivos y Servicios  > Configura MQTT Broker.

## Instalar Frigate (Acceso Completo)

### Paso 1: Clonar el Repositorio

- Navega a Configuración > Complemento  > Tienda de complementos > Menú > Repositorios
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- Añade la URL del repositorio: https://github.com/blakeblackshear/frigate-hass-addons. Entonces verás el complemento Frigate en la Tienda de complementos.

### Paso 2: Instalar el complemento NVR Frigate de Acceso Completo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### Paso 3: Crear frigate.yml 

- Para continuar con este paso, necesitarás un editor de archivos. Accede a la opción "Explorar sistema de archivos" ubicada en la esquina superior izquierda del editor de archivos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- Crea un nuevo archivo llamado frigate.yml

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- Luego, puedes usar el siguiente fragmento de código para evaluar si puedes recuperar correctamente las transmisiones de video RTSP de tus cámaras IP. Copia el código proporcionado y pégalo en tu archivo `frigate.yml`. Se recomienda seguir las pautas proporcionadas en el [sitio oficial de Frigate](https://docs.frigate.video/guides/getting_started) para instrucciones completas. Recuerda reemplazar los marcadores de posición con el nombre de tu cámara, resolución y IP del flujo de cámara. Esta personalización garantizará una integración precisa con tu configuración de cámaras.

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ Nombre de la cámara
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- El flujo que deseas usar para detección
          roles:
            - detect
    detect:
      enabled: False # <---- desactiva la detección hasta que tengas un flujo de cámara funcional
      width: 1280 # <---- actualiza según la resolución de tu cámara
      height: 720 # <---- actualiza según la resolución de tu cámara
      fps: 5
```

### Paso 4: Iniciar Frigate 
- Antes de iniciar Frigate, asegúrate de que el modo de protección esté desactivado. 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- Una vez que inicies Frigate, es importante monitorear el registro de posibles problemas. Si no surgen problemas, procede a hacer clic en el ícono de Frigate en la barra lateral. Esto te dará acceso a la interfaz y funcionalidades de Frigate.

### Paso 5: Verifica el flujo

Si todo funciona correctamente, verás el flujo. 
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### Paso 6: Habilitar la detección de objetos

Para lograr esto, es esencial el Coral USB Accelerator Edge TPU. Mientras que puedes conectarlo directamente a un puerto USB, podría no funcionar como se espera debido a sus mayores requerimientos de energía. Por lo tanto, recomendamos encarecidamente utilizar un hub USB confiable. Esto asegurará un suministro de energía estable y un rendimiento óptimo para el Coral USB Accelerator, mejorando su compatibilidad y efectividad.

- Modifica el archivo frigate.yml con el siguiente código fuente

```sh
mqtt:
  enabled: False
  
detectors: # <---- agrega detectores
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ Nombre de la cámara
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- El flujo que deseas usar para detección
          roles:
            - detect
    detect:
      enabled: True # <---- habilita la detección
      width: 1280 # <---- actualiza según la resolución de tu cámara
      height: 720 # <---- actualiza según la resolución de tu cámara
      fps: 5
```

- Reinicia el complemento Frigate. Luego haz clic en el ícono de Frigate en la barra lateral. Luego haz clic en el flujo y tendrás la vista completa del flujo. Por defecto puedes detectar personas y dibujar un cuadro delimitador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

Y aquí está la demo

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" /></center>

Puedes detectar muchos objetos diferentes y también enviar notificaciones a tu teléfono móvil. Para eso, necesitarás cambiar el archivo frigate.yml. Te recomendamos que eches un vistazo a las siguientes guías. 

## Recursos

- **[Página Web]** [Documentación oficial de Frigate](https://docs.frigate.video/)

- **[Página Web]** [Foro de Home Assistant](https://community.home-assistant.io/)

# Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
