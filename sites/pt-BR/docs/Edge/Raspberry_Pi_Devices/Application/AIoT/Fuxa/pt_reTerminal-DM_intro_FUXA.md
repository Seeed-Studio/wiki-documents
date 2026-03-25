---
description: Introdução ao FUXA
title: Introdução ao FUXA - Ferramenta SCADA Baseada na Web
keywords:
  - reTerminal Dm
  - Introdução
  - SCADA
  - Industrial
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM_intro_FUXA
last_update:
  date: 1/27/2024
  author: Kasun Thushara
createdAt: '2024-01-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM_intro_FUXA/
---

## O que é SCADA?

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**Supervisory Control and Data Acquisition (SCADA)** é um sistema crítico em ambientes industriais projetado para monitorar e controlar processos. Ele funciona como uma **plataforma centralizada que coleta dados em tempo real de vários sensores e dispositivos em toda a rede industrial**. O SCADA permite que os operadores **visualizem, analisem e respondam a esses dados, facilitando uma tomada de decisão eficiente**. Além disso, oferece **recursos de acesso e controle remoto, permitindo que os operadores gerenciem processos a partir de um local central**. A integração do SCADA aumenta a eficiência, a segurança e a confiabilidade gerais das operações industriais, fornecendo uma visão abrangente e controle de todo o sistema.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA é um software robusto baseado na web, que permite a criação e implantação rápidas de sistemas SCADA, HMI, Dashboard ou IIoT escaláveis. Com o FUXA, você tem a capacidade de criar visualizações de processos contemporâneas adaptadas às suas máquinas, exibindo dados em tempo real e controlando instrumentos em plantas industriais automatizadas.

## Primeiros Passos

Antes de iniciar este projeto, talvez seja necessário preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de software

Recomendamos instalar a versão **Bullesye** do sistema operacional Raspberry Pi 64 bits a partir do site oficial. Se você preferir instalar um novo sistema Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/)

## Instalando o FUXA no reTerminal DM

:::note

É necessário ter instalada a Versão 18 do Node. Execute os comandos abaixo, um por um, no terminal.

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64

sudo cp -R * /usr/local/

node -v

npm -v

```

**Em seguida, instale o FUXA a partir do NPM**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```

A interface do FUXA ficará disponível usando a URL: **`http://localhost:1881`**.

Em princípio, o servidor web FUXA disponibiliza duas páginas:

- Visualização para o usuário final **`http://localhost:1881/home`**
- Editor para projeto e design **`http://localhost:1881/editor`**

## Como adicionar os dispositivos e tags?

Para estabelecer uma conexão com um dispositivo, o primeiro passo é obter as credenciais necessárias do dispositivo. O FUXA oferece suporte a uma variedade de dispositivos, incluindo Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT e Ethernet/IP (Allen Bradley). Depois de conectado a um dispositivo, você pode prosseguir para configurar assinaturas para valores em tempo real, Tags, Sensores e muito mais.

**Passo 1**

Navegue até o menu de configurações e selecione "Connections" para acessar as configurações do dispositivo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**Passo 2**

Clique no ícone "+" localizado na parte inferior da tela.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**Passo 3**

Neste exemplo, vamos conectar um servidor MQTT. Dependendo do tipo do seu dispositivo (Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT ou Ethernet/IP), escolha o tipo de conexão apropriado.

