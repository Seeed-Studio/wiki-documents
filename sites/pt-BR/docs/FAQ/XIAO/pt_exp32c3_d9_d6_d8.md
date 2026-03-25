---
description: XIAOESP32C3-FAQ
title: Observações sobre a alocação de IO do XIAO ESP32C3
slug: /exp32c3_d9_d6_d8
last_update:
  date: 6/28/2023
  author: cheng.tang
createdAt: '2023-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/exp32c3_d9_d6_d8/
---


O ESP32C3 possui múltiplos modos de boot, e qual modo iniciar na energização é controlado por GPIO2, GPIO8 e GPIO9. Por exemplo, quando GPIO2=0, GPIO8=0 e GPIO9=0, o C3 entrará no modo UART_BOOT.
O XIAO esp32c3 apenas puxa o GPIO9 para nível alto e adiciona um botão para controlá‑lo. GPIO8 e GPIO2 não são puxados nem para alto nem para baixo, o que fará com que os usuários entrem no modo UART_BOOT em alguns cenários especiais de uso, resultando em usuários que não conseguem carregar programas.

### D9

O D9 do XIAO ESP32C3 é conectado ao GPIO9 (15) do ESP32-C3, ao resistor de pull‑up (R6) e ao botão BOOT. O botão BOOT (e o botão RESET) permite alternar manualmente o Boot Mode do ESP32-C3.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

Ao pressionar o botão BOOT, o D9 é conectado ao GND. **Portanto, é melhor usar o D9 como uma entrada de chave**.

### D6

O D6 do XIAO ESP32C3 é conectado ao U0TXD (28) do ESP32-C3. O status de operação do bootloader de 1º/2º estágio é enviado como texto para U0TXD.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

O D6 é configurado como uma saída UART na inicialização, portanto, se você usar o D6 como entrada, pode gerar acidentalmente uma corrente alta. **Portanto, é recomendável usar o pino D6 apenas no modo de saída**.

No entanto, como esse D6 é uma saída UART, você precisa ter cuidado com algumas coisas: uma é que ele fica em nível ALTO em modo de espera quando não está se comunicando. A outra é a saída de texto do bootloader de 1º/2º estágio. O sinal oscila entre ALTO/BAIXO imediatamente após a inicialização e deve ser compensado se necessário.

Portanto, tente não usar o D6. (Claro, não há problema em usá‑lo depois que você o compreender.)

### D8

O D8 do Seeed Studio XIAO ESP32C3 é conectado ao GPIO8 (14) do ESP32-C3.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

O GPIO8 é referenciado quando o modo de boot é definido como download boot mantendo pressionado o botão BOOT, e deve estar em nível ALTO nesse momento. ([Aqui](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) é dito: "A combinação de configuração GPIO8 = 0 e GPIO9 = 0 é inválida e acionará um comportamento inesperado.")

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

Se você usar o download boot, **adicione um resistor de pull‑up para colocar o GPIO8 em nível ALTO no momento do boot**.

Agradecimentos especiais ao colega da SeeedJP **matsujirushi** pelos testes e contribuição para esta seção. Aqui está o link de referência para o artigo original.

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)
