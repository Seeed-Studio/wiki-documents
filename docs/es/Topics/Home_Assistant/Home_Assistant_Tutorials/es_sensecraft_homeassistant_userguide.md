---
description: Este es el Manual de Usuario de SenseCraft-HomeAssistant
title: Manual de Usuario de SenseCraft-HomeAssistant
keywords:
- home assistant 
slug: /es/sensecraft_homeassistant_userguide
last_update:
  date: 04/12/2024
  author: WenHao
---

# Manual de Usuario de SenseCraft-HomeAssistant

## Introducción

SenseCraft-HomeAssistant es un plugin para HomeAssistant. Al usar este plugin, los usuarios pueden iniciar sesión con la cuenta de la Plataforma de Datos SenseCraft (originalmente Plataforma en la Nube SenseCAP) para acceder a dispositivos en la nube y datos de sensores en la plataforma HomeAssistant, generando paneles de informes de dispositivos personalizados.

:::note
El plugin SenseCraft-HomeAssistant actualmente solo está disponible para instalación a través de HACS, que es una tienda de aplicaciones de terceros en el sistema HomeAssistant. Cuando las integraciones oficiales proporcionadas por HomeAssistant no son suficientes, HACS permite la fácil adición y gestión de integraciones de terceros.
:::

### 1.1 Pasos de Instalación para HACS

Dado que descargar el plugin HACS requiere comandos de terminal, primero debe instalar la aplicación Terminal.

1. **Habilitar el Modo Avanzado y Buscar la Aplicación Terminal**

- Abra el Modo Avanzado y navegue a los Complementos y busque la aplicación Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage2.png" alt="pir" width={800} height="auto" /></p>

- Si no puede encontrarla, primero verifique su conexión de red, luego intente reiniciar HomeAssistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage3.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage4.png" alt="pir" width={800} height="auto" /></p>

2. **Instalar, Iniciar y Abrir la Interfaz del Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage5.png" alt="pir" width={800} height="auto" /></p>

3. **Ingrese los siguientes comandos en el terminal para descargar el paquete de instalación de HACS** (detalles en [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download)):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage6.png" alt="pir" width={800} height="auto" /></p>

- Ingrese al directorio config:

```
cd config
```

- Descarga e instala HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

4. **Reiniciar Home Assistant**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage7.png" alt="pir" width={800} height="auto" /></p>

5. **Buscar e Instalar el Plugin HACS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage8.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage9.png" alt="pir" width={800} height="auto" /></p>

6. **Aparecerá un acuerdo de licencia; marca todos los acuerdos y envía**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage10.png" alt="pir" width={800} height="auto" /></p>

7. **Haz clic en el enlace para ir a la página de GitHub e iniciar sesión, luego ingresa el código de 8 letras de la parte inferior en la interfaz de GitHub**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage11.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage12.png" alt="pir" width={800} height="auto" /></p>

8. **Autorizar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage13.png" alt="pir" width={800} height="auto" /></p>

9. **En este punto, la tienda HACS está instalada**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage14.png" alt="pir" width={800} height="auto" /></p>

### 1.2 Instalación del Plugin SenseCraft

1. Después de completar los pasos anteriores, aparecerá un nuevo elemento "HACS" en la barra de menú izquierda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage15.png" alt="pir" width={800} height="auto" /></p>

2. Ingresa la URL del repositorio SenseCraft y la categoría, luego haz clic en el botón "Add":

:::note

- Repository: `https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git`
- Category: `Integration`

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage16.png" alt="pir" width={800} height="auto" /></p>

3. Ingresa 'sensecraft' en el cuadro de búsqueda y encuentra el plugin SenseCraft.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage17.png" alt="pir" width={800} height="auto" /></p>

4. Haz clic en el plugin SenseCraft, ve a la página de introducción del plugin y haz clic en el botón "Download".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage18.png" alt="pir" width={800} height="auto" /></p>

Esto completa la adición de SenseCraft a tu configuración actual de Home Assistant.

## Grove Vision AI(V2) con SenseCraft-HomeAssistant

Si acabas de adquirir el dispositivo sin firmware o modelo, necesitarás grabar primero el firmware y el modelo.

Si el dispositivo ya tiene firmware y modelo, puedes omitir el **paso 2**. Aquí te mostramos cómo verificar si tu dispositivo contiene firmware y modelos, ya que el firmware y los modelos vienen empaquetados juntos.

### 2.1 Verificar si el Dispositivo Contiene Firmware y Modelos

1. Abre el sitio web [https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) y conecta el dispositivo a tu computadora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage19.png" alt="pir" width={800} height="auto" /></p>

2. Conecta el Grove Vision AI V2 a la computadora

3. Cambia a la opción Grove Vision AI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage20.png" alt="pir" width={800} height="auto" /></p>

4. Si es la primera vez, se te solicitarán permisos, selecciona el dispositivo que aparece y haz clic en conectar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage21.png" alt="pir" width={800} height="auto" /></p>

