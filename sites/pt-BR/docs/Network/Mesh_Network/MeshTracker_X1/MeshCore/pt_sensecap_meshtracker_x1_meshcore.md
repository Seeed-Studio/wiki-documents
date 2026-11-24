---
description: Comece a usar o SenseCAP MeshTracker X1 para Meshcore. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Comece a usar o MeshCore
keywords:
  - Rastreador
  - Meshtastic
  - GNSS de banda dupla
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /sensecap_meshtracker_x1_meshcore
sku: 100087698
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/sensecap_meshtracker_x1_meshcore/
---

# Comece a usar o MeshCore no SenseCAP MeshTracker X1

## Gravação de firmware


<Tabs>
<TabItem value="111" label="Via Web Flasher">

Conecte seu dispositivo ao computador com um cabo USB. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP MeshTracker X1` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

**Etapa 1 Apagar Flash**

Clique em `Enter DFU Mode`, escolha a porta serial chamada "nRF xxx" ou "TinyUSB". Em seguida, clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

**Etapa 2 Gravar Firmware**

Clique em `Enter DFU Mode`, escolha a porta serial chamada "nRF xxx" ou "TinyUSB". Em seguida, clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Flash` para garantir que entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que a gravação foi concluída. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="222" label="Arrastar e soltar">
Conecte seu dispositivo ao computador com um cabo USB.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP MeshTracker X1` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

**Etapa 1 Apagar Flash**

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Tente entrar no modo DFU manualmente: mantenha o botão do dispositivo pressionado e então conecte **rapidamente** o dispositivo ao computador via cabo USB, mantendo o botão pressionado até que um LED branco ⚪️ acenda.

:::warning
Para entrar no modo DFU com sucesso, você precisa realizar esta operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

Você verá que um disco chamado `X1` aparecerá após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseDragDisk.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo `NÃO` será reiniciado automaticamente.

**Etapa 2 Gravar Firmware**

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/VersionSelection.png" alt="pir" width={500} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Firmwareuf2.png" alt="pir" width={500} height="auto" /></p>

Tente entrar no modo DFU manualmente: mantenha o botão do dispositivo pressionado e então conecte **rapidamente** o dispositivo ao computador via cabo USB, mantendo o botão pressionado até que um LED branco ⚪️ acenda.

:::warning
Para entrar no modo DFU com sucesso, você precisa realizar esta operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

Você verá que um disco chamado `X1` aparecerá após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/UF2FirmwareDrag.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento já há firmware no dispositivo, portanto ele será reiniciado automaticamente.

</TabItem>

</Tabs>

## Configuração

### Ligar o dispositivo

Pressione o botão para ligá-lo. O LED acenderá e haverá uma melodia ascendente.

### Desligar o dispositivo

Pressione o botão por 3 s para desligá-lo. O LED apagará e haverá uma melodia descendente.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carga rápida.
:::

### Conexão com o APP

Baixe pela Google Store ou Apple Store. Ou [clique aqui](https://meshcore.io/#download) para obter o Meshcore APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

#
Clique em `Connect` e escolha o dispositivo de destino. O ID de dispositivo padrão é `Meshcore-MAC Address`. O endereço MAC pode ser visto na parte de trás do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Digite o código PIN padrão `123456` e então clique em `Pair` para conectar o dispositivo.

:::tip
Se a conexão falhar, abra a lista de Bluetooth do seu telefone e `forget` ou `Unpair` o dispositivo. Em seguida, tente conectar novamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Em seguida, reinicie o dispositivo, caso contrário a configuração não terá efeito.

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868 MHz|869.4 - 869.65|10|27|

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando qualquer [parâmetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para atender às suas necessidades.


## Configuração avançada

### Conectar via interface web (BLE)

1. Abra o [MeshCore Web App](https://app.meshcore.nz/) e clique no ícone **Settings**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={800} height="auto" /></p>

2. Selecione a aba **BLE** e clique em **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={800} height="auto" /></p>

3. Na janela pop-up de Bluetooth do sistema, selecione seu dispositivo (por exemplo, Meshcore-xxxxxx) e clique em **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={800} height="auto" /></p>

4. Quando solicitado, digite a chave de acesso Bluetooth padrão `123456` e clique em **OK**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={800} height="auto" /></p>

5. Aguarde até que o status mude para conectado e seu nó apareça na interface do MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={800} height="auto" /></p>

### Configurar GPS

Se você quiser usar o GPS, ative-o.

Você pode ir no APP `Position Settings` para ativar o GPS. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>


## Transmissão de mensagens

Se você tiver dois dispositivos compatíveis e não houver muitos usuários MeshCore perto de você, grave o firmware BLE Companion em ambos para que você possa usar seus dispositivos para se comunicar com amigos e familiares próximos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/MeshCoreFramework.png" alt="pir" width={800} height="auto" /></p>

### Anúncio

O MeshCore permite que você transmita manualmente seu nome, posição e chave pública de criptografia, que também é assinada para evitar falsificação. Quando você clica no botão de anúncio, ele transmite esses dados via LoRa. O MeshCore chama isso de Advert. Há duas maneiras de anunciar, "zero hop" e "flood".

- **Zero hop** significa que seu anúncio é transmitido para qualquer pessoa que possa ouvi-lo, e é só isso.
- **Flooded** significa que ele é transmitido e depois repetido por todos os repetidores que o ouvirem.

Você pode enviar anúncios no APP. Também é possível enviar anúncios diretamente na página de anúncio do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### Mensagem pública

Depois de configurar o LoRa, você pode enviar mensagens no canal primário. Todas as pessoas próximas na mesma faixa de frequência irão recebê-las.


### Mensagem privada

Os dois dispositivos só estabelecem uma conexão quando ambos tiverem recebido o anúncio um do outro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ

### Atalhos de botão

O firmware X1 Companion (v1.18.0+) suporta atalhos de múltiplos cliques no botão. Cada clique deve ocorrer dentro de 0,5 segundos do anterior.

| Ação do botão | Função |
| --- | --- |
| Duplo clique | Enviar um Advert |
| Triplo clique | Alternar modo de alerta: Buzz+Vibe → Apenas Buzz → Apenas Vibe → Silencioso |
| Quádruplo clique | Alternar GPS ligado / desligado |
| Pressionar por 3 s (com cabo de carregamento) | Forçar reset / entrar no modo DFU |

:::note
- Em um triplo clique, o novo modo de alerta é confirmado com um bipe e/ou vibração, para que você possa alternar os modos sem abrir o app.
- Pressionar o botão 4 ou mais vezes é sempre tratado como um quádruplo clique.
- Para detalhes sobre o comportamento de pressionar e segurar (reinicialização e modo DFU), consulte [How to reboot the device](#how-to-reboot-the-device).
:::

### Comportamento de alerta e notificação

Quando uma mensagem chega, o dispositivo vibra **esteja o app conectado ou não**. A melodia do buzzer para mensagens recebidas só toca quando o **app NÃO está conectado**, para que você não receba notificações duplicadas no app e no dispositivo.

- As alterações no modo de alerta são salvas automaticamente e persistem após reinicializações.
- Depois de mudar para `Alerts: Silent` (triplo clique), não há confirmação com bipe ou vibração. Pressione três vezes novamente para voltar para `Alerts: Buzz+Vibe` e você ouvirá o bipe e sentirá a vibração novamente.

### Indicadores do LED de status

O LED RGB de status usa cores diferentes para indicar o estado do dispositivo:

| Efeito do LED | Significado |
| --- | --- |
| Varredura em arco-íris (~1,2 s) | Ligando |
| Varredura em arco-íris (~0,8 s) | Nova mensagem recebida |
| Piscar curto em verde (a cada 4 s) | Pulso normal — tudo OK, nenhuma mensagem não lida |
| Piscar curto em azul | App conectado |
| Piscar em âmbar (a cada 4 s) | Mensagens não lidas |
| Piscar curto em vermelho | Bateria fraca (abaixo de 3,5 V) |
| Respiração em âmbar | Carregando (quando não há mensagens não lidas) |
| Verde fraco contínuo | Carga completa |

Prioridade quando várias condições se aplicam: **Vermelho (bateria fraca) > Âmbar (não lidas) > Azul (conectado) > Verde (pulso)**. Os indicadores de carregamento (respiração / verde contínuo) só são exibidos quando não há mensagens não lidas, portanto nunca ocultam um lembrete de mensagem não lida.

### Bateria e carregamento

- A porcentagem de bateria exibida no app é mapeada linearmente de 3,0 V (0%) a 4,2 V (100%).
  - Isso se aplica ao firmware MeshCore Companion. O firmware Meshtastic, por sua vez, usa a tabela de consulta OCV mostrada em [Battery Mapping](#battery-mapping).
- Quando a tensão da bateria cai abaixo de **3,5 V**, o LED de status começa a piscar em vermelho. Carregue o dispositivo quando vir o piscar vermelho.
- Durante o carregamento, o LED “respira” em âmbar; quando totalmente carregado, ele permanece verde fraco (desde que não haja mensagens não lidas).

### Como verificar o ID do dispositivo

Os `últimos quatro dígitos` do endereço MAC são o ID do dispositivo

Por exemplo, o ID do dispositivo abaixo seria `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>


