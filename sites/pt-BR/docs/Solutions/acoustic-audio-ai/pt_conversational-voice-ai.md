---
description: Construindo um terminal de voz interrompível em um dispositivo de borda — quais placas e microfone você precisa, como a lógica de barge-in e de tomada de turno realmente funciona, a matriz de suporte idioma × dispositivo e os números medidos de ASR/TTS no RK3576 com todo o seu escopo
title: 'IA de Voz Conversacional Interrompível na Borda: Construção, Implantação e Resultados Medidos'
keywords:
  - IA de voz conversacional
  - assistente de voz com barge-in
  - terminal de voz na borda
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[Aviso de uso]
Esta é uma **implementação de referência**, não um produto certificado. A precisão de fala foi aferida em uma placa (RK3576) e uma configuração de modelo (Qwen3-ASR int4 em Orin NX); **10 das 18 células na matriz idioma × dispositivo são implantáveis, mas não têm número medido**. O barge-in não tem um valor de latência publicado — a aceitação é um teste manual na sala real, no volume real do alto-falante. Não faça planejamento com base em um número que esta página não declara.
:::

## O que esta solução faz

Alguém se aproxima de um dispositivo e fala com ele. O dispositivo responde em voz alta e, quando a pessoa começa a falar de novo no meio da resposta, ele para — imediatamente, não no fim da frase. Esse é o produto inteiro, e a parte que é projetada em vez de presumida é a parada.

Feito para lugares onde uma pessoa fala em voz alta com uma máquina enquanto está com as mãos ocupadas: balcões de atendimento, exposições e quiosques, front-ends de voz para robôs, terminais de casa e ambientes inteligentes.

- Implementação open source: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Escolhendo uma configuração e implantando: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>A fala é local em todas as configurações</h3>
                <p>Qwen3-ASR e Matcha-TTS rodam na própria placa de borda. Apenas o modelo de conversação pode ser remoto, e ele fica atrás de uma única variável de ambiente.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Interrupção exige AEC em hardware</h3>
                <p>O microfone precisa expor um canal de captura com o eco já removido. Sem isso, a captura — que permanece aberta durante a reprodução — ouve o próprio alto-falante do dispositivo e o terminal se interrompe sozinho.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>O idioma é resolvido antes da inicialização, não por enunciado</h3>
                <p>Um par (idioma, dispositivo) se torna exatamente um perfil de fala, e um par não atendível faz a implantação falhar em vez de degradá-la.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Uma placa tem um bench completo</h3>
                <p>RK3576, medido em 2026-09-06: 1,05% de taxa de erro de caractere em enunciados curtos em chinês pelo endpoint offline, síntese a 0,204× tempo real.</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## De que hardware você precisa

Quatro coisas no local: um array de microfones, um alto-falante, uma placa de borda e — se a conversação precisar permanecer local — ou uma placa aceleradora ou uma placa grande o bastante para comportar um modelo de 4B.

**① O array de microfones** é o único componente sem substituto. Ele precisa fazer cancelamento de eco acústico em hardware.

| | Microfone | Por que este |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>Array USB com AEC em hardware, supressão de ruído e beamforming | O padrão validado. Seus layouts de firmware de 2 canais e 6 canais são ambos reconhecidos e o canal processado é selecionado automaticamente. Qualquer outro array volta para o canal de captura 1 e precisa primeiro de uma verificação acústica no local. |

**② Um alto-falante** — USB ou analógico, no mesmo dispositivo. Silenciar o microfone durante a reprodução não é uma solução aceitável: isso remove o eco e remove o barge-in junto.

**③ O host de voz** executa reconhecimento, síntese e o agente residente. Ele também decide quais idiomas você pode oferecer:

| | Host de voz | Idiomas que pode atender | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>Rockchip NPU, Qwen3-ASR W8A8 + Matcha | Chinês, Inglês | Placa de menor custo que roda toda a pilha de fala local, e a única com um bench publicado |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU, adiciona Kokoro RKNN para TTS | Todos os 30 | Os outros 28 idiomas, ou um host que depois possa receber uma placa RK1828 para conversação local |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha na GPU | Todos os 30 | A placa é compartilhada com outra carga de trabalho de IA e precisa de folga de GPU. Não inicie um modelo local de 4B aqui |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Fala mais Qwen3.5-4B na mesma placa | Todos os 30 | O texto da conversação não deve sair do local |

