---
title: Grove - RTC (Relógio em Tempo Real) de Alta Precisão
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove_High_Precision_RTC/
slug: /Grove_High_Precision_RTC
sku: 102020083
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove_High_Precision_RTC/
---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg)

Grove - High Precision RTC baseado no chip de clock PCF85063TP, que é um Relógio em Tempo Real (RTC) e calendário CMOS otimizado para baixo consumo de energia. Um registrador de compensação permite o ajuste fino do clock. Todos os endereços e dados são transferidos em série via barramento I2C e a velocidade máxima do barramento é de 400 kbit/s.

Comparado ao [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html), este módulo pode fornecer um resultado mais preciso. E fornece uma saída de clock programável para dispositivos periféricos, bem como interrupções de minuto e meio minuto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

## Recursos

---

- Tensão de operação: 5V/3.3V
- Fornece ano, mês, dia, dia da semana, horas, minutos e segundos com base em um cristal de quartzo de 32,768 kHz
- Corrente baixa: típico 0,22 uA a VDD = 3,3 V e Tamb = 25 ℃
- Interface de barramento I2C de duas linhas a 400 kHz (em VDD = 1,8 V a 5,5 V)
- Saída de clock programável para dispositivos periféricos (32,768 kHz, 16,384 kHz, 8,192 kHz, 4,096 kHz, 2,048 kHz, 1,024 kHz e 1 Hz)
- Interrupção de minuto e meio minuto
- Função de detecção de parada do oscilador
- Reset interno na energização (Power-On Reset - POR)
- Registrador de compensação programável para ajuste de frequência
- Interface: Grove - I2C (SCL, SDA, VCC, GND)
- Tamanho: 20*40 mm
- Bibliotecas Arduino prontas para uso

## Plataformas compatíveis

## Função da interface

---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg)

1. Interface Grove
2. Interface de saída de clock programável
3. Interface de saída de interrupção de minuto e meio minuto
4. Chip de clock PCF85063TP
5. Suporte para bateria CR1225

## Ideias de aplicação

---

- Câmera fotográfica digital
- Câmera de vídeo digital
- Impressoras
- Fotocopiadoras
- Dispositivos alimentados por bateria

## Primeiros passos

Após esta seção, você poderá fazer o **Grove - High Precision RTC** funcionar em apenas alguns passos.

### Preparativos

Agora estamos fazendo uma demonstração para o módulo Grove - High Precision RTC, e nesta demonstração usaremos um terminal para visualizar os dados. Aqui está o que precisamos usar para esta demonstração.

- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)*1
- [Grove - High Precision RTC](https://www.seeedstudio.com/)*1

Se esta é a sua primeira vez usando o [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), consulte o [wiki do Seeeduino Lotus](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/).

O Seeeduino Lotus é totalmente compatível com o Arduino e funciona com a mesma facilidade do Arduino.

Se esta é a sua primeira vez usando o Arduino, por favor acesse [aqui](https://arduino.cc) para iniciar sua jornada com o Arduino.

### Conectando o hardware

O [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) é uma combinação de Seeeduino e Base Shield. Podemos conectar o módulo RTC diretamente ao soquete I2C como mostra a figura abaixo.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg)

### Baixar a biblioteca

Clique para baixar a biblioteca e instalá-la ([How to install an Arduino Library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/)).

[![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)

### Abrir o exemplo

Após instalar a biblioteca, reinicie o Arduino, clique em File>Examples>SetTimeAndDisplay.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg)

### Verificar resultados

Depois que o upload for concluído, você pode abrir o monitor serial para ver o resultado.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Grove - High Precision RTC Library and Examples](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)
- [Grove - High Precision RTC Eagle file](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip)
- [Grove - High Precision RTC Schematic pdf file](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf)
- [PCF85063TP Datasheet](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf)
- [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
