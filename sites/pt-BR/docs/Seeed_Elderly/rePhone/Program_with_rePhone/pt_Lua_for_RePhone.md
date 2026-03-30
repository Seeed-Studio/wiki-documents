---
description: Lua para RePhone
title: Lua para RePhone
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lua_for_RePhone
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Lua_for_RePhone/
---
![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone pode ser uma ferramenta de aprendizado para você começar projetos interessantes. Atualmente, RePhone suporta vários ambientes e linguagens de desenvolvimento, você pode criar aplicações com C/C++ baseado no Eclipse IDE, Arduino IDE, ou com Lua e JavaScript.

Este wiki é um Guia do Usuário para ajudar você a iniciar seu projeto RePhone com Lua.

Instalar Driver e Atualizar Firmware
----------------------------------

<!-- -   To **Install the Driver**, please refer to the **section 2 of [Arduino_IDE_for_RePhone_Kit](/pt-br/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** -->

<!-- 
-   To **Update Firmware**, please refer to **section 3 of [Arduino_IDE_for_RePhone_Kit](/pt-br/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** -->

Baixar o aplicativo Lua para RePhone
------------------------------------

**Passo 1.** Clique no ícone a seguir para ir ao nosso GitHub para baixar o 'Lua for RePhone application'

[![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Download_Lua_for_RePhone.png)](https://github.com/Seeed-Studio/Lua_for_RePhone/releases)

**Passo 2.** Clique em ***lua_for_rephone_xxx.zip*** para baixar

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_for_rephone_download.png)

**Passo 3.** Coloque seu RePhone em modo de armazenamento **conectando a bateria** e conecte-o ao PC com um cabo Micro USB.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**Passo 4.** Extraia o arquivo ***lua_for_rephone_xxx.zip*** para o disco de 5MB do RePhone, você também pode colocar alguns arquivos de música (formato mp3) no disco. Aqui eu coloquei os arquivos 'music1.mp3' e 'music2.mp3' nele.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_1.png)

Usar o Shell Lua
-------------

**Passo 1.** Agora pressione e segure o botão liga/desliga do seu RePhone (Xadow GSM+BLE, veja o diagrama acima no passo 3 da seção 2) por ***2 segundos*** para ligá-lo, então identifique o número da porta COM para a porta serial, que será ***MTK USB Modem Port*** exibida no ***Device Manager***, note também que *o número da COM pode ser diferente em computadores diferentes*.

Abra o **Device Manager** clicando no botão **Start**, clicando em **Control Panel**, clicando em **System and Security** e, em seguida, em **System**, clicando em **Device Manager**. Se for solicitado uma senha de administrador ou confirmação, digite a senha ou forneça a confirmação. Veja a imagem a seguir:

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Check_ports.png)

**Passo 2.** Usamos uma ferramenta de terminal serial como o [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) para acessar o shell Lua em execução no RePhone.

Se você usar o PuTTY, lembre-se de habilitar a opção ***"implicit CR in every LF"***. Caso contrário, as quebras de linha ficarão estranhas. Como o shell Lua do RePhone usa LF ('\n') como EOL, enquanto o PuTTY usa CR LF ("\r\n") como EOL padrão.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Putty_EOL.png)

**Passo 3.**Abra a MTK USB Modem Port (sua taxa de transmissão não importa, pois é uma porta serial virtual USB) e digite "print('hello, world')", você obterá seu primeiro código Lua sendo executado no RePhone.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Lua_Shell.png)

Se você tiver alguns arquivos de música no RePhone, digite "audio.play('music.mp3')" para tocá-los. Se você tiver um cartão SIM inserido, digite "gsm.call('phone_number')" para ligar para alguém ou "gsm.text('phone_number', 'message from rephone')" para enviar uma mensagem de texto.

Exemplos
--------

1.Reproduzir uma música repetidamente.

```
function play_music()
    audio.play('music.mp3')
end
t = timer.create(10000, play_music)
```

2.Mensagem de resposta automática.

```
function reply(from, content)
    print('got a message:', content)
    print('from:', from)
    gsm.text(from, 'Thanks for your message')
end
gsm.on_new_message(reply)
```

Comunidade RePhone
-----------------

[![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos procurado um lugar melhor onde nossos apoiadores (usuários do RePhone) possam se reunir, de forma acolhedora e confortável, para conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui estamos, a Comunidade RePhone.

Agora junte-se a nós na [Comunidade RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)!

Juntos buscamos respostas, criamos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

Recursos
---------

- [Código-fonte do Lua para RePhone](https://github.com/Seeed-Studio/Lua_for_RePhone)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Lua_for_RePhone -->

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
