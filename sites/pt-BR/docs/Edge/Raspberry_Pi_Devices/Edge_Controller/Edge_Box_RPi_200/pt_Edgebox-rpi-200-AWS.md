---
description: Integração do AWS IoT Core com o EdgeBox RPi 200
title: Integração do AWS IoT Core com o EdgeBox RPi 200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
  - AWS
  - Primeiros Passos
  - Nuvem
slug: /Edgebox-rpi-200-AWS
last_update:
  date: 3/11/2024
  author: Kasun Thushara
createdAt: '2023-11-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-AWS/
---

## Introdução

AWS IoT Core é um serviço que auxilia na conexão e gerenciamento seguro de dispositivos de Internet das Coisas (IoT). Ele permite que dispositivos se comuniquem entre si e com a nuvem, facilitando o desenvolvimento de aplicações inteligentes e conectadas. O AWS IoT Core simplifica a integração de dispositivos IoT ao ecossistema mais amplo da AWS, oferecendo uma plataforma confiável e escalável para construir soluções IoT. Neste guia, discutiremos como conectar nosso Edge Box RPi 200 à nuvem AWS IoT.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

O Edge Box-200 chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso Wiki [Getting Started](https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/)

#### Instalar a biblioteca Mqtt

No seu terminal, digite:

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## Criar Conta AWS

Se você não tiver uma conta AWS, poderá criar uma facilmente. Siga [**este link**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obter orientações sobre como configurar sua conta.

## Registrar o dispositivo

- **Passo 1**: Pesquise por IoT core e navegue até ele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 2**: Em seguida, na barra lateral, navegue até o tópico **Manage** e em **All Devices** vá para **Things**.

:::info
**O que é uma Thing?**
O AWS IoT se refere a dispositivos de Internet das Coisas (IoT) como "things" na plataforma AWS. Cada dispositivo IoT, como o dispositivo Edge Box neste contexto, é representado como uma "thing" na AWS. Importante: depois de criada, o nome de uma "thing" não pode ser alterado.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Passo 3**: Em seguida, clique em **Create things**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 4**: Vamos criar para um único dispositivo EdgeBox. Então clique em **Create Single Thing.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 5**: Dê um nome para a Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 6**: Também defina um tipo de Thing para sua referência no futuro

:::info
**O que é um Thing Type?**

Thing types permitem armazenar descrições e informações de configuração que são comuns a todas as things associadas ao mesmo tipo de thing. Isso simplifica o gerenciamento das things no registro. Por exemplo, você pode definir um tipo de thing 'Factory_HMI'. Para esta demonstração usamos pi como um tipo de thing.

:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **Passo 7** : Gerar certificados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 8**:  Para anexar políticas, você precisa criá-las. Clique em **Create policy**

:::info
As políticas do AWS IoT Core são documentos JSON que seguem as convenções de políticas IAM. Elas oferecem suporte a políticas nomeadas, permitindo que várias identidades referenciem o mesmo documento de política. Políticas nomeadas são versionadas para facilitar o rollback.
Essas políticas fornecem controle sobre o acesso ao data plane do AWS IoT Core, abrangendo operações como conectar ao message broker do AWS IoT Core, enviar/receber mensagens MQTT e acessar ou atualizar o Device Shadow de uma thing.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 9**:  Dê um nome apropriado à política e defina o efeito da política, a ação da política e os recursos da política como a seguir.

:::info
A política inclui:

**Effect**: Especifica se a ação é permitida ou negada.

**Action**: Especifica a ação específica que a política permite ou nega.

**Resource**: Especifica o recurso ou recursos nos quais a ação é permitida ou negada.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 10**: Anexe a política que você criou e pressione **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **Passo 11**:Em seguida você pode baixar certificados e chaves. Certifique-se de baixar o **Device certificate, chaves Private e Public e o Root CA certificate.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **Passo 12** : Anexar à thing (Edge Box RPi 200 )
Para isso vá para **Security** >> **Certificates**

:::info
Quando você cria e registra um certificado de forma independente de uma AWS IoT thing, ele não possui políticas para operações do AWS IoT e não está associado a nenhum objeto thing. Aqui é explicado como estabelecer essas conexões para um certificado registrado. O certificado autentica o dispositivo com o AWS IoT para a conexão. Vincular o certificado a um recurso thing cria o relacionamento entre o dispositivo (via certificado) e o recurso thing. Para conceder ao dispositivo permissão para ações do AWS IoT, como conectar e publicar mensagens, é essencial anexar uma política adequada ao certificado do dispositivo.

:::

Após selecionar a thing que você criou, no menu suspenso **Actions**, pressione **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**Passo 13**: Anexe também a política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## Testar MQTT

Para isso, baixe nosso [arquivo Python de teste](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py). Certifique-se de que os certificados do dispositivo, arquivos de chave (chaves pública e privada), arquivo de acesso root e este arquivo Python estejam na mesma pasta no seu dispositivo. Além disso, você precisa modificar a URL de conexão.

Para fazer isso:

- **Passo 01** :Vá para Settings

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **Passo 02** : Então você encontrará a URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 03** : Substitua esses nomes de arquivos pelos seus e execute o arquivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## Testar a Conexão

Vá para o cliente de teste MQTT na aba **Test** e digite o nome do tópico para se inscrever. Neste caso é device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

A saída é algo assim. A mensagem do Edge Box aparece no console.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
