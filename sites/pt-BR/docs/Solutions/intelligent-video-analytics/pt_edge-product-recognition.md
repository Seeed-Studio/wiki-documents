---
description: Reconhecimento de produtos de supermercado na borda — um detector de classe única, uma galeria de embeddings que registra um novo SKU a partir de fotografias em vez de um treinamento, de que hardware precisa, como é implantado, os dados medidos por placa e detalhes de implementação para engenheiros
title: 'Reconhecimento de Produtos na Borda: Construção, Implantação e Resultados Medidos'
keywords:
  - reconhecimento de produtos na borda
  - reconhecimento de produtos no checkout sem código de barras
  - auditoria de prateleira com detecção de espaços vazios
  - registro de SKU sem re-treinamento
  - galeria de produtos FAISS
  - recuperação de imagens com embedding ArcFace
  - detector de classe única YOLOX
  - embedding DINOv2 INT8
  - paridade RKNN fp16
  - Hailo-8 HEF
  - MQTT
  - RK3588
  - reComputer R2000 series
image: https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png
slug: /solutions/edge-product-recognition
sidebar_position: 6
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-14'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Leia isto primeiro]
Os resultados de reconhecimento não são uma medição legal e não podem ser usados como base para precificação ou para uma contagem juridicamente vinculante.
:::

## O que esta solução faz

Uma câmera observa uma esteira de checkout ou a frente de uma prateleira. Cada produto no quadro é encaixotado, recortado, transformado em um vetor de 512 dimensões e consultado em uma galeria de SKUs registrados. No checkout, a saída é uma cesta (SKU-para-quantidade, agregada por id de trilha para que um item passando pela câmera seja contado uma vez); na prateleira é um estado de slot (ok, vazio, wrong_sku, desconhecido, agregado por posição de planograma). Uma mensagem MQTT por quadro carrega os resultados.

Adicionar um produto na loja não exige re-treinamento: fotografe o novo SKU de três a oito vezes, envie as imagens para o console, e a galeria ganha uma nova versão imutável. O detector é de classe única e só responde "há um produto aqui", então ele nunca aprende produtos individuais; o embedder também não é atualizado.

- Seleção e implantação: [Página de design de referência](https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition)
- Repositório upstream: não publicado. O pacote não traz `intro.links.github`; o código vive em um repositório interno no momento do empacotamento.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>Adicione um SKU com 3–8 fotos, sem re-treinamento</h3>
                <p>O registro cria uma nova versão imutável da galeria. Sair de uma imagem de registro para oito aumenta o top-1 em 28 pontos percentuais (veja desempenho e dados medidos).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>A detecção roda em um NPU ou GPU</h3>
                <p>RKNN fp16 no RK3588 concorda com a referência de CPU em 99,85% das caixas a 56,7 ms p50; o Hailo-8 INT8 HEF roda a 9,04 ms p50 com 94,77% de concordância; TensorRT fp16 em reComputer J40 series (J4012) roda a 5,18 ms p50 com 99,91% de concordância.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Suas próprias câmeras e sistemas de loja</h3>
                <p>Qualquer câmera RTSP / USB. O PDV lê SKU-para-quantidade via MQTT, um sistema de reposição lê slots vazios e errados, e uma API HTTP atende consultas de eventos e gerenciamento da galeria.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Os dados permanecem no local</h3>
                <p>Câmera, host de reconhecimento e host do console são todos locais, e o broker roda na pilha do console. O broker incluído é anônimo em texto puro; adicione contas e TLS antes de entrar em produção.</p>
            </div>
        </li>
    </ul>
</div>

### O console

O pacote upstream traz quatro capturas de tela da interface de gerenciamento: a lista de eventos, o detalhe de evento por caixa, a galeria de produtos e o painel de checkout/prateleira. Todas as quatro foram produzidas pela ferramenta upstream `web_demo` contra fixtures sintéticos; os SKUs, escores de similaridade e eventos nelas são dados de teste e mostram apenas o layout da interface.

### Os três estados da prateleira

