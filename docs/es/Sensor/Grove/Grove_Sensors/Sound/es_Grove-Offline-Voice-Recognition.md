---
description: Introducción al sensor de reconocimiento de voz sin conexión Grove.
title: Sensor de reconocimiento de voz sin conexión Grove
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/Grove-Offline-Voice-Recognition
last_update:
  date: 01/02/2024
  author: Allen
---

# Reconocimiento de voz sin conexión Grove

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/headPic.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

El módulo de reconocimiento de voz sin conexión Grove es adecuado para reconocimiento de voz puro sin conexión de bajo consumo, basado en el módulo VC-02. Tiene hasta 150 comandos preprogramados que se pueden usar para controlar sus electrodomésticos inteligentes. Cuenta con un tiempo de identificación menor a 100ms, en un factor de forma compacto de 18mm * 17mm. El módulo puede comunicarse a través del periférico UART y proporcionar un código hexadecimal único para cada comando reconocido. ¡Todo lo que este módulo necesita es 5V y está listo para reconocer los comandos!

### Características

- **Soporta 150 comandos de voz** 
- **Bajo consumo de energía**
- **Rieles de alimentación protegidos contra ESD**
- **Indicadores LED para comandos**
- **Interfaz UART Grove**

### Especificaciones

<table align="center">
  <tbody>
    <tr>
    <td><h4>Parámetro</h4></td>
    <td><h4>Rango/Valor</h4></td>
    </tr>
    <tr>
    <td>Voltaje de entrada</td>
    <td>5V/3.3V</td>
    </tr>
    <tr>
    <td>BaudRate por defecto</td>
    <td>115200</td>
    </tr>
    <tr>
    <td>Salida por defecto</td>
    <td>Valores hexadecimales del comando detectado</td>
    </tr>
  </tbody></table>

## Comenzando

### demo1: Módulo de reconocimiento de voz offline Grove con Arduino IDE

#### Configuración del hardware

Necesitas preparar lo siguiente:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Base Grove para XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Reconocedor de Voz Offline](/es/Grove-Offline-Voice-Recognition)
- [Altavoz](https://www.seeedstudio.com/Mono-Enclosed-Speaker-2W-6-Ohm-p-2832.html)


:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

**Paso 1.** Conecta XIAO RP2040 a tu computadora mediante un cable USB Type-C.

**Paso 2.** Conecta XIAO RP2040 a la placa de expansión XIAO.

**Paso 3.** Conecta la placa de expansión XIAO al Reconocedor de Voz Offline en el puerto UART mediante cable Grove.

**Paso 4.** Conecta el Reconocedor de Voz Offline a un altavoz.

Aquí está la imagen de conexión para tu referencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/connection.png" style={{width:1000, height:'auto'}}/></div>

#### **Configuración del Software**

**Paso 1.** Descarga e instala la última versión del Arduino IDE según tu sistema operativo

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégalo al Arduino IDE. Si quieres usar **XIAO RP2040** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup) para terminar de agregarlo.

