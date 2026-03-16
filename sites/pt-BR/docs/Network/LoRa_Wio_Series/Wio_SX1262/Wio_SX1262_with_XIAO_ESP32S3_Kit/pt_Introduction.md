---
description: A introdução do Kit XIAO ESP32S3 & Wio-SX1262
title: Introdução ao Kit XIAO ESP32S3 & Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_with_xiao_esp32s3_kit
sku: 102010611
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
createdAt: '2024-10-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262_with_xiao_esp32s3_kit/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:600, height:'auto'}}/></div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a
    href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Adquira um na loja online da Seeed
  </a>

  <a
    href="https://s.click.aliexpress.com/e/_o2E9vLh"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Adquira um na Aliexpress
  </a>
</div>

## Introdução

Este kit de desenvolvimento LoRa do tamanho de um polegar, composto pelo XIAO ESP32S3 e pelo módulo LoRa Wio-SX1262, é um kit inicial ideal para projetos Meshtastic e LoRa/LoRaWAN. Suportando WiFi, BLE e LoRa, inclui um chip de gerenciamento de energia integrado e pode ser estendido via IIC, UART e outras interfaces GPIO, além de ser compatível com desenvolvimento em Arduino.
O Kit XIAO ESP32S3 & Wio-SX1262 é um módulo LoRa LoRaWAN de canal único, com baixo preço e alto custo-benefício. É adequado para cenários de aplicação com longa distância, baixo consumo de energia e pequeno volume de dados. Ele suporta mais de 30 dispositivos nó (dependendo do intervalo de envio, carga útil de dados, etc.).

A Seeed fornece 3 aplicações para este Kit XIAO ESP32S3 & Wio-SX1262.

- Usar Meshtastic para comunicação em rede
- Configurar como nó LoRaWAN
- Configurar como gateway LoRaWAN

## Recursos

- **Meshtastic funciona pronto para uso**: Pré-gravado com o firmware Meshtastic, está pronto para funcionar assim que for ligado.
- **Desempenho RF excepcional**: Suporta LoRa(862-930MHz), Wi-Fi 2,4GHz e BLE 5.0 em comunicação sem fio dupla, suportando comunicação remota de 2~5km(LoRa) e 100m+(Wi-Fi/BLE) quando conectado à antena U.FL.
- **Design compacto do tamanho de um polegar**: 21 x 18mm, adotando o formato clássico do XIAO, adequado para projetos com espaço limitado, como dispositivos vestíveis.
- **Placa MCU poderosa**: Incorpora o processador ESP32S3, 32 bits, dual-core, Xtensa rodando a até 240MHz, montado com múltiplas portas de desenvolvimento, com suporte a Arduino / MicroPython.
- **Projeto de energia elaborado**: Inclui uma interface USB Type-C e gerenciamento de carga de bateria de lítio.

## Especificação

| Recurso | Detalhes |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, processador Xtensa LX7 dual-core, 32 bits, rodando até 240 MHz |
| LoRa | Baseado no Semtech SX1262, suporta 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Subsistema Wi-Fi 2,4GHz completo |
| Interface (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI(conecta ao SX1262),11x GPIO(PWM), 9x ADC, 1x LED de usuário, 1x LED de carga, 1x botão de Reset, 1x botão de Boot |
| Interface (Wio-SX1262) | 1x botão de usuário, 1x SPI(conecta ao ESP32S3) |
| Energia | Tensão de entrada (Type-C): 5V <br/> Tensão de entrada (BAT): 4,2V <br/> Corrente de carga da bateria: 100mA |
| Temperatura de trabalho | -40°C ~ 65°C |
| Dimensões | 21 x 17,8mm |

## Preparação de Hardware

### Lista de Peças

| Item | Quantidade |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Placa de extensão Wio-SX1262 | x1 |
| Antena Wi-Fi | x1 |
| Antena LoRa | x1 |

### Acessórios recomendados

Compatível com a XIAO Expansion Board para adicionar telas e sensores, e com sensores Grove por meio da Grove Expansion Board.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO Expansion Board</th>
      <th>Grove Base for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Também fornecemos dois tipos de antenas para este kit, a fim de suportar aplicações multifuncionais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
Antena FPC original: Apenas para **teste**. Para requisitos de confiabilidade, adquira adicionalmente a Antena 2.
:::

## Visão Geral do Hardware

<table align="center">
  <tr>
     <th>Diagrama da placa de extensão Wio-SX1262</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>Diagrama de indicação frontal do XIAO ESP32S3</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicação traseira do XIAO ESP32S3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de pinos do XIAO ESP32S3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
</table>

## Instrução em Vídeo

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Recursos

- [Wio-SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Wio-SX1262 Schemetic Diagram](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262 for XIAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
