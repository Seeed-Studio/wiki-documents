---
description: Kit mmWave y Grove se conectan a ESPHome
title: Kit mmWave y Grove se conectan a ESPHome
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 12/09/2023
  author: Allen
createdAt: '2023-12-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/mmWave_Kit_And_Grove_Connect_To_ESPHome/
---

## Introducción

El Kit de Sensor de Detección Humana mmWave alimentado por Seeed Studio XIAO ESP32C3, soporta conectividad Wi-Fi/BLE y ofrece detección humana precisa a través de sensores mmWave. Conecta sin problemas módulos grove para características adicionales. Logra una configuración fácil para Home Assistant en 1-2 minutos, junto con convenientes actualizaciones inalámbricas Over-The-Air (OTA). Habilita una versatilidad extensa con sensores mmWave reemplazables. Ideal para personalizar la automatización del hogar inteligente, detectar intrusiones y monitorear el bienestar de los ancianos.

## Preparación del Hardware

Estoy usando Raspberry Pi 4B como servidor para ejecutar HomeAssistant, usando el Kit de Sensor de Detección Humana mmWave como hardware aquí, junto con múltiples Sensores Grove.

<table align="center">
  <tbody><tr>
      <th>Kit de Sensor de Detección Humana mmWave</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:350, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody>
</table>

**Sensores Grove**

