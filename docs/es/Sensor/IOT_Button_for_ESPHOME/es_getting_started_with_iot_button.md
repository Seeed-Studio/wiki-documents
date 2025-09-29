---
description: Comenzando con el Botón IoT de Seeed Studio
title: Comenzando con el Botón IoT de Seeed Studio
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /es/getting_started_with_seeed_iot_button
last_update:
  date: 04/08/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Botón IoT es un interruptor inteligente versátil que ofrece integraciones duales con Home Assistant a través de ESPHome (vía Wi-Fi) y Zigbee. Alimentado por el ESP32-C6, cuenta con indicadores LED RGB personalizables, disparadores de eventos programables para múltiples patrones de pulsación, carga USB-C y opciones de montaje flexibles - todo lo que necesitas para un control intuitivo del hogar inteligente.

Esta guía te llevará a través de la configuración de tu Botón IoT, ya sea que tengas el **hardware V1 (que se envió con firmware ESPHome)** o el **hardware V2 (que se envía con firmware Zigbee)**.

### Características

- **Listo para Home Assistant**: Integración perfecta vía ESPHome o la integración Zigbee Home Automation (ZHA).
- **Un Interruptor, Acciones Personalizables**: Soporta acciones de pulsación simple, doble pulsación y pulsación larga para disparar diferentes automatizaciones.
- **Fuente de Alimentación Confiable**: Alimentado por una batería recargable 18650 estándar con un conveniente puerto de carga USB-C.
- **Solución de Montaje Fácil**: Diseño compacto que puede colocarse en cualquier lugar o montarse para fácil acceso.
- **Abierto para Personalización**: Ambas versiones de hardware soportan flashear firmware ESPHome o Zigbee, permitiéndote elegir el mejor protocolo para tus necesidades.

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características de ambas versiones V1 y V2 del Botón IoT.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Parámetro</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>Espressif ESP32-C6</td>
  </tr>
  <tr>
   <td>Flash</td>
   <td>4MB</td>
  </tr>
        <tr>
   <td>LED</td>
   <td>LED RGB de Usuario: WS2812B (GPIO19, requiere que GPIO18 esté habilitado)<br />LED de Carga: Verde<br />LED de Usuario (Azul): GPIO2 (V1) / GPIO3 (V2)<br />LED de Batería Baja (Rojo): GPIO14 (<b>Solo V2</b>)</td>
  </tr>
        <tr>
   <td>Inalámbrico</td>
   <td>Wi-Fi 2.4GHz<br />Zigbee 3.0</td>
  </tr>
        <tr>
   <td>Batería</td>
   <td>Batería recargable Li-ion 18650 de 3.6V</td>
  </tr>
        <tr>
   <td>Monitoreo de Batería</td>
   <td>ADC para lectura de voltaje (<b>Solo V2</b>, GPIO1)</td>
  </tr>
        <tr>
   <td>Interfaz de Carga</td>
   <td>USB Type-C</td>
  </tr>
        <tr>
   <td>Protección de Batería</td>
   <td>Protección contra polaridad inversa</td>
  </tr>
        <tr>
   <td>Actualización de Firmware</td>
   <td>Soporta OTA (Over-the-Air)</td>
  </tr>
        <tr>
   <td>Dimensiones</td>
   <td>92x32x25 mm</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>

## Comenzando

### Paso 1: Configuración Inicial

Cuando recibas por primera vez tu Botón IoT, es esencial realizar un paso de activación inicial antes del uso. Esto aplica para **tanto el hardware V1 como V2**.

1. Usa un cable de datos USB Tipo-C estándar de 5V para conectar el Botón IoT a una fuente de alimentación (como un cargador USB o computadora).
2. **Esta conexión de alimentación inicial es crucial ya que activa el circuito de protección de la batería incorporada.**
3. **Sin este paso de activación, el dispositivo no funcionará correctamente con alimentación por batería.**

