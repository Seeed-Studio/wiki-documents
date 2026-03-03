---
description: El nodo de detección de presencia basado en el XIAO ESP32-C3 puede trabajar con el componente MQTT Room de Home Assistant para habilitar el posicionamiento interior.
title: Desplegando ESPresense en Seeed Studio XIAO ESP32-C3 con Home Assistant
keywords:
  - ESPresense
  - XIAO
  - Home Assistant
  - MQTT
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image132.webp
slug: /xiao-esp32c3-espresense
sku: 113991054
last_update:
  date: 01/16/2026
  author: Carla Guo
---

# Desplegando ESPresense en Seeed Studio XIAO ESP32-C3 con Home Assistant


Este documento describe cómo integrar el sistema de detección de presencia Bluetooth de código abierto, **ESPresense**, con el **Seeed Studio XIAO ESP32-C3**. El nodo de detección de presencia basado en el XIAO ESP32-C3 puede trabajar con el [componente MQTT Room](https://www.home-assistant.io/components/sensor.mqtt_room/) de Home Assistant para habilitar el posicionamiento interior.



## Descripción del Proyecto

**ESPresense** es un sistema de detección de presencia Bluetooth Low Energy (BLE) de código abierto diseñado para trabajar con **Home Assistant** usando **MQTT**.

En esta migración:

### 1. Entorno de Compilación Agregado para XIAO ESP32-C3

La configuración `.ini` ha sido actualizada para agregar un entorno de compilación dedicado para **Seeed Studio XIAO ESP32-C3**.

```ini
[env:seeed_xiao_esp32c3]
extends = esp32c3-cdc            ; XIAO ESP32-C3 uses native USB CDC
board = seeed_xiao_esp32c3
board_build.filesystem = spiffs
lib_deps =
  ${esp32c3.lib_deps}
  ${sensors.lib_deps}
build_flags =
  -D CORE_DEBUG_LEVEL=1
  -D FIRMWARE='"xiao-esp32c3"'   ; Firmware identifier
  -D SENSORS
  ${esp32c3-cdc.build_flags}
```

### 2. Capacidad de Respuesta de Informes Mejorada

Para hacer que el reporte de datos sea más responsivo, varios parámetros en `defaults.h` fueron ajustados de la siguiente manera:

#### A. Sensibilidad de Movimiento Aumentada

El umbral de distancia que activa un reporte temprano ha sido reducido de **0.5 m** a **0.1 m**. Incluso movimientos pequeños ahora activarán la lógica de "reporte temprano".

```cpp
#define DEFAULT_SKIP_DISTANCE 0.1  // changed from 0.5
```

#### B. Intervalo de Reporte Forzado Acortado

El intervalo máximo de reporte ha sido reducido de **5 segundos** a **1–2 segundos**, asegurando actualizaciones de datos más oportunas incluso cuando el movimiento es mínimo.

```cpp
#define DEFAULT_SKIP_MS 1000       // changed from 5000, now is 1 second
```

#### C. Coexistencia Mejorada de Wi-Fi y BLE (2.4 GHz)

Cuando se usa Wi-Fi de 2.4 GHz (chips no-C5), el escaneo Bluetooth se ajusta para evitar monopolizar la antena compartida. La ventana de escaneo BLE se establece ligeramente menor que el intervalo de escaneo, permitiendo a Wi-Fi tiempo de aire suficiente para conexiones MQTT y transmisión de datos.

```cpp
#define BLE_SCAN_INTERVAL 0x80  // 128
#define BLE_SCAN_WINDOW   0x60  // reduced from 0x80 (~75% duty cycle)
```

Este cambio ayuda a reducir la contención interna y minimiza la latencia causada por la preempción de recursos de radio.


## Requisitos de Hardware

* Seeed Studio **XIAO ESP32-C3**
* Cable USB-C (capaz de datos)
* PC (Windows/macOS/Linux)
* Red Wi-Fi estable (2.4 GHz)
* Instancia de Home Assistant


## Software y Herramientas

| Herramienta                        | Propósito                                             |
| ---------------------------------- | ----------------------------------------------------- |
| **PlatformIO**                     | Sistema de compilación y herramienta de flasheo      |
| Cadena de herramientas ESP-IDF (vía ESPresense) | Compilación de firmware                               |
| Navegador web                      | Configuración del dispositivo                         |
| Home Assistant                     | Integración de presencia                              |
| Mosquitto Broker (Complemento HA)  | Backend MQTT                                          |
| MQTT Explorer (opcional)           | Depuración MQTT                                       |
| nRF Connect (solo Android)         | Publicidad BLE                                        |




## 1. Home Assistant – Configuración del Broker MQTT

### Instalar el Complemento Mosquitto Broker

- Abrir **Home Assistant**

   > Si aún no has configurado Home Assistant, por favor consulta esta [guía](https://www.home-assistant.io/installation/) para la configuración.

- Hacer clic en **Settings → Add-ons → Add-on Store**
- Buscar **Mosquitto broker**, instalarlo. Después de la instalación:
   - Hacer clic en **Start**
   - Habilitar:

     - ✔ Start on boot
     - ✔ Watchdog

### Crear Credenciales MQTT

- Ir a **Configuration → Logins → Add**
- Crear un usuario MQTT dedicado (recomendado)
- Anotar:

   - Nombre de usuario
   - Contraseña
   - Dirección IP de Home Assistant

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image1.png" style={{width:1000, height:'auto'}}/></div>


    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image2.png" style={{width:1000, height:'auto'}}/></div>





## 2. Compilar y Flashear ESPresense

- Descargar los [archivos de código ESPresense](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32-C3_BLE_ESPresense), abrir el proyecto usando PlatformIO.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image3.png" style={{width:1000, height:'auto'}}/></div>

   > Si aún no has configurado Platform IO, por favor consulta esta [guía](https://docs.platformio.org/en/latest/integration/ide/vscode.html) para la descarga.

- Esperar a que se complete la instalación de dependencias y configuración del entorno. Seleccionar el entorno **seeed_xiao_esp32c3**, seleccionar el puerto correcto, compilar y cargar.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image4.png" style={{width:1000, height:'auto'}}/></div>

- Esperar a que se complete el flasheo del firmware, presionar el botón Reset para reiniciar el XIAO ESP32-C3.


## 3. Configuración de Wi-Fi y MQTT (Portal Cautivo)

- Alimentar el XIAO ESP32-C3

- En tu PC o teléfono, abrir **configuración de Wi-Fi**, conectar al AP ESPresense (ej. `ESPresense-XXXX`)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image5.png" style={{width:400, height:'auto'}}/></div>

- Abrir navegador: `http://192.168.4.1`

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image6.png" style={{width:1000, height:'auto'}}/></div>

- Llenar los siguientes campos en la página web:

   | Campo              | Descripción                            |
   | ------------------ | -------------------------------------- |
   | **Room Name**      | Identificador lógico de habitación (ej. `room1`) |
   | **Wi-Fi SSID**     | Red de 2.4 GHz                        |
   | **Wi-Fi Password** | Contraseña de red                      |
   | **MQTT Broker IP** | IP de Home Assistant                   |
   | **MQTT Port**      | `1883` (por defecto)                   |
   | **MQTT Username**  | De la configuración Mosquitto         |
   | **MQTT Password**  | De la configuración Mosquitto         |

- Hacer clic en **Save**
- Después de guardar, reiniciar el XIAO ESP32-C3. El dispositivo se conectará automáticamente a WiFi y MQTT.

   > **Recomendación:**
   > Desplegar **al menos dos nodos XIAO ESP32-C3** en diferentes habitaciones para una comparación de presencia significativa.

- Ahora, abrir **Home Assistant**, navegar a **Settings → Devices & Services**


- Los nodos ESPresense aparecerán automáticamente, formato del nombre del dispositivo:

   ```
   ESPresense + <Room Name>
   ```
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image7.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image8.png" style={{width:1000, height:'auto'}}/></div>



## 4. Transmisión de Dispositivos BLE

A continuación, necesitamos hacer que tu dispositivo personal sea detectable por ESPresense vía BLE. En algunos casos, puede que necesites instalar una aplicación para habilitar que tu dispositivo transmita por BLE.

### Dispositivos iOS

Los dispositivos Apple emiten varios mensajes de continuidad BTLE, a menudo identificados por la huella `apple:100?:*-*`.
>En hogares con múltiples iPhones, la información cercana puede colisionar, llevando a huellas duplicadas. Puedes consultar https://espresense.com/devices/apple para resolver el problema.

### Dispositivos Android (Publicidad Manual)

Los dispositivos Android típicamente son reservados y necesitan una aplicación para que emitan anuncios BLE. Por lo tanto, la necesidad de una aplicación para permitirnos encontrarlo.

- Instalar **nRF Connect** y abrir la aplicación.
- Ir a **ADVERTISER → "+" → ADD RECORD**, seleccionar **Manufacturer Data**
- Llenar:

   | Campo      | Valor                                            |
   | ---------- | ------------------------------------------------ |
   | Company ID | `0x004C` (Este es el ID fijo de Apple Inc., y todos los iBeacons deben usar este ID de fabricante.)|
   | Data       | `0215E2C56DB5DFFB48D2B060D0F5A71096E000010001C5` |

   **Explicación del Formato de Datos**

   | Sección         | Descripción     |
   | --------------- | --------------- |
   | `0215`          | Prefijo iBeacon |
   | `E2C56D...96E0` | UUID (16 bytes) |
   | `0001`          | Major           |
   | `0001`          | Minor           |
   | `C5`            | Potencia Medida |

- Guardar y activar la publicidad **ON**

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image9.png" style={{width:400, height:'auto'}}/><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image10.png" style={{width:400, height:'auto'}}/></div>




### Otros dispositivos soportados:
[https://espresense.com/devices](https://espresense.com/devices)



### Verificación de Datos MQTT

Puedes usar [**MQTT Explorer**](https://mqtt-explorer.com/) para ver todos los temas publicados por ESPresense.
-  Conectar a:
   * Host: IP de HA
   * Puerto: 1883
   * Nombre de usuario / Contraseña

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image11.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image12.png" style={{width:1000, height:'auto'}}/></div>

-  Buscar usando los **primeros 8 caracteres de tu UUID**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image13.png" style={{width:1000, height:'auto'}}/></div>






## 5. Presencia de Habitación vía Sensor MQTT Room

### Editar `configuration.yaml`

- Ve a **Settings → Add-ons → Terminal**, abre la terminal
-  Ejecuta:

    ```bash
    ls /config
    ```
    Confirma que `configuration.yaml` existe.

- Edita el archivo:

    ```bash
    nano /config/configuration.yaml
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image14.png" style={{width:1000, height:'auto'}}/></div>

- Añade:

    ```yaml
    sensor:
      - platform: mqtt_room
        device_id: "iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        name: "My iBeacon"
        state_topic: "espresense/devices/iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        timeout: 60
        away_timeout: 120
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image15.png" style={{width:1000, height:'auto'}}/></div>

>⚠ **La indentación YAML es crítica**
>* Usa solo espacios
>* No uses TAB

- Guarda:

   * `Ctrl + O` → Enter
   * `Ctrl + X`



### Validar y Reiniciar

- Ve a **Settings → System → Developer Tools**
- Abre la pestaña **YAML**, haz clic en **Check Configuration**, si es válida, haz clic en **Restart**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image16.png" style={{width:1000, height:'auto'}}/></div>



## 6. Añadir entidades a tu panel de control

Después del reinicio:

- Ve a **Developer Tools → States**
- Busca:

    ```
    sensor.my_ibeacon
    ```

- Si la entidad se actualiza con nombres de habitaciones, la configuración está completa

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image17.png" style={{width:1000, height:'auto'}}/></div>

    >La inicialización del sensor puede tomar algún tiempo. Si el estado muestra not_home, por favor espera pacientemente un momento. Si aún no hay actualización de estado después de un período prolongado, recomendamos usar MQTT Explorer para verificar si ESPresense se ha desconectado o para verificar que tu dispositivo personal puede ser escaneado exitosamente.

- Añade la entidad a tu **Dashboard**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image18.png" style={{width:1000, height:'auto'}}/></div>




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
