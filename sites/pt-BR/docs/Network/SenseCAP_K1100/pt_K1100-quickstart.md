---
description: Iniciação rápida e sem código com SenseCraft
title: Iniciação rápida e sem código com SenseCraft
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-quickstart
sku: 110991748
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/K1100-quickstart/
---

# Início rápido com SenseCAP K1100 - O Kit de Protótipo de Sensor

## Introdução

**SenseCAP K1100 - The Sensor Prototype Kit** representa a Seeed Studio concentrando a essência da tecnologia de comunicação LoRa® e de produtos de inteligência de borda, para a forma mais fácil de implantar e dominar aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/004(1).jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

Temos orgulho em apresentar o **SenseCraft**, que permite aos nossos usuários experimentar uma forma melhor de enviar dados para a nuvem no menor tempo possível e com um custo prático muito baixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" /></div>

Isso só é possível com a ajuda da nossa plataforma **SenseCAP** totalmente projetada internamente. SenseCAP fornece uma plataforma em nuvem fácil de usar. Os usuários podem escanear o código QR com o **SenseCAP Mate App** para vincular o dispositivo à sua respectiva conta para gerenciar os dispositivos, no ambiente de cobertura de rede LoRaWAN®, e verificar os dados do Sensor Node no SenseCAP Portal. O SenseCAP Portal fornece API para que os usuários possam desenvolver ainda mais com base nos dados do Portal.

