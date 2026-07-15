---
description: Conectar o Sensor S210X ao Microsoft Azure IoT Central via Node-RED
title: Conectar o Sensor S210X ao Microsoft Azure IoT Central via Node-RED
keywords:
  - SenseCAP LoRaWAN Sensor& Microsoft Azure IoT Central
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central
last_update:
  date: 7/26/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central/
---


SenseCAP S210X é uma série de sensores LoRaWAN® sem fio. Ele pode cobrir um alcance de transmissão de 2 km em cenários urbanos e 10 km em cenários de linha de visada, mantendo baixo consumo de energia durante o processo de transmissão. Junto com uma bateria substituível que suporta até 10 anos de uso e um invólucro industrial IP66. Ele suporta temperatura de operação de -40 ~ 85℃ e pode ser implantado em ambientes agressivos. SenseCAP S210X é compatível com o protocolo LoRaWAN® V1.0.3 e pode funcionar com gateway LoRaWAN®. Os usuários podem instalar o dispositivo, vinculá-lo usando o código QR e configurar a rede, então os dados podem ser visualizados a partir do portal SenseCAP, que suporta protocolos IoT populares como HTTP e MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/catalogsearch/result/?q=S210x" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

Neste tutorial, apresentaremos como conectar os Sensores da série S210X ao Microsoft Azure IoT Central via Node-RED.

## SenseCAP & Node-RED

Este capítulo, o primeiro de uma série, orienta você pela instalação e uso do Node-RED e pela chamada da SenseCAP API para se conectar ao Node-RED.

Este capítulo tem como objetivo facilitar para nossos usuários a conexão de dados da plataforma SenseCAP a várias outras plataformas PaaS para um processamento de dados mais aprofundado.

**Node-RED**

Node-RED é uma ferramenta de programação para interligar dispositivos de hardware, APIs e serviços online de maneiras novas e interessantes. Ele fornece um editor baseado em navegador que facilita a conexão de fluxos usando a ampla variedade de nós na paleta, que podem ser implantados em seu runtime com um único clique.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png" alt="pir" width={600} height="auto" /></p>

### Instalar Node.Js

Para instalar o Node-RED localmente, você precisará de uma versão suportada do Node.js.

