---
description: Guia de introdução e montagem do kit Wio-SX1262 e XIAO ESP32S3 com gabinete impresso em 3D
title: Kit XIAO ESP32S3 & Wio-SX1262 com case 3D
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 11/21/2024
  author: Evelyn Chen
createdAt: '2024-11-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Este dispositivo é baseado no XIAO ESP32S3 e no módulo Wio-SX1262 LoRa. Combinado com um gabinete impresso em 3D requintado, ele é equipado com uma ampla faixa de frequência de 868 - 915MHZ e antena externa com ganho de 2dBi. Pode suportar gateway LoRaWAN de canal único a 2,5km e comunicação Meshtastic. Através da porta GPIO, pode ser pareado com módulos GNSS e outros módulos adicionais.

## Recursos

- **Alto desempenho de RF**: Suporta LoRa (862 - 930MHz), Wi-Fi de 2,4GHz e comunicação sem fio dupla BLE 5.0. Quando conectado a uma antena externa, permite comunicação remota a uma distância de 2,5km (LoRa) e 100m + (Wi-Fi / BLE).
- **Hub LoRaWAN**: Pré-gravado com firmware LoRaWAN de canal único, fica pronto para uso assim que é ligado.
- **Design de case 3D**: Com dimensões de 22x23x57mm, este dispositivo possui material ABS preto com ampla faixa de temperatura (- 40℃ ~ 100℃), o que o torna ideal para projetos externos e com espaço limitado.
- **Placa MCU poderosa**: Incorpora o processador Xtensa ESP32S3 de 32 bits, dual-core, operando em até 240MHz, montado com múltiplas portas de desenvolvimento, compatível com Arduino / MicroPython.
- **Projeto de alimentação elaborado**: Inclui interface USB Type-C, múltiplas interfaces GPIO/I2C/UART e gerenciamento de carga de bateria de lítio.
- **Hardware versátil para múltiplas aplicações**: Pode ser desenvolvido como um nó ou roteador para [Meshtastic](https://meshtastic.org/), um dispositivo para [Single Channel LoRaWAN Gateway](https://github.com/Lora-net/one_channel_hub), ou um sensor LoRa & LoRaWAN.

## Especificação

| Recurso | Detalhes |
| ---- | ---- |
| Processador | ESP32-S3R8, processador Xtensa LX7 dual-core de 32 bits operando até 240 MHz |
| Memória | 8M PSRAM on-chip & 8MB Flash |
| Wireless | Subsistema completo de Wi-Fi de 2,4GHz<br/>BLE: Bluetooth 5.0, Bluetooth mesh,<br/>LoRa: Gateway de canal único |
| Interface | 1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de usuário, 1x LED de carga<br/>1x Botão de reset, 1x Botão de boot |
| Alimentação | Tensão de entrada (Type-C): 5V<br/>Tensão de entrada (BAT): 4,2V<br/>Corrente de carga da bateria: 100mA |
| Temperatura de operação | -40 ~ 65°C |
| **Antena** |
| Tipo | Antena externa SMA para I-PEX |
| Ganho máximo | 2 dBi |
| Dimensão | 13,0x195mm |
| Instalação | Instalar na parte externa do gabinete |
| Distância | 2,5km em ambiente aberto |
| Aplicação | Adequada para a maioria dos cenários, projetada para uso interno e externo |
| **Mecânico** |
| Dimensão | 22x23x57mm |
| Material | ABS |
| Peso | 37,1g |

## Visão geral de hardware

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

### Lista de partes

| Item | Quantidade |
| ---- | ---- |
| Kit XIAO ESP32S3 & Wio-SX1262 com case 3D | x1 |
| Cabo USB Type-C de 20cm | x1 |

### Acessórios recomendados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS L76K para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Aplicação

2 aplicações fornecidas para este kit.

- Configurando como gateway LoRaWAN (pré-gravado), siga a [configuração do LoRaWAN Gateway](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/) e [as instruções para conexão LNS](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- Usando Meshtastic para comunicação em rede, siga [as instruções do Meshtastic](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_meshtastic/)

## Recursos

- [Arquivo 3D do Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- [Diagrama esquemático Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Datasheet do módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Projeto Github One-Channel Hub](https://github.com/Lora-net/one_channel_hub)
- [Arquivo 3D do case](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)
