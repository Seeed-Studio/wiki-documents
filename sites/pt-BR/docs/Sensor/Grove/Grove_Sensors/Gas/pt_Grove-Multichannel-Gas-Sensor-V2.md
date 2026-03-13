---
description: Grove - Sensor de Gás V2 (Multicanal)
title: Grove - Sensor de Gás V2 (Multicanal)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Multichannel-Gas-Sensor-V2
sku: 101020820
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Multichannel-Gas-Sensor-V2/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

:::tip
Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que ajudará você a escolher o sensor de gás que melhor atenda às suas necessidades.
:::

O Grove - Multichannel Gas Sensor V2 possui 4 unidades de medição, cada uma sensível a vários tipos de gases, o que significa que você pode obter quatro conjuntos de dados ao mesmo tempo. E diferentes tipos de gases também podem ser identificados por meio desses quatro conjuntos de dados. O sensor de gás usado neste módulo é baseado na tecnologia MEMS e tem a vantagem de ser de pequeno tamanho com estabilidade de medição considerável, sendo mais adequado para medições qualitativas do que quantitativas.

## Recursos

- Quatro elementos sensores totalmente independentes em um único encapsulamento.
- Capacidade de detectar uma variedade de gases, além de monóxido de carbono (CO), dióxido de nitrogênio (NO2), álcool etílico (C2H5CH), compostos orgânicos voláteis (VOC) etc.
- Detecção qualitativa, em vez de quantitativa.
- Tamanho compacto para fácil implantação.

## Especificação

|      Item      |                Valor               |
|:--------------:|:----------------------------------:|
|       MCU      |              STM32F030             |
|    Interface   |              Grove I2C             |
|   Endereço I2C |                0x08                |
| Tensão de saída |               3.3V~5V              |
|     Sensores   | GM-102B; GM-302B; GM-502B; GM-702B |

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
        <th className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tipo de produto</span></th>
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
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Ajustável</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tempo de resposta</span>（tres，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤30</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tempo de recuperação</span>（trec，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤60</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Resistência de aquecimento</span>（RH，Ω）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80±20</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>Tensão de operação</span>（V）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH=2.0±0.1 AC ou DC VC=5.0±0.1DC</span></td>
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
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Tipo de produto</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-302B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Encapsulamento padrão</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Encapsulamento cerâmico</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Concentração</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1</span>～500ppm</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Condições padrão de circuito</span><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Tensão de loop</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Tensão de aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC ou DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistência de carga</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Ajustável</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Características do sensor de gás sob condições padrão de teste</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistência de aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>60~100Ω</span>（Temperatura ambiente）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Consumo de energia de aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistência do corpo sensível</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ</span>～30KΩ(em 50ppm de Etanol)</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Sensibilidade</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Rs(no ar)/Rs(em 50ppm de Etanol)≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Inclinação da concentração</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9(R200ppm/R50ppm Etanol)</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold'}}>Condições padrão de teste</span></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Temperatura/Umidade</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃±2℃</span>；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Circuito de teste padrão</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V±0.1V</span>； VC:5.0V±0.1V</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Tempo de pré-aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Menos de 48 horas</span></td>
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
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Tipo de produto</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-502B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Pacote padrão</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Pacote cerâmico</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>Concentração</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1～500ppm</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><span style={{fontWeight: 'bold'}}>Condições de circuito padrão</span><br /><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Tensão de loop</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Tensão de aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2,5V±0,1V AC ou DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistência de carga</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Ajustável</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Características do sensor de gás sob condições de teste padrão</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistência de aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80Ω ± 20Ω（</span>Temperatura ambiente）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Consumo de energia de aquecimento</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Resistência do corpo sensível</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ～30KΩ (em 50ppm Etanol)</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Sensibilidade</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>R0 (no ar) / Rs (em 50ppm Etanol) ≥3,0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Inclinação da concentração</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0,9 (R200ppm / R50ppm Etanol)</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" rowSpan={2}><span style={{fontWeight: 'bold'}}>Condições de teste padrão</span><br /></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>Temperatura / Umidade</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃ ± 2℃；55% ± 5%RH</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}>Circuito de teste padrão<br /></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2,5V ± 0,1V；</span><br /><span style={{fontWeight: 'normal'}}>VC:5,0V ± 0,1V</span></td>
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
        <th className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>Tipo de produto</span></th>
        <th className="tg-v0nz">GM-702B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>Pacote padrão</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Pacote cerâmico</span></td>
      </tr>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>Concentração</span></td>
        <td className="tg-v0nz">5～5000ppm(CO)</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={3}><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Condições de circuito padrão</span><br /> </td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Tensão de loop</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-v0nz">≤24V DC</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><br /><span style={{fontWeight: 'normal'}}>Tensão de aquecimento</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-v0nz">2,5V±0,1V AC ou DC（Alta temperatura）<br />0,5V±0,1V AC ou DC（Baixa temperatura）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Resistência de carga</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-v0nz">60s±1s（T. A）；90s±1s（T. B）</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>Características do sensor de gás sob condições de teste padrão</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Resistência de aquecimento</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Ajustável</span></td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Consumo de energia de aquecimento</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-v0nz">80Ω±20Ω（<span style={{fontWeight: 'normal'}}>Temperatura ambiente</span>）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Resistência do corpo sensível</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-v0nz">≤50mW</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Sensibilidade</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-v0nz">1KΩ～30KΩ(em 150ppmCO)</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>Inclinação da concentração</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-v0nz">R0(no ar)/Rs(em 150ppmCO)≥3</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={2}><br /><span style={{fontWeight: 'bold'}}>Condições de teste padrão</span><br /></td>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>Temperatura / Umidade</span></td>
        <td className="tg-v0nz">20℃±2℃；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>Circuito de teste padrão</span></td>
        <td className="tg-v0nz">VH: 2,5V±0,1V（T. A）<br />0,5V±0,1V（T. B） VC : 5,0V±0,1V</td>
      </tr>
    </tbody>
  </table>
