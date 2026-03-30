---
description: Primeiros passos com a reCamera
title: Guia de Início Rápido
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899
sidebar_position: 1
last_update:
  date: 02/15/2025
  author: Evelyn Chen
createdAt: '2024-11-11'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recamera_getting_started/
---

# Guia de Início Rápido da reCamera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

Bem-vindo à reCamera! Este guia vai ajudar você a configurar rapidamente o seu dispositivo e começar a usá-lo para desbloquear poderosos recursos de visão com IA. Seja você iniciante ou usuário experiente, este passo a passo irá guiá-lo pela instalação, configuração e primeiro uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱</font></span></strong>
    </a>
</div>

# Série de Produtos

Existem 4 versões da reCamera:

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
        <td>Suporte magnético/suporte de câmera</td>
        <td>Suporte magnético/suporte de câmera</td>
        <td>Suporte magnético/suporte de câmera</td>
        <td>Suporte magnético/suporte de câmera</td>
    </tr>
    <tr>
        <td>Fonte de alimentação</td>
        <td>Cabo Type-C</td>
        <td>Cabo Type-C</td>
        <td>Cabo Type-C</td>
        <td>Cabo Type-C</td>
    </tr>
</table>

## Desembalagem e Ligar o Dispositivo

Comece desembalando sua reCamera. Dentro da caixa, você deverá encontrar:

- reCamera
- Cabo Type-C
- Cabo Ethernet

Verifique se todas as partes estão incluídas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Basta ligar o dispositivo com o cabo Type-C fornecido. Quando você vir a luz verde acesa, isso significa que a reCamera está pronta para se conectar ao mundo.

## Conexão de Rede

Há três métodos para conectar a reCamera à sua rede:

### Método 1: Cabo USB

**Configuração de rede com fio via cabo USB**

Conecte o cabo USB da reCamera ao seu PC e então você poderá acessar ```192.168.42.1``` para visualizar a página de carregamento da reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Se você tiver uma reCamera com função sem fio, recomendamos configurar a conexão Wi-Fi. Apenas a versão 2002w terá a interface de seleção de Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

