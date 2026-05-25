---
description: Introdução ao Helium
title: Introdução ao Helium
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Helium-Introduction
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Helium-Introduction/
---
# Introdução ao Helium

Neste capítulo, apresentaremos os controles do console Helium que usamos para obter uma primeira impressão do console Helium.

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria embutida de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

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

## Usando o Helium pela primeira vez

Se esta é a sua primeira vez usando o Helium, consulte esta seção para concluir o registro da sua conta Helium e o uso dos componentes.

### Registrar uma conta Helium

Acesse o [site do Helium](https://console.helium.com/), depois preencha o endereço de e-mail que você deseja registrar, clique em **Submit**, o Helium enviará um e-mail de login para esse endereço de e-mail para concluir o registro.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/105.png" /></div>

Faça login no seu próprio e-mail, clique no e-mail enviado pelo Helium e volte para a página de login do Helium para concluir o seu registro. O método de login futuro é o mesmo que este.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/106.png" /></div>

Quando você se torna um novo membro do Helium e tem dados de dispositivo para enviar ao Helium, você receberá **250 DATA CREDITS**. E 1 DC = Pacote de 24 Bytes = US$ 0,00001. Apenas 250 DCs podem não ser suficientes para colocar seu projeto em operação. Você pode optar por obter DC do Helium.

### Helium Console - Flows

Flows é uma visualização centrada em gráficos dos elementos-chave no Console e permite que os usuários compreendam instantaneamente a relação entre dispositivos, funções e integrações.

Quando toda a configuração estiver concluída, cada elemento-chave será exibido abaixo da coluna Flow e os elementos serão conectados diretamente a outros elementos por meio de linhas tracejadas personalizadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/107.png" /></div>

Há uma aba **Nodes** no canto superior esquerdo da área de trabalho. Os nós são representações gráficas dos elementos do Console e, para identificação rápida, são codificados por cores. Pontos de conexão são usados para criar relações entre os nós.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/108.png" /></div>

Devices: nós de dispositivo representam o hardware que está enviando os pacotes. Como os dispositivos são a fonte dos dados e as integrações só podem receber dados, há apenas um ponto de conexão para as arestas.

<div align="center"><img width={230} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/109.png" /></div>

Labels: nós de rótulo representam um grupo de dispositivos com algo em comum.

<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/110.png" /></div>

Functions: os usuários podem transformar e/ou analisar payloads antes de enviá-los para um endpoint. As funções podem tanto receber dados de dispositivos quanto continuar enviando dados, depois de agir, para integrações.

<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/111.png" /></div>

Integrations: permitem que os dispositivos se comuniquem com endpoints do cliente via HTTP ou MQTT.

<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/112.png" /></div>

As arestas representam o fluxo de dados de nós de dispositivo ou rótulo movendo-se da esquerda para a direita. As arestas usam pontos de conexão para criar relações entre nós.

Os usuários podem controlar o fluxo de dados do dispositivo usando arestas para fornecer as seguintes conexões de dispositivos/grupos de dispositivos (via rótulos):

- para integrações
- para funções
- para funções e depois para integrações

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/113.png" /></div>

Podemos construir conexões entre diferentes nós arrastando com o botão esquerdo do mouse para clicar nos pontos de conexão em ambos os lados dos nós.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/124.png" /></div>

O Inspector oferece a capacidade de:

- Inspecionar visualmente os detalhes do nó
- Fazer alterações comuns de configuração de nós
- Acessar o nó em outras áreas do Console para edições mais completas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/114.png" /></div>

Para acessar o Inspector, basta clicar em um nó e diferentes opções aparecem para o seguinte:

- Devices ou Labels
- Functions
- Integrations

A ferramenta Console Debug permite que você examine rapidamente e com facilidade as mensagens do dispositivo. Isso possibilita verificar e depurar problemas com muito mais facilidade, sem exigir que os dados sejam enviados primeiro para um endpoint de aplicação. Por motivos de segurança e privacidade, a ferramenta Debug não mantém os dados. Em vez disso, os 40 eventos mais recentes são acumulados a partir do momento em que a janela Debug é aberta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/115.png" /></div>

- Para mais informações sobre o Modo Debug, acesse [aqui](https://docs.helium.com/use-the-network/console/debug).

- Para mais informações sobre como configurar o Flow neste tutorial, consulte aqui.

### Helium Console - Dispositivos

O Helium Console permite que desenvolvedores adicionem dispositivos e obtenham os identificadores do dispositivo para carregar no firmware, o que autentica e identifica o dispositivo para a Helium Network.

Para adicionar um dispositivo, vá em **Devices** e clique no ícone **+ Add Device** no canto superior direito da janela.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/116.png" /></div>

:::note
Os usuários do Helium Console têm um limite de uma Organization e 10 dispositivos por conta.
:::
Quando solicitado, insira um nome para o seu dispositivo. Os nomes dos dispositivos não precisam ser exclusivos (pois cada dispositivo receberá um identificador exclusivo gerado pelo Console). **DevEUI**, **AppEUI** e **AppKey** são gerados automaticamente pelo Helium Console quando você cria um novo dispositivo. No entanto, você pode inserir seu próprio **DevEUI**, **AppEUI** e **AppKey** se o seu dispositivo já estiver provisionado com essas credenciais.

- Device EUI - identificador de dispositivo final de 64 bits, às vezes chamado de Manufacturer EUI
- App EUI - identificador de aplicação de 64 bits
- App Key - chave AES de 128 bits, usada para proteger a comunicação entre o dispositivo e a rede

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/117.png" /></div>

Depois de adicionado, você verá uma visão consolidada de todos os detalhes do seu dispositivo, bem como o Método de Ativação (atualmente apenas OTAA é suportado) e os Canais LoRaWAN® US usados pela Helium Network (que serão sempre a sub-banda 2).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/118.png" /></div>

:::note
Esse processo inicial de join pode levar até 20 minutos, dependendo de:

- quando essa transação (agrupada com outras) é adicionada ao blockchain
- o desempenho geral do blockchain

Após o join inicial, futuros rejoins do mesmo dispositivo serão muito mais rápidos.
:::

- Para mais detalhes sobre dispositivos Helium, consulte [aqui](https://docs.helium.com/use-the-network/console/migrating-devices).

- Para informações sobre como adicionar dispositivos Grove - Wio-E5 ao Helium Console, consulte [aqui](#jump1).

### Helium Console - Functions

Com a Decoder Function, os usuários podem transformar e/ou analisar um payload bruto antes que ele seja enviado para um endpoint.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/119.png" /></div>

Quando uma Decoder Function é aplicada a um dispositivo ou integração, o código da Decoder Function é executado no payload enviado pelo dispositivo. A Decoder Function pode ser escrita usando código JavaScript personalizado fornecido pelo usuário ou selecionada a partir de decoders pré-construídos (atualmente Browan Object Locator e Cayenne LPP).

Os decoders do Console são compatíveis com os decoders do The Things Network (TTN), que já estão disponíveis para uma grande variedade de dispositivos.

Para começar a criar uma nova função dentro do Helium Console, selecione Functions na navegação do lado esquerdo. Em seguida, crie uma nova Function clicando no ícone Add New Function **+**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/120.png" /></div>

Dê um nome à sua nova Function, selecione "Decoder" como Function Type e "Custom Script" como Format se quiser inserir seu próprio script, ou selecione entre os decoders predefinidos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/121.png" /></div>

Em seguida, precisamos inserir o JavaScript que irá decodificar os nossos payloads. O Script Validator permite testar facilmente entradas em forma hexadecimal para garantir que o seu script será executado com sucesso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/122.png" /></div>

- Além disso, para fornecer um decoder personalizado, uma lista crescente de funções criadas pela comunidade pode ser encontrada [aqui](https://github.com/helium/console-decoders).

- Para mais informações sobre como criar e anexar funções, confira nosso vídeo de Dicas e Truques [aqui](https://youtu.be/UNUOLbIKXww).

- Como escrever o decoder personalizado para cada sensor neste tutorial pode ser encontrado aqui.

### Helium Console - Integrations

As integrações permitem que dispositivos se conectem a aplicações em nuvem pré-configuradas ou enviem dados diretamente via HTTP ou MQTT.

Para adicionar uma nova integração, navegue até a página **Integrations** usando a navegação do lado esquerdo, clique em Add New Integration **+** e depois selecione entre as integrações disponíveis.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/123.png" /></div>

Um número indica que uma Integration foi adicionada.

- Para um vídeo passo a passo sobre como usar Integrations, confira nosso vídeo de Dicas e Truques [aqui](https://youtu.be/lnERw1f7TGE).

- Como adicionar a Azure IoT Hub Integration neste tutorial pode ser encontrado [aqui](https://wiki.seeedstudio.com/pt-br/Integrate-into-Azure-IoT-Hub/).

Por favor, continue com o próximo passo do tutorial [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/).

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Connecting to Helium</strong><br /><br />Esta seção descreve como configurar o Helium para que os dados do sensor possam ser carregados e exibidos com sucesso no Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium">Vamos começar &gt;</a></td>
    </tr></tbody></table>

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

## Declaração

- A marca LoRa® é uma marca comercial da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
