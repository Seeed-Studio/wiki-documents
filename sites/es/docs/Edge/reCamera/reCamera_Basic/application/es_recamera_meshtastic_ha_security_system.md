---
description: Crea un sistema de seguridad de largo alcance usando reCamera y Meshtastic - envía de forma inalámbrica alertas de detección por IA a Home Assistant a través de una red mallada LoRa
title: Creación de un sistema de seguridad de largo alcance con reCamera y Meshtastic
keywords:
  - Edge AI
  - reCamera
  - Meshtastic
  - LoRa
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif
slug: /recamera_meshtastic_ha_security_system_bak
sku: 100029708
sidebar_position: 13
last_update:
  date: 06/29/2026
  author: Sizhao Zhou
createdAt: '2026-06-29'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/recamera_meshtastic_ha_security_system_bak/
---

# Creación de un sistema de seguridad de largo alcance con reCamera y Meshtastic  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif" /></div>  

## 1. Introducción  

¿Cómo implementar una vigilancia de seguridad inteligente en la naturaleza, grandes granjas o zonas montañosas remotas sin cobertura de red WiFi ni celular?  

Este tutorial ofrece una solución de “seguridad sin red” muy geek: aprovechar la potente capacidad de computación de IA en el borde de **reCamera PoE** para la detección de personas en tiempo real. Una vez que se detecta un objetivo, se activa de inmediato el **módulo XIAO ESP32S3 + Wio-SX1262 (transmisor)** a través de los pines de hardware subyacentes. La señal de alerta se convierte en ondas de radio de baja frecuencia, que atraviesan kilómetros de terreno complejo hasta ser captadas por el **receptor Wio-SX1262** en interiores, y se traducen sin problemas en mensajes MQTT enviados a tu sistema local de **Home Assistant (HA)**.  

Toda la cadena no requiere servidores en la nube, logrando realmente la combinación perfecta de privacidad, bajo consumo de energía y alcance ultra largo.  

### Arquitectura de comunicación del sistema  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/system_framework.png" /></div>  

El flujo de datos general es el siguiente:  

- reCamera PoE ejecuta el modelo de detección de personas YOLO y emite una señal de nivel bajo a través del pin GPIO cuando se detecta una persona  
- XIAO ESP32S3 (transmisor) captura el disparo de nivel bajo a través del pin D2 y envía paquetes de radio LoRa mediante Wio-SX1262  
- XIAO ESP32S3 (receptor) recibe los paquetes LoRa a través de Wio-SX1262 y los envía a Home Assistant por WiFi usando el protocolo MQTT  
- Home Assistant recibe el mensaje MQTT y dispara alertas automatizadas (notificaciones, vinculación con otros dispositivos inteligentes, etc.)  

---  

## 2. Preparación de hardware  

<table align="center">
 <tr>
  <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
  <th>reCamera PoE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
   </a>
  </div></td>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
   </a>
  </div></td>
 </tr>
</table>  

- Kit XIAO ESP32S3 & Wio-SX1262: 2 juegos (uno para el transmisor LoRa y otro para el receptor LoRa)  
- Host inteligente local: 1 unidad, utilizada para ejecutar Home Assistant y el broker MQTT (cualquier pequeño host capaz de ejecutar HA es aceptable)  
- Cables de extensión Dupont: varios, utilizados para el cableado físico de señales entre el GPIO de reCamera y XIAO ESP32S3  

---  

## 3. Configuración de la red Meshtastic  

Para lograr comunicación LoRa de largo alcance entre dos dispositivos XIAO ESP32S3, necesitamos flashearlos con el firmware de código abierto **Meshtastic**.  

### 3.1 Flasheo de firmware y sincronización básica de RF (requerido tanto para receptor como para transmisor)  

**Paso 1**: Conecta el XIAO ESP32S3 al ordenador mediante un cable de datos USB-C.  

:::note Note  
Antes de flashear, pon el ESP32 en modo de descarga Bootloader. Método de operación: mantén pulsado el botón BOOT, presiona una vez el botón RESET y luego suelta el botón BOOT.  
:::  

