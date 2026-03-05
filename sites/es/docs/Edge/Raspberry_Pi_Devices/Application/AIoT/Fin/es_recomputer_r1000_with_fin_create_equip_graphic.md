---
description: Este artículo te mostrará cómo crear un Gráfico de Equipo
title: reComputer R1000 con FIN para crear un Gráfico de Equipo
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_equip_gaphic
last_update:
  date: 07/22/2024
  author: ShuishengPeng
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reComputer_r1000_fin_equip_gaphic/
---

## Introducción

FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

Este artículo te mostrará cómo usar el `Graphics Builder` de FIN Framework, y crear un `Equip Graphic` usando el `Graphics Builder`.

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

## Pasos para crear un Gráfico de Equipo

### Crear nuevo Gráfico de Equipo

**Paso 1**: Por favor coloca el contexto bajo la ruta `Tower => Floor1 => ModbusEquip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**Paso 2**: Crea un nuevo `Gráfico de Equipo`. Haz clic en `Graphic Builder => new`, y según el contexto del sistema, aparecerá una ventana emergente llamada `Create a Graphic`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

La ventana emergente tiene principalmente los siguientes atributos:

- **Graphic Name:** Te permite escribir un nombre para el gráfico.
- **Graphic Template:** Te permite seleccionar una plantilla inicial de una lista de "plantillas de conductos" predefinidas disponibles. Este no es un parámetro requerido, solo te da un punto de partida de conductos. (También puedes crear tus propias plantillas para usar aquí).
- **Graphic On Filter:** El filtro Graphic On se refiere a las etiquetas "graphicOn" del gráfico, que determinan en qué registros de base de datos se ejecutará este gráfico. Por defecto, este filtro se llenará automáticamente basado en tu equipo de contexto. (En nuestro ejemplo, creé el gráfico mientras estaba en un VAV, por eso este filtro en la captura de pantalla está lleno con las etiquetas de ese VAV). Este filtro puede cambiarse posteriormente si surge la necesidad.
- **Relative - By Tags:** Esta opción hace que los puntos entren automáticamente como Relativos, basados en sus etiquetas actuales. Cuando los puntos son relativos, no están "codificados" a los datos de un conjunto de equipos. Son relativos y se cargarán en cualquier equipo que tenga puntos similares basados en las etiquetas de los puntos.
- **Relative - By navName:** Esta opción hace que los puntos entren automáticamente como Relativos, basados en su navName actual. Cuando los puntos son relativos, no están "codificados" a los datos de un conjunto de equipos. Son relativos y se cargarán en cualquier equipo que tenga puntos similares basados en el navName de los puntos.
- **Absolute - by Point Ids:** Esta opción hace que los puntos entren automáticamente como Absolutos (o `codificados`) al equipo actual en el que estás. Cuando un punto se trae "Absoluto por ID de punto", la ruta se codifica automáticamente para obtener datos de ese punto exacto sin importar dónde se cargue el gráfico.
- **Points:** Esto te permite seleccionar qué puntos te gustaría traer al gráfico. Usando las teclas *CTRL* y/o *SHIFT*, puedes seleccionar múltiples puntos. Los puntos se llenan basados en tu equipo de contexto. También obtienes puntos asociados a las referencias de ese equipo. (En nuestro ejemplo, el VAV tiene un ahuRef, por lo que podemos seleccionar puntos del ahuRef para mostrar en nuestro gráfico)
- **Add Components For:** Esta lista se llena con los puntos que seleccionas en la sección anterior "Points". Al resaltar puntos en esta sección, le estás diciendo a FIN que cree automáticamente un componente gráfico (basado en sus etiquetas) y vincule el punto al componente gráfico. Esto no es requerido pero puede ahorrar tiempo ya que selecciona el componente, lo trae, vincula el punto a él, y saca una Etiqueta de Visualización para él.

Después de completar la configuración, haz clic en el botón `OK`. Un nuevo gráfico aparecerá en el lado derecho. Haz clic en `EquipGraphic => Edit` para entrar a la interfaz de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### Configurar nuevo Gráfico de Equipo

**Paso 1**: Después de entrar a la interfaz de edición, el sistema generará automáticamente etiquetas inteligentes y componentes basados en el contenido seleccionado en la propiedad `Add Components for`. Mueve el control y haz clic en `Magic Button => Smart Label to GraphicObjects` para que la etiqueta inteligente se alinee automáticamente con el control.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**Paso 2**: Verifica `Virtual point`. Puedes hacer clic en el control a través del correo y seleccionar `Edit Properties`. Puedes ver `virtual point` en la nueva ventana emergente, y puedes modificarlo aquí; también puedes ver el `virtual point` correspondiente al control a través de `ADVANCED` en la esquina inferior izquierda.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**Paso 3**: Agregar nuevo componente y conectar `virtual point`. Además del componente generado automáticamente por el sistema, también podemos agregarlos nosotros mismos. Hay muchos componentes en la caja `COMPONENTS` a la izquierda. Arrastra el control con el botón izquierdo del ratón al control de trabajo, luego selecciona el `virtual point` correspondiente en la columna `VIRTUAL POINTS` y arrástralo al nuevo control principal. De esta manera se completa la vinculación del nuevo control al punto virtual.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**Paso 4**: Agregar `Overview Box`. Podemos agregar un `Overview Box` para mostrar todos los valores juntos. Haz clic en `Overview Box => New` y aparecerá una nueva ventana emergente:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **Mini Group:** Si está habilitado, esto hará que la caja de resumen aparezca con valores más grandes y un área de título más pequeña. Esta caja es más pequeña que la caja regular y se recomienda para escenarios donde la caja necesita estar en el gráfico, como VFD (Spd,Cmd,Ena,Stat)
- **Points**: Esto te permitirá seleccionar qué puntos incluir en la caja de resumen. **CONSEJO:** Si tenías alguna etiqueta inteligente seleccionada antes de abrir el asistente de Overview Box, esos puntos ya estarán seleccionados en la lista de puntos en el asistente.
  
Después de seleccionar el punto, ingresa el título de la ventana en la siguiente ventana, y finalmente haz clic en `APPLY`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**Paso 5**: Mostrar resultados

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

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
