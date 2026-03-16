---
description: Esta é uma FAQ sobre o uso de OTA ou atualizações incrementais que podem levar à instabilidade do sistema e riscos de segurança, portanto, é recomendável realizar atualizações completas de ROM para manter a segurança e a estabilidade do sistema, evitando atualizações parciais.
title: Atualizar pacotes de software para Jetson
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 2/11/2025
  author: Youjiang
createdAt: '2025-02-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/upgrade_software_packages_for_jetson/
---

#### Como posso atualizar os pacotes de software se você me disse que não posso executar apt upgrade? Haverá riscos de segurança se eu não atualizar o software?

R: Primeiro, é importante entender que **atualizações OTA (Over the Air)/incrementais/parciais** podem potencialmente prejudicar seu sistema operacional, pois permitem que os usuários atualizem apenas um subconjunto de pacotes. Essa abordagem pode levar a incompatibilidades de dependências, instabilidade do sistema e perda de patches de segurança, aumentando, em última análise, o risco de falhas de software ou vulnerabilidades. Além disso, gerenciar atualizações parciais geralmente requer intervenção manual, o que pode ser propenso a erros. Por outro lado, **ROM completa/atualizações completas** garantem que todos os pacotes e dependências sejam atualizados juntos, mantendo a compatibilidade e a estabilidade do sistema. Ao aplicar patches de segurança e correções de bugs em todo o sistema, as atualizações completas ajudam a manter o sistema seguro e consistente, reduzindo a probabilidade de conflitos. Embora as atualizações completas possam exigir mais tempo, elas são geralmente consideradas mais seguras e confiáveis a longo prazo. Para nossos dispositivos Jetson, lançamos JetPacks depois que a NVIDIA lança os deles (o mesmo se aplica a lançamentos de drivers e à montagem do seu próprio JetPack), o que garante um sistema mais estável e seguro em comparação com a atualização usando apt. Se você estiver preocupado com software desatualizado e quiser atualizar pacotes específicos, aqui estão algumas opções:

1. Se você tem certeza de que seu pacote de software não depende de pacotes do sistema, execute "sudo apt-get install `<Your_Package>`" para atualizar o pacote.
2. Para a maioria dos softwares de código aberto, baixe o arquivo-fonte e compile você mesmo.
3. Aguarde o novo lançamento do JetPack.


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


