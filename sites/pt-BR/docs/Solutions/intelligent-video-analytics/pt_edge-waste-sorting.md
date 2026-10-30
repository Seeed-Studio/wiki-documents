---
description: Classificação de resíduos no dispositivo, no ponto de descarte — um gatilho, uma imagem, oito classes de material e a categoria chinesa de descarte em quatro vias via MQTT, com um callback GPIO para uma portinhola. Hardware, visão geral da implantação, contratos de saída e todos os limites medidos.
title: 'Classificação de Resíduos na Borda: Classes de Material, Categoria Chinesa em Quatro Vias e MQTT'
sidebar_label: 'Classificação de Resíduos na Borda'
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
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
O mapeamento chinês em quatro vias é uma tabela mantida por este projeto, não uma decisão de qualquer autoridade, e as regras variam entre cidades; a saída não deve ser a única base para taxas, penalidades ou decisões de conformidade.
:::

## O que esta solução faz

Um gatilho (um botão, uma chamada HTTP ou movimento no quadro) faz o dispositivo capturar **uma imagem**, classificar o item em uma de **oito classes de material**, consultar a **categoria chinesa de resíduos domésticos em quatro vias** a partir dessa classe e publicar uma mensagem MQTT. Um callback assíncrono recebe o resultado em quatro vias ao mesmo tempo, para que uma portinhola, relé ou indicador de faixa possa agir com base nele.

- **Uma cabeça, dois níveis de resposta.** O modelo prevê oito classes: papel, papelão, vidro, metal, plástico, têxtil, orgânico, residual. A categoria em quatro vias (reciclável / resíduo de cozinha / perigoso / outros) é uma consulta em tabela sobre o argmax de oito classes, então adaptar a uma regra local significa editar a tabela, não retreinar.
- **Um gatilho, uma captura.** Botão, HTTP ou detecção de movimento com debounce de 800 ms; um gatilho que chega enquanto o anterior ainda está em execução é mesclado, não enfileirado. Também existe um modo contínuo; ele é limitado em taxa e publica apenas depois que três quadros consecutivos concordam no top-1.
- **Os payloads são validados antes de publicar.** Todo payload passa pelo esquema de evento, mais duas regras que o JSON Schema não consegue expressar: `category` deve ser igual a `top3[0]`, e `confidence` deve ser igual a `top3[0].confidence`. Falhas são contabilizadas e descartadas.
- **Uma trilha opcional de vocabulário aberto.** Uma torre de visão SigLIP 2 pontuada contra protótipos de texto constantes, selecionada no momento da implantação com `model.track: open_vocab`. Ela adiciona classes sem retreinamento, responde em chinês ou inglês a partir do mesmo embedding de imagem e produz uma pontuação de "não está no meu vocabulário".
- **Interface de atuador sem vinculação de pino.** O runtime faz callback com uma categoria; qual pino ele aciona é decidido pelo código de integração, então uma única build roda em placas com cabeçalhos diferentes.

Os bytes de imagem nunca saem do dispositivo; o payload carrega apenas um caminho ou um URI de objeto em armazenamento.

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
                <p>Instale o pacote de aplicação e ele roda; a primeira implantação leva cerca de 35 minutos. Medido em reComputer R2000 series (R2035-12, Hailo-8) em 7417 imagens de validação: top-1 de material 0,8889, top-1 em quatro vias 0,9507 (veja desempenho e dados medidos).</p>
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
                <h3>Roda inteiramente no local</h3>
                <p>Captura, classificação, consulta e o broker MQTT rodam todos no host; as imagens permanecem no dispositivo e a cadeia principal não precisa de acesso à internet.</p>
            </div>
        </li>
    </ul>
</div>

### Como é quando está rodando em um dispositivo

Abaixo está o enquadramento da área de descarte visto por uma reCamera PoE depois que o pacote de aplicação `waste-sorting` foi instalado. Nada é colocado na frente da câmera; a imagem é apenas uma referência de enquadramento.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="Enquadramento da área de descarte pela reCamera PoE, sem nada colocado à sua frente"/>
</div>