Se você encontrar algum problema, consulte a [solução de problemas de rede](https://wiki.seeedstudio.com/pt-br/recamera_network_connection/).

### Método 2: Ethernet

**Configuração de rede pela porta Ethernet**

Se você quiser usar a porta Ethernet, pode usar o cabo da caixa para conectar ao seu roteador. Observe que isto **não é POE (Power over Ethernet)**. Você ainda precisa do cabo Type-C para ligar o dispositivo. Você pode **desparafusar a parte traseira** da câmera e conectar através da porta.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Depois de conectado, você pode encontrar o IP da reCamera no painel do seu roteador e então acessar o site e a plataforma Node-RED.

### Método 3: Modo AP (disponível apenas nas versões 2002w)

**Configuração de rede sem fio em modo AP**

Ao ligar, a reCamera ativará o Access Point (AP) para que você possa alterar a preferência de rede. Abra a lista de Wi-Fi do seu telefone ou laptop e você deverá ver uma rede Wi-Fi chamada `reCamera_******`.
O sistema de nomenclatura é ``"recamera_" + os últimos seis dígitos do endereço MAC`` deste dispositivo.
A senha padrão é `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Conecte-se a este AP e um site deverá aparecer automaticamente para você. Se não acontecer, você sempre pode digitar **192.168.16.1** no navegador para acessar a página. Em seguida, você pode selecionar a qual Wi-Fi deseja que a reCamera se conecte.
Se você tiver mais de uma reCamera, pode consultar o [Gerenciamento de Dispositivos](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#Gerenciamento-de-vários-dispositivos) para descobrir qual é qual.

## Acesso básico via Web

Depois que você conectar a reCamera à sua rede, poderá acessar a interface web da reCamera digitando o endereço IP no navegador.

- IP da conexão USB: 192.168.42.1
- IP da conexão Wi-Fi ou Ethernet: use `ifconfig` para descobrir ou verifique no gerenciador de rede do seu roteador.

URLs da Web:

- **Página inicial**: `ip_address/#/init`
- **Área de trabalho**: `ip_address/#/workspace` (para versão do SO 0.1.4 e superior)
- **Configuração de rede**: `ip_address/#/network`
- **Segurança**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energia**: `ip_address/#/power`
- **Node-RED original**: ```ip_address:1880```

**Verifique a versão do SO do seu dispositivo**. Há uma grande atualização entre as versões 0.1.3 e 0.1.4. Para uma experiência de uso mais suave, recomendamos atualizar para 0.1.5 ou superior. Vá para ```Sidebar -> System -> Software Update``` para verificar a versão do software e aplicar e instalar a versão mais recente do SO. Para as instruções de atualização, consulte o [guia de atualização OTA](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#Atualização-OTA-da-013-para-a-versão-mais-recente).

### Atualização OTA da 0.1.3 para a versão mais recente

Se você tiver o primeiro lote da reCamera, pode atualizar o SO para a versão mais recente seguindo estas instruções.

**Passo 1**: Abra o site e navegue até ```Sidebar -> System -> Software Update```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Passo 2**: Verifique a versão do seu SO e clique em **Check** e **Apply**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Passo 3**: Aguarde alguns minutos para atualizar o sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Passo 4**: Reinicie o dispositivo e atualize a página do site.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Passo 5**: Você entrará na página de carregamento para alterar a senha. Agora você pode experimentar a versão mais recente da reCamera com o painel do Node-RED seguindo [estas instruções de download](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#Acessar-o-dashboard-de-preview-da-reCamera).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Acessar o dashboard de preview da reCamera

Ao integrar o dispositivo com o Node-RED, fornecemos um exemplo de interface de dashboard integrada onde você pode visualizar o fluxo de vídeo e alterar os modelos desejados. Você pode livremente ajustar e integrar com sua própria aplicação.

Se sua versão do SO for 0.1.5 ou superior, o dashboard de preview será exibido assim que você fizer login.

Se você atualizar o SO por conta própria, poderá baixar o fluxo JSON do dashboard a partir do Sensecraft AI

**Passo 1**. Após a conclusão da atualização, acesse a web por `192.168.42.1` ou pelo IP de rede e clique em ```Download dashborad flow```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Passo 2**. Navegue até a plataforma Sensecraft AI, selecione o primeiro Dashboard Demo oficial e clique em ```Clone```. É necessário fazer login neste site.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Passo 3**. Selecione o método de conexão para o seu dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Passo 4**. Em seguida, será exibida a área de trabalho do Node-RED com o fluxo pré-construído.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Passo 5**. Clique em ```Deploy``` e verifique se o fluxo já foi iniciado; depois clique em ```dashboard```, e o dashboard será exibido.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Certifique-se de verificar se o fluxo foi iniciado ou não. Às vezes, ao importar um fluxo ele não é iniciado automaticamente e, portanto, o dashboard ficará vazio. Clique em `Start` no menu suspenso.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

Sucesso!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Passo 6**. Você pode ajustar o limite de ```IoU``` e ```Confidence``` para obter um resultado mais preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Entendendo rapidamente o fluxo

Neste fluxo de exemplo, criamos uma demonstração para contar o número de objetos desejados, como Pessoa, Gato, Cachorro e Garrafa, com uma lista suspensa de **Seleção de contagem (Counting Selection)**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

Ao alterar os `function nodes` no fluxo, você pode adicionar mais objetos a serem contados ou mudar completamente essa função para outras aplicações de visão computacional.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

Você pode ver que tipo de objetos podem ser detectados visualizando o `model node`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Sinta-se à vontade para ajustar e brincar com o fluxo da maneira que quiser. Apenas tenha cuidado para **não** colocar muitos `debug nodes` ou `preview nodes` após os nós de modelo, pois imprimir múltiplos resultados do modelo de IA irá consumir CPU e causar travamentos no dispositivo.

### Modelo de Visão Computacional

Para estes workflows fornecidos, o `YOLO11n detection model` é selecionado por padrão, que é o mais recente modelo de visão computacional para detecção de objetos em tempo real. Você também pode substituí-lo por outros modelos no nó. Se quiser ver quais outros modelos estão disponíveis, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/recamera_on_device_models/).

**Intersection over Union (IoU)**: IoU é uma métrica usada para avaliar a sobreposição entre o retângulo delimitador previsto e o retângulo delimitador real. Ela é calculada como a razão entre a área de interseção das duas caixas e a área de união das duas caixas. O valor de IoU está tipicamente no intervalo de 0 a 1. Nós o padronizamos para uma escala de 0 - 100; um valor de IoU de 0 representa nenhuma sobreposição entre a caixa prevista e a caixa real. Um valor de 100 indica uma correspondência perfeita, significando que as duas caixas se sobrepõem completamente.

**Confiança**: Confiança no modelo YOLO representa a probabilidade de que uma caixa delimitadora prevista contenha um objeto e quão precisa é a previsão. É um valor entre 0 e 100,0.

## Personalize seu dashboard e compartilhe com a Comunidade

Incentivamos os usuários a compartilharem os dashboards que desenvolvem e criam na comunidade. Criamos uma pasta no [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). Esperamos que todos compartilhem seus dashboards ali por meio de **pull request**, e nós iremos organizá-los e exibi-los.
Aqui, tomaremos como exemplo adicionar uma função de luz de preenchimento ao dashboard para simplesmente adicionar um nó e controlar a reCamera.

**Passo 1**. Arraste o nó ```button group``` para a área de trabalho e edite-o com a seguinte configuração.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Passo 2**. Adicione um novo nó de configuração ui-group chamado "Control Button" e, em seguida, salve-o.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Passo 3**. Vá para o dashboard 2.0 e coloque o quadro do botão de controle abaixo da seleção de modelo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Passo 4**. Faça o deploy do fluxo e vá para o dashboard.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demo**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Passo 5**: Não se esqueça de exportar o arquivo json do fluxo e compartilhá-lo em nosso GitHub.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Lista de Portas

A seguir estão listadas as portas usadas pela reCamera:

- **Porta 22**: Utilizada para login remoto via SSH e está aberta.
- **Porta 53**: Associada à resolução de nomes de domínio DNS e é essencial para o redirecionamento web. Ela é aberta por padrão.
- **Porta 80**: Serve como interface de dashboard web para exibição HTTP da aplicação Node-RED.
- **Porta 554**: Empregada para streaming de vídeo RTSP.
- **Porta 9090**: Destinada ao acesso ao terminal web, que exige senha para login.
- **Porta 1880**: Dedicada às operações do Node-RED.

## Restauração de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

Se você quiser redefinir o dispositivo, por exemplo ao esquecer o código de acesso do dispositivo, você pode manter pressionado o botão **User** e então conectar o dispositivo à alimentação. Quando a `red light` do dispositivo estiver **constantemente acesa** em vez de piscando, solte o botão User.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
Isso excluirá as informações do usuário, incluindo aplicações que você desenvolveu ou qualquer imagem e vídeo armazenados localmente. Por favor, proceda com cautela.
:::

Se você quiser restaurar o firmware do seu dispositivo para uma versão específica, visite [os version control](https://wiki.seeedstudio.com/pt-br/recamera_os_version_control)

## Gerenciamento de Múltiplos Dispositivos

Se você tiver mais de uma reCamera, poderá diferenciá-las pelo **endereço MAC** ou pelo **número de série (S/N)** na parte de trás do dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

Ou, depois de conectar o dispositivo ao seu laptop via USB ou AP, você pode visualizar o endereço MAC usando o seguinte comando

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Orientação da Câmera

A orientação padrão da visualização da câmera é como na imagem abaixo, onde o Type-C está **apontando para baixo**. Esteja ciente de que outras orientações podem afetar a precisão do modelo, dependendo de como você treinou o modelo de detecção.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Recursos

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Série](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
