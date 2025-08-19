---
description: Este artículo muestra cómo usar el "Logic Builder" de FIN Framework para implementar una alarma en el reComputer R1000.
title: reComputer R1000 con FIN Logic Builder
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - LOGIC
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_logic_builder
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

FIN Framework (FIN) es un framework de software con suites de aplicaciones que pueden integrar, controlar, gestionar, analizar, visualizar y conectar sistemas. Sus capacidades pueden ser integradas por OEMs en una variedad de productos y servicios.

Este artículo explica cómo usar el `Logic Builder` de FIN Framework para implementar una alarma. Monitorea el valor de un dispositivo Modbus y, cuando el valor excede un umbral crítico, FIN lanza una alarma.

## Comenzando

Antes de iniciar este proyecto, podría que necesites preparar tu hardware y software como se describe a continuación.

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

* Para información sobre cómo instalar FIN Framework, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).
* Sobre cómo usar reComputer R1000 con FIN para comunicación Modbus, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/).
* Usamos [modbusmechanic](https://modbusmechanic.scifidryer.com/) en Windows 10 como herramienta de prueba de Modbus (opcional).

### Configuración de Hardware

Para ModbusTCP, conectamos el PC Windows 10 y reComputer R1000 a un switch con cables Ethernet, asegurando que estén en la misma red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos para implementar una alarma

### Crear nuevo programa en Logic Builder

**Paso 1**: Haz clic en la barra de directorios superior para cambiar el directorio del sistema a la ubicación de destino donde deseas crear la lógica.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**Paso 2**: Haz clic en `Logic Builder => new` en la interfaz de configuración. Aparecerá una ventana emergente:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

Completa los siguientes campos:
  - **Name**: Nombre del programa
  - **Description**: Descripción del programa
  - **Program On**: dónde se ejecutará el programa
  - **Points**: puntos del equip que se usarán (se pueden seleccionar varios)
  - **Tags**: tags usados en el equip o refs
  - **Project Variables**: si existen variables en otros programas, se listan aquí y se pueden usar
  - **Absolute Points**: para agregar puntos "hardcoded" por su id

Aquí solo agregamos un punto. Tras completar, haz clic en `OK`. Luego, en la ventana a la derecha, haz clic en `Edit` para entrar a la interfaz de edición de lógica.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### Configurar lógica con bloques

**Paso 1**: Agregar un bloque `if`. Hay dos formas:
1. Haz clic en el puerto de un bloque para agregarlo, como se ve aquí:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

2. Usar la barra de búsqueda en la esquina inferior izquierda:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**Paso 2**: Agrega el punto de datos a juzgar. A la izquierda verás los puntos que agregamos al crear el programa en Logic Builder. Cada punto tiene dos funciones: `get` y `set`. Nuestra lógica verifica si el valor del sensor excede cierto valor crítico, así que usamos `get`. Arrastra `get` al área de trabajo para crear un bloque `sensor`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**Paso 3**: Agrega el bloque `>=`. Para verificar si el sensor supera el valor crítico, usamos `>=` para obtener un resultado que se enviará al bloque `if`. Si se supera, el `if` ejecuta la acción correspondiente. Aquí el valor crítico es `23`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**Paso 4**: Añadir bloque de retardo (`delay`). Para mayor robustez, podemos requerir que la condición se cumpla durante un período antes de lanzar la alarma. Ajustamos el retardo a 3s y conectamos su salida al `if`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**Paso 5**: Crear variables. Si el sensor excede el valor crítico, usamos una variable para marcar que está en estado "anormal". Para ello, creamos una `variable`. Existen varios tipos de variable:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

Creamos `Alarm_bool`. Tiene bloques `set` y `get`. Conectamos su bloque `set` al `if`. Si excede el umbral, ponemos `True`; si no, `False`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**Paso 6**: Haz clic en `alarm` arriba para configurar la alarma. Teclea `alarm` en la esquina inferior izquierda, arrastra `alarmBlock` al espacio de trabajo. Escoge la variable `Alarm_bool`. Si `Alarm_bool` es `True`, se dispara la alarma; si es `False`, no hay alarma.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### Demostración de la alarma

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindar diversos tipos de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos canales de comunicación para distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
