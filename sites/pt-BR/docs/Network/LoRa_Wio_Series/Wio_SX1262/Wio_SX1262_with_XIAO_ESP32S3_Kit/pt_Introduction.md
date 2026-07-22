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
updatedAt: '2026-06-16'
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
    Adquira um na Loja Online da Seeed
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

Este kit de desenvolvimento LoRa do tamanho de um polegar, que consiste no XIAO ESP32S3 e no módulo LoRa Wio-SX1262, é um kit inicial ideal para projetos Meshtastic e LoRa/LoRaWAN. Com suporte a WiFi, BLE e LoRa, inclui um chip de gerenciamento de energia integrado e pode ser estendido via IIC, UART e outras interfaces GPIO, além de ser compatível com desenvolvimento em Arduino.
O Kit XIAO ESP32S3 & Wio-SX1262 é um módulo LoRa LoRaWAN de canal único com baixo preço e alta relação custo-benefício. É adequado para cenários de aplicação com longa distância, baixo consumo de energia e pequeno volume de dados. Ele suporta mais de 30 dispositivos nó (dependendo do intervalo de upload, carga útil de dados, etc.).

A Seeed fornece 3 aplicações para este Kit XIAO ESP32S3 & Wio-SX1262.

- Usando Meshtastic para comunicação em rede
- Configurando como nó LoRaWAN
- Configurando como gateway LoRaWAN

## Recursos

- **Meshtastic funciona imediatamente**: Pré-gravado com firmware Meshtastic, pronto para funcionar assim que for ligado.
- **Desempenho de RF excepcional**: Suporta comunicação sem fio dupla LoRa (862-930MHz), Wi-Fi 2,4GHz e BLE 5.0, suportando comunicação remota de 2~5km (LoRa) e 100m+ (Wi-Fi/BLE) quando conectado à antena U.FL.
- **Design compacto do tamanho de um polegar**: 21 x 18mm, adotando o formato clássico do XIAO, adequado para projetos com espaço limitado, como dispositivos vestíveis.
- **Placa MCU poderosa**: Incorpora o processador Xtensa ESP32S3 de 32 bits, dual-core, rodando até 240MHz, com múltiplas portas de desenvolvimento, compatível com Arduino / MicroPython.
- **Projeto de energia elaborado**: Inclui uma interface USB Type-C e gerenciamento de carga de bateria de lítio.

## Especificação

| Recurso | Detalhes |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, processador Xtensa LX7 dual-core, 32 bits, rodando até 240 MHz |
| LoRa | Baseado no Semtech SX1262, suporta 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Subsistema Wi-Fi completo de 2,4GHz |
| Interface (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI (conectado ao SX1262), 11x GPIO (PWM), 9x ADC, 1x LED de usuário, 1x LED de carga, 1x botão de reset, 1x botão de boot |
| Interface (Wio-SX1262) | 1x botão de usuário, 1x SPI (conectado ao ESP32S3) |
| Alimentação | Tensão de entrada (Type-C): 5V <br/> Tensão de entrada (BAT): 4,2V <br/> Corrente de carga da bateria: 100mA |
| Temperatura de trabalho | -40°C ~ 65°C |
| Dimensões | 21 x 17,8mm |

## Preparação de hardware

### Lista de peças

| Item | Quantidade |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Placa de extensão Wio-SX1262 | x1 |
| Antena Wi-Fi | x1 |
| Antena LoRa | x1 |

### Acessórios recomendados

Compatível com a Placa de Expansão XIAO para adicionar telas e sensores, e adicionar sensores Grove por meio da Placa de Expansão Grove.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa de Expansão XIAO</th>
      <th>Grove Base para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Também fornecemos dois tipos de antenas para este kit para suportar aplicações multifuncionais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
Antena FPC original: Apenas para **testes**. Para requisitos de confiabilidade, adquira adicionalmente a Antena 2.
:::

## Visão geral de hardware

<table align="center">
  <tr>
     <th>Diagrama da placa de extensão Wio-SX1262</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>Comparação da placa de extensão Wio-SX1262</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/extension_comparation.jpg" style={{width:700, height:'auto'}}/></div></td>
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

:::note
Observe que o `Wio-SX1262 for XIAO ESP32S3` usa uma conexão B2B, enquanto o `Wio-SX1262 for XIAO nRF52840` usa uma conexão com cabeçalho de pinos passantes; ambas as placas de expansão devem ser usadas com a respectiva placa de desenvolvimento XIAO correspondente.
:::

## Instrução em vídeo

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Recursos

- [Wio-SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Wio-SX1262 Schemetic Diagram](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262 for XIAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
