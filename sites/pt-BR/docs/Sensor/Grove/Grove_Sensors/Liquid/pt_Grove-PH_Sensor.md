---
description: Grove - Sensor de PH
title: Grove - Sensor de PH
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-PH_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-PH_Sensor/
---
<!-- ---
name: Grove - PH Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html
oldwikiname:  Grove - PH Sensor
prodimagename: Phsensor.jpg
surveyurl: https://www.research.net/r/Grove_PH_Sensor
sku:  101020065
--- -->
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/Phsensor.jpg)

Você precisa medir o pH de uma solução aquosa? Aqui, o Grove - Sensor de PH pode ajudar você a fazer isso. Este sensor pode gerar um sinal que corresponde à concentração de íons de hidrogênio medida pelo eletrodo de PH. Como ele pode ser conectado diretamente ao controlador, você pode observar o valor de PH a qualquer momento. Este dispositivo pode ser usado para medições de PH, como em água residual, esgoto e outras situações.

:::note
Somente pedidos domésticos serão válidos. Não faça um pedido se o seu endereço não for na China.
:::

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html)

## Características

---

* Interface Grove
* Ampla faixa de medição
* Vida útil de dois anos
* Ponto isopotencial: pH 7,00 (0 mV)

## Especificações

---
<center>
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Típico</th>
<th scope="col">Unidades</th>
</tr>
<tr>
<th scope="row">Tensão de trabalho</th>
<td>5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Ponto isopotencial</th>
<td>7±0,5</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">Faixa de medição</th>
<td>0~14</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">Faixa de saída do sensor de pH</th>
<td>-414,12 ~ 414,12</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">Precisão de medição</th>
<td>&lt;15</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">Tempo de resposta</th>
<td>&lt;2</td>
<td>min</td>
</tr>
<tr>
<th scope="row">Faixa de temperatura</th>
<td>0~60</td>
<td>℃</td>
</tr>
</table>
</center>

## Esquemático

---
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Schematic.jpg)

## Uso

---
O sensor de pH pode ajudar você a detectar o valor de pH. O sucesso ou fracasso da medição de pH depende da calibração e da manutenção do sensor de PH. Agora vamos começar pela forma de calibrar.

### Calibração

* Antes de usar, você precisa lavá‑lo com água pura ou água deionizada e depois absorver a água com papel (o papel sem fibras). Lembre‑se, é melhor não esfregar, pois esfregar o eletrodo de PH causará erros. Aqui está uma imagem para referência:
*

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Usage.jpg)

Nesta imagem, a [solução tampão](http://www.chemguide.co.uk/physical/acidbaseeqia/buffers.html) de PH 9,18 é usada como solução de referência, o que nos ajuda a saber se o valor medido é preciso.
Agora vamos ver qual é o valor medido.

* Faça o upload do código de demonstração. Clique [aqui](/pt-br/Upload_Code) se você não souber como fazer o upload

```
//Function: The PH sensor output voltage value,
//          convert into PH and then display in the serial monitor.
#define Vref 4.95
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    int sensorValue;
    int m;
    long sensorSum;
    for(m=0;m<50;m++)
    {
        sensorValue=analogRead(A0);//Connect the PH Sensor to A0 port
        sensorSum += sensorValue;
    }
    sensorValue =   sensorSum/50;
    Serial.print(" the PH value is");
    Serial.println(7-1000*(sensorValue-372)*Vref/59.16/1023);

}
```

* Abra o monitor serial para ver o resultado:

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_result.jpg)

* Observe o resultado, você pode ver que o resultado do teste é consistente com o valor real. Então você pode começar a medir o pH da solução aquosa. Se houver erros entre o PH do líquido de referência e o valor de PH medido, é melhor deixar o eletrodo de PH de molho por várias horas e depois recalibrar. [Aqui](http://www.ehow.com/how_4796148_calibrate-ph-meter.html) há um guia sobre como calibrar para referência.

**Nota:** Se o valor medido que você obtém permanece maior ou menor do que deveria ser, a razão pode ser um valor de Vref inadequado. Vref é a tensão de trabalho do Arduino.

A relação entre o valor de PH e a tensão de saída:
<font color="blue">E=59.16(mV/PH)</font>

### Limpeza e Armazenamento

O eletrodo de pH é o componente mais sensível do seu instrumento de pH. E o eletrodo de pH não pode ser deixado secar ou congelar. A manutenção adequada proporcionará anos de medições confiáveis. Portanto, [o cuidado e a manutenção do eletrodo de pH](http://www.eutechinst.com/techtips/tech-tips26.htm) não são menos importantes do que a calibração. Lembre‑se: quando não estiver em uso, você deve lavá‑lo e mantê‑lo no recipiente com KCl 3 mol. O KCl 3 mol precisa ser preparado por você. O método de preparação pode ser consultado nas informações abaixo:

Com base em<font color="red"> 3 mol * ( 74.55 g / 1 mol KCl) = 223.65 g KCl)</font>
Portanto, para preparar uma solução de 3 mol / L de KCl, você precisará dissolver 223,65 g de KCl em um pouco de água, misturar e, em seguida, completar com água até a marca de 1 L.

Espero que isso ajude!

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Arquivo Eagle do Grove - PH Sensor](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip)

* [Esquemático do Grove - PH Sensor em PDF](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_v1.0.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
