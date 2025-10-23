---
title: Comenzar con Wio Terminal
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/
slug: /es/Wio-Terminal-Getting-Started
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Comenzar con Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg)

El **Wio Terminal** es un microcontrolador basado en SAMD51 con Conectividad Inalámbrica alimentado por **Realtek RTL8720DN** que es compatible con Arduino y MicroPython. Actualmente, la conectividad inalámbrica solo es compatible con Arduino. Funciona a **120MHz** (Acelera hasta 200MHz), **4MB** de Flash Externa y **192KB** de RAM. Soporta tanto Bluetooth como Wi-Fi proporcionando la base para proyectos IoT. El Wio Terminal en sí está equipado con **una Pantalla LCD de 2.4", IMU integrado (LIS3DHTR), Micrófono, Zumbador, ranura para tarjeta microSD, Sensor de Luz, y Emisor Infrarrojo (IR 940nm).** Además de eso, también tiene dos puertos Grove multifuncionales para el [Ecosistema Grove](https://www.seeedstudio.com/grove.html) y 40 pines GPIO compatibles con Raspberry pi para más complementos.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank" /></p><div align="center"><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-classroom.png" /></a></div><p />
</div>

## Características

- **Diseño Altamente Integrado**
  - MCU, LCD, WIFI, BT, IMU, Micrófono, Altavoz, tarjeta microSD, Sensor de Luz, Interruptor de 5 Vías, Emisor Infrarrojo (IR 940nm), Listo para Cripto-autenticación
- Alimentado por **Microchip ATSAMD51P19**
  - Núcleo ARM Cortex-M4F funcionando a **120MHz**(Acelera hasta 200MHz)
  - **4 MB** de Flash Externa, **192 KB** de RAM
- Soporte Integral de Protocolos
  - SPI, I2C, I2S, ADC, DAC, PWM, UART(Serial)
- Potente **Conectividad Inalámbrica** (soportada solo por Arduino)
  - Alimentado por **Realtek RTL8720DN**
  - Wi-Fi de Banda Dual 2.4Ghz / 5Ghz (802.11 a/b/g/n)
  - BLE / BLE 5.0
- **Soporte USB OTG**
  - Host USB
  - Cliente USB
- [**Ecosistema Grove**](https://www.seeedstudio.com/grove.html)
- **Soporte de Software**
  - Arduino
  - MicroPython
  - ArduPy
  - Firmware AT

## Especificaciones

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg">
  <tbody>
    <tr>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={7}>Chip Principal</th>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Número de Parte del Fabricante</th>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ATSAMD51P19</th>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Procesador Principal</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Velocidad de CPU</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>120MHz(Acelerar hasta 200MHz)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Tamaño de Memoria de Programa</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>512KB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Flash Externo</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>4MB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Tamaño de RAM</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>192KB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Temperatura de Funcionamiento</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>-40°C ~ 85°C (TA)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>Pantalla LCD</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Resolución</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>320 x 240</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Tamaño de Pantalla</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2.4 pulgadas</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>IC Controlador</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ILI9341</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={6}>Conectividad inalámbrica</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Número de Parte del Fabricante</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RTL8720DN</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>CPU KM4</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>CPU KM0</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M0</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>802.11 a/b/g/n 1x1, 2.4GHz &amp; 5GHz</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Bluetooth</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Compatible con BLE5.0</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Motor de Hardware</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>AES/DES/SHA</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>Módulos Integrados</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Acelerómetro</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>LIS3DHTR</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Micrófono</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>1.0V-10V -42dB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Altavoz</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>≥78dB @10cm 4000Hz</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Sensor de Luz</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>400-1050nm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Emisor Infrarrojo</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>940nm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>Interfaz</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Ranura para Tarjeta microSD</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Máximo 16GB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>GPIO</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>40-PIN (Compatible con Raspberry Pi)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Grove</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2 (Multifunción)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>FPC</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>20-PIN</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>USB Type-C</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Alimentación y USB-OTG</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>Interfaz de operación</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Interruptor de 5 vías</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Interruptor de Encendido/Reinicio</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Botón Definido por el Usuario *3</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={2}>Carcasa</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Dimensión</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>72mm*57mm*12mm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Materiales</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>ABS+PC</td>
    </tr>
  </tbody>
</table>

## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-Overview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-OverviewNew.png" /></a></p>
  </figure>
</div>

## Diagrama de Pines

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg)

## Primeros Pasos

### Hardware

**Materiales requeridos**

- Wio Terminal x 1
- Computadora x 1
- Cable USB Tipo-C x 1

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Powerup.png" /></div>

Conecta el Wio Terminal a tu computadora mediante el cable USB. El LED azul en la parte posterior debería encenderse.

### Software

