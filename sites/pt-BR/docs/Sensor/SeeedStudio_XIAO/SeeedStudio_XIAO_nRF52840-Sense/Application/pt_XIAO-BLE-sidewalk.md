---
description: Apresentando como implantar os serviços do Amazon Sidewalk no XIAO nRF52840.
title: Seeed Studio XIAO nRF52840 no Amazon Sidewalk
keywords:
  - sidewalk
  - XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-ble-sidewalk
last_update:
  date: 05/17/2023
  author: Citric
createdAt: '2023-05-18'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao-ble-sidewalk/
---

# Seeed Studio XIAO nRF52840 no Amazon Sidewalk

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

## Introdução

A Seeed Studio tem orgulho de fazer parte do ecossistema de parceiros do Amazon Sidewalk, fornecendo produtos e soluções habilitados para Sidewalk que possibilitam diversos casos de uso de IoT na rede Sidewalk.

O Amazon Sidewalk é uma rede comunitária sem fio segura que usa Amazon Sidewalk Gateways (também chamados de Sidewalk Bridges), como dispositivos Amazon Echo e Ring compatíveis, para fornecer conectividade em nuvem para dispositivos de endpoint de IoT.

O Amazon Sidewalk permite conectividade de baixa largura de banda e longo alcance em casa e além, usando Bluetooth Low Energy para comunicação de curta distância e os protocolos de rádio LoRa e FSK em frequências de 900 MHz para cobrir distâncias maiores. Os Sidewalk Gateways compartilham uma pequena parte da largura de banda de internet do usuário, que é então usada para conectar os endpoints à rede. A força da rede Amazon Sidewalk aumenta com o aumento do número de gateways. Saiba mais sobre o [Amazon Sidewalk](https://www.aboutamazon.com/news/devices/everything-you-need-to-know-about-amazon-sidewalk).

:::note
O Amazon Sidewalk está atualmente disponível nos EUA. Os desenvolvedores podem utilizar a funcionalidade de gateway do Sidewalk fora dos EUA apenas para fins de desenvolvimento e testes de endpoints habilitados para Sidewalk. Além disso, recomendamos que você consulte os órgãos reguladores locais e verifique se o gateway tem permissão para operar seu rádio em sua localidade, pois os dispositivos em faixa isenta de licença dos EUA se destinam apenas a fins de desenvolvimento.
:::

### Diferenciais do Amazon Sidewalk

O que torna o Sidewalk diferente de outras redes disponíveis hoje:

- **Conectividade persistente**

    A rede Amazon Sidewalk é alimentada por milhões de dispositivos Amazon Echo e Ring participantes como Amazon Sidewalk Bridges, para fornecer conectividade em nuvem a dispositivos de IoT. Isso garante conectividade persistente para dispositivos que estão fora do alcance de uma rede Wi‑Fi doméstica ou que dependem de um aplicativo móvel ou gateway proprietário para uma conexão com a nuvem.

- **Versatilidade de conexão**

    O Amazon Sidewalk permite que dispositivos inteligentes se comuniquem por meio de protocolos sem fio como Bluetooth Low Energy (BLE) e ondas de 900 MHz/sub‑GHz. Isso oferece uma conexão segura, confiável e versátil para suportar uma ampla variedade de casos de uso de IoT.

- **Provisionamento automático de dispositivos**

    O processo de registro sem toque do Amazon Sidewalk começa automaticamente quando o gateway Sidewalk e um endpoint não registrado estão próximos um do outro. Os clientes podem conectar seus dispositivos habilitados para Sidewalk à rede Amazon Sidewalk sem qualquer configuração complexa. Essa facilidade de configuração melhora a experiência geral do usuário.

- **Custo**

    O Amazon Sidewalk é uma rede com conexão gratuita que oferece cobertura para mais de 90% da população dos EUA. Você não precisa construir ou gerenciar uma infraestrutura de rede separada, o que ajuda a reduzir o investimento de capital e os custos operacionais."

- **Experiência de desenvolvimento simples**

    Os dispositivos habilitados para Sidewalk vêm pré‑provisionados com certificados de segurança necessários para estabelecer uma conexão criptografada com o AWS IoT Core. Isso permite que você crie soluções de IoT que conectem rapidamente seus dispositivos de borda à AWS, proporcionando uma experiência de configuração plug‑and‑play perfeita para os clientes."

- **Privacidade e segurança**

    O Amazon Sidewalk é projetado com vários recursos de privacidade e segurança para proteger os dados que trafegam na rede, garantindo a proteção dos dados e da privacidade dos clientes.

## Seeed Studio XIAO nRF52840 para Amazon Sidewalk

O XIAO nRF52840 é um módulo sem fio qualificado para o Amazon Sidewalk, fornecendo conectividade de dispositivos de IoT via tecnologia de rádio Bluetooth Low Energy na rede Amazon Sidewalk.

O modelo possui um design de SoM (System‑on‑Module) poderoso e compacto para integração com o Amazon Sidewalk. Com seu chipset nRF52840 integrado, este módulo oferece recursos de BLE, possibilitando conectividade perfeita para aplicações de IoT. O Seeed Studio XIAO possui um fator de forma reduzido, tornando‑o ideal para implantações com restrição de espaço. Com seu desempenho confiável e suporte ao Amazon Sidewalk, ele simplifica e acelera o desenvolvimento de soluções de IoT seguras e confiáveis.

Para mais detalhes sobre as especificações técnicas do módulo, clique [aqui](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/).

A documentação irá guiá‑lo por:

1. Instalar e configurar o ambiente de desenvolvimento do Amazon Sidewalk.

2. Configurar seus serviços em nuvem e gerenciar seu XIAO nRF52840.

3. Executar o programa de exemplo BLE do Amazon Sidewalk.

Quando terminar, você poderá executar um aplicativo de exemplo e testá‑lo com o Amazon Sidewalk.

## Preparação de hardware

O conteúdo deste tutorial minimizará a necessidade de soldagem ou cabeamento adicional. Portanto, usaremos duas placas de expansão atualmente disponíveis para nos ajudar a concluir o projeto o mais rápido possível. Claro, se você não quiser a despesa extra, também pode optar por conectar o dispositivo diretamente ao XIAO por meio de uma protoboard ou cabo duplex. Dito isso, os dispositivos em Essential são o hardware básico que você deve ter e Optional não é essencial.

### Essential

Para completar o conteúdo deste tutorial de exemplo, pode ser necessário preparar o seguinte.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO nRF52840 Sense</th>
   <th>Amazon Sidewalk gateway (Echo Gen4)</th>
            <th>Grove - Red LED Button</th>
            <th>J-Link</th>
            <th>USB para UART</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/20.jpeg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/21.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/22.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td></td>
            <td></td>
  </tr>
 </table>
</div>

:::tip
Para facilitar os testes do Amazon Sidewalk e o desenvolvimento de endpoints para desenvolvedores não residentes nos EUA que trabalhem fora da região **US-East-1** (Norte da Virgínia), é necessária a configuração de uma VPN. Isso permite um acesso contínuo e garante uma participação eficiente no processo de desenvolvimento.
:::

### Optional

Para facilitar a fiação e a expansão Grove, ou para uma conexão fácil ao XIAO via JLink, você pode precisar das seguintes placas de expansão.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio Expansion board for XIAO</th>
   <th>Seeed Studio Grove Base for XIAO</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Configurar o ambiente de desenvolvimento do Amazon Sidewalk

:::tip
O tutorial original para a instalação rápida do nRF Connect SDK pode ser lido [aqui](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically).
:::

A solução Amazon Sidewalk da Nordic Semiconductor é baseada no nRF Connect SDK v2.3.0. Você pode configurar seu ambiente de desenvolvimento seguindo um dos métodos de instalação abaixo:

- Instalação automática (Toolchain Manager)
- [Instalação manual](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

Esta seção se concentrará em como instalar o nRF Connect SDK por meio do Toolchain Manager, o método de instalação automática. O sistema é baseado em Windows 11.

Conclua as etapas abaixo para instalar o nRF Connect SDK automaticamente usando o aplicativo Toolchain Manager. O aplicativo instala a cadeia de ferramentas completa para o nRF Connect SDK, incluindo a extensão nRF Connect para VS Code e o código‑fonte do nRF Connect SDK.

### Instalar pré-requisitos

Antes de começar a configurar a toolchain, instale as atualizações disponíveis para o seu sistema operacional. Consulte os [Requisitos](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions) para obter informações sobre os sistemas operacionais compatíveis e os recursos do Zephyr.

Além disso, certifique-se de instalar a versão Universal do SEGGER J-Link. Isso é necessário para que o SEGGER J-Link funcione corretamente com assemblies Intel e ARM.

### Instalar o Toolchain Manager

O Toolchain Manager está disponível no nRF Connect for Desktop, uma ferramenta multiplataforma que fornece diferentes aplicativos que simplificam a instalação do nRF Connect SDK. Tanto a ferramenta quanto o aplicativo estão disponíveis para Windows, Linux e macOS.

**Passo 1**. Baixe o [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop) para o seu sistema operacional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:1000, height:'auto'}}/></div>

