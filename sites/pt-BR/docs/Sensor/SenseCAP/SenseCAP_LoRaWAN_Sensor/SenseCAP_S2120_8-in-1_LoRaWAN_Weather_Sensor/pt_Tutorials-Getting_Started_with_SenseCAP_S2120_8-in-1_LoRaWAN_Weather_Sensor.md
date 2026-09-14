---
description: Introdução ao SenseCAP S2120 Sensor Meteorológico LoRaWAN 8-em-1
title: Introdução ao SenseCAP S2120 Sensor Meteorológico LoRaWAN 8-em-1
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor
last_update:
  date: 7/26/2023
  author: Jessie
createdAt: '2023-07-26'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/
---

## Pré-instalação

### Diagrama

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor95.png" /></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor98.png" /></div>

### Instalar o medidor de chuva

> Instale o funil do medidor de chuva e gire no sentido horário para travar o funil na estação meteorológica.
>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor220.png" /></div>

### Modo de alimentação

> As estações meteorológicas não contêm baterias, portanto, são necessárias baterias adicionais.
>
> O sensor é alimentado por uma combinação de painéis solares e baterias. Quando os painéis solares estiverem funcionando, o dispositivo será alimentado pelos painéis solares; quando a energia solar for baixa, ele será alimentado pelas baterias.
>
> Diferentes tipos de baterias afetam a faixa de temperatura de operação do sensor. Além disso, a quantidade diferente de baterias determina a vida útil da bateria do sensor.
>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor699.png" /></div>

**Opção 1: Instalar a bateria com caixa integrada**

- **Passo 1:** Desparafuse a tampa da bateria na parte inferior da estação meteorológica.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor817.png" /></div>

- **Passo 2:** Insira as 3 baterias AA de acordo com a polaridade +/- indicada. Em seguida, feche a tampa da bateria. Aperte o parafuso da tampa da bateria. Quando a instalação for concluída, o LED vermelho indicador na parte inferior da estação meteorológica começará a piscar.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1069.png" /></div>

**Opção 2: Instalar a bateria com caixa externa**

- **Passo 1:** Deslize o interruptor de trava da caixa de bateria para a posição destravada. Empurre para abrir a porta da caixa de bateria de acordo com a direção da seta.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1250.png" /></div>

- **Passo 2:** Insira as 6 baterias AA de acordo com a polaridade +/- indicada. Em seguida, coloque e tranque a porta da caixa de bateria.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1375.png" /></div>

- **Passo 3:** Desparafuse a tampa da bateria na parte inferior da estação meteorológica.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1451.png" /></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1452.png" /></div>

- **Passo 4:** Insira a bateria falsa no compartimento da bateria, certificando-se de que a marcação "OUTSIDE" esteja voltada para fora e que a polaridade +/- esteja na orientação correta.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1615.png" /></div>

**Passo 5:** Substitua a tampa da bateria que vem junto com a caixa de bateria externa e, em seguida, aperte o parafuso da tampa da bateria. Quando a instalação for concluída, o LED vermelho indicador na parte inferior da estação meteorológica começará a piscar.

:::tip **Note**
Se a bateria falsa não for instalada na orientação correta, a conexão de energia da bateria falhará e o LED indicador não piscará.
:::

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2013.png" /></div>

- **Passo 6:** Use as abraçadeiras de cabo para montar a caixa de bateria no poste de montagem.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2093.png" /></div>

## Status do indicador

Na parte inferior da estação meteorológica há botões e indicadores:

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2193.png" /></div>

Você pode consultar o LED indicador do Sensor para saber seu status de funcionamento. Veja abaixo as explicações de status na tabela:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2327.png" /></div>

:::tip **Note**
Após a bateria ser instalada pela primeira vez, você deve conectar o Bluetooth e configurar a frequência para ingressar na rede LoRaWAN e funcionar normalmente. Se a frequência não for configurada, o LED vermelho permanecerá aceso continuamente.
:::

## Conectar ao aplicativo SenseCraft

**Passo 1:** Baixar o App

Como uma ferramenta, o aplicativo SenseCraft é usado para configurar parâmetros LoRa, definir intervalos, vincular dispositivos à sua conta e verificar informações básicas do dispositivo.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2808.png" /></div>

**Passo 2:** Criar uma nova conta

