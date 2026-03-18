---
description: Integração do AWS IoT Core com o reTerminal DM
title: Integração do AWS IoT Core com o reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
  - AWS
  - Primeiros Passos
  - Nuvem
slug: /reTerminal-DM_AWS_first
last_update:
  date: 11/22/2023
  author: Kasun Thushara
createdAt: '2023-11-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM_AWS_first/
---
## Introdução

AWS IoT Core é um serviço que auxilia na conexão e gestão segura de dispositivos de Internet das Coisas (IoT). Ele permite que dispositivos se comuniquem entre si e com a nuvem, facilitando o desenvolvimento de aplicações inteligentes e conectadas. AWS IoT Core simplifica a integração de dispositivos IoT ao ecossistema mais amplo da AWS, oferecendo uma plataforma confiável e escalável para construir soluções de IoT. Neste guia, vamos explicar como conectar nosso reTerminal DM à nuvem AWS IoT.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar o hardware e o software com antecedência, conforme descrito aqui.

### Preparação de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o Seu Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

Recomendamos instalar a versão **Bullesye** do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/)

#### Instalar biblioteca Mqtt

No seu terminal digite:

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

:::note

Se você estiver tentando usar o Bookworm OS, que é o sistema mais recente no momento da escrita deste wiki, talvez seja necessário usar um ambiente virtual para instalar bibliotecas Python. Siga este [**link**](https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi) para mais atualizações.

:::

## Criar Conta AWS

Se você não tiver uma conta AWS, poderá criar uma facilmente. Siga [**este link**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obter orientações sobre como configurar sua conta.

## Registrar o dispositivo

- **Passo 1**: Pesquise por IoT Core e navegue até ele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 2**: Em seguida, na barra lateral, navegue até o tópico **Manage** e, em **All Devices**, vá para **Things**.

:::info
**O que é uma Thing?**

O AWS IoT se refere aos dispositivos de Internet das Coisas (IoT) como "things" na plataforma AWS. Cada dispositivo IoT, como o reTerminal Device neste contexto, é representado como uma "thing" na AWS. Importante: depois de criada, o nome de uma "thing" não pode ser alterado.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Passo 3**: Em seguida, clique em Create things

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 4**: Vamos criar para um único reTerminal Device. Portanto, clique em Create Single Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 5**: Dê um nome para a thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 6**: Também defina um tipo de thing para sua referência no futuro

:::info
**O que é um Thing Type?**

Thing types permitem armazenar descrições e informações de configuração que são comuns a todas as things associadas ao mesmo tipo de thing. Isso simplifica o gerenciamento das things no registro. Por exemplo, você pode definir um tipo de thing 'Factory_HMI'. Para esta demonstração usamos pi como um tipo de thing.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **Passo 7** : Gerar certificados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 8**:  Para anexar políticas, você precisa criá-las. Clique em **Create policy**

:::info
As políticas do AWS IoT Core são documentos JSON que seguem as convenções de políticas IAM. Elas oferecem suporte a políticas nomeadas, permitindo que várias identidades façam referência ao mesmo documento de política. As políticas nomeadas são versionadas para facilitar o rollback.
Essas políticas fornecem controle sobre o acesso ao plano de dados do AWS IoT Core, abrangendo operações como conectar-se ao message broker do AWS IoT Core, enviar/receber mensagens MQTT e acessar ou atualizar o Device Shadow de uma thing.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 9**:  Dê um nome apropriado à política e defina o efeito da política, a ação da política e os recursos da política como a seguir.

:::info
A política inclui:

**Effect**: Especifica se a ação é permitida ou negada.

**Action**: Especifica a ação específica que a política permite ou nega.

**Resource**: Especifica o recurso ou recursos nos quais a ação é permitida ou negada.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 10**: Anexe a política que você criou e pressione **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 11**: Em seguida, você pode baixar certificados e chaves. Certifique-se de baixar o **Device certificate, Private and Public keys e Root CA certificate.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG" style={{width:600, height:450}}/></div>

- **Passo 12** : Anexar à thing (reTerminal DM)
Para isso vá para **Security** >> **Certificates**

:::info

Quando você cria e registra um certificado de forma independente de uma AWS IoT thing, ele não possui políticas para operações do AWS IoT e não está associado a nenhum objeto thing. Aqui é explicado como estabelecer essas conexões para um certificado registrado. O certificado autentica o dispositivo junto ao AWS IoT para conexão. Vincular o certificado a um recurso thing cria a relação entre o dispositivo (via certificado) e o recurso thing. Para conceder permissão ao dispositivo para ações do AWS IoT, como conectar e publicar mensagens, é essencial anexar uma política adequada ao certificado do dispositivo.

:::

Depois de selecionar a thing que você criou, no menu suspenso **Actions**, pressione **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG" style={{width:600, height:'auto'}}/></div>

**Passo 13**: Anexe também a política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG" style={{width:600, height:'auto'}}/></div>

## Testar MQTT

Para isso, baixe nosso [arquivo Python de teste](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py). Certifique-se de que os certificados do dispositivo, arquivos de chave (chaves pública e privada), arquivo de root CA e este arquivo Python estejam na mesma pasta no seu reTerminal Device. Além disso, você precisa modificar a URL de conexão.

Para fazer isso:

- **Passo 01** : Vá para Settings

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG" style={{width:200, height:300}}/></div>

- **Passo 02** : Então você encontrará a URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 03** : Substitua esses nomes de arquivos pelos seus e execute o arquivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## Testar a Conexão

Vá para o MQTT test Client na guia **Test** e digite o nome do tópico para se inscrever. Neste caso é device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

A saída é algo como isto. A mensagem do reTerminal DM aparece no console.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