Atualmente, o Node-RED recomenda o [Node 14.x LTS](https://nodejs.org/en/).

### Instalando o Node-RED com npm

Para instalar o Node-RED, você pode usar o comando npm que vem com o Node.js:

```cpp
sudo npm install -g --unsafe-perm node-red
```

:::info Note
If you are using Windows, do not start the command with "sudo".
:::

Este comando instalará o Node-RED como um módulo global juntamente com suas dependências.
Uma vez instalado como módulo global, você pode usar este comando para iniciar o Node-RED em seu terminal.

```cpp
node-red
```

![IMG_258](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png)

Em seguida, você pode acessar o editor do Node-RED apontando o seu navegador para [http://localhost:1880](http://localhost:1880/).

### Obter a SenseCAP API

Antes de prosseguir para esta seção, certifique-se de que você vinculou seu dispositivo S210x no console SenseCAP.

Faça login no [**console SenseCAP**](https://sensecap.seeed.cc/portal/#/dashboard). Na barra suspensa à direita do nome de usuário na parte superior do dashboard, podemos encontrar as **Informações da Organização**, selecione-a para obter o **ID da Organização**

![IMG_259](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png)

Em seguida, também precisamos obter a chave de API para o SenseCAP. Clique em **Security -> Access API keys** no lado esquerdo do dashboard. Em seguida, crie uma Access Key.

![IMG_260](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png)

Clique no **API ID** que você criou e você obterá suas **Access API keys**, copie-a e o **Organization ID**, nós os usaremos nas etapas posteriores.

![IMG_261](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png)

### Configuração do Node-RED

![IMG_262](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png)

- **Passo 1.** Adicionar um novo nó mqtt-broker

Arraste um nó **mqtt in**, clique duas vezes nele para entrar na página de configuração e então clique no botão editar após **Add new mqtt-broker**.

![IMG_263](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png)

A configuração do mqtt-broker deve ser preenchida da seguinte forma:

Server：openstream.api.sensecap.seeed.cc

Port：1883

Protocol: MQTT V3.1.1

Client ID format：**org-"Organization ID" "Random ID"**

**Organization ID:** Obtido nas suas **Informações da Organização**

**Random ID:** Use seus próprios números e letras minúsculas gerados aleatoriamente.

Exemplo:org-43243\*\*\*23-test

![IMG_264](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png)

Em seguida, preenchemos o campo de opções **Security** com o Nome de Usuário e a Senha:

Username: **org-"Organization ID"**

**Organization ID:** Seu ID de organização. Nós o obtivemos anteriormente

Password: Preencha com as **Access API keys** que obtivemos antes.
` `![IMG_265](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png)

Adicionar **Topic**

Topic: Configurar um tópico em um formato específico determina o tipo de dispositivo e o tipo de dados a serem recebidos.

Formato do Topic:
**/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"**

|OrgID|Você pode encontrar o id nas informações da sua organização|
| :-: | :- |
|DeviceEUI|Você pode encontrar o EUI nas Propriedades Básicas do Dispositivo ou no rótulo do dispositivo|
|Channel|Uma interface física no dispositivo para conectar ao sensor, padrão:1|
|Reserved|Campo reservado|
|MeasurementID|[measurement_list](https://sensecap-docs.seeed.cc/measurement_list.html)|

:::info Note
"+" indica que este campo não tem condições de filtro e pode corresponder a todos. "/+/+/+/+" significa ouvir todos os "DeviceEUI", "Channel", "Reserved", "MeasurementID"
:::

Exemplo：/device_sensor_data/424988\*\*\*\*44/2CF7F\*\*\*0002/+/+/+

Este tópico significa receber todos os dados de sensoriamento remoto do dispositivo atual.

![IMG_266](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png)

- **Passo 2.** Adicionar nó debug

Arraste um nó **debug**, conecte-o ao nó **mqtt-in** e clique em **Deploy**

Após a implantação bem-sucedida, você verá "**Connected**" sob o bloco de construção **mqtt in**, o intervalo de envio de dados é determinado pelo sensor que conectamos. Após receber os dados, a janela de depuração à direita exibirá os dados brutos. ![IMG_267](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png)

## **SenseCAP & Node-RED & Azure IoT Central**

[**Microsoft Azure IoT Central**](https://azure.microsoft.com/en-us/services/iot-central) é uma solução global de IoT SaaS (software como serviço) totalmente gerenciada que facilita a conexão, o monitoramento e o gerenciamento de seus ativos de IoT em escala. É altamente segura, dimensiona com o crescimento do seu negócio, garante que seus investimentos sejam reaproveitáveis e se integra aos seus aplicativos de negócios existentes. Ela também faz a ponte entre seus aplicativos de negócios e os dados de IoT. Por fim, oferece gerenciamento centralizado para reconfigurar e atualizar seus dispositivos.

O conteúdo deste capítulo continuará a usar o Node-RED apresentado anteriormente e facilitará o gerenciamento do conjunto de Sensores S210X no Microsoft Azure IoT Central por meio do uso do Node-RED.

### Configuração do Microsoft Azure IoT Central

- **Passo 1.** Fazer login no Azure IoT Central.

Visite o site [**Azure IoT Central**](https://apps.azureiotcentral.com/home), clique em **Build** no menu de navegação à esquerda e clique em **Custom apps**. ![IMG_268](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png)

- **Passo 2.** Preencha o **Application name** e escolha o **Pricing plan**. A URL da aplicação será criada automaticamente quando você preencher o nome da aplicação.

![IMG_269](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png)

Nota: Se você é um novo usuário do Azure IoT Central, recomendamos que selecione Free, pois isso não consumirá suas taxas.

![IMG_270](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png)

- **Passo 3.** Clique em **Create** para criar o novo aplicativo. Agora você configurou o Azure IoT Central com sucesso!

![IMG_271](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png)

- **Passo 4.** Criar um Device Template

Crie um novo modelo de dispositivo clicando em **Device templates** na barra de menu à esquerda.

![IMG_272](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png)

Dê um nome ao seu modelo de dispositivo e clique em **create**

![IMG_273](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png)

![IMG_274](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png)

- **Passo 5.** Criar um Device

Clique em **Devices -> S2103** na barra de menu à esquerda. ![IMG_275](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png)

![IMG_276](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png)

Depois de criar o dispositivo, você verá o dispositivo que acabamos de criar em **Device**, acesse o dispositivo e clique no botão **Connect** no canto superior esquerdo.

Anote essas informações, pois as usaremos nas próximas etapas.

![IMG_277](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png)

### **Configuração do Node-RED**

- **Passo 1.** Instalar Azure IoT Paletts

Clique na barra de menu superior direita e selecione Settings ![IMG_278](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png)

Pesquise e instale "node-red-contrib-azure-iot-central" em **Paletts - Install** ![IMG_279](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png)

- **Passo 2.** Configurar o nó Azure IoT Central

Arraste o nó **Azure IoT Central** da barra **function** à esquerda, clique duas vezes nele para entrar na página de configuração e então clique no botão editar para editar o nó **Azure IoT Central**

![IMG_280](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png)

A configuração deve ser preenchida da seguinte forma:

Transporte: MQTT

Autenticação: SAS

Scope ID/Device ID/Primary Key: Já obtivemos isso antes

![IMG_281](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png)

- **Etapa 3.** Configurar o nó de função

O envio de dados para o Azure IoT Central precisa seguir um formato de dados específico, portanto é necessário adicionar um bloco de construção de função para processar o formato de dados.

Arraste o nó **function** da barra de funções à esquerda, dê um clique duplo para entrar na página de edição e depois copie o código para **On Message.**

![IMG_282](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png)

**Código**:

```cpp
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4097) {
            body.AirTemperature = value
        } else if (measurementId == 4098) {
            body.AirHumidity = value
        } else if (measurementId == 4100) {
            body.CO2 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

Se você quiser ver as informações de log dos dados, pode adicionar um nó de depuração após o nó de função.

![IMG_283](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png)

Assim que o Sensor S210X começar a ligar e funcionar e começar a enviar dados para o servidor SenseCAP PaaS, poderemos verificar os dados no Azure IoT Central.

### **Apresentação de Dados**

Os dados visíveis na coluna **Raw data** são colocados em **Unmodeled data**, então precisamos analisar os dados de acordo com o código acima.

Adicione a capacidade de que você precisa e, em seguida, clique em **save** e **publish**

![IMG_284](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png)

![IMG_285](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png)

Então podemos verificar claramente os dados brutos enviados pelo sensor. ![IMG_286](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png)

Se você quiser enriquecer sua página de dashboard de dados, também pode configurá-la para ser exibida em Overview.

Clique em **Overview** no menu de navegação à esquerda.

![IMG_287](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png)

Expanda o menu suspenso **starts with devices** e selecione a telemetria que você deseja visualizar.

![IMG_288](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png)

Clique em **Add tile** e você verá o bloco adicionado ao Dashboard do Azure IoT Central.

![IMG_289](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png)

Em seguida, personalize o dashboard de monitoramento dos dados do seu sensor como quiser!

Depois de finalizar as alterações, basta clicar em **save** e **publish**

![IMG_290](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png)

![IMG_291](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png)

Agora você pode visualizar os dados do seu sensor através do seu dashboard personalizado! ![IMG_292](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png)
