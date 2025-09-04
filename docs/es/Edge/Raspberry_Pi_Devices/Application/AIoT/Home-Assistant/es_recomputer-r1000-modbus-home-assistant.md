---
description: Aprende cómo configurar y establecer Modbus TCP y Modbus RTU con Home Assistant en un reComputer R1000, una potente solución basada en Raspberry Pi para la integración y control sin problemas de tus dispositivos Modbus en un Sistema de Gestión de Edificios (BMS).
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
  date: 08/07/2024
  author: Kasun Thushara
---

## Introducción

En los sistemas modernos de gestión de edificios (BMS), la integración de varios protocolos y dispositivos es crucial para el monitoreo y control eficiente. Esta guía se enfoca en aprovechar las capacidades de los protocolos de comunicación Modbus (Modbus TCP y Modbus RTU) con Home Assistant OS, utilizando el potente reComputer R1000, una solución basada en Raspberry Pi. Ya sea que estés configurando un nuevo sistema o mejorando uno existente, esta guía te guiará a través del proceso de conectar tus dispositivos Modbus a Home Assistant, asegurando una integración y control sin problemas.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware con anticipación como se describe aquí.

### Preparación del Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Antes de sumergirse en el proceso de integración, es crucial asegurar que todos los controladores y herramientas necesarios estén instalados. La [instalación adecuada de controladores](https://wiki.seeedstudio.com/es/reComputer_r1000_use_rs485_modbus_rtu/) es un prerrequisito para la comunicación fluida entre dispositivos Modbus RTU y Home Assistant. Se recomienda encarecidamente estudiar a fondo e instalar los controladores requeridos antes de proceder con esta guía.

Además, si aún no has instalado Home Assistant, por favor sigue la [guía de instalación de Home Assistant](https://wiki.seeedstudio.com/es/recomputer_r1000_home_automation/) para configurarlo en tu reComputer R1000.

## Complemento File Editor

Aunque puedes configurar la mayoría de Home Assistant directamente desde la interfaz de usuario bajo Configuración, algunas partes requieren que edites archivos como configuration.yaml. Este archivo contiene integraciones que se cargarán junto con sus configuraciones. Al agregar fragmentos de código a este archivo de configuración, puedes habilitar funcionalidades específicas, incluyendo la integración de Modbus.

Para comenzar, necesitas instalar el complemento File Editor en Home Assistant:

- Abre Home Assistant.
- Navega a `Settings > Add-ons`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

- Haz clic en `Add-on Store`.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

- Busca `File Editor` y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

- Haz clic en el botón Install.
- Una vez instalado, haz clic en Start para lanzar el File Editor.
- Opcionalmente, habilita Show in Sidebar para acceso rápido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

Con el complemento File Editor, ahora puedes editar el archivo `configuration.yaml` para agregar la integración de Modbus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## Habilitando la Integración Modbus TCP

Para habilitar la integración de Modbus en Home Assistant, necesitas agregar parámetros específicos a tu archivo configuration.yaml. A continuación se muestran los parámetros y sus descripciones que necesitarás configurar:

- **name**: El nombre de este hub. Debe ser único.
- **host**: La dirección IP o nombre de tu dispositivo Modbus, por ejemplo, `192.168.1.1`.
- **port**: El puerto de red para comunicación.
- **type**: El tipo de conexión Modbus. Las opciones son tcp o serial. Aquí usamos `tcp`

Para configurar entidades para tu integración de Modbus, necesitas definir varios parámetros para cada entidad. A continuación se muestran los parámetros requeridos para configurar sensores binarios:
Hay varias entidades. Puedes consultar en la [página oficial de modbus de Home Assistant](https://www.home-assistant.io/integrations/modbus).

- **binary_sensors**: Una lista de todos los sensores binarios configurados para esta conexión.
- **address**: La dirección de la bobina/registro.
- **name**: El nombre de la entidad, que debe ser único dentro del tipo de entidad.
- **scan_interval**: El intervalo de actualización en segundos. Establece scan_interval = 0 para no hacer polling. Las entidades se leen poco después del inicio y luego según scan_interval.
- **slave**: Idéntico a device_address.
- **input_type**: El tipo de solicitud. Las opciones son coil, holding, o input.

**Ejemplo** :

```bash
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
Es necesario guardar y reiniciar HA después de cambiar el archivo configuration.yml
:::

## Habilitando la Integración Modbus RTU

Para habilitar la integración Modbus RTU en Home Assistant, necesitas añadir los siguientes parámetros a tu archivo configuration.yaml:

- **name**: El nombre de este hub. Debe ser único.
- **type**: El tipo de conexión Modbus. Aquí, debería ser serial.
- **port**: El puerto serie o dispositivo USB donde tu dispositivo Modbus está conectado a tu host de Home Assistant. Encontramos que es `/dev/ttyAMA30`
- **baudrate**: La velocidad de la conexión serie.
- **method**: El método de conexión a Modbus. Las opciones son rtu y ascii.
- **parity**: La paridad de los bytes de datos. Las opciones son E (Par), O (Impar), N (Ninguna).
- **bytesize**: El tamaño de datos en bits de cada byte. Típicamente 8.
- **stopbits**: Los bits de parada de los bytes de datos.

Para configurar entidades para tu integración Modbus RTU, necesitas definir varios parámetros para cada sensor. A continuación están los parámetros requeridos para configurar sensores:

- **sensors**: El sensor Modbus te permite recopilar datos de los registros Modbus.
- **name**: El nombre de la entidad, que debe ser único dentro del tipo de entidad.
- **address**: La dirección del registro.
- **slave**: Idéntico a device_address.
- **input_type**: El tipo de registro Modbus para el sensor. Las opciones son holding o input.
- **scale**: El factor de escala.
- **device_class**: El tipo/clase del sensor para establecer el icono en la interfaz.
- **unit_of_measurement**: La unidad a adjuntar al valor.

Ejemplo:

```bash
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
Es necesario guardar y reiniciar HA después de cambiar el archivo configuration.yml
:::

Finalmente podrás ver el fenómeno funcionando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

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
