---
description: A partir dos recursos USB do SoC Jetson, do diagrama esquemático do Hub USB da placa carrier até a topologia do `lsusb -t` no Linux, explicar por que dispositivos USB 3.0 às vezes só funcionam em USB 2.0 (480M) e como fazer troubleshooting camada por camada ao longo do link SuperSpeed.
title: USB no Jetson
keywords:
  - jetson
  - usb
  - usb3
  - usb2
  - 480M
  - super speed
  - lsusb
  - carrier board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_usb
last_update:
  date: 11/02/2026
  author: youjiang
---

Neste artigo, vamos falar sobre um problema muito comum e fácil de errar no Jetson: **USB.**

Por exemplo, você conecta uma câmera USB 3.0, mas depois de executar `lsusb -t`, descobre que a velocidade é apenas `480M`. Em outras palavras, esse dispositivo que suporta nativamente USB 3.0 está na verdade funcionando apenas em USB 2.0 no Jetson. Nesse ponto, a primeira reação de muitas pessoas é: o driver USB 3.0 não está funcionando? Mas as coisas geralmente não são tão simples. Porque, do SoC Jetson até o dispositivo USB na sua mão, na verdade há bastante coisa no meio do caminho.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/usb_data_path.png"/></div>

Um problema em qualquer uma dessas camadas pode fazer com que um dispositivo USB 3.x acabe funcionando apenas em USB 2.0.

Portanto, neste artigo, em vez de apenas explicar “por que vira 480M”, quero usar esse problema para conectar **como o USB funciona no Jetson, como a Carrier Board traz o USB para fora e como o Linux enxerga esses dispositivos.**

No conteúdo a seguir, vamos tomar o **reComputer Classic J4012** como exemplo e dissecar passo a passo a lógica subjacente do USB no Jetson. Acredito que você vai aprender bastante com isso! Primeiro, deixe-me acalmar duas preocupações:

1. Se o seu dispositivo Jetson for de outro modelo, isso não vai afetar a leitura do conteúdo a seguir. O ponto-chave é a abordagem de análise quando ocorre um problema, não o hardware.
2. Se você não estiver familiarizado com conceitos como `lsusb -t`, Hub USB ou UPHY, não se preocupe — vamos destrinchá-los passo a passo junto com logs reais mais adiante.

Boa leitura.

---

## Quanto de USB o Jetson Orin NX realmente tem?

Vamos começar com as especificações do módulo NVIDIA Jetson. Cada módulo tem recursos fixos, que normalmente chamamos de interfaces nativas.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/jetson_modules.png"/></div>

Fonte da imagem: https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/

Para o Jetson Orin Nano e Jetson Orin NX, a NVIDIA fornece 3x USB 3.2 Gen2 e 3x USB 2.0. Você pode encontrar a descrição detalhada no site da NVIDIA. Ao ver isso, é fácil criar um mal-entendido:

```text
[3 × USB3] + [3 × USB2] = 6 USB Connectors?
```

Na verdade, não. O que está descrito aqui é:

> **Os recursos subjacentes de Interface / PHY USB fornecidos pelo módulo Jetson.**

Se eles acabam se tornando várias portas Type-A, várias portas Type-C ou são conectados a um Hub, M.2 ou dispositivos onboard é decidido pela Carrier Board.

Em outras palavras, o módulo Jetson fornece os recursos USB; a Carrier Board decide como esses recursos são usados; e só então eles se tornam as portas que vemos.

## Como o reComputer Classic J401 usa essas portas USB?

No datasheet do J401, a placa fornece ao usuário, em última análise, 4x USB 3.2 Type-A e 1x USB 2.0 Type-C. A porta Type-C funciona em modo Device e é usada principalmente para gravar o sistema; as quatro portas Type-A funcionam em modo Host para conectar dispositivos periféricos.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_ports.png"/></div>

Mas aqui há uma questão muito interessante: o Orin NX tem apenas 3 portas USB3 nativas, então por que o J401 tem 4 portas USB3 Type-A?

A resposta já é dada no [esquemático](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf) open source da placa: **um Hub USB.**

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_blockdiagram.png"/></div>

A carrier board expande um canal USB3.2 em quatro portas USB 3.2 Type-A. Olhando mais a fundo no esquemático, você pode ver que esse Hub é um `VL822-Q7`.

Observe que, embora todas as quatro portas suportem 10 Gbps, elas acabam compartilhando o **uplink do Hub para o Jetson**. Em outras palavras, as quatro portas USB compartilham um total de 10 Gbps de largura de banda.

---

## Portas USB3 ainda contêm USB2

Se você olhar apenas para a aparência, USB 2.0 Type-A e USB 3.x Type-A são quase idênticos, e dispositivos USB3 também podem ser conectados diretamente em portas USB2.

Por isso é fácil ter a intuição de que o USB3 simplesmente atualiza a velocidade do USB2 de 480 Mbps para 5 Gbps ou 10 Gbps.

