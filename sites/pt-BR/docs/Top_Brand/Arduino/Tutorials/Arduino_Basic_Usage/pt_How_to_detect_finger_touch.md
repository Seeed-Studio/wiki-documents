---
description: Como detectar o toque de dedo
title: Como detectar o toque de dedo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_detect_finger_touch
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/How_to_detect_finger_touch/
---
<!-- ---
name: How to detect finger touch
category: Tutorial
bzurl:
oldwikiname: How to detect finger touch
prodimagename:  
surveyurl: https://www.research.net/r/How_to_detect_finger_touch
sku:
--- -->

## Como Medir Capacitância

O sistema completo de medição de capacitância é composto por eletrodos sensores conectados às entradas de detecção do MPR121, e o MPR121 se comunica com o processador host via barramento I2C e saída de interrupção.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-1.jpg)

A capacitância medida em cada canal de detecção é a capacitância total para o terra, que pode ser a combinação da capacitância parasita de fundo para o terra (Cb) e a capacitância para o terra induzida pelo toque do dedo (Cx). O MPR121 usa um esquema de corrente de carga DC constante para medição de capacitância. Cada canal é carregado e depois descarregado completamente para o terra periodicamente para medir a capacitância. Todos os canais são medidos sequencialmente; quando um canal está no período de carga/descarga e medição, os outros canais são conectados ao terra.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/500px-2.jpg)

A quantidade de carga (Q) aplicada é programável ajustando a corrente de carga (I) e o tempo de carga (T). Uma vez que o eletrodo é carregado, a tensão de pico (V) no final da carga é medida pelo ADC interno de 10 bits. Essa tensão V é inversamente proporcional à capacitância (C) no canal de detecção.

```
 C = Q/V = (I*T)/V
```

Ou seja, se carregar o capacitor externo com algum valor de corrente (I) e tempo (T), e obter a tensão (V), podemos obter o valor da capacitância; usando esse método, a faixa de C mensurável pode ser calculada.

## Como Funciona a Detecção por Toque

Os dados brutos de saída do ADC passam por 3 níveis de filtragem digital para eliminar o ruído de alta e baixa frequência encontrado. O primeiro nível de filtro é um filtro de média móvel simples; o resultado do segundo nível de filtro é de 10 bits e é armazenado nos registradores de dados de saída como a capacitância imediata de cada entrada de detecção; o resultado do terceiro nível de filtro é um conteúdo de frequência ainda mais baixa da variação do sinal usando a saída do segundo nível de filtro, sendo usado principalmente como o valor de linha de base que representa a variação de capacitância ao longo do longo prazo e da lenta mudança do ambiente, como umidade atmosférica e sujeira, para detecção de toque.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-3.jpg)

O toque e a liberação são determinados comparando a variação de capacitância imediata, ou seja, a variação dos dados de saída filtrados de segundo nível do eletrodo, com o valor de linha de base. Se a variação ultrapassar o limite configurado, então um estado de toque ou liberação é detectado e relatado no registrador de status. Os limiares de toque e liberação são independentes e programáveis individualmente para cada eletrodo, fornecendo histerese e independência dos eletrodos. A configuração de debounce pode ser usada para uma filtragem adicional de ruído, a fim de proporcionar uma detecção de toque e liberação livre de falsos pulsos.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-4.jpg)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
