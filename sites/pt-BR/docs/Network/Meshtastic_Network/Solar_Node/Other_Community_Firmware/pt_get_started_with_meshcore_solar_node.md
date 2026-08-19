---
description: Comece a usar o SenseCAP Solar Node para Meshcore e LoRa. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Comece a usar o MeshCore no SenseCAP Solar Node
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 8/17/2026
  author: Advent Jiang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/
updatedAt: '2026-07-31'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie ou desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagens
2. Estiver sendo configurado
:::

## Gravação de firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "Solar Node" ou "TinyUSB serial". Em seguida, clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar firmware

Selecione a versão do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Versões diferentes do firmware MeshCore diferem no indicador de LoRa TX e no comportamento do botão de energia. Antes de avaliar o status do dispositivo, confirme a versão de firmware que você está usando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/version-different.png" alt="pir" width={800} height="auto" /></p>

:::note
**Diferenças entre versões de firmware (indicador LoRa TX)**

Os LEDs indicadores são numerados na imagem abaixo, para que você possa identificar facilmente a qual LED as descrições de cores se referem:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

- **Nº 12 - LED amarelo**: indicador de entrada solar / status de luz.
- **Nº 13 - LED azul**: indicador de LoRa TX.
- **Nº 14 - LED branco**: indicador de LoRa TX.

Versões diferentes do firmware MeshCore acendem LEDs físicos diferentes para LoRa TX:

- v1.12.0 ~ v1.14.0: o LED azul (Nº 13) pisca durante LoRa TX.
- v1.14.1 ~ v1.15.x: o LED branco (Nº 14) pisca durante LoRa TX.
- v1.16.0 e posteriores: o LED azul (Nº 13) volta a piscar durante LoRa TX.
- Ver um flash azul ou branco em versões diferentes não indica falha de hardware.

Os LEDs vermelho, verde e amarelo são principalmente indicadores de status de energia de hardware e não estão relacionados às diferenças de versão do indicador MeshCore TX:

- Vermelho: indica principalmente que o dispositivo está carregando.
- Verde: indica principalmente que o carregamento foi concluído.
- Amarelo (Nº 12): indica principalmente entrada solar / status de luz.
:::

