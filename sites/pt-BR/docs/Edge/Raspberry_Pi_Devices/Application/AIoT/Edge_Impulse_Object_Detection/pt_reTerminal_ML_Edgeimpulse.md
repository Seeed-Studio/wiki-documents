---
description: Detecção de objetos com Edge Impulse e reTerminal
title: Detecção de objetos com Edge Impulse e reTerminal
keywords:
  - Edge
  - Aplicativo reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_Edgeimpulse
last_update:
  date: 9/12/2023
  author: Kasun Thushara
createdAt: '2023-09-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_ML_Edgeimpulse/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## Introdução

No cenário digital atual, a integração de tecnologias de IA de borda (edge AI) e IoT (Internet das Coisas) abriu possibilidades empolgantes para desenvolvedores e entusiastas. Uma dessas plataformas poderosas que simplifica a criação de modelos de aprendizado de máquina para dispositivos de borda é o Edge Impulse. Neste guia passo a passo, vamos conduzi-lo pelo processo de instalação do Edge Impulse no seu dispositivo reTerminal e de criação de uma solução local de detecção de objetos.

O que você vai aprender:

- Instalar dependências essenciais para o seu reTerminal.
- Configurar Node.js e npm para o seu projeto.
- Fazer o deploy da ferramenta Edge Impulse Linux CLI.
- Criar e treinar um modelo de detecção de objetos dentro do Edge Impulse.
- Fazer o deploy e testar o seu modelo localmente no dispositivo reTerminal.

Ao final deste guia, você terá um entendimento prático de como aproveitar o poder do Edge Impulse para detecção de objetos em dispositivos de borda como o reTerminal. Então, vamos mergulhar e explorar o empolgante mundo da detecção de objetos local impulsionada por IA!

### Preparação de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>Camera Module V1</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/camera.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse é uma plataforma versátil dedicada a agilizar o desenvolvimento de modelos de aprendizado de máquina voltados para dispositivos de borda, como microcontroladores e sistemas embarcados. Esta solução abrangente simplifica todo o fluxo de trabalho de aprendizado de máquina, incluindo coleta de dados, pré-processamento, treinamento de modelos, deploy e monitoramento, tudo em um ambiente unificado. Um de seus destaques é a interface amigável, que permite coletar e rotular dados com facilidade, além de oferecer uma biblioteca de blocos de processamento de sinais e algoritmos de aprendizado de máquina pré-construídos para um desenvolvimento de modelos eficiente. O Edge Impulse é projetado para desempenho de inferência ideal em dispositivos de borda com recursos limitados, garantindo processamento em tempo real sem depender de conectividade contínua com a internet. Ele é ainda aprimorado por uma integração perfeita com uma grande variedade de plataformas de hardware populares, permitindo que desenvolvedores façam o deploy de modelos com facilidade.

### Preparação de software

