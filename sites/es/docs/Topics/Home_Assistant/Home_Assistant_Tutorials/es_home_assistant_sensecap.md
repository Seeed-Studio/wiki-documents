---
description: Integración de Home Assistant para Sensores SenseCAP LoRaWAN
title: Integración SenseCAP para Home Assistant
keywords:
- SenseCAP M2 Multi-Platform 
- Home Assistant
- LoRaWAN Sensors
slug: /es/home_assistant_sensecap
last_update:
  date: 10/19/2023
  author: JoJang
---

# Integra automáticamente todos tus Sensores SenseCAP a Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/overview.jpg" alt="pir" width={800} height="auto" /></p>

## 1. Configuración de SenseCAP M2 Multi-Platform

### 1.1 Configuración de Red LoRa

**Paso 1.** Haz clic en **LoRa** y elige **LoRa Network**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lora_network.png"/></div>

**Paso 2.** Elige el modo Local Network Server y completa la información de tu host MQTT **(Incluye tu host, nombre de usuario, contraseña y puerto).** Luego haz clic en **Save&&Apply**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lns.png"/></div>

En este punto hemos terminado la configuración del modo servidor, y configuraremos ChirpStack más adelante.

### 1.2 Configuración de ChirpStack

**Paso 1.** Abre la página de configuración de ChirpStack, luego **Haz clic en Device profiles**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles.png"/></div>

**Paso 2.** Haz clic en **Add device profile**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles_2.png"/></div>

**Paso 3.** Primero, completa el perfil del dispositivo según tu configuración SenseCAP: **Name, Region, MAC version**, y **Regional parameters revision**, en el cual el **Expected uplink interval** necesita cambiarse a **120**, y este puede ajustarse según tus propios requerimientos. En el segundo paso, hacemos clic en **Codec** en la parte superior
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_general.png"/></div>