Se você não tiver cobertura LoRaWAN® ao seu redor por enquanto, não se preocupe, você pode alternar livremente entre WiFi e LoRa® e também pode transferir dados para **Ubidots**/**Microsoft Azure IoT Central** para processamento adicional de dados via WiFi.

Mal podemos esperar para compartilhar com você o progresso atual do nosso projeto, e damos as boas-vindas a todos os usuários para experimentar o nosso projeto!

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temperatura e umidade do ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temperatura e umidade do ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade e temperatura do solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade e temperatura do solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Visão geral

Com a funcionalidade de IoT como um dos recursos do kit SenseCAP K1100, é necessário dar uma olhada na lógica de sua implementação antes de começarmos.

Para resumir, oferecemos dois caminhos para que nossos usuários experimentem IoT: um é LoRa® e o outro é WiFi.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/lora.png" /></div>

Se você quiser usar LoRa®, então precisará preparar com antecedência um gateway LoRa® adequado e conectar os dados à plataforma SenseCAP usando um módulo Grove Wio E5, conectado a uma LoRaWAN®.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/wifi.png" /></div>

Se você quiser usar WiFi, então você precisa ter cobertura de rede WiFi estável em seu ambiente. Basta inserir seu WiFi e senha no perfil, juntamente com informações como a chave fornecida pela plataforma IoT, para obter uma experiência IoT excepcional.

## Preparação preliminar

Antes de começar, recomendamos fortemente que você atualize para a versão mais recente do SenseCraft para garantir a experiência mais estável.

Você pode baixar e atualizar a versão mais recente na nossa **distribuição SenseCraft** clicando no ícone abaixo.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Claro, você também pode baixar diretamente o arquivo .uf2 mais recente clicando aqui.

<table align="center">
  <tbody><tr>
      <td align="center">SenseCraft-v0.2-20220907.uf2</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/K1100-quick-start/SenseCraft-v0.2-20220907.uf2" target="_blank">Download</a></td>
    </tr>
  </tbody></table>

Depois de baixar o SenseCraft para o seu disco local, siga as instruções abaixo para gravá-lo no Wio Terminal.

Conecte o Wio Terminal ao PC e ligue-o em ON. Entre no **Bootloader Mode** deslizando o interruptor de energia para baixo, afastando-o ainda mais da posição "ON", solte, deslize novamente e solte.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

:::note
Quando o Wio Terminal estiver no modo Bootloader, o LED azul começará a pulsar de uma forma diferente do piscar.
:::

Abra o Explorador de Arquivos no seu PC e você verá uma nova unidade externa chamada **Arduino**; arraste o arquivo **.uf2** baixado anteriormente para essa unidade **Arduino**.

Depois que o flash do SenseCraft for concluído, a memória externa chamada Arduino aparecerá automaticamente e o programa SenseCraft começará a funcionar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/38.png" /></div>

## Navegar pela interface usando os botões

Antes de começar a aprender a interface de operação, você precisa se acostumar com a lógica dos botões que projetamos para o Wio Terminal. Dessa forma, você poderá selecionar e operar as páginas de forma muito fluida de acordo com a lógica fixa dos botões.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/button.png" /></div>

Primeiro, há três botões localizados acima do Wio Terminal. Eles correspondem às telas de exibição das três funções principais. São elas, respectivamente, **Sense**, **Process** e **Uplink**.

Não importa onde você esteja, quando pressionar os três botões na parte superior, você poderá voltar para essas três telas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/101.png" /></div>

Depois há o botão direcional de cinco vias localizado na parte inferior direita do Wio Terminal, que permite realizar as seguintes operações:

- **Esquerda/ Direita:** Percorrer páginas/ menus para a esquerda e para a direita
- **Meio:** Fazer uma seleção
- **Cima:** Voltar para a página anterior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/40.png" /></div>

Quando uma caixa verde aparecer na página, isso indica que o conteúdo está em estado selecionado.

## Lógica das páginas

Como mencionado acima, preparamos três páginas para o SenseCraft, representando os três módulos funcionais principais do SenseCraft, a saber, **Sense**, **Process** e **Uplink**.

### Sense

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

A função principal da página **Sense** é a exibição dos dados dos sensores. Você pode observar o status de funcionamento e os valores dos sensores embutidos no Wio Terminal a partir da página Sense.

Claro, se você tentar conectar os sensores Grove do kit ao conector Grove no lado **direito** do Wio Terminal, verá que o Wio Terminal detectará automaticamente o tipo de sensores e lerá seus valores.

### Process

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/41.png" /></div>

A função principal da página **Process** é mostrar o processo de tratamento dos dados. Atualmente, desenvolvemos a saída de log para esta página para o reconhecimento e o processamento de modelo do módulo Grove Vision AI.

No futuro, daremos ao Wio Terminal capacidades mais poderosas de filtragem e processamento de dados para esta página.

### Uplink

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

A função principal da página **Uplink** é enviar dados para a nuvem. Os usuários podem configurar qual método de IoT desejam usar, LoRa® ou WiFi, nesta página.

Aqui, você pode configurar livremente seus recursos exclusivos de IoT, alternar livremente entre diferentes redes e plataformas e criar valor para este conjunto de dispositivos.

## Exibição de dados dos sensores embutidos

Depois de gravar o **SenseCraft** no Wio Terminal e ligá-lo, aguarde alguns segundos e você poderá ver os valores dos sensores embutidos diretamente na página **Sense**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

O Wio Terminal possui três sensores embutidos: um sensor de luz, um sensor de intensidade sonora e um sensor de três eixos.

Neste momento você não precisa fazer nada, o valor do sensor embutido será atualizado automaticamente uma vez por segundo, e você pode observar de forma muito natural o ambiente atual de luz, intensidade sonora e dados de três eixos.

## Enviar dados dos sensores para o SenseCAP via LoRa®

**Passo 1.** Pressione o botão superior mais à direita para entrar na aba **Network**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

Você notará que LoRa® já está destacado.

**Passo 2.** Pressione o **meio** para selecionar **LoRa®** e conecte o **Grove-Wio E5** ao conector Grove no lado esquerdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/44.png" /></div>

**Passo 3.** Percorra as bandas de frequência LoRaWAN® exibidas na tela e selecione a banda de frequência de acordo com a sua região.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/45.png" /></div>

Agora será exibido um aviso para você vincular o Wio-E5 à plataforma SenseCAP.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/46.png" /></div>

Oferecemos duas maneiras de vincular seu dispositivo na plataforma SenseCAP.

- **Opção 1. Vincular o dispositivo no aplicativo móvel**

Se você quiser usar seu celular para escanear e vincular seu dispositivo, ou visualizar alguns dos dados dos sensores remotamente, faça o download do aplicativo SenseCAP Mate por conta própria de acordo com o link a seguir.

- [SenseCAP Mate APP para iOS](https://apps.apple.com/cn/app/sensecap-mate/id1619944834) na App Store
- [SenseCAP Mate APP para Android](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public) na Google Play Store

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/K1100/2.jpg" /></div>

Abra o SenseCAP Mate APP depois de baixar a versão correspondente do APP de acordo com todos os sistemas móveis que você usa. Se for a primeira vez que você usa a plataforma SenseCAP, registre uma conta primeiro.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/7.jpg" /></div>

:::note
    Selecione a versão **Global** ao se registrar.
:::

Na página de preenchimento das informações de registro, os campos com * são obrigatórios, e aqueles sem * podem ser preenchidos opcionalmente. Clique no botão Register depois que tudo estiver concluído.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/8.jpg" /></div>

Em seguida, use a conta que você acabou de registrar para fazer login no APP.

Selecione Device directory na parte inferior da interface principal, onde você pode ver as informações de todos os dispositivos SenseCAP que você vinculou.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/9.jpg" /></div>

Clique no **+** no canto superior direito e selecione **Add device** para vincular o Grove - Wio-E5.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100-quick-start/10.jpg" /></div>

Alinhe a caixa no centro da câmera com o código QR **na parte de trás** do Grove - Wio-E5 para escanear o código e vincular seu kit. **Observe que o código QR na parte frontal do Wio E5 não deve ser escaneado**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100-quick-start/49.png" /></div>

Após a vinculação bem-sucedida usando o SenseCAP Mate App, você verá os dados dos sensores exibidos no aplicativo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/104.jpg" /></div>

:::tip
 O SenseCAP Mate App não atualizará automaticamente as informações de dados, você precisará rolar manualmente para baixo na página do sensor para atualizar os dados.
 Se você não vir novos dados por mais de 10 minutos, pode tentar reiniciar o Wio Terminal alternando o botão lateral uma vez para baixo.
:::

- **Opção 2. Vincular o dispositivo na plataforma web SenseCAP**

Use seu navegador para abrir o [SenseCAP Console](https://sensecap.seeed.cc/portal/#/login). Se esta for a primeira vez que você usa nossa plataforma, registre uma conta primeiro.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/3.png" /></div>

Em seguida, faça login no console SenseCAP usando a conta que você acabou de registrar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/4.png" /></div>

Selecione a tela **Dashboard** e clique em **Bind Device**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/5.png" /></div>

Em seguida, na próxima página, você precisará preencher o **EUI**, **Code/KEY** e **Device Name**, e você pode até definir a localização do dispositivo. (O Grove - Wio-E5 não possui função de localização)

Algumas das informações necessárias podem ser encontradas no adesivo na parte de trás do Grove - Wio-E5. Preencha o nome do dispositivo conforme sua necessidade.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/6.png" /></div>

Depois de preencher o conteúdo acima, clique no botão **Confirm** abaixo para concluir a vinculação do dispositivo.

Após a vinculação bem-sucedida usando a plataforma web, você verá os dados dos sensores exibidos na plataforma.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/105.png" /></div>

:::tip
 O SenseCAP na web também não possui atualização automática de dados e você precisará atualizar seu navegador para ver os dados mais recentes.
:::

Depois de selecionar a banda, você precisará esperar um pouco para que o Grove Wio E5 termine a inicialização.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/47.png" /></div>

Se a conexão LoRaWAN® com a plataforma SenseCAP for bem-sucedida, você verá o seguinte.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/48.png" /></div>

Se você não estiver conectado ao Grove Wio E5 ou se o LoRaWAN® for desconectado no meio do processo, será exibida uma falha de transmissão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/50.png" /></div>

## Enviar dados dos sensores para o Microsoft Azure IoT Central via WiFi

Aqui o dispositivo usará comunicação WiFi para enviar os dados dos sensores para a nuvem. O Microsoft Azure IoT Central será usado para visualizar os dados provenientes dos sensores conectados ao Wio Terminal via WiFi!

Por motivos de espaço, pule para este link para a introdução desta parte do capítulo.

- [Connect Wio Terminal to Microsoft Azure IoT Central](https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## Enviar dados do sensor para Ubidots via WiFi

Aqui o dispositivo usará comunicação WiFi para enviar os dados do sensor para a nuvem. A plataforma Ubidots será usada para visualizar os dados provenientes dos sensores conectados ao Wio Terminal via WiFi!

**Passo 1.** Registre-se e faça login no Ubidots

Se esta é a sua primeira vez usando o Ubidots, acesse o [site do Ubidots](https://ubidots.com/) e registre uma conta própria.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

Depois de se registrar, faça login no Ubidots usando a conta que você registrou.

**Passo 2.** Atribua o seu **TOKEN do Ubidots** exclusivo

Toda requisição ao Ubidots requer um TOKEN. A maneira mais fácil de obter o seu é clicando em **API Credentials** no menu suspenso do usuário.

Vá até o menu suspenso do usuário e clique em API credentials:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**: chaves temporárias e revogáveis a serem usadas em suas requisições de API. Salve o TOKEN por enquanto, nós o usaremos mais tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::caution
Todas as chamadas de API aceitam apenas o seu **TOKEN**. Não tente usar sua API Key, não vai funcionar! Você também pode acessar todas as suas API Keys do Ubidots na seção My Profile das configurações no menu suspenso do usuário. Selecione **My Profile** –> **API Credentials** para revisar a lista de API TOKENS relacionadas à sua conta específica do Ubidots.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**Passo 3.** Prepare-se com as informações necessárias

Para estabelecer uma conexão MQTT, precisaremos preparar as seguintes informações com antecedência.

- **Nome do WiFi**
  - Preencha o nome do WiFi ao qual o Wio Terminal pode se conectar. O Wio Terminal procurará redes WiFi ao seu redor e tentará se conectar a elas.
- **Senha do WiFi**
  - Preencha a senha do WiFi ao qual o Wio Terminal pode se conectar.
- **Nome do cliente MQTT**
  - Isto é especial porque é o ID com o qual seu dispositivo será identificado pelo broker, portanto ele **DEVE** ser exclusivo. Se o seu dispositivo tentar se conectar com o mesmo ID que já foi usado por outro dispositivo, a conexão será recusada. Crie seu próprio nome de cliente MQTT alfanumérico com 8–12+ caracteres e insira-o no código de acordo.
 Precisa de ajuda para criar um nome de cliente MQTT exclusivo? Confira este [random ascii builder](https://www.random.org/strings/), ou simplesmente use o endereço MAC do seu dispositivo, já que todo endereço MAC é globalmente exclusivo.

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

- **TOKEN do Ubidots**
  - Este é o TOKEN gerado no **passo 2**.
- **Rótulo do dispositivo**
  - Este é o nome do dispositivo, e o nome do dispositivo fornecido pelo usuário será usado pelo Ubidots para identificar o dispositivo. Se o rótulo do dispositivo não existir antes de o primeiro ponto ser enviado, o Ubidots o criará automaticamente.

Tenha tudo o que foi listado acima preparado, pois iremos utilizá-los no próximo passo.

**Passo 4.** Configure o **config.txt**.

Quando usamos o SenseCraft, um driver externo aparece assim que o Wio Terminal é conectado ao computador.

:::caution
Isso significa que o pendrive USB aparece quando o Wio Terminal é conectado ao computador, **sem a necessidade de alternar o botão lateral duas vezes a mais**!
:::
Normalmente há um arquivo chamado **config.txt** no driver externo, então abra-o.

Ele contém as informações necessárias sobre a conexão de rede, que podemos modificar para obter configuração automática na energização. O conteúdo do arquivo **config.txt** está no seguinte formato.

```
SSID=WiFi_Name
PASSWORD=WiFi_Password
MQTT_CLIENT_NAME=Topic
TOKEN=Default_Token
DEVICE_LABEL=Device_Name
```

Preencha os campos obrigatórios acima, correspondentes às informações que obtivemos no **passo 3**. Depois de concluído, o conteúdo do seu arquivo config.txt deverá ser semelhante ao exemplo abaixo.

```
SSID=CHCK
PASSWORD=123456
MQTT_CLIENT_NAME=al49mw880j
TOKEN=BBFF-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEVICE_LABEL=Wio-Terminal
```

:::caution
Depois de fazer suas alterações, **salve** o arquivo config.txt e **reinicie** o Wio Terminal movendo o botão lateral para baixo uma vez.
:::
**Passo 5.** Entre na aba **Network** e selecione **WiFi**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

Agora ele aguardará o carregamento da configuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

Quando a configuração de WiFi carregada for detectada, ele primeiro se conectará à rede WiFi e depois à plataforma Ubidots. Se a conexão com o Ubidots for bem-sucedida, será exibido o seguinte.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Passo 6.** Visualizar dados no Ubidots

Depois que os dados forem enviados com sucesso ao Ubidots, você poderá visualizar as informações de dados no seu dispositivo Ubidots.

O Ubidots tem uma interface muito simples e, se você quiser visualizar informações sobre o seu dispositivo, pode selecionar **Devices** bem no topo do painel.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

Clique no nome do seu dispositivo aqui para poder ver todas as abas de histórico.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/54.png" /></div>

:::note
A versão gratuita do Ubidots suporta apenas a criação de **um TOKEN** e **dez rótulos**. Quando você tiver mais de dez rótulos, os rótulos que você tiver enviado, bem como os dados, serão descartados.
:::
:::note
Se você quiser usar o Ubidots para desenvolvimento independente adicional, consulte nossos [tutoriais sobre Ubidots](https://wiki.seeedstudio.com/pt-br/Getting_started_with_Ubidots/).
:::

## Conectar os outros sensores Grove do kit

Além dos sensores integrados, as possibilidades do SenseCraft são infinitas. O sensor Grove do kit também pode acessar o Wio Terminal e é reconhecido automaticamente.

### Conectar um sensor Grove ao Wio Terminal

Na versão atual do SenseCraft, só suportamos a conexão simultânea de um sensor para uso. (exceto o Grove Wio E5)

Ao conectar, você pode usar o cabo Grove fornecido no kit para conectar um dos sensores que deseja usar ao conector Grove na parte inferior direita do Wio Terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

O diagrama acima mostra o Grove Vision AI como exemplo, indicando como os sensores do kit são conectados. Claro, o mesmo se aplica a outros sensores. (exceto o Grove Wio E5)

:::caution
Não conecte o sensor Grove do kit ao conector Grove no lado esquerdo do Wio Terminal. O conector Grove do lado esquerdo é atualmente projetado para a conexão do Grove Wio E5.
:::

### Visualizar valores do sensor Grove

Depois de conectar o sensor Grove, você poderá visualizar os valores do sensor Grove na página Sense.

Você só precisa pressionar o botão de seta **direita** na página **Sense** até que o valor do sensor externo apareça. Normalmente, o valor do sensor externo aparecerá após o **sensor IMU**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/56.png" /></div>

### Enviar dados dos sensores Grove para a nuvem

A detecção do sensor pelo SenseCraft é totalmente automática, portanto não precisamos que o usuário faça nada extra. Claro, isso tudo inclui o envio de dados após a inserção do novo sensor Grove.

- Da mesma forma, se você quiser enviar dados dos seus sensores Grove via LoRaWAN®, basta **conectar seu Grove Wio E5 no lado esquerdo** ao mesmo tempo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/57.png" /></div>

Em seguida, siga os passos em **[Send sensor data to SenseCAP via LoRa®](https://wiki.seeedstudio.com/pt-br/K1100-quickstart/#enviar-dados-do-sensor-para-sensecap-via-lora)**.

- Se você quiser enviar dados via WiFi, então não precisa conectar mais nada, continue consultando o conteúdo de **[Send sensor data to Ubidots via WiFi](https://wiki.seeedstudio.com/pt-br/K1100-quickstart/#enviar-dados-do-sensor-para-ubidots-via-wifi)** para executar a ação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/58.png" /></div>

## Uso avançado

Projetamos várias formas muito interessantes e avançadas de brincar com o SenseCraft, e você pode obter uma visão geral rápida e usar esses recursos nesta seção.

### Análise em tempo real com Vision AI

Este é um recurso projetado para o Grove Vision AI. Os usuários podem observar o log de execução do Vision AI nesta interface, o que é conveniente para observar o reconhecimento do Vision AI em tempo real, ajustar a imagem da câmera, etc.

**Passo 1.** Conecte o Grove Vision AI

Conecte seu Grove Vision AI ao conector Grove no lado **direito** do Wio Terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

**Passo 2.** Acesse a interface de análise em tempo real do Vision AI

Clique no segundo botão acima do Wio Terminal para acessar a tela **Process**.

A seleção padrão na tela Process é **Vision AI real-time analysis**, e neste ponto basta **pressionar o meio** do botão de 5 direções para entrar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/59.png" /></div>

Então você poderá ver o log de Vision AI nesta página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/61.png" /></div>

### Exemplo TinyML

Este é um recurso projetado para o Wio Terminal em aprendizado de máquina embarcado. Nesta página, os usuários podem acessar a série de cursos TinyML que preparamos para experimentar os poderosos recursos de aprendizado de máquina do Wio Terminal & Vision AI.

**Passo 1.** Clique no segundo botão acima do Wio Terminal para acessar a tela **Process**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/60.png" /></div>

**Passo 2.** Acesse a interface TinyML Example

Pressione a seta para a direita do botão de cinco direções para selecionar TinyML Example. Simplesmente **pressione o meio** do botão de cinco direções para entrar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/62.png" /></div>

### Visualização de gráfico

Fornecemos ao Wio Terminal uma exibição em gráfico de linhas para que você possa observar como os dados mudam nos valores de cada sensor.

Vamos pegar como exemplo um gráfico de linhas de valores de luz.

Como a coluna Light já está destacada, **pressione o meio** do botão de cinco direções para entrar no modo de visualização de gráfico para os dados do sensor de luz.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/63.png" /></div>

### Salvar no cartão TF

Considerando que os usuários podem ter a necessidade de salvar offline em um cartão TF e apenas exigir filtragem ou análise de dados posteriormente, também projetamos o Wio Terminal com a capacidade de salvar dados em um cartão TF.

Quando estiver no modo de visualização de gráfico, como descrito anteriormente, **pressione o meio** novamente para ver esta página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/65.png" /></div>

É aqui que os dados do sensor podem ser salvos em um cartão TF. Primeiro insira um cartão TF no Wio Terminal.

Depois disso, pressione o **botão do meio** para selecionar **Save to TF card** e será exibida a mensagem **Saving has been started**. Assim que essa mensagem desaparecer, a gravação estará concluída e os dados serão salvos como um **arquivo .csv**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/64.png" /></div>

Se o armazenamento no cartão TF estiver cheio, será exibida a seguinte notificação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/66.png" /></div>

## O que posso fazer em seguida？

Parabéns por concluir com sucesso as etapas listadas neste guia de início rápido, acabamos de observar os dados transferidos do dispositivo sensor para a visualização no SenseCAP Console / Ubidots no menor tempo possível!

Em seguida, se você quiser se aprofundar em programação de sensores, bem como LoRaWAN®, plataformas em nuvem e muito mais, continue com nosso [SenseCAP - The Sensor Prototype Kit Overview](https://wiki.seeedstudio.com/pt-br/K1100-Getting-Started/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/41.png" /></div>

## Recursos

- **[GitHub]**[Código-fonte Seeed_Arduino_K1100](https://github.com/Seeed-Studio/Seeed_Arduino_K1100)

## Solução de problemas

> P1: Por que o conteúdo de dados da plataforma SenseCAP é diferente dos dados exibidos no Wio Terminal?

R: Porque os dados são lidos a cada cinco minutos e depois enviados em até três minutos. Portanto, o valor do sensor obtido pode ser o valor lido uma vez em algum intervalo de cinco minutos, com algum atraso. Já os dados do Wio Terminal são em tempo real, o que pode levar a inconsistências entre os dois.

> P2: Por que não consigo me conectar ao LoRaWAN®?

R: Se você nunca conseguir se conectar ao LoRaWAN®, certifique-se de que haja um sinal forte o suficiente e uma cobertura de rede LoRaWAN estável no ambiente ao redor. Recomendamos que você tenha um gateway LoRaWAN próprio para experimentar o processo completo. O Grove - LoRa-E5 é apenas um protótipo, portanto sua força de antena não é comparável à de um grande dispositivo LoRa®.

> P3: Por que às vezes alguns dados de sensores em um conjunto de conteúdo não aparecem no SenseCAP?

R: Pode ser que o Grove - LoRa-E5 esteja sofrendo perda de pacotes. Em geral, a perda de pacotes é uma situação normal e não é necessário se preocupar excessivamente. Se houver uma perda de pacotes muito severa, você pode tentar reiniciar o Wio Terminal.
Se você tiver requisitos muito altos para dados em tempo real e estabilidade, talvez queira conhecer os dispositivos da série SenseCAP de nível industrial.

> P4: Eu não comprei o kit para K1101, posso usar o firmware para experimentar esta rotina?

R: Se você não é um cliente que comprou este kit, talvez não consiga ter acesso completo ao SenseCAP. O Grove - LoRa-E5 no kit é uma edição especial, e produtos comprados separadamente não têm acesso ao SenseCAP.

> P5: Se eu usar outro programa, posso recuperar o firmware?

R: Você pode gravar este firmware para o Wio Terminal a qualquer momento e, em teoria, você sempre pode usar esta rotina desde que isso não destrua o firmware original do Grove - LoRa-E5. O método para gravar o firmware é o seguinte.
Deslize a chave duas vezes muito rapidamente, como a seguir:

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

Neste momento, um disco chamado **Arduino** aparecerá em seu computador, basta copiar o firmware (arquivo .uf2) para esse disco. Quando o firmware for instalado, o disco será ejetado automaticamente e o Wio Terminal será reiniciado na interface Setup Band.

> P6: Se eu alterar o Dev EUI, App EUI, App Key do Grove - LoRa-E5, existe uma maneira de recuperá-los?

R: Abrimos a interface de consulta para nossos usuários, de modo que, quando você tiver alterado as informações dos três códigos para atender ao seu projeto, também possa acessá-las a qualquer momento com as informações do adesivo na parte de trás do Grove - LoRa-E5.

```
https://sensecap.seeed.cc/makerapi/device/view_device_info?nodeEui=<your_eui>&deviceCode=<your_code>
```

Use as informações de **EUI** e **Code** marcadas na parte de trás do Grove - LoRa-E5 para preencher a posição correspondente no site acima e descobrir os três códigos correspondentes ao seu dispositivo abrindo o site no navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/36.png" /></div>

**Por favor, cuide bem dos três códigos; qualquer perda causada pela perda dos códigos será de responsabilidade do usuário.**

> P7: É possível usar o DevEUI, AppEUI e AppKey do SenseCAP em outras plataformas? Por exemplo, TTN?

R: A resposta para isso é não. O código triplo do SenseCAP não pode ser usado para vincular a outras plataformas, caso contrário, há um alto risco de anomalias de dados em diferentes plataformas.

## Suporte técnico e discussão sobre o produto


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