O SenseCraft oferece suporte à configuração do dispositivo e à gestão remota. Para usar a plataforma SenseCAP Portal e outras funções, registre uma conta.

O SenseCraft oferece suporte a funcionalidades offline e você pode optar por não criar uma conta se for usar apenas para configurar o sensor. Basta clicar em **Skip**.

Selecione **Global** em Local do Servidor.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor3406.png" /></div>

Você também pode criar uma conta através do SenseCAP Portal: http://sensecap.seeed.cc

:::tip **Note**
Se você não encontrar o e-mail, ele pode ter sido identificado automaticamente como "spam" e colocado na "lixeira".
:::

**Passo 3:** Conectar o Sensor ao App

Depois que a bateria for instalada, o LED vermelho permanecerá aceso. Ative também o Bluetooth.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4059.png" /></div>

Selecione "S2120 Weather Station".
Clique no botão "Setup" para ligar o Bluetooth e clique em "Scan" para iniciar a varredura do Bluetooth do sensor.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4213.png" /></div>

Insira a senha de pareamento. **A senha padrão é 000000**.

Selecione o Sensor pelo ID BT (o ID BT está na etiqueta inferior do sensor). Então, as informações básicas do sensor serão exibidas após a entrada.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4428.png" /></div>

**Passo 4:** Configure os parâmetros através do App

- Selecione a Plataforma

As estações meteorológicas S2120 são fabricadas para suportar o plano de frequência universal de 863MHz~928MHz em um único SKU. Ou seja, cada dispositivo pode suportar 7 planos de frequência.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4675.png" /></div>

- Selecione a Frequência

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4678.png" /></div>

:::tip **Note**
Diferentes países e servidores de rede LoRaWAN utilizam diferentes planos de frequência.

- Para a rede Helium, consulte:

https://docs.helium.com/lorawan-on-helium/frequency-plans

- Para The Things Network, consulte:

https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/

- Ao usar a plataforma SenseCAP, o EUI, APP EUI e APP Key são fixos e são os mesmos que o rótulo do sensor.
- Quando o sensor é selecionado para ser usado com uma plataforma pública como Helium ou TTN, o EUI não mudará, e o sensor irá gerar um novo App EUI e App Key fixos para acesso à rede.
:::

- **Definir o Intervalo**

O modo de funcionamento do dispositivo: acordar o dispositivo a cada intervalo, coletar os valores de medição e enviá-los através de LoRa. Por exemplo, o dispositivo coleta e envia dados **a cada 60 minutos por padrão**.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7708.png" /></div>

- **Definir o EUI e a Key**

O dispositivo utiliza OTAA para ingressar na rede LoRaWAN por padrão. Portanto, é possível definir o EUI do dispositivo e o App EUI.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7835.png" /></div>

- **Definir a Política de Pacotes**

A estratégia de uplink de pacotes do sensor possui três modos.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7913.png" /></div>

- **Definir o Tipo de Ativação**

O sensor suporta dois modos de acesso à rede, OTAA por padrão.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8003.png" /></div>

Ao usar o modo ABP, você precisa configurar as seguintes informações:

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8076.png" /></div>

:::tip **Note**
Os valores de fábrica são fixos.
:::

- **Restaurar as Configurações de Fábrica**

Ao selecionar a plataforma SenseCAP, você deve usar o EUI/App EUI/App Key fixos. Portanto, é necessário restaurar as Configurações de fábrica antes de voltar para a plataforma SenseCAP a partir de outras plataformas.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8357.png" /></div>

Quando cometemos um erro ou queremos redefinir tudo, podemos clicar no botão. O dispositivo será restaurado para a configuração padrão de fábrica.

## Conectar ao SenseCAP Portal