**Para mais detalhes** [Clique aqui](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

Selecione o tipo de dispositivo, defina o intervalo de pesquisa para o número de segundos desejado e ative-o. Em seguida, forneça as credenciais necessárias para o servidor, incluindo o endereço, ID do cliente, nome de usuário e senha.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## Selecionar Tags

**Passo 1**

Em seguida, você verá um indicador verde confirmando a conexão bem-sucedida com o servidor MQTT. Depois disso, clique no ícone de anexar.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**Passo 2**

Clique no ícone "+" para adicionar um broker MQTT. Assine os tópicos relevantes e, em seguida, prossiga clicando no ícone de pesquisa.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**Passo 3**

Depois disso, escolha o tópico desejado da lista para assinatura. Forneça um nome e clique em "Subscribe". Você tem a flexibilidade de adicionar vários tópicos para assinatura.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

Para publicar um tópico, você precisa especificá-lo. Forneça um nome para identificação e especifique o tópico.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

Depois disso, você terá uma lista de tópicos, permitindo escolher se deseja publicar ou assinar.

## Ajustar o valor enviado ao dispositivo final usando o controle deslizante

Neste exemplo, vamos vincular os controladores à tag do dispositivo. A aba Control oferece vários recursos para inserir valores e, neste caso, usaremos um controle deslizante. O controle deslizante pode ser personalizado para atender às suas necessidades específicas.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## Exibindo dados dos dispositivos

No seu sistema, pode haver valores de sensores a serem exibidos. Para isso, você pode utilizar ferramentas como Circular Gauge, Bar Gauge etc. Para o propósito desta demonstração, utilizaremos o Circular Gauge, que pode ser encontrado na aba Controls.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

Em seguida, você encontrará uma interface de usuário interativa para modificar o seu medidor circular. Escolha a tag e personalize-a de acordo com suas preferências. Você tem a opção de dividi-lo em subdivisões, atribuir cores a essas divisões e até alterar a posição do texto, entre outros recursos de personalização.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## Adicionar elementos de engenharia de processos

Nesta seção, você encontrará uma grande variedade de componentes de engenharia de processos, como **bombas, motores, sopradores, tanques, misturadores** e muito mais. Para nossa demonstração, vamos nos concentrar em definir as cores de ligado e desligado para uma bomba. Basta selecionar a tag relevante e especificar as cores para as situações de ligado e desligado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## Como animar um tubo

Primeiro, você desenha a forma do tubo e depois define a ação vinculando a Device-Tag (Variável) à animação.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## Como adicionar um gráfico

Para adicionar um controle de gráfico a uma View, vá ao editor e selecione a View.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## Como adicionar um alarme

Para adicionar um alarme, você precisa navegar até as configurações na janela do editor e selecionar **Alarms**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

Em seguida, há algumas opções para configurar alarmes: High-High, High, Low e Messages. Em **High-High**, podemos definir o valor de limite e configurar alarmes. Em **High,** quando um valor excede uma determinada faixa, podemos definir alarmes entre dois pontos críticos. **Message** é uma notificação que aparece e desaparece quando um valor atinge um determinado limite. **Low** é acionado quando os dados do sensor caem abaixo de um certo nível, por exemplo, quando o nível de líquido do tanque está baixo. Também podemos definir alarmes para dois pontos de ajuste críticos nesse cenário. Neste exemplo, demonstraremos o funcionamento dos alarmes **High-High** e **Message** de forma excepcional.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

Para visualizar os alarmes, talvez seja necessário ajustar um pouco o layout, pois ele fica oculto por padrão. Para isso, vá em **Layout** e navegue até **Header Navigation Bar**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

Em seguida, certifique-se de que o **Alarms notification mode** esteja definido como **fixed** e o **Info notification mode** também esteja definido como **fixed.** Essa configuração permite visualizar as notificações de alarme ao operar o sistema SCADA.

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## Demonstração

Nesta demonstração abrangente, a configuração inclui três tanques, sendo dois deles preenchidos com várias soluções. Além disso, há duas válvulas e bombas independentes para transferir as soluções para um tanque de mistura. Após o processo de mistura, uma válvula separada é usada para obter a solução resultante. Durante toda essa operação, a temperatura do tanque de mistura é monitorada continuamente.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

Estendemos nossa sincera gratidão à **frangoteam** pelo apoio e orientação durante toda a criação deste wiki. Para mais detalhes sobre o projeto FUXA, consulte a guia de recursos abaixo.

## Recursos

- **[Web Page]** [Documentação Oficial do FUXA](https://github.com/frangoteam/FUXA/wiki)

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