- [Grove - Sensor de Temperatura y Humedad (DHT20)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - Sensor de Luz (LS06-S)](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Sensor de Llama](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## Preparación del Software

### Instalar Home Assistant

Asegúrate de que ya tienes Home Assistant funcionando. Hay múltiples wikis que introducen cómo flashear Home Assistant en los [productos](https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-) aquí. Estoy usando Raspberry Pi 4B así que puedo [usar directamente el oficial para flashear el OS en la Raspberry Pi 4B](https://www.home-assistant.io/installation/raspberrypi).

### Instalar ESPHome en Home Assistant

ESPHome está disponible como un **Complemento de Home Assistant** y puede instalarse simplemente a través de la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 1.** Haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 2.** Habilita todas las opciones y haz clic en **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

Verás la siguiente ventana si ESPHome se carga exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## Comenzando

### Kit mmWave conectar a ESPHome

#### Paso 1: Conexión de hardware

Conecta el kit mmwave al HomeAssistant a través del cable Type-C, puedes consultar la imagen a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### Paso 2: Configuración del software 

##### a. Configurar kit mmwave

1. Abre la página de ESPHome y haz clic en el botón **NEW DEVICE** en la esquina inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. Y luego, haz clic en **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. Dale un nombre que quieras, haz clic en **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. Selecciona tu tipo de dispositivo, haz clic en **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. Puedes encontrar la clave más tarde en el archivo de configuración, así que aquí simplemente haz clic en **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. Necesitamos editar el archivo de configuración aquí, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. El código a continuación es para tu referencia. Puedes copiarlo a tu archivo de configuración. Después de terminar el código, haz clic en el botón **INSTALL** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip
1. Las partes api y ota tienen clave o contraseña predeterminadas que no necesitas cambiar.
2. En la parte wifi necesitas cambiar tu propio ssid y contraseña.
3. [haz clic aquí para ver el código](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)
:::

8. Y luego aparecerá una ventana emergente, haz clic en la tercera entrada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. Haz clic como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. Ahora el kit mmwave ya está configurado y verás esta página, haz clic en el botón **CLOSE** en la esquina inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. Agregar datos del kit mmwave a la vista general

1. Ve a la página **Settings** y haz clic en **Devcies & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **ESPHome** en la zona Configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si encuentras que ESPHome no está en la zona Configured, sino en la zona Discovered arriba. Puedes seguir los pasos 15 al 18 en este [enlace](https://wiki.seeedstudio.com/es/XIAO-ESP32C3-for-ESPHome-Support/).
:::

3. Haz clic en **devices**. Tengo 2 dispositivos aquí, probablemente en tu situación solo tengas 1 dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. Haz clic en **mmWave Kit Plus Grove**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. Haz clic en **ADD TO DASHBOARD** para agregar esa información al panel de control. Y puedes desplazarte hacia abajo en esta página para agregar más información que desees.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. Continúa haciendo clic en **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. Finalmente puedes ver esta información en el panel de control haciendo clic en el botón **overview** en la esquina superior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### Grove conectar a ESPHome 

#### Sensor de luz (LS06-S)

##### Paso 1: Conexión de hardware

Conecta el [sensor de luz](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) al kit mmwave a través del cable Grove, puedes consultar la imagen a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### Paso 2: Configuración de software 

###### a. Configurar sensor de luz

1. Añade este código a tu archivo de configuración en la posición correspondiente, puedes consultar la imagen a continuación.

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. Y luego haz clic en el botón **INSTALL** en la esquina superior izquierda. Si todo va bien verás esta imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">Si encuentras un error, puedes limpiar los archivos de compilación como se muestra a continuación.</span>
:::

1. Probablemente encuentres un error como este.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. Puedes hacer clic en **Clean Build Files** para limpiar algunos archivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. Después de limpiar, haz clic en **CLOSE** e intenta **INSTALL** nuevamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. Agregar sensor de luz al panel de control

1. Haz clic en **Overview** en la esquina superior izquierda y luego haz clic en **"tres puntos"** y **Edit dashboard** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **ADD CARD** en la esquina inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Haz clic en **BY ENTITY**, selecciona la entrada **Light Sensor** y luego haz clic en **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. Selecciona **PICK DIFFERENT CARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. Selecciona **Gauge**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. Establece el Mínimo como 0 y el Máximo como 1, haz clic en **SAVE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. Finalmente verás el sensor de luz en tu panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### Sensor de temperatura y humedad (DHT20)

##### Paso 1: Conexión de hardware

Conecta el [sensor de temperatura y humedad](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) al kit mmwave mediante cable Grove, puedes consultar la imagen a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### Paso 2: Configuración de software

###### a. Configurar sensor de temperatura y humedad

1. Agrega este código a tu archivo de configuración en la posición correspondiente, puedes consultar la imagen a continuación.

```
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38
```

```
sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/20.png" style={{width:1000, height:'auto'}}/></div>

2. Y luego haz clic en el botón **INSTALL** en la esquina superior izquierda. Si todo va bien verás esta imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si encuentras un error, puedes ir [aquí](#jump) para tu referencia.
:::

###### b. Agregar sensor de temperatura y humedad al panel de control

1. Haz clic en **Overview** en la esquina superior izquierda y luego haz clic en **"tres puntos"** y **Edit dashboard** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **ADD CARD** en la esquina inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Haz clic en **BY ENTITY**, selecciona las entradas **Humidiy** y **Temperature** y luego haz clic en **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. Haz clic en **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. Finalmente verás los datos de Temperatura y Humedad en tu panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### Sensor de llama

##### Paso 1: Conexión de Hardware

Usa el cable Grove para conectar el [sensor de llama](https://www.seeedstudio.com/Grove-Flame-Sensor.html) al puerto analógico del kit mmWave. Puedes consultar el video a continuación.

##### Paso 2: Configuración de Software

###### a. Configurar sensor de llama

Agrega el código a continuación a tu archivo de configuración e **INSTALA** en el kit mmWave.

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. Añadir sensor de llama al panel de control.

Puedes consultar el sensor de luz o el sensor de temperatura y humedad anteriores.

#### Otros sensores con archivos Yaml

Respaldado por [Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/12/views/1), gracias Mohammed y hay más sensores compatibles a continuación:

[Sensor ATH20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)
[Sensor SHT35](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)
[Sensor SHT40](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)
[Sensor de Vibración](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)

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
