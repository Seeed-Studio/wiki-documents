---
title:  Conectar a Home Assistant a través del XIAO ESP32C5 Zigbee
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /es/xiao_esp32c5_zigbee_homeassistant
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
---

# Conectar a Home Assistant a través del XIAO ESP32-C5 Zigbee

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div><br/>

La integración de dispositivos Zigbee en ecosistemas de hogar inteligente se ha vuelto cada vez más popular debido al bajo consumo de energía, confiabilidad y facilidad de uso de Zigbee. En esta wiki, te guiaremos a través de la conexión del **XIAO ESP32-C5** a **Home Assistant** a través de su funcionalidad Zigbee. Al final de esta guía, tendrás una demostración funcional donde el XIAO ESP32-C5 actúa como un dispositivo Zigbee que puede ser controlado directamente desde el panel de control de Home Assistant.

Este tutorial destaca el uso del SDK de Zigbee de Espressif (Arduino) y demuestra cómo desarrollar e integrar tus propios dispositivos Zigbee en Home Assistant.

## Preparación del Hardware

Para seguir esta guía, necesitarás lo siguiente:

1. **Home Assistant Green**: Un dispositivo de hardware dedicado de Home Assistant para gestionar tu hogar inteligente.
2. **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E**: Un coordinador Zigbee para habilitar la creación de redes Zigbee y la comunicación.
3. **XIAO ESP32-C5**: Una placa de desarrollo con funcionalidad Zigbee habilitada a través del SDK de Espressif.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
   <th>XIAO ESP32-C5</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-113991082-sonoff-zigbee-3.0-usb-dongle-plus-feature.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip

Si no tienes un Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E a mano, también puedes elegir el [**Home Assistant Connect ZBT-2**](https://www.seeedstudio.com/Home-Assistant-Connect-ZBT-2-p-6573.html).
:::

## Integrando Zigbee con Home Assistant

Te mostraremos cómo usar el XIAO ESP32-C5 como un dispositivo Zigbee para conectar a Home Assistant.

### Conectar ZBDongle-E

Inserta el **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E** en un cable de extensión USB. Conecta el cable de extensión al **Home Assistant Green**.

:::caution
Los puertos USB 3.0 y las unidades USB 3.0 pueden causar interferencia con protocolos de 2.4 GHz, incluyendo los proporcionados por Home Assistant Connect ZBDongle-E. Es importante usar el cable de extensión USB y posicionar el Home Assistant Connect ZBDongle-E lejos de posibles fuentes de interferencia.
:::

**Paso 1.** Descubriendo Dispositivos Zigbee

- Setting -> Devices & services

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_1.png" style={{width:800, height:'auto'}}/></div><br/>

-Bajo Integrations, encontrarás el dispositivo SONOFF Zigbee 3.0 USB Dongle Plus V2, que es el Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** Agregando Dispositivos Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_3.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 3.** Creando una Red Zigbee

- Después de hacer clic en Submit, se te pedirá que selecciones el modo del dispositivo Zigbee. Elige crear una red Zigbee en Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_4.png" style={{width:800, height:'auto'}}/></div><br/>

- Una vez exitoso, encontrarás que el dispositivo Zigbee ha sido agregado bajo Configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_5.png" style={{width:800, height:'auto'}}/></div><br/>

- El ZBDongle-E está configurado como el coordinador, que puede controlar dispositivos finales Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_6.png" style={{width:800, height:'auto'}}/></div><br/>

### Flashear el Ejemplo Zigbee

Usaremos el ejemplo Zigbee `HA_On_Off_Light` del Arduino IDE para esta demostración.<br/>
Si no has usado el Arduino IDE antes, por favor consulta [Introducción al Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/#software) para comenzar.

**Paso 1.** selecciona el ejemplo del Arduino IDE a través de la ruta: **File** -> **Examples** -> **Zigbee** -> **Zigbee_On_Off_Light**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_light.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** Configurar el Dispositivo Final y el Esquema de Partición

- Haz clic en **Tools** -> **Zigbee Mode** y selecciona el modo como **Zigbee ED (End Device)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_1.png" style={{width:800, height:'auto'}}/></div>

- Selecciona Partition Scheme, ve a **Tools** -> **Partition Scheme** -> **Zigbee 8MB with spiffs**

La memoria FLASH del XIAO ESP32-C5 es de 8MB. Al seleccionar un esquema de partición, se recomienda elegir **Zigbee 8MB with spiffs**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 3.** Modificar el Pin LED y el Nombre

- Localiza el código relacionado con la configuración de pines en el ejemplo.

```cpp
uint8_t led = RGB_BUILTIN;
```

- En el XIAO ESP32-C5, el LED USER integrado corresponde al pin GPIO27, que necesita ser modificado.

```cpp
uint8_t led = 27;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n2.png" style={{width:800, height:'auto'}}/></div><br/>

- En el XIAO ESP32-C5, el LED USER integrado corresponde al pin GPIO27, que necesita ser modificado.

```cpp
zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

- Modificado

```cpp
zbLight.setManufacturerAndModel("XIAO-ESP32-C5", "ZBLightBulb");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 4.** Cargar

Carga el código de ejemplo con los pines modificados al XIAO ESP32-C5.

### Conectar a la Red Zigbee

Conecta el XIAO ESP32-C5 (configurado como un Dispositivo Final Zigbee) a la red Zigbee creada en Home Assistant.

**Paso 1.** Descubrir Dispositivos Finales

- Después de flashear el código de ejemplo al XIAO ESP32-C5, se unirá automáticamente a la red Zigbee. Abre la página de Integrations, y verás aparecer dos dispositivos Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_7.png" style={{width:800, height:'auto'}}/></div><br/>

- Uno es el dispositivo Coordinador (el ZBDongle-E conectado al Home Assistant Green), y el otro es el Dispositivo Final (XIAO-ESP32-C5 ZBLightBulb).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Para unirse a la red Zigbee más rápido y de manera más estable, puedes conectar la antena flexible FPC del paquete al XIAO ESP32-C5.
:::

**Paso 2.** Agregar al Panel de Control

- Haz clic en el dispositivo **XIAO-ESP32-C5 ZBLightBulb** y agrégalo al panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_9.png" style={{width:800, height:'auto'}}/></div><br/>

- Puedes encontrar el dispositivo **XIAO-ESP32-C5 ZBLightBulb** en el panel de control, donde puedes enviar comandos de control a él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_10.png" style={{width:800, height:'auto'}}/></div><br/>

### Presentación del Efecto

- Cuando el dispositivo final XIAO ESP32-C5 se une exitosamente a la red Zigbee, se mostrará en el Serial Monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_11.png" style={{width:800, height:'auto'}}/></div><br/>

- Efecto Real

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>

## Conclusión

Espressif ofrece una amplia gama de tipos de dispositivos Zigbee y un extenso SDK de Zigbee, permitiendo a los desarrolladores crear fácilmente sus propios dispositivos Zigbee. Siguiendo este tutorial, has aprendido cómo integrar el XIAO ESP32-C5 en Home Assistant usando Zigbee, agregando dispositivos personalizados a tu ecosistema de hogar inteligente.

Con la flexibilidad del SDK Zigbee de Espressif, puedes comenzar a construir tus propios dispositivos Zigbee para diversas aplicaciones y características, y agregarlos sin problemas a Home Assistant para un control centralizado. ¡Feliz construcción!

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
