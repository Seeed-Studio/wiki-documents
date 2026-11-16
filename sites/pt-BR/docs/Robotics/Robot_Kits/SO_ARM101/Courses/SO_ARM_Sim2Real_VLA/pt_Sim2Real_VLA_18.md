---
description: "Capítulo 18 do curso Sim-to-Real VLA do SO-ARM101 — rodar a inferência TensorRT do GR00T N1.7 no Jetson: construa as sete engines específicas do alvo, valide offline e inicie o servidor de políticas na borda."
title: Capítulo 18 - Rodar inferência TensorRT do GR00T N1.7
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - TensorRT
  - GR00T N1.7
  - Deploy na borda
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_18
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 18 · Deploy on Jetson</span>
    <h2>18. Rodar inferência TensorRT do GR00T N1.7</h2>
    <p>
      Exporte a política ajustada para sete engines TensorRT específicas do
      alvo, valide offline e sirva a política ao seguidor SO-101 — tudo
      a partir do Jetson.
    </p>
    <div className="hero-actions">
      <a href="#prereq">Pré-requisitos</a>
      <a href="#build">Construir engines</a>
      <a href="#offline">Inferência offline</a>
      <a href="#serve">Servidor de políticas</a>
      <a href="#troubleshoot">Solução de problemas</a>
    </div>
  </div>
</section>

## 18.1 Pré-requisitos

<section id="prereq" className="section-card">
  <div className="section-title">
    <span>Checar antes de construir</span>
    <h2>18.1 Pré-requisitos</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"
git rev-parse HEAD
```

Revisão esperada do repositório:

```text
dcf5f6b759fd17cab3644a97fc4429bca7451e38
```

Verifique as entradas do capítulo 17:

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_BACKBONE_PATH}/config.json"
```

:::caution Nunca copie engines entre alvos
Os arquivos `.engine` do TensorRT dependem da arquitetura de GPU, versão
do TensorRT, checkpoint, formas do grafo, precisão e configuração do
builder. Cada alvo constrói as próprias engines.
:::

</section>

## 18.2 Saída do pipeline TensorRT

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Sete engines</span>
    <h2>18.2 Saída do pipeline TensorRT</h2>
  </div>

O pipeline completo cria sete engines específicas do alvo:

```text
1. vit.engine
2. llm_bf16.engine
3. vl_self_attention.engine
4. state_encoder.engine
5. action_encoder.engine
6. dit_bf16.engine
7. action_decoder.engine
```

</section>

## 18.3 Construir no Jetson AGX Orin

<section id="orin" className="section-card">
  <div className="section-title">
    <span>Wrapper do Orin</span>
    <h2>18.3 Construir no Jetson AGX Orin</h2>
  </div>

```bash
export GR00T_TARGET=orin
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
bash scripts/deployment/orin_jp72/run_full_trt.sh verify
bash scripts/deployment/orin_jp72/run_full_trt.sh status
```

O wrapper ativa o `.venv-jp72`, carrega os caminhos do runtime CUDA do
JetPack 7.2 e constrói o pacote de engines do Orin em
`${GR00T_TRT_OUTPUT}`.

</section>

## 18.4 Construir no Jetson AGX Thor

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Pipeline do Thor</span>
    <h2>18.4 Construir no Jetson AGX Thor</h2>
  </div>

```bash
export GR00T_TARGET=thor
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --precision bf16 \
  --batch-size 1 \
  --steps export,build,verify,benchmark
```

Use a mesma etiqueta de plataforma (`NEW_EMBODIMENT`) e o horizonte de
ação de 16 passos com que o capítulo 10 treinou. Construa um diretório de
saída do Thor separado mesmo compartilhando checkpoint e dataset com o
Orin.

</section>

## 18.5 Rodar inferência offline

<section id="offline" className="section-card">
  <div className="section-title">
    <span>Sem robô conectado</span>
    <h2>18.5 Rodar inferência offline</h2>
  </div>

Valide as engines contra a trajetória gravada primeiro:

```bash
# Orin
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

O comando avalia o pipeline TensorRT contra a trajetória local configurada
e grava o resultado em `${GR00T_RESULT_PATH}`.

```bash
# Thor
source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --execution-horizon 16 \
  --save-plot-path "${GR00T_RESULT_PATH}"
```

Use a mesma etiqueta de plataforma e o mesmo horizonte de ação usados ao
exportar as engines.

</section>

## 18.6 Iniciar o servidor de políticas TensorRT

<section id="serve" className="section-card">
  <div className="section-title">
    <span>Endpoint na borda</span>
    <h2>18.6 Iniciar o servidor de políticas TensorRT</h2>
  </div>

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
ss -ltn | grep ':5555'
```

O endpoint padrão é `127.0.0.1:5555`. Para expor outro endereço:

```bash
export GR00T_SERVER_HOST=0.0.0.0
export GR00T_SERVER_PORT=5555
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
```

Aponte o cliente de robô SO-101 ao Jetson. Do próprio Jetson — ou de
qualquer máquina da rede com os scripts do workshop e o seguidor
conectado — rode o cliente do capítulo 11 com o endereço do Jetson:

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=<JETSON_IP> \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack"
```

O seguidor SO-101 agora executa uma política que roda inteiramente no
Jetson.

Valide o pacote de engines:

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -name '*.engine' -printf '%f\n' | sort
```

Confirme que as sete engines existem e que a verificação terminou sem
falha de forma ou de precisão numérica.

</section>

## 18.7 Solução de problemas

<section id="troubleshoot" className="section-card">
  <div className="section-title">
    <span>Problemas comuns</span>
    <h2>18.7 Solução de problemas</h2>
  </div>

### `libcusparseLt.so.0` não encontrada no Orin

Use o wrapper em vez de chamar `.venv-jp72/bin/python` diretamente:

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

### Ambiente Python errado

```bash
which python
python -c "import sys; print(sys.executable)"
```

- Orin: `${GR00T_REPO}/.venv-jp72/bin/python`
- Thor: `${GR00T_REPO}/.venv/bin/python`

### Erro de forma ou desserialização de engine

Apague e reconstrua as engines do alvo após mudar checkpoint, backbone,
versão do TensorRT, precisão, batch, horizonte de ação ou formas do grafo:

```bash
rm -rf "${GR00T_TRT_OUTPUT}/engines"
```

Depois rode novamente o comando de build de Orin ou Thor correspondente.

### Build do TensorRT sem memória

```bash
free -h
df -h "${GR00T_WORKSPACE}"
sudo tegrastats
```

Feche outros aplicativos de GPU e confirme espaço livre suficiente no
workspace antes de reconstruir.

</section>

## 18.8 Checklist de reprodução

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Portão final</span>
    <h2>18.8 Checklist de reprodução</h2>
  </div>

- [ ] O repositório está no commit validado;
- [ ] Checkpoint, backbone, dataset e configuração de plataforma
      completos;
- [ ] Orin usa `.venv-jp72`; Thor usa `.venv`;
- [ ] As sete engines foram construídas no alvo onde rodarão;
- [ ] A inferência offline completa e salva um gráfico de resultado;
- [ ] O servidor de políticas só inicia depois de o pacote de engines
      passar na verificação;
- [ ] O seguidor SO-101 executa a tarefa dirigido pelo servidor do Jetson.

Voltar à visão geral: [Curso Sim-to-Real VLA do SO-ARM101](pt_Sim2Real_VLA_Introduction.md).

</section>

</div>