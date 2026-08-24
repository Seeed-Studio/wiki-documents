---
sidebar_position: 1
description: Como usar um modelo para XIAO ESP32S3 Sense
title: Usando um modelo para XIAO ESP32S3 Sense
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao/
---

# Usando um modelo para XIAO ESP32S3 Sense

SenseCraft AI é uma plataforma poderosa que fornece um vasto repositório de modelos de IA compatíveis com vários dispositivos. Ela permite que desenvolvedores e entusiastas implantem e experimentem facilmente diferentes modelos de IA em seu hardware. Neste tutorial abrangente, vamos guiá-lo pelo processo de uso de um modelo SenseCraft AI na placa XIAO ESP32S3 Sense e de visualização da saída do modelo. Também abordaremos alguns conceitos e configurações importantes para ajudá-lo a entender e otimizar o desempenho do modelo.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte:

- **Placa XIAO ESP32S3 Sense**: Esta é uma placa de desenvolvimento compacta e versátil que combina a potência do microcontrolador ESP32-S3 com uma variedade de sensores e periféricos.

- **Cabo USB-C**: Você precisará de um cabo USB para conectar a placa XIAO ESP32S3 Sense ao seu computador para programação e alimentação.

- **Acesso à página web do repositório de modelos SenseCraft AI**: Certifique-se de ter uma conexão de internet estável e de conseguir acessar o site do SenseCraft AI.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Etapa 1. Filtrando modelos para XIAO ESP32S3 Sense

Abra o navegador e acesse o repositório de modelos SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Acesso direto com um clique 🖱️</font></span></strong>
    </a>
</div><br />

A página do repositório de modelos exibe uma ampla variedade de modelos de IA disponíveis para diferentes dispositivos e aplicações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

Na barra lateral esquerda da página da web, localize a seção **Supported Devices**. Na lista de dispositivos, clique em **XIAO ESP32S3 Sense** para filtrar os modelos compatíveis com o seu dispositivo específico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

Esta etapa garante que você veja apenas os modelos que podem ser implantados e executados na placa XIAO ESP32S3 Sense.

## Etapa 2. Escolher um modelo

Para o propósito deste tutorial, usaremos o modelo de **Detecção de Rosto** como exemplo. No entanto, sinta-se à vontade para explorar e experimentar outros modelos com base em seus interesses e requisitos.

Clique no modelo de **Detecção de Rosto** para abrir sua página dedicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

Na página do modelo, você encontrará informações detalhadas sobre o modelo, incluindo sua descrição, Precisão do Modelo e Formato do Modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

Na página do modelo, clique no botão **Deploy Model** localizado na parte superior da página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

Essa ação iniciará o processo de implantação do modelo selecionado, preparando-o para ser baixado e executado na sua placa XIAO ESP32S3 Sense.

## Etapa 3. Conectar seu dispositivo

Depois de clicar no botão Deploy Model, clique no botão **Connect Device** que aparece abaixo da página de implantação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

Uma nova página será aberta; neste ponto, conecte seu XIAO ESP32S3 Sense ao computador por meio de um cabo USB-C.

Na página de conexão do dispositivo, você verá um resumo das informações do modelo, incluindo seu nome e ID do modelo. Revise os detalhes com atenção para garantir que o modelo correto esteja selecionado para sua placa XIAO ESP32S3 Sense. Se as informações estiverem corretas, clique no botão **Confirm** para prosseguir com a implantação do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

Após confirmar as informações do modelo, uma janela aparecerá pedindo que você selecione a porta serial para sua placa XIAO. A porta serial é o canal de comunicação entre o computador e a placa XIAO ESP32S3 Sense. Escolha o número de porta correto correspondente ao seu XIAO ESP32S3 Sense. Se não tiver certeza, consulte o gerenciador de dispositivos do seu sistema operacional ou a documentação da placa para identificar a porta correta.

Clique no botão **Connect** para estabelecer a conexão entre o computador e a placa XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 4. Upload do modelo

Depois que a conexão for estabelecida, o modelo selecionado começará a ser baixado para sua placa XIAO. O processo de upload do modelo pode levar aproximadamente 1–2 minutos, dependendo do tamanho do modelo e da velocidade da sua conexão de internet. Durante esta etapa, os arquivos e dependências necessários do modelo são transferidos para a placa XIAO ESP32S3 Sense, preparando-a para executar o modelo de IA localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 5. Pré-visualização do modelo

Após o upload bem-sucedido do modelo, o recurso de pré-visualização será iniciado automaticamente. A janela de pré-visualização exibirá um vídeo em tempo real da câmera do seu XIAO ESP32S3 Sense, juntamente com os resultados de detecção do modelo sobrepostos ao vídeo. No caso do modelo de Detecção de Rosto, você verá caixas delimitadoras desenhadas ao redor dos rostos detectados no fluxo de vídeo. Cada caixa delimitadora representa um rosto que o modelo identificou. O recurso de pré-visualização permite ver a saída do modelo em tempo real, fornecendo um feedback visual imediato sobre seu desempenho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## Ajuste fino do modelo (opcional)

1. Se você quiser otimizar o desempenho do modelo ou adaptá-lo ao seu caso de uso específico, pode ajustar as configurações do modelo usando as opções disponíveis abaixo da seção de pré-visualização.

2. Dois parâmetros importantes que você pode ajustar são o "Confidence Threshold" e o "Intersection over Union (IoU) Threshold".

   - **Confidence Threshold**: Esse valor determina o nível mínimo de confiança necessário para que o modelo considere uma detecção como válida. Um limiar de confiança mais alto resultará em menos detecções, porém com maior certeza, enquanto um limiar mais baixo permitirá mais detecções, mas pode incluir alguns falsos positivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU é uma métrica que mede a sobreposição entre a caixa delimitadora prevista e a caixa delimitadora de referência (ground truth). Ela é usada para determinar a precisão da detecção de objetos. O limiar de IoU define o valor mínimo de IoU necessário para que uma detecção seja considerada um verdadeiro positivo. Ajustar esse limiar pode ajudar a refinar a precisão e o recall do modelo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experimente diferentes valores para o Confidence Threshold e o IoU Threshold para encontrar o equilíbrio ideal entre detectar rostos com precisão e minimizar falsos positivos. As melhores configurações podem variar dependendo da sua aplicação específica e das características das imagens ou do fluxo de vídeo.

## Conclusão

Parabéns! Você implantou com sucesso um modelo de Detecção de Rosto do SenseCraft AI na sua placa XIAO ESP32S3 Sense, visualizou sua saída e aprendeu como ajustar o desempenho do modelo.

Seguindo as etapas descritas neste tutorial, você pode explorar e experimentar facilmente vários modelos de IA disponíveis no repositório SenseCraft AI no seu XIAO ESP32S3 Sense. A plataforma SenseCraft AI oferece uma interface amigável e uma ampla gama de modelos para escolher, tornando-a acessível tanto para iniciantes quanto para desenvolvedores experientes.

Lembre-se de consultar a documentação e os recursos fornecidos pelo SenseCraft AI e pela placa XIAO ESP32S3 Sense para obter mais informações sobre os modelos suportados, seus recursos e quaisquer opções adicionais de configuração disponíveis.

Sinta-se à vontade para explorar outros modelos, experimentar diferentes configurações e adaptá-los aos seus projetos ou aplicações específicos. As possibilidades são infinitas com a combinação do SenseCraft AI e da placa XIAO ESP32S3 Sense.

Boas experiências e criações com modelos SenseCraft AI no seu XIAO ESP32S3 Sense!

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
