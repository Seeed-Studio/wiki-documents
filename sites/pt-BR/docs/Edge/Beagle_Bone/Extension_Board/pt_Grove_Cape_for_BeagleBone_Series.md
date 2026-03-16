---
description: Grove Cape para BeagleBone® Série
title: Grove Cape para BeagleBone® Série
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Cape_for_BeagleBone_Series
sku: 103020015
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Cape_for_BeagleBone_Series/
---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove%20Cape%20for%20BeagleBone.jpg)

Um verdadeiro hardware aberto, a série BeagleBone® é um computador Linux do tamanho de um cartão de crédito que se conecta à Internet e roda softwares como Android 4.0 e Ubuntu. Com bastante E/S e poder de processamento para análise em tempo real, fornecidos por um processador ARM® AM335x de 720 MHz, o BeagleBone® pode ser complementado com placas de expansão (capes) para aumentar sua funcionalidade.

E este Grove - Grove Cape para BeagleBone® Série é uma placa de expansão para a série BeagleBone® para funcionar com os abundantes recursos Grove. Existem 6 soquetes Grove prontos na placa cobrindo funções como UART, I2C e ADC. Dessa forma, todos os módulos Grove ficam acessíveis para a placa BeagleBone®. Quer realizar alguns projetos com BeagleBone® e precisa de alguns sensores ou display? Este Grove - Grove Cape para BeagleBone® Série pode trazer essa conveniência para você.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)

## Especificação

---

* Tensão: 3,3~5 V
* Corrente: &lt;0,5 uA
* Dimensão: 69,9 x 54,8 x 17,5 mm
* Proteção de tensão da porta de E/S digital
* Entrada digital permite tensão máxima de 5 V
* Entrada analógica por resistência de divisor de tensão, razão de 1,8/5
* Porta analógica permite tensão máxima de entrada de 5 V

## Interface

---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove_Cape_for_BeagleBone_Series.jpg)

**J1,J5:** podem ser usados para I2C.

**J2,J6,:** podem ser usados para UART.

**J3,J7,:** podem ser usados para ADC.

Os pinos descrevem o mapeamento para a placa Grove Cape para BeagleBone® Série conforme mostrado abaixo:

| Interface Grove | Pino Grove | A/D | I²C | UART | Pino BeagleBone® | Função BeagleBone® |
|---|---|---|---|---|---|---|
| J1 | 1 | | SCL1 | | J8.17 | gpio[5]/ |
| J1 | 2 | | SDA1 | | J8.18 | gpio[4]/ |
| J5 | 1 | | SCL2 | | J8.19 | gpio[13]/ |
| J5 | 2 | | SDA2 | | J8.20 | gpio[12]/ |
| J2 | 1 | | | RX1 | J8.26 | gpio[14]/ |
| J2 | 2 | | | TX1 | J8.24 | gpio[15]/ |
| J6 | 1 | | | RX2 | J8.22 | gpio[2]/ |
| J6 | 2 | | | TX2 | J8.21 | gpio[3]/ |
| J3 | 1 | AIN0 | | | J8.39 | |
| J3 | 2 | AIN1 | | | J8.40 | |
| J7 | 1 | AIN2 | | | J8.37 | |
| J7 | 2 | AIN3 | | | J8.38 | |

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Arquivo Eagle do Grove Cape para BeagleBone® Série](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

