---
description: Introduz uma demonstração de IA de rastreamento de multidões no Jetson
title: Rastreamento e Contagem de Multidões
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
createdAt: '2025-08-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/solutions/jetson-crowd-tracking/
---

Este guia é para ambientes **NVIDIA Jetson Ubuntu 22 + JetPack 6.x**, ajudando você a concluir rapidamente a implantação.

## 📋 Requisitos de Ambiente

- **Dispositivo**: série NVIDIA Jetson (Nano, Xavier, Orin, etc.)
- **Sistema**: Ubuntu 22.x + JetPack 6.x
- **Rede**: Capaz de acessar GitHub e Docker Hub
- **Permissões**: privilégios `sudo`

> Se o seu dispositivo ainda não tiver o ambiente de sistema adequado instalado, consulte o guia oficial de gravação para instalação do sistema e preparação do ambiente:  
> [Tutorial de Gravação do JetPack (Seeed Studio)](/pt-br/flash/jetpack_to_selected_product/)

## ⚡ Implantação com Um Clique

Execute o seguinte comando no terminal do seu dispositivo Jetson:

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 O script oferece suporte à **execução idempotente**, o que significa que é seguro executá-lo várias vezes.

## 🔍 Processo de Implantação

O script executa automaticamente as seguintes etapas:

1. **Instalar Docker (27.x)**  
   - Verificar se o Docker está instalado  
   - Se estiver instalado, mas não for a versão 27.x → desinstalar e reinstalar automaticamente  
   - Configurar NVIDIA Container Toolkit  
   - Definir o runtime padrão do Docker como `nvidia`

2. **Instalar o Broker MQTT**  
   - Instalar `mosquitto` e `mosquitto-clients`  
   - Configurar para permitir acesso externo:  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **Implantar o SenseCraft AI Server**  
   - Clonar o branch especificado para `~/sensecraft-ai_server`  
   - Executar `scripts/run.sh` para iniciar o serviço  
   - Baixar o modelo YOLOv11 para `~/sensecraft-ai_server/models/yolo11n.pt`

---

## 🛡 Tratamento de Exceções

- **Execução idempotente**:  
  - **A maioria dos problemas** (por exemplo, interrupções de rede, falhas parciais de instalação) pode ser corrigida **simplesmente reexecutando o script**  
  - O script verifica versões de software e configurações, instalando apenas as partes ausentes ou incorretas  
- **Problemas raros** (por exemplo, falha permanente da fonte do apt, repositório externo inacessível) exigem intervenção manual

---

## 🖥 Iniciando e Acessando o Serviço

1. **Iniciar o serviço**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 Saída da Linha de Comando (Exemplo)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **Acessar a página principal**  
   - No seu navegador:  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - Os parâmetros padrão já estão pré-configurados; inicie para ver os resultados

### 📷 Interface Web (Exemplo)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **Acessar a página de configuração**  
   - No seu navegador:  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - Aqui você pode ajustar fontes de vídeo, modelos, parâmetros de inferência etc., e salvá-los no servidor

## ⚙ Visão Geral da Página de Configuração

### 📷 Página de Configuração (Exemplo)

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

## ✨ Obtenção dos Resultados de Detecção
Ao implantar o serviço, um broker MQTT local é instalado. Portanto, os resultados de reconhecimento podem ser obtidos através do MQTT local.

### 📡 Tópico de Publicação de Mensagens MQTT

```bash
edgeai/result
```
### 🧩 Estrutura de Dados da Mensagem MQTT
```json
{
  "uuid": "0c7ef3d9-617d-4e6b-83f6-467f89b28d78", // result's uuid
  "info": {
    "person": 6 // object count
  },
  "line_crossing": {
    "enter": 1, // enter count
    "exit": 0   // exit count
  }
}
```
### 🔧 Configuração do Node-RED
Pode ser necessário calibrar o IP do broker MQTT.
Neste caso, o Node-RED é implantado em um contêiner, portanto é usado o endereço docker0.
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered.png"/></div>
## 🔧 Configuração do Node-RED (Fluxo Completo)

