---
description: Grove - Amplificador Diferencial v1.0
title: Grove - Amplificador Diferencial v1.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Differential_Amplifier_v1.0
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Differential_Amplifier_v1.0/
---

<!-- ---
name: Grove - Differential Amplifier v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html
oldwikiname:  Grove - Differential Amplifier v1.0
prodimagename:  Amplifier_V2.jpg
surveyurl: https://www.research.net/r/Grove-Differential_Amplifier_v1
sku:    103020016
--- -->
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_V2.jpg)

Você já percebeu que montar um CI amplificador na protoboard é um trabalho trabalhoso e totalmente desnecessário de repetir? Este módulo Grove pode poupar a bagunça de configurar esse CI ao integrar todo o circuito de operação. Ele foi projetado para amplificação precisa de entrada diferencial. Insira os sinais diferenciais do seu sensor neste módulo através dos pinos macho e então o seu Arduino receberá uma saída precisamente amplificada pela interface Grove. O fator de escala de ganho é selecionável. Você pode obter uma amplificação de 304 vezes ou 971 vezes por meio de uma chave na placa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

## Características

---

* Alta precisão de amplificação

* Fator de escala selecionável

* Pode ser lido convenientemente pelo Arduino

* Forte proteção de entrada: ±40V

## Aplicações

---

* Aquisição de dados

* Sistemas alimentados por bateria

* Amplificadores de ponte de pressão e temperatura

* Instrumentação de uso geral

## Especificações

---
<table cellspacing="0" width="80%">
  <tr>
    <th colspan="2" scope="col"> Item</th>
    <th scope="col"> Mín</th>
    <th scope="col"> Típico</th>
    <th scope="col"> Máx</th>
    <th scope="col"> Unidade</th>
  </tr>
  <tr>
    <th colspan="2" scope="row"> Tensão de Operação</th>
    <td> 2.7</td>
    <td> 5.0</td>
    <td> 36</td>
    <td> VCC</td>
  </tr>
  <tr>
    <th colspan="2" scope="row"> Tensão de Entrada</th>
    <td> 0.1</td>
    <td> \\</td>
    <td> (Vcc-0.8)/Gain</td>
    <td> mV</td>
  </tr>
  <tr>
    <th colspan="2" scope="row"> Tensão de Saída</th>
    <td> 0</td>
    <td> \\</td>
    <td> Vcc-0.80</td>
    <td> mV</td>
  </tr>
  <tr>
    <th rowspan="2"> Ganho</th>
    <td> Selecionar 304</td>
    <td> 297.92</td>
    <td> 304</td>
    <td> 310.08</td>
    <td colspan="2" rowspan="2"> /</td>
  </tr>
  <tr>
    <td> Selecionar 971</td>
    <td> 951.58</td>
    <td> 971</td>
    <td> 990.42</td>
  </tr>
</table>

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_Interface3.jpg)

**J2：**Interface da Fonte de Sinal

**J1：**Interface de Saída, Interface Grove Padrão

**R1：**resistor de ganho de 62Ω

**R3:** resistor de ganho de 200Ω

**U1:** CI INA125, amplificador de instrumentação

## Uso

---
**1. Escolha do Sensor**

O amplificador pode elevar sinais na escala de mA até a escala de A. Antes de usá‑lo, certifique‑se de que a faixa de saída do seu sensor esteja na escala de mA. Por exemplo, o [Weight Sensor](/pt-br/Weight_Sensor_Load_Cell_0-500g) é um deles.

**2. Reforma do Conector**

Para conectar o sensor de peso aos pinos macho do amplificador, é necessário soldar conectores fêmea em seus fios.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Solder.jpg)

**3. Conexão de Hardware**

Conecte o sensor de peso ao amplificador como mostrado na figura abaixo.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Connect5.jpg)

**4. Medição**

Copie e cole o código de demonstração abaixo na Arduino IDE e envie para a placa.

```cpp
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

## Teste de Precisão do Amplificador

---
A seguir está um teste para descobrir a precisão do amplificador. Coletamos 100 grupos de sinais de entrada e sinais de saída do amplificador, sob condição de fator de escala 304 ou 971, e traçamos os dois gráficos a seguir.

Nós aumentamos gradualmente a carga do sensor de peso adicionando água gota a gota em uma garrafa amarrada a ele.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/TEST_Score1.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Test_Score_Picture2.jpg)

O eixo horizontal representa a tensão de entrada e o eixo vertical representa a tensão de saída. Com o aumento do peso da garrafa, o sinal de entrada aumenta linearmente. O ganho real do primeiro gráfico é 300,1, o que tem 1,3% de desvio em relação ao ganho teórico, 304. E o ganho real do segundo gráfico é 971. O desvio é de 0,8% em comparação com 964,2.

A faixa de medição é determinada pela tensão de alimentação VCC, a tensão máxima de saída fica entre (VCC-1.2) e (VCC-0.8).

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Arquivo Eagle do Amplificador 1.0](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip)

* [Esquemático do Amplificador 1.0](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier.pdf)

* [Folha de Dados do INA125](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/INA125.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
