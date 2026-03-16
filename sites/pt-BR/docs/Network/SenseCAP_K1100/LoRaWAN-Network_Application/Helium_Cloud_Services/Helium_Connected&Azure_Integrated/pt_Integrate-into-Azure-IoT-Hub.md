---
description: Integrar ao Azure IoT Hub
title: Integrar ao Azure IoT Hub
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Integrate-into-Azure-IoT-Hub
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Integrate-into-Azure-IoT-Hub/
---
# Integrar ao Azure IoT Hub

A Internet das Coisas (IoT) é uma rede de dispositivos físicos que se conectam e trocam dados com outros dispositivos e serviços pela Internet ou por outra rede. Atualmente, existem mais de dez bilhões de dispositivos conectados no mundo e mais são adicionados a cada ano. Qualquer coisa que possa incorporar os sensores e softwares necessários pode ser conectada à internet.

O Azure IoT Hub é um serviço gerenciado hospedado na nuvem que atua como um hub central de mensagens para comunicação entre uma aplicação de IoT e seus dispositivos conectados. Você pode conectar milhões de dispositivos e suas soluções de backend de forma confiável e segura. Praticamente qualquer dispositivo pode ser conectado a um IoT Hub.

Vários padrões de mensagens são suportados, incluindo telemetria de dispositivo para nuvem, upload de arquivos a partir dos dispositivos e métodos de requisição-resposta para controlar seus dispositivos a partir da nuvem. O IoT Hub também oferece suporte a monitoramento para ajudar você a acompanhar a criação de dispositivos, conexões de dispositivos e falhas de dispositivos.

- Para mais informações sobre o uso do Microsoft Azure IoT Hub, consulte [aqui](https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub).

