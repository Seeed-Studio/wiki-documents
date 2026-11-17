---
description: Explore o desenvolvimento de áudio local no Wio Tracker L2 Pro, incluindo projetos de controle por voz, armazenamento de áudio e reprodução com o Cairn. A transmissão de voz via MeshCore não é suportada neste fluxo de trabalho.
title: Desenvolvimento de Áudio
keywords:
  - Wio Tracker L2 Pro
  - MeshCore
  - Cairn
  - Audio
  - I2S
image: https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg
slug: /meshcore_audio_development_l2
sku: 100029766
sidebar_position: 2
last_update:
  date: 11/16/2026
  author: Michelle Huang
createdAt: 2026-09-19T00:00:00.000Z
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/pt-br/meshcore_audio_development_l2/
---

## Entenda o Limite do Desenvolvimento de Áudio

Um microfone e um alto-falante permitem que um dispositivo capture e reproduza som. Enviar mensagens de voz para outro dispositivo também exige tempo de uso de rádio suficiente.

| Caso de uso | Princípio | Limite de desenvolvimento |
| --- | --- | --- |
| Reproduzir música ou arquivos gravados | Áudio local<br/>Não requer LoRa| ✅ |
| Gravar notas de voz | Áudio local<br/>Não requer LoRa | ✅ |
| Desenvolver controles de voz locais | Reconhecimento no dispositivo e ações locais<br/>Requer implementação de firmware personalizada | ✅ |
| Enviar um pequeno clipe de voz via MeshCore | O tráfego de áudio pode saturar o canal compartilhado e bloquear mensagens urgentes | ❌ |
| Chamadas de voz contínuas ou transmissão tipo walkie-talkie | O tráfego de áudio pode saturar o canal compartilhado e bloquear mensagens urgentes | ❌ |

### Escopo Suportado de Desenvolvimento de Áudio

O desenvolvimento de áudio no L2 Pro está atualmente limitado a **processamento, armazenamento e reprodução locais**. As direções de desenvolvimento suportadas incluem:

- **Controle de voz local:** Reconhecer um comando no dispositivo e usá-lo para acionar uma ação local
- **Gravação e armazenamento de áudio:** Capturar a entrada do microfone e salvar gravações no microSD.
- **Reprodução de áudio:** Reproduzir música e notas de voz gravadas.
- **Sons de notificação locais:** Reproduzir um som armazenado localmente quando uma mensagem de texto ou outro evento chegar, sem transmitir o arquivo de áudio via LoRa.

:::warning
**A transmissão de mensagens de voz pela rede MeshCore não é suportada neste fluxo de trabalho de desenvolvimento de áudio do L2 Pro.

Os nós LoRa mesh compartilham um tempo de rádio limitado. Transferências de áudio podem ocupar o canal por longos períodos; o roteamento e as retransmissões adicionam ainda mais carga. Isso pode causar congestionamento severo e paralisar a comunicação da malha, impedindo que mensagens urgentes acessem o canal ou cheguem a tempo.

Mantenha a captura de áudio, o processamento de voz, o armazenamento e a reprodução no dispositivo. Não envie cargas de áudio pela rede mesh.
:::

### Dicas para Desenvolvimento de Áudio Local

Para um aplicativo de áudio local personalizado, planeje:

- **Entrada e saída:** Valide separadamente os caminhos do microfone e do alto-falante, incluindo ganho do microfone e volume de reprodução.
- **Reconhecimento de voz local:** Escolha um mecanismo de reconhecimento no dispositivo que se encaixe no orçamento de processamento e memória do ESP32-S3.
- **Armazenamento:** Selecione um formato de amostra e uma duração de gravação que caibam no espaço disponível do microSD e trate condições de cartão cheio ou falha de gravação.
- **Agendamento de tarefas:** Evite que o processamento de áudio e o acesso a arquivos bloqueiem o tratamento de pacotes da malha ou a interface de tela sensível ao toque.

## Fundamentos de Hardware no L2 Pro

### Caminhos de sinal de áudio

O subsistema de áudio do L2 Pro usa uma interface I2S, circuitos de codec e um caminho de microfone.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/l2_audio_hardware_schematic.png" style={{width:600, height:'auto'}}/>
</div>

### Mapeamento de pinos de áudio

| Interface | Sinal na placa | GPIO do ESP32-S3 | Finalidade |
| --- | --- | --- | --- |
| I2S | `CODEC_I2S0_MCLK` | GPIO10 | Clock mestre |
| I2S | `CODEC_I2S0_SCLK` | GPIO11 | Clock de bits, também chamado de BCLK |
| I2S | `CODEC_I2S0_LRCK` | GPIO12 | Clock de seleção de palavra/quadro, também chamado de WS |
| I2S | `CODEC_I2S0_DSDIN` | GPIO16 | ESP32-S3 TX → entrada de dados do codec; reprodução |
| I2S | `CODEC_I2S0_SDOUT` | GPIO15 | Saída de dados de áudio → ESP32-S3 RX; gravação |
| I²C | `IIC0_SDA` | GPIO47 | Dados de configuração de periféricos |
| I²C | `IIC0_SCL` | GPIO48 | Clock de configuração de periféricos |


## Instalar o Cairn no L2 Pro

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_page.png" style={{width:600, height:'auto'}}/>
</div>

### Sobre o Cairn

