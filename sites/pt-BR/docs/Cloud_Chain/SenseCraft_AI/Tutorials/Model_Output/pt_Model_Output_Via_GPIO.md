---
sidebar_position: 8
description: Este artigo descreve como enviar os resultados de reconhecimento de um modelo via GPIO.
title: Saída de Modelo via GPIO
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-12-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao/
---

# Configurando Saída de Modelo e GPIO no SenseCraft AI para o XIAO ESP32S3 Sense

Este artigo da wiki fornece um guia passo a passo sobre como configurar a saída de modelo e as definições de GPIO para a placa XIAO ESP32S3 Sense usando a plataforma SenseCraft AI. Seguindo estas instruções, você aprenderá a acionar mudanças de nível de GPIO com base em condições de evento específicas detectadas pelo seu modelo treinado.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o seguinte:

1. Placa XIAO ESP32S3 Sense
2. Cabo de dados USB-C
3. Expansion Board Base for XIAO with OLED
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>Expansion Board Base for XIAO with OLED</th>
      <th>Grove LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Passo 1. Acesse o SenseCraft AI Vision Workspace e conecte o XIAO ESP32S3 Sense

Abra o seu navegador e acesse a página do SenseCraft AI Vision Workspace.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Acesso Direto com Um Clique 🖱️</font></span></strong>
    </a>
</div><br />

Selecione a placa XIAO ESP32S3 Sense entre os dispositivos disponíveis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

Usando o cabo USB-C, conecte sua placa XIAO ESP32S3 Sense ao computador. Depois de conectada, clique no botão **Connect** localizado no canto superior esquerdo da página do SenseCraft AI Vision Workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Passo 2. Certifique-se de que um Modelo esteja Carregado no XIAO ESP32S3 Sense

Antes de prosseguir, verifique se a sua placa XIAO ESP32S3 Sense possui um modelo treinado carregado. Se você ainda não carregou um modelo, consulte a documentação do SenseCraft AI sobre como treinar e implantar modelos no seu dispositivo.

- [Usando um modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_pretrained_models_for_xiao/)

Se você quiser usar o seu próprio modelo treinado, você pode consultar as duas Wikis a seguir.

- [Tipo de treinamento - Classificação](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_classification/)
- [Tipo de treinamento - Detecção de Objetos](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_object_detection/)

## Passo 3. Configurar Saída GPIO

Na barra lateral esquerda da página do Vision Workspace, clique na opção **Output**. Entre as opções de saída disponíveis, selecione **GPIO** para acessar as configurações de GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

No lado direito da página, clique no botão **Trigger action when event conditions are met**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

Uma caixa de diálogo aparecerá, solicitando que você insira vários parâmetros que servirão como condições de disparo para alterar o nível do GPIO. Esses parâmetros incluem:

- **Object**: Especifique o objeto que o seu modelo deve detectar para acionar a mudança de nível do GPIO. Por exemplo, "face" se você quiser que o GPIO mude quando um rosto for detectado.

- **Condition**: Escolha a condição que deve ser atendida para que o disparo ocorra. As opções incluem "Greater than", "Less than", "Equal to", etc. Por exemplo, selecionar "Greater than" significa que o GPIO mudará quando o nível de confiança do objeto detectado for maior que o valor especificado.

- **Confidence**: Defina o nível mínimo de confiança necessário para que a detecção do objeto acione a mudança no GPIO. Esse valor varia de 1 a 100, sendo 100 a maior confiança.

- **GPIO**: Selecione o pino GPIO específico no XIAO ESP32S3 Sense que você deseja controlar. As opções disponíveis incluem GPIO1(DO), GPIO2(D1), etc.

- **Default Status**: Escolha o estado padrão do pino GPIO selecionado. As opções incluem "Low Level" e "High Level".

- **Active Status**: Especifique o estado para o qual o pino GPIO deve mudar quando as condições de disparo forem atendidas. As opções incluem "Low Level" e "High Level".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

Depois de configurar as condições de disparo desejadas, clique no botão **Confirm** para salvar as configurações. Por fim, clique no botão **Send** para transmitir o comando de disparo de GPIO para sua placa XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

A placa XIAO agora executará o comando, e você poderá observar o efeito no Grove LED conectado através da Expansion Board Base for XIAO with Grove OLED.

:::caution
Lembre-se de que a funcionalidade de saída GPIO depende da conexão baseada na web entre a plataforma SenseCraft AI e a sua placa XIAO ESP32S3 Sense. Se a conexão for perdida ou interrompida, o recurso de mudança de nível do GPIO com base na detecção do modelo deixará de funcionar. Garanta uma conexão estável durante todo o processo.
:::

## Conclusão

Seguindo este guia passo a passo, você aprendeu como configurar a saída de modelo e as definições de GPIO na plataforma SenseCraft AI para a placa XIAO ESP32S3 Sense. Agora você pode acionar mudanças de nível de GPIO com base em condições de evento específicas detectadas pelo seu modelo treinado. Essa funcionalidade abre uma ampla gama de possibilidades para criar projetos e aplicações interativas usando o XIAO ESP32S3 Sense e o SenseCraft AI. Lembre-se de manter uma conexão estável entre a plataforma web e o seu dispositivo para uma operação contínua.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
