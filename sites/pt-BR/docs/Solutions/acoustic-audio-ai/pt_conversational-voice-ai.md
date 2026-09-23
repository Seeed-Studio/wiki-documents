---
description: Construindo um terminal de voz interrompível em um dispositivo de borda — quais placas e microfone você precisa, quais interfaces ele expõe, a matriz de suporte idioma × dispositivo e resultados medidos de ASR/TTS no RK3576
title: 'IA de Voz Conversacional Interrompível na Borda: Construção, Implantação e Resultados Medidos'
keywords:
  - IA de voz conversacional
  - assistente de voz com barge-in
  - terminal de voz de borda
  - array de microfones com AEC
  - Qwen3-ASR
  - Matcha-TTS
  - palavra de ativação sherpa-onnx
  - RK3576
  - RK3588
  - RK1828
  - Jetson Orin NX
  - Chat Completions compatível com OpenAI
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg
slug: /solutions/conversational-voice-ai
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[Aviso de uso]
Esta é uma implementação de referência open source, não um produto certificado. A precisão de fala foi medida apenas em RK3576 e em Orin NX (Qwen3-ASR int4).
:::

## O que esta solução faz

Alguém se aproxima de um dispositivo e fala com ele. O dispositivo responde em voz alta; se a pessoa começar a falar de novo no meio da resposta, ele para imediatamente em vez de terminar a frase.

Feito para lugares onde uma pessoa fala com uma máquina com as mãos ocupadas: balcões de atendimento, exposições e quiosques, front-ends de voz para robôs, terminais de casa e ambientes inteligentes.

- Implementação open source: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Escolhendo uma configuração e implantando: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>A fala permanece no dispositivo</h3>
                <p>Reconhecimento (Qwen3-ASR) e síntese (Matcha-TTS) rodam no host de borda. Com um preset totalmente local, o modelo de conversação também roda ali, e o dispositivo funciona offline após a primeira inicialização.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Conecte o microfone e interrompa</h3>
                <p>O reSpeaker XVF3800 faz cancelamento de eco em hardware e é detectado automaticamente via USB, incluindo hot-plug. Fale enquanto a resposta está sendo reproduzida e o dispositivo para.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source, funciona com o seu backend</h3>
                <p>O código é aberto. A conversação passa por uma API compatível com OpenAI, então apontar para a sua própria base de conhecimento, agente ou backend de pedidos é apenas uma mudança de URL; a camada de fala permanece igual.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Medido em chinês e inglês</h3>
                <p>Medido em RK3576: 1,05% de taxa de erro de caracteres em enunciados curtos em chinês, síntese a 0,204× tempo real. Hosts RK3588 e Jetson oferecem 30 idiomas.</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## De que hardware você precisa

Quatro coisas no local: um array de microfones, um alto-falante e um host de voz; se o texto da conversação não puder sair do local, também uma placa aceleradora ou um host grande o bastante para um modelo 4B.

**① O array de microfones** deve fazer cancelamento de eco acústico (AEC) em hardware.

| | Microfone | Observações |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>Array USB com AEC em hardware, supressão de ruído e beamforming | O padrão validado. Tanto os layouts de firmware de 2 canais quanto de 6 canais são reconhecidos e o canal processado é selecionado automaticamente. Outros arrays voltam a capturar o canal 1 e precisam de um teste acústico no local antes de entrar em operação. |

**② Um alto-falante**: USB ou 3,5 mm, no mesmo dispositivo. Não silencie o microfone durante a reprodução para evitar eco; isso também desativa o barge-in.

**③ O host de voz** executa reconhecimento, síntese e o agente residente, e determina quais idiomas você pode oferecer:

| | Host de voz | Idiomas que ele pode atender | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU Rockchip, Qwen3-ASR W8A8 + Matcha | Chinês, inglês | Host de menor custo para a pilha de fala totalmente local; os dados medidos em "Desempenho e dados medidos" vêm desta placa |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU Rockchip, adiciona Kokoro RKNN para TTS | Todos os 30 | Você precisa dos 28 idiomas além de chinês e inglês, ou planeja adicionar uma placa RK1828 para conversação local depois |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha na GPU | Todos os 30 | O host também executa outras cargas de trabalho de IA e precisa de folga na GPU. Não execute um modelo 4B local nele |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Fala mais Qwen3.5-4B no mesmo host | Todos os 30 | O texto da conversação não pode sair do local |

A série reComputer R2000 também executa uma pilha de fala em CPU (sherpa-onnx, apenas inglês); ela ainda não é oferecida no configurador na página de design de referência. Ela não oferece suporte a chinês, e ASR e TTS compartilham quatro núcleos de CPU.

