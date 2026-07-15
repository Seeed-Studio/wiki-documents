---
description: DS3231 RTC (Relógio de Tempo Real) de Alta Precisão para Raspberry Pi
title: DS3231 RTC (Relógio de Tempo Real) de Alta Precisão para Raspberry Pi
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /High_Accuracy_Pi_RTC-DS3231
sku: 103030278
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/High_Accuracy_Pi_RTC-DS3231/
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"/></div>

O High Accuracy Pi RTC é baseado no chip de relógio DS3231. O DS3231 é um relógio de tempo real (RTC) I2C de baixo custo e extremamente preciso. Ele fornece um RTC para Raspberry Pi por meio da interface I2C. Com a fonte de clock do TCXO (oscilador de cristal compensado por temperatura), o RTC mantém informações de segundos, minutos, horas, dia, data, mês e ano. A data no final do mês é ajustada automaticamente para meses com menos de 31 dias, incluindo correções para ano bissexto. O relógio funciona em formato de 24 horas ou 12 horas com indicador AM/PM. O relógio fornece dois alarmes programáveis de horário do dia e saída de onda quadrada programável. O pino INT/SQW gera uma interrupção devido à condição de alarme ou fornece um sinal de onda quadrada, e a seleção é controlada pelo bit INTCN.

Se você quiser manter a informação de tempo mesmo quando o Raspberry Pi estiver desligado, será necessário inserir uma célula de lítio CR1225 de 3V no suporte de bateria. E se você estiver procurando um RTC para o seu projeto Arduino, dê uma olhada também em nosso blog Arduino RTC Tutorial: Using DS1307 RTC with Arduino para começar facilmente.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| High Accuracy Pi RTC (DS3231) | Inicial                                                                                               | Set 2018      |

:::note
        A bateria não está incluída.
:::

## Recursos

- Suporta Raspberry Pi 2/ 3 B/B+/4/Zero
- Suporta segundos, minutos, horas, dia da semana, mês, ano
- Suporta formato de 24 horas ou 12 horas com indicador AM/PM
- Baixo consumo de energia
- Dois alarmes de horário do dia
- Interface I2C rápida (400kHz)

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V|
|Temperatura de Operação|0℃ a +70℃|
|Precisão|±2ppm de 0°C a +40°C|
|Interface|I2C|
|Endereço I2C|0x68|
|Tamanho|C: 25mm L: 25mm A: 8mm|
|Peso|4.2g|
|Tamanho da Embalagem|C: 85mm L: 75mm A: 25mm|
|Peso Bruto|15g|

## Aplicações típicas

Qualquer aplicação que precise de Tempo Real no Raspberry.

## Primeiros Passos

### Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

### Materiais necessários

|Raspberry Pi|High Accuracy Pi RTC(DS3231)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html" target="_blank">Adquira agora</a>|

:::note
Por favor conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Utilize o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
:::

### Pinagem

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg)

:::note

- O próprio chip suporta a função de alarme, nós também reservamos a interface de hardware relevante, mas nossa biblioteca de software não inclui essa função (pino S/INT), portanto você precisa realizar o desenvolvimento de software relacionado.

- RX/TX não é usado neste módulo, mas o conector de 6x2 pinos ocupa os pinos RX/TX do Raspberry Pi, então trazemos RX/TX para fora e fornecemos um conector de 2 pinos.
:::

### Instalação

O driver que fornecemos é aplicável apenas ao Raspbian Jessie/Stretch.

:::tip
Se você não sabe como usar um Raspberry Pi, verifique [here](https://www.raspberrypi.org/documentation/) antes de começar.
:::

- **Passo 1. Instalação do Driver**

Digite o seguinte comando no seu terminal

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

Quando o download terminar, digite o seguinte comando no seu terminal

```
cd pi-hats
sudo ./install.sh -u rtc_ds3231
```

- **Passo 2. Desligue o Raspberry Pi**

```
sudo shutdown -h now
```

- **Passo 3. Insira o HAT no Raspberry Pi**

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg)

Certifique-se de conectar o pino 1 deste HAT ao pino 1 do GPIO do Raspberry, como mostrado na figura acima.

- **Passo 4. Ligue o Raspberry Pi**

## Uso

Agora você pode usar o comando para verificar se o driver foi instalado com sucesso.

```
./install.sh -l
```

Se você quiser desinstalar o driver, pode usar o comando abaixo:

```
sudo ./install.sh -u
```

**Agora vamos ver o que o módulo RTC pode fazer:**

Ler o relógio de hardware e imprimir o resultado

```
sudo hwclock -r
```

Definir a hora do sistema a partir do relógio de hardware

```
sudo hwclock -s
```

Definir o relógio de hardware a partir da hora atual do sistema

```
sudo hwclock -w
```

Mais usos

```
hwclock --help
```

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do High Accuracy Pi RTC(DS3231)](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip)

- **[PDF]** [Datasheet DS3231](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf)

## Projeto

Este é o vídeo de introdução deste produto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão sobre o Produto



Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
