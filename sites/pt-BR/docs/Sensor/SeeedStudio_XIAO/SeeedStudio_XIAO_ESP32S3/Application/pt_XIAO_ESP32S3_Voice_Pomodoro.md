---
description: Construa um timer Pomodoro compacto com CircuitPython, controlado por voz, usando o Seeed Studio XIAO ESP32S3 Sense com um display LCD redondo.
title: Construa um Timer Pomodoro Ativado por Voz com XIAO ESP32S3 e CircuitPython
keywords:
  - XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_esp32s3_voice_pomodoro
last_update:
  date: 04/17/2025
  author: Peter Machona
createdAt: '2025-04-17'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_voice_pomodoro/
---

# Timer Pomodoro AskLou.io

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32s3_sense_pomodoro_timer/AskLou_01.png" style={{width:800, height:'auto'}}/></div>

> Um timer Pomodoro controlado por voz, construído com o Seeed Studio XIAO ESP32S3 Sense e o Round Display for XIAO. Mantenha-se produtivo com gerenciamento de tempo sem usar as mãos!

## Visão Geral do Projeto

O Timer Pomodoro AskLou.io é uma ferramenta de produtividade compacta, ativada por voz, que ajuda você a aplicar a popular Técnica Pomodoro para gerenciamento de tempo. Usando comandos de voz simples, você pode iniciar sessões de trabalho, fazer pausas e gerenciar sua produtividade sem tocar no computador ou no celular.

## Por que o Timer Pomodoro AskLou.io?

Timers Pomodoro tradicionais exigem interação manual, quebrando seu fluxo e sua concentração. O AskLou.io resolve esse problema com comandos de voz, permitindo que você gerencie seu tempo sem levantar um dedo. O elegante display circular fornece, de relance, o status da sua sessão atual, ajudando você a manter o foco e a produtividade.

## Recursos

- **Controle por voz**: Inicie e pause seu timer com comandos de voz simples
- **Múltiplos tipos de sessão**: Sessões de trabalho padrão (25 min), pausas curtas (5 min) e pausas longas (15 min)
- **Acompanhamento visual do progresso**: Um indicador de progresso circular e intuitivo mostra o tempo restante
- **Sem distrações**: Sem apps, sem notificações, apenas produtividade focada
- **Personalizável**: Fácil de modificar as durações das sessões para combinar com seu fluxo de trabalho
- **Baixo consumo de energia**: Projetado para uso o dia todo na sua mesa
- **Funcionamento independente**: Nenhum smartphone ou computador é necessário depois da configuração

## Hardware

### Componentes Necessários

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)
- [Seeed Studio Round Display for XIAO (1.28" 240x240 GC9A01 LCD)](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Cabo USB-C para alimentação
- Opcional: Case impresso em 3D (arquivos incluídos no projeto)

### Por que Escolhemos Este Hardware

O XIAO ESP32S3 Sense inclui um microfone onboard, o que o torna perfeito para aplicações de controle por voz. Seu formato compacto, combinado com o impressionante display redondo, cria um companheiro elegante para a mesa que não distrai da estética do seu espaço de trabalho.

## Processo de Construção

### 1. Montagem de Hardware

- Conecte o Round Display à placa XIAO ESP32S3 Sense
- O display se conecta diretamente aos pinos do XIAO – sem necessidade de solda!
- Opcional: Instale em um case impresso em 3D para um acabamento profissional

### 2. Configuração de Software

**Configurar o CircuitPython**

- Baixe o CircuitPython 8.x ou mais recente em [CircuitPython.org](https://circuitpython.org/)
- Coloque sua placa em modo bootloader (clique duas vezes no botão de reset)
- Arraste e solte o arquivo UF2 do CircuitPython na unidade da placa

**Instalar as Bibliotecas Necessárias**

- Baixe estas bibliotecas do [CircuitPython bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases):
  - adafruit_display_text
  - adafruit_display_shapes
  - gc9a01.mpy
  - analogio (para funcionalidade do microfone)
- Copie-as para a pasta lib no seu dispositivo CircuitPython.

### 3. Implantação do Código

Basta copiar o arquivo code.py deste [repositório](https://github.com/AskLou-io/Pomodoro_Circuit_Python) para o seu dispositivo CircuitPython, e o timer começará a rodar automaticamente!

## Como Funciona

- **Detecção de voz**: O microfone onboard escuta sons acima de um certo limite
- **Simulação de comandos**: Para a versão de demonstração, os comandos percorrem uma lista predefinida
- **Lógica do timer**: Acompanha sessões de trabalho, pausas curtas e pausas longas
- **Feedback visual**: O display circular mostra o tipo de sessão e o tempo restante
- **Indicador de progresso**: Um arco iluminado mostra o progresso da sessão atual

O Timer Pomodoro AskLou.io responde a estes comandos de voz:

- "Start timer" - Inicia uma sessão de trabalho de 25 minutos
- "Pause timer" - Pausa a sessão atual
- "Start short break" - Inicia uma pausa de 5 minutos
- "Start long break" - Inicia uma pausa de 15 minutos

## Opções de Personalização

Você pode personalizar seu Timer Pomodoro AskLou.io de várias maneiras:

- **Durações das sessões**: Modifique o dicionário session_durations para alterar a duração de trabalho ou das pausas
- **Sensibilidade de voz**: Ajuste o valor LOUD_THRESHOLD com base no seu ambiente
- **Tema visual**: Altere as cores do arco para diferentes tipos de sessão
- **Palavras de comando**: Atualize a lista voice_commands para usar frases diferentes

## Melhorias Futuras

Possíveis melhorias para versões futuras:

- Reconhecimento de voz aprimorado para detecção de comandos mais confiável
- Feedback háptico ou de áudio quando as sessões terminam
- Conectividade com apps de produtividade para registro das sessões
- Pequeno alto-falante para notificações de áudio
- Alimentação por bateria para portabilidade

## Recursos

- [Repositório GitHub](https://github.com/AskLou-io/Pomodoro_Circuit_Python/blob/main/README.md)
- [Projeto no Hackster.io](https://www.hackster.io/peter-machona/asklou-io-pomodoro-timer-a7a1f2)
- [Documentação do XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/)
- [Documentação do Round Display](https://wiki.seeedstudio.com/pt-br/get_start_round_display/)

## Créditos

- Plataforma de hardware por Seeed Studio
- Técnica Pomodoro por Francesco Cirillo
- [Projeto por Peter Machona](https://github.com/AskLou-io/Pomodoro_Circuit_Python)

## Licença

Este projeto é lançado sob a licença Creative Commons Attribution-NonCommercial (CC BY-NC). Isso significa que você é livre para:

- **Compartilhar** — copiar e redistribuir o material em qualquer suporte ou formato
- **Adaptar** — remixar, transformar e criar a partir do material

Sob as seguintes condições:

- **Atribuição** — Você deve dar o devido crédito, fornecer um link para a licença e indicar se foram feitas alterações. Você pode fazer isso de qualquer forma razoável, mas não de maneira que sugira que o licenciador endossa você ou o seu uso.
- **NãoComercial** — Você não pode usar o material para fins comerciais.

---

Timer Pomodoro AskLou.io - Produtividade focada, é só pedir.

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo [Projeto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Peter Machona](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92639112&issue=Seeed-Studio%7Cwiki-documents%7C2074) por seus esforços dedicados. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

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
