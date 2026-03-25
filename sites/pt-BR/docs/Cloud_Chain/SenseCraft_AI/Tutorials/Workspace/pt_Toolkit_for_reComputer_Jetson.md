---
sidebar_position: 12
description: SenseCraft AI Jetson
title: Toolkit para reComputer Jetson
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-jetson/
---

SenseCraft AI-Jetson é um kit de desenvolvimento e plataforma projetado para dispositivos NVIDIA Jetson Edge AI. Basta executar o "Quickstart Script" e você verá uma interface de usuário interativa para visualizar um aplicativo de exemplo com um vídeo pré-carregado e um modelo de IA pré-carregado. Se você quiser adicionar sua própria câmera USB ou câmera IP, você pode fazer isso facilmente em poucos cliques!

Além dos vários modelos de IA integrados que oferecemos prontos para uso, você pode acessar um grande número de modelos públicos na plataforma SenseCraft AI e poderá baixar e implantar modelos de IA para cenários específicos e criar soluções de IA personalizadas com base em suas necessidades. SenseCraft AI é seu parceiro inteligente de tomada de decisão para visão de IA, oferecendo recursos simples, flexíveis e eficientes de inferência e criação de soluções.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## Instalar SenseCraft AI-Jetson

**Requisitos de hardware**

- Dispositivo NVIDIA Jetson
- Conectividade com a Internet via Ethernet/ WiFi
- Monitor

**Requisitos de software**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**Início Rápido**<br />

1. Conecte o Jetson a um monitor e ligue-o<br />
2. Conecte um mouse e um teclado ao dispositivo e digite o seguinte comando em um terminal para executar o aplicativo

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante a instalação do aplicativo, você precisa definir as seguintes configurações opcionais, portanto configure-as de acordo com suas necessidades

- **[Opcional] Ativar o script jetson_clocks para maximizar o desempenho do Jetson definindo a frequência máxima para os clocks de CPU, GPU e EMC? [y/n] (padrão: y): y**<br />
fornece o script jetson_clocks para maximizar o desempenho do Jetson definindo frequência máxima estática para os clocks de CPU, GPU e EMC.

- **[Opcional] Economizar espaço desinstalando alguns pacotes desnecessários como libreoffice, alterar o tamanho da Memória Swap? (/swapfile) [y/n] (padrão: n): n**<br />
No caso de memória insuficiente (principalmente Jetson Nano), é melhor ativar o swap para garantir o funcionamento normal do programa.

- **[Opcional] Deseja criar ou alterar o tamanho da Memória Swap? (/swapfile)?**<br />
Para obter melhor desempenho no Nano, ative o Swap.

- **[Opcional] Usar armazenamento externo · para armazenar o diretório de dados do Docker? (para imagens e volumes do Docker)?**<br />

- **(Recomendado se sua partição raiz for menor que 32 GB). [y/n] (padrão: n): n**<br />

O programa de edge AI requer no mínimo 32G de espaço de armazenamento para rodar; caso contrário, você pode escolher montar o volume de dados do Docker em um disco externo.

4. Agora você pode experimentar o SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **Implantar novos modelos**

1. Visite a página “AI Models“ e selecione um modelo de IA que você precisa<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. Clique no botão "Deploy Model"

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. Verifique o read me para garantir que o dispositivo tenha o SenseCraft AI-Jetson instalado e que o modelo de IA seja compatível com o tipo de dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. Selecione um dispositivo online

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. O modelo de IA precisa de um fluxo de vídeo; se não houver fluxo, adicione primeiro um fluxo válido. O model zoo enviará as informações do fluxo diretamente para o dispositivo.

:::note
para mais informações sobre fluxos, verifique Streams Management
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. Envie o modelo de IA e as informações do fluxo para o dispositivo. A implantação do modelo de IA leva alguns minutos, então você pode sair da página atual e ir até o dispositivo após alguns minutos para visualizar o modelo de IA implantado

### **Gerenciamento de Streams**

SenseCraft AI-Jetson suporta adicionar múltiplos fluxos de vídeo e suporta adicionar câmera USB e câmera IP conforme sua necessidade.

O número de fluxos de vídeo que podem ser adicionados depende dos recursos de CPU e memória do dispositivo. Fique atento ao uso de recursos do dispositivo.

#### **Adicionar Stream**

