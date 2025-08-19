---
description: Aprende a configurar y usar Modbus TCP y RTU con Home Assistant en un reComputer R1000.
title: reComputer R1000 y Modbus con Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - Home Automation
  - BMS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_home_assistant_modbus
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

En sistemas modernos de gestión de edificios (BMS), integrar varios protocolos y dispositivos es clave para un monitoreo y control eficientes. Esta guía se enfoca en aprovechar las capacidades de los protocolos de comunicación Modbus (TCP y RTU) con Home Assistant OS, usando el potente reComputer R1000 basado en Raspberry Pi. Ya sea que estés configurando un sistema nuevo o mejorando uno existente, esta guía te llevará paso a paso a conectar tus dispositivos Modbus a Home Assistant, logrando una integración y control fluidos.

## Comenzando

Antes de empezar, prepara tu hardware como se describe.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software

Antes de integrar, es importante contar con los drivers y herramientas necesarios instalados. La [instalación de drivers](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/) es un prerrequisito para la comunicación fluida entre dispositivos Modbus RTU y Home Assistant. Se recomienda estudiar e instalar los drivers antes de continuar.

Además, si aún no instalaste Home Assistant, sigue [esta guía de instalación de Home Assistant](https://wiki.seeedstudio.com/recomputer_r1000_home_automation/) en tu reComputer R1000.

## Add-on de File Editor

Aunque gran parte de Home Assistant se configura desde la interfaz (en Ajustes/Settings), ciertas partes requieren editar archivos, como `configuration.yaml`. Allí definimos integraciones y sus configuraciones, por ejemplo la integración de Modbus.

Para empezar, instala el add-on File Editor en Home Assistant:

1. Abre Home Assistant.
2. Ve a `Settings > Add-ons`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

3. Haz clic en `Add-on Store`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

4. Busca `File Editor` y selecciónalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

5. Pulsa `Install`.
6. Al terminar, haz clic en `Start`.
7. (Opcional) Habilita `Show in Sidebar`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

Así podrás editar `configuration.yaml` y añadir la integración de Modbus.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## Habilitar Modbus TCP

Para habilitar la integración Modbus en Home Assistant, añade parámetros a `configuration.yaml`:

- **name**: nombre del hub, único.
- **host**: IP o nombre de tu dispositivo Modbus, e.g. `192.168.1.1`.
- **port**: puerto de red.
- **type**: tipo de conexión Modbus, `tcp` o `serial`. Aquí usamos `tcp`.

Para configurar entidades (ej. `binary_sensors`):

- **binary_sensors**: lista de todos los sensores binarios de esta conexión.
- **address**: dirección de la bobina/registro.
- **name**: nombre único.
- **scan_interval**: intervalo de actualización en segundos. `0` para no hacer polling.
- **slave**: igual a `device_address`.
- **input_type**: tipo de petición: `coil`, `holding` o `input`.

**Ejemplo**:

```yaml
modbus:
  - name: modbus_hub
    type: tcp
    host: IP_ADDRESS_of_PLC
    port: 502
    binary_sensors:
      - name: Relay_1
        address: 8193
        slave: 1
        input_type: coil
        scan_interval: 1
      - name: Relay_2
        address: 8194
        slave: 1
        input_type: coil
        scan_interval: 1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-settings.PNG" style={{width:600}}/></div>

:::note
Tras modificar `configuration.yaml`, guarda y reinicia Home Assistant.
:::

## Habilitar Modbus RTU

Para usar Modbus RTU en Home Assistant, añade:

- **name**: nombre del hub.
- **type**: `serial`.
- **port**: puerto serie o USB (p.ej. `/dev/ttyAMA30`).
- **baudrate**: velocidad.
- **method**: `rtu` o `ascii`.
- **parity**: `E`, `O`, `N`.
- **bytesize**: típicamente 8.
- **stopbits**: típicamente 1.

Para `sensors`:

- **name**: nombre único.
- **address**: dirección del registro.
- **slave**: igual a `device_address`.
- **input_type**: `holding` o `input`.
- **scale**: factor de escala.
- **device_class**: tipo/clase del sensor (icono).
- **unit_of_measurement**: unidad.

**Ejemplo**:

```yaml
modbus:
  - name: modbus_hub2
    type: serial
    port: /dev/ttyAMA30
    baudrate: 9600
    bytesize: 8
    method: rtu
    parity: N
    stopbits: 1
    sensors:
      - name: Room Temperature
        address: 1
        input_type: input
        slave: 1
        scale: 0.01
        device_class: temperature
        unit_of_measurement: °C
      - name: Room Humidity
        address: 2
        input_type: input
        slave: 1
        scale: 0.01
        unit_of_measurement: '%'
        device_class: humidity
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-rtu-setting.PNG" style={{width:600}}/></div>

:::note
Tras modificar `configuration.yaml`, guarda y reinicia Home Assistant.
:::

Finalmente, verás el resultado en funcionamiento:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos distintos canales de soporte para cubrir diversas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
