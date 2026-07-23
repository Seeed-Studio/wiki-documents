---
description: reSpeaker Clip é um gravador de IA vestível aberto com captação de áudio em 360 graus, display OLED de status, feedback por vibração, conectividade BLE e Wi‑Fi, além de firmware aberto e suporte a SDK para transcrição, notas com IA, resumos de reuniões e aplicações corporativas de voz com IA.
title: Introdução ao reSpeaker Clip
keywords:
  - reSpeaker
  - Gravador de IA
  - SenseCraft Voice
  - Gravador de IA vestível
  - Voz para texto
  - Resumo com LLM
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip
sku: 100020126
last_update:
  date: 6/30/2026
  author: Ray
createdAt: '2026-06-30'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip/
---

# Introdução ao reSpeaker Clip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

reSpeaker Clip é um gravador de IA vestível aberto projetado para varejo, reuniões, entrevistas, salas de aula, treinamento de atendimento e outros cenários que exigem gravação de voz de alta qualidade e organização de conteúdo posterior. Ele integra microfones PDM duplos para captação omnidirecional de 360 graus em até 3 metros, gravação independente, gerenciamento de arquivos pelo celular, transcrição com IA e sumarização com IA, ajudando os usuários a concluir todo o fluxo de trabalho desde a gravação em campo até o conteúdo estruturado.

reSpeaker Clip também é projetado como um hardware aberto e um produto amigável para desenvolvedores. Ele fornece firmware de código aberto, um aplicativo de demonstração e suporte a SDK, permitindo que desenvolvedores personalizem o comportamento do dispositivo e os fluxos de trabalho da aplicação. Empresas também podem integrá‑lo a sistemas internos de escritório, LLMs implantados de forma privada ou pipelines de análise de voz para construir aplicações de voz com IA que atendam aos seus requisitos de segurança de dados.

reSpeaker Clip funciona com o SenseCraft Voice App e serviços em nuvem, e também pode ser integrado a modelos de IA locais ou em nuvem. Por meio do aplicativo, os usuários podem parear o dispositivo, gerenciar gravações, exportar arquivos, transcrever áudio, gerar resumos com IA, personalizar modelos e realizar recuperação de informações via perguntas e respostas.

:::note
Este documento é um rascunho inicial da Wiki para o reSpeaker Clip. Alguns URLs de SDK, documentos de protocolo e links de pacotes de recursos serão adicionados após a confirmação dos materiais do produto.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>

## Visão geral do produto

reSpeaker Clip é posicionado como um gravador de IA vestível aberto. Ele pode ser usado não apenas como um dispositivo de gravação portátil, mas também como um ponto de entrada de dados de voz para treinamento de atendimento em empresas, registros de entrevistas, atas de reuniões e revisão de comunicações em campo.

O dispositivo utiliza um formato compacto e vestível e inclui 2 GB de armazenamento interno, permitindo gravar de forma independente sem depender de um telefone. Ele também possui um display OLED programável de 0,5 polegada e feedback por vibração, ajudando os usuários a verificar rapidamente o status da gravação, marcar trechos importantes e alternar entre fluxos de trabalho de gravação por meio da tela, botão e feedback tátil.

### Principais recursos

- **Captação em 360 graus, até 3 metros**: Dois microfones PDM de alto desempenho oferecem captação omnidirecional para reuniões, entrevistas, conversas em varejo e outros cenários com vários interlocutores.
- **Fluxos de gravação duplos**: Selecione o comportamento de gravação apropriado com base no ambiente, desde notas diárias vestíveis até reuniões com várias pessoas.
- **Gravação independente e armazenamento local**: O armazenamento interno de 2 GB permite que o dispositivo funcione como um gravador autônomo mesmo quando o telefone não está por perto.
- **Display OLED e feedback por vibração**: O display OLED de 0,5 polegada mostra o status do dispositivo, enquanto o feedback por vibração torna o controle da gravação mais intuitivo.
- **Firmware aberto e SDK**: Desenvolvedores podem personalizar o comportamento do dispositivo, a lógica dos botões, o conteúdo exibido e os fluxos de trabalho no lado da aplicação.
- **Transcrição e sumarização com IA**: Use modelos de IA em nuvem ou locais para conversão de fala em texto, notas com IA, atas de reuniões e perguntas e respostas por voz.
- **Pronto para integração corporativa**: Conecte‑se a sistemas internos da empresa ou a LLMs implantados de forma privada para fluxos de trabalho que exigem segurança de dados e personalização.

