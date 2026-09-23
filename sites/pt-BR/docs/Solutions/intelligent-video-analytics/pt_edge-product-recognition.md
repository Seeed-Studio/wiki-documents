---
description: Reconhecimento de produtos de supermercado na borda — um detector de classe única, uma galeria de embeddings que registra um novo SKU a partir de fotografias em vez de um ciclo de treinamento, de que hardware precisa, como é implantado, os dados medidos por placa e detalhes de implementação para engenheiros
title: 'Reconhecimento de Produtos na Borda: Construção, Implantação e Resultados Medidos'
keywords:
  - reconhecimento de produtos na borda
  - reconhecimento de produtos no checkout sem código de barras
  - auditoria de prateleira com detecção de espaços vazios
  - registro de SKU sem novo treinamento
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Leia isto primeiro]
Este é um reference design em andamento, não um produto finalizado. O console — registro, versionamento da galeria, a interface de gerenciamento, o broker — está implementado, e o detector foi convertido e medido em duas placas. **O processo no dispositivo que uniria detecção, embedding, consulta à galeria e publicação MQTT em um único serviço ainda não existe upstream**, portanto não há precisão de contagem ponta a ponta, nem precisão por slot de prateleira e nem teste de longa duração nesta página. Nenhum preset traz `verified: [hardware]`. Não é uma balança de varejo certificada e não faz nenhuma afirmação sobre uma contagem ou preço com validade legal.
:::

## O que esta solução faz

Uma câmera observa uma esteira de checkout ou a frente de uma prateleira. Cada produto no quadro é encaixotado, recortado, transformado em um vetor de 512 dimensões e consultado em uma galeria de SKUs registrados. No checkout o resultado é uma cesta — uma lista de SKU para quantidade, agregada por id de trilha para que um item passando pela câmera seja contado uma vez. Na prateleira é um estado de slot — ok, vazio, SKU errado ou desconhecido — agregado por posição de planograma. Uma mensagem MQTT por quadro carrega tudo isso.

A parte interessante é o que acontece quando a loja adiciona um produto. **Nada é retreinado.** Você fotografa o novo SKU de três a oito vezes, envia as imagens para o console, e a galeria ganha uma nova versão imutável. O detector nunca aprende sobre produtos individuais — ele é de classe única, só responde "há um produto aqui" — e o embedder também não é atualizado.

- Seleção e implantação: [página do reference design](https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition)
- Repositório upstream: não publicado. O pacote não traz `intro.links.github`; o código vive em um repositório interno no momento do empacotamento.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>Um novo SKU custa de 3 a 8 fotografias, não um ciclo de treinamento</h3>
                <p>O registro gera uma nova versão imutável da galeria. Sair de uma imagem de registro para oito vale 28 pontos percentuais de acurácia top-1 (veja o apêndice).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>A detecção é convertida de forma limpa para a NPU</h3>
                <p>RKNN fp16 em RK3588 concorda com a referência em CPU em 99,85% das caixas a 56,7 ms p50; o Hailo-8 INT8 HEF roda a 9,04 ms p50 com 94,77% de concordância.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Embedding é um custo de CPU de cerca de 92 ms por recorte</h3>
                <p>Medido em um reComputer R2000 series, quatro threads, DINOv2-small INT8 quantizado dinamicamente — dentro de 0,65 pp do mesmo modelo em fp32.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Nada sai do local</h3>
                <p>Câmera, host de reconhecimento e host do console são todos locais, e o broker roda na pilha do console. O broker incluído é anônimo e em texto puro — adicione contas e TLS antes que ele saia de um banco de testes.</p>
            </div>
        </li>
    </ul>
</div>

### Como é o console

O pacote upstream traz quatro capturas de tela da interface de gerenciamento — a lista de eventos, o detalhe de evento por caixa, a galeria de produtos e o painel de checkout/prateleira. **Todas as quatro foram produzidas pela ferramenta upstream `web_demo` contra fixtures sintéticos**: os SKUs, escores de similaridade e eventos nelas são dados de teste, não resultados de campo. Elas mostram o formato da interface, e nada sobre a qualidade do reconhecimento.

### Os três estados da prateleira

