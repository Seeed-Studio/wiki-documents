---
title: Primeiros Passos com o Wio Terminal
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/
slug: /Wio-Terminal-Getting-Started
sku: 102991299
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/
---

# Primeiros Passos com o Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg)

O **Wio Terminal** é um microcontrolador baseado em SAMD51 com conectividade sem fio alimentada pelo **Realtek RTL8720DN**, compatível com Arduino e MicroPython. Atualmente, a conectividade sem fio é suportada apenas pelo Arduino. Ele roda a **120MHz** (Boost até 200MHz), com **4MB** de Flash externa e **192KB** de RAM. Ele oferece suporte tanto a Bluetooth quanto a Wi‑Fi, fornecendo a espinha dorsal para projetos de IoT. O próprio Wio Terminal vem equipado com **uma tela LCD de 2,4”, IMU onboard (LIS3DHTR), microfone, buzzer, slot para cartão microSD, sensor de luz e emissor infravermelho (IR 940nm).** Além disso, também possui duas portas Grove multifuncionais para o [Ecossistema Grove](https://www.seeedstudio.com/grove.html) e 40 pinos GPIO compatíveis com Raspberry Pi para mais expansões.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o Seu Agora 🖱️</font></span></strong>
    </a>
</div>

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank" /></p><div align="center"><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-classroom.png" /></a></div><p />
</div>

## Características

- **Design Altamente Integrado**
  - MCU, LCD, WIFI, BT, IMU, Microfone, Alto-falante, Cartão microSD, Sensor de Luz, Chave de 5 Direções, Emissor Infravermelho (IR 940nm), Pronto para Criptoautenticação
- Alimentado por **Microchip ATSAMD51P19**
  - Núcleo ARM Cortex-M4F rodando a **120MHz** (Boost até 200MHz)
  - **4 MB** de Flash Externa, **192 KB** de RAM
- Suporte Abrangente a Protocolos
  - SPI, I2C, I2S, ADC, DAC, PWM, UART (Serial)
- Poderosa **Conectividade Sem Fio** (suportada apenas pelo Arduino)
  - Alimentado por **Realtek RTL8720DN**
  - Wi‑Fi Dual Band 2.4Ghz / 5Ghz (802.11 a/b/g/n)
  - BLE / BLE 5.0
- **Suporte a USB OTG**
  - Host USB
  - Cliente USB
- [**Ecossistema Grove**](https://www.seeedstudio.com/grove.html)
- **Suporte de Software**
  - Arduino
  - MicroPython
  - ArduPy
  - Firmware AT

## Especificações

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg">
  <tbody>
    <tr>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={7}>Main Chip</th>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Manufacturer Part Number</th>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ATSAMD51P19</th>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Core Processor</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>CPU Speed</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>120MHz(Boost up to 200MHz)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Program Memory Size</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>512KB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>External Flash</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>4MB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RAM Size</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>192KB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Operating Temperature</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>-40°C ~ 85°C (TA)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>LCD Screen</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Resolution</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>320 x 240</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Display Size</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2.4 inch</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Driver IC</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ILI9341</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={6}>Wireless connectivity</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Manufacturer Part Number</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RTL8720DN</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM4 CPU</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM0 CPU</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M0</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>802.11 a/b/g/n 1x1, 2.4GHz &amp; 5GHz</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Bluetooth</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Suporta BLE5.0</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Hardware Engine</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>AES/DES/SHA</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>Módulos Integrados</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Acelerômetro</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>LIS3DHTR</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Microfone</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>1.0V-10V -42dB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Alto-falante</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>≥78dB @10cm 4000Hz</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Sensor de Luz</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>400-1050nm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Emissor Infravermelho</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>940nm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>Interface</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Slot para Cartão microSD</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Máximo 16GB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>GPIO</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>40 PINOS (Compatível com Raspberry Pi)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Grove</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2 (Multifuncional)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>FPC</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>20 PINOS</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>USB Tipo C</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Alimentação &amp; USB-OTG</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>Interface de operação</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Chave de 5 vias</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Chave Liga/Desliga/Reset</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Botão Definido pelo Usuário *3</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={2}>Gabinete</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Dimensões</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>72mm*57mm*12mm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Materiais</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>ABS+PC</td>
    </tr>
  </tbody>
</table>

## Visão Geral do Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-Overview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-OverviewNew.png" /></a></p>
  </figure>
</div>

## Diagrama de Pinagem

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg)

## Primeiros Passos

### Hardware

**Materiais necessários**

- Wio Terminal x 1
- Computador x 1
- Cabo USB Tipo-C x 1

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Powerup.png" /></div>

Conecte o Wio Terminal ao seu computador via cabo USB. O LED azul na parte de trás deve acender.

### Software

- **Passo 1. Você precisa instalar o software Arduino.**

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Dê um clique duplo no aplicativo Arduino IDE que você baixou anteriormente.

:::note
    Se o software Arduino abrir em um idioma diferente, você pode alterá-lo na janela de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

- **Passo 2. Abra o exemplo Blink**  

Abra o sketch de exemplo de piscar LED: **File > Examples >01.Basics > Blink**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/>
  <figcaption><i>Caminho do Blink</i></figcaption>
</figure>
</div>

- **Passo 3. Adicione a biblioteca de placa do Wio Terminal**

1.Abra o seu Arduino IDE, clique em **File** > **Preferences** e copie a URL abaixo em **Additional Boards Manager URLs**:

```sh
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)

2.Clique em **Tools** > **Board** > **Board Manager** e procure por **Wio Terminal** no Boards Manager.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"/>
  <figcaption><i>A palavra-chave é Wio Terminal</i></figcaption>
</figure>
</div>

- **Passo 4. Selecione sua placa e porta**  
Você precisará selecionar a entrada no menu **Tools > Board** que corresponda ao seu Arduino.
Selecionando o **Wio Terminal**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"/>
  <figcaption> <i>Escolha a placa correta</i></figcaption>
</figure>
</div>

Selecione o dispositivo serial da placa Wio Terminal no menu **Tools -> Port**. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Conecte a placa novamente e selecione essa porta serial.

:::note
    Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`
:::
<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/port.png"/>
  <figcaption><i>Escolha a porta correta</i></figcaption>
</figure>
</div>

- **Passo 5. Envie o programa**  

Agora, simplesmente clique no botão **Upload** no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/upload.png"/>
  <figcaption><i>Envie o código</i></figcaption>
</figure>
</div>

Alguns segundos após o término do envio, você deverá ver o LED na parte inferior do Wio Terminal começar a piscar. Se isso acontecer, parabéns! Você colocou o Wio Terminal para funcionar. Se tiver problemas, consulte as sugestões da seção de FAQ.

Se você não conseguir enviar o sketch, na maioria das vezes é porque o Arduino IDE não conseguiu colocar o Wio Terminal em **modo bootloader**. (Porque o MCU travou ou o seu programa está manipulando o USB.) A solução é colocar manualmente o seu Wio Terminal em modo bootloader, conforme mostrado na FAQ.

Sinta-se à vontade para seguir outros tutoriais do Wio Terminal e começar a construir seus projetos de IoT!

## FAQ

### **Reiniciar o Wio Terminal:**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" /></div>

### **Entrar no Bootloader:**

Isto é muito útil quando o Wio Terminal trava ou de alguma forma a porta serial USB não aparece no Arduino IDE. Deslize o interruptor **duas vezes bem rápido**, como a seguir:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

Uma vez que o Wio Terminal esteja no modo Bootloader, **o LED azul começará a pulsar** de uma maneira diferente do piscar. Verifique a porta novamente e ela deverá ter aparecido.

### **Testar com SWD**

Existem duas maneiras de usar SWD para testar e depurar com o Wio Terminal:

Pela parte de trás da placa de circuito impresso nos pontos de teste.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-1.png" /></div>

À esquerda estão as portas de teste para o ATSAMD51:

- SWCLK
- SWDIO
- SWO
- RST
- GND
- 3V3

À direita estão as portas de teste para o RTL8720DN:

- CHIP
- RXD
- TXD
- GND
- 3V3

Se você tiver necessidades de depuração muito frequentes, pode adicionar depuração SWD a uma das interfaces Grove das seguintes maneiras:

<div>
  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-2.png" /></div><br />
</div>

A figura mostra as duas posições de resistores não montados. Você pode conectar essas duas ilhas soldando um resistor de 0 ohm ou fazendo um curto-circuito. Isso conectará a interface SWD (SWDIO / SWCLK) do ATSMAD51 ao Grove em paralelo na interface.

Após nossos testes, a interface SWD é conectada em paralelo desta forma. Ao ligar e reiniciar, você precisa se certificar de que a interface Grove não esteja conectada a nenhum módulo Grove (o módulo pode ter resistores de pull-up / pull-down, o que irá afetá-la), caso contrário, ela entrará diretamente no modo SWD e não poderá funcionar no modo normal (isto é, o SWDCLK não pode ser puxado para nível baixo durante a energização ou o reset)

Além da energização e do reset, ao usar SWD, Digital, Analog, Serial, I2C, não haverá interferência, você pode alternar a qualquer momento, mas para evitar possíveis problemas, ainda recomendamos remover, após concluir a depuração do programa, essa conexão das duas ilhas.

### Conflitos de Nome de Arquivo de Biblioteca

Depois de instalar o seeed-arduinocore-samd, o core fará o download de alguns arquivos de biblioteca para acionar diferentes dispositivos ao mesmo tempo, como **TFT_eSPI.h**, etc. Quando você enviar o programa, ocorrerá um erro e o compilador informará que vários arquivos de biblioteca foram encontrados. Por exemplo:

```c
Multiple libraries were found for "TFT_eSPI.h"

Used: C:\Users\Dave\Documents\Arduino\libraries\TFT_eSPI-master

Not used: C:\Users\Dave\AppData\Local\Arduino15\packages\Seeeduino\hardware\samd\1.8.2\libraries\Seeed_Arduino_LCD
```

Se você usar um dispositivo seeed-SAMD, selecione e use o arquivo de biblioteca na pasta seeed e mova o arquivo de biblioteca conflitante para fora da biblioteca do Arduino.

Quando você usar outros dispositivos, remova os arquivos de biblioteca na pasta seeed e mantenha o compilador chamando apenas um arquivo de biblioteca. Isso pode resolver o problema de incompatibilidade causado por diferentes versões de arquivos de biblioteca com o mesmo nome.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/wiolibrary.png)

