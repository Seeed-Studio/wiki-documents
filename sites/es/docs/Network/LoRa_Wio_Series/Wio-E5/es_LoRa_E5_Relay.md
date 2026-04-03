---
description: Instrucciones de la función de relé LoRaWAN de Wio-E5.
title: Función de relé Wio-E5
keywords:
  - wio
  - docusaurus
slug: /lora-e5_relay
sku: 317990687,317990829
last_update:
  date: 03/28/2026
  author: David Du
createdAt: '2026-03-28'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/es/lora-e5_relay/
---
# Guía de la función de relé LoRaWAN de Wio-E5

<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-Tape-Reel-p-5302.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

> LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.
La marca LoRa® es una marca registrada de Semtech Corporation o sus filiales.

**Hardware aplicable**: Módulo Wio-E5 LoRa®

**Firmware**: Firmware personalizado (consulte antes de realizar el pedido)

**Versión del documento**: V1.0

**Servidor compatible**: ChirpStack / The Things Network (TTN) 

> Haz clic [Aquí](https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/rhf0m055-v5.1.2-20250319.ebin.bin) para descargar el firmware de la función de relé LoRaWAN de Wio-E5.

## 1. Descripción general

La función de relé de Wio-E5 se basa en la [Especificación de relé LoRaWAN](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay), lo que permite que los dispositivos en áreas sin cobertura directa de gateway accedan a la red LoRaWAN a través de un dispositivo **Relay Master**.

### Conceptos clave

| Rol | Descripción | Conexión de red |
|:---:|:---|:---|
| **Relay Master** | Actúa como dispositivo puente, escuchando y reenviando paquetes desde el `Slave` al gateway real | Conexión directa a la red LoRaWAN (OTAA) |
| **Relay Slave** | Situado en zonas sin cobertura, accede a la red de forma indirecta a través del `Master` | Conexión indirecta a través del `Master` |
| **WOR** <br /> (Wake-on-Radio) | El `Slave` envía periódicamente tramas de activación, el `Master` escucha y responde | - |

### Aspectos destacados del flujo de trabajo
- **Detección CAD**: El Master abre una ventana de detección de actividad de canal cada 1 segundo para escuchar al Slave
- **Sincronización de tiempo**: Tras la comunicación inicial, el Slave sincroniza la hora con el Master, reduciendo los símbolos de preámbulo de **259 a 15**, lo que reduce significativamente el consumo de energía y la ocupación de canal
- **Ventana RXR**: El Slave utiliza la tercera ventana de recepción (RX Window 3) para recibir datos descendentes

---

## 2. Requisitos previos

### 2.1 Lista de hardware
- **Módulo Wio-E5** × 2 (uno como Master, otro como Slave)
- **Gateway LoRaWAN** (por ejemplo, SenseCAP M2 Multi-Platform)
- **Herramienta USB-a-Serie** (Baud Rate: **9600**)
- **Ordenador** con herramienta de depuración serie instalada (por ejemplo, XCOM, Putty)

### 2.2 Selección del entorno de servidor

| Fase | Plataforma recomendada | Notas |
|:---|:---|:---|
| **Pruebas** | **ChirpStack** | Soporte nativo de Relay, interfaz web para vinculación de dispositivos |
| **Producción** | **TTN** | Requiere configuración con la herramienta TTN CLI. TTN actualmente acepta mensajes de relé pero carece de una interfaz web completa de gestión de Relay |

---

## 3. Configuración del dispositivo (comandos AT)

:::note 
Todos los comandos AT deben introducirse mediante la herramienta serie con baud rate configurado a **9600**, terminados con retorno de carro (`<CR><LF>`).
:::

### 3.1 Configuración del Relay Slave

```bash
# 1. Set to OTAA mode
AT+MODE=OTAA

# 2. Set frequency band (EU868 example)
AT+DR=EU868

# 3. Set channels (0-2)
AT+CH=NUM,0-2

# 4. Enable Slave mode (Critical)
AT+STDRELAY=MODE,SLAVE

# 5. Get device ID information (record DevEUI and AppEUI)
AT+ID

# 6. Set AppKey (generated on server side)
AT+KEY=APPKEY,"your_app_key_here"
```

### 3.2 Configuración del Relay Master

```bash
# 1. Basic network settings (same as Slave)
AT+MODE=OTAA
AT+DR=EU868
AT+CH=NUM,0-2

# 2. Initially disable Relay mode (enabled via server downlink)
AT+STDRELAY=MODE,OFF

# 3. Set AppKey
AT+KEY=APPKEY,"your_app_key_here"

# 4. Enable debug logs (to observe forwarding process)
AT+LOG=DEBUG
```

## 4. Configuración del servidor (ChirpStack)

### 4.1 Registrar gateway y aplicación

1. Registrar gateway: Gateways → Add gateway → Introducir el Gateway EUI
2. Crear aplicación: Applications → Add application → Introducir nombre (por ejemplo, relay-app)

### 4.2 Crear perfiles de dispositivo

#### Perfil Slave
- General: Seleccionar Region (EU868), LoRaWAN 1.0.4
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-1.png" alt="pir" width={600} height="auto" /></p>


- Pestaña Relay:
    - Device is a Relay ❌
    - Device is a Relay capable end-device ✅
    - Only use Relay ✅


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-2.png" alt="pir" width={600} height="auto" /></p>


#### Perfil Master

- General: Igual que arriba
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-1.png" alt="pir" width={600} height="auto" /></p>


- Pestaña Relay:
    - Device is a Relay ✅
    - Relay enabled ✅
    - Device is a Relay capable end-device ❌

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-2.png" alt="pir" width={600} height="auto" /></p>

### 4.3 Registrar dispositivos y vincular

