---
description: Instale e use a Skill reCamera Pro Python SDK com agentes de codificação com IA para criar apps recamera_ext e Kit, converter modelos RKNN, empacotar e implantar no App Center.
title: Usar a Skill
keywords:
  - reCamera
  - reCamera Pro
  - Python SDK
  - AI coding agent
  - Agent Skills
  - recamera_ext
  - Kit
  - RKNN
  - RV1126B
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_python_sdk_skill
sku: 10003420
sidebar_position: 4.5
last_update:
  date: '2026-11-25'
  author: Go
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_python_sdk_skill/
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
---

# Use a Skill para Desenvolver Apps Python para reCamera Pro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" alt="reCamera Pro Python SDK Skill" /></div>

## Introdução

A [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk) empacota o fluxo de trabalho do SDK de extensão Python para reCamera Pro (RV1126B) em uma Agent Skill. Após a instalação, seu agente de codificação pode avaliar uma ideia, escrever demos `recamera_ext`, criar apps Kit, converter modelos ONNX, validar e empacotar o app e implantá-lo via SSH.

A skill não é executada na câmera. Os apps que ela gera usam o `recamera_ext`, o `kit` e o manifesto v2 do App Center no lado do dispositivo.

:::note
Esta skill tem como alvo **reCamera Pro com o SoC RV1126B e Linux aarch64**. Ela **não** é para a reCamera 2002 com SG2002/RISC-V. Para desenvolvimento nativo em C++, use a [reCamera Pro Development Skill](/pt-br/recamera_pro_development_cpp_skill/).
:::

## O que a skill pode fazer

- **Avaliar uma solicitação** e escolher a rota de SDK direto, Kit ou API HTTP pública
- **Escrever demos com SDK direto** com `FrameSource` e `ResultSink`
- **Criar apps Kit** com carregamento de modelo, pré-processamento, pós-processamento de detecção e a sobreposição no navegador
- **Converter modelos** de ONNX para RKNN, com calibração INT8 e comparação numérica
- **Validar e empacotar** o manifesto e o código-fonte em um `.tar.gz` do App Center v2
- **Implantar e diagnosticar** via SSH: enviar, instalar, verificar e executar diagnóstico somente leitura

## Ambiente compatível

| Item | Configuração compatível |
| --- | --- |
| Dispositivo | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| Arquitetura alvo | Linux aarch64 |
| Python no dispositivo | 3.11 |
| Runtime SDK | `recamera_ext` 1.5.0 + `kit` |
| Runtime NPU | RKNN Runtime 2.3.2 |
| Perfil da plataforma de app | `rv1126b-linux-gnu-cp311-rknn232-v1` |
| Host de conversão | Linux x86_64, Python 3.11, RKNN-Toolkit2 2.3.2 |
| Agentes compatíveis | Claude Code, Codex e outros agentes compatíveis com Agent Skills |
| Não compatível | SG2002 / RISC-V / `.cvimodel` |

## Instalar a Skill

A skill é uma pasta dentro do repositório do SDK, sem instalador separado. Clone o repositório e copie-o para o diretório de skills do seu agente:

```bash
git clone --depth 1 https://github.com/Seeed-Studio/recamera-pro-ext-api.git
mkdir -p ~/.claude/skills
cp -r recamera-pro-ext-api/skill/recamera-pysdk ~/.claude/skills/recamera-pysdk
```

Codex usa `~/.agents/skills/recamera-pysdk`; para desenvolvimento com escopo de projeto, use `.claude/skills/`. Mantenha `SKILL.md`, `references/` e `scripts/`, depois reinicie o agente.

## Usar a Skill: de Frames a um App do App Center

### 1. Descrever a solicitação

```text
Use the recamera-pysdk skill to assess this idea: I want to read the camera
stream, run my own motion analysis, and draw the result on the preview. Tell me
whether it is supported, which layer to use, and what runtime preconditions apply.
```

O agente responde com **Compatível / Compatível com pré-condições / Não compatível por este SDK**, além da rota de API e dos limites. O SDK não é responsável pelo pipeline de mídia da câmera e não possui uma API unificada de reprodução de alto-falante; comportamentos não compatíveis devem ser declarados diretamente.

