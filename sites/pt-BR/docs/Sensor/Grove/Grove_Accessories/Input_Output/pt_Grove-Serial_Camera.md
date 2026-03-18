---
title: Grove - Serial Camera
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Serial_Camera/
slug: /Grove-Serial_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_Camera/
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg)

A Serial Camera é um módulo de câmera colorida JPEG de fácil uso com MCU. Ela possui um DSP de processamento de imagem integrado para gerar imagens JPEG de 320*240 ou 640*480 sem informações de miniatura. A imagem capturada será armazenada no buffer interno e transferida via porta UART.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html)

Recursos
--------

- Interface Grove
- Imagem JPEG comprimida sem informações de miniatura
- Alimentação de 5V
- Pequena e compacta
- Controle por protocolo

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de operação
</th>
<td>
4,8
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Resolução (padrão)
</th>
<td colspan="3">
640x480 / 320x240
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Taxa de baud padrão da porta serial
</th>
<td colspan="3">
115200
</td>
<td>
Baud
</td>
</tr>
</table>

Plataformas compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Ideias de aplicação
-----------------

- Câmeras digitais com o [SD card shield](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)
- Sistema de monitoramento de vídeo

Uso
-----

### Usar a câmera no PC

**Passo 1**: Faça o download da ferramenta dedicada de depuração de porta serial [VC0703COMTOOL.rar](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar) e instale-a.

**Passo 2**: Conecte a Serial Camera ao PC com um conversor serial USB para UART, o UartSBee

| Serial camera | Uart_SB v3.1 |
|---------------|---------------|
| GND (black)   | GND           |
| VCC (red)     | VCC           |
| RX (white)    | TX            |
| TX (Yellow)   | RX            |

**Passo 3:** Conecte o Uart_SB v3.1 ao computador e abra o software vc0703CommTool. Escolha o número de porta COM correto ao qual a câmera está ligada, baudrate padrão 115200, e então abra a porta.

**Passo 4:** Clique no botão "Get Version" e isso irá reiniciar a câmera.

**Passo 5:** Clique no botão "Fbuf" para ficar pronto para tirar uma foto.

1. Clique em "stop CFbuf" para tirar uma foto.

2. Clique em "Sel File" para selecionar o nome do arquivo onde a foto será armazenada.

3. Clique em "Read" para ler os dados do buffer e armazená-los no arquivo selecionado, como mostrado abaixo:

    ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg)

4. Clique em "Resume" para retomar a atualização de quadros, assim você pode continuar tirando outra foto.

### Usar a câmera com Arduino e cartão SD

**Passo 1**: Conecte a Grove - Serial Camera à placa Arduino. As partes de hardware incluem Seeeduino V3.0, SD Card Shield, cartão SanDisk microSD™ de 2GB, Grove - Button.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera.jpg) -->

**Passo 2**: Altere o buffer de recepção serial (padrão 64 bytes) para 128 bytes. Abra o diretório hardware/arduino/cores e edite o arquivo chamado wiring_serial.c ou HardwareSerial.cpp; próximo ao topo há um #define SERIAL_BUFFER_SIZE 64, o que significa que 64 bytes são usados para o buffer. Você precisa mudar isso para 128. Para mais detalhes, consulte [Arduino Hacks](http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks).

**Passo 3**: Faça o download da [Grove - Serial Camera Library](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip) e faça o upload para o Seeeduino. Se não puder ser compilada, confirme se a [SD Library](https://arduino.cc/en/Reference/SD) está na pasta do seu Arduino IDE.

**Passo 4**: Abra o Serial Monitor e pressione o botão para tirar a foto após a inicialização do cartão SD e da câmera.

Recursos
---------

- [VC0703 debug tool](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)
- [Manual for serial camera.pdf](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf)
- [Grove - Serial Camera Library](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Camera -->

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