:::tip
Si quieres usar otros tipos de XIAO, puedes consultar [aquí](https://wiki.seeedstudio.com/es/xiao_topic_page/).
:::

**Paso 3.** Instala la biblioteca de código de Arduino.

Comienza obteniendo la base de código desde [GitHub](https://github.com/Seeed-Projects/SeeedStudio-Grove_offline_voice_recognition_sensor) y descargándola a tu computadora local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.png" style={{width:1000, height:'auto'}}/></div>

Dado que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/2.png" style={{width:1000, height:'auto'}}/></div>


#### Demo de reconocimiento de voz offline

**Paso 1.** Abre este archivo en tu Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/3.png" style={{width:1000, height:'auto'}}/></div>

Verás el código como el siguiente.

```cpp
#include "GroveOfflineSensor.h"
#include <SoftwareSerial.h>
#define RX_VC02 D7
#define TX_VC02 D6

SoftwareSerial groveSerial(RX_VC02, TX_VC02); // RX, TX

void setup() {
  Serial.begin(115200);
  // wait for serial port to connect. Needed for native USB port only , This port is for displaying data Grove Sensor sends
  while (!Serial); 
  // Make sure to set the baud rate to match your communication
  groveSerial.begin(115200); 
}

void loop() {
  // detect voice from voice recognition sensor
   uint8_t *voiceData = detectVoiceFromGroveSensor(&groveSerial);

  //transfer the voice to command string
  if(voiceData != NULL){
    String response = getCommandInString(voiceData);
    Serial.println(response);
  }
  delay(1000);
}

```

**Paso 2.** Haz clic en el botón **Upload** para subir el código a la placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Di la palabra de activación "hello pudding" al sensor y luego escucharás retroalimentación de voz desde el altavoz y retroalimentación de palabras desde el monitor serie en Arduino IDE. Para más instrucciones, puedes encontrarlas en **Recursos** que se encuentra en la parte inferior de este artículo.

<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/offlineVoiceRecognition.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### demo2: Reconocimiento de voz offline Grove con ESPHome y Home Assistant

#### Configuración de hardware

necesitas preparar lo siguiente:
- **Un dispositivo con Home Assistant instalado**

El primer paso para comenzar con Home Assistant es instalarlo en un dispositivo, puedes seguir [aquí](https://www.home-assistant.io/installation/) para una guía paso a paso.

- [XIAO-ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Base Grove para XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Módulo de Reconocimiento de Voz Offline](https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html)

:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

**Paso 1.** Preparación de Hardware

Conecta XIAO ESP32S3 a tu computadora mediante un cable USB Type-C.
Conecta XIAO ESP32S3 a la placa de expansión XIAO.
Conecta la placa de expansión XIAO al Reconocedor de Voz Offline en el puerto UART mediante cable Grove.
Conecta el Reconocedor de Voz Offline a un altavoz.
Conecta la antena al XIAO ESP32S3.

Aquí está la imagen de conexión para tu referencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/29.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Crea tu hogar inteligente
Ingresa la dirección del dispositivo Home Assistant en la barra de direcciones de tu navegador, y crea una cuenta de Home Assistant, puedes seguir [aquí](https://www.home-assistant.io/getting-started/onboarding/) para una guía paso a paso.

**Paso 3.** Instala ESPHome en Home Assistant
Puedes configurar rápidamente ESPHome en Home Assistant siguiendo [aquí](https://wiki.seeedstudio.com/es/Connect-Grove-to-Home-Assistant-ESPHome/#install-esphome-on-home-assistant)


#### Software 

 Agregar XIAO ESP32S3 a ESPHome

- Haz clic en **+ NEW DEVICE**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/6.png" style={{width:1000, height:'auto'}}/></div>

- Haz clic en **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/7.png" style={{width:500, height:'auto'}}/></div>

- Ingresa un **Nombre** para el dispositivo e ingresa las credenciales WiFi como **Nombre de red** y **Contraseña**. Luego haz clic en **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/8.png" style={{width:500, height:'auto'}}/></div>

- Selecciona **ESP32-S3** y haz clic en NEXT
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/9.png" style={{width:500, height:'auto'}}/></div>

- Haz clic en **Install** y elige **Manual download**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/11.png" style={{width:800, height:'auto'}}/></div>

- Después de descargar exitosamente, Abre ESPHome Web y elige **Modern format**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/13.png" style={{width:1000, height:'auto'}}/></div>

- Conecta el puerto de tu XIAO ESP32S3, e instala el archivo bin que acabas de obtener, ahora descargará todos los paquetes de placa necesarios y flasheará el firmware de ESPHome en el XIAO ESP32S3. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/16.png" style={{width:500, height:'auto'}}/></div>

- Abre los LOGS, si el flasheo es exitoso, verás la siguiente salida, y ahora regresa a la página de ESPHome, si ves el estado de la placa como ONLINE, eso significa que la placa se conectó exitosamente al WiFi.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/28.png" style={{width:1000, height:'auto'}}/></div>


:::tip
Si obtienes la advertencia "[wifi_esp32:482][arduino_events]: Event: Disconnected …… reason='Auth Expired'", por favor asegúrate de que el dispositivo ESP32 esté dentro del rango de la red WiFi, una señal débil puede causar problemas de conexión. Puedes reemplazar tu antena por [Rod Antenna](https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html).
:::

Ahora puedes desconectar el XIAO ESP32C3 de la computadora y simplemente alimentarlo mediante un cable USB. Esto es porque de ahora en adelante, si quieres flashear firmware al XIAO ESP32C3, simplemente puedes hacerlo OTA sin conectar a la placa X86 mediante un cable USB.

- Haz clic en los tres puntos y haz clic en Install, Selecciona Wirelessly y enviará los cambios a la placa de forma inalámbrica
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/25.png" style={{width:700, height:'auto'}}/></div>

- Ve a Settings y selecciona Devices & Services, Verás ESPHome como una integración descubierta. Haz clic en CONFIGURE. Si te pide la clave de encriptación, regresa a la página de ESPHome para copiar la API Key e ingresarla.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/24.png" style={{width:600, height:'auto'}}/></div>


#### Reconocimiento de voz offline

**Paso1.** Dentro del archivo offline-voice-recognition.yaml que creamos antes, agrega lo siguiente al **final del archivo** y envíalo OTA al XIAO ESP32S3

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yaml
uart:
  id: uart_bus
  tx_pin: GPIO43
  rx_pin: GPIO44
  baud_rate: 115200

globals:
  - id: hex_code
    type: uint8_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 1s
    then:
      - lambda: |-
          while (id(uart_bus).available() >= 5) {
            uint8_t receivedData[5];
            for (int i = 0; i < 5; i++) {
              id(uart_bus).read_byte(&receivedData[i]);
            }
            id(hex_code) = receivedData[1];
            ESP_LOGD("main", "Hex code: %02X", id(hex_code));
          }

sensor:
  - platform: template
    name: "Received Hex Code"
    lambda: |-
      return id(hex_code);
    update_interval: 5s
    unit_of_measurement: ""
    accuracy_decimals: 0
    on_value:
      then:
        - lambda: |-
            auto call_acwind = id(acwind).make_call();
            auto call_actemp = id(actemp).make_call();
              switch (id(hex_code)) {
                case 0x03:
                  id(ac).publish_state(true);
                  break;
                case 0x04:
                  id(ac).publish_state(false);
                  break;
                case 0x05:
                  id(acmode).publish_state("automatic mode");
                  break;
                case 0x06:
                  id(acmode).publish_state("cold mode");
                  break;
                case 0x07:
                  id(acmode).publish_state("heat mode");
                  break;
                case 0x08:
                  id(acmode).publish_state("dry mode");
                  break;
                case 0x09:
                  id(acmode).publish_state("fan mode");
                  break;
                case 0x0A:
                  id(acmode).publish_state("sleeping mode");
                  break;
                case 0x0B:
                  id(acwind).publish_state("automatic fan");
                  break;
                case 0x0C:
                  id(acwind).publish_state("low fan");
                  break;
                case 0x0D:
                  id(acwind).publish_state("medium fan");
                  break;
                case 0x0E:
                  id(acwind).publish_state("high fan");
                  break;
                case 0x0F:
                  call_acwind.select_next(false);
                  call_acwind.perform();
                  break;
                case 0x10:
                  call_acwind.select_previous(false);
                  call_acwind.perform();
                  break;
                case 0x11:
                  id(actemp).publish_state("sixteen centigrade");
                  break;
                case 0x12:
                  id(actemp).publish_state("seventeen centigrade");
                  break;
                case 0x13:
                  id(actemp).publish_state("eighteen centigrade");
                  break;
                case 0x14:
                  id(actemp).publish_state("nineteen centigrade");
                  break;
                case 0x15:
                  id(actemp).publish_state("twenty centigrade");
                  break;
                case 0x16:
                  id(actemp).publish_state("twenty one centigrade");
                  break;
                case 0x17:
                  id(actemp).publish_state("twenty two centigrade");
                  break;
                case 0x18:
                  id(actemp).publish_state("twenty three centigrade");
                  break;
                case 0x19:
                  id(actemp).publish_state("twenty four centigrade");
                  break;
                case 0x1A:
                  id(actemp).publish_state("twenty five centigrade");
                  break;
                case 0x1B:
                  id(actemp).publish_state("twenty six centigrade");
                  break;
                case 0x1C:
                  id(actemp).publish_state("twenty seven centigrade");
                  break;
                case 0x1D:
                  id(actemp).publish_state("twenty eight centigrade");
                  break;
                case 0x1E:
                  id(actemp).publish_state("twenty nine centigrade");
                  break;
                case 0x1F:
                  id(actemp).publish_state("thirty centigrade");
                  break;
                case 0x20:
                  call_actemp.select_next(false);
                  call_actemp.perform();
                  break;
                case 0x21:
                  call_actemp.select_previous(false);
                  call_actemp.perform();
                  break;
                case 0x22:
                  id(fan).publish_state(true);
                  break;
                case 0x23:
                  id(fan).publish_state(false);
                  break;
                case 0x24:
                  id(acswept).publish_state("air swing up and down");
                  break;
                case 0x25:
                  id(acswept).publish_state("air swing left and right");
                  break;
                case 0x26:
                  id(acmode).publish_state("automatic mode");
                  id(acwind).publish_state("automatic fan");
                  id(actemp).publish_state("twenty six centigrade");
                  id(fan).publish_state(false);
                  break;
                case 0x27:
                  id(light).publish_state(true);
                  break;
                case 0x28:
                  id(light).publish_state(false);
                  break;
                case 0x29:
                  id(cold_light).publish_state(true);
                  break;
                case 0x2A:
                  id(cold_light).publish_state(false);
                  break;
                case 0x2B:
                  id(warm_light).publish_state(true);
                  break;
                case 0x2C:
                  id(warm_light).publish_state(false);
                  break;
                default:
                  ESP_LOGW("main", "Unknown hex code: %02X", id(hex_code));
                  break;
              }

switch:
  - platform: template
    name: "air conditioner"
    id: ac
    optimistic: True
  - platform: template
    name: "fan"
    id: fan
    optimistic: True
  - platform: template
    name: "light"
    id: light
    optimistic: True
  - platform: template
    name: "cold light"
    id: cold_light
    optimistic: True
  - platform: template
    name: "warm light"
    id: warm_light
    optimistic: True
  
select:

  - platform: template
    name: Air conditioner mode
    id: acmode
    optimistic: True
    options:
      - "automatic mode"
      - "cold mode"
      - "heat mode"
      - "dry mode"
      - "fan mode"
      - "sleeping mode"
    initial_option: "automatic mode"  

  - platform: template
    name: Fan mode 
    id: acwind
    optimistic: True
    options:
      - "automatic fan"
      - "low fan"
      - "medium fan"
      - "high fan"
    initial_option: "automatic fan"

  - platform: template
    name: Temperature
    id: actemp
    optimistic: True
    options:
      - "sixteen centigrade"
      - "seventeen centigrade"
      - "eighteen centigrade"
      - "nineteen centigrade"
      - "twenty centigrade"
      - "twenty one centigrade"
      - "twenty two centigrade"
      - "twenty three centigrade"
      - "twenty four centigrade"
      - "twenty five centigrade"
      - "twenty six centigrade"
      - "twenty seven centigrade"
      - "twenty eight centigrade"
      - "twenty nine centigrade"
      - "thirty centigrade"
    initial_option: "twenty six centigrade"

  - platform: template
    name: Fan direction
    id: acswept
    optimistic: True
    options: 
      - "air swing up and down"
      - "air swing left and right"
```

</details>

:::note
Cuando creamos un nuevo dispositivo, el archivo yaml que se genera automáticamente variará debido a diferentes configuraciones y tipos de dispositivo, por lo que recomendamos **no cambiar el inicio del archivo**, y simplemente agregar el código al final.
:::

- Puedes aprender más sobre **Uart Bus** [aquí](https://esphome.io/components/uart)
- Puedes aprender más sobre **Switch Component** [aquí](https://esphome.io/components/switch/)
- Puedes aprender más sobre **Select Component** [aquí](https://esphome.io/components/select/)

**Paso 2.** Visualizar en el Panel de Control

- Ahora regresa a Dispositivos, elige el reconocimiento de voz sin conexión
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/23.png" style={{width:1000, height:'auto'}}/></div>


- Haz clic en **ADD TO DASHBOARD**→**NEXT**→**ADD TO DASHBOARD**, y regresa a **OVERVIEW**, ahora tu panel de control de Home Assistant se verá como se muestra a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/27.png" style={{width:600, height:'auto'}}/></div>


**Paso 3.** Di la palabra de activación "hello pudding" al sensor y luego escucharás una respuesta de voz y verás una respuesta de acción en Home Assistant. Para más instrucciones, puedes encontrarlas en **Recursos** que se encuentra en la parte inferior de este artículo.
<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


## Recursos

- **[PDF]** [Comandos de Voz Sin Conexión](https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/VoiceCommends.pdf)

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
