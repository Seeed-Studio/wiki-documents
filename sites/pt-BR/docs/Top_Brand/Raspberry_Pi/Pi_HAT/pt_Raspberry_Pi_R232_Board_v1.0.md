---
description: Placa Raspberry Pi RS232 v1.0
title: Placa Raspberry Pi RS232 v1.0
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_R232_Board_v1.0
sku: 103030028
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_R232_Board_v1.0/
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi-R232-Board-v1.0.jpg)

A Placa Raspberry Pi RS232 v1.0 é uma porta de comunicação padrão para equipamentos industriais. Este módulo é baseado no MAX3232, que é um driver/receptor duplo que inclui um gerador de tensão capacitiva para fornecer níveis de tensão TIA/EIA-232-F a partir de uma única alimentação de 5 V. O shield integra conectores DB9 (fêmea) que fornecem conexão a vários dispositivos com interface RS232. Além disso, os headers RS232 facilitarão suas conexões e comissionamento. Ele oferece áreas de soldagem para fazer pleno uso do espaço extra disponível, o que é muito conveniente para prototipagem.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)

Características
--------

- Baixa Corrente de Alimentação: 300μA
- Taxa de Dados Garantida: 120kbps
- Atende às Especificações EIA/TIA-232 até 3,0V
- Compatível em pinos com o MAX232 padrão da indústria
- Taxa de Variação Garantida: 6V/μs
- Indicador de LED
- Conectores DB9 (fêmea)

Especificações
-------------

<table border={1} cellSpacing={0} style={{width: 500, height: 442}} width={800}>
  <tbody>
    <tr>
      <th align="center" scope="col" style={{width: '50%'}}>Item</th>
      <th align="center" scope="col">Mín</th>
      <th align="center" scope="col">Típico</th>
      <th align="center" scope="col">Máx</th>
      <th align="center" scope="col">Unidade</th>
    </tr>
    <tr>
      <th scope="row">Faixa de Tensão de Entrada</th>
      <td align="center">-25</td>
      <td align="center">/</td>
      <td align="center">25</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">Limite de Entrada em Nível Baixo (VCC=3,3V/5,0V)</th>
      <td align="center">0.6 / 0.8</td>
      <td align="center">1.2 / 1.5</td>
      <td align="center">/</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">Limite de Entrada em Nível Alto (VCC=3,3V/5,0V)</th>
      <td align="center">/</td>
      <td align="center">1.5 / 1.8</td>
      <td align="center">2.4 / 2.4</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">Taxa Máxima de Dados</th>
      <td align="center">120</td>
      <td align="center">235</td>
      <td align="center"></td>
      <td align="center">kHz</td>
    </tr>
    <tr>
      <th scope="row">Temperatura de Operação</th>
      <td align="center">0</td>
      <td align="center">/</td>
      <td align="center">70</td>
      <td align="center">℃</td>
    </tr>
    <tr>
      <th scope="row">Dimensões</th>
      <td align="center" colSpan={3}>91.20 *56.15*32</td>
      <td align="center">mm</td>
    </tr>
  </tbody>
</table>

Visão Geral de Hardware
------------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p2.jpg)

O pino UART deve ser conectado se você quiser conectar ao Raspberry Pi.

Uso
-----

Usando portas seriais COM para configurar o sistema no Raspberry Pi.

### Instalação de Hardware

1. Raspberry Pi e cabo USB para porta serial COM.

2. Conecte como na figura a seguir:

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p5.jpg)

3. Descubra qual COM está sendo usada no Gerenciador de Dispositivos do seu PC.
4. Execute um assistente de porta serial e configure-o como mostrado:

    A COM deve ser configurada conforme o que você encontrou no Gerenciador de Dispositivos do seu PC. Em seguida, ligue o seu Raspberry Pi. Você poderá ver o assistente de porta serial como mostrado abaixo.

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p6.jpg)

5. Estabeleça comunicação com o Raspberry Pi com sucesso.

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p4.jpg)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Raspberry_Pi_RS232_Board_v1.0_sch_pcb](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip)
- [MAX3232](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/MAX3232.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0 -->

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