Os resultados de classificação vão diretamente para o MQTT. Abaixo estão eventos consecutivos capturados ao assinar `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Eventos de classificação consecutivos em waste/recamera-cvi/results, cada um carregando o resultado de oito classes, o mapeamento em quatro vias e o tempo de inferência"/>
</div>

## De que hardware você precisa

Três coisas no ponto de descarte: um gatilho, uma câmera, um host. Com reCamera ou reCamera Pro, a câmera e o host de classificação são o mesmo dispositivo.

**① Gatilho** — um botão ligado ao host, `POST /trigger` na porta 8080, ou movimento no quadro. Os três compartilham um debounce de 800 ms, produzem o mesmo evento e são diferenciados pelo campo `trigger` no payload.

**② Câmera** — qualquer fonte USB, RTSP ou de arquivo olhando para baixo na área de descarte; qualquer modelo serve. Um único item deve ocupar uma parte utilizável do quadro, com apenas um item em vista. Itens muito pequenos reduzem a qualidade da classificação, e nenhum dos números em desempenho e dados medidos vem de tal enquadramento.

**③ Host de classificação** — decide quais caminhos de modelo você pode usar.

| | Host de classificação | Acelerador | Classificador conforme implantado | Trilha de vocabulário aberto | Quando escolhê-lo |
|---|---|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011 (Jetson Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Host de IA de entrada | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Não oferecida | Um ponto de descarte, apenas classificador básico |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012 (Jetson Orin NX 16GB)](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Host de IA de alto desempenho | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Oferecida (a única classe de dispositivo que a oferece) | Você espera adicionar classes de itens depois sem retreinamento |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Box industrial sem ventoinha | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | Não oferecida | Já há uma câmera e o host vai em um gabinete; o HEF é compilado fora do dispositivo e baixado no momento da implantação, e as versões do runtime Hailo devem corresponder |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Placa de borda econômica | NPU RK3588 | EfficientNet-Lite0 224², INT8 | Não oferecida | Já há uma câmera, menor custo de hardware, host no corpo da lixeira ou em um totem; o modelo é convertido fora do dispositivo e nenhum engine é construído no dispositivo |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002 (SG2002)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Câmera inteligente tudo em um | O próprio TPU da câmera | EfficientNet-Lite0 224², BF16 | Não oferecida | Ainda não há câmera no ponto de descarte, menor custo de hardware; o classificador roda na câmera, sem host separado |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-p-5984.html)<br/>Câmera inteligente de alto desempenho | O próprio NPU da câmera (RV1126B) | EfficientNet-Lite0 224², INT8 | Não oferecida | Ainda não há câmera e o custo não é a primeira preocupação; o classificador roda na câmera |

Ambos os modelos reComputer vêm em um gabinete industrial sem ventoinha (reComputer Industrial J3011 / J4012) com o mesmo módulo e runtime, para um quadro de comando ou gabinete externo.

A coluna de vocabulário aberto vem das notas de recursos no catálogo de dispositivos: a torre de visão SigLIP 2 é um ONNX de 371 MB com p50 de 66,93 ms por imagem como baseline offline de onnxruntime em CPU e precisa de um acelerador.

**④ Todo o resto** — um consumidor MQTT (o pacote executa um broker local na porta 1883); se o projeto tiver uma aba ou indicador de faixa, o hardware do driver mais o código de integração para o callback de GPIO, que é enviado sem estar vinculado a nenhum pino. A cadeia principal não precisa de acesso à internet.

### Limites de seleção negativa

- **Vocabulário aberto zero-shot**: Se você precisar adicionar novas categorias de resíduos dinamicamente sem retreinamento, não escolha o J3011 (trilha não suportada); escolha o J4012 (16 GB).
- **Desfoque de movimento na esteira**: Se a esteira se mover mais rápido que 1,5 m/s, câmeras com rolling shutter produzem desfoque de movimento; use câmeras industriais com global shutter.

## Como implantar no local

Defina primeiro o enquadramento e o gatilho, depois instale o software. Classificado como **intermediário**, cerca de **35 minutos** para a primeira implantação.

### Um: instale o hardware, enquadramento e gatilho

:::tip[Um item por imagem, grande o suficiente]
Não há detector nesta cadeia. Dois itens em um quadro produzem uma resposta, e qual item ela descreve é indefinido; itens que ocupam uma parte muito pequena do quadro são classificados pior. Monte a câmera apontando para baixo na área de queda para que um único item preencha uma parte utilizável do quadro e decida antes da implantação se o gatilho será um botão, HTTP ou detecção de movimento.
:::

### Dois: instale o software

As etapas por dispositivo estão na página do projeto de referência, onde escolher uma configuração para o seu local também fornece o pacote de aplicativo correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

Há cinco presets: `Camera + reComputer J30 / J40 (Orin)`, `Camera + reComputer R2000 series (R2035-12, Hailo-8)`, `Camera + reComputer RK3588`, `reCamera (SG2002)` e `reCamera Pro`. As etapas abaixo cobrem os presets Orin e Hailo-8; as etapas para os outros três estão na página de implantação.

1. **Escolha um preset e um host.** `Camera + reComputer J30 / J40 (Orin)` ou `Camera + reComputer R2000 series (R2035-12, Hailo-8)`.
2. **Implante o runtime de classificação de resíduos** (obrigatório). No Orin o mecanismo TensorRT é construído no dispositivo durante a implantação (68 s no J4012); o mecanismo é vinculado à arquitetura da GPU e à versão do TensorRT e não pode ser pré-compilado para distribuição. No Hailo as etapas de implantação verificam três barreiras de ABI do Hailo e então fazem o download do HEF.
3. **Acompanhe a classificação ao vivo** (opcional). O painel local na porta 8080 tem uma pré-visualização MJPEG, contadores de integridade e o top-3 dos resultados recentes. Confirme o enquadramento aqui antes de fazer qualquer fiação.
4. **Conecte o gatilho e confirme uma classificação** (obrigatório). Um pressionar de botão, chamada HTTP ou evento de movimento deve produzir exatamente uma mensagem MQTT em `waste/<stream-id>/results`, com `category` e `confidence` correspondendo a `top3[0]`.
5. **Mude para a trilha de vocabulário aberto** (opcional, apenas Orin). Defina `model.track: open_vocab` no momento da implantação.

## Quais interfaces estão disponíveis

O host de classificação expõe duas interfaces e um callback em processo, todos servidos pelo próprio host.

- **Sistema de operações ou de registro** — assine `waste/<stream-id>/results` na porta 1883. Um JSON por classificação.
- **UI de quiosque, gateway PLC ou script de teste** — `POST /trigger` na porta 8080 aciona uma captura e classificação; `/events` retorna resultados recentes com seus top-3.
- **Aba, relé ou indicador de faixa** — um callback GPIO assíncrono carrega o resultado de quatro vias. Ele não está vinculado a nenhum pino; o código de vinculação é trabalho de integração.

### Tabela completa de interfaces

| Tipo | Onde | Conteúdo | Observações |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | Um por classificação. Validado em relação ao esquema de evento antes da publicação |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` dispara uma captura e classificação (gatilho registrado como `http`); MJPEG ao vivo; um endpoint de integridade com tempo de inferência, contagens de gatilho e de debounce e contagens de MQTT; resultados recentes com top-3 | Painel local, sem autenticação |
| Callback GPIO | Em processo | Resultado de quatro vias, assíncrono | `actuator.enabled` é false por padrão. Não vinculado a nenhum pino |