[Cairn](https://github.com/cvhviz/CAIRN) é um fork desenvolvido pela comunidade do firmware companheiro MeshCore, com sua própria interface no dispositivo. Sua build para L2 Pro combina mensagens via touchscreen com ferramentas de áudio locais e funciona com os clientes oficiais MeshCore. Verifique as [notas de versão](https://github.com/cvhviz/CAIRN/releases) ao usar outra build. 

### Preparação

Prepare:

- Um **Wio Tracker L2 Pro** com sua antena LoRa conectada.

- Um **cabo de dados** USB-C e um computador executando Chrome ou Edge.

- Um cartão microSD para músicas e gravações. O Cairn recomenda **8–32 GB SDHC formatado como FAT32**; exFAT não é suportado pelo fluxo de trabalho documentado de cartão para L2 Pro.

- Um arquivo MP3 ou WAV curto para um teste de reprodução.


### Gravação de Firmware

**Passo 1: Baixar o firmware do L2 Pro**

Abra [Cairn Releases](https://github.com/cvhviz/CAIRN/releases) e expanda **Assets**. Selecione o arquivo que contém **`WioL2Pro`**.

Para este tutorial de primeira instalação, baixe **`-full.bin`**. Ele já inclui o aplicativo; não grave também o `-update.bin`.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_firmware.png" style={{width:900, height:'auto'}}/>
</div>

**Passo 2: Entrar no modo de download**

1. Conecte o L2 Pro ao computador e ligue sua chave de energia.

2. Mantenha pressionado **User/Boot**.

3. Enquanto o mantém pressionado, pressione e solte **RST**.

4. Solte **User/Boot**.

**Passo 3: Gravar pelo navegador**

1. Abra o [Web Flasher da Espressif](https://espressif.github.io/esptool-js/).

2. Clique em **Connect** e selecione a porta serial do dispositivo.

3. Selecione **Erase Flash** e aguarde a conclusão.

4. Defina o endereço do firmware como **`0x0`** e selecione o `-full.bin` do L2 Pro baixado.

5. Clique em **Program** e aguarde o término da gravação.

6. Desconecte o gravador e pressione **RST** para iniciar o Cairn.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Carin_web_flasher.png" style={{width:900, height:'auto'}}/>
</div>

## Explore a Interface de Áudio do Cairn

### Abrir o hub de Áudio

Insira o cartão microSD preparado. A partir da tela **Home**, deslize para baixo para encontrar o card **Audio**, ou abra **Audio** pelo painel rápido. O hub fornece acesso ao player e ao gravador.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_audio_hub.jpg" style={{width:600, height:'auto'}}/>
</div>

### Reproduzir música a partir do microSD

1. Crie uma pasta chamada **`music`** na raiz do cartão.

2. Copie um arquivo MP3 ou WAV curto para dentro dela e ejete o cartão com segurança do computador.

3. Insira o cartão no L2 Pro, abra o player e selecione o arquivo em **Library → Music**.

4. Comece com um volume baixo e verifique a reprodução.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg" style={{width:600, height:'auto'}}/>
</div>

### Gravar uma nota de voz

1. Abra **Recorder** a partir do hub de Áudio.

2. Abra suas configurações para escolher a qualidade de gravação, o ganho do microfone e um limite de tempo.

3. Inicie uma gravação curta, fale próximo ao microfone e depois pare.

4. Abra **Library → Recordings** para ouvir a gravação.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_record.jpg" style={{width:600, height:'auto'}}/>
</div>

O gravador salva arquivos WAV em **`Recordings`**, usando datas e horários quando o relógio está ajustado. Ele oferece gravação em 8 ou 16 kHz, **Voice start** para iniciar ao detectar som e marcadores. A barra de status exibe **MIC** ou **REC** enquanto o microfone está ativo.


### Testar sons de notificação personalizados

Copie um MP3 ou WAV curto para uma pasta **`Sounds`** na raiz. Abra **Settings → Hardware → Sound**, selecione um evento e escolha um arquivo na lista de sons do cartão.


### Outros Recursos do Cairn que Valem a Pena Testar

- **Mensagens autônomas:** Use o teclado de touchscreen, respostas rápidas e emoji para conversas em canais e diretas.

- **Mapas e posicionamento:** Explore mapas no dispositivo, informações de GPS e posições de nós próximos; prepare a cobertura offline antes de sair.

- **Inspeção de rádio:** Inspecione o tráfego de pacotes, informações de sinal e varreduras de espectro/faixa para entender a atividade de rádio local.

- **Acesso a arquivos:** Experimente a transferência via Wi-Fi ou o modo de unidade USB para gerenciar o conteúdo do microSD sem remover o cartão.

- **Personalização do dispositivo:** Explore temas, ações de botões e o histórico de bateria.

## Suporte Técnico e Discussão sobre o Produto

- **O navegador não encontra o dispositivo:** Verifique o cabo de dados USB, feche outros aplicativos seriais e repita a sequência User/Boot + RST.


- **Os arquivos de música não aparecem:** Verifique a formatação FAT32, a pasta `Music` na raiz e o formato MP3/WAV. Use a página de armazenamento para inspecionar ou reescanear o cartão.


- **Uma gravação está sem som:** Verifique o ganho e as configurações de gravação. Para firmware personalizado, verifique a inicialização do microfone e o caminho RX do GPIO15 separadamente da reprodução.

## Suporte Técnico e Discussão sobre o Produto

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

