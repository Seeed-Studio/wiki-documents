---
title: Alerta de foto acionado por som com integração entre reCamera Pro e Home Assistant
description: Este wiki explica como integrar a reCamera Pro ao Home Assistant para enviar automaticamente uma mensagem personalizada e uma captura de imagem atual da câmera para o painel do Home Assistant quando um som específico for detectado.
keywords:
  - reCamera
  - Home Assistant
  - MQTT
  - Detecção de som
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif
slug: /recamera_pro_ha_sound_alert
sidebar_position: 2
last_update:
  date: 2026-07-27
  author: Sizhao zhou
createdAt: '2026-07-27'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_ha_sound_alert/
---

# Integração entre reCamera Pro e Home Assistant: alerta de foto acionado por som

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## Introdução

Este wiki explica como integrar a reCamera Pro ao Home Assistant (HA) para enviar automaticamente uma mensagem personalizada e uma captura de imagem atual da câmera para o painel do Home Assistant quando um som específico for detectado. Usando o protocolo MQTT para comunicação bidirecional, quando a reCamera Pro detecta um som especificado (por exemplo, "help") com um nível de confiança acima de um limite, ela envia automaticamente uma mensagem de alerta e uma imagem ao vivo para o HA.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif" /></div>

## Preparação de hardware

- Um host executando Home Assistant (suporta implantação via Docker, HA OS ou venv)
- Um dispositivo reCamera Pro

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Instalando o add-on da reCamera no HA

Vamos adicionar um add-on da reCamera ao Home Assistant para exibir mensagens e imagens da reCamera Pro no HA. Duas formas de instalação estão disponíveis: script de instalação automática (recomendado) e instalação manual.

### Método 1: Script de instalação automática (recomendado)

Baixe o [script install.py](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link), execute-o e informe o diretório de configuração do HA para concluir automaticamente toda a instalação.

```bash
# Download install.py (includes all files, no additional downloads needed)
python3 install.py

# Or specify the configuration directory directly (non-interactive)
python3 install.py /home/zsz/HA/config
```

O script irá automaticamente:
1. Copiar o código da integração para `custom_components/recamera_chat/`
2. Copiar os arquivos de frontend para `www/recamera_chat/`
3. Acrescentar as configurações `recamera_chat` e `panel_custom` em `configuration.yaml` (faz backup automático do original)
4. Verificar se todos os arquivos estão no lugar

:::tip
O script é compatível com Linux / Windows / macOS e funciona com todos os métodos de implantação, incluindo Docker, HA OS e venv.
:::