**④ Conversação totalmente local na rota RK**: adicione uma placa NPU RK1828 / RM182X PCIe a um host RK3588 para executar Qwen3-4B. A placa precisa de sua própria alimentação de 12 V, e o host precisa do driver e do nó de dispositivo. Apenas um modelo grande pode ficar residente na placa por vez.

Além disso: a primeira inicialização precisa de acesso à internet e espaço livre em disco (pelo menos 25 GB em Orin NX), e a ferramenta de implantação deve conseguir alcançar o host pela rede.

## Como implantar no local

Instale primeiro o microfone e o alto-falante, depois execute o assistente de implantação.

### 1. Posicionando o microfone e o alto-falante

:::tip[Verifique se o microfone tem cancelamento de eco em hardware]
Barge-in, detecção de turno e manter o microfone aberto durante a reprodução exigem um canal de captura com a saída do alto-falante já removida em hardware. Um microfone sem AEC em hardware causa interrupções falsas ou um loop de eco, e nenhuma configuração de software corrige isso.
:::

- Use o reSpeaker XVF3800 por padrão. Se você usar outro array, faça primeiro um teste acústico no local; arrays desconhecidos usam o canal 1 por padrão.
- Faça a aceitação com o alto-falante em volume normal de ambiente. Um terminal que passa em volume baixo pode falhar em volume de operação por motivos acústicos não relacionados aos modelos.
- O reSpeaker pode ser conectado antes da implantação ou conectado a quente depois que o agente estiver em execução. O agente seleciona o dispositivo de captura pela identidade de produto USB, ignora pseudo-entradas HDMI/DP e se recupera de desconectar/reconectar sem reiniciar o contêiner.

### 2. Instalando o software

O app SenseCraft Solution implanta no host via SSH (ou localmente, se você estiver em um Jetson Orin com JetPack 6.2). As etapas por dispositivo estão no guia de implantação; o resumo são quatro etapas.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e implante 🖱️</font></span></strong>
    </a>
</div><br />

1. **Escolha um preset**: cloud / compatível com OpenAI, ou totalmente local. Com um preset em nuvem, o texto da conversação vai para um endpoint externo; com um preset totalmente local, nada sai do local.
2. **Escolha o idioma da conversa**: a implantação resolve `(language, device)` em um único perfil de fala antes de iniciar os outros serviços. Um par não suportado, como chinês em reComputer série R2000, sai com código 2 e interrompe todo o `docker compose up`; nada inicia pela metade.
3. **Preencha o endpoint e a persona**: URL base, chave e ID do modelo para o preset em nuvem (padrões: o endpoint Qwen da região de Pequim com `qwen3.5-flash`), além do prompt de sistema. Você pode alternar de **Always listening** para **Wake word required** e digitar qualquer frase curta em chinês ou inglês; o detector de vocabulário aberto sherpa-onnx na imagem a compila localmente na inicialização.
4. **Verifique no dashboard**: o dashboard web na porta 18000 mostra ouvindo / pensando / falando / interrompido.

<!-- TODO image: the four dashboard states and a screen recording of one interruption — needs capture on a deployed device -->

Aceitação: três turnos na sala real, com volume real de alto-falante, interrompendo 0,5–1 s após cada resposta começar. Verifique se a resposta antiga para imediatamente e se o enunciado de interrupção não é perdido.

Tempo: cerca de 30 minutos para um preset em nuvem. Presets totalmente locais levam mais tempo porque a primeira inicialização baixa os arquivos de modelo; após uma inicialização online bem-sucedida, as imagens e os arquivos de modelo são armazenados em cache e o dispositivo roda offline.

## Interfaces disponíveis

O agente chama uma API de Chat Completions em streaming compatível com OpenAI. Aponte `LLM_BASE_URL` para o seu próprio serviço para integrar: um endpoint de RAG sobre seus documentos, um framework de agente com chamadas de ferramentas, uma camada de comando de robô, um backend de pedidos ou de tickets. A camada de fala não muda.

- **Modelo hospedado**: mantenha os padrões ou substitua URL base, chave e ID do modelo. O endpoint deve suportar Chat Completions em streaming.
- **Seu próprio serviço**: implemente a mesma interface. O agente envia a transcrição como o turno do usuário e faz streaming da resposta para a síntese, de modo que a primeira frase começa a tocar antes que o seu serviço termine de gerar.
- **Apenas camada de fala**: para construir um agente diferente em cima, chame diretamente o WebSocket duplex e os endpoints offline abaixo.

### Lista completa de portas e endpoints

Todos os serviços usam rede em modo host, então `<host>` é o próprio endereço do host de voz.

