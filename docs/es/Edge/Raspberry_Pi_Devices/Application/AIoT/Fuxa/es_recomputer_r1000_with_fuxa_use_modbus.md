---
description: Este artículo presenta principalmente cómo usar fuxa para la comunicación ModbusRTU/TCP.
title: reComputer R1000 con fuxa para usar modbus RTU/TCP
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_modbus_rtu_and_tcp
sku: 113991274,E24010521
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introducción

FUXA es un software de Visualización de Procesos (SCADA/HMI/Dashboard) basado en web. Con FUXA puedes crear visualizaciones de procesos modernas con diseños individuales para tus máquinas y visualización de datos en tiempo real. Soporta Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, y otros protocolos.

Este artículo presenta principalmente cómo usar fuxa para la comunicación ModbusRTU/TCP.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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

* Python 3.11 puede ser incompatible con fuxa. Si tu versión de Python es 3.11, por favor considera cambiar a una versión diferente de Python.
- Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) en PC W10. También puedes usar otras herramientas de prueba modbus
- Usando [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Puedes consultar los siguientes pasos para instalar fuxa en reComputer R1000

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- Con respecto a cómo usar la función modbus del reComputer R1000, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_use_rs485_modbus_rtu/).

### Configuración de Hardware

Para ModbustRTU, utilizamos un módulo rs485 a USB para conectar el reComuputer R1000 con la PC W10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para ModbusTCP, utilizamos cables Ethernet para conectar la PC W10 y el reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos de comunicación ModbusRTU

**Paso 1**: Abre ModbusMechanic en la PC Win10, selecciona el puerto serie correspondiente y la velocidad de baudios, luego haz clic en `Tools` en la esquina superior derecha, selecciona `Start Slave Simulator`, luego selecciona `RTU`, ingresa el `slave ID`, y entonces puedes configurar el campo de datos del esclavo. Agregamos tres bobinas y un `Holding Register` para la posterior lectura desde el host Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**Paso 2**: En `fuxa`, haz clic en el botón `+` en la esquina inferior derecha, ingresa el nombre del módulo, selecciona `modbusRTU` para `Type`, selecciona `SeriaPort` para `Connection options`, luego selecciona el número de puerto serie que necesitas usar y configura la velocidad de baudios correspondiente y otros parámetros, y finalmente haz clic en `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**Paso 3**: Después de eso, ingresamos a la página `Devices settings` y hacemos clic en el botón `+` en la esquina superior izquierda para configurar los campos de datos que necesitamos leer. Configuramos los parámetros correspondientes y hacemos clic en `OK` para ver que `fuxa` ha obtenido exitosamente los datos del esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## Pasos de comunicación ModbusTCP

**Paso 1**: Abre ModbusMechanic en la PC Win10, luego haz clic en `Tools` en la esquina superior derecha, selecciona `Start Slave Simulator`, luego selecciona `TCP`, ingresa el `slave ID`, y puedes configurar el campo de datos del esclavo. Agregamos dos bobinas y un `holding register` para la posterior lectura desde el host Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**Paso 2**: Haz clic en el botón `+` en la esquina inferior derecha de `fuxa`, ingresa el nombre del módulo, selecciona `modbusTCP` para `Type`, selecciona `TcpPort` para `Connection options`, selecciona la dirección IP de la máquina esclava para `Slave IP and port`, el número de puerto predeterminado es 502, luego ingresa el `Slave ID`, y finalmente haz clic en `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**Paso 3**: Después de eso, ingresamos a la página `Devices settings` y hacemos clic en el botón `+` en la esquina superior izquierda para configurar los campos de datos que necesitamos leer. Configuramos los parámetros correspondientes y hacemos clic en `OK` para ver que `fuxa` ha obtenido exitosamente los datos del esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

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
