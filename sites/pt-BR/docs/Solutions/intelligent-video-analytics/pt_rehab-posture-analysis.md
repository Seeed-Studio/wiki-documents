---
description: 'Documento de engenharia de Análise de Postura para Reabilitação com IA de Borda: retreinamento de topologia anatômica de 33 pontos-chave, máquina de estados com histerese, medição de ângulo de ADM, mecanismo de alerta de compensação, modelos em cascata secundária de mão/pé, implantação automatizada com solution-cli, protocolos WebSocket/EMR e benchmarks de borda'
title: 'Análise de Postura para Reabilitação com IA de Borda: Pose de 33 Pontos-Chave e Cinemática Clínica'
sidebar_label: 'Análise de Postura para Reabilitação'
keywords:
  - Análise de Postura para Reabilitação
  - Detecção de 33 Pontos-Chave
  - Retreinamento YOLO11-Pose
  - Cinemática Clínica
  - Amplitude de Movimento Articular ADM
  - Alerta de Compensação Patológica
  - Extensão de Micro-Modelo em Cascata
  - solution-cli
  - reCamera Pro
  - RV1126B RKNN
  - SG2002
  - Vazamento Zero de Vídeo
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/cover-93765b27.png
slug: /solutions/rehab-posture-analysis
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/solutions/rehab-posture-analysis/
generated_from: sensecraft-solutions@rehab_posture_analysis
---

:::caution[Usage Notice]
Esta é uma ferramenta auxiliar de avaliação biomecânica, não um dispositivo médico de diagnóstico certificado. Ela fornece telemetria cinemática objetiva e não substitui a avaliação clínica de fisioterapeutas licenciados.
:::

## O que esta solução faz

### Arquitetura do Sistema e Fluxo de Dados

![Arquitetura de Análise de Postura para Reabilitação com IA de Borda](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/architecture-en-328afea6.png)

A solução desacopla a percepção de pose em tempo real na borda da avaliação de biomecânica clínica em quatro domínios funcionais: câmeras inteligentes de borda realizam inferência de 33 pontos no dispositivo; máquinas de estado com histerese calculam ADM articular e alertas de compensação com debounce; primitivas vetoriais são transmitidas via WebSocket e RTSP para telas de orientação em tempo real, com telemetria MQTT/Webhook chegando aos sistemas de prontuário eletrônico hospitalar (EMR); o vídeo bruto permanece na câmera para garantir privacidade.


Em clínicas ambulatoriais, centros de reabilitação para idosos ou cantos de exercícios domiciliares, **a câmera inteligente com IA de borda estima em tempo real uma topologia anatômica de esqueleto de corpo inteiro com 33 pontos-chave**. Quando pacientes apresentam compensações involuntárias como elevação de ombro ou colapso medial do joelho, **o HUD na tela aciona um alerta visual vermelho e um sinal sonoro em até 50 ms**, reportando Amplitude de Movimento (ADM) articular objetiva e métricas de repetições válidas para os sistemas EMR do hospital.

