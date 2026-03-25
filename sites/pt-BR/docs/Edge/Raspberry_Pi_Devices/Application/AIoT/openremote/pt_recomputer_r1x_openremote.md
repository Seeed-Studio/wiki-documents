---
description: OpenRemote é uma plataforma IoT totalmente open-source que simplifica a conexão de dispositivos em rede com aplicativos móveis e web. Com a capacidade de implantar em dispositivos alimentados por Raspberry Pi como o Recomputer R1000 e R1100, o OpenRemote fornece uma solução de borda flexível para gerenciar e controlar dispositivos IoT no seu ambiente
title: Implantando OpenRemote no reComputer R1x para Gerenciar Dispositivos IoT na Borda
keywords:
  - IIoT
  - OpenRemote
  - Raspberry-Pi
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /openremote_r1x00
last_update:
  date: 9/30/2025
  author: Kasun Thushara
createdAt: '2025-09-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/openremote_r1x00/
---

## Introdução

[OpenRemote](https://openremote.io/) é uma plataforma IoT open-source projetada para simplificar a conexão e o gerenciamento de dispositivos em rede. No coração do sistema está o Manager, um aplicativo Java headless que atua como um broker de contexto IoT, capturando e gerenciando os estados dos ativos em tempo real. Por meio de modelagem dinâmica de ativos, você pode representar vários componentes do seu ambiente — como edifícios, salas e sensores — adaptando-o às suas necessidades específicas. Regras escritas em Groovy, JavaScript ou JSON disparam ações com base em mudanças de estado de ativos ou sequências de eventos. Essas regras podem, por exemplo, notificar usuários quando certos limites são atingidos, como quando a umidade aumenta em uma sala. A plataforma oferece suporte a dispositivos em rede por meio de Agents, que fazem interface com APIs de terceiros e protocolos de serviço, e podem estar co-localizados com o manager ou instalados em gateways de borda. Ao implantar o OpenRemote em dispositivos Recomputer R1000 e R1100 alimentados por Raspberry Pi, você pode gerenciar seu ecossistema IoT na borda, proporcionando controle eficiente e local sobre seus dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Instalando Docker e Docker-Compose

Siga estas etapas para instalar Docker e Docker-Compose no seu sistema Ubuntu:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremoter11.jpg" alt="pir" width={600} height="auto" /></p>

**1. Atualizar Pacotes do Sistema**

Primeiro, atualize a lista de pacotes e faça upgrade dos pacotes instalados para garantir que o sistema esteja atualizado.

```bash
sudo apt update
sudo apt upgrade
```

**2. Instalar Docker**

Em seguida, faça o download e instale o Docker usando o script de instalação oficial. Isso instalará automaticamente o Docker e todas as suas dependências.

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. Adicionar Seu Usuário ao Grupo Docker**

Por padrão, o Docker requer privilégios de root. Para executar comandos Docker sem `sudo`, adicione seu usuário ao grupo Docker:

```bash
sudo usermod -aG docker ${USER}
```

Após executar este comando, faça logout e login novamente, ou reinicie o sistema para que as alterações entrem em vigor.

**4. Reiniciar o Sistema**

Reinicie o sistema para garantir que as alterações entrem em vigor e que seu usuário seja adicionado ao grupo Docker.

```bash
sudo reboot
```

**5. Testar a Instalação do Docker**

Após reiniciar, verifique a instalação do Docker executando a imagem `hello-world`, o que confirmará que o Docker está funcionando corretamente.

```bash
docker run hello-world
```

**6. Instalar Docker-Compose**

Por fim, instale o Docker-Compose, que é uma ferramenta para definir e executar aplicações Docker multi-contêiner. Para instalá-lo, execute:

```bash
sudo apt install docker-compose
```

## Instalando OpenRemote no Recomputer R1000 / R1100

**1. Baixar o Arquivo Docker Compose**

Busque o arquivo oficial `docker-compose.yml` diretamente do repositório OpenRemote:

```bash
wget https://raw.githubusercontent.com/openremote/openremote/master/docker-compose.yml
```

**2. Navegar até o Diretório**

Acesse o diretório onde o arquivo YAML está localizado:

```bash
cd /path/to/yaml
```

**3. Fazer Pull das Imagens Docker**

Faça o download das imagens Docker necessárias:

```bash
docker-compose pull
```

**4. Iniciar o OpenRemote**

Execute o OpenRemote usando o Docker Compose:

```bash
docker-compose -p openremote up
```

Isso iniciará o OpenRemote Manager e os serviços de suporte.

**5. Acessar o OpenRemote**

Depois de iniciado, você pode fazer login no OpenRemote Manager com as credenciais padrão:

- **Username:** `admin`
- **Password:** `secret`

Agora você tem o OpenRemote em execução no seu Recomputer R1000 / R1100 como uma **plataforma IoT de borda** para gerenciar e controlar seus dispositivos conectados.

## Trabalhando com o Protocolo HTTP

Siga estas etapas para integrar a OpenWeatherMap API com o OpenRemote no seu Recomputer R1000 / R1100. Este guia aborda como criar um Agent para os dados de clima, vinculá-lo a um asset e configurar as definições.

### Obter a Chave de API do OpenWeatherMap

Para usar a OpenWeatherMap API, você precisa de uma chave de API gratuita. Registre-se para uma conta gratuita em [OpenWeatherMap](https://openweathermap.org/) e obtenha sua chave de API.

### Criar o Agent

**Criar o HTTP API Agent**  

- Navegue até a página **Assets**.
- Clique no ícone **+** na parte superior da lista de assets à esquerda para adicionar um novo **Agent** ou **Asset**.
- Na caixa de diálogo que aparece, selecione **HTTP Agent** na lista.
- **Name:** `HTTP API Agent`
- Clique em **Add**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote2.png" alt="pir" width={800} height="auto" /></p>

O agent agora está criado com atributos pré-configurados. Você precisará configurá-lo para se conectar à OpenWeatherMap API.

### Configurar o HTTP API Agent

Agora que o HTTP API Agent foi criado, configure-o com os seguintes detalhes:

- **Base URI:** `https://api.openweathermap.org/data/2.5/`  
  *(Não se esqueça de enviar o valor clicando no botão de envio à direita ou pressionando Enter.)*

- **Request Query Parameters:**  
  Insira a chave de API da sua conta OpenWeatherMap e defina os parâmetros da seguinte forma:

```json
{
   "appid": ["YOUR_API_KEY"],
   "q": ["Rotterdam,nl"],
   "units": ["metric"]
}
```

Clique em **Save** para confirmar a configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote3.png" alt="pir" width={800} height="auto" /></p>

### Criar o Asset de Clima

**Adicionar um Novo Asset de Clima**

- Clique no ícone **+** para adicionar um asset.
- Selecione **Weather Asset** na lista.
- **Name:** `Weather Rotterdam`
- Clique em **Add**.

O asset de clima agora aparecerá na lista como um filho do HTTP API Agent. Você pode alterar seu pai se desejar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote4.png" alt="pir" width={800} height="auto" /></p>

### Adicionar os Links do Agent

**Modificar a Configuração do Asset**
Vá para o **Modify Mode** clicando no botão de alternância no topo da página de assets. Nesse modo, você pode alterar os atributos de um asset e configurar suas definições.

### Configurar o Atributo de Umidade

- Expanda o atributo **humidity**.
- Clique em **Add configuration item** e selecione **Agent link**.
- Selecione o **HTTP API Agent**.
- Adicione os seguintes parâmetros:

  - **Polling millis:** `60000` (consulta a cada minuto)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.humidity`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote5.png" alt="pir" width={800} height="auto" /></p>

### Configurar o Atributo de Temperatura

- Expanda o atributo **temperature**.
- Clique em **Add configuration item** e selecione **Agent link**.
- Selecione o **HTTP API Agent**.
- Adicione os seguintes parâmetros:

  - **Polling millis:** `60000` (consulta a cada minuto)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.temp`

Clique em **Save** no canto superior direito para aplicar essas alterações.

### Visualizar Dados de Clima em Tempo Real

Depois de adicionar os atributos, mude para o **View Mode** para ver os dados de clima em tempo real. Agora você tem a temperatura e umidade atuais de Rotterdam vinculadas ao asset de clima.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote1.png" alt="pir" width={800} height="auto" /></p>

## Agente MQTT com Integração de Gateway LoRaWAN ChirpStack

Este tutorial irá guiá-lo pelo processo de integração de um MQTT Agent com o ChirpStack e configurá-lo no seu OpenRemote Manager para uso com dispositivos como os sensores Dragino LHT65 e SenseCap S210x. Antes de prosseguir, certifique-se de ter instalado o ChirpStack no seu dispositivo ReComputer R1X e pareado um dispositivo (por exemplo, SenseCap S210X). Para detalhes sobre a instalação do ChirpStack, consulte o guia oficial [ChirpStack LoRa Gateway on ReComputer R1X](https://wiki.seeedstudio.com/pt-br/chirpstack_lora_gateway_r1x00/).

### Pré-requisitos

- Interface do OpenRemote Manager em execução.
- ChirpStack LoRaWAN Gateway instalado no seu dispositivo ReComputer R1X.
- Um dispositivo LoRaWAN SenseCap S210X.

### Criar o OpenRemote MQTT Agent

1. **Faça login na interface do OpenRemote Manager**:  
   Abra o navegador e acesse a interface do OpenRemote Manager

2. **Navegar até a Página de Assets**:  
   No lado esquerdo da página, clique na guia **Assets**.

3. **Criar um novo MQTT Agent**:  
   - Clique no botão **+** na árvore de assets à esquerda.
   - Na caixa de diálogo **Add asset**, selecione **MQTT Agent** na lista de tipos de asset.
   - Nomeie o asset como **ChirpStack MQTT Agent**.
   - Clique em **ADD** para criar o asset.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote6.png" alt="pir" width={800} height="auto" /></p>

4. **Configurar o MQTT Agent**:
   - Clique em **Modify** para editar a configuração do asset.
   - Defina os seguintes atributos:
     - **Host**: O endereço IP do seu servidor ChirpStack (por exemplo, `10.0.0.208`).
     - **Port**: `1883` (porta padrão do MQTT).
   - Clique em **SAVE** para salvar as alterações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote7.png" alt="pir" width={800} height="auto" /></p>

### Criar o Asset do Dispositivo LoRaWAN no OpenRemote

1. **Adicionar um novo Dispositivo LoRaWAN**:
   - Na página **Assets**, clique em **+** na árvore de assets à esquerda.
   - Na caixa de diálogo **Add asset**, selecione **Thing Asset**.
   - Nomeie o asset como **S2101** (ou o nome específico do seu dispositivo).
   - Clique em **ADD** para criar o asset.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote8.png" alt="pir" width={800} height="auto" /></p>

2. **Modificar o ativo do dispositivo**:
   - Clique em **Modify** para editar a configuração do ativo.

3. **Adicionar um atributo personalizado para temperatura**:
   - Clique em **ADD ATTRIBUTE** para adicionar um novo atributo.
   - Na janela **Add attribute**, configure o seguinte:
     - **Type**: **Custom attribute**
     - **Name**: **Temperature**
     - **Value type**: **Number**
   - Clique em **ADD** para salvar o atributo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote9.png" alt="pir" width={800} height="auto" /></p>

4. **Adicionar itens de configuração para o agente MQTT**:
   - Expanda o atributo **Temperature** e clique em **ADD CONFIGURATION ITEMS**.
   - Na janela **Add configuration items**, configure da seguinte forma:
     - **Select**: **Agent link**
   - Clique em **ADD** para criar o link para o agente MQTT.
   - Expanda o item de configuração **Agent link** e defina o **Agent ID**:
     - **Agent ID**: **ChirpStack MQTT Agent**.
   - Clique em **ADD** para salvar o Agent link.

### Configurar inscrição MQTT para dados do sensor

1. **Adicionar um parâmetro para o tópico MQTT**:
   - Clique em **ADD PARAMETER** para adicionar um novo item de configuração.
   - Na janela **Add parameter**, selecione **Subscription Topic** e clique em **ADD**.

2. **Configurar o tópico de inscrição MQTT**:
   - Edite o campo **Subscription Topic** com o seguinte formato de tópico MQTT do ChirpStack:

     ```
     application/+/device/+/event/up
     ```

   - Este tópico irá assinar os dados de entrada do sensor provenientes do dispositivo LoRaWAN.

3. **Adicionar filtros de valor**:
   - Clique em **ADD** para adicionar um novo parâmetro **Value Filters**.
   - Expanda a seção **Value Filters** e clique em **ADD ITEM**.
   - Na janela **Add item**, selecione **JSON Path** e clique em **ADD**.

4. **Configurar o JSON Path para dados do sensor**:
   - Expanda o novo item **JSON Path** criado e defina o **Path** como:

     ```
     $.object.messages[?(@.measurementId==4097)].measurementValue
     ```

   - Este é um exemplo para o decodificador de dados do SenseCap S2101. Ajuste o caminho conforme necessário para o seu dispositivo específico.
   - Habilite a opção **Return First**.

5. **Salvar configuração**:
   - Quando todas as configurações estiverem definidas, clique em **SAVE** para finalizar a instalação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote10.png" alt="pir" width={800} height="auto" /></p>

### Testar a integração

1. **Verificar a comunicação MQTT**:  
   Certifique-se de que o agente MQTT está conectado ao servidor ChirpStack e que o tópico `application/+/device/+/event/up` está recebendo dados.

2. **Monitorar a temperatura**:  
   O **SenseCap S2101** (ou o dispositivo que você configurou) agora deve enviar leituras de temperatura, e o gerenciador OpenRemote exibirá esses valores no atributo **Temperature**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote11.png" alt="pir" width={800} height="auto" /></p>

### Demonstração

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/vYmtEf-7j2I"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
