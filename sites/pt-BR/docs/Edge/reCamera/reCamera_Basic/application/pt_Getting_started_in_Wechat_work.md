---
description: Fornecer um tutorial para integrar a reCamera com o WeChat Work. Dependente do Home Assistant.
title: Introdução ao WeChat Work
keywords:
  - reCamera
  - Wechat work
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png
slug: /getting_started_in_Wechat_work_with_recamera
sku: 102991896, 108990119, 100029708, 114993560
sidebar_position: 8
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-19'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/getting_started_in_Wechat_work_with_recamera/
---

# Acoplamento da reCamera, Home Assistant e WeChat corporativo

## Introdução

Um sistema inteligente verdadeiramente dinâmico nunca se trata apenas de "ver o mundo", mas de ser capaz de compreender eventos, acionar ações e alcançar interconexão entre plataformas. Nesta solução, usaremos a reCamera baseada em IA como dispositivo de detecção de front-end, concluiremos a análise e formatação de dados por meio do Node-RED e, em seguida, usaremos o Home Assistant como centro de automação para apresentar os resultados de detecção em tempo real, tomar decisões e, ainda, integrá-lo ao robô do WeChat corporativo para obter notificações imediatas. Toda a cadeia forma um conjunto de sistema de cenários inteligentes expansível, observável e com resposta automática.
A reCamera usa o modelo YOLO para detectar em tempo real objetos como pessoas e animais de estimação; o Node-RED processa os resultados da detecção e os envia para o Home Assistant; o HA usa Webhook para automatizar o processo de gravação de dados em entidades, realizar julgamentos de condição e enviar informações de alarme para o grupo do WeChat corporativo, alcançando alertas em tempo real entre plataformas. Essa arquitetura não apenas demonstra a forte capacidade de acoplamento da reCamera com o HA, como também mostra como combinar visão de IA, regras de automação e sistemas de notificação em nível corporativo em aplicações práticas para construir uma solução IoT integrada verdadeiramente "utilizável e inteligente".

## Preparação de hardware

Uma reCamera (pode ser qualquer uma da série 2002, versão HQ POE ou versão com pan-tilt, mas observe que a versão POE não possui funcionalidade WiFi e requer um switch com função POE conectado no mesmo segmento de rede)  
um reComputer (qualquer versão serve, aqui uso o reComputer AI R2130-12 como exemplo)  
um computador (com WeChat corporativo já instalado.)

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
  <th>reComputer AI R2000 Series</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 1. Configuração do WeChat corporativo

### (1) Criar um robô inteligente

Clique em Catálogo de endereços → Robô inteligente → Criar robô inteligente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat1.png" /></div>

### (2) Configurar o robô

Após preencher os itens obrigatórios, clique em Salvar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat2.png" /></div>

### (3) Criar um novo grupo de bate-papo

Adicione ao grupo o robô que você acabou de criar e qualquer colega (porque são necessárias mais de 3 pessoas para criar o grupo; depois que o grupo for criado com sucesso, você pode remover o colega do bate-papo em grupo)

### (4) Configurar o envio de mensagens

As etapas de configuração são mostradas na figura a seguir. Depois de preencher o nome e a introdução, clique em Salvar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat3.png" /></div>

O endereço Webhook desta etapa será útil ao editar o configuration.yaml mais tarde.

Lembre-se, é fundamental **proteger o endereço webhook do envio de boas notícias** para evitar vazamentos! Não compartilhe no GitHub, blogs e outros locais que possam ser consultados publicamente, caso contrário pessoas mal-intencionadas poderão usar o seu envio de mensagens para mandar spam.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat4.png" /></div>

Se você quiser ver os detalhes de como configurar, clique em "know how to configure"; o site oficial do WeChat corporativo fornece um exemplo de formato de mensagem, para que você possa entender melhor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat5.png" /></div>

## 2. Configuração do reComputer AI R2130-12

### (1) Preparação do sistema

#### Atualizar o sistema

```bash
sudo apt update && sudo apt upgrade -y
```

#### Instalar dependências necessárias

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

### (2) Instalar o Docker

#### Instalação com script oficial