**Paso 2**: Visita el [Meshtastic Web Flasher](https://flasher.meshtastic.org/), selecciona `Seeed Xiao ESP32-S3` como tipo de dispositivo, marca **Full Erase** y haz clic en **Flash** para escribir el firmware.  

**Paso 3**: Después de flashear el firmware, visita el [Meshtastic Web Client](https://client.meshtastic.org/), haz clic en **Add Connection** para añadir un nuevo dispositivo, selecciona **Serial** como método de conexión, selecciona el dispositivo serie correspondiente y haz clic en **Connect**.  

**Paso 4**: Ve a **Settings → Radio Config → LoRa**, ajusta `Region` a la banda de frecuencia legal de tu ubicación (por ejemplo, `CN` o `US`), y establece `Modem Preset` en **`Short Turbo`** para una velocidad de respuesta más rápida.  

### 3.2 Configuración del receptor (colocado en interiores para conectarse a HA)  

El receptor se encarga de recibir los paquetes LoRa y enviarlos a Home Assistant mediante MQTT sobre WiFi.  

**Paso 1 — Generar y guardar la clave**: En la pestaña **Channels**, genera una `Pre-Shared Key` de 128 bits para el canal Primary.  

:::note Note  
Asegúrate de copiar y guardar esta clave sin conexión; será necesario introducirla más tarde en el transmisor, y las claves en ambos extremos deben ser idénticas.  
:::  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_Meshtastic_password.png" /></div>  

**Paso 2 — Conectarse a la red local**: En **Device Config → Network**, habilita WiFi e introduce el SSID y la contraseña de tu WiFi doméstico.  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_connect_wifi.png" /></div>  

**Paso 3 — Habilitar el reenvío MQTT**: En **Module Config → MQTT**, marca `Enable MQTT Client`, habilita `JSON Enabled` e introduce con precisión la dirección IP local de tu host HA en `Address` (por ejemplo, `192.168.4.7`).  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_mqtt_config.png" /></div>  

**Paso 4**: Tras completar todas las configuraciones, haz clic en **Save** en la esquina superior derecha para guardar y espera a que el dispositivo se reinicie.  

### 3.3 Configuración del transmisor (colocado en exteriores para conectarse a reCamera)  

El transmisor se encarga de monitorizar los cambios de nivel del pin GPIO y enviar paquetes de alerta LoRa cuando se detecta un nivel bajo.  

:::note Note  
**No** habilites WiFi ni MQTT en el transmisor; solo necesita centrarse en recibir disparos GPIO y enviar señales de radio LoRa.  
:::  

**Paso 1**: Desconecta el ESP32 receptor, sustitúyelo por el ESP32 del transmisor y haz clic directamente en **Connect** en Meshtastic Web Client para conectar.  

**Paso 2 — Sincronizar parámetros de RF**: Ve a **Radio Config → LoRa** y asegúrate de que sean coherentes con el receptor (Region y Modem Preset exactamente iguales); no es necesario habilitar MQTT.  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_lora_config.png" /></div>  

**Paso 3 — Introducir la Pre-Shared Key**: En la pestaña **Channels**, pega íntegramente la `Pre-Shared Key` generada por el receptor.  

**Paso 4 — Configurar el disparo por hardware GPIO**: Activa el módulo en **Module Config → Detection Sensor** y configúralo con los siguientes parámetros:  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_detect_config.png" /></div>  

| Parámetro | Configuración | Descripción |
| :--- | :--- | :--- |
| Minimum Broadcast Seconds | 15 | Intervalo mínimo de difusión para evitar congestión del canal causada por disparos frecuentes |
| Friendly Name | Human | Nombre de alerta personalizado, que se utilizará como identificador del mensaje MQTT |
| Monitor Pin | 3 | Corresponde al pin D2 de XIAO ESP32S3 |
| Detection Triggered Type | LOGIC_LOW | Disparo por nivel bajo (reCamera emite nivel bajo cuando se detecta una persona) |  

**Paso 5**: Haz clic en **Save** en la esquina superior derecha para guardar y espera a que el dispositivo se reinicie.  

---  

## 4. Configuración del endpoint reCamera y cableado físico  

### 4.1 Liberar recursos del sistema  

De forma predeterminada, los servicios en segundo plano Node-RED y SSCMA de reCamera ocupan recursos de la cámara. Inicia sesión en reCamera mediante SSH (la IP predeterminada es `192.168.42.1`, el nombre de usuario y la contraseña son ambos `recamera`), y ejecuta los siguientes comandos en la terminal para detener los servicios en segundo plano:  

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```  

### 4.2 Iniciar el script de reenvío de flujo de vídeo  

:::note Note  
El host que ejecuta el script debe estar en la **misma red local** que reCamera PoE. La versión reCamera PoE solo necesita estar conectada al mismo router o switch para obtener una dirección IP.  
:::  

En el host de monitorización que utilizas para recibir el flujo de vídeo, ejecuta el script de Python para recibir los fotogramas de vídeo enviados por reCamera:  

```bash
python udp_client.py
```  

### 4.3 Iniciar el programa de detección de personas  

Ejecuta el siguiente comando en la terminal de reCamera para iniciar el modelo de detección de personas YOLO integrado. El primer parámetro es la ruta del archivo de modelo (puedes usar directamente el modelo que viene con reCamera), y el segundo parámetro es la dirección IP del host que ejecuta el script de reenvío de flujo de vídeo:  

```bash
sudo ./model_detector ./Models/model.cvimodel 192.168.4.7
```  

### 4.4 Conectar el transmisor ESP32 a reCamera  

Tras completar las configuraciones de software anteriores, utiliza cables Dupont para conectar físicamente el XIAO ESP32S3 (transmisor) a reCamera:  

- Cable negro: conecta el pin **GND** del ESP32 → pin **GND** de reCamera  
- Cable verde: conecta el pin **D2** del ESP32 → pin de salida de señal GPIO de reCamera  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_xiao_connect_line.png" /></div>  

:::note Note  
Proporciona una fuente de alimentación independiente para el transmisor ESP32 (mediante cable USB o batería) para garantizar que el módulo LoRa tenga suficiente potencia de transmisión.  
:::  

---  

## 5. Recepción de alertas en Home Assistant  

### 5.1 Confirmar que el receptor funciona con normalidad  

Antes de comenzar, asegúrate de que el ESP32 receptor esté encendido y funcionando, conectado a la misma red WiFi que el host de HA, y que la dirección MQTT esté configurada correctamente.  

### 5.2 Escuchar mensajes MQTT en HA  

Abre un navegador, introduce la dirección IP de Home Assistant y ve a la **interfaz de gestión de MQTT**. Habilita la opción **Listen to all** en la configuración.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/ha_show_result.png" /></div>  

Cuando reCamera detecta a una persona, el transmisor Meshtastic envía la información de alerta vía LoRa al receptor, que luego envía a HA a través de MQTT un mensaje que contiene `Human` (el Friendly Name configurado en el transmisor). Verás el mensaje de alerta en tiempo real en la interfaz de escucha de MQTT:  

```json
{
  "payload": {
    "text":"Human detect"
  }
}
```  

### 5.3 Configurar alertas automatizadas en HA  

Crea una regla de automatización en Home Assistant para activar acciones de alerta (como notificaciones móviles, enlace con alarmas, registro de logs, etc.) cuando `payload.text` en el mensaje MQTT sea `Human detect`, completando el bucle cerrado de todo el sistema de "seguridad sin red".  

---  

## 6. Notas  

- El `Region` y `Modem Preset` LoRa del transmisor y del receptor deben ser exactamente iguales; de lo contrario, la comunicación fallará  
- La `Pre-Shared Key` del transmisor y del receptor debe ser la misma; de lo contrario, los paquetes no podrán descifrarse correctamente  
- Configurar `Minimum Broadcast Seconds` demasiado corto puede causar congestión en el canal LoRa; se recomienda mantenerlo por encima de 15 segundos  
- El pin GPIO de reCamera es de nivel 3,3 V, lo que es compatible con el nivel del pin D2 de XIAO ESP32S3, por lo que no se requiere conversión de nivel  
- El transmisor debe colocarse en una posición lo más abierta y elevada posible para obtener la mejor distancia de comunicación LoRa  

---  

## 7. Preguntas frecuentes  

### P1: ¿Qué hacer si el receptor y el transmisor no pueden comunicarse?  

Comprueba si el `Region` y `Modem Preset` LoRa en ambos extremos son exactamente iguales y si la `Pre-Shared Key` es idéntica. Además, confirma que la distancia entre los dos dispositivos esté dentro del rango efectivo de comunicación LoRa y verifica si la antena está instalada correctamente.  

### P2: ¿reCamera detecta a una persona pero HA no recibe la alerta?  

Realiza la resolución de problemas en el siguiente orden: si la salida de señal GPIO de reCamera es normal (medible con un multímetro); si el Monitor Pin del módulo Detection Sensor en el transmisor está configurado correctamente en 3 (D2); si las configuraciones de WiFi y MQTT del receptor son correctas y si en MQTT Address se ha introducido la IP del host de HA.  

### P3: ¿Cómo confirmar que el receptor Meshtastic se ha conectado correctamente a WiFi y MQTT?  

Comprueba el panel de estado del dispositivo del receptor en Meshtastic Web Client para confirmar que el estado de WiFi es Connected y el estado de MQTT es Connected.  

---  

## 8. Recursos  

- [Guía de inicio rápido de reCamera](https://wiki.seeedstudio.com/es/recamera_getting_started/)  
- [Documentación oficial de Meshtastic](https://meshtastic.org/docs/)  
- [Meshtastic Web Flasher](https://flasher.meshtastic.org/)  
- [reCamera OS en GitHub](https://github.com/Seeed-Studio/reCamera-OS)  
- [Wiki de XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/)  

---  

## Soporte técnico y debate sobre el producto  

Gracias por elegir nuestros productos. Ofrecemos distintos niveles de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Proporcionamos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>