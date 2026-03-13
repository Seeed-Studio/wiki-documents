---
description: A ventoinha não está ligando
title: A ventoinha não está ligando
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /Turn_on_the_Fan
last_update:
  date: 2023.6.25
  author: cheng.tang
createdAt: '2023-06-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Turn_on_the_Fan/
---

A ventoinha do ODYSSEY - X86J41x5 é controlada pelo controlador embarcado (EC), que tem o papel de inicializar o dispositivo antes de o sistema ser carregado. A temperatura no BIOS é detectada pelo EC e o sensor de temperatura fica próximo ao processador Intel, que não possui pino de sensor. Em outras palavras, a temperatura não é o valor direto da CPU, podendo ter um erro de cerca de 5 graus Celsius. O valor de temperatura que você vê no sistema é o retorno interno da CPU; já a temperatura exibida na tela do BIOS é o retorno do EC, e a ventoinha liga ou desliga de acordo com o valor medido pelo EC.

- O valor detectado pelo EC (tela do BIOS) e a tabela de velocidade da ventoinha são assim:

**Estado de ventoinha desativada**: parada

**Estado de ventoinha normal**: menos de 40°C – parada, 45-50°C – 50%, 50-60℃ – 60%, acima de 60℃ – 80%

**Estado de ventoinha positiva**: menos de 40°C – parada, 45-50°C – 70%, 50-60℃ – 80%, acima de 60℃ – 100%
