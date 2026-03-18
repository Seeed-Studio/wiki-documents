---
sidebar_position: 13
description: Workspace Nvidia Jetson na plataforma SenseCraft AI
title: Workspace reComputer Jetson
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/nvidia-jetson-workspace/
---

## Primeiros Passos

Antes de adicionar um dispositivo Jetson ao workspace, primeiro instale o app SenseCraft AI no Jetson.

SenseCraft AI-Jetson é um kit de ferramentas de desenvolvimento e plataforma projetado para dispositivos NVIDIA Jetson Edge AI. Basta executar o "Quickstart Script" e será exibida uma interface de usuário interativa para visualizar um aplicativo de exemplo com um vídeo pré-carregado e um modelo de IA pré-carregado. Se você quiser adicionar sua própria câmera USB ou câmera IP, você pode fazer isso em apenas alguns cliques!

**Requisitos de Hardware**

- Dispositivo NVIDIA Jetson
- Conectividade com a Internet via Ethernet/ WiFi
- Monitor

**Requisitos de Software**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Início Rápido**<br />

1. Conecte o Jetson a um monitor e ligue-o<br />
2. Conecte um mouse e teclado ao dispositivo e digite o seguinte comando em um terminal para executar o aplicativo

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante a instalação do aplicativo, você precisa definir as seguintes configurações opcionais, portanto configure-as de acordo com suas necessidades

- **[Opcional] Habilitar o script jetson_clocks para maximizar o desempenho do Jetson definindo a frequência máxima para os clocks da CPU, GPU e EMC? [y/n] (padrão: y): y**<br />
fornece o script jetson_clocks para maximizar o desempenho do Jetson definindo uma frequência máxima estática para os clocks da CPU, GPU e EMC.

- **[Opcional] Economizar espaço desinstalando alguns pacotes desnecessários como libreoffice, alterar o tamanho da Swap Memory? (/swapfile) [y/n] (padrão: n): n**<br />
No caso de memória insuficiente (especialmente no Jetson Nano), é melhor habilitar a swap para garantir o funcionamento normal do programa.

- **[Opcional] Deseja criar ou alterar o tamanho da Swap Memory? (/swapfile)?**<br />
Para obter um desempenho melhor no Nano, ative a Swap.

- **[Opcional] Usar armazenamento externo · para armazenar o diretório de dados do Docker? (para imagens e volumes do Docker)?**<br />

- **(Recomendado se sua partição raiz for menor que 32 GB). [y/n] (padrão: n): n**<br />

O programa edge AI requer um mínimo de 32G de espaço de armazenamento para rodar; caso contrário, você pode optar por montar o volume de dados do Docker em um disco externo.

4. Agora você pode experimentar o SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### Adicionar Dispositivo

1. Clique no botão "Add Device" na página Device Workspace
2. Digite um nome personalizado para o dispositivo e obtenha o código de vinculação no dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. Volte ao aplicativo SenseCraft AI do dispositivo. Clique em "Bind to SenseCraft AI platform" e o aplicativo exibirá o código de vinculação e o nome temporário.

- Bind Code: insira o código de vinculação correto e válido no SenseCraft AI-Model Zoo para concluir a vinculação do dispositivo.
- Temporary Name: se o código de vinculação estiver duplicado, você precisará inserir o nome temporário correto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. insira o código de vinculação correto e válido e clique no botão "Comfirm"

5. Vinculado com sucesso, agora você pode gerenciar o dispositivo

:::note

cada conta só pode adicionar 5 dispositivos gratuitos

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### Informações do Dispositivo

As informações do dispositivo são divididas em três partes: informações gerais, informações do fluxo de vídeo e modelo de IA.

### Informações Gerais

As informações do dispositivo são divididas em três partes: informações gerais, informações do fluxo de vídeo e modelo de IA. Consulte a tabela abaixo para obter detalhes

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **Campos** | **Conteúdo** |
| --- | --- |
| **Device Name** | Nome personalizado do dispositivo, o usuário pode alterar o nome |
| **Device SN** | Número de série de produção exclusivo do dispositivo |
| **Device EUI** | EUI do dispositivo |
| **Online Status** | Online: o dispositivo está online<br />Offline: o dispositivo está offline, o usuário não pode operar o dispositivo offline |
| **Equipped Module** | Módulo do dispositivo |
| **CPU Usage** | Uso de CPU do dispositivo |
| **Memory** | Uso de RAM do dispositivo |
| **Storage** | Uso de disco do dispositivo |
| **IP Address** | Endereço IP de rede do dispositivo |
| **MAC Address** | Endereço MAC do dispositivo |
| **SenseCraft AI Version** | Versão do aplicativo SenseCraft AI instalado no dispositivo |
| **Collect Time** | Hora em que as últimas informações foram coletadas do dispositivo |

