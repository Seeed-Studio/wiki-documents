---
description: O Display E-Ink de 7,5 polegadas com XIAO ESP32C3 é uma solução compacta e eficiente em energia para exibir dados via Arduino.
title: Funciona com Arduino
keywords:
  - ePaper display
  - arduino
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /xiao_075inch_epaper_panel_arduino
sidebar_position: 3
last_update:
  date: 03/26/2025
  author: Allen
createdAt: '2025-03-27'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_arduino/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

## Visão Geral

O XIAO 7.5" ePaper Panel pode ser programado usando a IDE Arduino, tornando-o acessível para makers e desenvolvedores familiarizados com o ecossistema Arduino. Este guia irá orientá-lo na configuração do ambiente de desenvolvimento Arduino e no início com exemplos básicos.

O ePaper Panel possui:

- Display ePaper monocromático de 7,5" com resolução de 800x480
- Microcontrolador XIAO ESP32-C3 para conectividade sem fio
- Bateria integrada de 2000mAh para uso portátil
- Interface USB Type-C para programação e alimentação
- Design compacto com suporte integrado

Por meio da programação em Arduino, você pode:

- Exibir textos e gráficos
- Criar interfaces de usuário personalizadas
- Mostrar dados em tempo real e leituras de sensores
- Construir aplicações interativas
- Implementar aplicações de baixo consumo aproveitando a retenção de zero energia do ePaper

Este guia cobre o processo de configuração inicial e fornece código de exemplo para ajudá-lo a começar a desenvolver suas próprias aplicações Arduino para o ePaper Panel.

## Primeiros Passos

### Passo 1. Baixar a IDE Arduino

Primeiro, se você ainda não tem a IDE Arduino, acesse [Arduino IDE](https://www.arduino.cc/en/software) e baixe a versão mais recente.

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

### Passo 2. Instalar o Suporte à Placa ESP32

Vá em **File** -> **Preferences** e adicione a seguinte URL em **Additional Boards Manager URLs**, [clique aqui para ver as etapas detalhadas.](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### Passo 3. Instalar a Biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

Role para baixo e abra este link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecione o tipo do seu dispositivo e ele irá gerar algum código. Copie esse código e o utilizaremos mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, verifique o tipo dos seus dispositivos ou componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div>

Depois de baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Existem 4 exemplos básicos, abra um exemplo básico de que você goste:

1. Bitmap: Exibir uma imagem bitmap.
2. Clock: Exibir um relógio.
3. Clock_digital: Exibir um relógio digital.
4. Shape: Exibir diferentes tamanhos de palavras e formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Passo 4. Carregar o Código

Crie um **novo arquivo "driver.h"** e cole esse código nele. O código deve ser assim:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

Depois disso, vá em **Tools** -> **Board** -> **XIAO ESP32C3** e **Tools** -> **Port** -> **Selecione a porta à qual sua placa está conectada**. Em seguida clique em **Upload** para carregar o código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

Agora você verá o resultado na sua tela epaper! A seguir estão os resultados dos exemplos Bitmap e Clock.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## Recursos

- **[STP]**: [Modelo 3D do gabinete](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
