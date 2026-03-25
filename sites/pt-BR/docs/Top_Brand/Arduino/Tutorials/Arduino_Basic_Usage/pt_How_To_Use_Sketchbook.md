---
description: Como Usar o Sketchbook
title: Como Usar o Sketchbook
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_To_Use_Sketchbook
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/How_To_Use_Sketchbook/
---

Em outro documento, fizemos uma introdução detalhada sobre Library e sabemos que Library é realmente muito fácil de usar! Baixe uma Library, coloque-a no diretório de bibliotecas do Arduino, abra o exemplo e pronto.

No entanto, às vezes encontramos este problema: você fez um demo interessante, esse demo precisa conter algumas bibliotecas e você gostaria de compartilhar esse demo, então precisa enviar o código para algumas pessoas, mas muitas vezes ocorre um erro de compilação: falta uma determinada biblioteca. Então você precisa enviar a biblioteca para essa pessoa. Se o seu demo precisar de muitas bibliotecas, isso trará muito mais problemas.

Na verdade, o Arduino tem um Sketchbook que pode ser uma boa solução para esse problema. Sketchbook é, na verdade, uma pasta que você pode colocar em qualquer lugar. Aqui vamos fazer um teste usando Sketchbook.

Eu escrevi um Sketchbook, você pode baixá-lo [aqui](https://github.com/loovee/NFC_ShieldBot_Demo),
Ignore o conteúdo; o nosso objetivo é familiarizar você com Sketchbook. Depois de baixar, colocamos no drive F.

Abra a Arduino IDE, clique em File-&gt; Preferences, clique na tela que aparece:

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook1.jpg)

Aponte a localização do Sketchbook para o diretório onde está o código baixado. E clique em OK para concluir a operação. Feche e reabra a Arduino IDE.

Abra File -&gt; Sketchbook, você pode ver muitos itens aparecendo, como demo, shield_bot e assim por diante. Clicamos em demo, então você pode abri-lo, e agora você pode ver o código do demo. Você pode perceber que esse demo contém muitas bibliotecas que você não tinha visto antes. Em seguida, clicamos no botão de compilação; a compilação é concluída sem erros, algo estranho? Na verdade, você talvez já tenha notado que há uma pasta chamada libraries em NFC_Shieldbot_Demo, sim, as bibliotecas estão aqui.

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook2.jpg)

Assim, quando você quiser fazer um demo, pode tentar criar um Sketchbook e colocar as bibliotecas necessárias na pasta libraries do Sketchbook. Exatamente como o Sketchbook que você baixou há alguns minutos:

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook3.jpg)

###   Recursos

- [baixar arquivo pdf](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/res/How_to_use_Sketchbook.pdf)

## Suporte Técnico & Discussão de Produtos
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
