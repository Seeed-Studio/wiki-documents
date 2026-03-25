---
description: Crie um dispositivo DAPLink usando o Wio Terminal
title: Crie um dispositivo DAPLink usando o Wio Terminal
keywords:
  - Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-DAPLink
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-DAPLink/
---

# Wio Terminal DAPLink

Agora, nós **desenvolvemos o firmware DAPLink executando nas suas placas Arduino** (*SAMD Series*), como o [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) e o [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), para que você possa fazer upload e depurar placas de desenvolvimento que suportam DAPLink da maneira mais econômica possível!

## Recursos

- Depurar e gravar CPUs Arm Cortex
- Fornece uma porta serial virtual, eliminando a necessidade de um adaptador USB para serial
- Arrastar e soltar para enviar firmware (em breve)

## Primeiros Passos

Visite o Wiki de Primeiros Passos do Arduino DAPLink [aqui](https://wiki.seeedstudio.com/pt-br/Arduino-DAPLink/).

### Método `uf2`

Para conveniência, também fornecemos métodos `uf2` para enviar o firmware do Wio Terminal. Basta baixar os arquivos `uf2` abaixo.

- Baixe os arquivos `uf2` [**simple_daplink_wt**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2).

Entre no modo bootloader deslizando o interruptor de alimentação duas vezes rapidamente. Para mais referências, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).

Uma unidade externa chamada `Arduino` deve aparecer em seu PC. Arraste os arquivos uf2 baixados para a unidade `Arduino`.

### Pinout de Conexão

Você pode usar o seguinte como referência:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

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
