---
description: Este wiki fornece um tutorial sobre como executar VLM no reComputer Jetson.
title: Como Executar VLM no reComputer
keywords:
  - reComputer
  - VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /run_vlm_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
createdAt: '2024-07-24'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/run_vlm_on_recomputer/
---

# Como Executar VLM no reComputer com Jetson Platform Services

## Introdução

Modelos de linguagem de visão (VLMs) são modelos multimodais que suportam imagens, vídeo e texto, usando uma combinação de grandes modelos de linguagem e transformadores de visão. Com base nessa capacidade, eles conseguem suportar prompts de texto para consultar vídeos e imagens, permitindo assim recursos como conversar com o vídeo e definir alertas baseados em linguagem natural. O [serviço de IA VLM](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html) permite a implantação rápida de VLMs com Jetson Platform Services para aplicações de análise de vídeo. O serviço VLM expõe endpoints de REST API para configurar a entrada de fluxo de vídeo, definir alertas e fazer perguntas em linguagem natural sobre o fluxo de vídeo de entrada.

Este wiki fornece um tutorial sobre como executar VLM no [reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## Requisitos

Antes de prosseguir com o processo de configuração, verifique se o seu sistema atende aos seguintes pré-requisitos:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

- Um reComputer J4012 Orin NX 16G executando Ubuntu `22.04` ou `posterior`.
- Versão do driver: `535.113.01`, Jetpack `6.0` e Versão do CUDA: `12.2`.
- Certifique-se de que o JetPack e os pacotes de serviços relacionados ao Jetson estejam instalados.

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

- Câmeras IP ou vídeos locais podem ser transmitidos via RTSP. (Recomendamos usar nosso [tutorial NVStreamer](/pt-br/getting_started_with_nvstreamer) para streaming RTSP.)

## Primeiros Passos

**Passo 1**: Baixe o pacote de aplicação **`vlm-1.1.0.tar.gz`** do NGC para o seu Jetson usando este link: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Você precisará inserir suas credenciais NGC. Na página, use uma das opções disponíveis no menu **`Download`** (canto superior direito):

```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**Passo 2**: O serviço de IA VLM usará os serviços `jetson-ingress` e `jetson-monitoring`. Você precisa configurar esses dois serviços para integrar com o serviço de IA VLM. Copie a configuração padrão fornecida para o diretório de configuração correspondente do serviço:

```bash
sudo cp config/vlm-nginx.conf /opt/nvidia/jetson/services/ingress/config
sudo cp config/prometheus.yml /opt/nvidia/jetson/services/monitoring/config/prometheus.yml
sudo cp config/rules.yml /opt/nvidia/jetson/services/monitoring/config/rules.yml
```

**Passo 3**: Execute os serviços básicos:

```bash
sudo systemctl start jetson-ingress
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
sudo systemctl start jetson-redis
sudo systemctl start jetson-vst
```

**Passo 4**: Ao iniciar o serviço VLM pela primeira vez, ele fará o download e quantização do VLM automaticamente. Esse processo pode levar algum tempo. Se estiver implantando no Orin NX16, pode ser necessário montar mais espaço de SWAP porque o processo de quantização pode consumir uma grande quantidade de memória. Execute os seguintes comandos para montar mais espaço de swap:

```bash
sudo fallocate -l 10G /data/10GB.swap
sudo mkswap /data/10GB.swap
sudo swapon /data/10GB.swap
```

**Passo 5**: Inicie o serviço de IA VLM:

```bash
cd ~/vlm/example_1
sudo docker compose up -d
```

Para verificar se todos os contêineres necessários foram iniciados, você pode executar o seguinte comando:

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## Adicionar a Entrada de Fluxo RTSP

Você pode primeiro adicionar um fluxo RTSP para o modelo VLM usar com o seguinte comando curl. É recomendado usar o [tutorial NVStreamer](/pt-br/getting_started_with_nvstreamer) para streaming.

- **Passo 1**: Substitua `0.0.0.0` pelo IP do seu Jetson e o link `liveStreamUrl` pelo seu link RTSP e, em seguida, insira o seguinte comando no terminal:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

    Nota: Além do comando curl, você também pode testar diretamente a REST API por meio da página de documentação da API, que está disponível em `http://0.0.0.0:5010/docs` quando o serviço de detecção zero-shot é iniciado.

- **Passo 2**: Após executar o primeiro passo, um ID será retornado. Você precisa registrar esse ID para uso nas etapas subsequentes:

    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```

    Você também pode obter o ID mais tarde usando o seguinte comando:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```

    Para excluir um fluxo pelo seu ID, você pode usar o seguinte comando:

    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## Definir Alertas

Alertas são perguntas que o VLM avaliará continuamente na entrada do fluxo em tempo real. Para cada regra de alerta definida, o VLM tentará decidir se ela é Verdadeira ou Falsa com base no quadro mais recente do fluxo em tempo real. Esses estados Verdadeiro e Falso, conforme determinados pelo VLM, são enviados para um websocket e para o serviço de monitoramento do Jetson.

Ao definir alertas, a regra de alerta deve ser formulada como uma pergunta de sim/não, como “Há fogo?” ou “Há fumaça?”. O corpo da requisição também deve conter o campo “id” que corresponde ao ID do fluxo que foi retornado quando o fluxo RTSP foi adicionado.

Por padrão, o serviço VLM suporta até 10 regras de alerta. Isso pode ser aumentado ajustando os arquivos de configuração.

**Passo 1**: Substitua `0.0.0.0` pelo endereço IP do seu reComputer, modifique `alerts` para incluir os objetos para os quais você precisa de alertas e use o `id` retornado na etapa anterior. Após concluir o comando, insira o seguinte no terminal:

``` bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["is there a fire?", "is there smoke?"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## Visualizar Resultado do Fluxo RTSP

A saída de detecção será transmitida por `rtsp://reComputer_ip:5011/out`. Fornecemos um script Python para visualizar a saída do fluxo de vídeo. Você precisa instalar a biblioteca opencv-python com antecedência e, em seguida, executar o seguinte script Python:

- **Passo 1:** Instale a biblioteca opencv-python:

    ```bash
    pip install opencv-python
    ```

- **Passo 2:** Execute o seguinte script Python:

    ```python
    import cv2
    rtsp_url = "rtsp://reComputer_ip:5011/out"
    cap = cv2.VideoCapture(rtsp_url)
    if not cap.isOpened():
        print("Cannot open RTSP stream")
        exit()
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to retrieve frame")
            break
        cv2.imshow('RTSP Stream', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
    ```

## Desligar

Para parar o serviço de detecção zero-shot, execute o seguinte comando no mesmo diretório onde o arquivo `compose.yaml` está localizado:

```bash
sudo docker compose down
```

## Mais Detalhes

Visual Language Models (VLM) com Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

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