Duas coisas a observar ao ler os campos:

- **A imagem nunca está no payload.** `image_ref.kind` é `none`, `local` ou `object_store`. Bytes de imagem em Base64 em um payload violam o contrato e são rejeitados antes da publicação.
- **`category` sempre é igual a `top3[0]`, e `confidence` sempre é igual a `top3[0].confidence`.** Ambos são verificados antes da publicação e payloads com falha são contados e descartados, então os consumidores não precisam reconciliá-los.

```json
{
  "type": "waste_classification",
  "version": "1.0.0",
  "device": "waste-sorting-station-01",
  "stream_id": "cam_inlet_01",
  "timestamp": 1729000000.789,
  "trigger": "sensor",
  "inference_time_ms": 3.53,
  "pipeline_ms": 4.12,
  "category": {
    "class_id": 3,
    "class_name": "plastic_bottle",
    "china_category": "recyclable",
    "china_category_zh": "可回收物"
  },
  "confidence": 0.942,
  "top3": [
    {"class_id": 3, "class_name": "plastic_bottle", "confidence": 0.942},
    {"class_id": 5, "class_name": "glass_bottle", "confidence": 0.038},
    {"class_id": 1, "class_name": "metal_can", "confidence": 0.012}
  ]
}
```

O broker MQTT incluído permite conexões anônimas para comissionamento local; use um broker com credenciais em uma implantação de produção.