### Como reiniciar o dispositivo

 Pressione e segure o botão, depois conecte o cabo de carregamento e solte o botão imediatamente.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260818150011.gif" alt="pir" width={300} height="auto" /></p>

 :::note
  Pressione e segure o botão, depois conecte o cabo de carregamento, mantendo pressionado por mais de 3 s para forçar o dispositivo a entrar no modo DFU.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

   Se você quiser sair do modo DFU, apenas pressione e segure o botão, depois conecte o cabo de carregamento e solte o botão imediatamente.

 :::

### Por que não estou recebendo mensagens?

Se o seu dispositivo parece estar conectado, mas você não está recebendo mensagens, verifique o seguinte na ordem:

1. **Mesmo canal**: Certifique-se de que ambos os dispositivos selecionaram o mesmo canal (para canais de grupo, o nome do canal e a chave pré-compartilhada devem corresponder exatamente).
2. **Mesma região / frequência LoRa**: Ambos os dispositivos devem estar configurados para a mesma região e, portanto, a mesma frequência. Consulte [Configure the LoRa](#configure-the-lora).
3. **Dentro do alcance**: O MeshCore usa transmissão LoRa favorável à linha de visada. Áreas abertas externas alcançam distâncias muito maiores do que ambientes internos; paredes, prédios e terreno reduzem significativamente o alcance. Leve ambos os dispositivos para um local aberto e tente novamente.
4. **Condições de rádio**: Verifique os relatórios de qualidade de sinal em ambos os dispositivos, consulte [Signal Quality](#signal-quality). Se o sinal estiver fraco, reduza a distância até o nó mais próximo ou adicione um repetidor entre as duas pontas.

## Solução de problemas

### Falha na atualização de firmware / Recuperação OTA

Se o seu SenseCAP MeshTracker X1 não iniciar, ficar sem resposta ou o LED branco ⚪️ permanecer aceso continuamente após uma atualização de firmware, o dispositivo pode estar preso no modo DFU. Tente o seguinte:

1. Force uma reinicialização para sair do modo DFU: desconecte o cabo de carregamento USB, pressione e segure o botão do dispositivo, conecte o cabo de carregamento USB e solte o botão imediatamente. Não continue segurando o botão — mantê-lo pressionado por mais de 3 segundos após conectar o cabo forçará o dispositivo a voltar para o modo DFU.
2. Verifique se o dispositivo inicia normalmente. Caso contrário, conecte o dispositivo ao computador com um cabo de dados USB e siga o guia [Firmware Flashing](#firmware-flashing) para entrar no modo DFU, apagar a flash e reinstalar o firmware MeshCore.
3. Se o dispositivo ainda não puder ser recuperado, siga [Bootloader Installation](#bootloader-installation) para regravar o bootloader e, em seguida, reinstale o firmware de aplicação.

Não force uma reinicialização nem desconecte o cabo USB enquanto o firmware estiver sendo apagado ou gravado. Se o dispositivo não conseguir entrar no modo DFU ou ser detectado pelo computador, entre em contato com o suporte técnico.

### Dispositivo nunca liga

- Use um cabo USB comprovadamente funcional para `charge the device` continuamente por 1–2 horas para garantir que a bateria tenha energia suficiente para ativar o sistema.

- Se o dispositivo ainda não responder após o carregamento, `perform a hard reset` da seguinte forma: Desconecte o cabo USB. Pressione e segure o botão, depois conecte o cabo USB e solte o botão imediatamente. Isso força uma reinicialização do sistema.

 - Se ainda assim não funcionar, conecte um cabo USB a um computador. Segure o botão do dispositivo e, em seguida, conecte o dispositivo ao computador; veja se um disco aparece no seu PC. Se aparecer, reinstale o bootloader

### Dispositivo preso em loop de inicialização

**Descrição:**

O dispositivo irá reiniciar repetidamente, e a porta serial irá conectar e desconectar repetidamente.

**Solução:**

- Passo 1: Tente entrar no modo DFU manualmente: pressione e segure o botão do dispositivo e, em seguida, conecte **rapidamente** o dispositivo ao computador via cabo USB, mantendo o botão pressionado até que um LED branco ⚪️ acenda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

O dispositivo está em modo DFU se o LED branco estiver continuamente aceso.

:::note
Para entrar com sucesso no modo DFU, você precisa realizar essa operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

- Passo 2: Apagar a Flash

- Passo 3: Gravar o firmware

### Bootloader Installation


- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
Quando estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** a desconecte durante o processo de gravação.
:::

**Passo 1: Instalação do Adafruit-nrfutil**

Para usuários Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela que aparecer e clique em "Enter". Isso abrirá a linha de comando. 

Para usuários MAC, pressione a tecla "Command" e a tecla "Space" para abrir o Spotlight. Em seguida, digite "termial" e clique em "Return". Isso abrirá a linha de comando. 

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Verifique na sua linha de comando se o Python e o pip foram instalados com sucesso.

```
python --version
```

```
python -m pip --version
```

Então "Python xxx" e "pip xxx" devem aparecer. Se isso não acontecer, tente instalar o Python novamente.

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

Para usuários de Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**Passo 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários de Windows, abra o gerenciador de dispositivos e vá para `port`. O número da porta que aparecer após a conexão do dispositivo é o número da porta do dispositivo.

Para usuários de Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuários de Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Passo 3: Grave o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver em com6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Alguns dispositivos mudarão o número da porta depois que você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá seguir este [passo](https://wiki.seeedstudio.com/pt-br/sensecap_meshtracker_x1_meshcore/#gravação-do-firmware) para gravar o firmware da aplicação.


**2) O dispositivo não consegue entrar no modo DFU, mas a porta serial pode ser detectada**.

- Abra uma ferramenta de porta serial

- Defina a taxa de baud para `1200`.

- Conecte o dispositivo.
   A luz piscará brevemente quando você conectá-lo. Continue tentando até que a luz permaneça acesa, o que significa que o dispositivo pode voltar ao modo DFU, então [grave o bootloader](https://wiki.seeedstudio.com/pt-br/sensecap_meshtracker_x1_meshcore/#instalação-do-bootloader) -> [apague a flash](https://wiki.seeedstudio.com/pt-br/sensecap_meshtracker_x1_meshcore/#gravação-do-firmware) -> [grave o firmware](https://wiki.seeedstudio.com/pt-br/sensecap_meshtracker_x1_meshcore/#gravação-do-firmware).

**3) O dispositivo não consegue entrar no modo DFU e nenhuma porta serial é exibida**

- mantenha pressionado o botão do dispositivo, conecte o cabo de carregamento e solte o botão imediatamente. Depois que um disco aparecer no seu PC, você poderá ver a porta serial.

- Se ainda não funcionar, desconecte o cabo de carregamento e deixe o dispositivo por alguns dias até que a bateria esteja completamente descarregada, depois conecte o cabo de carregamento e tente pareá-lo novamente.

**4) Se nenhuma das etapas acima funcionar, entre em contato com o suporte técnico: support@sensecapmx.com**

 ### Dispositivo desliga automaticamente

- **Descrição do fenômeno**

 - Após o dispositivo ligar, ele desligará ou reiniciará automaticamente depois de um tempo. 
 - O log da porta serial roda por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar manualmente e à força o dispositivo quando ele está nos seguintes estados: sem terminar o processo de transmissão de mensagens, sendo configurado......

- **Solução de problemas**

 [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_meshtracker_x1_meshcore/#gravação-do-firmware) para executar um flash-erase. 


### Qualidade do sinal

  - **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica baixo desempenho.

  - **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado com baixo desempenho. 

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Mapeamento da bateria

```bash
#define OCV_ARRAY 4290, 4118, 4002, 3889, 3798, 3728, 3677, 3643, 3594, 3500, 3100
```

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
