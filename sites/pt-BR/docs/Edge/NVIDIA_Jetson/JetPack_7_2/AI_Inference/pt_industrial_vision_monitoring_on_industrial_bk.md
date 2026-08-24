---
description: Implante uma demonstração de monitoramento de visão industrial em NVIDIA Jetson com detecção de objetos YOLO e análise de comportamento com VLM
title: Monitoramento de Visão Industrial em Ambiente Industrial
tags:
  - Implantação de modelo de IA
  - YOLO
  - Visão Computacional
  - reComputer
  - Industrial
image: https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png
slug: /industrial_vision_monitoring_on_industrial_bk
last_update:
  date: 07/14/2026
  author: HaoChen
createdAt: '2026-07-13'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/industrial_vision_monitoring_on_industrial_bk/
---

# Monitoramento de Visão Industrial em Ambiente Industrial

## Introdução

A segurança industrial e em locais de trabalho depende de saber o que está acontecendo no chão de fábrica — em tempo real, não apenas depois de um incidente. Câmeras estão em todos os lugares, mas a maioria das configurações ainda depende de revisão manual. A **IA de visão industrial** fecha essa lacuna: detecta se há trabalhadores presentes, se os EPIs obrigatórios estão sendo usados e se comportamentos inseguros aparecem na cena, então gera alertas imediatamente na borda.

Este wiki implanta uma demonstração de referência de **monitoramento de segurança industrial** em dispositivos Seeed Industrial Jetson. Uma câmera USB faz streaming para o navegador; o **YOLO** cuida da detecção de pessoas e de EPI, e um **VLM** analisa riscos de comportamento. Ambas as famílias de modelos são intercambiáveis — o repositório é um ponto de partida, não está preso a um único checkpoint.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tr>
    <th>reComputer Industrial J4012</th>
    <th>reServer Industrial J4011</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110248-reserver-industrial-j4011-first.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

Verificado em **reComputer Industrial J4012** e **reServer Industrial J4011** com **JetPack 7.2**.

## Visão geral

| Camada | Função |
| --- | --- |
| YOLO | Detecção de pessoas (caixas verdes) e violações de EPI, como ausência de capacete ou colete (caixas vermelhas) |
| VLM | Alertas de comportamento em nível de cena — uso de telefone, fumo, quedas, fogo/fumaça e mais |

Abra `http://<jetson-ip>:8080` em um navegador para vídeo ao vivo via WebRTC, sobreposições de detecção e um feed de alertas.

## Hardware compatível

| Item | Configuração |
| --- | --- |
| **Dispositivos** | [reComputer Industrial](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html), [reServer Industrial](https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html) |
| **Verificado** | reComputer Industrial J4012, reServer Industrial J4011 · **JetPack 7.2** (L4T 39.2.0) |
| **JetPack** | **7.2** verificado · **6.2** esperado como compatível · abaixo de 6.2 requer wheels de PyTorch manuais |
| **RAM / Disco** | Mínimo de 8 GB de RAM · 8 GB de disco livre |
| **Câmera** | USB UVC / V4L2 (`/dev/video*`) |

:::note
Testado em **reComputer Industrial J4012** e **reServer Industrial J4011** com **JetPack 7.2**. Os mesmos passos se aplicam a outros dispositivos Seeed Industrial Jetson com uma versão correspondente do JetPack.
:::

## Instalação

Clone o repositório e execute o script de um clique no **Jetson de destino**:

```bash
git clone https://github.com/xbs0325/industrial-inspection.git
cd industrial-inspection
./run.sh
```

`./run.sh` copia `.env` se estiver ausente, baixa os modelos, cria a imagem Docker (primeira execução **15–30 min**) e inicia os contêineres.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_run.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, abra:

```text
http://<jetson-ip>:8080
```

:::note
O aplicativo é executado inteiramente em Docker — nenhuma configuração manual de Python no host é necessária para o fluxo de trabalho padrão.
:::

### Observações sobre JetPack

| JetPack | PyTorch |
| --- | --- |
| **7.2** | Instalado automaticamente durante a criação da imagem Docker (`TORCH_INDEX_URL=cu130`) |
| **6.2** | Defina `TORCH_INDEX_URL` para o índice da sua CUDA 12.x ou coloque wheels correspondentes em `wheels/` |
| **Abaixo de 6.2** | Coloque `torch-*.whl` / `torchvision-*.whl` compatíveis com Jetson em `wheels/` antes de `./run.sh` |

Após alterar arquivos relacionados ao JetPack, recrie a imagem no dispositivo de destino:

```bash
./clean.sh && ./run.sh
```

Consulte [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/) para fontes de wheels.

:::caution
Não copie imagens Docker entre dispositivos com versões diferentes de JetPack ou CUDA. Sempre recrie a imagem no Jetson de destino.
:::

### Ajustes opcionais em `.env`

```bash
CAMERA_PIPELINE=sw    # sw (default) or hw
```

## Resultados da demonstração

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_cn.png" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_en.png" style={{width:900, height:'auto'}}/></div>

Interface ociosa antes de a transmissão da câmera iniciar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_phone.png" style={{width:900, height:'auto'}}/></div>

Alerta de comportamento do VLM — uso de telefone na área de trabalho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png" style={{width:900, height:'auto'}}/></div>

Alerta de EPI do YOLO — ausência de capacete de segurança.

## Modelos usados nesta demonstração

A versão padrão é fornecida com os checkpoints abaixo. Você pode substituí-los por outros modelos YOLO ou VLM atualizando a configuração do repositório e o diretório `models/`.

| Função | Modelo padrão | Arquivo |
| --- | --- | --- |
| Detecção de pessoas | YOLOv8n | `models/yolov8n.onnx` |
| Detecção de EPI | YOLOv8 PPE | `models/ppe-yolov8n.pt` |
| Análise de comportamento | SmolVLM-500M-Instruct | `models/SmolVLM-500M-Instruct/` |

Os modelos são baixados automaticamente na primeira execução de `./run.sh` ou manualmente via `./scripts/download_models.sh`.

## Parar e limpar

```bash
./clean.sh              # stop containers and remove local image
./clean.sh --full       # also remove models/, data/, bin/go2rtc
```

## Solução de problemas

| Problema | Solução |
| --- | --- |
| Permissão negada do Docker | Adicione o usuário ao grupo `docker` ou use `sudo docker` |
| Primeira criação lenta | Normal (15–30 min). No JetPack 6.2 ou anterior, coloque wheels em `wheels/` |
| Incompatibilidade entre PyTorch / CUDA | Recrie a imagem no Jetson de destino; não reutilize imagens de outro JetPack |
| Câmera não está no contêiner | Confirme `/dev/video*` no host; `./run.sh` monta automaticamente as câmeras detectadas |
| Sem vídeo no navegador | Verifique `docker ps` para `industrial-go2rtc`; a porta `1984` deve estar acessível |

## Recursos

- Projeto: https://github.com/xbs0325/industrial-inspection
- [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/)


## Suporte técnico e discussão de produtos

Obrigado por escolher produtos Seeed Studio! Para suporte técnico e discussão de produtos, utilize os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
