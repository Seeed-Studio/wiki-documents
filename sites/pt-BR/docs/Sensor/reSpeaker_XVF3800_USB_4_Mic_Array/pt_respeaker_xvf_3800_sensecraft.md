---
description: SenseCraft AI é uma plataforma AIoT no-code/low-code da Seeed Studio que permite implantar modelos de IA pré-treinados em dispositivos de borda como o reSpeaker XVF3800. Com a palavra de ativação "Lumio", esta configuração possibilita aplicações de IA controladas por voz — sem necessidade de programação complexa.
title: SenseCraft AI com reSpeaker XVF3800
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
updatedAt: '2026-06-04'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_sensecraft/
---


## Introdução

SenseCraft AI é a plataforma de IA no-code/low-code da Seeed Studio que simplifica a implantação de modelos de inteligência artificial pré-treinados em dispositivos de borda, como o reSpeaker XVF3800. Este guia se concentra em configurar o reSpeaker XVF3800 para detecção de palavra de ativação usando o gatilho personalizado "Lumio", permitindo controle ativado por voz para seus projetos sem escrever código complexo. Com o SenseCraft AI, você pode testar, pré-visualizar e integrar rapidamente eventos de palavra de ativação em seus fluxos de trabalho de hardware. A plataforma também permite criar e enviar seus próprios modelos personalizados para detectar eventos sonoros específicos e palavras de ativação personalizadas, oferecendo total flexibilidade para adaptar as interações por voz às necessidades exclusivas da sua aplicação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Implantar modelo existente

### Etapa 1: Atualizar o firmware do dispositivo

Antes de implantar o modelo de palavra de ativação, certifique-se de que o reSpeaker XVF3800 esteja executando a versão correta do firmware.

O arquivo de firmware necessário é:
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

Siga o [procedimento](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#update-firmware) padrão de DFU (Device Firmware Update) do seu dispositivo para gravar este arquivo no reSpeaker XVF3800.


### Etapa 2: Acessar a plataforma SenseCraft AI

Abra o navegador e acesse:
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

O modelo que você está implantando é chamado **Lumos**. É um modelo leve de reconhecimento de fala projetado para fornecer capacidades eficientes de interação por voz com baixa latência para dispositivos de borda. Ao analisar características espectrais de áudio, o modelo pode detectar com precisão a palavra de ativação específica **"Lumos"** mesmo em meio a ruídos de fundo ambientes complexos.
:::


### Etapa 6: Confirmar a implantação do modelo

1. Uma caixa de diálogo aparecerá com os detalhes do modelo
2. Clique em **Confirm** para prosseguir com a gravação do modelo no seu dispositivo
3. Aguarde um momento enquanto o modelo é gravado no reSpeaker XVF3800

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### Etapa 8: Testar a detecção da palavra de ativação

Após a implantação bem-sucedida, você verá:

- **Visualização do espectro de áudio** – exibindo a entrada de som em tempo real
- **Duas classes de detecção**:
  - *Ruído de fundo*
  - *Lumos*

Para testar a palavra de ativação:
1. Fale claramente a palavra **"Lumos"** no microfone do reSpeaker
2. Observe o aumento do nível de confiança para a classe Lumos
3. Ajuste o **threshold parameter** conforme necessário para refinar a sensibilidade de detecção

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