```bash
curl -fsSL https://get.docker.com | sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_docker.png" /></div>

#### Permitir que o usuário atual use o Docker

```bash
sudo usermod -aG docker $USER
```

#### Em seguida, reinicie o sistema para que as permissões tenham efeito

```bash
sudo reboot
```

#### Verificar a instalação

```bash
docker run hello-world
```

Se você vir as palavras "Hello from Docker!", isso indica que a instalação foi bem-sucedida

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

---

### (3) Instalar o Home Assistant (modo Container)

#### Criar um diretório de montagem

Para persistir o arquivo de configuração:

```bash
mkdir -p ~/homeassistant/config
```

#### Iniciar o contêiner

Execute o seguinte comando para iniciar o Home Assistant (esta etapa levará bastante tempo, dependendo da sua rede):

```bash
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v ~/homeassistant/config:/config \
  -v /etc/localtime:/etc/localtime:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

> Descrição dos parâmetros:

>>

> - '-- network = host': o Home Assistant tem acesso direto à rede do host (necessário para descoberta automática de dispositivos)

> - '-v ~/homeassistant/config:/config': salvar arquivo de configuração

> - '-- restart = unless-stopped': reinício automático

> - '-- privileged': habilitar acesso ao hardware (USB Zigbee/Z-Wave, etc.)

---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### (4) Acessar o Home Assistant

#### Ver IP:

```bash
hostname -I
```

#### Acessar pelo navegador

Aguarde de 1 a 2 minutos após a inicialização do contêiner e, em seguida, acesse pelo navegador:

```
http://<你的IP>:8123
```

Exemplo:

```
http://192.168.1.88:8123
```

Na primeira inicialização, será exibida a interface de inicialização, onde você começará a criar uma conta e configurar a casa inteligente

------

### (5) Encontrar o caminho do arquivo de configuração

Todas as configurações do Home Assistant são salvas em:

```
/home/seeed/homeassistant/config/
```

Disponível por meio de:

```bash
cd /home/seeed/homeassistant/config
ls
```

Veja:

```
automations.yaml  configuration.yaml  scripts.yaml ...
```

------

### (6) Configurar automação para receber dados da reCamera

#### Instalar o editor:

```bash
sudo apt install nano -y
```

#### Editar 'automations.yaml ':

```bash
sudo nano /home/seeed/homeassistant/config/automations.yaml
```

Substitua o conteúdo:

```yaml
- alias: "ReCamera Detection"
  description: "接收来自 ReCamera 的检测结果并更新实体和推送企业微信"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    # 1️⃣ 更新 input_text 实体（UI 上显示）
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

    # 2️⃣ 条件判断：人数 >= 2 时推送企业微信
    - condition: template
      value_template: >
        {% set payload = trigger.json.payload %}
        {% set num = payload | regex_findall_index('[0-9]+') | first | int %}
        {{ num >= 2 }}

    - service: rest_command.recamera_wechat_notify
      data:
        message: "ReCamera 检测到多人！当前人数：{{ trigger.json.payload }}"

  mode: single
```

Salve e saia:

-**Ctrl O** → Enter (Salvar)

-**Ctrl X** (Sair)

#### Editar configuration.yaml:

```bash
sudo nano /home/seeed/homeassistant/config/configuration.yaml
```

Substitua o conteúdo:

```yaml
# ==========================
# Home Assistant 基础配置
# ==========================

# 加载默认集成（请勿删除）
default_config:

# 加载前端主题
frontend:
  themes: !include_dir_merge_named themes

# 加载独立配置文件
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera 实体配置部分
# ==========================

# 1️⃣ 定义一个 input_text 实体，用于保存 ReCamera 最新检测结果
input_text:
  recamera_people_raw:
    name: ReCamera 原始检测结果
    max: 255
    icon: mdi:account-group  # 可选：显示为“多人”图标

# 2️⃣ 定义一个模板传感器，用于展示 ReCamera 检测结果
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera 检测人数"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline


# ==========================
# 企业微信机器人推送
# ==========================
rest_command:
  recamera_wechat_notify:
    url: "https://xxxxxx"  #此处填写你在群聊中配置的Webhook地址
    method: POST
    headers:
      Content-Type: "application/json"
    payload: |
      {
        "msgtype": "text",
        "text": {
          "content": "{{ message }}",
          "mentioned_list": ["@all"]
        }
      }

```

Salvar e sair:

-**Ctrl O** → Enter (Salvar)

-**Ctrl X** (Sair)

#### Após salvar e sair, reinicie o Home Assistant:

```bash
docker restart homeassistant
```

------

## 3. Configuração da reCamera do 2002w

### (1) Após inserir a reCamera no computador, acesse 192.168.42.1

