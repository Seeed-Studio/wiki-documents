---
description: Grove - Sensor de Gas V2(Multicanal)
title: Grove - Sensor de Gas V2(Multicanal)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Multichannel-Gas-Sensor-V2
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

:::tip
Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

Grove - Sensor de Gas Multicanal V2 tiene 4 unidades de medición, cada una de ellas es sensible a varios tipos de gases, lo que significa que puedes obtener cuatro conjuntos de datos al mismo tiempo. Y diferentes tipos de gases también pueden ser identificados por estos cuatro conjuntos de datos. El sensor de gas utilizado en este módulo está basado en tecnología MEMS y tiene la ventaja de tener un tamaño pequeño con considerable estabilidad de medición y es más adecuado para medición cualitativa que cuantitativa.

## Características

- Cuatro elementos sensores completamente independientes en un paquete.
- La capacidad de detectar una variedad de gases, además de Monóxido de carbono (CO), Dióxido de nitrógeno (NO2), Alcohol etílico (C2H5CH), Compuestos Orgánicos Volátiles (VOC) y etc.
- Detección cualitativa, en lugar de cuantitativa.
- Tamaño compacto para fácil implementación.

## Especificación

|      Elemento      |                Valor               |
|:--------------:|:----------------------------------:|
|       MCU      |              STM32F030             |
|    Interfaz   |              Grove I2C             |
|   Dirección I2C  |                0x08                |
| Voltaje de salida |               3.3V~5V              |
|     Sensores    | GM-102B; GM-302B; GM-502B; GM-702B |

