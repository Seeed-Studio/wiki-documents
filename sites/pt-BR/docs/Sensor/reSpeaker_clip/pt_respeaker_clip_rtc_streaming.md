---
description: 'Transmita áudio Opus ao vivo do reSpeaker Clip via BLE com o RTC SDK: execute o demo de FFT, entenda o estabelecimento de sessão, escreva um receptor mínimo e decodifique áudio em tempo real.'
title: Construa Streaming de Áudio em Tempo Real com reSpeaker Clip RTC SDK
keywords:
  - reSpeaker clip
  - rtc streaming
  - real-time audio
  - live audio streaming
  - opus
  - ble
  - fft spectrum
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 11/20/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_rtc_streaming/
---

# Construa Streaming de Áudio em Tempo Real com reSpeaker Clip RTC SDK

Este tutorial ensina como receber áudio ao vivo de um reSpeaker Clip enquanto ele está sendo capturado, em vez de gravar primeiro e baixar depois. Você executará um demo de espectro FFT em tempo real, entenderá como uma sessão RTC é estabelecida, escreverá você mesmo uma aplicação mínima de streaming e aprenderá como os dados de áudio realmente se parecem no host.

> **Aqui, RTC se refere ao streaming de áudio em tempo real do reSpeaker Clip, não ao WebRTC.** Não há navegador, nem SDP, nem ICE — apenas um Clip produzindo quadros Opus e uma aplicação Python os consumindo via BLE.

## 1. Introdução

### 1.1 O que é RTC Streaming no reSpeaker Clip?

A gravação normal escreve o áudio no cartão SD e você o baixa depois. O streaming RTC ignora completamente o cartão SD: o áudio codificado é enviado para o seu host à medida que é produzido.

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

A diferença importa sempre que o "agora" importa: visores de espectro ao vivo, ASR em streaming, detecção de atividade de voz, pipelines de palavra de ativação ou um assistente de voz que precisa reagir enquanto o usuário ainda está falando.

### 1.2 O que você vai aprender

Depois de concluir este tutorial você será capaz de:

- conectar a um reSpeaker Clip com o SDK em Python;
- criar uma sessão RTC e receber pacotes Opus ao vivo;
- explicar todo o ciclo de vida de um stream RTC;
- executar o demo de FFT e ler sua saída;
- construir sua própria aplicação em tempo real em cima do RTC SDK.

## 2. Como o RTC Streaming funciona

### 2.1 Arquitetura do RTC Streaming

O caminho do áudio no modo RTC é um pipeline direto do microfone até a sua aplicação:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="Arquitetura de RTC streaming: microfone passando por DSP e codificador Opus até BLE e o SDK em Python" width={900} height="auto" /></p>

No modo RTC o áudio é produzido em tempo real, nunca toca o cartão SD, e o host pode processá-lo enquanto ele chega. Nada espera uma gravação terminar, porque não existe arquivo de gravação.

### 2.2 Ciclo de vida de uma sessão RTC

Um stream RTC é estabelecido em duas etapas, depois flui até que você o pare:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_session_lifecycle.png" alt="Diagrama de sequência do ciclo de vida da sessão RTC entre o app em Python e o reSpeaker Clip" width={900} height="auto" /></p>

As duas chamadas se encaixam em um modelo mental simples:

```text
start_rtc()   =  start producing audio
stream_rtc()  =  start receiving audio
```

Depois de `start_rtc()` o dispositivo executa o pipeline do microfone, mas ainda não envia nada para você. Depois de `stream_rtc()` o dispositivo começa a enviar quadros `STREAM_DATA` — um pacote Opus por quadro — até que `stop_recording()` encerre a sessão com `STREAM_END`.

### 2.3 Por que o RTC usa uma sessão?

