---
description: Começar_com_o_EcoEye–Embedded_Vision_Camera
title: Comece com o EcoEye–Embedded Vision Camera
keywords:
  - EcoEye–Embedded_Vision_Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_EcoEye_Embedded_Vision_Camera
sku: 101991121
last_update:
  date: 11/24/2023
  author: Yvonne
createdAt: '2023-11-29'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Get_Started_with_EcoEye_Embedded_Vision_Camera/
---


# Introdução ao EcoEye–Embedded_Vision_Camera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/1-101991121-EcoEye-%E2%80%93-Embedded-Vision-Camera-first.jpg"/></div>

EcoEye é uma câmera com capacidades de visão de máquina embarcada em um invólucro portátil e à prova d'água, projetada para implantações remotas. Com base na openMV H7 Plus Cam, é fácil de configurar e flexível para inúmeras aplicações. O sistema interno de gerenciamento e controle de energia permite operação de longo prazo e possibilita a integração de painel solar, inúmeros sensores e outros dispositivos externos. A câmera é amplamente testada em campo, e os resultados são publicados em um artigo científico.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/EcoEye-Embedded-Vision-Camera-p-5843.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Primeiros Passos

Antes de começar este guia e para mantê-lo simples, familiarize-se com o hardware e o software do ecoEye descritos no [User Guide](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf).

### Preparando o Hardware

Abra a câmera ecoEye e insira 3 baterias de íon-lítio 18650 igualmente carregadas, com a mesma capacidade, no compartimento designado, respeitando as marcações de polaridade. Na placa openMV, instale um cartão micro‑SD formatado com pelo menos 8GB de capacidade de armazenamento.  

### Preparando o Software

