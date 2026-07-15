---
description: Placa de expansão Arduino para LinkIt Smart 7688 Duo
title: Placa de expansão Arduino para LinkIt Smart 7688 Duo
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino_Breakout_for_LinkIt_Smart_7688_Duo
sku: 103030033
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/
---

:::danger
Devido ao encerramento do MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise-os no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

 **Arduino Breakout for LinkIt Smart 7688 Duo** é uma placa de expansão para o LinkIt Smart 7688 Duo. Assim como outras placas de expansão produzidas pela Seeed, esta placa integrou generosamente 12 portas Grove que permitem conectar mais módulos Grove com facilidade. Ao usar esta placa, iniciantes conseguem começar rapidamente porque a fiação, que geralmente não é um processo agradável para a maioria das pessoas, é simplificada. Além disso, a placa compartilha o mesmo MCU que o Arduino, o que significa que você pode não apenas usar os recursos do LinkIt Smart 7688, mas também do Arduino Yún, permitindo que você crie aplicações ricas de IoT baseadas em diversos e robustos sketches Arduino compilados. Na placa, há pinos reservados para acesso fácil ao LinkIt Smart 7688 Duo, além disso, ela também suporta barramentos seriais como I2C, UART e vem com USB e Ethernet.

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_product_view.jpg)

LinkIt Smart 7688 Duo é uma placa de desenvolvimento aberta baseada na distribuição Linux OpenWrt, MT7688 e ATmega32u4. A placa é projetada especialmente para possibilitar a prototipagem de dispositivos IoT de Aplicações Ricas para Casas Inteligentes. Se você quiser saber mais sobre o LinkIt Smart 7688 Duo, clique [AQUI](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Arduino-Breakout-for-LinkIt-Smart-7688-Duo-p-2576.html)

## Recursos

- Compatível com Shield Arduino
- Ethernet para conectar à internet
- USB 2.0 para mais periféricos
- Interfaces Grove: I2C × 2, Analógica × 3, Digital × 6, UART × 1
- Porta de depuração de 4 pinos × 1, ICSP × 1

## Ideias de Aplicação

- Dispositivo IoT/Gateway.
- Robótica
- Dispositivos multimídia inteligentes
- Ensino e aprendizagem

## Especificações

- **Tensão de entrada** : 5,0 V (com porta de alimentação USB)
- **Tensão de operação** : 3,3 V

:::note
    Pinos de depuração conectam-se ao MT7688, outros pinos conectam-se ao ATmega32U4.
:::

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_components_with_text_1200_s.jpg)

|Item|Qtd|Item|Qtd|
|---|---|---|---|
|Shield Arduino|1|Porta USB (Tipo A)|1|
|MT7688 UART2|1|Porta USB (Micro tipo B)|1|
|Porta ICSP|1|Porta Ethernet|1|
|Botão de Reset (ATmega32u4)|1|Porta para ser conectada ao LinkIt Smart 7688 Duo|1|

## Primeiros Passos

Nesta aplicação simples, você fará um buzzer emitir sons diferentes. Antes de começar, além da Arduino Breakout for LinkIt Smart 7688 Duo, verifique se você tem os materiais abaixo em mãos. Você pode obtê-los em nosso Bazaar.

|LinkIt Smart 7688 Duo|Cabo USB|UARTBee |Jumpers x 3|Grove - Buzzer
|---|---|---|---|---|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/102110017%206.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/jw100n.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/107020000%201.jpg)
|[**Adquira agora**](https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html)|[**Adquira agora**](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[**Adquira agora**](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[**Adquira agora**](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|[**Adquira agora**](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

- Etapa 1 Consulte isto para conectar seu LinkIt Smart 7688 Duo à internet.

:::note
    * Você pode encontrar o Pino 8, Pino 9 e Pino GND próximo à porta a ser conectada ao LinkIt Smart 7688.
    * Você pode conectar jumpers na porta MT7688 UART2 em vez de soldá-los ao Pino 8, Pino 9 e Pino GND.
:::

- Etapa 2. Abra um console depois de conectar um adaptador USB para Serial ao LinkIt Smart 7688 Duo.
- Etapa 3 Conecte todas as partes como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

- Etapa 4: Conecte o Grove - Buzzer à porta D4.

- Etapa 5: Esta etapa é para construir o ambiente Arduino para a plataforma LinkIt Smart 7688 Duo no computador host. Como o tutorial já foi escrito no Wiki do LinkIt Smart 7688, consulte [Aqui](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing-Arduino-programming-environment).
- Etapa 6: Baixe o firmata.
- Etapa 7: Consulte [Aqui](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing-Arduino-programming-environment) para instalar a IDE Arduino para a plataforma LinkIt Smart 7688 e grave o arquivo firmata na placa de desenvolvimento.

:::note
    As etapas seguintes devem ser executadas no SO embarcado (OpenWRT). Certifique-se de que você tem Python no seu sistema e o pip instalado.
:::

- Etapa 8: Digite pip install pyfirmata no console e pressione Enter para instalar a biblioteca Python pyfirmata.
- Etapa 9: Crie um arquivo chamado **buzzer.py** digitando **vi buzzer.py** no console, copie o código abaixo para ele.

```python
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

- Etapa 10: Salve **buzzer.py** e digite **python buzzer.py** para executar o código de exemplo.
- Etapa 11: Agora você ouvirá o som do buzzer.

## Faça Agora

Você conseguiu fazer o buzzer tocar? Aqui estão mais 2 projetos incríveis que usam o LinkIt Smart 7688 Duo. Vamos fazê-los agora!

|Roteador Inteligente com Visualização da Conexão WiFi|Monitor de Curtidas do Facebook|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9SCHIKIPH4SPTP.MEDIUM.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9MQJJOIHQOBV4Q.MEDIUM.jpg)|
|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ReRouter-Make-an-Extensible-IoT-Router/)|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Facebook-Like-Monitor/)|

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Arquivos do esquemático](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [Link do Wiki para LinkIt Smart 7688 Duo](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
