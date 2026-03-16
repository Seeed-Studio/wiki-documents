---
description: Uso do SenseCAP & Node-RED
title: Uso do SenseCAP & Node-RED
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_sensecap_node-red
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/
---

# Guia Rápido do SenseCAP Console com Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** representa a Seeed Studio concentrando a essência da comunicação LoRa® em tecnologia e produtos de inteligência de borda, para a implantação e o domínio mais fáceis de aplicações LoRa® e IoT.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

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

**Node-RED** é uma ferramenta de programação para conectar dispositivos de hardware, APIs e serviços online de maneiras novas e interessantes.

Ela fornece um editor baseado em navegador que facilita a conexão de fluxos usando a ampla variedade de nós na paleta, que podem ser implantados em seu runtime com um único clique.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" /></div>

Para facilitar que nossos usuários conectem dados da plataforma SenseCAP a várias outras plataformas PaaS para um processamento de dados mais aprofundado, faremos uma série de tutoriais sobre **SenseCAP & Node-RED**.

Este tutorial, o primeiro de uma série, mostrará como instalar e usar o Node-RED e chamar a API de backend do SenseCAP para se conectar ao Node-RED.

## Instalar Node.js®

Para instalar o Node-RED localmente, você precisará de uma [versão suportada do Node.js](https://nodered.org/docs/faq/node-versions).

Baixe a versão 14.x LTS mais recente do Node.js na [página oficial do Node.js](https://nodejs.org/en/). Ela oferecerá a melhor versão para o seu sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
Execute o arquivo MSI baixado. A instalação do Node.js requer direitos de administrador local; se você não for um administrador local, será solicitado a inserir uma senha de administrador na instalação. Aceite os valores padrão durante a instalação. Após a conclusão da instalação, feche quaisquer prompts de comando abertos e reabra-os para garantir que as novas variáveis de ambiente sejam carregadas.
:::
Ao instalar o Node.js, se você estiver usando um computador que não tenha nenhum ambiente de programação instalado, recomendamos que marque a caixa para instalar as ferramentas necessárias durante a instalação do Node.js, o que lhe poupará muitos problemas desnecessários.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

A maneira mais fácil de instalar o Node-RED é usando a ferramenta de gerenciamento de pacotes do Node, o **npm**. No entanto, não recomendamos instalar o Node-RED com o npm 1.x, mas sim atualizá-lo para a versão mais recente do **npm 2.x**.

:::note
No **Windows** (requer Windows 10 ou superior), use o atalho **Win+R** e digite `cmd` na janela pop-up para abrir o terminal e execute o seguinte comando.

Se você estiver usando **MacOS** ou **Linux**, execute o seguinte comando no terminal e adicione `sudo` na frente do comando para usuários sem privilégios de root.
:::

```sh
npm install -g npm@2.x
```

Depois de instalado, abra um prompt de comando e execute o seguinte comando para garantir que o Node.js e o npm estejam instalados corretamente.

```sh
node --version && npm --version
```

Você deverá receber uma saída semelhante a:

```sh
> v16.17.0
> 2.15.12
```

## Instalar Node-RED

Instalar o Node-RED como um módulo global adiciona o comando `node-red` ao caminho do seu sistema. Execute o seguinte no prompt de comando:

```sh
npm install -g --unsafe-perm node-red
```

Se o Node-RED estiver instalado como um pacote npm global, então execute diretamente o comando node-red:

```sh
node-red
```

Isso enviará o log do Node-RED para o terminal. Você deve manter o terminal aberto para manter o Node-RED em execução.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

Isso permitirá que você veja o editor do Node-RED em http://localhost:1880.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## <span id="jump1">Obter a API do SenseCAP</span>

Antes de prosseguir para esta seção, certifique-se de ter vinculado seu dispositivo K1100 no console SenseCAP.

Faça login no [console SenseCAP](https://sensecap.seeed.cc/portal/#/dashboard). Na barra suspensa à direita do nome de usuário na parte superior do painel, podemos encontrar as **Informações da Organização**, selecione-as.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/5.png" /></div>

Na página de Informações da Organização, você pode ver o **ID da Organização**, que você pode anotar primeiro e o usaremos nas etapas posteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/6.png" /></div>

Em seguida, também precisamos obter a chave de API para SenseCAP. Clique em **Security -> Access API keys** no lado esquerdo do painel. Em seguida, crie uma Access Key.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/11.png" /></div>

Clique no **API ID** que você criou e você obterá suas **Access API keys**, anote-as por enquanto, pois as usaremos nas etapas posteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/7.png" /></div>

## Criar um Nó HTTP

A janela do editor é composta por quatro componentes:

- O cabeçalho na parte superior, contendo o botão de implantação, o menu principal e, se a autenticação de usuário estiver habilitada, o menu do usuário.
- A [paleta](https://nodered.org/docs/user-guide/editor/palette) à esquerda, contendo os nós disponíveis para uso.
- O [espaço de trabalho](https://nodered.org/docs/user-guide/editor/workspace) principal no meio, onde os fluxos são criados.
- A [barra lateral](https://nodered.org/docs/user-guide/editor/sidebar) à direita.

Siga os links acima para saber mais sobre cada componente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/12.png" /></div>

Neste exemplo, mostraremos como usar nós MQTT para exibir os valores dos sensores recebidos pelo SenseCAP. Antes disso, vamos aprender a entender os nós que usaremos mais no futuro.

### nó http

#### nó http in

O nó **http in** pode ser usado para criar serviços web.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/13.png" /></div>

Arraste o nó para o espaço de trabalho e clique duas vezes no nó para acessar a página de configuração do nó.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/14.png" /></div>

Aqui, precisamos definir uma URL para o serviço web que você criou, para que possa acessar a página web que você criou através do endereço `http://localhost:1880/<URL>`.

#### nó http response

O nó **http response** envia a resposta de volta para a requisição recebida do nó de entrada HTTP.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/15.png" /></div>

Normalmente, não precisamos configurá-lo separadamente, basta arrastá-lo diretamente para a bancada para uso.

#### nó template

O nó template pode definir propriedades com base no modelo fornecido.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/17.png" /></div>

Usaremos este nó e utilizaremos uma linguagem HTML simples para concluir a configuração do conteúdo de exibição da nossa página web.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/18.png" /></div>

Por exemplo, queremos mostrar "Hello World!".

<div>
  ```html
  <h1>Hello World!</h1>
  ```
</div>

Por fim, conectamos o **http in** ao **template**, e conectamos o **template** ao **http response**. Em seguida, clique no botão **deploy** no canto superior direito, assim uma página web simples é criada, que é a etapa básica de operação do Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/19.png" /></div>

Neste exemplo, criamos uma URL de dados do sensor, então após a implantação, podemos inserir `http://localhost:1880/sensor_data` na barra de endereços do navegador para acessar a página que acabamos de criar.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100-nodered/20.png" /></div>

## Criar um nó MQTT

Nesta seção, descreveremos como obter as informações de dados do SenseCAP através do nó MQTT.

### nó debug

Exibe propriedades de mensagens selecionadas na aba de barra lateral de depuração e, opcionalmente, no log de tempo de execução. Por padrão, exibe msg.payload, mas pode ser configurado para exibir qualquer propriedade, a mensagem completa ou o resultado de uma expressão JSONata.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/23.png" /></div>

### nó mqtt

Conecta-se a um broker MQTT e assina mensagens do tópico especificado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/26.png" /></div>

**Passo 1.** Adicionar um novo nó mqtt-broker.

Arraste um nó **mqtt in**, clique duas vezes nele para entrar na página de configuração e, em seguida, clique no botão de edição após **Add new mqtt-broker**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/27.png" /></div>

A configuração do mqtt-broker deve ser preenchida da seguinte forma.

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: O formato é `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Seu ID de organização. Já o obtivemos em [Get the SenseCAP API](#jump1).
  - `<Random ID>` use seus próprios números ou letras minúsculas gerados aleatoriamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/28.png" /></div>

Em seguida, preenchemos o campo de opções de **Security** com o Username e Password.

- Username: O formato é `org-<Organization ID>`
  - `<Orgnization ID>` Seu ID de organização. Já o obtivemos em [Get the SenseCAP API](#jump1).
- Password: Preencha com as **Access API keys** que obtivemos em [Get the SenseCAP API](#jump1).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/29.png" /></div>

Por fim, clique no botão **Add** no canto superior direito para retornar à página de configuração do nó **mqtt in**.

- Topic: Configurar um tópico em um formato específico determina o tipo de dispositivo e o tipo de dado a serem recebidos.

Formato do Topic: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Seu ID de organização. Já o obtivemos em <a href="#jump1" target="_blank">Get the SenseCAP API</a>.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificação exclusiva dos dispositivos sensores. Essas informações podem ser encontradas no adesivo na parte de trás do Grove - Wio E5, bem como no dispositivo do console SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Uma interface física no dispositivo à qual o sensor está conectado. Para o kit K1100, o valor padrão aqui é 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos Reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID do valor medido. Este ID pode ser encontrado na seção Measurement IDs da <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentação SenseCAP</a></td>
    </tr>
  </tbody></table>

:::note
O conteúdo deste tutorial se aplica apenas ao kit K1100, portanto, consulte o conteúdo dentro de **LoraWAN Dev Kit** para o ID do valor medido e não use outros IDs.
:::
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/k1100-nodered/30.png" /></div>

Por exemplo, se eu quiser conseguir obter dados do sensor para os valores de luz enviados pelo Wio Terminal, então as informações do Topic que eu preencher devem ser:

```
/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193
```

:::tip
O campo `<OrgID>` é obrigatório, "+" significa que este campo não tem filtro e pode corresponder a todos. Portanto, "/ + / + / + / +" significa escutar todos `<DeviceEUI>`, `<Channel>`, `<Reserved>`, `<MeasurementID>`.

Se você quiser escutar todas as mensagens, então o Topic deve ser:

```
    /device_sensor_data/424324324324324/+/+/+/+
```

:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/31.png" /></div>

**Passo 2.** Adicionar nó debug

Então podemos adicionar nós debug a ele para facilitar a verificação se tudo está funcionando.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/34.png" /></div>

**Passo 3.** Ligue o Wio Terminal e comece a enviar dados para o SenseCAP.

Clicamos no botão **Deploy** e, se tudo estiver configurado corretamente, você poderá ver o nó **mqtt in** mostrando conectado. Assim que o Wio Terminal começar a ligar e funcionar e começar a enviar dados para o SenseCAP, você verá os dados já exibidos na janela de depuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/33.png" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