Se você estiver travado e não conseguir abrir a interface, consulte a seção "Restaurar configurações de fábrica" para redefinir o dispositivo. Após a redefinição, visite 192.168.42.1 novamente. Depois de redefinir, você precisa modificar a senha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### (2) Após fazer login na interface, clique no canto inferior direito para entrar em "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### (3) Configure o nó após entrar no Workspace

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

Esses quatro novos nós foram adicionados: debug1 e debug2 são usados para observar as informações de saída, sendo opcionais; function1 é usado para processar dados; o nó Http request é usado para enviar dados ao Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

Em seguida, modifique o nó original "Model Info Handle" para que ele apenas produza o número de um determinado alvo de detecção.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

Clique duas vezes para abrir o nó e substitua o código pelo seguinte:

```
let currentModel = "Current People";
const object = 'person';

const labels = msg.payload?.data?.labels ?? [];

if (!Array.isArray(labels)) {
    return { payload: '' };
}

const num = labels.filter(label => String(label).toLowerCase() === object).length;
currentModel += ` number: ${num}`;

return { payload: currentModel };
```

Clique em "Finish" no canto superior direito após a modificação"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

Este código apenas produz o número de pessoas detectadas. Se quiser modificá-lo, você pode alterar o objeto detectado.

Você pode ver quais tipos de objetos podem ser detectados olhando para o nó do modelo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

Em seguida, configure o nó function1 e substitua o código original:

```
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

Em seguida, configure o nó http request. Aqui precisamos modificar três lugares:

| Opções | Definir valor |
| ------------ | ----------------------------------------- |
| **Request Method** | POST |
| **URL address** | 'http://YOUR_IP:8123/api/webhook/recamera_detection'|
| **Return** | JSON Object |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

Após a configuração, clique em "Deploy" no canto superior direito, e uma mensagem será exibida após a implantação bem-sucedida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

Aqui você ainda precisa dar mais um passo, que é conectar a reCamera ao WiFi e conectar o reComputer a você na mesma rede.

Clique em "Network" no canto superior esquerdo para configurar a rede

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
Por favor, lembre-se! Certifique-se de conectar a Recamera à rede!!! Caso contrário, a comunicação não será possível.
:::

## 4. Visualizar o efeito

Neste momento, os seguintes efeitos devem ser vistos no WeChat corporativo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png" /></div>

Da mesma forma, a tela de visão geral do Home Assistant deve exibir o seguinte:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

Se você não viu o efeito, primeiro verifique se o link não está funcionando, ou seja, verifique se o Webhook está normal:

Em qualquer dispositivo (ReCamera, PC, etc.):

```bash
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

Se for bem-sucedido, o seguinte aparecerá na notificação do Home Assistant:

> **ReCamera Test Results**
>
> Test from curl

------

## Lógica do sistema

```
┌────────────────────────────────────────────────────────────────────────┐
│ ReCamera (AI Camera)                                                   │
│ └─ YOLO Model Detects Objects (e.g., person, cat)                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Node-RED Flow                                                          │
│                                                                        │
│ [Model Info Handle]                                                    │
│ └─ Parse detection results, count objects                              │
│    Output:                                                             │
│    payload = "Current people number: 1"                                │
│                                                                        │
│ [Function Node]                                                        │
│ └─ Pack into JSON format:                                              │
│    payload = { payload: "Current people number: 1" }                   │
│                                                                        │
│ [HTTP Request Node]                                                    │
│ └─ POST → HA Webhook                                                   │
│    URL: http://<HA_IP>:8123/api/webhook/recamera_detection             │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Home Assistant (HA)                                                    │
│                                                                        │
│ [Webhook Trigger]                                                      │
│ └─ Receive data sent from Node-RED                                     │
│                                                                        │
│ [Automation]                                                           │
│ ├─ Write payload into input_text.recamera_people_raw                   │
│ │    → Display detected people count in real time on HA frontend       │
│ │                                                                      │
│ ├─ Condition check: if count ≥ 2                                       │
│ │      → Trigger rest_command to call WeCom Bot                        │
│ │                                                                      │
│ └─ Call rest_command.recamera_wechat_notify                            │
│       POST detection information to WeCom Webhook                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ WeCom Bot (Group Chat)                                                 │
│                                                                        │
│ Message received:                                                      │
│   "ReCamera detected multiple people! Current count:                   │
│    Current people number: 3"                                           │
│                                                                        │
│ → Instant alert to group members                                       │
└────────────────────────────────────────────────────────────────────────┘

```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
