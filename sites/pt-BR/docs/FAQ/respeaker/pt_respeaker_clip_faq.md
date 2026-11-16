---
title: reSpeaker Clip FAQ
description: Perguntas frequentes sobre documentação oficial, suporte a idiomas de transcrição, gravações e exportação, e recursos mecânicos para o reSpeaker Clip.
slug: /respeaker_clip_faq
last_update:
  date: 11/12/2026
  author: ray
keywords:
  - reSpeaker Clip FAQ
  - reSpeaker Clip documentation
  - transcription language support
  - recordings export
  - mechanical drawing
createdAt: '2026-09-01'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_faq/
updatedAt: '2026-11-12'
---

<div class="respeaker-faq-page">

# reSpeaker Clip FAQ

Esta página contém respostas verificadas para o reSpeaker Clip. Cada resposta indica a variante de produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme a variante exata do produto e o modo de firmware (USB ou I2S) em que o dispositivo está sendo executado.
- Verifique a versão atual do firmware antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-09-01; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Documentação e uso {#documentation-and-usage}

### Onde posso encontrar a documentação oficial atual do ReSpeaker Clip? {#official-documentation}

**Aplica-se a:** usuários e desenvolvedores do ReSpeaker Clip

**Última verificação:** 2026-09-01

Comece pela página atual de Getting Started do ReSpeaker Clip. Use o guia Basic SDK para controle no host e transferência de gravações, e use o guia Firmware Development apenas ao alterar o firmware no lado do dispositivo. A URL antiga `/respeaker_clip_getting_started/` está obsoleta e não deve ser adicionada aos favoritos.

**Pré-requisitos:**

- Identificar se a tarefa é uso normal do produto, integração de SDK no host ou desenvolvimento de firmware do dispositivo

1. Abra Getting Started para configuração, fluxos de trabalho do app, especificações e a lista atual de recursos.
2. Abra o guia Basic SDK para controlar gravação, gerenciar sessões ou transferir arquivos via BLE ou Wi-Fi.
3. Abra o guia Firmware Development apenas para compilar, gravar, depurar ou alterar o comportamento no lado do dispositivo.
4. Se um link salvo ainda falhar, substitua-o pela URL atual correspondente do Wiki antes de relatar uma indisponibilidade de documentação.

**Critérios de sucesso:**

- O guia atual selecionado carrega e cobre a camada pretendida de produto, SDK no host ou desenvolvimento de firmware

**Notas:**

- Alguns recursos em Getting Started ainda estão explicitamente marcados como `Coming soon`; um guia publicado não implica que todos os artefatos mecânicos ou de firmware tenham sido publicados.

**Referências:**

- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/pt-br/respeaker_clip/)
- [ReSpeaker Clip Basic SDK guide](https://wiki.seeedstudio.com/pt-br/respeaker_clip_basic_sdk_guide/)
- [ReSpeaker Clip Firmware Development guide](https://wiki.seeedstudio.com/pt-br/respeaker_clip_firmware_development_guide/)

### O ReSpeaker Clip pode ser usado para prototipar transcrição de conversas em tempo real? {#live-conversation-transcription}

**Aplica-se a:** protótipos com ReSpeaker Clip que exibem fala-para-texto em tempo real em um computador ou navegador separado

**Última verificação:** 2026-09-01

Sim, como parte de um protótipo com host e nuvem. O exemplo oficial Live STT transmite áudio do microfone a partir de firmware do Clip com suporte a RTC via BLE, converte enunciados de fala concluídos em texto por meio de um provedor STT externo e exibe a transcrição em um navegador. Isso não é documentado como transcrição autônoma no próprio dispositivo.

**Pré-requisitos:**

- Firmware do ReSpeaker Clip com suporte a transmissão ao vivo RTC
- Python 3.10 ou posterior e um adaptador BLE funcional
- Acesso à rede e uma chave de API para o provedor STT usado pelo exemplo oficial

1. Siga o guia oficial do aplicativo Live STT e instale seus requisitos Python.
2. Conecte-se ao ReSpeaker Clip via BLE e insira a chave do provedor STT nas configurações do aplicativo.
3. Selecione `Start Streaming`, fale e aguarde cada enunciado concluído aparecer na transcrição do navegador.
4. Meça a latência e a precisão da transcrição no ambiente acústico pretendido antes de tratar o protótipo como um recurso de acessibilidade.

**Critérios de sucesso:**

- A sessão RTC inicia via BLE e os enunciados falados aparecem como texto em tempo real no navegador
- A latência e a precisão testadas são registradas para o ambiente e idioma pretendidos

**Notas:**

- Live STT usa BLE para o fluxo de áudio RTC; o caminho via Wi-Fi documentado é para fluxos de trabalho de gravar-e-processar, não para Live STT.
- O exemplo público depende de um serviço de transcrição externo e não foi apresentado como um dispositivo médico ou assistivo certificado. Revise privacidade, conectividade, latência e comportamento em falhas para a implantação real.

**Referências:**

- [ReSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/pt-br/respeaker_clip_python_build_app/)
- [ReSpeaker Clip RTC streaming guide](https://wiki.seeedstudio.com/pt-br/respeaker_clip_rtc_streaming/)
- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/pt-br/respeaker_clip/)

### Onde posso obter dimensões oficiais do ReSpeaker Clip ou um desenho mecânico? {#mechanical-drawing-status}

**Aplica-se a:** projeto de gabinete, fixação ou acessório vestível para o ReSpeaker Clip

**Última verificação:** 2026-09-01

Um desenho mecânico com identificação de revisão não está publicado no momento. A tabela de recursos oficial em Getting Started ainda marca `Mechanical Drawing` como `Coming soon`, e sua tabela de parâmetros físicos não fornece dimensões completas do gabinete.

**Pré-requisitos:**

- A revisão exata do hardware de produção à qual o projeto mecânico deve se ajustar

1. Verifique a linha Mechanical Drawing na tabela atual de recursos oficiais.
2. Não derive dimensões de produção a partir de fotos, renderizações de marketing ou de um protótipo sem identificação de revisão.
3. Para trabalho de projeto imediato, meça a unidade física exata e solicite um desenho oficial com identificação de revisão antes de congelar ferramental ou folgas.

**Critérios de sucesso:**

- O projeto mecânico é baseado em um desenho oficial com identificação de revisão ou em medições verificadas da revisão exata de produção

**Notas:**

- Esta é uma resposta sensível ao tempo sobre o status de publicação e deve ser verificada novamente quando a tabela de recursos mudar.
- A ausência de um desenho público não estabelece que não exista um arquivo mecânico interno.

**Referências:**

- [ReSpeaker Clip specifications and resources](https://wiki.seeedstudio.com/pt-br/respeaker_clip/)

### Ainda posso usar meu reSpeaker Clip e acessar minhas gravações após trocar de telefone, e posso exportá-las? {#recordings-after-phone-change-export}

**Aplica-se a:** gravações não excluídas no reSpeaker Clip (SKU 100020126), migradas para um novo telefone ou exportadas com o SDK oficial

**Última verificação:** 2026-11-12

Sim. As gravações são armazenadas no próprio Clip: o dispositivo tem 2 GB de armazenamento local, cerca de 250+ horas de áudio compactado, e a gravação funciona sem um telefone. Trocar de telefone — incluindo aposentar um telefone que chegou ao fim da vida útil — não remove gravações do Clip. Instale o app SenseCraft Voice no novo telefone, adicione e emparelhe o Clip, depois sincronize as sessões com o novo telefone ou exporte os resultados de áudio ou texto a partir do app. Gravações que não foram excluídas permanecem no dispositivo e também podem ser baixadas com o Basic SDK oficial via BLE ou Wi-Fi.

**Pré-requisitos:**

- Um reSpeaker Clip carregado que ligue
- O app SenseCraft Voice instalado no novo telefone
- Se o Clip ainda estiver vinculado ao telefone antigo, acesso a esse telefone para desvinculá-lo ou capacidade de remover o emparelhamento Bluetooth antigo

1. Instale e abra o app SenseCraft Voice no novo telefone.
2. Toque em `Add Device`, selecione o nome do dispositivo que corresponde ao identificador na tela do Clip e confirme o emparelhamento.
3. Abra a lista de gravações e sincronize as sessões necessárias; mantenha o Clip ligado e próximo ao telefone.
4. Exporte os resultados de áudio ou texto a partir do app.
5. Abra o arquivo ou transcrição exportados e confirme que estão completos.

**Critérios de sucesso:**

- O novo telefone descobre o Clip e conclui o emparelhamento
- A lista de gravações mostra as sessões armazenadas no dispositivo
- O áudio ou texto exportado abre corretamente

**Notas:**

- Os 2 GB de armazenamento comportam cerca de 250+ horas de áudio compactado; a capacidade é finita, portanto exporte gravações importantes regularmente.
- Uma sincronização normal mantém os arquivos no dispositivo por padrão. As gravações permanecem até que você exclua uma sessão, formate o armazenamento ou uma política de exclusão automática as remova; a política de exclusão automática no dispositivo pode ser configurada via SDK (0–30 dias ou desativada).
- Formatar o armazenamento ou excluir uma sessão remove as gravações do dispositivo; exporte-as antes.
- Se o telefone antigo não estiver disponível, as gravações ainda estão no Clip; o download via Basic SDK oferece suporte a BLE ou Wi-Fi e pode retomar uma transferência interrompida.
- Se o emparelhamento no novo telefone falhar, remova o emparelhamento antigo do Clip no telefone antigo ou nas configurações de Bluetooth do telefone e tente emparelhar novamente.

**Referências:**

- [reSpeaker Clip Getting Started (storage, file management and export)](https://wiki.seeedstudio.com/pt-br/respeaker_clip/)
- [reSpeaker Clip Basic SDK Guide (session download over BLE and Wi-Fi)](https://wiki.seeedstudio.com/pt-br/respeaker_clip_basic_sdk_guide/)

## Firmware e software {#firmware-and-software}

### O reSpeaker Clip oferece suporte a chinês e outros idiomas, e quão precisa é sua transcrição? {#language-support-and-accuracy}

**Aplica-se a:** reSpeaker Clip (SKU 100020126) com o app SenseCraft Voice, transcrevendo por meio de um serviço STT externo (em nuvem ou auto-hospedado)

**Última verificação:** 2026-11-12

Sim. Chinês e outros idiomas podem ser transcritos quando o serviço STT configurado os suporta. O reSpeaker Clip grava áudio no armazenamento local, e o reconhecimento de fala é realizado pelo serviço STT configurado em AI CONFIG no app SenseCraft Voice. Portanto, os idiomas ou dialetos suportados e a precisão da transcrição dependem do serviço STT e do modelo que você usa.

A configuração de STT expõe Provider, Base URL, API key e Language; cada transcrição também permite selecionar o Audio Language e o STT Model.

**Pré-requisitos:**

- reSpeaker Clip com firmware atual, com o app SenseCraft Voice instalado no telefone
- Provider, Base URL e API key para o serviço STT de destino, e acesso à rede a partir do telefone
- Uma gravação de teste

1. Abra AI CONFIG → STT Service no app.
2. Insira Provider, Base URL, API key e Language, toque em `Test Connection` e depois em `Save Configuration`.
3. Abra uma gravação, toque em `Transcribe & Summarize` e selecione o Audio Language e o STT Model.
4. Toque em `Generate Now` e verifique a transcrição.

**Critérios de sucesso:**

- Test Connection é aprovado
- A gravação produz uma transcrição no idioma pretendido

**Notas:**

- O Clip não executa reconhecimento de fala no dispositivo; toda a transcrição acontece no serviço STT externo.
- O áudio do Clip é Opus mono de 16 kHz a 32 kbps.
- Para transcrição totalmente local ou offline, a implantação privada oficial oferece suporte a chinês, cantonês, inglês, japonês e coreano.

**Referências:**

- [reSpeaker Clip Introdução](https://wiki.seeedstudio.com/pt-br/respeaker_clip/)
- [Transcrição privada on-premise para reSpeaker Clip](https://wiki.seeedstudio.com/pt-br/solutions/clip-private-transcription/)

## Produto e Negócios {#product-and-business}

### O app reSpeaker Clip exige uma assinatura mensal e posso usar OpenAI ou meus próprios modelos STT e LLM auto-hospedados? {#app-subscription-and-custom-providers}

**Aplica-se a:** usuários do app reSpeaker Clip que estão escolhendo entre a assinatura reSpeaker AI e o próprio provedor STT/LLM, na versão atual do app

**Última verificação:** 2026-10-26

Não. A assinatura é opcional. Você pode executar o app inteiramente em serviços STT e LLM que você mesmo configurar — incluindo um modelo auto-hospedado exposto em uma Base URL — e esse caminho não consome nenhuma cota do reSpeaker AI. A assinatura opcional reSpeaker AI é para usuários que preferem não gerenciar credenciais e cobrança de provedores.

Na página AI CONFIG do app, o serviço STT recebe Provider, Base URL, API key e Language; o serviço LLM recebe uma API key, Base URL e Model Name. Ambos fornecem uma ação Test Connection, de modo que um serviço hospedado na OpenAI ou um modelo que você mesmo hospede pode ser verificado antes do uso, desde que exponha uma API compatível.

| Plano | China continental | Exterior | Minutos de IA | Notas |
| --- | --- | --- | --- | --- |
| Bônus de ativação do dispositivo | ¥0 | \$0 | 300 uma vez | Uma vez por conta, dispositivo e conta de pagamento; válido por 180 dias |
| Lite | ¥19/mês ou ¥179/ano | \$4.99/mês ou \$49.99/ano | 300/mês | Nível pago mais baixo |
| Pro | ¥59/mês ou ¥649/ano | \$12.99/mês ou \$129/ano | 1.200/mês | Nível principal recomendado |
| Max | ¥115/mês ou ¥1.249/ano | \$23.99/mês ou \$249/ano | 2.400/mês | Fila de processamento com alta prioridade |
| Pacote adicional | ¥9/100 min; ¥25/300 min | \$1.99/100 min; \$4.99/300 min | 100 ou 300 | Somente assinantes ativos; válido até o fim do ciclo mensal atual |

Um minuto de IA da plataforma cobre uma transcrição mais um resumo básico dessa gravação.

**Pré-requisitos:**

- O app reSpeaker Clip com a página AI CONFIG e um dispositivo gravando para testar
- Para o caminho de provedor personalizado: a Base URL e a API key do provedor, ou um endpoint auto-hospedado acessível a partir do telefone
- Para o caminho de assinatura: uma conta reSpeaker com um plano ou o bônus de ativação do dispositivo

1. Abra AI CONFIG no app e verifique as entradas STT Service e LLM Service.
2. Para STT, insira Provider, Base URL, API key e Language, toque em Test Connection e depois em Save Configuration.
3. Para o LLM, insira a API key, Base URL e Model Name, toque em Test Connection e depois em Save Configuration.
4. Processe uma gravação e confirme que tanto a transcrição quanto o resumo vêm do provedor configurado.
5. Para usar a assinatura reSpeaker AI em vez disso, selecione o serviço de IA da plataforma no app; a transcrição e a sumarização então consomem os minutos de IA do plano.

**Critérios de sucesso:**

- Test Connection é aprovado tanto para os serviços STT quanto LLM
- Uma gravação de teste é transcrita e resumida por meio do provedor configurado
- No caminho de provedor personalizado, nenhuma cota do reSpeaker AI é consumida

**Notas:**

- Planos, cotas e preços são referentes a 2026-10-26. O app mostra o preço atual e qualquer variação regional, e preços e cotas podem mudar.
- A cota da assinatura mensal não é acumulável. Um pacote adicional é válido apenas até o fim do ciclo mensal atual e também não é acumulável. Cancelar a renovação automática mantém o plano utilizável até o fim do período pago.
- No caminho de provedor personalizado, a plataforma não mede o uso; cobranças, limites de taxa e disponibilidade do provedor são de sua responsabilidade.
- Um endpoint auto-hospedado deve ser acessível a partir do telefone e expor uma API compatível; a ação Test Connection deve ser aprovada antes que o serviço possa ser usado.
- Uma opção mais simples de LLM auto-implantado está planejada para uma versão futura. Até lá, um LLM auto-hospedado já pode ser configurado por meio dos campos personalizados Base URL e Model Name.

**Referências:**

- [reSpeaker Clip Introdução (AI CONFIG, configurações de provedor STT e LLM)](https://wiki.seeedstudio.com/pt-br/respeaker_clip/)
- [Guia de aplicativo reSpeaker Clip Live STT](https://wiki.seeedstudio.com/pt-br/respeaker_clip_python_build_app/)

<!-- RESPEAKER_FAQ_AUTO_END -->

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
