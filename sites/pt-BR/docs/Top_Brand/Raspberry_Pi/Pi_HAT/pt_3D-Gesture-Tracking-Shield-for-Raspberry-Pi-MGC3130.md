---
description: Shield de Rastreamento de Gestos 3D para Raspberry Pi MGC3130
title: Shield de Rastreamento de Gestos 3D para Raspberry Pi MGC3130
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130
sku: 103100083
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/
---

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/preview-wiki.jpg)

Este shield é baseado no chip Microchip [MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf), que habilita o Raspberry Pi com função de reconhecimento de gestos 3D e rastreamento de movimento. Ele pode capturar informações de posição x y z, também pode fazer detecção de proximidade e detecção de toque, suportando toque único e clique duplo.

Como mostrado na figura abaixo, a área de reconhecimento é dividida em duas partes: a área em faixa distribuída ao redor e um painel central.

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/detect-part.jpg)

<div align="center"><b>Figura 1.</b><i>área de detecção</i></div>

As áreas em faixa podem detectar a mudança de orientação, incluindo Norte, Sul, Oeste e Leste. A área central pode detectar toque, toque simples, clique duplo e gestos no ar acima dela. É por isso que a chamamos de 3D Gesture & Tracking Shield, você nem precisa tocar diretamente a área central, basta acenar a mão acima da área central e este shield poderá detectar seus movimentos.

Graças à tecnologia GestIC® patenteada da Microchip, este shield utiliza detecção elétrica de campo próximo para detectar movimentos. O shield gera um campo magnético acima do painel central; quando a mão se aproxima, ela interfere no campo magnético, e o receptor de campo magnético abaixo do shield pode detectar a mudança.

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF1.jpg)
<div align="center"><b>Figura 2.</b><i>Campo magnético sem mão</i></div>

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF2.jpg)
<div align="center"><b>Figura 3.</b><i>Campo magnético com uma mão</i></div>

Este hat se comunica com o Raspberry Pi via interface I2C, e também reservamos um conector Grove I2C caso você precise trabalhar com outros módulos.

Que módulo incrível! Com a ajuda dele, você pode usar gestos para controlar luzes, TV, alto-falantes... Basta soltar sua imaginação e criar projetos ainda mais mágicos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/iLav34w77ns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130-p-4073.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Reconhecimento de gestos manuais 3D e dados de posição x, y, z
- Detecção de proximidade e toque
- Suite de gestos Colibri integrada (rodando no chip)
- Unidade avançada de processamento de sinal 3D
- Alcance de detecção: 0 a 10 cm
- Auto calibração no chip
- Compatível com vários modelos de Raspberry Pi 2, 3, 4 e Zero

## Especificações

|Item|Valor|
|---|---|
|Tensão de operação|3.3V|
|Chip principal|MGC3130|
|Alcance de detecção|0 a 10 cm|
|Faixa de temperatura|-20°C a +85°C|
|Sensibilidade do receptor| &lt;1 fF|
|Taxa de posição|200 posições/s|
|Resolução espacial|até 150 dpi|
|Frequência portadora|44 kHz a 115 kHz|
|Interface de saída|I2C(Endereço I2C padrão: 0X42)|
|Peso bruto|55g|
|Peso líquido|17.6g|
|Tamanho da embalagem|115mm*75mm*25mm|
|Tamanho|65mm*56mm|

## Aplicações

- Notebooks/Teclados/Periféricos de PC
- Automação residencial
- Controles de jogos
- Controle de áudio

## Visão geral de hardware

### Pin Out

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/hardware-overview.png)

## Brincando com Raspberry Pi

### Habilitar I2C

- Etapa 1. Execute sudo raspi-config.
- Etapa 2. Use a seta para baixo para selecionar 5 Interfacing Options.
- Etapa 3. Use a seta para baixo até P5 I2C.
- Etapa 4. Selecione yes quando for perguntado se deseja habilitar o I2C.
- Etapa 5. Também selecione yes se for perguntado sobre carregar automaticamente o módulo do kernel.
- Etapa 6. Use a seta para a direita para selecionar o botão.
- Etapa 7. Selecione yes quando for perguntado se deseja reiniciar.

:::tip
Para mais informações sobre raspi-config, consulte [https://www.raspberrypi.org/documentation/configuration/raspi-config.md](https://www.raspberrypi.org/documentation/configuration/raspi-config.md).
:::

### Instalar ncurses

**Etapa 1**：Baixe a partir [daqui](https://invisible-mirror.net/archives/ncurses/)

```
cd ~
wget https://invisible-mirror.net/archives/ncurses/ncurses-6.1.tar.gz
```

**Etapa 2**: Instale o ncurses

```
tar -xvf ncurses-6.1.tar.gz
cd ncurses-6.1/
./configure
make
sudo make install
```

**Etapa 3**: Verifique se o ncurses foi instalado com sucesso

```
ncurses6-config --version
```

### Executar demonstração

**Etapa 1**: Instale mgc3103 e execute mgc3103.

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_mgc3x30.git
cd Seeed_mgc3x30
make clean && make
./mgc3130
```

**Etapa 2**: Aqui está a saída.

```
 *
 *                                                          *
 * Position X : 65534                                       *
 * Position Y : 0                                           *
 * Position Z : 38465                                       *
 *                                                          *
 * Gesture :                                                *
 *                                                          *
 * Airwheel angle : -1530                                   *
 *                                                          *
 * Touch electrode :
 * Tap electrode :
 * Double Tap electrode :
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *
```

- **Posição X/Y/Z**: O canto inferior esquerdo é X=0, Y=0. Z é a altura. O máximo é 65535.
- **Gestos**: Acene suas mãos sobre o módulo e você poderá ver a direção do movimento como Oeste para Leste, Leste para Oeste, Sul para Norte e Norte para Sul.
- **Airwheel**：O número aumentará no sentido horário e diminuirá no sentido anti-horário. Haverá algum atraso na exibição.
- **Eletrodo de toque**: Coloque o dedo na área específica e você obterá Centro, Leste, Oeste, Sul e Norte.
- **Eletrodo de toque simples**: Toque com o dedo na área específica e você obterá Centro, Leste, Oeste, Sul e Norte.  
- **Eletrodo de toque duplo**: Toque duas vezes com o dedo na área específica e você obterá Centro, Leste, Oeste, Sul e Norte.  

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/__9Vas2kGHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do 3D Gesture Tracking Shield for Raspberry Pi MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip)

- **[PDF]** [Datasheet MGC3030-3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf)

- **[Library]** [Biblioteca Seeed_mgc3x30](https://github.com/Seeed-Studio/Seeed_mgc3x30)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
