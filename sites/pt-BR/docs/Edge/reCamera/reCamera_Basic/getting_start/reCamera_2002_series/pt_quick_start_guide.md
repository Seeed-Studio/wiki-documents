---
description: Introdução ao reCamera 2002 Series
title: Guia de início rápido
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899
sidebar_position: 1
last_update:
  date: 04/10/2026
  author: Evelyn Chen & Samuel
createdAt: '2024-11-11'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/recamera_getting_started/
---

# Guia de início rápido do reCamera 2002 Series

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

Bem-vindo ao reCamera! Este guia ajudará você a configurar rapidamente seu dispositivo e começar a usá-lo para desbloquear poderosos recursos de IA de Visão. Seja você iniciante ou usuário experiente, este passo a passo irá guiá-lo pela instalação, configuração e primeiro uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font></span></strong>
    </a>
</div>

# Série de produtos

Existem 4 versões do reCamera:

<table border="1">
    <tr>
        <th> </th>
        <th>reCamera 2002 8GB</th>
        <th>reCamera 2002 64GB</th>
        <th>reCamera 2002w 8GB</th>
        <th>reCamera 2002w 64GB</th>
    </tr>
    <tr>
        <td>Placa principal (Core Board)</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>Placa de sensor (Sensor Board)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>Placa base (Base Board)</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>Sem fio (Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Método de montagem</td>
        <td>Montagem magnética/suporte de câmera</td>
        <td>Montagem magnética/suporte de câmera</td>
        <td>Montagem magnética/suporte de câmera</td>
        <td>Montagem magnética/suporte de câmera</td>
    </tr>
    <tr>
        <td>Fonte de alimentação</td>
        <td>Cabo Type-C</td>
        <td>Cabo Type-C</td>
        <td>Cabo Type-C</td>
        <td>Cabo Type-C</td>
    </tr>
</table>

## Desembalagem e ligar o dispositivo

Comece desembalando o reCamera. Dentro da caixa, você deverá encontrar:

- reCamera
- Cabo Type-C
- Cabo Ethernet

Certifique-se de que todas as partes estão incluídas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Basta ligar o dispositivo com o cabo Type-C fornecido. Quando você vir a luz verde acesa, isso significa que o reCamera está pronto para se conectar ao mundo.

## Conexão de rede

Existem três métodos para conectar o reCamera à sua rede:

### Método 1: Cabo USB

**Configuração de rede cabeada via cabo USB**

Conecte o cabo USB do reCamera ao seu PC e então você poderá acessar ```192.168.42.1``` para visualizar a página de carregamento do reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Se você tiver um reCamera com função sem fio, recomendamos configurar a conexão Wi-Fi. Somente a versão 2002w terá a interface de seleção de Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**Observações para configuração de rede Wi-Fi:**

1. **Garanta a mesma rede**: Certifique-se de que o reCamera e o seu computador estejam conectados à **mesma rede Wi-Fi**. Isso garante que o desenvolvimento e a depuração subsequentes possam prosseguir normalmente.

2. **Desative o VPN no computador**: Se você tiver um VPN ativado no computador, por favor **desative o VPN** antes de configurar o Wi-Fi. VPNs podem causar problemas de conexão de rede e impedir que você acesse o reCamera normalmente.

3. **Como alternar a conexão Wi-Fi**:
   - Na página de configuração do reCamera (192.168.42.1), encontre a opção de configurações de **Network**
   - Clique no **Enable WI-FI botton**
   - Selecione na lista a rede Wi-Fi (SSID) à qual você deseja se conectar
   - Digite a senha do Wi-Fi
   - Clique no botão **Confirm**

4. Após conectar-se com sucesso ao Wi-Fi, clique no botão “Settings” para entrar na página de configurações. Você pode visualizar o endereço IP do Wi-Fi ao lado de “Wi-Fi IP”.

Se você encontrar qualquer problema, consulte o [network troubleshoot](https://wiki.seeedstudio.com/pt-br/recamera_network_connection/).

### Método 2: Ethernet

**Configuração de rede pela porta Ethernet**

Se você quiser usar a porta Ethernet, pode usar o cabo da caixa para conectar ao seu roteador. Observe que isto **não é POE (Power over Ethernet)**. Você ainda precisa do cabo Type-C para ligar o dispositivo. Você pode **desparafusar a parte traseira** da câmera e conectar pela porta.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Depois de conectado, você pode encontrar o IP do reCamera no painel do seu roteador e então acessar o site e a plataforma Node-RED.

### Método 3: Modo AP (disponível apenas nas versões 2002w)

**Configuração de rede sem fio em modo AP**

Ao ligar, o reCamera ativará o Access Point (AP) para que você altere a preferência de rede. Abra a lista de Wi-Fi do seu celular ou laptop; você deverá ver um nome de Wi-Fi chamado `reCamera_******`.
O sistema de nomenclatura é ``"recamera_" + os últimos seis dígitos do endereço MAC`` deste dispositivo.
A senha padrão é `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Conecte-se a este AP e uma página da web deverá aparecer automaticamente para você. Se não aparecer, você sempre pode digitar **192.168.16.1** no navegador para acessar a página. Em seguida, você pode selecionar a qual Wi-Fi deseja que o reCamera se conecte.

## Acesso básico via Web

Depois de conectar o reCamera à sua rede, você pode acessar a interface web do reCamera acessando o endereço IP no navegador.

- IP de conexão USB: 192.168.42.1
- IP de conexão Wi-Fi ou Ethernet: use `ifconfig` para descobrir ou verifique no gerenciamento de rede do seu roteador.

URLs da Web:

- **Página inicial**: `ip_address/#/init`
- **Área de trabalho (Workspace)**: `ip_address/#/workspace` (para versão do OS 0.1.4 e superior)
- **Configuração de rede**: `ip_address/#/network`
- **Segurança**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energia (Power)**: `ip_address/#/power`
- **Node-RED original**: ```ip_address:1880```

**Verifique a versão do sistema operacional (OS) do seu dispositivo**. Há uma grande atualização entre as versões 0.1.3 e 0.1.4. Para uma experiência de uso mais suave, recomendamos atualizar para 0.1.5 ou superior. Acesse ```Sidebar -> System -> Software Update``` para verificar a versão do software e aplicar e instalar a versão mais recente do OS. Para instruções de atualização, consulte o [OTA upgrade guideline](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

### Atualização OTA da versão 0.1.3 para a versão mais recente

Se você recebeu o primeiro lote de reCamera, pode atualizar o OS para a versão mais recente seguindo estas instruções.

**Passo 1**: Abra o site e navegue até ```Sidebar -> System -> Software Update```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Passo 2**: Verifique a versão do seu OS e clique em **Check** e **Apply**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Passo 3**: Aguarde alguns minutos para atualizar o sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Passo 4**: Reinicie o dispositivo e atualize a página da web.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Passo 5**: Você entrará na página de carregamento para alterar a senha. Agora você pode experimentar a versão mais recente do reCamera com o painel (dashboard) do Node-RED seguindo [estas instruções de download](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#access-recamera-preview-dashboard).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Acessar o painel de pré-visualização do reCamera

Ao integrar o dispositivo com o Node-RED, fornecemos um exemplo de interface de painel (dashboard) integrada, onde você pode pré-visualizar o fluxo de vídeo e alterar os modelos desejados. Você pode livremente ajustar e integrar com a sua própria aplicação.

Se a versão do seu OS for 0.1.5 ou superior, o painel de pré-visualização será exibido assim que você fizer login.

Se você atualizar o OS por conta própria, poderá baixar o fluxo JSON do dashboard a partir do Sensecraft AI

**Passo 1**. Após a conclusão da atualização, acesse a web por `192.168.42.1` ou pelo IP de rede e clique em ```Download dashborad flow```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Passo 2**. Navegue até a plataforma Sensecraft AI, selecione o primeiro Dashboard Demo oficial e clique em ```Clone```. É necessário fazer login neste site.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Passo 3**. Selecione o método de conexão para o seu dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Passo 4**. Em seguida, será exibida a área de trabalho do Node-RED com o fluxo pré-construído.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Passo 5**. Clique em ```Deploy``` e verifique se o fluxo já foi iniciado; em seguida, clique em ```dashboard```, e o painel será exibido.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Certifique-se de verificar se o fluxo foi iniciado ou não. Às vezes, importar um fluxo não o inicia automaticamente, e assim o painel ficará vazio. Clique em `Start` no menu suspenso.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

Sucesso!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Passo 6**. Você pode ajustar o limite de ```IoU``` e ```Confidence``` para obter um resultado mais preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Entendendo rapidamente o fluxo

Neste fluxo de exemplo, construímos uma demonstração de contagem do número de objetos desejados, como Pessoa, Gato, Cachorro e Garrafa, com uma lista suspensa de **Seleção de contagem**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

Ao alterar os `function nodes` no fluxo, você pode adicionar mais objetos a serem contados ou alterar completamente essa função para outras aplicações de visão computacional.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

Você pode ver que tipo de objetos podem ser detectados visualizando o `model node`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Sinta-se à vontade para ajustar e brincar com o fluxo da forma que quiser. Apenas tome cuidado para **não** colocar muitos `debug nodes` ou `preview nodes` após os model nodes, pois imprimir vários resultados do modelo de IA consumirá CPU e poderá fazer o dispositivo travar.

### Modelo de Visão Computacional

Para esses fluxos fornecidos, o `YOLO11n detection model` é selecionado por padrão, que é o modelo de visão computacional mais recente para detecção de objetos em tempo real. Você também pode substituí-lo por outros modelos no nó. Se quiser ver quais outros modelos estão disponíveis, consulte este [wiki](https://wiki.seeedstudio.com/pt-br/recamera_on_device_models/).

**Intersection over Union (IoU)**: IoU é uma métrica usada para avaliar a sobreposição entre a caixa delimitadora prevista e a caixa delimitadora de referência. Ela é calculada como a razão entre a área de interseção das duas caixas e a área de união das duas caixas. O valor de IoU normalmente está na faixa de 0 a 1. Nós o padronizamos para uma escala de 0 - 100; um valor de IoU de 0 representa nenhuma sobreposição entre a caixa prevista e a caixa de referência. Um valor de 100 indica uma correspondência perfeita, significando que as duas caixas se sobrepõem completamente.

**Confidence**: Confidence no modelo YOLO representa a probabilidade de que uma caixa delimitadora prevista contenha um objeto e quão precisa é a previsão. É um valor entre 0 e 100.0

## Personalize seu dashboard e compartilhe com a Comunidade

Incentivamos os usuários a compartilhar os dashboards que desenvolvem e criam na comunidade. Criamos uma pasta no [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). Esperamos que todos compartilhem seus dashboards lá por meio de **pull request**, e nós os organizaremos e exibiremos.
Aqui, tomaremos como exemplo a adição de uma função de luz de preenchimento ao dashboard para simplesmente adicionar um nó e controlar a reCamera.

**Passo 1**. Arraste o nó ```button group``` para o workspace e edite-o com a seguinte configuração.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Passo 2**. Adicione um novo nó de configuração ui-group chamado "Control Button" e salve-o.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Passo 3**. Vá para o dashboard 2.0 e coloque o quadro do botão de controle abaixo da seleção de modelo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Passo 4**. Faça o deploy do fluxo e vá para o dashboard.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demonstração**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Passo 5**: Não se esqueça de exportar o arquivo json do fluxo e compartilhá-lo em nosso GitHub.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Lista de Portas

A seguir são listadas as portas usadas pela reCamera:

- **Porta 22**: Utilizada para login remoto via SSH e está aberta.
- **Porta 53**: Associada à resolução de nomes de domínio DNS e é essencial para redirecionamento web. Ela é aberta por padrão.
- **Porta 80**: Serve como interface de dashboard web para exibição HTTP da aplicação Node-RED.
- **Porta 554**: Empregada para streaming de vídeo RTSP.
- **Porta 9090**: Destinada ao acesso ao terminal web, que requer uma senha para login.
- **Porta 1880**: Dedicada às operações do Node-RED.

## Restauração de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

Se você quiser redefinir o dispositivo, por exemplo, ao esquecer o código de acesso do dispositivo, mantenha pressionado o botão **User** e, em seguida, conecte o dispositivo à alimentação. Quando a `red light` do dispositivo estiver **constantemente acesa** em vez de piscando, solte o botão User.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
Isso excluirá informações do usuário, incluindo aplicativos que você desenvolveu ou qualquer imagem e vídeo armazenados localmente. Por favor, opere com cautela.
:::

Se você quiser restaurar o firmware do seu dispositivo para uma versão específica, visite [os version control](https://wiki.seeedstudio.com/pt-br/recamera_os_version_control)

## Gerenciamento de Múltiplos Dispositivos

Se você tiver mais de uma reCamera, poderá distingui-las pelo **endereço MAC** ou pelo **número S/N** na parte de trás do dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

Ou, depois de conectar o dispositivo ao seu laptop via USB ou AP, você pode visualizar o endereço MAC usando o seguinte comando

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Orientação da Câmera

A orientação padrão da visualização da câmera é como na imagem abaixo, onde o type-c está **voltado para baixo**. Esteja ciente de que outras orientações podem afetar a precisão do modelo, dependendo de como você treinou o modelo de detecção.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Recursos

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
