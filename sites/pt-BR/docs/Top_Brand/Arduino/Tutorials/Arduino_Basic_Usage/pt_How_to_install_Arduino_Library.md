---
description: Como instalar uma biblioteca do Arduino
title: Como instalar uma biblioteca do Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_install_Arduino_Library
last_update:
  date: 02/02/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/
---


:::note

    Este tutorial é baseado no Arduino 1.6.9.
:::

Aqui mostramos como instalar uma biblioteca do Arduino. Você deve notar que quase todas as nossas bibliotecas estão armazenadas no [Github](https://github.com/Seeed-Studio). Forneceremos a biblioteca do Arduino quando um produto precisar de uma biblioteca. Para alguns produtos simples, não há necessidade de escrever uma biblioteca, como Grove - Button.

## Baixar a biblioteca

Existem duas maneiras de baixar uma biblioteca do Arduino.

### 1. Baixar na página do produto
Normalmente, se um produto precisar de uma biblioteca, você encontrará uma barra de botão de download de biblioteca como esta abaixo:

[![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png)](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip)

Clique no botão para iniciar o download. Em alguns segundos você terá um pacote.

### 2. Baixar do github

Se você precisar baixar a partir de uma página do Github, então você pode clicar no botão **Clone or download >Download ZIP** para obter o pacote da biblioteca.

![enter image description here](https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png)

## Adicionar a biblioteca

Também existem duas maneiras de adicionar uma biblioteca à Arduino IDE.

### 1. Adicionar biblioteca ZIP

Como você já baixou a biblioteca zip, abra sua Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**.

![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png)

Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. O que significa que a biblioteca foi instalada com sucesso.

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png)

### 2. Adicionar a pasta da biblioteca manualmente
Às vezes você não consegue adicionar uma biblioteca ZIP corretamente, porque a pasta raiz da biblioteca Zip não possui um arquivo .cpp ou .h, que o Arduino não consegue reconhecer. Então você pode descompactar o arquivo zip e copiar a pasta da biblioteca para o seguinte caminho **...\Arduino\libraries**. **....\** é o caminho em que você instalou o Arduino. No meu caso é **D:\Workwork\Software\Arduino\libraries**.

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png)

### Verificar
Então vamos verificar se a biblioteca foi instalada corretamente.

Quando você adiciona uma biblioteca com sucesso, haverá um demo em Example. Neste caso, clique em **File > Example > OLED_Display_96x96-master > OLED_Hello_World** para abrir um exemplo, clique no botão Verify, se não houver erro, parabéns, a biblioteca foi instalada perfeitamente. 


![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png)

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
