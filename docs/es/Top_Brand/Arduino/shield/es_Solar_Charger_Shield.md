---
description: Escudo Cargador Solar
title: Escudo Cargador Solar
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Solar_Charger_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Escudo Cargador Solar
category: Discontinued
bzurl:
oldwikiname: Solar_Charger_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Solar_Charger_Shield
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solar-charger-shield.jpg)

El cargador solar es un escudo apilable para plataformas compatibles con Arduino, que permite alimentación adaptativa de batería y actúa como recolector de energía para carga en campo. Puede usar varias baterías solo para elevar a salida de 5V, o colocar batería de Li-ion y panel solar para formar una unidad de sensor autónoma.

**Modelo:[INT107D3P](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)**

## Características

### Carga

* Ajuste automático de corriente de carga según la capacidad de la fuente

* Diseñado para suministro inconstante como panel solar

* Curva de carga optimizada para baterías de Li-ion

* Indicador de estado de carga

### Suministro

* Voltaje de entrada amplio de 0.9-4.2V

* Salida regulada de 5 VDC

* Salida máxima de 500mA

* Eficiencia de conversión máxima del 87%

* Protección contra sobrecorriente integrada de 1A

## Ideas de Aplicación

* Aplicación1
* Aplicación2
* Aplicación3

## Precauciones

Las advertencias y operaciones incorrectas pueden causar peligro.

## Especificación

### Especificación Clave

<table>
  <tbody>
    <tr>
      <td width="400px">Tamaño de PCB</td>
      <td width="400px">5.3 x 6.9 x 0.16 cm</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Indicadores</td>
      <td>Cargando, completo</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Fuente de alimentación</td>
      <td>4.4VDV-6VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Conector de alimentación</td>
      <td>Mini USB / JST</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>RoHS</td>
      <td>SÍ</td>
    </tr>
  </tbody>
</table>

### Carga

<table>
  <tbody>
    <tr>
      <th>Especificación</th>
      <th>Mín</th>
      <th>Nom</th>
      <th>Máx</th>
      <th>Unidad</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>Voltaje de entrada</td>
      <td width={100}>4.4</td>
      <td width={100}>5</td>
      <td width={100}>6</td>
      <td width={100}>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Umbral de baja potencia</td>
      <td></td>
      <td>3.7</td>
      <td>3.9</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Voltaje de carga</td>
      <td>4.158</td>
      <td>4.2</td>
      <td>4.242</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Umbral de precarga</td>
      <td>2.9</td>
      <td>3</td>
      <td>3.1</td>
      <td>VDC</td>
    </tr>
  </tbody>
</table>

### Suministro de Energía

<table>
  <tbody>
    <tr>
      <th>Especificación</th>
      <th>Mín</th>
      <th>Nom</th>
      <th>Máx</th>
      <th>Unidad</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>Voltaje de batería</td>
      <td width={100}>2.8</td>
      <td width={100}>3.7</td>
      <td width={100}>4.2</td>
      <td width={100}>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Voltaje de salida</td>
      <td>4.6</td>
      <td>4.8</td>
      <td>5.0</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Corriente de salida</td>
      <td>200</td>
      <td>4.2</td>
      <td>500</td>
      <td>mA</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Eficiencia de elevación</td>
      <td>70</td>
      <td>80</td>
      <td>87</td>
      <td>&nbsp;%</td>
    </tr>
  </tbody>
</table>

### Curva de carga

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Changing-curve.jpg)

## Definición de pines y especificaciones  

## Dimensiones mecánicas  

## Uso  

### Instalación de hardware  

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware.jpg)

1.Configuración apilada, coloque la batería entre los conectores de pines, tenga en cuenta la polaridad al conectar los cables al conector de la batería.

(Rojo a +, negro a -).

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step1.jpg)

2.El panel solar u otras fuentes de energía deben conectarse a PWR1, conector del panel solar.

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step2.jpg)

**Fuente de energía: (salida de 4V a 6V)**

Celda solar de 5V

Salida de motor regulado

**Batería recargable (3.7V a 4.2V)**

Batería de litio

Batería NiMh

**Batería regular (de 2.8V a 4.2V)**

AAA

AA

### Programación  

Incluye fragmento de código importante.
Código de demostración como:

```
Demo code
{

}
```

### Ejemplo  

Los proyectos y ejemplos de aplicación.

## Lista de Materiales (BOM) / lista de partes  

Todos los componentes utilizados para producir el producto.

## FAQ  

Por favor lista tu pregunta aquí:

## Soporte  

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

## Seguimiento de Versiones  

<table>
  <tbody>
    <tr>
      <th>Revisión</th>
      <th>Descripciones</th>
      <th>Fecha de Lanzamiento</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}>Solar Charger Shield v1.0</td>
      <td width={500}>Lanzamiento público inicial</td>
      <td width={200}>01 de Mayo, 2010</td>
    </tr>
  </tbody>
</table>

## Bug Tracker  

Bug Tracker es el lugar donde puedes publicar cualquier error que creas haber encontrado durante el uso. Por favor escribe lo que tengas que decir, tus respuestas nos ayudarán a mejorar nuestros productos.

## Additional Idea  

Additional Idea es el lugar para escribir tus ideas de proyecto sobre este producto, u otros usos que hayas encontrado. O puedes escribirlos en la página de Projects.

## Cómo comprar  

Aquí para comprar Solar Charger Shield: [https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)

## Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

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