Mas não é bem assim. Para permanecer compatível com USB2, o USB3 não simplesmente “atualiza” os sinais originais do USB2. Em vez disso, além de manter a fiação USB2, ele adiciona um conjunto separado de sinais de alta velocidade dedicados ao SuperSpeed.

Uma porta USB2 Type-A geralmente tem 4 fios: VBUS, D+, D- e GND. Uma porta USB3 Type-A adiciona sinais SuperSpeed extras em cima desses pinos: SSTX+ / SSTX- e SSRX+ / SSRX-.

Portanto, embora USB2 e USB3 Type-A sejam **fisicamente compatíveis**, os sinais realmente usados internamente não são exatamente os mesmos.

Você pode simplesmente entender assim:

```text
              USB 3.x Type-A Connector
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
       USB 2.0                       USB 3.x
      Original pins               New high-speed pins
          │                             │
       D+ / D-                     SSTX / SSRX
          │                             │
      USB2 PHY                        UPHY
          │                             │
        480M                         5G / 10G
```

Em outras palavras, uma porta USB3 Type-A na verdade contém dois caminhos de dados ao mesmo tempo. O maior benefício desse projeto é a **retrocompatibilidade**.

Isso também explica um fenômeno muito importante: **mesmo que o link SuperSpeed de um dispositivo USB3 tenha problema, ele ainda pode ser reconhecido pelo sistema através dos pinos USB2 D+ / D-. Em muitos casos, ser utilizável não significa que esteja funcionando normalmente.**

Vamos voltar ao esquemático da carrier board. O VL822-Q7 possui tanto HSD0+/HSD0- quanto SSTX0+/SSTX0- e SSRX0+/SSRX0-. Aqui, HSD corresponde ao canal USB2 High-Speed, enquanto SSTX / SSRX correspondem ao canal USB SuperSpeed.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/vl822_schematic.png"/></div>

Portanto, a arquitetura USB real do J401 é na verdade mais próxima de:

```text
                     Jetson Orin NX

                USB2                USB3
                  │                   │
                D+/D-             TX / RX
                  │                   │
                  └────────┬──────────┘
                           ↓
                        VL822-Q7
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
           USB2 Path                USB3 Path
              │                         │
           HSD1~4                 SSTX/SSRX 1~4
              │                         │
              └────────────┬────────────┘
                           ↓
                      4 × USB-A
```

Em outras palavras: **atrás de cada porta USB3 Type-A no J401, existem tanto um caminho USB2 quanto um caminho SuperSpeed.** Esse ponto é muito importante para a análise de falhas mais adiante.

---

## Como o Linux enxerga esses dispositivos USB?

Depois de analisar o circuito, vamos voltar ao Linux e ver como o sistema enxerga, em última instância, esses dispositivos USB.

Primeiro, um comando complementar: ao fazer troubleshooting de USB no Linux, um comando muito usado é `lsusb -t`. Ele pode mostrar diretamente:

```text
USB Topology
Hub
Driver
Interface
Link Speed
```

As velocidades mais comuns podem ser entendidas da seguinte forma:

| Exibição do lsusb -t | Link USB correspondente |
|---|---|
| 1.5M | Low-Speed |
| 12M | Full-Speed |
| 480M | USB 2.0 High-Speed |
| 5000M | USB 3.x SuperSpeed 5 Gbps |
| 10000M | USB 3.x SuperSpeed 10 Gbps |

Observação:

> **O que é mostrado aqui é a velocidade do link USB, não a taxa real de transferência de dados do dispositivo.**

Por exemplo, `5000M` significa que esse link USB está funcionando em modo SuperSpeed de 5 Gbps; não significa que a câmera consiga realmente manter 5000 Mbps de dados efetivos.

No meu reComputer Classic J4012, conectei uma câmera Orbbec que suporta USB 3.0 e executei o comando `lsusb -t`, que retornou as informações mostradas na figura abaixo.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_camera.png"/></div>

Aqui você pode ver claramente dois barramentos, correspondendo às duas topologias lógicas do Root Hub USB2 e do Root Hub SuperSpeed.

Vamos analisar a saída do terminal juntos.

```text
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=tegra-xusb/4p, 10000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 10000M
        |__ Port 3: Dev 3, If 0, Class=Video, Driver=uvcvideo, 5000M
        |__ Port 3: Dev 3, If 1, Class=Video, Driver=uvcvideo, 5000M
        ...
```

Não se preocupe com as muitas linhas `If 0 / If 1 / If 2` por enquanto; vamos olhar apenas para as três camadas principais:

```text
Jetson XUSB Root Hub
       10000M
          ↓
   J401 VL822 Hub
       10000M
          ↓
    Orbbec Camera
        5000M
```

Isso na verdade corresponde exatamente ao esquemático que analisamos anteriormente.

```text
Driver=tegra-xusb/4p, 10000M
```

