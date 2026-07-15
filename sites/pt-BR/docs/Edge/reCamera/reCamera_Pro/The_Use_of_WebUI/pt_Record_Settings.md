---
description: recamera_pro_record_settings
title: Configurações de Gravação
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_record_settings/
---

A reCamera Pro possui gravação de vídeo integrada acionada por regras. Os usuários podem personalizar regras para definir o horário de gravação de vídeo e captura.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

## Configuração de Gravação

A reCamera Pro fornece uma página de configurações de gravação onde os usuários podem configurar regras de gravação de vídeo, métodos de disparo, formatos de gravação e agendas de gravação na Web UI, bem como gerenciar o armazenamento e pré-visualizar arquivos. Este recurso é adequado para cenários como vigilância de segurança, registro de evidências, registro de resultados de detecção de IA e gravação agendada.

Após entrar na Web UI, clique em **Recording Settings** no menu lateral esquerdo para acessar a página de configuração de gravação.

### Visão Geral das Funções da Página

A página de configurações de gravação inclui principalmente os seguintes módulos funcionais:

- **Configuração de Gravação**: Configurar regras de disparo de gravação de vídeo, formatos de vídeo e agendas de gravação.
- **Gerenciamento de Armazenamento**: Visualizar e gerenciar o espaço de armazenamento do dispositivo.
- **Pré-visualização de Arquivos**: Visualizar arquivos de vídeo gravados.
- **Gerenciamento de Agenda**: Definir os períodos de tempo efetivos para as regras de gravação.

Na página de configuração de gravação, os usuários podem selecionar diferentes métodos de disparo e aplicá-los às tarefas de gravação.

### Formato de Gravação

A parte superior da página permite selecionar o formato do arquivo de gravação, por exemplo:

| Parâmetro   | Descrição                                                              |
| ----------- | ------------------------------------------------------------------------ |
| Formato de Gravação | Define o formato para salvar arquivos de vídeo, como dados de vídeo MP4, imagem JPG e imagem original RAW. |
Se o formato MP4 for selecionado para gravação, cada gravação terá uma duração fixa de 1 minuto.

### Métodos de Disparo

A reCamera Pro suporta vários métodos de disparo de gravação de vídeo. Os usuários podem escolher as regras de disparo apropriadas com base em seus cenários de aplicação reais.

#### Disparo por Inferência de IA

O **Disparo por Inferência de IA** é usado para acionar automaticamente a gravação com base nos resultados de reconhecimento do modelo de IA. Os usuários podem configurar categorias de detecção, faixas de pontuação de confiança e áreas de disparo. Quando um alvo que atende às condições aparece no campo de visão da câmera, o sistema iniciará a gravação automaticamente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

Os itens de configuração suportados pelo Disparo por Inferência de IA incluem:

| Item de Configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Tarefa de Inferência     | Selecionar a tarefa de inferência de IA para acionar a gravação |
| Faixa de Confiança   | Definir a faixa de limiar de confiança para os resultados de reconhecimento de IA |
| Filtro de Categoria    | Selecionar as categorias de alvo para acionar a gravação |
| Área de Disparo       | Definir a área da tela para detecção de disparo |

O filtro de categoria suporta seleção com base nas categorias de saída do modelo, como Person, Vehicle, Hardhat, Mask, Safety Vest, Machinery, etc. Os usuários podem selecionar apenas as categorias de interesse para reduzir disparos de eventos irrelevantes.

A área de disparo suporta o desenho de regiões poligonais no quadro de vídeo. Quando nenhuma região é desenhada, o padrão é disparar em toda a tela. Após desenhar uma região, o sistema só acionará a gravação dentro da área especificada. Este recurso é adequado para cenários de monitoramento de pontos-chave, como entradas/saídas, áreas perigosas e zonas de equipamentos.

#### Disparo Agendado

O **Disparo Agendado** é usado para acionar a gravação em intervalos de tempo fixos. Os usuários podem configurar o intervalo de disparo, e o sistema executará automaticamente as tarefas de gravação nos ciclos de tempo definidos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| Item de Configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Intervalo de Disparo   | Definir o intervalo de tempo para disparos agendados, em segundos |

Este método é adequado para cenários de gravação periódica, como capturar vídeos de um local em intervalos fixos, registrar o status de operação de equipamentos ou para inspeção e arquivamento.

#### Disparo por GPIO

O **Disparo por GPIO** é usado para acionar a gravação por meio de sinais de hardware externos. Os usuários podem selecionar o pino GPIO, o estado do pino, o sinal de disparo e a duração do debounce.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| Item de Configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Nome do Pino GPIO      | Selecionar o pino GPIO para disparo        |
| Estado do Pino          | Definir o estado padrão do pino, por exemplo, flutuante |
| Sinal de Disparo     | Definir o nível de disparo, por exemplo, nível alto   |
| Duração do Debounce  | Definir o tempo de debounce para o sinal de disparo, em milissegundos |

O Disparo por GPIO é adequado para integração com sensores externos, botões, contatos magnéticos de porta, sensores PIR, relés e outros dispositivos. Quando um dispositivo externo emite um sinal de nível especificado, a reCamera Pro pode iniciar a gravação automaticamente.

#### Disparo por Serial

O **Disparo por Serial** é usado para acionar a gravação por meio de comandos seriais. Os usuários podem selecionar o nome da porta serial e configurar o comando de disparo. Quando o dispositivo recebe um comando correspondente pela porta serial especificada, ele pode acionar a tarefa de gravação.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| Item de Configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Nome da Porta Serial   | Selecionar a porta serial a ser monitorada, por exemplo, ttyS4 |
| Comando de Disparo    | Definir o comando serial para acionar a gravação |

