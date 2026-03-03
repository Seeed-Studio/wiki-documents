---
description: Introduce cómo usar la función Zigbee del XIAO ESP32C6 y conectarse a Home Assistant a través de Zigbee y zbt-1.
title: Conectar a Home Assistant a través del Zigbee del XIAO ESP32C6
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /xiaoc6_zigbee_led_ha
last_update:
  date: 01/21/2025
  author: Citric
---

# Conectar a Home Assistant a través del Zigbee del XIAO ESP32C6

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

La integración de dispositivos Zigbee en ecosistemas de hogar inteligente se ha vuelto cada vez más popular debido al bajo consumo de energía, confiabilidad y facilidad de uso de Zigbee. En esta wiki, te guiaremos a través de la conexión del **XIAO ESP32C6** a **Home Assistant** mediante su funcionalidad Zigbee. Al final de esta guía, tendrás una demostración funcional donde el XIAO ESP32C6 actúa como un dispositivo Zigbee que puede ser controlado directamente desde el panel de control de Home Assistant.

Este tutorial destaca el uso del SDK de Zigbee de Espressif (Arduino) y demuestra cómo desarrollar e integrar tus propios dispositivos Zigbee en Home Assistant.

## Materiales Necesarios

Para seguir esta guía, necesitarás lo siguiente:

1. **Home Assistant Green**: Un dispositivo de hardware dedicado de Home Assistant para gestionar tu hogar inteligente.
2. **Home Assistant Connect ZBT-1**: Un coordinador Zigbee para habilitar la creación de redes Zigbee y la comunicación.
3. **XIAO ESP32C6**: Una placa de desarrollo con funcionalidad Zigbee habilitada a través del SDK de Espressif.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Home Assistant Connect ZBT-1</th>
   <th>XIAO ESP32C6</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Guía Paso a Paso

:::tip
Los primeros dos pasos se refieren al tutorial oficial para conectar el ZBT-1 con Home Assistant, y también puedes leer el contenido del tutorial a través del enlace aquí.

[Tutorial de Home Assistant Conectar ZBT-1](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### Paso 1. Instalar el Connect ZBT-1 en Home Assistant Green

Conecta el Home Assistant Connect ZBT-1 al cable de extensión USB. Conecta el cable de extensión a tu Home Assistant Green.

:::caution
Los puertos USB 3.0 y las unidades USB 3.0 pueden causar interferencia con los protocolos de 2.4 GHz, incluyendo los proporcionados por el Home Assistant Connect ZBT-1. Es importante usar el cable de extensión USB y posicionar el Home Assistant Connect ZBT-1 lejos de posibles fuentes de interferencia.
:::

1. Navega a **Configuración** en la interfaz de Home Assistant.
2. Ve a **Dispositivos y Servicios** y localiza la integración de Zigbee.
3. Connect ZBT-1 ahora debería haber sido descubierto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. Selecciona **AÑADIR**.
5. En el diálogo, selecciona **Zigbee**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. Selecciona **Enviar** para completar la configuración de la integración Connect ZBT-1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. Tu Connect ZBT-1 ahora es un coordinador Zigbee.

### Paso 2. Crear una Nueva Red Zigbee Usando Connect ZBT-1

1. Navega a **Configuración** en la interfaz de Home Assistant.  
2. Ve a **Dispositivos y Servicios** y localiza la integración de Zigbee.  
3. Connect ZBT-1 se mostrará en tu integración de Automatización del Hogar Zigbee. Selecciona **AÑADIR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. Para confirmar, selecciona **Enviar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. Selecciona **Crear red**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

4. Sigue las indicaciones para inicializar el coordinador Zigbee y prepararlo para el emparejamiento con dispositivos Zigbee.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Flashear el XIAO ESP32C6 con el Programa de Ejemplo Zigbee

1. **Configurar Arduino IDE**:

- Instala la última versión del Arduino IDE y añade soporte para el XIAO ESP32C6 incluyendo el paquete de placas de Espressif.

:::note
Si estás usando el XIAO ESP32C6 por primera vez, por favor lee el enlace wiki a continuación para añadir la placa de desarrollo correctamente.

[Comenzando con XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/)
:::

2. **Cargar el Ejemplo Zigbee_On_Off_Light**:

- Por favor selecciona el modelo correcto de placa de desarrollo: **XIAO_ESP32C6**.
- Abre el ejemplo `Zigbee_On_Off_Light` desde el Arduino IDE.

:::tip
Recomendamos que uses el último paquete de placas esp32-arduino para obtener los programas de ejemplo Zigbee más actualizados y estables.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

- En este ejemplo, usaremos las luces LED monocromáticas integradas en el XIAO ESP32C6, por lo que necesitamos hacer cambios a los pines LED en el programa. Modifica el código para reemplazar `RGB_BUILTIN` con `LED_BUILTIN` para utilizar el indicador LED integrado.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **Configurar Ajustes Zigbee**:

- Establece el modo Zigbee a **ZIGBEE_MODE_ED** (Dispositivo Final).  
- Ajusta el esquema de partición para Zigbee:  
    Navega a `Herramientas -> Esquema de Partición` y selecciona **Zigbee 4MB con spiffs**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **Subir el Programa**:

- Conecta el XIAO ESP32C6 a tu computadora a través de un cable USB-C.  
- Compila y sube el programa de ejemplo modificado al XIAO ESP32C6.
- Si el XIAO está funcionando correctamente entonces deberías ver el mensaje serial mostrado a continuación. Si ves que el XIAO se reinicia constantemente, por favor verifica si los ajustes Zigbee son correctos o actualiza la versión del paquete de placas de desarrollo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### Paso 4. Descubrir el XIAO ESP32C6 en Home Assistant

1. En la interfaz de Home Assistant, navega a **Configuración -> Dispositivos y Servicios**.  
2. Selecciona la integración Zigbee (nombre: ZHA).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. Haz clic en **Nabu Casa HA Connect ZBT-1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. Dentro de la página de detalles del dispositivo Connect ZBT-1, puedes ver **AÑADIR DISPOSITIVO A TRAVÉS DE ESTE DISPOSITIVO**, por favor haz clic en él para ir a la página de búsqueda y emparejamiento de dispositivos Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. Espera un momento, y el XIAO ESP32C6 aparecerá en la lista de dispositivos Zigbee descubiertos.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

Puedes establecer un nombre y ubicación para él en esta página.

6. Luego puedes encontrar este dispositivo en la página de dispositivos de ZHA y agregar su entidad al panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Agregar el XIAO ESP32C6 al Panel de Control

1. Una vez que el XIAO ESP32C6 sea descubierto, agrégalo a tu panel de control de Home Assistant.  
2. Ahora puedes controlar el XIAO ESP32C6 (por ejemplo, alternar el LED integrado) directamente desde Home Assistant.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## Conclusión

Espressif proporciona una amplia gama de tipos de dispositivos Zigbee y un extenso SDK de Zigbee, permitiendo a los desarrolladores crear sus propios dispositivos Zigbee con facilidad. Siguiendo este tutorial, has aprendido cómo integrar el XIAO ESP32C6 en Home Assistant usando Zigbee, agregando un dispositivo personalizado a tu ecosistema de hogar inteligente.  

Con la flexibilidad del SDK de Zigbee de Espressif, puedes comenzar a construir tus propios dispositivos Zigbee para una variedad de aplicaciones y características, y agregarlos sin problemas a Home Assistant para control centralizado. ¡Feliz construcción!

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