- **Paso 1. Necesitas instalar un software de Arduino.**

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino IDE que has descargado previamente.

:::note
    Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abrir el ejemplo Blink**  

Abre el sketch de ejemplo de parpadeo LED: **File > Examples >01.Basics > Blink**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/>
  <figcaption><i>Ruta de Blink</i></figcaption>
</figure>
</div>

- **Paso 3. Agregar la librería de la placa Wio Terminal**

1.Abre tu Arduino IDE, haz clic en **File** > **Preferences**, y copia la siguiente url en **Additional Boards Manager URLs**:

```sh
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)

2.Haz clic en **Tools** > **Board** > **Board Manager** y busca **Wio Terminal** en el Administrador de Placas.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"/>
  <figcaption><i>La palabra clave es Wio Terminal</i></figcaption>
</figure>
</div>

- **Paso 4. Selecciona tu placa y puerto**  
Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponda a tu Arduino.
Seleccionando el **Wio Terminal**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"/>
  <figcaption> <i>Elige la placa correcta</i></figcaption>
</figure>
</div>

Selecciona el dispositivo serie de la placa Wio Terminal desde el menú **Tools -> Port**. Es probable que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Wio Terminal y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

:::note
    Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`
:::
<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/port.png"/>
  <figcaption><i>Elige el puerto correcto</i></figcaption>
</figure>
</div>

- **Paso 5. Sube el programa**  

Ahora, simplemente haz clic en el botón **Upload** en el entorno. Espera unos segundos y si la subida es exitosa, aparecerá el mensaje "Done uploading." en la barra de estado.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/upload.png"/>
  <figcaption><i>Sube el código</i></figcaption>
</figure>
</div>

Unos segundos después de que termine la subida, deberías ver el LED en la parte inferior del Wio Terminal comenzar a parpadear. Si es así, ¡felicitaciones! Has puesto en funcionamiento el Wio Terminal. Si tienes problemas, por favor consulta las sugerencias de FAQ.

Si no puedes subir el sketch, principalmente es porque Arduino IDE no pudo poner el Wio Terminal en **modo bootloader**. (Porque el MCU se detuvo o tu programa está manejando USB,) La solución es poner tu Wio Terminal en modo bootloader manualmente, como se muestra en FAQ.

¡Por favor siéntete libre de revisar otros tutoriales del Wio Terminal y comenzar a construir tus proyectos IoT!

## FAQ

### **Reiniciar Wio Terminal:**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" /></div>

### **Entrar al Bootloader:**

Esto es muy útil cuando el Wio Terminal se bloquea o de alguna manera el puerto serie USB no aparece en Arduino IDE. Desliza el interruptor **dos veces muy rápidamente**, como sigue:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

Una vez que el Wio Terminal esté en modo Bootloader, **el LED azul comenzará a respirar** de una manera diferente al parpadeo. Verifica el puerto nuevamente y debería aparecer.

### **Prueba con SWD**

Hay dos maneras de usar SWD para probar y depurar con Wio Terminal:

Desde la parte posterior de los puertos de prueba del PCB.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-1.png" /></div>

A la izquierda están los puertos de prueba para ATSAMD51:

- SWCLK
- SWDIO
- SWO
- RST
- GND
- 3V3

A la derecha están los puertos de prueba para RTL8720DN:

- CHIP
- RXD
- TXD
- GND
- 3V3

Si tienes necesidades de depuración muy frecuentes, puedes agregar depuración SWD a una de las interfaces Grove de las siguientes maneras:

<div>
  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-2.png" /></div><br />
</div>

La imagen muestra las dos posiciones de resistencia no montadas. Puedes conectar estas dos almohadillas soldando una resistencia de 0 ohm o cortocircuitándola. Esto conectará la interfaz SWD (SWDIO / SWCLK) de ATSMAD51 a Grove en paralelo en la interfaz.

Después de nuestra prueba, la interfaz SWD está conectada en paralelo de esta manera. Al encender y reiniciar, necesitas asegurarte de que la interfaz Grove no esté conectada a ningún módulo Grove (el módulo puede tener resistencias pull-up / pull-down, que lo afectarán), de lo contrario entrará directamente al modo SWD y no podrá ejecutarse en modo normal (es decir, SWDCLK no puede ser llevado a bajo durante el encendido o reinicio)

Además del encendido y reinicio, al usar SWD, Digital, Analog, Serial, I2C, no habrá interferencia, puedes cambiar en cualquier momento, pero para evitar posibles problemas, aún recomendamos eliminar esta conexión de las dos almohadillas después de completar la depuración del programa.

### Conflictos de Nombres de Archivos de Biblioteca

