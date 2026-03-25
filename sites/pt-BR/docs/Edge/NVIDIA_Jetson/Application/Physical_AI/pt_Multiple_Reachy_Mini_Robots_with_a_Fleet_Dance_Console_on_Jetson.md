---
description: Implante um serviço de dança Reachy Mini em Docker em vários dispositivos Jetson e controle toda a frota a partir de uma interface web em um único laptop.
title: Controle vários robôs Reachy Mini com um console de dança de frota no Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_reachy_fleet_dance
last_update:
  date: 03/25/2026
  author: Youjiang
keywords:
  - Jetson
  - Reachy Mini
  - Docker
  - Robotics
  - Web UI
  - Fleet Control
---

# Controle vários robôs Reachy Mini com um console de dança de frota no Jetson

## Introdução

Este wiki mostra como criar uma demonstração de dança multi-robô com Reachy Mini e dispositivos Jetson.

Neste projeto, cada Jetson executa um serviço local de dança Reachy Mini em Docker, expondo tanto uma Web UI quanto uma REST API. Um painel de Controle de Frota separado, baseado em laptop, pode então descobrir vários IPs de Jetson na mesma LAN e transmitir os mesmos comandos de dança para todos os robôs Reachy Mini conectados ao mesmo tempo.

O resultado final é uma demonstração em que você pode:

- executar um Reachy Mini por dispositivo Jetson
- abrir um painel central no navegador do seu laptop
- adicionar dinamicamente vários endereços IP de Jetson
- iniciar ou parar a dança de todos os robôs juntos
- alterar BPM, estilo de dança e energia para toda a frota
- acionar ações de acento e centro em todos os robôs de uma vez

:::note
Este projeto contém duas camadas:

- `reachy_bpm_dancer`: o serviço de robô único que roda em cada Jetson
- `reachy_fleet_control`: o painel central de frota que roda no laptop
:::

## Sumário

1. Preparação de hardware
2. Arquitetura do sistema
3. Preparar cada Jetson para o Reachy Mini
4. Implantar o serviço de dança Reachy Mini em Docker
5. Executar o painel de Controle de Frota no laptop
6. Controlar vários robôs Reachy Mini
7. Referência da REST API
8. Solução de problemas
9. Referências

## Preparação de hardware

### Lista de dispositivos

- 1 x laptop Windows ou PC de controle na mesma LAN
- 1 ou mais dispositivos Jetson
- 1 Reachy Mini conectado a cada Jetson via USB
- 1 roteador ou switch de rede para acesso à LAN

Este fluxo de trabalho é adequado para dispositivos de borda baseados em Jetson, incluindo dispositivos da série Seeed reComputer Jetson, desde que o sistema de destino possa executar Docker e acessar o Reachy Mini via serial USB.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Mini J501 Kit </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110839-nvidia-jetson-orin-nano-developer-kit.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://huggingface.co/reachy-mini">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### Fiação e conexão

Para cada nó de robô:

- conecte o Reachy Mini ao Jetson via USB
- ligue o Jetson
- certifique-se de que o laptop e todos os dispositivos Jetson estejam na mesma LAN

### Checklist de inicialização

Em cada Jetson, verifique se o dispositivo serial do Reachy Mini está visível:

```bash
ls /dev/ttyACM*
```

Se você conseguir ver um dispositivo como `/dev/ttyACM0`, o link de hardware está pronto.

## Arquitetura do sistema

Esta demonstração usa um design em estrela (hub-and-spoke):

- cada Jetson hospeda um contêiner de dança Reachy Mini
- cada contêiner expõe a Web UI local do robô e a REST API na porta `8042`
- o laptop executa uma aplicação web de Controle de Frota na porta `8060`
- o laptop consulta todas as APIs dos Jetson e distribui os mesmos comandos de controle para todos os robôs online

:::info
O serviço do lado do Jetson é projetado para controle de movimento simbólico de baixa latência. Ele usa um loop leve `set_target()` e não depende de entrada de microfone ou câmera.
:::