### Especificações

Esta seção resume as especificações de hardware, áudio, físicas e relacionadas à bateria do reSpeaker Clip.

#### Especificações de hardware

| Especificação | Detalhes |
| --- | --- |
| Controle principal | nRF5340+nRF7002 |
| Display | OLED de 0,5 polegada 88*48 |
| Microfone | PDM duplo, taxa de amostragem de até 16 kHz |
| Saída de áudio | Áudio com redução de ruído |
| Conectividade | Bluetooth (BLE 5.3),<br />Wi‑Fi (para exportação de áudio em alta velocidade) |
| Armazenamento interno | 2 GB (armazena aprox. 250+ horas<br />de áudio compactado) |
| Duração da bateria | 14–18 horas de gravação contínua |
| Interação | Botão de ação, motor de vibração |
| Interface de carregamento | Magnética de 4 pinos |

#### Parâmetros de áudio

| Item | Parâmetro |
| --- | --- |
| Microfone | Microfones PDM duplos |
| Taxa de amostragem | Até 16 kHz |
| Direção de captação | Captação omnidirecional em 360 graus |
| Alcance de captação | Até 3 metros |
| Saída de áudio | Áudio mono com redução de ruído |
| Formato de áudio compactado | Opus mono, 32 kbps |
| Armazenamento de áudio | 2 GB armazenam aprox. 250+ horas de áudio compactado |
| Tempo de gravação contínua | 14–18 horas |

#### Parâmetros físicos

| Item | Parâmetro |
| --- | --- |
| Display | OLED de 0,5 polegada 88*48 |
| Armazenamento interno | 2 GB |
| Interação | Botão de ação, motor de vibração |
| Método de carregamento | Base de carregamento magnética |
| Interface de carregamento | Magnética de 4 pinos |
| Entrada de energia da base de carregamento | USB‑C |
| Formas de uso | Fixação magnética, presilha de lapela, cordão de pescoço |
| Observação sobre temperatura | Evite o uso em temperaturas extremas de -20°C a 60°C |

### Cenários de uso alvo

- Gravação de atendimento em varejo e revisão de treinamento
- Gravação de áudio de longa duração para reuniões, entrevistas e aulas
- Comunicação com clientes, visitas de vendas, inspeção de qualidade de serviço e outros cenários de negócios
- Fluxos de trabalho que precisam converter conteúdo de voz em texto estruturado e resumos

### Capacidades principais

- Microfones PDM duplos com captação em 360 graus
- Gravação independente
- 2 GB de armazenamento interno
- Display de status OLED de 0,5 polegada
- Feedback por vibração
- Conectividade BLE e Wi‑Fi
- Transcrição de áudio com IA
- Sumarização com IA e extração estruturada
- Múltiplas formas de uso
- Gerenciamento de arquivos pelo celular
- Suporte ao SenseCraft Voice App e serviço em nuvem
- Firmware de código aberto, aplicativo de demonstração e suporte a SDK

### Visão geral de hardware

reSpeaker Clip utiliza um formato portátil em estilo clipe. A parte superior integra um display OLED, microfones duplos e um Botão de Ação. A parte inferior e a base de carregamento incluem contatos magnéticos de carregamento. A base de carregamento é alimentada via USB‑C, facilitando a alternância entre carregamento em mesa e gravação vestível.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_hardware_cropped.jpg" alt="Visão geral de hardware do reSpeaker Clip" width={680} height="auto" /></p>

### Itens inclusos