Duas execuções em 2026-09-07, uma em RK3588 e uma em reComputer R2000 series com Hailo-8, exercitaram a decisão de prateleira. Cada slot recebe um de três estados: correto, vazio ou SKU errado.

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
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="A mesma prateleira passando pelos estados correto, vazio e SKU errado"/>
</div>

A cadeia de checkout produz trilhas por pessoa e por item em vez de estados de slot:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Trilhas de itens e reconhecimento por item na visão de checkout"/>
</div>

Esses quadros vêm das duas execuções de hardware em `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`. Os produtos são itens físicos comprados para o projeto, não imagens de dataset.

## De que hardware você precisa

Quatro coisas por site: uma câmera, um host de reconhecimento, um host de console e uma máquina x86_64 usada uma vez por modelo para conversão.

**① Câmera** — qualquer câmera RTSP ou USB sobre a esteira de checkout ou voltada para a prateleira. Nada roda nela. O tamanho de quadro que importa é o compilado no artefato: 640² para o checkout, 1280² para a prateleira.

**② Host de reconhecimento** — é aqui que os presets diferem, e onde está o terreno medido:

| | Host | Medido neste hardware | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" alt="reComputer R2000 series 8GB" width="110" /> | [reComputer R2000 series 8GB](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) + [Raspberry Pi AI HAT+ (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)<br/>Detector na NPU, embedder nos quatro núcleos A76 | Ambos os estágios: 9,04 ms de detecção, 91,95 ms por recorte para embedding | Você quer ambos os estágios medidos na placa que está realmente em mãos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector na NPU Rockchip, embedder na CPU dela | Apenas o detector, em um RK3588 (reComputer RK3588 series reComputer RK3588 series): 99,85% de concordância de caixas a 56,7 ms | Você já usa placas Rockchip. RK3576 usa a mesma toolchain, mas não tem nenhuma medição |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Caminho TensorRT | Nada | Você já usa Jetson e aceita que o backend precise ser escrito primeiro |

Os números de latência são por estágio no hardware nomeado na linha. Não há nenhum número de throughput ou de quantidade de streams em nenhum lugar deste design, porque ainda não há processo que execute os dois estágios em sequência em um dispositivo.

**③ Host do console** — sua própria máquina Linux amd64 ou arm64 com Docker e sem GPU, acessível a partir de cada dispositivo de reconhecimento. Ela executa três contêineres: o serviço de registro/consulta, a interface de gerenciamento e um broker MQTT. **Nenhuma das imagens de contêiner foi enviada para um registry**; ambas são construídas neste host a partir do repositório upstream, com o SPA construído primeiro (`npm --prefix web/ui ci && npm --prefix web/ui run build`) porque as imagens não executam npm.

**④ Uma máquina x86_64 para conversão** — nem o rknn-toolkit2 nem o Hailo Dataflow Compiler rodam na placa alvo. Isso é uma vez por modelo, não uma vez por implantação.

## Como implantar no local

Duas partes: a instalação física, que decide quantos recortes cada quadro custa, e o software, que são quatro etapas por preset.

### 1. Montagem

:::tip[Escolha o artefato antes de escolher a montagem]
O tamanho de entrada é compilado no artefato e nunca é alterado em tempo de execução. Um artefato 640² alimentado com imagens de prateleira perde os produtos distantes; mudar para 1280² eleva o mAP50-95 de pequenos objetos no teste SKU-110K de 17,49 para 26,88. Decida primeiro entre checkout ou prateleira, depois monte de forma que os produtos preencham o quadro de acordo.
:::

A segunda restrição é aritmética, não ótica. Embedding é uma passagem de CPU por caixa. Com os 91,95 ms medidos por recorte em um reComputer R2000 series, uma cesta com cinco itens leva cerca de meio segundo, e um quadro de prateleira na densidade medida de 157,6 caixas leva cerca de 14 segundos. **Implantações em prateleira precisam de pulo de quadros ou amostragem em nível de slot; isso é uma decisão de projeto, não um parâmetro de ajuste.**

### 2. Software, quatro etapas

As etapas por dispositivo estão na página do reference design. Em linhas gerais, cada preset faz as mesmas quatro coisas:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configurar e implantar 🖱️</font></span></strong>
    </a>
</div><br />

