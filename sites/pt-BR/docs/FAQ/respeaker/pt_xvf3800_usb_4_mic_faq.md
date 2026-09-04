---
title: reSpeaker XVF3800 USB 4-Mic Array FAQ
description: Perguntas frequentes sobre configuração, conectividade USB, firmware, áudio e ajuste do reSpeaker XVF3800 USB 4-Mic Array.
slug: /respeaker_xvf3800_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker XVF3800 FAQ
  - reSpeaker XVF3800 troubleshooting
  - reSpeaker XVF3800 firmware
---

<div class="respeaker-faq-page">

# reSpeaker XVF3800 USB 4-Mic Array FAQ

Esta página contém respostas verificadas para o reSpeaker XVF3800 USB 4-Mic Array. Cada resposta indica a variante do produto e o modo de firmware ao qual se aplica (USB ou I2S), juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme a variante exata do produto e o modo de firmware (USB ou I2S) em que o dispositivo está sendo executado.
- Verifique a versão atual do firmware antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-08-31; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois dessa data.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Documentação e uso {#documentation-and-usage}

### Como abro a carcaça do XVF3800 sem danificá-la? {#open-casing-safely}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array fornecido com o gabinete de encaixe por clipe

**Última verificação:** 2026-09-01

Desligue e desconecte o dispositivo primeiro e, em seguida, levante suavemente ao longo de uma borda do gabinete com a unha. Solte um dos três clipes de travamento antes de trabalhar nos demais; não force a tampa nem use uma ferramenta metálica afiada.

**Pré-requisitos:**

- O dispositivo está totalmente desconectado do USB, da fiação do alto-falante e de todas as outras fontes de alimentação
- Uma superfície de trabalho limpa onde a placa e o gabinete não serão arranhados

1. Desconecte todos os cabos e coloque o gabinete em uma superfície limpa.
2. Use a unha para levantar suavemente ao longo de uma borda até que o primeiro clipe de travamento se solte.
3. Continue ao longo da borda e solte os outros dois clipes sem torcer a tampa.
4. Pare se um clipe não se mover com pressão suave; reposicione diretamente no clipe em vez de forçar o gabinete.

**Critérios de sucesso:**

- A tampa se separa com todos os três clipes intactos
- A PCB, os conectores e o gabinete não apresentam danos de ferramenta ou alavanca

**Notas:**

- A Wiki oficial identifica três clipes de travamento e recomenda levantar as bordas suavemente com as unhas.
- Abrir a carcaça é algo separado de qualquer modificação de PCB não suportada.

**Referências:**

- [Orientações de solução de problemas da carcaça do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#how-can-i-open-the-casing-without-damaging-it)

### Onde posso obter arquivos mecânicos do XVF3800 para um projeto de gabinete? {#mechanical-design-files}

**Aplica-se a:** Integração mecânica do ReSpeaker XVF3800 USB 4-Mic Array e de seu gabinete publicado

**Última verificação:** 2026-09-01

Use a seção Resources da Wiki oficial. Ela publica um desenho mecânico 2D, um modelo 3D STEP em nível de placa e arquivos STEP separados para as metades superior e inferior do gabinete. Estes são as referências mecânicas públicas; a página não publica uma lista de materiais (BOM) de componentes nem garante que todos os códigos de peça de componentes estejam incluídos.

**Pré-requisitos:**

- Um visualizador de PDF para o desenho 2D ou um software CAD compatível com STEP para os arquivos 3D
- Confirmação da variante exata de placa e gabinete que está sendo integrada

1. Abra a seção Resources da página atual de primeiros passos do XVF3800.
2. Baixe o desenho mecânico 2D e os arquivos STEP relevantes da placa ou do gabinete.
3. Importe os arquivos na ferramenta CAD e verifique furos de fixação, folgas de conectores e metades do gabinete em relação à variante de produto pretendida.
4. Solicite esclarecimentos antes da liberação se o projeto depender de um código de peça de componente ou tolerância que esteja ausente dos arquivos públicos.

**Critérios de sucesso:**

- O arquivo 2D oficial ou o arquivo STEP é aberto no visualizador ou ferramenta CAD selecionado
- O projeto do gabinete é baseado apenas em dimensões realmente presentes no arquivo publicado

**Notas:**

- A seção pública Resources é a referência oficial para os arquivos 2D e 3D disponíveis.
- Não declare códigos de peça de componentes não publicados, tolerâncias acústicas ou limites de distância entre placa e tampa.

**Referências:**

- [Recursos mecânicos oficiais do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#resources)

### Onde está a lista de comandos I2C do XVF3800 e como verifico o controle I2C? {#i2c-command-reference}

**Aplica-se a:** ReSpeaker XVF3800 conectado a XIAO ESP32S3 ou outro host I2C embarcado compatível

**Última verificação:** 2026-09-01

Use a referência oficial de comandos I2C do XVF3800. O host é o mestre I2C, o XVF3800 é o escravo no endereço de 7 bits `0x2C`, e leituras usam um byte de comando com o bit 7 ativado, seguido por uma resposta cujo primeiro byte é o status. Comece com a leitura documentada de `VERSION` antes de enviar gravações de ajuste ou roteamento.

**Pré-requisitos:**

- Firmware e fiação para o modo de operação I2S ou embarcado pretendido
- Um mestre I2C configurado para os pinos SDA e SCL documentados da placa
- A referência oficial atual de comandos I2C

1. Configure o host para o endereço I2C de 7 bits do XVF3800 `0x2C`.
2. Use o quadro de escrita documentado `[resid] [cmd] [write_byte_num] [data...]`; para leituras, envie `[resid] [cmd | 0x80] [read_len + 1]` antes de solicitar a resposta.
3. Implemente o exemplo `VERSION` com ID de recurso 48, ID de comando 0 e um payload de três bytes.
4. Trate o status de resposta `0` como sucesso e o status `64` como tentar novamente; não interprete os dados do payload como válidos quando o status não for bem-sucedido.
5. Depois que `VERSION` funcionar, copie apenas o ID de recurso, o ID de comando, o tipo, a contagem de valores e a direção do comando necessário a partir da tabela de comandos atual.

**Critérios de sucesso:**

- A transação I2C retorna status 0 e uma versão de firmware de três bytes
- A versão informada é plausível para a imagem de firmware instalada no XVF3800

**Notas:**

- I2C é o plano de controle; o áudio PCM usa I2S no modo embarcado e não é transportado como tráfego de parâmetros I2C.
- A contagem de bytes de parâmetros, o tipo e a faixa de valores são específicos de cada comando e devem vir da tabela oficial atual.

**Referências:**

- [Referência oficial de comandos I2C do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf_3800_i2c_list/)
- [Primeiros passos com XVF3800 e XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_getting_started/)

## Conectividade e detecção {#connectivity-and-detection}

### Por que meu XVF3800 não é detectado via USB no Raspberry Pi 5 ou Linux? {#usb-not-detected-pi5-linux}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array conectado a Raspberry Pi 5 ou outro host Linux

**Última verificação:** 2026-08-31

Primeiro verifique o cabo de dados, a porta USB-C XMOS e a enumeração do host. Se o dispositivo estiver executando firmware I2S ou se o firmware normal não responder mais, entre no Safe Mode e grave uma imagem oficial de firmware USB por meio de USB DFU.

**Pré-requisitos:**

- Um cabo de dados USB comprovadamente funcional conectado à porta USB-C XMOS próxima ao conector de 3,5 mm
- dfu-util instalado no host Linux
- O repositório completo de firmware oficial baixado ou clonado

1. Execute `lsusb` e `arecord -l`. Se nenhum dos comandos mostrar o dispositivo, teste com um cabo de dados comprovadamente funcional e uma porta USB direta do host antes de alterar o firmware.
2. Desligue o XVF3800. Mantenha pressionado o botão Mute enquanto reconecta a alimentação. Um LED vermelho piscando confirma o Safe Mode.
3. Execute `sudo dfu-util -l`. O Safe Mode deve expor as partições DFU Upgrade e Factory.
4. Grave uma imagem USB oficial com `sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware.bin`.
5. Após a reinicialização automática, repita `lsusb` e `arecord -l` e, em seguida, leia `VERSION` com a ferramenta oficial de controle do host.

**Critérios de sucesso:**

- O Linux enumera o XVF3800 como um dispositivo USB e o lista como um dispositivo de captura ALSA
- A ferramenta oficial de controle do host consegue ler a versão do firmware

**Notas:**

- O firmware I2S é destinado a um host I2S e não fornece enumeração normal de áudio USB.
- Se o Safe Mode também não aparecer em `dfu-util -l`, continue isolando cabo, alimentação e porta do host; não presuma que a recuperação de firmware pode corrigir um dispositivo que nunca é enumerado.

**Referências:**

- [Primeiros passos com reSpeaker XVF3800 USB Mic Array](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/)
- [Guia oficial de DFU do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

## Firmware e software {#firmware-and-software}

### Como recupero um XVF3800 depois de gravar o firmware errado? {#recover-wrong-firmware}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array que não inicializa mais ou não é mais enumerado normalmente após uma alteração de firmware ou de configuração salva

**Última verificação:** 2026-08-31

Use o Safe Mode de fábrica e, em seguida, regrave a imagem oficial correta por meio do método de atualização suportado por esse modo. Para recuperação de volta ao áudio USB, use USB DFU a partir do Safe Mode.

**Pré-requisitos:**

- Um cabo de dados USB comprovadamente funcional conectado à porta USB-C XMOS próxima ao conector de 3,5 mm
- dfu-util instalado
- A imagem oficial correta de firmware para o modo de operação USB ou I2S pretendido

1. Desconecte completamente a alimentação.
2. Mantenha pressionado o botão Mute e reconecte a alimentação. Continue segurando até o LED vermelho piscar; isso indica que o Safe Mode de fábrica está ativo.
3. Execute `dfu-util -l` no Windows ou macOS, ou `sudo dfu-util -l` no Linux. Confirme que as interfaces DFU Upgrade e DFU Factory estão presentes.
4. Para restaurar a operação USB, grave a imagem USB oficial selecionada com `dfu-util -R -e -a 1 -D /path/to/firmware.bin` (use `sudo` no Linux).
5. Deixe a placa reiniciar e, em seguida, verifique a enumeração de áudio USB e leia `VERSION` com a ferramenta oficial de controle do host.

**Critérios de sucesso:**

- A placa sai do Safe Mode e é enumerada em seu modo de operação pretendido
- A versão de firmware informada corresponde à imagem que foi gravada

**Notas:**

- O firmware USB oferece suporte a USB DFU; o firmware I2S oferece suporte a I2C DFU; o Safe Mode de fábrica oferece suporte a ambos.
- Baixe o repositório oficial completo ou faça o clone. Não salve uma página HTML do GitHub como um binário de firmware.

**Referências:**

- [Guia de Safe Mode e atualização de firmware do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/)
- [Repositório oficial de firmware do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)

### Por que `LED_EFFECT 5` retorna um erro de fora da faixa no XVF3800? {#led-effect-5-out-of-range}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array usando firmware USB e a ferramenta oficial de controle do host em Python

**Última verificação:** 2026-08-31

O modo de anel (`LED_EFFECT = 5`) e `LED_RING_COLOR` exigem firmware USB v2.0.7 ou posterior, além de um mapa de comandos de controle de host atual. Firmwares antigos ou uma ferramenta antiga só reconhecem os efeitos de 0 a 4.

**Pré-requisitos:**

- Firmware USB v2.0.7 ou posterior; v2.1.0 é a versão atual do changelog na data da verificação
- O `python_control/xvf_host.py` atual do repositório oficial

1. Execute `python xvf_host.py VERSION` e confirme que o firmware USB é v2.0.7 ou posterior.
2. Se for mais antigo, grave uma imagem USB oficial atual e reinicie o dispositivo.
3. Defina todas as 12 cores do anel com `python xvf_host.py LED_RING_COLOR --values` seguido de exatamente 12 valores de cor.
4. Ative o modo de anel com `python xvf_host.py LED_EFFECT --values 5`.

**Critérios de sucesso:**

- A ferramenta aceita o valor de efeito 5 sem erro de fora de faixa
- Todos os 12 LEDs exibem as cores de anel fornecidas

**Notas:**

- `LED_RING_COLOR` exige exatamente 12 valores, um por LED.
- Atualizar apenas o script não adiciona o comando a um firmware antigo; o firmware e o mapa de comandos devem oferecer suporte a ele.

**Referências:**

- [Registro de alterações do firmware USB XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Ferramenta oficial de controle via Python para o host XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/xvf_host.py)
- [Guia oficial de uso do controle de host](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/readme.md)

### Preciso entrar em Modo de Segurança antes de atualizar o firmware USB do XVF3800? {#usb-dfu-without-safe-mode}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array sendo atualizado a partir de um firmware USB responsivo em Windows, macOS ou Linux

**Última verificação:** 2026-09-01

Não, não quando o firmware USB em execução expõe a interface normal DFU Upgrade. Execute `dfu-util -l`; se ele listar o alvo XVF3800 DFU Upgrade, grave diretamente a imagem USB oficial selecionada. Use o Modo de Segurança quando o dispositivo estiver executando firmware I2S, quando o firmware normal não responder ou quando a recuperação for necessária por qualquer outro motivo.

**Pré-requisitos:**

- Um cabo de dados em bom estado conectado à porta XMOS USB-C próxima ao conector de 3,5 mm
- `dfu-util` instalado e com permissão para acessar o dispositivo
- O repositório oficial completo e a imagem USB exata selecionada para o perfil necessário

1. Execute `dfu-util -l` (`sudo dfu-util -l` no Linux quando necessário).
2. Se `reSpeaker DFU Upgrade` aparecer como configuração alternativa 1, grave com `dfu-util -R -e -a 1 -D /path/to/official_usb_firmware.bin`.
3. Aguarde a reinicialização automática causada por `-R`, depois execute `dfu-util -l` e o comando oficial `VERSION` para verificar o dispositivo.
4. Se a interface DFU Upgrade estiver ausente porque o firmware I2S está ativo ou o firmware normal não responde, pare e siga o procedimento de recuperação em Modo de Segurança publicado.

**Critérios de sucesso:**

- A transferência DFU é concluída sem erro e a placa reinicia
- O dispositivo relata a versão de firmware pretendida e é enumerado em seu perfil USB pretendido

**Notas:**

- O Modo de Segurança é um caminho de recuperação, não uma etapa obrigatória antes de toda atualização de firmware USB responsivo.
- O firmware I2S não expõe DFU USB normal; o Modo de Segurança de fábrica oferece suporte tanto a DFU USB quanto a DFU I2C.
- Não use a operação 'Salvar como' do navegador em uma página de arquivo do GitHub; faça clone ou baixe o repositório completo.

**Referências:**

- [Guia oficial de DFU do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)
- [Guia de Modo de Segurança e atualização de firmware do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#modo-de-segurança)
- [Diretório atual de firmware USB do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

## Problemas de áudio {#audio-issues}

### Por que algumas entradas estão silenciosas com o firmware USB de seis canais do XVF3800? {#six-channel-silent-inputs}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array executando um perfil oficial de firmware USB de seis canais em Linux

**Última verificação:** 2026-09-01

No Linux, os seis controles de captura podem estar em mudo ou definidos como zero mesmo quando o firmware está funcionando. Use a imagem USB atual de seis canais, ative todos os comutadores de captura no ALSA, defina níveis de captura diferentes de zero e salve o estado do mixer. O changelog atual do firmware define os canais USB de 3 a 6 como roteáveis de forma independente e registra o mapeamento de microfones brutos do perfil antigo de seis canais.

**Pré-requisitos:**

- O repositório oficial atual e uma imagem USB de seis canais selecionada deliberadamente
- Utilitários ALSA incluindo `arecord`, `amixer` e `alsactl`
- O número real de placa ALSA atribuído ao XVF3800

1. Execute `arecord -l` e registre o número de placa ALSA do XVF3800 como `N`.
2. Execute `amixer -c N cset numid=8 on,on,on,on,on,on` para ativar todos os seis comutadores de captura.
3. Execute `amixer -c N cset numid=10 60,60,60,60,60,60`, ajustando o nível diferente de zero se necessário.
4. Execute `sudo alsactl store N`, depois faça uma nova gravação de teste de seis canais e inspecione cada canal.
5. Se o silêncio voltar após um reset de USB, verifique se a imagem gravada é atual; o changelog oficial registra correções de recuperação após reset de USB na v2.0.10 e imagens mais recentes substituem essa versão.

**Critérios de sucesso:**

- Uma nova gravação de seis canais contém amostras diferentes de zero em cada canal habilitado que tenha uma fonte ativa
- Os controles do mixer permanecem habilitados após reconectar ou reiniciar o host Linux

**Notas:**

- A numeração de canais pode ser mostrada como números de canal baseados em 1 ou índices de software baseados em 0; declare a convenção ao inspecionar uma gravação.
- Não use a alegação desatualizada de que um perfil padrão de seis canais expõe um canal de referência de reprodução: o changelog oficial atual documenta sinais de microfone bruto nos canais 3 a 6 do perfil antigo de seis canais.
- A FAQ não prescreve valores personalizados de roteamento `AUDIO_MGR_OP_CH3` a `AUDIO_MGR_OP_CH6` porque o changelog público anuncia os comandos, mas não publica uma receita completa de valores de origem.

**Referências:**

- [Solução de problemas de seis canais do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#por-que-alguns-canais-estão-silenciosos-com-o-firmware-de-6-canais-do-xvf3800)
- [Registro de alterações atual do firmware USB XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Diretório atual de firmware USB do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

### Como aumento o volume de reprodução baixo do XVF3800 no Linux? {#linux-speaker-volume-low}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array usado como dispositivo de reprodução em um host Linux baseado em ALSA

**Última verificação:** 2026-09-01

Selecione a placa de som XVF3800 em `alsamixer`, aumente o controle `PCM-1` para 100% e salve o estado do ALSA antes de desconectar o dispositivo. Se a saída ainda estiver muito baixa, verifique primeiro o dispositivo de saída externo e, em seguida, use o controle PulseAudio documentado como um ajuste opcional no lado do host.

**Pré-requisitos:**

- Um fone de ouvido externo, caixa de som ativa ou alto-falante compatível conectado a uma saída documentada do XVF3800
- Utilitários de mixer ALSA instalados
- O XVF3800 visível como uma placa de som de reprodução no Linux

1. Execute `alsamixer`, pressione F6 e selecione a placa de som XVF3800.
2. Navegue até `PCM-1` e aumente-o para 100% enquanto reproduz uma amostra de teste conhecida.
3. Pressione Esc, depois execute `sudo alsactl store` antes de desconectar o XVF3800.
4. Se a saída continuar baixa, verifique o dispositivo de saída conectado e o cabo; opcionalmente instale `pavucontrol` e inspecione o nível de reprodução do host.

**Critérios de sucesso:**

- A amostra de teste conhecida é audível em um nível adequado através do dispositivo de saída externo
- O nível ALSA `PCM-1` permanece definido após o host ou o dispositivo ser reiniciado

**Notas:**

- Este procedimento é para reprodução USB no Linux; não é um procedimento de ajuste de registradores de codec I2S.
- Aumentar o volume de software além de 100% pode distorcer o áudio; use isso somente depois de confirmar o mixer normal e o caminho de hardware.

**Referências:**

- [Solução de problemas de volume de alto-falante no Linux para o XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#a-reprodução-pelo-alto-falante-não-é-alta-o-suficiente-)

## Problemas de hardware {#hardware-issues}

### O XVF3800 tem alto-falante embutido? {#external-speaker-required}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array, com ou sem XIAO ESP32S3

**Última verificação:** 2026-09-01

Não. O XVF3800 é um array de microfones e dispositivo de processamento de áudio; ele requer um dispositivo de saída externo. Use o conector de fone de ouvido de 3,5 mm para fones de ouvido ou caixas de som ativas, ou a interface de alto-falante JST onboard para um alto-falante amplificado compatível.

**Pré-requisitos:**

- Um fone de ouvido externo, caixa de som ativa ou alto-falante compatível para a saída JST documentada
- Uma fonte de reprodução configurada para o modo de operação USB ou I2S ativo

1. Escolha a saída de fone de ouvido de 3,5 mm ou a interface de alto-falante JST onboard mostrada na visão geral oficial de hardware.
2. Conecte o dispositivo de saída externo antes de iniciar a reprodução.
3. Reproduza uma amostra de áudio conhecida e selecione a saída XVF3800 no host quando o modo USB estiver em uso.

**Critérios de sucesso:**

- O áudio é ouvido a partir do dispositivo de saída externo conectado
- Não se espera som algum apenas do gabinete do array de microfones

**Notas:**

- A visão geral pública de hardware documenta um conector de fone de ouvido de 3,5 mm e uma interface de alto-falante JST, mas nenhum alto-falante embutido.
- Não deduza um pinout específico de conector ou modelo de alto-falante de terceiros além da documentação oficial de hardware atual.

**Referências:**

- [Primeiros passos com o ReSpeaker XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/)

## Produto e negócios {#product-and-business}

### O ReSpeaker XVF3800 USB 4-Mic Array oferece suporte a 48 kHz via USB? {#usb-48-khz-support}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array usado para captura USB em Windows, Linux ou macOS

**Última verificação:** 2026-08-31

Sim. Use a imagem oficial dedicada `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin`. Seu nome de arquivo identifica o perfil USB pretendido de 48 kHz e dois canais; não deduza suporte a 48 kHz a partir da imagem genérica v2.1.0.

**Pré-requisitos:**

- O repositório completo de firmware oficial atual, incluindo a imagem exata `_v2.1.0_48k2ch.bin`
- Uma conexão de dados USB conhecida como funcional para a porta XMOS USB-C e `dfu-util` instalado no host
- Um aplicativo de gravação que possa exibir e selecionar os formatos expostos pelo dispositivo USB ativo

1. Clone ou baixe o repositório oficial completo e selecione `xmos_firmwares/usb/respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin`.
2. Grave essa imagem via USB DFU com o procedimento oficial de atualização do XVF3800 e, em seguida, permita que o dispositivo reinicie.
3. Inspecione os formatos relatados pelo dispositivo de áudio USB reiniciado. Selecione 48.000 Hz e dois canais de captura somente se o host expuser essa combinação.
4. Inicie uma gravação de teste curta e confirme que a captura começa sem um erro de negociação de formato.

**Critérios de sucesso:**

- O host relata um modo de captura de dois canais a 48.000 Hz para a imagem XVF3800 gravada
- Uma gravação de dois canais inicia a 48.000 Hz sem um erro de negociação de formato

**Notas:**

- O changelog USB oficial marca a v2.1.0 como atual, e o diretório atual também contém imagens dedicadas `v2.1.0_16k6ch` e `v2.1.0_48k2ch`.
- O diretório do repositório e o changelog não publicam um despejo de descritor de USB Audio Class para esses binários. Portanto, esta FAQ não declara uma largura de amostra USB nem quaisquer combinações adicionais de taxa de amostragem/canais.
- A seção de firmware/taxa de amostragem do Wiki do XVF3800 deve ser corrigida antes ou junto com a publicação desta FAQ, porque sua declaração antiga de tudo em 16 kHz entra em conflito com o diretório de firmware atual.

**Referências:**

- [Diretório atual de firmware USB oficial do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)
- [Changelog oficial de firmware USB do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Commit oficial adicionando suporte USB a 48 kHz](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/commit/8b0967aef554c2d270e70d428ed4e19f4ab811b8)

### O XVF3800 expõe um número de série de dispositivo exclusivo? {#unique-device-serial}

**Aplica-se a:** ReSpeaker XVF3800 USB 4-Mic Array enumerado por um host USB compatível

**Última verificação:** 2026-09-01

Sim. A visão geral de hardware oficial atual descreve um número de série de dispositivo exclusivo integrado para identificação e gerenciamento de múltiplos dispositivos. Na enumeração USB ou DFU, use o campo de número de série de dispositivo relatado pelo host em vez do SKU do produto ao associar uma unidade física a um registro de aplicativo.

**Pré-requisitos:**

- Um host compatível com Windows, macOS ou Linux
- Uma conexão com capacidade de dados para a porta XMOS USB-C
- Uma ferramenta de enumeração do host, como `dfu-util -l`, quando a interface DFU estiver disponível

1. Conecte um XVF3800 ao host através da porta XMOS USB-C.
2. Execute a ferramenta de enumeração USB do host; `dfu-util -l` mostra um campo `serial=` quando a interface DFU está visível.
3. Armazene o número de série relatado como o identificador do dispositivo, não como uma versão de firmware ou SKU.
4. Para uma implantação com múltiplos dispositivos, enumere cada unidade separadamente e verifique se o aplicativo associa a unidade física pretendida ao número de série relatado.

**Critérios de sucesso:**

- O host relata um número de série de dispositivo não vazio para o XVF3800 conectado
- O aplicativo consegue distinguir a unidade pretendida usando o número de série relatado em vez da posição no barramento USB

**Notas:**

- A página oficial do produto chama isso de número de série de dispositivo exclusivo e o apresenta como um recurso de gerenciamento de múltiplos dispositivos.
- Esta FAQ não declara compatibilidade com Android nem comportamento full-duplex; esses eram partes separadas e não suportadas da pergunta de origem.

**Referências:**

- [Visão geral de hardware do XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#visão-geral-de-hardware)
- [Guia oficial de DFU do XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

<!-- RESPEAKER_FAQ_AUTO_END -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