<div style={{width: '100%', overflowX: 'auto'}}>
  <table style={{display: 'table', width: '680px', maxWidth: '100%', margin: '0 auto'}}>
    <thead>
      <tr>
        <th>Item</th>
        <th style={{textAlign: 'center'}}>Quantidade</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dispositivo reSpeaker Clip</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Dispositivo de gravação portátil</td>
      </tr>
      <tr>
        <td>Presilha magnética de lapela</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para fixar o dispositivo na roupa</td>
      </tr>
      <tr>
        <td>Acessório magnético</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para fixação magnética</td>
      </tr>
      <tr>
        <td>Base de carregamento</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para carregar o dispositivo</td>
      </tr>
      <tr>
        <td>Cabo Type‑C de 0,5 m</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para alimentar a base de carregamento</td>
      </tr>
      <tr>
        <td>Cordão de pescoço</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Para uso pendurado no pescoço</td>
      </tr>
    </tbody>
  </table>
</div>

## Início rápido

Esta seção apresenta o fluxo de trabalho básico desde a preparação do dispositivo e conexão do aplicativo até a gravação e a sumarização com IA. Para o primeiro uso, siga as etapas na ordem.

### Preparação do dispositivo

1. Coloque o reSpeaker Clip na base de carregamento.
2. Use um cabo Type‑C para conectar a base de carregamento a um adaptador de energia ou a uma porta USB de computador.
3. Aguarde o carregamento do dispositivo.
4. Pressione e segure o botão de energia para ligar o dispositivo.
5. Selecione a forma de uso com base no seu caso de uso.

### Formas de uso

reSpeaker Clip suporta três formas de uso: fixação magnética, presilha de lapela e cordão de pescoço. Escolha o método mais adequado para reuniões, entrevistas, treinamento de atendimento ou gravação em movimento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_wearing_methods.jpg" alt="Formas de uso do reSpeaker Clip" width={640} height="auto" /></p>

### SenseCraft Voice App

#### Baixar o aplicativo

