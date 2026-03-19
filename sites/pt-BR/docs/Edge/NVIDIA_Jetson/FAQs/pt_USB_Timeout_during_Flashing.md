---
description: Liste as possíveis causas de problemas de tempo limite durante o processo de gravação do Jetson.
title: Problema de Timeout durante a Gravação do Jetpack
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /usb_timeout_during_flash
last_update:
  date: 1/22/2025
  author: Youjiang
createdAt: '2025-01-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/usb_timeout_during_flash/
---

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

Há várias razões que podem causar um problema de timeout durante o processo de gravação do dispositivo Jetson via linha de comando:

1. **Anomalias no PC host Ubuntu usado para gravação:** Um exemplo típico é a gravação por meio de uma máquina virtual Ubuntu. Devido a problemas de estabilidade de USB em máquinas virtuais, timeouts ocorrem com frequência.
2. **Fornecimento de energia insuficiente pelo adaptador de energia DC:** A saída de energia precisa atender aos requisitos do dispositivo Jetson. Você pode verificar esse parâmetro na página de detalhes do produto no Seeed Bazaar.
3. **Problemas de qualidade com o cabo Type-C:** Embora a gravação possa ser feita via USB 2.0, a qualidade do cabo afeta a estabilidade do processo. Com base na experiência prática, dois pontos-chave para o cabo são: (a) ele deve suportar pelo menos comunicação USB 2.0, e (b) o comprimento do cabo deve ser menor que 1,5 m.
4. **Evite usar hubs USB:** Alguns hubs USB podem afetar a estabilidade da transmissão de dados durante o processo de gravação.
5. **Seleção incorreta do pacote de gravação:** Verifique se o pacote de gravação correto foi selecionado e reinicie o script de gravação.

Verifique os problemas mencionados acima e tente reiniciar o script de gravação.

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
