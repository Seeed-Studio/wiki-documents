---
description: Abrange a construção e a operação do dispositivo, detalhando como cada componente contribui para a funcionalidade geral do SenseCAP Indicator.
title: Mergulhe no Hardware
keywords:
  - Tutorial de Desenvolvimento do Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 11/17/2023
  author: Spencer
createdAt: '2023-05-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Dive_into_the_Hardware/
---
# **Visão Geral**

O SenseCAP Indicator é um dispositivo com tela sensível ao toque de 4 polegadas, alimentado pelos MCUs duplos ESP32 e RP2040. ESP32 e RP2040 são ambos microcontroladores altamente capazes que oferecem uma variedade de recursos e funções.

Este capítulo fornecerá informações detalhadas sobre o ESP32 e o RP2040 do SenseCAP Indicator, incluindo suas funções e uso. Ele abrange programação, interface com sensores e comunicação com outros dispositivos, etc.

# **Mergulhe no Hardware**

## **Diagrama de Hardware**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

Como mostrado na figura, o SenseCAP Indicator é acionado principalmente pelos MCUs ESP32 e RP2040, que estão conectados ao transceptor LoRa, ao LCD e a outros circuitos periféricos.
Nas seções a seguir, forneceremos uma visão geral do desenvolvimento com ESP32 e RP2040 e de suas respectivas capacidades.

## **ESP32-S3**

ESP32-S3 é um system-on-chip (SoC) altamente integrado que combina uma CPU poderosa, Wi‑Fi de 2,4 GHz e recursos de Bluetooth 5.0, além de incluir uma variedade de pinos e interfaces de entrada/saída, como UART, SPI, I2C e PWM, que permitem a sua interface com outros dispositivos e sensores.

## **RP2040**

O SenseCAP Indicator vem embarcado com o [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?), o RP2040 possui um processador ARM Cortex‑M0+ de dois núcleos com frequências de até 133 MHz, 264 KB de RAM e uma variedade de periféricos como USB, UART, SPI e I2C. Ele também inclui um recurso exclusivo chamado Programmable I/O (PIO), que permite aos usuários implementar interfaces digitais personalizadas sem a necessidade de hardware especializado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>

## **Comunicação entre ESP32-S3 e RP2040**

ESP32 e RP2040 usam comunicação por porta serial, utilizando o protocolo de comunicação [COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf).

Biblioteca usada no ESP32:  https://github.com/cmcqueen/cobs-c
Biblioteca Arduino usada pelo RP2040:  https://github.com/bakercp/PacketSerial

No demo de terminal, os seguintes quadros de dados são usados para transmissão：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (Little Endia)  |

**Lista de PKT_TYPE**

**Nota**: Os seguintes comandos são apenas para referência; é claro que você também pode definir seus próprios comandos.

| PKT_TYPE  | DIR\t | Observações  |
|:----------|:----------|:----------|
| 0x00    | ESP32↔RP2040    |   ACK, string, value:'ACK'  |
| 0xA0    | ESP32→RP2040    |  Coletar intervalo CMD, PKT_PARA é uint32_t |
| 0xA1    | ESP32→RP2040    |  CMD de beep ligado, PKT_PARA é uint32_t   |
| 0xA2    | ESP32→RP2040    |  CMD de beep desligado, PKT_PARA é uint32_t  |
| 0xA3    | ESP32→RP2040    |  CMD de desligamento, PKT_PARA é uint32_t  |
| 0xA4    | ESP32→RP2040    |  CMD de ligar, PKT_PARA é uint32_t  |
| 0xA0～0xAF  | ESP32→RP2040    |  Outros dados ou cmd   |
| 0xB0    | RP2040→ESP32    | Dados de temperatura SCD41, PKT_PARA é float    |
| 0xB1    | RP2040→ESP32    | Dados de umidade SCD41, PKT_PARA é float    |
| 0xB2    | RP2040→ESP32    | Dados de CO2 SCD41, PKT_PARA é float    |
| 0xB3    | RP2040→ESP32    | Dados de temperatura ATH20, PKT_PARA é float    |
| 0xB4    | RP2040→ESP32    | Dados de umidade ATH20, PKT_PARA é float    |
| 0xB5    | RP2040→ESP32    | Dados tVOC SGP40, PKT_PARA é float. índice 0～500   |
| 0xB6～0xBF    | RP2040→ESP32    | Outros dados ou cmd, PKT_PARA é float    |

# **Suporte Técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
