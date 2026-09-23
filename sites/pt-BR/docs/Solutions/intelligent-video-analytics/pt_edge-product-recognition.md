---
description: Reconhecimento de produtos de supermercado na borda — um detector de classe única, uma galeria de embeddings que registra um novo SKU a partir de fotografias em vez de um ciclo de treinamento, de que hardware precisa, como é implantado, os dados medidos por placa e detalhes de implementação para engenheiros
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Leia isto primeiro]
Na versão empacotada (cbbfa60) o upstream ainda não reúne detecção, embedding, consulta à galeria e publicação MQTT em um único serviço no dispositivo, portanto não há aqui precisão de contagem ponta a ponta, precisão por slot de prateleira nem dados de soak. Os resultados de reconhecimento não são uma medição legal e não podem ser usados como base para precificação ou para uma contagem juridicamente vinculante.
:::

## O que esta solução faz

Uma câmera observa uma esteira de checkout ou a frente de uma prateleira. Cada produto no quadro é encaixotado, recortado, transformado em um vetor de 512 dimensões e consultado em uma galeria de SKUs registrados. No checkout, a saída é uma cesta (SKU-para-quantidade, agregada por id de trilha para que um item passando pela câmera seja contado uma vez); na prateleira é um estado de slot (ok, empty, wrong_sku, unknown, agregado por posição de planograma). Uma mensagem MQTT por quadro carrega os resultados.

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
                <h3>A detecção roda na NPU</h3>
                <p>RKNN fp16 no RK3588 concorda com a referência em CPU em 99,85% das caixas a 56,7 ms p50; o Hailo-8 INT8 HEF roda a 9,04 ms p50 com 94,77% de concordância.</p>
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

O pacote upstream traz quatro capturas de tela da interface de gerenciamento: a lista de eventos, o detalhe de evento por caixa, a galeria de produtos e o painel de checkout/prateleira. Todas as quatro foram produzidas pela ferramenta `web_demo` do upstream contra fixtures sintéticos; os SKUs, escores de similaridade e eventos nelas são dados de teste e mostram apenas o layout da interface.

### Os três estados da prateleira

A decisão de prateleira foi medida na reComputer RK3588 series e na reComputer R2000 series + Hailo-8. Cada slot recebe um de três estados: correto, vazio ou SKU errado.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="Painel de prateleira com cada slot correspondendo à galeria, marcado como correto"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="Um item removido da mesma prateleira; aquele slot fica vazio"/>
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
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Detector na NPU, embedder nos quatro núcleos A76 | Ambos os estágios: 9,04 ms de detecção, 91,95 ms por embedding de recorte | Você precisa de dados medidos para detecção e embedding |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector na NPU Rockchip, embedder na CPU | Apenas o detector, na reComputer RK3588 series: 99,85% de concordância de caixas a 56,7 ms | Você já utiliza placas Rockchip. RK3576 usa a mesma toolchain |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Caminho TensorRT | Replay de checkout | Você já utiliza Jetson |

Todas as latências são medições de estágio único no hardware daquela linha.

**③ Host do console** — sua própria máquina Linux amd64 ou arm64 com Docker, sem necessidade de GPU, acessível por cada dispositivo de reconhecimento. Ela executa três contêineres: o serviço de registro/consulta, a interface de gerenciamento e o broker MQTT. **Ambas as imagens de contêiner são construídas neste host a partir do repositório upstream**, não puxadas de um registry.

**④ Uma máquina de conversão x86_64** — nem o rknn-toolkit2 nem o Hailo Dataflow Compiler rodam na placa alvo. Cada modelo é convertido uma vez; as implantações não repetem isso.

## Como implantar no local

Defina primeiro o artefato e a posição da câmera, depois instale o software em quatro etapas por preset.

### 1. Montagem: escolha o artefato e depois a posição da câmera

:::tip[O tamanho de entrada é fixo na conversão]
O tamanho de entrada é compilado no artefato e não pode mudar em tempo de execução. Um artefato 640² olhando para uma prateleira perde produtos distantes; mudar para 1280² eleva o mAP50-95 de pequenos objetos no teste SKU-110K de 17,49 para 26,88. Decida primeiro entre checkout ou prateleira, depois monte a câmera de forma que os produtos ocupem uma fração adequada do quadro.
:::

Embedding é uma inferência de CPU por caixa. Aos 91,95 ms por recorte medidos na reComputer R2000 series, uma cesta com cinco itens leva cerca de meio segundo; um quadro de prateleira na densidade medida de 157,6 caixas leva cerca de 14 segundos. **Implantações em prateleira devem subamostrar quadros ou amostrar por slot.**

### 2. Software, quatro etapas

As etapas por dispositivo estão na página de design de referência; esta seção lista o fluxo. Todos os três presets seguem as mesmas quatro etapas:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configure e implante 🖱️</font></span></strong>
    </a>
</div><br />

