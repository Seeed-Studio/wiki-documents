---
description: Este artículo presenta cómo usar el `Modbus Connector` del `FIN Framwork`.
title: reComputer R1000 con FIN para usar modbus TCP/RTU
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 07/15/2024
  author: ShuishengPeng
---

## Introducción

FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

Este artículo presenta cómo usar el `Modbus Connector` del `FIN Framwork`, se explicó en detalle el uso de Modbus TCP/RTU en FIN Framwork. que incluye principalmente tres aspectos: crear un proyecto de `FIN Framwork`, configurar el `número de puerto serie`, configurar el `Modbus Connector`, y agregar puntos de datos al `Equip`.

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

* Respecto a cómo instalar FIN Framework, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_install_fin/).
- Respecto a cómo usar la función modbus del reComputer R1000, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_use_rs485_modbus_rtu/).
- Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) en PC W10. También puedes usar otras herramientas de prueba modbus.

### Configuración del Hardware

Para ModbusTCP, usamos cables Ethernet para conectar el PC W10 y el reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

Para ModbustRTU, usamos un módulo rs485 a USB para conectar el reComuputer R1000 con el PC W10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### Crear Nuevo Proyecto

**Paso 1**: Haz clic en el botón `Create` en la esquina inferior izquierda de la página de inicio, y aparecerá una nueva ventana emergente. La ventana emergente tiene principalmente tres atributos que necesitan ser completados:

- NAME: el nombre del nuevo proyecto
- DISPLAY NAME: nombre del proyecto mostrado
- DESCRIPTION: descripción del proyecto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**Paso 2**: Abre el proyecto, entra a `DB Builder`, haz clic en `Connectors`, puedes ver que no hay opción `Modbus` en este momento, necesitamos abrir el `Modbus Connector` de `FIN Framework`, entonces la opción `Modbus` aparecerá aquí.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

### Configurar `Modbus Connector` para Modbus TCP

**Paso 1**: Abre `Modbus Connector`. Haz clic en `Settings => Ext` y encuentra `Modbus`. En este momento, `Modbus` está marcado en rojo. Haz clic en `Enable` y puedes ver que la marca `Modbus` se vuelve verde, indicando que el `Modbus Connector` se ha abierto exitosamente. Entra a `DB Builder` nuevamente y puedes ver que ya hay una opción `Modbus`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**Paso 2**: Añade una nueva conexión Modbus. Haz clic en `Modbus => Add`, la nueva ventana emergente tiene principalmente los siguientes parámetros para completar:

- Dis: el nombre del conector
- ModbusSlave: este sería el esclavo del dispositivo modbus que se está conectando (por defecto es 1)
- Existing Register Map: Si el usuario ya configuró un conector Modbus, vería registros disponibles aquí para elegir o crear uno nuevo con la siguiente propiedad ModbusRegMapUri.
- ModbusRegMapUri: aquí es donde el usuario especificaría el nombre del mapa de registros para vincular con este conector. Reemplaza "xxx" con cualquier nombre del mapa de registros.
- Uri: aquí es donde se especificaría la uri del conector modbus. El formato de URI se muestra en la tabla:

   <div class="table-center">

  | Protocolo                                              | Configuración URI        | Ejemplo    | Notas |
  | ------------------------------------------------------------ | ----------- | -------------- | --------- |
  | TCP/IP | `modbus-tcp://host:port/` | `modbus-tcp://10.0.0.17/` | El puerto por defecto es 502, puede omitirse si es estándar       |
  | RTU sobre TCP/IP  | `modbus-rtutcp://host:port/`  | `modbus-rtutcp://192.168.1.120:9001/`  | El puerto por defecto es 502, puede omitirse si es estándar      |
  | RTU sobre RS-485  | `modbus-rtu://<port>-<baud>-<dataBits>-<parity>`  | `modbus-rtu://serial0-9600-8n1-none`  |       |

  </div>

En nuestro ejemplo, especificamos "r1000_demo" como nuestro mapa de registros. Luego añadimos nuestra IP al dispositivo en la Uri.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**Paso 3**: Añade un nuevo `Register Maps`. Haz clic en `Register Maps => Add`, ingresa `Name`, que necesita ser consistente con el nombre de `ModbusRegMapUri` en el segundo paso, y finalmente haz clic en `ADD`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

El sistema creará un nuevo archivo `r1000_demo.csv` en el directorio `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`. Este archivo describe la información de registros Modbus que necesitamos leer.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>

**Paso 4**: Añade la información de registros a leer. `Modbus Connector` existe como un maestro Modbus. Leerá los registros del esclavo. Necesitamos configurar la información de registros a leer. Haz clic en `r1000_demo`, puedes ver que hay una descripción de `ping` por defecto, esto es obligatorio. Continuamos añadiendo nueva información de registros y hacemos clic en `Register Maps => r1000_demo => Add`. La nueva ventana emergente tiene principalmente los siguientes parámetros para completar:

- name(requerido): nombre del registro.

  - Debe ser único

  - Debe comenzar con una letra minúscula a-z
  - Solo se permiten a-z, A-Z, 0-9 y guiones bajos. No espacios u otros caracteres especiales.

- addr(requerido): esta sería la dirección del registro que sigue la convención modbus.

  - 0xxxx - Bobina (00001-065536)
  - 1xxxx - Entrada Discreta (10001-165536)
  - 3xxxx - Registro de Entrada (30001-365536)
  - 4xxxx - Registro de Retención (40001-465536)

