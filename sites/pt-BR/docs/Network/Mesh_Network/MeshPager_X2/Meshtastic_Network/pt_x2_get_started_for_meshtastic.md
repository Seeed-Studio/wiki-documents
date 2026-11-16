---
description: Comece a usar a SenseCAP MeshPager X2 Series usando botões físicos, MUI e Base UI, pareamento Bluetooth, mensagens, GNSS e mapas em microSD.
title: Introdução ao Meshtastic
keywords:
  - MeshPager X2 Series
  - Meshtastic
slug: /x2_get_started_for_meshtastic
sidebar_position: 1
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-08-28'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/pt-br/x2_get_started_for_meshtastic/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A SenseCAP MeshPager X2 Series usa botões físicos para operar duas interfaces Meshtastic: **MUI**, com páginas gráficas e mapas, e **Base UI**, com telas de informações e menus.

Para especificações, conectores e atribuições de pinos, consulte a [Introdução à SenseCAP MeshPager X2 Series](/pt-br/meshpager_x2_intro/).

:::caution Antes de ligar
Conecte uma antena LoRa compatível com a faixa de operação. Use a bateria X2 especificada, classificada para **carga de 4,4 V**; uma célula classificada para tensão máxima de carga de 4,2 V é inadequada.
:::

## Gravar firmware