Escaneie o QR code abaixo com o seu telefone ou abra a [página de download do SenseCraft Voice App](https://sensecraft-voice-download.seeed.cc/) para baixar e instalar o aplicativo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_download_qr.png" alt="QR code de download do SenseCraft Voice App" width={360} height="auto" /></p>

#### Conectar o dispositivo

1. Abra o SenseCraft Voice App e faça login.
2. Pressione e segure o botão lateral do dispositivo para ligá‑lo e aguarde até que o dispositivo esteja pronto para conectar.
3. Toque em **Add Device** na página inicial do aplicativo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_add_device.jpg" alt="Toque em Add Device" width={320} height="auto" /></p>

4. O aplicativo pesquisa automaticamente dispositivos próximos. Combine o identificador exibido no dispositivo com o nome do dispositivo mostrado no aplicativo, como `Clip EAE0`. Depois de confirmar que os nomes correspondem, toque em **Connect** para o dispositivo correspondente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_scan_device.jpg" alt="Selecione e conecte ao dispositivo reSpeaker Clip correspondente" width={320} height="auto" /></p>

5. Quando a solicitação de pareamento Bluetooth aparecer no seu telefone, confirme o nome novamente e toque em **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_pair_device.jpg" alt="Confirme a solicitação de pareamento Bluetooth" width={320} height="auto" /></p>

6. Após concluir o pareamento, siga as instruções do aplicativo para finalizar as demais configurações.

:::tip
Se o aplicativo não conseguir encontrar o dispositivo, primeiro confirme se o dispositivo está ligado e com bateria suficiente. Se a bateria estiver fraca, carregue o dispositivo antes de tentar parear novamente. Certifique-se também de que o dispositivo esteja em modo de pareamento Bluetooth, aproxime o telefone do dispositivo e faça uma nova varredura.
:::

### Operações de gravação

O reSpeaker Clip pode controlar rapidamente a gravação por meio do botão lateral.

- Pressione e segure o botão para iniciar ou parar a gravação.
- Durante a gravação, pressione rapidamente o botão uma vez para marcar o trecho atual como importante.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_recording_operation.png" alt="Operações de gravação do reSpeaker Clip" width={640} height="auto" /></p>

Durante a gravação, o dispositivo usa a tela e o feedback por vibração para indicar o status atual.

### Gerenciamento de arquivos

Após a gravação, você pode gerenciar arquivos de áudio no SenseCraft Voice App.

- Reproduzir gravações
- Cortar áudio
- Transferir arquivos via Wi-Fi ou BLE
- Exportar resultados de áudio ou texto
- Visualizar trechos importantes marcados

### Recursos de IA

O reSpeaker Clip pode funcionar com o SenseCraft Voice App e serviços em nuvem para processamento inteligente de áudio.

#### Confirmar configuração dos serviços STT / LLM

Antes de usar transcrição de áudio, resumo por IA ou busca de perguntas e respostas, abra a página **AI CONFIG** na parte inferior do aplicativo e confirme que tanto o **STT Service** quanto o **LLM Service** estão configurados. O serviço STT é usado para transcrição de áudio, enquanto o serviço LLM é usado para geração de resumos e processamento de perguntas e respostas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_ai_config_stt.jpg" alt="Confirmar configuração do STT Service" width={320} height="auto" /></p>

Se **STT Service** mostrar `Not configured`, toque na entrada de configuração à direita de STT Service para entrar na página STT Providers. Preencha Provider, Base URL, API Key e Language de acordo com o serviço de transcrição que você utiliza. Toque em **Test Connection** e, após o teste ser aprovado, toque em **Save Configuration**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_stt_provider_form.png" alt="Preencher e salvar a configuração do serviço STT" width={320} height="auto" /></p>

Se **LLM Service** mostrar `Not configured`, continue para a página LLM Providers e toque em **Add New Configuration** ou no botão `+` no canto superior direito para adicionar uma nova configuração de serviço.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_add.jpg" alt="Adicionar configuração do serviço LLM" width={320} height="auto" /></p>

Depois de preencher API Key, Base URL e Model Name, toque em **Test Connection**. Após o teste ser aprovado, toque em **Save Configuration**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_form.png" alt="Preencher e salvar a configuração do serviço LLM" width={320} height="auto" /></p>

#### Transcrição de áudio

Após enviar ou sincronizar uma gravação, toque na gravação que você deseja processar na lista de arquivos para entrar na página de detalhes da gravação. Se a gravação ainda não tiver transcrição, a página exibirá um botão **Transcribe & Summarize**. Toque nele para entrar na página de configurações de transcrição e resumo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_entry.png" alt="Abrir uma gravação e tocar em Transcribe & Summarize" width={320} height="auto" /></p>

#### Resumo por IA

Na página **Transcribe & Summarize**, você pode selecionar um modelo de resumo e confirmar Audio Language, STT Model e LLM Model. O modelo controla a estrutura da saída do resumo, como resumo de reunião, resumo de aula ou resumo de conversa diária. Após confirmar a configuração, toque em **Generate Now** para iniciar a transcrição e o resumo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_summary_options.png" alt="Selecionar um modelo e iniciar a transcrição e o resumo" width={320} height="auto" /></p>

#### Busca de perguntas e respostas por IA

Os usuários podem realizar buscas de perguntas e respostas com base na transcrição da gravação, como consultar tarefas, pontos no tempo, problemas de produto ou feedback de clientes mencionados em uma reunião.

### Gerenciamento do dispositivo

No aplicativo, você pode visualizar e gerenciar o status do dispositivo.

- Monitoramento de bateria
- Verificação da versão do firmware
- Atualização OTA
- Desvinculação do dispositivo
- Restauração de fábrica

### Guia de atualização de firmware

O reSpeaker Clip oferece suporte a dois métodos de atualização de firmware que não exigem um probe de depuração:

1. **Bluetooth OTA**: Envia o pacote de firmware para o dispositivo via BLE. Adequado para atualizações diárias.
2. **Gravação em modo de recuperação**: Coloca o dispositivo em modo de recuperação serial USB e transfere o pacote de firmware por meio de uma porta serial USB.

Ambos os métodos usam o Simple Management Protocol (SMP) mcumgr do MCUboot. O Bluetooth OTA usa transporte BLE, enquanto a gravação em modo de recuperação usa transporte serial USB CDC-ACM. O reSpeaker Clip não usa fluxos nativos de USB DFU como `dfu-util`.

#### Tipos de arquivos de firmware

Os lançamentos de firmware podem incluir os seguintes arquivos:

| Tipo de arquivo | Descrição | Uso |
| --- | --- | --- |
| `clip-<version>-*-single.*` | Pacote de atualização de partição de aplicativo único, adequado para atualizar apenas a partição Clip SDK / app | USB serial DFU |
| `clip-<version>-*-signed.bin` | Imagem de firmware de aplicativo assinada | USB serial DFU, BLE OTA |
| `clip-<version>-*-ota.zip` | Pacote de atualização multi-imagem, geralmente incluindo app e núcleo de rede | USB serial DFU, BLE OTA |
| `clip-<version>-*-merged.hex` | Imagem completa incluindo MCUboot, app e núcleo de rede | Requer um depurador como J-Link |
| `clip-<version>-*-merged_CPUNET.hex` | Apenas imagem do núcleo de rede | Requer um depurador como J-Link |

Para atualizações regulares de Bluetooth OTA, use primeiro `-ota.zip`. Para gravação para desenvolvedores por meio do modo de recuperação, dê preferência a pacotes de firmware com o sufixo `single`. Alterações típicas do Clip SDK afetam apenas a partição do aplicativo e não exigem atualização do núcleo de rede. `-merged.hex` e `-merged_CPUNET.hex` são usados principalmente para desenvolvimento, produção ou gravação baseada em depurador.

#### Método 1: Bluetooth OTA

O Bluetooth OTA é adequado quando o dispositivo consegue inicializar normalmente e pode ser descoberto por um telefone via BLE. Recomenda-se usar o aplicativo móvel nRF Connect para OTA. A ferramenta BLE no nRF Connect for Desktop geralmente requer um adaptador BLE Nordic adicional.

Fluxo de trabalho básico:

1. Prepare o pacote de firmware `clip-<version>-*-ota.zip`.
2. Envie o pacote de firmware para o seu telefone.
3. Abra o nRF Connect no seu telefone.
4. Procure e conecte-se ao reSpeaker Clip via BLE.
5. Após a conexão, confirme que o **SMP Service** está visível.
6. Toque no ícone **DFU** no canto superior direito e selecione o pacote de firmware `-ota.zip` ou `-signed.bin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_dfu_button.png" alt="Toque no botão DFU no nRF Connect para celular" width={320} height="auto" /></p>

7. Mantenha o modo padrão **Test and Confirm** e toque em **OK** para iniciar a atualização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_mode.png" alt="Selecionar Test and Confirm para Bluetooth OTA" width={320} height="auto" /></p>

8. Aguarde a conclusão da transferência, verificação e reinicialização automática do dispositivo.
9. Reconecte-se ao dispositivo e verifique a versão do firmware.

:::tip
Durante a OTA, mantenha o telefone próximo ao dispositivo, não envie o nRF Connect para segundo plano e certifique-se de que o dispositivo não esteja conectado ao SenseCraft Voice App ao mesmo tempo.
:::

#### Método 2: Gravação em modo de recuperação

O modo de recuperação é um modo de gravação USB voltado para desenvolvedores. Ele transfere firmware por meio de uma porta serial USB CDC-ACM usando o protocolo MCUboot / mcumgr SMP. Recomenda-se usar o fluxo de trabalho de linha de comando `nrfutil mcu-manager`.

##### Entrar no modo de recuperação

O modo de recuperação fornece capacidade de gravação por meio da recuperação serial USB do MCUboot. Para entrar nele:

1. Confirme que o cabo USB oferece suporte a transferência de dados.
2. Conecte o cabo USB à base de carregamento.
3. Coloque o reSpeaker Clip na base de carregamento e gire levemente o dispositivo para que os contatos de carregamento fiquem firmemente conectados.
4. Depois que a tela mostrar o ícone de USB / carregamento, pressione e segure o **Action Button** até a tela mostrar **Recovery Mode**.
5. Quando **Recovery Mode** for exibido, o dispositivo terá entrado com sucesso no modo de recuperação serial USB e deverá ser enumerado como uma porta serial:
   - Windows: `COMx`
   - macOS: `/dev/cu.usbmodem*`
   - Linux: `/dev/ttyACM0`

No Windows, o dispositivo pode enumerar várias portas seriais virtuais, por exemplo:

```text
Product         reSpeaker Clip DFU
Ports           COM10, vcom: 0
                COM11, vcom: 1
Traits          serialPorts, usb
```

Para gravação, tente primeiro a porta serial correspondente a `vcom: 1`, como `COM11` no exemplo acima. Se a conexão ou o envio falhar, tente a outra porta serial.

:::note
O modo de recuperação requer detecção de USB/VBUS. Antes de entrar nesse modo, certifique-se de que os contatos da base de carregamento estejam firmemente conectados. Se a tela não mostrar um ícone de USB / carregamento, o dispositivo pode estar fisicamente colocado na base, mas não estar realmente conectado ao USB.
:::

##### Gravar com nrfutil mcu-manager

nrfutil é a ferramenta de linha de comando da Nordic. Use a versão 8.x ou posterior e instale o plugin `mcu-manager`.

As versões mais recentes do nrfutil usam um mecanismo de plugin de subcomando. Para o primeiro uso, instale os subcomandos `device` e `mcu-manager`:

```bash
nrfutil install device
nrfutil install mcu-manager
```

Se `nrfutil device list` informar `nrfutil command device not found`, o subcomando `device` não foi instalado. Execute primeiro `nrfutil install device`.

Liste os dispositivos seriais atuais:

```bash
nrfutil device list
```

Envie o firmware da partição de aplicação. Dê preferência ao pacote de firmware com o sufixo `single`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-single.zip \
    --serial-port COMx
```

Se o pacote de release fornecer uma imagem de aplicação assinada, você também pode enviar `-signed.bin`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-signed.bin \
    --serial-port COMx
```

Para uma atualização completa de app + núcleo de rede, envie `-ota.zip`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-ota.zip \
    --serial-port COMx
```

Após o envio, reinicie o dispositivo para aplicar o novo firmware:

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

Substitua `COMx` pela porta serial real exibida no Gerenciador de Dispositivos do Windows ou em `nrfutil device list`. Se o dispositivo exibir múltiplas portas `vcom`, tente primeiro a porta correspondente a `vcom: 1`. Se a conexão ou o envio falhar, mude para a outra porta e tente novamente. No macOS / Linux, use `/dev/cu.usbmodem*` ou `/dev/ttyACM0`.

:::tip
Se o progresso de gravação permanecer em 100% e a ferramenta não sair automaticamente, não desconecte e reconecte o dispositivo repetidamente. Execute:

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

Em seguida, verifique a versão do firmware após a reinicialização do dispositivo.
:::

#### Mais Métodos de Atualização de Firmware

Para métodos de gravação baseados em depurador ou mais métodos de solução de problemas do modo de Recuperação, consulte o Guia Avançado de Atualização de Firmware do reSpeaker Clip (em breve).

## Guia de Desenvolvimento

Para cenários de integração de desenvolvedores e empresas, o reSpeaker Clip pode ser estendido por meio do SDK de firmware, SDK de aplicação e protocolos de comunicação.

### SDK de Firmware

O firmware do reSpeaker Clip é construído sobre nRF Connect SDK / Zephyr RTOS e roda na plataforma nRF5340 + nRF7002. Não é um exemplo único de driver, mas um framework do lado do dispositivo organizado em torno de captura de áudio, máquina de estados, comunicação BLE / Wi-Fi, gerenciamento de arquivos, atualização de firmware e gerenciamento de baixo consumo.

Arquitetura do sistema de firmware:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_system_architecture.png" alt="reSpeaker Clip firmware system architecture" width={900} height="auto" /></p>

Do ponto de vista de desenvolvimento, o firmware é dividido principalmente nas seguintes camadas:

- **Camada de Aplicação**: Lida com despacho de eventos, AT Server, processamento de botões e estados de interação com o usuário.
- **Camada de Serviço**: Lida com abstração de transporte BLE / UDP, transferência de arquivos, gerenciamento de configuração e armazenamento NVS.
- **Camada de Processamento**: Lida com captura de áudio, redução de ruído / processamento de faixa dinâmica SpeexDSP e codificação Opus.
- **Camada de Abstração de Hardware**: Encapsula microfone PDM, SD FAT32, BLE, Wi-Fi, PMIC e outros recursos de hardware.
- **Kernel Zephyr RTOS**: Fornece primitivas de kernel como `k_msgq`, `k_sem`, `k_mutex`, `k_thread` e `k_mem_slab`.

Um fluxo de trabalho típico de desenvolvimento é: configurar o ambiente Zephyr / nRF Connect SDK, obter o projeto de firmware do reSpeaker Clip, confirmar o alvo da placa e os arquivos de configuração, compilar e gravar o firmware, verificar os logs seriais e, por fim, verificar gravação, sincronização de arquivos e atualização de firmware por meio do SenseCraft Voice App ou protocolos BLE / Wi-Fi.

Para mais detalhes sobre arquitetura de firmware, configuração de ambiente, compilação, gravação e desenvolvimento secundário, consulte o Guia de Desenvolvimento de Firmware do reSpeaker Clip (em breve).

### SDK de Aplicação

O SDK de aplicação pode ser usado para integração com aplicativos móveis ou aplicativos do lado do host.

| Plataforma | Linguagem | Status |
| --- | --- | --- |
| iOS | Swift | Em breve |
| Android | Kotlin | Em breve |
| Desktop / Servidor | Python | [Disponível](/pt-br/respeaker_clip_basic_sdk_guide) |

## Aplicações

O reSpeaker Clip pode ser usado em cenários de negócios To B e integrado a toolchains corporativas, formando um fluxo de trabalho completo desde a captura e transcrição de áudio até a sumarização inteligente e o arquivamento em sistemas de negócios.

### Treinamento de Atendimento no Varejo

Funcionários de vendas e atendimento no varejo podem usar o reSpeaker Clip para gravar conversas com clientes. Após a conversa, a IA pode gerar resumos das necessidades dos clientes e listas de tarefas acionáveis a partir da gravação, ajudando as equipes a melhorar a qualidade do serviço, a eficiência de follow-up e as taxas de conversão.

### Atas de Reunião

Em cenários de reunião, a captação omnidirecional de 360 graus do reSpeaker Clip pode cobrir discussões com várias pessoas. Os usuários podem marcar momentos importantes com o botão durante a gravação e gerar automaticamente atas estruturadas, destaques e itens de ação após a reunião.

### Entrevistas e Pesquisas

Para entrevistas com usuários, pesquisas de mercado e visitas a clientes, o reSpeaker Clip ajuda a capturar dados de voz brutos e organizar gravações em materiais de texto pesquisáveis e revisáveis.

### Customização para Empresas

As empresas podem usar o SDK aberto para integrar o reSpeaker Clip com sistemas internos de escritório, CRM, bases de conhecimento, ferramentas de gerenciamento de projetos ou LLMs implantados de forma privada. Organizações com requisitos de conformidade de dados também podem construir assistentes de voz com IA dedicados e fluxos de trabalho privados de análise de voz.

## Perguntas e Respostas

### Não Liga / Não Carrega

Se o dispositivo não ligar ou não carregar, verifique o seguinte:

- Confirme se o dispositivo está corretamente colocado na base de carregamento e se os contatos magnéticos não estão desalinhados.
- Verifique se o cabo USB-C e o adaptador de energia funcionam corretamente.
- Limpe os contatos magnéticos de carregamento na parte inferior do dispositivo e na base de carregamento para evitar que poeira ou objetos estranhos afetem o contato.
- Carregue por 10 minutos e, em seguida, pressione e segure o botão liga/desliga novamente.
- Se o dispositivo ainda não responder, registre o status do dispositivo e entre em contato com o suporte técnico.

### Falha no Pareamento Bluetooth

Se o telefone não conseguir parear com o reSpeaker Clip, tente o seguinte:

- Confirme se o dispositivo está ligado e não está conectado a outro telefone.
- Ative as permissões de Bluetooth no seu telefone e permita que o SenseCraft Voice App use Bluetooth.
- Aproxime o telefone do dispositivo e faça a varredura novamente.
- Exclua registros antigos de pareamento do reSpeaker Clip na lista de Bluetooth do sistema do telefone e, em seguida, faça o pareamento novamente.
- Reinicie o dispositivo e o aplicativo e tente novamente.

### Transferência de Arquivo de Gravação Interrompida

Se uma transferência de arquivo de gravação for interrompida, verifique o seguinte:

- Mantenha o telefone e o dispositivo próximos um do outro.
- Confirme se o dispositivo tem bateria suficiente.
- Verifique se a conectividade Wi-Fi ou BLE está estável.
- Mantenha o aplicativo em execução em primeiro plano.
- Reconecte o dispositivo e transfira o arquivo novamente. Para arquivos grandes, use um ambiente Wi-Fi estável.

### Falha na Configuração de Wi-Fi

Se o dispositivo não conseguir concluir a configuração de Wi-Fi, confirme o seguinte:

- O nome e a senha do Wi-Fi estão corretos.
- O roteador não bloqueia novos dispositivos.
- O telefone e o dispositivo estão próximos do roteador.
- A rede atual consegue acessar a internet normalmente.
- Se você estiver usando uma rede corporativa ou uma rede pública que exija autenticação via web, mude para uma rede doméstica normal ou hotspot do telefone para teste.

### O App Não Encontra o Dispositivo

Se o SenseCraft Voice App não conseguir encontrar o dispositivo, tente o seguinte:

- Confirme se o dispositivo está ligado e pronto para conectar.
- Confirme se as permissões de Bluetooth, localização ou dispositivos próximos foram concedidas ao aplicativo.
- Aproxime o telefone do dispositivo e faça a varredura novamente.
- Feche e reabra o aplicativo.
- Reinicie o reSpeaker Clip e adicione o dispositivo novamente.

### Falha na Atualização de Firmware

Se a atualização OTA ou de firmware falhar, tente o seguinte:

- Certifique-se de que o dispositivo tenha bateria suficiente e não o desligue durante a atualização.
- Mantenha o telefone, o dispositivo e a conexão de rede estáveis.
- Não feche o aplicativo nem mude de rede durante a atualização.
- Se o dispositivo ainda conseguir inicializar normalmente após a falha na atualização, abra o aplicativo e inicie a atualização novamente.
- Se o dispositivo não conseguir inicializar normalmente, siga a documentação posterior de modo de recuperação ou gravação de firmware e entre em contato com o suporte técnico.

## Recursos

| Recurso | Link |
| --- | --- |
| Página do Produto | [reSpeaker Clip Wearable AI Recorder](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html) |
| Download do SenseCraft Voice App | [Página de Download](https://sensecraft-voice-download.seeed.cc/) |
| Download de Firmware | Em breve |
| Repositório do SDK | Em breve |
| Manual do Usuário | <a href="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_user_manual.pdf" target="_blank" rel="noopener noreferrer">Manual do Usuário do reSpeaker Clip</a> |
| Datasheet | Em breve |
| Desenho Mecânico | Em breve |

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
