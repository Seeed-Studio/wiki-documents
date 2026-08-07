---
sidebar_position: 12
description: SenseCraft AI Jetson
title: Kit de ferramentas para reComputer Jetson
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
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-jetson/
---

SenseCraft AI-Jetson é um kit de desenvolvimento e plataforma projetado para dispositivos NVIDIA Jetson Edge AI. Basta executar o "Quickstart Script" e você verá uma interface de usuário interativa para visualizar um aplicativo de exemplo com um vídeo pré-carregado e um modelo de IA pré-carregado. Se você quiser adicionar sua própria câmera USB ou câmera IP, você pode fazer isso em apenas alguns cliques!

Além dos vários modelos de IA integrados que oferecemos prontos para uso, você pode acessar um grande número de modelos públicos na plataforma SenseCraft AI e poderá baixar e implantar modelos de IA para cenários específicos e criar soluções de IA personalizadas com base em suas necessidades. SenseCraft AI é seu parceiro inteligente de tomada de decisão para visão de IA, oferecendo a você recursos simples, flexíveis e eficientes de inferência e construção de soluções.

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

**Início rápido**<br />

1. Conecte o Jetson a um monitor e ligue-o<br />
2. Conecte um mouse e um teclado ao dispositivo e digite o seguinte comando em um terminal para executar o aplicativo

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. Durante a instalação do aplicativo, você precisa definir as seguintes configurações opcionais, portanto, defina-as de acordo com suas necessidades

- **[Opcional] Ativar o script jetson_clocks para maximizar o desempenho do Jetson definindo a frequência máxima para os clocks de CPU, GPU e EMC? [y/n] (padrão: y): y**<br />
fornece o script jetson_clocks para maximizar o desempenho do Jetson definindo a frequência máxima estática para os clocks de CPU, GPU e EMC.

- **[Opcional] Economizar espaço desinstalando alguns pacotes desnecessários como libreoffice, alterar o tamanho da memória Swap? (/swapfile) [y/n] (padrão: n): n**<br />
No caso de memória insuficiente (especialmente no Jetson Nano), é melhor ativar o swap para garantir o funcionamento normal do programa.

- **[Opcional] Você deseja criar ou alterar o tamanho da memória Swap? (/swapfile)?**<br />
Para obter um desempenho melhor no Nano, ative o Swap.

- **[Opcional] Usar armazenamento externo · para armazenar o diretório de dados do Docker? (para imagens e volumes do Docker)?**<br />

- **(Recomendado se sua partição raiz for menor que 32 GB). [y/n] (padrão: n): n**<br />

O programa de edge AI requer um mínimo de 32G de espaço de armazenamento para ser executado, caso contrário, você pode optar por montar o volume de dados do Docker em um disco externo.

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

5. O modelo de IA precisa aplicar um fluxo de vídeo, se não houver fluxo, adicione primeiro um fluxo válido. O model zoo enviará as informações do fluxo diretamente para o dispositivo.

:::note
para mais informações sobre fluxos, consulte Streams Management
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. Envie o modelo de IA e as informações do fluxo para o dispositivo. A implantação do modelo de IA leva alguns minutos, então você pode sair da página atual e ir para o dispositivo após alguns minutos para visualizar o modelo de IA implantado

### **Gerenciamento de fluxos**

SenseCraft AI-Jetson suporta adicionar vários fluxos de vídeo e suporta adicionar câmera USB e câmera IP conforme necessário.

O número de fluxos de vídeo que podem ser adicionados depende dos recursos de CPU e memória do dispositivo. Preste atenção ao uso de recursos do dispositivo.

#### **Adicionar fluxo**

