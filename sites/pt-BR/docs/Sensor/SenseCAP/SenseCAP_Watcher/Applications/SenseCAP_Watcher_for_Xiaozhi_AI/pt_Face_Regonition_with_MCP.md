---
description: Guia para implementar reconhecimento facial com a ferramenta interna MCP
title: Reconhecimento Facial com MCP
sidebar_position: 7
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Face
  - Model
  - Context
  - protocol
  - recognition
  - MCP
  - reComputer
image: https://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 04/07/2026
  author: Spencer
translation:
  skip: [zh-CN]
createdAt: '2025-11-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/pt-br/face_regonition_with_mcp/
---

# Estendendo o Reconhecimento Facial com MCP

## Visão geral

Este guia explica como implementar um fluxo de trabalho de reconhecimento facial usando o **SenseCAP Watcher (Xiaozhi)** em conjunto com um **sistema reComputer Raspberry Pi**.

Ao gravar um firmware personalizado no **SenseCAP Watcher**, a IA Xiaozhi passa a ter capacidade de reconhecimento facial alimentada por um **reComputer** com aceleração Hailo-8. Depois da configuração, basta pedir algo como "verifique quem é esta pessoa" ao Watcher e a IA capturará automaticamente uma foto, identificará o rosto em um banco de dados local no reComputer e responderá com o nome da pessoa e o nível de confiança.

## Preparação de hardware

<table align="center">
  <tr>
    <th>SenseCAP Watcher para Xiaozhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> Adquira agora 🖱️</span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> Adquira agora 🖱️</span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Pré-requisitos

- Instale o sistema Raspberry Pi no reComputer seguindo: [Introdução à Série reComputer R2000](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#flash-os)
- Repositórios de código-fonte:
  - [Firmware de reconhecimento facial Xiaozhi](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)
  - [Face Recognition API](https://github.com/suharvest/face_rec_api)

## Processo de implantação

### Etapa 1. Anote o endereço IP do reComputer

Conecte o reComputer à sua rede (por exemplo, roteador) e obtenha seu endereço IP. O IP de exemplo usado neste guia é `192.168.24.10`.

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>

### Etapa 2. Grave o firmware no Watcher

1. Conecte o PC ao Watcher usando um cabo Type-C na porta inferior.

2. Abra o ESP-IDF 5.5 CMD (versão 5.5.1) e clone o repositório do firmware:

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

3. Abra `main/boards/sensecap-watcher/sscma_camera.cc`, procure por `face_rec_url` e altere o IP para o IP do seu reComputer:

```cpp
// Before (default):
std::string face_rec_url = "http://192.168.10.131:8001/recognize";

// After (your reComputer IP):
std::string face_rec_url = "http://<reComputer_IP>:8001/recognize";
```

4. Compile e grave:

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### Etapa 3. Configure o ambiente do reComputer

1. Conecte via SSH:

```bash
ssh <username>@<reComputer_IP>
# Example: ssh recomputer@192.168.24.10
```

:::note
Recomendamos usar a extensão **Remote - SSH** no VS Code para se conectar ao seu reComputer.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>
:::

2. Atualize o software do sistema:

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

3. Instale o runtime e os drivers Hailo:

```bash
sudo apt install hailo-all
sudo reboot
```

4. Após a reinicialização, conecte-se novamente via SSH e verifique o HailoRT:

```bash
hailortcli scan
hailortcli fw-control identify
```

Se você vir uma saída semelhante à seguinte, o driver foi instalado com sucesso:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

5. Instale o uv:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
```

### Etapa 4. Clone a API e instale as dependências

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```

### Etapa 5. Adicione fotos e inicie o serviço

1. Coloque fotos na pasta `photos/`. Cada arquivo deve ser nomeado com o nome da pessoa (o nome do arquivo sem extensão é usado como o nome da pessoa):

```
photos/
├── john_doe.jpg
├── jane_smith.png
└── alice_wang.jpg
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

2. Gere as embeddings:

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

3. Inicie o serviço:

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

O serviço agora está em execução na porta **8001**. O Watcher pode se comunicar com o reComputer para verificar se um rosto existe no banco de dados. Você pode parar o serviço com `Ctrl + C`.

Você pode adicionar um prompt como: "Quando uma pessoa for detectada, use a ferramenta de reconhecimento facial para verificar o nome e a confiança: se a confiança for maior que 0,40, cumprimente-a pelo nome; caso contrário, dê uma saudação genérica."

### Etapa 6. Atualize o banco de dados de rostos

Adicione novas fotos à pasta `photos/`, depois gere novamente as embeddings e reinicie o serviço:

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

:::tip
Você também pode atualizar o banco de dados enquanto o serviço está em execução chamando o endpoint de recarregamento:
```bash
curl -X POST http://localhost:8001/reload
```
:::

### Etapa 7. Limpe o banco de dados de rostos

1. Exclua todos os arquivos na pasta `photos/`.
2. Remova o arquivo `embeddings.json` na pasta `data/`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

Após limpar, reinicie o serviço e você verá um log limpo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## Resultado da execução

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## FAQ

**P: Como posso fazer a IA Xiaozhi chamar a API de reconhecimento facial?**

**R:** Basta fazer ao Watcher uma pergunta como "Verifique se estou no sistema de reconhecimento facial." A IA invocará automaticamente a ferramenta de reconhecimento facial.

**P: O serviço não consegue se conectar ou reconhecer rostos. O que devo verificar?**

**R:** Verifique se:
- O endereço IP do reComputer no firmware corresponde ao IP real.
- O serviço de reconhecimento facial está em execução (`curl http://<reComputer_IP>:8001/health`).
- Não há regras de firewall bloqueando a porta 8001.

**P: O Hailo não é detectado após instalar `hailo-all`. O que eu faço?**

**R:** Execute novamente `hailortcli scan` após uma reinicialização completa. Se ainda não for detectado, verifique a conexão PCIe com `lspci | grep Hailo` e `dmesg | grep -i hailo`.

**P: Posso implementar o sistema de reconhecimento facial em outros dispositivos?**

**R:** Sim, contanto que o dispositivo execute um sistema baseado em Linux com hardware Hailo-8. A série reComputer é recomendada, pois este guia foi validado nessa plataforma.

## Suporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
