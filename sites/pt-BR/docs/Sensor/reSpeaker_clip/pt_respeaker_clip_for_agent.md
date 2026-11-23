---
# Document type: project
description: "Use reSpeaker Clip with DeepSeek Harness (DSH) for voice input. Connect the device and prepare local SenseVoice recognition to turn RTC live audio or SD recordings into editable chat drafts."
title: "Use reSpeaker Clip for Voice Input in DSH"
keywords:
  - reSpeaker Clip
  - DeepSeek Harness
  - DSH
  - SenseVoice
  - speech-to-text
  - RTC
  - BLE
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip_for_agent
sku: 100020126
last_update:
  date: 11/20/2026
  author: Wang Kunpeng
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_for_agent/
---

# Usar o reSpeaker Clip para Entrada de Voz no DSH

Use o reSpeaker Clip com o DeepSeek Harness (DSH) para entrada de voz. Conecte o dispositivo e prepare o reconhecimento local SenseVoice para transformar áudio ao vivo via RTC ou gravações em SD em rascunhos de chat editáveis.


## 1. Preparar o Dispositivo Clip

Neste guia, RTC se refere à transmissão de áudio em tempo real do Clip via BLE. O modo SD salva a gravação no Clip e a sincroniza via Bluetooth após o término da gravação.

Para usar o botão do dispositivo para entrada RTC, grave o firmware a partir do branch `clip_agent`, seguindo o [guia de gravação de firmware](/pt-br/respeaker_clip_firmware_quick_start). O modo não RTC (SD) não requer essa atualização adicional de firmware para o fluxo de trabalho descrito aqui.

[Repositório de firmware, branch clip_agent](https://github.com/Ant-wkp/reSpeaker_Clip/tree/clip_agent)



## 2. Instalar o Plugin e Conectar o Dispositivo

1. **Instalar o plugin**

   Abra **Plugins → Add plugin** no DSH, digite `dsh-clip-for-agent` e instale e ative o plugin. Reinicie o DSH se for solicitado antes de continuar.

   [pacote npm](https://www.npmjs.com/package/dsh-clip-for-agent) · [repositório GitHub](https://github.com/Ant-wkp/dsh-clip-for-agent)

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-1.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-2.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-3.jpg" alt="pir" width={1080} height="auto" /></p>
2. **Conectar o dispositivo**

   Ative o Bluetooth do computador e o Clip. Abra **Clip** na barra lateral esquerda e clique em **Scan for devices**. Encontre seu dispositivo e clique em **Pair and connect**. Conclua quaisquer solicitações de pareamento Bluetooth exibidas pelo seu sistema operacional.
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-4.jpg" alt="pir" width={1080} height="auto" /></p>

3. **Preparar o reconhecimento de voz**

   Em **Clip → Speech recognition**, siga as instruções para instalar os componentes oficiais de reconhecimento de voz e o modelo SenseVoice. Se **Install official speech recognition** aparecer, clique diretamente nele no painel do Clip. Se o DSH solicitar que você reinicie, reinicie-o e retorne a este painel para terminar de preparar o modelo.

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-5.jpg" alt="pir" width={1080} height="auto" /></p>

## 3. Inserir Texto por Voz

Em **Clip → Recording results → Recording mode**, selecione **RTC live audio** ou **SD recording (sync on stop)**. Em seguida, abra o chat em que você deseja inserir texto.

1. **Modo RTC**

   Este modo oferece menor latência de entrada e requer o firmware `clip_agent` descrito acima. Pressione o botão do dispositivo duas vezes para iniciar a entrada de voz e pressione-o duas vezes novamente para parar. O plugin recebe o áudio durante a gravação e o decodifica e transcreve após o término da gravação.

2. **Modo não RTC (SD)**

   Pressione e segure o botão do dispositivo para iniciar a gravação e pressione e segure novamente para parar. O áudio é salvo no Clip antes de ser transferido via Bluetooth e transcrito, portanto a espera após parar é mais longa.

Você também pode iniciar a gravação com o botão de microfone do Clip no campo de entrada do chat ou com o botão de gravação no painel do Clip. Use o botão de parada na tela para encerrar a gravação.


## Solução de Problemas

- **O dispositivo não aparece na varredura.** Confirme que o Bluetooth e o Clip estão ligados, aproxime o Clip do computador e faça a varredura novamente.
- **O modelo não está pronto.** Abra **Clip → Speech recognition** para verificar o progresso do download ou tente novamente conforme solicitado. Aguarde até que o modelo esteja pronto antes de gravar.
- **A sincronização SD ou a transcrição falha.** Tente novamente em **Clip → Recording results**. Após reconectar o dispositivo, você também pode selecionar **Sync latest SD recording**.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