1. Visite a página Streams e clique no ícone +<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. Configure as informações válidas do novo fluxo de vídeo; verifique a tabela abaixo para detalhes<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **Campos** | **Conteúdo** |
| --- | --- |
| **Stream Name** | 1 Nome personalizado para este stream.<br />2 Não pode ficar vazio |
| **Video Type** | 1 Ip camera: acessar uma câmera IP, é necessário inserir uma URL rtsp válida<br />2 Usb camera: conectar a câmera USB ao dispositivo, reconhecer automaticamente o USB e, em seguida, selecionar a câmera USB correta no caminho de vídeo. |
| **Video Path** | Caminho de Vídeo, o formato é decidido por "Video Type"; se estiver incorreto, o vídeo padrão será usado. |
| **Device AI Model** | 1 Selecione um modelo de IA que já foi baixado no dispositivo<br />2 Se não houver modelo de IA no seu dispositivo, vá para a página AI Models para baixar o modelo para o seu dispositivo. |
| **Confidence Threshold** | 1 Limite de confiança do objeto para detecção.<br />2 Formato: float [0, 1] |
| **IoU Threshold** | 1 IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas verdadeiras2 Formato: float [0, 1] |
| **FPS** | 1 Quadros por segundo do fluxo<br />2 Formato: INT [1,60] |
| **Quality** | 1 Qualidade do fluxo de saída.  Padrão: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecções por imagem. Padrão:3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Se deve exibir a taxa de quadros do fluxo<br />2 Formato: Bool [True,False]<br />● True: exibir FPS<br />● False: não exibir FPS |
| **Display Clock** | 1 Se deve exibir o horário<br />2 Formato: Bool [True,False]<br />● True: exibir horário<br />● False: não exibir horário |

3. Clique no botão "Save" e volte para a página inicial para verificar o novo fluxo e o resultado da detecção de IA.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **Excluir Stream**

Vá para os detalhes do stream e clique no ícone "Delete" para excluir o stream<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **Gerenciamento de Modelos de IA**

Gerencie todos os modelos de IA que foram baixados no dispositivo.

- O modelo de IA mostrará o nome do stream que usa o modelo.<br />
- Modelos de IA não utilizados em streams podem ser excluídos<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **Configurações**

#### **Sobre**

As informações do dispositivo, mais informações por favor verifique a tabela a seguir <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **Campos** | **Conteúdo** |
| --- | --- |
| **Product** | O módulo do dispositivo |
| **IP** | O endereço IP de rede do dispositivo |
| **Serial number** | Número de série único de produção do dispositivo |
| **MAC address** | Endereço MAC de rede |
| **CPU Usage** | Uso de CPU do dispositivo |
| **RAM** | Memória RAM do dispositivo |
| **Swap** | Swap do dispositivo |
| **Disk usage** | Uso de disco do dispositivo |
| **Cuda version** | A versão do Cuda instalada no dispositivo |
| **Jetpack version** | A versão do jetpack instalada no dispositivo |

#### **Vincular à plataforma SenseCraft AI**

SenseCraft AI -Jetson é projetado para edge AI. A inferência de IA e o processamento de fluxos de vídeo são feitos localmente no dispositivo; somente se você precisar baixar mais modelos de IA será necessário vincular o dispositivo ao [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home), e você pode remover o dispositivo da plataforma após o download.

1. Visite o [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)<br />
2. Registre-se com um endereço de e-mail válido. A conta do SenseCraft-AI Model Zoo é a mesma que a conta do SenseCAP Cloud; se você já tiver uma conta SenseCAP Cloud, pode fazer login diretamente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. Visite "Device Workspace" e clique no botão “Add Device“. <br />
4. Insira um nome personalizado para o dispositivo e obtenha o código de vinculação no dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. Volte para o aplicativo SenseCraft AI do dispositivo. Clique em "Bind to SenseCraft AI platform", e então o aplicativo exibirá o código de vinculação e o nome temporário.

- Bind Code: insira o código de vinculação correto e válido no [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) para concluir a vinculação do dispositivo.<br />
- Temporary Name: se o código de vinculação estiver duplicado, será necessário inserir o nome temporário correto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. insira o código de vinculação correto e válido e clique no botão "Comfirm"<br />
7. Vinculado com sucesso, agora você pode adicionar novos modelos de IA a partir do model zoo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Ubind**

Se você não precisar gerenciar remotamente seu dispositivo na plataforma de IA, poderá deletar o dispositivo da conta da sua plataforma de IA. Você pode desvincular pelo dispositivo ou pela plataforma<br />

- Desvincule o dispositivo do AI mode zoo, clique em "Delete"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- Desvincule o dispositivo desativando "Bind to SenseCraft AI platform"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **Atualização do App**

As atualizações do aplicativo SenseCraft AI são categorizadas em automáticas e manuais, que você pode configurar de acordo com suas necessidades.

**Atualização automática**: verificar atualizações a cada 5 minutos; quando uma nova versão for detectada, as informações serão atualizadas automaticamente, sem necessidade de fazê-lo manualmente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**Atualização manual**: verificar atualizações manualmente e clicar no botão Update para atualizar quando uma nova versão for detectada

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

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