| Endpoint | Qual implantação | O que transporta |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | todo preset | A sessão duplex: PCM de entrada, transcrição e PCM de TTS de saída, além do abort que uma interrupção dispara |
| `POST http://<host>:8621/asr` | todo preset | Transcrição offline de arquivo inteiro, sem VAD e sem streaming. Os números de acurácia offline em "Performance and measured data" são medidos aqui |
| `POST http://<host>:8621/tts` | todo preset | Síntese; o cabeçalho de resposta `x-rtf` carrega o fator de tempo real |
| `GET http://<host>:8621/health` | todo preset | Prontidão; usado como healthcheck do Compose |
| `http://<host>:18000` | todo preset | Dashboard web: estado do turno e a transcrição de cada turno |
| `http://<host>:1828/v1`, `/health` | preset local RK3588 + RK1828 | Chat Completions compatível com OpenAI para o Qwen3-4B no dispositivo |
| `http://<host>:8000/v1`, `/health` | preset local Orin NX | Chat Completions compatível com OpenAI para o Qwen3.5-4B no dispositivo |
| `LLM_BASE_URL` (saída) | preset em nuvem | Qualquer endpoint compatível com OpenAI |

Ambas as rotas locais expõem a mesma interface que a rota em nuvem, então a troca altera apenas `LLM_BASE_URL`. A menos que aponte para fora, não há broker nem componente em nuvem no caminho de dados.

## Performance and measured data {#measured-detail}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### Tempos de execução e parâmetros principais

O protocolo duplex e o Agent são os mesmos em todo host; apenas os backends que executam ASR e TTS diferem.

