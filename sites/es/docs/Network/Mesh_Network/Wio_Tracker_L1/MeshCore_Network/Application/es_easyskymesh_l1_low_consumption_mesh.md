---

description: Esta guía explica cómo usar EasySkyMesh con Wio Tracker L1 para construir redes de sensores IoT de bajo consumo basadas en MeshCore.
title: Firmware IoT EasySkyMesh
keywords:
   - EasySkyMesh
   - MeshCore
   - Wio Tracker L1
   - LoRa Mesh
   - MeshCore Sensor
   - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_MeshCore_Device_Low_Power_Consumption_L1_Pro.png
slug: /easyskymesh_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
   date: 9/17/2026
   author: Michelle Huang
createdAt: 2026-09-17
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/easyskymesh_wio_tracker_l1/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firmware IoT EasySkyMesh para Wio Tracker L1

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) es un proyecto de la comunidad basado en [MeshCore](https://meshcore.io/) que se centra en crear firmware de bajo consumo. Este firmware permite que el L1 Pro alcance una autonomía de batería de **18 días** manteniendo la función de comunicación de MeshCore.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshProject.png" style={{width:900, height:'auto'}}/></div>

EasySkyMesh añade funciones para **ahorro de energía y recopilación de datos de sensores**. Los datos de los sensores pueden ser recopilados por nodos MeshCore y transmitidos a través de una red MeshCore existente. Es especialmente útil para:

* Redes de sensores de bajo consumo
* Monitorización remota
* Despliegues alimentados por energía solar
* Monitorización ambiental
* Monitorización de infraestructuras
* Prototipado de IoT

## Programación del firmware

### Preparación de hardware

Antes de programar el firmware, prepara:

* Wio Tracker L1. [Haz clic aquí](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) para conseguir uno.
* Cable USB Tipo C
* Ordenador

Conecta el Wio Tracker L1 a tu ordenador usando el puerto USB Tipo C.

### Descargar el firmware EasySkyMesh

Ve a la página de [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases). Selecciona una versión que sea compatible con tu placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshFirmwareDownload.png" style={{width:600, height:'auto'}}/></div>


Las versiones de EasySkyMesh pueden proporcionar diferentes archivos de firmware para distinto hardware y diferentes escenarios de actualización. Para una instalación nueva, el proyecto suele proporcionar una imagen de firmware de instalación limpia. Para una instalación existente, usa el firmware de actualización cuando quieras conservar la configuración existente.


### Grabar el firmware

El proyecto EasySkyMesh recomienda usar el MeshCore Web Flasher para los dispositivos compatibles.

**Paso 1:** Abre [MeshCore Web Flasher](https://meshcore.io/flasher)

**Paso 2:** Selecciona **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Selecciona el archivo de firmware EasySkyMesh.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Choose_zip.png" style={{width:600, height:'auto'}}/></div>

**Paso 4:** Entra en modo DFU si es necesario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Enter_DFU.png" style={{width:900, height:'auto'}}/></div>

**Paso 5:** Inicia la grabación. Espera hasta que el proceso de grabación se complete. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Flash.png" style={{width:900, height:'auto'}}/></div>

**Paso 6:** Reinicia el dispositivo.

## Ahorro de energía

El proyecto proporciona versiones de firmware PowerSaving con optimizaciones para diferentes placas MeshCore. Las versiones de EasySkyMesh han introducido funciones de ahorro de energía para dispositivos basados en ESP32 y nRF52, así como funciones adicionales de gestión de energía para diferentes roles de MeshCore.

### Firmware Companion

Todas las funciones de PowerSaving están habilitadas por defecto. El ahorro de energía de RX está configurado como "balanced".

El tiempo de actividad en m (minutos), h m (horas minutos) y d h (días horas) se muestra a la izquierda del icono de la batería en el OLED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Runtime_Display.png" style={{width:600, height:'auto'}}/></div>

### Firmware de Repeater y Room Server

El ahorro de energía está desactivado por defecto. Puedes habilitar PowerSaving a través de la CLI de MeshCore.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

Habilita el ahorro de energía mediante:

```text
powersaving on
```

Para comprobar el estado actual de PowerSaving:

```text
powersaving
```

[Haz clic aquí](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers) para usar más comandos.

## Compatibilidad con sensores

EasySkyMesh amplía MeshCore con compatibilidad para sensores, permitiendo que las lecturas de los sensores se recopilen y transmitan a través de la red MeshCore existente. El proyecto documenta actualmente la compatibilidad con varios sensores I2C comunes, incluidos:

| Sensor        | Medición                                | Dirección I2C |
| ------------- | --------------------------------------- | ------------- |
| AHT10 / AHT20 | Temperatura / Humedad                   | `0x38`        |
| BME280        | Temperatura / Humedad / Presión         | `0x76`        |
| BME680        | Temperatura / Humedad / Presión / Gas   | `0x76`        |
| BMP280        | Temperatura / Presión                   | `0x76`        |
| SHTC3         | Temperatura / Humedad                   | `0x70`        |
| SHT4X         | Temperatura / Humedad                   | `0x44`        |
| LPS22HB       | Temperatura / Presión                   | `0x5C`        |
| INA3221       | Voltaje / Corriente / Potencia          | `0x42`        |
| INA219        | Voltaje / Corriente / Potencia          | `0x40`        |
| INA260        | Voltaje / Corriente / Potencia          | `0x41`        |
| INA226        | Voltaje / Corriente / Potencia          | `0x44`        |
| MLX90614      | Temperatura sin contacto                | `0x5A`        |
| VL53L0X       | Distancia                               | `0x29`        |

 Algunas versiones de firmware pueden seleccionar automáticamente la dirección I2C para sensores como BME280, BME680 y BMP280. Para las versiones de EasySkyMesh compatibles, el comando CLI `sensor` se puede usar para comprobar los pines I2C y los pines serie del GPS:

```text
sensor
```


## Solución de problemas

### El dispositivo no aparece en el Flasher

1. Asegúrate de que el cable USB admite transferencia de datos.
2. Vuelve a conectar el Wio Tracker L1.
3. Entra de nuevo en modo DFU.
4. Actualiza la página del Web Flasher.
5. Prueba con otro puerto o cable USB.

### El sensor no se detecta

Comprueba:
1. Cableado de VCC y GND.
2. Cableado de SDA y SCL.
3. Voltaje de funcionamiento del sensor.
4. Dirección I2C.
5. Versión del firmware EasySkyMesh.
6. Si el sensor aparece en la lista de compatibles.


Si el problema persiste, consulta el [repositorio de GitHub de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) para ver la documentación y los issues más recientes.

## Recursos

* [Repositorio de GitHub de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh)
* [Instrucciones de grabación de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [Instrucciones de sensores de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

## Soporte técnico y debate sobre el producto
<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>