5. Si la información e imágenes mostradas se parecen a las de la captura de pantalla, está funcionando correctamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage22.png" alt="pir" width={800} height="auto" /></p>

### 2.2 Grabación de Firmware y Modelos

Si no se detecta información del modelo y no hay vista previa en vivo, indica que el firmware y el modelo necesitan ser regrabados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage23.png" alt="pir" width={800} height="auto" /></p>

Elige uno de los modelos preestablecidos (por ejemplo, Detección de Género) y haz clic en 'Enviar'. Espera a que se complete la grabación del firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage24.png" alt="pir" width={800} height="auto" /></p>

### 2.3 Configuración del Servicio MQTT

#### Opción 1: Configuración del Servicio MQTT en Home Assistant

1. **Abre "Configuración > Complementos > Tienda de Complementos"** y encuentra la "Tienda de Complementos" en la parte inferior derecha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage25.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage26.png" alt="pir" width={300} height="auto" /></p>

2. Busca "mqtt" en la tienda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage27.png" alt="pir" width={800} height="auto" /></p>

3. Haz clic para instalar y configurar el servicio MQTT con nombre de usuario y contraseña:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage28.png" alt="pir" width={400} height="auto" /></p>

4. Navega a "Opciones > Inicios de sesión" y reemplaza el usuario o contraseña con tu nombre de usuario y contraseña deseados. Guarda la configuración.

:::note

- username: user
- password: passwd

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage29.png" alt="pir" width={800} height="auto" /></p>

:::note
Si no hay errores, significa éxito, si hay errores, puedes intentar desinstalar y reinstalar, y luego configurar nuevamente.
:::

#### Opción 2: Instalación del Servicio MQTT en Tu Propia Computadora

