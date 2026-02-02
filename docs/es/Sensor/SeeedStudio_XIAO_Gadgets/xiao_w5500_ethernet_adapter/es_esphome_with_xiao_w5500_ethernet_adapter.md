---
description: ESPHome en XIAO W5500 para Home Assistant
title: ESPHome en XIAO(ESP32-S3) W5500 Adaptador Ethernet para Home Assistant
keywords:
  - esphome
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 2
slug: /es/esphome_xiao_w5500_ethernet_adapter
last_update:
  date: 12/08/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:800, height:'auto'}}/></div>

Este tutorial demuestra cómo implementar un **Proxy Bluetooth** usando el **Adaptador Ethernet XIAO W5500**, con integración y validación en **Home Assistant**.

Antes de proceder con este tutorial, asegúrate de que se cumplan los siguientes requisitos previos:

1. Un dispositivo host capaz de ejecutar [Home Assistant](https://www.home-assistant.io/).
2. Una conexión Ethernet o Wi-Fi estable.
3. (Recomendado) Capacidad PoE (Power over Ethernet) o una fuente de alimentación externa de 5 V.
4. [Adaptador Ethernet XIAO(ESP32-S3) W5500](https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html)

<div class="table-center">
 <table>
  <tr>
   <th>Adaptador Ethernet XIAO(ESP32-S3) W5500</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introducción a [Home Assistant](https://www.home-assistant.io/)

Home Assistant es una potente plataforma de automatización del hogar de código abierto que te permite controlar y monitorear tus dispositivos domésticos inteligentes desde una interfaz única y unificada. Actúa como el centro de control de tu hogar inteligente, permitiéndote automatizar rutinas, monitorear sensores y crear un espacio de vida más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Aprender Más 🖱️</font></span></strong></a>
</div>

### Integración con [ESPHome](https://esphome.io/)

ESPHome es una herramienta de creación de firmware de código abierto diseñada específicamente para dispositivos ESP8266 / ESP32. Te permite crear firmware personalizado usando archivos de configuración YAML simples, que luego pueden ser flasheados a tu dispositivo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Aprender Más 🖱️</font></span></strong></a>
</div>

## Comenzando con ESPHome

### Descripción del Proxy Bluetooth

El Proxy Bluetooth actúa como un puente de detección distribuido ligero que extiende la cobertura Bluetooth de Home Assistant más allá del rango incorporado del host. Al desplegar múltiples **nodos ESP32** por todo el espacio, se puede establecer una red de detección Bluetooth de toda la casa, permitiendo conexiones estables a una variedad de dispositivos BLE como sensores de temperatura y humedad, sensores de puertas/ventanas, módulos de iluminación y monitores de plantas.

**Funciones Clave:**

- **Cobertura Extendida:** Elimina la dependencia del rango Bluetooth del host utilizando nodos proxy ESP32 distribuidos para lograr conectividad Bluetooth en toda la casa.
- **Cómo Funciona:**
  - El **Adaptador Ethernet XIAO W5500** habilita el escaneo Bluetooth
  - Recibe paquetes de transmisión BLE cercanos (ej., termómetros, cerraduras inteligentes, luces)
  - Los datos se reenvían a Home Assistant vía **Ethernet o Wi-Fi**
  - Home Assistant reconoce estos dispositivos como **entidades Bluetooth**
  - Los usuarios pueden ver temperatura, nivel de batería, intensidad de señal y otras métricas directamente en la interfaz de Home Assistant

### Instalar el Firmware

Si no has configurado Home Assistant, puedes hacer clic en este enlace y seguir el tutorial oficial de Home Assistant para completar la configuración.[Instalación de Home Assistant](https://www.home-assistant.io/installation/)

**Paso 1.** Instalar ESPhome<br/>

  Si ya has instalado ESPHome, puedes omitir este paso.

- Ve a **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- Iniciar ESPhome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Agregar nuevo dispositivo

    Ve a ESPHome, y haz clic en el botón **Add New Device** en la parte inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>

    Nombra el equipo y selecciona el chip de control principal correspondiente. El XIAO W5500 está diseñado basado en **XIAO ESP32-S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**Paso 3.** Instalar firmware

<details>
<summary>Haz clic aquí para copiar el archivo yaml</summary>

```yaml
esphome:
  name: seeed-esp32-s3
  friendly_name: Bluetooth Proxy
  min_version: 2025.8.0
  name_add_mac_suffix: true

esp32:
  variant: esp32s3
  framework:
    type: esp-idf

ethernet:
  type: W5500
  cs_pin: GPIO2
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

api:
logger:

ota:
  - platform: esphome
    id: ota_esphome

esp32_ble_tracker:
  scan_parameters:
    interval: 1100ms
    window: 1100ms
    active: true

bluetooth_proxy:
  active: true

button:
  - platform: safe_mode
    id: button_safe_mode
    name: Safe Mode Boot

  - platform: factory_reset
    id: factory_reset_btn
    name: Factory reset
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device4.png" style={{width:800, height:'auto'}}/></div>

    Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='Instalar a través del navegador'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con la computadora que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al Adaptador Ethernet XIAO(ESP32-S3) W5500.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

Regresa a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el dispositivo a tu computadora** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx(Windows es COMxxx) y haz clic en connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar a través del host'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método ya que es más simple.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow) etc** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

Espera un momento y verás la retroalimentación como la siguiente imagen. Significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar a través de Wi-Fi'>

:::tip
Esta es la forma más sencilla, pero con la premisa de que al instalar el programa por primera vez, primero debes subir el programa al Panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. Además, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` configuradas correctamente con claves de cifrado válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y luego el firmware se instalará automáticamente en el panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás la retroalimentación como en la siguiente imagen. Si falla, puede deberse a una señal débil. Por favor, acerca el dispositivo más a tu router.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**Paso 4.** Ver los resultados del escaneo

- Navega a **Settings** → **Devices & services** → Bluetooth y selecciona el dispositivo **Bluetooth Proxy**.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_2.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_3.png" style={{width:800, height:'auto'}}/></div>

- Selecciona **Advertisement Monitor** para ver la información de los dispositivos Bluetooth escaneados.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_4.png" style={{width:800, height:'auto'}}/></div>

  - **Addresss**: La dirección de difusión del dispositivo Bluetooth (en formato similar a MAC). Ten en cuenta que esta no es la dirección MAC física real — es una dirección privada aleatoria generada por el mecanismo de privacidad BLE, que cambia periódicamente.
  - **Name**: El nombre anunciado del dispositivo Bluetooth. Si el dispositivo difunde su nombre, este campo ayuda a identificarlo.
  - **Device**: La entidad Bluetooth reconocida en Home Assistant. Si el dispositivo aún no ha sido emparejado o identificado, este campo permanece vacío.
  - **Source**: Indica la fuente de escaneo, es decir, el nodo específico del Bluetooth Proxy (por ejemplo, **Bluetooth Proxy 8fed20**). Esto ayuda a distinguir datos de múltiples nodos proxy.
  - **RRSI**: Indicador de Intensidad de Señal Recibida (en dBm). Cuanto más cerca esté el valor de 0, más fuerte será la señal.

- Alternativamente, selecciona **Visualization** para acceder a la vista.

    La figura muestra la Visualización de Anuncios Bluetooth en Home Assistant, ilustrando la topología de la red de proxy Bluetooth.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_5.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
Muchos dispositivos BLE usan direcciones de privacidad por seguridad, lo que significa que su dirección difundida es aleatoria y se actualiza periódicamente. Como resultado, el mismo dispositivo físico puede aparecer con diferentes direcciones en la lista de anuncios de Home Assistant.
Para identificar un dispositivo de manera confiable, usa su nombre anunciado u otras características como UUIDs de servicio o patrones de intensidad de señal.
:::

## Aplicación

Al aprovechar el proxy Bluetooth implementado en el **Adaptador Ethernet XIAO(ESP32-S3) W5500**, puedes extender significativamente la cobertura Bluetooth para conectar dispositivos Bluetooth. Específicamente, esto se puede lograr basándose en diferentes protocolos Bluetooth. A continuación, tomando las integraciones existentes de Home Assistant (HA) como ejemplos, demostramos los métodos de implementación adaptados para escenarios de aplicación de hogar inteligente.

### [BTHome](https://bthome.io/)

BTHome es un formato BLE eficiente en energía pero flexible para que los dispositivos difundan sus datos de sensores y pulsaciones de botones.<br/>
Tomando como ejemplo la lectura de datos de un sensor de temperatura y humedad DHT11, agrega la integración correspondiente en Home Assistant (HA), lee los datos a través de un proxy Bluetooth, y logra una estabilidad

Además del Adaptador Ethernet XIAO(ESP32-S3) W5500, también necesitarás preparar un XIAO ESP32-C3 y un sensor de temperatura y humedad DHT11.

1. Agregar código Arduino

:::tip
También necesitas agregar los archivos BTHome y DHT al directorio que creaste. Los archivos específicos se pueden acceder en: [DHT&BTHome.zip](https://files.seeedstudio.com/wiki/xiao_w5500_poe/BTHome_Temp_or_Hei_sensor.zip)
:::

```cpp
#include "BTHome.h"
#include "DHT.h"

#define DHTTYPE DHT11   // DHT 11
#define DHTPIN D0     // what pin we're connected to（DHT10 and DHT20 don't need define it）
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

#define DEVICE_NAME "DIY-sensor"
#define ENABLE_ENCRYPT

String BIND_KEY = "231d39c1d7cc1ab1aee224cd096db912"; // Change this key with a string containing 32 of: a-f and 0-9 characters (hex) this will be asked in HA
BTHome bthome;

void setup() {
  Serial.begin(115200);
#ifdef ENABLE_ENCRYPT
  bthome.begin(DEVICE_NAME, true, BIND_KEY, false);
#else
  bthome.begin(DEVICE_NAME, false, "", false);
#endif
  Wire.begin();
  dht.begin();
}

void loop() {
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) 
  {
    Serial.print("Humidity: ");
    Serial.print(temp_hum_val[0]);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temp_hum_val[1]);
    Serial.println(" *C");
  } 
  else 
  {
    Serial.println("Failed to get temprature and humidity value.");
  }

  bthome.resetMeasurement();

  bthome.addMeasurement(ID_TEMPERATURE_PRECISE, temp_hum_val[1]);//3
  bthome.addMeasurement(ID_HUMIDITY_PRECISE, temp_hum_val[0]);//3

  bthome.sendPacket();
  bthome.stop();
  delay(500);
}
```

2. Agregar Integración

- Abre Home Assistant y navega a Settings. Un dispositivo BTHome será descubierto bajo Devices & Services. Haz clic en Add, ingresa la clave (pega la BIND_KEY de 32 caracteres del código), y selecciona Submit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_1.png" style={{width:800, height:'auto'}}/></div>

- Después del envío, serás redirigido a una página donde puedes ver los datos de temperatura y humedad transmitidos, así como la dirección MAC Bluetooth. También puedes seleccionar **Add to dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_2.png" style={{width:800, height:'auto'}}/></div>

- Al hacer clic en la dirección MAC se revela que el dispositivo fue descubierto por el proxy Bluetooth implementado en el Adaptador Ethernet XIAO(ESP32-S3) W5500. Esto confirma que el proxy Bluetooth está funcionando según lo previsto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_3.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_4.png" style={{width:800, height:'auto'}}/></div>

:::tip
El protocolo BTHome solo admite transmisión de datos unidireccional a Home Assistant, y cada pieza de datos transmitidos corresponde a un ID único. Si deseas agregar más dispositivos, consulta [BThome Format](https://bthome.io/format/)
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