Se o firmware já estiver instalado, continue em [Introdução](/pt-br/x2_get_started_for_meshtastic/#introdução).

1. Conecte o X2 a um computador usando um cabo de dados USB.
2. Abra o [Meshtastic Web Flasher](https://flasher.meshtastic.org/) em um navegador que ofereça suporte a Web Serial, como o Chrome ou Edge para desktop.
3. Abra **Select Target Device** e procure por **Seeed MeshPager X2**. Se estiver disponível, selecione-o e escolha uma versão de firmware compatível.
4. Clique em **Flash** e siga as instruções para entrar no modo de download e selecionar a porta USB atual do X2. Mantenha o USB conectado até a conclusão da programação.

:::info Se o X2 não estiver listado
O X2 não estava presente na lista de dispositivos do Web Flasher público quando este guia foi verificado. Se você não conseguir encontrar **Seeed MeshPager X2**, use a imagem de fábrica do X2 e a [Instalação manual de firmware](/pt-br/x2_get_started_for_meshtastic/#instalação-manual-de-firmware). Não selecione outro modelo de dispositivo para o X2.
:::

Para forçar o X2 ao modo de gravação de firmware, **mantenha pressionados Power e Return ao mesmo tempo** e, em seguida, **conecte o cabo USB**. Mantenha ambos os botões pressionados por **1 segundo** e depois solte-os.

Para gravar um `.factory.bin` do X2 já baixado, siga a [Instalação manual de firmware com esptool](/pt-br/x2_get_started_for_meshtastic/#instalação-manual-de-firmware).

:::caution Use apenas firmware do X2
Use firmware para **Seeed MeshPager X2** (`seeed_meshpager_x2`) e siga as instruções fornecidas com a imagem. Ative o apagamento completo somente quando necessário e faça backup das suas configurações antes.
:::

## Introdução

### Ligar e navegar

1. Conecte uma **fonte USB regulada de 5 V** à porta USB-C para carregar a bateria.
2. Use a tecla **Power** para iniciar o X2. Para sair da tela somente de carregamento, solte Power e depois mantenha-o pressionado por aproximadamente **5 segundos**.
3. Aguarde o carregamento da Base UI ou MUI.

Com o USB conectado, o desligamento pode fazer o X2 retornar à tela somente de carregamento.

#### Reinicialização forçada

Para forçar a reinicialização do X2, **pressione Power e conecte um cabo USB-C (Tipo-C) energizado ao mesmo tempo**.

### Controles por botões

| Tecla | Base UI | MUI |
| --- | --- | --- |
| Up / Down | Percorrer itens de menu, nós ou conversas de mensagens. A partir da tela inicial, abrir o editor de mensagens. | Destacar ícones de navegação ou controles. |
| Left / Right | Alternar telas de informações ou mover entre teclas do teclado. | Right entra em uma página destacada. Dentro de uma página, alternar abas, ajustar controles deslizantes ou mover entre teclas do teclado. |
| Confirm (tecla laranja esquerda) | Abrir o menu de uma tela ou selecionar um item. | Ativar o item destacado. |
| Manter Confirm pressionado | Executar a ação de pressionamento longo do controle selecionado, quando suportado. | Executar a ação de pressionamento longo do controle selecionado, quando suportado. |
| Return | Cancelar a entrada ou fechar um menu. | Fechar um teclado, lista ou diálogo, ou voltar um nível. |
| Power | Pressão curta: desligar/ativar a tela. Manter pressionado por aproximadamente 4 segundos: desligar. | Pressão curta: desligar/ativar a tela. Manter pressionado por aproximadamente 4 segundos: desligar. |

Neste guia, **selecionar** significa destacar um item com as teclas de direção e pressionar **Confirm**. **Confirm** é a tecla laranja abaixo da tela, à esquerda, marcada com uma linha horizontal. **Left/Right** se referem ao direcional.

### Alternância de UI

Escolha abaixo a direção de alternância. Não é necessário regravar o firmware.

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142916.png" alt="Close-up of MeshPager X2 Base UI showing battery, node, satellite, and channel-utilization information" width={1276} height={1010} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Base UI</strong> — telas de informações e menus.</figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142835.png" alt="Close-up of MeshPager X2 MUI showing the Home page and navigation icons along the left edge" width={1546} height={1172} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>MUI</strong> — páginas gráficas e mapas.</figcaption>
  </figure>
</div>

<Tabs groupId="x2-ui-switch">
<TabItem value="base-to-mui" label="Base UI para MUI">

1. Use Left/Right para chegar a **System** e depois pressione Confirm.
2. Selecione **Reboot/Shutdown → Switch to MUI → Yes**.
3. Aguarde o X2 reiniciar em MUI.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: select Switch to MUI in Base UI and confirm the restart">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4">Download the Base UI to MUI demonstration.</a>
  </video>
  <figcaption>Base UI para MUI. O vídeo termina durante a reinicialização.</figcaption>
</figure>

</TabItem>
<TabItem value="mui-to-base" label="MUI para Base UI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Abra o menu.</strong> Destaque Settings na barra de navegação e pressione Right para entrar. Selecione Reboot / Shutdown e pressione Confirm.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key used to switch to Base UI" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Mantenha Confirm pressionado para alternar a UI.</strong> Use Left/Right para destacar o ícone de Bluetooth. <strong>Mantenha Confirm pressionado (a tecla laranja esquerda)</strong> até que o diálogo <strong>Reboot into BaseUI?</strong> apareça e então solte a tecla.</figcaption>
  </figure>
</div>

**3. Confirme a reinicialização.** Selecione **OK** e aguarde o X2 reiniciar em Base UI.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: hold Confirm on the MUI Bluetooth icon and confirm the switch to Base UI">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4">Download the MUI to Base UI demonstration.</a>
  </video>
  <figcaption>MUI para Base UI. O vídeo termina durante a reinicialização.</figcaption>
</figure>

</TabItem>
</Tabs>

### Conexão com o telefone

**Etapa 1. Ative o Bluetooth no X2.**

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

O Bluetooth é ativado após alternar a partir da MUI. Para ativá-lo manualmente, abra **System**, pressione Confirm e selecione **Bluetooth Toggle**. Reinicie se for solicitado. Se o Wi-Fi impedir o pareamento Bluetooth, desative o Wi-Fi primeiro.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-home.png" alt="X2 Base UI Home screen with BT off and the example node name outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Verifique o status do Bluetooth.</strong> <code>BT off</code> significa que o Bluetooth está desativado. O nome de nó mostrado aqui é um exemplo; procure pelo seu próprio X2 no app.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-bluetooth-toggle.png" alt="X2 Base UI System Action menu with Bluetooth Toggle and the left orange Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Ative o Bluetooth.</strong> Na tela System, pressione Confirm, selecione Bluetooth Toggle e siga qualquer solicitação de reinicialização.</figcaption>
  </figure>
</div>

</TabItem>
<TabItem value="mui" label="MUI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Abra o menu.</strong> Entre em Settings, selecione Reboot / Shutdown e pressione Confirm.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="Menu de reinicialização do X2 com contornos vermelhos ao redor do ícone de Bluetooth e tecla Confirm laranja à esquerda" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Entre no modo de conexão Bluetooth.</strong> Use Esquerda/Direita para realçar o ícone de Bluetooth e, em seguida, pressione rapidamente Confirmar (a tecla laranja da esquerda).</figcaption>
  </figure>
</div>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-145102.png" alt="Tela de conexão Bluetooth do MeshPager X2 MUI mostrando o ícone de Bluetooth, o rótulo Programming mode e um PIN de pareamento de seis dígitos" width={480} height={341} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption><strong>3. Aguarde o PIN de pareamento.</strong> A tela de conexão Bluetooth exibe Programming mode e um PIN de seis dígitos.</figcaption>
</figure>

:::caution Retornar ao MUI
Após a configuração, pressione **Confirm** para retornar ao MUI.
:::

</TabItem>
</Tabs>

**Etapa 2. Baixar o app Meshtastic**

[Clique aqui](https://meshtastic.org/downloads/) para baixar o app Meshtastic para **iOS** ou **Android**.

**Etapa 3. Fazer pareamento com o dispositivo**

Ative o Bluetooth no seu telefone, abra o app Meshtastic e conceda as permissões solicitadas de Bluetooth ou Dispositivos próximos. As capturas de tela abaixo ilustram o fluxo do app; selecione o nome do dispositivo do seu X2 na lista.

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Abra o painel **Bluetooth** no app Meshtastic e selecione seu X2 em **Available Radios**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="Painel Bluetooth do app Meshtastic para iOS com um rádio de exemplo realçado em Available Radios" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. Digite o código exibido na tela do X2 e toque em **Pair** para conectar. Se você configurou um PIN fixo, use esse PIN.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="Solicitação de pareamento Bluetooth no iOS mostrando o campo de entrada do PIN e o botão Pair" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Abra o painel **Connection** no app Meshtastic, escolha **BLE** e selecione seu X2 na lista de dispositivos.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="Painel Connection do app Meshtastic para Android com BLE selecionado e rádios próximos listados" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. Digite o código exibido na tela do X2 e toque em **OK** para conectar. Se você configurou um PIN fixo, use esse PIN.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="Solicitação de pareamento Bluetooth no Android com um campo de entrada de PIN e o botão OK realçado" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

Aguarde o carregamento da configuração do dispositivo antes de alterar as configurações.

### Configurar LoRa

Antes de se comunicar pela malha, defina sua **região**. Essa configuração controla a faixa de frequência que seu dispositivo usa e deve corresponder à sua localização, ao hardware de rádio **863–928 MHz** do X2 e à sua antena.

**Lista de regiões**

| **Region Code** | **Descrição** | **Faixa de frequência (MHz)** | **Duty cycle (%)** | **Limite de potência (dBm)** |
| :---: | :---: | :---: | :---: | :---: |
| UNSET | Não definido | N/A | N/A | N/A |
| US | Estados Unidos | 902.0 - 928.0 | 100 | 30 |
| EU_868 | União Europeia 868MHz | 869.4 - 869.65 | 10 | 27 |

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente. Os limites de potência acima são limites de região do Meshtastic; a potência real de transmissão do X2 também depende do hardware e do firmware.

:::info Duty cycle de EU_868
EU_868 tem um **limite de duty cycle de 10%**, calculado a cada minuto ao longo de uma hora móvel. Se o dispositivo atingir esse limite, ele para de transmitir até que a transmissão seja novamente permitida.
:::

<Tabs groupId="x2-lora-method">
<TabItem value="base" label="Base UI">

1. Use Esquerda/Direita para chegar em **LoRa** e pressione Confirmar.
2. Selecione **LoRa Region**, escolha sua região e confirme quaisquer avisos.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-region.png" alt="Menu LoRa Actions da Base UI do X2 com LoRa Region e a tecla Confirm destacados em vermelho" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Abrir configurações de região.</strong> Selecione LoRa Region e, em seguida, escolha a região da sua localização na próxima tela.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-info.png" alt="Tela LoRa Info da Base UI do X2 mostrando a região de exemplo US, o preset LongTurbo, a frequência e um identificador BLE" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Verificar a configuração atual.</strong> LoRa Info mostra a região, o preset do modem e a frequência. Este exemplo usa US / LongTurbo; use as configurações apropriadas para sua localização e grupo.</figcaption>
  </figure>
</div>

O rótulo **BLE** de quatro caracteres em LoRa Info é um identificador do dispositivo, não o PIN de pareamento Bluetooth. Ao fazer o pareamento, use o PIN exibido pelo aviso de pareamento do X2 ou o PIN fixo configurado.

</TabItem>
<TabItem value="mui" label="MUI">

1. Entre em **Settings → Region**.
2. Escolha sua região e selecione **OK**. Reinicie se for solicitado.

</TabItem>
<TabItem value="phone" label="Configurar no telefone">

Conecte o app Meshtastic ao X2 e aguarde o carregamento da configuração. Escolha as instruções para o seu telefone:

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Se o app mostrar **Set LoRa Region** na página de conexão, toque nela. Caso contrário, abra **LoRa** na configuração do dispositivo em **Settings**.
2. Defina a **Region** para sua localização e salve a configuração.
3. Reconecte se o X2 reiniciar e verifique se a região não está mais como **UNSET**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="Configuração de LoRa e seleção de região no app Meshtastic para iOS" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Abra **Radio Configuration → LoRa** no menu do app.
2. Escolha sua **Region** e salve a configuração.
3. Reconecte se o X2 reiniciar e verifique a região selecionada.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="Configurações de LoRa no app Meshtastic para Android com o seletor de região" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

As capturas de tela ilustram o fluxo do app no telefone. Selecione o seu X2 conectado; os nomes de menu podem variar entre versões do app.

</TabItem>
</Tabs>

Para se comunicar com outros nós, combine o **preset do modem, slot de frequência, nome do canal e chave pré-compartilhada**. Você pode configurar essas opções ou importar a configuração de canal do seu grupo no app do telefone.

As configurações de potência de transmissão e duty cycle devem estar em conformidade com as regulamentações locais. Consulte [Meshtastic LoRa configuration](https://meshtastic.org/docs/configuration/radio/lora/) para detalhes.

### Uso de mapas

<span id="microsd-and-offline-maps"></span>
<span id="wi-fi"></span>

Use o MUI para visualizar mapas. Para sua localização atual, ative o GPS e aguarde o posicionamento em área externa; consulte [Configure GPS](/pt-br/x2_get_started_for_meshtastic/#configure-gps).

<Tabs groupId="x2-map-mode">
<TabItem value="offline" label="Offline Map">

Mapas offline exigem **MUI** e um cartão microSD.

**Etapa 1. Preparar o cartão.**

1. Faça backup do cartão antes de formatar; a formatação apaga seu conteúdo. Prepare o cartão com **particionamento MBR e FAT32**.
2. Baixe um arquivo ZIP de estilo do [Meshtastic UI map starter kit](https://github.com/meshtastic/device-ui/tree/master/maps), como `osm.zip` ou `atlas.zip`.
3. Extraia o arquivo para a raiz do cartão, preservando as pastas dentro dele. Verifique o caminho resultante em vez de adicionar outra pasta `maps` em torno dos arquivos extraídos:

```text
microSD root/
└── maps/
    └── <style>/
        └── <zoom>/
            └── <x>/
                └── <y>.png
```

Por exemplo, um estilo chamado `osm` deve ficar em `/maps/osm/`. Evite um nível extra de pasta como `/maps/maps/osm/`.

4. Ejete o cartão com segurança após o término da cópia.

:::tip Comece com um mapa de visão geral
Os arquivos oficiais do starter kit contêm tiles do mundo todo em **níveis de zoom 1–6**. Dê zoom out até o nível 6 ou inferior para verificar se o mapa é carregado. Para detalhes em nível de rua, baixe tiles que cubram sua área em níveis de zoom mais altos; o starter kit sozinho não inclui esses detalhes. Consulte as [instruções de download de mapas](https://github.com/meshtastic/device-ui/tree/master/maps#downloading-tiles).
:::

**Etapa 2. Inserir o cartão e abrir o mapa.**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="MeshPager X2 microSD card slot with the outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Slot para cartão microSD do X2.</figcaption>
</figure>

1. Desligue o X2 e desconecte o USB antes de inserir ou remover o cartão.
2. Insira totalmente o cartão microSD, depois ligue o X2 e entre no MUI.
3. Para sua localização atual, ative o GNSS e aguarde um posicionamento ao ar livre.
4. Entre em **Map** e selecione o estilo que corresponde aos seus tiles.

Os tiles baixados funcionam sem Wi‑Fi ou serviço de celular.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151638.png" alt="MeshPager X2 MUI Locations Map showing street tiles, location markers, zoom buttons, and navigation controls" width={600} height={455} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Mapa do MUI com marcadores de localização, zoom e controles de navegação.</figcaption>
</figure>

**Etapa 3. Navegue com os botões.**

| Estado do mapa | Operação |
| --- | --- |
| Navegar | Use as teclas de direção para mover o mapa. |
| Abrir controles | Pressione Confirm. |
| Zoom ou posição | Use Cima/Baixo para destacar um controle e depois Confirm. |
| Voltar ao mapa | Pressione Return. |
| Voltar à barra de navegação | Pressione Return novamente. |

</TabItem>
<TabItem value="online" label="Mapa online">

**Etapa 1. Ative o GPS.**

Abra **Home**, destaque o **controle de localização/GPS** e mantenha Confirm pressionado para ativar o GNSS se ele estiver desativado. Reinicie se for solicitado e depois aguarde um posicionamento ao ar livre.

**Etapa 2. Configurar e ativar o Wi‑Fi.**

No MUI, abra **Settings → Wi-Fi**, insira o nome da rede Wi‑Fi (**WiFi SSID**) e a senha (**WiFi pre-shared Key**) e selecione **OK**. Você pode configurar ambos diretamente no dispositivo.

:::tip
Conecte-se a uma rede Wi‑Fi de **2,4 GHz**. Wi‑Fi de **5 GHz** não é compatível.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="MUI Wi-Fi settings with the network name, password, and OK button highlighted" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

Em **Home**, um ícone de Wi‑Fi cinza com **0.0.0.0** indica o estado desativado. Um ícone de Wi‑Fi branco com um endereço IP atribuído indica o estado conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="MUI Home screen comparing disabled Wi-Fi with 0.0.0.0 and connected Wi-Fi with an assigned IP address" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

Pressione e segure o **ícone de Wi‑Fi** para ligar ou desligar o Wi‑Fi. No X2, destaque o ícone com as teclas de direção e então **mantenha Confirm pressionado (a tecla laranja esquerda)** para executar o pressionamento longo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="MUI Home screen with the Wi-Fi icon highlighted for a long press to change its state" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

O modo de conexão Bluetooth desativa o Wi‑Fi. Reative-o após retornar ao MUI, se necessário. Mapas online exigem que a rede Wi‑Fi tenha acesso à internet.

**Etapa 3. Visualize o mapa.**

Abra **Map** e aguarde o carregamento dos tiles do mapa. Mantenha o Wi‑Fi conectado à internet enquanto carrega novas áreas.

</TabItem>
</Tabs>

### Enviar e ler mensagens

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

**Escrever uma mensagem**

1. Use Esquerda/Direita para chegar à tela de informações **Home**.
2. Pressione Cima ou Baixo para abrir o editor de mensagens.
3. Selecione **[Select Destination]** e depois escolha um canal ou nó.
4. Selecione uma mensagem pronta para enviá‑la ou **[-- Free Text --]** para abrir o teclado.
5. Use as teclas de direção e Confirm para inserir caracteres. Use a tecla backspace do teclado para apagar.
6. Selecione a tecla **Enter** do teclado para enviar. **Return** cancela a digitação.

Você também pode abrir o editor a partir da tela **Messages**: pressione Confirm e selecione **New Preset Msg** no menu **Message Action**. Verifique o destino antes de escolher uma mensagem pronta ou digitar texto livre.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-new-preset-message.png" alt="X2 Base UI Message Action menu with New Preset Msg and the Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Abrir o editor de mensagens.</strong> Em Messages, pressione Confirm e selecione New Preset Msg. Escolha o destino e uma mensagem pronta ou selecione Free Text para abrir o teclado.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-keyboard.png" alt="X2 Base UI free-text keyboard with the character keys and ENTER outlined in red, addressed to the example LongTurbo channel" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Digite e envie.</strong> Verifique o destinatário ao lado de <code>To:</code>, use as teclas de direção e Confirm para digitar e depois selecione ENTER para enviar. LongTurbo é o destino de exemplo.</figcaption>
  </figure>
</div>

Se o editor não estiver disponível, ative o módulo **Canned Message** no aplicativo do telefone e use firmware com suporte a teclado na tela.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151656.png" alt="MeshPager X2 Base UI showing the Message sent to LongFast confirmation" width={480} height={390} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI: mensagem enviada para o canal LongFast.</figcaption>
</figure>

**Ler mensagens**

Use Esquerda/Direita para chegar à tela de mensagens, Cima/Baixo para navegar pelas conversas e Confirm para abrir as ações da conversa.

</TabItem>
<TabItem value="mui" label="MUI">

**Iniciar uma mensagem direta a partir da lista de nós**

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-node-select.png" alt="X2 node list with red outlines around the Nodes icon, selected node 9028, direction Right, and the left orange Confirm key" width={940} height={1270} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Selecione um nó.</strong> Destaque Nodes na barra de navegação e pressione Direita para entrar na lista. Use Cima/Baixo para selecionar um nó e depois mantenha Confirm pressionado (a tecla laranja esquerda) até que a conversa seja aberta.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-open-keyboard.png" alt="X2 conversation with red outlines around recipient Meshtastic 9028, the keyboard icon, and the orange Confirm key" width={925} height={1215} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Abra o teclado.</strong> Verifique o nome do destinatário na parte superior. Mova o foco para o campo de texto, pressione Direita para destacar o ícone do teclado e depois pressione Confirm para abri‑lo.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-type-send.png" alt="X2 on-screen keyboard with red outlines around the typed letter w, the keyboard, and the lower-right submit checkmark" width={825} height={1085} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. Digite e envie.</strong> Use as teclas de direção para selecionar caracteres e pressione Confirm para inseri‑los. Selecione o símbolo de confirmação no canto inferior direito e pressione Confirm para enviar.</figcaption>
  </figure>
</div>

<figure style={{maxWidth: 320, margin: '1.5rem auto', textAlign: 'center'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-message-sent.png" alt="X2 conversation after submission, with red outlines around recipient Meshtastic 9028 and the outgoing message w" width={770} height={1065} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>4. Ver a mensagem enviada.</strong> O teclado é fechado e a mensagem enviada aparece na conversa. Este exemplo envia <code>w</code> para Meshtastic 9028.</figcaption>
</figure>

Para uma conversa de canal, abra **Channels** e selecione um canal. Para retornar a uma conversa existente, abra **Messages** e selecione o chat.

**Return** fecha o teclado sem enviar; pressione novamente para voltar à lista de chats.

<h4 id="mute-and-unmute-a-channel">Silenciar e reativar um canal</h4>

1. Destaque **Channels** na barra de navegação e pressione **Right** para entrar na lista de canais. Use Cima/Baixo para destacar um canal configurado, como **LongTurbo** neste exemplo.
2. **Mantenha Confirm pressionado** (a tecla laranja esquerda) até que o ícone de sino mude para um **sino laranja riscado** e então solte a tecla. As notificações do canal agora estão silenciadas.
3. Para reativar o mesmo canal, **mantenha Confirm pressionado novamente** até que o **sino branco** volte e então solte a tecla.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-select.png" alt="X2 Group Channels page with red outlines around the Channels icon, selected LongTurbo channel, and left orange Confirm key" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Selecione o canal.</strong> Mantenha a tecla laranja esquerda Confirm pressionada para alterar o estado de silêncio.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-muted.png" alt="Selected LongTurbo channel with an orange crossed-out bell outlined in red after holding Confirm" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Silenciado.</strong> O sino laranja riscado indica que as notificações do canal estão silenciadas.</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-unmuted.png" alt="Selected LongTurbo channel with a white bell outlined in red after holding Confirm again" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. Com som.</strong> Segure Confirm novamente para restaurar o sino branco e ativar as notificações do canal.</figcaption>
  </figure>
</div>

</TabItem>
</Tabs>

Mensagens diretas exigem que os dispositivos troquem primeiro informações de nó e chaves públicas.

## Uso avançado

<span id="advanced-tutorial"></span>

### Conectar via site

<span id="connect-via-web-client"></span>

Use o [Meshtastic Web Client](https://client.meshtastic.org/) para ler mensagens, enviar texto e configurar seu nó a partir de um navegador. Use **Chrome ou Edge** para desktop com firmware que ofereça suporte ao método de conexão selecionado. O suporte do navegador varia; consulte o [guia de compatibilidade do Web Client](https://meshtastic.org/docs/software/web-client/).

**Passo 1. Abra o Web Client.**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="Meshtastic Web Client landing page" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**Passo 2. Adicione uma conexão.** Selecione **New Connection**. As capturas de tela ilustram o fluxo de trabalho do cliente; nomes de dispositivos e números de porta são exemplos. Selecione o seu próprio X2 ao conectar.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="New Connection button in the Meshtastic Web Client" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**Passo 3. Escolha um método de conexão.**

<Tabs groupId="x2-web-connection">
<TabItem value="bluetooth" label="Bluetooth">

1. Ative o Bluetooth no X2. No MUI, entre no modo de conexão Bluetooth descrito em [Phone Connection](/pt-br/x2_get_started_for_meshtastic/#phone-connection).
2. Desconecte o app do telefone do X2 para que o navegador possa se conectar.
3. Selecione **Bluetooth** no Web Client e escolha o X2 no seletor de dispositivos do navegador. Conclua o pareamento se for solicitado.
4. Aguarde o carregamento da configuração do nó e, em seguida, abra um canal ou conversa.

</TabItem>
<TabItem value="serial" label="USB Serial">

1. Inicie o X2 com o Meshtastic em execução e conecte-o usando um cabo USB de **dados**. O modo de download de firmware é para gravação, não para usar o Web Client.
2. Feche o Web Flasher, monitores seriais e outros aplicativos que estejam usando a porta serial do X2.
3. Selecione **Serial** no Web Client, escolha **New device** se for solicitado e selecione a porta USB do X2 no seletor de portas do navegador.
4. Aguarde o carregamento da configuração do nó e, em seguida, abra um canal ou conversa.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="Meshtastic Web Client serial connection and browser serial-port picker" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

O dispositivo USB pode aparecer como **USB JTAG/serial debug unit**. Se você reconectar o X2 ou trocar as portas USB, selecione novamente a porta atual.

</TabItem>
</Tabs>

**Passo 4. Verifique a conexão.** Selecione o dispositivo adicionado para conectar, caso ainda não esteja conectado. O cliente então exibe o status do nó e carrega sua configuração. Abra a visualização de mensagens para selecionar um canal ou uma conversa de nó.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="Example node shown as connected in the Meshtastic Web Client" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### Configurar GPS

<span id="gnss-positioning"></span>

Use o X2 ao ar livre com uma visão desobstruída do céu e aguarde o posicionamento por satélite.

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Use Esquerda/Direita para chegar a **Position**, pressione Confirm e selecione **On/Off Toggle → Enabled**.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151648.png" alt="MeshPager X2 Base UI Position screen showing satellite count, latitude, longitude, and altitude" width={480} height={407} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Tela de posição da Base UI.</figcaption>
</figure>

</TabItem>
<TabItem value="mui" label="MUI">

Entre em **Home** e realce o **location/GPS control**. Se o GNSS estiver desativado, segure Confirm para ativá-lo. Reinicie se for solicitado.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151629.png" alt="MeshPager X2 MUI Home page with the location control selected and coordinates, satellite count, and altitude displayed" width={480} height={385} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Status de localização do MUI na página Home.</figcaption>
</figure>

</TabItem>
</Tabs>

**Configurar no telefone**

Conecte o app Meshtastic ao X2, abra **Position** na configuração de rádio do dispositivo e ajuste as configurações abaixo. Salve suas alterações e reconecte se o dispositivo reiniciar.

| Setting | O que controla |
| --- | --- |
| GPS Mode | Ativa ou desativa o receptor GNSS do X2. |
| GPS Update Interval | Com que frequência o dispositivo solicita uma nova posição GNSS. |
| Position Broadcast Interval | Com que frequência o dispositivo transmite sua posição pela malha. |
| Smart Position | Permite transmissões de posição com base no movimento, sujeitas aos limites configurados. |
| Fixed Position | Usa uma localização fixa. Desative isto quando quiser que a localização do dispositivo acompanhe seu movimento. |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="Meshtastic phone app Position settings for GPS updates and position broadcasts" width={500} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Intervalos mais curtos podem fornecer atualizações mais frequentes, mas aumentam o consumo de energia ou o tráfego na malha. Escolha intervalos adequados à frequência com que o dispositivo se move. Consulte [Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/).

**Permissão de localização no iOS**

Se você usar a **localização do telefone** no app Meshtastic ou compartilhá-la com um nó, permita o acesso à localização e ative **Precise Location** para o Meshtastic nos Ajustes do iOS. Essa permissão controla a localização fornecida pelo telefone; o receptor GNSS integrado do X2 obtém seu próprio posicionamento de forma independente.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="iOS location permission settings with Precise Location enabled for Meshtastic" width={250} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### Conexão de sensor

O X2 possui sensores integrados para leituras ambientais, direção da bússola e detecção de movimento. Configure-os de acordo com a função que você deseja usar:

| Sensor | Função | Configuração |
| --- | --- | --- |
| Barômetro SPA06-003 | Leituras de pressão e temperatura do sensor. | **Telemetry → Environment** no app do telefone. |
| Magnetômetro BMM350 | Direção da bússola. | **Position → Compass** e **Compass Calibrate** na Base UI. |
| IMU de seis eixos | Medições de aceleração e velocidade angular. | Usado por recursos de firmware compatíveis; a página de Telemetry ambiental não exibe leituras brutas de seis eixos. |

**Ativar telemetria ambiental**

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Conecte-se ao X2 e abra **Settings → Module Configuration → Telemetry**.
2. Ative **Environment Metrics Enabled** e defina o intervalo de **Environment Metrics**.
3. Ative **Show on device screen** se quiser leituras ambientais compatíveis na Base UI e, em seguida, salve as configurações.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="Meshtastic iOS app Telemetry settings for environmental measurements and on-screen display" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Conecte-se ao X2 e abra **Module Configuration → Telemetry**.
2. Ative **Environment metrics module enabled** e defina seu intervalo de atualização.
3. Ative **Environment metrics on-screen enabled** para exibir leituras ambientais compatíveis na Base UI e, em seguida, salve as configurações.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="Meshtastic Android app Telemetry settings with environment metrics and on-screen display options" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

As capturas de tela usam nós e leituras de exemplo. A telemetria ambiental do X2 exibe leituras compatíveis com seu sensor detectado e firmware instalado. Ela não ativa a calibração da bússola nem transmite leituras brutas do acelerômetro e giroscópio. Para operação da bússola, use a aba **Position** em [Other Function](/pt-br/x2_get_started_for_meshtastic/#other-function).

### Other Function

<span id="sensors-display-and-audio"></span>

Use as teclas de direção para realçar um controle. **Pressione Confirm** para selecioná-lo ou **segure Confirm** para sua ação de pressionar e segurar. Pressione **Return** para fechar uma caixa de diálogo ou voltar. A disponibilidade do menu depende do firmware instalado e dos módulos ativados.

<Tabs groupId="x2-other-ui">
<TabItem value="mui" label="MUI">

<Tabs groupId="x2-mui-function-page">
<TabItem value="menu" label="Menu Bar">

| Operação no X2 | Efeito |
| --- | --- |
| Manter Confirmar pressionado em **Home** | Ressincroniza a MUI com a configuração e os dados do nó. |
| Manter Confirmar pressionado em **Nodes** | Abre os filtros de nós. |
| Manter Confirmar pressionado em **Settings** | Bloqueia a tela. Use Power para ativá-la e insira o PIN da tela, se configurado. |

</TabItem>
<TabItem value="home" label="Home Page">

| Controle em destaque | Operação no X2 | Efeito |
| --- | --- | --- |
| Ícone de mensagem | Pressionar Confirmar | Abre a lista de mensagens. |
| Ícone de nó | Pressionar Confirmar | Abre a lista de nós online. |
| Relógio | Pressionar Confirmar | Alterna entre data/hora e tempo de atividade. |
| Ícone LoRa | Manter Confirmar pressionado | Ativa ou desativa a transmissão LoRa. |
| Ícone de notificação | Manter Confirmar pressionado | Ativa ou desativa as notificações. |
| Ícone de notificação | Pressionar Confirmar | Alterna entre som, banner e som mais banner. |
| Ícone de GPS | Manter Confirmar pressionado | Ativa ou desativa o GNSS. Reinicie se solicitado. |
| Ícone de Wi‑Fi | Manter Confirmar pressionado | Ativa ou desativa o Wi‑Fi, ou abre as configurações de Wi‑Fi se as credenciais estiverem ausentes. |
| Ícone MQTT | Manter Confirmar pressionado | Ativa ou desativa o módulo MQTT. Reinicie se solicitado. |
| Ícone de código QR | Pressionar Confirmar | Exibe o código QR do dispositivo. |

Configure o servidor MQTT e as configurações relevantes de uplink/downlink do canal no aplicativo do telefone antes de usar MQTT. O atalho Home liga ou desliga o módulo; consulte [Meshtastic MQTT configuration](https://meshtastic.org/docs/configuration/module/mqtt/) para a configuração.

</TabItem>
<TabItem value="node" label="Node Page">

| Operação no X2 | Efeito |
| --- | --- |
| Destacar um nó e pressionar Confirmar | Abre seus detalhes. |
| Destacar um nó e manter Confirmar pressionado | Abre a conversa de mensagem direta com ele. |
| Selecionar o controle de posição de um nó | Mostra sua posição informada no mapa, quando os dados de posição estiverem disponíveis. |

Use [Send and Read Messages](/pt-br/x2_get_started_for_meshtastic/#send-and-read-messages) para o fluxo de trabalho ilustrado do teclado do X2.

</TabItem>
<TabItem value="channel" label="Channel Page">

Selecione um canal e pressione Confirmar para abrir sua conversa. Mantenha Confirmar pressionado no canal para silenciar ou reativar suas notificações. O sino alterna entre um **sino branco** e um **sino laranja riscado**; consulte [Mute and Unmute a Channel](/pt-br/x2_get_started_for_meshtastic/#mute-and-unmute-a-channel).

</TabItem>
<TabItem value="message" label="Message Page">

Selecione uma conversa e pressione Confirmar para abri-la. Para remover uma conversa, **mantenha Confirmar pressionado** sobre ela para revelar o botão **delete** e, em seguida, selecione esse botão. Isso remove o histórico local da conversa.

</TabItem>
<TabItem value="settings" label="Setting Page">

Abra **Settings** na barra de navegação, destaque a configuração e pressione Confirmar. Salve ou confirme a alteração antes de sair da caixa de diálogo.

| Configuração | Efeito |
| --- | --- |
| User Short Name / User Long Name | Altera os nomes exibidos do nó. |
| Lock: Screen / Settings | Configura os bloqueios de PIN da tela e das configurações. |
| Region | Seleciona a região LoRa. |
| Modem Preset | Seleciona o preset do modem de rádio. |
| Channel | Edita as configurações do canal. |
| Device Role | Seleciona a função do nó. |
| Wi‑Fi | Define o nome e a senha da rede. |
| Screen Timeout | Define por quanto tempo a tela permanece ativa. |
| Screen Brightness | Ajusta a luz de fundo. |
| Theme | Alterna entre aparência clara e escura. |
| Language | Altera o idioma exibido. |
| Configuration Reset → Factory Reset | Restaura a configuração padrão. |
| Configuration Reset → NodeDB Reset | Limpa as informações de nó armazenadas. |
| Configuration Reset → Clear Chat History | Limpa o histórico local de bate‑papo. |
| Reboot / Shutdown → Green restart icon | Reinicia o X2. |
| Reboot / Shutdown → Red power icon | Desliga o X2. Com o USB conectado, ele pode voltar para a tela de carregamento. |

Para instruções de redefinição e capturas de tela, consulte [Factory Reset](/pt-br/x2_get_started_for_meshtastic/#factory-reset) e [NodeDB Reset](/pt-br/x2_get_started_for_meshtastic/#nodedb-reset).

</TabItem>
<TabItem value="tools" label="Tool">

Abra **Settings & Tools** e, em seguida, mude para **Tools**. Destaque uma ferramenta e pressione Confirmar. Selecione um nó quando a ferramenta solicitar um alvo.

| Ferramenta | Função |
| --- | --- |
| Mesh Detector | Visualiza nós detectados recentemente. |
| Signal Scanner | Inspeciona informações de sinal recebido, incluindo RSSI e SNR. |
| Trace Route | Solicita a rota para um nó selecionado e exibe a resposta. |
| Statistic | Exibe estatísticas de pacotes e decodificação. |
| Packet Log | Inspeciona a atividade de pacotes da malha. |

Um resultado de rota ou sinal requer tráfego do nó relevante. Aguarde tempo para as respostas e verifique [Signal Quality](/pt-br/x2_get_started_for_meshtastic/#signal-quality) ao avaliar o link.

</TabItem>
</Tabs>

</TabItem>
<TabItem value="base" label="Base UI">

Use Esquerda/Direita para chegar à tela de informações, pressione Confirmar para abrir seu menu de ações e, em seguida, use Cima/Baixo e Confirmar para selecionar um item.

<Tabs groupId="x2-base-function-page">
<TabItem value="home" label="Home">

| Ação | Efeito |
| --- | --- |
| Sleep Screen / Toggle Backlight | Desliga a tela ou alterna sua luz de fundo, dependendo do firmware. Use Power para ativar o X2. |
| Send Position | Transmite a posição atual quando o GNSS estiver ativado e uma posição válida estiver disponível. |
| Send Node Info | Anuncia informações do nó; esta opção é exibida quando o GNSS está desativado. |

</TabItem>
<TabItem value="node" label="Node">

Abra o menu **Node Action** do nó selecionado.

| Ação | Efeito |
| --- | --- |
| Favorite / Unfavorite | Adiciona ou remove o nó dos favoritos. |
| Trace Route | Solicita a rota para o nó selecionado. |
| Mute Notifications / Unmute Notifications | Altera as notificações para esse nó. |

</TabItem>
<TabItem value="position" label="Position">

| Ação | Efeito |
| --- | --- |
| On/Off Toggle | Ativa ou desativa o GNSS. |
| Format | Seleciona o formato de exibição de coordenadas. |
| Smart Position | Configura transmissões com base no movimento. |
| Update Interval | Define o intervalo de atualização do GNSS. |
| Broadcast Interval | Define o intervalo de transmissão de posição. |
| Compass | Escolhe **Dynamic**, **Fixed Ring** ou **Freeze Heading**. |
| Compass Calibrate | Inicia uma calibração da bússola de **30 segundos**. |

Para a calibração, selecione **Compass Calibrate** e siga a instrução na tela enquanto gira o X2 por diferentes orientações. Mantenha-o longe de ímãs e grandes objetos metálicos e deixe a contagem regressiva terminar. A opção de calibração requer que o firmware detecte um sensor compatível.

</TabItem>
<TabItem value="lora" label="LoRa">

| Ação | Efeito |
| --- | --- |
| LoRa Region | Seleciona a região de operação. |
| Device Role | Seleciona a função do nó. |
| Radio Preset | Escolhe um preset de modem. |
| Frequency Slot | Escolhe o slot de frequência para a região e o preset selecionados. |
| Transmit Enabled | Ativa ou desativa a transmissão de rádio. |

Coordene as alterações do preset e do slot de frequência com os nós com os quais você deseja se comunicar.

</TabItem>
<TabItem value="system" label="System">

| Ação | Efeito |
| --- | --- |
| Notifications | Configura notificações e sons do sistema. |
| Display Options | Ajusta as configurações de tela disponíveis no firmware. |
| Bluetooth Toggle | Ativa ou desativa o Bluetooth. |
| WiFi Toggle | Ativa ou desativa o Wi‑Fi. Configure primeiro as credenciais da rede. |
| Reboot/Shutdown | Reinicia, desliga ou alterna a interface. |

</TabItem>
</Tabs>

</TabItem>
</Tabs>

O microfone e o alto-falante fornecem hardware para futuras atualizações de mensagens de voz. Os sons de notificação podem ser configurados usando os controles acima.

## FAQ

### O dispositivo não consegue parear com o telefone via BLE

<span id="x2-is-not-listed-in-the-phone-app"></span>

- **Na MUI**, entre no modo de pareamento Bluetooth antes de procurar o X2 no aplicativo do telefone. Abra **Settings → Reboot / Shutdown**, destaque o **ícone de Bluetooth** e **pressione rapidamente Confirmar**. Aguarde a tela de pareamento e use o PIN exibido no X2.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="MUI Settings, Reboot / Shutdown menu, and Bluetooth pairing mode" width={800} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

No X2, use as teclas de direção para destacar controles e pressione **Confirmar** para selecioná-los. Para as ilustrações dos botões do X2, consulte [Phone Connection](/pt-br/x2_get_started_for_meshtastic/#phone-connection).

- **Na Base UI**, ativar o Wi‑Fi desativa o Bluetooth. Para continuar usando o Wi‑Fi, conecte o telefone à mesma rede e escolha **Network** no aplicativo Meshtastic, usando o endereço IP do X2. Para parear via BLE em vez disso, desative o Wi‑Fi e ative **System → Bluetooth Toggle** no X2.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" alt="Meshtastic phone app Network connection settings" width={350} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

- Ative o Bluetooth no telefone e conceda ao aplicativo as permissões de **Bluetooth / Dispositivos próximos**. Desconecte qualquer outro telefone ou navegador já conectado ao X2 e, em seguida, faça a varredura novamente.
- Se o pareamento ainda falhar, esqueça o pareamento antigo do X2 nas configurações de Bluetooth do telefone e reconecte a partir do aplicativo Meshtastic. Insira o PIN atual exibido na tela ou o seu PIN fixo configurado.

### O dispositivo não consegue se conectar ao meu Wi‑Fi

<span id="wi-fi-does-not-connect-or-turns-off"></span>

1. Use uma rede **Wi‑Fi de 2,4 GHz**. O X2 não suporta Wi‑Fi de 5 GHz. Para testar a conexão, tente um hotspot de telefone configurado para 2,4 GHz.
2. Verifique o nome e a senha do Wi‑Fi, incluindo maiúsculas e minúsculas, e então ative o Wi‑Fi depois de salvá-los. Siga a guia **Online Map** em [Map Usage](/pt-br/x2_get_started_for_meshtastic/#map-usage).
3. Verifique o ícone de Wi‑Fi e o endereço IP na página Home da MUI. Um ícone cinza e um campo de IP vazio indicam que o Wi‑Fi está desativado ou não se conectou. Um ícone branco com um endereço IP indica uma conexão.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="Página inicial do MUI mostrando o ícone de Wi‑Fi e o endereço IP antes e depois de conectar" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Entrar no modo de conexão Bluetooth desativa o Wi‑Fi. Depois de voltar ao MUI, ative o Wi‑Fi novamente quando precisar de mapas online. A rede Wi‑Fi também deve fornecer acesso à internet para baixar os blocos de mapa.

### Dispositivo desliga automaticamente

**Descrição**

- O X2 desliga ou reinicia repetidamente pouco depois de ser ligado.
- O log serial para e o dispositivo deixa de responder.

**Solução de problemas**

1. Verifique a carga da bateria e a conexão de alimentação USB. Se apenas a tela escureceu, pressione rapidamente **Power** para verificar se o X2 ainda está em execução. O tempo limite da tela é diferente de um desligamento.
2. Se o X2 mostrar apenas a tela de carregamento, solte Power e depois mantenha-o pressionado por aproximadamente **5 segundos** para iniciar o Meshtastic. Evite interromper a alimentação enquanto as configurações estiverem sendo salvas ou o firmware estiver sendo gravado.
3. Se o dispositivo continuar sem resposta, siga o procedimento de [Reinicialização forçada](/pt-br/x2_get_started_for_meshtastic/#reinicialização-forçada). Se ele reiniciar repetidamente depois disso, capture o log serial de inicialização para ajudar a identificar a causa.
4. Se o problema persistir com uma fonte de alimentação estável, faça uma instalação limpa de um firmware X2 compatível. Siga [Instalação manual de firmware](/pt-br/x2_get_started_for_meshtastic/#instalação-manual-de-firmware) para o procedimento de imagem de fábrica com apagamento completo.

:::caution Instalação limpa
Um apagamento completo remove configurações, canais, chaves e dados salvos. Salve tudo o que você precisar antes de continuar. Após reinstalar, configure novamente a região LoRa e os canais.
:::

### Restauração de fábrica

Uma restauração de fábrica recupera a configuração padrão. Salve as configurações e informações de canal que você deseja manter antes de restaurar.

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="Configurar no MUI">

1. Abra **Settings → Configuration Reset**.
2. Selecione **Factory Reset** e depois selecione **OK** usando as teclas de direção e Confirm.
3. Aguarde o X2 reiniciar com a configuração padrão.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="Menu Configuration Reset do MUI com Factory Reset e sua caixa de diálogo de confirmação" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="Configurar no telefone">

Conecte ao X2 no aplicativo Meshtastic, abra as configurações do dispositivo e selecione **Factory Reset**. Confirme a restauração e aguarde o X2 reiniciar.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="Botão Factory Reset no aplicativo Meshtastic para telefone" width={400} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

Reconecte ao X2 após a reinicialização e defina a **região LoRa** e os **canais** corretos antes de usar a malha.

### Falha em mensagem direta

<span id="direct-messages-fail"></span>

Primeiro verifique se ambos os nós usam configurações LoRa compatíveis e estão dentro do alcance, diretamente ou pela malha. Tente enviar uma mensagem de canal compartilhado. Se as mensagens de canal funcionarem, mas as mensagens diretas falharem, verifique as informações de nó armazenadas e as chaves abaixo.

#### Redefinir NodeDB

NodeDB armazena informações sobre nós descobertos na malha. Um registro desatualizado, como um salvo antes de o outro nó alterar suas chaves, pode impedir o envio de mensagens diretas. Redefinir o NodeDB limpa o banco de dados de nós local para que o dispositivo possa descobrir os nós novamente.

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="Configurar no MUI">

Abra **Settings → Configuration Reset**, selecione **NodeDB Reset** e selecione **OK**. Use as teclas de direção e Confirm no X2. O dispositivo será reiniciado.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="Menu Configuration Reset do MUI com NodeDB Reset e sua caixa de diálogo de confirmação" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="Configurar no telefone">

Conecte o aplicativo Meshtastic ao nó cujo banco de dados você deseja redefinir. Abra **Settings → Device → Device Config → Reset NodeDB** e confirme. Os nomes de menu podem variar entre versões do aplicativo.

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Configurações do aplicativo Meshtastic com Device selecionado" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Botão Reset NodeDB na página Device Config do aplicativo Meshtastic" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
</div>

</TabItem>
</Tabs>

Aguarde tempo para a lista de nós ser repovoada e depois troque informações de usuário antes de tentar novamente a mensagem direta.

#### Trocar informações de usuário

Os nós transmitem periodicamente suas informações de usuário, incluindo a **chave pública** necessária para mensagens diretas criptografadas. Se as informações de um nó estiverem ausentes ou desatualizadas, abra seu registro no aplicativo de telefone e selecione **Exchange User Info**. Aguarde a conclusão da troca; repita a partir do outro nó, se necessário.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Menu de nó do aplicativo Meshtastic com Exchange User Info" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Tente novamente a mensagem direta e verifique o status de entrega. Uma mensagem aparecendo apenas na conversa do remetente não confirma o recebimento.

#### Regenerar chave privada

Se a troca de mensagens diretas ainda falhar após atualizar as informações de nó, você pode regenerar o par de chaves do nó afetado nas configurações de **Security** do aplicativo de telefone. Use **Regenerate Private Key**, salve a alteração e reinicie o dispositivo quando solicitado.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Configurações de Security do aplicativo Meshtastic para telefone para regenerar a chave privada" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

:::note Após regenerar as chaves
A chave pública do nó muda, portanto outros nós precisam aprender suas novas informações. Remova o registro obsoleto da lista do outro nó, se necessário, e depois troque as informações de usuário novamente. Mantenha a **chave privada confidencial**; apenas a **chave pública** é compartilhada com outros nós. Consulte [Configuração de segurança do Meshtastic](https://meshtastic.org/docs/configuration/radio/security/).
:::

### Qualidade do sinal

- **SNR (signal-to-noise ratio)** mede quão forte é o sinal recebido em relação ao ruído de fundo. Um valor mais alto geralmente indica um link mais claro. O LoRa pode receber sinais com SNR negativo; o limite utilizável depende do preset do modem.
- **RSSI (received signal strength indicator)** mede a potência do sinal recebido em dBm. Um valor menos negativo significa um sinal mais forte: por exemplo, **−90 dBm** é mais forte que **−110 dBm**.

Verifique ambos os valores em conjunto com a entrega real de mensagens. Uma única leitura de SNR ou RSSI não estabelece que um dispositivo esteja com defeito. Para melhorar o link, use uma antena compatível com a faixa de operação, verifique sua conexão e mova-se para um local mais alto e aberto, longe de obstruções e interferências.

### O computador não encontra o X2 ou não consegue conectar à sua porta serial

1. Use um cabo USB de **dados** e verifique a lista de portas do computador antes e depois de conectar o X2. Apenas uma tela de carregamento não confirma uma conexão de dados USB.
2. Verifique novamente a porta após reconectar o X2, trocar as portas USB ou entrar no modo de download. No macOS, o sufixo `/dev/cu.usbmodem...` pode mudar.
3. Feche outros gravadores, monitores seriais ou conexões de navegador que estejam usando a porta. No Linux, verifique também as [permissões de acesso USB](/pt-br/x2_get_started_for_meshtastic/#linux-usb-access).
4. Se o dispositivo não aparecer na lista de portas, tente outro cabo de dados ou conecte diretamente ao computador para verificar a conexão USB.
5. Para instalação de firmware, entre no modo de gravação conforme descrito em [Flash Firmware](/pt-br/x2_get_started_for_meshtastic/#flash-firmware). Para o Web Client, execute o Meshtastic normalmente.

Se um gravador informar **No serial data received**, ele não estabeleceu comunicação com o bootloader. A mensagem por si só não identifica um problema de capacidade de Flash ou um dispositivo com defeito.

### Acesso USB no Linux

Compare as portas seriais antes e depois de conectar o X2:

```bash
ls /dev/ttyACM* /dev/ttyUSB* 2>/dev/null
```

Se o acesso for negado, verifique as permissões da porta detectada (substitua `/dev/ttyACM0` conforme necessário):

```bash
ls -l /dev/ttyACM0
```

No Ubuntu/Debian, se a porta pertencer a `dialout`, adicione seu usuário a esse grupo:

```bash
sudo usermod -aG dialout "$USER"
```

Saia da sessão e entre novamente e depois tente de novo. Feche outros aplicativos que estejam usando a porta. Verifique novamente o nome da porta após entrar no modo de download.

### GNSS não mostra uma posição

- Ative o GNSS usando [Configure GPS](/pt-br/x2_get_started_for_meshtastic/#configure-gps).
- Vá para uma área externa com visão desobstruída do céu e aguarde tempo para obter um fix. Um primeiro fix após um longo período de inatividade pode levar mais tempo do que um fix subsequente.
- Verifique o status de satélite e localização no X2 antes de esperar que sua posição apareça no mapa.
- Se a posição permanecer fixa enquanto você se move, verifique a configuração **Fixed Position** do aplicativo de telefone e o intervalo de atualização do GNSS. Consulte [Configuração de posição do Meshtastic](https://meshtastic.org/docs/configuration/radio/position/).

### O mapa offline está em branco

1. Verifique o formato **MBR/FAT32** do cartão e a estrutura de pastas `/maps/<style>/<zoom>/<x>/<y>.png`.
2. Selecione o mesmo estilo no MUI que o estilo copiado para o cartão.
3. Verifique se os blocos baixados cobrem o local e o nível de zoom que está sendo visualizado. Com apenas o kit inicial oficial instalado, reduza o zoom para o nível **6 ou inferior**.
4. Para sua localização atual, aguarde um fix GNSS. Se o cartão não for detectado, desligue o X2 e desconecte o USB antes de recolocá-lo.

Consulte [Uso do mapa](/pt-br/x2_get_started_for_meshtastic/#uso-do-mapa) para as etapas de preparação.

### Instalação manual de firmware

Use o [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32s3/) para gravar o X2 com **`.factory.bin`** em **`0x0`**. Esta imagem combinada contém o bootloader, a tabela de partições e o aplicativo. Um `.bin` somente de aplicativo não é adequado para este procedimento.

:::caution Apagar tudo
O comando de gravação abaixo apaga toda a memória flash interna, incluindo configurações, canais e dados salvos. Faça backup de tudo o que precisar antes de continuar.
:::

1. Baixe o [firmware de fábrica X2 2.8.1.0046b50](https://files.seeedstudio.com/wiki/MeshPagerX2/firmware-seeed_meshpager_x2-2.8.1.0046b50.factory%20copy.bin). Renomeie o arquivo baixado de **`firmware-seeed_meshpager_x2-2.8.1.0046b50.factory copy.bin`** para **`x2.factory.bin`** e coloque-o em uma pasta no seu computador.
2. Instale o [Python 3.10 ou posterior](https://www.python.org/downloads/).
3. Conecte o X2 ao computador usando um cabo de dados USB. Feche o Web Flasher, o Web Client e quaisquer monitores seriais que possam estar usando a porta.
4. Abra um terminal na pasta que contém `x2.factory.bin` e siga os comandos para o seu sistema. Envie primeiro o **reset de 1200 bps** e depois use o esptool com **`--before usb-reset`**.

A etapa de 1200 bps aciona um reset; o esptool realiza a gravação do firmware. **1200 bps não é a velocidade de transferência do firmware.** A porta USB pode desaparecer e reaparecer com um nome diferente após o reset, portanto liste as portas novamente antes de gravar.

<Tabs groupId="x2-manual-flash-os">
<TabItem value="windows" label="Windows">

No **PowerShell**, instale o esptool e liste as portas seriais:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade "esptool>=5,<6"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

Substitua `COM5` pela porta atual do X2 e envie o **reset de 1200 bps**:

```powershell
.\.venv\Scripts\python.exe -c "import serial,time; s=serial.Serial('COM5',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

Verifique a porta novamente. Substitua `COM5` abaixo pela porta que o X2 está usando agora e então grave:

```powershell
.\.venv\Scripts\python.exe -m esptool --chip esp32s3 --port COM5 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

</TabItem>
<TabItem value="linux-macos" label="Linux / macOS">

Instale o esptool e liste as portas seriais:

```bash
python3 -m venv .venv
./.venv/bin/python -m pip install --upgrade "esptool>=5,<6"
./.venv/bin/python -m serial.tools.list_ports
```

No Ubuntu/Debian, instale `python3-venv` com `sudo apt install python3-venv` se o primeiro comando indicar que ele está ausente.

Substitua `/dev/ttyACM0` pela porta atual do X2. No macOS, use a porta `/dev/cu.usbmodem...` correspondente. Envie o **reset de 1200 bps** e depois liste as portas novamente:

```bash
./.venv/bin/python -c "import serial,time; s=serial.Serial('/dev/ttyACM0',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
./.venv/bin/python -m serial.tools.list_ports
```

Substitua `/dev/ttyACM0` abaixo pela porta que o X2 está usando agora e então grave:

```bash
./.venv/bin/python -m esptool --chip esp32s3 --port /dev/ttyACM0 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

Se o Linux informar um erro de permissão, siga [Acesso USB no Linux](/pt-br/x2_get_started_for_meshtastic/#acesso-usb-no-linux).

</TabItem>
</Tabs>

Mantenha o USB conectado até o esptool informar **`Hash of data verified`** e finalizar. Reinicie o X2 com Power e Return liberados e, em seguida, configure novamente a região LoRa e os canais.

Se o esptool informar **No serial data received**, verifique se há outro aplicativo usando a porta, repita o reset de 1200 bps e selecione a porta recém-enumerada. Reduzir apenas a velocidade de transferência não coloca o X2 no modo de download.

Se o reset por software não estiver disponível, use o procedimento de botão do X2 descrito em [Gravar firmware](/pt-br/x2_get_started_for_meshtastic/#gravar-firmware) e depois verifique novamente a porta. O comportamento de reset necessário pode depender do firmware instalado e da revisão de hardware.

Se uma conexão for estabelecida, mas a gravação falhar repetidamente, tente novamente o comando de gravação com `--baud 115200`.

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Entre na comunidade Meshtastic da Seeed Studio no Facebook"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Fórum técnico da Seeed Studio"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contatar o suporte da Seeed Studio"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Comunidade Seeed Studio no Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Discussão na Wiki da Seeed Studio"></a>
</div>
