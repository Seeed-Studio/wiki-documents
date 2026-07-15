---
description: Use reSpeaker XVF3800 to control reCamera Gimbal for sound source localization
title: Localização de fonte sonora do reCamera Gimbal
keywords:
  - reCamera Gimbal
  - reSpeaker
  - sound source localization
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif
slug: /sound_source_localization_of_recamera_gimbal
sku: 108990119,114993700
sidebar_position: 11
last_update:
  date: 04/17/2026
  author: Xinrui Wu
createdAt: '2026-04-17'
updatedAt: '2026-04-17'
url: https://wiki.seeedstudio.com/pt-br/sound_source_localization_of_recamera_gimbal/
---


# Localização de fonte sonora do reCamera Gimbal

## Introdução

Decidimos nos divertir um pouco e experimentar a combinação de IA de borda de áudio e visual! 🤖

Neste demo, conectamos o reSpeaker USB Mic Array da Seeed Studio ao nosso reCamera Gimbal com tecnologia RISC-V. Ao utilizar a Localização de Fonte Sonora (DOA), o sistema permite que os motores brushless do gimbal girem automaticamente e apontem para a direção do locutor em tempo real. É uma exploração super divertida de como nossos dispositivos de borda multimodais podem interagir de forma perfeita!  

Aqui está o efeito de uso após concluir este demo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif" /></div>

## Preparação de hardware

um reCamerab Gimbal  
um reSpeaker XVF3800  
um computador  

<table align="center">
  <tr>
    <th style={{textAlign:'center'}}>reCamera Gimbal</th>
    <th style={{textAlign:'center'}}>reSpeaker XVF3800</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-With-Case-XIAO-ESP32S3-p-6628.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>

## 1. Abra o SenseCraft para implantar o aplicativo

### 1.1 Configurar o reCamera Gimbal

Primeiro, não conecte a fonte de alimentação do reCamera Gimbal, conecte diretamente o Type-C ao computador, acesse 192.168.42.1, clique em "Login to SenseCraft" no canto inferior esquerdo após entrar, depois conecte o WiFi a ele após fazer login, certifique-se de que o WiFi conectado seja o mesmo do seu computador, então verifique o endereço IP do reCamera Gimbal, copie o endereço IP e acesse-o para ver se pode ser acessado normalmente, depois desconecte o cabo Type-C e conecte a fonte de alimentação de 12 V, após a conclusão da calibração automática do reCamera Gimbal, acesse novamente o endereço IP anterior no navegador e entre na interface do reCamera Gimbal para garantir que o Node-RED tenha começado a rodar normalmente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_1.png" /></div>

### 1.2 Implantar o aplicativo

Entre no [SenseCraft](https://sensecraft.seeed.cc/ai/application), clique em "Applications" para encontrar o aplicativo chamado "Sound source localization Camera", clique em "Deploy this Application" após entrar e, em seguida, selecione "Option 1: Deploy via USB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_2.png" /></div>

O fluxo de trabalho que você verá após a implantação deve ser assim:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_3.png" /></div>

## 2. Obter o código-fonte e configurar o ambiente de trabalho Python

Visite o [projeto no GitHub](https://github.com/xr686/reCamera-Gimbal-reSpeaker-Tracker.git), baixe o pacote e depois descompacte-o.

Para se comunicar com o reSpeaker via USB, instale a dependência no seu computador:

\# Instale o pacote Python necessário a partir do arquivo de requisitos fornecido

```bash
pip install -r Sound-Tracking/requirements.txt
```

\# Instale o libusb via Conda (essencial para o suporte do driver de back-end)

```bash
conda install -c conda-forge libusb
```

Substitua "192.168.31.198" no código reSpeaker.py pelo endereço IP real do seu reCamera Gimbal após conectar ao WiFi!

## 3. Teste

Execute o script Python no seu computador para fazer o seguinte:

```bash
python Sound-Tracking/reSpeaker.py
```

Fale no microfone – você deverá ver o terminal Python imprimindo continuamente SPEECH_DETECTED:1, enquanto o reCamera gira rapidamente para o ângulo da sua voz.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_4.png" /></div>

## Expanda mais formas de brincar!

Este demo é apenas o começo. Incentivamos muito que todos realizem desenvolvimento secundário com base nele e expandam para jogadas mais avançadas! Por exemplo:

-** Acionamento em cadeia **: Você pode modificar o script Node-RED ou Python para fazer o reCamera Gimbal começar a gravar ** ou *tirar fotos* * imediatamente após girar para a posição da fonte sonora.

-**Segurança inteligente**: Combinado com o Home Assistant, ele pode rastrear e gravar automaticamente quando ocorrer ruído anormal no ambiente.

-**Confirmação dupla visual e auditiva**: Combine a detecção de alvos YOLO11n com rastreamento auditivo (por exemplo: ouvir um som -> virar para ver -> reconhecimento visual para confirmar se é uma "pessoa").

Estamos ansiosos para ver suas ideias!🎉

## Instruções de operação e precauções

1. **Confirmar implantação**: Depois que o Node-RED importar o nó anterior, clique em **Deploy** no canto superior direito para entrar em vigor.

2. **Mecanismo de teste**: Inicie o Node-RED primeiro para garantir que ele esteja em execução em segundo plano e, em seguida, execute o comando a seguir no PC para rodar o script Python:

Substitua "192.168.31.198" no código reSpeaker.py pelo endereço IP real do reCamera Gimbal após conectar ao WiFi!

   ```
   python Sound-Tracking/reSpeaker.py
   ```

Falando no microfone, você deverá conseguir ver o terminal Python imprimindo constantemente:

   ```
   SPEECH_DETECTED: 1
   ```

Ao mesmo tempo, o reCamera irá girar rapidamente para o ângulo físico do som.

3. **Calibração de orientação física**: A orientação '0 de' do array de microfones do reSpeaker pode não ser exatamente a mesma que o '0 de' padrão do reCamera apontando para a frente. Se você perceber que o gimbal sempre se desvia de um ângulo fixo após girar (por exemplo, sempre desvia 90 graus), você pode clicar duas vezes diretamente no novo nó de função 'Calculate & Throttle' no Node-RED, remover o comentário do código relevante e modificar o cálculo do deslocamento: 'targetYaw = (targetYaw +90)% 360;'.

4. - - Design anti-tremor **: Como o código Python atualiza e envia dados a cada 0,1 segundo, se todos esses sinais de alta frequência forem enviados ao controlador do motor (barramento CAN), é fácil causar sobrecarga e travamento do barramento do dispositivo. Portanto, escrevi a lógica anti-tremor no nó de função do Node-RED (o gerador só será acionado quando o ângulo mudar '>5 °' ou o intervalo de tempo for '>1 second').

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
