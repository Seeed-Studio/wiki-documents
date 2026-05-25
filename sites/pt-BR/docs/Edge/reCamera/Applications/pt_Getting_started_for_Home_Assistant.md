---
description: Fornece um tutorial para integrar a reCamera com o Home Assistant. O Home Assistant está instalado no reComputer.
title: Primeiros passos para Home Assistant
keywords:
  - reCamera
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/HA.png
slug: /getting_started_for_home_assistant_with_recamera
sidebar_position: 6
last_update:
  date: 11/11/2025
  author: Xinrui Wu
createdAt: '2025-11-11'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/getting_started_for_home_assistant_with_recamera/
---

# Primeiros passos para Home Assistant com reCamera

## Introdução

O Home Assistant é um sistema de plataforma de casa inteligente de código aberto, e o usuário pode facilmente conectar seus próprios dispositivos de Internet das Coisas ao sistema para gerenciamento unificado. No entanto, o principal ponto especial do Home Assistant não é apenas realizar a visualização de vários dispositivos de detecção, mas realizar a vinculação automática de dispositivos de diferentes plataformas, somente uma plataforma de casa inteligente assim é suficientemente cheia de vitalidade.

## Preparação de hardware

Uma reCamera (pode ser qualquer uma da série 2002, versão HQ POE ou versão com pan-tilt, mas observe que a versão POE não possui funcionalidade WiFi e requer um switch com função POE conectado no mesmo segmento de rede)  
um reComputer (qualquer versão serve, aqui uso o reComputer AI R2130-12 como exemplo)  
um computador

<table align="center">
 <tr>
  <th>reCamera 2002 Série</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
  <th>reComputer AI R2000 Série</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Instalação do Home Assistant (tomando o reComputer AI R2130-12 como exemplo)

### Preparação do sistema

Se o Home Assistant já tiver sido instalado, então prossiga diretamente para a etapa "Find the path of the configuration file" para a configuração subsequente.

1.atualizar sistema

```bash
sudo apt update && sudo apt upgrade -y
```

2.Instalar dependências necessárias

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

### Instalar Docker

1.Instalação com script oficial

```bash
curl -fsSL https://get.docker.com | sh
```

2.Permitir que o usuário atual use o Docker

```bash
sudo usermod -aG docker $USER
```

3.Reinicie o sistema para que as permissões entrem em vigor

```bash
sudo reboot
```

4.Verificar instalação

```bash
docker run hello-world
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

Se você vir as palavras "Hello from Docker!", isso indica que a instalação foi bem-sucedida.

### Instalar Home Assistant (Modo Container)

1. Criar o diretório de montagem
Para o propósito de persistir o arquivo de configuração:

```bash
mkdir -p ~/homeassistant/config
```

2. Iniciar o contêiner
Execute o seguinte comando para iniciar o Home Assistant  
(esta etapa pode levar um tempo, a velocidade depende da sua rede)

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

Explicação dos parâmetros:
- `--network=host`: O Home Assistant pode acessar diretamente a rede do host (necessário para descoberta automática de dispositivos)
- `-v ~/homeassistant/config:/config`: Salvar arquivos de configuração
- `--restart=unless-stopped`: Reiniciar automaticamente
- `--privileged`: Ativar acesso ao hardware (USB Zigbee/Z-Wave, etc.)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### Acessar Home Assistant

1. Verificar IP

```bash
hostname -I
```

2. Acessar pelo navegador

Depois que o Docker for iniciado, aguarde de 1 a 2 minutos e então acesse no navegador:

```bash
http://<your IP>:8123
```

ex.:

```bash
http://192.168.1.88:8123
```

A inicialização inicial o levará para a interface de inicialização. Você pode então começar a criar uma conta e configurar sua casa inteligente.

### Encontrar o caminho do arquivo de configuração

Todas as configurações do Home Assistant são salvas em:

```bash
/homeassistant/config/
```

Você pode visualizá-las por meio dos seguintes comandos:

```bash
cd /homeassistant/config
ls
```

Você verá estes arquivos:

```bash
automations.yaml  configuration.yaml  scripts.yaml ...
```

### Configurar automação para receber dados da reCamera

1. Instalar o editor nano

```bash
sudo apt install nano -y
```

2. Editar `automations.yaml`:

```bash
sudo nano /homeassistant/config/automations.yaml
```

Substitua o conteúdo por:

```yaml
- alias: "ReCamera Detection"
  description: "Receive the detection results from ReCamera"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

  mode: single
