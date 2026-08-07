---
sidebar_position: 2
description: Como usar um modelo para Grove Vision AI V2
title: Usando um modelo para Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2/
---

# Usando um modelo para Grove Vision AI V2

SenseCraft AI é uma plataforma poderosa que oferece uma ampla variedade de modelos de IA compatíveis com vários dispositivos, incluindo o Grove Vision AI V2. O Grove Vision AI V2 é um módulo de visão de IA completo que combina câmera, processador e recursos de IA, facilitando a integração de aplicações de visão computacional em seus projetos. Neste tutorial, vamos guiá-lo pelo processo de uso de um modelo do SenseCraft AI no Grove Vision AI V2 e de visualização da saída do modelo. Também exploraremos alguns conceitos e configurações importantes para ajudar você a entender e otimizar o desempenho do modelo.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte:

- **Grove Vision AI V2**: Certifique-se de que você tem o módulo Grove Vision AI V2 pronto e devidamente conectado à sua placa de desenvolvimento ou computador.

- **Módulo de Câmera OV5647-62 FOV para Raspberry Pi 3B+4B**: Usado para entrada de imagem.

- **Cabo USB-C**: Você precisará de um cabo USB para conectar o módulo Grove Vision AI V2 ao seu computador para programação e alimentação de energia.

- **Acesso à página da web do repositório de modelos SenseCraft AI**: Certifique-se de ter uma conexão de internet estável e de conseguir acessar o site do SenseCraft AI.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>Módulo de Câmera OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Etapa 1. Filtrando modelos para Grove Vision AI V2

Abra o navegador da web e acesse o repositório de modelos do SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Acesso direto com um clique 🖱️</font></span></strong>
    </a>
</div><br />

A página do repositório de modelos exibe uma ampla variedade de modelos de IA disponíveis para diferentes dispositivos e aplicações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

Na barra lateral esquerda da página da web, localize a seção **Supported Devices**. Na lista de dispositivos, clique em **Grove - Vision AI V2** para filtrar os modelos compatíveis com o seu dispositivo específico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

Esta etapa garante que você veja apenas os modelos que podem ser implantados e executados no módulo Grove Vision AI V2.

## Etapa 2. Escolher um modelo

Para fins deste tutorial, usaremos o modelo **Person Detection** como exemplo. No entanto, sinta-se à vontade para explorar e experimentar outros modelos com base em seus interesses e requisitos.

Clique no modelo **Person Detection** para abrir sua página dedicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

Na página do modelo, você encontrará informações detalhadas sobre o modelo, incluindo sua descrição, precisão do modelo (Model Precision) e formato do modelo (Model Format).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

Na página do modelo, clique no botão **Deploy Model** localizado na parte superior da página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

Essa ação iniciará o processo de implantação do modelo selecionado, preparando-o para ser baixado e executado no seu módulo Grove Vision AI V2.

## Etapa 3. Conectar seu dispositivo

Após implantar o modelo, clique no botão **Connect Device** que aparece abaixo da página de implantação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

Uma nova página será aberta; neste ponto, conecte o seu Grove Vision AI V2 ao computador por meio de um cabo USB-C.

Na página de conexão do dispositivo, você verá um resumo das informações do modelo, incluindo seu nome e ID do modelo. Revise os detalhes com atenção para garantir que o modelo correto esteja selecionado para o seu Grove Vision AI V2. Se as informações estiverem corretas, clique no botão **Confirm** para prosseguir com a implantação do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

Após confirmar as informações do modelo, uma janela será exibida pedindo que você selecione a porta serial do seu módulo Grove Vision AI V2. A porta serial é o canal de comunicação entre o computador e o módulo Grove Vision AI V2. Escolha o número de porta correto correspondente ao seu Grove Vision AI V2. Se não tiver certeza, consulte o gerenciador de dispositivos do seu sistema operacional ou a documentação do módulo para identificar a porta correta.

Clique no botão **Connect** para estabelecer a conexão entre o computador e o módulo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 4. Upload do modelo

Depois que a conexão for estabelecida, o modelo selecionado começará a ser baixado para o seu módulo Grove Vision AI V2. O processo de upload do modelo pode levar aproximadamente de 3 a 5 minutos, dependendo do tamanho do modelo e da velocidade da sua conexão com a internet. Durante esta etapa, os arquivos e dependências necessários do modelo são transferidos para o módulo Grove Vision AI V2, preparando-o para executar o modelo de IA localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 5. Pré-visualização do modelo

Após o upload bem-sucedido do modelo, o recurso de pré-visualização será iniciado automaticamente. A janela de pré-visualização exibirá um vídeo em tempo real da câmera do seu Grove Vision AI V2, juntamente com os resultados de detecção do modelo sobrepostos ao vídeo. No caso do modelo Person Detection, você verá caixas delimitadoras desenhadas ao redor das pessoas detectadas no fluxo de vídeo. Cada caixa delimitadora representa uma pessoa que o modelo identificou. O recurso de pré-visualização permite que você veja a saída do modelo em tempo real, fornecendo um retorno visual imediato sobre o desempenho dele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## Ajuste fino do modelo (opcional)

1. Se você quiser otimizar o desempenho do modelo ou adaptá-lo ao seu caso de uso específico, pode ajustar as configurações do modelo usando as opções disponíveis abaixo da seção de pré-visualização.

2. Dois parâmetros importantes que você pode ajustar são o "Confidence Threshold" e o "Intersection over Union (IoU) Threshold".

   - **Confidence Threshold**: Esse valor determina o nível mínimo de confiança necessário para que o modelo considere uma detecção como válida. Um limiar de confiança mais alto resultará em menos detecções, porém com maior certeza, enquanto um limiar mais baixo permitirá mais detecções, mas poderá incluir alguns falsos positivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU é uma métrica que mede a sobreposição entre a caixa delimitadora prevista e a caixa delimitadora de referência (ground truth). Ela é usada para determinar a precisão da detecção de objetos. O limiar de IoU define o valor mínimo de IoU necessário para que uma detecção seja considerada um verdadeiro positivo. Ajustar esse limiar pode ajudar a refinar a precisão e o recall do modelo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experimente diferentes valores para o Confidence Threshold e o IoU Threshold para encontrar o equilíbrio ideal entre detectar pessoas com precisão e minimizar falsos positivos. As melhores configurações podem variar dependendo da sua aplicação específica e das características das imagens ou do fluxo de vídeo.

## Conclusão

Parabéns! Você implantou com sucesso um modelo SenseCraft AI Person Detection no seu módulo Grove Vision AI V2, visualizou sua saída e aprendeu como ajustar o desempenho do modelo.

Seguindo as etapas descritas neste tutorial, você pode facilmente explorar e experimentar vários modelos de IA disponíveis no repositório SenseCraft AI no seu módulo Grove Vision AI V2. A plataforma SenseCraft AI oferece uma interface amigável e uma ampla variedade de modelos para escolher, tornando-a acessível tanto para iniciantes quanto para desenvolvedores experientes.

Lembre-se de consultar a documentação e os recursos fornecidos pelo SenseCraft AI e pelo módulo Grove Vision AI V2 para obter mais informações sobre os modelos compatíveis, seus recursos e quaisquer opções adicionais de configuração disponíveis.

Sinta-se à vontade para explorar outros modelos, experimentar diferentes configurações e adaptá-los aos seus projetos ou aplicações específicas. A combinação do SenseCraft AI e do módulo Grove Vision AI V2 abre um mundo de possibilidades para aplicações de visão computacional.

Boas experiências e criações com os modelos SenseCraft AI no seu Grove Vision AI V2!

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