Clique em `Enter DFU Mode`, escolha a porta serial chamada "P1 Pro" ou "TinyUSB" serial. Em seguida, clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Flash` para garantir que entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que a gravação foi concluída. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastar e Soltar

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `Xiao-Boot` ou `Solar Node` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto ele `NÃO` será reiniciado automaticamente.

#### Gravar firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `Xiao-Boot` ou `Solar Node` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto ele NÃO será reiniciado automaticamente.

## Introdução

Antes da implantação formal, teste e configure o nó primeiro.

### Instalação

#### Montar o dispositivo

:::danger note
Como o dispositivo será usado ao ar livre por longos períodos, evite instalar o painel em posição horizontal. Recomenda-se uma instalação inclinada ou diagonal para evitar acúmulo de água. Além disso, certifique-se de que todos os parafusos estejam bem apertados e a tampa esteja instalada corretamente. Para proteção extra contra água, você também pode considerar aplicar medidas adicionais de vedação.
:::

- **Lista de peças**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Etapa 1: Conecte a peça 1 à parte inferior do dispositivo usando arruelas e parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 2: Conecte a junta universal (peça 2) e o suporte (peça 3) com parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 3: Conecte o cabo RF (peça 4) e a antena (peça 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 4: Instale o anel de fixação na posição apropriada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 5: Conecte o suporte da junta universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 6: Afrouxe os parafusos, ajuste a junta universal para a posição adequada e, em seguida, aperte os parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 7: Conecte a antena ao dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### Instalar bateria e módulo GPS (Opcional)

:::tip
Quando você precisar instalar ou substituir a bateria, use bateria `Button-top` 18650(3.6V).
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
A versão P1-Pro possui bateria e módulo GPS integrados; para a versão P1, o usuário precisa instalar manualmente a bateria e o módulo GPS, se necessário.
:::



- Etapa 1: Remova todos os parafusos e a tampa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Etapa 2: Instale a bateria e o módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Etapa 3: Monte a carcaça.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que a carcaça esteja corretamente montada e que os parafusos estejam bem apertados para manter a integridade à prova d’água do dispositivo.
:::

#### (Opcional) Atualizar antena

- Você pode substituir a antena por uma de fibra de vidro assistindo a este vídeo.

Se você precisar de uma antena com ganho mais alto, recomendamos a antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) e a antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

### Ligar o dispositivo

O dispositivo precisa ser ativado conectando o cabo USB. Ao iniciar, o LED azul acende por cerca de 3 s, o que significa que o dispositivo foi ligado com sucesso.

O LED TX só pisca quando o próprio Solar Node transmite dados LoRa (por exemplo, ao enviar um anúncio). Receber dados não acende o LED TX. Durante a transmissão LoRa (TX), a cor do LED depende da versão do firmware – consulte as diferenças de versão de firmware acima.

:::tip
**Botão de energia (ligar/desligar)**

- MeshCore v1.14.0 e anteriores: não há suporte para ligar/desligar mantendo o botão Power pressionado. Se manter o botão Power pressionado não tiver resposta, este é o comportamento normal da versão de firmware, não uma falha do botão.
- MeshCore v1.14.1 e posteriores: mantenha o botão Power pressionado por cerca de `3s` para ligar/desligar o dispositivo. Você verá uma luz branca piscar rapidamente, o que indica que o dispositivo está sendo ligado/desligado com sucesso.

**Referência dos botões**

- **Botão Power**: ligar/desligar (suportado a partir da v1.14.1).
- **Botão Reset**: reinicia o dispositivo / entra no modo DFU ou Bootloader.

Por favor, não confunda manter o botão Power pressionado com clicar duas vezes em Reset.
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### Configuração

- **Etapa 1 Configuração inicial**

Quando o MeshCore é gravado em um dispositivo LoRa pela primeira vez, é necessário definir a frequência do dispositivo servidor para que ele utilize a frequência que é legal em seu país ou região.

[Click here](https://config.meshcore.io/) para configurar o repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Altere a região LoRa e salve a configuração. Em seguida, `Reboot` o dispositivo, caso contrário a configuração não terá efeito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Duty Cycle (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** deve obedecer a uma limitação de duty cycle por hora de 10%, calculada a cada minuto com base em uma janela móvel de 1 hora. Seu dispositivo irá parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::


- **Etapa 2 Enviar anúncio**

Clique em "send advert" para permitir que outros dispositivos Meshcore vejam este repetidor. Em seguida, o repetidor poderá ser visto na lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

Clicar em **Send Advert** faz com que o Solar Node execute ativamente uma transmissão LoRa (TX), então o LED TX da versão de firmware correspondente deve piscar rapidamente:

- v1.12.0 ~ v1.14.0: LED azul pisca
- v1.14.1 ~ v1.15.x: LED branco pisca
- v1.16.0 e posteriores: LED azul pisca

O LED TX indica que o próprio Solar Node está transmitindo dados LoRa (TX). Ele não é um indicador de recepção (RX).

- **Etapa 3 (Opcional) Login de administrador**

A senha de administrador padrão de um repetidor é `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

Após fazer login, você pode ver a página de configuração. Agora você pode ajustar a configuração do repetidor.

Se você quiser mostrar a posição do repetidor, pode ativar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Além disso, você pode ajustar o intervalo de transmissão do anúncio:

- **Advert interval**: o intervalo de envio do anúncio Local / zero-hop. A faixa de intervalo é de 60–240 minutos.
- **Flood advert interval**: o intervalo de envio do Flood Advert. A faixa de intervalo é de 3–168 horas.

O período real de anúncio depende da versão atual do firmware e da configuração salva no dispositivo, portanto, consulte sempre os valores reais de `Advert interval` e `Flood advert interval` na página de configuração. Se um intervalo for definido como `0`, o anúncio automático correspondente será desativado.

**Nota:** Desde o MeshCore v1.16.0, o intervalo padrão do Flood advert foi alterado de 12 horas para 47 horas. Portanto, não recomendamos verificar o dispositivo aguardando o anúncio automático. Para verificar TX e LED, clique em **Send Advert** para acionar ativamente uma transmissão LoRa (TX).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Definir rota

Antes de adicionar o repetidor à sua rota, talvez seja necessário usar o repetidor para enviar um anúncio primeiro. O repetidor envia anúncios automaticamente em intervalos regulares de acordo com o `Advert interval` e o `Flood advert interval` salvos no dispositivo. Os intervalos dependem da versão do firmware e da configuração atual do dispositivo, e podem ter duração de várias horas. Recomendamos clicar em **Send Advert** para acioná-lo imediatamente em vez de esperar pelo anúncio automático.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

