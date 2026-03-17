---
description: Plataforma AWS IoT Integrada
title: Plataforma AWS IoT Integrada
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connect_AWS_via_helium
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Connect_AWS_via_helium/
---
# Conectar AWS IOT Core via Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/AWS_IOT_Monitor.png" /></div>

## Atualizável para sensores industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o registrador de dados [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A caixa com classificação IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temperatura &amp; Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temperatura &amp; Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Introdução ao AWS IoT Core

O AWS IoT Core fornece os serviços em nuvem que conectam seus dispositivos IoT a outros dispositivos e aos serviços em nuvem da AWS. O AWS IoT fornece software para dispositivos que pode ajudar você a integrar seus dispositivos IoT em soluções baseadas em AWS IoT. Se seus dispositivos podem se conectar ao AWS IoT, o AWS IoT pode conectá-los aos serviços em nuvem que a AWS oferece.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/what-is-aws-iot.png" /></div>

O AWS IoT permite que você selecione as tecnologias mais apropriadas e atualizadas para sua solução. Para ajudar você a gerenciar e oferecer suporte aos seus dispositivos IoT em campo, o AWS IoT Core oferece suporte a estes protocolos:

- MQTT (Message Queuing and Telemetry Transport)
- MQTT over WSS (Websockets Secure)
- HTTPS (Hypertext Transfer Protocol - Secure)
- LoRaWAN® (Long Range Wide Area Network)

O AWS IoT Core é uma oferta poderosa que permite aos desenvolvedores criar aplicativos e serviços baseados em dispositivos na Nuvem AWS. E esta integração via Helium Console automatiza a complexidade de conectar seus dispositivos com segurança ao AWS IoT Core.

