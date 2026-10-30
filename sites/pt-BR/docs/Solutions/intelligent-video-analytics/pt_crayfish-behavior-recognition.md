---
description: 'Documento de Engenharia de Reconhecimento de Comportamento e Briga de Lagostim em Aquicultura: pipeline em funil de 4 estágios, rede de mosaico temporal de 8 quadros, votação de sexo em múltiplos quadros, implantação automatizada com solution-cli, matriz de runtime, protocolos MQTT/WS e benchmarks em campo'
title: 'Reconhecimento de Comportamento de Lagostim em Aquicultura: Pipeline em 4 Estágios e Benchmarks na Borda'
sidebar_label: 'Reconhecimento de Comportamento de Lagostim'
keywords:
  - Reconhecimento de Briga de Lagostim
  - Aquicultura Edge AI
  - Cherax quadricarinatus
  - solution-cli
  - reCamera Pro
  - SG2002 cvimodel
  - Classificação de Comportamento Temporal
  - YOLO11
  - Alerta Precoce de Canibalismo
  - MQTT
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png
slug: /solutions/crayfish-behavior-recognition
sidebar_position: 2
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/solutions/crayfish-behavior-recognition/
generated_from: sensecraft-solutions@crayfish_behavior_recognition
---

:::caution[Usage Notice]
Este é um sistema assistivo de monitoramento e alerta precoce para aquicultura, não um dispositivo selado de segurança de automação industrial para corte de energia. Recomenda-se a integração com sensores de oxigênio dissolvido e sistemas de alimentação automatizada.
:::

## O que esta solução faz

### Arquitetura e Topologia do Sistema

![Aquaculture Crayfish Behavior Recognition Architecture](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/architecture-en-5ac111ce.png)

São necessários dois elementos: a câmera de borda com IA monitorando o tanque e o dashboard recebendo eventos. Tudo é executado localmente na câmera por meio de protocolos IoT padrão, sem servidores centralizados com GPU.


Em sistemas de aquicultura de recirculação (RAS) de alta densidade ou tanques de reprodução, lagostins de água doce australianos (*Cherax quadricarinatus*) frequentemente sofrem perda de membros ou canibalismo fatal durante períodos de muda devido a ataques agressivos. **Uma câmera inteligente com IA de borda montada acima do tanque rastreia cada lagostim em tempo real**. Quando dois indivíduos se aproximam e entram em combate, **a câmera confirma a agressão dentro de uma janela temporal de 8 quadros e publica um alerta MQTT no dashboard da fazenda**, acionando alimentação automatizada ou intervenção da equipe para proteger indivíduos de carapaça mole.

