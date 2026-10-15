---
description: Crie um dispositivo DAPLink usando o Seeed Studio XIAO SAMD21
title: Crie um dispositivo DAPLink usando o Seeed Studio XIAO SAMD21
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-DAPLink
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-DAPLink/
---
# Seeed Studio XIAO SAMD 21 DAPLink

Agora, **desenvolvemos o firmware DAPLink executando em suas placas Arduino** (*SAMD Série*), como a [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) e a [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), para que você possa fazer upload e depurar placas de desenvolvimento que suportam DAPLink da forma mais econômica possível!

## Recursos

- Depurar e gravar CPUs Arm Cortex
- Fornece uma porta serial virtual, eliminando a necessidade de um conversor usb para serial
- Arrastar e soltar para enviar firmware (em breve)

## Primeiros Passos

Por favor, visite o Wiki de Primeiros Passos do Arduino DAPLink aqui.

### Método `uf2`

Para conveniência, também fornecemos métodos `uf2` para enviar o firmware do Wio Terminal. Basta baixar os arquivos `uf2` abaixo.

- Baixe os arquivos `uf2` [**simple_daplink_xiao**](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2).

Entre no modo bootloader deslizando o interruptor de energia duas vezes rapidamente. Para mais referência, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).

Uma unidade externa chamada `Arduino` deve aparecer no seu PC. Arraste os arquivos uf2 baixados para a unidade `Arduino`.

### Pinagem de Conexão

Você pode usar o seguinte como referência:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg" /></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