Aqui, `tegra-xusb` é o driver do USB Host Controller do Jetson. E `10000M` significa que o Root Hub desse lado suporta SuperSpeed de 10 Gbps.

```text
Class=Hub, Driver=hub/4p, 10000M
```

Esse Hub corresponde ao `VL822-Q7` que vimos anteriormente no esquemático do J401. Ele também mostra `10000M`, o que significa que **o uplink SuperSpeed entre o Jetson e o Hub VL822 foi estabelecido normalmente.**

```text
Class=Video, Driver=uvcvideo, 5000M
```

Você pode ver que a Link Speed atual da câmera é `5000M`, o que significa que esta câmera Orbbec estabeleceu com sucesso um link SuperSpeed de 5 Gbps.

Então a cadeia completa pode ser desenhada como:

```text
Jetson XUSB
   │
   │ 10000M
   ↓
J401 VL822 Hub
   │
   │ 5000M
   ↓
Orbbec Camera
```

Aqui alguém pode perguntar: o Hub é claramente `10000M`, então por que a câmera é apenas `5000M`?

Isso é completamente normal. Porque `10000M` descreve a capacidade do segmento **Jetson ↔ Hub**, enquanto `5000M` descreve a velocidade negociada no segmento **Hub ↔ Camera**. Segmentos diferentes podem absolutamente operar em velocidades diferentes.

---

## Por que a mesma câmera mostra tantas linhas?

Vou aproveitar esta oportunidade para explicar um problema facilmente mal compreendido. Eu conectei apenas uma câmera, então por que há várias linhas de informação?

No log, `Dev 3` aparece muitas vezes. Isso não significa que 8 dispositivos USB estejam conectados. Significa: **o mesmo dispositivo USB composto expôs múltiplas interfaces USB.** Minha câmera de profundidade tem muitas funções, e cada função utilizável de forma independente possui uma Interface. O Linux vincula o Driver correspondente a cada uma dessas Interfaces. Portanto, `Dev` pode ser entendido como um dispositivo USB, enquanto `If` representa as diferentes Interfaces dentro desse dispositivo.

---

## Agora vamos olhar para o barramento de 480M

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_480m.png"/></div>

Observe que há mais abaixo:

```bash
Port 3: Dev 3, If 0, Class=Wireless, Driver=btusb, 12M
```

Este é um dispositivo Bluetooth. Mas eu não conectei nenhum dispositivo Bluetooth à minha porta USB Type-A, então como o Linux descobriu este dispositivo? Logo no início, quando olhamos o esquema da placa carrier, aprendemos que o USB2_D está conectado ao slot M.2 Key E. O `btusb` que aparece aqui está na verdade conectado na interface M.2.

## Abordagem de solução de problemas: quando um dispositivo USB3 se torna USB2

Agora finalmente podemos responder à pergunta do início. Do ponto de vista de solução de problemas, um entendimento mais preciso de “um dispositivo USB3 rebaixado para USB2” é: **o link USB2 está normal, mas o link SuperSpeed não foi estabelecido.** Portanto, se um dispositivo que nativamente suporta USB3 só mostrar `480M` em `lsusb -t`, você deve rastrear de volta ao longo da cadeia de comunicação USB. Para o meu cenário de teste atual, se você vir:

```text
Hub      10000M
Camera    480M
```

isso significa que o link SuperSpeed `Jetson → VL822` está normal. Então o problema é mais provável estar em:

```text
VL822 Downstream Port --> USB Connector --> Cable --> Camera
```

Neste ponto, as prioridades devem ser:

- Verificar se há um HUB externo e se o HUB externo suporta USB3.x
- Tentar outra porta USB Type-A para descartar uma única porta USB Type-A com defeito
- Verificar se o cabo de dados em uso suporta USB3.x
- Tentar outro dispositivo USB3 conhecido como bom para descartar um problema com o próprio dispositivo USB
- ...

Por outro lado, se até mesmo o `Hub 10000M` sumiu e você só consegue ver o `Hub 480M` USB2, então o problema está mais próximo da parte upstream:

```text
Jetson --> UPHY --> Carrier Board
```

Nesse caso, você precisa verificar:

- Se o sistema gravado é aquele fornecido pelo fabricante do dispositivo
- Se você compilou o firmware por conta própria, verifique se a configuração UPHY, Device Tree e outros arquivos de configuração estão corretos
- Se o projeto da placa carrier é razoável e o cabeamento do HUB USB está normal
- ...

---

## Conclusão

Por fim, deixe-me resumir rapidamente o conteúdo central deste artigo. Quando um dispositivo USB3 só mostra 480M, geralmente não é que “todo o USB esteja quebrado”, mas que o link USB2 está normal enquanto o link SuperSpeed não foi estabelecido. Ao solucionar problemas, primeiro use `lsusb -t` para determinar até onde o link SuperSpeed foi estabelecido com sucesso e, em seguida, reduza o escopo camada por camada ao longo do cabo, Hub, placa carrier, UPHY e BSP.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
