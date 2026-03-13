---
description: Plataforma de Driver 4WD V1.0
title: Plataforma de Driver 4WD V1.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4WD_Driver_Platform_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/4WD_Driver_Platform_V1.0/
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_1200.jpg)

4WD Driver Platform V1.0 (sem chip Intel Edison incluído) é uma placa de driver de motor que suporta tração nas 4 rodas com controle bidirecional e completo para cada motor. A característica mais importante desta placa de driver é sua expansibilidade obtida por interfaces Grove, que podem tornar seu projeto mais versátil. Ela também possui um SDK (software development kit) detalhado e simples que tornará seu processo de desenvolvimento mais rápido e fácil. Com o Edison instalado, você pode construir um sistema poderoso para satisfazer suas diferentes necessidades.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html)

## Recursos

---
- Suporte a ponte USB para UART do dispositivo
- Suporte a OTG (On The Go)
- Suporte a porta de programação SPI
- Suporte a interface Grove: porta UART*1, porta I2C*3
- Suporta controle de motor com codificador de 4 rodas com bidirecionalidade (Corrente de Pico: 3A)
- Suporte às funções de proteção contra sobrecorrente, sobrecarga e curto-circuito.
- SDK detalhado e simples
- Projetado para a plataforma Intel Edison.

## Especificação

---

<table>
  <tr>
      <td>Parâmetros básicos</td>
  </tr>
  <tr>
      <td>Tensão de entrada</td>
      <td>6-16V</td>
  </tr>
  <tr>
      <td>Tensão de saída</td>
      <td>5V/4V/3.3V/1.8V</td>
  </tr>
  <tr>
      <td>Corrente em vazio</td>
      <td>Menor que 150mA</td>
  </tr>
  <tr>
      <td>Dimensões</td>
      <td>130*110mm</td>
  </tr>
  <tr>
      <td>Driver de motor</td>
  </tr>
  <tr>
      <td>Chip driver</td>
      <td>MC33931(Freescale) * 4, independente</td>
  </tr>
  <tr>
      <td>Tensão de entrada</td>
      <td>5-30V</td>
  </tr>
  <tr>
      <td>Corrente de saída</td>
      <td>3A(MAX)</td>
  </tr>
  <tr>
      <td>Proteção</td>
      <td>Corte automático da saída em casos de superaquecimento, baixa tensão e curto-circuito</td>
  </tr>
  <tr>
      <td>Expansibilidade</td>
  </tr>
  <tr>
      <td>Interface I2C</td>
      <td>3</td>
  </tr>
  <tr>
      <td>Interface SPI</td>
      <td>1</td>
  </tr>
  <tr>
      <td>Interface UART</td>
      <td>2</td>
  </tr>
  <tr>
      <td>Interface USB OTG</td>
      <td>1</td>
  </tr>
</table>

## Ideias de aplicação

---

- Vários tipos de robôs

- Driver de motor

- Carrinho de brinquedo

- Controle industrial

## Visão geral de hardware

---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg)

**Observe que apenas a tensão de 3,3 V é válida para aplicação em TODAS as interfaces de motor e módulos Grove.**

## Primeiros passos

---

:::note
    Esta seção mostra apenas como construir o ambiente básico de desenvolvimento.
Você pode criar um ambiente de desenvolvimento para o seu projeto com os seguintes guias:
:::

### Monte o Edison na placa Driver 4WD

**Material necessário**

- 4WD Driver Platform V1.0 *1

- Intel Edison *1

- 2 cabos USB Micro B para Tipo A

**Trabalho de software ***

- [Baixe o pacote de ferramentas integradas da Intel (instalado junto com o Driver)](http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe)

- [Baixe a IDE Arduino se você desenvolver seus projetos na placa Arduino](http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe)

Regra geral: Recomendamos que você selecione apenas os drivers e a ferramenta de gravação para serem instalados na primeira vez se sua velocidade de conexão ao servidor da Intel não for rápida o suficiente. Baixar outras ferramentas separadamente será muito mais rápido.

:::note
    4WD Driver Platform V1.0 não é suportada para Windows 10 no momento.
:::
**Verifique sua IDE**

[Baixe o Putty para comunicação serial](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

1. Abra o gerenciador de dispositivos.

2. Encontre a porta serial USB. Em Ports(COM &amp; LPT), encontre _USB Serial Port(COMx)_ (Exemplo: USB Serial Port(COM3))

3. Inicie o Putty e configure-o como mostrado na figura a seguir (marcado com retângulo vermelho)

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_config.jpg)configurações do Putty

4. Clique em Open para entrar no terminal serial

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_login.png)

login do Putty

5. Pressione a tecla Enter para inserir nome de usuário e senha para fazer login no sistema no Edison.

:::note
    - Nenhuma senha existe se for a primeira vez que você usa seu chip Edison.
    -  Você pode gravar a imagem de firmware mais recente no Edison com a Intel Flash Tool.
:::
6. Agora sua IDE está bem instalada.

## Demo

---
:::note
    - Esta seção mostrará um demo que implementa algumas funções simples.
    - Certifique-se de que você construiu um ambiente de desenvolvimento com sucesso nas seções anteriores e assumimos que você tem conhecimento básico da plataforma Arduino.
:::
Você pode consultar [Edison 4WD Auto Robotic Platform 2.0](https://wiki.seeedstudio.com/pt-br/Edison_4WD_Auto_Robotic_Platform_2.0/) para uma aplicação prática com a 4WD Driver Platform V1.0.

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Arquivos de esquemático](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip)

- [Arquivos da biblioteca Git (SDK)](https://github.com/Pillar1989/webrobot/blob/master/motor.py)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
