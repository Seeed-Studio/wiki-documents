---
description: Guia para implantar reconhecimento facial com a ferramenta interna MCP
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
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 11/25/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-11-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/face_regonition_with_mcp/
---
# Estendendo o Reconhecimento Facial com MCP

## Visão Geral

Este guia explica como implantar um fluxo de trabalho de reconhecimento facial usando o **SenseCAP Watcher (Xiaozhi)** em conjunto com um **sistema reComputer Raspberry Pi**. O Watcher captura imagens e as envia para o reComputer para comparação facial com um banco de dados local usando a ferramenta interna MCP.

## Preparação de Hardware

<table align="center">
  <tr>
    <th>SenseCAP Watcher para XiaoZhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Pré-requisitos
Siga este guia para instalar o sistema reComputer Raspberry Pi: [Primeiros Passos com reComputer R2000 Série](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#flash-os)

## Resultado da Execução

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## Repositórios de Código-Fonte:

- [Repositório de Código do firmware de reconhecimento facial Xiaozhi](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)

- [API de Reconhecimento Facial](https://github.com/suharvest/face_rec_api#)

## Processo de Implantação

### Etapa 1. Anotar o endereço IP do reComputer

- Conecte o reComputer à sua rede, como um roteador

- Obtenha o endereço IP dele, IP de exemplo usado aqui: 192.168.24.10

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>


### Etapa 2. Gravar o firmware no Watcher

- Conecte o PC ao Watcher usando um cabo Tipo-C na porta inferior

- Abra o ESP-IDF 5.5 CMD (versão 5.5.1) e navegue até uma pasta apropriada

- Clone o repositório de firmware do Watcher

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

- Localize a seção de código para comunicação com o reComputer
    - Localização do arquivo: main/boards/sensecap-watcher/sscma_camera.cc (linha 769)

```cpp
std::string face_rec_url = "http://192.168.10.131.80001/recognize"
```

- Altere o endereço IP para o IP real do seu reComputer

    ```cpp
    std::string face_rec_url = <Your_reComputer_actual_IP>
    ```
    - exemplo

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr4.png" style={{width:800, height:'auto'}}/></div>

- Compile e grave o firmware

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### Etapa 3. Acessar o reComputer via SSH e Preparar o Ambiente

- Conecte via SSH (substitua o nome de usuário e o IP conforme necessário)

```bash
ssh <Your_reComputer's username>@<Your_reComputer's host IP>
# For example : ssh recomputer@192.168.24.10
```

:::note
Recomendamos usar a extensão **Remote - SSH** no VS Code para se conectar ao seu reComputer.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>

:::

- Instale o Docker e configure o usuário do Docker

```bash
curl -sSL https://linuxmirrors.cn/docker.sh -o install_docker.sh
sudo bash install_docker.sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

sudo groupadd docker
sudo usermod -aG docker $USER
```

- Atualize o software do sistema

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

- Instale o uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Etapa 4. Clonar a API e atualizar dependências

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```
- Instale DKMS, HailoRT, adicione a configuração e reinicie

```bash
sudo apt-get install dkms
sudo dpkg --install hailort-4.21.0/hailort_4.21.0_arm64.deb hailort-4.21.0/hailort-pcie-driver_4.21.0_all.deb
echo "options hailo_pci force_desc_page_size=4096" | sudo tee /etc/modprobe.d/hailo_pci.conf
```

- Verifique o status do HailoRT

```bash
sudo reboot
hailortcli scan
hailortcli fw-control identify
```
    - Se você vir informações semelhantes às seguintes, significa que o driver foi instalado com sucesso

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

### Etapa 5. Adicionar Fotos e Iniciar o Serviço de Reconhecimento Facial

- Coloque fotos na pasta photos/

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

- Gerar embeddings

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

- Conceder permissão de execução e iniciar o serviço

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

- O serviço está em execução agora. O Watcher pode se comunicar com o reComputer para verificar se um rosto existe no banco de dados. Você pode parar o serviço com `Ctrl + C`.

- Você pode adicionar um prompt como: "Quando uma pessoa for detectada, use a ferramenta de reconhecimento facial para verificar o nome e a confiança: se a confiança for maior que 40%, cumprimente-a pelo nome; caso contrário, dê uma saudação genérica."

### Etapa 6. Atualizar o Banco de Dados Facial

- Depois de parar o serviço, adicione novas fotos à pasta `photos/` e gere novamente os embeddings e reinicie o serviço.

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

### Etapa 7. Limpar o Banco de Dados Facial

- Exclua todos os arquivos na pasta `photos/`.  

- Remova o arquivo `embedding.json` na pasta `data/`.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

- Após a limpeza, execute o serviço e você verá o mesmo log

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## FAQ

**P: Como posso fazer a Xiaozhi AI chamar a API de reconhecimento facial?**

**R:** Basta pedir algo ao Watcher, como: "Verifique se eu estou no sistema de reconhecimento facial."  
A IA chamará automaticamente a ferramenta MCP para verificar o banco de dados facial.

**P: O que devo fazer se o sistema de reconhecimento facial não conseguir enviar uma foto?**

**R:** Verifique se o endereço IP está correto e se o serviço de reconhecimento facial está em execução corretamente.

**P: Posso implantar o sistema de reconhecimento facial em outros dispositivos?**

**R:** Sim. Desde que o dispositivo execute um sistema baseado em Linux e possa se conectar à rede, ele pode ser usado para implantação. No entanto, a série reComputer oferece melhor desempenho de computação.

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