Neste capítulo, você precisará mudar para o [Microsoft Azure](https://portal.azure.com/#home). Depois disso, talvez seja necessário se registrar para obter uma conta gratuita. Um novo [registro de conta](https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F) dará a você um crédito gratuito de US$ 200, que você pode usar totalmente para concluir nossas rotinas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png" /></div>

## Criar grupos de recursos

Um grupo de recursos é um contêiner que mantém os recursos relacionados a uma solução do Azure. O grupo de recursos pode incluir todos os recursos da solução ou apenas aqueles recursos que você deseja gerenciar como um grupo. Você decide como deseja alocar recursos para grupos de recursos com base no que faz mais sentido para sua organização. Geralmente, adicione recursos que compartilham o mesmo ciclo de vida ao mesmo grupo de recursos para que você possa facilmente implantá-los, atualizá-los e excluí-los como um grupo.

Primeiro, faça login no [portal do Azure](https://portal.azure.com/) com sua conta registrada.

Selecione **Resource groups**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png" /></div>

Selecione **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png" /></div>

Insira os seguintes valores:

- **Subscription**: Selecione sua assinatura do Azure.

- **Resource group**: Insira um novo nome de grupo de recursos.

- **Region**: Selecione uma localização do Azure, como North Europe.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png" /></div>

Selecione **Review + Create**.

Selecione **Create**. Leva alguns segundos para criar um grupo de recursos.

Selecione Refresh no menu superior para atualizar a lista de grupos de recursos e, em seguida, selecione o grupo de recursos recém-criado para abri-lo. Ou selecione Notification (o ícone de sino) na parte superior e, em seguida, selecione Go to resource group para abrir o grupo de recursos recém-criado.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png" /></div>

## Criar um Microsoft Azure IoT Hub

Esta etapa descreve como criar e gerenciar o Microsoft Azure IoT Hub usando o portal do Microsoft Azure. Na página inicial do Microsoft Azure, selecione o botão **Create a resource** e, em seguida, digite IoT Hub no campo Search the Marketplace.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg" /></div>

Selecione IoT Hub nos resultados da pesquisa e, em seguida, selecione Create.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg" /></div>

Na guia Basics, preencha os campos da seguinte forma:

- **Subscription**: Selecione a assinatura que será usada para o seu hub.

- **Resource Group**: Selecione um grupo de recursos ou crie um novo. Para criar um novo, selecione Create new e preencha o nome que deseja usar. Para usar um grupo de recursos existente, selecione esse grupo de recursos. Para mais informações, consulte [Manage Azure Resource Manager resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal).

- **Region**: Selecione a região na qual você deseja que seu hub esteja localizado. Selecione a localização mais próxima de você. Alguns recursos, como [IoT Hub device streams](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-streams-overview), estão disponíveis apenas em regiões específicas. Para esses recursos limitados, você deve selecionar uma das regiões compatíveis.

- **IoT Hub Name**: Insira um nome para o seu hub. Este nome deve ser globalmente exclusivo, com comprimento entre 3 e 50 caracteres alfanuméricos. O nome também pode incluir o caractere traço ('-').

:::note
Como o IoT Hub será publicamente descoberto como um endpoint de DNS, certifique-se de evitar inserir qualquer informação sensível ou pessoalmente identificável ao nomeá-lo.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png" /></div>

Selecione **Next: Networking** para continuar a criar o seu hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png" /></div>

Selecione **Next: Management** para continuar a criar o seu hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png" /></div>

Você pode aceitar as configurações padrão aqui. Se desejar, pode modificar qualquer um dos campos a seguir:

Escolha os endpoints que os dispositivos podem usar para se conectar ao seu IoT Hub. Você pode selecionar a configuração padrão, Public access, ou escolher Private access. Aceite a configuração padrão neste exemplo.

- **Pricing and scale tier**

Seu nível selecionado. Você pode escolher entre vários níveis, dependendo de quantos recursos deseja e de quantas mensagens você envia pela sua solução por dia. O nível gratuito é destinado a testes e avaliação. Ele permite que 500 dispositivos sejam conectados ao hub e até 8.000 mensagens por dia. Cada assinatura do Azure pode criar um IoT Hub no nível gratuito.

Se você estiver seguindo um Quickstart para IoT Hub device streams, selecione o nível gratuito.

- **IoT Hub units**

O número de mensagens permitidas por unidade por dia depende do nível de preços do seu hub. Por exemplo, se você quiser que o hub ofereça suporte à entrada de 700.000 mensagens, escolha duas unidades do nível S1. Para detalhes sobre as outras opções de nível, consulte [Choosing the right IoT Hub tier](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling).

- **Microsoft Defender for IoT**

Ative esta opção para adicionar uma camada extra de proteção contra ameaças ao IoT e aos seus dispositivos. Esta opção não está disponível para hubs no nível gratuito. Saiba mais sobre recomendações de segurança para o IoT Hub no Defender for IoT.

- **Role-based access control**

Escolha como o acesso ao IoT Hub é gerenciado, se as políticas de acesso compartilhado são permitidas ou se apenas o controle de acesso baseado em função é suportado. Para mais informações, consulte [Control access to IoT Hub by using Azure Active Directory](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac).

- **Device-to-cloud partitions**

Esta propriedade relaciona as mensagens de dispositivo para nuvem ao número de leitores simultâneos das mensagens. A maioria dos hubs precisa de apenas quatro partições.

Selecione **Next: Tags** para continuar para a próxima tela.

Tags são pares nome/valor. Você pode atribuir a mesma tag a vários recursos e grupos de recursos para categorizar recursos e consolidar a cobrança. Neste documento, você não adicionará nenhuma tag. Para mais informações, consulte [Use tags to organize your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png" /></div>

Selecione **Next: Review + create** para revisar suas escolhas. Você verá algo semelhante a esta tela, mas com os valores que selecionou ao criar o hub.

Deixamos o restante do conteúdo como padrão e não o modificamos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg" /></div>

Selecione **Create** para iniciar a implantação do seu novo hub. Sua implantação ficará em andamento por alguns minutos enquanto o hub está sendo criado. Quando a implantação for concluída, selecione **Go to resource** para abrir o novo hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg" /></div>

Você pode alterar as configurações de um IoT Hub existente depois que ele for criado, a partir do painel do IoT Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg" /></div>

## Criar chave secreta compartilhada

Clique em **Add Shared Access Policy** e crie uma nova política de acesso com as seguintes permissões: **Registry Read**, **Registry Write**, **Device Connect**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg" /></div>

Após a criação, quatro conjuntos de chaves secretas serão gerados automaticamente, a que precisamos copiar é a **Primary connection string**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png" /></div>

:::note
Não vaze sua cadeia de conexão primária, caso contrário, outras pessoas poderão acessar seu Azure IoT Hub a qualquer momento e obter todas as permissões que você configurou para ele.
:::

## Integração com Helium

Agora podemos voltar ao [console da Helium](https://console.helium.com/integrations) e criar a integração do Azure com a Helium.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png" /></div>

Clique em **Add Integration** na nova página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png" /></div>

Preencha a **Primary connection string** gerada acima na nova página e a Helium irá gerar automaticamente o restante do conteúdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png" /></div>

Por fim, basta nomear esta integração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png" /></div>

## Integração de Conexão

Agora, use a interface de clicar e arrastar no Helium Console para conectar o dispositivo à função (Decoder) e à Azure Integration, como mostrado [anteriormente](https://wiki.seeedstudio.com/pt-br/Helium-Introduction/#fluxos-do-helium-console).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg" /></div>

Neste ponto, siga os [passos anteriores](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/#enviar-código-enviar-dados-para-helium) para enviar o código novamente, e o Wio Terminal irá se reconectar à Helium e enviar os dados.

Após a conclusão da integração e o seu dispositivo ingressar na LoRaWAN® para enviar dados para a Helium o tempo todo, um dispositivo deve aparecer no painel Device do Azure IoT Hubs com o Device ID da Helium Network.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg" /></div>

Também podemos verificar o sucesso do envio de dados conferindo os dados retornados pelo monitor serial.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

Quando você clicar em “Overview” em IoT Hubs, também deverá ver mensagens fluindo através dos IoT Hubs e um dispositivo listado como “Connected”.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg" /></div>

- **Number of messages used:** Número total de mensagens usadas (máx.).

- **Device to cloud messages:** Mensagens de telemetria enviadas (contagem).

- **Connected Devices:** Dispositivos conectados (máx.).

- **Total IoT Devices:** Total de dispositivos (máx.).

Então, neste ponto do tutorial, você concluiu toda a implantação do sensor local para a nuvem Azure. Em seguida, você tem a opção de personalizar o processamento dos dados de acordo com suas necessidades, consulte [aqui](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging).

Claro, você também pode continuar o conteúdo do nosso tutorial para aprender como usar a integração Web APP da Microsoft para concluir a visualização dos seus dados.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Configurando a Visualização via Web APP</strong><br /><br />Esta seção descreve como visualizar as informações de dados recebidas pelo Microsoft Azure usando a integração gratuita Web APP.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Configuring-Web-APP-Visualization">Vamos começar &gt;</a></td>
    </tr>
  </tbody></table>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca comercial da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
