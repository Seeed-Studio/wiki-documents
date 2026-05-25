---
description: Primeiros Passos com o reCamera
title: Guia de Início Rápido
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
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/pt-br/recamera_getting_started/
---

# Guia de Início Rápido do reCamera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

Bem-vindo ao reCamera! Este guia irá ajudá-lo a configurar rapidamente seu dispositivo e começar a usá-lo para desbloquear recursos poderosos de Visão por IA. Seja você um iniciante ou um usuário experiente, este passo a passo irá guiá-lo pela instalação, configuração e primeiro uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font></span></strong>
    </a>
</div>

# Série de Produtos

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
        <td>Placa Central</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>Placa do Sensor</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>Placa Base</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>Wireless(Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Método de Montagem</td>
        <td>Magnético/Suporte para Câmera</td>
        <td>Magnético/Suporte para Câmera</td>
        <td>Magnético/Suporte para Câmera</td>
        <td>Magnético/Suporte para Câmera</td>
    </tr>
    <tr>
        <td>Fonte de Alimentação</td>
        <td>Cabo Tipo - C</td>
        <td>Cabo Tipo - C</td>
        <td>Cabo Tipo - C</td>
        <td>Cabo Tipo - C</td>
    </tr>
</table>

## Desembalagem e Ligar

Comece desembalando seu reCamera. Dentro da caixa, você deve encontrar:

- reCamera
- Cabo Tipo-C
- Cabo Ethernet

Certifique-se de que todas as peças estão incluídas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Simplesmente ligue o dispositivo com o cabo tipo-C fornecido. Quando você vir a luz verde acesa, isso significa que o reCamera está pronto para se conectar ao mundo.

## Conexão de Rede

Existem três métodos para conectar o reCamera à sua rede:

### Método 1: Cabo USB

**Configuração de Rede com Cabo via Cabo USB**

Conecte o cabo USB do reCamera ao seu PC, então você pode visitar ```192.168.42.1``` para visualizar a página de carregamento do reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Se você tem um reCamera com função wireless, recomendamos configurar a conexão Wi-Fi. Apenas a versão 2002w terá a interface de seleção de Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**Notas para Configuração de Rede Wi-Fi:**

1. **Garanta a Mesma Rede**: Por favor, certifique-se de que o reCamera e seu computador estão conectados à **mesma rede WiFi**. Isso garante que o desenvolvimento e depuração subsequentes possam prosseguir normalmente.

2. **Desative VPN no Computador**: Se você tem uma VPN ativada em seu computador, por favor **desligue a VPN** antes de configurar o WiFi. VPNs podem causar problemas de conexão de rede e impedir que você acesse o reCamera normalmente.

3. **Como Mudar a Conexão WiFi**:
   - Na página de configuração do reCamera (192.168.42.1), encontre a opção **Network** (Rede) em Configurações
   - Clique no **botão Enable WI-FI**
   - Selecione a rede WiFi (SSID) à qual deseja se conectar na lista
   - Digite a senha do WiFi
   - Clique no botão **Confirm**

4. Após conectar-se com sucesso ao Wi-Fi, clique no botão “Settings” para entrar na página de configurações. Você pode visualizar o endereço IP do Wi-Fi ao lado de “Wi-Fi IP”.

Se você encontrar qualquer problema, por favor visualize o [guia de solução de problemas de rede](https://wiki.seeedstudio.com/pt-br/recamera_network_connection/).

### Método 2: Ethernet

**Configuração de Rede via Porta Ethernet**

Se você gostaria de usar a porta ethernet, pode usar o cabo da caixa para conectar ao seu roteador. Nota, esta **não é uma POE (Power over Ethernet)**. Você ainda precisa do cabo tipo-c para ligar o dispositivo. Você pode **desparafusar a parte traseira** da câmera e conectar através da porta.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Uma vez conectado, você pode encontrar o IP do reCamera no backend do seu roteador, então visite o site e a plataforma Node-RED.

### Método 3: Modo AP (disponível apenas nas versões 2002w)

**Configuração de Rede Wireless no Modo AP**

Ao ligar, o reCamera ativará o Ponto de Acesso (AP) para que você altere a preferência de rede. Abra a lista de Wi-Fi do seu celular ou laptop, você deve conseguir ver um nome de Wi-Fi chamado `reCamera_******`.
O sistema de nomenclatura é ``"recamera_" + os últimos seis dígitos do endereço mac`` neste dispositivo.
A senha padrão é `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Conecte-se a este AP, e um site deve aparecer automaticamente para você. Se não, você sempre pode digitar **192.168.16.1** em seu navegador para visitar a página. Então você pode selecionar a qual wifi deseja que o reCamera se conecte.
Se você tem mais de um reCamera, pode consultar o [Gerenciamento de Dispositivos](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#gerenciamento-de-múltiplos-dispositivos) para descobrir qual é qual.

## Acesso Básico à Web

Uma vez que você conectou o reCamera à sua rede, pode visitar a interface do site do reCamera acessando o endereço IP no navegador.

- IP de conexão USB: 192.168.42.1
- IP de conexão Wi-Fi ou Ethernet: Use `ifconfig` para descobrir ou verifique com o gerenciamento de rede do seu roteador.

URLs da Web:

- **Página Inicial**: `endereço_ip/#/init`
- **Área de Trabalho**: `endereço_ip/#/workspace` (para versão do sistema 0.1.4 e acima)
- **Configuração de Rede**: `endereço_ip/#/network`
- **Segurança**: `endereço_ip/#/security`
- **Terminal**: `endereço_ip/#/terminal`
- **Sistema**: `endereço_ip/#/system`
- **Energia**: `endereço_ip/#/power`
- **Node-RED Original**: ```endereço_ip:1880```

**Por favor, verifique a versão do sistema do seu dispositivo**. Há uma grande atualização entre a versão 0.1.3 e 0.1.4. Para uma experiência de usuário mais suave, recomendamos atualizar para 0.1.5 e acima. Por favor, vá para ```Barra Lateral -> System -> Software Update``` para verificar a versão do software, e aplique e instale a versão mais recente do sistema. Instruções de atualização, por favor, consulte o [guia de atualização OTA](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#atualização-ota-da-013-para-a-versão-mais-recente).

### Atualização OTA da 0.1.3 para a versão mais recente

Se você recebeu o primeiro lote do reCamera, pode atualizar o sistema para a versão mais recente seguindo esta instrução.

**Passo 1**: Abra o site e navegue até ```Barra Lateral -> System -> Software Update```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Passo 2**: Verifique sua versão do sistema, e clique em **Check** e **Apply**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Passo 3**: Aguarde alguns minutos para atualizar o sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Passo 4**: Reinicie o dispositivo e atualize o site.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Passo 5**: Você entrará na página de carregamento para alterar a senha. Agora você pode experimentar a versão mais recente do reCamera com o painel Node-RED seguindo [esta instrução de download](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#acessar-o-painel-de-visualização-do-recamera).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Acessar o painel de visualização do reCamera

Ao integrar o dispositivo com o Node-RED, fornecemos um exemplo de interface de painel integrado onde você pode visualizar o fluxo de vídeo, alterar os modelos desejados. Você pode livremente ajustar e integrar com sua própria aplicação.

Se a versão do seu sistema for 0.1.5 ou superior, o painel de visualização será mostrado assim que você fizer login.

Se você atualizou o sistema por conta própria, pode baixar o jsonflow do painel do Sensecraft AI

**Passo 1**. Após a atualização concluída, acesse a web por `192.168.42.1` ou IP de rede, então clique em ```Download dashborad flow```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Passo 2**. Navegue até a plataforma Sensecraft AI, selecione a primeira Demonstração Oficial do Painel e clique em ```Clone```. Login é necessário para este site.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Passo 3**. Selecione o método de conexão para seu dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Passo 4**. Então a área de trabalho do Node-RED com o fluxo pré-construído será mostrada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Passo 5**. Clique em ```Deploy``` e verifique se o fluxo já está iniciado, então clique em ```dashboard```, esse painel será mostrado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Certifique-se de verificar se o fluxo foi iniciado ou não. Às vezes, importar um fluxo não inicia automaticamente o fluxo, portanto, o painel ficará vazio. Clique em `Start` no menu suspenso.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

Sucesso!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Passo 6**. Você pode ajustar o limite de ```IoU``` e ```Confidence``` para obter um resultado mais preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Compreensão rápida do fluxo

Neste fluxo de exemplo, construímos uma demonstração de contagem de números de objetos desejados, como Pessoa, Gato, Cachorro e Garrafa, com uma lista suspensa de **Seleção de Contagem**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

Ao alterar os `function nodes` no fluxo, você pode adicionar mais objetos para serem contados ou mudar completamente essa função para outras aplicações de visão computacional.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

Você pode ver quais tipos de objetos podem ser detectados visualizando o `model node`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Sinta-se à vontade para modificar e brincar com o fluxo da maneira que desejar. Apenas tenha cuidado para **não** colocar muitos `debug nodes` ou `preview nodes` após os nós do modelo, pois imprimir múltiplos resultados do modelo de IA consumirá CPU e pode causar a queda do dispositivo.

### Modelo de Visão Computacional

Para esses fluxos de trabalho fornecidos, o `YOLO11n detection model` é selecionado por padrão, que é o modelo de visão computacional mais recente para detecção de objetos em tempo real. Você também pode substituí-lo por outros modelos no nó. Se quiser ver quais outros modelos estão disponíveis, consulte esta [wiki](https://wiki.seeedstudio.com/pt-br/recamera_on_device_models/).

**Intersecção sobre União (IoU)**: IoU é uma métrica usada para avaliar a sobreposição entre a caixa delimitadora prevista e a caixa delimitadora verdadeira. É calculada como a razão entre a área de interseção das duas caixas e a área de união das duas caixas. O valor do IoU normalmente está na faixa de 0 a 1. Nós o padronizamos para uma escala de 0 - 100, um valor de IoU de 0 representa nenhuma sobreposição entre a caixa prevista e a caixa verdadeira. Um valor de 100 indica uma correspondência perfeita, significando que as duas caixas se sobrepõem completamente.

**Confiança**: A confiança no modelo YOLO representa a probabilidade de uma caixa delimitadora prevista conter um objeto e quão precisa é a previsão. É um valor entre 0 e 100.0

## Personalize seu painel e compartilhe com a Comunidade

Incentivamos os usuários a compartilhar os painéis que desenvolvem e criam na comunidade. Criamos uma pasta no [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). Esperamos que todos compartilhem seus painéis lá por meio de **pull request**, e nós os organizaremos e exibiremos.
Aqui, tomaremos como exemplo a adição de uma função de luz de preenchimento ao painel para simplesmente adicionar um nó e controlar a reCamera.

**Passo 1**. Arraste o nó ```button group``` para a área de trabalho e edite-o com a seguinte configuração.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Passo 2**. Adicione um novo nó de configuração ui-group chamado "Control Button", depois salve-o.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Passo 3**. Vá para o dashboard 2.0 e coloque o quadro do botão de controle sob a seleção do modelo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Passo 4**. Implante o fluxo e vá para o painel.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demonstração**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Passo 5**: Não se esqueça de exportar o arquivo json do fluxo e compartilhá-lo no nosso github.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Lista de Portas

A seguir, lista as portas usadas pela reCamera:

- **Porta 22**: Utilizada para login SSH remoto e está aberta.
- **Porta 53**: Associada à resolução de nomes de domínio DNS e é essencial para redirecionamento web. Está aberta por padrão.
- **Porta 80**: Serve como interface do painel web para exibição HTTP da Aplicação Node-RED.
- **Porta 554**: Empregada para streaming de vídeo RTSP.
- **Porta 9090**: Destinada ao acesso ao terminal web, que requer uma senha para login.
- **Porta 1880**: Dedicada às operações do Node-RED.

## Restauração de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

Se você deseja redefinir o dispositivo, como esquecer a senha do seu dispositivo, pode pressionar e segurar o botão **User** e, em seguida, conectar o dispositivo à energia. Quando a `luz vermelha` do dispositivo estiver **constantemente acesa** em vez de piscar, solte o botão User.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
Isso excluirá as informações do usuário, incluindo aplicativos que você desenvolveu ou qualquer imagem e vídeo armazenados localmente. Por favor, opere com cautela.
:::

Se você deseja restaurar o firmware do seu dispositivo para uma versão específica, visite [controle de versão do sistema operacional](https://wiki.seeedstudio.com/pt-br/recamera_os_version_control)

## Gerenciamento de Múltiplos Dispositivos

Se você tiver mais de uma reCamera, pode distingui-las pelo **endereço MAC** ou **número de S/N** na parte de trás do dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

Ou, uma vez que você conectar o dispositivo ao seu laptop via USB ou AP, pode visualizar o endereço MAC usando o seguinte comando

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Orientação da Câmera

A orientação padrão da visão da câmera é como a imagem abaixo, onde o tipo-c está **voltado para baixo**. Esteja ciente de que outras orientações podem afetar a precisão do modelo, dependendo de como você treinou o modelo de detecção.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Recursos

- [Folheto da reCamera](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [Sistema Operacional reCamera](https://github.com/Seeed-Studio/reCamera-OS)

- [Série reCamera](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

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
