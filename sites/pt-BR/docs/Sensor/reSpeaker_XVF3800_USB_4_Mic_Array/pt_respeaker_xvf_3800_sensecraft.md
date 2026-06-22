---
description: SenseCraft AI é uma plataforma AIoT sem código/baixo código da Seeed Studio que permite implantar modelos de IA pré-treinados em dispositivos de borda como o reSpeaker. Com a palavra de ativação "Lumio", esta configuração permite aplicações de IA controladas por voz — sem necessidade de codificação complexa.
title: SenseCraft AI com reSpeaker 
keywords:
  - SenseCraft
  - reSpeaker XVF3800
  - Detecção de palavra-chave
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg
slug: /respeaker_xvf3800_sensecraft
sku: 114993702,114993700
last_update:
  date: 6/4/2026
  author: Kasun Thushara
createdAt: '2026-06-04'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_sensecraft/
---


## Introdução

SenseCraft AI é a plataforma de IA sem código/baixo código da Seeed Studio que simplifica a implantação de modelos de inteligência artificial pré-treinados em dispositivos de borda, como o reSpeaker. Este guia se concentra em configurar o reSpeaker para detecção de palavra de ativação usando o gatilho personalizado "Lumio", permitindo controle ativado por voz para seus projetos sem escrever código complexo. Com o SenseCraft AI, você pode testar, pré-visualizar e integrar rapidamente eventos de palavra de ativação em seus fluxos de trabalho de hardware. A plataforma também permite criar e enviar seus próprios modelos personalizados para detectar eventos sonoros específicos e palavras de ativação personalizadas, oferecendo total flexibilidade para adaptar as interações por voz às necessidades exclusivas da sua aplicação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Implantar modelo existente

### Etapa 1: Atualizar o firmware do dispositivo

Antes de implantar o modelo de palavra de ativação, certifique-se de que o seu reSpeaker XVF3800 esteja executando a versão correta do firmware.

O arquivo de firmware necessário é:
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