**Passo 2**. Instale e execute a ferramenta em sua máquina.

**Passo 3**. Na seção **APPS**, clique em **Install** ao lado de **Toolchain Manager**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:600, height:'auto'}}/></div>

**Passo 4**. O aplicativo é instalado em sua máquina e o botão **Install** muda para **Open**.

**Passo 5**. Abra o Toolchain Manager no nRF Connect for Desktop.

Clique em **SDK ENVIRONMENTS** na barra de navegação para especificar onde você deseja instalar o nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:600, height:'auto'}}/></div>

**Passo 6**. Em SDK ENVIRONMENTS, clique no botão **Install** ao lado da **versão do nRF Connect SDK** que você deseja instalar.

A versão do nRF Connect SDK da sua escolha é instalada em sua máquina. O botão Install muda para **Open VS Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/30.png" style={{width:600, height:'auto'}}/></div>

:::tip
O tempo de instalação está relacionado à rede do seu ambiente e espera-se que a instalação leve cerca de **uma hora**. O software pode não fazer nada durante esse tempo, então, por favor, não presuma que está travado; você pode verificar o progresso da instalação através do log.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:600, height:'auto'}}/></div>
:::

### Baixando o repositório Amazon Sidewalk

Após a instalação, há duas maneiras de compilar um aplicativo:

