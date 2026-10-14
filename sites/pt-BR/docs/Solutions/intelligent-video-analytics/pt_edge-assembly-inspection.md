---
description: Inspeção de montagem no dispositivo — comparação de peças ausentes em relação a uma lista de itens esperados de referência, medição de dimensões calibrada por ArUco e um único veredito OK/NG enviado ao CLP via Modbus TCP e ao MES via MQTT. Hardware, visão geral de implantação, contratos de saída e dados medidos.
title: 'Inspeção de Montagem em Borda: Peças Ausentes, Dimensões, Modbus e MQTT'
keywords:
  - inspeção de montagem
  - detecção de peça ausente
  - visão computacional para medição de dimensões
  - calibração ArUco
  - inspeção Modbus TCP
  - evento de inspeção MQTT MES
  - inspeção de IA em borda
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg
slug: /solutions/edge-assembly-inspection
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-assembly-inspection/
generated_from: sensecraft-solutions@edge_inspection_assembly
---

:::caution[Aviso de uso]
Os resultados de dimensão são pixels convertidos por meio de uma referência de calibração e não substituem um calibrador certificado em um teste de aceitação. O detector fornecido é treinado no DeepPCB, um conjunto de dados de defeitos de placas nuas cujas seis classes não são peças ausentes de montagem; antes de usá-lo no seu produto, substitua a lista de itens esperados pela sua própria e faça medições com seus próprios dados.
:::

## O que esta solução faz

Uma câmera fixa observa uma estação de inspeção. Cada quadro passa por um detector, depois por comparação de peças ausentes e medição de dimensões, e termina como um único veredito OK/NG no takt da linha.

- **Comparação de peças ausentes** — uma lista de itens esperados de referência (`class` + ROI + distância de correspondência) é casada com as detecções. Tudo o que a lista espera e o quadro não contém torna-se `missing`; qualquer coisa encontrada fora da lista pode, opcionalmente, ser reportada como `extra`.
- **Medição de dimensões** — uma referência de calibração no plano da superfície medida fornece `mm_per_pixel`; o retângulo de área mínima do alvo dentro de um ROI de medição é convertido para milímetros e comparado com o nominal ± tolerância.
- **Fusão de veredito** — `defect`, `missing`, `extra` e `dimension_out_of_tolerance` cada um, por si só, torna o quadro NG; cada um dos quatro pode ser desativado.

O veredito é escrito em dois lugares: registradores de retenção e bobinas Modbus TCP para o CLP, e um evento JSON MQTT por quadro para o MES ou historiador. Os registradores são escritos antes da bobina, de modo que um CLP que age sobre a bobina leia os dados de registrador do mesmo veredito.

