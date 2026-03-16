---
description: MT3620 Ethernet Shield v1.0
title: MT3620 Ethernet Shield v1.0
keywords:
  - Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /MT3620_Ethernet_Shield_v1.0
sku: 103990403
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/MT3620_Ethernet_Shield_v1.0/
---

![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/product_picture.png)

[Azure Sphere MT3620 Development kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) vem com quatro headers de 2,54 mm para extensão dos recursos de hardware a partir do MT3620. O MT3620 Ethernet Shield é uma placa breakout adicional projetada para o kit de desenvolvimento MT3620. O Azure Sphere Ethernet Shield habilita suporte apenas para conexão LAN privada. Consulte [aqui](https://docs.microsoft.com/en-us/azure-sphere/network/connect-private-network) para mais detalhes.

Microsoft Azure Sphere é uma solução para criar dispositivos com MCU conectados e altamente seguros. Azure Sphere reúne o melhor da experiência da Microsoft em nuvem, software e silício — resultando em uma abordagem única de segurança que começa no silício e se estende até a nuvem. Juntos, os MCUs certificados Azure Sphere, o Azure Sphere OS e o Azure Sphere Security Service fornecem a você a confiança e o poder para reinventar seu negócio e criar o futuro.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
Wi-Fi externo é necessário para acesso à internet e aos serviços do Azure Sphere. O Azure Sphere não oferece suporte a roteamento ou bridge entre a LAN privada e a interface Wi‑Fi.
:::

## Recursos

- Processador: Microchip, ENC28J60
- Controlador Ethernet compatível com IEEE 802.3TM
- Totalmente compatível com redes 10/100/1000Base-T
- MAC integrado e PHY 10Base-T
- Suporta uma porta 10Base-T com detecção e correção automáticas de polaridade
- Suporta modos full e half-duplex
- Interface SPI com frequências de clock de até 20 MHz
- Temperatura de operação (℃): 0 ~ +70℃

:::note
Se você precisar que funcione em -40 ~ +85℃, entre em contato com iot@seeed.cc para customização.
:::

## Visão geral de hardware

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> J1**: interface RJ45, está conectada ao ENC28J60.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J1.png)

- **<font face="" size="3" font color="ff0000">②</font> LED1**: LED vermelho de alimentação de 3,3 V, quando você energizar a placa, o LED será ligado.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/led.png)

- **<font face="" size="3" font color="ff0000">③</font> U1**: ENC28J60, controlador Ethernet autônomo com interface SPI, que converte SPI para interface Ethernet.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/U1.png)

- **<font face="" size="3" font color="ff0000">④</font> H4**: Azure Sphere (MT3620 Development Board), header de extensão, H4

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H4.png)

- **<font face="" size="3" font color="ff0000">⑤</font> H3**: Azure Sphere (MT3620 Development Board), header de extensão, H3

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H3.png)

- **<font face="" size="3" font color="ff0000">⑥</font> H2**: Azure Sphere (MT3620 Development Board), header de extensão, H2

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H2.png)

- **<font face="" size="3" font color="ff0000">⑦</font> H1**: Azure Sphere (MT3620 Development Board), header de extensão, H1

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H1.png)

- **<font face="" size="3" font color="ff0000">⑧</font> J2**: Header de pinos UART3, está conectado aos pinos MT3620 GPIO66~GPIO69.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J2.png)

**Pinagem**

- Os H1/H2/H3/H4 são os mesmos da pinagem da placa Azure Sphere.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**Dimensões**

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing1.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing2.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing3.png)

## Ideias de aplicação

- Residências/Prédios/Instalações
- Automação
- Segurança
- Gerenciamento de equipamentos
- Serviços públicos
- Segurança pública