Este método é adequado para integração com controladores externos, MCUs, equipamentos industriais ou sistemas host personalizados.

#### Disparo por HTTPS

O **Disparo por HTTPS** fornece um método de disparo de gravação baseado em requisições de rede. A página exibirá o endereço de disparo HTTPS correspondente, que sistemas externos podem acessar para acionar a gravação.

Este método é adequado para integração com plataformas de terceiros, sistemas de negócios, sistemas de alarme ou scripts de automação. Por exemplo, quando um sistema externo detecta um evento, ele pode notificar a reCamera Pro para iniciar a gravação por meio de uma requisição HTTPS.

#### Disparo em Loop

O **Disparo em Loop** é usado para execução contínua ou cíclica de tarefas de gravação. Este método é adequado para cenários que exigem gravação contínua de longo prazo, como monitoramento 24 horas, vigilância no local e aquisição contínua de dados.

#### Disparo por Evento Sonoro

O **Disparo por Evento Sonoro** é usado para acionar a gravação com base em eventos de áudio. Os usuários podem entrar no Sound Lab para visualizar, treinar ou alternar modelos de som e selecionar as categorias de som que devem acionar a gravação.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

Os itens de configuração suportados pelo Disparo por Evento Sonoro incluem:

| Item de Configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Filtro de Categoria de Som | Selecionar as categorias de som para acionar a gravação |
| Janela de Atividade Contínua | Definir a duração de atividade contínua necessária para o disparo, em milissegundos |
| Faixa de Confiança   | Definir a faixa de limiar de confiança para os resultados de reconhecimento de som |

As categorias de som que podem ser selecionadas na página incluem Background Noise, Unknown, Stop, Yes, No, Zero, One, Two, etc. As categorias específicas dependem do modelo de reconhecimento de som atualmente carregado.

Este recurso é adequado para cenários como detecção de sons anormais, reconhecimento de sons de status de equipamentos e disparo por comandos de voz.

### Gerenciamento de Agenda

A página de configurações de gravação fornece uma função de gerenciamento de agenda, permitindo que os usuários definam o horário efetivo das regras de gravação usando uma grade de horários.

A agenda é exibida por dia da semana e hora. Os usuários podem clicar ou arrastar células de tempo para selecionar períodos de gravação, e vários períodos podem ser configurados.

A página fornece botões de atalho:

| Opção de Atalho | Descrição                               |
| --------------- | ----------------------------------------- |
| Dias de Semana (9h - 18h) | Selecionar rapidamente o horário de trabalho diurno |
| Noite (18h - 6h) | Selecionar rapidamente o horário de gravação noturna |
| Dia Inteiro (24 Horas) | Configurar rapidamente gravação 24 horas |
| Limpar           | Limpar os períodos de tempo atualmente selecionados |

Por meio do gerenciamento de agenda, os usuários podem fazer com que as regras de gravação sejam efetivas apenas durante períodos de tempo especificados, por exemplo, habilitar a gravação apenas à noite ou registrar eventos apenas durante o horário de trabalho.

### Configuração de Aplicação

No lado direito de cada método de disparo, há botões **Configure** e **Apply**.

- Clique em **Configure**: Entrar nas configurações detalhadas de parâmetros para este método de disparo.
- Clique em **Apply**: Habilitar o método de disparo atual e aplicá-lo à tarefa de gravação.
- O status na parte superior exibirá o método de disparo atualmente em uso, por exemplo, "Current: Sound Event Trigger".

Após a configuração, o sistema executará automaticamente as tarefas de gravação de acordo com o método de disparo atual, o formato de gravação e a agenda.

### Casos de Uso Típicos

A função de configurações de gravação é adequada para os seguintes cenários:

- Gravação automática quando pessoas, veículos ou alvos especificados são detectados.
- Gravação agendada dentro de períodos de tempo especificados.
- Disparo de gravação por meio de sensores GPIO externos.
- Interface com equipamentos industriais por meio de comandos seriais.
- Integração com sistemas de alarme de terceiros por meio de interfaces HTTPS.
- Gravação automática ao detectar eventos sonoros especificados.
- Configuração de agendas de gravação 24 horas ou apenas noturnas.

Por meio da página de configurações de gravação, os usuários podem configurar de forma flexível a estratégia de gravação da reCamera Pro, alcançando um ciclo fechado completo desde a visualização em tempo real até a gravação acionada por eventos.

## Gerenciamento de Armazenamento

Nesta página, você pode ver o uso atual de disco do dispositivo e o local onde os arquivos são salvos, facilitando a verificação rápida do status do dispositivo e do local de armazenamento dos materiais.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_65N6rhHetJ.png" />

Na configuração de armazenamento, você também pode definir o tamanho de armazenamento disponível e configurar cotas. Você também pode definir se os arquivos antigos serão sobrescritos para garantir que os arquivos gravados mais recentes sejam sempre salvos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WZBl9MEr7Z.png" />

## Pré-visualização de Arquivos

Aqui você pode ver os arquivos que foram gravados. Cada arquivo é salvo em um diretório diferente de acordo com a data.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_0qrpATtHyA.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_hkMMlkzm7i.png" />

Ao abrir o arquivo correspondente, é possível fazer a pré-visualização online e realizar operações sobre o material.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_Dr3Rfk11yn.jpg" />

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
