---
sidebar_position: 4
description: Implantar modelo no Jetson na Plataforma Sensecraft AI
title: Usando um modelo para reComputer Jetson
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson
aliases:
  - /sensecraft_deploy_model_to_jetson
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson/
---

## Primeiros Passos

A plataforma SenseCraft AI fornece uma maneira muito simples de implantar modelos de IA em dispositivos de borda, como Jetson Orin, XIAO ESPS3, etc. Aproveite agora a implantação perfeita de modelos de Edge AI!<br />

1. Selecione ou envie um modelo de IA para o dispositivo Jetson<br />
2. Acesse os detalhes do modelo de IA e clique no botão "Deploy Model"<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

### **Passo 1  Instalar SenseCraft AI-Jetson**

1. Se o seu dispositivo Jetson já tiver o SenseCraft AI instalado, vá diretamente para o passo 2

2. Conecte o Jetson a um monitor e ligue-o

3. Conecte um mouse e um teclado ao dispositivo e digite o seguinte comando em um terminal para executar o aplicativo

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

4. A instalação do SenseCraft AI-Jetson foi concluída, por favor vá para o passo 2<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

### **Passo 2  Selecionar dispositivo**
1. Se você já adicionou o dispositivo à plataforma, pode selecionar o dispositivo diretamente e clicar em Next para ir para o passo 3<br />


![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2. Se você precisar adicionar um novo dispositivo, clique no botão "Add Devic" e a janela Add Device será exibida.<br />
3. Digite o nome do dispositivo <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4. Acesse o aplicativo SenseCraft AI-Jetson no seu dispositivo e vá para a página Settings<br />
5. Ative a configuração "Bind to SenseCraft AI platform" e obtenha o código de vinculação <br />
6. Volte para a plataforma SenseCraft AI e insira o código de vinculação válido para concluir a adição<br />

:::note
se este código de vinculação for duplicado, você precisará inserir um nome temporário.
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7. Agora selecione o dispositivo e clique em Next para ir ao passo 3

### **Passo 3  Selecionar Stream**
1. Se você quiser aplicar o modelo de IA no stream de vídeo existente do dispositivo, selecione diretamente o stream de vídeo e clique em "Send" para enviar o modelo para o dispositivo.<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2. Se você quiser aplicar o modelo de IA a um novo stream de vídeo, clique no botão "Add Stream" e insira as informações do novo stream<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

Para mais detalhes sobre as informações do stream, consulte a tabela a seguir 

| **Campos** | **Conteúdo** |
| --- | --- |
| **Stream Name** | 1 Nome personalizado para este stream.<br />2 Não pode estar vazio |
| **Video Type** | 1 Ip camera: Acessar uma câmera IP, é necessário inserir uma URL RTSP válida<br />2 Usb camera: Conectar a câmera USB ao dispositivo, reconhecer automaticamente o USB e, em seguida, selecionar a câmera USB correta no caminho de vídeo.<br />3 Video: Vídeo incorporado ao dispositivo e inserido em video path |
| **Video Path** | Caminho de vídeo, formato definido por "Video Type", se estiver errado, será usado o vídeo padrão. |
| **Confidence Threshold** | 1 Limite de confiança do objeto para detecção.<br />2 Formato: float [0, 1] |
| **IoU Threshold** | 1 IoU é usado para avaliar a precisão das bounding boxes previstas em comparação com as bounding boxes verdadeiras2 Formato: float [0, 1] |
| **FPS** | 1 Frames por segundo do stream<br />2 Formato: INT [1,60] |
| **Quality** | 1 Qualidade do stream de saída.  Padrão: 50<br />2 Formato: int [0,100] |
| **Maximum Detections** | 1 número máximo de detecções por imagem. Padrão: 3002 Formato: int [0,1000] |
| **Display Frame Rate** | 1 Se deve exibir a taxa de quadros do stream<br />2 Formato: Bool [True,False]<br />● True: display FPS<br />● False: do not display FPS |
| **Display Clock** | 1 Se deve exibir a hora<br />2 Formato: Bool [True,False]<br />● True: display time<br />● False: do not display time |

3. Clique no botão “Send” para enviar o modelo para o dispositivo. A implantação do modelo levará cerca de 5 minutos, sinta-se à vontade para fechar a página de pré-visualização e verificá-lo no workspace do dispositivo após a conclusão da implantação.

4. Verifique o novo modelo no dispositivo ou no workspace do dispositivo na plataforma de IA<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)


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