A série reComputer R2000 também roda a pilha de fala na CPU (apenas inglês, sherpa-onnx). Ela ainda não é oferecida no configurador, então não há um perfil de compra para cotar; ela recusa chinês por projeto, e ASR e TTS apenas em CPU compartilham quatro núcleos.

**④ Para conversação totalmente local na rota RK**, uma placa NPU RK1828 / RM182X PCIe atrás de um host RK3588 roda Qwen3-4B. Ela precisa de alimentação independente de 12 V, seu driver de host e nó de dispositivo, e mantém residente apenas um modelo grande por vez.

Além disso: internet e espaço livre em disco para a primeira inicialização (Orin NX precisa de pelo menos 25 GB) e uma rede na qual a ferramenta de implantação consiga alcançar a placa.

## Como implantar no local

Duas partes: acertar a acústica e depois executar o assistente de implantação.

### 1. Posicionando o microfone e o alto-falante

:::tip[O canal AEC é a suposição estrutural]
Tudo a jusante — barge-in, detecção de turno, a decisão de não silenciar durante a reprodução — parte do princípio de que o canal de captura já teve a saída do alto-falante removida em hardware. Um microfone sem isso produzirá interrupções falsas ou um loop de eco, e nenhuma configuração de software o recupera.
:::

- Use o reSpeaker XVF3800 a menos que você tenha medido uma alternativa no local. O layout de canais de firmware dele é detectado automaticamente; um array desconhecido é padronizado para o canal 1.
- Mantenha o alto-falante em um volume normal de ambiente para o teste de aceitação. Um dispositivo testado em volume baixo pode falhar no volume de operação por razões acústicas que não têm nada a ver com os modelos.
- O reSpeaker pode ser conectado antes da implantação ou conectado a quente depois. O agente seleciona o dispositivo físico de captura por identidade de produto USB estável, ignora pseudoentradas HDMI/DP e se recupera de desconectar/reconectar sem reiniciar o contêiner.

### 2. Instalando o software

A implantação é executada a partir do app SenseCraft Solution contra a placa via SSH (ou localmente, se você já estiver em um Jetson Orin com JetPack 6.2). As etapas por dispositivo estão no guia de implantação; o esboço são quatro movimentos.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Escolha um preset** — compatível com cloud/OpenAI ou totalmente local. Esta é a única escolha que decide se algo sai do local.
2. **Escolha o idioma da conversa** — o deployment transforma `(language, device)` em exatamente um perfil de fala antes de qualquer serviço iniciar. Um par não suportado, como chinês em reComputer R2000 series, sai com código 2 e interrompe todo o `docker compose up`. Nada inicia parcialmente.
3. **Preencha o endpoint e a personalidade** — URL base, chave e ID do modelo para o preset em nuvem (os padrões são o endpoint Qwen de Pequim com `qwen3.5-flash`), além do prompt de sistema. Opcionalmente altere de **Always listening** para **Wake word required** e digite qualquer frase curta em chinês ou inglês; o detector de vocabulário aberto sherpa-onnx a compila localmente na inicialização.
4. **Verifique no dashboard** — o dashboard web na porta 18000 mostra ouvindo / pensando / falando / interrompido.

<!-- TODO image: the four dashboard states and a screen recording of one interruption — needs capture on a deployed device -->

 A aceitação são três turnos na sala real, com volume real de alto-falante, interrompendo 0,5–1 s depois que cada resposta começa, confirmando que a resposta antiga para imediatamente e que o enunciado de interrupção não é perdido.

Tempo: cerca de 30 minutos para um preset em nuvem. Presets totalmente locais levam mais tempo porque o primeiro start faz o download dos artefatos de modelo; após um start online bem-sucedido, toda imagem e artefato ficam em cache e o dispositivo roda offline.

## Como conectá-lo ao seu próprio sistema

**O ponto de integração é o endpoint do LLM, não um barramento de mensagens.** O agente chama uma API de Chat Completions em streaming compatível com OpenAI, e `LLM_BASE_URL` é onde você coloca o seu próprio serviço — um endpoint de RAG sobre seus documentos, um framework de agentes com chamadas de ferramentas, uma camada de comandos de robô, um backend de pedidos ou de tickets. Nada na camada de fala muda.

- **Usando um modelo hospedado** — mantenha os padrões ou substitua URL base, chave e ID do modelo. O único requisito é suporte a Chat Completions em streaming.
- **Usando o seu próprio serviço** — implemente a mesma interface. O agente envia a transcrição como o turno do usuário e faz streaming da resposta para a síntese, de modo que a primeira frase começa a tocar antes que o seu serviço termine de gerar.
- **Lendo a camada de fala bruta** — o WebSocket duplex e os endpoints offline abaixo estão disponíveis diretamente se você quiser construir algo diferente do agente fornecido sobre eles.