- Repositório Open Source: [github.com/suharvest/crayfish-fight](https://github.com/suharvest/crayfish-fight)
- Dimensionamento e Implantação: [Guia de Implantação do Reference Design](https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>Pipeline em Funil de 4 Estágios</h3>
                <p>Detecção → Gatilho de Proximidade → Filtro de Quadro Único → Mosaico Temporal de 8 Quadros, podando &gt;90% dos cálculos redundantes para preservar folga de computação na borda.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Resolvendo Sobreposição 2D</h3>
                <p>Recortes de interação em 8 quadros são sintetizados em um mosaico espaço-temporal, eliminando falsos gatilhos de contato causados por sobreposições de profundidade vertical em vistas de cima para baixo.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Votação de Sexo em Múltiplos Quadros</h3>
                <p>A morfologia das garras é amostrada ao longo dos primeiros 10 quadros da trilha com votação em múltiplos quadros, alcançando 82,0% de acurácia Top-1 para automatizar auditorias de proporção de sexo nos tanques.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Standalone na Borda &amp; IP67</h3>
                <p>Execução NPU/TPU na própria câmera com suporte a PoE de cabo único; preserva gravação local e buffer de eventos mesmo quando redes externas caem.</p>
            </div>
        </li>
    </ul>
</div>

### Demonstração em Dispositivo Real

Telemetria de vídeo de cima para baixo: cada lagostim no quadro recebe um ID ByteTrack e uma tag de classificação de sexo (por exemplo, `#3 male 91%`). Quando os indivíduos `#2` e `#5` iniciam um engajamento agressivo, a zona de contato é destacada em vermelho piscante com uma sobreposição `FIGHT (temporal confirmed)`.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png" alt="Demonstração de reconhecimento de briga em tanque de aquicultura: rastreamento de múltiplos alvos, classificação de sexo e alerta de zona de combate"/>
</div>

---

## Dimensionamento de Hardware

Apenas uma câmera inteligente IP67 tudo-em-um é montada sobre os tanques e conectada à LAN de aquicultura:

| | Modelo de Hardware | Especificações & Computação | Quando Escolher |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Sensor 4K + NPU de 3 TOPS | Rockchip RV1126B · NPU de 3 TOPS<br/>2GB RAM · Linux 5.10 | **Nível Recomendado**. Tanques RAS amplos e piscinas de reprodução que exigem funil completo de 4 estágios e classificação por mosaico temporal |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Sensor 1/2.8" + TPU de 1 TOPS | SOPHGO SG2002 · TPU de 1 TOPS<br/>512MB RAM · C++ Nativo | **Nível Otimizado em Custo**. Implantações densas em tanques pequenos focadas em detecção e triagem inicial de proximidade |

---

## Implantação e Configuração

### 1. Montagem e Posicionamento Óptico
- **Altura e Ângulo de Montagem**: Monte **0,8 ~ 1,5 m** diretamente acima do tanque em um ângulo vertical de cima para baixo (80°~90°);
- **Profundidade e Claridade da Água**: Adequado para profundidades de 20~80 cm com visibilidade ≥ 25 cm; evite posicionar aeradores diretamente sob a lente da câmera;
- **Iluminação Difusa**: Recomenda-se iluminação uniforme com fita de LED (≥ 100 Lux) para evitar que ondulações na superfície gerem reflexos especulares.

### 2. Instalação de Software: Toolchain Oficial Recomendada

Esta solução é integrada ao framework oficial de automação da Seeed. O método principal recomendado usa **`solution-cli` (ou AI Solution Assistant)** para pré-checagem e implantação automatizadas, com opções de GUI também suportadas:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>View Field Deployment Guide 🖱️</font></span></strong>
    </a>
</div><br />

#### Recomendado: Implantação Automatizada com `solution-cli` (Melhor Prática via CLI)
`solution-cli` é o toolkit unificado da Seeed para implantação e dimensionamento de soluções de IA de borda industrial (veja o [Deployment Guide](https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy)). Faça a implantação em três etapas sem gerenciar manualmente containers ou tarballs:

```bash
# 1. Install or run solution-cli (skip if already available)
npm install -g @seeed-studio/solution-cli
# Or run on the fly via npx: npx @seeed-studio/solution-cli doctor

# 2. Diagnose local environment and scan network for reCamera hardware
solution-cli doctor
solution-cli device scan

# 3. Query solution details and deploy to target camera
solution-cli hub get crayfish_behavior_recognition --locale en
solution-cli deploy --solution crayfish_behavior_recognition --target recamera --host 192.168.42.1
```
> **Dica**: Se você estiver usando agentes de IA como Claude Code, Codex ou Antigravity, faça o prompt diretamente: *"Please deploy reference design crayfish_behavior_recognition to the reCamera mounted over tank RAS-01 using solution-cli"*. O agente invoca a habilidade integrada para executar pré-checagens e montar o pipeline automaticamente.

#### Alternativa: Instalação via GUI (SenseCraft Web / App Center)
1. Abra `http://<camera_ip>` em um navegador;
2. Navegue até **App Center**, pesquise por `crayfish_behavior_recognition`;
3. Clique em **Install**; a câmera configura automaticamente os pipelines de detecção e temporais;
4. Nas configurações, configure o endereço do Broker MQTT da fazenda (por exemplo, `192.168.1.100:1883`) e habilite o daemon.

---

## Arquitetura do Algoritmo: Funil de 4 Estágios & Mosaico Temporal

```
Camera Sensor (1080p @ 10-15fps)
   │
   ▼ [Stage 1] Object Detection     YOLO11n (640×640) → Bounding Boxes + ByteTrack
   │
   ▼ [Stage 2] Proximity Trigger    Center distance < 1.1× body length or IoU > 0 for ≥ 3 frames;
   │                                Crop interaction zone with 20% margin
   │
   ▼ [Stage 3] Single-Frame Triage  YOLO11n-cls (224×224) binary filter weeds out normal swimming
   │
   ▼ [Stage 4] Temporal Confirmation YOLO11n-cls (448×448 mosaic) validates 8-frame spatiotemporal matrix;
   │                                Completely eliminates 2D vertical overlap false alarms
   │
   ▼ Event Exit                     Publishes to MQTT/WS only on state transition (start / change / end)
```

### Ramificação Paralela: Classificador de Sexo Multi-Frame
Dentro dos primeiros 10 frames de um novo ID de trilha, recortes da garra e do abdômen são classificados com YOLO11n-cls (128×128) via votação multi-frame, gerando `male` / `female` / `unknown` com **82,0% de acurácia Top-1**.

---

## Benchmarks e Telemetria de Campo

Avaliado em mais de 2.000 frames de vídeo de campo anotados em instalações de pesquisa em aquicultura:

### 1. Precisão e Revocação do Modelo
| Modelo | Resolução | Tarefa | Métrica de Benchmark | Alvo de Runtime |
|---|---|---|---|---|
| `det_v2_n` | 640×640×3 | Detecção de lagostim | **mAP50: 0,950** (P: 0,914, R: 0,880) | RV1126B RKNN / SG2002 TPU |
| `behavior_temporal`| 448×448×3 | Verificação de luta em 8 frames | **Recall: 0,950** (Precisão: 0,905) | RV1126B RKNN INT8 |
| `behavior_cls` | 224×224×3 | Filtro de frame único | Recall: 0,775, Precisão: 0,816 | RV1126B RKNN / SG2002 TPU |
| `sex_cls` | 128×128×3 | Classificação de sexo | **Top-1: 0,820** (votação em 10 frames) | RV1126B RKNN / SG2002 TPU |

### 2. Execução em Hardware de Borda
- **reCamera Pro**: **10~15 FPS** (loop fechado completo de 4 estágios, ~18% de CPU);
- **reCamera 2002**: **12~15 FPS** (Detecção + alerta de proximidade, ~25% de CPU).

---

## Interfaces e Protocolos de Telemetria

### 1. Dashboard de Monitoramento da Fazenda (MQTT)
- **Broker**: `mqtt://<camera_ip>:1883`
- **Topic**: `crayfish/tank/<tank_id>/event`
- **Payload de Alerta de Agressão**:
```json
{
  "timestamp": 1793339665200,
  "tank_id": "RAS_04",
  "event_type": "FIGHT_CONFIRMED",
  "severity": "CRITICAL",
  "actors": [
    {"track_id": 2, "sex": "male", "box": [210, 140, 320, 260]},
    {"track_id": 5, "sex": "unknown", "box": [260, 160, 370, 280]}
  ],
  "duration_sec": 4.5
}
```

### 2. Inventário Periódico do Tanque e Auditorias de Proporção de Sexos
- **Topic**: `crayfish/tank/<tank_id>/stats`
- Publica, a cada hora, contagens de inventário, proporções de sexos e frequências de agressão para auxiliar cronogramas automatizados de alimentação.