## Desempenho e dados medidos {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_waste_sorting</font></span></strong>
    </a>
</div><br />

### Medido no dispositivo: classificador baseline (EfficientNet-Lite0)

| Dispositivo | Precisão | Imagens de validação | Top-1 de material | Top-1 de quatro vias | Diferença em relação à CPU fp32 nas mesmas imagens | Inferência p50 / p95 |
|---|---|---:|---:|---:|---:|---|
| reComputer R2000 series (R2035-12) + Hailo-8 | INT8 (HEF com entrada uint8) | 7417 | **0.8889** | **0.9507** | +0,12 pp | 3,166 ms / 3,249 ms |
| reComputer RK3588 series | INT8 (calib256+mmse) | 7417 | **0.8882** | 0.9507 | +0,05 pp | 3,165 ms / 3,857 ms |
| reComputer RK3588 series | fp16 | 7417 | 0.8882 | 0.9505 | +0,05 pp | 5,962 ms / 12,566 ms |
| reCamera Pro (NPU RV1126B) | INT8 | 1060 | 0.8764 | 0.9566 | +0,19 pp | 5,824 ms / 6,047 ms |
| reCamera (TPU SG2002) | BF16 | 1060 | 0.8792 | 0.9566 | +0,47 pp | 24,276 ms / 24,323 ms |

Condições: apenas inferência, excluindo captura e pré-processamento, fluxo único em sequência; o pré-processamento é lado mais curto 256 → recorte central 224, com normalização incorporada ao modelo para que o dispositivo receba uint8. 7417 imagens é o conjunto completo de validação; 1060 imagens é cada sétima imagem, um subconjunto no qual o top-1 da CPU fp32 é 0,8745 (0,8877 no conjunto completo), então compare o top-1 entre conjuntos de imagens pela coluna "diferença em relação à CPU fp32". O reCamera Pro foi medido com o aplicativo integrado da câmera parado; o reCamera atinge pico de 11,6 MB de memória residente.

- Ambos os hosts de NPU têm o mesmo p50 (3,2 ms); no Hailo-8 o p95 está apenas 0,08 ms acima do p50, no RK3588 INT8 ele está 0,69 ms acima.
- No RK3588, INT8 e fp16 fornecem o mesmo top-1 de material e INT8 é 1,9× mais rápido. INT8 usa 252 imagens de calibração, o algoritmo `mmse` e quantização por canal; em uma amostra de 50 imagens, `normal` concordou com a CPU em 0,90 e `mmse` em 0,98–1,00. A conversão `mmse` leva de 40 a 90× mais tempo que `normal` (17,3 minutos vs 11,5 segundos com 256 imagens de calibração), paga uma vez na conversão.
- O HEF do Hailo-8 é compilado com DFC 3.31.0 em `optimization_level=2` (fine-tuning com reconhecimento de quantização); o HEF anterior com `optimization_level=1` estava 2,40 pp abaixo da CPU fp32, e a diferença desaparece com o HEF atual.
- No reCamera Pro, INT8 é 2,9× mais rápido que fp16 e 4,2× mais rápido que o reCamera; INT8, fp16 e CPU fp32 estão dentro de 0,2 pp uns dos outros nas mesmas 1060 imagens.