**Paso 1: Registrar dispositivo Slave**
- Ir a relay-app → Devices → Add
- Rellenar: Device EUI, Join EUI, seleccionar Slave Device Profile
- Introducir AppKey en OTAA Keys

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-tx-1.png" alt="pir" width={600} height="auto" /></p>

**Paso 2: Registrar dispositivo Master**
- Igual que arriba, seleccionar Master Device Profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-rx-1.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Vincular relación (Crítico)**
1. Entrar en la lista de dispositivos en relay-app
2. Seleccionar dispositivo Slave → Hacer clic en Selected devices → Add to relay
3. Seleccionar el dispositivo Master correspondiente como relay host en la ventana emergente
4. Verificación: Ir a la pestaña Relays, se debería ver el Slave listado bajo el Master

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-2.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-3.png" alt="pir" width={600} height="auto" /></p>

## 5. Configuración del servidor (TTN)

:::note
TTN requiere **Command Line Interface (CLI)** para la configuración de Relay. La interfaz web solo admite el registro básico de dispositivos.
:::

### 5.1 Registro básico
1. Registrar gateway: `Gateways` → `Register gateway` → Introducir EUI y Frequency Plan
2.  Aplicación: `Applications` → `Add application` → Establecer ID (**relay-app**)
3. Registrar dispositivos:
    - Slave: Establecer ID (**relay-tx**), introducir `DevEUI`/`JoinEUI`/`AppKey`
    - Master: Establecer ID (**relay-rx**), introducir `DevEUI`/`JoinEUI`/`AppKey`

### 5.2 Configuración por CLI (ejemplo en Windows)

```bash
# 1. Download and configure CLI (version 3.32.2+)
ttn-lw-cli.exe use "eu1.cloud.thethings.network"

# 2. Login to TTN (opens browser for authorization)
ttn-lw-cli.exe login

# 3. Enable Relay Master (serving mode)
ttn-lw-cli.exe relays create relay-app relay-rx --mode.serving

# 4. Enable Relay Slave and associate with Master (always via Master)
ttn-lw-cli.exe relays create relay-app relay-tx \
  --mode.served.mode.always \
  --mode.served.serving-device-id relay-rx

# 5. Create uplink forwarding rule (index 0)
ttn-lw-cli.exe relays uplink-forwarding-rules create relay-app relay-rx 0 --device-id relay-tx
```

> Para más información, consulta la [documentación oficial de TTN](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/).


## 6. Pruebas de validación

### 6.1 Iniciar Relay Master

Abre la herramienta de puerto serie y selecciona el puerto serie correspondiente con un baud rate de **9600** para monitorizar el registro (Log).

```bash
# 1. Turn on log output:
AT+LOG=DEBUG

# 2. Reset device
AT+RESET

# 3. The Relay Master is turned on and off by the server downlink control, turn off the Relay mode first 
AT+STDRELAY=MODE,OFF

# 4. Join network (observe logs until +JOIN:Done)
AT+JOIN

# 5. Trigger uplink to receive Relay Config MAC command from server
AT+MSG

# Logs should show:
# +LOG: DEBUG ... MACCMD, RX, 0219010350FF00010640002000000042400043007F07
# Then CAD window opens every 1 second: 
# +LOG: DEBUG 211708 LORA   CAD, 865100000, SF9, 125KHz
```

En este punto, el `Relay Master` está listo para despertar y reenviar utilizando el Relay Slave.

### 6.2 Iniciar Relay Slave

```bash
# 1. Ensure Slave mode is set
AT+STDRELAY=MODE,SLAVE

# 2. Reset and enable logs
AT+RESET
AT+LOG=DEBUG

# 3. Attempt network join (via Master forwarding)
AT+MODE=OTAA
AT+JOIN

# Logs should show:
# +JOIN: Network joined
# +JOIN: NetID 000000 DevAddr 00:C9:F4:5F
# +JOIN: Done
```
### 6.3 Verificación de sincronización de tiempo y optimización

```bash
# Set retry count to 1
AT+RETRY=1

# Send confirmed packet (first time)
AT+CMSGHEX=AA

# +LOG: DEBUG 872489 LORA   TX, 865100000, SF9, 125KHz, 259, 22
# +LOG: DEBUG 872490 LORA   TX, 015FF4C90054066CFF01006A3A2EA8
# Observe: WOR_ACK received, preamble length ~259

# At this point, WOR_ACK will be received and time synchronization will be performed, and the number of subsequent preamble derived from the calculation will be greatly reduced.

# Send again (synchronized)
AT+CMSGHEX=AA

# +LOG: DEBUG 141852 LORA   TX, 865100000, SF9, 125KHz, 15, 22
# Observe: Preamble reduced to ~15, latency decreased
```

### 7. Notas importantes

1. Selección de servidor: Actualmente TTN solo admite la configuración de Relay mediante CLI. ChirpStack ofrece compatibilidad completa a través de la interfaz web. Se recomienda utilizar ChirpStack para las pruebas.

2. Optimización de energía: Después de la sincronización de tiempo, el preámbulo de la trama WOR del Esclavo se reduce de 259 a 15, lo que disminuye significativamente el consumo de energía. Recomendado para despliegues estables.

3. Requisito de firmware: Asegúrate de que el firmware de Wio-E5 sea compatible con el conjunto de comandos AT+STDRELAY.

4. Pruebas de alcance: Mantén una distancia entre Esclavo y Maestro (por ejemplo, 50-500 metros) durante las pruebas para verificar la efectividad del reenvío por relé.

## Recursos

- **📄[PDF]** [Manual de instrucciones de la función de relé LoRaWAN de Wio-E5](http://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/E5%20relay%20function%20Instruction%20v1.0%20.pdf)