Baixe e instale o [openMV IDE](https://openmv.io/pages/download) no seu computador. Abra o software e conecte o cabo USB-A para USB-C entre o computador e o conector externo na câmera ecoEye. Após pressionar o botão uma vez, o LED na parte frontal deve piscar verde algumas vezes antes de acender branco por meio segundo. Agora, o computador deve reconhecer o cartão do dispositivo e abrir uma janela com o conteúdo do cartão SD. Você pode agora copiar todos os arquivos de script encontrados [aqui](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip). Ao mesmo tempo, um logo USB deve ter aparecido ao lado do símbolo de plugue no canto inferior esquerdo da interface do IDE. Clique nesse botão para estabelecer a conexão com a câmera. Se for solicitado para atualizar o firmware, clique em yes e siga as etapas para fazê-lo.  

Abra o código ecomain.py e execute-o pressionando o botão verde de play no canto inferior esquerdo. Às vezes ocorrerá um OSError. Basta ignorá-lo e tentar novamente. A câmera agora está rodando em modo contínuo sem salvar nenhuma imagem, mas exibindo-as no frame buffer do IDE. Ao mudar o parâmetro MODE para 2 e executar o script novamente, a câmera salvará todas as imagens capturadas.

Para permitir que a câmera funcione sem necessariamente estar conectada ao computador e ao IDE, o script ecomain.py com parâmetros ajustados para alcançar a aplicação desejada deve ser renomeado para main.py, ainda localizado na raiz do cartão SD. Isso também pode ser feito navegando até Tools > Save open script to OpenMV Cam (as main.py) nas abas do openMV IDE enquanto ainda estiver conectado à câmera.

Ao iniciar uma implantação sem conexão ao IDE, o usuário deve pressionar o botão uma vez para ligar o sistema, e mais uma vez quando o LED frontal acender azul para confirmar o início da execução. Da mesma forma, para parar uma implantação e desligar o sistema, o usuário deve pressionar o botão uma primeira vez e depois novamente quando o LED azul-claro acender (o que pode levar alguns segundos). Um pressionamento longo do botão forçará o desligamento do sistema, mas não é recomendado se não for necessário.

### Crie sua primeira aplicação de detecção de objetos

Para este guia passo a passo, vamos coletar dados usando a câmera ecoEye, treinar um modelo identificando manualmente objetos no conjunto de dados usando Edge Impulse e, por fim, executar o modelo criado na câmera enquanto observamos os resultados.

#### Coletando dados

Coloque a câmera em frente a uma superfície plana de cor única, como uma parede, um quadro branco ou até mesmo virada para baixo sobre a mesa. Conecte-a ao IDE e execute o MODE 0 para ver as imagens capturadas. Se necessário, reposicione a câmera de forma que não apareçam objetos estranhos em frente ao plano de fundo. Enquanto observa a imagem ao vivo no frame buffer, ajuste cuidadosamente o foco girando a lente. Uma vez encontrado o foco perfeito, pare o script e reúna 2 ou 3 tipos diferentes de objetos que você gostaria de classificar.
Agora, mude o parâmetro MODE para 2 e execute o script novamente. As imagens mostradas no frame buffer também são salvas no cartão SD. Mantendo o script em execução, coloque os objetos em frente à câmera em diferentes posições, locais e em diferentes combinações. Depois de reunir cerca de 100 boas imagens, pare o script e redefina a openMV cam (em Tools > Reset) para ver a pasta com todas as imagens salvas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture2.png" alt="pir" width={800} height="auto" /></p>

#### Treinando o modelo

Depois de selecionar cerca de 100 imagens para o modelo, entre na sua conta [Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fprofile%2Fprojects&err=Your%20session%20expired%2C%20please%20log%20in%20again) e crie um novo projeto. Em Data Acquisition no menu da esquerda, envie as imagens selecionadas como um conjunto de dados. Agora, cada imagem individual, tanto no conjunto de treinamento quanto no de teste, deve ser rotulada manualmente clicando nos três pontos ao lado da imagem e selecionando Edit labels. Certifique-se de sempre usar os mesmos nomes para cada tipo de objeto, o que pode ser verificado com o botão de filtro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture3.png" alt="pir" width={800} height="auto" /></p>

Em seguida, navegue até Create impulse no menu à esquerda. Adicione um bloco de processamento do tipo Image e um bloco de aprendizado do tipo Object Detection (Images) e salve o impulso. Depois disso, Images e Object detection, esmaecidos, devem ter aparecido no menu à esquerda em Impulse Design. Na nova aba Images, deixe tudo como está, simplesmente clique nos botões Save parameters e Generate features. Após a conclusão desse processo, o modelo pode ser treinado na aba Object detection deixando, por enquanto, os parâmetros como padrão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture4.png" alt="pir" width={800} height="auto" /></p>

Para testar o desempenho do novo modelo, vá para a aba Model testing no menu à esquerda e clique em Classify all. Isso executará o modelo de detecção de objetos no conjunto de teste que foi rotulado no início, mas não foi usado para treinamento e, portanto, é desconhecido para o modelo. Quando terminar, o resultado mostrará a acurácia do modelo e os objetos classificados incorretamente. Se a pontuação final não for satisfatória, o conjunto de imagens pode ser melhorado ou os parâmetros de treinamento ajustados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture5.png" alt="pir" width={800} height="auto" /></p>

Para exportar o modelo para a câmera ecoEye, navegue até a aba Deployment no menu à esquerda. Procure e selecione a openMV Library antes de clicar em Build. A partir do arquivo zip baixado automaticamente, extraia os arquivos e copie os arquivos labels.txt e trained.tflite para o cartão SD.

#### Executando o modelo

Agora podemos executar a câmera com classificação automática de objetos usando o modelo treinado. No arquivo ecomain.py, altere os parâmetros MODE = 1, sensor_windowing = True, classify_mode = “objects” e indicators = True. Execute o script, prestando atenção para pressionar o botão quando o LED azul acender ou quando o terminal serial imprimir ‘Waiting for second button press...’. O frame buffer agora deve mostrar as imagens capturadas com caixas delimitadoras ao redor de um objeto sempre que o modelo detectar um dos objetos para os quais foi treinado. Essas imagens também são salvas no cartão SD e as detecções com as coordenadas das caixas delimitadoras são salvas em um arquivo csv.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture6.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture8.png" alt="pir" width={800} height="auto" /></p>

Esta aplicação também pode ser executada sem conexão ao IDE apenas renomeando ecomain.py para main.py, desconectando o cabo e iniciando o script com o procedimento de dois pressionamentos do botão.

## Recursos

- **[PDF]** [EcoEye – Embedded Vision Camera Datasheet](https://files.seeedstudio.com/products/101991121/EcoEye%20-%20Embedded%20Vision%20Camera%20datasheet.pdf)
- **[PDF]** [EcoEye – Embedded Vision Camera User Manual](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf)

- **[CODE]** [EcoEye – Embedded Vision Camera User Manual](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