| Host de fala | Backend / modelo de ASR | Backend / modelo de TTS | Perfil resolvido |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR, codificador RKNN + decodificador RKLLM, W8A8 | `rk.tts` — matcha-icefall-zh-en, acústico ORT + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — mesmo | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (outros 28) | `rk.asr` — mesmo | `rk.tts` — Kokoro v1.0 híbrido, decodificador frontal RKNN INT8 + prefixo/cauda CPU ONNX | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.matcha_trt` — matcha-icefall-zh-en, Vocos bf16/fp16 | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (outros 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice, int4 | `jetson-edgellm-v091-customvoice` |
| reComputer série R2000 (inglês) | `cpu.sherpa_asr` — sherpa-onnx streaming zh-en, CPU int8 | `cpu.sherpa` — voz sherpa-onnx em CPU, int8 | `rpi5-default` |

O preset totalmente local do Orin NX usa a imagem TensorRT-Edge-LLM v0.9.1; engines construídos para outras versões de TensorRT / JetPack não são carregados. No lado RK, os arquivos de modelo são baixados na primeira inicialização.

**Matriz idioma × dispositivo.** A implantação escolhe um perfil a partir de (idioma, dispositivo). Das 18 células, 15 são implantáveis e 3 não são suportadas; das células implantáveis, 5 têm medições fim a fim e nas outras 10 cada componente tem medições no dispositivo. As células não suportadas: chinês em reComputer série R2000, e os "outros 28" idiomas em RK3576 e reComputer série R2000. O chinês não faz fallback para Whisper: em todas as placas medidas, o CER de chinês do Whisper é 35–56%. O RK3576 tem apenas a voz Matcha zh-en de TTS, então consegue transcrever os outros 28 idiomas, mas não consegue sintetizar uma resposta.

Três parâmetros que afetam os resultados da implantação:

- `barge_in_min_speaking_ms` `500`, `barge_in_min_chars` `2`: uma interrupção só conta depois que a resposta começou a tocar e a interrupção é mais longa que uma sílaba.
- `playback_drain_enabled` `true`: o Agent permanece em SPEAKING até o buffer de reprodução local esvaziar. Com isso desligado, fala durante a cauda da resposta é tratada como um novo turno e a resposta antiga continua tocando.
- Fim de turno no servidor: silero, 400 ms de silêncio + `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`, encerrando o turno na primeira pausa natural; uma frase longa com uma pausa no meio recebe resposta apenas à sua primeira oração.

### Medições da série reComputer RK3576

Condições: Debian 12 + Rockchip BSP, perfil `rk3576-default`; o script de teste e o contêiner de fala rodam no mesmo dispositivo e se comunicam via `127.0.0.1:8621`, então os números excluem transferência de rede.

**ASR no endpoint offline** (`POST /asr`, arquivo inteiro, sem VAD, sem streaming):

| Idioma | Conjunto | n | Taxa de erro |
|---|---|---:|---:|
| Chinês | curto | 5 | CER 1,05% |
| Chinês | longo 10–20 s | 5 | CER 9,62% |
| Inglês | curto | 5 | WER 3,65% / CER 1,11% |
| Inglês | longo 10–20 s | 5 | WER 6,99% / CER 4,16% |

Cada arquivo longo em inglês voltou como texto completo com múltiplas orações; os erros restantes são desvios de reconhecimento (`"3:2"` transcrito como `"three to two"`), não truncamento.

**ASR em uma sessão ao vivo** (`/v2v/stream`, padrões de fábrica `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`), avaliado em relação ao texto de referência completo:

| Idioma | Conjunto | n | Taxa de erro |
|---|---|---:|---:|
| Chinês | curto | 5 | CER 29,09% |
| Chinês | longo 10–20 s | 5 | CER 84,06% |
| Inglês | curto | 5 | WER 16,95% / CER 10,16% |
| Inglês | longo 10–20 s | 5 | WER 63,38% / CER 62,58% |

A alta taxa de erro em sessão ao vivo vem da decisão de fim de turno no servidor, não de truncamento do decodificador: com `ASR_MAX_NEW_TOKENS` elevado para 256 e `ASR_FINAL_STOP_ON_PUNCT` ajustado para 0, as transcrições em ambos os idiomas são idênticas byte a byte.

**TTS** (`POST /tts`, lido do cabeçalho de resposta `x-rtf`, Matcha acústico ORT + RKNN Vocos, voz icefall zh-en):

| Idioma | n | Fator de tempo real | Faixa |
|---|---:|---:|---|
| Chinês | 5 | 0,204 | 0,190–0,216 |
| Inglês | 5 | 0,194 | 0,158–0,216 |

O áudio em inglês por frase tem duração de 2,5–4,3 s.

**Latência em sessão ao vivo** (modo eco, sem LLM na cadeia):

| Métrica | Idioma | n | Valor |
|---|---|---:|---|
| Fim da fala → primeiro frame de TTS (`stop_to_tts_audio`) | Chinês | 4 | 1575 / 1624 / 1596 / 1580 ms (cerca de 1,6 s) |
| ASR final → primeiro frame de TTS (`final_to_tts_audio`) | Inglês | 5 | p50 1127 ms, média 1126 ms, 1021–1232 ms |
| Fim da fala → ASR final (`eos_to_final`) | Inglês | 5 | média 2837 ms |

O valor medido de fim da fala → ASR final em chinês (`stop_to_final`) chega depois da resposta falada e não é citado.

Reproduza: `docs/perf/rk3576-matrix-20260906.md` e `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` no repositório openvoicestream; `eos_to_final` em inglês com `asr_stream_ws_bench.py`.

### Medições da série reComputer J40

| Métrica | Valor | Condições |
|---|---|---|
| ASR em chinês | CER 0 no conjunto golden, em streaming e offline | Qwen3-ASR 0.6B int4 |

### Degradações conhecidas

- **Microfone sem AEC em hardware.** Cada número acima foi obtido em um canal de captura com AEC em hardware. Sem isso, o microfone causa interrupções falsas ou microfonia, e nenhum valor de configuração compensa isso.
- **Pausas no meio da frase.** No mesmo áudio, o endpoint offline dá CER 9,62% e a sessão ao vivo 84,06%; a diferença vem da política de tomada de turno, e o conteúdo após uma pausa no meio da frase não recebe resposta.
- **Volume de aceitação abaixo do volume de trabalho.** Um terminal que passa em volume baixo pode falhar em volume de trabalho por motivos acústicos.

### Próximos passos

- Ajustar a detecção de fim de turno no servidor para que uma pausa no meio da frase não encerre mais o turno cedo.
- Medir latência e acurácia fim a fim para as outras 10 células implantáveis da matriz idioma × dispositivo.

## Fontes de dados e assets

- **FLEURS**: o corpus de ASR para as medições do RK3576, CC BY 4.0, 5 clipes curtos e 5 longos por idioma, verificados por sha256. O TTS usou 5 frases autoescritas por idioma. A fonte para a comparação de Whisper entre dispositivos é `docs/perf/whisper-cross-device-20260827.md` no repositório openvoicestream.
- **Registros brutos de execução**: `docs/perf/rk3576-matrix-20260906.md` no repositório openvoicestream; cada número de RK3576 acima mapeia para um registro lá.
- **Modelos de fala**: Qwen3-ASR, Matcha-TTS (voz icefall zh-en), Kokoro v1.0, Qwen3-TTS CustomVoice e sherpa-onnx mantêm cada um seus termos de licença upstream. Verifique a licença de cada modelo que você realmente implantar antes do envio comercial.
- Os corpora não são distribuídos com o repositório; obtenha-os separadamente.