</div>

## Resultados de teste de amostra

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
    <th class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">Tempo: 2019.06.27</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">Condições de teste: VH=2.5V, VC=3.3V</span></td>
  </tr>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">Tipo: GM-102B, GM-302B, GM-502B, GM-702B</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">Gás: NO2</td>
    <td class="tg-l5ls" colspan="4">Gás: C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
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
    <td class="tg-l5ls" colspan="4">Gás: NO2</td>
    <td class="tg-l5ls" colspan="4">Gás: C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
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
    <td class="tg-l5ls" colspan="4">Gás: NO2</td>
    <td class="tg-l5ls" colspan="4">Gás: C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">inicial(V)</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
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
    <td class="tg-l5ls" colspan="4">Gás: CO</td>
    <td class="tg-w9f5" colspan="4"></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipos</span> <span style="font-weight:400;font-style:normal;text-decoration:none">de</span> <span style="font-weight:400;font-style:normal;text-decoration:none">sensores</span> </td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">Gases</span> <span style="font-weight:400;font-style:normal;text-decoration:none">medidos</span></td>
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
    <td class="tg-l5ls" colspan="4">Gás: CO</td>
    <td class="tg-0c4t" colspan="4" rowspan="12"><br><br><br><br><br>AVISO: Quando se trata de julgar qual é o gás, o GM-102B pode ser tomado como exemplo. Como pode ser visto nos quatro gráficos acima e ao lado, o GM-102B participou três vezes de cada detecção de gás. E o seu número de diferenças atingiu o pico na maior parte sob a atmosfera de NO2 em comparação com outros gases. Portanto, o GM-102B é sensível a NO2 e, consequentemente, é capaz de detectar NO2, o que também é aplicável a outros sensores e tipos de gases. Quando for colocado sob outros tipos de gases, o sensor é capaz de detectar o gás que o faz apresentar o maior número de diferenças.<br></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
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
    <td class="tg-l5ls" colspan="4">Gás：CO</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Tipo</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Valor</span> <span style="font-weight:400;font-style:normal;text-decoration:none">inicial(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">Diferença(V)</span></td>
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

[result outcome](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)

## Descrições das características

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png" alt="pir" width={600} height="auto" /></p>

Rs na figura representa o valor de resistência do sensor em diferentes concentrações de gás; R0 representa o valor de resistência do sensor em ar limpo. Todos os testes na imagem são concluídos sob condições padrão de teste. A linha amarela é Tolueno, a linha azul é Etanol, a linha vermelha é Acetona e a linha roxa é Formaldeído, que são as mesmas que as dos gráficos abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png" alt="pir" width={600} height="auto" /></p>

A tensão de saída no Gráfico 3 é a tensão através da resistência de carga (RL) do sensor em série. O teste na figura é concluído sob condições padrão de teste, com um gás de teste de 50 ppm de etanol. A tensão de saída no Gráfico 4 é a tensão através da resistência de carga (RL) do sensor em série. Todos os testes na figura são concluídos sob condições padrão de teste.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png" alt="pir" width={600} height="auto" /></p>

Rs no Gráfico 5 representa o valor de resistência do sensor em diferentes concentrações de gás; R0 representa o valor de resistência do sensor em ar limpo. Todos os testes na imagem são concluídos sob condições padrão de teste. A linha amarela é Tolueno, a linha azul é Etanol, a linha vermelha é Acetona e a linha roxa é Formaldeído, que são as mesmas que as dos gráficos abaixo. No Gráfico 6, Rs representa o valor de resistência sob 50 ppm de etanol e várias temperaturas/umidades; Rs0 representa o valor de resistência sob 50 ppm de etanol, 20 ℃ e 55% de UR.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png" alt="pir" width={600} height="auto" /></p>

A tensão de saída no Gráfico 7 é a tensão através da resistência de carga (RL) do sensor em série. O teste na figura é concluído sob condições padrão de teste, com um gás de teste de 50 ppm de etanol. A tensão de saída no Gráfico 8 é a tensão através da resistência de carga (RL) do sensor em série. Todos os testes na figura são concluídos sob condições padrão de teste.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png" alt="pir" width={600} height="auto" /></p>

No Gráfico 9, Rs representa a resistência do sensor em diferentes concentrações de gás; R0 representa o valor de resistência do sensor em ar limpo. Todos os testes na figura são concluídos sob condições de teste padrão. A linha preta é para CO, a vermelha é CH4, a roxa é para H2 e a rosa é para ar. No Gráfico 10, Rs representa o valor de resistência na concentração de 150ppmCO e em várias temperaturas/umidades; Rs0 significa o valor de resistência sob 150ppmCO, 20 ℃, 55% RH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png" alt="pir" width={600} height="auto" /></p>

A tensão no Gráfico 11 é a tensão no resistor de carga (RL) do sensor em série. O teste na figura é concluído sob condições de teste padrão, gás de teste 150ppmCO.
A tensão de saída no Gráfico 12 é a tensão no resistor de carga (RL) do sensor em série. Todos os testes na figura são concluídos sob condições de teste padrão.

## Plataformas Suportadas
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

#### Materiais Necessários

| Wio Terminal | Grove-Multichannel Gas Sensor V2 |
|--------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" style={{width:250, height:'auto'}}/></div> |<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png" style={{width:250, height:'auto'}}/></div> |
|[Adquira AGORA](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|

#### Visão Geral do Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Connection+Image.jpg" alt="pir" width={500} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Diagram.png" alt="pir" width={600} height="auto" /></p>

:::note
O módulo na imagem de Conexão de Hardware tem o mesmo arranjo que o da imagem de Diagrama de Hardware acima. Como você pode ver no Diagrama de Hardware, a área delineada à esquerda é a Interface Grove. E há quatro quadrados com pequenos furos que se referem aos sensores de gás. Quando a placa com os sensores é conectada ao Wio Terminal, as informações dos gases serão exibidas na tela.
:::

- **Passo 1.** Conecte o Grove - Multichannel Gas Sensor V2 à porta I2C do Grove-Base Shield. Conecte o Grove - Base Shield ao Wio Terminal. E conecte o Wio Terminal ao PC via cabo USB.

- **Passo 2.** Baixe a [Grove_Multichannel_Gas_Sensor_v2 Library](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip) do Github. E consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Copie o código para o Wio Terminal e faça o upload. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

- **Passo 4.** Consulte [How to TFT LCD Library](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/) para instalar a biblioteca TFT LCD. Por fim, faça o upload do código a partir da seção Código de Software abaixo e os dados deverão ser exibidos com sucesso.

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

- O módulo deve evitar ser colocado em vapor de compostos voláteis de silício, caso contrário isso reduzirá a sensibilidade de forma irrecuperável.
- O módulo deve evitar ser exposto a altas concentrações de gases corrosivos (como H2S, SOX, Cl2, HCl, etc.), caso contrário ele será danificado de forma irreversível.
- O módulo não deve ser colocado em água ou gelo.
- Após o módulo ser energizado, o sensor irá aquecer até certo grau durante o processo, o que é um fenômeno normal.
- Os usuários DEVEM pré-aquecer o módulo antes de começar a medir gases.
- Os valores obtidos por este sensor são valores analógicos e só podem ser usados como resultado de medições qualitativas, e não para medições quantitativas.

:::

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020820/Grove+-+Multichannel+Gas+Sensor+V2.0_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove_Multichannel_Gas_Sensor_v2 Library](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)
- **[PDF]** [GM-102B Technical Parameter.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-102B+Technical+Parameter.pdf)
- **[PDF]** [GM-302B MEMS Technical Parameterv2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-302B+MEMS+Technical+Parameterv2.1.pdf)
- **[PDF]** [Sample test outcomes.pdf](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)
- **[PDF]** [GM-502B MEMS VOC Technical Parameter v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-502B+MEMS+VOC+Technical+Parameter+v2.1.pdf)
- **[PDF]** [GM-702B Technical Parameter(Ver1.1).pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-702B+Technical+Parameter(Ver1.1).pdf)

## Suporte Técnico e Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