Reproduzir: `evaluation/runs/2026-09-07-hailo-quant-tuning`, `evaluation/runs/2026-09-07-devices/results-rk3588.md`, `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `evaluation/runs/2026-09-07-recamera-pro`, `evaluation/runs/2026-09-07-devices/results-recamera-sg2002.md`

### Medido no dispositivo: construção do mecanismo Orin e do gatilho à resposta

| Item | Resultado | Dispositivo | Condições |
|---|---|---|---|
| Construção do mecanismo TensorRT | 68 s / 72 s | reComputer J40 series (J4012) / J30 series (J3011) | FP16, construído no dispositivo no momento da implantação |
| Do gatilho à resposta | **4,122 ms** | reComputer J40 series (J4012) | `pipeline_ms` no evento MQTT para um `POST /trigger`, do qual a inferência é 3,533 ms |
| Inferência p50 / p95 | 0,992 ms / 1,265 ms | reComputer J40 series (J4012) | O mecanismo implantado, subconjunto de validação de 1060 imagens, fluxo único em sequência |
| Top-1 de material | 0,8755, 99,91% de concordância com a CPU | reComputer J40 series (J4012); J30 series (J3011) re-medido bit-idêntico | Mesmo subconjunto de 1060 imagens, CPU fp32 0,8745 |

Reproduzir: `evaluation/runs/2026-09-08-orin-nx-acceptance`, `evaluation/runs/2026-09-08-orin-nx-acceptance-2`, `evaluation/runs/2026-09-08-orin-nano-acceptance`

### Classificador de referência: acurácia de referência na CPU

| Métrica | Valor | Condições |
|---|---:|---|
| Material top-1 (8 classes) | **0.8877** | val, 7417 imagens; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13.477.056 B |
| Material top-5 | 0.9833 | Mesmo |
| China quatro vias top-1 | **0.9500** | Mesmo; busca no argmax de oito classes |
| macro-F1 (7 classes com amostras) | 0.8511 | `textile` excluída — zero amostras |
| Material top-1, teste reservado | 0.8802 | test, 7290 imagens |
| Latência de inferência por imagem, CPU | média 16,796 ms / p50 14,724 ms / p95 28,718 ms | apenas `session.run`, referência offline em CPU, batch 1, não é um número de dispositivo |
| Imagens com confiança abaixo de 0,5 | 318 (4,3%) | val |
| Concordância ORT PTQ INT8 vs fp32 | 0.965 | 200 imagens de val, por canal + MinMax, sem colapso |

O top-1 de quatro vias (0,9500) é maior que o top-1 de material (0,8877) porque a confusão entre vidro, metal e plástico cai toda em recicláveis; apenas quatro vias superestima o quão bem o modelo distingue materiais.

Reproduzir: `evaluation/runs/2026-09-06-m1c-cpu`

### Trilha de vocabulário aberto: SigLIP 2 ViT-B/16

| Métrica | Valor | Condições |
|---|---:|---|
| Material top-1 (8 classes) | 0.8501 | val, 7417 imagens; conjunto de prompts em inglês `waste8-en/v1`, template `t02`, 16-shot α=0,8, temperatura 0,0075 |
| Material top-5 | 0.9987 | Mesmo |
| China quatro vias top-1 | 0.9393 | Mesmo; caminho hierárquico (oito classes, depois mapeamento) |
| macro-F1 (7 classes) | 0.7460 | Mesmo |
| ECE (15 bins) | 0.0221 | Mesmo |
| AUROC de conjunto aberto | 0.7538 | Média sobre as 7 classes com amostras, leave-one-class-out, score = `1 - max softmax` |
| Concordância chinês–inglês (mesma imagem) | material 0.8698 / quatro vias 0.9143 | Um embedding visual, três bancos de protótipos |
| Material top-1, teste reservado | 0.8620 | test, 7290 imagens |
| Latência de inferência por imagem | p50 66,93 ms / p95 91,62 ms | referência offline em CPU, batch 1, apenas torre de visão, não é um número de dispositivo |

Em comparação com a linha de base (mesmo split):

| Métrica | Linha de base (MobileNetV3-Small) | Vocabulário aberto (SigLIP2-B/16) |
|---|---:|---:|
| Material top-1, val | **0.8792** | 0.8501 |
| Material top-1, test | **0.8807** | 0.8620 |
| China quatro vias top-1, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| AUROC de conjunto aberto | Nenhum (uma cabeça de conjunto fechado não pode descartar uma classe sem retreinamento) | **0.7538** |
| Concordância chinês–inglês | Sem lado de texto | **0.8698 / 0.9143** |
| Novas classes zero-shot | Retreinamento necessário | **Editar o prompt** |
| Latência p50 em CPU | **1,57 ms** | 66,93 ms |

A linha de base nesta comparação é o MobileNetV3-Small substituído. O EfficientNet-Lite0 distribuído atinge top-1 de val 0,8877 neste split com p50 de CPU de cerca de 14,7 ms, o que reduz a razão de latência de 40× para 4–5×.

Reproduzir: `evaluation/runs/2026-09-05-w1-cpu`

A torre de visão SigLIP 2 medida em NPUs Rockchip (fp16, rknn-toolkit2 / librknnrt 2.3.2; o modelo RK3588 é um `.rknn` de 191 MB):

| Dispositivo | p50 / p95 por imagem | Cosseno do embedding vs CPU, média / mínimo |
|---|---|---|
| reComputer série RK3588 | 169,4 ms / 170,5 ms | 0.999617 / 0.998841 |
| reComputer série RK3576 | 152,51 ms / 176,59 ms | 0.99965 / 0.99900 |

Reproduzir: `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `evaluation/runs/2026-09-06-rk3576-cat`