1. Visite a página Streams e clique no ícone +<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. Configure as informações válidas do novo fluxo de vídeo, consulte a tabela abaixo para obter detalhes<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **Campos** | **Conteúdo** |
| --- | --- |
| **Stream Name** | 1 Nome personalizado para este fluxo.<br />2 Não pode ficar vazio |
| **Video Type** | 1 Ip camera：Acessar uma câmera IP, é necessário inserir uma URL rtsp válida<br />2 Usb camera：Conecte a câmera USB ao dispositivo, reconheça automaticamente o USB e, em seguida, selecione a câmera USB correta no caminho de vídeo. |
| **Video Path** | Caminho de vídeo, o formato é decidido por "Video Type", se estiver errado, o vídeo padrão será usado. |
| **Device AI Model** | 1 Selecione um modelo de IA que já foi baixado no dispositivo<br />2 Se não houver modelo de IA no seu dispositivo, vá para a página AI Models para baixar o modelo para o seu dispositivo. |
| **Confidence Threshold** | 1 Limite de confiança do objeto para detecção.<br />2 Formato:float [0, 1] |
| **IoU Threshold** | 1 IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras verdadeiras2 Formato:float [0, 1] |
| **FPS** | 1 Quadros por segundo do fluxo<br />2 Formato: INT [1,60] |
| **Quality** | 1 Qualidade do fluxo de saída.  Padrão: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecções por imagem.Padrão:3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Se deve exibir a taxa de quadros do fluxo<br />2 Formato:Bool [True,False]<br />● True: exibir FPS<br />● False: não exibir FPS |
| **Display Clock** | 1 Se deve exibir a hora<br />2 Formato:Bool [True,False]<br />● True: exibir hora<br />● False: não exibir hora |

3. Clique no botão "Save" e volte para a página inicial para verificar o novo fluxo e o resultado da detecção de IA.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **Excluir fluxo**

Vá para os detalhes do fluxo e clique no ícone "Delete" para excluir o fluxo<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **Gerenciamento de modelo de IA**

Gerencie todos os modelos de IA que foram baixados no dispositivo.

- O modelo de IA mostrará o nome do fluxo que usa o modelo.<br />
- Modelos de IA não usados em fluxo podem ser excluídos<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **Configurações**

#### **Sobre**

As informações do dispositivo, para mais informações consulte a tabela a seguir <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **Campos** | **Conteúdo** |
| --- | --- |
| **Product** | O módulo do dispositivo |
| **IP** | O endereço IP de rede do dispositivo |
| **Serial number** | Número de série de produção exclusivo do dispositivo |
| **MAC address** | Endereço MAC de rede |
| **CPU Usage** | Uso de CPU do dispositivo |
| **RAM** | RAM do dispositivo |
| **Swap** | Swap do dispositivo |
| **Disk usage** | Uso de disco do dispositivo |
| **Cuda version** | A versão do Cuda instalada no dispositivo |
| **Jetpack version** | A versão do Jetpack instalada no dispositivo |

#### **Vincular à plataforma SenseCraft AI**

SenseCraft AI para Jetson é projetado para edge AI. A inferência de IA e o processamento de fluxo de vídeo são feitos localmente no dispositivo. Somente se você precisar baixar mais modelos de IA será necessário vincular o dispositivo à [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home) — você pode remover o dispositivo após o download.

1. Visite o [SenseCraft AI](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home).<br />
2. Registre-se com um endereço de e-mail válido. A conta SenseCraft AI é a mesma que a conta SenseCAP Cloud; se você já tiver uma, poderá fazer login diretamente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. Navegue até **`Models`** > **`Workspace`** > **`NVIDIA Jetson`** e clique em **`Add Device`**.<br />
4. Insira um nome personalizado para o dispositivo e obtenha o código de vinculação a partir do dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. Volte para o aplicativo SenseCraft AI do dispositivo. Clique em "Bind to SenseCraft AI platform", e então o aplicativo exibirá o código de vinculação e o nome temporário.

- Bind Code: insira o código de vinculação correto e válido na [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home) para concluir a vinculação do dispositivo.<br />
- Temporary Name: se o código de vinculação estiver duplicado, você precisará inserir o nome temporário correto.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. insira o código de vinculação correto e válido e clique no botão "Comfirm"<br />
7. Vinculação bem-sucedida, agora você pode adicionar novos modelos de IA a partir do model zoo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Ubind**

Se você não precisar gerenciar remotamente seu dispositivo na plataforma de IA, poderá excluir o dispositivo da conta da sua plataforma de IA. Você pode desvincular a partir do dispositivo ou na plataforma<br />

- Desvincule o dispositivo do AI mode zoo, clique em "Delete"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- Desvincule o dispositivo desativando "Bind to SenseCraft AI platform"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **Atualização do aplicativo**

As atualizações do aplicativo SenseCraft AI são categorizadas em atualizações automáticas e manuais, que você pode configurar de acordo com suas necessidades.

**Atualização automática**: verifica se há atualizações a cada 5 minutos, quando uma nova versão é detectada, as informações serão atualizadas automaticamente, sem necessidade de fazê-lo manualmente.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**Atualização manual**: verifique manualmente se há atualizações e clique no botão Update para atualizar quando uma nova versão for detectada

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **Suporte técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
