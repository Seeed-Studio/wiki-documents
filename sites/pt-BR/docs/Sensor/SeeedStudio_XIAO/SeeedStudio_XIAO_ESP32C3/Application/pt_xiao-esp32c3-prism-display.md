---
description: Display Prism XIAO usando ESP32C3
title: Display Prism XIAO ESP32C3
keywords:
  - Xiao
  - Prism
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-esp32c3-prism-display
last_update:
  date: 02/01/2024
  author: timo614
createdAt: '2024-02-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-prism-display/
---

# Display Prism XIAO ESP32C3

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


## Primeiros Passos

Se você deseja seguir este tutorial do início ao fim, precisará preparar o seguinte.

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Grove Shield para XIAO <br />com chip de gerenciamento de bateria</th>
      <th>Grove Smart IR Gesture <br />Sensor (PAJ7660)</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

Este projeto usa o ESP32C3 para criar um display tridimensional utilizando um prisma divisor. Este guia explica os passos necessários para construir o gabinete, conectar os componentes eletrônicos associados e instalar o firmware. Documentação adicional é fornecida para as tarefas de atualizar a lista de criptomoedas monitoradas e redimensionar e processar imagens animadas para uso no navegador de imagens.

Etapas Principais

1. [Baixar e imprimir o gabinete em 3D](#Baixar-e-imprimir-o-gabinete-em-3D)
2. [Conectar os componentes eletrônicos associados](#Conectar-os-componentes-eletrônicos-associados)
3. [Configurar o ambiente](#Configurar-o-ambiente)
4. [Configurar o XIAO ESP32C3](#Configurar-o-XIAO-ESP32C3)

Documentação Adicional

1. [Adicionando novas criptomoedas](#Adicionando-novas-criptomoedas)
2. [Redimensionando e processando imagens animadas](#Redimensionando-e-processando-imagens-animadas)

## Baixar e imprimir o gabinete em 3D

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

O gabinete 3D consiste em duas metades projetadas para serem encaixadas por pressão após a montagem das peças internas. Suportes devem ser usados na impressão das peças para garantir que a estrutura seja montada corretamente.

As peças podem ser encontradas no repositório do GitHub e estão disponíveis para visualização pelo visualizador de STL:<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-top.stl<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-bottom.stl<br />

## Conectar os componentes eletrônicos associados

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

O Grove Shield simplifica a configuração do display prism, pois permite o uso de fios simples de protoboard para completar a montagem sem necessidade de solda. O Grove Shield deve ter o segundo conjunto de conectores fêmea soldados nos pinos abertos adjacentes aos pinos do Xiao. Este shield deve ser parafusado nos dois furos disponíveis no gabinete. Isso pode ser um pouco complicado, então pode ser útil colocar os parafusos primeiro e depois abaixar o shield e apertar cada parafuso.

A partir daqui há duas conexões principais:
- Uma conexão i2c ao sensor de gestos
- A conexão spi ao display

Para a conexão i2c, um conector Grove de 4 pinos é usado do shield ao sensor de gestos.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

O gabinete é projetado para permitir que o sensor de gestos seja encaixado firmemente com seu parafuso mantendo-o com segurança contra a parte externa do gabinete. Para posicionar o sensor de gestos corretamente, o lado USB deve ser posicionado primeiro e, uma vez que o corpo esteja nivelado, o parafuso deve ser instalado.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

A conexão spi é um pouco mais complexa, pois requer vários pinos adicionais.

```
3V3 on the Xiao is connected to the display's VCC Pin
GND on the Xiao is connected to the display's GND Pin
D0 on the Xiao is connected to the display's CS Pin
D1 on the Xiao is connected to the display's BL Pin
D2 on the Xiao is connected to the display's DC Pin
D3 on the Xiao is connected to the display's RST Pin
D8 (SCK) on the Xiao is connected to the display's SCL Pin
D10 (MOSI) on the Xiao is connected to the display's SDA Pin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

Com os fios conectados a todos os componentes, o dispositivo pode ser totalmente montado. O gabinete é configurado para permitir um fechamento por encaixe de pressão se impresso com tolerâncias similares.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

Com a montagem concluída, coloque o prisma sobre a tela.

## Configurar o ambiente

A abordagem mais fácil para configurar um ambiente local é usar o Visual Studio Code, pois ele simplifica a configuração da máquina.

- Clone o repositório do GitHub: https://github.com/Timo614/xiao-prism-buddy
- Abra o repositório no Visual Studio Code
- Instale a extensão ESP-IDF
- Instale o ESP-IDF 5.0.4
- Defina o ESP-IDF Espressif Device Target como esp32c3
- Configure as variáveis de ambiente para sua rede wifi (veja o passo abaixo)
- Compile, grave e monitore seu dispositivo

## Configurar o XIAO ESP32C3

O próximo passo para preparar sua aplicação é configurar suas credenciais para a rede wifi.

Pressione `Ctrl` + `Shift` + `P` para abrir o menu rápido e digite `menuconfig`. Isso filtrará a lista para incluir uma entrada para `ESP-IDF: SDK Configuration editor (Menuconfig)`.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

Neste menu, defina um nome de rede wifi e senha para acessá-la.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

## Adicionando novas criptomoedas

O Xiao Prism Buddy pode ser modificado para exibir diferentes criptomoedas, pois é alimentado pelo CoinGecko. O CoinGecko oferece um nível gratuito para sua API que permite acesso com limitações de taxa aos usuários.

A aplicação acessa o endpoint `/simple/price` a cada 15 minutos, atualizando um conjunto de criptomoedas configuradas. A moeda usada pela chamada é configurável via o arquivo `config.h` [no repositório](https://github.com/Timo614/xiao-prism-buddy/blob/main/main/config.h#L26) juntamente com o símbolo de moeda exibido no aplicativo. A [documentação da API](https://www.coingecko.com/api/documentation) pode ser consultada para mais informações sobre a chamada em si.

O processo para adicionar novas criptomoedas é um pouco complexo atualmente, mas pode ser realizado nas seguintes etapas:

1. Atualize a contagem total de criptomoedas para refletir a contagem correta (este valor fixo é usado para percorrer as páginas)
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29
2. No arquivo de modelo de criptomoeda, pesquise uma das criptomoedas existentes (ex: bitcoin) e adicione uma nova entrada em cada segmento de código associado (inicialização de dados, análise de resposta do coingecko, string de requisição GET do coingecko, etc.)
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/model/prism_cryptocurrency.c
3. Atualize a estrutura de dados da view de criptomoeda para refletir a nova criptomoeda https://github.com/Timo614/xiao-prism-buddy/blob/main/main/view_data.h#L54
4. Na lógica do controlador, pesquise uma criptomoeda existente (ex: bitcoin) e copie a lógica associada para lidar com dados de eventos e renderização https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp
5. Forneça um arquivo PNG de tamanho adequado para a nova criptomoeda, use o LVGL Online Image Converter para converter o PNG em um arquivo C e referencie no controlador conforme necessário acima https://lvgl.io/tools/imageconverter

## Redimensionando e processando imagens animadas

Uma limitação ao trabalhar com um microcontrolador é a falta de flash disponível. Arquivos GIF ocupam uma quantidade considerável de flash, o que torna sua inclusão mais difícil. Um conjunto de processos foi seguido para converter as imagens usadas na aplicação, documentado aqui para o caso de outros desejarem realizar as mesmas etapas para alterar as imagens do navegador de imagens por imagens de sua própria escolha.

1. Selecione uma imagem animada adequada. Idealmente algo que seja transparente, configurado para repetir em loop e com dimensões razoáveis. Para facilitar o processo, descobri que procurar especificamente por arquivos Lottie é útil. Para a aplicação, consegui encontrar várias imagens úteis em https://lottiefiles.com/
2. Use um conversor de Lottie para GIF para converter o arquivo Lottie em um arquivo GIF transparente (como https://lottiefiles.com/lottie-to-gif)

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. Usando um editor de GIF de sua escolha, faça as seguintes modificações (descobri que a ferramenta online https://ezgif.com oferece essas funcionalidades em seu conjunto de otimização para GIFs, que usei para os fins desta aplicação): 

3.1. Diminua o número de quadros entre os frames até que restem apenas cerca de 20 quadros

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. Redimensione a imagem para aproximadamente 100x100 ou menos

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. Reduza a velocidade da imagem, pois sem os quadros adicionais ela ficará extremamente rápida 

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. Reduza a composição de cores do GIF para diminuir seu tamanho

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

3.5. Comprima ainda mais o GIF conforme necessário

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

4. Use o [Conversor de Imagens Online LVGL](https://lvgl.io/tools/imageconverter) para converter o arquivo GIF em um array C conforme a [documentação do LVGL.](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array) Observação: `Select "Raw" color format and "C array" Output format.`

Com esses passos seguidos, você terá um arquivo com tamanho reduzido, mas ainda com uma imagem GIF eficaz processada para exibição no dispositivo Prism. A abordagem mais fácil é substituir a imagem existente de fogo ou melancia para testes.

## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