- data(requerido): esto define el tipo de datos del registro.

  - Tipos:
    - bit - Bool
    - u1 - Int sin signo de 8 bits
    - u2 - Int sin signo de 16 bits
    - u4 - Int sin signo de 32 bits
    - s1 - Int con signo de 8 bits
    - s2 - Int con signo de 16 bits
    - s4 - Int con signo de 32 bits
    - s8 - Int con signo de 64 bits
    - f4 - Float de 32 bits
    - f8 - Float de 64 bits

- rw(requerido): esto determinaría los permisos de lectura/escritura

  - rw - El registro puede ser leído y escrito
  - r - El registro es solo de lectura
  - w - El registro es solo de escritura

- scale(opcional): esto permite al usuario aplicar un factor de escala a los registros. El formato es [operador] [número] donde el factor es una constante numérica.

  - Ejemplos:
    - sumar: +1.5
    - restar: -0.25
    - multiplicar: *10
    - dividir: /1000

- dis(opcional): esta es una etiqueta opcional que el usuario puede especificar como un nombre de visualización bonito para el registro.

- unit(opcional): esto definiría la unidad a usar para el registro.

- tags(opcional): estas serían las etiquetas a aplicar al punto cuando se aprenda en la base de datos.

- folderPath(opcional): si el usuario quiere organizar los puntos, puede hacerlo aplicando un folderPath.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**Paso 5**: Prueba de comunicación. Después de agregar la información de descripción del registro, se puede llevar a cabo la comunicación. Aquí usamos `ModbusMechanic` como el esclavo Modbus. Haga clic en `Modbus => Ping` y puede ver que `Status` cambia a `OK`, indicando que la comunicación es normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>

### Configurar `Modbus Connector` para Modbus RTU

#### Configurar puerto serie

El script que necesita ser ejecutado es el siguiente:

```shell
## Turn off FIN service
sudo systemctl stop fin
## After downloading the config file, place it in /opt/finFramework_5.1.6.55/etc/finStackSerial/
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## Modify the config.props file to: serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## Restart the FIN service, wait for a while and then use a browser to open FIN
sudo systemctl restart fin

```

**Paso 1**: Desactiva el servicio FIN, luego descarga el [archivo de configuración](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link) y guárdalo en el directorio `/opt/finFramework_5.1.6 .55/etc/finStackSerial/`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**Paso 2**: Modifica config.props a:

```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```

Después de completar la modificación, reinicia el servicio FIN
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**Paso 3**：Haz clic en `Folio => launch`, e inserta la siguiente consulta:`serialPorts()`, El resultado mostrará qué nombre debe usarse para tu puerto específico. El puerto no es el nombre del puerto físico, pero hay una correspondencia entre los puertos físicos del dispositivo y el nombre del puerto a usar como `serial0`, `serial1` ...

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

#### Configurar Modbus RTU

**Paso 1**: Abrir `Modbus Connector`. Haz clic en `Settrings => Ext` y busca `Modbus`. En este momento, `Modbus` está marcado en rojo. Haz clic en `Enable` y puedes ver que la marca `Modbus` se vuelve verde, indicando que el `Modbus Connector` se ha abierto exitosamente. Ingresa a `DB Builder` nuevamente y puedes ver que ya hay una opción `Modbus`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**Paso 2**: Agregar una nueva conexión Modbus. Haz clic en `Modbus => Add`. En nuestro ejemplo, especificamos "r1000_demo_rtu" como nuestro mapa de registros. Luego agregamos nuestro puerto serie al dispositivo en el Uri.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**Paso 3**: Agregar un nuevo `Register Maps`. Haz clic en `Register Maps => Add`, ingresa `Name`, que necesita ser consistente con el nombre de `ModbusRegMapUri` en el segundo paso, y finalmente haz clic en `ADD`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

El sistema creará un nuevo archivo `r1000_demo_rtu.csv` en el directorio `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`. Este archivo describe la información de registros Modbus que necesitamos leer.

**Paso 4**: Agregar la información de registros a leer. `Modbus Connector` existe como un maestro Modbus. Leerá los registros del esclavo. Necesitamos configurar la información de registros a leer. Haz clic en `r1000_demo_rtu`, puedes ver que hay una descripción de `ping` por defecto, esto es obligatorio. Continuamos agregando nueva información de registros y hacemos clic en `Register Maps => r1000_demo_rtu => Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**Paso 5**: Prueba de comunicación. Después de agregar la información de descripción del registro, se puede llevar a cabo la comunicación. Aquí usamos `ModbusMechanic` como el esclavo Modbus. Haz clic en `Modbus => Ping` y puedes ver que `Status` cambia a `OK`, indicando que la comunicación es normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>

### Agregar puntos de datos a `Equip Tree`

**Paso 1**: agregar `Equip`. Haz clic en `Equip Tree => + => Add site`, ingresa `Name`, aquí ingreso `Tower`, puede agregar un `site` llamado `Tower`; luego haz clic en `Equip Tree => Tower => + => Add Floor`, ingresa `Name`, aquí ingreso `Floor1`, puede agregar un `Floor` llamado `Floor1`; haz clic en `Equip Tree` nuevamente `=> Tower => Floor1 => + => Add Equip`, ingresa `Name`, aquí ingreso `ModbusEquip` para agregar un nuevo `Equip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**Paso 2**: Haz clic en `->` en el lado derecho de `ModbusEquip` para hacer que la ruta del sistema esté bajo `Tower/Floor1/ModbusEquip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**Paso 3**: Agregar puntos de datos. Haz clic en `Modbus => Modbus Conn`, haz clic en `Discover Points` en la nueva ventana, aparecerán los puntos de información de registros que configuramos, selecciona un registro a leer, y haz clic en `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>

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