:::note
Talvez seja necessário pagar pelo AWS IoT Core para experimentar todo o conteúdo deste tutorial. Uma lista detalhada de pagamentos e custos que você pode estimar está disponível [aqui](https://calculator.aws/#/estimate).

Com base na frequência de envio do código que fornecemos (envio de dados em intervalos de aproximadamente 15 segundos), aproximadamente 178.560 mensagens serão enviadas em um mês, com um tamanho de mensagem de aproximadamente 3 a 4 KB e um custo mensal de 0,18 USD.
<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/K1100/66.png"/></div>
:::

## Inscreva-se no AWS IoT Core

Acesse o [site do AWS IoT Core](https://portal.aws.amazon.com/billing/signup#/start/email) e registre uma conta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/45.png" /></div>

Preencha um e-mail com seu endereço de e-mail registrado e um nome de usuário e você receberá um e-mail da AWS com o código de verificação de seis dígitos necessário para o registro.

Digite seu código de verificação e o registro estará concluído. Faça login no AWS IoT Core com o endereço de e-mail que você acabou de preencher.

Após o login, você precisará continuar preenchendo informações pessoais, como senhas e contatos. Em seguida, será necessário vincular um cartão de crédito para verificar suas informações pessoais.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/46.png" /></div>

Quando fizermos login no console do AWS IoT Core, basta selecionar o **Root user** para fazer login.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/48.png" /></div>

## Criar acesso ao AWS IoT Core

Crie um novo usuário com permissões limitadas que esta integração usará na AWS.

1. Abra o [AWS Console](https://console.aws.amazon.com/).

2. Clique no menu Services no canto superior esquerdo, vá para **Security, Identity, & Compliance** e então clique em **IAM**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/47.png" /></div>

Agora vamos criar um novo **User**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/49.png" /></div>

Defina o nome de usuário e selecione apenas **Acess key - Programmatic access**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/50.png" /></div>

Na próxima página, selecione **Attach existing policies directly** e digite **AWSIoTConfigAccess** na caixa **Filter Policies** e marque a caixa à esquerda da linha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/55.png" /></div>

Para as outras páginas deixamos o padrão ou deixamos em branco e apenas continuamos clicando em **Next** no canto inferior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/51.png" /></div>

Agora anexamos uma política ao usuário recém-criado que define quais permissões ele possui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/52.png" /></div>

:::note

Certifique-se de registrar e armazenar essas chaves com segurança, pois você não terá outra oportunidade de obter acesso a elas novamente!
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/56.png" /></div>

## Adicionar integração do AWS IoT Core no Helium

Podemos voltar ao [console Helium](https://console.helium.com/integrations) e criar a integração AWS IoT Core para Helium.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/43.png" /></div>

Clique em **Add Integration** na nova página.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/44.png" /></div>

Preencha a integração Helium AWS IoT Core com a Access Key e a Secret Key, respectivamente, que são geradas no conteúdo de **Create access to AWS IoT Core**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/57.png" /></div>

Em Region, você precisa preencher o mesmo código de região do endereço onde o servidor do AWS IoT Core está localizado. Isso fica no canto superior direito do console do AWS IoT Core, ao lado do nome de usuário.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/61.png" /></div>

A área destacada pode ser ajustada pelo usuário. Aqui, por exemplo, selecionei a região onde o servidor está localizado como **US East (N. Virginia)** e o código da região como **us-east-1**. Correspondentemente, em Region do Helium eu preciso preencher **us-east-1**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/62.png" /></div>

O campo Topic é o tópico MQTT do AWS IoT para o qual essa integração publicará mensagens uplink, vindas dos dispositivos.

Por fim, damos um nome à nossa nova Integration e clicamos em Create Integration. Sua nova Integration agora está pronta para uso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/58.png" /></div>

## Conectando Integrações a Dispositivos

Agora, use a interface de clicar e arrastar no Helium Console para conectar o dispositivo à função (Decoder) ao AWS IoT Core, conforme mostrado [anteriormente](https://wiki.seeedstudio.com/pt-br/Helium-Introduction/#helium-console-flows).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/59.png" /></div>

Neste ponto, siga os [passos anteriores](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/#upload-code-send-data-to-helium) para enviar o código novamente, e o Wio Terminal se reconectará ao Helium e enviará os dados.

Também podemos verificar se o envio de dados foi bem-sucedido conferindo os dados retornados pelo monitor serial.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

No console do AWS IoT Core, pesquise por **IoT Core** para acessar a interface de gerenciamento de dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/60.png" /></div>

- No painel **Monitor** você pode ver e configurar vários painéis de detecção de dados para visualizar melhor como os dados do sensor estão sendo recebidos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_1.png" /></div>

- Em **AWS IOT core -> All devices -> Things** você pode ver as informações de ID do dispositivo atual e também o status de atividade dos dados em **AWS IOT core -> All devices -> Things -> Activity**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/63.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_4.png" /></div>

- As mensagens uplink dos dados podem ser visualizadas em **AWS IOT core -> MQTT test client**.

Na aba **Subscribe to a topic**, insira o topicName para assinar o tópico no qual seu dispositivo publica. Para o aplicativo de exemplo de primeiros passos, assine **#**, que assina todos os tópicos de mensagem.

A página de log de mensagens de tópico, **#** é aberta e **#** aparece na lista **Subscriptions**. Se o dispositivo que você configurou em Configure your device estiver executando o programa de exemplo, você deverá ver as mensagens que ele envia ao AWS IoT no log de mensagens **#**. As entradas do log de mensagens aparecerão abaixo da seção Publish quando mensagens com o tópico assinado forem recebidas pelo AWS IoT.

As mensagens publicadas em tópicos assinados aparecem no log de mensagens à medida que são recebidas, com a mensagem mais recente primeiro.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/64.png" /></div>

A mensagem recebida é semelhante à mostrada abaixo. Os dados que são úteis para nós são geralmente o conteúdo após o **payload**, que mostra os valores dos sensores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/65.png" /></div>

Neste ponto, concluímos toda a integração do Helium ao AWS IoT Core. Se você quiser fazer mais com seus dados por meio do AWS IoT Core, pode consultar o [Documentation Centre of AWS IoT Core](https://docs.aws.amazon.com/iot/index.html) para continuar aprendendo em maior profundidade.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