Após a instalação, pule para a [Etapa 4: Reiniciar o Home Assistant](#etapa-4-reiniciar-o-home-assistant).

### Método 2: Instalação manual

#### Etapa 1: Baixar o pacote de implantação

Baixe o pacote de implantação [recamera_chat.zip](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link) e extraia-o. A estrutura de diretórios extraída é a seguinte:

```
recamera_chat/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
└── configuration_snippet.yaml
```

#### Etapa 2: Copiar arquivos para o diretório de configuração do HA

Copie as pastas `custom_components` e `www` para o diretório de configuração do Home Assistant.

:::note
A localização do diretório de configuração do HA depende do seu método de instalação:
- **HA OS**: Acessível via Samba ou SSH em `/config`
- **Docker**: O diretório de configuração montado (por exemplo, `/home/zsz/HA/config`)
- **venv**: Seu diretório de instalação do HA
:::

:::danger
`www/` e `custom_components/` são diretórios **irmãos** e ambos devem ser colocados diretamente na raiz de configuração. Não coloque `www/` dentro de `custom_components/`, caso contrário a barra lateral não será exibida.
:::

**Exemplo de implantação com Docker:**

```bash
# Assuming the HA configuration directory is /home/zsz/HA/config
cd /home/zsz/HA/config

# Copy the integration files
cp -r recamera_chat/custom_components/recamera_chat custom_components/

# Copy the frontend files
cp -r recamera_chat/www/recamera_chat www/
```

A estrutura de diretórios após a cópia:

```
/config/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
        └── images/          # Images are automatically saved here
└── configuration.yaml
```

#### Etapa 3: Editar configuration.yaml

Adicione a seguinte configuração ao `configuration.yaml` do HA:

```yaml
# ===== reCamera Chat (MQTT Bidirectional Chat) =====
recamera_chat:
  broker: 127.0.0.1       # MQTT broker address (127.0.0.1 if HA and broker are on the same host)
  port: 1883              # MQTT broker port
  # username: youruser    # Uncomment and fill in if authentication is required
  # password: yourpass
  topic_in: recamera/chat/to_ha       # reCamera publishes to this topic -> HA receives
  topic_out: recamera/chat/to_camera  # HA panel sends -> reCamera subscribes to this topic
  message_field: ""       # Leave empty = auto-extract message/text/payload/msg/content
  max_history: 200        # Maximum number of message history entries

panel_custom:
  - name: recamera-chat
    sidebar_title: reCamera
    sidebar_icon: mdi:camera
    url_path: recamera-chat
    module_url: /local/recamera_chat/panel.js?v=13
    require_admin: false
```

:::warning
O número de versão em `module_url` (por exemplo, `?v=13`) deve corresponder ao número de versão no arquivo `panel.js`. Se os números de versão não corresponderem, o navegador pode carregar um cache antigo, fazendo com que o painel não seja exibido.
:::

#### Etapa 4: Reiniciar o Home Assistant

Reinicie o HA para aplicar a configuração:

- Interface web: Settings -> System -> Ícone de energia (canto superior direito) -> Restart
- Linha de comando (Docker): `docker restart homeassistant`

#### Etapa 5: Verificar a implantação

1. Após a conclusão da reinicialização, a aba **reCamera** (com um ícone de câmera) deve aparecer na barra lateral do HA.
2. Clique nela para ver a interface de chat, com o status **Connected** no canto superior direito.
3. Digite um texto na caixa de entrada e pressione Enter ou clique no botão **Send**.
4. O lado da reCamera que assina `recamera/chat/to_camera` deve receber a mensagem.

:::warning
Se a aba reCamera não aparecer na barra lateral após a reinicialização, faça a solução de problemas na seguinte ordem:
1. Verifique se `www/recamera_chat/panel.js` está localizado sob o diretório `www/` na raiz de configuração (e não em `custom_components/www/`)
2. Verifique se `configuration.yaml` contém o bloco de configuração `panel_custom`
3. Verifique se o número de versão `?v=13` em `panel.js` corresponde ao número de versão em `module_url` em `configuration.yaml`
4. Pressione Ctrl+F5 para forçar a atualização do navegador e limpar o cache
:::

## Configurando a reCamera Pro

Como este exemplo exige que a câmera tire fotos, você precisa primeiro parar o processo principal da reCamera Pro para liberar os recursos da câmera. Execute o seguinte comando:

```bash
pkill -x rkipc
```

Após parar o processo principal, baixe o programa em Python: [Programa da reCamera](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)

### Modificar parâmetros de configuração do programa

Após baixar o programa, você precisa modificar os seguintes parâmetros para que ele seja executado corretamente:

```python
# ===================== MQTT Configuration =====================

MQTT_HOST = "192.168.6.215"         # MQTT Broker Address
MQTT_PORT = 1883                    # MQTT Broker Port
TARGET_SOUND = "help"               # Name of the sound to detect
CONFIDENCE_THRESHOLD = 94.0         # Trigger threshold, unit: percentage
MQTT_MESSAGE = "Someone is calling for help!!"  # Message to send when triggered
```

- **MQTT_HOST**: Endereço do broker MQTT, preencha com o endereço IP do seu host HA
- **MQTT_PORT**: Porta do broker MQTT, preencha com 1883
- **TARGET_SOUND**: Nome do som a ser detectado, preencha com `"help"`
- **CONFIDENCE_THRESHOLD**: Limite de disparo, unidade: porcentagem, preencha com `94.0`. Mensagens e imagens só serão enviadas se a confiança exceder esse valor.
- **MQTT_MESSAGE**: Mensagem a ser enviada quando acionado; você pode preencher com o conteúdo que deseja exibir no painel do HA.

### Enviar o código para a reCamera Pro e executar

1. Envie o código modificado para a reCamera Pro usando o seguinte comando:

```bash
scp voice_capture.py root@<device_IP>:/userdata
```

2. Execute o seguinte comando para rodar o código:

```bash
python3 ./voice_capture.py
```

## Resultados esperados

1. Após iniciar o programa de detecção de som, a reCamera Pro monitora continuamente os sons do ambiente.
2. Quando o som especificado (por exemplo, "help") é detectado com um nível de confiança acima do limite, ela captura automaticamente a cena atual.
3. Ela envia uma mensagem de alerta personalizada e uma imagem para o Home Assistant via MQTT.
4. O painel da reCamera na barra lateral do HA exibe a mensagem e a imagem recebidas.

## Solução de problemas

| Problema | Possível causa | Solução |
| --- | --- | --- |
| Nenhuma aba reCamera na barra lateral do HA | Caminho de arquivo incorreto ou configuração não aplicada | Verifique o caminho `www/recamera_chat/panel.js` e a configuração em `configuration.yaml` |
| O painel mostra "Disconnected" | Falha na conexão MQTT | Verifique se o endereço e a porta do broker MQTT estão corretos |
| Detecção de som sem resposta | Microfone não conectado ou permissões insuficientes | Confirme se o microfone USB está conectado, verifique o dispositivo de áudio na reCamera Pro |
| Imagem não exibida | Recurso da câmera ocupado | Confirme se `pkill -x rkipc` foi executado para liberar a câmera |

## Recursos

- [Página do Produto reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Documentação Oficial do Home Assistant](https://www.home-assistant.io/)
- [Pacote de Implantação do reCamera Chat](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link)
- [Programa de Detecção de Som do reCamera](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)
- [Script de Instalação Automática](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>