- Código-fonte do empacotamento e guia de implantação: [sensecraft-solutions / solutions/edge_inspection_assembly](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly)
- Escolhendo uma configuração e implantando: [página de reference design](https://www.seeed.cc/solutions/reference-designs/edge_inspection_assembly)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Pronto para rodar no dispositivo</h3>
                <p>Instale o pacote de aplicação em um reComputer J30 / série J40 ou série R2000 e ele roda; uma primeira instalação leva cerca de 60 minutos. Captura até bobina P50 medida na série J40: 10,92 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código aberto</h3>
                <p>O código de runtime é Apache-2.0; o detector é YOLOX-Tiny (Apache-2.0), sem código ou pesos da Ultralytics e sem obrigação de AGPL.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Suas próprias câmeras, CLP e MES</h3>
                <p>Qualquer câmera RTSP / ONVIF / USB; os vereditos saem via Modbus TCP e MQTT. Os HR 0–7 usam o mesmo layout de registrador que o design de inspeção de superfície, então um programa de CLP existente não precisa de alteração.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Roda totalmente no local</h3>
                <p>Captura, inferência, veredito e saída rodam todos no host de inspeção; a cadeia principal não precisa de acesso à internet.</p>
            </div>
        </li>
    </ul>
</div>

### O que o demo realmente mostra

As imagens abaixo são saídas reais do pipeline:

- A saída do detector em uma imagem de validação DeepPCB (`12300060_test.jpg`); cada caixa é uma detecção do modelo ONNX. A lista de seis itens esperados na configuração de exemplo fornecida foi gerada a partir das caixas de ground truth deste quadro.
- Uma cena sintética de dimensão com ArUco em tamanho nominal: o marcador à esquerda fornece mm/px, o bloco à direita é medido em relação a ele (60 × 40 mm, veredito OK).
- A mesma cena com uma peça superdimensionada: 62,25 mm em relação a um nominal de 60 mm e tolerância de 1 mm, veredito NG, Modbus HR 10 = 6225 e HR 11 = 2.

A saída do detector em imagens de validação DeepPCB:

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg" alt="Saída do detector na imagem de validação DeepPCB 12300060_test.jpg; as caixas são detecções reais do modelo"/>
</div>

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-2-13779bda.jpg" alt="O mesmo modelo em uma segunda imagem de validação DeepPCB"/>
</div>

A cadeia de dimensão: o marcador à esquerda fornece mm/px, o bloco à direita é medido em relação a ele. Em tamanho nominal o veredito é OK:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-nominal-be46361b.png" alt="Cena sintética de calibração em tamanho nominal: o marcador fornece mm/px, o bloco mede 60 × 40 mm, veredito OK"/>
</div>

Uma peça superdimensionada na mesma cena mede 62,25 mm, veredito NG, Modbus HR 10 = 6225 e HR 11 = 2:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-oversize-384a1faf.png" alt="Peça superdimensionada: 62,25 mm medidos em relação a um nominal de 60 mm e tolerância de 1 mm, veredito NG"/>
</div>

Com a peça rotacionada em 25°, o retângulo de área mínima fornece o mesmo tamanho:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-rotated-1ad0cd88.png" alt="Com a peça rotacionada em 25°, o tamanho a partir do retângulo de área mínima permanece inalterado"/>
</div>

As cenas de dimensão são geradas por `evaluation/make_dimension_fixture.py` em um mm/px conhecido; o ground truth vem dos parâmetros de geração. Elas não são fotografias de uma estação real.

## De que hardware você precisa

Três coisas por estação: uma câmera, um host de inspeção e um sistema que receba o veredito.

**① Câmera** — qualquer câmera RTSP ou ONVIF; uma câmera USB ou um arquivo gravado também funciona. Qualquer modelo serve, desde que toda a placa ou montagem esteja no quadro e o enquadramento não mude depois que o template for construído.

**② Host de inspeção** — decide quantas estações um host pode suportar.

| | Host de inspeção | Acelerador | Detector conforme implantado | Streams medidos | Quando escolhê-lo |
|---|---|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Jetson Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Host de estação única | GPU Orin | YOLOX-Tiny 640², TensorRT FP16 | 1 stream, 67 h de teste contínuo | Uma única estação |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Jetson Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Host de agregação multiestação | GPU Orin | YOLOX-Tiny 640², TensorRT FP16 | 8 estáveis / 12 degradando / 24 falhando | Várias estações em um único host; os dados de precisão e velocidade foram medidos neste módulo |

Capacidade de stream: 640² a 10 fps por stream, cinco minutos por nível, toda a varredura executada duas vezes, com MQTT e Modbus desativados. Com ambas as saídas ativadas, a contagem alcançável fica abaixo de 8.

Ambos os modelos reComputer vêm em um gabinete industrial sem ventoinha (reComputer Industrial J3011 / J4012) com o mesmo módulo e runtime, para montagem em painel.

**③ Todo o resto** — para a verificação de dimensão, uma referência de calibração no plano da superfície medida (um marcador ArUco, `DICT_4X4_50` por padrão, ou qualquer objeto de largura conhecida); Ethernet entre câmera e host; e um mestre Modbus TCP (o CLP) e/ou um consumidor MQTT. A cadeia principal não precisa de acesso à internet.

### Limites de Seleção Negativa

- **Estação Única vs Multiestação**: o J3011 é dimensionado para inspeção de câmera única por estação. Se um host precisar monitorar várias estações (>2 câmeras simultâneas) ou taxas de quadros altas, escolha o J4012.
- **Atualizações Dinâmicas de Modelo**: o Hailo-8 requer compilação de modelo offline. Se seu fluxo de trabalho exigir ajustes frequentes no dispositivo ou execução direta de PyTorch/ONNX, escolha a série Jetson.

## Como implantar no local

Primeiro fixe a câmera e a ótica, depois instale o software.

### Um: instale o hardware, começando pela câmera

:::tip[Não mova a câmera após a configuração]
Os ROIs dos itens esperados são armazenados como coordenadas de imagem. Depois que a câmera é movida, remontada ou refocada, todo o template de `assembly.expected[]` precisa ser reconstruído. Qualquer trabalho na câmera na linha significa refazer o template daquela estação.
:::

A placa ou montagem inteira deve estar no enquadramento. Para a verificação de dimensão, coloque a referência de calibração no mesmo plano da superfície medida; uma distância de trabalho diferente vira erro de medição e não gera mensagem de erro. Sem uma referência, a seção de dimensão informa `uncalibrated`, Modbus HR 11 = 4, e nenhum valor.

### Dois: instale o software

As etapas por dispositivo estão na página do design de referência, onde escolher uma configuração para o seu local também fornece o pacote de aplicação correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_inspection_assembly" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

Ambos os caminhos seguem as mesmas etapas:

1. **Escolha um preset e um host.** `Camera + reComputer J30 / J40 (Orin)` ou `Camera + reComputer R2000 series (Hailo-8)`. Classificado como **avançado**; reserve cerca de **60 minutos** para a primeira instalação.
2. **Implante o runtime de inspeção** (obrigatório). No Orin o mecanismo TensorRT é construído no dispositivo na primeira implantação, cerca de 5 minutos, e fica vinculado a esse dispositivo e àquela versão do TensorRT. No Hailo o HEF INT8 é compilado fora do dispositivo e baixado no momento da implantação, sem build na placa, mas três pré-requisitos se aplicam: uma versão secundária de Python correspondente; HailoRT 4.21.x na mesma versão entre driver, biblioteca de usuário e bindings Python; e o parâmetro de kernel `hailo_pci force_desc_page_size=4096`.
3. **Configure a calibração de dimensão** (opcional). Sem ela a cadeia de peça ausente ainda roda e a seção de dimensão informa `enabled: false` ou `uncalibrated`.
4. **Verifique os veredictos** (opcional). O painel web local na porta 8080 mostra contadores de integridade, eventos recentes e um preview MJPEG com caixas de detecção e ROIs da montagem. Confirme aqui que a câmera cobre a área correta antes de ligar o CLP.
5. **Gere a lista de esperados com a ferramenta de anotação SAM2** (opcional). A ferramenta roda em uma estação de trabalho offline, não no dispositivo de borda, e fica fora do loop de frame: uma pessoa desenha a caixa, o SAM 2.1 Hiera-Small a transforma em uma máscara de pixels, e a máscara é expandida em um ROI de montagem. Um backend numpy Otsu-flood que não precisa de GPU também está incluído.

Antes de entrar em produção, substitua `assembly.expected[]` pelos seus próprios slots. A lista enviada foi gerada a partir de uma imagem DeepPCB e serve apenas para exercitar a cadeia.

## Quais interfaces estão disponíveis

Os dados saem do host de inspeção em três interfaces, todas servidas localmente pelo host.

- **Um CLP que já atua em uma bobina OK/NG** — leia Modbus TCP na porta 502, unidade 1. HR 0–7 correspondem ao layout do contrato de inspeção de superfície v1, então um programa existente continua funcionando; as novas informações estão em HR 8–11.
- **Um MES ou historiador** — assine `<device-name>/inspection/<stream-id>/results` na porta 1883. Um evento JSON por frame processado, schema `2.0.0`, validado em relação ao contrato antes da publicação.
- **Um operador ou engenheiro de comissionamento** — o painel HTTP na porta 8080.

`<device-name>` é definido no momento da implantação e forma o primeiro segmento do tópico; dê o nome por linha, célula ou estação para que vários hosts em um broker permaneçam separados. O id do stream também é escrito no payload, então o código a jusante não precisa analisar o tópico.

### Tabela completa de interfaces

| Tipo | Onde | Conteúdo | Observações |
|---|---|---|---|
| `mqtt` | 1883, `<device-name>/inspection/<stream-id>/results` | `verdict`, `verdict_reasons`, `defect_count`, `detections[]`, `assembly` (`enabled`, `expected_count`, `matched_count`, `missing_count`, `extra_count`, cada item ausente com seu rótulo e ROI), `dimension` (`enabled`, `calibrated`, `mm_per_pixel`, `out_of_tolerance_count`, `measurements[]` com status por medição) | Schema `2.0.0`; ambas as seções sempre presentes, `enabled: false` quando o módulo está desligado para aquela fonte |
| `modbus_tcp` | 502, unidade 1, Coil 0/1 + HR 0–11 | Coil 0 = NG, Coil 1 = OK (mutuamente exclusivos). HR 0–7 como no contrato v1: classe primária, contagem de defeitos, bbox ×10000, heartbeat. HR 8 = contagem de ausentes, HR 9 = contagem de extras, HR 10 = mm medidos ×100, HR 11 = código de tolerância | Registradores escritos antes da bobina mudar de estado, sob um único lock |
| `http` | 8080, `/healthz` `/events` `/preview.mjpg` | fps, tempo de inferência, contadores de falha de ausentes e de dimensão; os eventos mais recentes; preview MJPEG com caixas e ROIs | Painel local, sem autenticação |

**Código de tolerância HR 11**: `0` ok, `1` undersize, `2` oversize, `3` not_found, `4` uncalibrated.

`verdict_reasons` é uma lista; os quatro motivos (`defect`, `missing`, `extra`, `dimension_out_of_tolerance`) podem aparecer juntos. Os ROIs são configurados por fonte (`sources[].assembly` e `sources[].dimension`). Uma seção `assembly` gerada pela ferramenta de anotação carrega `roi_profile_sha256`, identificando qual perfil de ROI roda no local; com ROIs escritos à mão ele é omitido ou `null`.

```json
{
  "schema": "2.0.0",
  "device": "assembly-station-01",
  "stream": "cam_pcb_top",
  "timestamp": 1729000000.456,
  "verdict": "NG",
  "verdict_reasons": ["missing"],
  "defect_count": 0,
  "detections": [],
  "assembly": {
    "enabled": true,
    "expected_count": 6,
    "matched_count": 5,
    "missing_count": 1,
    "extra_count": 0,
    "missing_items": [
      {"label": "capacitor_c12", "roi": [120, 240, 160, 280]}
    ]
  },
  "dimension": {
    "enabled": true,
    "calibrated": true,
    "mm_per_pixel": 0.125,
    "out_of_tolerance_count": 0,
    "measurements": [
      {"name": "pcb_width", "value_mm": 60.05, "status": "ok"}
    ]
  }
}
```

Três pontos a observar ao ler os campos:

- **Quando `HR 10 = 0`, leia primeiro HR 11.** `3` e `4` significam que não há medição, não uma leitura de 0 mm.
- **Na v2, `verdict = NG` pode vir com `defect_count = 0`.** Uma peça ausente ou uma medição fora de tolerância também torna o frame NG.
- **Bobina e registradores são apenas uma amostra no lado de escrita.** Lê-los como dois pedidos Modbus pode atravessar dois veredictos em taxas altas de veredictos, observado em cerca de 20 veredictos/s. Se isso importar, faça polling dos registradores primeiro e use a bobina como gatilho.

Com vários streams em um host, os registradores Modbus mantêm o veredicto mais recente de qualquer stream que o produziu; resultados por stream vêm do MQTT. O broker MQTT empacotado é local e anônimo; aponte uma instalação de produção para um broker com credenciais.

## Desempenho e dados medidos {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_assembly</font></span></strong>
    </a>
</div><br />

### Velocidade e latência

"Detector throughput" cobre apenas a chamada de detecção; "full pipeline" adiciona a mesclagem de veredictos, Modbus, MQTT e validação de contrato, sem limitação; "end-to-end" é da captura até a escrita na bobina Modbus, limitado a uma taxa de linha de 10 fps.

| Dispositivo | Modelo / precisão | Detector throughput | Full pipeline | End-to-end captura → bobina Modbus |
|---|---|---:|---:|---|
| reComputer J40 series (J4012, Orin NX 16GB) | YOLOX-Tiny 640², TensorRT FP16 | 95,06 FPS (`detect()` P50 10,52 ms) | 89 FPS (P50 42,9 ms) | P50 10,92 ms / P99 11,18 ms; 3000 amostras, 0 perdas. Após uma implantação do zero (engine construído no dispositivo): P50 9,81 ms / P95 10,18 ms, n=300 |
| reComputer R2000 series + Hailo-8 | YOLOX-Tiny 640², HailoRT INT8 HEF | Hardware 106,75 FPS (`hailortcli run`); aplicação 94,02 FPS (P50 10,64 ms) | 43,92 FPS | P50 11,89 ms / P99 16,08 ms |

Condições: números do detector Orin cronometrados em 500 execuções em 60 frames pré-decodificados; a execução do engine é cerca de 6,3 ms disso, o restante é letterbox mais NMS em CPU. Capacidade de stream medida em reComputer J40 series (J4012): 8 estáveis / 12 degradando / 24 falhando; 640² a 10 fps por stream, cinco minutos por nível, toda a varredura executada duas vezes, MQTT e Modbus desativados. reComputer J30 series (J3011) rodou um stream de 10 fps continuamente por 67 h, end-to-end P50 11,45 ms.

Reprodução: `solutions/edge_inspection_assembly/evaluation/` (Hailo-8: `evaluation/runs/2026-09-06-rpi-hailo/results.md`)

### Precisão de detecção

| Métrica | Valor | Condições |
|---|---:|---|
| mAP50, reComputer J40 series, TensorRT FP16 | **0,9876** | DeepPCB6 val, 205 imagens / 1158 caixas / 6 classes; no limiar 0,35, P 0,9284 / R 0,9741, FP 87 / FN 30, 0 frames totalmente perdidos |
| mAP50-95, reComputer J40 series (implantado do zero) | 0,8207 | Mesmo conjunto de validação; referência em CPU 0,8213 |
| mAP50, reComputer R2000 series + Hailo-8, INT8 HEF | **0,9858** | Mesmo conjunto de validação; −0,0018 em relação à referência em CPU |
| mAP50, emulador Hailo Dataflow Compiler, INT8 | 0,9924 | 20 imagens de validação / 118 caixas, não diretamente comparável com as linhas de 205 imagens; CPU, nativo e quantizado dão o mesmo mAP50 / P / R, por caixa CPU ↔ quantizado 119/120 correspondências |

Conjunto de dados: [DeepPCB](https://github.com/tangsanli5201/DeepPCB) (MIT), seis classes (open / short / mousebite / spur / copper / pin-hole), não redistribuído com o pacote.

Reprodução: `solutions/edge_inspection_assembly/evaluation/` (emulador: `evaluation/runs/2026-09-05-m3-hef/`)

### Peças ausentes e dimensões

| Item | Resultado | Condições |
|---|---|---|
| Loop de ground-truth de peça ausente | Frame de template 6 / 6 correspondentes; após trocar as placas 6 / 6 relatados como ausentes | Lista de esperados construída a partir das caixas ground-truth de uma imagem de validação (ROI = caixa GT × 1,6, 6 entradas); após a troca `verdict_reasons` lista `missing` junto com `defect` |
| Erro de dimensão (calibração ArUco) | Pior erro relativo **0,65%**, orçamento 1% | Cena ArUco sintética, sem erro de lente ou iluminação; lado longo 60 → 60,241 mm (+0,40%), lado curto 40 → 40,261 mm (+0,65%); tolerância ±1,0 mm, veredicto `ok`; PNG sem compressão e mp4v dão valores idênticos |
| Soak de stream único | 67 h de execução contínua, 0 frames perdidos | reComputer J30 series (J3011), stream único a 10 fps; baseline inicial de RSS 256–259 MiB, temperatura de junção 61–62 °C, 0 reinicializações |

Reproduzir: `evaluation/make_dimension_fixture.py`, `evaluation/smoke_cpu_dimension.py`; níveis de soak em `boundary.soak.yaml`

### Tempos de execução e parâmetros principais

| Dispositivo | Modelo | Precisão | Tempo de execução | Como o modelo chega ao dispositivo |
|---|---|---|---|---|
| reComputer J30 / J40 series | YOLOX-Tiny 640² | FP16 | TensorRT | Engine construída no dispositivo no primeiro deploy (cerca de 5 minutos), vinculada a esse dispositivo e à versão do TensorRT |
| reComputer R2000 series + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.x | HEF compilado fora do dispositivo com o Hailo Dataflow Compiler (nível de otimização 1 + Bias Correction), baixado no momento do deploy |

- Limite de detecção: `0.35` (configuração de avaliação)
- Alvo de calibração: ArUco `DICT_4X4_50` (padrão) ou qualquer objeto de referência de largura conhecida
- Motivos de veredito: `defect` / `missing` / `extra` / `dimension_out_of_tolerance` podem ser desativados um a um; `extra` requer que o relatório de peças extras esteja ativado

### Degradações conhecidas

- Mover, remontar ou refocar a câmera invalida o modelo de ROI; reconstrua a lista esperada.
- Um alvo de calibração a uma distância de trabalho diferente da face medida, uma peça inclinada ou baixo contraste de borda produzem erro de dimensão, `not_found` ou `uncalibrated`, sem que nenhum erro seja gerado.
- A precisão vem de defeitos de placa nua DeepPCB: defeitos sintéticos com bordas nítidas, e as seis classes não são peças de montagem ausentes. Cenas reais de montagem são mais difíceis.
- Na reComputer R2000 series o gargalo é a CPU host: o pipeline completo roda a 43,92 FPS e fica ainda mais abaixo da vazão do detector do que no Orin.
- A capacidade de fluxo foi medida com MQTT e Modbus desativados; com ambas as saídas ativadas, a contagem alcançável fica abaixo de 8.

## Fontes de dados e recursos

- **DeepPCB** — [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB), licença MIT. Usado para treinar o detector fornecido e como conjunto de validação para todos os números de precisão acima. A licença MIT permite redistribuição e uso comercial e exige que o aviso de direitos autorais acompanhe cópias e trabalhos derivados; a atribuição acompanha as imagens em `gallery/ATTRIBUTION.md` do pacote. As imagens são digitalizações em tons de cinza binarizadas de camadas de cobre de PCBs nus, sem pessoas e sem conteúdo que identifique clientes. **O conjunto de dados não é redistribuído com o pacote.**
- **YOLOX** — [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX), Apache-2.0. Backbone do detector. Nenhum código ou peso da Ultralytics é usado, portanto não há obrigação de AGPL.
- **SAM 2.1 Hiera-Small** — [github.com/facebookresearch/sam2](https://github.com/facebookresearch/sam2), código e checkpoints Apache-2.0. Usado apenas pela ferramenta de anotação offline.
- **Imagens do dispositivo de medição de dimensão** — sintéticas, geradas por `evaluation/make_dimension_fixture.py` deste projeto. Nenhum material de terceiros, nenhuma atribuição necessária.
- **Diagrama de arquitetura** — desenhado a partir do catálogo de dispositivos do pacote e das interfaces de saída.

O código de runtime é Apache-2.0. O modelo fornecido é treinado em DeepPCB; consulte o aviso de uso no topo para o seu escopo.