Layout de rede sugerido:

```text
Laptop (Fleet Control, port 8060)
    |- Jetson A -> Reachy Mini A -> http://<jetson-a-ip>:8042
    |- Jetson B -> Reachy Mini B -> http://<jetson-b-ip>:8042
    |- Jetson C -> Reachy Mini C -> http://<jetson-c-ip>:8042
```

## Preparar cada Jetson para o Reachy Mini

Execute as etapas a seguir em cada Jetson que irá controlar um Reachy Mini.

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
sudo systemctl daemon-reload && sudo systemctl restart docker
```

## Implantar o serviço de dança Reachy Mini em Docker

### Baixar e executar a imagem Docker
Baixe a imagem Docker a partir [daqui](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgB5HfoKnB8eSa-ERVUZ0J9hAUT572CBk0tShhJdqwQ_qMo?e=g2DHYe).

Se você recebeu uma imagem empacotada como `reachy-bpm-dancer_20260323_linux-arm64.tar.gz`:

```bash
docker load -i reachy-bpm-dancer_20260323_linux-arm64.tar.gz

docker run -d \
  --name reachy-bpm-dancer \
  --restart unless-stopped \
  -p 8042:8042 \
  -p 8000:8000 \
  --device /dev/ttyACM0:/dev/ttyACM0 \
  -e REACHY_SERIAL_PORT=/dev/ttyACM0 \
  reachy-bpm-dancer:20260323-arm64
```

### Verificar o serviço do lado do Jetson

Abra a UI local de robô único:

```text
http://<jetson-ip>:8042/
```

Abra a documentação da API:

```text
http://<jetson-ip>:8042/docs
```

Verifique o status do robô a partir do terminal:

```bash
curl http://127.0.0.1:8042/api/status
```

Inicie a dança do robô:

```bash
curl -X POST http://127.0.0.1:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":124,"style":"anthem","energy":1.15}'
```

Pare o robô:

```bash
curl -X POST http://127.0.0.1:8042/api/dance/stop
```

:::note
O serviço do lado do Jetson expõe:

- Web UI na porta `8042`
- REST API na porta `8042`
- daemon Reachy Mini na porta `8000`
:::

## Executar o painel de Controle de Frota no laptop

O painel de Controle de Frota é executado separadamente no seu laptop e permite gerenciar todos os nós Jetson a partir de um único navegador.

### Preparar o ambiente Python local

No laptop:

```powershell
git clone https://github.com/yuyoujiang/reachy_fleet_control
cd reachy_fleet_control
python -m venv .venv
.\.venv\Scripts\python -m pip install -e .
```

:::info
Esta demonstração usa Windows. Se o seu PC executar um sistema operacional diferente, use os comandos correspondentes para instalar o ambiente.
:::

### Iniciar a Web UI de Controle de Frota

```powershell
.\.venv\Scripts\python -m uvicorn reachy_fleet_control.main:app --host 0.0.0.0 --port 8060
```

Em seguida, abra:

```text
http://127.0.0.1:8060/
```

Ou acesse a partir de outro dispositivo na LAN:

```text
http://<laptop-ip>:8060/
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_fleet_control/fleet_ui.png" />
</div>

### Funcionalidades do painel de frota

O painel oferece suporte a:

- adicionar IPs de Jetson, `host:port` ou URLs completas
- remover nós Jetson offline ou não utilizados
- monitorar status online e latência por robô
- transmitir comandos de dança para cada Reachy Mini registrado
- manter a lista de dispositivos em um arquivo de estado local

A lista de dispositivos é armazenada localmente no Windows em:

```text
C:\Users\<username>\.reachy_fleet_control\fleet_state.json
```

## Controlar vários robôs Reachy Mini

Quando ambas as camadas estiverem em execução, o fluxo de trabalho multi-robô é direto.

### Etapa 1. Adicionar dispositivos Jetson

Na página de Controle de Frota:

