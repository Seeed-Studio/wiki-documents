---
description: Grove - Sensor de HCHO
title: Grove - Sensor de HCHO
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-HCHO_Sensor
sku: 101020001
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-HCHO_Sensor/
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


O Grove - HCHO Sensor é um sensor semicondutor de gás VOC. Seu design é baseado no WSP2110, cuja condutividade muda com a concentração de gás VOC no ar. Através do circuito, a condutividade pode ser convertida em sinal de saída que corresponde à concentração de gás. Este sensor pode detectar gás cuja concentração é de até 1 ppm. Ele é adequado para detectar formaldeído, benzeno, tolueno e outros componentes voláteis. Este produto pode ser usado para detectar gases nocivos no ambiente doméstico. Portanto, é um bom assistente para você melhorar a qualidade de vida do ambiente interno.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

<div class="admonition warning">
<p class="admonition-title">Warning</p>
O valor do sensor apenas reflete a tendência aproximada da concentração de gás dentro de uma faixa de erro permissível, ele NÃO representa a concentração exata de gás. A detecção de certos componentes no ar geralmente requer um instrumento mais preciso e caro, o que não pode ser feito com um único sensor de gás. Se o seu projeto tem como objetivo obter a concentração de gás com um nível de precisão muito alto, então não recomendamos este sensor de gás.
</div>

:::tip
    Lançamos o [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que ajudará você a escolher o sensor de gás que melhor atende às suas necessidades.
:::
Specifications
-------------

-   Tensão de Operação: 5,0 V ± 0,3 V
-   Gases Alvo: HCHO, Benzeno, Tolueno, Álcool
-   Faixa de Concentração: 1~50 ppm
-   Valor de Resistência do Sensor (Rs): 10 KΩ-100 KΩ (em 10 ppm HCHO)
-   Sensibilidade: Rs (no ar)/Rs (10 ppm HCHO)≥5

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Platforms Supported
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação de compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Getting Started
---------------

O Grove - HCHO Sensor pode ser usado para detectar VOCs, como HCHO, tolueno, benzeno e álcool. Aqui usamos o HCHO como exemplo para demonstrar como usar este sensor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


```
// demo of Grove - HCHO Sensor

#define Vc 4.95

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    float R0=(1023.0/sensorValue)-1;
    Serial.print("R0 = ");
    Serial.println(R0);
    delay(500);
}
```

Após enviar o código, abra o monitor serial para obter o R0 em condições normais (ao ar livre é o melhor).

Ajuste a resistência de R1 (o potenciômetro azul) com uma pequena chave de fenda para fazer o valor de R0 ficar na faixa de 10-100 e registre esse valor (meu valor de R0 aqui é 34,28).

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png" alt="pir" width={600} height="auto" /></p>


Digite o seu valor de R0 em `#define R0 ***`, depois envie o código. Lembre-se de não mexer mais em R1, a menos que você decida detectar o R0 novamente.

```
// demo of Grove - HCHO Sensor
#include <math.h>
#define Vc 4.95
//the number of R0 you detected just now
#define R0 34.28

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    double Rs=(1023.0/sensorValue)-1;
    Serial.print("Rs = ");
    Serial.println(Rs);
    double ppm=pow(10.0,((log10(Rs/R0)-0.0827)/(-0.4807)));
    Serial.print("HCHO ppm = ");
    Serial.println(ppm);
    delay(1000);
}
```

Em seguida, leve o sensor para o escritório e leia o valor de ppm de HCHO:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png" alt="pir" width={600} height="auto" /></p>


Pela Curva Típica de Sensibilidade podemos saber que a faixa de detecção é de 1-50 ppm.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg" alt="pir" width={600} height="auto" /></p>


Para detectar outro gás VOC, você pode calcular Rs/R0 e então consultar o diagrama de característica de sensibilidade para encontrar a concentração de gás. Ou usar o seguinte script em Python para ajustar a curva típica de sensibilidade e calcular o valor de a e b:

`ppm = 10 ^ ((log10(Rs/R0) + a) / b)`

```
# coding=utf-8
# calculate a and b of HCHO
import numpy as np
import matplotlib.pyplot as plt

#get the measure data from the Typical Sensitivity Curve
x = np.array([1, 5, 10, 20, 40])
y = np.array([1.21, 0.56, 0.4, 0.3, 0.21])

plt.subplot(221)
plt.loglog(x,y,lw=2)
#plt.ylim(0,1.5)  
plt.xlabel('log(x)')  
plt.ylabel('log(y)')  
plt.show()  
```


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Resources
---------

-   [Arquivo Eagle do Grove - HCHO Sensor](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip)
-   [Esquemático do Grove - HCHO Sensor em PDF](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf)
-   [WSP2110 Datasheet (Chinês)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/WSP2110.pdf)
-   [WSP2110 Datasheet (Inglês)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Wsp2110-1-.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_HCHO_Sensor -->

## Suporte Técnico e Discussão de Produtos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais
Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8-em-1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