Pode ser necessário calibrar o IP do broker MQTT.  
Neste caso, o Node-RED é implantado em um contêiner, portanto o endereço `docker0` é utilizado.

```json
[{
  "id": "f7641cb7c6a84d23",
  "type": "mqtt in",
  "z": "827a3420678b76d2",
  "name": "",
  "topic": "edgeai/result",
  "qos": "2",
  "datatype": "auto-detect",
  "broker": "0f948328c1975515",
  "nl": false,
  "rap": true,
  "rh": 0,
  "inputs": 0,
  "x": 530,
  "y": 620,
  "wires": [
    ["c086c2dfcc39b708"]
  ]
},
{
  "id": "c086c2dfcc39b708",
  "type": "ui-template",
  "z": "827a3420678b76d2",
  "group": "e33e8e2eb3424d08",
  "page": "",
  "ui": "",
  "name": "human tracking",
  "order": 0,
  "width": 0,
  "height": 0,
  "head": "",
  "format": "<template>\n    <div>\n        <!-- Conditional Styling using Attribute Binding (\":\") -->\n        <!-- and rendering content inside <tags></tags> with {{ }} -->\n        <p> <span :style=\"{'color' : (count > 5 ? 'red' : 'green' )}\">Current Count: {{ msg.payload.info.person }}</span>\n            <span style=\"margin-left:20px\"><b v-if=\"msg.payload.info.person > 5\">Too many!</b> </span>\n        </p>\n        <!-- Computed Rendering using Vue Computed Variables -->\n        <p class=\"my-class\">enter: {{ msg.payload.line_crossing.enter }}</p>\n        <p class=\"my-class\">exit: {{ msg.payload.line_crossing.exit }}</p>\n        <!-- Conditional Rendering with \"v-if\" -->\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            // define variables available component-wide\n            // (in <template> and component functions)\n            return {\n                count: 0\n            }\n        },\n        watch: {\n            // watch for any changes of \"count\"\n            count: function () {\n                if (this.count % 5 === 0) {\n                    this.send({payload: 'Multiple of 5'})\n                }\n            }\n        },\n        computed: {\n            // automatically compute this variable\n            // whenever VueJS deems appropriate\n            formattedCount: function () {\n                return this.count + ' Apples'\n            }\n        },\n        methods: {\n            // expose a method to our <template> and Vue Application\n            increase: function () {\n                this.count++\n            }\n        },\n        mounted() {\n            // code here when the component is first loaded\n        },\n        unmounted() {\n            // code here when the component is removed from the Dashboard\n            // i.e. when the user navigates away from the page\n        }\n    }\n</script>\n<style>\n    /* define any styles here - supports raw CSS */\n    .my-class {\n        color: red;\n    }\n</style>",
  "storeOutMessages": true,
  "passthru": true,
  "resendOnRefresh": true,
  "templateScope": "local",
  "className": "",
  "x": 740,
  "y": 620,
  "wires": [[]]
},
{
  "id": "0f948328c1975515",
  "type": "mqtt-broker",
  "name": "",
  "broker": "172.17.0.1",
  "port": 1883,
  "clientid": "",
  "autoConnect": true,
  "usetls": false,
  "protocolVersion": 4,
  "keepalive": 15,
  "cleansession": true,
  "autoUnsubscribe": true,
  "birthTopic": "",
  "birthQos": "0",
  "birthPayload": "",
  "birthMsg": {},
  "closeTopic": "",
  "closePayload": "",
  "closeMsg": {},
  "willTopic": "",
  "willQos": "0",
  "willPayload": "",
  "willMsg": {},
  "userProps": "",
  "sessionExpiry": ""
},
{
  "id": "e33e8e2eb3424d08",
  "type": "ui-group",
  "name": "人流追踪",
  "page": "h1i2j3k4l5m6n7o8",
  "width": "8",
  "height": "8",
  "order": -1,
  "showTitle": true,
  "className": "",
  "visible": "true",
  "disabled": "false",
  "groupType": "default"
},
{
  "id": "h1i2j3k4l5m6n7o8",
  "type": "ui-page",
  "name": "Frigate Page",
  "ui": "f121584d21d465f1",
  "path": "/frigate",
  "icon": "",
  "layout": "grid",
  "theme": "6666b6af5668e7b2",
  "breakpoints": [
    {"name": "Default","px": "0","cols": "3"},
    {"name": "Tablet","px": "576","cols": "6"},
    {"name": "Small Desktop","px": "768","cols": "9"},
    {"name": "Desktop","px": "1024","cols": "12"}
  ],
  "order": 1,
  "className": "",
  "visible": "true",
  "disabled": "false"
},
{
  "id": "f121584d21d465f1",
  "type": "ui-base",
  "name": "My Dashboard",
  "path": "/dashboard",
  "headerContent": "page",
  "titleBarStyle": "default",
  "showReconnectNotification": true,
  "notificationDisplayTime": 5,
  "showDisconnectNotification": true,
  "allowInstall": true
},
{
  "id": "6666b6af5668e7b2",
  "type": "ui-theme",
  "name": "Default Theme",
  "colors": {
    "surface": "#ffffff",
    "primary": "#0094CE",
    "bgPage": "#eeeeee",
    "groupBg": "#ffffff",
    "groupOutline": "#cccccc"
  },
  "sizes": {
    "density": "default",
    "pagePadding": "12px",
    "groupGap": "12px",
    "groupBorderRadius": "4px",
    "widgetGap": "12px"
  }
},
{
  "id": "e9696690fa075863",
  "type": "global-config",
  "env": [],
  "modules": {
    "@flowfuse/node-red-dashboard": "1.26.0"
  }
}]
```
### 📊 Prévia do Dashboard do Node-RED
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered%20preview.png"/></div>


