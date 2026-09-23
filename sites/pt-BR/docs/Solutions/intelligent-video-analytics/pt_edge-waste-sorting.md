---
description: Classificação de resíduos no dispositivo, diretamente no ponto de descarte — um acionamento, uma imagem, oito classes de material e a categoria chinesa de descarte em quatro vias via MQTT, com um callback GPIO para uma portinhola. Hardware, visão geral da implantação, contratos de saída e todos os limites medidos.
title: 'Classificação de Resíduos na Borda: Classes de Material, Categoria Chinesa em Quatro Vias e MQTT'
keywords:
  - classificação de resíduos
  - classificação de resíduos com IA de borda
  - classificação de materiais MQTT
  - categoria chinesa de resíduos em quatro vias
  - lixeira inteligente
  - EfficientNet-Lite0
  - SigLIP2 open vocabulary
  - reComputer
  - Jetson Orin
  - Hailo-8
  - RK3588
  - quantização INT8
image: https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg
slug: /solutions/edge-waste-sorting
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
O mapeamento chinês em quatro vias é uma tabela mantida por este projeto, não uma decisão de qualquer autoridade, e as regras variam entre cidades; a saída não deve ser a única base para taxas, penalidades ou decisões de conformidade.
:::

## O que esta solução faz

Um acionamento (um botão, uma chamada HTTP ou movimento no quadro) faz o dispositivo capturar **uma imagem**, classificar o item em uma de **oito classes de material**, consultar a **categoria chinesa de resíduos domésticos em quatro vias** a partir dessa classe e publicar uma mensagem MQTT. Um callback assíncrono recebe o resultado em quatro vias ao mesmo tempo, para que uma portinhola, relé ou indicador de faixa possa agir com base nele.

- **Uma cabeça, dois níveis de resposta.** O modelo prevê oito classes: papel, papelão, vidro, metal, plástico, têxtil, orgânico, residual. A categoria em quatro vias (reciclável / resíduo de cozinha / perigoso / outros) é uma consulta em tabela sobre o argmax de oito classes, então adaptar a uma regra local significa editar a tabela, não retreinar.
- **Um acionamento, uma captura.** Botão, HTTP ou detecção de movimento com 800 ms de debounce; um acionamento que chega enquanto o anterior ainda está em execução é mesclado, não enfileirado. Também existe um modo contínuo; ele é limitado em taxa e publica apenas depois que três quadros consecutivos concordam no top-1.
- **Os payloads são validados antes de publicar.** Todo payload passa pelo esquema de evento, mais duas regras que o JSON Schema não consegue expressar: `category` deve ser igual a `top3[0]`, e `confidence` deve ser igual a `top3[0].confidence`. Falhas são contabilizadas e descartadas.
- **Uma trilha opcional de vocabulário aberto.** Uma torre de visão SigLIP 2 pontuada contra protótipos de texto constantes, selecionada no momento da implantação com `model.track: open_vocab`. Ela adiciona classes sem retreinar, responde em chinês ou inglês a partir do mesmo embedding de imagem e produz uma pontuação de "não está no meu vocabulário".
- **Interface de atuador sem vinculação de pino.** O runtime faz callback com uma categoria; qual pino ele aciona é decidido pelo código de integração, então uma única build roda em placas com cabeçalhos diferentes.

Os bytes de imagem nunca saem do dispositivo; o payload carrega apenas um caminho ou um URI de object store.

