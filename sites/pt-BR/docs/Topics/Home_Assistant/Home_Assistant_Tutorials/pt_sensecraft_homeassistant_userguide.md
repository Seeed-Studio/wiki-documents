---
description: Este é o Manual do Usuário SenseCraft-HomeAssistant
title: Manual do Usuário SenseCraft-HomeAssistant
keywords:
  - home assistant
slug: /sensecraft_homeassistant_userguide
sku: E2025081502,E2025081503
last_update:
  date: 04/12/2024
  author: WenHao
createdAt: '2024-04-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft_homeassistant_userguide/
---

# Manual do Usuário SenseCraft-HomeAssistant

## Introdução

SenseCraft-HomeAssistant é um plugin para HomeAssistant. Ao usar este plugin, os usuários podem fazer login com a conta da SenseCraft Data Platform (originalmente SenseCAP Cloud Platform) para acessar dispositivos em nuvem e dados de sensores na plataforma HomeAssistant, gerando dashboards personalizados de relatório de dispositivos.

:::note
O plugin SenseCraft-HomeAssistant está atualmente disponível apenas para instalação via HACS, que é uma app store de terceiros no sistema HomeAssistant. Quando as integrações oficiais fornecidas pelo HomeAssistant não são suficientes, o HACS permite adicionar e gerenciar facilmente integrações de terceiros.
:::

### 1.1 Etapas de Instalação do HACS

Como o download do plugin HACS requer comandos de terminal, você deve primeiro instalar o aplicativo Terminal.

1. **Ativar o Modo Avançado e Procurar pelo Aplicativo Terminal**

- Abra o Modo Avançado e navegue até Add-ons e procure pelo aplicativo Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage2.png" alt="pir" width={800} height="auto" /></p>

- Se você não conseguir encontrá-lo, primeiro verifique sua conexão de rede e depois tente reiniciar o HomeAssistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage3.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage4.png" alt="pir" width={800} height="auto" /></p>

2. **Instalar, Iniciar e Abrir a Interface do Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage5.png" alt="pir" width={800} height="auto" /></p>

3. **Digite os seguintes comandos no terminal para baixar o pacote de instalação do HACS** (detalhes em [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download)):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage6.png" alt="pir" width={800} height="auto" /></p>

- Entre no diretório config:

```
cd config
```

- Baixe e instale o HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

4. **Reinicie o Home Assistant**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage7.png" alt="pir" width={800} height="auto" /></p>

5. **Procure e Instale o Plugin HACS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage8.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage9.png" alt="pir" width={800} height="auto" /></p>

6. **Um contrato de licença será exibido; marque todos os acordos e envie**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage10.png" alt="pir" width={800} height="auto" /></p>

7. **Clique no link para ir à página do GitHub e faça login, depois insira o código de 8 letras na parte inferior na interface do GitHub**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage11.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage12.png" alt="pir" width={800} height="auto" /></p>

8. **Autorizar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage13.png" alt="pir" width={800} height="auto" /></p>

9. **Neste ponto, a loja HACS está instalada**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage14.png" alt="pir" width={800} height="auto" /></p>

### 1.2 Instalando o Plugin SenseCraft

1. Após concluir as etapas acima, um novo item "HACS" aparecerá na barra de menu à esquerda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage15.png" alt="pir" width={800} height="auto" /></p>

2. Insira a URL do repositório SenseCraft e a categoria, depois clique no botão "Add":

:::note

- Repository: `https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git`
- Category: `Integration`

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage16.png" alt="pir" width={800} height="auto" /></p>

3. Digite 'sensecraft' na caixa de pesquisa e encontre o plugin SenseCraft.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage17.png" alt="pir" width={800} height="auto" /></p>

4. Clique no plugin SenseCraft, vá para a página de introdução do plugin e clique no botão "Download".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage18.png" alt="pir" width={800} height="auto" /></p>

Com isso, a adição do SenseCraft à sua configuração atual do Home Assistant está concluída.

## Grove Vision AI(V2) com SenseCraft-HomeAssistant

Se você acabou de adquirir o dispositivo sem firmware ou modelo, será necessário gravar primeiro o firmware e o modelo.

Se o dispositivo já tiver firmware e modelo, você pode pular o **passo 2**. Veja como verificar se o seu dispositivo contém firmware e modelos, pois firmware e modelos vêm empacotados juntos.

### 2.1 Verificar se o Dispositivo Contém Firmware e Modelos

1. Abra o site [https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) e conecte o dispositivo ao seu computador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage19.png" alt="pir" width={800} height="auto" /></p>

2. Conecte o Grove Vision AI V2 ao computador

3. Altere para a opção Grove Vision AI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage20.png" alt="pir" width={800} height="auto" /></p>

4. Se for a primeira vez, você será solicitado a conceder permissões, selecione o dispositivo que aparecer e clique em conectar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage21.png" alt="pir" width={800} height="auto" /></p>