Você pode consultar as listas específicas de bibliotecas aqui: [https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries)

## Sala de Aula Wio Terminal

### Lição 1 - Hello World

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/af_I0n5iyzk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 2 - Desenhando Formas

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IFRiGpK4HK8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 3 - Exibindo Fontes

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aZ9LYoS8w24" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 4 - Exibindo Imagens e Interface Simples

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/P8CQtByWfS4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 5 - Gráficos de Linhas e Histogramas

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OnYLy7k-4T4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 6 -  Usando Módulos Grove

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NeFotsklchc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 7 -  Protocolos de Comunicação

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kn9WJn2FRkI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 8 -  Hardware/Sensores Integrados Parte 1 | 3 Botões & Interruptor de 5 Direções

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tVd4L7Hzj7M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lição 9 -  Hardware/Sensores Integrados Parte 2 | Microfone & Buzzer

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aYEI9UGIBvo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Aula 10 - Hardware/Sensores Integrados Parte 3 | Acelerômetro e Sensor de Luz

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3dw-Ony6CIE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Aula 11 - Construa um controle remoto de TV usando o emissor IR integrado

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/C9AlljLst2o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Aula 12 - Projeto de Jardim Inteligente usando Wio Terminal

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NQt-XLcSIwA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Aula 13 - Use o Wio Terminal como um mouse para PC

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QIR_yqQnYPY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Aula 14 - Use o Wio Terminal como um teclado para PC

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JLrP058LDr8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Wio Terminal em Deep Learning com suporte da CAVEDU Education