### 2. Captura mínima de frames e injeção de resultados

```python
import numpy as np
from recamera_ext import FrameSource, ResultSink

prev = None
with FrameSource() as src, ResultSink(source_id="motion") as sink:
    for frame in src:
        cur = frame.array                 # zero-copy NV12 Y plane view
        if prev is not None:
            diff = np.abs(cur.astype(np.int16) - prev.astype(np.int16))
            ys, xs = np.nonzero(diff > 25)
            if xs.size >= 800:
                h, w = cur.shape
                box = (xs.min()/w, ys.min()/h,
                       xs.max()/w, ys.max()/h, 0.9, "motion")
                sink.send_detections(pts_us=frame.pts_us, boxes=[box])
        prev = cur.copy()                 # the next frame overwrites this view
```

- `frame.array` é válido apenas para a iteração atual; chame `.copy()` antes de armazenar, enfileirar ou compartilhar entre threads
- As caixas de `ResultSink` são normalizadas em `[0, 1]`; valores em pixels colapsam em uma caixa invisível de 1 pixel
- Os sockets de extensão são apenas para root na plataforma atual, portanto execute o processo como root

### 3. Criar um app do App Center

```python
from kit.app import App, run_app
from kit.runtime.postprocess.detect import postprocess
from kit import events as E

class MyDetector(App):
    owns_loop = True
    model_frame = "hw-direct"
    model_dma_input = True

    def run(self):
        for frame in self.frames():
            x = self.pre(frame)
            outs = self.models.det.infer(x)
            dets = postprocess(outs, x.info,
                               conf_thres=self.conf, iou_thres=self.iou,
                               input_size=self._pre_size,
                               class_names=self.class_names)
            self.emit([E.detection(d) for d in dets],
                      frame.pts, results=dets)

if __name__ == "__main__":
    run_app(MyDetector())
```

`conf` e `iou` são vinculados automaticamente a partir do `config_schema` do manifesto. `infer()` retorna tensores RKNN brutos e deve passar por `postprocess`. Três regras de manifesto causam a maioria das falhas no lado do dispositivo:

- **NPU**: declare `npu.rknn: scheduled` e liste cada `models[].file` em `artifacts[]` como um `rknn` empacotado com seu `sha256` e `size` reais
- **Entry**: mantenha `entry` na raiz do pacote (por exemplo, `app.py`) com modelos e labels ao lado; não use `Path(__file__).parents[...]`
- **Overlay**: caixas no navegador precisam de `output.contract_version: 2`, `output.sink: "ws"`, um campo `box` vindo de `results[].box` e `render.boxes`

## Referência de Comandos

Apenas os pontos de entrada comuns são mostrados. Veja o `SKILL.md` da skill e `references/` para todas as opções:

```bash
# Offline validation
python skill/recamera-pysdk/scripts/validate_app.py --app-dir ./my-detector --mode demo

# Package the App Center archive
python skill/recamera-pysdk/scripts/package_app.py --app-dir ./my-detector --out ./dist

# ONNX -> RKNN (INT8)
python skill/recamera-pysdk/scripts/convert_model.py convert \
  --onnx model.onnx --recipe recipe.json --out build/model \
  --quant i8 --dataset calibration/images.txt \
  --model-id my-detector --task detect

# Upload and install
python skill/recamera-pysdk/scripts/deploy_app.py \
  --archive dist/<app>.tar.gz --host <device-ip> --user root \
  --action install --report deploy-report.json
```