:::note
Asegúrate de usar un cable USB Tipo-C compatible de 5V para el proceso de activación. Usar cables no estándar puede resultar en una activación incorrecta.
:::

### Paso 2: Elige tu Método de Conexión

El Botón IoT ofrece dos formas principales de conectarse a Home Assistant. Tu elección dependerá de la versión de hardware que tengas o el protocolo que prefieras.

- **Botón IoT V1** viene precargado con firmware de **ESPHome**. Por favor sigue el **Método 1**.
- **Botón IoT V2** viene precargado con firmware de **Zigbee**. Por favor sigue el **Método 2**.

Si eres un usuario avanzado, puedes flashear cualquier firmware en cualquier versión de hardware. Consulta la sección "Uso Avanzado" para más detalles.

---

### Método 1: Integración ESPHome (Wi-Fi)

Este método es el predeterminado para **hardware V1** y es para usuarios que quieren conectar su Botón IoT a Home Assistant vía Wi-Fi.

#### 1. Configurar Home Assistant

Para un rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en un dispositivo como una Raspberry Pi o Home Assistant Green.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Comprar Home Assistant Green</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Comprar Home Assistant Yellow</font></span></strong>
    </a>
</div><br />

Una vez que Home Assistant esté ejecutándose, asegúrate de que el **complemento ESPHome** esté instalado e iniciado desde la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. Flashear/Actualizar Firmware ESPHome (Si es Necesario)