:::tip
Para entender como o Azure Sphere funciona em um cenário do mundo real, considere o [cenário da Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Primeiros passos

### Pré-requisitos

**Instalar o Azure Sphere**

Se você tem um kit de desenvolvimento Azure Sphere que ainda não foi utilizado, conclua [estas etapas](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primeiro para começar a usá-lo.

**Biblioteca do MT3620 Ethernet Shield**

Este aplicativo em C de exemplo demonstra como você pode [conectar um dispositivo Azure Sphere a uma rede Ethernet privada](https://docs.microsoft.com/azure-sphere/network/connect-private-network). <!-- 链接404 -->Ele configura o dispositivo Azure Sphere para executar um servidor DHCP e um servidor SNTP, e também implementa um servidor TCP básico. As etapas abaixo mostram como verificar essa funcionalidade conectando seu computador a essa rede privada.

Os servidores DHCP e SNTP são gerenciados pelo Azure Sphere OS, de acordo com a configuração fornecida pelo aplicativo. Esses servidores serão iniciados somente depois que o aplicativo solicitar, mas continuarão em execução mesmo se o aplicativo parar.

O servidor TCP é executado no próprio processo do aplicativo e será interrompido quando o aplicativo parar. Observe que esta implementação de servidor TCP de exemplo é básica, apenas para ilustração, e não autentica nem criptografa conexões: você deve substituí-la pela sua própria lógica de produção.

O exemplo usa as seguintes bibliotecas do Azure Sphere e inclui [APIs beta](https://docs.microsoft.com/azure-sphere/app-development/use-beta).

|Library   |Purpose  |
|---------|---------|
|log     |  Exibe mensagens na janela Visual Studio Device Output durante a depuração  |
|networking    | Obtém e define a configuração da interface de rede |

:::note
Atualmente o MT3620 Ethernet Shield não oferece suporte à conexão com a internet porque o software da Microsoft não está pronto. Ele oferece suporte apenas à conexão com o PC.
:::

**Conexão de hardware**

| Kits de desenvolvimento MT3620 | MT3620 Ethernet Shield |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/ethernet_s.png)|
|[Get One Now](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html)|

- Passo 1. Conecte o MT3620 Ethernet Shield à placa de desenvolvimento Azure Sphere MT3620.
- Passo 2. Conecte o cabo USB à placa de desenvolvimento Azure Sphere MT3620 e ao PC.
- Passo 3. Conecte o cabo de rede entre a placa MT3620 Ethernet e o PC.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/stack_with_azuresphere.png)

**Compilar e executar o exemplo**

- Configure seu dispositivo Azure Sphere e o ambiente de desenvolvimento conforme descrito na [documentação do Azure Sphere](https://docs.microsoft.com/azure-sphere/install/install).<!-- 链接404 -->
- Mesmo que você já tenha feito essa configuração anteriormente, certifique-se de ter a versão 19.02 ou superior do Azure Sphere SDK. Em um Azure Sphere Developer Command Prompt, execute **azsphere show-version** para verificar. Baixe e instale o [SDK mais recente](https://aka.ms/AzureSphereSDKDownload), se necessário.
- Conecte seu dispositivo Azure Sphere ao seu PC via USB.
- Habilite o [desenvolvimento de aplicativos](https://docs.microsoft.com/azure-sphere/quickstarts/qs-blink-application#prepare-your-device-for-development-and-debugging), <!-- 链接404 -->se ainda não tiver feito isso:

   `azsphere device prep-debug`

- Empacote e faça o deploy da [imagem de configuração da placa](https://docs.microsoft.com/azure-sphere/network/connect-private-network)<!-- 链接404 --> para o chip Ethernet Microchip ENC286J60:

   `azsphere image package-board-config --preset lan-enc28j60-isu0-int5 --output enc28j60-isu0-int5.imagepackage`

   `azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage`

- Clone o repositório [Azure Sphere samples](https://github.com/Azure/azure-sphere-samples) e encontre o exemplo PrivateEthernet.
- No Visual Studio, abra PrivateEthernet.sln e pressione F5 para compilar e gerar a solução e carregá-la no dispositivo para depuração.
- Deixe o aplicativo em execução enquanto você executa as seguintes etapas.

**Solução de problemas**

Se você vir inúmeros erros na Lista de Erros do Visual Studio relacionados a cabeçalhos ausentes e identificadores indefinidos, ou se ao compilar o aplicativo você vir o seguinte erro na Janela de Saída de Compilação do Visual Studio:

   `error MSB6004: The specified task executable location "C:\Program Files (x86)\Microsoft Azure Sphere SDK\\SysRoot\tools\gcc\arm-poky-linux-musleabi-gcc.exe" is invalid.`

Então é provável que você tenha uma versão antiga do Azure Sphere SDK instalada; certifique-se de ter a versão 19.02 ou mais recente.

**Configurar a conexão Ethernet no seu computador**

- Abra Settings e clique em **Network and Internet** > **Change adapter options**.  
- Clique com o botão direito no seu adaptador Ethernet e selecione **Properties**.
- Na janela **Ethernet Properties**, desabilite todos os itens, exceto **Internet Protocol Version 4 (TCP/IPv4)**.
- Selecione **Internet Protocol Version 4 (TCP/IPv4)** e clique no botão **Properties** para abrir a janela **Internet Protocol Version 4 (TCP/IPv4) Properties**.
- Verifique se "Obtain IP address automatically" está selecionado. (Versões anteriores deste exemplo exigiam a configuração de um endereço IP estático neste ponto. Isso não é mais necessário porque o aplicativo agora oferece um servidor DHCP.)
- Clique em **OK** para fechar a **janela de propriedades IPv4** e, em seguida, feche a janela **Propriedades de Ethernet**.
- Conecte um cabo Ethernet do ENC286J60-H à conexão Ethernet do seu computador.

:::note
Se o seu computador for gerenciado por políticas que o impedem de se conectar a várias interfaces de rede ao mesmo tempo, talvez seja necessário desativar outras interfaces de rede enquanto usa este exemplo.
:::

:::note
Os exemplos usam a faixa de endereços IP 192.168.100.xxx. Se você tiver outro adaptador de rede usando a mesma faixa, então será necessário modificar o exemplo ou desativar temporariamente o outro adaptador de rede.
:::

**Testar o servidor DHCP do dispositivo**

Abra um prompt de comando em seu computador e digite **ipconfig**. Você deverá ver que o servidor DHCP atribuiu o endereço IP 192.168.100.11 ao seu PC para sua conexão Ethernet:

```sh
Ethernet adapter <name>:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::8c67:be24:4d9a:d4bb%9
   IPv4 Address. . . . . . . . . . . : 192.168.100.11
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . :
```

Você também pode encontrar, baixar e usar uma ferramenta de teste de cliente DHCP em seu PC para inspecionar a resposta do servidor DHCP com mais detalhes – por exemplo, para ver o(s) endereço(s) do servidor NTP retornado(s).

**Testar o servidor SNTP do dispositivo**

- Certifique-se de que o dispositivo esteja [conectado ao Wi-Fi](https://docs.microsoft.com/azure-sphere/install/configure-wifi), para que ele possa obter a hora de um servidor NTP público. O próprio servidor SNTP do dispositivo não responderá até saber a hora atual.
- Abra um prompt de comando em seu computador e digite **w32tm /stripchart /computer:192.168.100.10 /dataonly /samples:1**. Isso invoca a [ferramenta Windows Time](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings) para consultar o servidor SNTP do dispositivo e exibir a diferença calculada entre a hora do seu computador e a hora do dispositivo:

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:18:09.
   14:18:09, +00.0349344s
   ```

- Se o servidor SNTP não estiver em execução ou não responder, você poderá ver a seguinte saída. Verifique se o aplicativo está em execução e se o Wi-Fi está configurado.

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:16:50.
   14:16:50, error: 0x800705B4
   ```

**Testar o servidor TCP do aplicativo**

Verifique se o aplicativo de exemplo ainda está em execução em seu dispositivo Azure Sphere. Em seguida, em seu computador, use um aplicativo de terminal para abrir uma conexão TCP bruta com o servidor TCP do aplicativo Azure Sphere em 192.168.100.10 porta 11000. Você pode abrir essa conexão com um aplicativo de terminal de terceiros, como o PuTTY (usando o tipo de conexão "raw"), ou com o cliente Telnet integrado do Windows.

Para usar o cliente Telnet integrado do Windows:

- Abra o Painel de Controle e clique em **Programas e Recursos** > **Ativar ou desativar recursos do Windows** para abrir a janela **Recursos do Windows**.
- Verifique se **Cliente Telnet** está selecionado e clique em **OK**.
- Abra um prompt de comando e digite **telnet 192.168.100.10 11000**.

Os caracteres que você digitar serão exibidos no console de depuração no Visual Studio – imediatamente ou quando você inserir uma nova linha – mostrando que foram recebidos pelo servidor TCP de exemplo no MT3620. Além disso, quando você inserir uma nova linha, o MT3620 enviará uma string de volta ao terminal, que diz:

   ```sh
   Received "<last-received-line>"
   ```

Observe que este servidor de exemplo possui um buffer de entrada simples de 16 caracteres. Se você enviar mais do que isso, a janela Saída no Visual Studio poderá mostrar: "Input data overflow. Discarding 16 characters."

**Solução de problemas**

- Se você executar o exemplo sem o ENC28J60 conectado (ou conectado incorretamente), o aplicativo de exemplo será encerrado imediatamente. A saída de depuração mostrará um erro como "ERROR: Networking_SetStaticIp: 5 (I/O error)" pouco antes de encerrar. Se você posteriormente conectar ou corrigir a conexão com o ENC28J60, também deverá redefinir o MT3620.
- Se você executar o exemplo sem que a configuração da placa esteja carregada no dispositivo, o aplicativo de exemplo será encerrado imediatamente. A saída de depuração mostrará um erro como "ERROR: Networking_SetStaticIp: 2 (No such file or directory)" pouco antes de encerrar.

**Removendo a configuração da placa Ethernet**

Se você não precisar mais de Ethernet, por exemplo porque deseja usar sua placa para um projeto diferente, será necessário remover manualmente a imagem de configuração da placa Ethernet:

- Encontre a imagem instalada com o tipo 'Board config' e anote seu ID de componente:

   `azsphere device image list-installed`

- Exclua esta imagem:

   `azsphere device sideload delete --componentid <component ID>`

- Pressione o botão de reset na placa de desenvolvimento MT3620.

**Nota:** Este exemplo usa ISU0 (porta I2C/SPI/UART 0) no MT3620, que também é usada por outros exemplos. Outros exemplos podem ser adaptados para usar uma porta ISU diferente. Por enquanto, não é possível adaptar este exemplo de Ethernet privada para usar outra porta ISU.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/MT3620%20Ethernet%20Shield_v1.0_SCH_181220.pdf)
- **[Eagle]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip)
- **[Desenho Mecânico]** [MT3620 Ethernet Shield Desenho Mecânico](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/103990403%2C%20MT3620%20Ethernet%20Shield%20v1.0.pdf)
<!-- - **[Library]** [MT3620 Ethernet Shield Library](https://github.com/Azure/azure-sphere-samples/tree/master/Samples/PrivateEthernet)链接缺失 -->
- **[DataSheet]** [ENC28J60 Datasheet](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/ENC28J60.pdf)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
