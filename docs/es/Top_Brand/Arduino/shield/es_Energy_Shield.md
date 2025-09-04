---
description: Energy_Shield
title: Energy Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Energy_Shield
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield.jpg" alt="pir" width={600} height="auto" /></p>

Energy Shield es un escudo de alimentación basado en batería LiPo que mantiene vivo tu proyecto. Mantiene su batería cargada siempre que exista una fuente de alimentación disponible. Acepta una amplia gama de fuentes de alimentación, desde células solares comunes vía conector JST y USB vía puerto USB en el microcontrolador, hasta adaptadores DC de 9V y 12V vía conector DC en tu Arduino. Mientras tanto, no solo puede proporcionar energía para tu proyecto Arduino, con un puerto USB estándar incluido en el escudo, también es capaz de rescatar tus dispositivos eléctricos móviles de baterías agotadas, como teléfono móvil, mp3 y tablet.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/energy-shield-p-1373.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Acepta amplia gama de entradas de alimentación
- Protección contra sobrevoltaje
- Eficiencia de conversión de energía alta del 85%+
- Indicadores LED integrales para estado de carga y funcionamiento

## Especificaciones

**Especificaciones de Salida de Energía**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Elemento</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidad</h3></td>
  </tr>
  <tr>
    <td><h4>voltaje</h4></td>
    <td><h4>4.9</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.1</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>corriente</h4></td>
    <td><h4>5</h4></td>
    <td><h4>/</h4></td>
    <td><h4>750</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  </tbody></table>

**Especificaciones de Entrada de Energía vía Conector JST**

| Elemento           | Mín | Típico | Máx | Unidad |
|--------------------|-----|--------|-----|--------|
| Voltaje Efectivo   | 4.5 | 5      | 5.5 | V      |
| Corriente          | 1   | /      | 800 | mA     |
| Voltaje de Protección | /   | /      | 12  | V      |

<table align="center">
  <tbody>
  <tr>
    <td><h3>Elemento</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidad</h3></td>
  </tr>
  <tr>
    <td><h4>Voltaje Efectivo</h4></td>
    <td><h4>4.5</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>corriente</h4></td>
    <td><h4>1</h4></td>
    <td><h4>/</h4></td>
    <td><h4>800</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  <tr>
    <td><h4>Voltaje de Protección</h4></td>
    <td><h4>/</h4></td>
    <td><h4>/</h4></td>
    <td><h4>12</h4></td>
    <td><h4>V</h4></td>
  </tr>
  </tbody></table>

**Explicación del Modo de Funcionamiento**

El escudo de energía puede extraer corriente de tres puertos diferentes para cargar la batería, incluyendo el conector JST, puerto USB @ Arduino y jack DC. Los rangos de voltaje varían como se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Working_Mode_Explanation.jpg" alt="pir" width={600} height="auto" /></p>

Cuando el voltaje de entrada está por debajo de 6.6V, puedes cambiar el modo de funcionamiento del Escudo de Energía entre "Charge" y "ON" a través del interruptor selector de modo de funcionamiento. En la condición "Charge", la batería Lipo no produce salida sino que solo extrae corriente de cualquier fuente de alimentación existente. En la condición "ON", la batería se carga además de suministrar energía a todo el sistema.

Sin embargo, cuando el voltaje de entrada excede 6.6V, el Escudo de Energía se ve forzado a entrar en el modo "Charge" independientemente del estado del interruptor.

## Descripción General del Hardware

---------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield_Interface_V2.0.jpg" alt="pir" width={600} height="auto" /></p>

**Configuración del Hardware**

U1: IC ISL97516, chip elevador;

U3: IC CN3065, chip de gestión de carga;

U4,U8: IC LM293D, comparadores diferenciales duales;

Indicador de Carga: se enciende en estado de carga;

Indicador de Capacidad: indica la vida restante de la batería;

Botón SW2: verificar la capacidad de la batería;

**Pines Utilizados en Arduino**

Pin Vin: transporta energía desde el jack DC para cargar la batería;

Pin 5V: transporta energía desde el puerto USB para cargar la batería;

**Otras Interfaces**

Socket JST: proporcionado para fuentes de alimentación externas que requieren conector JST, como panel solar;

Socket de batería: usado para conectar batería LiPo;

Puerto USB: salida de 5V para otros dispositivos;

Uso
-----

### 1. Ejemplos de Carga

Puedes cargar la batería Lipo con múltiples fuentes de alimentación externas. Aquí te mostramos usos de dos fuentes de alimentación comunes.

**1) Panel Solar**

El panel solar es una de las fuentes de energía verde más comunes que usamos. La salida típica de una unidad es alrededor de 5V. Proporcionamos [muchos paneles solares](https://www.seeedstudio.com/s/solar%20panel.html) en nuestra tienda. Todos están preensamblados con conectores JST que pueden coincidir perfectamente con el Escudo de Energía.

Conecta el panel solar al socket JST en el escudo como se muestra a continuación.

:::note
Asegúrate de que haya suficiente luz para proporcionar corriente considerable.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_Solar_Panel_.jpg" alt="pir" width={600} height="auto" /></p>

Ahora, presiona SW2. Encontrarás que el LED indicador de "Charge" se enciende. El otro indicador "Capacity" indica la energía restante de la batería. Cuando la energía restante está por debajo del 30%, se vuelve rojo. Cuando la energía restante está entre 30% - 80%, se vuelve amarillo. De lo contrario es verde.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

**2) Adaptador de 9V**

Si estás usando un adaptador DC para suministrar energía a tu proyecto, entonces el adaptador de 9V no te será desconocido. Al conectar un adaptador de 9V al Jack DC de Arduino, puedes ejecutar tu proyecto además de cargar la batería simultáneamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

![](https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_9V_Jack.jpg)

### 2. Alimentación del escudo para dispositivo

**1) Suministrar Energía Para Arduino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Arduino.jpg" alt="pir" width={600} height="auto" /></p>

Cambia el interruptor selector de modo de funcionamiento a "ON". Verifica el LED indicador de energía en Arduino para ver si funciona apropiadamente.

**2) Suministrar Energía Para Dispositivos Móviles**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Phone.jpg" alt="pir" width={600} height="auto" /></p>

Usa el puerto USB estándar en el escudo para suministrar energía a dispositivos móviles.

### 3. Eficiencia de Conversión

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Convert_effect.jpg" alt="pir" width={600} height="auto" /></p>

El gráfico anterior describe la eficiencia de conversión del circuito elevador del Escudo de Energía. El circuito elevador eleva el voltaje de la batería Lipo, que es típicamente 4.2V o 3.7V con la caída de energía restante, a 5V y suministra hacia afuera. Puedes encontrar que esta eficiencia de conversión alcanza su pico cuando la corriente de salida está alrededor de 200mA.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Archivo Eagle de Energy Shield](https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip)
- [Hoja de datos CN3065](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3065.pdf)
- [Hoja de datos ISL97516](https://files.seeedstudio.com/wiki/Energy_Shield/res/ISL97516.pdf)
- [Hoja de datos LM293D](https://files.seeedstudio.com/wiki/Energy_Shield/res/LM293D.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Energy_Shield -->

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