5. Se as informações e imagens exibidas forem semelhantes às da captura de tela, ele está funcionando corretamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage22.png" alt="pir" width={800} height="auto" /></p>

### 2.2 Gravação de Firmware e Modelos

Se nenhuma informação de modelo for detectada e não houver visualização ao vivo, isso indica que o firmware e o modelo precisam ser regravados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage23.png" alt="pir" width={800} height="auto" /></p>

Escolha um dos modelos pré-definidos (por exemplo, Gender Detection) e clique em 'Send'. Aguarde até que a gravação do firmware seja concluída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage24.png" alt="pir" width={800} height="auto" /></p>

### 2.3 Configurando o Serviço MQTT

#### Opention 1: Configurando o Serviço MQTT no Home Assistant

1. **Abra “Configuration > Add-ons > Add-on Store”** e encontre o "Add-on Store" no canto inferior direito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage25.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage26.png" alt="pir" width={300} height="auto" /></p>

2. Pesquise por “mqtt” na loja.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage27.png" alt="pir" width={800} height="auto" /></p>

3. Clique para instalar e configure o serviço MQTT com nome de usuário e senha:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage28.png" alt="pir" width={400} height="auto" /></p>

4. Navegue até “Options > Logins” e substitua o user ou passwd pelo nome de usuário e senha desejados. Salve a configuração.

:::note

- username: user
- password: passwd

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage29.png" alt="pir" width={800} height="auto" /></p>

:::note
Se não houver erros, significa que teve sucesso; se houver erros, você pode tentar desinstalar e reinstalar e, em seguida, configurar novamente.
:::

#### Option 2: Instalando o Serviço MQTT no Seu Próprio Computador