**GM-102B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 828}}>
    <colgroup>
      <col style={{width: 412}} />
      <col style={{width: 416}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tipo de producto</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-102B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>V0(V)</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5-4.5</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>V0-VS(V)</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≥1.0</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Carga</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Ajustable</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tiempo de respuesta</span>（tres，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤30</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tiempo de recuperación</span>（trec，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤60</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Resistencia de calentamiento</span>（RH，Ω）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80±20</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Voltaje de operación</span>（V）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH=2.0±0.1 AC o DC VC=5.0±0.1DC</span></td>
      </tr>
    </tbody>
  </table>
</div>
  
**GM-302B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Tipo de producto</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-302B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Paquete estándar</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Paquete cerámico</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Concentración</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1</span>～500ppm</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Condiciones estándar del circuito</span><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Voltaje del bucle</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Voltaje de calentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC o DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistencia de carga</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Ajustable</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Características del sensor de gas bajo condiciones de prueba estándar</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistencia de calentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>60~100Ω</span>（Temperatura ambiente）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Consumo de energía de calentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistencia del cuerpo sensible</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ</span>～30KΩ(en 50ppm de Etanol )</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Sensibilidad</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Rs(en aire)/Rs(en 50ppm de Etanol )≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Pendiente de concentración</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9(R200ppm/R50ppm Etanol )</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold'}}>Condiciones de prueba estándar</span></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Temperatura/Humedad</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃±2℃</span>；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Circuito de prueba estándar</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V±0.1V</span>； VC:5.0V±0.1V</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Tiempo de precalentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Menos de 48hrs</span></td>
      </tr>
    </tbody>
  </table>
</div>
  
**GM-502B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 822}}>
    <colgroup>
      <col style={{width: 296}} />
      <col style={{width: 211}} />
      <col style={{width: 35}} />
      <col style={{width: 280}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Tipo de producto</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-502B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Paquete estándar</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Paquete cerámico</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Concentración</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1～500ppm</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><span style={{fontWeight: 'bold'}}>Condiciones estándar del circuito</span><br /><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Voltaje del bucle</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Voltaje de calentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC o DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistencia de carga</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Ajustable</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Características del sensor de gas bajo condiciones de prueba estándar</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistencia de calentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80Ω ± 20Ω（</span>Temperatura ambiente）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Consumo de energía de calentamiento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistencia del cuerpo sensible</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ～30KΩ (en 50ppm Etanol)</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Sensibilidad</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>R0 (en aire) / Rs (en 50ppm Etanol) ≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Pendiente de concentración</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9 (R200ppm / R50ppm Etanol)</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" rowSpan={2}><span style={{fontWeight: 'bold'}}>Condiciones de prueba estándar</span><br /></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Temperatura / Humedad</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃ ± 2℃；55% ± 5%RH</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}>Circuito de prueba estándar<br /></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V ± 0.1V；</span><br /><span style={{fontWeight: 'normal'}}>VC:5.0V ± 0.1V</span></td>
      </tr>
    </tbody>
  </table>
</div>
  
**GM-702B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 822}}>
    <colgroup>
      <col style={{width: 304}} />
      <col style={{width: 211}} />
      <col style={{width: 35}} />
      <col style={{width: 272}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>Tipo de producto</span></th>
        <th className="tg-v0nz">GM-702B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>Paquete estándar</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Paquete cerámico</span></td>
      </tr>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>Concentración</span></td>
        <td className="tg-v0nz">5～5000ppm(CO)</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={3}><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Condiciones estándar del circuito</span><br /> </td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Voltaje del bucle</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-v0nz">≤24V DC</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><br /><span style={{fontWeight: 'normal'}}>Voltaje de calentamiento</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-v0nz">2.5V±0.1V AC o DC（Alta temperatura）<br />0.5V±0.1V AC o DC（Baja temperatura）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Resistencia de carga</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-v0nz">60s±1s（A. T)；90s±1s（B. T）</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Características del sensor de gas bajo condiciones de prueba estándar</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Resistencia de calentamiento</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Ajustable</span></td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Consumo de energía de calentamiento</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-v0nz">80Ω±20Ω（<span style={{fontWeight: 'normal'}}>Temperatura ambiente</span>）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Resistencia del cuerpo sensible</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-v0nz">≤50mW</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Sensibilidad</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-v0nz">1KΩ～30KΩ(en 150ppmCO)</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Pendiente de concentración</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-v0nz">R0(en aire)/Rs(en 150ppmCO)≥3</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={2}><br /><span style={{fontWeight: 'bold'}}>Condiciones de prueba estándar</span><br /></td>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>Temperatura / Humedad</span></td>
        <td className="tg-v0nz">20℃±2℃；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>Circuito de prueba estándar</span></td>
        <td className="tg-v0nz">VH: 2.5V±0.1V（A. T）<br />0.5V±0.1V（B. T） VC : 5.0V±0.1V</td>
      </tr>
    </tbody>
  </table>
</div>
  
## Resultados de pruebas de muestra

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0c4t{background-color:#ffffff;border-color:#000000;color:#fe0000;font-size:16px;font-weight:bold;text-align:left;
  vertical-align:top}
.tg .tg-bjhj{background-color:#FFF;border-color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}
.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;
  vertical-align:top}
.tg .tg-i1ym{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:left;
  vertical-align:top}
.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-w9f5{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:middle}
.tg .tg-anz3{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:middle}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 818px">
<colgroup>
<col style="width: 43px">
<col style="width: 84px">
<col style="width: 100px">
<col style="width: 96px">
<col style="width: 112px">
<col style="width: 93px">
<col style="width: 92px">
<col style="width: 89px">
<col style="width: 109px">
</colgroup>
<thead>
  <tr>
    <th class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">Time：2019.06.27</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">Test</span> <span style="font-weight:700;font-style:normal;text-decoration:none">conditions：VH=2.5V，VC=3.3V</span></td>
  </tr>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">Type：GM-102B、GM-302B、GM-502B、GM-702B</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">Gas：NO2</td>
    <td class="tg-l5ls" colspan="4">Gas：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.38</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.03</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.42</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.58</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.48</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.46</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.95</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.06</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.11</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.42</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.53</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.89</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.93</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.52</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.54</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.55</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.99</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.86</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.51</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">2#</span></td>
    <td class="tg-l5ls" colspan="4">Gas：NO2</td>
    <td class="tg-l5ls" colspan="4">Gas：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.22</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.92</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.49</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.45</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.24</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.21</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.09</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.74</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.45</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.49</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.96</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.51</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.88</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.37</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.77</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.3</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.47</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.74</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.73</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.99</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">3#</span></td>
    <td class="tg-l5ls" colspan="4">Gas：NO2</td>
    <td class="tg-l5ls" colspan="4">Gas：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">value(V)</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.29</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.27</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.02</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.2</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.62</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.42</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.12</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.61</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.51</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.12</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.21</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.82</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.58</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.24</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.72</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.86</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.14</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.06</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.37</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.69</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.08</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.8</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.72</span></td>
  </tr>
  <tr>
    <td class="tg-w9f5" colspan="9"></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">Gas：CO</td>
    <td class="tg-w9f5" colspan="4"></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">Types</span> <span style="font-weight:400;font-style:normal;text-decoration:none">of</span> <span style="font-weight:400;font-style:normal;text-decoration:none">sensors</span> </td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">Gases</span> <span style="font-weight:400;font-style:normal;text-decoration:none">measured</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.31</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.02</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">NO2</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.88</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.16</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">C2H5OH</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.02</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">VOC</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.22</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.09</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.87</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">CO</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">2#</span></td>
    <td class="tg-l5ls" colspan="4">Gas：CO</td>
    <td class="tg-0c4t" colspan="4" rowspan="12"><br><br><br><br><br>NOTICE: When it comes to judging what the gas is, GM-102B can be taken as an example. As it can be seen from the four charts above and beside, GM-102B has participated three times for each gas detecting. And its number of differences peaked at the most under the atmosphere of  NO2 than other gases. Therefore GM-102B is sensible to NO2 and accordingly is able to detect NO2, which is applicable to other sensors and sorts of gases as well. When being put under other kinds of gases, the sensor is able to detect the gas which makes it the most differences.<br></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.95</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.36</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.48</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.12</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.46</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.5</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.04</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.46</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">3#</span></td>
    <td class="tg-l5ls" colspan="4">Gas：CO</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Type</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Initial</span> <span style="font-weight:400;font-style:normal;text-decoration:none">value(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Difference(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.17</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.25</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.07</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.71</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.01</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.7</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.69</span></td>
  </tr>
  <tr>
    <td class="tg-anz3" rowspan="15"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/1.png" alt="Image" width="400" height="300"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/2.png" alt="Image" width="400" height="300"></td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-anz3" rowspan="15"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/3.png" alt="Image" width="400" height="300"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/4.png" alt="Image" width="400" height="300"></td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</tbody>
</table> -->

[resultado final](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)

## Descripciones de características

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png" alt="pir" width={600} height="auto" /></p>

Rs en la figura representa el valor de resistencia del sensor en diferentes concentraciones de gas; R0 representa el valor de resistencia del sensor en aire limpio. Todas las pruebas en la imagen se completan bajo condiciones de prueba estándar. La línea amarilla es Tolueno, la línea azul es Etanol, la línea roja es Acetona y la línea púrpura es Formaldehído, que son las mismas que en los gráficos a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png" alt="pir" width={600} height="auto" /></p>

El voltaje de salida en el Gráfico 3 es el voltaje a través de la resistencia de carga (RL) del sensor en serie. La prueba en la figura se completa bajo condiciones de prueba estándar, con un gas de prueba de 50 ppm de etanol. El voltaje de salida en el Gráfico 4 es el voltaje a través de la resistencia de carga (RL) del sensor en serie. Todas las pruebas en la figura se completan bajo condiciones de prueba estándar.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png" alt="pir" width={600} height="auto" /></p>

Rs en el Gráfico 5 representa el valor de resistencia del sensor en diferentes concentraciones de gas; R0 representa el valor de resistencia del sensor en aire limpio. Todas las pruebas en la imagen se completan bajo condiciones de prueba estándar. La línea amarilla es Tolueno, la línea azul es Etanol, la línea roja es Acetona y la línea púrpura es Formaldehído, que son las mismas que en los gráficos a continuación. En el Gráfico 6, Rs representa el valor de resistencia bajo 50ppm de etanol y varias temperaturas / humedades; Rs0 representa el valor de resistencia bajo 50ppm de etanol, 20 ℃ y 55% HR.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png" alt="pir" width={600} height="auto" /></p>

El voltaje de salida en el Gráfico 7 es el voltaje a través de la resistencia de carga (RL) del sensor en serie. La prueba en la figura se completa bajo condiciones de prueba estándar, con un gas de prueba de 50 ppm de etanol. El voltaje de salida en el Gráfico 8 es el voltaje a través de la resistencia de carga (RL) del sensor en serie. Todas las pruebas en la figura se completan bajo condiciones de prueba estándar.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png" alt="pir" width={600} height="auto" /></p>

En el Gráfico 9, Rs representa la resistencia del sensor en diferentes concentraciones de gas; R0 representa el valor de resistencia del sensor en aire limpio. Todas las pruebas en la imagen se completan bajo condiciones de prueba estándar. La línea negra es para CO, la roja es CH4, la púrpura es para H2 y la rosa es Aire. En el Gráfico 10, Rs representa la temperatura a 150ppmCO y varias temperaturas / humedades. Valor de resistencia; Rs0 significa valor de resistencia bajo 150ppmCO, 20 ℃, 55% HR.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png" alt="pir" width={600} height="auto" /></p>

El voltaje en el Gráfico 11 es el voltaje a través de la resistencia de carga (RL) del sensor en serie. La prueba en la imagen se completa bajo condiciones de prueba estándar, gas de prueba 150ppmCO.
El voltaje de salida en el Gráfico 12 es el voltaje a través de la resistencia de carga (RL) del sensor en serie. Todas las pruebas en la imagen se completan bajo condiciones de prueba estándar.

## Plataforma Soportada
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

#### Materiales Requeridos

| Wio Terminal | Grove-Multichannel Gas Sensor V2 |
|--------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" style={{width:250, height:'auto'}}/></div> |<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png" style={{width:250, height:'auto'}}/></div> |
|[Obtener UNO Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|

#### Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Connection+Image.jpg" alt="pir" width={500} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Diagram.png" alt="pir" width={600} height="auto" /></p>

:::note
El módulo en la imagen de Conexión de Hardware tiene la misma disposición que el de la imagen del Diagrama de Hardware mostrado arriba. Como puedes ver en el Diagrama de Hardware, el área delineada a la izquierda es la Interfaz Grove. Y hay cuatro cuadrados con pequeños orificios que se refieren a los sensores de gas. Cuando la placa con sensores se conecta con Wio Terminal, la información de los gases se mostrará en la pantalla.
:::

- **Paso 1.** Conecta Grove - Multichannel Gas Sensor V2 al puerto I2C de Grove-Base Shield. Conecta Grove - Base Shield en Wio Terminal. Y conecta Wio Terminal a la PC mediante un cable USB.

- **Paso 2.** Descarga la [Grove_Multichannel_Gas_Sensor_v2 Library](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip) desde Github. Y consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Copia el código en Wio Terminal y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/).

- **Paso 4.** Consulta [Cómo instalar TFT LCD Library](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/) para instalar TFT LCD Library. Finalmente, sube el código del Código de Software a continuación y los datos deben mostrarse exitosamente.

#### Código de Software

```cpp
#include <TFT_eSPI.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

TFT_eSPI tft; 
// Stock font and GFXFF reference handle
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
  // put your setup code here, to run once:
  tft.begin();
  tft.setRotation(3);
  spr.createSprite(tft.width(),tft.height()); 
  gas.begin(Wire, 0x08); // use the hardware I2C
}

void loop() {
  // put your main code here, to run repeatedly:
  int val;
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique18pt7b); 
  spr.setTextColor(TFT_BLUE);
  spr.drawString("Gas Terminal", 60 - 15, 10 , 1);// Print the test text in the custom font
  for(int8_t line_index = 0;line_index < 5 ; line_index++)
  {
    spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
  }
  
  spr.setFreeFont(&FreeSansBoldOblique9pt7b);                 // Select the font
  // GM102B NO2 sensor
  val = gas.getGM102B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("NO2:", 60 - 24, 100 -24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(60 - 24,100,80,40,5,TFT_WHITE); 
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM302B C2H5CH sensor
  val = gas.getGM302B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("C2H5CH:", 230 -24 , 100 - 24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(230 - 24,100,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,230 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM502B VOC sensor
  val = gas.getGM502B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("VOC:", 60 - 24, 180 -24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(60 - 24,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,180+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM702B CO sensor
  val = gas.getGM702B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("CO:", 230 -24 , 180 - 24, 1);// Print the test text in the custom font
  spr.drawRoundRect(230 - 24 ,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val ,230 - 20 ,180+10,1);
  spr.setTextColor(TFT_GREEN);
  
  spr.pushSprite(0, 0);
  delay(100);

}
```

:::caution

- El módulo debe evitar ser colocado en vapor de compuestos de silicio volátiles, o causará que la sensibilidad se reduzca y sea irrecuperable.
- El módulo debe evitar ser expuesto a altas concentraciones de gases corrosivos (como H2S, SOX, Cl2, HCl, etc.), de lo contrario será dañado irreversiblemente.
- El módulo no debe ser colocado en agua o hielo.
- Después de que el módulo se encienda, el sensor se calentará hasta cierto grado durante el proceso, lo cual es un fenómeno normal.
- Los usuarios DEBEN precalentar el módulo antes de comenzar a medir gases.
- Los valores obtenidos por este sensor son valores analógicos y solo pueden ser utilizados como resultado de mediciones cualitativas y no para mediciones cuantitativas.

:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020820/Grove+-+Multichannel+Gas+Sensor+V2.0_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Librería Grove_Multichannel_Gas_Sensor_v2](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)
- **[PDF]** [GM-102B Technical Parameter.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-102B+Technical+Parameter.pdf)
- **[PDF]** [GM-302B MEMS Technical Parameterv2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-302B+MEMS+Technical+Parameterv2.1.pdf)
- **[PDF]** [Sample test outcomes.pdf](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)
- **[PDF]** [GM-502B MEMS VOC Technical Parameter v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-502B+MEMS+VOC+Technical+Parameter+v2.1.pdf)
- **[PDF]** [GM-702B Technical Parameter(Ver1.1).pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-702B+Technical+Parameter(Ver1.1).pdf)

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