### Excluir Dispositivo

Se você concluiu a implantação do modelo de IA e não precisa gerenciar o dispositivo remotamente, pode removê-lo da plataforma e o dispositivo poderá executar inferência local, gerenciamento de fluxo e gerenciamento de modelo de IA de forma independente na borda.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### Gerenciamento de Fluxo de Vídeo

Video Stream permite visualizar remotamente os resultados de inferência em tempo real e gerenciar o fluxo de vídeo do dispositivo. Suporta adicionar fluxo, editar fluxo, visualizar fluxo e excluir fluxo.

#### Inferência em tempo real

Se fluxos de vídeo tiverem sido adicionados ao dispositivo, os usuários poderão visualizar resultados de inferência em tempo real para todos os fluxos na plataforma. Permite o monitoramento em tempo real dos resultados de inferência e exceções

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### Adicionar Fluxo

Clique em "Add Stream" e insira informações de fluxo válidas e, em seguida, clique no botão "Confirm" para enviar o novo fluxo para o dispositivo. Leva algum tempo para o dispositivo adicionar um novo fluxo; as informações na plataforma serão atualizadas depois. Consulte a tabela abaixo para obter informações detalhadas.

:::note

O dispositivo deve estar online para adicionar um novo fluxo

:::

| **Campos** | **Conteúdo** |
| --- | --- |
| **Stream Name** | 1 Nome personalizado para este fluxo.<br />2 Não pode ficar vazio |
| **Video Type** | 1 Ip camera: acessar uma câmera IP, é necessário inserir uma URL rtsp válida<br />2 Usb camera: conectar a câmera USB ao dispositivo, reconhecer automaticamente a USB e, em seguida, selecionar a câmera USB correta no caminho de vídeo. |
| **Video Path** | Caminho de vídeo, formato definido por "Video Type"; se estiver errado, o vídeo padrão será usado. |
| **Device AI Model** | 1 Selecione um modelo de IA que já tenha sido baixado para o dispositivo<br />2 Se não houver modelo de IA no seu dispositivo, vá para a página AI Models para baixar o modelo para o seu dispositivo. |
| **Confidence Threshold** | 1 Limite de confiança do objeto para detecção.<br />2 Formato: float [0, 1] |
| **IoU Threshold** | 1 IoU é usado para avaliar a precisão dos bounding boxes previstos em comparação com os bounding boxes verdadeiros2 Formato: float [0, 1] |
| **FPS** | 1 Quadros por segundo do fluxo<br />2 Formato: INT [1,60] |
| **Quality** | 1 Qualidade do fluxo de saída. Padrão: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecções por imagem. Padrão:3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Se deve exibir a taxa de quadros do fluxo<br />2 Formato:Bool [True,False]<br />● True: exibir FPS<br />● False: não exibir FPS |
| **Display Clock** | 1 Se deve exibir a hora<br />2 Formato:Bool [True,False]<br />● True: exibir hora<br />● False: não exibir hora |

#### Detalhes do Fluxo

Clique no ícone "Eye" do fluxo para visualizar as informações detalhadas do fluxo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### Editar Fluxo

Clique no ícone "Edit" do fluxo; os usuários podem editar todas as configurações do fluxo e clicar no botão "Confirm" para enviar as informações modificadas do fluxo para o dispositivo. Leva algum tempo para o dispositivo atualizar a configuração do fluxo; as informações na plataforma serão atualizadas depois

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### Excluir Fluxo

Clique no ícone "Delete" do fluxo para excluir o fluxo. Leva algum tempo para o dispositivo excluir o fluxo; as informações na plataforma serão atualizadas depois

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### Modelo de IA do Dispositivo

Gerencie todos os modelos de IA que foram baixados para o dispositivo e suporte adicionar modelo, visualizar detalhes do modelo e excluir modelo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

## **Suporte Técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
