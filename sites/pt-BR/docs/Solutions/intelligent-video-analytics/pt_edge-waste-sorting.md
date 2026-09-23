---
description: Classificação de resíduos no dispositivo, no ponto de descarte — um gatilho, uma imagem, oito classes de material e a categoria chinesa de descarte em quatro vias via MQTT, com um callback GPIO para uma portinhola. Hardware, visão geral da implantação, contratos de saída e todos os limites medidos.
title: 'Classificação de Resíduos na Borda: Classes de Material, Categoria Chinesa em Quatro Vias e MQTT'
keywords:
  - classificação de resíduos
  - classificação de resíduos com IA de borda
  - classificação de materiais via MQTT
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este é um **pacote de demonstração, e não um sistema de classificação para conformidade ou regulamentação**. O mapeamento chinês em quatro vias é uma tabela mantida por este projeto, não uma decisão certificada por uma autoridade, e as definições municipais variam entre cidades — nenhuma saída aqui deve ser a única base para cobrança, penalidade ou decisão de conformidade. **Nada neste pacote foi executado no hardware de destino.** Cada valor de acurácia vem de onnxruntime em uma CPU Apple M4; os valores do Hailo-8 vêm do emulador do Dataflow Compiler, não do silício Hailo-8; as únicas medições em dispositivo real são a paridade de tempo de execução em RK3588 em uma placa de desenvolvimento RK3588, que não possui pacote de implantação aqui. **Nenhum preset traz `verified: [hardware]`.**
:::

## O que esta solução faz

Um gatilho — um botão, uma chamada HTTP ou movimento no quadro — faz o dispositivo capturar **uma imagem**, classificar o item nela em uma de **oito classes de material**, consultar a **categoria chinesa de descarte em quatro vias** a partir dessa classe e publicar uma única mensagem MQTT. Em paralelo, um callback assíncrono recebe a categoria em quatro vias para que uma portinhola, relé ou indicador de faixa possa agir com base nela.

- **Duas camadas de resposta a partir de uma cabeça.** O modelo prevê papel, papelão, vidro, metal, plástico, têxtil, orgânico e rejeito. A categoria em quatro vias (可回收物 / 厨余垃圾 / 有害垃圾 / 其他垃圾) é uma **tabela de consulta sobre o argmax de oito classes, não uma segunda cabeça**, então adaptar às regras de uma autoridade local é uma edição de tabela em vez de um novo treinamento.
- **Gatilho sob demanda, não um fluxo de vídeo.** Botão, HTTP ou movimento, com debounce de 800 ms; um gatilho que chega enquanto outro está em andamento é mesclado em vez de enfileirado. Existe um modo contínuo, com limitação de taxa, e ele exige três previsões top-1 idênticas em sequência antes de publicar.
- **Um contrato que é verificado, não apenas documentado.** Cada payload é validado em relação ao esquema de evento antes da publicação, incluindo as duas regras que um JSON Schema não consegue expressar: `category` deve ser igual a `top3[0]`, e `confidence` deve ser igual a `top3[0].confidence`. Um payload que falha é contado e descartado.
- **Uma trilha opcional de vocabulário aberto.** Uma torre de visão SigLIP 2 pontuada contra protótipos de texto constantes, selecionada por implantação com `model.track: open_vocab`. Ela adiciona classes sem novo treinamento, responde em chinês ou inglês a partir do mesmo embedding de imagem e pode pontuar "this is not in my vocabulary".
- **Uma interface de atuador sem vinculação de pino.** O runtime faz callback com uma categoria; para onde isso vai é trabalho de integração, e é por isso que a mesma build roda em placas com cabeçalhos diferentes.

Os bytes da imagem nunca saem do dispositivo — o payload carrega apenas um caminho ou um URI de objeto em armazenamento.

