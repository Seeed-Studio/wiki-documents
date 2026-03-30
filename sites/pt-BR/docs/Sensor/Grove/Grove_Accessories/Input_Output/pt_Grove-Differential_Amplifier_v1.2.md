---
title: Grove - Amplificador Diferencial v1.2
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Differential_Amplifier_v1.2/
slug: /Grove-Differential_Amplifier_v1.2
sku: 103020016
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-09'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Differential_Amplifier_v1.2/
---


![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Grove-Differential_Amplifier_v1.2.jpg)

Este Grove é projetado para amplificação diferencial de entrada precisa. Forneça os sinais diferenciais do seu sensor a este módulo através dos pinos macho e, em seguida, o seu Arduino receberá uma saída precisamente amplificada pela interface Grove. O fator de ganho é selecionável. Você pode obter uma amplificação de 35 vezes ou 1085 vezes através de uma chave na placa.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

Recursos
-------

- Alta precisão de amplificação
- Fator de escala selecionável
- Pode ser lido convenientemente pelo Arduino

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Aplicações
-----------

- Aquisição de dados
- Sistemas alimentados por bateria
- Amplificadores de ponte de pressão e temperatura
- Instrumentação de uso geral

Especificações
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th colspan="2" scope="row">
Tensão de Operação
</th>
<td>
2.7
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
Tensão de Entrada
</th>
<td>
0.1
</td>
<td>
\\
</td>
<td>
(Vcc-0.8)/Gain
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
Tensão de Saída
</th>
<td>
0
</td>
<td>
\\
</td>
<td>
Vcc-0.80
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th rowspan="2">
Ganho
</th>
<td>
Selecionar 35
</td>
<td>
/
</td>
<td>
35
</td>
<td>
/
</td>
<td colspan="2" rowspan="2">
/
</td>
</tr>
<tr align="center">
<td>
Selecionar 1085
</td>
<td>
/
</td>
<td>
1085
</td>
<td>
/
</td>
</tr>
</table>

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Uso
-----

**1. Escolha do Sensor**

O amplificador pode transformar sinais na escala de mA para a escala de A. Antes de usá‑lo, verifique se a faixa de saída do seu sensor está na escala de mA. Por exemplo, o [Weight Sensor](/pt-br/Weight_Sensor_Load_Cell_0-500g) é um deles.

**2. Reforma do Conector**

Para emparelhar o sensor de peso com os pinos macho do amplificador, conectores fêmea precisam ser soldados em seus fios.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Solder.jpg)

**3. Conexão de Hardware**

Conecte o sensor de peso ao amplificador como mostrado na figura abaixo.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Connect5.jpg)

**4. Medição**

Copie e cole o código de demonstração abaixo na Arduino IDE e faça o upload.

```
    void setup()
    {
      Serial.begin(9600);
      Serial.println("start");
    }

    void loop()
    {
      int i;
      int value;
      float V,Vo;
      float Sum=0;
      for(i=0;i<10;i++)
      {
        value=analogRead(4);
        V=value*5.00/1023;
        Sum+=V;
        delay(10);
      }
      Vo=Sum/10;
      Serial.print("Output score:");
      Serial.println(Vo);
      delay(1000);
    } 
```

Você pode visualizar os sinais amplificados através do monitor serial. Para o valor do sinal de entrada, você precisa usar o multímetro para medir a diferença de tensão entre VIN+ e VIN-.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Arquivo Eagle v1.2](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip)
- [Esquemático v1.2](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2.pdf)
- [INA132 Datasheet](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Ina132.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Differential_Amplifier_v1.2 -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