### Pegada de implantação

| Item | Tamanho |
|---|---|
| ONNX de linha de base (`efficientnet_lite0_waste8.onnx`) | 13.477.056 B |
| ONNX da torre de visão SigLIP 2 (`siglip2_vision_224.onnx`) | 371.695.898 B |
| Bancos de protótipos + relatório de calibração | cerca de 155 KB no total |

### Runtimes e parâmetros principais

| Dispositivo | Modelo | Precisão | Runtime | Como o modelo chega ao dispositivo |
|---|---|---|---|---|
| reComputer série J30 / J40 | EfficientNet-Lite0 224² | FP16 | TensorRT | Engine construída no dispositivo no momento da implantação, vinculada à arquitetura da GPU e à versão do TensorRT; não pode ser pré-compilada para distribuição |
| reComputer série J40 (trilha opcional de vocabulário aberto) | Torre de visão SigLIP 2 ViT-B/16 + protótipos de texto constantes | — | — | `model.track: open_vocab` |
| reComputer série R2000 + Hailo-8 | EfficientNet-Lite0 224² | INT8 (entrada uint8, normalização dentro do HEF, `optimization_level=2`) | HailoRT 4.21.0 | HEF compilado fora do dispositivo com DFC 3.31.0, baixado no momento da implantação |
| reComputer série RK3588 | EfficientNet-Lite0 224² | INT8 (calib256+mmse) | librknnrt 2.3.2 | Convertido fora do dispositivo com rknn-toolkit2 2.3.2 |
| reCamera Pro | EfficientNet-Lite0 224² | INT8 | NPU da câmera (RV1126B), RKNN | Convertido fora do dispositivo com rknn-toolkit2 2.3.2, instalado na câmera no momento da implantação |
| reCamera (SG2002) | EfficientNet-Lite0 224² | BF16 | TPU da câmera, cvimodel | Convertido fora do dispositivo com TPU-MLIR, instalado na câmera no momento da implantação |

