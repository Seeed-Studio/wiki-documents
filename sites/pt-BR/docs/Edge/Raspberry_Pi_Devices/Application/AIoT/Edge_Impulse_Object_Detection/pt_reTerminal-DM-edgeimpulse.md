---
description: Detecção de objetos com Edge Impulse e reTerminal DM
title: Detecção de objetos com Edge Impulse e reTerminal DM
keywords:
  - Edge
  - reTerminalDM Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-edgeimpulse
last_update:
  date: 9/21/2023
  author: Kasun Thushara
createdAt: '2023-09-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-edgeimpulse/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## Introdução

No cenário digital atual, a integração de tecnologias de IA de borda e IoT (Internet das Coisas) abriu possibilidades empolgantes para desenvolvedores e entusiastas. Uma dessas plataformas poderosas que simplifica a criação de modelos de aprendizado de máquina para dispositivos de borda é o Edge Impulse. Neste guia passo a passo, mostraremos o processo de instalação do Edge Impulse no seu dispositivo reTerminal DM e de criação de uma solução local de detecção de objetos.

O que você irá aprender:

- Instalar dependências essenciais para o seu reTerminal DM.
- Configurar Node.js e npm para o seu projeto.
- Fazer o deploy da ferramenta Edge Impulse Linux CLI.
- Criar e treinar um modelo de detecção de objetos dentro do Edge Impulse.
- Fazer o deploy e testar seu modelo localmente no dispositivo reTerminal DM.

Ao final deste guia, você terá um entendimento prático de como aproveitar o poder do Edge Impulse para detecção de objetos em dispositivos de borda como o reTerminal DM. Então, vamos mergulhar e explorar o empolgante mundo da detecção de objetos local movida por IA!

### Preparação de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse é uma plataforma versátil dedicada a simplificar o desenvolvimento de modelos de aprendizado de máquina feitos sob medida para dispositivos de borda, como microcontroladores e sistemas embarcados. Esta solução abrangente simplifica todo o fluxo de trabalho de aprendizado de máquina, abrangendo coleta de dados, pré-processamento, treinamento de modelos, implantação e monitoramento, tudo em um ambiente unificado. Um de seus recursos de destaque é a interface amigável, que permite aos usuários coletar e rotular dados com facilidade, além de oferecer uma biblioteca de blocos de processamento de sinal pré-construídos e algoritmos de aprendizado de máquina para desenvolvimento eficiente de modelos. O Edge Impulse é projetado para desempenho de inferência ideal em dispositivos de borda com recursos limitados, garantindo processamento em tempo real sem depender de conectividade contínua com a internet. Ele é ainda aprimorado por uma integração perfeita com uma ampla variedade de plataformas de hardware populares, capacitando desenvolvedores a implantar modelos com facilidade.

### Preparação de software

Recomendamos instalar a versão mais recente do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [guia](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).

:::note

