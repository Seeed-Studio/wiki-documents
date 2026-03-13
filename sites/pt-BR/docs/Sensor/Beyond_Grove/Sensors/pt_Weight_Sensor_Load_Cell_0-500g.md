---
title: Sensor de Peso (Célula de Carga) 0-500g
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Weight_Sensor_Load_Cell_0-500g/
slug: /Weight_Sensor_Load_Cell_0-500g
sku: 314990000
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Weight_Sensor_Load_Cell_0-500g/
---
![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/loadcell500.jpg)


Aplicável a balança eletrônica, balança de cálculo de preço, balança de plataforma eletrônica, balança digital; balança de encomendas postais, balança eletrônica de precisão e todos os tipos de balanças comerciais com uma única célula de carga.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150)

##   Especificação
---
*   capacidade g 500g

*   Sensibilidade de saída mv/v 0.5±0.1

*   Não linearidade %.F.S 0.05

*   Histerese %F.S 0.05

*   Repetibilidade %F.S 0.05

*   Deriva (30min) %.F.S 0.05

*   Efeito da temperatura sobre a sensibilidade %F.S/10℃ 0.05

*   Efeito da temperatura sobre o zero %F.S/10℃ 0.05

*   Balanço de zero %F.S ±0.5

*   Resistência de entrada Ω(ohms) 1120±10

*   Resistência de saída Ω(ohms) 1000±10

*   Resistência de isolamento MΩ(ohms) ≥2000

*   Tensão de excitação recomendada v 5v

*   Método de conexão de fio vermelho: Exc + preto: Exc –

*   verde: Sig + branco: Sig -

##   Uso
---
###  **Instalação de hardware**

![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/Weight_Sensor.png)

**Nota**: O sensor de peso fornece saída de 0V quando a carga é inferior a 150g, portanto não podemos medir diretamente a carga. Meu método é usar um peso local de 200g para evitar o ponto cego de medição. Leia os dados analógicos do peso de 200g como sem carga (0g) e leia os dados analógicos do peso de 700g como carga total (500g).

###  **Programação**
```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value;
    value = analogRead(0);
    Serial.println(value);
}
```

###   link externo

[Como usar com Arduino](http://cerulean.dk/words/?page_id=42).

##   Fonte
---
- [Folha de dados INA125](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/res/INA125.pdf)

## Suporte Técnico e Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>