Siga o [procedimento](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#atualizar-firmware) padrão de DFU (Device Firmware Update) do seu dispositivo para gravar este arquivo no reSpeaker XVF3800.

Se você estiver usando um reSpeaker Lite, certifique-se de que ele esteja executando a versão correta do firmware.

O arquivo de firmware necessário é:
> `respeaker_lite_i2s_dfu_firmware_v1.0.9.bin`

Siga o [procedimento](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/#download-de-firmware) padrão de DFU (Device Firmware Update) do seu dispositivo para gravar este arquivo no reSpeaker Lite.


### Etapa 2: Acessar a plataforma SenseCraft AI

Abra o seu navegador e acesse:
> **https://sensecraft.seeed.cc/**

### Etapa 3: Acessar a seção de treinamento

No menu de navegação principal:
1. Clique em **Products**
2. Selecione **SenseCraft AI**
3. Escolha **Training AI Models**



### Etapa 4: Abrir seu Workspace

1. Navegue até o seu **Workspace**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. Verifique se o workspace está definido como **reSpeaker** como o tipo de dispositivo ativo
3. Selecione **reSpeaker** na lista de dispositivos
4. Clique no botão **Connect** para estabelecer uma conexão com o seu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### Etapa 5: Substituir o modelo em execução

Depois de conectado, você irá substituir o modelo existente no dispositivo:

1. Localize a seção **Model** em "Replace the device running model"
2. Clique em **Select Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_2.jpg" alt="pir" width={800} height="auto" /></p>

3. Escolha **Keyword Spotting- Lumos Keyword recognition** entre as opções disponíveis

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_3.jpg" alt="pir" width={800} height="auto" /></p>

:::note

O modelo que você está implantando é chamado **Lumos**. É um modelo leve de reconhecimento de fala projetado para fornecer capacidades eficientes e de baixa latência de interação por voz para dispositivos de borda. Ao analisar características espectrais de áudio, o modelo pode detectar com precisão a palavra de ativação específica **"Lumos"** mesmo em meio a ruídos de fundo ambientes complexos.
:::


### Etapa 6: Confirmar a implantação do modelo

1. Uma caixa de diálogo aparecerá com os detalhes do modelo
2. Clique em **Confirm** para prosseguir com a gravação do modelo no seu dispositivo
3. Aguarde um momento enquanto o modelo é gravado no reSpeaker 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### Etapa 8: Testar a detecção da palavra de ativação

Após a implantação bem-sucedida, você verá:

- **Visualização do espectro de áudio** – exibindo a entrada de som em tempo real
- **Duas classes de detecção**:
  - *Background Noise*
  - *Lumos*

Para testar a palavra de ativação:
1. Fale claramente a palavra **"Lumos"** no microfone do reSpeaker
2. Observe o aumento do nível de confiança para a classe Lumos
3. Ajuste o **parâmetro de threshold** conforme necessário para ajustar a sensibilidade de detecção

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

## Treinar e implantar seu próprio classificador de áudio

### Etapa 1: Abrir a aba Training

1. Navegue até **https://sensecraft.seeed.cc/**
2. No menu principal, vá para **Products** → **SenseCraft AI** → **Training AI Models**
3. Clique na aba **Training** para acessar a interface de classificação de áudio


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_6.jpg" alt="pir" width={800} height="auto" /></p>

### Etapa 2: Conectar seu dispositivo reSpeaker

Em **Audio Classification / Detection**:

1. Verifique se **reSpeaker Microphone** está selecionado como dispositivo de entrada
2. Clique no botão **Connect** para estabelecer uma conexão
3. Aguarde a plataforma confirmar a conexão bem-sucedida


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_7.jpg" alt="pir" width={800} height="auto" /></p>



### Etapa 3: Coletar dados de ruído de fundo

Antes de treinar sons personalizados, você deve estabelecer uma linha de base para o ruído ambiente normal.

1. Pressione **Collect Training Data for Background Noise**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_8.jpg" alt="pir" width={800} height="auto" /></p>

2. A plataforma irá gravar automaticamente por aproximadamente **20 segundos**
3. A gravação será dividida em **amostras de 1 segundo**
4. Quando concluída, uma pré-visualização das amostras de dados de fundo será exibida
5. Revise as amostras e pressione **Apply** quando estiver satisfeito


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_10.jpg" alt="pir" width={600} height="auto" /></p>


### Etapa 4: Criar uma classe de som personalizada

Agora você irá adicionar uma nova classe para o som específico que deseja que o modelo detecte.

**4.1 Nomear sua classe**

1. Clique em **Add New Class**
2. Insira o nome da classe: **Grassbreaking**
3. Pressione **Create** ou confirme a nova classe

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_11.jpg" alt="pir" width={800} height="auto" /></p>

**4.2 Coletar dados de treinamento para a classe personalizada**

1. Selecione a classe **Grassbreaking**
2. Pressione **Collect Training Data**
3. A plataforma irá gravar por aproximadamente **2 segundos**
4. A gravação será dividida em **amostras de 1 segundo**

**4.3 Revisar e aplicar as amostras**

1. Após a coleta, uma pré-visualização das **2 amostras** será exibida
2. Ouça ou revise as amostras
3. Pressione **Apply** quando estiver satisfeito com a qualidade

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_9.jpg" alt="pir" width={800} height="auto" /></p>

**4.4 Repetir para mais amostras**

Para obter uma detecção confiável, repita o processo de coleta de dados até ter coletado pelo menos **8 amostras** para a classe Grassbreaking.

**Dicas para boas amostras:**
- Varie a intensidade do som de grama quebrando
- Colete amostras de posições ou ângulos ligeiramente diferentes
- Certifique-se de que o som esteja claramente audível acima do ruído de fundo


### Etapa 5: Treinar o modelo

Depois de coletar dados suficientes, é hora de treinar o modelo.

#### 5.1 Navegar até a etapa de treinamento

Vá para **Step 2: Training** na interface.

#### 5.2 Confirmar a seleção do dispositivo

Verifique se **reSpeaker** está selecionado como o dispositivo de destino para o treinamento.

#### 5.3 Iniciar o treinamento

1. Pressione o botão **Train**
2. Aguarde alguns minutos até que o processo de treinamento seja concluído
3. Não feche o navegador nem desconecte o dispositivo durante o treinamento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_12.jpg" alt="pir" width={800} height="auto" /></p>

#### 5.4 Revisar os resultados do treinamento

Após o término do treinamento, suas classes treinadas aparecerão com:
- **Barras de probabilidade animadas** mostrando os níveis de confiança
- Previsões em tempo real com base na entrada de áudio ao vivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_13.jpg" alt="pir" width={800} height="auto" /></p>

### Etapa 6: Implantar o modelo no reSpeaker

**6.1 Ir para a etapa de implantação**

Navegue até **Step 3: Deploy** na interface.

**6.2 Implantar o modelo**

1. Clique no botão **Deploy** para enviar o modelo para o seu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_14.jpg" alt="pir" width={800} height="auto" /></p>


2. Uma caixa de diálogo de confirmação aparecerá
3. **Confirme** a implantação para enviar o modelo TFLM (TensorFlow Lite Micro) para o XIAO ESP32-S3 do reSpeaker


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_15.jpg" alt="pir" width={600} height="auto" /></p>

**6.3 Aguardar a conclusão**

O processo de implantação pode levar um momento. Aguarde a mensagem de confirmação indicando implantação bem-sucedida.


### Etapa 7: Monitorar a detecção em tempo real

Após a implantação bem-sucedida:

1. A interface exibirá **barras de confiança animadas** para cada classe detectada
2. Fale ou produza o som de grama quebrando para testar a detecção
3. Observe o aumento do nível de confiança para a classe **Grassbreaking**
4. Observe a diminuição da confiança de **Background Noise** quando o som personalizado for detectado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_16.jpg" alt="pir" width={600} height="auto" /></p>



## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