- Repositório Open Source: [github.com/suharvest/rehab-posture-analysis](https://github.com/suharvest/rehab-posture-analysis)
- Dimensionamento e Implantação: [Guia de Implantação do Reference Design](https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Topologia Verdadeira de 33 Pontos-Chave</h3>
                <p>Modelo de esqueleto com 33 articulações retreinado, completando dígitos bilaterais de polegar/indicador/mínimo e triângulos plantares de calcanhar/dedos, eliminando a truncagem de membros distais em poses padrão de 17 pontos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <div class="info-content">
                <h3>Alerta de Compensação Abaixo de 50 ms</h3>
                <p>Debounce temporal de 3 quadros combinado com delta de altura bilateral de acrômio (&gt;12 mm) intercepta elevação de trapézio e valgo de joelho, rejeitando trapaças com repetições parciais.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Vazamento Zero de Vídeo</h3>
                <p>Quadros brutos da câmera são descartados imediatamente após a inferência em SRAM/DRAM no chip; apenas primitivas de coordenadas em JSON e eventos de alerta atravessam os limites da rede.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>Inferência em Tempo Real a 24,0 FPS</h3>
                <p>A reCamera Pro (RV1126B 3 TOPS) atinge 41,7 ms de latência ponta a ponta com zero rastro visual em grandes telas voltadas para o paciente.</p>
            </div>
        </li>
    </ul>
</div>

### Demonstração ao Vivo do Dispositivo

Saída de vídeo real da câmera inteligente de borda: todos os 33 pontos-chave e linhas do esqueleto anatômico são sobrepostos ao paciente, com o ângulo de ADM articular em tempo real exibido à esquerda e fase do exercício, repetições válidas e escores de qualidade renderizados à direita.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-rom-en-e95471f2.gif" alt="Rastreamento cinemático de reabilitação em tempo real na reCamera Pro: sobreposição de esqueleto de 33 pontos-chave com métricas clínicas no HUD"/>
</div>

Quando ocorre elevação de ombro, o contorno superior do ombro pisca em vermelho e entra em modo de alerta (como mostrado abaixo):

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-compensation-en-d8bd5846.gif" alt="Detecção de compensação patológica: elevação de ombro identificada, acionando alerta intermitente e pausando a contagem de repetições válidas"/>
</div>

---

## Dimensionamento de Hardware

Somente uma câmera inteligente all-in-one ou uma câmera existente com um acelerador de borda é necessária no local:

| | Modelo de Hardware | Especificações e Cálculo | Quando Escolher |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Sensor 4K + NPU de 3 TOPS | Rockchip RV1126B · NPU de 3 TOPS<br/>2GB LPDDR4 | **Nível Recomendado**. Salas de reabilitação clínica e academias de fisioterapia que exigem 24 FPS completos e rastreamento de 33 pontos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Sensor 1/2.8" + TPU de 1 TOPS | SOPHGO SG2002 · TPU de 1 TOPS<br/>512MB DDR3 | **Nível Otimizado em Custo**. Centros comunitários para idosos, espaços de treino domiciliar com PoE de cabo único |

---

## Implantação e Configuração

### 1. Montagem e Posicionamento Óptico
- **Altura de Montagem**: **1,2 ~ 1,4 m** (nível do peito), ângulo de inclinação dentro de 0° ~ 5°; evite ângulos descendentes de teto alto;
- **Distância de Trabalho**: **2,0 ~ 3,5 m** para exercícios em pé de corpo inteiro; **1,5 ~ 2,5 m** para treino sentado de membros superiores;
- **Iluminação**: Iluminação recomendada ≥ 150 Lux; evite contraluz intensa de janelas.

### 2. Instalação de Software: Cadeia de Ferramentas Oficial Recomendada

Esta solução está integrada ao framework oficial de automação da Seeed. O método principal recomendado usa **`solution-cli` (ou AI Solution Assistant)** para pré-checagem e implantação automatizadas, com opções de GUI também suportadas:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Ver Guia de Implantação em Campo 🖱️</font></span></strong>
    </a>
</div><br />

#### Recomendado: Implantação Automatizada com `solution-cli` (Melhor Prática em CLI)
`solution-cli` é o kit unificado de implantação e dimensionamento da Seeed para soluções industriais de IA de borda (veja o [Guia de Implantação](https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy)). Faça a implantação em três etapas sem extrair arquivos tar manualmente:

```bash
# 1. Install or run solution-cli (skip if already available)
npm install -g @seeed-studio/solution-cli
# Or run on the fly via npx: npx @seeed-studio/solution-cli doctor

# 2. Diagnose local environment and scan network for reCamera hardware
solution-cli doctor
solution-cli device scan

# 3. Query solution details and deploy to target camera
solution-cli hub get rehab_posture_analysis --locale en
solution-cli deploy --solution rehab_posture_analysis --target recamera --host 192.168.42.1
```
> **Dica**: Se você estiver usando agentes de IA como Claude Code, Codex ou Antigravity, faça o prompt diretamente: *"Please deploy reference design rehab_posture_analysis to my connected reCamera Pro using solution-cli"*. O agente invoca a habilidade integrada para executar pré-checagens e montar o pipeline automaticamente.

#### Alternativa: Instalação via GUI (SenseCraft Web / App Center)
1. Conecte seu PC ao hotspot ou IP local da reCamera, abra `http://<camera_ip>` em um navegador;
2. Navegue até **App Center**, pesquise por `rehab_posture_analysis`;
3. Clique em **Install / Run**; o dispositivo baixa automaticamente o mecanismo INT8 pré-compilado e o pipeline de cinemática;
4. Clique em **Open Live HUD** para exibir a tela interativa em tempo real em um monitor local ou tablet.

---

## Retreinamento do Modelo de 33 Pontos-Chave vs Padrão de 17 Pontos-Chave

### 1. Por que Retreinar uma Topologia de 33 Pontos-Chave?
Modelos convencionais de 17 pontos-chave COCO apresentam limitações significativas em fisioterapia:
- **Truncagem de Membros Distais**: Truncar nos punhos impede o rastreamento de pronação/supinação do antebraço e extensão de preensão dos dedos, perdendo o verdadeiro ponto final do braço de alavanca biomecânico;
- **Perda do Triângulo de Suporte Plantar**: Um único marco no tornozelo não consegue formar uma base de suporte do pé. Na análise de agachamento, isso falha em capturar compensações de elevação do calcanhar e hiperpronação do tornozelo.

Esta solução retreinou um **modelo YOLO11n-Pose de 33 Pontos-Chave** em conformidade com o padrão anatômico MediaPipe / BlazePose:

```
                    0: Nose
              1-3: Left Eye   4-6: Right Eye
                 7: Left Ear   8: Right Ear
                 9: Mouth (L) 10: Mouth (R)
                        │
            11: L Shoulder ───┴─── 12: R Shoulder
             │                      │
            13: L Elbow            14: R Elbow
             │                      │
            15: L Wrist            16: R Wrist
         ┌───┼───┐              ┌───┼───┐
     17:Pinky 19:Index 21:Thumb 18:Pinky 20:Index 22:Thumb
                        │
            23: L Hip ─────┴───── 24: R Hip
             │                      │
            25: L Knee             26: R Knee
             │                      │
            27: L Ankle            28: R Ankle
         ┌───┴───┐              ┌───┴───┐
     29:Heel   31:Toe       30:Heel   32:Toe
```

### 2. Modelo padrão de 17 pontos vs modelo personalizado re-treinado de 33 pontos

| Dimensão | COCO padrão 17 pontos | Personalizado 33 pontos re-treinado | Vantagem clínica |
|---|---|---|---|
| **Resolução de extremidades distais** | Truncado em punhos e tornozelos | 6 pontos de referência na mão + 4 pontos plantares | Extensão dos dedos e triângulos de apoio do pé totalmente resolvidos |
| **Taxa de detecção de compensação** | ~68% (falsos negativos frequentes em elevação de ombros e elevação de calcanhar) | **94,2%** (delta de altura do acrômio + ângulo plantar) | Captura com precisão elevação do trapézio e colapso do joelho |
| **Latência em computação de borda** | 35,0 ms (RV1126B) | **41,7 ms** (RV1126B INT8) | Adicionar 16 pontos acrescenta apenas 6,7 ms, mantendo throughput de 24 FPS |
| **Tamanho do modelo (INT8)** | 3,8 MB | **4,2 MB** | Aumento mínimo, cabe confortavelmente em memória embarcada de 512 MB–2 GB |

---

## Extensão para desenvolvedores: arquitetura de modelo em cascata de duas etapas

A arquitetura modular permite que desenvolvedores encadeiem micro-modelos secundários especializados sobre o backbone de 33 pontos-chave:

```
Full Video Stream (1080p)
   │
   ▼ [Stage 1: Primary Localization] YOLO11n-Pose 33-kpt Detector
   │                                 Outputs full skeleton and joint bounding boxes
   │
   ├──▶ Branch A: [Fine Hand Therapy] Crop wrist ROI (128×128)
   │                                  Cascade 21-point Hand Landmark model (finger flexion / squeeze ball)
   │
   ├──▶ Branch B: [Foot & Gait Analysis] Crop ankle/foot ROI (128×128)
   │                                     Cascade 6-point plantar contact classifier (flat foot / heel strike)
   │
   └──▶ Branch C: [Head & Cervical Kinematics] Crop head/face ROI (160×160)
                                               Cascade Head-Pose 3D Euler angle model (cervical spine ROM)
```

### Guia de implementação:
1. **Recortar ROI**: Extraia as coordenadas do punho `[15, 17, 19, 21]` de `keypoints_33` e expanda com margem de 15% do casco convexo;
2. **Inferência leve**: Envie o tensor recortado para um MobileNetV4 / ShuffleNet secundário no NPU/TPU (latência ~4–6 ms);
3. **Fusão temporal**: Sincronize os resultados do submodelo com a máquina de estados primária para fornecer avaliações biomecânicas compostas.

---

## Benchmarks e telemetria

Avaliado em 50 sessões de gravação de fisioterapia clínica:

### 1. Matriz de desempenho de hardware
| Plataforma | Modelo e runtime | Resolução | Latência | FPS | Utilização do acelerador |
|---|---|---|---|---|---|
| **reCamera Pro** | YOLO11n-Pose 33kpt INT8 (RKNN) | 640×640 | 38,2 ms | **24,0 FPS** | ~65% |
| **reCamera 2002** | YOLO11n-Pose 33kpt INT8 (CVI TPU) | 512×512 | 62,5 ms | **14,2 FPS** | ~82% |

### 2. Precisão de medição clínica
- **Precisão de ADM**: Comparado ao padrão-ouro de captura óptica VICON, o EMA da abdução do ombro é de **±2,1°**;
- **Revocação de compensação**: Elevação do trapézio **95,2%**, valgo de joelho **93,8%**;
- **Estabilidade de debounce**: Filtro de debounce de 3 quadros remove 98,6% das repetições parciais induzidas por tremor.

---

## Interfaces e protocolos de saída

### 1. Exibição de reabilitação em tempo real (WebSocket)
- **Endpoint**: `ws://<camera_ip>:8124/ws/kinematics`
- **Esquema de payload**:
```json
{
  "timestamp": 1793339665120,
  "phase": "PEAK_HOLD",
  "valid_reps": 5,
  "rom_degrees": 92.4,
  "quality_score": 95.0,
  "compensation": {
    "detected": true,
    "type": "SHOULDER_SHRUG",
    "deviation_val": 14.2
  },
  "keypoints_33": [
    {"id": 0, "name": "nose", "x": 0.512, "y": 0.185, "conf": 0.94}
  ]
}
```

### 2. Integração com sistema hospitalar EMR / HIS (MQTT)
- **Broker**: `mqtt://<camera_ip>:1883`
- **Tópico**: `rehab/telemetry/<camera_sn>/session`
- Publica relatórios estruturados de sessões de exercícios e logs contínuos de compensação após a conclusão das repetições.