Se você não estiver utilizando o reTerminal DM (com Camera & PoE) e desejar configurar a câmera do Raspberry Pi, prossiga seguindo as instruções fornecidas neste [guia](https://wiki.seeedstudio.com/pt-br/reterminal-dm-hardware-guide/#install-camera).

:::

Você precisará de uma conta no Edge Impulse para começar, portanto crie uma acessando este [link](https://edgeimpulse.com/). Por padrão, um projeto inicial será criado.

## Instale dependências no seu dispositivo reTerminal DM

**Para configurar este dispositivo no Edge Impulse, execute os seguintes comandos um por um**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Conectando ao Edge Impulse

Com todo o software configurado, conecte sua câmera ou microfone ao seu reTerminal DM. Você precisará fornecer o endereço de e-mail, a senha vinculada à sua conta Edge Impulse e um nome para o dispositivo.

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectingdevice.PNG" /></center>

## Verificando se o seu dispositivo está conectado

É isso! Seu dispositivo agora está conectado ao Edge Impulse. Para verificar, vá para o seu projeto no Edge Impulse e clique em Devices. O dispositivo será listado ali.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectdevice.PNG" /></center>

## Detectar objetos

### Construindo um conjunto de dados

Você tem a opção de coletar dados da câmera Raspberry Pi conectada diretamente através do reTerminal DM ou de fazer upload de dados pré-coletados a partir do seu armazenamento local.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/datacollection.png" /></center>

Selecionando 'Camera' como sensor e fornecendo um nome de rótulo, você pode iniciar o processo de amostragem de dados.

### Rotulando dados

Todas as suas imagens coletadas serão colocadas em fila para anotação na "labeling queue". Rotular seus objetos é tão simples quanto arrastar uma caixa ao redor do objeto e inserir um rótulo. Em seguida, clique em save label.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/labeling.PNG" /></center>

### Rebalanceando seu conjunto de dados

Para validar a eficácia do seu modelo, é essencial reservar uma parte dos seus dados, geralmente cerca de 20%, como um 'conjunto de teste'. Esses dados não devem ser usados durante o treinamento do modelo, mas apenas para fins de validação. Você pode alternar facilmente entre seus conjuntos de treinamento e teste usando os dois botões localizados acima do widget 'Data collected'. Se você coletou dados na sua placa de desenvolvimento e atualmente não há dados no conjunto de teste, pode resolver isso navegando até **Dashboard > Perform train/test split.**

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/split.PNG" /></center>

### Criar um impulse

Neste tutorial, trabalhamos com imagens 96x96, mas é importante observar que o Edge Impulse pode lidar com outras resoluções, desde que as imagens sejam quadradas. Para configurar isso, siga estas etapas: primeiro, vá para **Create Impulse,** depois defina a **image width** e a **image height** para as dimensões desejadas (por exemplo, 96,160 ou 320). Em seguida, escolha **Fit shortest axis** como o **resize mode,** e adicione os blocos **Images** e **Object Detection (Images)**. Por fim, clique em **Save Impulse** para aplicar essas configurações.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/impulse.PNG" /></center>

### Geração de características

Nesta etapa, você realizará as seguintes tarefas:

- Redimensionar todos os dados.
- Aplicar o bloco de processamento a todo o conjunto de dados.
- Gerar uma visualização 3D de todo o seu conjunto de dados.
- Clicar em 'Generate features' para iniciar o processo.

Depois disso, o 'Feature explorer' será carregado. Esse explorador de características representa um gráfico de todos os dados do seu conjunto. Como as imagens têm inúmeras dimensões, utilizamos uma técnica chamada 'redução de dimensionalidade' no conjunto de dados antes de visualizá-lo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/generatf.PNG" /></center>

### Treinamento

Na guia '**Object Detection**', você tem a opção de treinar seu conjunto de dados. Para isso, será necessário configurar parâmetros específicos e selecionar o modelo que pretende usar. Neste tutorial, estamos optando pelo modelo FOMO, que, de acordo com seu site, introduz uma abordagem revolucionária para executar modelos de detecção de objetos em dispositivos com recursos limitados. FOMO é um algoritmo inovador que traz capacidades de detecção, rastreamento e contagem de objetos em tempo real para microcontroladores, marcando um marco significativo. Notavelmente, o FOMO possui uma vantagem de velocidade notável, superando o MobileNet SSD por um fator de 30, e pode operar com menos de 200K de RAM.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/training.PNG" /></center>

Após concluir o processo de treinamento, você receberá uma matriz de confusão semelhante à seguinte.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/confutionmat.PNG" height="auto"/></center>

### Validando seu modelo

Agora que o modelo está treinado, vamos colocá-lo à prova usando alguns dados de teste. Durante a coleta de dados, dividimos o conjunto em subconjuntos de treinamento e teste. O modelo foi treinado exclusivamente nos dados de treinamento. Portanto, podemos empregar o conjunto de teste para avaliar quão efetivamente o modelo se comportará em cenários do mundo real. Essa etapa de validação é crucial para garantir que o modelo não tenha se ajustado demais aos dados de treinamento, um problema comum. Para validar nosso modelo, navegue até **Model Testing** e selecione **Classify all**

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/test.png" height="auto"/></center>

### Executando o modelo no seu dispositivo reTerminal DM

em um novo terminal em branco execute a seguinte linha de comando.

```sh
edge-impulse-linux-runner
```

Esta ação fará com que o modelo seja construído e baixado. Em seguida, ele será executado no seu reTerminal DM. Se você estiver na mesma rede, poderá acessar uma visualização ao vivo do fluxo da câmera e ver os resultados da classificação diretamente a partir do seu reTerminal DM. Vá para a URL que o dispositivo sugerir.

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## Conclusão

Em conclusão, a integração perfeita entre o reTerminal DM e o Edge Impulse capacita desenvolvedores a liberar todo o potencial da IA de borda. O reTerminal DM, com seu hardware robusto e recursos versáteis, serve como uma excelente plataforma para executar soluções de detecção de objetos em tempo real. Quando combinado com o Edge Impulse, que simplifica a criação e a implantação de modelos de aprendizado de máquina em dispositivos com recursos limitados, as possibilidades se tornam ilimitadas. Esteja você trabalhando em aplicações de IoT, robótica ou qualquer projeto que exija IA eficiente no próprio dispositivo, essa poderosa sinergia entre o reTerminal DM e o Edge Impulse abre um mundo de inovação na fronteira da tecnologia.

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
