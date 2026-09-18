---

description: Esta guía explica cómo usar EasySkyMesh con Wio Tracker L1 para crear redes de sensores IoT de bajo consumo basadas en MeshCore.
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

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) es un proyecto de la comunidad basado en [MeshCore](https://meshcore.io/) que se centra en crear firmware de bajo consumo. Este firmware permite que el L1 Pro alcance una autonomía de batería de **18 días** manteniendo la función de comunicación de MeshCore.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshProject.png" style={{width:900, height:'auto'}}/></div>

EasySkyMesh añade funciones para **ahorro de energía y recopilación de datos de sensores**. Los datos de los sensores pueden ser recopilados por nodos MeshCore y transmitidos a través de una red MeshCore existente. Es especialmente útil para:

* Redes de sensores de bajo consumo
* Monitorización remota
* Despliegues alimentados por energía solar
* Monitorización ambiental
* Monitorización de infraestructuras
* Prototipado de IoT

## Funciones de EasySkyMesh

### Ahorro de energía

El proyecto proporciona versiones de firmware PowerSaving con optimizaciones para diferentes placas MeshCore. Las versiones de EasySkyMesh han introducido funciones de ahorro de energía para dispositivos basados en ESP32 y nRF52, así como funciones adicionales de gestión de energía para diferentes roles de MeshCore.

Puedes habilitar PowerSaving a través de la CLI de MeshCore cuando el firmware lo admita:

```text
powersaving on
```

Para comprobar el estado actual de PowerSaving:

```text
powersaving
```

### Compatibilidad con sensores

EasySkyMesh amplía MeshCore con compatibilidad para sensores, permitiendo que las lecturas de los sensores se recopilen y transmitan a través de la red MeshCore existente. El proyecto documenta actualmente la compatibilidad con varios sensores I2C comunes, incluidos:

| Sensor        | Medición                               | Dirección I2C |
| ------------- | --------------------------------------- | ------------- |
| AHT10 / AHT20 | Temperatura / Humedad                  | `0x38`        |
| BME280        | Temperatura / Humedad / Presión        | `0x76`        |
| BME680        | Temperatura / Humedad / Presión / Gas  | `0x76`        |
| BMP280        | Temperatura / Presión                  | `0x76`        |
| SHTC3         | Temperatura / Humedad                  | `0x70`        |
| SHT4X         | Temperatura / Humedad                  | `0x44`        |
| LPS22HB       | Temperatura / Presión                  | `0x5C`        |
| INA3221       | Voltaje / Corriente / Potencia         | `0x42`        |
| INA219        | Voltaje / Corriente / Potencia         | `0x40`        |
| INA260        | Voltaje / Corriente / Potencia         | `0x41`        |
| INA226        | Voltaje / Corriente / Potencia         | `0x44`        |
| MLX90614      | Temperatura sin contacto               | `0x5A`        |
| VL53L0X       | Distancia                              | `0x29`        |

 Algunas versiones de firmware pueden seleccionar automáticamente la dirección I2C para sensores como BME280, BME680 y BMP280.Para las versiones de EasySkyMesh compatibles, se puede usar el comando CLI `sensor` para comprobar los pines I2C y los pines serie del GPS:

```text
sensor
```

## Primeros pasos

### Preparación de hardware

Antes de flashear el firmware, prepara:

* Wio Tracker L1. [Haz clic aquí](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) para conseguir uno.
* Cable USB Type-C
* Ordenador

Conecta el Wio Tracker L1 a tu ordenador usando el puerto USB Type-C.

### Descargar el firmware EasySkyMesh

Ve a la página de [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases). Selecciona una versión que sea compatible con tu placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshFirmwareDownload.png" style={{width:600, height:'auto'}}/></div>




Las versiones de EasySkyMesh pueden proporcionar diferentes archivos de firmware para distintos hardware y diferentes escenarios de actualización. Para una instalación nueva, el proyecto suele proporcionar una imagen de firmware de instalación limpia. Para una instalación existente, utiliza el firmware de actualización cuando quieras conservar la configuración existente.


### Flashear el firmware

El proyecto EasySkyMesh recomienda usar el MeshCore Web Flasher para los dispositivos compatibles.

**Paso 1:** Abre [MeshCore Web Flasher](https://meshcore.io/flasher)

**Paso 2:** Selecciona **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Selecciona el archivo de firmware EasySkyMesh.


**Paso 4:** Entra en modo DFU si es necesario.

**Paso 5:** Inicia el flasheo.Espera hasta que el proceso de flasheo se complete. 

**Paso 6:** Reinicia el dispositivo.


## Solución de problemas

### El dispositivo no aparece en el flasher

1. Asegúrate de que el cable USB admite transferencia de datos.
2. Vuelve a conectar el Wio Tracker L1.
3. Entra de nuevo en modo DFU.
4. Actualiza el Web Flasher.
5. Prueba con otro puerto USB o cable.

### El sensor no se detecta

Comprueba:
1. Cableado de VCC y GND.
2. Cableado de SDA y SCL.
3. Voltaje de funcionamiento del sensor.
4. Dirección I2C.
5. Versión del firmware EasySkyMesh.
6. Si el sensor figura como compatible.


Si el problema persiste, consulta el [repositorio de EasySkyMesh en GitHub](https://github.com/IoTThinks/EasySkyMesh) para ver la documentación e incidencias más recientes.

## Recursos útiles

* [Repositorio EasySkyMesh en GitHub](https://github.com/IoTThinks/EasySkyMesh)
* [Instrucciones de flasheo de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
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