Você pode definir manualmente o caminho de envio das mensagens. Conecte seu dispositivo Companion Bluetooth ao aplicativo do telefone. Abra uma janela de mensagem privada. Então você pode escolher o repetidor descoberto para formar sua rota.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Após definir a rota, o método de transmissão será alterado para "n hop". Por exemplo, se você adicionar 1 repetidor à sua rota, ele será alterado para 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

:::note
O Repetidor MeshCore não reenvia todo pacote LoRa que recebe.

- **Caso 1**: Um Companion envia dados → o Solar Node os recebe (RX) → nenhuma resposta ou encaminhamento é necessário → o Solar Node não realiza TX → o LED TX não pisca. Isto é normal.
- **Caso 2**: O Solar Node recebe dados → é necessária uma resposta ou encaminhamento → o Solar Node realiza uma transmissão LoRa (TX) → o LED TX pisca na cor da versão de firmware correspondente.

O fato de o Solar Node receber dados LoRa com sucesso não significa que o LED TX irá piscar. O LED TX apenas indica que o próprio Solar Node está transmitindo dados LoRa.

Por exemplo, quando há apenas um Companion e um Solar Node Repeater na rede, após o Companion enviar dados, o Solar Node pode receber o pacote com sucesso sem precisar reenviá-lo. Nesse caso, não ver o LED TX piscar não pode ser usado para julgar diretamente o Repetidor como anormal.
:::

## Verificar se o dispositivo está funcionando corretamente

Antes da verificação, confirme se você está usando apenas um dispositivo Solar Node ou se também possui outros dispositivos MeshCore Companion em sua configuração.

Para o modo Repetidor, o seguinte comportamento é esperado:

- Quando o dispositivo é conectado via USB, ele pode aparecer online e ser configurado.
- Após desconectar a alimentação USB, o dispositivo muda para o modo bateria e continua funcionando como repetidor.
- Quando o próprio Solar Node transmite dados LoRa, o LED TX pisca rapidamente na cor da versão de firmware correspondente. Isto é normal e indica atividade LoRa.
- Não se espera que o Solar Node Repeater se comporte como um dispositivo independente conectado ao telefone, a menos que seja usado junto com um dispositivo Companion.

Para verificar corretamente se o repetidor está funcionando, siga as duas etapas de verificação ativa abaixo. Não confie em esperar pelo anúncio automático como o principal método de verificação.

### Etapa 1: Verificar TX do Solar Node

