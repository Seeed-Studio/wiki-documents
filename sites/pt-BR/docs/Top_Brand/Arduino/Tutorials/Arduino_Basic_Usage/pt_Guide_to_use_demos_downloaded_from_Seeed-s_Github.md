---
description: Guia para usar demos baixados do Github da Seeed
title: Usar demos do Github da Seeed Studio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Guide_to_use_demos_downloaded_from_Seeed-s_Github
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Guide_to_use_demos_downloaded_from_Seeed-s_Github/
---

É necessário usar demos do Github do Seeeduino com frequência e há alguma pequena dificuldade para um iniciante rodar o demo corretamente.
Portanto, queremos mostrar a você um procedimento planejado para executar os demos rapidamente.

## Primeiros passos

1. Você pode baixar o código de exemplo e a biblioteca ou arquivos de cabeçalho nos sites do [Github da Seeed](https://github.com/Seeed-Studio).

2. Clique no botão chamado "Download Zip" no Github.

3. Descompacte o arquivo ZIP baixado.

4. Remova o "-master" duas vezes no nome do arquivo descompactado.

5. Copie a pasta do arquivo descompactado _xxx_ para a sua pasta de bibliotecas (por padrão, ela é a mesma que a Localização do Sketchbook, que pode ser encontrada clicando em File &gt; Preference).

6. No Windows, provavelmente será chamada "My Documents\Arduino\libraries". Para usuários de Mac, provavelmente será chamada "Documents/Arduino/libraries". No Linux, será a pasta "libraries" no seu sketchbook.

7. Adicione a biblioteca ZIP pelo arquivo ZIP baixado (com o "-master" removido antes).

![](https://files.seeedstudio.com/wiki/Guide_to_use_demos_downloaded_from_Seeed-s_Github/img/Add_ZIP_library.png)

8. Abra o arquivo _**.ino**_ no subdiretório _**example**_
9. Compile ou envie os demos para a sua placa controladora principal.

**Dicas:** Sempre compacte um arquivo de biblioteca (arquivo de cabeçalho na maioria das circunstâncias) no formato **zip** se o Arduino informar que não consegue encontrar um arquivo _foo.h_.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