Recomendamos instalar a versão mais recente do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo sistema Raspbian OS, siga as etapas descritas neste [guia](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

Depois disso, precisamos configurar a câmera do Raspberry Pi; siga as etapas descritas neste [guia](https://wiki.seeedstudio.com/pt-br/reTerminal-piCam/)

Você vai precisar de uma conta Edge Impulse para começar, então crie uma acessando este [link](https://edgeimpulse.com/). Por padrão, um projeto inicial será criado.

## Instalar dependências no seu dispositivo reTerminal

**Para configurar este dispositivo no Edge Impulse, execute os seguintes comandos um por um**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Conectando ao Edge Impulse

Com todo o software configurado, conecte sua câmera ou microfone ao reTerminal. Você precisará informar o endereço de e-mail, a senha vinculada à sua conta Edge Impulse e um nome para o dispositivo.

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectingdevice.png" /></center>

## Verificando se o seu dispositivo está conectado

É isso! Seu dispositivo agora está conectado ao Edge Impulse. Para verificar, acesse o seu projeto no Edge Impulse e clique em Devices. O dispositivo será listado lá.

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectdevice.PNG" /></center>

## Detectar objetos

### Construindo um conjunto de dados

Você tem a opção de coletar dados da câmera Raspberry Pi conectada diretamente pelo reTerminal ou enviar dados pré-coletados a partir do seu armazenamento local.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/datacollection.png" /></center>

Ao selecionar 'Camera' como o sensor e fornecer um nome de rótulo, você pode iniciar o processo de amostragem de dados.

### Rotulando dados

Todas as suas imagens coletadas ficarão em espera para anotação na "labeling queue". Rotular seus objetos é tão simples quanto arrastar uma caixa em volta do objeto e inserir um rótulo. Em seguida, clique em save label.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/labeling.PNG" /></center>

### Rebalanceando seu conjunto de dados

Para validar a eficácia do seu modelo, é essencial reservar uma parte dos seus dados, geralmente cerca de 20%, como um 'conjunto de teste'. Esses dados não devem ser usados durante o treinamento do modelo, mas apenas para fins de validação. Você pode alternar facilmente entre seus conjuntos de treinamento e de teste usando os dois botões localizados acima do widget 'Data collected'. Se você coletou dados na sua placa de desenvolvimento e atualmente não há dados no conjunto de teste, pode resolver isso navegando até **Dashboard > Perform train/test split.**

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/ReTerminal/ML/split.PNG" /></center>

### Criar um impulse

Neste tutorial, trabalhamos com imagens 96x96, mas é importante observar que o Edge Impulse consegue lidar com outras resoluções, desde que as imagens sejam quadradas. Para configurar isso, siga estas etapas: primeiro, acesse **Create Impulse,** depois defina a **image width** e a **image height** para as dimensões desejadas (por exemplo, 96). Em seguida, escolha **Fit shortest axis** como o **resize mode,** e adicione os blocos **Images** e **Object Detection (Images)**. Por fim, clique em **Save Impulse** para aplicar essas configurações.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/impulse.PNG" /></center>

### Geração de características

Nesta etapa, você realizará as seguintes tarefas:

- Redimensionar todos os dados.
- Aplicar o bloco de processamento a todo o conjunto de dados.
- Gerar uma visualização 3D do seu conjunto de dados completo.
- Clicar em 'Generate features' para iniciar o processo.

Depois disso, o 'Feature explorer' será carregado. Este explorador de características representa um gráfico de todos os dados do seu conjunto de dados. Como as imagens possuem inúmeras dimensões, utilizamos uma técnica chamada 'redução de dimensionalidade' no conjunto de dados antes de visualizá-lo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/generatf.PNG" /></center>

### Treinamento

Na guia '**Object Detection**', você tem a opção de treinar seu conjunto de dados. Para isso, será necessário configurar parâmetros específicos e selecionar o modelo que pretende usar. Neste tutorial, estamos optando pelo modelo FOMO que, de acordo com o site, apresenta uma abordagem revolucionária para executar modelos de detecção de objetos em dispositivos com recursos limitados. FOMO é um algoritmo inovador que traz capacidades de detecção, rastreamento e contagem de objetos em tempo real para microcontroladores, marcando um marco significativo. Notavelmente, o FOMO apresenta uma vantagem de velocidade impressionante, superando o MobileNet SSD em um fator de 30, e consegue operar com menos de 200K de RAM.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/training.PNG" /></center>

Após concluir o processo de treinamento, você receberá uma matriz de confusão semelhante à seguinte.

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/confutionmat.PNG" height="auto"/></center>

### Validando seu modelo

Agora que o modelo está treinado, vamos colocá-lo à prova usando alguns dados de teste. Durante a coleta de dados, dividimos o conjunto em subconjuntos de treinamento e de teste. O modelo foi treinado exclusivamente com os dados de treinamento. Portanto, podemos empregar o conjunto de teste para avaliar quão bem o modelo se comportará em cenários do mundo real. Esta etapa de validação é crucial para garantir que o modelo não tenha se ajustado demais aos dados de treinamento, um problema comum. Para validar nosso modelo, navegue até **Model Testing** e selecione **Classify all**

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/test.png" height="auto"/></center>

### Executando o modelo no seu dispositivo reTerminal

Em um novo terminal em branco, execute a seguinte linha de comando.

```sh
edge-impulse-linux-runner
```

Essa ação fará com que o modelo seja compilado e baixado. Em seguida, ele será executado no seu reTerminal. Se você estiver na mesma rede, poderá acessar uma visualização ao vivo do fluxo da câmera e ver os resultados da classificação diretamente a partir do seu reTerminal. Acesse a URL sugerida pelo dispositivo.

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## Conclusão

Em conclusão, a integração perfeita entre o reTerminal e o Edge Impulse permite que desenvolvedores desbloqueiem todo o potencial da IA de borda. O reTerminal, com seu hardware robusto e capacidades versáteis, serve como uma excelente plataforma para executar soluções de detecção de objetos em tempo real. Quando combinado com o Edge Impulse, que simplifica a criação e a implantação de modelos de aprendizado de máquina em dispositivos com recursos limitados, as possibilidades se tornam ilimitadas. Seja você estiver trabalhando em aplicações de IoT, robótica ou qualquer projeto que exija IA eficiente no dispositivo, essa poderosa sinergia entre o reTerminal e o Edge Impulse abre um mundo de inovação na fronteira da tecnologia.

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