- Código-fonte de empacotamento e guia de implantação: [sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- Escolhendo uma configuração e implantando: [página de reference design](https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Top-1 de material 0,8877, top-1 chinês em quatro vias 0,9500</h3>
                <p>Em uma divisão de validação deduplicada com 7417 imagens, medido com onnxruntime em uma CPU Apple M4. A decomposição completa está no apêndice.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>A baseline é EfficientNet-Lite0, não MobileNetV3-Small</h3>
                <p>A baseline original entrou em colapso sob INT8 em todas as três cadeias de borda testadas; Lite0 não entra, e é marginalmente mais precisa na mesma divisão.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Um item por imagem</h3>
                <p>Não há detector nesta cadeia. Dois itens em um quadro produzem uma resposta, e qual deles ela descreve é indefinido.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Nada foi medido em silício Jetson ou Hailo-8</h3>
                <p>O preset Jetson é o único com um arquivo de modelo, e nenhum engine jamais foi construído em um Jetson; o preset Hailo traz um selo de modelo pendente.</p>
            </div>
        </li>
    </ul>
</div>

### Como é a execução em um dispositivo

Abaixo está a área de descarte vista por uma reCamera PoE com o pacote `waste-sorting` instalado. Nada foi colocado em frente à câmera nesta execução — é uma referência de enquadramento, não um resultado de classificação.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="Enquadramento da área de descarte pela reCamera PoE, sem nada colocado à sua frente nesta execução"/>
</div>

Os resultados não vão para a imagem; eles vão para o MQTT. Abaixo estão eventos consecutivos capturados enquanto inscrito em `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Eventos de classificação consecutivos em waste/recamera-cvi/results, cada um trazendo o resultado de oito classes, o mapeamento em quatro vias e o tempo de inferência"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

### O que a demonstração realmente mostra

O único recurso enviado na galeria deste pacote é um esquema do caminho de dados desenhado para a solução. **Nenhuma imagem derivada de conjunto de dados é incluída em qualquer lugar do pacote** — ambos os conjuntos de dados de origem permitem redistribuição, mas o repositório upstream mantém toda imagem derivada de conjunto de dados fora do controle de versão e este pacote segue a mesma regra. `assets/models/` contém apenas manifestos de checksums; `SHA256SUMS.hef` está deliberadamente vazio porque nenhum HEF é enviado com o pacote.

## De que hardware você precisa

Três coisas na lixeira: algo que dispare o gatilho, uma câmera e um host.

**① Gatilho** — um botão ligado ao host, uma chamada HTTP para `POST /trigger` na porta 8080 ou movimento no quadro. Os três compartilham o mesmo debounce de 800 ms e produzem o mesmo evento, diferenciado pelo campo `trigger` no payload.

**② Câmera** — qualquer fonte USB, RTSP ou arquivo olhando para baixo na área de descarte. O design restringe o enquadramento, não o modelo de câmera: um item deve preencher uma parte significativa do quadro, e deve haver apenas um item nele. Um enquadramento que deixe o item pequeno degrada a classificação, e nenhum dos valores nesta página foi medido sob tal enquadramento.

**③ Host de classificação** — é isso que decide quais caminhos de modelo estão disponíveis para você, e a maior parte do custo.

| Host de classificação | Acelerador | Classificador como implantado | Trilha de vocabulário aberto | Quando escolhê-lo |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Não dimensionado para este módulo | Um ponto de descarte com o classificador baseline, host Seeed de menor custo com um arquivo de modelo |
| reComputer J4012 (Jetson Orin NX 16GB) | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Oferecida — a única classe de dispositivo em que está | Você espera adicionar tipos de itens depois sem novo treinamento |
| reComputer R2000 series (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | Não | Você está preparando hardware Hailo-8 para esta carga de trabalho; o selo do preset é `HEF pending` |

Ambos os modelos reComputer existem em um gabinete industrial sem ventoinha (reComputer Industrial J3011 / J4012) com o mesmo módulo e o mesmo runtime, para montagem em armário ou ao ar livre.

**Nenhuma figura nesta página foi tirada em nenhuma dessas placas.** As linhas Jetson descrevem o que vem no pacote, não o que foi medido. A coluna de vocabulário aberto é uma declaração de recursos do catálogo de dispositivos do pacote: a torre de visão SigLIP 2 é um ONNX de 371 MB a 66,93 ms p50 por imagem em uma CPU, então ela precisa de um acelerador, e o módulo Orin Nano 8GB não foi dimensionado para isso.

**④ Todo o resto** — um consumidor MQTT (o pacote sobe seu próprio broker local na porta 1883) e, se um flap ou indicador de faixa estiver no escopo, o hardware do driver mais o código de integração para o callback de GPIO, que é fornecido sem vinculação de pino. Nada na cadeia principal precisa de acesso à internet.

## Como implantar no local

Duas fases: ajustar a ótica e o gatilho, depois instalar o software. A implantação é classificada como **intermediária**, cerca de **35 minutos** para uma primeira instalação.

### Um: enquadrar a área de descarte e escolher o gatilho

:::tip[Um item por imagem, e ele precisa estar grande no quadro]
Não há detector. Dois itens em uma mesma foto produzem uma resposta e qual deles ela descreve é indefinido, e um item que ocupa uma pequena parte do quadro é classificado pior — nenhuma das medições foi feita sob esse tipo de enquadramento. Monte a câmera apontando para baixo na área de descarte de forma que um único item preencha uma parte significativa da imagem, e decida antes da implantação se o gatilho será um botão, uma chamada HTTP ou movimento.
:::

### Dois: instalar o software

Os passos por dispositivo estão na página do design de referência, onde responder a algumas perguntas sobre o local também fornece o pacote de aplicativo correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

A estrutura é a mesma em ambos os presets:

1. **Escolha um preset e um host.** `Camera + reComputer J30 / J40 (Orin)` ou `Camera + reComputer R2000 series (Hailo-8)`.
2. **Implante o runtime de triagem de resíduos** (obrigatório). No caminho Orin isso compila o mecanismo TensorRT no dispositivo durante a implantação — um mecanismo é vinculado à arquitetura exata da GPU e à versão do TensorRT e não pode ser enviado pré-compilado. No caminho Hailo a etapa de implantação verifica os três limites de ABI da Hailo e então **para no arquivo de modelo ausente**: esse preset prepara a placa, ele não entrega hoje um classificador em execução.
3. **Observe a classificação em tempo real** (opcional). O painel local na porta 8080 traz a pré-visualização MJPEG, os contadores de integridade e os eventos recentes com seus top-3 — é aqui que você confirma o enquadramento antes de ligar qualquer coisa.
4. **Ligue o gatilho e confirme uma classificação** (obrigatório). Um pressionar de botão, chamada HTTP ou evento de movimento deve produzir exatamente uma mensagem MQTT em `waste/<stream-id>/results` cujo `category` e `confidence` correspondam a `top3[0]`.
5. **Mude para a trilha de vocabulário aberto** (opcional, apenas Orin) — abordada mais abaixo.

## Como conectá-lo ao seu próprio sistema

Os dados saem do host de triagem em duas interfaces mais um callback em processo, com um canal lateral MQTT opcional. Todos eles são servidos pelo próprio host.

- **Um sistema de operações ou de registro** — assine `waste/<stream-id>/results` na porta 1883. Uma mensagem JSON por classificação, nunca uma por classe.
- **Uma interface de quiosque, um gateway PLC ou um script de teste** — `POST /trigger` na porta 8080 dispara uma captura-e-classificação; `/events` retorna os resultados recentes com seus top-3.
- **Um flap, relé ou indicador de faixa** — o callback assíncrono de GPIO carrega a categoria de quatro vias. Ele não tem vinculação de pino; fornecer essa vinculação é trabalho de integração.

### Tabela completa de interfaces

| Tipo | Onde | Conteúdo | Observações |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | Uma mensagem por classificação. Validada em relação ao esquema de evento antes da publicação |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` dispara uma captura-e-classificação (fonte de gatilho `http`); visualização ao vivo MJPEG; integridade com tempo de inferência, contadores de gatilho e de debounce e contadores MQTT; resultados recentes com top-3 | Painel local, sem autenticação |
| Callback GPIO | em processo | A categoria de quatro vias, de forma assíncrona | `actuator.enabled` é false por padrão. Sem vinculação de pino |

Três semânticas de campo que são fáceis de usar de forma incorreta:

- **A imagem nunca está no payload.** `image_ref.kind` é `none`, `local` ou `object_store`. Bytes de imagem em Base64 em um payload são uma violação de contrato e são rejeitados antes da publicação.
- **`category` sempre é igual a `top3[0]`, e `confidence` sempre é igual a `top3[0].confidence`.** Ambos são verificados antes da publicação; um payload que viola o contrato é contado e descartado em vez de enviado, então um consumidor nunca precisa reconciliar os dois.

O broker MQTT incluído permite conexões anônimas — isso é para comissionamento local. Uma implantação que sai da bancada precisa de um broker com credenciais.

## Para engenheiros: detalhes de implementação

### Duas trilhas, uma taxonomia

| Trilha | Modelo | Entrada | Tamanho | Onde roda |
|---|---|---|---|---|
| Básica (fornecida) | EfficientNet-Lite0 (`m1c`), cabeça de 8 classes | 224² | 13.477.056 B ONNX | Ambos os presets; TensorRT FP16 em Orin, INT8 HEF em Hailo-8 |
| Básica (substituída) | MobileNetV3-Small (`m1b`) | 224² | 6.118.606 B ONNX | Mantida apenas como contraste de colapso INT8 |
| Vocabulário aberto (opcional) | Torre de visão SigLIP 2 ViT-B/16 + protótipos de texto constantes | 224² | 371.695.898 B ONNX | Apenas Orin NX 16GB, `model.track: open_vocab` |

Bancos de protótipos mais o relatório de calibração adicionam cerca de 155 KB. A cabeça de oito classes alimenta uma tabela de consulta para a categoria de quatro vias; a tabela é o ponto de extensão, não a cabeça.

### Por que a base mudou, e o que ainda não foi comprovado

O grafo INT8 do MobileNetV3-Small entrou em colapso em **todas** as cadeias de borda testadas — concordância do emulador Hailo DFC 0,115, RK3576 0,10, RK3588 0,22, contra aproximadamente 0,98–1,00 para fp16 nas mesmas cadeias. A quantização pós-treinamento do ORT reproduziu o mesmo colapso, o que descarta um bug específico de compilador: isso é degradação de toda a rede, não um problema localizado de operação.

Existe um defeito concreto na receita de treinamento: `AdamW(model.parameters(), weight_decay=1e-4)` aplica weight decay ao gamma e ao bias do BatchNorm, e 4 das 34 camadas `BatchNorm2d` no checkpoint m1b têm `running_var` / `|gamma|` degradados à magnitude denormal de float32, nas mesmas camadas onde o penhasco de acurácia INT8 aparece. **Isso não é uma causa raiz comprovada.** EfficientNet-Lite0 tem a mesma configuração de weight decay e o mesmo tipo de outliers de peso (máx `|w|` 35,70 contra 52,35 do m1b, apenas 32% menor) e ainda assim não entra em colapso — uma queda tão pequena não explica por si só uma mudança de 0,115 para 0,89+ de concordância. A leitura mais provável é que SE-gating e hard-swish sejam estruturalmente mais sensíveis a INT8 e o defeito de weight decay amplifica essa sensibilidade em vez de causá-la. Nenhuma ablação foi executada para confirmar qualquer uma das leituras.

O custo da troca é apenas na CPU: o tempo médio de inferência subiu de 1,886 ms para 16,796 ms, cerca de 9×, porque Lite0 tem mais FLOPs do que MobileNetV3-Small. **Nos NPUs realmente testados a penalidade não se mantém** — veja a tabela do RK3588 abaixo, onde Lite0 INT8 roda a 3,803 ms p50 contra 4,70 ms do m1b.

### Gatilho, debounce e o modo contínuo

Uma classificação por gatilho. O debounce de 800 ms mescla um gatilho que chega enquanto outro está em andamento em vez de enfileirá-lo, então um duplo clique rápido produz uma resposta, não duas. O modo contínuo é limitado em taxa e exige **três previsões idênticas de top-1 em sequência** antes de publicar; o modo de gatilho não tem esse alisamento, e um único disparo é uma única resposta.

### Trilha de vocabulário aberto: duas constatações que moldam como ela é implantada

- **Use o caminho hierárquico, não a predição direta de quatro vias.** Previsões em inglês de oito classes mapeadas para as quatro categorias marcam 0,9393; prompts em chinês prevendo diretamente as quatro categorias marcam 0,8478. "Recyclable" não é um conceito visual; "glass bottle" é.
- **`residual` é o elemento mais fraco na configuração.** Seu AUROC leave-one-out é 0,5795, perto do acaso: remova "general waste" do vocabulário e alguma palavra de material sempre captura esses itens com alta confiança. É uma definição de fallback, não um conceito visual.

### Escopo dos números acima

- **Acurácia da base e de vocabulário aberto e latência de CPU** — onnxruntime 1.25.1, CPU Apple M4, batch 1.
- **INT8 da base para Hailo-8** — construído com DFC 3.31.0 / HailoRT 4.21.0, `--hw-arch hailo8`. O `efficientnet_lite0_waste8_u8.hef` fornecido é quantizado em `optimization_level=2` (afinamento por destilação com reconhecimento de quantização, 8 épocas, correção de bias ativada) sobre 2048 recortes de treinamento uint8 balanceados por classe, e compilá-lo exige uma GPU visível dentro do contêiner DFC; ele foi medido em um Hailo-8 sobre todo o conjunto de validação de 7417 imagens. O mesmo grafo em `optimization_level=1` marca 2,40 pontos abaixo de fp32 e não é implantado. A comparação com o emulador em 200 imagens de validação (concordância 0,890) veio do empacotamento anterior `efficientnet_lite0_waste8.hef`.
- **Torre SigLIP 2 de vocabulário aberto** — `hailo parser` passa de ponta a ponta, mas `hailo optimize` (INT8 PTQ, 256 imagens de calibração, `optimization_level=1`) falha na camada `ne_activation_mul_and_add78`, então não há HEF para ela.
- **fp16 e INT8 da base em RK3588** — uma placa de desenvolvimento RK3588, librknnrt 2.3.2, 50 imagens de validação. Não existe pacote de implantação para essa placa.
- **Base em RK3576** — uma placa de desenvolvimento RK3576, apenas m1b; Lite0 não foi convertido para RK3576.
- **Acurácia em campo** — ambos os conjuntos de dados são fotografias de item único (TrashNet em um cartaz branco, GC3 com objetos fora do centro e frequentemente ocluídos), então colete um conjunto de campo da sua própria lixeira e meça novamente nele.

## Apêndice: dados medidos {#measured-data}

Ignore esta seção se você só precisa implantar. **A maioria dos números aqui é de onnxruntime em uma CPU Apple M4**, e cada tabela indica de onde vieram seus números. Dois classificadores foram medidos na **mesma divisão**, mesmas imagens, mesma entrada 224², mesmo pós-processamento, na mesma máquina.

### Classificador de referência — EfficientNet-Lite0 (m1c, enviado)

| Métrica | Valor | Condições |
|---|---:|---|
| Top-1 de material (8 classes) | **0.8877** | val, 7417 imagens; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13.477.056 B |
| Top-5 de material | 0.9833 | mesmas |
| Top-1 chinês de quatro vias | **0.9500** | mesmas; consulta em cima do argmax de oito classes |
| macro-F1 (7 classes com amostras) | 0.8511 | `textile` excluída — zero amostras |
| Top-1 de material, teste reservado | 0.8802 | teste, 7290 imagens, mesma divisão que m1b |
| Latência de inferência, imagem única, CPU | média 16,796 ms / p50 14,724 ms / p95 28,718 ms | apenas `session.run`, CPU Apple M4, batch 1 |
| Imagens abaixo de confiança 0,5 | 318 (4,3%) | val |
| Concordância ORT PTQ INT8 vs fp32 | 0.965 | 200 imagens de val, por canal + MinMax — não é um colapso |

Diretórios de execução: `evaluation/runs/2026-09-06-m1c-cpu`, `evaluation/runs/2026-09-06-m1c-int8-diag-quick`.

**Relate os dois números de top-1 juntos.** O valor de quatro vias (0,9500) é muito maior que o valor de material (0,8877) porque a confusão vidro↔metal↔plástico é absorvida — todos os três mapeiam para 可回收物. Citar apenas o número de quatro vias exagera o que o modelo sabe sobre materiais.

### MobileNetV3-Small (m1b) — substituído, mantido como contraste de colapso INT8

Mesma divisão, mesmas imagens, mesma CPU.

| Métrica | Valor | Condições |
|---|---:|---|
| Top-1 de material (8 classes) | 0.8792 | val, 7417 imagens; ONNX `51c7c0ed…` |
| Top-5 de material | 0.9854 | mesmas |
| Top-1 chinês de quatro vias | 0.9519 | mesmas |
| macro-F1 (7 classes com amostras) | 0.8292 | `textile` excluída |
| Top-1 de material, teste reservado | 0.8807 | teste, 7290 imagens |
| Latência de inferência, imagem única, CPU | média 1,886 ms / p50 1,769 ms / p95 2,276 ms | apenas `session.run`, CPU Apple M4, batch 1 |
| Imagens abaixo de confiança 0,5 | 335 (4,5%) | val |
| **Colapso INT8 — emulador Hailo-8** | top-1 0,15, concordância 0,115 vs CPU/nativo | 200 imagens de val; concordância fp16 nas mesmas imagens é 1,000 |
| **Colapso INT8 — RK3576 (hardware real)** | concordância 0,10 vs CPU golden | concordância fp16 0,98 no mesmo dispositivo |
| **Colapso INT8 — RK3588 (hardware real)** | concordância 0,22 vs CPU golden | concordância fp16 0,98 no mesmo dispositivo |

Diretórios de execução: `evaluation/runs/2026-09-06-m1b-cpu`, `2026-09-06-m1b-hef`, `2026-09-06-rk3576-cat`, `2026-09-06-rk3588-radxa`.

### Trilha de vocabulário aberto — SigLIP 2 ViT-B/16

Mesma divisão, mesmas imagens, mesmo pós-processamento, mesma máquina.

| Métrica | Valor | Condições |
|---|---:|---|
| Top-1 de material (8 classes) | 0.8501 | val, 7417 imagens; conjunto de prompts em inglês `waste8-en/v1`, template `t02`, 16-shot α=0,8, temperatura 0,0075 |
| Top-5 de material | 0.9987 | mesmas |
| Top-1 chinês de quatro vias | 0.9393 | mesmas; caminho hierárquico (oito classes, depois mapeadas) |
| macro-F1 (7 classes) | 0.7460 | mesmas |
| ECE (15 bins) | 0.0221 | mesmas |
| AUROC de conjunto aberto | 0.7538 | média sobre as 7 classes com amostras, leave-one-class-out, score = `1 - max softmax` |
| Concordância translingual (zh vs en, mesma imagem) | 0.8698 material / 0.9143 quatro vias | um embedding visual, três bancos de protótipos — sem ruído de pré-processamento ou amostragem neste número |
| Top-1 de material, teste reservado | 0.8620 | teste, 7290 imagens; templates, α e temperatura nunca foram buscados nele |
| Latência de inferência, imagem única | p50 66,93 ms / p95 91,62 ms | CPU Apple M4, batch 1, apenas a torre de visão |

Diretório de execução: `evaluation/runs/2026-09-05-w1-cpu`.

### Referência vs vocabulário aberto, mesma divisão

A coluna de referência nesta comparação é **MobileNetV3-Small**, o modelo que era a referência quando a comparação foi executada — não o EfficientNet-Lite0 enviado hoje. Lite0 é marginalmente mais preciso nesta divisão (val 0,8877 contra 0,8792), então a diferença de acurácia não diminui; o múltiplo de latência sim, de 40× contra o p50 de CPU do MobileNetV3-Small para cerca de 4–5× contra o próprio p50 de CPU do Lite0 de cerca de 14,7 ms. **Nenhuma das trilhas foi re-medida em relação à outra desde a troca da referência.**

| Métrica | Referência (MobileNetV3-Small) | Vocabulário aberto (SigLIP2-B/16) |
|---|---:|---:|
| Top-1 de material, val | **0.8792** | 0.8501 |
| Top-1 de material, teste | **0.8807** | 0.8620 |
| Top-1 chinês de quatro vias, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| AUROC de conjunto aberto | não é possível — uma cabeça de conjunto fechado não pode descartar uma classe sem retreino | **0.7538** |
| Concordância translingual | sem lado de texto | **0.8698 / 0.9143** |
| Nova classe zero-shot | requer um retreino | **edição de prompt** |
| Latência de CPU p50 | **1,57 ms** | 66,93 ms |

Ambas as colunas vêm dos mesmos arquivos de val/test, da mesma entrada 224² e do mesmo caminho de código de softmax / top-k / mapeamento. A coluna de referência foi recomputada nesta divisão para a comparação; seu top-1 de val coincide dígito por dígito com o relatório m1b isolado.

### Hailo-8 — compilado e verificado em INT8 no emulador DFC, **sem hardware Hailo-8**

| Caminho | Status |
|---|---|
| EfficientNet-Lite0 de referência (m1c) → HEF | **Compilado com sucesso, uma tentativa, nenhuma correção necessária.** `hailo optimize` e `compiler` ambos saem com código 0 na primeira tentativa — Lite0 não tem ramo Squeeze-Excite, então nunca atinge o problema de faixa de deslocamento de `avgpool` para o qual m1b precisou de uma correção no script do modelo. Em 200 imagens de val (DFC 3.31.0 / emulador HailoRT 4.21.0): concordância INT8 vs CPU/nativo **0,890**, acurácia contra o ground truth **0,755** (nativo/CPU é 0,795 nas mesmas imagens) — uma queda de 4 pontos, não um colapso. Similaridade de cosseno com CPU: média 0,948, mínimo 0,441. **Tudo a partir do emulador x86 no host de compilação; nenhuma placa Hailo-8 PCIe foi usada.** `evaluation/runs/2026-09-06-m1c-hef` |
| MobileNetV3-Small de referência (m1b) → HEF | Compilado, mas INT8 entra em colapso: concordância do emulador 0,115, acurácia 0,150 — perto da base aleatória de 1/7. Substituído por este motivo |
| Torre de visão SigLIP 2 → HEF | `hailo parser` passa de ponta a ponta sem op não suportada. `hailo optimize` (INT8 PTQ, 256 imagens de calibração, optimization_level=1) **falha** com `NegativeSlopeExponentNonFixable` na camada `ne_activation_mul_and_add78` — "Desired shift is 16.0, but op has only 8 data bits". Sem HAR otimizado, sem execução do compilador, sem HEF |

**O que "0,89 de concordância" suporta e não suporta.** Suporta: EfficientNet-Lite0 quantiza em INT8 sem o colapso de padrão que o MobileNetV3-Small mostrou no mesmo pipeline de compilação e no mesmo conjunto de calibração, e `hailo optimize` não precisou de nenhuma solução alternativa para o ramo SE. Não suporta: que o HEF classifica lixo corretamente em um Hailo-8 real — meça latência em nível de placa, comportamento térmico e acurácia na sua própria unidade. O conjunto de calibração (256 imagens) também está abaixo do limite de ~1024 imagens que a documentação do DFC normalmente recomenda, e foi reutilizado sem alterações a partir da execução de m1b em vez de ser reamostrado para Lite0.

A verificação numérica da fase de parse também passou — o emulador nativo do DFC coincide com o onnxruntime de CPU com similaridade de cosseno 1,0 e top-1 idêntico em todas as 20 imagens de comparação — portanto a tradução ONNX→HAR não introduz erro. Essa é a metade da questão que pode ser respondida sem um Hailo-8; a metade INT8 não pode. Da mesma forma, nada disso sustenta a afirmação de que SigLIP 2 não pode rodar em um Hailo-8: foi feita uma tentativa em um nível de otimização com um conjunto de calibração, e a mensagem de erro cita três causas possíveis, das quais apenas uma (normalização do conjunto de calibração) foi verificada e descartada.

### Placa de desenvolvimento RK3588 — hardware real, INT8 de referência utilizável

Medição no dispositivo, não emulador. Convertido em `wsl2-local` com rknn-toolkit2 2.3.2, executado em uma placa de desenvolvimento RK3588 com librknnrt **2.3.2** (o symlink a nomeia 2.3.0; a versão dentro da biblioteca é o que importa), 50 imagens de val, `core_mask=AUTO`, quantização por canal.

| Modelo / precisão | Latência p50 / p95 (média) | Concordância com CPU golden | Acurácia vs ground truth | Condições |
|---|---|---|---|---|
| **EfficientNet-Lite0 (m1c), fp16** | 7,906 ms / 8,129 ms (7,041 ms) | 1,00 | 0,78 | ONNX sha `e9f9e847…`, 50 imagens de val |
| EfficientNet-Lite0 (m1c), int8 calib64+normal | 3,780 ms / 3,984 ms (3,807 ms) | 0,90 | 0,72 | calibração de 63 imagens, algoritmo `normal` |
| EfficientNet-Lite0 (m1c), int8 calib64+mmse | 3,785 ms / 3,981 ms (3,808 ms) | 0,98 | 0,78 | calibração de 63 imagens, algoritmo `mmse` |
| EfficientNet-Lite0 (m1c), int8 calib256+normal | 3,766 ms / 3,920 ms (3,500 ms) | 0,90 | 0,72 | calibração de 252 imagens, algoritmo `normal` |
| **EfficientNet-Lite0 (m1c), int8 calib256+mmse** — recomendado | 3,803 ms / 4,003 ms (3,834 ms) | **1,00** | **0,78** | calibração de 252 imagens, `mmse`; coincide com fp16 tanto em concordância quanto em acurácia, **52% mais rápido** |
| MobileNetV3-Small (m1b, substituído), fp16 | 4,44 ms / 6,32 ms | 0,98 | — | ONNX sha `aa181dd5…`, apenas contraste |
| MobileNetV3-Small (m1b, substituído), int8 | 4,70 ms / 11,04 ms | **0,22 — colapsado** | — | calibração de 64 imagens, apenas contraste |

**Leia as linhas de contraste de m1b como paridade de tempo de execução, não como acurácia.** Essa execução usou um ONNX MobileNetV3 com sha256 `aa181dd5…`, que **não** é o arquivo m1b (`51c7c0ed…`) ao qual todas as medidas de acurácia de m1b nesta página se referem. Os dois não devem ser combinados em uma afirmação de acurácia.

**Configuração recomendada: `calib256+mmse`.** As quatro variantes Lite0 INT8 ficam em uma faixa de concordância de 0,90–1,00; nenhuma entra em colapso. `mmse` é de 40 a 90× mais lento para converter do que `normal` (17,3 min contra 11,5 s com 256 imagens de calibração) — um custo de conversão único, não um custo de tempo de execução. O int8 do m1b foi *mais lento* do que o próprio fp16 (4,70 ms contra 4,44 ms), evidência de que sua execução nunca utilizou o caminho rápido de INT8. Diretórios de execução: `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `2026-09-06-rk3588-radxa`.

Torre de visão SigLIP 2 no mesmo dispositivo, não afetada pela mudança do m1c:

| Modelo / precisão | Latência p50 / p95 | Concordância com o golden de CPU | Condições |
|---|---|---|---|
| Torre de visão SigLIP 2, fp16 | 169,4 ms / 170,5 ms | cosseno de embedding média **0,999617**, mín 0,998841 | ONNX sha `6f664af0…`, 191 MB `.rknn` |

### Placa de desenvolvimento RK3576 — hardware real, apenas m1b

| Modelo / precisão | Latência p50 / p95 | Concordância com o golden de CPU | Condições |
|---|---|---|---|
| MobileNetV3-Small (m1b), fp16 | 9,49 ms / 12,49 ms | top-1 **98%** (49/50) | `evaluation/runs/2026-09-06-rk3576-cat` |
| MobileNetV3-Small (m1b), int8 | 4,62 ms / 6,68 ms | top-1 **10%** (5/50) — inutilizável, pior que aleatório | calibração com 64 imagens do treino |
| Torre de visão SigLIP 2, fp16 | 152,51 ms / 176,59 ms | cosseno de embedding média **0,99965**, mín 0,99900 | mesma execução |

**EfficientNet-Lite0 não foi convertido nem executado no RK3576.** Não presuma que o resultado de INT8 no RK3588 se transfere: RK3576 e RK3588 são gerações diferentes de NPU e se comportaram de forma diferente no mesmo grafo MobileNetV3-Small (10% contra 22% de concordância), então qualquer afirmação em qualquer direção seria um palpite.

### Suporte de plataforma

| Plataforma | Status |
|---|---|
| Jetson Orin (TensorRT) | Pacote de implantação enviado, baseline trocado para o ONNX EfficientNet-Lite0; **um engine nunca foi construído em nenhum Jetson** |
| reComputer R2000 series | Pacote de implantação enviado; baseline HEF compilado e verificado em INT8 apenas no emulador DFC (concordância 0,890) — **nenhum hardware Hailo-8 o executou**. A torre SigLIP 2 ainda falha na quantização INT8 |
| RK3588 | **Paridade de inferência verificada em hardware real, fp16 e INT8 (m1c); nenhum pacote de implantação** — nenhum arquivo compose, nenhuma imagem, nenhum preset. A conversão e o runtime funcionam; o empacotamento não existe |
| RK3576 | Paridade de inferência verificada em hardware real, fp16 e INT8 — **apenas m1b, não retestado com o baseline atual**; nenhum pacote de implantação |
| CPU (onnxruntime) | Todos os números de acurácia nesta página |

### Pegada de implantação

| Item | Tamanho |
|---|---|
| Baseline ONNX (`efficientnet_lite0_waste8.onnx`, m1c, atual) | 13.477.056 B |
| Baseline ONNX (`mobilenetv3s_waste8.onnx`, m1b, substituído) | 6.118.606 B |
| Torre de visão SigLIP 2 ONNX (`siglip2_vision_224.onnx`) | 371.695.898 B |
| Bancos de protótipo + relatório de calibração | ~155 KB no total |

### Onde ele se degrada, e o que os números não cobrem

- **`textile` tem zero amostras de treinamento e zero de avaliação.** Nenhum dos conjuntos de dados de origem contém uma categoria de pano ou tecido — a exportação GC3 não tem esse rótulo, ao contrário de uma descrição secundária amplamente repetida. O oitavo logit existe e a saída ONNX ainda é `1×8` porque o formato de saída faz parte do contrato, mas nada o treinou ou testou, todas as tabelas relatam `n/a` para essa classe em vez de 0, e o modelo nunca a previu uma única vez.
- **`hazardous` (有害垃圾) não tem nenhuma classe de material mapeada para ela.** Ela está no enum para que o esquema permaneça estável; esta build nunca a emitirá.
- **Mudança de domínio.** Ambos os conjuntos de dados são fotografias de itens únicos: TrashNet em um cartaz branco sob luz do dia ou luz interna, GC3 um conjunto de detecção com objetos fora do centro e frequentemente ocluídos. Nenhum é uma lixeira real — não há lixo molhado, amassado, empilhado, contra a luz ou parcialmente ensacado na avaliação. **Nenhum conjunto de campo foi coletado, portanto não há número para quanto a acurácia cai em uma lixeira real.** Espere que caia; o tamanho da queda é desconhecido.
- **`organic` domina os dados.** 48,9% do conjunto de treinamento e 47,1% do de validação, porque a classe `BIODEGRADABLE` do GC3 sozinha responde por 45.407 de 74.090 caixas originais. Seu recall (0,9791) está bem acima de todas as outras classes (0,70–0,88), e a matriz de confusão mostra o modelo empurrando itens incertos para ela.
- **`residual` tem 20 amostras de validação.** Nenhuma métrica de precisão para essa classe deve ser citada isoladamente — a precisão de 0,2754 na trilha de vocabulário aberto é um artefato tanto da contagem de amostras quanto do modelo.
- **A deduplicação é o motivo pelo qual esses números são de acurácia e não de vazamento.** GC3 reutiliza fotografias de origem do TrashNet. O agrupamento é por lote de origem + imagem de origem + hash perceptual (dhash 8×8, Hamming ≤ 3), unidos em componentes conectados: 430 mesclagens de quase duplicatas, **183 delas entre os dois conjuntos de dados**. Os grupos se movem entre splits como uma unidade, e o split garante que nenhum grupo e nenhum dhash idêntico se estenda por dois splits.

## Fontes de dados e ativos

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **Licença MIT, Copyright (c) 2017 Gary Thung**. Verificado em duas fontes de primeira parte: o próprio arquivo `LICENSE` do repositório no commit `6fa2b87`, e o campo `license` do cartão oficial do conjunto de dados no HuggingFace. **Correção registrada:** o próprio SPEC do projeto upstream e seu relatório de survey registram este conjunto de dados como CC BY 4.0. Isso está errado, e nenhuma fonte de primeira parte declara CC BY 4.0. MIT é mais permissiva — exige que o aviso de copyright e de licença seja mantido, mas não impõe nenhuma cláusula de compartilhamento pela mesma licença.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**, declarado textualmente no próprio `README.dataset.txt` do pacote de exportação. Caminho do projeto `material-identification/garbage-classification-3` no Roboflow Universe.
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revisão `75de2d55…`, Apache-2.0. Usado apenas pela trilha opcional de vocabulário aberto.
- **Pesos iniciais MobileNetV3-Small ImageNet** (torchvision) — BSD-3-Clause.
- **Código de runtime upstream** — Apache-2.0.
- **Diagrama de arquitetura** — desenhado para esta página a partir do próprio catálogo de dispositivos e interfaces de saída do pacote. Nenhuma imagem de conjunto de dados.

String de atribuição, a ser usada textualmente em material voltado para fora derivado desses conjuntos de dados:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**Nenhuma imagem derivada de conjunto de dados é incluída neste pacote.** Ambas as licenças permitem redistribuição, mas o repositório upstream mantém toda imagem derivada de conjunto de dados fora do controle de versão — `data/raw`, `data/cls`, `data/crops` e as sobreposições de avaliação estão todas no gitignore — e este pacote segue a mesma regra. `assets/models/` contém apenas manifestos de checksums.