1. **Subir a pilha do console** — serviço de registro, UI e broker no host do console, com a tabela de tokens de função escrita no momento da implantação. Não há token padrão nem leitura anônima; o serviço se recusa a iniciar com uma tabela vazia.
2. **Coloque o modelo de embedding** — o DINOv2 ONNX fica onde o console o monta, e `RETAIL_EMBEDDER` é trocado do placeholder. O padrão upstream é `fake`, que transforma os bytes da imagem em um vetor por hash; ele não é reportado por `GET /api/health`, então "o registro funciona, mas toda consulta retorna o SKU errado" é o único sintoma.
3. **Registre SKUs** — de 3 a 8 fotografias cada, no mínimo frente, verso e lateral em duas condições de iluminação. Menos de três é recusado; o mesmo sku_id retorna 409 a menos que `replace=true`.
4. **Converta e verifique o detector na placa** — converta no host x86_64, copie o artefato para lá e execute a verificação de paridade em relação à referência na CPU. **É aqui que cada preset atualmente para**: não há nenhum serviço no dispositivo para iniciar depois disso.

Reserve cerca de 90 minutos por preset para as etapas 1–4, mais o build do container no host do console.

**Como saber que esta etapa funcionou.** Um reconhecimento deixa um registro completo no fluxo de eventos: slot, SKU correspondente, similaridade e coordenadas por caixa. Use isso para verificar se o modelo de embedding está realmente conectado — sob a implementação `fake` a distribuição de similaridade fica visivelmente errada.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="O conjunto completo de campos de um evento de reconhecimento: slot, SKU correspondente, similaridade e coordenadas por caixa"/>
</div>

<!-- TODO image: shelf and camera as installed on site — needs a field shoot -->

## Como conectá-lo ao seu próprio sistema

Tudo sai do host do console: MQTT na porta 1883 e duas superfícies HTTP em 8089 e 8080, todas na rede local, todas atrás do mesmo portão de token exceto o broker.

- **Um caixa ou POS** assina `retail/v1/events` e lê `summary.items` — um mapa de SKU para quantidade para o frame. Ele não precisa analisar o array por caixa.
- **Um sistema de reposição ou auditoria de prateleira** lê `summary.empty_slots` e `summary.wrong_slots` da mesma mensagem.
- **Qualquer coisa que precise explicar uma decisão** lê o array `detections[]`: por caixa, `track_id`, `bbox` normalizado, `sku_id`, `similarity`, `top2_margin`, o bloco `ocr` e um sinalizador `fallback`.

### O tópico e o payload completos

