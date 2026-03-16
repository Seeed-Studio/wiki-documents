---
title: DSO Quad:Calibração
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Quad-Calibration/
slug: /DSO_Quad-Calibration
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Quad-Calibration/
---

A calibração consiste em diferentes partes:

* Calibração de DC com

* Deslocamento de zero

* Ganho

* Calibração de AC (resposta de inclinação, overshooting)

* Para 1 ... 10V/div

* Para 50 ... 500mV/div
* Para sonda x10

## Deslocamento de zero

Esta calibração é feita quase automaticamente. O DSO deve já estar bem na temperatura de operação para isso. Portanto, você deve tê‑lo ligado pelo menos cerca de 10 minutos antes. Após selecionar "Calibr" no menu "Save/Recall" (botão "Square", rolando até o último item, pressionando o botão -/+) você será solicitado a curto‑circuitar a entrada CH_A ao GND. Se você estiver usando uma sonda, ela deve estar no modo "x1", não "x10". A calibração é iniciada pressionando o botão "Square". Depois de alguns segundos ela termina e o aparelho fica aguardando o primeiro passo da calibração de ganho. Se você não quiser fazer a calibração de ganho aqui, vá com a "seta para a direita" por todas as faixas sem modificar nada com o navegador -/+. Em seguida, você pode repeti‑la (botão square) ou ir "para a próxima operação" com "direita" no navegador e fazer o ajuste de zero do CH_B. Informação adicional: mesmo se a tensão de entrada for zero, um amplificador real tem um pequeno valor diferente de zero na saída. E esse valor muda se os resistores da faixa forem alterados. Este deslocamento de zero é avaliado aqui para cada faixa e esses valores são usados no futuro para serem corrigidos na parte digital adicionando/subtraindo esse offset

## Calibração de ganho

Para a calibração de ganho é necessário hardware externo adicional! Em cada faixa precisa ser aplicada uma tensão DC bem conhecida de cerca de 80 ... 100% da faixa de escala total. Essa "faixa de escala total", por exemplo, 50mV/div *6 div = 0,3V ou 10V/div* 6 div = 60V. Portanto, você precisa das seguintes tensões:

```
0.25... 0.3 V for 50mV/div range
0.5 ... 0.6 V for 0.1V/div range
1.0 ... 1.2 V for 0.2V/div range
2.5 ... 3.0 V for 0.5V/div range
5.0 ... 6.0 V for   1V/div range
10  ... 12  V for   2V/div range
25  ... 30  V for   5V/div range
50  ... 60  V for  10V/div range
```

Sugiro usar alguns resistores como divisor de tensão e um multímetro de tensão para medir a tensão. Esteja ciente de que os voltímetros muito baratos muitas vezes não são precisos. Mas um medidor com preço de 25 ... 40 € (ou US$) deve ser suficientemente preciso. As tensões mais baixas podem ser obtidas, por exemplo, de um carregador USB ou você pode ter, por exemplo, uma fonte de 12V ou uma fonte de notebook de 19V. Os 50 ... 60V podem ser os mais difíceis de obter. Mas você pode calibrar apenas as faixas menores e ficar com uma precisão pior nas faixas mais altas. Uma solução possível para a tensão mais alta pode ser usar conversores DC/DC, por exemplo, dois conversores de 5V para 24V, que estão disponíveis por cerca de 5€ cada. Uma corrente de saída de 5mA é suficiente. Um circuito completo, que pode ser alimentado com 5V, pode ser assim: [[[1]](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/res/GainCalibrationCircuit.PNG)] Os valores de saída dados podem variar, por exemplo, com a tensão de entrada e as tolerâncias dos resistores. Mas estarão na faixa exigida dada acima. **Atenção:** 54V é uma tensão perigosa!

Com este equipamento você pode conectar o voltímetro e o canal do DSO passo a passo à saída desse circuito e usar o -/+ para ajustar o valor do DSO para o mesmo valor que o voltímetro.

## Calibração de AC

Enquanto a calibração de DC é aplicada na parte digital do DSO, a calibração de AC é feita alterando os valores de alguns capacitores no hardware. A razão do divisor dos capacitores precisa corresponder à razão do divisor dos resistores.

![](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/img/DSO203_AC-Cal_Circuit_Diagr.PNG).

O procedimento de calibração para o DSO Quad já está descrito, por exemplo, aqui: [[2]](http://neophob.com/2012/03/dso-quad-for-dummies/) Ele usa a saída de onda quadrada integrada. Para o Ch_A primeiro coloque a sonda em x1 e ajuste A1 (=C5A) na faixa de 1V/div. Em seguida, ajuste A2 (C3A) na faixa de 500mV/div. Depois verifique novamente o ajuste de A1, depois o de A2 novamente, pois cada um influencia também um pouco o outro. Finalmente, coloque a sonda em x10, selecione uma faixa adequada e ajuste A3.

## Veja também

* [DSO Quad](/pt-br/DSO_Quad "DSO Quad")

* [DSO Quad:Upgrading Firmware](/pt-br/DSO_Quad-Building_Firmware "DSO Quad:Upgrading Firmware")

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
