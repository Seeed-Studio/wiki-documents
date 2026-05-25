---
description: A introdução do Wio-SX1262
title: Introdução ao Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /wio_sx1262
sku: 114993390,113991436
sidebar_position: 1
last_update:
  date: 10/12/2024
  author: Evelyn Chen
createdAt: '2024-10-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262/
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Wio-SX1262 é um módulo LoRa® Pure RF de baixo custo, ultrabaixo consumo de energia e ultracompacto, baseado no CI de comunicação sem fio LoRa® de alto desempenho Semtech SX1262, oferecendo suporte a frequência LoRa e LoRaWAN de 868 a 915 MHz e até +22 dBm de potência de transmissão altamente eficiente. Equipado com um conector de antena IPEX onboard e um oscilador de alta qualidade TCXO (Temperature Compensate Crystal Oscillator), garante operação estável em ambientes industriais de altas e baixas temperaturas. Ele é projetado para redes de sensores sem fio e outros dispositivos de IoT, especialmente aqueles que exigem alimentação por bateria, baixo consumo de energia e conectividade de longo alcance. Ideal para aplicações como leitura de medidores sem fio, sensores de agricultura, gateway LoRaWAN de canal único etc.

## Recursos

- O Wio SX1262 é baseado no SX1262, que é um transceptor de rádio sub-GHz projetado pela Semtech Corporation
- O Wio SX1262 pode transmitir até +22 dBm com amplificadores de potência integrados altamente eficientes
- O Wio SX1262 oferece suporte à modulação LoRa® para casos de uso LPWAN e modulação (G)FSK para casos de uso legados.
- Cobertura de frequência de 868 MHz a 960 MHz.
- Com interface SPI.
- O Wio SX1272-N possui pinos de RF em encapsulamento SMT para facilitar o projeto de PCB, o que significa que ele não contém conector IPEX.

### Comparação com outros módulos

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## Visão Geral de Hardware

O módulo Wio-SX1262 é baseado no SX1262, o que o torna ideal para projetar vários nós de IoT. Ele oferece suporte às modulações (G)FSK e LoRa®, com uma faixa de largura de banda de 7,8 a 500 kHz no modo LoRa®. O módulo fornece a interface SPI para comunicação com um MCU externo. Seu esquema de distribuição de energia oferece suporte a duas opções de hardware: DC-DC ou um regulador linear LDO, e o módulo Wio-SX1262 utiliza o projeto DC-DC. Além disso, ele possui um TCXO ativo de alta precisão como sua frequência de referência interna de RF, com o DIO3 servindo como fonte de alimentação de tensão do TCXO.

### Diagrama Esquemático

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/31.png" style={{width:500, height:'auto'}}/>
</div>
</td>

### Pinagem

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/30.png" style={{width:500, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/68.jpg" style={{width:700, height:'auto'}}/>
</div>
</td>

## Design de Referência Baseado no módulo Wio-SX1262

A seguir está um design de referência típico usando o módulo Wio-SX1262; basta conectar o módulo ao MCU host de acordo com o design de referência.

Considerações sobre o projeto da antena: a interface da antena é projetada com impedância de 50Ω, e recomenda-se que os usuários reservem uma rede de casamento do tipo π para a antena.

**O design de referência:**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## Recursos

- [Wio SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Wio SX1262 Schemetic Diagram](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio SX1262 symbol and package file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
