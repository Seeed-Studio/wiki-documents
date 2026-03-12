---
description: Apresentando como usar o Grove Vision AI V2 para criar uma câmera web inteligente.
title: Câmera IP Inteligente com Função de IA
keywords:
  - vision AI
  - intelligent web camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_webcamera
last_update:
  date: 05/09/2024
  author: Allen
createdAt: '2024-05-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_webcamera/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 pode ser um dispositivo de vigilância avançado que integra inteligência artificial para aumentar a segurança e a eficiência operacional. Essas câmeras podem realizar análise de vídeo em tempo real para detectar e alertar sobre atividades incomuns, reconhecer rostos e monitorar a densidade de pessoas, tornando-as ideais para aplicações em áreas como segurança pública, gestão de varejo e segurança em casas inteligentes. Ao automatizar tarefas de vigilância, as câmeras IP com IA reduzem a necessidade de monitoramento humano constante, permitindo respostas mais rápidas a possíveis ameaças de segurança e melhorando a segurança geral.

## Materiais Necessários

Antes de começar o conteúdo do tutorial deste artigo, você pode precisar ter o seguinte hardware preparado.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Kit Grove Vision AI V2</th>
   <th>XIAO ESP32S3 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Enviar Modelo de IA para o Grove Vision AI V2

Agora vamos iniciar rapidamente os módulos com o SenseCraft AI, e isso exigirá apenas o módulo.

### Passo 1. Conecte o Grove Vision AI V2 ao SenseCraft AI Model Assistant

Primeiro, precisamos abrir a página principal do SenseCraft AI Model Assistant.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>

Use um cabo tipo Type-C para conectar o Grove Vision AI V2 ao seu computador.

No canto superior direito da página do SenseCraft AI Model Assistant, você pode selecionar **Grove Vision AI (WE2)**. Em seguida, clique no botão **Connect** à extrema direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

Na nova janela que aparecer, selecione a porta COM correta para o dispositivo e clique no botão Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### Passo 2. Envie um modelo adequado

Em seguida, basta selecionar um modelo que você deseja usar e clicar no botão **Send** abaixo. Aqui está um exemplo de Detecção de Rostos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/1.png" style={{width:1000, height:'auto'}}/></div>

Permaneça nesta página por 1 a 2 minutos até que o modelo seja enviado com sucesso. Observe que mudar para outra aba de página durante esse processo pode resultar em falha no envio (nosso time está trabalhando ativamente para resolver esse problema e ele será corrigido em breve).

### Passo 3. Observações

Quando o modelo for enviado com sucesso, você poderá ver a transmissão ao vivo da câmera Grove Vision AI V2 na Pré-visualização à direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/2.png" style={{width:1000, height:'auto'}}/></div>

## Implantar um Servidor HTTP com XIAO ESP32S3 Sense

### Passo 4. Baixe o pacote SSCMA e envie para o Arduino IDE

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Download SSCMA Zip</font></span></strong></a>
</div>

Baixe o pacote zip daqui.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/3.png" style={{width:1000, height:'auto'}}/></div>

Envie este pacote para o Arduino IDE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/4.png" style={{width:1000, height:'auto'}}/></div>

### Passo 5. Configure seu Wi-Fi 2,4G e envie o programa para o ESP32S3 Sense

Abra o demo **camera web server**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/13.png" style={{width:1000, height:'auto'}}/></div>

Defina o SSID e a senha do seu Wi-Fi 2,4G. (Por favor, preste atenção ao Wi-Fi 2,4G, não 5G)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Meu pacote de placa esp32 está na versão 2.0.14. Se você perceber que seu programa tem algum erro estranho, você pode alterar sua versão para 2.0.14. Isso acontece por causa de problemas de compatibilidade entre versões.
:::

Ative a função PSRAM do XIAO ESP32S3 Sense e envie o código. Quando você usar a função de áudio ou vídeo do S3, precisará ativar isso. Outros tipos de XIAO não precisam fazer isso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/6.png" style={{width:1000, height:'auto'}}/></div>

Quando funcionar corretamente, você verá um resultado como este. Se encontrar algum erro, verifique o **FAQ** no final deste artigo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/7.png" style={{width:1000, height:'auto'}}/></div>

## Acessar a Câmera IP Inteligente

### Passo 6. Veja o resultado no navegador

Primeiro, você precisa garantir que seu computador esteja na mesma LAN que o Grove Vision AI V2. Abra seu navegador, digite o endereço IP que você obteve na etapa anterior e clique no botão **Start Stream**. Você verá o modelo de IA rodando com sucesso no seu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

## FAQ

### 1. Erro de tamanho do buffer da UART

Se você encontrar um erro como este.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/8.png" style={{width:1000, height:'auto'}}/></div>

Primeiro, você precisa ir ao diretório dos cores do esp32, encontrar esp32-hal-uart.c e esp32-hal-uart.h e abri-los.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/9.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, você precisa alterar o tamanho do buffer da função uartBegin de uint16_t para uint32_t. Salve-os e envie o programa novamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/10.png" style={{width:1000, height:'auto'}}/></div>

### 2. Falha ao enviar o programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/11.png" style={{width:1000, height:'auto'}}/></div>

Mantenha pressionado o botão Boot e pressione o botão Reset, e então solte. Isso irá reiniciar o XIAO e resolverá esse problema.

### 3. Fica aparecendo apenas pontos

Isso acontece por causa da conexão de rede. Verifique se sua rede está disponível. Ela é 2,4G? Tente outra rede ou outra antena.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