| Interface / porta | Payload | Observações |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | Uma mensagem por frame, nunca uma por caixa |
| HTTP `/v1/gallery/skus`, 8089 | `POST` com sku_id, nome de exibição, aliases, um campo de licença e 3–8 imagens → uma nova versão imutável | 409 em um sku_id duplicado a menos que `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Listagem de versões, manifesto por versão, um tar.gz com SHA256SUMS dentro e rollback que revalida o SHA de destino antes de alternar | O rollback não gera uma nova versão |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Lista de eventos filtrada por cena, SKU, dispositivo e tempo; detalhe por caixa; o resumo da placa | API de leitura atrás do mesmo portão de token |

**O campo mais facilmente mal interpretado é `similarity`.** Ele só é interpretável junto com `gallery.version`, `gallery.sha256` e os hashes de modelo na mesma mensagem: vetores produzidos por dois embedders diferentes não são comparáveis, e o sintoma de misturá-los é "nada é reconhecido". É por isso que toda mensagem carrega os quatro.

A autorização é `Bearer <token>` com viewer < operator < admin. O broker, em contraste, é texto puro anônimo na configuração empacotada — qualquer um que consiga alcançar a porta 1883 pode publicar eventos de reconhecimento forjados.

## Para engenheiros: detalhes de implementação

### Dois modelos, e por que a divisão existe

Um classificador teria que ser re-treinado para cada novo produto. Este design divide o problema de forma que nada aprenda a identidade do produto:

| Estágio | Modelo | Saída | Muda quando um SKU é adicionado? |
|---|---|---|---|
| Detecção | YOLOX-Tiny, classe única, 640² ou 1280² | Caixas, sem classe | Não |
| Embedding | DINOv2 ajustado com ArcFace em imagens de produtos de e-commerce — base (348 MB fp32) ou small (23,5 MB INT8) | Vetor 512-d por recorte | Não |
| Identidade | Consulta por cosseno FAISS em uma galeria versionada | SKU + similaridade + margem top-2 | **Sim — uma nova versão de galeria imutável** |
| Agregação | ID de trilha (checkout) ou slot de planograma (prateleira) | Cesta, ou ok / empty / wrong_sku / unknown | Não |

### Matriz de runtime

| Host | Detector | Embedder | Entrega |
|---|---|---|---|
| RK3588 / RK3576 | `.rknn` fp16 ou INT8 no NPU | onnxruntime na CPU, não existe conversão RKNN | Convertido em um host x86_64 com rknn-toolkit2 2.3.2, onnx fixado em 1.16.1, setuptools abaixo de 81; a versão do toolkit deve corresponder ao `librknnrt.so` da placa |
| reComputer R2000 series + Hailo-8 | INT8 `.hef` no NPU | DINOv2-small INT8 dinamicamente quantizado na CPU | Compilado com o Hailo Dataflow Compiler em um host x86_64, copiado para o Pi |
| Jetson Orin | Não implementado | Não implementado | `platforms/` upstream contém apenas console, hailo e rknn; a entrada de jetson no README foi herdada do projeto doador e aponta para arquivos que nunca foram copiados |

Uma incompatibilidade de versão entre rknn-toolkit2 e `librknnrt.so` **nem sempre falha de forma ruidosa** — ela pode carregar e produzir números errados. A verificação de paridade em relação à referência na CPU existe exatamente por esse motivo e não é opcional.

### O protocolo de versão da galeria

A galeria é o único estado mutável, e é modificada apenas cunhando uma nova versão:

| Propriedade | Comportamento |
|---|---|
| Diretório de versão | Imutável: vetores, tabela de SKUs, índice FAISS, manifesto, SHA256SUMS |
| Manifesto | Registra qual modelo de embedding e qual pré-processamento produziram os vetores |
| Alternância | Atômica, trava de escrita única |
| Rollback | Revalida o SHA da versão de destino antes de alternar e não gera uma nova versão |
| Download | `current/download` serve um tar.gz com SHA256SUMS dentro |

**A metade no console disso está implementada; a metade no dispositivo não.** O runtime que buscaria uma versão, verificaria seus checksums e alternaria de forma atômica ainda não existe, e é por isso que um SKU recém-registrado não chega a um dispositivo hoje.

### O que está especificado e não implementado

- **Reranking por OCR.** O campo `top2_margin` e o bloco `ocr` estão no esquema de mensagem, e o reranking que os usaria quando as similaridades top-1 e top-2 são próximas não está escrito.
- **Um fallback de VLM.** O bloco `fallback` está no esquema pelo mesmo motivo.
- **O pipeline no lado do dispositivo**, para cada plataforma.
- **Um backend TensorRT**, para o preset Jetson.

## Apêndice: dados medidos

Ignore esta seção se você não estiver conferindo números. Tudo abaixo foi medido no hardware nomeado com ele; nada é interpolado a partir de uma placa semelhante, e todo arquivo de limite na árvore de avaliação upstream carrega `reproduced_by: null`.

### Detecção, em hardware

| Host | Artefato | p50 / p95 | Concordância de caixas vs referência na CPU | Fonte |
|---|---|---:|---:|---|
| reComputer R2000 series + Hailo-8 | INT8 HEF, 640² | 9,04 / 9,10 ms | 94,77% (200 imagens), 94,68% (300 imagens) | `evaluation/runs/2026-09-06-det-hef/` |
| RK3588 (reComputer RK3588 series reComputer RK3588 series) | RKNN fp16, 640² | 56,7 / 89,5 ms | 99,85% | `evaluation/runs/2026-09-06-det-rk3588-radxa/` |
| RK3588 (reComputer RK3588 series reComputer RK3588 series) | RKNN INT8, 640² | 26,0 / 33,2 ms | 98,35% | mesma execução |

A concordância é IoU ≥ 0,5 em relação à referência na CPU. A vazão single-stream do Hailo é 110,4 fps, verificada de forma independente com `hailortcli benchmark` em 110,64 fps e 8,21 ms de tempo puramente de hardware — os 0,8 ms extras são a ida e volta do vstream em Python. **Fim a fim no Pi, incluindo letterboxing, montagem da saída, decodificação e NMS, é 18,74 ms p50 / 24,25 ms p95**: o NMS por classe em pure-numpy sobre cerca de 160 caixas custa mais do que a inferência. Nenhum throttling térmico foi observado durante a execução; a temperatura do die do Hailo e o consumo de energia não puderam ser lidos nesta plataforma e são registrados como indisponíveis em vez de estimados.

### Embedding, em hardware

| Variante | Por recorte p50 / p95 | Custo de recuperação vs fp32 |
|---|---:|---|
| DINOv2-small, INT8 dinamicamente quantizado, 4 threads | 91,95 / 105,98 ms | dentro de 0,65 pp em todas as sete configurações medidas |
| DINOv2-small, fp32, 4 threads | 180,75 / 233,41 ms | baseline |
| DINOv2-small, INT8 QDQ estático (ativações quantizadas também) | — | **perde de 3,78 a 9,96 pontos; não utilizável** |

Medido em uma CPU reComputer R2000 series, `evaluation/runs/2026-09-06-embed-small/` §8. A quantização apenas de pesos é quase gratuita aqui; quantizar ativações não é.

### Recuperação e acurácia de detecção, fora do dispositivo

| Configuração | Resultado | Conjunto de dados |
|---|---:|---|
| DINOv2-base, 8 imagens de registro por SKU | 84,67% top-1 / 96,66% top-5 | Grocery Store Dataset, 81 classes, fp32 |
| DINOv2-small, 8 imagens de registro por SKU | 79,11% top-1 | mesmo |
| DINOv2-small, 1 imagem de registro por SKU | 51,11% top-1 | mesmo |
| DINOv2-base, 8 imagens por SKU, SKUs reservados | 78,92% top-1 | divisão held-out de Products-10K, muito mais classes |
| Detector, preset 640² | 52,84 mAP50-95, 88,26 mAP50 | SKU-110K test |
| Detector, preset 1280² | 56,32 mAP50-95 | SKU-110K test |

Ambos os limites do detector ficam na faixa de falha do próprio projeto, cujo limite é 60 mAP50-95. Esses 60 são um valor genérico que este projeto aplica a toda métrica, não um valor definido a partir do SKU-110K; resultados publicados em SKU-110K chegam a 58,0 (DenseDet, Cascade R-CNN + ResNeXt-101) e 58,7 (arXiv 2007.11946). A mAP50 em 640² é 88,26: as caixas são encontradas e não posicionadas de forma justa. A mAP50-95 de pequenos objetos sobe de 17,49 em 640² para 26,88 em 1280², e é por isso que o preset de prateleira existe como um artefato separado.

O maior fator isolado nesta página é o número de visualizações registradas por SKU: 51,11% com uma imagem, 79,11% com oito, no mesmo modelo e no mesmo conjunto de dados.

## Fontes de dados e recursos

**Nenhum peso de modelo e nenhuma imagem de conjunto de dados são fornecidos com este pacote.** As restrições abaixo são herdadas por qualquer coisa treinada nos conjuntos de dados, e é por isso que uma implantação comercial é uma tarefa de re-treinamento em vez de uma conversa de licenciamento.

| Recurso | Licença / escopo | Observação |
|---|---|---|
| Pesos do detector (treinados em [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Licença Trax: acadêmica e não comercial; a cláusula (iii) proíbe trabalhos derivados | `use_scope: academic-only`, `redistributable: false` |
| Pesos do extrator de embeddings (fine-tuned em JD Products-10K) | Pesquisa e educação não comerciais | `use_scope: non-commercial`, `redistributable: false` |
| backbones `facebook/dinov2-base`, `facebook/dinov2-small` | Apache-2.0 | A restrição vem dos dados de treinamento, não do backbone |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Apenas avaliação de recuperação; o único conjunto de dados comercialmente utilizável do conjunto |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / apenas acadêmico / licença a ser confirmada com o proprietário do conjunto de dados | Aparecem no plano de avaliação upstream; escopo não comercial |
| Código do projeto | Apache-2.0 | |

Campos por artefato — `license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256` — estão nos model cards upstream; o resumo está em `gallery/ATTRIBUTION.md` do pacote. O diagrama de arquitetura na página de design de referência é desenhado a partir do catálogo de dispositivos do pacote e é nosso próprio recurso.