### Lista completa de portas e endpoints

Todo serviço escuta em host networking, então `<host>` é o próprio endereço do host de voz.

| Endpoint | Qual deployment | O que carrega |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | todo preset | A sessão duplex: PCM de entrada, transcrição e PCM de TTS de saída, além do abort que uma interrupção dispara |
| `POST http://<host>:8621/asr` | todo preset | Transcrição offline de arquivo inteiro — sem VAD, sem streaming. Os números de acurácia no apêndice foram medidos aqui |
| `POST http://<host>:8621/tts` | todo preset | Síntese; a resposta carrega um cabeçalho `x-rtf` com o fator de tempo real |
| `GET http://<host>:8621/health` | todo preset | Prontidão; usado como healthcheck do Compose |
| `http://<host>:18000` | todo preset | Dashboard web: estado do turno e a transcrição de cada turno |
| `http://<host>:1828/v1`, `/health` | preset local RK3588 + RK1828 | Chat Completions compatível com OpenAI para o Qwen3-4B on-device |
| `http://<host>:8000/v1`, `/health` | preset local Orin NX | Chat Completions compatível com OpenAI para o Qwen3.5-4B on-device |
| `LLM_BASE_URL` (saída) | preset em nuvem | Qualquer endpoint compatível com OpenAI |

As duas rotas locais expõem a mesma interface que a rota em nuvem, e é por isso que alternar entre elas muda uma variável e nada mais. Nenhum broker e nenhum componente em nuvem fica no caminho de dados a menos que você aponte `LLM_BASE_URL` para fora.

## Para engenheiros: detalhes de implementação

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### Fala: um protocolo, quatro runtimes

O protocolo duplex, a máquina de estados do agente e o resolvedor de perfis são idênticos em todas as placas. O que difere é o backend que executa ASR e TTS.

