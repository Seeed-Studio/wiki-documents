---
description: Controle o hardware ePaper da Seeed via Bluetooth Low Energy com os ecossistemas open-source OpenEPaperLink (OEPL) e OpenDisplay - abrange a XIAO ePaper Display Board EN04 e a ePaper Breakout Board para Seeed Studio XIAO.
title: Trabalhar com OpenEPaperLink / OpenDisplay
keywords:
  - display ePaper
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 7
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com OpenEPaperLink / OpenDisplay

O ecossistema [OpenEPaperLink (OEPL)](https://openepaperlink.de/) e o projeto relacionado [OpenDisplay](https://opendisplay.org/) são firmwares/pilhas de protocolo open-source para controlar displays de papel eletrônico. As versões modernas rodam sobre **Bluetooth Low Energy** — seu telefone, computador ou Home Assistant se comunicam diretamente com o dispositivo, sem necessidade de um ponto de acesso 802.15.4 dedicado.

Este guia abrange dois caminhos de hardware da Seeed para esse ecossistema:

- **XIAO ePaper Display Board EN04** — um kit integrado executando o firmware OpenDisplay via BLE.
- **ePaper Breakout Board para Seeed Studio XIAO** — um caminho DIY mais modular usando o OEPL Config Builder + OEPL Image Uploader junto com uma placa da série XIAO nRF52840.

Ambos os fluxos compartilham uma filosofia comum (configuração via BLE, ferramentas baseadas na web, baixo consumo), mas o hardware e as ferramentas de firmware/web são diferentes. Escolha a aba que corresponde ao seu hardware ao longo de todo o artigo.

## Hardware compatível

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
</table>
</div>

Alimentada pelo **XIAO nRF52840 Plus**, a XIAO EN04 ePaper Display Board é a forma mais fácil de começar com displays de papel eletrônico habilitados para Bluetooth. Controle sem fio direto a partir do seu telefone, computador ou Home Assistant — sem necessidade de AP dedicado.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<table align="center">
  <tr>
    <th>Display ePaper monocromático de 4,26"</th>
    <th>ePaper Breakout Board para Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
Toda a **série XIAO nRF52840** pode controlar este kit DIY — não apenas a Sense Plus mostrada acima. O projeto comunitário OEPL oferece suporte à tela de 4,26" prontamente; mais tamanhos de tela serão adicionados ao longo do tempo.
:::

</TabItem>
</Tabs>

## Por que usar OpenEPaperLink / OpenDisplay?

- **Nenhum ponto de acesso necessário** — usa Bluetooth Low Energy para comunicação direta. Nenhum hardware 802.15.4 é necessário.
- **Ferramentas baseadas na web** — instale firmware, configure dispositivos e envie imagens diretamente do seu navegador.
- **Suporte a hardware dedicado** — família XIAO nRF52840, EN04, EE04, etc.
- **Código aberto e gratuito** — desenvolvido ativamente no GitHub.
- **Vários microcontroladores** — nRF52840, ESP32-S3, ESP32-C6, ESP32-C3.
- **Fluxo simples** — instalação de firmware por arrastar e soltar, configuração via web, sem programação complexa.
- **Eficiente em bateria** — otimizado para e-paper de baixo consumo.
- **Comunidade ativa** — [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z).

## Etapa 1: Configuração de hardware

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

**Etapa 1. Conecte o display à placa controladora**  
Alinhe o cabo FPC com o conector na placa XIAO EN04 e, em seguida, feche a trava.

:::tip
O lado metálico do cabo FPC deve ficar voltado para cima, caso contrário nenhum conteúdo será exibido. A maioria dos displays tem `1` e `50` impressos no FPC; alinhe-os com os números correspondentes na placa.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Etapa 2. Conecte a bateria**  
Conecte o cabo da bateria ao conector JST na placa controladora. Fio vermelho no **+**, preto no **−**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Verifique a polaridade com atenção. Diferentes baterias podem ter fiação misturada. Fios desalinhados podem ser removidos do conector JST com uma agulha e recolocados corretamente.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

Conecte o **XIAO nRF52840 (Sense Plus)** à **ePaper Breakout Board** e, em seguida, conecte a **tela ePaper monocromática de 4,26"** ao conector FPC. Use um cabo de dados USB-C para conectar o XIAO ao seu computador.

</TabItem>
</Tabs>

## Etapa 2: Gravar o firmware

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

O caminho mais fácil é o instalador web do OpenDisplay.

**Etapa 1.** Abra o [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) em um navegador.

**Etapa 2.** Escolha **Seeed EN04 4.26** ou **Seeed EN04 7.3** (ou qualquer predefinição que corresponda ao seu display) na lista de dispositivos.

**Etapa 3.** Clique em **Download Firmware** e salve `NRF52840.uf2` localmente.

**Etapa 4.** Conecte a placa EN04 via USB-C.

**Etapa 5.** Pressione o botão de reset **duas vezes** consecutivas. Uma unidade USB aparecerá no seu computador (a EN04 em modo DFU). Copie `NRF52840.uf2` para essa unidade.

:::tip
Se o instalador falhar:

- Tente um cabo USB diferente (alguns são apenas de alimentação — use um cabo de dados).
- Pressione o botão de reset duas vezes na EN04 para voltar ao modo DFU.
- Tente uma porta USB diferente.
:::

**Etapa 6.** Abra a [página de configuração do OpenDisplay](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) e conecte-se à sua placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

Se você selecionou **Seeed EN04 4.26** ou **Seeed EN04 7.3**, verá **Auto Install to Device** — a maneira mais fácil de configurar o kit.

**Etapa 7.** Pressione o botão **Connect**. Selecione o novo dispositivo na caixa de diálogo de pareamento e pressione **Pair**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**Etapa 8.** Pressione **Auto Install to Device** para salvar a configuração na placa.

Após a instalação e configuração, o display mostra uma tela de inicialização e fica pronto para receber conteúdo via BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

O XIAO nRF52840 precisa do firmware **OEPL_BLE** antes que o OEPL Config Builder possa se comunicar com ele.

**Etapa 1.** Baixe o firmware `OEPL_BLE` mais recente na página oficial de releases do OEPL.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the firmware</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**Etapa 2.** Conecte o XIAO nRF52840 + Breakout Board + tela, conecte o XIAO ao seu computador via USB-C e então **pressione o botão de reset duas vezes**. O XIAO aparecerá como uma unidade USB no seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**Etapa 3.** Arraste e solte o firmware `.uf2` baixado nessa unidade USB. O XIAO será reiniciado e executará o novo firmware no próximo ciclo de energia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Etapa 3: Configurar o dispositivo via BLE

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

A etapa de configuração do OpenDisplay do fluxo de gravação anterior já cuida disso — seu EN04 agora deve inicializar na tela de inicialização do OpenDisplay e aceitar uploads de imagens.

</TabItem>
<TabItem value="breakout" label="Placa Breakout de ePaper + XIAO nRF52840">

Abra o [OEPL Config Builder](https://config.openepaperlink.org/), depois conecte ao seu XIAO via BLE. (Se nenhum dispositivo aparecer, regrave o firmware e tente novamente.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

Quando você vir "Connected" no terminal, poderá usar:

- **Read Config** — lê a configuração atual do MCU.
- **Write Config** — grava uma nova configuração no MCU.
- **Reboot** — reinicia o MCU.

### Painel do Builder

Escolha variáveis e parâmetros no painel para compor sua configuração.

- **system_config** — pinos do CI host e de gerenciamento de energia.
- **manufacturer_data** — identificador do fabricante e informações da placa.
- **power_option** — configurações de alimentação e suspensão.
- **display** — informações do display / painel (pode se repetir para vários displays).
- **led** — configuração opcional de LED (repetível).
- **sensor_data** — leituras / definições opcionais de sensores (repetível).
- **data_bus** — definições de barramento (I2C / SPI / …).
- **binary_inputs** — botões, chaves.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

Você pode exportar a configuração como `.bin`, `Hex` ou `JSON`, ou importar um JSON salvo. Uma configuração pronta para a tela de 4,26" está disponível abaixo.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Configuração de exemplo 4,26" (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

Depois de ajustar a configuração, clique em **Write Config** para salvá-la no MCU.

</TabItem>
</Tabs>

## Etapa 4: Enviar imagens

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="Placa de Display XIAO ePaper EN04" default>

O projeto OpenDisplay possui um uploader dedicado baseado em navegador.

**Etapa 1.** Abra o [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html).

**Etapa 2.** Clique em **Connect** e escolha seu dispositivo OpenDisplay na caixa de diálogo de pareamento BLE.

**Etapa 3.** Clique em **Select Image** e escolha um arquivo do seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

:::tip
Para obter os melhores resultados:

- Use imagens que correspondam à resolução do seu display (o painel de 7,3" é 800×480 px).
- Imagens em preto e branco são exibidas melhor em displays monocromáticos.
- A ferramenta converte e aplica dithering automaticamente em imagens coloridas.
:::

**Etapa 4.** Clique em **Upload Image**. O e-paper é atualizado e sua imagem aparece.

Você também pode criar conteúdo personalizado com editores de imagem (GIMP, Photoshop), scripts Python + Pillow, geradores de imagem baseados na web ou uma integração com Home Assistant (descrita abaixo).

</TabItem>
<TabItem value="breakout" label="Placa Breakout de ePaper + XIAO nRF52840">

O OEPL Image Uploader também é uma ferramenta web BLE. As atribuições de pinos diferem do firmware do Config Builder, então você precisa gravar primeiro um firmware de upload de imagem um pouco diferente.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter o firmware</button></p>
</a>
</div>

No campo **E-Paper prefix filter(s)**, altere o valor para `OEPL` — caso contrário, o uploader não conseguirá encontrar o dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

Clique em **Select File** para escolher um arquivo local para upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

Quando a transferência do arquivo terminar, clique em **Upload Image** para enviá-lo ao e-paper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

Quando você vir **Upload Complete**, o e-paper terá sido atualizado com a nova imagem.

</TabItem>
</Tabs>

## Integração com Home Assistant (apenas EN04 / OpenDisplay)

:::tip
Para integrar com o Home Assistant, você precisa de uma configuração com suporte a Bluetooth:

- **Home Assistant Green** (Bluetooth integrado)
- **Home Assistant OS / Supervised** em hardware com suporte a Bluetooth
- **ESPHome Bluetooth Proxy** (recomendado para melhor alcance — veja abaixo)

**Observação:** dispositivos Shelly atuando como proxies Bluetooth **não** suportam conexões ativas exigidas pelo OpenDisplay, portanto não podem ser usados.
:::

**Etapa 1. Instale a integração**

Para instruções detalhadas de instalação, consulte o [repositório da integração OpenDisplay para Home Assistant](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help).

O caminho mais fácil é via **HACS** (Home Assistant Community Store):

[![Abra sua instância do Home Assistant e abra um repositório dentro do Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
Após instalar a integração personalizada via HACS, **reinicie o Home Assistant** para que as alterações entrem em vigor.
:::

**Etapa 2. Adicione o dispositivo detectado**

Quando o Home Assistant estiver de volta:

1. Vá para **Settings → Devices & services**.
2. Encontre seu dispositivo OpenDisplay em **Discovered**.
3. Clique em **Add**.
4. Defina o **Name** e a **Area** e clique em **Finish**.

Uma nova imagem aparece no display, confirmando que o Home Assistant está conectado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### Automatizando atualizações do display

O serviço principal é `open_epaper_link.drawcustom`, que permite desenhar texto, ícones, imagens e formas. Consulte a [documentação do drawcustom](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md) para a referência completa de tipos/parâmetros.

#### Exemplo 1 — exibir dados de sensores (Editor Visual)

1. Vá para **Settings → Automations & Scenes** e clique em **Create Automation**.
2. Adicione um gatilho **Time Pattern** (por exemplo, a cada 10 minutos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3. Adicione uma **Action** → **OpenDisplay: Draw Custom Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4. Escolha o dispositivo de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5. No campo **Payload**, insira a configuração de layout:

```yaml
- type: "text"
  value: "Living Room"
  x: "50%"
  y: 50
  anchor: "mm"
  size: 70
  color: "red"
- type: "icon"
  value: "mdi:thermometer"
  x: "35%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_temperature') }}°C"
  x: "65%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "icon"
  value: "mdi:water-percent"
  x: "35%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_humidity') }}%"
  x: "65%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
```

:::caution IDs de entidades
Os IDs de entidade acima (por exemplo, `sensor.living_room_temperature`) são apenas exemplos. Substitua-os pelos IDs de entidade reais do seu Home Assistant.
:::

#### Exemplo 2 — temporizador regressivo (YAML)

Para usuários avançados, edite a automação em YAML. Este exemplo faz a contagem regressiva até uma data e exibe o resultado no display.

```yaml
alias: Update ePaper Display - Countdown
description: Displays days until Christmas
triggers:
  - at: "00:00:00"
    trigger: time
actions:
  - variables:
      days_left: "{{ (as_datetime('2025-12-24').date() - now().date()).days }}"
  - action: open_epaper_link.drawcustom
    data:
      background: white
      payload:
        - type: text
          value: "{{ 'Christmas Countdown' if days_left > 0 else '' }}"
          x: 50%
          "y": 50
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ days_left if days_left > 0 else '' }}"
          x: 50%
          "y": 240
          anchor: mm
          size: 250
          color: red
        - type: text
          value: >-
            {{ 'Day Left' if days_left == 1 else ('Days Left' if days_left > 0
            else '') }}
          x: 50%
          "y": 430
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ 'It''s Christmas!!!' if days_left == 0 else '' }}"
          x: 50%
          "y": 50%
          anchor: mm
          size: 100
          color: red
    target:
      device_id: 2ad706d4aa7c657b6fe99a733cef2253
```

:::caution ID do dispositivo
O `device_id` acima é um espaço reservado. Encontre o ID real do seu dispositivo por meio de:

1. Criar uma nova automação no Editor Visual.
2. Selecionar seu dispositivo OpenDisplay nas configurações da ação.
3. Alternar para o **modo YAML** (menu de três pontos no cartão de ação).
4. Copiar o `device_id` e colá-lo na sua automação.
:::

## Bônus

Procurando uma forma estilosa de montar o display? Este inserto impresso em 3D se encaixa na moldura de quadro IKEA RODÅLM e facilita a montagem:

- **[MakerWorld]** [Inserto Seeed 7.3" Spectra para moldura IKEA RODALM](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Solução de problemas

### Problemas de instalação de firmware

**Problema**: o PC não detecta uma nova unidade USB após conectar a placa.

- Tente um cabo USB diferente (cabo de dados, não apenas de alimentação).
- Pressione o botão de reset duas vezes após conectar a placa.

### Problemas de configuração

**Problema**: a placa não é descoberta.

- Verifique se o LED na placa pisca — isso confirma que o dispositivo está ligado.
- Tente reiniciar a placa.
- Regrave o firmware.

**Problema**: o display não mostra nada após a instalação do firmware.

- Verifique a orientação do cabo FPC (contatos metálicos voltados para cima).
- Confirme se o cabo está totalmente inserido e travado.
- Verifique novamente a configuração por meio do configurador.

### Problemas de conexão Bluetooth

**Problema**: não é possível encontrar o dispositivo no pareamento Bluetooth.

- Certifique-se de que o dispositivo esteja ligado e que o firmware esteja instalado.
- Aproxime-se (dentro de 2–3 m).
- Confirme se o Bluetooth está ativado no seu computador / telefone.

**Problema**: a conexão cai durante o envio da imagem.

- Fique próximo ao dispositivo durante o envio.
- Carregue a bateria suficientemente ou alimente via USB.
- Evite enviar imagens muito grandes.
- Tente novamente em um ambiente Bluetooth menos congestionado.

### Problemas de bateria e alimentação

**Problema**: vida útil curta da bateria.

- Configure intervalos de sono mais longos no configurador.
- Sempre use o firmware mais recente (cada versão melhora o consumo de energia).
- Reduza a frequência de atualização do display.
- Verifique se a bateria está totalmente carregada (4,2 V para Li-Po).

**Problema**: o dispositivo não carrega.

- Verifique a polaridade (vermelho = +, preto = −).
- Verifique se o cabo de carregamento fornece ≥500 mA.
- Certifique-se de que o interruptor de alimentação esteja **ON**.
- Tente uma fonte de alimentação USB diferente.

### Problemas com Home Assistant / Integração

**Problema**: "Insufficient connection slots" ao adicionar dispositivos via Raspberry Pi + HA.

Isso geralmente acontece porque o adaptador Bluetooth integrado do Raspberry Pi atingiu seu limite de conexões simultâneas.

![Erro: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)
*Exemplo da mensagem "Insufficient connection slots".*

**Correção recomendada**: use um dispositivo ESP32 (por exemplo, XIAO ESP32S3) como um **ESPHome Bluetooth Proxy**. Isso descarrega a conexão Bluetooth do Pi, fornecendo "slots" mais estáveis para seus displays de papel eletrônico.

## Usando ESPHome Bluetooth Proxy

Se você encontrar "Insufficient connection slots" usando um Raspberry Pi com Home Assistant, um ESPHome Bluetooth Proxy é a correção mais eficaz.

### Pré-requisitos

- Um dispositivo ESP32 (por exemplo, XIAO ESP32S3).
- ESPHome instalado no Home Assistant.
- Um cabo de dados USB para conectar o ESP32 ao seu Pi (para o primeiro flash).

### Configuração passo a passo

1. **Conecte o dispositivo** — conecte o XIAO ESP32S3 a uma porta USB do seu Raspberry Pi.

2. **Crie uma nova configuração ESPHome** com o YAML abaixo:

   ![Configuração YAML do ESPHome](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)

   ```yaml
   esphome:
     name: esps3-proxy
     friendly_name: ESP32S3 Bluetooth Proxy

   esp32:
     board: esp32-s3-devkitc-1
     framework:
       type: esp-idf

   # 1. Enable detailed logging (useful for debugging)
   logger:
     level: VERY_VERBOSE

   # 2. Core: Enable Bluetooth Tracker
   esp32_ble_tracker:
     scan_parameters:
       active: true

   # 3. Core: Enable Bluetooth Proxy
   bluetooth_proxy:
     active: true

   api:
     encryption:
       key: "YOUR_ENCRYPTION_KEY"

   ota:
     - platform: esphome
       password: "YOUR_OTA_PASSWORD"

   wifi:
     ssid: "YOUR_WIFI_SSID"
     password: "YOUR_WIFI_PASSWORD"

   captive_portal:
   ```

3. **Instalar / gravar**:

   - Escolha **Install → Plug into this computer** (ou o dispositivo que está executando o ESPHome).

     ![Processo de gravação do ESPHome](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)

   - Na primeira gravação, o ESPHome pode baixar a cadeia de ferramentas `esp-idf`. Certifique-se de que seu ambiente tenha acesso estável à Internet para o GitHub.
   - Após a compilação, os logs mostram "WiFi connected" e atividade de varredura Bluetooth.

4. **Adicione o proxy ao Home Assistant**:

   - O Home Assistant descobrirá automaticamente o novo Bluetooth Proxy.
   - Depois de adicionado, seus displays de papel eletrônico devem ser descobertos por meio do proxy sem o erro de "insufficient slots".

   ![Sucesso: Bluetooth Proxy conectado](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)

   ![Sucesso: display de papel eletrônico adicionado](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)

## Recursos

- **[GitHub]** [Firmware OpenDisplay](https://github.com/OpenDisplay-org/Firmware)
- **[GitHub]** [Firmware OEPL_BLE](https://github.com/OpenEPaperLink/OEPL_BLE)
- **[Web Tool]** [Instalador web do firmware OpenDisplay](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [Construtor de configuração OpenDisplay](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [Testador de display OpenDisplay](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Discord]** [Comunidade OpenDisplay](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [Site oficial OpenDisplay](https://opendisplay.org)
- **[Website]** [Site oficial OpenEPaperLink](https://openepaperlink.de/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
