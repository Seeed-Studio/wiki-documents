---
description: Unidade de Drive ReSpeaker
title: Unidade de Drive ReSpeaker
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Drive_Unit
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_Drive_Unit/
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/Meow_King_Drive_Unit.jpg)

ReSpeaker Drive Unit é especialmente projetada para o ReSpeaker Core, como uma unidade separada de acionamento de alto-falante.

Com esta unidade de drive você pode montar seu próprio alto-falante inteligente com Amazon Alexa Voice Services ou outros serviços de voz. Além disso, ela é compatível com Airplay, o que significa que você pode transmitir sua música via smartphone, PC e Mac. E, claro, reproduzir músicas locais também é possível.

ReSpeaker Core possui poderosa capacidade de extensão, esperamos que ele possa ajudá-lo a habilitar voz em seu protótipo/produto com facilidade.

## Recursos

- Bateria recarregável incluída
- Botão sensível ao toque
- Suporte a Airplay
- Impedância de 4Ω e Potência Nominal de 5W
- LED indicador no ReSpeaker Core

## Especificações

- Potência Nominal: 5W
- Impedância: 4Ω
- SNR: ≥ 75dBA
- Sensibilidade: 550 ± 50mV
- Grau de Distorção: ≤ 0.5%
- Resposta de Frequência: 85Hz - 20kHz
- Fonte de Alimentação: 5V via USB ou via bateria de 3.7V, 1500mAh
- Diâmetro do Alto-falante: 40mm

## Guia Inicial

### Preparar o ReSpeaker Core

Para acionar a unidade de drive Meow King, o firmware do ReSpeaker Core deve ser atualizado. Para conhecer as diferenças entre o firmware original de fábrica e este firmware, consulte o log de alterações [aqui](https://onedrive.live.com/?authkey=%21AKD3ZD6g0DE2M9E&cid=5219529519B9B6A1&id=5219529519B9B6A1%21720&parId=5219529519B9B6A1%21721&o=OneUp).

Agora vamos atualizar o firmware. Primeiro, faça o download de `ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin` a partir do [OneDrive](https://1drv.ms/f/s!AqG2uRmVUhlShUyg92Q-oNAxNjPR). Copie o firmware para o cartão SD e, em seguida, conecte o cartão SD ao ReSpeaker Core. Siga [as instruções aqui](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core/#2-connect-to-serial-console) para obter o console serial. Observe que, para fazer a porta serial USB funcionar, precisamos restaurar [o firmware padrão](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/res/respeaker_arduino_library/examples/pixels_pattern/pixels_pattern.ino) para o chip Arduino (ATMega32U4) caso o tenhamos alterado. Depois de obter a porta serial USB, digite os seguintes comandos para atualizar o firmware:

```shell
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin
```

Depois que a imagem do sistema for gravada, o ReSpeaker Core será reiniciado.

### Montagem

Conecte seu ReSpeaker Core à unidade de drive Meow King como na imagem abaixo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_1.jpg" /></div>

Pressione o ícone de energia por mais de 5 segundos, a unidade de drive será ligada, assim como a placa ReSpeaker Core.

:::note
O circuito de controle de energia está na unidade de drive; mesmo quando você remover o ReSpeaker Core, pressionar o ícone de energia por mais de 5 segundos ainda ligará a unidade de drive.
:::

Para desligar todo o dispositivo, pressione novamente o ícone de energia por mais de 5 segundos.

Quando o dispositivo é ligado, o ReSpeaker Core entrará no processo de inicialização. O anel de LED acenderá em vermelho por 1 segundo, indicando que o ReSpeaker Core está inicializando.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_2.jpg" /></div>

Agora aguarde alguns segundos, pegue seu smartphone e prepare-se para transmitir sua música para a unidade de drive Meow King.

### Transmita sua música

#### Para iOS

1. Conecte seu dispositivo iOS e o ReSpeaker à mesma rede Wi‑Fi.
2. No seu dispositivo iOS, deslize de baixo para cima na tela para abrir a Central de Controle.
3. Na Central de Controle, deslize horizontalmente para encontrar a tela Em Reprodução.
4. Selecione ReSpeaker como na figura a seguir:

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/airplay.png" /></div>

5. Conecte seu fone de ouvido/alto-falante ao ReSpeaker e então você já pode aproveitar a música.

#### Para Android

1. Conecte seu smartphone ao **Wi‑Fi do ReSpeaker**.
2. No seu smartphone, abra um software cliente AirPlay, por exemplo: *AllConnect*.
3. Selecione ReSpeaker como na figura a seguir:

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/dlna.png" width="50%" height="50%" />
</div>

4. Conecte seu fone de ouvido/alto-falante ao ReSpeaker e então você já pode aproveitar a música.

:::note
Uma dica adicional é tentar aumentar o volume do seu aplicativo reprodutor se você não ouvir som após iniciar a reprodução.
:::

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