- Usando o Visual Studio Code e a extensão nRF Connect for VS Code
- Usando a linha de comando

**Passo 7**. Para o nosso projeto, o uso da linha de comando é suficiente. Clique na seta para baixo ao lado da versão que você instalou e selecione **Open bash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:600, height:'auto'}}/></div>

Sua estrutura de diretórios deve ser semelhante à seguinte:

```
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

**Passo 8**. Clone o [repositório de aplicativo Amazon Sidewalk](https://github.com/nrfconnect/sdk-sidewalk) do repositório sdk-sidewalk para a pasta do nRF Connect SDK e nomeie-o como `sidewalk` executando o seguinte comando:

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```

**Passo 9**. Instale os requisitos do Python para o Amazon Sidewalk.

```
pip install -r sidewalk/requirements.txt
```

:::note
Se o seu computador ainda não tiver um ambiente Python instalado, leia o tutorial [aqui](https://www.digitalocean.com/community/tutorials/install-python-windows-10) para instalar o Python 3 mais recente em seu computador.
:::

**Passo 10**. Configure o manifesto do aplicativo Amazon Sidewalk e atualize.

Verifique o caminho atual do manifesto:

```
west manifest --path
```

O caminho retornado deve ser semelhante ao seguinte formato.

```
> /path-to-ncs-folder/nrf/west.yml
```

Defina o caminho do manifesto para o repositório Amazon Sidewalk:

```
west config manifest.path sidewalk
```

Atualize todos os repositórios:

```
west update
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/32.png" style={{width:800, height:'auto'}}/></div>

Dependendo da sua conexão, a atualização pode levar algum tempo.

Verifique o novo caminho do manifesto:

```
west manifest --path
```

O caminho retornado deve ser semelhante ao seguinte formato.

```
> /path-to-ncs-folder/sidewalk/west.yml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/31.png" style={{width:600, height:'auto'}}/></div>

Por favor, mantenha a janela do Bash aberta, voltaremos a ela em alguns minutos.

## Configure seus serviços de nuvem AWS

:::tip
O tutorial original para a configuração do seu produto Amazon Sidewalk pode ser lido [aqui](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html).
:::

Em seguida, precisamos configurar os serviços de nuvem AWS para que o dispositivo seja conectado à sua conta AWS por meio de uma chave.

**Passo 1**. Baixe o repositório Amazon Sidewalk Sample IoT App para sua máquina local. Abra um novo terminal (se você estiver usando Windows, então abra um novo Powershell) e insira o seguinte comando para clonar o repositório.

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**Passo 2**. Se você está usando o Amazon IoT Core pela primeira vez, talvez precise se inscrever para uma conta raiz ou, se já tiver uma conta raiz ou IAM, faça login no [console do Amazon IoT Core](https://console.aws.amazon.com/iam).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**Passo 3**. Obtenha a chave de conta.

Depois de fazer login, no canto superior direito do console, clique no seu nome de usuário e selecione Security credentials.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/33.png" style={{width:400, height:'auto'}}/></div>

Em seguida, crie uma nova credencial e salve seu **Access Key ID** e **Secret Access Key**. Nós os usaremos em etapas posteriores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/34.png" style={{width:1000, height:'auto'}}/></div>

**Passo 4**. Configure o arquivo *credentials* na sua máquina local.

:::note
Se você ainda não instalou o [AWS CLI](https://aws.amazon.com/cli/), talvez seja necessário instalá-lo.
:::

Se você tiver o AWS CLI instalado, poderá usar o comando aws configure para configurar o seu arquivo de credenciais. Se você estiver usando um sistema Windows, precisará executar o comando em uma **janela CMD** com privilégios de administrador.

```
aws configure
```

Em seguida, a janela pedirá que você insira suas chaves, por favor insira-as separadamente e pressione Enter para confirmar.

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

Em seguida, vem a escolha de país e região; aqui precisamos selecionar **us-east-1**.

```
region=us-east-1
```

Para o restante, simplesmente pressionamos Enter e deixamos o padrão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/35.png" style={{width:800, height:'auto'}}/></div>

**Passo 5**. Adicione permissões de usuário para criar recursos.

Se o seu usuário tiver permissões de administrador, o pré-requisito já está satisfeito; você pode pular este ponto.

:::note
Este tutorial usa por padrão uma conta com direitos de administrador; se você estiver usando uma conta IAM, entre em contato com o seu administrador para habilitar permissões específicas para a sua conta.

- Execute o script `python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py`, que irá gerar documentos de política personalizados no diretório *ApplicationServerDeployment/policies/*
- vá para o console IAM, crie a política usando o conteúdo de *DeployStackPolicy.json*
- atribua a política criada ao seu usuário
Consulte o [tutorial do IAM: Create and attach your first customer managed policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html) para orientações adicionais.

Certifique-se de que o *Simplicity Commander* (para SiLabs) esteja presente na variável de ambiente PATH do seu sistema.

Tente chamar `commander --version` no terminal para garantir que o Simplicity Commander esteja disponível.
:::

## Execute o exemplo BLE do Amazon Sidewalk

:::tip
O tutorial original para o Template Bluetooth LE pode ser lido [aqui](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble).
:::

### Geração de provisionamento

**Passo 1**. Vá para as ferramentas AWS IoT Core for Amazon Sidewalk.

Abra a pasta **aws-iot-core-for-amazon-sidewalk-sample-app** que clonamos anteriormente.

**Passo 2**. Preencha o arquivo de configuração `config.yaml`. Defina a plataforma de hardware **NORDIC**.

Abra o arquivo chamado **config.yaml** na pasta (use um editor adequado, por exemplo, VS Code). Cole o seguinte conteúdo e mantenha-o.

```
Config:
AWS_PROFILE: default  # Name of your AWS profile from .aws/credentials
DESTINATION_NAME: SensorAppDestination  # Sidewalk destination used for uplink traffic routing
HARDWARE_PLATFORM: NORDIC  # Available values: NORDIC, TI, SILABS or ALL
USERNAME: null
PASSWORD: null
INTERACTIVE_MODE: True
Outputs:
    DEVICE_PROFILE_ID: null
    WEB_APP_URL: null
_Paths:
    PROVISION_SCRIPT_DIR: tools/provision
    SILABS_COMMANDER_TOOLS_DIR: null  # Not needed if Silabs Commander is already in system Path. Only needed for SILABS.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/36.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3**. Configure o ambiente virtual Python para as ferramentas de provisionamento:

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
pip install pip==22.3.1
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**Passo 4**. Neste ponto, você pode querer executar o script `helper env_check.py` para verificar se o seu ambiente está correto em relação aos erros mais comuns.

```
python env_check.py
```

Se a mensagem aparecer como mostrado, então a instalação do seu ambiente ocorreu corretamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/37.png" style={{width:900, height:'auto'}}/></div>

**Passo 5**. Execute os scripts de provisionamento do dispositivo:

```
python EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

Você deverá ver a seguinte saída:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

Precisamos do arquivo `Nordic_MFG.hex` que foi gerado aqui, o qual será eventualmente gravado no XIAO nRF52840.

:::note
**Nordic_MFG.hex** é a única credencial para que um dispositivo estabeleça um link de comunicação com o seu Amazon IoT Core, sendo diferente para cada dispositivo ou conta.
:::

Seu arquivo de provisionamento está localizado no diretório `EdgeDeviceProvisioning`. Os dispositivos são agrupados no subdiretório do perfil de dispositivo, como mostrado na estrutura abaixo:

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

Copie os arquivos **Nordic_MFG.hex** e salve-os em um local onde você possa encontrá-los facilmente.

**Passo 6**. Saia do ambiente virtual Python:

```
deactivate
```

### Adicionar MQTT ao destino

:::tip
Para esta parte do tutorial, você pode ler os [tutoriais oficiais](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination) fornecidos pelo Sidewalk.
:::

### Visão geral dos exemplos

O exemplo demonstra um modelo para aplicação Amazon Sidewalk End Node. Ele é otimizado para Bluetooth LE.

O exemplo oferece suporte aos seguintes kits de desenvolvimento:

| Plataformas de hardware | PCA | Nome da placa | Alvo de build |
| ------------------ | --- | ---------- | ------------ |
| nRF52840 DK        | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

Como o Amazon Sidewalk ainda não mesclou nossa PR submission, atualmente daremos suporte ao XIAO nRF52840 modificando a plataforma nRF52840 DK suportada.

| Plataformas de hardware | Nome da placa | Alvo de build |
| ------------------ | ---------- | ------------ |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

O exemplo mostra a implementação da Amazon Sidewalk API para o protocolo de transporte Bluetooth LE. É um exemplo otimizado em memória da configuração Amazon Sidewalk, onde apenas o protocolo de transporte Bluetooth LE é suportado. Devido ao menor tamanho, ambas as partições de bootloader para a aplicação são colocadas na memória flash interna do SoC suportado (nRF52840).

#### Interface do Usuário

Uma ação de botão é acionada quando você solta o botão. Para usar uma ação de pressionamento longo, mantenha um botão pressionado por 2 segundos ou mais e solte-o.

A atribuição dos botões é a seguinte:

- **Botão 1 (pressionamento longo) -- D1**:

    Restauração de Fábrica - O aplicativo informa a pilha Amazon Sidewalk sobre o evento de restauração de fábrica. A biblioteca Amazon Sidewalk limpa sua configuração do armazenamento não volátil. Após uma restauração bem-sucedida, o dispositivo precisa ser registrado novamente com os serviços em nuvem.

- **Botão 2 -- D3**:

    Alternar Pedido de Conexão - O dispositivo solicita ao Gateway Amazon Sidewalk que inicie uma conexão enquanto o dispositivo está anunciando via Bluetooth LE. Após a conexão ser encerrada, o usuário precisa definir novamente o estado do beacon. Gateways podem nem sempre conseguir processar esse pedido, pois isso depende do número de dispositivos conectados a eles.

- **Botão 3 -- D4**:

    Enviar Hello - Essa ação colocará em fila uma mensagem para a nuvem. Se o Amazon Sidewalk não estiver pronto, ele simplesmente exibirá um erro sem enviar a mensagem. A fila será processada eventualmente e todas as mensagens em fila serão enviadas.

- **Botão 4 (pressionamento curto) -- D9**:

    Definir nível de bateria falso - A ação define um nível de bateria simulado.

- **Botão 4 (pressionamento longo) -- D9**:
    Entrar em estado DFU - Essa ação desativa a pilha Amazon Sidewalk e inicia o Servidor SMP Bluetooth LE. Você pode atualizar a imagem de firmware usando o aplicativo nRF Connect para dispositivos móveis. Para sair do estado DFU, realize um ciclo de energia no seu dispositivo.

Os LEDs representam o estado atual da aplicação (Ainda não implementado):

- **LED 1 -- D0**:

    Aplicação conectada com sucesso.

- **LED 2 -- D2**:

    Aplicação registrada com sucesso.

- **LED 3 -- D5**:

    Sincronização de horário da aplicação bem-sucedida.

- **LED 4 -- D8**:

    Link da aplicação ativo.

### Preparando o firmware de exemplo

Este exemplo usa o programa de exemplo BLE fornecido pela Amazon Sidewalk; o firmware do driver de hardware é comum a todos os XIAO nRF52840. Se você não quiser passar pelas etapas desta seção, também pode baixar diretamente o arquivo **merged.hex** fornecido por nós.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/merged.hex" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download file</font></span></strong>
    </a>
</div><br />

Aqui estão os passos exatos a serem seguidos.

**Passo 1**. Baixe o programa escrito para o XIAO nRF52840 a partir do Github.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Releases</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**Passo 2**. Depois de baixado, descompacte a pasta no diretório ncs. O caminho padrão é o seguinte:

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::caution
O diretório de arquivos originalmente continha os arquivos de desenvolvimento para o nRF52840 DK. Para simplificar, substituímos a placa de desenvolvimento renomeando o programa do XIAO nRF52840.

Portanto, tudo o que você precisa fazer é sobrescrever todos os arquivos do arquivo original **nrf52840dk_nrf52840** com todos os arquivos do arquivo zip.
:::

**Passo 3**. Vamos voltar à janela Bash do nRF Connect SDK. Digite o seguinte comando para realizar a geração do firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/38.png" style={{width:600, height:'auto'}}/></div>

```
cd sidewalk/samples/template_ble/
west build -b nrf52840dk_nrf52840
```

Se a execução ocorrer bem, você verá a seguinte saída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

Neste ponto, obtivemos o firmware de exemplo, que se chama: `merged.hex` e está armazenado no local padrão de:

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

Você pode começar colocando este arquivo junto com o arquivo **Nordic_MFG.hex** que preparamos anteriormente e nós os usaremos juntos mais tarde.

### Gravar firmware no XIAO nRF52840

**Passo 1**. Abra o **nRF Connect for Desktop**, encontre **Programmer** nos APPS e instale-o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:600, height:'auto'}}/></div>

**Passo 2**. Conecte o XIAO nRF52840 via JLink.

Conecte o XIAO nRF52840 ao JLink através da interface SWD.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF52840</th>
   <th>JLink (Versão não educacional)</th>
  </tr>
  <tr>
   <td align="center">3V3</td>
   <td align="center">Vterf</td>
  </tr>
  <tr>
   <td align="center">GND</td>
   <td align="center">GND</td>
  </tr>
        <tr>
   <td align="center">SWDIO</td>
   <td align="center">SWIO</td>
  </tr>
        <tr>
   <td align="center">SWCLK</td>
   <td align="center">SWCK</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/24.jpg" style={{width:600, height:'auto'}}/></div><br />

Se você não pretende usar a placa de expansão XIAO, então você pode consultar o [XIAO nRF52840 Wiki](https://wiki.seeedstudio.com/pt-br/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader) sobre o uso da interface SWD para soldar adicionalmente fios duplex ao JLink.

**Passo 3**. Abra o Programmer e grave ambos os firmwares no XIAO nRF52840.

Clique no botão **Add file** no canto superior esquerdo do software e adicione, respectivamente, o arquivo **merged.hex** e o **Nordic_MFG.hex** preparado neste artigo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

Em seguida, conecte o JLink ao seu computador e clique no canto superior esquerdo para selecionar seu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

Depois de conectado, clique no botão Read à esquerda para obter a partição de memória do XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

Em seguida, clique em **Erase & write** para gravar o firmware no XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

Quando terminar, você pode clicar em **Read** para ver se o formato da memória é aproximado; isso permite verificar se a gravação da memória flash foi bem-sucedida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**Etapa 4**. Monte o dispositivo Amazon Sidewalk e faça-o funcionar.

Na prévia do exemplo, marcamos as posições dos pinos aos quais os LEDs e o botão estão conectados. Em seguida, precisaremos usar os quatro Grove LED Buttons, que não apenas nos permitem controlar o funcionamento do XIAO, mas também mostrar os diferentes estados de funcionamento por meio dos LEDs nos botões.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF52840</th>
   <th>LED</th>
            <th>Botão</th>
            <th>USB para UART</th>
  </tr>
  <tr>
   <td align="center">D0</td>
   <td align="center">LED1</td>
            <td align="center"></td>
            <td align="center"></td>
  </tr>
  <tr>
   <td align="center">D1</td>
   <td align="center"></td>
            <td align="center">Botão1</td>
            <td align="center"></td>
  </tr>
        <tr>
   <td align="center">D2</td>
   <td align="center">LED2</td>
            <td align="center"></td>
            <td align="center"></td>
  </tr>
        <tr>
   <td align="center">D3</td>
   <td align="center"></td>
            <td align="center">Botão2</td>
            <td align="center"></td>
  </tr>
        <tr>
            <td align="center">D4</td>
            <td align="center">LED3</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D5</td>
            <td align="center"></td>
            <td align="center">Botão3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">LED4</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center"></td>
            <td align="center">Botão4</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">RX (D7)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">TX (D6)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">RX</td>
        </tr>
    </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/25.jpg" style={{width:600, height:'auto'}}/></div>

O XIAO é alimentado via USB e então o XIAO nRF52840 é controlado usando botões de pressão, e o log de operação do XIAO está disponível via UART.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>

## Recursos

- [Especificação do Amazon Sidewalk](https://docs.sidewalk.amazon/specifications/)
- [Whitepaper de Privacidade e Segurança do Amazon Sidewalk](https://m.media-amazon.com/images/G/01/sidewalk/final_privacy_security_whitepaper.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
