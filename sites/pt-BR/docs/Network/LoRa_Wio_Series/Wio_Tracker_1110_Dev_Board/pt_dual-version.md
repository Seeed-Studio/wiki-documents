---
description: Versão Dual Stack do Wio Tracker
title: Rastreamento de Ativos Perfeito com Redes Amazon Sidewalk e LoRaWAN
keywords:
  - Tracker
  - AWS
  - Sidewalk
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 3/4/2024
  author: Jessie
createdAt: '2024-03-22'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wio_tracker_dual_stack/
---


## Introdução

Experimente integração de rede perfeita com esta demonstração de dispositivo duplo. A configuração apresenta a versátil placa Seeed Studio Wio Tracker Dev Board e o robusto dispositivo Seeed Studio SenseCAP T1000-S Tracker, ambos demonstrando transições contínuas entre as redes LoRaWAN e Sidewalk para cobertura ideal.

- **Suporte a Rede Dupla**: Com um único clique de botão, alterne entre LoRaWAN e Sidewalk para manter a conectividade contínua.
- **Conectado à Nuvem**: Veja a transferência de dados em tempo real para o AWS IoT Core, visualizada por meio de um aplicativo web da AWS em um monitor/tela de laptop.
- **Eficiência Alimentada por Bateria**: Os dispositivos garantem operação consistente, sem fios para uma experiência realmente móvel.

O processo é dividido nestas etapas principais:

- [Instalação e Configuração do SDK](https://wiki.seeedstudio.com/pt-br/wio_tracker_dual_stack#setup-toolchain)
- [Gravação de Firmware](https://wiki.seeedstudio.com/pt-br/wio_tracker_dual_stack#build-and-flash-the-demo)
- Configuração do AWS IoT Core
- Configuração do Amazon Location
- [Configuração do Aplicativo Web](https://wiki.seeedstudio.com/pt-br/wio_tracker_dual_stack#building-web-app)

## Pré-requisitos

### Instalando o nRF Connect SDK

Existem diferentes maneiras de instalar o nRF Connect SDK, dependendo do seu ambiente de desenvolvimento preferido e da [ferramenta de gerenciamento de toolchain](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools):

- Usando Visual Studio Code e a extensão nRF Connect para VS Code (recomendado)

- Usando linha de comando e nRF Util

**Etapa 1: Atualize o sistema operacional**

Antes de começar a configurar a toolchain, instale as atualizações disponíveis para o seu sistema operacional. Consulte [Requirements](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements) para informações sobre os sistemas operacionais suportados.

**Etapa 2: Instale os pré-requisitos**

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

- A versão mais recente do pacote <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>. Baixe-o na página <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>.<br/>

- A versão mais recente do Visual Studio Code para o seu sistema operacional na <a href="https://code.visualstudio.com/download">página de download do Visual Studio Code</a>.<br/>

- No Visual Studio Code, a versão mais recente do <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">nRF Connect for VS Code Extension Pack</a>.

</TabItem>
<TabItem value="CLine" label="Command Line">

- A versão mais recente da <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">ferramenta de desenvolvimento nRF Util</a>, um utilitário de linha de comando unificado para produtos Nordic.<br/>

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>Note:</strong>
  </p>
  <p style={{marginTop: '0'}}>
      After downloading the nRF Util executable, move it to a directory that is in the system <code>PATH</code>. On macOS and Linux, the downloaded file also needs to be given execute permission by typing <code>chmod +x nrfutil</code> or by checking the checkbox in the file properties.
  </p>
</div>

- A versão mais recente do pacote <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>, Baixe-o na página <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>.

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>Note:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      After downloading and installing the tools, add nrfjprog to the system <code>PATH</code> in the environment variables.
    </p>
  </div>

</TabItem>
</Tabs>

**Etapa 3: Instale a toolchain do nRF Connect SDK**

<Tabs>
<TabItem value="VScode" label="nRF Connect for Visual Studio Code">

- Abra a extensão nRF Connect no Visual Studio Code clicando em seu ícone na <code>Activity Bar</code>.<br/><br/>
- Na <code>Welcome View</code> da extensão, clique em <code>Install Toolchain</code>.<br/><br/>
- Selecione a versão da toolchain para instalar. A versão da toolchain deve corresponder à versão do nRF Connect SDK com a qual você vai trabalhar. Usamos a <code>V2.5.0</code> (recomendada).<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
Após instalar a toolchain, você pode acessar a opção <code>Install Toolchain</code> clicando em <code>Manage toolchains</code>.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="Command Line">

- Abra uma janela de terminal.

- Execute o seguinte comando para instalar o comando toolchain-manager do nRF Util:

 ```cpp
 nrfutil install toolchain-manager
 ```

- Execute o seguinte comando para listar as instalações disponíveis:

 ```cpp
 nrfutil toolchain-manager search
 ```

As versões desta lista correspondem às versões do nRF Connect SDK e serão a versão na etapa seguinte.

- Execute o seguinte comando para instalar a versão da toolchain para a versão do SDK de sua escolha:

 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

 Por exemplo:

 ```cpp
 nrfutil toolchain-manager install --ncs-version v2.5.0
 ```

Este comando de exemplo instala a toolchain necessária para o nRF Connect SDK v2.5.0 (recomendado).

:::tip
A toolchain é instalada por padrão em C:/ncs/toolchains no Windows, ~/ncs/toolchains no Linux e /opt/nordic/ncs/toolchains no macOS.
:::

Para verificar a configuração atual, use o comando <code>nrfutil toolchain-manager config --show</code>. <br/>Para saber mais sobre esses comandos, use o comando <code>nrfutil toolchain-manager --help</code>.
  </TabItem>
</Tabs>

**Etapa 4: Obtenha o código do nRF Connect SDK**

  <Tabs>
  <TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

Para clonar o código do nRF Connect SDK, conclua as seguintes etapas:

- Abra a extensão nRF Connect no Visual Studio Code clicando em seu ícone na <code>Activity Bar</code>.

- Na <code>Welcome View</code> da extensão, clique em <code>Manage SDKs</code>. A lista de ações aparece no quick pick do Visual Studio Code.

- Clique em <code>Install SDK</code>. A lista de versões de SDK disponíveis aparece no quick pick do Visual Studio Code.

- Selecione a versão do SDK para instalar, nós usamos `V2.5.0`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>

A instalação do SDK é iniciada e pode levar vários minutos.

  </TabItem>
  <TabItem value="CLine4" label="Command Line">

Para clonar os repositórios, conclua as seguintes etapas:

- Na linha de comando, abra o diretório `ncs`. Por padrão, ele fica um nível acima do local onde você instalou a toolchain. Este diretório conterá todos os repositórios do nRF Connect SDK.

- Inicie o ambiente da toolchain para o seu sistema operacional usando o seguinte comando:

  Windows

  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```

  Linux/macOS

  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

- Determine o identificador da revisão do nRF Connect SDK com a qual você deseja trabalhar. Consulte a tabela acima para mais informações. Quando você instala o nRF Connect SDK pela primeira vez, é recomendável instalar as versões mais recentes lançadas do SDK e da toolchain.

- Inicialize o west com a revisão do nRF Connect SDK que você deseja obter, substituindo nRFConnectSDK_revision pelo identificador:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```

Por exemplo:

  **Versão específica**: Para obter a versão v2.5.0, insira o seguinte comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```

  **Tag de desenvolvimento**: Para obter a tag v1.9.2-dev1, insira o seguinte comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **Branch**: Para obter a branch main que inclui o estado mais recente de desenvolvimento, insira o seguinte comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```

Isso irá clonar o repositório de manifesto sdk-nrf em nrf.

Inicializar o west com uma revisão específica do arquivo de manifesto não bloqueia seus repositórios nessa versão. Obter uma branch ou tag diferente no repositório sdk-nrf e executar west update altera a versão do nRF Connect SDK com a qual você trabalha.

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>Note:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      If you get an error message when running west, update west to the latest version. See <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">Troubleshooting West</a> in the Zephyr documentation for more information.
    </p>
  </div>

- Insira o seguinte comando para clonar os repositórios do projeto:

  ```cpp
  west update
  ```

Dependendo da sua conexão, isso pode levar algum tempo.

- Exporte um pacote CMake do Zephyr. Isso permite que o CMake carregue automaticamente o código boilerplate necessário para compilar aplicações do nRF Connect SDK:

  ```cpp
  west zephyr-export
  ```

Confira [Installing the nRF Connect SDK](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9) para mais detalhes.

</TabItem>
</Tabs>

### Configurando o ambiente Sidewalk

Siga estas etapas para baixar o aplicativo Sidewalk para o nRF Connect SDK:

- Abra uma janela de terminal. A estrutura do seu diretório deve ser a seguinte:

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

- Certifique-se de que o caminho do manifesto aponte para west.yml dentro do diretório nrf:

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```

Caso o caminho do manifesto aponte para um arquivo diferente, use o seguinte comando:

```cpp
west config manifest.path nrf
```

- Ative o filtro de grupo Sidewalk para o west.

```cpp
west config manifest.group-filter "+sidewalk"
```

Verifique a presença do Sidewalk no west:

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

- Atualize todos os repositórios:

```cpp
west update
```

Dependendo da sua conexão, a atualização pode levar algum tempo.

- Instale os requisitos Python para o Sidewalk.

```cpp
pip install -r sidewalk/requirements.txt
```

### Adicionar LR11xx à Extensão Sidewalk do nRF Connect SDK

Este repositório contém o driver de software que permite que a [família LR11xx](https://www.semtech.com/products/wireless-rf/lora-edge) de silício ofereça suporte ao protocolo Sidewalk quando emparelhada com o [Nordic nRF52840 MCU](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) e o nRF Connect SDK. O driver é oferecido em forma binária, como uma biblioteca estática que implementa as interfaces de "Platform Abstraction Layer" necessárias para oferecer conectividade LoRa ou FSK. A biblioteca estática contém em si uma implementação completa do SWDR001 da Semtech (LR11xx Driver), que pode ser usada para acessar outros recursos do silício LR11xx, como varredura e medição de alcance de WIFI e GNSS.

- Baixe o [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

- Com seu diretório de trabalho no repositório nordic clonado, no diretório de nível superior, ou seja, ``~/ncs/<version>/sidewalk``:

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```

o caminho do diretório pai `..` supõe que você colocou o arquivo diff lá, caso contrário você pode especificar o caminho completo até sua localização.

- Copie as bibliotecas do driver de rádio ``lib*.a`` para o projeto sidewalk em ``~/ncs/<version>/sidewalk/lib/lora_fsk/``  
Existem duas bibliotecas fornecidas, uma com ``LOG_RUNTIME_FILTERING`` ativado e outra sem.

- Copie a pasta ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` para ``~/ncs/v2.5.0/zephyr/boards/arm``.

```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### Criar Recursos

**Etapa 1: Implementar o Ambiente Cloud9**

Nesta seção você criará todos os recursos de que precisamos antes de começar. Como primeiro passo, você criará um Workspace do Cloud9 que usará para criar e implantar outros recursos. Em seguida, você implantará uma Stack CDK que contém todos os recursos de backend para o aplicativo Asset Tracker. Por fim, você instalará todas as dependências de frontend e configurará o aplicativo.

- Abra o [Console AWS Cloud9](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1), clique em `Create Environment`

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

- Deixe todas as outras configurações como padrão, exceto o **Instance type**. Selecione `m5.large`.

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**Etapa 2: Configurar Pré-requisitos**

- Abra o IDE do Cloud9.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

- Clone o repositório github no terminal do seu ambiente Cloud9 digitando o seguinte comando:

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

- Navegue até o diretório do aplicativo de exemplo:

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

- Redimensione o Volume EBS da instância EC2 subjacente.

 ```cpp
 npm run utils:resizeC9EBS
 ```

- Instale as dependências do projeto:

 ```cpp
 npm ci
 ```

- Implemente a infraestrutura de backend:

 ```cpp
 # Prepare the AWS account for CDK
 npm run infra:bootstrap
 # Deploy the backend resources
 npm run infra:deploy
 ```

- Crie um arquivo de configuração:

 ```cpp
 npm run utils:createConfig
 ```

## Configuração LoRaWAN

### Adicionar Gateway LoRaWAN na AWS

Confira este [Get Started](https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway) para adicionar o [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) ao AWS IoT Core.

### Adicionar Dispositivo LoRaWAN na AWS

**Etapa 1: Definir as chaves**

Defina o `DevEUI/JoinEUI/APPkey` e a `REGION` em `src/lorawan_v4/example_options.h`.

:::tip
JoinEUI também conhecido como AppEUI
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**Etapa 2: Criar perfis**

Faça login no [Console AWS IoT](https://console.aws.amazon.com/iot/home), navegue até `Devices`, clique em `Profiles`.

- Device profile

Perfis de dispositivo definem os recursos do dispositivo e parâmetros de inicialização que o servidor de rede usa para configurar o serviço de acesso rádio LoRaWAN. Isso inclui a seleção de parâmetros como faixa de frequência LoRa, versão dos parâmetros regionais LoRa e versão MAC do dispositivo.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>

Para saber mais sobre as diferentes faixas de frequência, consulte [Consider selection of LoRa frequency bands for your gateways and device connection](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands).

- Service profile

Recomendamos que você deixe a configuração `AddGWMetaData` ativada para que você receba metadados adicionais do gateway para cada payload, como RSSI e SNR para a transmissão de dados.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**Etapa 3: Adicionar dispositivo**

Navegue até `LPWAN devices` > `Devices`, clique em `Add wireless device`.

`Wireless device specification`: OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

Selecione o perfil de dispositivo e o destino que você criou na etapa anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

Navegue até a página Devices e escolha o dispositivo que você adicionou anteriormente.

## Configuração do Sidewalk

### Configurando um gateway Sidewalk (Opcional)

Você pode configurar um gateway Sidewalk, configurá-lo e associar seu gateway à sua conta Amazon. Seu endpoint Sidewalk se conectará e se comunicará com o gateway Sidewalk depois que ele for registrado no Amazon Sidewalk.

Confira [Setting up a Sidewalk gateway](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html) para mais detalhes.

### Configurando seu dispositivo Sidewalk

#### Adicionar seu dispositivo Sidewalk

**Etapa 1: Adicionar o perfil do seu dispositivo e o dispositivo final Sidewalk**

Antes de criar um dispositivo sem fio, primeiro crie um perfil de dispositivo.

Navegue até a [aba Sidewalk do hub Devices](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk), escolha `Provision device` e, em seguida, execute as seguintes etapas.

**Etapa 2: Obter arquivo JSON do dispositivo**

Para obter o arquivo JSON para provisionar seu dispositivo Sidewalk:

- Vá para o [Sidewalk devices hub](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk).

- Escolha o dispositivo que você adicionou ao AWS IoT Core para Amazon Sidewalk para ver seus detalhes.

- Obtenha o arquivo JSON escolhendo `Download device JSON file` na página de detalhes do dispositivo que você adicionou.

 Um arquivo `certificate.json` será baixado contendo as informações necessárias para provisionar seu dispositivo final.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>

**Etapa 3: Provisionar seu endpoint Sidewalk**

**Gerar imagem binária**

- Instalar o arquivo de requisitos

 Vá para a pasta SDK do Sidewalk `$[Amazon Sidewalk repository]/tools/scripts/public/provision/` e, em seguida, execute o seguinte comando para instalar o arquivo `requirements`.

 ```cpp
 pip3 install -r requirements.txt
 ```

- Gerar a imagem binária de fabricação

 Execute o script `provision.py` para gerar o arquivo de imagem binária de fabricação que será usado para provisionar a placa de desenvolvimento que você está usando como endpoint Sidewalk.

- Se você estiver usando o arquivo JSON de dispositivo combinado que obteve do console do AWS IoT, use o parâmetro certificate_json para especificar este arquivo como entrada ao executar o script de provisionamento.

 ```cpp
 python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

 Se você estiver usando os arquivos JSON de dispositivo separados que obteve como respostas das operações de API GetDeviceProfile e GetWirelessDevice, use os parâmetros wireless_device_json e device_profile_json para especificar esses arquivos como entrada ao executar o script de provisionamento.

 ```cpp
 python3 provision.py aws --output_bin mfg.bin \  
    --wireless_device_json wireless_device.json \
    --device_profile_json device_profile.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

Você deverá ver a seguinte saída:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>

- Grave o arquivo mfg.hex

 Seu arquivo de provisionamento normalmente estará localizado no diretório `EdgeDeviceProvisioning`.

 Para gravar a imagem binária, use o endereço `0xFD000` para carregar a imagem binária no Nordic Semiconductor HDK. Para obter informações sobre como gravar a imagem binária, consulte a documentação da Nordic Semiconductor.

**Etapa 4: Compile e grave a demonstração**

- Abra uma janela de terminal.

- Vá para o diretório `template_lbm_wio_tracker`.

 Por exemplo:

  ```cpp
  cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
  ```

- Compile o aplicativo usando o seguinte comando west:

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
 ```

ou com a biblioteca de driver de rádio pré-compilada:

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>

- Grave o aplicativo usando o seguinte comando west:

 ```cpp
 west flash
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>

### Registro do Sidewalk

Depois de ter provisionado o endpoint Sidewalk, o endpoint deve ser registrado para que possa se comunicar pela rede Sidewalk.

Para registrar seu endpoint Sidewalk, use o registro automático sem toque com o Sidewalk Frustration Free Networking (FFN) ou registre manualmente seu dispositivo usando um Mac ou uma máquina Ubuntu nativa que execute o script de registro.

|Critério Registro| automático (usando Sidewalk FFN)|Registro manual|
 |--|--|--|
 |Associação de usuário e endpoint| Esse método de registro não requer nenhuma associação entre o endpoint Sidewalk e um usuário. O endpoint pode ingressar na rede Sidewalk sem estar associado a nenhum usuário. |Esse método de registro requer uma associação entre o endpoint Sidewalk e a conta Amazon de um usuário.|
 |LWA (Login with Amazon)| LWA não é necessário.| LWA é necessário para vincular a conta Amazon do usuário e a conta AWS que é usada pelo desenvolvedor do endpoint Sidewalk.|

**Para realizar o registro usando Sidewalk FFN:**

- Seu gateway e endpoint Sidewalk devem estar ligados.
- Seu gateway deve ter opt-in no Sidewalk e estar a curta distância do seu endpoint. Recomendamos manter os dispositivos a até 10 metros um do outro.

 Para `Manual Sidewalk registration` e outros detalhes, verifique [aqui](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html).

### Troca de Rede

 O padrão é a rede LoRaWAN, clique no `User Button` para alternar a rede.

 <div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>

### Ver Mensagem

#### Adicionar Destino

No [console do IoT Core](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home), selecione `LPWAN devices` no menu à esquerda e depois `Destinations`.

Selecione `Edit` e selecione `Publish to AWS IoT Core message broker`. Na caixa de texto de tópico, insira assets como o Tópico MQTT.

Em `Permissions` selecione `Create a new service role` e deixe o `Role name` em branco.

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### Adicionar Regra de Decodificação

Navegue até a guia `Message routing` → `Rules` e clique no botão `Create Rule`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

Dê um nome para sua regra e envie.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>

Na Regra do IoT Core, selecione a função `Lambda`.  Em seguida, clique em `Create a Lambda function`.

Crie do zero<br/>
`Function name`: Dê um nome para sua função.<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64<br/>

Clique no botão `Create function` para criar uma nova função

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

Na página de configuração da função a seguir, remova todo o código e substitua-o pelo script a seguir e, em seguida, clique no botão `Deploy`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>

<details>
<summary>Código Lambda</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);

        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```

</details>

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

Agora volte para `Device Destination`, selecione Enter a rule name e insira o nome que acabamos de criar.

Navegue até o `AWS IoT Core Console` e selecione `MQTT Test Client` e inscreva-se no tópico.

#### Adicionar Regra de Rastreador

Repita as etapas acima para criar uma nova regra e copie o seguinte código Lambda:

<details>
<summary>Lambda Code</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`message received: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>error`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`update device location : ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("mqtt push response: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("loc update response: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // required
        ResourceType: "WirelessDevice", // required
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```

</details>

## Construindo Aplicativo Web

Vamos implantar os recursos necessários do Amazon Location Service exigidos para exibir nosso dispositivo em um mapa.

### Criando Mapa

Como primeiro passo, você precisará criar um novo recurso de Mapa do Amazon Location Service. Você fará isso usando o Console da AWS.

- Abra o [Console do Amazon Location Service](https://console.aws.amazon.com/location/home).

- Em seguida, expanda a barra de navegação no lado esquerdo da tela e selecione Maps.

- Nesta tela, crie um novo mapa:

- Insira o nome do mapa e selecione o estilo de mapa `HERE Explore`, depois clique em `Create map`.

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### Criando Calculadora de Rotas

- Abra o [Console do Amazon Location Service](https://console.aws.amazon.com/location/home).

- Em seguida, expanda a barra de navegação no lado esquerdo da tela e selecione `Route calculators`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>

Continue selecionando `HERE` como Provedor de Dados e clique no botão `Create route calculator`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### Criando Rastreador

Navegue até `Trackers` -> `Create tracker`:

Insira o nome do rastreador e selecione `Time-based filtering` em position filtering.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

Em seguida, role para baixo e marque a configuração `Enable EventBridge events` em EventBridge configuration e clique em `Create tracker`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>

### Criando Coleção de Geocercas

Navegue até `Geofence collections` e clique em `create geofence collection`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>

## Exibir Aplicativo Web

### Implantar Aplicativo no Cloudfront

- No seu Terminal do Cloud9, navegue até `/home/ec2-user/environment/asset-tracking-workshop`:

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

- Execute o seguinte comando:

 ```cpp
 npm run frontend:publish
 ```

- Quando estiver concluído, você receberá a URL do site.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>

- Acesse essa URL no seu navegador para visualizar seu aplicativo de rastreamento.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>

## Recurso

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)