`start_rtc()` cria uma sessão de áudio em tempo real e retorna seu ID de sessão. `stream_rtc(session, receiver)` então diz ao dispositivo: o host agora quer consumir o áudio ao vivo desta sessão. Concretamente, ele emite `AT+DOWNLOAD=<session>`, e o firmware descarta tudo o que estava enfileirado antes daquele momento — RTC entrega o "agora", então o áudio produzido antes de você se inscrever nunca é enviado.

Esta é a diferença fundamental em relação ao download de arquivo: não pense em uma sessão RTC como um arquivo que cresce no dispositivo. É uma fonte ao vivo à qual você se conecta, e qualquer coisa que você perder antes de se conectar é perdida por projeto.

## 3. Preparar o RTC SDK

### 3.1 Requisitos

- um reSpeaker Clip;
- firmware **v0.1.5 ou posterior**, a primeira versão oficial com `AT+START=rtc` (verifique com `AT+VERSION` ou `clip.firmware_version()`; se o seu Clip estiver executando uma build anterior, atualize-o com o [Guia de Atualização de Firmware](/pt-br/respeaker_clip#guia-de-atualização-de-firmware));
- Python 3.10+;
- um ambiente BLE funcional no host;
- o SDK em Python do reSpeaker Clip obtido do repositório oficial [`Seeed-Studio/reSpeaker_Clip`](https://github.com/Seeed-Studio/reSpeaker_Clip).

### 3.2 Instalar o SDK

O streaming RTC é fornecido na versão oficial v0.1.5. Clone o repositório oficial, faça checkout dessa tag e instale o SDK com os extras de BLE e exemplos:

```bash
git clone https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout v0.1.5

cd sdk
python -m pip install -e '.[ble,examples]'
```

A tag fixa a versão alvo deste tutorial; `main` acompanha a mesma API de RTC e recebe correções posteriores.

Os dois extras são importantes para este tutorial:

- `ble` instala o transporte BLE (Bleak);
- `examples` instala as dependências de que o demo de FFT precisa (decodificador Opus e NumPy).

O streaming RTC ao vivo é apenas via BLE nesta versão: ele é transportado nas notificações de dados de arquivo BLE, não sobre o transporte Wi-Fi/UDP.

## 4. Executar o Demo de FFT do RTC

Esta seção é o seu verdadeiro ponto de entrada: execute o demo primeiro, entenda-o por último.

### 4.1 Iniciar o Demo

A partir do diretório `sdk` onde a etapa de instalação o deixou, execute o exemplo usando o endereço do seu dispositivo:

```bash
python examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

Omitir `--address` faz uma varredura automática por um dispositivo BLE chamado "Clip", e omitir `--duration` faz o streaming até Ctrl-C:

```bash
python examples/demo_stream_fft_display.py
```

Se você só quiser provar que o firmware lançado faz streaming antes de ler qualquer código, o SDK também instala `clip.stream`, que captura os mesmos quadros ao vivo em `rtc-<session>.bin` e imprime diagnósticos do stream:

```bash
clip.stream --transport ble --address AA:BB:CC:DD:EE:FF --duration 10
```

O demo também aceita `--depth-frames` para alterar a profundidade do buffer de jitter (padrão 5 quadros; `0` desativa o buffer).

### 4.2 O que acontece quando o Demo inicia?

Fale em direção ao Clip enquanto o demo estiver em execução. O terminal mostra um espectro Unicode ao vivo que se move com a sua voz, construído a partir deste pipeline no lado do host:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="Pipeline do demo de FFT: Clip via BLE em StreamReceiver, JitterBuffer, decodificador Opus, PCM, FFT e espectro no terminal" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_terminal.gif" alt="Gravação de terminal do demo de espectro FFT RTC ao vivo" width={900} height="auto" /></p>

> O espectro que você vê vem de áudio que está sendo transmitido via BLE **agora mesmo**, não de uma gravação armazenada no dispositivo. Passe a mão em frente ao microfone e as barras reagem em uma fração de segundo.

### 4.3 Entendendo a saída do Demo

Quando o stream termina, o demo imprime estatísticas. As mais significativas são:

```text
RTC session: 00000000082552
Streaming for 50s ...

frames received : 2503
bytes received  : 191846
seq discontin.  : 0
avg inter-frame : 20.0 ms (max 120 ms)
```

- **frames received / bytes received** — quantos pacotes Opus chegaram e seu tamanho total.
- **avg inter-frame** — o intervalo médio entre chegadas de pacotes. O RTC produz um quadro Opus aproximadamente a cada 20 ms, então enquanto o stream estiver em execução você deve ver cerca de 50 pacotes por segundo e uma média próxima de 20 ms.
- **seq discontin.** — eventos observados de descontinuidade de sequência. O firmware avança o número de sequência apenas depois que um quadro foi entregue ao link BLE, então descartes na fila do dispositivo e em pausas não consomem números; trate um valor diferente de zero como uma anomalia de protocolo ou de link, e não como uma contagem direta de perda de pacotes.

Números exatos variam com o link BLE e com o tempo de streaming. Abaixo disso, o demo também imprime estatísticas do JitterBuffer (underruns, descartes de recuperação, distribuição de profundidade da fila) e um detalhamento de latência (fila / decodificação / FFT). A Seção 7 explica o que eles significam.

## 5. Construir uma aplicação mínima de RTC Streaming

Esta seção é o núcleo do tutorial: o mesmo estabelecimento de RTC que o demo executa, reduzido à essência para que você possa construir em cima dele.

### 5.1 Conectar ao reSpeaker Clip

Tudo começa com o transporte e o cliente, exatamente como no [Guia Básico do SDK](/pt-br/respeaker_clip_basic_sdk_guide):

```python
import asyncio

from clip import BleTransport, ClipClient


async def main() -> None:
    transport = BleTransport(name="Clip")   # or BleTransport(address="AA:BB:CC:DD:EE:FF")

    async with ClipClient(transport) as clip:
        ...  # the rest of this tutorial goes here


asyncio.run(main())
```

`BleTransport` é responsável pela comunicação BLE; `ClipClient` fornece as APIs de alto nível do Clip em cima dele.

### 5.2 Criar um StreamReceiver

O receiver transforma quadros de stream recebidos em invocações de callback. O consumidor mais simples possível imprime o tamanho de cada pacote:

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

Uma invocação de callback equivale a um pacote Opus. `on_frame` é executado inline no caminho de recepção, então mantenha-o não bloqueante — entregue os bytes a uma fila, uma thread ou outra tarefa, e faça o trabalho pesado em outro lugar.

### 5.3 Iniciar uma sessão RTC

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

Isso envia `AT+START=rtc`; o dispositivo inicia seu pipeline de áudio RTC e retorna o ID da sessão. Neste ponto o dispositivo está apenas produzindo áudio — o host ainda não se inscreveu, e nada está fluindo para você.

### 5.4 Começar a receber áudio RTC

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` conecta o seu receiver ao caminho de quadros do transporte e emite `AT+DOWNLOAD=<session>`; a partir de agora o dispositivo envia quadros `STREAM_START` e depois `STREAM_DATA` para `receiver`. `wait_start()` retorna assim que `STREAM_START` tiver chegado — esse é o momento em que o canal de dados ao vivo está realmente estabelecido.

Antes de enviar `STREAM_START`, o firmware espera por parâmetros de conexão BLE apertados (até cerca de 5 segundos), então um breve atraso aqui é normal e `timeout=10` deixa uma margem de segurança.

O `token` retornado é uma concessão (lease) no slot do manipulador de quadros do transporte; você irá liberá-lo quando o stream terminar (Seção 5.6).

### 5.5 Receber Pacotes Opus

Voltando ao seu callback:

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

Este é o ponto de entrada da sua aplicação. Seja o que for que você construir — FFT, VAD, ASR em streaming, um relay WebSocket — começa a partir desses bytes. A próxima seção explica exatamente o que eles contêm.

### 5.6 Parar o Stream RTC

Parar espelha a API de gravação: `stop_recording()` envia `AT+STOP`, o dispositivo responde com `STREAM_END`, e você libera a concessão do handler:

```python
try:
    await clip.stop_recording()
    await receiver.wait_end(timeout=5)
finally:
    transport.detach_file_frame_handler(token)
```

Liberar a concessão em `finally` mantém o slot de manipulador de quadros do transporte limpo quando o stream falha ou o script é interrompido.

A aplicação mínima completa, montada:

```python
import asyncio

from clip import BleTransport, ClipClient
from clip.stream import StreamReceiver


async def main() -> None:
    transport = BleTransport(name="Clip")
    async with ClipClient(transport) as clip:
        receiver = StreamReceiver(on_frame=lambda p: print(len(p)))

        session = await clip.start_rtc()
        token = await clip.stream_rtc(session, receiver)
        try:
            await receiver.wait_start(timeout=10)

            await asyncio.sleep(10)      # consume the live stream for 10 s

            await clip.stop_recording()
            await receiver.wait_end(timeout=5)
        finally:
            transport.detach_file_frame_handler(token)

        print("frames:", receiver.frames_received, "bytes:", receiver.bytes_received)


asyncio.run(main())
```

O ciclo de vida completo é, portanto:

```text
BLE connect -> start_rtc() -> stream_rtc() -> STREAM_START
-> STREAM_DATA x N -> stop_recording() -> STREAM_END -> detach handler
```

## 6. Entendendo os Dados de Áudio RTC

### 6.1 O que o StreamReceiver Retorna?

Seu callback recebe `bytes` simples — um pacote de áudio codificado em Opus por chamada. Não é WAV, não é PCM, e não são notificações BLE brutas: o SDK já analisou os quadros de transporte RTC (`STREAM_START` / `STREAM_DATA` / `STREAM_END`) e entrega apenas o payload.

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

O receiver também mantém estatísticas em tempo real que você pode ler a qualquer momento: `frames_received`, `bytes_received`, `sequence_gaps`, `avg_inter_frame_ms`, `max_inter_frame_ms` e `first_frame_delay_s`. Após `STREAM_END`, `receiver.end_reason` informa por que o stream terminou (parado, expirado ou desconectado).

Um receiver pode alimentar mais de um consumidor: `receiver.add_sink(sink)` registra uma derivação adicional de quadros brutos que roda antes de `on_frame`. O SDK traz dois sinks prontos — `StreamCapture` grava os mesmos pacotes Opus em um log `.bin` com prefixo de comprimento, e `StreamConsumer` envia blocos e pilhas limitados para callbacks assíncronos para encaminhamento ou ASR em streaming. O comando `clip.stream` da Seção 4.1 é construído sobre `StreamCapture`.

### 6.2 Formato de Áudio RTC

O stream RTC atual é:

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

Portanto, um quadro aproximadamente a cada 20 ms, ou seja, cerca de 50 quadros por segundo enquanto o stream roda — o mesmo número que você viu na saída `avg inter-frame` do demo.

### 6.3 De Opus para PCM

Como o payload é Opus comprimido, você não deve reinterpretá-lo como amostras:

```python
# WRONG — the packet is compressed Opus, not samples
import numpy as np
samples = np.frombuffer(opus_packet, dtype=np.int16)
```

Decodifique primeiro, depois trate o resultado como PCM:

```python
import opuslib

decoder = opuslib.Decoder(16000, 1)          # 16 kHz, mono
pcm = decoder.decode(opus_packet, 320)       # 320 samples = 20 ms
samples = np.frombuffer(pcm, dtype=np.int16)
```

Essa etapa de decodificação é a única coisa entre o seu callback e amostras de áudio reais — e é exatamente o que o demo de FFT adiciona em cima da aplicação mínima que você acabou de escrever.

## 7. Entendendo demo_stream_fft_display.py

Esta seção mapeia o demo de volta para o que você aprendeu, para que o demo deixe de ser um "script mágico" e se torne "meu programa mínimo, mais um decodificador, mais uma FFT".

### 7.1 Estrutura do Demo

O demo é a estrutura da aplicação mínima com uma cadeia de processamento anexada a `on_frame`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="Pipeline do demo de FFT mapeado para componentes do SDK" width={900} height="auto" /></p>

`on_frame` alimenta cada pacote Opus em um objeto `LiveSpectrum`; uma thread em segundo plano regula o consumo em 20 ms por quadro, decodifica, executa a FFT e redesenha uma linha do terminal.

### 7.2 Estabelecimento RTC no Demo

A função `run()` do demo executa exatamente a sequência da Seção 5:

```text
BleTransport / ClipClient          (5.1)
receiver = StreamReceiver(on_frame)  (5.2)
session = await clip.start_rtc()     (5.3)
token = await clip.stream_rtc(...)   (5.4)
await receiver.wait_start(timeout=10)
... frames flow ...
await clip.stop_recording()          (5.6)
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

Se você entendeu a Seção 5, você já entende o coração do demo — todo o resto é processamento de áudio.

### 7.3 Decodificar Áudio RTC

O demo decodifica exatamente como na Seção 6.3: um `opuslib.Decoder(16000, 1)` transforma cada pacote em 320 amostras int16. Você não precisa saber como o codec Opus funciona internamente; o limite que importa é "callback fornece bytes Opus, decodificador fornece amostras PCM".

### 7.4 Por que o Demo Usa um Jitter Buffer?

Entregas BLE não chegam perfeitamente uniformes. Você pode ver intervalos entre quadros como:

```text
20 ms, 20 ms, 35 ms, 5 ms, 20 ms, ...
```

O `clip.jitter.JitterBuffer` do SDK suaviza isso em um ritmo de consumo estável:

```text
BLE packets -> JitterBuffer -> steady 20 ms audio frames
```

O demo cria `JitterBuffer(depth_frames)` (padrão 5 quadros, ou seja, 100 ms de preenchimento inicial), chama `put()` para cada pacote que chega de `on_frame`, e chama `get()` para um quadro a cada tique de 20 ms da thread de processamento. `get()` retorna `None` em caso de underrun (nenhuma FFT é desenhada para silêncio), e se o host ficar para trás o buffer descarta os quadros mais antigos para alcançar novamente a borda ao vivo. Isso é tudo o que um jitter buffer é: um pequeno amortecedor entre um produtor irregular e um consumidor estável.

### 7.5 De PCM para FFT

Cada quadro decodificado de 20 ms é janelado (Hann), transformado com `np.fft.rfft`, agrupado em 64 bandas de exibição e desenhado como caracteres de bloco Unicode. O espectro no terminal é, portanto, a prova de que todo o pipeline funciona de ponta a ponta:

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

Quando as barras se movem enquanto você fala, cada estágio dessa cadeia — incluindo o estabelecimento RTC que você mesmo construiu na Seção 5 — está funcionando.

## 8. Próximos Passos

O SDK RTC entrega para sua aplicação áudio ao vivo, pronto para decodificação. Tudo o que vem depois é seu:

```text
RTC SDK -> Opus decode -> PCM
    ├── FFT spectrum (this tutorial)
    ├── VAD / wake word
    ├── Streaming ASR
    ├── WebSocket relay
    └── Voice assistant
```

Para controle do dispositivo, gravação e download de arquivos, consulte o [Guia Básico do SDK do reSpeaker Clip](/pt-br/respeaker_clip_basic_sdk_guide); para configuração do produto, consulte [Introdução](/pt-br/respeaker_clip).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