**Paso 4.** En este paso, necesitamos elegir el decodificador según nuestro modelo de Sensor, el código se puede encontrar [Aquí](https://github.com/Seeed-Solution/SenseCAP-Decoder.git). Necesitamos seleccionar el código en la carpeta **TTN** como nuestro decodificador.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_decoder.png"/></div>

**Paso 5.** Siguiente paso, vamos a agregar dispositivos. Haz clic en **Applications**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_applications.png"/></div>

**Paso 6.** Haz clic en **Add applications**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_2.png"/></div>

**Paso 7.** Completa la información de la aplicación y haz clic en **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_3.png"/></div>

**Paso 8.** Usa la **APP SenseCAP Mate** para configurar el Sensor, Establece la **Platform** a **Other Platform**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/SenseCAP_Mate.jpg"/></div>

**Paso 9.** Haz clic en **Add device**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice.png"/></div>

**Paso 10.** Completa la información de tu dispositivo y haz clic en **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_2.png"/></div>

**Paso 11.** Haz clic en el **DevEUI** de tus dispositivos para cambiar de página
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_3.png"/></div>

**Paso 12.** Haz clic en **OTAA keys** e ingresa tu **Application key** del Sensor SenseCAP. Luego haz clic en **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_appkey.png"/></div>

**Paso 13.** Activa tu Sensor SenseCAP y espera a que se conecte automáticamente a LoRaWAN. Luego puedes ver los datos subidos por el sensor en **Events** y **LoRaWAN frames**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_data.png"/></div>

**Paso 14.** En este punto, hemos completado todas las configuraciones del gateway M2.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_updata.png"/></div>

:::tip
Cuando agregues un dispositivo al gateway M2 por **primera vez**, espera al menos **2-5** minutos hasta que los datos reportados por **up** puedan verse en **Events**. Entonces la inicialización de adición del dispositivo estará completa. Luego podemos configurar el complemento de Home Assistant.
:::

## 2. Configuración de Home Assistant

### 2.1 Instalación

**1.HACS**

- Primera instalación
  - 1.HACS > Integrations >
  - 2.Haz clic en la esquina superior derecha > Custom repositories ：

    ```
      Repository: https://github.com/Seeed-Solution/home-assistant-SenseCAP.git
      Category: Intergration
    ```

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_2.png"/></div>  

  - 3.Haz clic en ADD
  - 4.HACS > Integrations > ➕ EXPLORE & DOWNLOAD REPOSITORIES > Seeed Studio-SenseCAP > DOWNLOAD THIS REPOSITORY

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_3.png"/></div>  

- Actualizar componente
    > HACS > Integrations > [`Seeed Studio-SenseCAP`](https://my.home-assistant.io/redirect/hacs_repository/?owner=Seeed-Solution&repository=https%3A%2F%2Fgithub.com%2FSeeed-Solution%2Fhome-assistant-SenseCAP.git) > UPDATE / Redownload

**2.Instalar vía SSH & Web Terminal add-on**

1. Abre SSH Terminal e ingresa el siguiente comando:

```
cd ~/config/custom_components && git clone https://github.com/Seeed-Solution/home-assistant-SenseCAP.git && cd home-assistant-SenseCAP/custom_components && mv sensecap ../../ && cd ../../ && rm -r home-assistant-SenseCAP
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/Install.jpg"/></div>

2. Reiniciar HA core
3. Añadir Integración

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/add_intergration.png"/></div>

### 2.2 Configuración

1. Ingresa tu información de MQTT y haz clic en **ENVIAR**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_1.png"/></div>

2. Espera unos minutos (**El tiempo de Uplink depende de tu configuración en M2 Chirpstack y la APP SenseCAP Mate**), y haz clic en **Notificaciones** en la barra lateral izquierda. Entonces podemos ver que los Sensores SenseCAP han sido añadidos automáticamente a HA. Haz clic en **Échale un vistazo** y ve a la Integración

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_2.png"/></div>

3. Haz clic en uno de los dispositivos y podemos ver que todas las entidades han sido creadas automáticamente y añadidas al dispositivo. Haz clic en **AÑADIR AL PANEL** para añadir todas las entidades de todo el dispositivo directamente al panel a través de la forma de tarjetas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_3.png"/></div>

4. Ve a **Resumen** y podemos encontrar la tarjeta que acabamos de añadir

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_4.png"/></div>

5. Haz clic en **Editar panel**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_5.png"/></div>

6. Haz clic en **EDITAR** para editar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_6.png"/></div>

7. Podemos añadir una imagen de encabezado para decorar la tarjeta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_7.png"/></div>

8. Reemplaza la url por la tuya para mostrar tu imagen favorita

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_8.png"/></div>

9. Elige la entidad a modificar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_9.png"/></div>

10. Cambia el icono por uno que sea similar al tipo de entidad del sensor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_10.png"/></div>

11. Ahora hemos completado todo el proceso de configuración del plugin aquí. Posteriormente, puedes realizar optimizaciones personalizadas según tus propios requisitos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png"/></div>

12. Aquí están las representaciones visuales de los efectos en la página "Resumen" después de añadir varios modelos de sensores SenseCAP.

Lo mencionado anteriormente constituye el tutorial completo paso a paso para integrar SenseCAP en la plataforma Home Assistant. Home Assistant tiene la capacidad de integrar sin problemas diferentes tipos de dispositivos de varias plataformas en un solo ecosistema, facilitando la interoperabilidad entre plataformas. Esto tiene un significado profundo para la integralidad del ecosistema de hogar inteligente. Actualmente, Seeed también se ha convertido en parte de la extensa comunidad de Home Assistant, permitiendo la integración de nuestros dispositivos SenseCAP en la plataforma. ¡Creemos que este esfuerzo contribuirá al fortalecimiento y crecimiento adicional del ecosistema del Internet de las Cosas!

:::tip
**La integración de SenseCAP para Home Assistant es completamente de código abierto, y puedes descargar el proyecto de código fuente aquí**: [https://github.com/Seeed-Solution/home-assistant-SenseCAP.git](https://github.com/Seeed-Solution/home-assistant-SenseCAP.git).
:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