- [SKILL.md](https://github.com/Seeed-Studio/recamera-pro-ext-api/blob/main/skill/recamera-pysdk/SKILL.md)
- [API reference](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk/references/api)

## Fluxo de Trabalho de Desenvolvimento

1. **Avaliar** se a solicitação é compatível e escolher SDK direto ou Kit.
2. **Implementar** com o formato atual de `kit.app.App` ou chamadas diretas de `recamera_ext`.
3. **Converter** um novo modelo ONNX para RKNN com uma receita explícita de pré-processamento.
4. **Validar** offline com `validate_app.py` e corrigir todos os erros.
5. **Empacotar** o `.tar.gz` do manifesto v2 e liberar o lock.
6. **Implantar** via SSH quando necessário, depois instalar e verificar.
7. **Aceitar** relatando separadamente os resultados de validação, instalação, ciclo de vida e tarefa; sucesso no empacotamento não é sucesso no dispositivo.

## Solução de Problemas

| Problema | Causa provável | O que fazer |
| --- | --- | --- |
| A skill não é listada | O agente não recarregou seu diretório de skills | Confirme que a pasta contém `SKILL.md` e reinicie o agente |
| O agente sugere C++/GStreamer | A tarefa foi roteada para a skill nativa | Informe que o alvo é o Python SDK / RV1126B |
| `rc_ext_frame_open failed` | O firmware não possui o endpoint ou o processo não é root | Verifique `/run/recamera/` e execute como root |
| Nenhuma caixa na visualização | O contrato de saída/renderização está ausente ou inconsistente | Verifique `brokered`, `contract_version: 2`, `box`, `coord` e `render.boxes` |
| `inference authorization failed` | Um modelo agendado não possui artefato `rknn` empacotado | Adicione o `sha256`, `size`, `file` e `mount` correspondentes |
| Falha no empacotamento no Windows | Os membros do arquivo contêm barras invertidas | Faça o build em um host POSIX ou mantenha os recursos na raiz do pacote |

## Recursos

- [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk)
- [Repositório da reCamera Pro Extension API](https://github.com/Seeed-Studio/recamera-pro-ext-api)
- [reCamera Pro Development Skill (C++)](/pt-br/recamera_pro_development_cpp_skill/)
- [Desenvolvimento em C/C++ para reCamera 2002](/pt-br/recamera_develop_with_c_cpp/)
- [Página do produto reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)

## Perguntas e Respostas

**P: O agente não lista a skill recamera-pysdk após a instalação. O que devo verificar?**

R: Confirme que a pasta copiada contém diretamente `SKILL.md`, `references/` e `scripts/` (não aninhados um nível abaixo) e que ela está no diretório de skills correto: `~/.claude/skills/` para Claude Code, `~/.agents/skills/` para Codex ou `.claude/skills/` para uso com escopo de projeto. Depois reinicie o agente para que ele recarregue o diretório de skills.

**P: O app é executado no dispositivo, mas nenhuma caixa aparece na visualização do navegador. Por quê?**

R: Normalmente o contrato de saída/renderização está ausente ou inconsistente. Verifique se o manifesto define `output.contract_version: 2` e `output.sink: "ws"`, se as detecções carregam um campo `box` vindo de `results[].box` e se `render.boxes` está habilitado. As caixas devem ser normalizadas para `[0, 1]`; valores em pixels colapsam em uma caixa invisível de 1 pixel.

**P: Recebo `rc_ext_frame_open failed` ou `inference authorization failed` no dispositivo. Como corrigir?**

R: Para `rc_ext_frame_open failed`, verifique se o firmware expõe os sockets em `/run/recamera/` e execute o processo como root. Para `inference authorization failed`, um modelo RKNN agendado deve estar listado em `artifacts[]` como um `rknn` empacotado com seus valores reais de `sha256`, `size`, `file` e `mount`.

### Exportar logs

Se o problema persistir, colete os logs da sua reCamera Pro (RV1126B) e envie-os para o suporte. Substitua `<device-ip>` pelo endereço IP do seu dispositivo:

```bash
# Pack device logs (falls back to /var/log + dmesg if /userdata/log is absent)
ssh root@<device-ip> 'tar czf /tmp/recamera-pro-logs.tar.gz /var/log /userdata/log 2>/dev/null; dmesg > /tmp/recamera-pro-dmesg.log'

# Pull the archives back to your host
scp root@<device-ip>:/tmp/recamera-pro-logs.tar.gz .
scp root@<device-ip>:/tmp/recamera-pro-dmesg.log .
```

Envie por e-mail os arquivos de log, uma breve descrição do problema (o que você fez / o que aconteceu / o que você esperava) e o modelo de hardware e a versão do firmware para **techsupport@seeed.io**.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