1. Conecte o Solar Node via USB.
2. Abra a página de configuração do MeshCore: [https://config.meshcore.io/](https://config.meshcore.io/).
3. Clique em **Send Advert**.
4. Observe o LED TX no Solar Node.

Quando o Solar Node enviar o anúncio, o LED TX deverá piscar brevemente na cor correspondente à versão do firmware:

- v1.12.0 ~ v1.14.0: LED azul
- v1.14.1 ~ v1.15.x: LED branco
- v1.16.0 e posteriores: LED azul

O Companion deve conseguir receber o anúncio do Solar Node. Isso verifica ativamente o LoRa TX na direção Solar Node → Companion.

### Etapa 2: Usar Ping para Verificar a Comunicação Bidirecional

1. No dispositivo Companion, abra o contato do Solar Node Repeater e use a função **Ping**.

Se o ping for bem-sucedido, ambas as direções da comunicação são verificadas ao mesmo tempo:

- Companion → Solar Node: RX
- Solar Node → Companion: resposta TX

Quando o Solar Node enviar a resposta do ping, o LED TX deverá piscar brevemente na cor correspondente à versão do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="Verificar o repetidor Solar Node com Ping de outro dispositivo MeshCore" width={700} height="auto" /></p>

:::note
O LED TX não é um indicador de RX. Se o Solar Node apenas receber um pacote sem necessidade de responder ou encaminhar, o LED pode não piscar.
:::

:::tip
Não recomendamos esperar pelo anúncio automático para verificar se o dispositivo está funcionando, porque o intervalo de anúncio pode ser muito longo. Use **Send Advert** para acionar ativamente um TX imediatamente.
:::

:::note
O aplicativo móvel é usado principalmente com um dispositivo Companion, não diretamente com um Repeater. O próprio repetidor não se comportará como um acessório de telefone conectado por Bluetooth normal.
:::

Se o comportamento do LED e o estado da conexão USB corresponderem à descrição acima, isso geralmente indica um comportamento normal do repetidor.

## FAQ

### Loop de inicialização (Boot Loop)

- Motivo 

Isso geralmente é causado por falha na gravação do firmware. Ao gravar o firmware, mantenha uma conexão estável. 

- Solução de problemas

[Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase) para regravar o firmware.

### Dispositivo brickado

#### Descrição

O dispositivo não responde, sem LED, não consegue parear com o seu App.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o Bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Ao gravar o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** a desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela pop-up e pressione "Enter". Isso abrirá a linha de comando. 

Para usuários Mac, pressione a tecla "Command" e a tecla "Espaço" para abrir o Spotlight. Em seguida, digite "termial" e pressione "Return". Isso abrirá a linha de comando. 

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Verifique na sua linha de comando se o python e o pip foram instalados com sucesso.

```
python --version
```

```
python -m pip --version
```

Então "Python xxx" e "pip xxx" devem aparecer. Se não aparecerem, tente instalar o Python novamente.

<Tabs>
<TabItem value="pypi" label="Instalando a partir do PyPI">

Este é o método recomendado para instalar a versão mais recente:

```
pip3 install --user adafruit-nrfutil
```

Verifique o caminho de instalação:

```
python -m pip show adafruit-nrfutil
```

Este é o local de instalação:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuários Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o conforme a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas para instalar com o PyPi ou quiser modificar a ferramenta. Primeiro, clone este repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`, porém, se você estiver no Windows, talvez precise alterá-lo para `python`, já que a instalação do python 3.x no Windows ainda usa o nome python.exe

Para instalar no espaço do usuário no seu diretório pessoal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Se você receber erros de permissão ao executar `pip3 install`, seu `pip3` é antigo ou está configurado para tentar instalar nos diretórios do sistema. Nesse caso, use a opção `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Se você quiser instalar nos diretórios do sistema (geralmente não recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para gerar um binário executável independente da ferramenta (Windows e MacOS), execute estes comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Você encontrará o .exe em `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (com `.exe` se você estiver no Windows).
Copie ou mova-o para outro lugar para sua conveniência, como um diretório no seu %PATH%.

</TabItem>
</Tabs>

**Etapa 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuários Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Etapa 3: Gravar o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver na COM6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Alguns dispositivos mudarão o número da porta após você inserir este comando. Portanto, se a instalação falhar, verifique novamente o número da porta.


- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Quando você concluir as etapas acima, poderá então [gravar o firmware da aplicação](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase).

### Qualidade do Sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado com desempenho ruim.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Corrente de Carga

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

A corrente máxima de carga do Xiao nRF-52840 Plus é 200 mA. O CI de gerenciamento de carga CN3165 é 0,99 A. Portanto, a corrente máxima de carga é 1 A.

### Por que meu Solar Node pisca branco em vez de azul ao enviar dados?

Esta é uma diferença de versão do firmware MeshCore, não uma falha de hardware:

- v1.12.0 ~ v1.14.0: LED azul TX
- v1.14.1 ~ v1.15.x: LED branco TX
- v1.16.0 e posteriores: LED azul TX

Um flash branco em v1.14.1 ~ v1.15.x não indica falha de hardware.

### Por que não consigo desligar o dispositivo segurando o botão Power?

Pressionar e segurar o botão Power para ligar/desligar é suportado a partir do MeshCore v1.14.1. Na v1.14.0 e anteriores, pressionar e segurar o botão Power não tem resposta, e esse é o comportamento normal da versão do firmware.

### Por que meu Solar Node não pisca há muito tempo?

- O LED TX só pisca quando o próprio Solar Node realiza um LoRa TX.
- RX não necessariamente aciona o LED TX.
- O Repeater não encaminha todos os pacotes que recebe.
- O intervalo de anúncio automático pode ser muito longo.
- Desde a v1.16.0, o intervalo padrão do anúncio Flood é de 47 horas.
- Se você precisar verificar imediatamente, use **Send Advert**.

## Recurso
- [Tabela de Cálculo da Vida Útil da Bateria do Solar Node](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)

## Suporte Técnico & Discussão de Produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>