Después de instalar seeed-arduinocore-samd, el núcleo descargará algunos archivos de biblioteca para controlar diferentes dispositivos al mismo tiempo, como **TFT_eSPI.h**, etc. Cuando subas el programa, ocurrirá un error y el compilador te indicará que se encontraron múltiples archivos de biblioteca. Por ejemplo:

```c
Multiple libraries were found for "TFT_eSPI.h"

Used: C:\Users\Dave\Documents\Arduino\libraries\TFT_eSPI-master

Not used: C:\Users\Dave\AppData\Local\Arduino15\packages\Seeeduino\hardware\samd\1.8.2\libraries\Seeed_Arduino_LCD
```

Si usas un dispositivo seeed-SAMD, por favor selecciona y usa el archivo de biblioteca en la carpeta seeed y mueve el archivo de biblioteca conflictivo fuera de la biblioteca de arduino.

Cuando uses otros dispositivos, por favor elimina los archivos de biblioteca en la carpeta seeed y mantén que el compilador llame solo a un archivo de biblioteca. Esto puede resolver el problema de incompatibilidad causado por diferentes versiones de archivos de biblioteca con el mismo nombre.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/wiolibrary.png)

Puedes consultar las listas específicas de bibliotecas aquí: [https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries)

## Aula Wio Terminal

### Lección 1 - Hola Mundo

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/af_I0n5iyzk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 2 - Dibujando Formas

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IFRiGpK4HK8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 3 - Mostrando Fuentes

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aZ9LYoS8w24" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 4 - Mostrando Imágenes e Interfaz Simple

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/P8CQtByWfS4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 5 - Gráficos de Líneas e Histogramas

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OnYLy7k-4T4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 6 - Usando Módulos Grove

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NeFotsklchc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 7 - Protocolos de Comunicación

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kn9WJn2FRkI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 8 - Hardware/Sensores Integrados Parte 1 | 3 Botones y Interruptor de 5 Direcciones

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tVd4L7Hzj7M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 9 - Hardware/Sensores Integrados Parte 2 | Micrófono y Zumbador

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aYEI9UGIBvo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 10 - Hardware/Sensores Integrados Parte 3 | Acelerómetro y Sensor de Luz

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3dw-Ony6CIE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 11 - Construye un Control Remoto de TV usando el Emisor IR integrado

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/C9AlljLst2o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 12 - Proyecto de Jardín Inteligente usando Wio Terminal

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NQt-XLcSIwA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 13 - Usa Wio Terminal como Ratón para PC

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QIR_yqQnYPY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Lección 14 - Usa Wio Terminal como Teclado para PC

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JLrP058LDr8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Wio Terminal en Aprendizaje Profundo con el apoyo de CAVEDU Education

**[Chino]** [Aquí](https://www.youtube.com/watch?v=sGpRnlGPapY&list=PLZkpEAYL25ABrMJJ3cod4PfQJ1Hviuk5B) hay una serie de videos sobre cómo aplicar aprendizaje profundo en Wio Terminal.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/jietu.png)

## Recursos

- **[PDF]** [Hoja de datos ATSAMD51N19A](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ATSAMD51.pdf)
- **[PDF]** [Esquemáticos de Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-SCH-v1.2.pdf)
- **[ZIP]** [Esquemáticos de Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal_SCH&PCB.zip)
- **[PDF]** [Dimensiones de la Carcasa de Wio Terminal - Frontal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.pdf)
- **[PDF]** [Dimensiones de la Carcasa de Wio Terminal - Posterior](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.pdf)
- **[AI]** [Archivo de Diseño de Pegatina de Pantalla de Wio-Terminal(Wio-Terminal-ちゃん)](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Screen-Sticker-Design-File(Wio-Terminal-ちゃん).ai)
- **[AI]** [Archivo de Diseño de Wio-Terminal-chan-azul y blanco](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-chan-Desgin-File-blue&white.ai)
- **[DXF]** [Dimensiones de la Carcasa de Wio Terminal - Frontal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.dxf)
- **[DXF]** [Dimensiones de la Carcasa de Wio Terminal - Posterior](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.dxf)
- **[DXF]** [Dimensiones del Chasis de Batería de Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Chassis-Battery.dxf)
- **[DXF]** [Dimensiones de PCB de Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-PCB-V3.0.dxf)

<a href="https://github.com/Seeed-Studio/OSHW-WioTerminal">
  <div className="custom-layout">
    <div className="custom-image">
     <img width="100" src="https://files.seeedstudio.com/wiki/Wio-Terminal/res/oshw-logo.svg" alt="your-image-description" />
    </div>
    <div className="custom-text">
      <h2>Hardware de código abierto</h2>
      <p>Este producto es completamente de código abierto. Accede a los documentos de código abierto relacionados a través de este enlace.</p>
    </div>
  </div>
</a>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