A principal função do [SenseCAP Portal](http://sensecap.seeed.cc) é gerenciar dispositivos SenseCAP e armazenar dados. Ele é construído sobre o Azure, um serviço de nuvem seguro e confiável da Microsoft. Você pode solicitar uma conta e vincular todos os dispositivos a essa conta. SenseCAP fornece o portal web e a API. O portal web inclui Dashboard, Gerenciamento de Dispositivos, Gerenciamento de Dados e Gerenciamento de Access Key, enquanto a API é aberta aos usuários para desenvolvimento posterior.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8976.png" /></div>

>**Dashboard:** Inclui Visão Geral do Dispositivo, Anúncios, Dados de Cenário e Gráfico de Dados, etc.
>**Gerenciamento de Dispositivos:** Gerenciar dispositivos SenseCAP.
>
>**Gerenciamento de Dados:** Gerenciar dados, incluindo Tabela de Dados e seção de Gráficos, fornecendo métodos para pesquisar dados.
>
>**Sistema de Subcontas:** Registrar subcontas com diferentes permissões.
>
>**Gerenciamento de Access Key:** Gerenciar Access Key (para acessar o serviço de API), incluindo Criação de Key, Atualização de Key e Verificação de Key.

Consulte o [Guia Rápido](https://sensecap-docs.seeed.cc/quickstart.html) para mais detalhes.

>**Instruções da API**
>
> A SenseCAP API é destinada aos usuários para gerenciar dispositivos IoT e dados. Ela inclui 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo Websocket.
>
>- Com a HTTP API, os usuários podem gerenciar dispositivos LoRa, obter dados brutos ou
   dados históricos.
>
>- Com a MQTT API, os usuários podem assinar os dados de medição em tempo real do sensor
    > através do protocolo MQTT.
>
>- Com a Websocket API, os usuários podem obter dados de medição em tempo real dos sensores através do protocolo Websocket.
>

Consulte este link para o [Guia do Usuário da API](https://sensecap-docs.seeed.cc/)

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor10672.png" /></div>

## Conectar à Rede Helium

Consulte o manual para conectar os sensores ao console público da Helium:

[Conectar à Rede Helium](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20Helium%20Network.pdf)

[Decoder S2120 para Helium](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/Helium)

## Conectar à The Things Network

- **Consulte este manual:**

[Conectar ao TTN](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

- **Consulte o link para usar a plataforma TTN:**

[Site The Things Network](https://www.thethingsnetwork.org)

[Login The Things Industries](https://accounts.thethingsindustries.com/login)

[Guia Rápido do TTN](https://www.thethingsnetwork.org/docs/quick-start/)

[Decoder S2120 para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/TTN)

## Instalação do Dispositivo

**Passo 1:** Selecionar um Local de Instalação Adequado

Antes de instalar a estação meteorológica, considere o seguinte:

**(1)**O pluviômetro deve ser limpo a cada poucos meses.

**(2)**Evite calor radiante refletido de quaisquer edifícios e estruturas adjacentes. Idealmente, a estação meteorológica deve ser instalada a 1,5 m (5') de qualquer edifício, estrutura, solo ou telhado.

**(3)**Escolha uma área de espaço aberto sob luz solar direta, sem qualquer obstrução de chuva, vento e luz solar.

**(4)**O alcance de transmissão entre a estação meteorológica e o gateway pode atingir uma distância de 2~10 km em linha de visada, desde que não haja obstáculos interferentes entre eles ou nas proximidades, como árvores, torres ou linhas de alta tensão. Verifique a qualidade do sinal de recepção para garantir boa recepção.

**(5)**Aparelhos domésticos como geladeiras, iluminação e dimmers podem causar interferência eletromagnética (EMI), enquanto interferência de radiofrequência (RFI) de dispositivos operando na mesma faixa de frequência pode causar sinal intermitente. Escolha um local a pelo menos 1-2 metros (3-5 pés) dessas fontes de interferência para garantir a melhor recepção.

**Passo 2:** Instalando a Estação Meteorológica

**(1)**Ajustar o painel solar

O ângulo de inclinação do painel solar pode ser ajustado verticalmente de 0° para as posições de 15°, 30°, 45° e 60°, dependendo da área em que você vive. Para uma potência ideal durante todo o ano, ajuste o ângulo de inclinação que seja o mais próximo possível da sua latitude.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor21897.png" /></div>

Sensores instalados no Hemisfério Sul devem ter seus painéis solares voltados para o Norte.

**(2)** Remova o filme de proteção do painel solar e afrouxe levemente o parafuso até que as engrenagens do lado oposto se separem da posição de travamento.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22132.png" /></div>

**(3)** Ajuste o ângulo vertical do painel solar (0°, 15°, 30°, 45°, 60°) de acordo com a latitude da sua localização e empurre a engrenagem e aperte o parafuso até que as engrenagens fiquem firmemente travadas.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22334.png" /></div>

**Etapa 3:** Instalar o Mastro de Montagem

**(1)** Prenda o mastro plástico no seu mastro fixo com a base de montagem, abraçadeira, arruelas, parafusos e porcas. Siga a sequência abaixo:
Insira o mastro plástico no furo do suporte de montagem e, em seguida, fixe-o com o parafuso e a porca.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2001.png" /></div>

Aplique 2 almofadas de borracha na abraçadeira de montagem.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2002.png" /></div>

Prenda o suporte de montagem e fixe-o junto em um mastro fixo com 4 parafusos longos e porcas.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2003.png" /></div>

**(2)** Aplique 2 almofadas de borracha nas partes internas da base de montagem e prenda a estação meteorológica, e aperte-as levemente juntas.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22882.png" /></div>

**(3)** Coloque a estação meteorológica sobre o mastro de montagem e alinhe-a na direção Norte antes de apertar os parafusos.

:::info Nota
Qualquer objeto metálico pode atrair raios, incluindo o mastro de montagem. Nunca instale uma estação meteorológica em dias de tempestade.
Se você quiser instalar uma estação meteorológica em uma casa ou edifício, consulte um engenheiro elétrico licenciado para garantir o aterramento adequado. O impacto direto de um raio em um mastro metálico pode danificar ou destruir sua casa.

Instalar o sensor em um local alto pode resultar em ferimentos pessoais ou morte. Realize o máximo possível de inspeções e operações iniciais no chão e dentro de prédios ou casas. Só instale a estação meteorológica em dias claros e secos.
:::

**Etapa 4:** Alinhamento de Direção

Instale a estação meteorológica em um local aberto, sem obstruções acima e ao redor do sensor, para medição precisa de chuva e vento.

Localize o marcador Norte (N) na parte superior da estação meteorológica e alinhe o marcador apontando para o Norte na instalação final com uma bússola ou GPS. Aperte o suporte de montagem em torno de um mastro de diâmetro de 30 a 40 mm (não incluído) usando dois parafusos e porcas fornecidos.

Use o nível de bolha na estação meteorológica para garantir que o sensor esteja completamente nivelado para a medição adequada de chuva, UV e intensidade de luz.

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2004.png" /></div>

>**Recomendação para melhor comunicação sem fio**
>
> A comunicação sem fio eficaz é suscetível à interferência de ruído
> no ambiente, e à distância e barreiras entre o transmissor do sensor
> e o gateway.
>
>- Direção de instalação. Ao instalar o equipamento, além da direção do vento, também é necessário considerar a direção da transmissão sem fio. Na direção mostrada, apontando para o gateway, será obtido um sinal melhor.
>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture05.png" /></div>

>
>- Distância. A perda de percurso ocorre naturalmente com a distância. Este dispositivo é classificado para 10 km em linha de visada (em um ambiente sem interferência e sem barreiras). No entanto, normalmente você terá 1~3 km no máximo em uma instalação real, que inclui atravessar barreiras.
>
>- Barreiras. Sinais de rádio são bloqueados por barreiras metálicas, como revestimento de alumínio. Alinhe a estação meteorológica e o gateway para que fiquem em linha de visada desobstruída através da janela se você tiver revestimento metálico.
>
> A tabela abaixo mostra um nível típico de redução na intensidade do sinal cada vez que o sinal passa por esses materiais de construção (redução de sinal de RF para referência):

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture06.png" /></div>

## Solução de Problemas

### Manutenção da Estação Meteorológica

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Trouble%20Shooting%20&%20Tech%20Support.files/Trouble%20Shooting%20&%20Tech%20Support49.png)

### Os sensores não conseguem entrar na rede LoRa, o que fazer?

1. Verifique a configuração de frequência do gateway. Certifique-se de que o gateway e os sensores tenham a mesma frequência de uplink e downlink.

2. Verifique o log em tempo real e clique no botão de configuração do sensor para ver se há algum pacote de dados do sensor. Se houver pacotes, verifique se o gateway está enviando pacotes de downlink.

3. Se os canais e outras configurações estiverem corretos e os logs do gateway não tiverem pacotes, entre em contato com o suporte técnico.

### Previsão de Vida Útil da Bateria

> A tabela de consumo de energia é apenas para referência. A vida útil da bateria
> depende de vários fatores, como a faixa de frequência, a distância até o
> gateway e a temperatura ambiente.
>

[Bettery Life Prediction](https://files.seeedstudio.com/SenseCAP_S21XX_Sensor_%20Battery_Life_Prediction.xlsx)
