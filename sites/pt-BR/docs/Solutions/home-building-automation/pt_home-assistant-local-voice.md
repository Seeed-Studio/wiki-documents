---
description: Controle as luzes e os eletrodomésticos no Home Assistant por voz com reconhecimento de fala local — hardware, implantação, interfaces e dados medidos em um reComputer J40
title: Controle de Voz Local no Home Assistant — Seleção, Implantação e Dados Medidos
keywords:
  - voz local Home Assistant
  - assistente de voz Home Assistant
  - controle de voz para casa inteligente
  - reconhecimento de fala local
  - Wyoming
  - Home Assistant Voice
  - Zigbee
  - Jetson Orin NX
  - Qwen3-ASR
  - Matcha-TTS
image: https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg
slug: /solutions/home-assistant-local-voice
sidebar_position: 24
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/solutions/home-assistant-local-voice/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usar]
Comandos de voz em chinês e inglês. A integração oficial Xiaomi Home para Home Assistant é licenciada apenas para uso não comercial e não vem pré-instalada; não a utilize em projetos comerciais.
:::

## O que esta solução faz

Traga as luzes, cortinas, ar-condicionado e sensores Zigbee de uma casa para o Home Assistant e controle tudo com uma frase. Diga "ligar a luz da sala" e o Home Assistant executa localmente e responde que a luz está ligada. O reconhecimento e a síntese de fala rodam em um reComputer J40 local, então o áudio falado não é enviado para um serviço de fala em nuvem. Serve para salas e quartos, e para integradores de casas inteligentes que entregam sistemas nas casas dos clientes.

- Pacote de implantação (Docker Compose e modelo de configuração do Home Assistant): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/home_assistant_whole_home)
- Código-fonte do mecanismo de voz: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Seleção e implantação: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/home-assistant-local-voice-hub)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Nenhum áudio para a nuvem</h3>
                <p>Entender o comando e falar a resposta acontecem ambos no reComputer J40; o Home Assistant executa localmente.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Texto 0,12 s após a fala</h3>
                <p>Mediana em 5 comandos em chinês e inglês; veja "Desempenho e dados medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Integração nativa com Home Assistant</h3>
                <p>O serviço de voz entra no assistente de voz do Home Assistant por meio da integração Wyoming Protocol, sem alterações no Home Assistant.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Dispositivos Zigbee diretamente</h3>
                <p>Conecte um Connect ZBT-2 e sensores e interruptores Zigbee entram no Home Assistant sem gateways de marca.</p>
            </div>
        </li>
    </ul>
</div>

### Em um dispositivo real

Uma interação no assistente de voz do Home Assistant: o "ligar a luz da sala" falado (em chinês) é reconhecido pelo serviço de voz local, o Home Assistant executa e responde que a luz está ligada, e o cartão da luz da sala à direita acende.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg" alt="Assistente de voz do Home Assistant: ligar a luz da sala, a luz está ligada"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/dashboard-zh-20261008-53455231.jpg" alt="Dashboard do Home Assistant: luz da sala, cortinas, temperatura, umidade, ar-condicionado; luz do quarto e umidificador"/>
</div>

As luzes, cortinas, ar-condicionado e sensores nas capturas de tela são dispositivos de demonstração simulados; a entrada de voz foi sintetizada pelo mesmo reComputer J40, não gravada de uma pessoa.

## Hardware necessário

Quatro elementos no local: o host do Home Assistant, o host de voz, um coordenador Zigbee e um terminal de voz.

