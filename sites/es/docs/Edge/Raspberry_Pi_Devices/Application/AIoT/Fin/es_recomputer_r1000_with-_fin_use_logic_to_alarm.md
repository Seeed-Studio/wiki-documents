---
description: Este artículo te mostrará cómo usar el Logic Builder del FIN Framework
title: reComputer R1000 con FIN Logic Builder
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - LOGIC
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_logic_builder
last_update:
  date: 07/16/2024
  author: ShuishengPeng
---

## Introducción 
FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

Este artículo te mostrará cómo usar el `Logic Builder` del FIN Framework, y cómo implementar una alarma usando el `Logic Builder`. Monitoreamos el valor de un dispositivo Modbus. Cuando el valor excede el valor crítico, FIN activará una alarma.

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
* Sobre cómo instalar FIN Framework, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_install_fin/).
* Acerca del uso de reComputer R1000 con FIN para comunicación Modbus, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_use_rs485_modbus_rtu/).
* Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) en PC W10. También puedes usar otras herramientas de prueba modbus.
### Configuración del Hardware

Para ModbusTCP, usamos cables Ethernet para conectar el PC W10 y reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos para implementar una alarma
### Crear nuevo programa Logic Builder
**Paso 1**: Primero haz clic en la barra de directorio en la parte superior para cambiar el directorio del sistema a la ubicación objetivo deseada.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**Paso 2**: Haz clic en `Logic Builder => new` en la interfaz de configuración, y aparecerá la siguiente ventana emergente:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

Para llenar los siguientes parámetros:
  - **Name** - Nombre del programa
  - **Description** - Descripción de para qué es/hace el programa
  - **Program On** - Usado para especificar en qué se ejecutará el programa
  - **Points** - Capaz de elegir puntos del equipo para usar
  - **Tags** - Encontrar etiquetas usadas en equipo o refs
  - **Project Variables** - Si existen otras variables de proyecto en otros programas, proporciona una lista de variables que pueden usarse en el nuevo programa que se está creando
  - **Absolute Points** - Capaz de añadir puntos codificados basados en su id
  
`Points` puede ingresar múltiples puntos, pero aquí solo ingresamos uno. Después de llenar la información, haz clic en `OK` y haz clic en `Edit` en la ventana emergente de la derecha para entrar a la interfaz de edición de Logic.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### Configurar lógica de bloques
**Paso 1**: Añadir un bloque `if`. Hay dos formas de añadir bloques en el espacio de trabajo. La primera es hacer clic en el puerto de un bloque para añadirlo, como se muestra en la figura:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

La segunda forma es añadir a través del cuadro de búsqueda en la esquina inferior izquierda, como se muestra en la figura:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**Paso 2**: Añadir los puntos de datos a ser juzgados. A la izquierda, puedes ver los puntos de datos que introdujimos cuando creamos el programa Logic Builder. Tiene dos funciones: `get` y `set`. Nuestra lógica es determinar si el valor del sensor excede el valor crítico, así que elegimos `get` aquí. Haz clic en `get` y arrástralo al espacio de trabajo, y aparecerá un bloque `sensor`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**Paso 3**: Añadir el bloque `>=`. Necesitamos determinar si el valor del sensor excede el valor crítico, así que necesitamos añadir un bloque `>=`, que enviará un resultado al bloque `if`. El bloque `if` determina el siguiente paso juzgando el resultado del bloque `>=`. Aquí establecemos el valor crítico en `23`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**Paso 4**: Añadir un bloque de retardo. A veces necesitamos hacer el sistema más anti-interferencia, podemos añadir un módulo de retardo, y la alarma solo ocurrirá después de que cierta condición se cumpla por cierto período de tiempo. Establecemos el tiempo de retardo en 3s y conectamos la salida del módulo al bloque `if`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**Paso 5**: Crear variables. Cuando el valor del sensor excede el valor crítico, podemos establecer una bandera para marcar el valor del sensor como anormal. Esta bandera puede implementarse creando una `variable`. `variable` tiene los siguientes tipos:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

Como se muestra en la figura, añadimos una variable llamada `Alarm_bool`, que también tiene bloques de función `set` y `get`. Conectamos el bloque `set` de `Alarm_bool` después del bloque `if`. Cuando el valor del sensor excede el valor crítico, se establece en `True`. Cuando el sensor no excede el valor crítico, se establece en `False`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**Paso 6**: Haz clic en `alarm` en la parte superior para entrar a la interfaz de configuración de `alarm`. Escribe `alarm` en la esquina inferior izquierda para encontrar `alarmBlock` y arrástralo al espacio de trabajo. Necesitamos seleccionar la variable `Alarm_bool` que creamos para `alarmBlock`. Cuando la variable `Alarm_bool` es `True`, la alarma se activará, y cuando la variable `Alarm_bool` es `False`, la alarma no se activará.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### Demostración de alarma

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