**[Chinese]** [Aqui](https://www.youtube.com/watch?v=sGpRnlGPapY&list=PLZkpEAYL25ABrMJJ3cod4PfQJ1Hviuk5B) está uma série de vídeos sobre como aplicar deep learning no Wio Terminal.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/jietu.png)

## Recursos

- **[PDF]** [Folha de dados ATSAMD51N19A](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ATSAMD51.pdf)
- **[PDF]** [Esquemáticos do Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-SCH-v1.2.pdf)
- **[ZIP]** [Esquemáticos do Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal_SCH&PCB.zip)
- **[PDF]** [Dimensões do Gabinete do Wio Terminal - Frente](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.pdf)
- **[PDF]** [Dimensões do Gabinete do Wio Terminal - Verso](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.pdf)
- **[AI]** [Arquivo de Design do Adesivo da Tela do Wio Terminal (Wio-Terminal-ちゃん)](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Screen-Sticker-Design-File(Wio-Terminal-ちゃん).ai)
- **[AI]** [Arquivo de Design do Wio-Terminal-chan azul e branco](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-chan-Desgin-File-blue&white.ai)
- **[DXF]** [Dimensões do Gabinete do Wio Terminal - Frente](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.dxf)
- **[DXF]** [Dimensões do Gabinete do Wio Terminal - Verso](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.dxf)
- **[DXF]** [Dimensões do Chassi da Bateria do Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Chassis-Battery.dxf)
- **[DXF]** [Dimensões da PCB do Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-PCB-V3.0.dxf)

<a href="https://github.com/Seeed-Studio/OSHW-WioTerminal">
  <div className="custom-layout">
    <div className="custom-image">
     <img width="100" src="https://files.seeedstudio.com/wiki/Wio-Terminal/res/oshw-logo.svg" alt="your-image-description" />
    </div>
    <div className="custom-text">
      <h2>Hardware de Código Aberto</h2>
      <p>Este produto é totalmente de código aberto. Acesse os documentos de código aberto relacionados através deste link.</p>
    </div>
  </div>
</a>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