1. **Baixe o EMQX** para o seu sistema em [https://www.emqx.com/en/downloads/broker/5.4.0](https://www.emqx.com/en/downloads/broker/5.4.0) e siga as instruções fornecidas para o seu sistema operacional.

2. Tomando o MacOS como exemplo:

Usando:

```
wget https://www.emqx.com/en/downloads/broker/5.4.0/emqx-5.4.0-macos13-amd64.zip
```

para baixar o pacote. E instalando o EMQX:

```
mkdir -p emqx && unzip emqx-5.4.0-macos13-amd64.zip -d emqx
```

Por fim, executando o EMQX:

```
./emqx/bin/emqx start
```

3. Testar se está funcional:

Vá para [MQTT download](https://mqttx.app/downloads) para baixar o terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage30.png" alt="pir" width={800} height="auto" /></p>

### Verificando o Sucesso do Serviço MQTT

- Baixe o cliente MQTTX pela [página de download do MQTTX](https://mqttx.app/downloads) para garantir que o seu serviço MQTT possa ser acessado a partir do seu PC (seja implantado em um servidor de rede pública ou dentro do mesmo segmento de rede do seu PC).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage31.png" alt="pir" width={800} height="auto" /></p>

- Conectar com sucesso indica que não há problemas.

### 2.4 Configurando WIFI e MQTT

#### Por que configurar esses dois?

Porque a operação do Grove Vision AI no Home Assistant é feita por meio de MQTT, e o próprio MQTT requer uma conexão de rede, razão pela qual é necessário configurar o WIFI. Observe que você não pode selecionar WIFI de 5G. Vá para a página de configuração:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage32.png" alt="pir" width={800} height="auto" /></p>

Insira as informações correspondentes e clique em salvar. Entretanto, salvar aqui apenas salva as informações, não se sabe se a configuração foi realmente concluída corretamente. Você precisa voltar para a página Process:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage33.png" alt="pir" width={800} height="auto" /></p>

Quando o IP Address mostrar um endereço IP, significa que não há problemas com o WIFI. O status do Service deve estar como mostrado na imagem para indicar operação normal. Observe, se o WIFI não estiver normal, então o MQTT definitivamente não estará normal.

Ao alternar, ele pode inicialmente aparecer como desconectado e você pode precisar esperar aproximadamente 10s, mas geralmente não mais que 20s.

**Você não precisa atualizar para ver o status; o status será atualizado automaticamente para mostrar o mais recente.**

### 2.5 Integrar ao HA via Discovery

Para que seu dispositivo apareça na seção de dispositivos descobertos, você precisa garantir que o dispositivo e o HA estejam no mesmo segmento de rede, caso contrário, ele não aparecerá. Se você não tiver certeza sobre o segmento de rede, pode conectar a rede do HA e do dispositivo ao mesmo WIFI ou, digamos, ao mesmo roteador via ethernet.

Se você acabou de concluir a operação acima, é melhor desligar a alimentação do dispositivo e conectá-lo novamente. Entre na página de configuração:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34a.png" alt="pir" width={800} height="auto" /></p>

Então você verá a seguinte página:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34.png" alt="pir" width={800} height="auto" /></p>

Aqui, podemos ver o primeiro dispositivo descoberto. Você pode verificar o id correspondente para ver se é o seu dispositivo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage35.png" alt="pir" width={400} height="auto" /></p>

A parte circulada é o ID do dispositivo, correspondente ao ID do dispositivo no site:
https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage36.png" alt="pir" width={400} height="auto" /></p>

Se for realmente o seu dispositivo, então clique em configure. Aqui, se o seu serviço MQTT não tiver nome de usuário e senha, a caixa de diálogo a seguir será exibida, caso contrário, será solicitado que você insira um nome de usuário e senha. Em seguida, clique em submit.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage37.png" alt="pir" width={800} height="auto" /></p>

Se o seu serviço MQTT tiver nome de usuário e senha, então:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage38.png" alt="pir" width={600} height="auto" /></p>

Depois é sobre escolher a região, isto é, onde o seu dispositivo está localizado, como sala de estar, cozinha, etc.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage39.png" alt="pir" width={600} height="auto" /></p>

Aqui eu escolhi sala de estar, depois clique em done, e assim o dispositivo é adicionado ao HA. Neste ponto, você pode clicar em overview para ver o efeito da configuração concluída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage40.png" alt="pir" width={800} height="auto" /></p>

### 2.6 Integrar Manualmente ao HA

Se você puder usar os dispositivos descobertos, configure pela seção de dispositivos descobertos, pois é mais simples do que a configuração manual. Selecione configuration, depois devices and services.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage41.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage42.png" alt="pir" width={800} height="auto" /></p>

Em seguida, selecione **Another instance of the device "SenseCraft"** como mostrado:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage43.png" alt="pir" width={500} height="auto" /></p>

Depois selecione **Add device using host/id (LAN integration)**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage44.png" alt="pir" width={500} height="auto" /></p>

Depois clique em submit, selecione `grove_vision_ai_we2` na lista suspensa e clique em submit.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage45.png" alt="pir" width={500} height="auto" /></p>

Depois insira o ID do dispositivo, que é o ID do dispositivo correspondente ao site, não algo arbitrário.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage46.png" alt="pir" width={500} height="auto" /></p>

Depois clique em submit, o próximo passo é configurar o serviço MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage47.png" alt="pir" width={500} height="auto" /></p>

Os detalhes preenchidos aqui devem ser consistentes com os configurados no site; anteriormente, não havia nome de usuário e senha, então não é necessário preenchê-los aqui. Depois clique em submit, se for bem-sucedido, será solicitado que você escolha um local para o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage48.png" alt="pir" width={500} height="auto" /></p>

Escolha o local com base nas circunstâncias reais, depois clique em done. Assim você pode ver o efeito na overview, o restante é o mesmo que no método “discovered”.

## Integrar Nós de Sensor ao HA

Nossa empresa possui muitos sensores, como luminosidade, dióxido de carbono, etc., que também podem ser facilmente integrados ao HA. Para integrar nós de sensor, é necessário ter uma conta no [site SENSECAP](https://sensecap.seeed.cc/portal/), então primeiro você precisa registrar uma conta lá, dependendo se está se registrando no site internacional ou doméstico, e adicionar seus nós de sensor à sua conta.

Abaixo vamos primeiro explicar como adicionar dispositivos pelo aplicativo:

- [SenseCAP Mate App](https://sensecap-mate-download.seeed.cn/)

### 3.1 Adicionar nós de sensor pelo aplicativo sensecap mate

Por favor, faça login primeiro na página inicial do aplicativo. Siga as etapas abaixo para adicionar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage49.png" alt="pir" width={800} height="auto" /></p>

### 3.2 Adicionando nós de sensor pelo site

Acesse o [site SENSECAP](https://sensecap.seeed.cc/portal/), insira o EUI, Key etc. do seu dispositivo sensor e depois clique em confirm.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage50.png" alt="pir" width={800} height="auto" /></p>

Em seguida, você poderá ver os dispositivos que adicionou na lista de nós de sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage51.png" alt="pir" width={800} height="auto" /></p>

### 3.3 Adicionando ao HA

Vá para “Configuration >Add Integration”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage52.png" alt="pir" width={800} height="auto" /></p>

Na caixa de diálogo que aparecer, pesquise por "sensecraft".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage53.png" alt="pir" width={500} height="auto" /></p>

Em seguida, clique no resultado do filtro, entre e selecione **outra instância do dispositivo "SenseCraft"**, depois selecione "Add devices using SenseCraft Account".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage54.png" alt="pir" width={800} height="auto" /></p>

Clique em Submit, depois insira a conta registrada e a senha, e selecione um ambiente, isto é, se você se registrou na estação internacional (global) ou na estação doméstica (china).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage55.png" alt="pir" width={500} height="auto" /></p>

Depois de adicionar, você pode configurar as definições do sensor de acordo com suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage56.png" alt="pir" width={500} height="auto" /></p>

## E Mais

A integração do Home Assistant ao NVIDIA Jetson estará disponível em breve!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
