---
title: reSpeaker Lite FAQ
description: Perguntas frequentes sobre áudio USB, ESPHome e operação do reSpeaker Lite.
slug: /respeaker_lite_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker Lite FAQ
  - reSpeaker Lite troubleshooting
  - reSpeaker Lite USB audio
  - ESPHome
---

<div class="respeaker-faq-page">

# reSpeaker Lite FAQ

Esta página contém respostas verificadas para o reSpeaker Lite. Cada resposta indica a variante do produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme a variante exata do produto e o modo de firmware (USB ou I2S) em que o dispositivo está sendo executado.
- Verifique a versão atual do firmware antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-08-31; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois dessa data.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Documentação e uso {#documentation-and-usage}

### Onde posso baixar o arquivo STEP do ReSpeaker Lite? {#step-mechanical-file}

**Aplica-se a:** Integração mecânica de uma placa ReSpeaker Lite que corresponda ao modelo v1.1 publicado

**Última verificação:** 2026-09-01

Baixe o modelo público `ReSpeakerLitev1.1.step` na seção oficial de recursos do ReSpeaker Lite. É um modelo de placa v1.1, não um Kit de Assistente de Voz completo, alto-falante ou conjunto de gabinete.

**Pré-requisitos:**

- A revisão de hardware impressa na própria placa ReSpeaker Lite
- Software CAD compatível com STEP

1. Abra a seção Resources da página de primeiros passos do ReSpeaker Lite.
2. Baixe `ReSpeakerLitev1.1.step` a partir do link oficial do arquivo.
3. Importe o arquivo na ferramenta CAD e compare os furos de fixação, o contorno da placa e as posições dos conectores com a revisão física da placa.
4. Solicite esclarecimentos antes da liberação se o projeto depender de um alto-falante em nível de kit, gabinete, tolerância ou detalhe de keep-out que esteja ausente no arquivo.

**Critérios de sucesso:**

- O modelo STEP é importado com sucesso
- Seus recursos de fixação e conectores correspondem à placa v1.1 medida usada no projeto

**Notas:**

- Não trate o modelo de placa v1.1 como um modelo de montagem para o Kit de Assistente de Voz completo ou como autoridade para outra revisão de hardware.

**Referências:**

- [ReSpeaker Lite Resources](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/#resource)
- [Arquivo STEP oficial do ReSpeaker Lite v1.1](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)

### Como testo o link I2S entre o ReSpeaker Lite e o XIAO ESP32S3? {#i2s-link-test}

**Aplica-se a:** ReSpeaker Lite com XIAO ESP32S3 antes de solucionar problemas de ausência de áudio de microfone ou reprodução I2S

**Última verificação:** 2026-09-01

Execute o teste oficial de I2S do ReSpeaker Lite com um firmware I2S correspondente de 16 kHz. O sketch grava um sinal de teste, lê amostras do array de microfones e imprime `I2S RX pass!` quando mais de 16.000 das 32.000 amostras recebidas não são zero nem `0xFFFF`.

**Pré-requisitos:**

- Firmware I2S oficial de 16 kHz do ReSpeaker Lite instalado no XMOS/XU316
- Arduino IDE configurado para XIAO ESP32S3
- Uma conexão de dados USB à porta do XIAO ESP32S3

1. Abra a página atual do teste oficial de I2S do ReSpeaker Lite e copie o sketch sem alterar os pinos I2S documentados ou a taxa de 16.000 Hz.
2. Envie o sketch para o XIAO ESP32S3 e abra o Serial Monitor a 115200 baud.
3. Deixe o teste concluir sua primeira leitura e, se necessário, sua segunda leitura.
4. Registre o resultado final `I2S RX pass!` ou `I2S RX fail!` antes de alterar ESPHome, aplicação ou configurações de hardware.

**Critérios de sucesso:**

- O sketch inicializa o I2S e imprime `I2S RX pass!`
- O fluxo de amostras recebidas não é inteiramente zero nem `0xFFFF`

**Notas:**

- Um teste com falha é evidência de que a verificação documentada do link I2S falhou; por si só, isso não prova que a placa esteja defeituosa nem autoriza um diagnóstico de substituição.
- Este teste de 16 kHz não deve ser usado sem alterações com um perfil de firmware de 48 kHz.

**Referências:**

- [Teste oficial de I2S do ReSpeaker Lite](https://wiki.seeedstudio.com/pt-br/respeaker_i2s_test/)
- [Repositório oficial de firmware do ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

## Conectividade e detecção {#connectivity-and-detection}

### Por que o ReSpeaker Lite não aparece como um dispositivo de áudio USB no Windows? {#windows-usb-audio-detection}

**Aplica-se a:** ReSpeaker Lite autônomo ou ReSpeaker Lite com XIAO ESP32S3 quando o modo pretendido é áudio USB no Windows

**Última verificação:** 2026-08-31

Conecte o Windows à porta USB-C XMOS do ReSpeaker Lite e certifique-se de que o XMOS esteja executando firmware USB. O firmware I2S é para comunicação com o XIAO ESP32S3 e não deve ser enumerado como o dispositivo de som USB normal do ReSpeaker Lite.

**Pré-requisitos:**

- Um cabo de dados USB em bom estado conectado à porta USB-C XMOS do ReSpeaker Lite
- A imagem oficial de firmware USB quando o áudio USB for necessário

1. Confirme que o cabo está conectado à porta USB-C XMOS do ReSpeaker Lite, e não apenas à porta USB do XIAO ESP32S3.
2. Confirme que o firmware do XMOS é a variante USB. Se for a variante I2S, grave o firmware USB atual usando o procedimento oficial de DFU.
3. Se o Gerenciador de Dispositivos mostrar o ReSpeaker Lite com um aviso após gravar o firmware USB, desinstale esse dispositivo, selecione a opção para remover seu software de driver quando for oferecida e desligue e ligue a placa. O Windows deve reinstalar o driver de áudio USB.
4. Abra as configurações de Som do Windows e selecione ReSpeaker Lite como dispositivo de entrada.

**Critérios de sucesso:**

- O Gerenciador de Dispositivos do Windows mostra o ReSpeaker Lite sem ícone de aviso
- As configurações de Som do Windows listam o ReSpeaker Lite como entrada de áudio e uma gravação de teste contém fala

**Notas:**

- Este FAQ público é intencionalmente limitado à detecção de áudio USB no Windows. Falhas de porta COM e de envio de sketch pertencem a um FAQ separado de programação do XIAO.
- Uma entrada USB-JTAG ou serial do XIAO não é evidência de que a interface de áudio USB do XMOS esteja ativa.

**Referências:**

- [Primeiros passos com o reSpeaker Lite](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/)
- [Kit de Assistente de Voz ReSpeaker Lite](https://wiki.seeedstudio.com/pt-br/xiao_respeaker/)
- [Diretório oficial de firmware do ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

### Como recupero o XIAO ESP32S3 quando sua porta desaparece ou um sketch não é enviado? {#xiao-upload-bootloader-recovery}

**Aplica-se a:** Kit de Assistente de Voz ReSpeaker Lite com XIAO ESP32S3 quando a porta do XIAO está ausente ou um sketch Arduino é compilado, mas não é enviado

**Última verificação:** 2026-09-01

Conecte o computador à porta USB do XIAO ESP32S3, coloque o XIAO em modo BootLoader e envie um sketch Blink mínimo. Isso restaura o caminho de programação do XIAO; é separado da atualização do firmware de áudio XU316 do ReSpeaker Lite pela outra porta USB com `dfu-util`.

**Pré-requisitos:**

- Um cabo de dados USB em bom estado conectado à porta USB do XIAO ESP32S3
- Arduino IDE com o pacote de placas ESP32 atual e `XIAO ESP32S3` selecionado

1. Confirme que o cabo está conectado à porta USB do XIAO ESP32S3, não à porta de áudio e DFU XMOS/XU316 do ReSpeaker Lite.
2. Pressione e segure o botão `BOOT` do XIAO, conecte a porta USB do XIAO ao computador e então solte `BOOT`.
3. Selecione a nova porta visível do XIAO no Arduino IDE e envie `File > Examples > 01.Basics > Blink`.
4. Pressione Reset uma vez e confirme que o sketch Blink está em execução. Se a porta ainda não aparecer, salve o erro completo de envio, sistema operacional, placa selecionada e porta selecionada antes de solicitar suporte.

**Critérios de sucesso:**

- Uma porta de programação aparece para o XIAO ESP32S3
- O sketch Blink é enviado com sucesso e é executado após o reset

**Notas:**

- Os botões USR e Mute da placa-carregadora não substituem o botão BOOT do XIAO.
- Este procedimento não altera o firmware de áudio USB/I2S do ReSpeaker Lite.

**Referências:**

- [Kit de Assistente de Voz ReSpeaker Lite](https://wiki.seeedstudio.com/pt-br/xiao_respeaker/)
- [Modo BootLoader e recuperação de envio do XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/#bootloader-mode)

## Firmware e software {#firmware-and-software}

### Como solucionar uma falha de compilação do ESPHome para o ReSpeaker Lite com XIAO ESP32S3? {#esphome-compile-failure}

**Aplica-se a:** ReSpeaker Lite com XIAO ESP32S3 usando a integração comunitária ESPHome vinculada pelo Wiki oficial da Seeed

**Última verificação:** 2026-08-31

Comece a partir da configuração atual no repositório mantido pela comunidade vinculado pelo Wiki da Seeed e use uma versão do ESPHome que atenda ao `min_version` atual. A linha final `main.cpp.o Error 1` apenas informa que uma meta de build falhou; ela não identifica a causa raiz.

**Pré-requisitos:**

- Um backup de suas substituições, credenciais de Wi-Fi, chaves de API e outros segredos locais
- Acesso ao log completo de compilação do ESPHome Device Builder ou da linha de comando

1. Abra o `config/respeaker-satellite-dashboard-example.yaml` upstream atual e a configuração base que ele importa. Não comece a partir do longo snapshot YAML inline no Wiki.
2. Verifique `esphome.min_version` na base upstream atual e atualize o ESPHome se necessário. Ele é `2026.6.0` na data de verificação, mas o upstream pode elevá-lo depois.
3. Aplique novamente apenas suas substituições e segredos ao exemplo atual. Evite copiar blocos de componentes antigos para a nova configuração, a menos que você tenha verificado que ainda são necessários.
4. Remova a saída de build anterior com a ação de build limpo do ESPHome ou o comando de limpeza correspondente na CLI e, em seguida, compile novamente a configuração atual.
5. Se a compilação ainda falhar, encontre o primeiro erro de configuração ou compilador acima da linha final de falha de meta do terminal. Salve esse erro, o log ao redor, a versão do ESPHome e a revisão da configuração upstream antes de pedir ajuda.

**Critérios de sucesso:**

- O ESPHome aceita a configuração atual sem erro de versão mínima ou de validação de configuração
- A compilação é concluída e produz um artefato de firmware gravável para o XIAO ESP32S3

**Notas:**

- A integração vinculada é mantida pela comunidade, avisa que mudanças incompatíveis são possíveis e pode evoluir independentemente do snapshot inline do Wiki.
- O `min_version` upstream atual, e não uma versão permanentemente fixada neste FAQ, é o limite mínimo de compilação autorizado.
- Uma linha isolada de terminal `main.cpp.o Error 1` é insuficiente para diagnóstico; diferentes erros anteriores podem terminar com o mesmo resumo de falha de destino.

**Referências:**

- [Seeed Wiki: guia ReSpeaker Lite Home Assistant](https://wiki.seeedstudio.com/pt-br/respeaker_lite_ha/)
- [Integração ReSpeaker Lite ESPHome vinculada no Wiki](https://github.com/formatBCE/Respeaker-Lite-ESPHome-integration)
- [Configuração base atual upstream do ReSpeaker Lite](https://github.com/formatBCE/Respeaker-Lite-ESPHome-integration/blob/main/config/common/respeaker-satellite-base.yaml)

## Problemas de áudio {#audio-issues}

### Por que os exemplos I2S do ReSpeaker Lite reproduzem ruído estático alto em vez de áudio? {#i2s-static-noise-sample-rate}

**Aplica-se a:** ReSpeaker Lite com XIAO ESP32S3 executando os exemplos oficiais de gravação/reprodução I2S ou de geração de fluxo

**Última verificação:** 2026-09-01

Primeiro faça a taxa de amostragem do sketch corresponder ao firmware I2S instalado. O exemplo oficial de gravação/reprodução é configurado para 16.000 Hz, enquanto o repositório oficial de firmware também fornece imagens explicitamente rotuladas para 48 kHz. Executar o sketch de 16 kHz com uma imagem de 48 kHz pode tornar o fluxo inutilizável ou soar como estática.

**Pré-requisitos:**

- O nome exato do arquivo do firmware I2S instalado no ReSpeaker Lite
- O exemplo oficial atual e sua configuração `AudioInfo`
- Um alto-falante ou fone de ouvido conhecido como funcional conectado a uma saída documentada

1. Confirme que o XMOS/XU316 está executando firmware I2S, não firmware USB.
2. Verifique o nome exato do arquivo de firmware no diretório oficial. Um nome de arquivo contendo `48k` requer uma configuração I2S de 48.000 Hz; a imagem I2S padrão v1.0.9 usa o caminho de exemplo de 16.000 Hz.
3. Para uma imagem de 48 kHz, altere o exemplo para `AudioInfo info(48000, 2, 32)`. Para a imagem padrão de 16 kHz, mantenha `AudioInfo info(16000, 2, 32)`.
4. Reconstrua e envie o sketch pela porta USB do XIAO ESP32S3 e, em seguida, repita o teste de reprodução ou loopback.

**Critérios de sucesso:**

- A taxa de amostragem configurada corresponde ao perfil nomeado pela imagem de firmware instalada
- O teste produz áudio de loopback inteligível ou um tom gerado limpo em vez de estática em escala total

**Notas:**

- Não fixe uma versão antiga da biblioteca AudioTools apenas porque um caso a utilizou; as evidências públicas atuais do produto estabelecem o limite de taxa de amostragem, não um requisito permanente de versão de biblioteca de terceiros.
- Se igualar a taxa não resolver o sintoma, execute o teste oficial separado de link I2S antes de diagnosticar o hardware.

**Referências:**

- [Exemplo de gravação e reprodução do ReSpeaker Lite](https://wiki.seeedstudio.com/pt-br/respeaker_record_and_play/)
- [Perfis de firmware oficiais atuais do ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite#latest-xmos-firmware)

## Problemas de hardware {#hardware-issues}

### Quais saídas de áudio estão disponíveis no ReSpeaker Lite? {#speaker-output-options}

**Aplica-se a:** ReSpeaker Lite autônomo e ReSpeaker Lite com XIAO ESP32S3 quando a reprodução de áudio está configurada

**Última verificação:** 2026-09-01

O ReSpeaker Lite fornece um conector de alto-falante na placa documentado para o caminho de alto-falante amplificado de 5 W e uma saída de 3,5 mm para fones de ouvido ou um alto-falante ativo. A descrição de hardware oficial atual também afirma que inserir um plugue de 3,5 mm silencia o caminho do alto-falante JST e alterna a saída para o dispositivo externo.

**Pré-requisitos:**

- Um aplicativo de reprodução ou caminho de firmware que envie áudio para o ReSpeaker Lite
- Um fone de ouvido, alto-falante ativo ou alto-falante compatível com o caminho do conector documentado

1. Desligue o sistema antes de alterar a conexão do alto-falante.
2. Use o conector de 3,5 mm para fones de ouvido ou um alto-falante ativo, ou use o conector de alto-falante da placa para o caminho de alto-falante amplificado documentado.
3. Ligue o sistema e inicie a reprodução em volume baixo.
4. Se o alto-falante JST ficar silencioso após a inserção de um plugue de 3,5 mm, remova o plugue para retornar ao caminho JST padrão.

**Critérios de sucesso:**

- A reprodução é audível na saída selecionada
- Inserir um dispositivo de 3,5 mm alterna a reprodução para longe do caminho do alto-falante JST conforme documentado

**Notas:**

- A presença de um conector de saída não prova que o aplicativo host habilitou a reprodução ou selecionou o modo de firmware correto.
- Esta FAQ não recomenda um modelo de alto-falante de terceiros não verificado ou pinagem de conector.

**Referências:**

- [Especificação e pinagem do ReSpeaker Lite](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/)
- [Repositório oficial de hardware do ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite#the-headphone-jack-detection-circuit)

### Posso alimentar o ReSpeaker Lite diretamente a partir de uma bateria de íon de lítio de célula única? {#external-5v-power}

**Aplica-se a:** ReSpeaker Lite autônomo e ReSpeaker Lite com XIAO ESP32S3 alimentado sem um host USB normal

**Última verificação:** 2026-09-01

Não trate a entrada direta de bateria de célula única como suportada. O contrato de alimentação publicado do ReSpeaker Lite é 5 V através de USB ou do pad de alimentação externa de 5 V. Se uma bateria for necessária, regule-a para 5 V estáveis antes de conectar a placa.

**Pré-requisitos:**

- Uma fonte regulada de 5 V dimensionada para a placa e qualquer carga de alto-falante conectada
- Polaridade verificada e um terra comum
- A fonte de alimentação desconectada durante a fiação

1. Configure e meça a saída do regulador antes de conectar o ReSpeaker Lite; ela deve ser um 5 V estável.
2. Com a alimentação removida, conecte 5 V regulados e terra à conexão de alimentação externa documentada ou use uma fonte USB compatível de 5 V.
3. Aplique alimentação e confirme que o indicador de energia acende.
4. Verifique a interface pretendida: enumeração USB para firmware USB ou o teste oficial de I2S para uma configuração I2S embarcada.

**Critérios de sucesso:**

- A entrada permanece em 5 V durante a inicialização e a carga pretendida
- A placa liga de forma consistente e conclui a verificação funcional USB ou I2S esperada

**Notas:**

- A documentação pública atual não publica uma tensão mínima de entrada mais baixa, curva de queda do regulador ou um contrato para alimentar a placa através de um pino de 3V3. Não infira esses valores a partir de informações privadas de esquemático.

**Referências:**

- [Especificação de alimentação e visão geral de hardware do ReSpeaker Lite](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/)

<!-- RESPEAKER_FAQ_AUTO_END -->

## Suporte técnico e discussão sobre o produto

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