1. **Suba o console** — o serviço de registro, a UI e o broker rodam no host do console, com uma tabela de tokens de função escrita no momento da implantação. Não há token padrão nem leitura anônima; com uma tabela vazia o serviço se recusa a iniciar.
2. **Coloque o modelo de embedding no lugar** — coloque o DINOv2 ONNX onde o console o monta e mude `RETAIL_EMBEDDER` para longe do placeholder. O padrão upstream é `fake`, que faz hash dos bytes da imagem em um vetor; `GET /api/health` não relata isso, e o único sintoma é que o registro funciona mas toda consulta retorna o SKU errado.
3. **Registre SKUs** — de 3 a 8 fotos cada, pelo menos frente, verso e lateral, sob duas condições de iluminação. Menos de três é rejeitado; um sku_id repetido retorna 409 a menos que `replace=true` esteja definido.
4. **Converta e verifique o detector na placa** — converta no host x86_64, copie o artefato para a placa e execute uma verificação de consistência contra a referência em CPU.

Reserve cerca de 90 minutos por preset para as quatro etapas, mais o tempo de build dos contêineres no host do console.

**Confirme que o modelo de embedding está conectado.** Cada reconhecimento deixa um registro completo no fluxo de eventos: slot, SKU correspondente, similaridade e coordenadas por caixa. Com a implementação `fake`, a distribuição de similaridade fica visivelmente anormal.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="O conjunto completo de campos de um evento de reconhecimento: slot, SKU correspondente, similaridade e coordenadas por caixa"/>
</div>

<!-- TODO image: shelf and camera as installed on site — needs a field shoot -->

## Quais interfaces estão disponíveis

Toda a saída está no host do console: MQTT na porta 1883 e duas interfaces HTTP nas portas 8089 e 8080, todas na rede local, e todas, exceto o broker, protegidas pela mesma verificação de token.

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

**Leia `similarity` junto com `gallery.version`, `gallery.sha256` e os hashes do modelo na mesma mensagem.** Vetores de dois embedders diferentes não são comparáveis, e misturá-los se manifesta como nada sendo reconhecido; cada mensagem carrega todos os quatro por esse motivo.

A autenticação é `Bearer <token>` com papéis viewer < operator < admin. O broker é enviado anônimo e em texto puro, então qualquer pessoa que consiga alcançar a porta 1883 pode publicar eventos de reconhecimento forjados.

## Desempenho e dados medidos

### Detecção, medida no dispositivo

| Dispositivo | Artefato | p50 / p95 | Concordância de caixas com a referência em CPU |
|---|---|---:|---:|
| reComputer R2000 series + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 imagens), 94.68% (300 imagens) |
| reComputer RK3588 series | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% |
| reComputer RK3588 series | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% |

Condições: a concordância é comparada com a referência em CPU em IoU ≥ 0,5. Throughput single-stream do Hailo 110,4 fps (`hailortcli benchmark` 110,64 fps, tempo puramente de hardware 8,21 ms; os 0,8 ms extras são a ida e volta do vstream em Python). **End-to-end no reComputer R2000 series (letterbox, concatenação de saída, decodificação e NMS incluídos) é p50 18,74 ms / p95 24,25 ms**: o NMS por classe em pure-numpy sobre cerca de 160 caixas leva mais tempo do que a própria inferência.

Reproduzir: `evaluation/runs/2026-09-06-det-hef/`, `evaluation/runs/2026-09-06-det-rk3588-radxa/`

### Embedding, medido no dispositivo

| Variante | p50 / p95 por recorte | Custo de recuperação vs fp32 |
|---|---:|---|
| DINOv2-small, INT8 com quantização dinâmica, 4 threads | 91.95 / 105.98 ms | Dentro de 0,65 pp em todos os 7 pontos de operação medidos |
| DINOv2-small, fp32, 4 threads | 180.75 / 233.41 ms | Linha de base |

Condições: CPU do reComputer R2000 series. Quantizar apenas os pesos custa quase nenhuma perda de acurácia de recuperação; quantizar também as ativações custa muito.

Reproduzir: `evaluation/runs/2026-09-06-embed-small/` §8

### Acurácia de recuperação e detecção (off-device)

| Configuração | Resultado | Conjunto de dados |
|---|---:|---|
| DINOv2-base, 8 imagens de registro por SKU | top-1 84.67% / top-5 96.66% | Grocery Store Dataset, 81 classes, fp32 |
| DINOv2-small, 8 imagens de registro por SKU | top-1 79.11% | Mesmo |
| DINOv2-small, 1 imagem de registro por SKU | top-1 51.11% | Mesmo |
| DINOv2-base, 8 por SKU, SKUs reservados | top-1 78.92% | Conjunto reservado Products-10K, muito mais classes |
| Detector, 640² | mAP50-95 52.84, mAP50 88.26 | SKU-110K teste |
| Detector, 1280² | mAP50-95 56.32 | SKU-110K teste |

Resultados publicados de SKU-110K variam de mAP50-95 58,0 (DenseDet, Cascade R-CNN + ResNeXt-101) a 58,7 (arXiv 2007.11946). Em 640², mAP50 é 88,26 enquanto mAP50-95 é 52,84: as caixas são encontradas, mas a localização é imprecisa. O número de vistas de registro é o que mais importa para recuperação: mesmo modelo, mesmo conjunto de dados, 51,11% com 1 imagem por SKU e 79,11% com 8.

