---
description: mmWave Kit And Grove Connect To ESPHome
title: Sensor de Detección Humana por mmWave
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 12/09/2023
  author: Guillermo
---

## Introducción

El Kit Sensor de Detección Humana por mmWave impulsado por Seeed Studio XIAO ESP32C3 ofrece conectividad Wi-Fi/BLE y una detección humana precisa mediante sensores mmWave. Puedes conectar módulos Grove para ampliar sus funciones. Permite una configuración fácil con Home Assistant en 1-2 minutos, junto con actualizaciones inalámbricas Over-The-Air (OTA). La versatilidad es máxima gracias a sus sensores mmWave intercambiables. Ideal para automatización de hogares inteligentes, detección de intrusos y monitoreo del bienestar de personas mayores.

## Preparación del Hardware

Estoy utilizando una Raspberry Pi 4B como servidor para ejecutar Home Assistant, junto con el Kit Sensor de Detección Humana mmWave como hardware, además de varios sensores Grove.

<table align="center">
  <tbody><tr>
      <th>Kit Sensor de Detección Humana mmWave</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:350, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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

Asegúrate de tener Home Assistant instalado y funcionando. Hay múltiples guías en la [wiki](https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-) sobre cómo instalarlo en distintos dispositivos. Yo estoy usando una Raspberry Pi 4B, así que [usé la guía oficial para flashear el sistema operativo](https://www.home-assistant.io/installation/raspberrypi).

### Instalar ESPHome en Home Assistant

ESPHome está disponible como un **complemento de Home Assistant** y se puede instalar directamente desde la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 1.** Haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 2.** Activa todas las opciones y haz clic en **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

Si ESPHome se carga correctamente, verás esta pantalla:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## Primeros pasos

### Conexión del kit mmWave a ESPHome

#### Paso 1: Conexión de hardware

Conecta el kit mmWave a Home Assistant mediante un cable Type-C, como se muestra en la imagen:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### Paso 2: Configuración del software

##### a. Configuración del kit mmWave

1. Abre la página de ESPHome y haz clic en **NEW DEVICE** (esquina inferior derecha).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. Luego haz clic en **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. Escribe el nombre del dispositivo y haz clic en **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. Selecciona el tipo de dispositivo: **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. Puedes encontrar la clave más adelante, así que haz clic en **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. Ahora edita el archivo de configuración haciendo clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. Copia el siguiente código de ejemplo en tu archivo de configuración. Luego haz clic en **INSTALL**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip
1. Las secciones `api` y `ota` tienen claves por defecto, no necesitas cambiarlas.  
2. En la sección `wifi` debes ingresar tu SSID y contraseña.  
3. [Haz clic aquí para ver el código](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)
:::

8. Aparecerá una ventana emergente. Haz clic en la **tercera opción**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. Luego haz clic según se muestra:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. El kit mmWave ya está configurado. Haz clic en **CLOSE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. Agregar datos del kit mmWave al panel

1. Ve a **Settings** > **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **ESPHome** en la zona de dispositivos configurados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si ESPHome aparece en la zona "Discovered", sigue los pasos 15 a 18 en este [enlace](https://wiki.seeedstudio.com/XIAO-ESP32C3-for-ESPHome-Support/).
:::

3. Haz clic en **devices**. En este ejemplo hay dos dispositivos, pero en tu caso probablemente solo veas uno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. Selecciona **mmWave Kit Plus Grove**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. Haz clic en **ADD TO DASHBOARD** para agregar la información al panel. Puedes desplazarte hacia abajo para agregar más sensores si lo deseas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. Haz clic nuevamente en **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. Finalmente, haz clic en el botón **Overview** en la parte superior izquierda para ver toda la información en el panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### Conexión Grove a ESPHome

#### Sensor de luz (LS06-S)

##### Paso 1: Conexión de hardware

Conecta el [sensor de luz](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) al kit mmWave mediante un cable Grove. Puedes referirte a la imagen a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### Paso 2: Configuración de software

###### a. Configura el sensor de luz

1. Agrega el siguiente código en tu archivo de configuración en la posición correspondiente. Puedes referirte a la imagen a continuación.

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. Luego haz clic en el botón **INSTALL** en la esquina superior izquierda. Si todo va bien, verás esta imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">Si aparece un error, puedes limpiar los archivos de compilación como se muestra a continuación.</span>
:::

1. Es probable que veas un error como este.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **Clean Build Files** para limpiar los archivos temporales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. Después de limpiar, haz clic en **CLOSE** e intenta **INSTALL** nuevamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. Agrega el sensor de luz al panel

1. Haz clic en **Overview** en la esquina superior izquierda, luego haz clic en los **tres puntos** y selecciona **Edit dashboard** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **ADD CARD** en la esquina inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Haz clic en **BY ENTITY**, selecciona la entrada **Light Sensor** y luego haz clic en **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. Selecciona **PICK DIFFERENT CARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. Selecciona **Gauge**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. Establece el mínimo en 0 y el máximo en 1, luego haz clic en **SAVE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. Finalmente verás el sensor de luz en tu panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### Sensor de temperatura y humedad (DHT20)

##### Paso 1: Conexión de hardware

Conecta el [sensor de temperatura y humedad](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) al kit mmWave mediante un cable Grove. Puedes referirte a la imagen a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### Paso 2: Configuración de software

###### a. Configura el sensor de temperatura y humedad

1. Agrega el siguiente código en tu archivo de configuración en la posición correspondiente. Puedes referirte a la imagen a continuación.

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

2. Luego haz clic en el botón **INSTALL** en la esquina superior izquierda. Si todo va bien, verás esta imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si aparece un error, puedes saltar a la sección [aquí](#jump) como referencia.
:::

###### b. Agrega el sensor al panel

1. Haz clic en **Overview** en la esquina superior izquierda, luego haz clic en los **tres puntos** y selecciona **Edit dashboard** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **ADD CARD** en la esquina inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Haz clic en **BY ENTITY**, selecciona las entradas **Humidity** y **Temperature**, luego haz clic en **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. Haz clic en **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. Finalmente verás los datos de temperatura y humedad en tu panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### Sensor de flama

##### Paso 1: Conexión de hardware

Usa un cable Grove para conectar el [sensor de flama](https://www.seeedstudio.com/Grove-Flame-Sensor.html) al puerto analógico del kit mmWave. Puedes referirte al video a continuación.

##### Paso 2: Configuración de software

###### a. Configura el sensor de flama

Agrega el siguiente código en tu archivo de configuración y haz clic en **INSTALL** para cargarlo en el kit mmWave.

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. Agrega el sensor al panel

Puedes seguir las instrucciones del sensor de luz o del sensor de temperatura y humedad anteriores.

#### Otros sensores con archivos YAML

Gracias al [Programa de Colaboradores de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/12/views/1), cortesía de Mohammed, se soportan más sensores como los siguientes:

- [Sensor ATH20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)  
- [Sensor SHT35](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)  
- [Sensor SHT40](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)  
- [Sensor de vibración](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)  

## Soporte técnico y discusión sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte todo el soporte necesario para que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
