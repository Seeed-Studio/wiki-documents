---
description: Este artículo explica cómo usar fuxa para realizar SCADA en un reComputer R1000, recibiendo datos de node-red y OPC UA Simulator y mostrando diagramas en tiempo real.
title: reComputer R1000 con fuxa para implementar SCADA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_achieve_scada
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

fuxa es un software web de visualización de procesos (SCADA/HMI/Dashboard). Con fuxa puedes crear interfaces de proceso modernas con diseños personalizados para tus máquinas y visualización de datos en tiempo real. Admite protocolos Modbus RTU/TCP, Siemens S7, OPC-UA, BACnet IP, MQTT y otros.

Este artículo muestra cómo usar fuxa para un entorno SCADA, donde fuxa recibe datos de `node-red` y `OPC UA Simulator`, y los muestra mediante `chart` y `Circular Gauge`. También se dibujan patrones para simular procesos industriales.

## Comenzando

Antes de iniciar este proyecto, asegúrate de tener preparado tu hardware y software como se describe a continuación.

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

* Python 3.11 puede ser incompatible con fuxa. Si tu Python es 3.11, considera cambiar a otra versión.
* Usamos [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Para instalarlo:

```shell
## Necesitas Node 14, 16 o 18
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
tar -xf node-v18.20.3-linux-arm64.tar.xz
cd node-v18.20.3-linux-arm64
sudo cp -R * /usr/local/
node -v
npm -v
## Instalar FUXA
sudo npm install -g --unsafe-perm @frangoteam/fuxa
sudo fuxa
```

* Para usar fuxa con OPC-UA, revisa [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_fuxa_opc_ua/).
* Para usar fuxa con mqtt client, revisa [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_fuxa_mqtt_client/). A diferencia de ese wiki, aquí los datos publicados en `node-red` se procesan con un módulo `function` y un módulo `loop`. El código del `function` es:

```java
## On Start
  global.set('firstTank', '10000');
  global.set('secondTank', '0');
  global.set('thirdTank', '0');
```
```java
## On Message
  var firstTank = global.get('firstTank');
  var secondTank = global.get('secondTank');
  var thirdTank = global.get('thirdTank');
  if (firstTank <= 0) {
      global.set('firstTank', 10000);
      global.set('secondTank', 0);
      global.set('thirdTank', 0);
      firstTank=10000;
      secondTank=0;
      thirdTank=0;
  }

  firstTank = firstTank - 3;
  secondTank++;
  thirdTank++;
  thirdTank++;
  global.set('firstTank',firstTank);
  global.set('secondTank',secondTank);
  global.set('thirdTank',thirdTank);
  var data = {
      "firstTank":firstTank,
      "scondTank":secondTank,
      "thirdTank":thirdTank,
  };
  msg.payload = data;
  return msg;
```

El objetivo es empacar `firstTank`, `secondTank` y `thirdTank` en formato JSON y publicarlos vía mqtt.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png" /></center>

- Haz clic en `+` abajo a la derecha en fuxa, ingresa `Name`, `Type` = `Internal`, haz clic en `OK` para crear un nuevo módulo que no comunica con dispositivos externos, pero te permite añadir tags personalizados (`boolean`, `number`, `string`).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif" /></center>

### Configuración de Hardware

Conectamos el PC con Windows 10 y el reComputer R1000 al mismo switch mediante Ethernet, asegurando que estén en la misma red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Introducción a la visualización y controles principales

### Chart

fuxa ofrece gráficos de curva e histogramas. Usando el gráfico de curva como ejemplo:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png" /></center>

- Configura `Name`, `font size`, `data format`, `time format`, ejes X/Y, etc.
- Lo esencial es `Chart to show`, que determina la fuente de datos y el formato de líneas.

Haz clic en `Chart to show`, luego en `New Chart`. Aparece una ventana, haz clic en `+`, ingresa un nombre, clic en `OK`. Haz clic en el nuevo config, luego en `Add Line`, elige los datos a mostrar, clic en `OK`. Así agregas múltiples curvas.

Mostramos datos de `Prosys OPC UA Simulation Server`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif" /></center>

### Switch

El switch tiene propiedades como se ve:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png" /></center>

Elegimos un tag boolean `swich_1`. Configuramos color y texto al encender/apagar.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif" /></center>

### Shape

fuxa trae varias formas (`shape`) para dibujar interfaces industriales. Cada `shape` tiene:

- **Property**: configurar color. Si enlazas un `Tag`, la forma cambia de color según el valor.
- **Events**: define qué acción ocurre al dispararse un evento.
- **Actions**: enlazado a un `Tag`, define acciones basadas en rangos de valores.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png" /></center>

Ejemplo de un almacén (`warehouse`), cambiando color con `Property`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif" /></center>

`Events`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif" /></center>

`Actions`: si un `Tag` alcanza cierto rango, se dispara una acción (rotar, ocultar, etc.). Ejemplo de girar un almacén.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif" /></center>

### Pipe

Para ilustrar flujo en procesos industriales, usa `pipe`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png" /></center>

En `Property` ajustas ancho y color. En `Actions`, enlazas un `Tag` para 4 acciones: `Stop`, `Turn clockwise`, `Turn anticlockwise`, `Hide content`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif" /></center>

Para simular un proceso industrial, añadimos 2 tanques y tuberías:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif" /></center>

### Circular Gauge

Además de `charts`, los medidores circulares (`Circular Gauge`) muestran datos en tiempo real. Hay 3 tipos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png" /></center>

Debes enlazar un `Tag` y definir el rango máximo. Por ejemplo, enlazamos `Tank1` del topic `/dev/fromfuxa`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif" /></center>

Luego añadimos `Tank2` y `Tank3`:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif" /></center>

### Slider

Un `slider` ajusta variables como `flow` o `pressure`. Propiedades:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png" /></center>

Se enlaza un `Tag`. Aquí enlazamos `Flow control 1`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif" /></center>

### Alarm

En procesos industriales, un valor excesivo dispara una alarma. fuxa soporta monitoreo en tiempo real de un valor, lanzando alarma si alcanza cierto rango.

Por defecto, la barra de alarmas está desactivada. Debes activarla:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif" /></center>

Luego configuras la alarma. Haz clic en el botón de Settings arriba a la izquierda, luego `Alarms`, `+`. Enlaza un `Tag` y define cuatro niveles: `High High`, `High`, `Low`, `Message`. Cada nivel tiene un rango, y si el valor cae en ese rango, se dispara la alarma.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif" /></center>

### Demo SCADA

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos distintos canales de soporte para cubrir diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
