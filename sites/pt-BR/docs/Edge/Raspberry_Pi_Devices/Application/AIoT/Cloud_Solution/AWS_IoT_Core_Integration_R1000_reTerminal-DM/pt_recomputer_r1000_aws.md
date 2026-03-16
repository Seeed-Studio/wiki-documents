---
description: Aprenda como conectar seu Computer R1000 ao AWS IoT Core, um serviço que conecta e gerencia dispositivos IoT com segurança, permitindo a comunicação dispositivo‑nuvem. Este guia simplifica a integração de IoT ao ecossistema AWS, fornecendo uma plataforma escalável para criar aplicações inteligentes.
title: Integração do AWS IoT Core com reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
keywords:
  - AWS
  - Primeiros Passos
  - Cloud
slug: /recomputer_r1000_aws
last_update:
  date: 7/10/2024
  author: Kasun Thushara
createdAt: '2023-11-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_aws/
---

## Introdução

AWS IoT Core é um serviço que auxilia na conexão e no gerenciamento seguro de dispositivos de Internet das Coisas (IoT). Ele permite que dispositivos se comuniquem entre si e com a nuvem, facilitando o desenvolvimento de aplicações inteligentes e conectadas. O AWS IoT Core simplifica a integração de dispositivos IoT ao ecossistema mais amplo da AWS, oferecendo uma plataforma confiável e escalável para a criação de soluções IoT. Neste guia, vamos discutir como conectar nosso reComputer R1000 à nuvem AWS IoT.

## Primeiros Passos

Antes de iniciar este projeto, você precisa preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## Criar Conta AWS

Se você não tiver uma conta AWS, pode criar uma facilmente. Siga [**este link**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obter orientações sobre como configurar sua conta.

## Registrar o dispositivo

- **Passo 1**: Pesquise por IoT Core e navegue até ele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 2**: Em seguida, na barra lateral, navegue até o tópico **Manage** e, em **All Devices**, vá para **Things**.

:::info
**O que é uma Thing?**
O AWS IoT se refere a dispositivos de Internet das Coisas (IoT) como "things" na plataforma AWS. Cada dispositivo IoT, como o dispositivo reComputer R1000 neste contexto, é representado como uma "thing" na AWS. É importante observar que, depois de criada, o nome de uma "thing" não pode ser alterado.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Passo 3**: Em seguida, clique em **Create things**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthings.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 4**: Vamos criar para um único dispositivo reComputer R1000. Então clique em **Create Single Thing.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createsinglething.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 5**: Dê um nome para a Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingname.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 6**: Defina também um tipo de Thing para sua referência futura

:::info
**O que é um Thing Type?**

Os tipos de thing permitem armazenar descrições e informações de configuração que são comuns a todas as things associadas ao mesmo tipo de thing. Isso simplifica o gerenciamento das things no registro. Por exemplo, você pode definir um tipo de thing 'Factory_HMI'. Para esta demonstração, usamos edge_controller como um tipo de thing.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingtype.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthingtype.PNG" style={{width:400, height:400}}/></div>

- **Passo 7** : Gerar certificados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/configurecertificate.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 8**:  Para anexar políticas, você precisa criá‑las. Clique em **Create policy**

:::info
As políticas do AWS IoT Core são documentos JSON que seguem as convenções das políticas do IAM. Elas oferecem suporte a políticas nomeadas, permitindo que várias identidades façam referência ao mesmo documento de política. Políticas nomeadas possuem controle de versão para facilitar o rollback.
Essas políticas fornecem controle sobre o acesso ao plano de dados do AWS IoT Core, abrangendo operações como conectar ao message broker do AWS IoT Core, enviar/receber mensagens MQTT e acessar ou atualizar o Device Shadow de uma thing.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createpolicy.png" style={{width:600, height:'auto'}}/></div>

- **Passo 9**:  Dê um nome apropriado à política e defina o efeito da política, a ação da política e os recursos da política como a seguir.

:::info
A política inclui:

**Effect**: Especifica se a ação é permitida ou negada.

**Action**: Especifica a ação específica que a política permite ou nega.

**Resource**: Especifica o recurso ou recursos sobre os quais a ação é permitida ou negada.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createapolicy.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 10**: Anexe a política que você criou e pressione **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/policycreatething.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 11**: Em seguida, você pode baixar certificados e chaves. Certifique‑se de baixar o **Device certificate, Private and Public keys e o Root CA certificate.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **Passo 12** : Anexar à Thing (reComputer R1000)
Para isso, vá em **Security** >> **Certificates**

:::info
Quando você cria e registra um certificado de forma independente de uma AWS IoT thing, ele não possui políticas para operações do AWS IoT e não está associado a nenhum objeto thing. Aqui é explicado como estabelecer essas conexões para um certificado registrado. O certificado autentica o dispositivo com o AWS IoT para conexão. Vincular o certificado a um recurso thing cria o relacionamento entre o dispositivo (por meio do certificado) e o recurso thing. Para conceder ao dispositivo permissão para ações do AWS IoT, como conectar e publicar mensagens, é essencial anexar uma política adequada ao certificado do dispositivo.

:::

Depois de selecionar a thing que você criou, no menu suspenso **Actions**, clique em **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_thing.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 13**: Anexe também a política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy.PNG" style={{width:600, height:'auto'}}/></div>

## Preparar o reComputer R1000

- **Passo 01**: Criar um ambiente virtual. Execute estes comandos um por um e você terá um ambiente virtual.

```sh
mkdir AWS_project
cd AWS_project
python -m venv --system-site-packages env
source env/bin/activate
```

- **Passo 02**: Instalar a biblioteca Mqtt

```sh
pip3 install "paho-mqtt<2.0.0"
```

## Executar o código

Para isso, baixe nosso [arquivo de teste em Python](https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWStest.py). Certifique‑se de que os certificados do dispositivo, os arquivos de chave (chaves pública e privada), o arquivo de root access e este arquivo Python estejam na mesma pasta no seu dispositivo. Além disso, você precisa modificar a URL de conexão.

Para fazer isso:

- **Passo 01**: Vá para Settings

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **Passo 02** : Então você encontrará a URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/weburl.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 03** : Substitua aqueles nomes de arquivos pelos seus e execute o arquivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/code.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 04** : Vá até a pasta e execute o arquivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/cmd.PNG" style={{width:600, height:'auto'}}/></div>

## Testar a Conexão

Vá ao MQTT test Client na aba **Test** e digite o nome do tópico para se inscrever. Neste caso é device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/mqtttest.PNG" style={{width:600, height:'auto'}}/></div>

A saída será algo assim. A mensagem do reComputer-R1000 aparece no console.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/seeedop.PNG" style={{width:600, height:'auto'}}/></div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