| Dispositivo | Função | Observações |
|---|---|---|
| Host ARM64 Linux (SO 64 bits, 8 GB de RAM) | Executa o Home Assistant | Um por casa |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> [reComputer J40 Series (J4012, Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | Reconhecimento e síntese de fala locais | Faz o download dos modelos de voz na primeira inicialização; mantenha pelo menos 30 GB de disco livre |
| Home Assistant Connect ZBT-2 | Integra dispositivos Zigbee | Conecta a uma porta USB do host do Home Assistant |
| Home Assistant Voice Preview Edition | Terminal de voz no cômodo: escuta e reproduz respostas | Um por cômodo |
| Sensores Zigbee SONOFF SNZB (opcional) | Temperatura, umidade e outros estados | Entram via ZBT-2 |

O host do Home Assistant, o reComputer J40 e os terminais de voz compartilham a mesma LAN. Para o app Casa da Apple, o iPhone deve estar na mesma LAN que o host do Home Assistant.

## Implantando no local

### 1. Posicione os dispositivos

:::tip[Mantenha o host de voz separado do Home Assistant]
O reComputer J40 executa apenas o serviço de voz, então ele pode ficar em um rack ou armário de rede e se comunicar com o Home Assistant pela LAN; coloque um terminal de voz em cada cômodo onde as pessoas falam.
:::

### 2. Instale o software: três etapas

As etapas por dispositivo estão na página de design de referência; aqui está o resumo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/home-assistant-local-voice-hub" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e implante 🖱️</font></span></strong>
    </a>
</div><br />

1. **Host do Home Assistant**: implante o Home Assistant com as frases de comando em chinês, inglês e japonês incluídas e o modelo de cômodos/dispositivos.
2. **Host de voz**: implante o serviço de voz no reComputer J40; ele baixa os modelos na primeira inicialização, depois o reconhecimento e a síntese rodam no dispositivo.
3. **Conecte e verifique**: adicione a integração Wyoming Protocol no Home Assistant apontando para as duas portas do reComputer J40, selecione-a como fala-para-texto e texto-para-fala do assistente, depois diga "ligar a luz da sala" para um terminal de voz e confirme que a luz acende.

## Interfaces

O serviço de voz é oferecido ao Home Assistant via Wyoming Protocol; toda a outra automação permanece no Home Assistant.

- **Home Assistant**: adicione a integração Wyoming Protocol; `seeed-local-voice` aparece como fala-para-texto e texto-para-fala no assistente de voz.
- **Apple Home / Siri**: a ponte HomeKit do Home Assistant sincroniza os dispositivos com o iPhone.
- **Seu próprio sistema**: leia e escreva estados de dispositivos pela própria API do Home Assistant.

| Porta | Máquina | Conteúdo |
|---|---|---|
| HTTP 8123 | Host do Home Assistant | Interface web e API do Home Assistant |
| TCP 10300 | reComputer J40 | Serviço de fala-para-texto (Wyoming) |
| TCP 10200 | reComputer J40 | Serviço de texto-para-fala (Wyoming) |

## Desempenho e dados medidos

### Fim a fim: da fala à ação

O Home Assistant rodou em um host ARM64 Linux com 8 GB de RAM e o serviço de voz em um reComputer J40 Series (Orin NX 16GB); a entrada foi fala sintetizada enviada ao assistente de voz do Home Assistant.

| Métrica | Resultado |
|---|---|
| Comandos de luz em chinês e inglês | 5/5 executados, todos tratados localmente pelo Home Assistant (medido) |
| Fim da fala até texto reconhecido | mediana 0,12 s, faixa 0,11–0,95 s (medido) |

Reproduzir: `sensecraft-solutions/solutions/home_assistant_whole_home` (pacote de implantação)

### Serviço de voz isolado

Mesmo reComputer J40 Series, serviço de voz chamado diretamente, fala sintetizada mono 16 kHz como entrada.

| Texto | Primeiro áudio de resposta | Reconhecido | Transcrição após o fim da fala |
|---|---:|---|---:|
| 打开客厅灯 (turn on the living room light) | 0.122 s (medido) | 打开客厅灯。 | 0.383 s (medido) |
| 关闭卧室的灯 (turn off the bedroom light) | 0.049 s (medido) | 关闭卧室的灯。 | 0.421 s (medido) |
| Turn on the living room light | 0.115 s (medido) | Turn on the living room light. | 0.579 s (medido) |

Pelo caminho Wyoming, duas amostras foram transcritas em 0,13 s (medido).

Reproduzir: `sensecraft-solutions/solutions/home_assistant_whole_home/assets/docker/docker-compose.jetson-voice.yml`

### Modelos e runtimes

| Dispositivo | Reconhecimento de fala | Síntese de fala | Runtime |
|---|---|---|---|
| reComputer J40 Series | Qwen3-ASR | Matcha-TTS | TensorRT-Edge-LLM / TensorRT |

Configurações que afetam os resultados:

- Idioma do assistente: chinês ou inglês, cada um com suas frases de comando incluídas.
- Nomes de dispositivos e cômodos: os comandos correspondem aos nomes no Home Assistant, então "luz da sala" deve corresponder ao nome da entidade.

### Degradações conhecidas

- **Divergência de alias e formulação de entidade**: A correspondência de intenções depende dos nomes e aliases das entidades. Se uma frase falada divergir significativamente do alias de entidade configurado no Home Assistant, o texto pode ser transcrito corretamente sem disparar uma automação.
- **Intenções compostas e sequenciais**: O pipeline é ajustado para controle residencial com uma única intenção; solicitações compostas (por exemplo, "ligar o ar-condicionado e fechar as persianas até a metade") devem ser emitidas como comandos separados.
- **Concorrência de voz em múltiplos clientes**: Um único host J4012 atende confortavelmente de 1 a 3 endpoints de satélites de voz; entradas de fala longas e simultâneas de vários cômodos podem causar um leve aumento no tempo até o primeiro token.

## Fontes de dados e recursos

- As capturas de tela vêm do Home Assistant 2026.9.3 (Licença Apache 2.0, [home-assistant.io](https://www.home-assistant.io)) com dispositivos simulados.
- A entrada de voz foi gerada pela mesma síntese de fala do reComputer J40; não foram usadas gravações humanas nem áudio de terceiros.