1. **Descarga EMQX** para tu sistema desde [https://www.emqx.com/en/downloads/broker/5.4.0](https://www.emqx.com/en/downloads/broker/5.4.0) y sigue las instrucciones dadas para tu SO.

2. Tomando MacOS como ejemplo:

Usando:

```
wget https://www.emqx.com/en/downloads/broker/5.4.0/emqx-5.4.0-macos13-amd64.zip
```

para descargar el paquete. E instalar EMQX:

```
mkdir -p emqx && unzip emqx-5.4.0-macos13-amd64.zip -d emqx
```

Finalmente ejecutando EMQX:

```
./emqx/bin/emqx start
```

3. Prueba si es funcional:

Ve a la [descarga de MQTT](https://mqttx.app/downloads) para descargar el terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage30.png" alt="pir" width={800} height="auto" /></p>

### Verificando el Éxito del Servicio MQTT

- Descarga el cliente MQTTX desde la [página de descarga de MQTTX](https://mqttx.app/downloads) para asegurar que tu servicio MQTT pueda ser accedido desde tu PC (ya sea desplegado en un servidor de red pública o dentro del mismo segmento de red que tu PC).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage31.png" alt="pir" width={800} height="auto" /></p>

- Conectarse exitosamente indica que no hay problemas.

### 2.4 Configurando WIFI y MQTT

#### ¿Por qué configurar estos dos?

Porque la operación de Grove Vision AI en Home Assistant se realiza a través de MQTT, y MQTT en sí mismo requiere una conexión de red, por lo que es necesario configurar WIFI. Ten en cuenta que no puedes seleccionar WIFI 5G. Ve a la página de configuración:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage32.png" alt="pir" width={800} height="auto" /></p>

Ingresa la información correspondiente y haz clic en guardar. Sin embargo, guardar aquí solo guarda la información, no se sabe si realmente se ha configurado correctamente. Necesitas cambiar de vuelta a la página Process:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage33.png" alt="pir" width={800} height="auto" /></p>

Cuando la IP Address muestra una dirección IP, significa que no hay problemas con el WIFI. El Service status debe ser como se muestra en la imagen para indicar operación normal. Ten en cuenta que si el WIFI no es normal, entonces MQTT definitivamente no será normal.

Al cambiar, inicialmente podría mostrar como desconectado y podrías necesitar esperar aproximadamente 10s, pero generalmente no más de 20s.

**No necesitas actualizar para ver el estado; el estado se actualizará automáticamente para mostrar el más reciente.**

### 2.5 Integrar en HA vía Discovery

Para que tu dispositivo aparezca en la sección de descubiertos, necesitas asegurar que el dispositivo y HA estén en el mismo segmento de red, de lo contrario, no aparecerá. Si no estás seguro sobre el segmento de red, puedes conectar la red de HA y el dispositivo al mismo WIFI o digamos, al mismo router vía ethernet.

Si acabas de completar la operación anterior, es mejor apagar el dispositivo y conectarlo de nuevo. Entra a la página de configuración:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34a.png" alt="pir" width={800} height="auto" /></p>

Entonces ves la siguiente página:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34.png" alt="pir" width={800} height="auto" /></p>

Aquí, podemos ver el primer dispositivo descubierto. Puedes verificar el id correspondiente para ver si es tu dispositivo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage35.png" alt="pir" width={400} height="auto" /></p>

La parte encerrada es el ID del dispositivo, correspondiente al ID del dispositivo en el sitio web:
https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage36.png" alt="pir" width={400} height="auto" /></p>

Si es realmente tu dispositivo, entonces haz clic en configurar. Aquí, si tu servicio MQTT no tiene nombre de usuario y contraseña, se mostrará el siguiente cuadro de diálogo, de lo contrario, te pedirá que ingreses un nombre de usuario y contraseña. Luego haz clic en enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage37.png" alt="pir" width={800} height="auto" /></p>

Si tu servicio MQTT tiene nombre de usuario y contraseña, entonces:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage38.png" alt="pir" width={600} height="auto" /></p>

Luego se trata de elegir la región, es decir, dónde está ubicado tu dispositivo, como la sala de estar, cocina, etc.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage39.png" alt="pir" width={600} height="auto" /></p>

Elegí sala de estar aquí, luego haz clic en hecho, y así el dispositivo se agrega a HA. En este punto, puedes hacer clic en resumen para ver el efecto de la configuración completada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage40.png" alt="pir" width={800} height="auto" /></p>

### 2.6 Integrar Manualmente en HA

Si puedes usar los dispositivos descubiertos, por favor configura desde la sección de descubiertos ya que es más simple que la configuración manual. Selecciona configuración, luego dispositivos y servicios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage41.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage42.png" alt="pir" width={800} height="auto" /></p>

Luego selecciona **Otra instancia del dispositivo "SenseCraft"** como se muestra:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage43.png" alt="pir" width={500} height="auto" /></p>

Luego selecciona **Agregar dispositivo usando host/id (integración LAN)**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage44.png" alt="pir" width={500} height="auto" /></p>

Luego haz clic en enviar, selecciona `grove_vision_ai_we2` del menú desplegable y haz clic en enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage45.png" alt="pir" width={500} height="auto" /></p>

Luego ingresa el ID del dispositivo, que es el ID del dispositivo correspondiente al sitio web, no algo arbitrario.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage46.png" alt="pir" width={500} height="auto" /></p>

Luego haz clic en enviar, lo siguiente es configurar el servicio MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage47.png" alt="pir" width={500} height="auto" /></p>

Los detalles completados aquí deben ser consistentes con los configurados en el sitio web; anteriormente, no había nombre de usuario y contraseña, por lo que no es necesario completarlos aquí. Luego haz clic en enviar, si es exitoso, se te pedirá que elijas una ubicación para el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage48.png" alt="pir" width={500} height="auto" /></p>

Elige la ubicación según las circunstancias reales, luego haz clic en hecho. De esta manera puedes ver el efecto en la vista general, el resto es igual que el método "descubierto".

## Integrar Nodos de Sensores en HA

Nuestra empresa tiene muchos sensores, como luz, dióxido de carbono, etc., que también pueden integrarse fácilmente en HA. Para integrar nodos de sensores, es necesario tener una cuenta en el [sitio web SENSECAP](https://sensecap.seeed.cc/portal/), por lo que primero necesitas registrar una cuenta allí, dependiendo de si te estás registrando en el sitio internacional o doméstico, y agregar tus nodos de sensores a tu cuenta.

A continuación, primero discutiremos cómo agregar dispositivos a través de la aplicación:

- [Aplicación SenseCAP Mate](https://sensecap-mate-download.seeed.cn/)

### 3.1 Agregar nodos de sensores a través de la aplicación sensecap mate

Por favor, inicia sesión en la página principal de la aplicación primero. Sigue los pasos a continuación para agregar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage49.png" alt="pir" width={800} height="auto" /></p>

### 3.2 Agregar nodos de sensores a través del sitio web

Ve al [sitio web SENSECAP](https://sensecap.seeed.cc/portal/), ingresa el EUI, Key, etc., de tu dispositivo sensor, y luego haz clic en confirmar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage50.png" alt="pir" width={800} height="auto" /></p>

Luego puedes ver los dispositivos que has agregado en la lista de nodos de sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage51.png" alt="pir" width={800} height="auto" /></p>

### 3.3 Agregar a HA

Ve a "Configuración >Agregar Integración".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage52.png" alt="pir" width={800} height="auto" /></p>

En el diálogo que aparece, busca "sensecraft".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage53.png" alt="pir" width={500} height="auto" /></p>

Luego haz clic en el resultado del filtro, ingresa y selecciona **otra instancia del dispositivo "SenseCraft"**, luego selecciona "Agregar dispositivos usando Cuenta SenseCraft".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage54.png" alt="pir" width={800} height="auto" /></p>

Haz clic en Enviar, luego ingresa la cuenta y contraseña registradas, y selecciona un entorno, es decir, te registraste en la estación internacional (global) o estación doméstica (china).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage55.png" alt="pir" width={500} height="auto" /></p>

Una vez agregado, puedes configurar los ajustes del sensor según tus necesidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage56.png" alt="pir" width={500} height="auto" /></p>

## Qué Más

¡La integración de Home Assistant a NVIDIA Jetson estará disponible pronto!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