### Fonte de Vídeo

- Suporta **arquivos de vídeo locais**, **câmeras USB** (primeiro dispositivo por padrão), **streams RTSP**
- Suporta uploads MP4, AVI, MOV, MKV
- Visualizar e excluir fontes de vídeo enviadas

### Modelo de IA

- Selecionar entre os modelos de inferência de IA disponíveis
- Suporta formatos `.pt`, `.pth`, `.onnx`, `.engine`
- Visualizar e excluir modelos enviados

### Parâmetros de Inferência

- **Limite de confiança**: 0,1–1,0
- **Máximo de detecções**: 1–1000
- **Inferência em meia precisão**: aumenta a velocidade (diferença mínima para modelos pequenos)

### Exibição

- Mostrar caixas de detecção (cor personalizável, laranja por padrão)
- Timestamp e FPS sempre habilitados

### Rastreamento

- Habilitar rastreamento de múltiplos objetos
- Mostrar linhas de trajetória com comprimento, espessura e cor personalizáveis

### Detecção de Linha de Corte (Tripwire)

- Suporta linha de corte horizontal ou vertical (vertical recomendada)
- Desenhe pontos de início/fim; ative a exibição para depuração em tempo real
- Tolerância: 1–20 pixels
- Cor e espessura personalizáveis
- Mostrar/ocultar e redefinir contador (é redefinido quando o serviço reinicia)

### Gerenciamento de Configuração

- Salvar a configuração atual no servidor (carregada em tempo de execução)
- Exportar/importar arquivos de configuração
- Restaurar configurações padrão

---

## 🛠 Problemas Comuns

| Problema                     | Causa                      | Solução                                                              |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Docker installation failed` | Rede ou fonte instável     | Verifique a rede e execute o script novamente                        |
| Mosquitto não consegue conectar | Problema de firewall/config | Certifique-se de que `/etc/mosquitto/mosquitto.conf` contenha `listener 1883 0.0.0.0` |
| Modelo YOLO não foi baixado  | Interrupção de rede        | Exclua `~/sensecraft-ai_server/models/yolo11n.pt` e execute o script novamente |

---

## 📦 Desinstalando o Serviço

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

---

## 📚 Referências

- [Guia de Gravação de Jetson](/pt-br/flash/jetpack_to_selected_product/)
- [Repositório de Código-Fonte do SenseCraft-AI_Server](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [Guia de Docker da NVIDIA Jetson](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Documentação Oficial do Mosquitto](https://mosquitto.org/man/mosquitto-conf-5.html)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
