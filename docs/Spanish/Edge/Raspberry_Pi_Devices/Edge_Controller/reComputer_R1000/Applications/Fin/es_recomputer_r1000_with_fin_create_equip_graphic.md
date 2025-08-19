---
description: Este artículo muestra cómo crear un 'Equip Graphic' usando FIN Framework en reComputer R1000.
title: reComputer R1000 con FIN para crear un 'Equip Graphic'
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_equip_graphic
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

FIN Framework (FIN) es un framework de software con suites de aplicaciones que pueden integrar, controlar, gestionar, analizar, visualizar y conectar sistemas. Sus capacidades pueden ser integradas por OEMs en diversos productos y servicios.

Este artículo mostrará cómo usar el `Graphics Builder` de FIN Framework para crear un `Equip Graphic`.

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software tal como se describe a continuación.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

### Preparación de Software

* Para conocer cómo instalar FIN Framework, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).

## Pasos para crear un 'Equip Graphic'

### Crear nuevo 'Equip Graphic'

**Paso 1**: Pon el contexto bajo la ruta `Tower => Floor1 => ModbusEquip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**Paso 2**: Crea un nuevo `Equip Graphic`. Haz clic en `Graphic Builder => new` y, según el contexto del sistema, aparecerá una ventana emergente llamada `Create a Graphic`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

La ventana emergente incluye los siguientes atributos:
- **Graphic Name:** Nombre para el graphic.
- **Graphic Template:** Permite elegir una plantilla inicial de "duct templates" preconstruidas. No es requerido, solo ofrece un punto de partida. (También puedes crear tus propias plantillas).
- **Graphic On Filter:** Determina sobre qué registros de la base de datos se ejecuta el gráfico. Se rellena automáticamente basado en tu equip de contexto. El filtro puede cambiarse después si es necesario.
- **Relative - By Tags:** Hace que los puntos se carguen en modo relativo, basándose en sus tags. No se "anclan" a un equip específico, sino que cargan cualquier equip con puntos similares.
- **Relative - By navName:** Similar a los tags, pero relativo basado en el `navName`.
- **Absolute - by Point Ids:** Hace que los puntos sean "absolutos" ("hardcoded") al equip actual. Sin importar dónde cargues el gráfico, esos puntos siempre son los mismos.
- **Points:** Selecciona qué puntos incluir. Con *CTRL* y/o *SHIFT* seleccionas múltiples puntos. Se basan en tu equip de contexto y en refs asociados.
- **Add Components For:** Lista de puntos del paso anterior. Al resaltarlos, FIN creará automáticamente un componente gráfico (basado en sus tags), lo vinculará y generará un "Display Label".

Después de configurar, haz clic en `OK`. Aparecerá un gráfico nuevo a la derecha. Haz clic en `EquipGraphic => Edit` para entrar a la interfaz de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### Configurar nuevo 'Equip Graphic'

**Paso 1**: Tras entrar en la interfaz de edición, el sistema generará automáticamente "smart labels" y componentes basados en lo seleccionado en "Add Components for". Mueve el control y haz clic en `Magic Button => Smart Label to GraphicObjects` para que los smart labels se alineen automáticamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**Paso 2**: Revisa `Virtual point`. Puedes hacer clic en el control y luego en `Edit Properties` para ver o modificar el `virtual point`. También puedes verlo en `ADVANCED` en la esquina inferior izquierda.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**Paso 3**: Agrega un nuevo componente y conecta un `virtual point`. Además de los componentes creados automáticamente, puedes añadir otros manualmente. En la caja `COMPONENTS` de la izquierda hay muchos componentes. Arrastra uno con el ratón al área de trabajo, luego en la columna `VIRTUAL POINTS` arrastra el punto deseado al componente. Así quedará enlazado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**Paso 4**: Añadir `Overview Box`. Esto mostrará todos los valores juntos. Haz clic en `Overview Box => New`, aparecerá una ventana emergente:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **Mini Group:** Si se activa, el "overview box" aparece con valores más grandes y un área de título más pequeña. Esta caja es más pequeña y se recomienda para escenarios donde la caja debe estar en el gráfico (por ejemplo, VFD con Spd,Cmd,Ena,Stat).
- **Points:** Selecciona qué puntos incluir en el box. Si tenías "smart labels" seleccionadas, esos puntos se precargarán.

Tras seleccionar los puntos, ingresa el título de la ventana y haz clic en `APPLY`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**Paso 5**: Mostrar resultados

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecer distintos tipos de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
