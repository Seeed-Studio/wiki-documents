---
description: Este wiki oferece um tutorial sobre como executar Zero-Shot Detection no reComputer Jetson.
title: Como Executar Zero-Shot Detection no reComputer
keywords:
  - reComputer
  - Zero-Shot Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /run_zero_shot_detection_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/run_zero_shot_detection_on_recomputer/
---

# Como Executar Zero-Shot Detection no reComputer com Jetson Platform Services

## Introdução

Transformers de visão em IA generativa, como o CLIP, tornaram possível construir modelos de zero shot detection capazes de detecção de objetos com vocabulário aberto. Isso significa que o modelo não fica limitado a um conjunto de classes predefinidas para detectar. Os objetos a serem detectados são configurados em tempo de execução pelo usuário. O serviço de IA Zero Shot Detection permite a implantação rápida de IA generativa com Jetson Services para detecção de vocabulário aberto em entrada de stream de vídeo ao vivo. O serviço de IA Zero Shot Detection expõe endpoints de REST API para controlar a entrada do stream e os objetos a serem detectados.

Este wiki fornece um tutorial sobre como executar Zero-Shot Detection no [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
</div>

## Requisitos

Antes de prosseguir com o processo de configuração, certifique-se de que seu sistema atenda aos seguintes pré-requisitos:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- Um reComputer J4012 Orin NX 16G executando Ubuntu `22.04` ou `posterior`.
- Versão do driver: `535.113.01`, Jetpack `6.0` e versão do CUDA: `12.2`.
- Certifique-se de que o JetPack e os pacotes de serviços Jetson relacionados estejam instalados.

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

- Câmeras IP ou vídeos locais podem ser transmitidos via RTSP. (Recomendamos usar nosso [tutorial NVStreamer](/pt-br/getting_started_with_nvstreamer) para streaming RTSP.)

## Primeiros Passos

**Passo 1**: Baixe o pacote do aplicativo **`zero_shot_detection-1.1.0.tar.gz`** do NGC para o seu Jetson usando este link: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Você precisará inserir suas credenciais NGC. Na página, use uma das opções disponíveis no menu **`Download`** (canto superior direito):

```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```

**Passo 2**: O serviço de IA de zero-shot detection usará os serviços `jetson-ingress` e `jetson-redis`. Você precisa configurar o serviço jetson-ingress para expor a REST API de zero-shot detection. Copie a configuração padrão fornecida para o diretório de configuração correspondente do serviço.

```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```

**Passo 3**: Execute os serviços básicos.

```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```

**Passo 4**: Verifique se todas as linhas no arquivo de configuração de ingress da plataforma (usado para monitorar serviços) estão descomentadas no seguinte arquivo:

```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```

**Passo 5**: Inicie o API Gateway para acessar o painel de monitoramento.

```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```

**Passo 6**: Inicie o serviço de IA de zero-shot detection.

```bash
sudo docker compose up -d
```

Para verificar se todos os contêineres necessários foram iniciados, você pode executar o seguinte comando:

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## Adicionar a entrada de stream RTSP

Você pode primeiro adicionar um stream RTSP para o modelo de zero-shot detection usar com o seguinte comando curl. É recomendado usar o [tutorial NVStreamer](/pt-br/getting_started_with_nvstreamer) para streaming.

- **Passo 1**: Substitua `0.0.0.0` pelo IP do seu Jetson e o link de `liveStreamUrl` pelo seu link RTSP, depois digite o seguinte comando no terminal:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

Observação: além do comando curl, você também pode testar diretamente a REST API através da página de documentação da API, que está disponível em `http://0.0.0.0:5010/docs` quando o serviço de zero-shot detection é iniciado.

- **Passo 2**: Após executar o primeiro passo, um ID será retornado. Você precisa registrar esse ID para uso nas etapas subsequentes.

    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```

    Você também pode obter o ID posteriormente usando o seguinte comando:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```

    Para excluir um stream pelo seu ID, você pode usar o seguinte comando:

    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## Adicionar Classes de Detecção

O modelo de zero shot detection é capaz de atualizar suas classes de detecção em tempo de execução. Este endpoint aceita uma lista de objetos a serem detectados e um valor de limite associado. O limite é a sensibilidade da detecção. Valores mais altos reduzirão os falsos positivos. Valores mais baixos aumentarão os falsos positivos. Atualmente este serviço suporta apenas 1 stream, mas no futuro esta API permitirá suporte a múltiplos streams.

- **Passo 1**: Substitua `0.0.0.0` pelo endereço IP do seu reComputer, modifique `objects` para incluir os objetos que você precisa detectar (até dez), defina `thresholds` para cada categoria e use o `id` retornado na etapa anterior. Depois de completar o comando, insira o seguinte no terminal:

    ```bash
    curl -X 'POST' \
    'http://192.168.49.101:5010/api/v1/detection/classes' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
    "objects": [
        "a car", "a people"
    ],
    "thresholds": [
        0.2, 0.04
    ],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
    }'
    ```

## Visualizar Resultado do Stream RTSP

A saída da detecção será transmitida através de `rtsp://reComputer_ip:5011/out`. Fornecemos um script em Python para visualizar a saída do stream de vídeo. Você precisa instalar a biblioteca opencv-python com antecedência e depois executar o seguinte script em Python:

- **Passo 1:** Instale a biblioteca opencv-python:

    ```bash
    pip install opencv-python
    ```

- **Passo 2:** Execute o seguinte script em Python:

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

Para parar o serviço de zero-shot detection, execute o seguinte comando no mesmo diretório onde o arquivo `compose.yaml` está localizado:

```bash
sudo docker compose down
```

## Mais Detalhes

Zero Shot Detection com Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