```

Salvar e sair:

- **Ctrl + O** → Enter (Salvar)
- **Ctrl + X** (Sair)

3. Editar configuration.yaml:

```bash
sudo nano /homeassistant/config/configuration.yaml
```

Substitua o conteúdo por:

```yaml
# ==========================
# Basic Configuration of Home Assistant
# ==========================

# Load default integration (do not delete)
default_config:

# Load the front-end theme
frontend:
  themes: !include_dir_merge_named themes

# Load the independent configuration file
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera Physical Configuration Section
# ==========================

# Define an "input_text" entity to store the latest detection results from ReCamera.
input_text:
  recamera_people_raw:
    name: Original detection result of ReCamera
    max: 255
    icon: mdi:account-group  # Optional: Display as "Group" icon

# Define a template sensor to display the detection results of ReCamera
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera Personnel Counting Function"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline
```

Salvar e sair:

- **Ctrl + O** → Enter (Salvar)
- **Ctrl + X** (Sair)

4. Após salvar e sair, reinicie o Home Assistant

```bash
docker restart homeassistant
```

## A configuração da reCamera (tomando a versão 2002w como exemplo)

### Após inserir a reCamera no computador, acesse 192.168.42.1

Se a interface não puder ser aberta continuamente, consulte a seção [Factory Reset](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#factory-reset) para redefinir o dispositivo. Após a redefinição, visite 192.168.42.1 novamente. Depois da redefinição, você será solicitado a alterar a senha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### Após fazer login, clique no canto inferior direito para entrar em "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### Após entrar no Workspace, configure os nós.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

Foram adicionados quatro novos nós: "debug1", "debug2", "function1" e "HTTP request".  
debug1 e debug2 são usados para observar as informações de saída, opcionais ou não; function1 é usado para processar dados; o nó HTTP request é usado para enviar dados para o Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

Em seguida, precisamos modificar o nó original "Model Info Handle" para que ele apenas produza a quantidade de um alvo de detecção específico.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

Clique duas vezes para abrir este nó e substitua o código pelo seguinte conteúdo:

```javascript
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

Após fazer as modificações, clique no botão "Finish" no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

Este código apenas gera o número de pessoas detectadas. Se você quiser fazer alterações, pode modificar o objeto de detecção.  
Você pode aprender quais tipos de objetos podem ser detectados verificando o nó do modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

Em seguida, configure o nó function1 e substitua o código original pelo seguinte:

```javascript
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

Em seguida, vamos configurar o nó de solicitação HTTP. Aqui, precisamos fazer alterações em três áreas:

| **Opção**| **Valor de Configuração**|
|-----------|-----------|
| **Método de Solicitação**| POST|
| **Endereço URL**| `http://<your IP>:8123/api/webhook/recamera_detection`|
| **Resposta**| Objeto JSON|

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

Após a configuração, clique no botão "Deploy" no canto superior direito. Quando a implantação for bem-sucedida, haverá um aviso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

Aqui, você precisa realizar mais uma etapa, que é conectar o WiFi à reCamera. Ela deve estar na mesma rede que a configurada para o reComputer (observe que a versão POE não possui funcionalidade WiFi e requer o uso de um switch com função POE para conectar no mesmo segmento de rede).  

Clique no botão "Network" no canto superior esquerdo para configurar a rede.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
Por favor, lembre-se! Certifique-se de conectar a Recamera à rede!!! Caso contrário, a comunicação não será possível.
:::

## Ver a interface de visão geral do Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

Se nenhum efeito tiver sido observado ainda, primeiro verifique se o link não está conectado corretamente. Ou seja, verifique se o Webhook está funcionando corretamente:  
Execute no terminal de qualquer dispositivo (ReCamera ou computador):

```shell
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

Se for bem-sucedido, a notificação do Home Assistant irá mostrar:
> **ReCamera Detection Results**  
Teste a partir de curl

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