Tu dispositivo viene pre-flasheado. Solo necesitas realizar este paso si quieres actualizar a la [versión de firmware más reciente](https://github.com/Seeed-Studio/xiao-esphome-projects/releases) o si el firmware existente está corrupto.

<Tabs>
<TabItem value='Web Tool'>

El método más fácil es usar nuestro [**Flasheador de Firmware de Proyectos XIAO ESPHome**](https://gadgets.seeed.cc/).

1. Conecta tu Botón IoT a tu computadora vía cable USB.
2. En la página del flasheador, encuentra "Seeed Studio IoT Button" y haz clic en **INSTALL**.
3. Selecciona el puerto COM correcto del diálogo emergente.
4. El navegador descargará automáticamente y flasheará el firmware ESPHome más reciente a tu dispositivo.

</TabItem>
<TabItem value='ESPHome Web'>

Alternativamente, puedes usar la herramienta oficial [ESPHome Web](https://web.esphome.io/).

1. Descarga el archivo de firmware `*.factory.bin` más reciente de la [página de Releases de GitHub](https://github.com/Seeed-Studio/xiao-esphome-projects/releases).
2. Conecta el Botón IoT a tu PC.
3. Visita la página [ESPHome Web](https://web.esphome.io/), haz clic en **CONNECT**, y elige el puerto COM correcto.
4. Haz clic en **INSTALL** y selecciona el archivo `.bin` que descargaste.

</TabItem>
</Tabs>

#### 3. Conectar a Wi-Fi y Home Assistant

1. Después del flasheo, el Botón IoT creará un punto de acceso Wi-Fi llamado `seeedstudio-iot-button`.
2. Conéctate a esta red Wi-Fi desde tu teléfono o computadora.
3. Un portal cautivo debería abrirse automáticamente. Si no, navega a `192.168.4.1` en tu navegador.
4. Selecciona tu red Wi-Fi doméstica (SSID) e ingresa la contraseña. El botón se conectará entonces a tu red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

#### 4. Agregar el Dispositivo en Home Assistant

Una vez que el Botón IoT esté en la misma red que tu servidor Home Assistant, debería ser descubierto automáticamente.

1. Navega a **Settings > Devices & Services**.
2. Bajo la sección "Discovered", deberías ver `Seeed Studio IoT Button`.
3. Haz clic en **CONFIGURE**, luego **SUBMIT**, y asigna el dispositivo a un área (ej., Living Room).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

#### 5. Crear Automatizaciones con ESPHome

El firmware ESPHome expone diferentes patrones de presión como interruptores separados.

1. Ve a **Settings > Automations & Scenes** y haz clic en **CREATE AUTOMATION**.
2. Para el **Trigger**, selecciona `Device` y elige tu Botón IoT.
3. Selecciona un tipo de disparador de la lista, como:
    - `Single-press action`
    - `Double-press action`
    - `Long-press action`
4. Para la **Action**, elige el dispositivo o servicio que quieres controlar (ej., `light.toggle`).
5. Guarda la automatización.

---

### Método 2: Integración Zigbee

Este método es el predeterminado para **hardware V2** y es para usuarios que quieren conectar su Botón IoT a una red mesh Zigbee.

#### 1. Configurar Zigbee en Home Assistant

Antes del emparejamiento, necesitas un coordinador Zigbee conectado a tu instancia de Home Assistant.

1. **Instalar un Coordinador Zigbee**: Conecta un coordinador como el [Home Assistant SkyConnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html) a tu servidor.
2. **Configurar Zigbee Home Automation (ZHA)**:
    - Ve a **Configuración > Dispositivos y Servicios**.
    - Haz clic en **Agregar Integración** y busca **Zigbee Home Automation**.
    - Sigue las indicaciones para configurar ZHA con tu coordinador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. Emparejar el Botón IoT con Home Assistant

1. En Home Assistant, navega a la página de integración de **Zigbee Home Automation**.
2. Haz clic en **Agregar Dispositivo** para poner tu coordinador en modo de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

3. Presiona el botón en tu Botón IoT una vez para despertarlo e iniciar el emparejamiento.
    - Si no se empareja, el dispositivo puede haberse quedado dormido. Presiónalo de nuevo.
    - Para forzar el emparejamiento, mantén presionado el botón por **más de 5 segundos**. Esto activa un restablecimiento de fábrica y pone el dispositivo directamente en modo de emparejamiento. El LED RGB parpadeará para confirmar.
4. Home Assistant debería descubrir el dispositivo como **Seeed Studio IoT_Button**.
5. El dispositivo aparecerá con múltiples entidades: un sensor binario para el estado en tiempo real y varios interruptores para diferentes acciones de clic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

#### 3. Crear Automatizaciones con Zigbee

Una vez emparejado, puedes crear automatizaciones basadas en las acciones del botón.

1. Ve a **Configuración > Automatizaciones y Escenas** y haz clic en **CREAR AUTOMATIZACIÓN**.
2. Para el **Disparador**, selecciona `Dispositivo` y encuentra tu Botón IoT.
3. ZHA expone los clics como acciones del dispositivo. Selecciona el disparador deseado de la lista, por ejemplo:
    - `"remote_button_short_press"`
    - `"remote_button_double_press"`
    - `"remote_button_long_press"`
4. Configura la **Acción** que quieres realizar.
5. Guarda la automatización.

Ejemplo de automatización en YAML de Home Assistant para alternar una luz con un **doble clic**:

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # Replace with your button's device ID
    type: "remote_button_double_press" # The exact type may vary, select it from the UI
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## Uso Avanzado: Cambio de Firmware

Una de las características clave del IoT Button es su flexibilidad. Puedes cambiar entre firmware de ESPHome y Zigbee en **hardware V1 o V2**.

- (No recomendado) **Para cambiar a ESPHome**: Si tu botón está ejecutando firmware de Zigbee y quieres usar Wi-Fi, simplemente sigue las instrucciones de flasheo en **Método 1, Paso 2** para instalar el firmware de ESPHome.

- **Para cambiar a Zigbee**: Si tu botón está ejecutando ESPHome y quieres unirte a una red Zigbee, necesitarás compilar y flashear el [firmware de Zigbee usando Arduino IDE](https://wiki.seeedstudio.com/es/seeed_iot_button_with_zigbee/). Después del flasheo, sigue los pasos de emparejamiento en **Método 2**.

## Recursos

- **[GITHUB]** [Repositorio Github del Seeed IoT Button](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [PDF del Esquemático del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Esquemático y PCB del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

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