Reproduzir: `evaluation/runs/` (avaliação de embedding: `evaluation/eval_embedder.py`)

### Tempos de execução e parâmetros principais

| Dispositivo | Detector | Embedder | Como o modelo chega ao dispositivo |
|---|---|---|---|
| reComputer RK3588 / RK3576 series | `.rknn` na NPU, fp16 ou INT8 | onnxruntime na CPU; sem conversão RKNN | Convertido em um host x86_64 com rknn-toolkit2 2.3.2; a versão do toolkit deve corresponder a `librknnrt.so` na placa |
| reComputer R2000 series + Hailo-8 | INT8 `.hef` na NPU | DINOv2-small INT8 com quantização dinâmica na CPU | Compilado em um host x86_64 com o Hailo Dataflow Compiler, depois copiado para a placa |
| reComputer J40 series (Jetson Orin) | TensorRT fp16 (GPU) | TensorRT fp16 (GPU) | Replay completo — detecção, embedding, recuperação e relatório — roda em J4012 e J3011 |

O detector é um YOLOX-Tiny de classe única (640² ou 1280²); o embedder é DINOv2 ajustado com ArcFace em imagens de produtos de e-commerce, base (348 MB fp32) ou small (23,5 MB INT8), produzindo um vetor de 512 dimensões por recorte; a identidade do SKU existe apenas na busca por cosseno FAISS sobre a galeria versionada.

- Tamanho de entrada: **640²** para checkout, **1280²** para prateleiras; compilado no artefato e fixo em tempo de execução
- Imagens de registro: **3–8** por SKU; menos de três são rejeitadas
- `RETAIL_EMBEDDER`: o padrão upstream é `fake` (transforma os bytes da imagem em um vetor via hash); altere para o ONNX do DINOv2 no momento do deploy

### Degradações conhecidas

- O embedding é uma inferência de CPU por caixa: a 91,95 ms por recorte, uma cesta com cinco itens leva cerca de meio segundo e um frame de prateleira (157,6 caixas) cerca de 14 segundos, então implantações em prateleira devem amostrar frames ou amostrar por slot.
- INT8 QDQ estático (ativações também quantizadas) perde de 3,78 a 9,96 pontos percentuais de recuperação e é inutilizável.
- Uma incompatibilidade entre rknn-toolkit2 e `librknnrt.so` pode carregar normalmente e retornar valores errados; verifique a concordância com a referência em CPU após cada conversão.
- Um artefato 640² em uma prateleira perde produtos distantes; o mAP50-95 para pequenos objetos em SKU-110K é 17,49 em 640² e 26,88 em 1280².
- Vetores de dois embedders diferentes não são comparáveis; misturá-los se manifesta como nada sendo reconhecido.
- O runtime no dispositivo que busca uma versão da galeria, a verifica e alterna de forma atômica não está implementado, então SKUs recém-registrados não chegam automaticamente aos dispositivos.
- Reordenação por OCR e fallback com VLM não estão implementados: a mensagem já carrega blocos `top2_margin`, `ocr` e `fallback`, mas o código não está implementado.

### Próximos passos

- Adicionar os resultados TensorRT da reComputer J40 series (J4012 / J3011) para detecção, embedding e replay de checkout a "Desempenho e dados medidos" e à tabela de runtime.
- Medir a acurácia de contagem no checkout e a acurácia por slot de prateleira como métricas de aceitação.
- Implementar o runtime no dispositivo que busca uma versão da galeria, a verifica e alterna de forma atômica, para que SKUs recém-registrados cheguem automaticamente aos dispositivos.

## Fontes de dados e assets

**O pacote não contém pesos de modelo nem imagens de conjunto de dados.** As restrições abaixo se estendem a qualquer coisa treinada nesses dados; a implantação comercial requer retreinar o detector e o embedder em dados comercialmente utilizáveis.

| Asset | Licença / escopo | Observações |
|---|---|---|
| Pesos do detector (treinados em [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Licença Trax: acadêmica e não comercial; a cláusula (iii) proíbe trabalhos derivados | `use_scope: academic-only`, `redistributable: false` |
| Pesos do embedder (ajustados em JD Products-10K) | Pesquisa e educação não comerciais | `use_scope: non-commercial`, `redistributable: false` |
| backbones `facebook/dinov2-base`, `facebook/dinov2-small` | Apache-2.0 | Os backbones são comercialmente utilizáveis; a restrição vem dos dados de treinamento |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Apenas avaliação de recuperação; o único conjunto de dados comercialmente utilizável neste conjunto |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / apenas acadêmico / licença a ser confirmada com o proprietário do conjunto de dados | Aparecem no plano de avaliação upstream; escopo não comercial |
| Código do projeto | Apache-2.0 | |

Campos por artefato (`license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256`) estão nos model cards upstream; um resumo está em `gallery/ATTRIBUTION.md` do pacote. O diagrama de arquitetura na página de design de referência é desenhado por nós a partir da lista de dispositivos do pacote.
