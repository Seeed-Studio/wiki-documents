---
title: Grove - Wio-E5
nointro: null
keywords:
  - LoRa
  - E5
  - Grove
description: Grove LoRa-E5, um módulo LoRa poderoso e versátil da Seeed Studio. Explore seus recursos, folhas de dados, certificações e SDKs relevantes
image: https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg
slug: /Grove_LoRa_E5_New_Version
sku: 113020091
last_update:
  date: 07/25/2024
  author: Spencer
createdAt: '2024-07-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_LoRa_E5_New_Version/
---

<div class="table-center">
  <table align="center">
    <tr>
        <th>Grove Wio E5</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg" style={{width:'auto', height:320}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.

Antes de mergulhar no Grove Wio-E5, vamos entender brevemente o Wio-E5.

O [Wio-E5](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) é alimentado pelo STM32WLE5JC, que integra em um único chip um MCU ARM Cortex M4 de ultrabaixo consumo e o rádio LoRa® RF SX126x. É um módulo de RF sem fio que suporta protocolos LoRa® e LoRaWAN® nas frequências EU868 e US915, bem como modulação (G)FSK, BPSK, (G)MSK e LoRa®. E ele obteve certificações FCC, CE, IC e Telec (para mais informações sobre o Wio-E5, consulte o [Wio-E5 wiki](https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/).)

O [Grove Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) incorpora este Wio-E5 de ultrabaixo consumo. Com conectores Grove onboard para integração fácil plug-and-play, ele fornece à sua placa de desenvolvimento capacidades poderosas para transmissão de ultra longo alcance.


Como uma atualização da nossa versão antiga - [Grove - Long Range 868MHz](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - alimentada pelo [RFM95 ultra-long-range Transceiver Module](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html), o Grove LoRa-E5 incorporando o [Wio-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) é um módulo de rádio sem fio LoRa® de alto desempenho e fácil de usar, que suporta o protocolo LoRaWAN®.

Mais comparações entre o Wio-E5 e o chip RFM95:
![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png)

Ao conectar o Grove - Wio-E5 às suas placas de desenvolvimento, seus dispositivos conseguem se comunicar e controlar o Wio-E5 de forma conveniente por comando AT através de conexão UART. O Grove Wio-E5 será uma escolha superior para desenvolvimento e teste de dispositivos de IoT e para cenários de IoT de longa distância e ultrabaixo consumo de energia, como agricultura inteligente, escritório inteligente e indústria inteligente. Ele é projetado com padrões industriais, com ampla faixa de temperatura de trabalho de -40℃ ~ 85℃, alta sensibilidade entre -116.5 dBm e -136 dBm, e potência de saída entre 10 dBm e 22 dBm.

## Recursos

- Wio-E5 (STM32WLE5JC) incorporado
- Suporta protocolo LoRaWAN® na faixa de frequência EU868/US915
- Alcance de transmissão ultralongo de até 10 km (valor ideal em espaço aberto)
- Controle fácil por comando AT via conexão UART
- Prototipagem rápida com interfaces Grove plug-and-play
- Ultrabaixo consumo de energia e alto desempenho

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4081615359627_.pic_hd.jpg)

1. Wio-E5 STM32WLE5JC ([Datasheet](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))

2. Conector MHF IPEX

3. Antena de Fio

4. Conector Grove

5. LEDs Indicadores

<!-- 不准确，只是一个模组，并不支持编程  -->
<!-- ## Platform Supported
<table>
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/products/113020091/Raspberry_Pi-Logo.wine.png" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
  </tr>
</table> -->

## Especificação

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">Lista de Peças:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Grove - Wio-E5 PCBA *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Cabo Universal Grove*1</td>
</tr>
</tbody>
</table>
</div>

<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">Parâmetros Gerais</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j">Tensão <span>de Alimentação: </span></td>
<td class="tg-uu1j">3.3V - 5V</td>
</tr>
<tr>
<td class="tg-uu1j">Potência <span>de Saída: </span></td>
<td class="tg-uu1j">Até +20 dBm em 3.3V</td>
</tr>
<tr>
<td class="tg-uu1j">Frequência de Trabalho</td>
<td class="tg-uu1j">868/915MHz</td>
</tr>
<tr>
<td class="tg-uu1j">Protocolo</td>
<td class="tg-uu1j">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-uu1j">Sensibilidade</td>
<td class="tg-uu1j">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-uu1j">Modulação</td>
<td class="tg-uu1j">LoRa®, (G)FSK, (G)MSK e BPSK</td>
</tr>
<tr>
<td class="tg-uu1j">Corrente</td>
<td class="tg-uu1j">Apenas 60uA em modo de suspensão</td>
</tr>
<tr>
<td class="tg-uu1j">Tamanho</td>
<td class="tg-uu1j">20*40mm</td>
</tr>
<tr>
<td class="tg-uu1j">Temperatura de Trabalho</td>
<td class="tg-uu1j">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>
</div>

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


## Aplicação

- Funciona para nós sensores LoRaWAN® e qualquer aplicação de comunicação sem fio
- Teste e desenvolvimento de dispositivos de IoT