- insira um IP de Jetson como `192.168.1.130`
- opcionalmente adicione um rótulo
- clique em **Add Device**

Repita a mesma etapa para cada Jetson na LAN.

### Etapa 2. Verificar status online

Cada cartão de dispositivo exibirá:

- endpoint
- rótulo
- estado online ou offline
- BPM atual
- contagem de batidas
- latência

Se um dispositivo estiver offline, o painel o manterá na lista e continuará consultando até que ele volte.

### Etapa 3. Transmitir um comando de dança

Use os controles compartilhados para atualizar todos os robôs de uma vez:

- **Start Dance**
- **Pause Dance**
- **Accent All**
- **Center All**
- presets de BPM: `82`, `124`, `135`
- seleção de estilo: `groove`, `bounce`, `sway`, `anthem`
- controle deslizante de energia

### Etapa 4. Observar a frota

Quando a transmissão for bem-sucedida:

- todos os robôs Reachy Mini online mudam para o mesmo BPM desejado
- o estilo selecionado é aplicado a todos os robôs
- a contagem de dispositivos ativos é atualizada no painel
- cada Jetson continua gerando movimento localmente, então pequenos atrasos de rede não interrompem o loop de dança

## Demonstração do efeito

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NWoJMN_IWH0" title="Reachy Fleet Control" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## Referência da REST API

Este projeto expõe duas camadas de API.

### API de robô único do lado do Jetson

URL base:

```text
http://<jetson-ip>:8042
```

Endpoints disponíveis:

- `GET /api`
- `GET /api/status`
- `GET /api/styles`
- `GET /api/presets`
- `POST /api/settings`
- `POST /api/dance/start`
- `POST /api/dance/stop`
- `POST /api/dance/accent`
- `POST /api/dance/center`

Exemplo:

```bash
curl -X POST http://<jetson-ip>:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":135,"style":"anthem","energy":1.2}'
```

### API de frota do lado do laptop

URL base:

```text
http://<laptop-ip>:8060
```

Endpoints disponíveis:

- `GET /api`
- `GET /api/fleet/status`
- `POST /api/fleet/devices`
- `DELETE /api/fleet/devices?endpoint=<host:port>`
- `POST /api/fleet/settings`
- `POST /api/fleet/dance/start`
- `POST /api/fleet/dance/stop`
- `POST /api/fleet/dance/accent`
- `POST /api/fleet/dance/center`

Adicionar um dispositivo Jetson:

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/devices" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"target":"192.168.1.130","label":"Stage Left"}'
```

Iniciar todos os robôs:

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/start" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"bpm":124,"style":"anthem","energy":1.15}'
```

Parar todos os robôs:

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/stop" `
  -Method Post
```

## Solução de problemas

### Reachy Mini não é detectado no Jetson

Verifique se o nó serial USB existe:

```bash
ls /dev/ttyACM*
```

Se necessário, atualize o mapeamento de dispositivo do Docker e o valor de `REACHY_SERIAL_PORT`.

### A porta `8042` ou `8060` já está em uso

Pare o processo antigo ou escolha uma porta diferente antes de iniciar o serviço novamente.

### O painel da frota mostra um dispositivo como offline

Verifique o seguinte:

- o laptop e o Jetson estão na mesma LAN
- o serviço do Jetson está em execução
- o firewall do Jetson não bloqueia a porta `8042`
- o endereço IP inserido no painel está correto

### O robô não se move, mas a API responde

Verifique os logs do contêiner no Jetson:

```bash
docker compose logs -f
```

Também confirme que:

- Reachy Mini está conectado ao Jetson
- o caminho do dispositivo serial corresponde à configuração do contêiner
- o robô não está sendo usado por outro processo

## Referências

- [Configurar Docker no Jetson](https://www.jetson-ai-lab.com/tutorials/ssd-docker-setup/)
- [Repositório Reachy Mini no GitHub](https://github.com/pollen-robotics/reachy_mini)
- [Reachy Mini AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
