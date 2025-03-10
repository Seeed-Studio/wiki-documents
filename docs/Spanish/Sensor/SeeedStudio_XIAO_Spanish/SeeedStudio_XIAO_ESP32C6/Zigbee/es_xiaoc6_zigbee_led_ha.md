---
description: Introduces how to use the Zigbee function of the XIAO ESP32C6 and connect to Home Assistant via Zigbee and zbt-1.
title: Conectarse a Home Assistant con XIAO ESP32C6 y Zigbee
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /es/xiaoc6_zigbee_led_ha
last_update:
  date: 02/08/2025
  author: Citric
---

# Conectarse a Home Assistant con XIAO ESP32C6 y Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

La integración de dispositivos Zigbee en ecosistemas de casas inteligentes ha ganado popularidad debido al bajo consumo de energía, la fiabilidad y la facilidad de uso de Zigbee. En este wiki, te guiaremos a través de la conexión del **XIAO ESP32C6** a **Home Assistant** a través de su funcionalidad Zigbee. Al final de esta guía, tendrás una demostración funcional donde el XIAO ESP32C6 actuará como un dispositivo Zigbee que puede ser controlado directamente desde el panel de control de Home Assistant.

Este tutorial destaca el uso del Zigbee SDK de Espressif (Arduino) y demuestra cómo desarrollar e integrar tus propios dispositivos Zigbee en Home Assistant.

## Materiales Necesarios

Para seguir este tutorial, necesitarás los siguientes materiales:

1. **Home Assistant Green**: Un dispositivo de hardware dedicado a Home Assistant para gestionar tu casa inteligente.  
2. **Home Assistant Connect ZBT-1**: Un coordinador Zigbee para habilitar la creación y comunicación de redes Zigbee.  
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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Guía Paso a Paso

:::tip
Los dos primeros pasos hacen referencia al tutorial oficial para el **Home Assistant Connect ZBT-1**, y también puedes leer su contenido tutorial a través del siguiente enlace:

[Tutorial de Home Assistant Connect ZBT-1](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### Paso 1. Instalar el Connect ZBT-1 en Home Assistant Green

Conecta el Home Assistant Connect ZBT-1 al cable de extensión USB. Luego, conecta el cable de extensión a tu dispositivo Home Assistant Green.

:::caution
Los puertos USB 3.0 y los discos USB 3.0 pueden causar interferencias con los protocolos de 2.4 GHz, incluidos los proporcionados por el **Home Assistant Connect ZBT-1**. Es importante utilizar el cable de extensión USB y colocar el **Home Assistant Connect ZBT-1** lejos de posibles fuentes de interferencia.
:::

1. Navega a **Configuración** en la interfaz de Home Assistant.
2. Ve a **Dispositivos y Servicios** y localiza la integración Zigbee.
3. El **Connect ZBT-1** ahora debería haber sido descubierto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. Selecciona **AÑADIR**.
5. En el cuadro de diálogo, selecciona **Zigbee**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. Selecciona **Enviar** para completar la configuración de la integración del Connect ZBT-1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. Tu **Connect ZBT-1** ahora es un coordinador Zigbee.

### Paso 2. Crear una Nueva Red Zigbee Usando Connect ZBT-1

1. Navega a **Configuración** en la interfaz de Home Assistant.  
2. Ve a **Dispositivos y Servicios** y localiza la integración Zigbee.  
3. El **Connect ZBT-1** aparecerá en tu integración Zigbee Home Automation. Selecciona **AÑADIR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. Para confirmar, selecciona **Enviar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. Selecciona **Crear red**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

6. Sigue las instrucciones para inicializar el coordinador Zigbee y prepararlo para el emparejamiento con dispositivos Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Flashear el XIAO ESP32C6 con el Programa de Ejemplo Zigbee

1. **Configurar el Arduino IDE**:

- Instala la última versión de Arduino IDE y agrega soporte para el XIAO ESP32C6 incluyendo el paquete de placas de Espressif.

:::nota
Si estás usando el XIAO ESP32C6 por primera vez, por favor lee el siguiente enlace del wiki para agregar correctamente la placa de desarrollo.

[Introducción al XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)
:::

2. **Cargar el Ejemplo Zigbee_On_Off_Light**:

- Selecciona el modelo correcto de la placa de desarrollo: **XIAO_ESP32C6**.
- Abre el ejemplo `Zigbee_On_Off_Light` desde el Arduino IDE.

:::tip
Recomendamos que utilices el paquete de placas más reciente para esp32-arduino para obtener los programas de ejemplo Zigbee más actualizados y estables.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

En este ejemplo, utilizaremos los LED monocromáticos integrados en el XIAO ESP32C6, por lo que necesitamos hacer cambios en los pines del LED en el programa. Modifica el código para reemplazar `RGB_BUILTIN` con `LED_BUILTIN` para utilizar el indicador LED integrado. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **Configurar la configuración de Zigbee**:

- Establece el modo Zigbee a **ZIGBEE_MODE_ED** (Dispositivo final).  
- Ajusta el esquema de partición para Zigbee:  
    Navega a `Herramientas -> Esquema de partición` y selecciona **Zigbee 4MB con spiffs**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **Subir el programa**:

- Conecta el XIAO ESP32C6 a tu computadora mediante un cable USB-C.  
- Compila y sube el programa de ejemplo modificado al XIAO ESP32C6.  
- Si el XIAO funciona correctamente, deberías ver el mensaje serial mostrado a continuación. Si ves que el XIAO se reinicia constantemente, verifica si la configuración de Zigbee es correcta o actualiza la versión del paquete del desarrollo de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### Paso 4. Descubrir el XIAO ESP32C6 en Home Assistant

1. En la interfaz de Home Assistant, navega a **Configuración -> Dispositivos y Servicios**.  
2. Selecciona la integración Zigbee (nombre: ZHA).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. Haz clic en **Nabu Casa HA Connect ZBT-1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. Dentro de la página de detalles del dispositivo Connect ZBT-1, verás la opción **AGREGAR DISPOSITIVO A TRAVÉS DE ESTE DISPOSITIVO**, haz clic en ella para ir a la página de búsqueda y emparejamiento de dispositivos Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. Espera un momento, y el XIAO ESP32C6 aparecerá en la lista de dispositivos Zigbee descubiertos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

Puedes asignarle un nombre y una ubicación en esta página.

6. Luego podrás encontrar este dispositivo en la página de dispositivos de ZHA y agregar su entidad al panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Agregar el XIAO ESP32C6 al Panel de Control

1. Una vez que el XIAO ESP32C6 sea descubierto, agrégalo al panel de control de Home Assistant.  
2. Ahora podrás controlar el XIAO ESP32C6 (por ejemplo, encender o apagar el LED incorporado) directamente desde Home Assistant.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## Conclusión

Espressif ofrece una amplia variedad de tipos de dispositivos Zigbee y un extenso SDK de Zigbee, lo que permite a los desarrolladores crear sus propios dispositivos Zigbee con facilidad. Siguiendo este tutorial, has aprendido a integrar el XIAO ESP32C6 en Home Assistant utilizando Zigbee, añadiendo un dispositivo personalizado a tu ecosistema de hogar inteligente.

Con la flexibilidad del SDK de Zigbee de Espressif, puedes empezar a crear tus propios dispositivos Zigbee para diversas aplicaciones y características, y agregarlos sin problemas a Home Assistant para un control centralizado. ¡Feliz construcción!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