![](https://files.seeedstudio.com/products/317990687/image/application.png)


## Notas de Aplicação

#### Nota 1. Firmware AT de Fábrica

A série Wio-E5 possui um **firmware de comandos AT integrado**, que suporta o protocolo LoRaWAN® *Classe A/B/C* e um amplo plano de frequências: *EU868/US915/AU915/AS923/KR920/IN865*. Com esse firmware de comandos AT, os desenvolvedores podem criar facilmente e rapidamente seu protótipo ou aplicação.

O firmware de comandos AT contém um bootloader para DFU e a aplicação AT. O pino "PB13/SPI_SCK/BOOT" é usado para controlar se o Wio-E5 permanece no bootloader ou salta para a aplicação AT. Quando PB13 está em nível HIGH, o módulo irá saltar para a aplicação AT após o reset, com taxa de transmissão padrão de 9600. Quando PB13 está em nível LOW (pressionar o botão "Boot" na Wio-E5 Dev Board ou Wio-E5 mini), o módulo permanecerá no bootloader e continuará transmitindo o caractere "C" a cada 1S na taxa de transmissão 115200.

:::caution attention

- O Firmware AT de Fábrica é programado com RDP(Read Protection) Nível 1, e os desenvolvedores precisam remover o RDP primeiro com o STM32Cube Programmer. Note que reverter o RDP para o nível 0 causará um apagamento em massa da memória flash e o Firmware AT de Fábrica não poderá ser restaurado novamente.
- O pino "PB13/SPI_SCK/BOOT" no módulo Wio-E5 é apenas um GPIO normal, não o pino "BOOT0" do MCU. Este pino "PB13/SPI_SCK/BOOT" é usado no bootloader do Firmware AT de Fábrica para decidir se deve saltar para o APP ou permanecer no bootloader (para DFU). O pino real "BOOT0" não é exposto no módulo, portanto os usuários precisam ter cuidado ao desenvolver aplicações de baixo consumo de energia.
:::

#### Nota 2. Configuração de Clock

2.1 HSE

- TCXO de 32MHz
- Alimentação do TCXO: PB0-VDD_TCXO

2.2 LSE

- Oscilador de cristal de 32.768KHz

#### Nota 3. Chave de RF

**O módulo Wio-E5 SOMENTE transmite através de RFO_HP:**

- Receber: PA4=1, PA5=0
- Transmitir(alta potência de saída, modo SMPS): PA4=0, PA5=1

#### Nota 4. Guia geral de fluxo de trabalho - Configuração e Uso do Grove LoRa E5

O Grove LoRa E5 vem com firmware LoRaWAN integrado que fornece um servidor AT (verifique a [LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)).

Como qualquer dispositivo não codificado de forma fixa, você pode definir cada EUI e chave API conforme necessário. Consulte este fluxo de trabalho para mais detalhes: [SenseCAP Indicator Application LoRaWAN](https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Application_LoRaWAN/#HEAD_register_device).

O fluxo de trabalho típico para o seu produto (XIAO [qualquer microcontrolador] + Grove E5) seria o seguinte:

1. Registre o dispositivo no LoRaWAN Network Server para obter as credenciais: EUI e chave.
2. Configure seu dispositivo LoRa E5 para definir o EUI e outros parâmetros.
3. Aproveite: envie e receba mensagens. Observação: você deve estar coberto por um LoRaWAN Gateway acessível.

Para o seu projeto Arduino, recomendamos esta biblioteca (repositório) para configurar seu dispositivo: [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5).

Certifique-se de que o seu LNS (LoRaWAN Network Server) esteja configurado corretamente e verifique se suas credenciais e parâmetros LoRa correspondem.

## Exemplos e Demonstração

1. [Grove - Wio-E5 P2P Example](https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_P2P/) Usando a função UART pura para se comunicar entre dois dispositivos wio-e5
2. [Grove - Wio-E5 TTN Demo](https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_TTN_Demo/) Acessar a rede LoRaWAN TTN via Wio-E5
3. [Grove - Wio-E5 Helium Demo](https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_Helium_Demo/) Conectando à rede IoT Helium usando o módulo Grove - Wio-E5 e o módulo Seeeduino XIAO
4. [Grove - Wio-E5 Used with Arduino Uno R4 Demo](https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_SenseCAP_Cloud_Demo/)
5. [Grove - Wio-E5 Used with XIAO ESP32S3 Demo](https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3/)
6. [Using Wio-E5 and XIAO ESP32S3 on PlatformIO(Arduino) to access LoRaWAN network](/pt-br/platformio_wio_e5/) Um guia prático. Detalha a integração do Wio-E5 com placas compatíveis com Arduino usando PlatformIO para uma conectividade LoRaWAN eficiente. 

## Recursos

**Folha de dados (Datasheet):**

- [Grove Wio-E5 v1.0.brd](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd)
- [Grove Wio-E5 v1.0.pdf](https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf)
- [Grove Wio-E5 v1.0.sch](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch)
- [Wio-E5 datasheet and specifications](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf)
- [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- [STM32WLE5JC Datasheet](https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf)

**Certificações:**

- [Wio-E5-HF Certification CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [Wio-E5-HF FCC Certification -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [Wio-E5-HF FCC Certification -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)
- [Wio-E5-HF TELEC Certification](https://files.seeedstudio.com/products/317990687/res/Telec.zip)
- [Wio-E5-HF IC Certification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf)

**SDK relevante:**

- [STM32Cube MCU Package for STM32WL series](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## ✨ Projeto de Colaborador

- Agradecemos a um dos amigos da Seeed Studio, Andres, por criar a [biblioteca Grove - Wio-e5, fornecendo múltiplos exemplos](https://github.com/andresoliva/LoRa-E5), adequada para placas Arduino como Arduino Nano 33 BLE Sense e, mais importante, [compatível com o XIAO ESP32S3 Sense](https://github.com/andresoliva/LoRa-E5).
- Isso permitirá ao usuário uma interação fácil, clara e segura com o módulo LoRa Grove - Wio-E5 da SeedStudio e, espera-se, que seja usado tanto como uma ferramenta educacional para aqueles **que estão dando seus primeiros passos em LoRa** quanto **preparado para aqueles que procuram usar este módulo em projetos de baixo consumo de energia**.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