| Host de voz | Backend / modelo de ASR | Backend / modelo de TTS | Perfil resolvido |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR, RKNN encoder + RKLLM decoder, W8A8 | `rk.tts` — matcha-icefall-zh-en, ORT acoustic + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — igual ao acima | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (outros 28) | `rk.asr` — igual ao acima | `rk.tts` — Kokoro v1.0 híbrido, RKNN INT8 decoder-front + CPU ONNX prefix/tail | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.matcha_trt` — matcha-icefall-zh-en, bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (outros 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice, int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 series (en) | `cpu.sherpa_asr` — sherpa-onnx streaming zh-en, int8 CPU | `cpu.sherpa` — voz sherpa-onnx em CPU, int8 | `rpi5-default` |

Duas restrições que vale a pena conhecer antes de planejar um port. O preset totalmente local do Orin NX roda uma imagem **TensorRT-Edge-LLM v0.9.1** cujo histórico de engines é separado do preset Orin NX de LLM em nuvem — ele carrega seu próprio device id na matriz para que uma troca de idioma permaneça dentro desse histórico, e engines construídos para outra versão de TensorRT/JetPack falham na verificação de procedência em vez de carregar. No lado RK, os artefatos de modelo são baixados no primeiro start (`RK1828_ARTIFACT_AUTO_DOWNLOAD=1`) e a placa mantém um modelo grande residente por vez.

### A matriz idioma × dispositivo, e por que ela recusa

`profile-init` roda antes de qualquer outro serviço com `network_mode: none`, lê `language_device.yaml` e grava exatamente um perfil resolvido mais um pequeno overlay de env. Três resultados:

| `status` | Significado | Comportamento do resolvedor |
|---|---|---|
| `measured` | A combinação exata de ASR+TTS nomeada pelo perfil tem um número on-device em `evidence[]` | prossegue |
| `unsupported` | Nenhum perfil fornece esse par | **sai com 2**, `docker compose up` para antes de qualquer serviço iniciar |

O catálogo de idiomas é o conjunto de 30 idiomas do runtime RK (`qwen3asr_rk/python/qwen3asr/config.py:3-9`), deliberadamente o mais estreito das duas listas disponíveis — Qwen3-ASR upstream anuncia 52 e Whisper 99 — para que uma lista cubra todas as placas e nenhuma célula perca um idioma.

As três células `unsupported` são chinês em reComputer R2000 series, e o grupo dos outros 28 em RK3576 e reComputer R2000 series. A recusa em chinês é uma decisão de projeto com um número por trás: o teto do Whisper em chinês é 35–56% de CER em todas as placas medidas, então um fallback silencioso produziria um deployment que parece funcionar e não funciona. O RK3576 recusa os outros 28 porque sua única voz de TTS é Matcha zh-en — a placa poderia transcrever esses idiomas, mas não poderia falar a resposta.

Um desvio para reler quando o bench-alvo chegar: a especificação multilíngue nomeia Whisper + Kokoro para a coluna "Inglês e outros" em Orin NX / RK3576 / RK3588, mas nenhum perfil em `configs/profiles/` combina um backend de ASR Whisper com qualquer backend de TTS — todo perfil Whisper ali é apenas ASR. Até que essa combinação seja construída, essas faixas roteiam para os perfis combinados existentes, e cada célula registra a combinação pretendida em `planned_alternative`.

### Barge-in: o que realmente interrompe a resposta

A interrupção é uma cadeia de quatro condições, e a última é a parte que é fácil errar.

| Estágio | Condição | Valor configurado |
|---|---|---|
| Captura durante a reprodução | O VAD do lado do microfone continua rodando enquanto o TTS toca | `client_vad_backend` `silero` |
| Detecção de fala | Probabilidade de fala do Silero, limiar nativo | `client_vad_threshold` `null` (o próprio 0,5 do Silero, deliberadamente não é um valor RMS) |
| Fala mínima antes de contar | Filtra ruído transitório | `client_vad_speech_min_ms` `200` |
| Fim do enunciado no cliente | O cliente aciona EOS em vez de esperar pelo servidor | `client_vad_silence_ms` `600`, `client_vad_drive_eos` `true` |
| Admissibilidade de barge-in | A resposta realmente precisa ter começado, e a interrupção deve ter mais que uma sílaba | `barge_in_enabled` `true`, `barge_in_min_speaking_ms` `500`, `barge_in_min_chars` `2` |
| **Cauda de reprodução** | **O agente permanece em SPEAKING até o buffer local ficar audivelmente vazio** | `playback_drain_enabled` `true`, `playback_drain_timeout_s` `15.0` |

**A drenagem da reprodução é o gate necessário.** O serviço de fala sinaliza `TTSDone` assim que termina de enviar PCM, enquanto o buffer local do PortAudio ainda está esvaziando audivelmente. Sem a drenagem, um enunciado real falado nessa cauda é classificado como um novo turno em estado ocioso em vez de um barge-in — a resposta antiga continua tocando e as palavras do usuário caem no estado errado. Desativá-la não desabilita o barge-in visivelmente; faz o barge-in falhar exatamente na janela em que os usuários realmente interrompem.

Mais duas configurações que parecem cosméticas e não são: `client_vad_backend` é fixado em `silero` explicitamente para que uma imagem quebrada ou personalizada falhe de forma visível em vez de recair silenciosamente para o VAD de energia RMS fixa, que fragmenta a fala e pode se auto-interromper; e `asr_language` é fixado a partir da escolha do operador em vez de deixado em `auto`, porque esse valor se torna o `asr_language` da sessão e é o único controle de idioma que os backends RK e Jetson Qwen3-ASR têm.

### Tomada de turno: por que a transcrição ao vivo é mais curta que o áudio

O término de turno **no servidor** é separado do VAD do cliente acima. Ele usa silero com **400 ms de silêncio** e `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`, então a sessão é finalizada na primeira pausa natural que ele ouve. Uma frase longa contendo uma pausa no meio do enunciado é respondida após sua primeira oração. Essa é uma política de tomada de turno ajustada para latência conversacional, não uma falha de reconhecimento — veja o apêndice para o teste de falseamento que a estabeleceu.

### Palavra de ativação opcional

Selecionar **Wake word required** alterna `pipeline_mode` de `always_on` para a fonte de palavra de ativação sem reconstruir a imagem; os assets de KWS sherpa-onnx de vocabulário aberto já estão dentro dela.

| Configuração | Valor |
|---|---|
| `WAKEWORD_BACKEND` | `sherpa_onnx` |
| `WAKEWORD_PHRASE` | qualquer frase curta em chinês ou inglês (padrão `你好小智`) |
| `WAKEWORD_THRESHOLD` | `0.25` |
| `WAKEWORD_MIC_SKIP_MS` | `120` |
| Confirmação | um tom curto de 880 Hz após uma detecção bem-sucedida |

A frase é compilada localmente na inicialização e, com a sensibilidade, é mantida no volume de estado do agente. A escuta contínua permanece como padrão, de modo que implantações mãos livres existentes não sejam afetadas.

## Apêndice: dados medidos {#measured-detail}

Esta seção é para leitores que desejam conferir os números; ignorá-la não afeta a implantação. Tudo abaixo é uma única passagem de medição no hardware indicado, **não reproduzida de forma independente**, e não é uma certificação de nenhum tipo.

### O que foi medido e o que não foi

| Item | Status |
|---|---|
| Matriz idioma × dispositivo, 18 células | **5 medidas**, 10 implantáveis porém não quantificadas, 3 recusadas |
| RK3576, chinês e inglês, ASR + TTS + sessão ao vivo | medido em 2026-09-06 |
| Orin NX, Qwen3-ASR 0.6B int4, chinês | medido em 2026-07-04 — CER 0 no conjunto dourado, streaming e offline |
| Latência de conversação incluindo um LLM | não coletada — os números ao vivo abaixo são em modo eco sem modelo no loop |

"Implantável porém não quantificada" significa que os componentes têm números no dispositivo e a combinação como um todo não tem. Não é uma afirmação de que essas células tenham desempenho igual às medidas.

### Detalhes do RK3576

**Ambiente.** reComputer série RK3576, Debian 12 com o BSP da Rockchip. openvoicestream commit `a0b043a6` (branch `feature/language-device-resolver`), imagem `openvoicestream:rk-20260903.10` (`sha256:fdc480da3061…`). Script de bench e contêiner de fala na mesma máquina via `127.0.0.1:8621` — os números não incluem nenhum salto de rede. Perfil resolvido `rk3576-default`.

**ASR pelo endpoint offline** (`POST /asr`, arquivo inteiro, sem VAD e sem streaming — isto é capacidade do decodificador):

| Idioma | Conjunto | n | Erro |
|---|---|---:|---:|
| Chinês | enunciados curtos | 5 | 1,05% CER |
| Chinês | forma longa, 10–20 s | 5 | 9,62% CER |
| Inglês | enunciados curtos | 5 | 3,65% WER / 1,11% CER |
| Inglês | forma longa, 10–20 s | 5 | 6,99% WER / 4,16% CER |

O inglês em forma longa recupera o texto completo de múltiplas orações em todos os arquivos; o erro residual são deslizes reais de reconhecimento (`"3:2"` transcrito como `"three to two"`), não truncamento.

**ASR pela sessão ao vivo** (`/v2v/stream`, padrões fornecidos `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`), pontuado contra o texto de referência completo:

| Idioma | Conjunto | n | Erro |
|---|---|---:|---:|
| Chinês | enunciados curtos | 5 | 29,09% CER |
| Chinês | forma longa, 10–20 s | 5 | 84,06% CER |
| Inglês | enunciados curtos | 5 | 16,95% WER / 10,16% CER |
| Inglês | forma longa, 10–20 s | 5 | 63,38% WER / 62,58% CER |

**A hipótese de que o decodificador estava truncando foi testada e falseada.** Reexecutar com `ASR_MAX_NEW_TOKENS=256` e `ASR_FINAL_STOP_ON_PUNCT=0` (o que adicionalmente exigiu `RK_ARTIFACT_CONTRACT_STRICT=0` para impedir que a verificação de contrato em tempo de execução do conjunto de artefatos colocasse o contêiner em loop de falha) produziu **transcrições byte a byte idênticas** em ambos os idiomas — por exemplo `en_long_03` ainda é finalizado como "To prevent possible infection of others." após 43 mensagens e 7,5 s. A substituição foi confirmada como aplicada no log de inicialização do servidor. O que encerra o turno cedo é o endpoint de VAD (silero, 400 ms de silêncio, 2,5 s mínimos de áudio), não o orçamento de tokens do decodificador nem sua flag de parada por pontuação. Relaxar o endpoint para que um turno conversacional sobreviva a uma pausa no meio do enunciado é trabalho em aberto e não foi feito.

**TTS** (`POST /tts`, cabeçalho de resposta `x-rtf` lido diretamente do servidor, acústico Matcha ORT + RKNN Vocos, voz icefall zh-en):

| Idioma | n | Fator em tempo real | Faixa |
|---|---:|---:|---|
| Chinês | 5 | 0,204 | 0,190–0,216 |
| Inglês | 5 | 0,194 | 0,158–0,216 |

Cada frase em inglês tinha 2,5–4,3 s de áudio.

**Latência da sessão ao vivo** — modo eco, sem LLM no loop:

| Medida | Idioma | n | p50 | média | mín–máx |
|---|---|---:|---:|---:|---|
| Fim da fala → ASR final (`stop_to_final`) | Chinês | 10 | 1771 ms | 1732 ms | 1284–2049 ms |
| Fim da fala → primeiro frame de TTS (`stop_to_tts_audio`) | Chinês | 5 | 3782 ms | 3640 ms | 3061–3892 ms |
| ASR final → primeiro frame de TTS (`final_to_tts_audio`) | Inglês | 5 | 1127 ms | 1126 ms | 1021–1232 ms |

**Substituído em 2026-09-20.** Em uma placa ociosa executando a imagem `rk-20260913.3`, `stop_to_tts_audio` foi remedido em 1575/1624/1596/1580 ms (cerca de 1,6 s, n=4). Os 3782 ms acima foram muito provavelmente um agregado obtido enquanto o segundo enunciado expirava. Nas mesmas execuções `stop_to_final` retornou cerca de 5,1 s, maior que a resposta falada que deveria preceder, então nem esse valor nem os 1771 ms acima podem ser citados. Veja `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` em openvoicestream.


**Uma ressalva de relatório mantida como está em vez de encoberta:** em todas as execuções em inglês de `/v2v/stream`, `stop_to_final` e `stop_to_tts_audio` retornaram nulos enquanto `final_to_tts_*` nas mesmas execuções foi preenchido normalmente. A linha de latência de ASR em inglês (`eos_to_final` média 2837 ms, n=5) portanto vem de uma execução separada de `asr_stream_ws_bench.py`, não da execução unificada de V2V, e `final_to_tts_audio` é relatado para inglês em vez da viagem de ida e volta. Se isso é uma diferença de endpoint de VAD em áudio em inglês ou um problema de indexação do script em relação a `--multi 2` permanece sem resolução. A resposta completa (frame final / `tts_done`) não foi coletada em nenhum dos idiomas.

**Corpus.** O ASR reutiliza o corpus FLEURS existente (CC BY 4.0, verificado por sha256), 5 curtos + 5 longos por idioma, em vez de um novo download do Common Voice. O TTS usou 5 frases autoescritas por idioma. As execuções V2V usaram um clipe de 3,84 s repetido com `--multi 2` para contornar um fechamento antecipado de sessão.

### Onde ele se degrada

- **O microfone decide mais do que a placa.** Cada número acima assume um canal de captura com AEC em hardware. Um microfone sem isso produz interrupções falsas ou um loop de eco, e nenhum valor de configuração compensa.
- **Conversa ao vivo não é o endpoint offline.** A diferença entre 9,62% e 84,06% de CER no mesmo áudio é inteiramente política de tomada de turno. Se seus enunciados contêm pausas no meio da frase, espere respostas à primeira oração até que o endpoint seja reajustado.
- **O volume do locutor importa na aceitação.** Um terminal validado em volume baixo pode falhar em volume de operação por razões puramente acústicas.
- **Os números publicados cobrem a placa RK3576 e a configuração Orin NX Qwen3-ASR int4.** RK3588, Orin Nano, série reComputer R2000 e todas as células que não sejam chinês-nem-inglês são implantáveis. Meça-as você mesmo antes de se comprometer com uma meta de latência ou precisão.

## Fontes de dados e assets

- **FLEURS** — o corpus de ASR para o bench do RK3576, CC BY 4.0. Os arquivos são verificados por sha256; a proveniência para a comparação Whisper entre dispositivos está em `docs/perf/whisper-cross-device-20260827.md` no repositório openvoicestream.
- **Registros brutos de execução** — `docs/perf/rk3576-matrix-20260906.md` no repositório openvoicestream contém a saída completa do resolvedor, linhas JSON de ASR por arquivo, dumps de cabeçalhos de TTS e o estado do contêiner antes/depois. Cada número nesta página remete a uma linha lá.
- **Modelos de fala** — Qwen3-ASR, Matcha-TTS (voz icefall zh-en), Kokoro v1.0, Qwen3-TTS CustomVoice e sherpa-onnx mantêm cada um seus próprios termos de licença upstream. Confirme a licença do modelo que você implanta antes de enviar um produto comercial; o runtime é agnóstico ao modelo dentro de sua interface documentada.
- Corpora não são distribuídos com o repositório e devem ser obtidos separadamente.