- Debounce do gatilho: **800 ms**; um gatilho que chega enquanto o anterior ainda está em execução é mesclado, não enfileirado
- Modo contínuo: publica apenas quando o top-1 é o mesmo por **3 frames** seguidos; o modo de gatilho dá uma resposta por disparo
- `actuator.enabled`: padrão `false`; o callback de GPIO não está vinculado a nenhum pino

### Degradações conhecidas

- `textile` tem zero amostras de treino e avaliação: nenhum dos datasets de origem tem uma classe de tecido. O oitavo logit é mantido (a saída ONNX permanece `1×8`), mas o modelo nunca o previu, e todas as tabelas reportam `n/a` para ele.
- Nenhuma classe de material mapeia para `hazardous`; ela permanece no enum para estabilidade de esquema e a build atual nunca a emite.
- `organic` compõe 48,9% de train e 47,1% de val; seu recall (0,9791) está muito acima das outras classes (0,70–0,88), e o modelo empurra itens incertos para ela.
- `residual` tem apenas 20 amostras de val; a trilha de vocabulário aberto atinge 0,2754 de precisão e AUROC leave-one-out 0,5795 nela, próximo ao acaso.
- Na trilha de vocabulário aberto, prever a classe de quatro vias diretamente a partir de prompts em chinês dá apenas 0,8478; o caminho hierárquico (oito classes, depois mapeamento) dá 0,9393.
- O MobileNetV3-Small substituído entra em colapso sob INT8 em todas as três cadeias de borda: concordância do emulador Hailo DFC 0,115, reComputer série RK3576 0,10, reComputer série RK3588 0,22 (fp16 0,98–1,00); é por isso que a linha de base mudou para EfficientNet-Lite0. Resultados INT8 em RK3588 não se transferem para RK3576.
- A torre de visão SigLIP 2 falha na quantização INT8 para Hailo-8 (`hailo optimize` gera erros na camada `ne_activation_mul_and_add78`), portanto não há HEF; a trilha de vocabulário aberto não roda na série reComputer R2000.
- Ambos os datasets são fotos de item único (TrashNet em um quadro branco, GC3 fora do centro e frequentemente ocluído), sem lixo molhado, amassado, empilhado, contra a luz ou parcialmente ensacado; a acurácia em um ponto de entrega ao vivo será menor que os números nas tabelas.

## Fontes de dados e assets

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **Licença MIT, Copyright (c) 2017 Gary Thung**. Baseado em duas fontes de primeira parte: o arquivo `LICENSE` do repositório no commit `6fa2b87`, e o campo `license` do cartão de dataset oficial no HuggingFace. A licença MIT exige que o aviso de copyright e licença seja mantido e não tem cláusula de compartilhamento pela mesma licença.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**, declarado textualmente no `README.dataset.txt` enviado com a exportação. O caminho do projeto no Roboflow Universe é `material-identification/garbage-classification-3`.
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revisão `75de2d55…`, Apache-2.0. Usado apenas pela trilha opcional de vocabulário aberto.
- **Pesos iniciais MobileNetV3-Small ImageNet** (torchvision) — BSD-3-Clause.
- **Código de runtime upstream** — Apache-2.0.
- **Diagrama de arquitetura** — desenhado a partir do catálogo de dispositivos do pacote e interfaces de saída; não contém imagens de dataset.

Material externo derivado desses datasets deve usar literalmente a seguinte string de atribuição:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**Nenhuma imagem derivada de dataset é incluída neste pacote.** Ambas as licenças permitem redistribuição.