- Código-fonte de empacotamento e guia de implantação: [sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- Escolhendo uma configuração e implantando: [página de reference design](https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Pronto para rodar no dispositivo</h3>
                <p>Instale o pacote de aplicação e ele roda; uma primeira implantação leva cerca de 35 minutos. Top-1 de oito classes 0,8877, top-1 em quatro vias 0,9500 (7417 imagens de validação, baseline offline em CPU onnxruntime, veja desempenho e dados medidos).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código aberto</h3>
                <p>O código de runtime é Apache-2.0; os dados de treinamento, TrashNet (MIT) e GC3 (CC BY 4.0), ambos permitem redistribuição.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Sua própria câmera, sistemas e atuadores</h3>
                <p>Câmera USB / RTSP ou uma fonte de arquivo; os resultados saem via MQTT, `POST /trigger` pode ser chamado por um totem ou gateway PLC, e um callback GPIO aciona uma portinhola ou indicador.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Roda totalmente no local</h3>
                <p>Captura, classificação, consulta e o broker MQTT rodam todos no host; as imagens permanecem no dispositivo e a cadeia principal não precisa de acesso à internet.</p>
            </div>
        </li>
    </ul>
</div>

### Como é a execução em um dispositivo

Abaixo está o enquadramento da área de descarte visto por uma reCamera PoE depois que o pacote de aplicação `waste-sorting` foi instalado. Nada é colocado em frente à câmera; a imagem é apenas uma referência de enquadramento.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="Enquadramento da área de descarte pela reCamera PoE, sem nada colocado à sua frente"/>
</div>

Os resultados de classificação vão direto para o MQTT. Abaixo estão eventos consecutivos capturados ao assinar `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Eventos de classificação consecutivos em waste/recamera-cvi/results, cada um carregando o resultado de oito classes, o mapeamento em quatro vias e o tempo de inferência"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

## De que hardware você precisa

Três coisas no ponto de descarte: um acionamento, uma câmera, um host.

**① Acionamento** — um botão ligado ao host, `POST /trigger` na porta 8080, ou movimento no quadro. Os três compartilham um debounce de 800 ms, produzem o mesmo evento e são diferenciados pelo campo `trigger` no payload.

**② Câmera** — qualquer fonte USB, RTSP ou arquivo olhando para baixo na área de descarte; qualquer modelo serve. Um único item deve ocupar uma parte utilizável do quadro, com apenas um item em vista. Itens muito pequenos reduzem a qualidade da classificação, e nenhum dos números em desempenho e dados medidos vem de tal enquadramento.

**③ Host de classificação** — decide quais caminhos de modelo você pode usar.

| Host de classificação | Acelerador | Classificador implantado | Trilha de vocabulário aberto | Quando escolhê-lo |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Não oferecida | Um ponto de descarte, apenas classificador de baseline |
| reComputer J4012 (Jetson Orin NX 16GB) | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Oferecida (a única classe de dispositivo que a oferece) | Você espera adicionar classes de itens depois sem retreinar |
| reComputer R2000 series (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | Nenhuma | Você tem ou quer hardware Hailo-8; o HEF é compilado fora do dispositivo e baixado no momento da implantação |

Ambos os modelos reComputer vêm em um gabinete industrial sem ventoinha (reComputer Industrial J3011 / J4012) com o mesmo módulo e runtime, para um quadro de comando ou gabinete externo.

A coluna de vocabulário aberto vem das notas de recursos no catálogo de dispositivos: a torre de visão SigLIP 2 é um ONNX de 371 MB com p50 de 66,93 ms por imagem como baseline offline em CPU onnxruntime e precisa de um acelerador.

**④ Todo o resto** — um consumidor MQTT (o pacote executa um broker local na porta 1883); se o projeto tiver uma portinhola ou indicador de faixa, o hardware de acionamento mais o código de integração para o callback GPIO, que é fornecido sem estar vinculado a nenhum pino. A cadeia principal não precisa de acesso à internet.

## Como implantar no local

Acerte primeiro o enquadramento e o acionamento, depois instale o software. Classificado como **intermediário**, cerca de **35 minutos** para uma primeira implantação.

### Um: instale o hardware, enquadramento e acionamento

:::tip[Um item por imagem, grande o suficiente]
Não há detector nesta cadeia. Dois itens em um quadro produzem uma resposta, e qual item ela descreve é indefinido; itens que ocupam uma parte muito pequena do quadro classificam pior. Monte a câmera olhando para baixo na área de descarte para que um único item preencha uma parte utilizável do quadro, e decida antes da implantação se o acionamento será um botão, HTTP ou detecção de movimento.
:::

### Dois: instale o software

As etapas por dispositivo estão na página de reference design, onde escolher uma configuração para o seu local também fornece o pacote de aplicação correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

Ambos os presets seguem as mesmas etapas:

1. **Escolha um preset e um host.** `Camera + reComputer J30 / J40 (Orin)` ou `Camera + reComputer R2000 series (Hailo-8)`.
2. **Faça o deploy do runtime de separação de resíduos** (obrigatório). No Orin o engine TensorRT é construído no dispositivo durante o deploy; o engine é vinculado à arquitetura da GPU e à versão do TensorRT e não pode ser pré‑compilado para distribuição. No Hailo as etapas de deploy verificam três gates de ABI do Hailo e depois fazem o download do HEF.
3. **Observe a classificação em tempo real** (opcional). O painel local na porta 8080 tem um preview MJPEG, contadores de integridade e o top‑3 dos resultados recentes. Confirme o enquadramento aqui antes de ligar qualquer coisa.
4. **Ligue o gatilho e confirme uma classificação** (obrigatório). Um pressionamento de botão, chamada HTTP ou evento de movimento deve produzir exatamente uma mensagem MQTT em `waste/<stream-id>/results`, com `category` e `confidence` correspondendo a `top3[0]`.
5. **Mude para a trilha de vocabulário aberto** (opcional, apenas Orin). Defina `model.track: open_vocab` no momento do deploy.

## Quais interfaces estão disponíveis

O host de separação expõe duas interfaces e um callback em processo, todos servidos pelo próprio host.

- **Sistema de operações ou de registro** — assine `waste/<stream-id>/results` na porta 1883. Um JSON por classificação.
- **UI de quiosque, gateway PLC ou script de teste** — `POST /trigger` na porta 8080 aciona uma captura e classificação; `/events` retorna resultados recentes com seus top‑3.
- **Comporta, relé ou indicador de faixa** — um callback GPIO assíncrono carrega o resultado de quatro vias. Ele não está vinculado a nenhum pino; o código de vinculação faz parte da integração.

### Tabela completa de interfaces

| Tipo | Onde | Conteúdo | Observações |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | Um por classificação. Validado em relação ao schema de evento antes da publicação |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` dispara uma captura e classificação (gatilho registrado como `http`); MJPEG ao vivo; um endpoint de integridade com tempo de inferência, contagens de gatilho e de debounce e contagens MQTT; resultados recentes com top‑3 | Painel local, sem autenticação |
| Callback GPIO | Em processo | Resultado de quatro vias, assíncrono | `actuator.enabled` é `false` por padrão. Não vinculado a nenhum pino |

Duas coisas a observar ao ler os campos:

- **A imagem nunca está no payload.** `image_ref.kind` é `none`, `local` ou `object_store`. Bytes de imagem em Base64 em um payload violam o contrato e são rejeitados antes da publicação.
- **`category` é sempre igual a `top3[0]`, e `confidence` é sempre igual a `top3[0].confidence`.** Ambos são verificados antes da publicação e payloads com falha são contados e descartados, de modo que os consumidores não precisam reconciliá‑los.

O broker MQTT incluído permite conexões anônimas para comissionamento local; use um broker com credenciais em um deploy de produção.

## Desempenho e dados medidos {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_waste_sorting</font></span></strong>
    </a>
</div><br />

### Medido no dispositivo: reComputer RK3588 series

| Modelo / precisão | Latência p50 / p95 (média) | Acordo com a referência em CPU | Acurácia vs ground truth | Condições |
|---|---|---|---|---|
| **EfficientNet-Lite0 (m1c), fp16** | 7.906 ms / 8.129 ms (7.041 ms) | 1.00 | 0.78 | 50 imagens de validação |
| EfficientNet-Lite0 (m1c), int8 calib64+normal | 3.780 ms / 3.984 ms (3.807 ms) | 0.90 | 0.72 | 63 imagens de calibração, algoritmo `normal` |
| EfficientNet-Lite0 (m1c), int8 calib64+mmse | 3.785 ms / 3.981 ms (3.808 ms) | 0.98 | 0.78 | 63 imagens de calibração, algoritmo `mmse` |
| EfficientNet-Lite0 (m1c), int8 calib256+normal | 3.766 ms / 3.920 ms (3.500 ms) | 0.90 | 0.72 | 252 imagens de calibração, algoritmo `normal` |
| **EfficientNet-Lite0 (m1c), int8 calib256+mmse** — recomendado | 3.803 ms / 4.003 ms (3.834 ms) | **1.00** | **0.78** | 252 imagens de calibração, `mmse`; acordo e acurácia iguais a fp16, e é **52% mais rápido** |
| SigLIP 2 vision tower, fp16 | 169.4 ms / 170.5 ms | Cosseno de embedding médio **0.999617**, mínimo 0.998841 | — | 191 MB `.rknn` |

Condições: convertido com rknn-toolkit2 2.3.2, librknnrt 2.3.2, `core_mask=AUTO`, quantização por canal. A conversão `mmse` leva de 40 a 90× mais tempo que `normal` (17,3 minutos vs 11,5 segundos com 256 imagens de calibração), paga uma vez na conversão e não em tempo de execução.

Reproduzir: `solutions/edge_waste_sorting/evaluation/runs/2026-09-06-m1c-rk3588-radxa`

Na reComputer RK3576 series apenas a SigLIP 2 vision tower e a MobileNetV3-Small descontinuada foram executadas: SigLIP 2 vision tower fp16 p50 152.51 ms / p95 176.59 ms, cosseno de embedding médio **0.99965**, mínimo 0.99900.

Reproduzir: `evaluation/runs/2026-09-06-rk3576-cat`

### Acurácia do classificador de baseline: EfficientNet-Lite0 (m1c, embarcado)

| Métrica | Valor | Condições |
|---|---:|---|
| Material top-1 (8 classes) | **0.8877** | val, 7417 imagens; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13.477.056 B |
| Material top-5 | 0.9833 | Mesmo |
| China quatro vias top-1 | **0.9500** | Mesmo; mapeamento sobre o argmax de oito classes |
| macro-F1 (7 classes com amostras) | 0.8511 | `textile` excluída — zero amostras |
| Material top-1, teste reservado | 0.8802 | teste, 7290 imagens |
| Latência de inferência por imagem, CPU | média 16.796 ms / p50 14.724 ms / p95 28.718 ms | Apenas `session.run`, baseline offline em CPU, batch 1, não é uma medida de dispositivo |
| Imagens com confiança abaixo de 0.5 | 318 (4,3%) | val |
| Acordo ORT PTQ INT8 vs fp32 | 0.965 | 200 imagens de validação, por canal + MinMax, sem colapso |
| Acordo top-1 do emulador Hailo DFC INT8 vs CPU | 0.890 | 200 imagens de validação; acurácia vs ground truth 0.755 (CPU nas mesmas imagens 0.795); de um build anterior ao HEF embarcado, sem latência de placa |

O top-1 de quatro vias (0.9500) é maior que o top-1 de material (0.8877) porque a confusão entre vidro, metal e plástico cai toda em recicláveis; apenas a métrica de quatro vias superestima o quão bem o modelo distingue materiais.

Reproduzir: `evaluation/runs/2026-09-06-m1c-cpu`, `evaluation/runs/2026-09-06-m1c-hef`

### Trilha de vocabulário aberto: SigLIP 2 ViT-B/16

| Métrica | Valor | Condições |
|---|---:|---|
| Material top-1 (8 classes) | 0.8501 | val, 7417 imagens; conjunto de prompts em inglês `waste8-en/v1`, template `t02`, 16-shot α=0.8, temperatura 0.0075 |
| Material top-5 | 0.9987 | Mesmo |
| China quatro vias top-1 | 0.9393 | Mesmo; caminho hierárquico (oito classes, depois mapeamento) |
| macro-F1 (7 classes) | 0.7460 | Mesmo |
| ECE (15 bins) | 0.0221 | Mesmo |
| AUROC open-set | 0.7538 | Média sobre as 7 classes com amostras, leave-one-class-out, score = `1 - max softmax` |
| Acordo chinês–inglês (mesma imagem) | material 0.8698 / quatro vias 0.9143 | Um embedding visual, três bancos de protótipos |
| Material top-1, teste reservado | 0.8620 | teste, 7290 imagens |
| Latência de inferência por imagem | p50 66.93 ms / p95 91.62 ms | Baseline offline em CPU, batch 1, apenas a vision tower, não é uma medida de dispositivo |

Em comparação com o baseline (mesmo split):

| Métrica | Baseline (MobileNetV3-Small) | Vocabulário aberto (SigLIP2-B/16) |
|---|---:|---:|
| Material top-1, val | **0.8792** | 0.8501 |
| Material top-1, teste | **0.8807** | 0.8620 |
| China quatro vias top-1, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| AUROC open-set | Nenhum (uma cabeça closed-set não pode descartar uma classe sem retreino) | **0.7538** |
| Acordo chinês–inglês | Sem lado de texto | **0.8698 / 0.9143** |
| Novas classes zero-shot | Retreino necessário | **Edite o prompt** |
| Latência p50 em CPU | **1.57 ms** | 66.93 ms |

O baseline nesta comparação é a MobileNetV3-Small descontinuada. A EfficientNet-Lite0 embarcada atinge top-1 de validação 0.8877 neste split com p50 de CPU de cerca de 14,7 ms, o que reduz a razão de latência de 40× para 4–5×.

Reproduzir: `evaluation/runs/2026-09-05-w1-cpu`

### Pegada de deploy

| Item | Tamanho |
|---|---|
| ONNX de baseline (`efficientnet_lite0_waste8.onnx`) | 13.477.056 B |
| ONNX da SigLIP 2 vision tower (`siglip2_vision_224.onnx`) | 371.695.898 B |
| Bancos de protótipos + relatório de calibração | cerca de 155 KB no total |

### Runtimes e parâmetros principais

| Dispositivo | Modelo | Precisão | Runtime | Como o modelo chega ao dispositivo |
|---|---|---|---|---|
| reComputer J30 / J40 series | EfficientNet-Lite0 224² | FP16 | TensorRT | Engine construído no dispositivo no momento do deploy, vinculado à arquitetura da GPU e à versão do TensorRT; não pode ser pré‑compilado para distribuição |
| reComputer J40 series (trilha opcional de vocabulário aberto) | SigLIP 2 ViT-B/16 vision tower + protótipos de texto constantes | — | — | `model.track: open_vocab` |
| reComputer R2000 series + Hailo-8 | EfficientNet-Lite0 224² | INT8 (HEF uint8, `optimization_level=2`) | HailoRT 4.21.0 | HEF compilado fora do dispositivo com DFC 3.31.0, baixado no momento do deploy |
| reComputer RK3588 series | EfficientNet-Lite0 224² | INT8 (calib256+mmse) | librknnrt 2.3.2 | Convertido fora do dispositivo com rknn-toolkit2 2.3.2 |

- Debounce de gatilho: **800 ms**; um gatilho que chega enquanto o anterior ainda está em execução é mesclado, não enfileirado
- Modo contínuo: publica apenas quando o top-1 é o mesmo por **3 frames** seguidos; o modo de gatilho dá uma resposta por disparo
- `actuator.enabled`: padrão `false`; o callback GPIO não está vinculado a nenhum pino

### Degradações conhecidas

- `textile` não tem amostras de treino nem de avaliação: nenhum dos datasets de origem tem uma classe de tecido. O oitavo logit é mantido (a saída ONNX permanece `1×8`), mas o modelo nunca o previu, e todas as tabelas reportam `n/a` para ele.
- Nenhuma classe de material mapeia para `hazardous`; ela permanece no enum para estabilidade de schema e o build atual nunca a emite.
- `organic` compõe 48,9% do treino e 47,1% da validação; seu recall (0.9791) é muito acima das outras classes (0,70–0,88), e o modelo empurra itens incertos para ela.
- `residual` tem apenas 20 amostras de validação; a trilha de vocabulário aberto atinge precisão 0.2754 e AUROC leave-one-out 0.5795 nela, próximo ao acaso.
- Na trilha de vocabulário aberto, prever a classe de quatro vias diretamente a partir de prompts em chinês dá apenas 0.8478; o caminho hierárquico (oito classes, depois mapeamento) dá 0.9393.
- A MobileNetV3-Small descontinuada entra em colapso sob INT8 em todas as três cadeias de borda: acordo do emulador Hailo DFC 0.115, reComputer RK3576 series 0.10, reComputer RK3588 series 0.22 (fp16 0.98–1.00); é por isso que o baseline mudou para EfficientNet-Lite0. Resultados INT8 em RK3588 não se transferem para RK3576.
- A SigLIP 2 vision tower falha na quantização INT8 para Hailo-8 (`hailo optimize` gera erro na camada `ne_activation_mul_and_add78`), portanto não há HEF; a trilha de vocabulário aberto não roda na reComputer R2000 series.
- Ambos os datasets são fotos de item único (TrashNet em um quadro branco, GC3 fora do centro e frequentemente ocluído), sem resíduos molhados, amassados, empilhados, contra a luz ou parcialmente ensacados; a acurácia em um ponto de entrega ao vivo será menor que os valores nas tabelas.

### Próximas etapas

- Adicionar o material da série reComputer R2000 (R2035-12, Hailo-8) e os resultados em quatro vias em todas as 7417 imagens de validação, e a latência de disparo até resposta e o tempo de construção do mecanismo na série reComputer J40 (J4012), em "Performance and measured data".

## Fontes de dados e recursos

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **MIT License, Copyright (c) 2017 Gary Thung**. Baseado em duas fontes de primeira parte: o arquivo `LICENSE` do repositório no commit `6fa2b87` e o campo `license` do cartão de dataset oficial no HuggingFace. A licença MIT exige que o aviso de direitos autorais e de licença seja mantido e não possui cláusula de compartilhamento pela mesma licença.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**, declarado textualmente no arquivo `README.dataset.txt` incluído com a exportação. O caminho do projeto no Roboflow Universe é `material-identification/garbage-classification-3`.
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revisão `75de2d55…`, Apache-2.0. Usado apenas pela trilha opcional de vocabulário aberto.
- **Pesos iniciais MobileNetV3-Small ImageNet** (torchvision) — BSD-3-Clause.
- **Código de runtime upstream** — Apache-2.0.
- **Diagrama de arquitetura** — desenhado a partir do catálogo de dispositivos do pacote e das interfaces de saída; não contém imagens de dataset.

Material externo derivado desses datasets deve usar literalmente a seguinte string de atribuição:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**Nenhuma imagem derivada de dataset é incluída neste pacote.** Ambas as licenças permitem redistribuição.
