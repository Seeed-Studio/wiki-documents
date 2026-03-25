---
description: Este wiki fornece um guia passo a passo para implantar o modelo DeepSeek em dispositivos reComputer Jetson usando MLC para inferência de IA otimizada na borda.
title: Implantar DeepSeek no reComputer Jetson com MLC
keywords:
  - reComputer
  - Jetson
  - LLM
  - MLC
  - deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /deploy_deepseek_on_jetson_with_mlc
last_update:
  date: 02/13/2025
  author: Youjiang
createdAt: '2025-02-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/deploy_deepseek_on_jetson_with_mlc/
---


# Implantar DeepSeek no reComputer Jetson com MLC

## Introdução

DeepSeek é um conjunto de modelos de IA de ponta, otimizados para eficiência, precisão e processamento em tempo real. Com otimização avançada para computação de borda, o DeepSeek possibilita inferência de IA rápida e com baixa latência diretamente em dispositivos Jetson, reduzindo a dependência da computação em nuvem e ao mesmo tempo maximizando o desempenho.

Em um [wiki anterior](/pt-br/deploy_deepseek_on_jetson), fornecemos um guia rápido para implantar o DeepSeek no Jetson. No entanto, o modelo implantado com sucesso não alcançou a velocidade ideal de inferência.

Este wiki fornece um guia passo a passo para implantar o [DeepSeek](https://www.deepseek.com/) em dispositivos reComputer Jetson com [MLC](https://llm.mlc.ai/) para uma inferência de IA eficiente na borda.

## Pré-requisitos

- Dispositivo Jetson com mais de 8GB de memória.
- O dispositivo Jetson precisa estar pré-gravado com o sistema operacional jetpack [5.1.1](https://wiki.seeedstudio.com/pt-br/reComputer_Intro/) ou posterior.

:::note
Neste wiki, realizaremos as seguintes tarefas usando o [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), mas você também pode tentar usar outros dispositivos Jetson.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Primeiros Passos

### Conexão de Hardware

- Conecte o dispositivo Jetson à rede, mouse, teclado e monitor.

:::note
Claro, você também pode acessar remotamente o dispositivo Jetson via SSH na rede local.
:::

### Instalar e Configurar o Docker do Jetson

Primeiro, precisamos seguir o [tutorial](https://www.jetson-ai-lab.com/tips_ssd-docker.html) fornecido pelo Jetson AI Lab para instalar o Docker.

passo1. Instale o pacote `nvidia-container`.

```bash
sudo apt update
sudo apt install -y nvidia-container
```

:::info
Se você gravar o **Jetson Linux (L4T) R36.x (JetPack 6.x) no seu Jetson usando o SDK Manager e instalar o nvidia-container usando apt, no JetPack 6.x ele não instala mais o Docker automaticamente.

Portanto, você precisa executar o seguinte para instalar o Docker manualmente e configurá-lo.

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
```

:::

passo2. Reinicie o serviço do Docker e adicione seu usuário ao grupo docker.

```bash
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
```

passo3. Adicione o runtime padrão em `/etc/docker/daemon.json`.

```bash
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
```

passo4. Reinicie o Docker.

```bash
sudo systemctl daemon-reload && sudo systemctl restart docker
```

### Carregar e Executar o DeepSeek

Podemos consultar o container Docker fornecido pelo `Jetson AI Lab` para implantar rapidamente o modelo DeepSeek quantizado pelo MLC no Jetson.
Abra o site do [Jetson AI Lab](https://www.jetson-ai-lab.com/index.html) e encontre o comando de implantação.

`Models` --> `Orin NX` --> `docker run` --> `copy`

:::info
Antes de copiarmos os comandos de instalação, podemos modificar os parâmetros relevantes à esquerda.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.png" />
</div>

Abra a janela do terminal no dispositivo Jetson, cole o comando de instalação que acabamos de copiar no terminal e pressione a tecla `Enter` no teclado para executar o comando.
Quando virmos o seguinte conteúdo na janela do terminal, isso significa que o modelo deepseek foi carregado com sucesso no dispositivo Jetson.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/success_install_deepseek.png" />
</div>

Neste ponto, podemos abrir uma nova janela de terminal e inserir o seguinte comando para testar se o modelo consegue realizar a inferência corretamente.

:::danger
Atenção, não feche a janela de terminal que está executando o modelo deepseek.
:::

```bash
curl http://0.0.0.0:9000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer none" \
  -d '{
    "model": "*",
    "messages": [{"role":"user","content":"Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": false,
    "max_tokens": 100
  }'
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/get_response.png" />
</div>

### Instalar o Open WebUI

```bash
sudo docker run -d --network=host \
    -v ${HOME}/open-webui:/app/backend/data \
    -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
    --name open-webui \
    --restart always \
    ghcr.io/open-webui/open-webui:main
```

Após o instalador terminar de executar, você pode inserir `http://<ip_of_jetson>:8080` no navegador para abrir a interface da UI.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/install_webui.png" />
</div>

Em seguida, precisamos configurar o mecanismo de inferência de modelo grande para o OpenWebUI.

`User(top right corner)` --> `Settings` --> `Admin Settings` --> `Connections`

Altere a URL do OpenAI para o servidor de inferência MLC local onde o DeepSeek já está carregado.

Por exemplo, se o endereço IP do meu dispositivo Jetson for `192.168.49.241`, minha URL deve ser `http://192.168.49.241:9000/v1`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/cfg_model.png" />
</div>

Após salvar a configuração, podemos criar uma nova janela de chat para experimentar a velocidade de inferência extremamente rápida do modelo DeepSeek local!

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/chat.png" />
</div>

### Testar a Velocidade de Inferência

Aqui, podemos usar este script Python para testar aproximadamente a velocidade de inferência do modelo.

No dispositivo Jetson, crie um novo arquivo Python chamado `test_inference_speed.py` e preencha-o com o seguinte código.

Em seguida, execute o script rodando o comando `python test_inference_speed.py` no terminal.

<details>

<summary> test_inference_speed.py </summary>

```python
import time
import requests


url = "http://0.0.0.0:9000/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer none"
}

data = {
    "model": "*",
    "messages": [{"role": "user", "content": "Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": True,
    "max_tokens": 1000
}

start_time = time.time()
response = requests.post(url, headers=headers, json=data, stream=True)

token_count = 0
for chunk in response.iter_lines():
    if chunk:
        token_count += 1
        print(chunk)

end_time = time.time()
elapsed_time = end_time - start_time
tokens_per_second = token_count / elapsed_time

print(f"Total Tokens: {token_count}")
print(f"Elapsed Time: {elapsed_time:.3f} seconds")
print(f"Tokens per second: {tokens_per_second:.2f} tokens/second")
```

</details>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/test_infer_speed.png" />
</div>

Os resultados do cálculo mostram que a velocidade de inferência do modelo deepseek1.5B compilado com MLC implantado no dispositivo Jetson Orin NX é de aproximadamente **60 tokens/s**.

## Demonstração de Efeito

No vídeo de demonstração, o dispositivo Jetson opera com pouco menos de 20W e ainda assim alcança uma velocidade de inferência impressionante.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/ohd_T95br90" title="deploy deepseek on jetson with mlc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- https://www.jetson-ai-lab.com/models.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/pt-br/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/tag/nvidia.html

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