A decisão de prateleira foi medida na reComputer RK3588 series e na reComputer R2000 series + Hailo-8. Cada slot recebe um de três estados: correto, vazio ou SKU errado.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="Painel de prateleira com cada slot correspondendo à galeria, marcado como correto"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="Um item removido da mesma prateleira; esse slot fica vazio"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="Um item que não pertence ao slot; ele é marcado como SKU errado com o SKU realmente correspondido"/>
</div>

Os três estados em sequência:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="A mesma prateleira passando pelos estados correto, vazio e SKU-errado"/>
</div>

A cadeia de checkout gera trilhas por item:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Trilhas de itens e reconhecimento por item na visão de checkout"/>
</div>

Esses quadros vêm de duas execuções de hardware, `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`, usando produtos que o projeto comprou; nenhum vem de um dataset.

## De que hardware você precisa

Quatro coisas por site: uma câmera, um host de reconhecimento, um host de console e uma máquina de conversão x86_64 (usada uma vez por modelo).

**① Câmera** — qualquer câmera RTSP / USB montada acima do checkout ou voltada para a prateleira; nada roda nela. O tamanho de entrada é compilado no artefato: 640² para checkout, 1280² para prateleira.

**② Host de reconhecimento** — é aqui que os três presets diferem:

| | Host | Medido neste hardware | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Detector no NPU, embedder nos quatro núcleos A76 | Ambos os estágios: 9,04 ms de detecção, 91,95 ms por embedding de recorte | Você precisa de dados medidos tanto para detecção quanto para embedding |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector no NPU da Rockchip, embedder na CPU ou no NPU | Detector com 99,85% de concordância de caixas e 56,7 ms; com o embedder no NPU, um replay de prateleira com 20 SKUs publicou resultados em 924 ms p50 desde a detecção | Você já usa placas Rockchip, ou a câmera está voltada para uma prateleira. RK3576 usa a mesma toolchain |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ou [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Caminho TensorRT, detector e embedder na GPU | J4012: 5,18 ms de detecção, 4,23 ms por embedding de recorte; replay de checkout com 2956 quadros e 0 quadros perdidos | Você já usa Jetson ou quer toda a cadeia em uma única máquina |

Todos os valores são medidos no hardware daquela linha.

**③ Host do console** — sua própria máquina Linux amd64 ou arm64 com Docker, sem necessidade de GPU, acessível por cada dispositivo de reconhecimento. Ela executa três contêineres: o serviço de registro/consulta, a interface de gerenciamento e o broker MQTT. **Ambas as imagens de contêiner são construídas neste host a partir do repositório upstream**, não puxadas de um registry.

**④ Uma máquina de conversão x86_64** — nem o rknn-toolkit2 nem o Hailo Dataflow Compiler rodam na placa alvo. Cada modelo é convertido uma vez; as implantações não repetem isso.

### Limites de Seleção Negativa

- **Tamanho do catálogo e latência de busca**: Se o catálogo local de produtos exceder 200 SKUs, a latência de busca vetorial linear aumenta. Para catálogos maiores (>500 SKUs), implante indexação ANN ou faça offload da busca.
- **Embedding apenas em CPU**: Nunca execute extração de embedding apenas na CPU (ultrapassa 900 ms por recorte); sempre verifique aceleração de hardware NPU ou TensorRT.

## Como implantar no local

Defina primeiro o artefato e a posição da câmera, depois instale o software em quatro etapas por preset.

### 1. Montagem: escolha o artefato e depois a posição da câmera

:::tip[O tamanho de entrada é fixo na conversão]
O tamanho de entrada é compilado no artefato e não pode mudar em tempo de execução. Um artefato 640² olhando para uma prateleira perde produtos distantes; mudar para 1280² eleva o mAP50-95 de pequenos objetos no teste SKU-110K de 17,49 para 26,88. Decida primeiro se é checkout ou prateleira, depois monte a câmera de forma que os produtos ocupem uma fração adequada do quadro.
:::

No preset Hailo-8, o embedding é uma inferência de CPU por caixa. Aos 91,95 ms por recorte medidos na reComputer R2000 series, uma cesta com cinco itens leva cerca de meio segundo; um quadro de prateleira na densidade medida de 157,6 caixas leva cerca de 14 segundos. **Implantações em prateleira neste preset devem subamostrar quadros ou amostrar por slot.** Em reComputer J40 series (J4012) o embedding roda na GPU a 4,23 ms por recorte.

### 2. Software, quatro etapas

As etapas por dispositivo estão na página de design de referência; esta seção lista o fluxo. Todos os três presets seguem as mesmas quatro etapas:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configure e implante 🖱️</font></span></strong>
    </a>
</div><br />

1. **Suba o console** — o serviço de registro, a UI e o broker rodam no host do console, com uma tabela de tokens de função escrita no momento da implantação. Não há token padrão nem leitura anônima; com uma tabela vazia o serviço se recusa a iniciar.
2. **Coloque o modelo de embedding em funcionamento** — coloque o DINOv2 ONNX onde o console o monta e altere `RETAIL_EMBEDDER` para longe do placeholder. O padrão upstream é `fake`, que transforma os bytes da imagem em um vetor; `GET /api/health` não relata isso, e o único sintoma é que o registro funciona, mas toda consulta retorna o SKU errado.
3. **Registre SKUs** — de 3 a 8 fotos cada, pelo menos frente, verso e lateral, sob duas condições de iluminação. Menos de três é rejeitado; um sku_id repetido retorna 409 a menos que `replace=true` esteja definido.
4. **Converta e verifique o detector na placa** — converta no host x86_64, copie o artefato para a placa e execute uma verificação de consistência em relação à referência de CPU.

Reserve cerca de 90 minutos por preset para as quatro etapas, mais o tempo de build do container no host do console.

**Confirme que o modelo de embedding está conectado.** Um reconhecimento deixa um registro completo no fluxo de eventos: slot, SKU correspondente, similaridade e coordenadas por caixa. Com a implementação `fake`, a distribuição de similaridade é visivelmente anormal.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="O conjunto completo de campos de um evento de reconhecimento: slot, SKU correspondente, similaridade e coordenadas por caixa"/>
</div>

## Quais interfaces estão disponíveis

Toda saída está no host do console: MQTT na porta 1883 e duas interfaces HTTP nas portas 8089 e 8080, todas na rede local, e todas, exceto o broker, atrás da mesma verificação de token.

- **Checkout / PDV** assina `retail/v1/events` e lê `summary.items`, o mapa de SKU para quantidade do frame, sem analisar o array por caixa.
- **Reposição ou auditoria de prateleira** lê `summary.empty_slots` e `summary.wrong_slots` da mesma mensagem.
- **Um sistema que precisa rastrear uma decisão** lê `detections[]`: cada caixa carrega `track_id`, um `bbox` normalizado, `sku_id`, `similarity`, `top2_margin`, um bloco `ocr` e um sinalizador `fallback`.

### O tópico e o payload completos

| Interface / porta | Conteúdo | Observações |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | Um por frame, não um por caixa |
| HTTP `/v1/gallery/skus`, 8089 | `POST` de um sku_id, nome de exibição, aliases, campos de licença e 3–8 imagens → uma nova versão imutável | O mesmo sku_id retorna 409 a menos que `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Lista de versões, manifesto por versão, tar.gz com SHA256SUMS e rollback que revalida os SHAs do alvo antes de alternar | O rollback não cria uma nova versão |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Lista de eventos filtrada por cena / SKU / dispositivo / tempo, detalhe por caixa, resumo da placa | API somente leitura, mesma verificação de token |

**Leia `similarity` junto com `gallery.version`, `gallery.sha256` e os hashes de modelo na mesma mensagem.** Vetores de dois embedders diferentes não são comparáveis, e misturá-los se manifesta como nada sendo reconhecido; toda mensagem carrega todos os quatro por esse motivo.

A autenticação é `Bearer <token>` com papéis viewer < operator < admin. O broker é enviado anônimo e em texto puro, então qualquer pessoa que consiga alcançar a porta 1883 pode publicar eventos de reconhecimento forjados.

## Desempenho e dados medidos

### Detecção, medida no dispositivo

| Dispositivo | Artefato | p50 / p95 | Concordância de caixas com a referência de CPU |
|---|---|---:|---:|
| reComputer série R2000 + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 imagens), 94.68% (300 imagens) |
| reComputer série RK3588 | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% |
| reComputer série RK3588 | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% |
| reComputer série RK3576 | RKNN fp16, 640², dois núcleos | 51.05 / 54.18 ms | 99.91% |
| reComputer série J40 (J4012) | TensorRT fp16, 640² | 5.18 / 5.28 ms | 99.91% |
| reComputer série J30 (J3011) | TensorRT fp16, 640² | 5.88 / 8.89 ms | 99.27% (frames de checkout) |

Condições: a concordância é comparada com a referência de CPU em IoU ≥ 0.5; RK3588, RK3576 e J4012 usam as mesmas 50 imagens SKU-110K, J3011 usa 50 frames de checkout. Throughput single-stream do Hailo 110.4 fps (`hailortcli benchmark` 110.64 fps, tempo de hardware puro 8.21 ms; os 0.8 ms extras são a ida e volta do vstream em Python). **Fim a fim no reComputer série R2000 (letterbox, concatenação de saída, decodificação e NMS incluídos) é p50 18.74 ms / p95 24.25 ms**: o NMS por classe em pure-numpy sobre cerca de 160 caixas leva mais tempo que a própria inferência.

Reproduzir: `evaluation/runs/2026-09-06-det-hef/`, `evaluation/runs/2026-09-06-det-rk3588-radxa/`, `evaluation/runs/2026-09-07-embed-rknn-rk3576/`, `evaluation/runs/2026-09-07-jetson-trt/`, `evaluation/runs/2026-09-08-orin-nano-acceptance/`

### Embedding, medido no dispositivo

| Dispositivo | Variante | p50 / p95 por recorte | Custo de recuperação vs fp32 |
|---|---|---:|---|
| reComputer série R2000 (CPU, 4 threads) | DINOv2-small, INT8 quantizado dinamicamente | 91.95 / 105.98 ms | Dentro de 0.65 pp em todos os 7 pontos de operação medidos |
| reComputer série R2000 (CPU, 4 threads) | DINOv2-small, fp32 | 180.75 / 233.41 ms | Linha de base |
| reComputer série RK3588 (NPU) | DINOv2-small, RKNN fp16 | 48.68 / 49.86 ms | No máximo 0.85 pp em 21 métricas |
| reComputer série RK3576 (NPU, dois núcleos) | DINOv2-small, RKNN fp16 | 56.38 / 62.17 ms | No máximo 0.36 pp em 21 métricas |
| reComputer série J40 (J4012) | DINOv2-small, TensorRT fp16 | 4.23 / 4.69 ms | No máximo 0.24 pp em 21 métricas |
| reComputer série J30 (J3011) | DINOv2-small, TensorRT fp16 | 5.06 / 7.64 ms | No máximo 0.21 pp em 21 métricas |

Condições: as 21 métricas são top-1, top-5 e AUROC open-set em 4 níveis de registro no Grocery Store Dataset e 3 no Products-10K. Na CPU, quantizar apenas os pesos quase não custa precisão de recuperação; quantizar também as ativações custa muito.

Reproduzir: `evaluation/runs/2026-09-06-embed-small/` §8, `evaluation/runs/2026-09-07-embed-rknn/`, `evaluation/runs/2026-09-07-embed-rknn-rk3576/`, `evaluation/runs/2026-09-07-jetson-trt/`, `evaluation/runs/2026-09-08-orin-nano-acceptance/`

### Replays de cadeia completa e recortes de prateleira, medidos no dispositivo

| Dispositivo | Cena | Resultado | Condições |
|---|---|---|---|
| reComputer série J40 (J4012) | Replay de checkout | Detecção até resultado publicado p50 22.3 ms / p95 42.8 ms; 0 frames perdidos em 2956 frames | Replay de vídeo gravado, galeria de 30 SKUs; detecção, embedding, recuperação e publicação MQTT no mesmo dispositivo |
| reComputer série J30 (J3011) | Replay de checkout | 0 frames perdidos em 6726 frames (2.27 loops), todos os 84 eventos publicados | Mesmo vídeo gravado e mesma galeria |
| reComputer série RK3588 | Replay de prateleira | Detecção até resultado publicado p50 924 ms / p95 1153 ms; top-1 541/704 em 704 recortes de slots, idêntico à referência de CPU fp32 | 20 SKUs, detector e embedder ambos RKNN fp16 na NPU |
| reComputer série RK3576 | Recortes de prateleira | Top-1 76.28% em 704 recortes (CPU fp32 76.99%), 99.29% de concordância mesmo-SKU; embedder p50 61.0 ms por recorte | Mesmos 704 recortes, detector e embedder ambos RKNN fp16 |

Reproduzir: `evaluation/runs/2026-09-07-jetson-trt/`, `evaluation/runs/2026-09-08-orin-nano-acceptance/`, `evaluation/runs/2026-09-08-rk3588-console-acceptance-020/`, `evaluation/runs/2026-09-08-rk3576-acceptance/`

### Precisão de recuperação e detecção (fora do dispositivo)

| Configuração | Resultado | Conjunto de dados |
|---|---:|---|
| DINOv2-base, 8 imagens de registro por SKU | top-1 84.67% / top-5 96.66% | Grocery Store Dataset, 81 classes, fp32 |
| DINOv2-small, 8 imagens de registro por SKU | top-1 79.11% | Mesmo |
| DINOv2-small, 1 imagem de registro por SKU | top-1 51.11% | Mesmo |
| DINOv2-base, 8 por SKU, SKUs reservados | top-1 78.92% | Conjunto reservado do Products-10K, muito mais classes |
| Detector, 640² | mAP50-95 52.84, mAP50 88.26 | Teste SKU-110K |
| Detector, 1280² | mAP50-95 56.32 | Teste SKU-110K |

Resultados publicados de SKU-110K variam de mAP50-95 58.0 (DenseDet, Cascade R-CNN + ResNeXt-101) a 58.7 (arXiv 2007.11946). Em 640², mAP50 é 88.26 enquanto mAP50-95 é 52.84: as caixas são encontradas, mas a localização é imprecisa. O número de visões de registro é o que mais importa para recuperação: mesmo modelo, mesmo conjunto de dados, 51.11% com 1 imagem por SKU e 79.11% com 8.

Reproduzir: `evaluation/runs/` (avaliação de embedding: `evaluation/eval_embedder.py`)

### Tempos de execução e parâmetros principais

| Dispositivo | Detector | Embedder | Como o modelo chega ao dispositivo |
|---|---|---|---|
| reComputer séries RK3588 / RK3576 | `.rknn` na NPU, fp16 ou INT8 | onnxruntime na CPU, ou RKNN fp16 na NPU | Convertido em um host x86_64 com rknn-toolkit2 2.3.2; a versão do toolkit deve corresponder a `librknnrt.so` na placa |
| reComputer série R2000 + Hailo-8 | INT8 `.hef` na NPU | DINOv2-small INT8 quantizado dinamicamente na CPU | Compilado em um host x86_64 com o Hailo Dataflow Compiler, depois copiado para a placa |
| reComputer séries J40 / J30 (Jetson Orin) | TensorRT fp16 (GPU) | TensorRT fp16 (GPU) | Engines construídos a partir de ONNX no dispositivo no momento do deploy; 427 s para o detector e 132 s para o embedder no J3011 |

O detector é um YOLOX-Tiny de classe única (640² ou 1280²); o embedder é DINOv2 ajustado com ArcFace em imagens de produtos de e-commerce, base (348 MB fp32) ou small (23.5 MB INT8), produzindo um vetor de 512 dimensões por recorte; a identidade do SKU existe apenas na busca por cosseno do FAISS sobre a galeria versionada.

- Tamanho de entrada: **640²** para checkout, **1280²** para prateleiras; compilado no artefato e fixo em tempo de execução
- Imagens de registro: **3–8** por SKU; menos de três são rejeitadas
- `RETAIL_EMBEDDER`: o padrão upstream é `fake` (transforma bytes de imagem em um vetor); altere para o DINOv2 ONNX no momento do deploy

### Degradações conhecidas

- No preset Hailo-8, o embedding é uma inferência de CPU por caixa: a 91.95 ms por recorte, uma cesta com cinco itens leva cerca de meio segundo e um frame de prateleira (157.6 caixas) cerca de 14 segundos, então implantações em prateleira devem amostrar frames ou amostrar por slot.
- Nenhuma das duas tentativas de quantização no Hailo-8 para o embedder DINOv2 produziu um resultado utilizável (em uma, toda imagem era mapeada para o mesmo vetor), então o preset Hailo-8 mantém o embedding na CPU.
- Quando detecção e embedding compartilham uma GPU, a detecção em processo no reComputer série J40 (J4012) sobe de 5.18 ms p50 isolado para 8.76 ms, e o embedding de 4.23 ms para 5.37 ms.
- QDQ INT8 estático (ativações quantizadas também) perde de 3.78 a 9.96 pontos percentuais de recuperação e é inutilizável.
- Uma incompatibilidade entre rknn-toolkit2 e `librknnrt.so` pode carregar normalmente e retornar valores errados; verifique a concordância com a referência de CPU após cada conversão.
- Um artefato 640² em uma prateleira perde produtos distantes; o mAP50-95 de pequenos objetos em SKU-110K é 17.49 em 640² e 26.88 em 1280².
- Vetores de dois embedders diferentes não são comparáveis; misturá-los se manifesta como nada sendo reconhecido.
- O runtime no dispositivo que busca uma versão de galeria, a verifica e alterna de forma atômica não está implementado, então SKUs recém-registrados não chegam automaticamente aos dispositivos.
- Reclassificação por OCR e fallback de VLM não estão implementados: a mensagem já carrega blocos `top2_margin`, `ocr` e `fallback`, mas o código não está implementado.

### Próximas etapas

- Meça a precisão da contagem no checkout e a precisão por slot de prateleira como métricas de aceitação.
- Implemente o runtime no dispositivo que busca uma versão da galeria, a verifica e faz a troca de forma atômica, para que SKUs recém-registrados cheguem automaticamente aos dispositivos.

## Fontes de dados e ativos

**O pacote não contém pesos de modelo nem imagens de conjunto de dados.** As restrições abaixo se estendem a qualquer coisa treinada com esses dados; a implantação comercial exige o re-treinamento do detector e do embedder em dados comercialmente utilizáveis.

| Ativo | Licença / escopo | Observações |
|---|---|---|
| Pesos do detector (treinados em [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Licença Trax: acadêmica e não comercial; a cláusula (iii) proíbe trabalhos derivados | `use_scope: academic-only`, `redistributable: false` |
| Pesos do embedder (fine-tuned em JD Products-10K) | Pesquisa e educação não comerciais | `use_scope: non-commercial`, `redistributable: false` |
| backbones `facebook/dinov2-base`, `facebook/dinov2-small` | Apache-2.0 | Os backbones são comercialmente utilizáveis; a restrição vem dos dados de treinamento |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Apenas avaliação de recuperação; o único conjunto de dados comercialmente utilizável neste conjunto |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / apenas acadêmico / licença a ser confirmada com o proprietário do conjunto de dados | Aparecem no plano de avaliação upstream; escopo não comercial |
| Código do projeto | Apache-2.0 | |

Campos por artefato (`license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256`) estão nos model cards upstream; um resumo está em `gallery/ATTRIBUTION.md` do pacote. O diagrama de arquitetura na página de design de referência foi desenhado por nós a partir da lista de dispositivos do pacote.
