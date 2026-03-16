---
description: ODYSSEY - X86J41x5
title: Azure IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-AzureIOT
sku: 102110399,102110398,102110397,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 03/16/2023
  author: Lakshantha
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-AzureIOT/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-AzureIOT/
sku: 102110399
--- -->

# Edge IoT - Enviando Dados de Sensores para a Nuvem

Este tutorial demonstra como ler valores de sensores conectados ao ODYSSEY - X86J41x5 e enviar os dados para o **Microsoft Azure IoT Hub**, onde esses dados podem ser exibidos ou processados para outras aplicações de IoT.

## Recebendo Dados Brutos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/receivingData.gif" /></div>

## Visualização dos Dados

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/visulizeData.jpg" /></div>

## Introdução

[IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) é um serviço da Microsoft Azure que permite ingerir grandes volumes de telemetria dos seus dispositivos IoT na nuvem para armazenamento ou processamento.

## Pré-requisitos

- Instale o [Python 3](https://www.python.org/downloads/windows/) no ODYSSEY - X86J41x5

- Uma conta Microsoft Azure. Se você não tiver uma, crie uma [conta gratuita](https://azure.microsoft.com/en-us/free/?WT.mc_id=A261C142F) antes de começar.

- Baixe e instale o [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest), uma ferramenta de linha de comando para gerenciar recursos do Azure.

Depois de instalar o Azure CLI, abra o `cmd` ou o `Powershell` e execute o comando `az`; você deverá ver uma tela como a abaixo:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/AzureCLI.png" /></div>

## Pré-configurações do Azure CLI

### Fazer login no Azure

Abra o `cmd` ou o `Powershell` e execute o comando `az login`. Uma janela do navegador aparecerá para você entrar na sua conta Microsoft Azure.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/azAcc.png" /></div>

### Adicionando as Extensões Microsoft IoT Azure ao Azure CLI

Execute o seguinte comando para adicionar a Microsoft Azure IoT Extension para Azure CLI à sua instância do Cloud Shell. A IoT Extension adiciona comandos específicos do IoT Hub, IoT Edge e IoT Device Provisioning Service (DPS) ao Azure CLI.

```shell
az extension add --name azure-cli-iot-ext
```

## Criando um IoT Hub

Esta parte descreve como criar um IoT Hub usando o portal do Azure:

1.Faça login no [**portal do Azure**](https://portal.azure.com).

2.Escolha **Create an resource** e, em *Search the Marketplace*, procure por **IoT Hub**.

3.Selecione **IoT Hub** e clique em **Create**.

4.Na guia **Basics**, preencha os campos:

- **Subscription:** Selecione a assinatura a ser usada para o seu hub.

- **Resource Group:** Selecione um grupo de recursos ou crie um novo. Para criar um novo, selecione **Create new** e preencha o nome que você deseja usar.

- **Region:** Selecione a região na qual o seu hub será localizado. Escolha a região que estiver mais próxima de você.

- **IoT Hub Name:** Insira um nome para o seu IoT hub. Este nome deve ser globalmente exclusivo. Se o nome estiver disponível, um ícone de marca de seleção verde aparecerá.

**Nota importante:** o IoT Hub será publicamente descoberto como um endpoint DNS, portanto, garanta que você evite qualquer informação sensível ao nomear o IoT Hub.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHub.jpg" /></div>

1.Selecione **Next: Size and scale** para continuar:

- **Pricing and scale tier:** Selecione **F1: Free tier** por enquanto. Você pode escolher entre vários níveis, dependendo de quantos recursos e quantas mensagens você envia por dia na sua solução.

2.Selecione a guia **Review + create** para revisar as configurações e clique em **Create** para criar seu novo IoT Hub. A criação do IoT Hub pode levar alguns minutos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHubProcess.jpg" /></div>

## Registrar um Dispositivo

Um dispositivo deve ser registrado no seu IoT Hub antes que possa se conectar:

1.Execute o seguinte comando no `cmd` ou no `Powershell` para adicionar a extensão IoT Hub CLI e criar a identidade do dispositivo:

```sh
az iot hub device-identity create --hub-name iot-test-1 --device-id MyPythonDevice
```

### Nota

- `hub-name` -> Substitua `iot-test-1` pelo nome do IoT Hub que você criou.

- `device-id` -> `MyPythonDevice`. Este é o nome do dispositivo que está sendo registrado. No meu caso, MyPythonDevice é o ID do dispositivo.

2.Execute os seguintes comandos para obter a *string de conexão do dispositivo* para o dispositivo que registramos.

```sh
az iot hub device-identity show-connection-string --hub-name iot-test-1 --device-id MyPythonDevice --output table
```

Anote a string de conexão do dispositivo, que se parece com: `HostName={YourIoTHubName}.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey={YourSharedAccessKey}`. Ela será usada mais tarde.

### Nota

- Substitua o seu `hub-name` e `device-id`, os mesmos de acima.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/deviceID.png" /></div>

## Coletando Dados usando Arduino Core

Esta seção simplesmente usa o Arduino core para ler valores de sensores e imprimir as leituras no Monitor Serial, que podem ser lidas usando Python de outro lugar.

1.Siga o Getting Started para baixar, instalar e configurar a **Arduino IDE**.

2.Conecte o fio de sinal de um sensor de luz Grove ao **A0** do ODYSSEY - X86J41x5, além de alimentação e terra. Por favor, consulte o diagrama de pinagem em Getting Started para mais informações.

3.Envie o seguinte código para o ODYSSEY - X86J41x5 usando a Arduino IDE. Lembre-se de selecionar a **Placa** e a **Porta** corretas. Anote a **Porta** aqui, pois ela será usada depois. No meu caso, a porta é `COM4`.

### Código Arduino

```cpp
#define LIGHT A0
#define Serial SerialUSB

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(LIGHT, INPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  int state = analogRead(LIGHT);
  Serial.println(state);

  delay(500);

}
```

4.Abra o **Serial Monitor** na Arduino IDE para verificar se o programa está sendo executado corretamente.

## Enviando Leituras do Sensor de Luz para o Azure IoT Hub

As leituras do sensor de luz são impressas na Serial, e o Python é usado para extrair esses dados e enviá-los para o Azure IoT Hub.

1.Abra o `Powershell` e execute o seguinte comando para instalar as bibliotecas Python necessárias.

```sh
pip install azure-iot-device
pip install pyserial
```

2.Copie o código Python a seguir e salve-o na sua unidade local. Use um editor de texto para fazer as seguintes alterações.

- Substitua o valor da variável `serialPort` pela porta serial que anotamos anteriormente.

- Substitua o valor da variável `CONNECTION_STRING` pela string de conexão do dispositivo que também anotamos anteriormente.

### Código Python

```py
# Copyright (c) Microsoft. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.

import time
import serial


# Using the Python Device SDK for IoT Hub:
#   https://github.com/Azure/azure-iot-sdk-python
# The sample connects to a device-specific MQTT endpoint on your IoT Hub.
from azure.iot.device import IoTHubDeviceClient, Message

# Settings for reading from Arduino Serial
serialPort= "COM4" #Change it to your Serial Port, Check in Arudino IDE 
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)

# The device connection string to authenticate the device with your IoT hub.
# Using the Azure CLI:
# az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
CONNECTION_STRING = "HostName=iot-test-1.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Define the JSON message to send to IoT Hub.
MSG_TXT = '{{"Light": {light}}}'

def iothub_client_init():
    # Create an IoT Hub client
    client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)
    return client

def iothub_client_telemetry_sample_run():

    try:
        client = iothub_client_init()
        print ( "IoT Hub device sending periodic messages, press Ctrl-C to exit" )

        while True:
            # Build the message with simulated telemetry values.
            time.sleep(0.1)
            light = ser.readline().decode("UTF-8")[:-2]
            if light:
              msg_txt_formatted = MSG_TXT.format(light=light)
              message = Message(msg_txt_formatted)

              # Send the message.
              print( "Sending message: {}".format(message) )
              client.send_message(message)
              print ( "Message successfully sent" )
              time.sleep(1)


    except KeyboardInterrupt:
        print ( "IoTHubClient sample stopped" )
        ser.close()

if __name__ == '__main__':
    print ( "IoT Hub Quickstart #1 - Simulated device" )
    print ( "Press Ctrl-C to exit" )
    iothub_client_telemetry_sample_run()
```

3.No `Powershell`, navegue até o diretório em que você acabou de salvar o arquivo Python. Execute o script Python para enviar os dados do sensor ao Azure IoT Hub.

**Nota:** No meu caso, o arquivo Python se chama `SendingData.py`; altere o comando para o nome com que você salvou o arquivo.

```sh
python3 SendingData.py
```

A captura de tela a seguir mostra a saída do envio de dados do sensor para o Azure IoT Hub.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/sendingData.png" /></div>

## Lendo Dados do Azure IoT Hub

A extensão IoT Hub CLI pode se conectar ao endpoint de eventos do lado do serviço no IoT Hub. A extensão recebe as mensagens de dispositivo-para-nuvem enviadas a partir do nosso dispositivo.

Execute o seguinte comando em qualquer terminal e você poderá começar a monitorar as mensagens enviadas ao Azure IoT Hub.

```sh
az iot hub monitor-events --hub-name iot-test-1 --device-id MyPythonDevice
```

### Nota

- Substitua o seu `hub-name` e `device-id`, os mesmos de acima.

A captura de tela a seguir mostra as mensagens enviadas do ODYSSEY - X86J41x5 para o IoT Hub. Esses dados podem ser processados ou exibidos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/recevingData.jpg" /></div>

---

## Visualização em tempo real de dados do sensor usando o Microsoft Power BI

Nesta seção, vamos exibir a leitura do sensor de luz em tempo real usando o [Microsoft Power BI](https://powerbi.microsoft.com/en-us/). Se você não tiver uma conta Power BI, crie uma conta gratuita antes de começar.

**Nota: Certifique-se de ter seguido todas as etapas anteriores e que as mensagens possam ser recebidas com sucesso pelo IoT Hub.**

## Adicionar um grupo de consumidores ao seu IoT Hub

[Consumer groups](https://docs.microsoft.com/zh-cn/azure/event-hubs/event-hubs-features#event-consumers) fornecem visões independentes do fluxo de eventos que permitem que aplicativos e serviços Azure consumam dados de forma independente do mesmo endpoint do Event Hub.

Para adicionar um grupo de consumidores:

1.Faça login no [**portal do Azure**](https://portal.azure.com).

2.Abra seu IoT Hub, selecione **Built-in endpoints**, em **Consumer Groups** insira um nome para criar um novo grupo de consumidores e clique em **Save**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/endpoint.jpg" /></div>

No meu caso, `lightsensor` é o novo grupo de consumidores.

## Criar, configurar e executar um Stream Analytic Job

Para criar um Stream Analytic Job:

3.Faça login no [**portal do Azure**](https://portal.azure.com).

4.Escolha **Create an resource** e, em *Search the Marketplace*, pesquise por **Stream Analytics job**.

5.Selecione **Stream Analytics job** e clique em **Create**.

6.Preencha os campos da seguinte forma e clique em **Create**:

- **Job name:** O nome do job. O nome deve ser globalmente exclusivo. No meu caso, é `light-analytic`

- **Resource group:** Use o mesmo resource group que o seu IoT Hub usa.

- **Location:** Use a mesma localização do seu resource group.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/analytic.jpg" /></div>

## Adicionar uma entrada (Input) ao Stream Analytics job

1.Abra o Stream Analytics job

2.Em **Job topology** clique em **Inputs**.

3.Clique em **Add stream input** -> **IoT Hub**

4.Preencha os campos da seguinte forma:

- **Input alias:** Seu nome de entrada. Pode ser qualquer coisa.

- **IoT Hub:** Escolha o que usamos até agora.

- **Consumer group**: Escolha o que acabamos de criar.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/settings.jpg" /></div>

1.Selecione **Save**.

## Adicionar uma saída (Output) ao Stream Analytics Job

2.Abra o Stream Analytics job

3.Em **Job topology** clique em **Outputs**.

4.Clique em **Add** -> **Power BI**

5.**Authorize** com sua conta Microsoft Power BI.

6.Preencha os campos da seguinte forma:

- **Output alias:** Seu nome de saída. Também pode ser qualquer coisa.

- **Authentication mode:** Escolha User token.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/powerBI.jpg" /></div>

7.Selecione **Save**.

## Configurar a consulta do Stream Analytics job

1.Em **Job topology** clique em **Query**.

2.Substitua `[YourInputAlias]` pelo alias de entrada. No meu caso, é `SensorReadings`.

3.Substitua `[YourOutputAlias]` pelo alias de saída. No meu caso, é `SensorOutput`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBIsettings.jpg" /></div>

## Executar o Stream Analytics job

1.Em **Overview** clique em **Start** -> **Now** -> **Start**. O status do job muda de **Stopped** para **Running**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/run.jpg" /></div>

**Nota: Para começar a obter leituras do sensor, lembre-se de executar o script Python no ODYSSEY - X86J41x5 para enviar dados para a nuvem.**

## Criar e publicar um relatório Power BI para visualizar os dados

1.Faça login na sua conta do [Power BI](https://app.powerbi.com/signupredirect?pbi_source=web).

2.Em **Workplaces** -> **My workspace**, selecione **Datasets** e você deverá ver a planilha de dados que especificou anteriormente.

3.Em **Actions** selecione o **primeiro ícone (Create report)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI1.jpg" /></div>

4.Crie um gráfico de linhas para mostrar em tempo real o valor do sensor de luz ao longo do tempo.

- Em **Visualizations** selecione **Line chart**.

- Em Fields selecione **EventEnqueuedUtcTime**.

- Em Fields selecione **Light**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI2.jpg" /></div>

5.Clique em **Save** para salvar o relatório.

6.Clique em **File** -> **Publish to web** -> **Create embed code** -> **Publish**

Agora você pode visualizar a leitura do sensor em um dashboard via Power BI!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI3.jpg" /></div>

A Microsoft também oferece os [Power BI mobile apps](https://powerbi.microsoft.com/en-us/documentation/powerbi-power-bi-apps-for-mobile-devices/) para visualizar e interagir com seus dashboards e relatórios do Power BI em seu dispositivo móvel.

## Desenvolvimento adicional

Você configurou com sucesso o seu ODYSSEY - X86J41x5 para um dos cenários de IoT, agora pode implementar isso e criar suas próprias soluções de IoT!

*Para mais suporte técnico, visite [Azure IoT](https://azure.microsoft.com/en-us/overview/iot/).*

## Suporte Técnico e Discussão sobre o Produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
