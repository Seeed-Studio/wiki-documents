---
description: Configurar Visualização do Web APP
title: Configurar Visualização do Web APP
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Configuring-Web-APP-Visualization
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Configuring-Web-APP-Visualization/
---
# Configurando a Visualização do Web APP

Agora que temos um dispositivo conectado à Helium Network, bem como dados fluindo do dispositivo para a Helium Network e para os Microsoft Azure IoT Hubs, vamos começar a explorar como analisar e visualizar esses dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/192.png" /></div>

## Preparação do ambiente

Para usar esta rotina, faça o download e configure previamente o [Git](https://www.git-scm.com/downloads) e o Azure CLI para o seu computador.

Não entraremos aqui na instalação e configuração do Git, mas focaremos na instalação do Azure CLI para sistemas Windows e MacOS.

A Interface de Linha de Comando do Azure (Azure Command-Line Interface, CLI) é uma ferramenta de linha de comando multiplataforma para se conectar ao Azure e executar comandos administrativos em recursos do Azure. Ela permite a execução de comandos por meio de um terminal usando prompts interativos de linha de comando ou um script.

Para uso interativo, primeiro inicie um shell como cmd.exe no Windows ou Bash no Linux ou macOS, e então emita um comando no prompt do shell. Para automatizar tarefas repetitivas, você reúne os comandos da CLI em um script de shell usando a sintaxe de script do shell escolhido e, em seguida, executa o script.

### instalar -Windows

No Windows, o Azure CLI é instalado por meio de um MSI, que dá acesso à CLI pelo Windows Command Prompt (CMD) ou PowerShell. Ao instalar para o Windows Subsystem for Linux (WSL), pacotes ficam disponíveis para a sua distribuição Linux.

A versão atual do Azure CLI é **2.37.0**. Para informações sobre a versão mais recente, consulte as [notas de versão](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli). Para descobrir a versão instalada e ver se é necessário atualizá-la, execute [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version).

Você também pode instalar o Azure CLI usando o PowerShell. Inicie o PowerShell como administrador e execute o seguinte comando:

:::note
    O PowerShell deve ser executado como administrador.
:::
Inicie o PowerShell como administrador e execute o seguinte comando:

```sh
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

Isso fará o download e instalará a versão mais recente do Azure CLI para Windows. Se você já tiver uma versão instalada, o instalador atualizará a versão existente.

Para instalar uma versão específica, substitua o argumento `-Uri` por `https://azcliprod.blob.core.windows.net/msi/azure-cli-<version>.msi`, alterando o segmento de versão. As versões disponíveis podem ser encontradas nas [notas de versão do Azure CLI](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli).

:::note
Após a conclusão da instalação, você precisará reabrir o PowerShell para usar o Azure CLI.
:::
Agora você pode executar o Azure CLI com o comando `az` tanto no Windows Command Prompt quanto no PowerShell.

### instalar -MacOS

Na plataforma macOS, você pode instalar o Azure CLI com o [gerenciador de pacotes homebrew](https://brew.sh/). O Homebrew facilita manter sua instalação da CLI sempre atualizada. O pacote da CLI foi testado em versões do macOS 10.9 e posteriores.

A versão atual do Azure CLI é **2.34.1**. Para informações sobre a versão mais recente, consulte as [notas de versão](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli). Para descobrir a versão instalada e ver se é necessário atualizá-la, execute [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version).

Você pode instalar o Azure CLI no macOS atualizando as informações do repositório brew e então executando o comando `install`:

```sh
brew update && brew install azure-cli
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/1.jpg" /></div>

:::note
O Azure CLI tem uma dependência no pacote Homebrew `python@3.10`, e irá instalá-lo.
:::

## Fazer login no Microsoft Azure CLI

Na primeira vez que você usar o Microsoft Azure CLI em seu computador, será necessário fazer login nos IoT hubs e digitar `az login` na janela de comando para abrir a janela de login. Neste momento, conclua a operação de login.

Se a CLI conseguir abrir o seu navegador padrão, ela iniciará o [fluxo de código de autorização](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) e abrirá o navegador padrão para carregar uma página de entrada do Azure.

Caso contrário, ela iniciará o [fluxo de código de dispositivo](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code) e informará que você deve abrir uma página de navegador em [https://aka.ms/devicelogin](https://aka.ms/devicelogin) e inserir o código exibido em seu terminal.

Faça login com as credenciais da sua conta no navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/161.png" /></div>

## Conectando o Microsoft Azure CLI ao Microsoft Azure IoT Hub

Os grupos de consumidor fornecem visualizações independentes do fluxo de eventos que permitem que aplicativos e serviços do Azure consumam dados de forma independente do mesmo endpoint do Event Hub. Nesta seção, você adiciona um grupo de consumidor ao endpoint interno do seu IoT hub que o Web APP usará para ler dados.

Os IoT hubs são criados com várias políticas de acesso padrão. Uma dessas políticas é a política de serviço, que fornece permissões suficientes para que um serviço leia e escreva nos endpoints do IoT hub. Execute o seguinte comando para obter uma cadeia de conexão para o seu IoT hub que siga a política de serviço:

```sh
az iot hub connection-string show --hub-name ${YourIotHub} --policy-name service
```

Onde a variável de ambiente `${YourIotHub}` indica o nome do seu Azure IoT Hub, como mostrado abaixo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/157.png" /></div>

A cadeia de conexão deve ser semelhante à seguinte:

```sh
"HostName={YourIotHubName}.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey={YourSharedAccessKey}"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/27.jpg" /></div>

**Anote a cadeia de conexão de serviço**, você precisará dela mais tarde neste tutorial.

:::note
Se por algum motivo você não conseguir instalar o Azure CLI em seu computador, pode considerar executar o bash com o ambiente Azure CLI diretamente a partir do painel dos IoT hubs para ajudá-lo nas próximas etapas.
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/158.png" /></div>

    Você pode inserir diretamente aqui o comando az acima para obter a cadeia de conexão.
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/159.png" /></div>

## Baixar o Framework de Serviço do Web APP

Faça o download da biblioteca correspondente de acordo com o tipo de sensor que você deseja usar.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Endereço para Download</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/lightsensor-Web-APP">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/IMUsensor-Web-APP">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Umidade do Solo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/soil-moisture-Azure-IoT-hub-Web-APP">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gás VOC e eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SGP30-Azure-IoT-hub-Web-APP">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temperatura e Umidade (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SHT40-Azure-IoT-hub-Web-APP">Download</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/VisionAI-Azure-IoT-hub-Web-APP">Download</a></td>
    </tr>
  </tbody></table>

Abra a biblioteca do Web APP no seu editor favorito. A seguir é mostrada a estrutura de arquivos visualizada no VS Code:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/38.jpg" /></div>

Reserve um momento para examinar os seguintes arquivos:

- **Chart-device-data.js** é um script do lado do cliente que escuta o web socket, mantém o controle de cada DeviceId e armazena os últimos 50 pontos de dados recebidos para cada dispositivo. Em seguida, ele associa os dados do dispositivo selecionado ao objeto de gráfico.

- **Index.html** lida com o layout da interface do usuário para a página da web e faz referência aos scripts necessários para a lógica do lado do cliente.

- **Event-hub-reader.js** é um script do lado do serviço que se conecta ao endpoint interno do IoT hub usando a cadeia de conexão e o grupo de consumidor especificados. Ele extrai o DeviceId e o EnqueuedTimeUtc dos metadados das mensagens recebidas e então retransmite a mensagem usando o método de retorno de chamada registrado por server.js.

- **Server.js** é um script do lado do serviço que inicializa o web socket e a classe wrapper do Event Hub. Ele fornece um retorno de chamada para a classe wrapper do Event Hub que a classe usa para transmitir mensagens recebidas para o web socket.

## Configurar variáveis de ambiente para o Web APP

Para ler dados do seu IoT hub, o Web APP precisa da cadeia de conexão do seu IoT hub e do nome do grupo de consumidor por meio do qual deve ler. Ele obtém essas strings do ambiente de processo nas seguintes linhas em **server.js**:

```c
const iotHubConnectionString = process.env.IotHubConnectionString;
const eventHubConsumerGroup = process.env.EventHubConsumerGroup;
```

Haverá dois métodos para esta etapa, então vamos começar pelo mais comum.

- O primeiro método. Defina as variáveis de ambiente na sua janela de comando com os seguintes comandos. Substitua os valores de espaço reservado pela cadeia de conexão de serviço do seu hub IoT e pelo nome do grupo de consumidores que você criou anteriormente. Não coloque aspas nas strings.

```sh
set IotHubConnectionString = YourIoTHubConnectionString
set EventHubConsumerGroup = YourConsumerGroupName
```

- No segundo método, podemos fazer alterações diretamente no código. Ele é adequado para casos em que, por exemplo, adicionar variáveis de ambiente é tedioso no MacOS.

Abra o arquivo **server.js** com um editor e modifique o código de acordo com o nome do grupo de consumidores que você criou e a cadeia de conexão que obtivemos no [**passo2**](https://wiki.seeedstudio.com/pt-br/Configuring-Web-APP-Visualization/#conectando-microsoft-azure-cli-a-microsoft-azure-iot-hub). Consulte a figura a seguir para a modificação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/160.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/29.jpg" /></div>

## Executar o Web APP

Envie o código de acordo com o conteúdo da [wiki anterior](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/#fazer-upload-do-código-enviar-dados-para-helium). Certifique-se de que seu dispositivo esteja em execução e enviando dados.

Na janela de comando, execute as seguintes linhas para baixar e instalar os pacotes referenciados e iniciar o site:

```sh
npm install
npm start
```

Você deverá ver uma saída no console indicando que o Web APP foi conectado com sucesso ao seu hub IoT e está escutando na porta 3000:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/30.jpg" /></div>

## Abra uma página web para ver dados do Azure IoT hub

Abra um navegador em `http://localhost:3000`.

Na caixa de seleção de lista no canto superior esquerdo, selecione o número de ID do seu dispositivo. Aguarde até que o próximo conjunto de dados enviados chegue e você poderá observar o gráfico de linhas das mudanças de dados.

### Exibição em tempo real da imagem do sensor de luz

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/31.png" /></div>

Você também deverá ver uma saída no console mostrando as mensagens que seu Web APP está transmitindo para o cliente do navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/32.jpg" /></div>

### Exibição em tempo real da imagem do sensor IMU

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/176.png" /></div>

Você também deverá ver uma saída no console mostrando as mensagens que seu Web APP está transmitindo para o cliente do navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/177.png" /></div>

### Exibição em tempo real da imagem do sensor de umidade do solo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/188.png" /></div>

Você também deverá ver uma saída no console mostrando as mensagens que seu Web APP está transmitindo para o cliente do navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/187.png" /></div>

### Exibição em tempo real da imagem do sensor SHT40

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/194.png" /></div>

Você também deverá ver uma saída no console mostrando as mensagens que seu Web APP está transmitindo para o cliente do navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/193.png" /></div>

### Exibição em tempo real da imagem do sensor SGP30

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/182.png" /></div>

Você também deverá ver uma saída no console mostrando as mensagens que seu Web APP está transmitindo para o cliente do navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/183.png" /></div>

### Exibição em tempo real da imagem do Grove Vision AI Module

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/201.png" /></div>

Você também deverá ver uma saída no console mostrando as mensagens que seu Web APP está transmitindo para o cliente do navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/199.png" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
