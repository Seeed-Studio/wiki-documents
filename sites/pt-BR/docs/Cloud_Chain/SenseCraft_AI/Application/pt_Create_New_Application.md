---
description: Como criar um novo aplicativo no SenseCraft AI.
title: Criar um novo aplicativo
keywords:
  - create application
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/create-new-application
sidebar_position: 1
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/application/create-new-application/
---
# Criar um novo aplicativo no SenseCraft AI

## Criar o aplicativo

Acesse a página **Meus aplicativos** e clique em **Criar aplicativo** > **Enviar**.

Para proteger seu trabalho, ao entrar na página de edição as alterações são **salvas automaticamente** e a barra de navegação mostra o status do salvamento em tempo real.

## Construir o aplicativo

O fluxo é dividido em quatro etapas claras; você pode alternar entre elas a qualquer momento pela barra superior.

### Etapa 1: Informações do aplicativo

É a primeira impressão para quem descobrir seu app; revise com cuidado para torná‑lo atrativo.

- **Nome do aplicativo:** Um nome claro para que se entenda rapidamente o que ele faz.

- **Resumo:** Sintetize cenário, tecnologias, dispositivos etc. com linguagem concisa.

- **Cena:** Escolha a etiqueta de categoria mais adequada; isso afeta descoberta e promoção.

- **Licença:** Defina se outros podem copiar ou modificar o trabalho e se o uso comercial é permitido.

:::caution
Se você alterar a licença depois, as ações anteriores à mudança (como duplicar) e seus resultados não são afetadas.
:::

- **Imagens:** Influenciam muito o apelo. A primeira é a capa padrão. Até **16** arquivos, cada um com **≤ 2 MB**; proporção **4:3** recomendada.

### Etapa 2: Documentação

É o núcleo: escreva a **introdução** e o fluxo de **implantação**. Use o botão no canto superior direito para exibir ou ocultar a pré‑visualização e revisar o processo como outro usuário.

#### Editar com Markdown

O editor usa Markdown. Ao digitar, pressione `/` para o menu rápido de títulos ou blocos de ferramentas (em breve).

#### Introdução ao aplicativo

Descreva livremente o contexto, princípios e o desenho do projeto. Nesta seção não é possível adicionar blocos de ferramentas que chamem capacidades SenseCraft.

#### Implantação do aplicativo

Explique a implantação passo a passo, com pré‑requisitos. Use `+` para novos passos. Mantenha a ordem lógica e verifique na pré‑visualização se outra pessoa consegue reproduzir.

#### Uso de blocos de ferramentas

No fluxo você insere com um clique as integrações SenseCraft AI e simplifica tanto a criação quanto a implantação do usuário final.

##### Visão em IA

Implante modelos de visão para reconhecimento, deteção, classificação etc. em hardware compatível. Os resultados podem ser enviados em tempo real por MQTT, GPIO ou serial, conforme a configuração.

O bloco suporta atualmente **deteção** e **classificação**. Segmentação e estimativa de pose virão numa versão futura.

**Dispositivos compatíveis:**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

**Modelo SenseCraft AI:** Escolha modelos de qualidade compartilhados pela comunidade na biblioteca.

**Meu modelo:** Selecione um da sua lista privada.

:::caution
Ao publicar na comunidade um aplicativo que inclua este modelo, o modelo privado passa automaticamente a ser público.
:::

- **Enviar modelo:** Envie arquivos treinados em plataformas de terceiros. Informe nome, tipo de tarefa (Task), categorias (Class ID e Class Name), o arquivo e os dispositivos suportados. Depois do envio aparece em **Meu modelo**.

- **Treinar modelo:** Para treinar ou retreinar, siga o assistente e, em **Modelos históricos**, use **Enviar para SenseCraft**, conclua o fluxo de upload e salve em **Meu modelo**.

**Selecionar dispositivo:** Na lista suspensa escolha o hardware real entre os suportados pelo modelo.

**Ajustar parâmetros recomendados:** Afine inferência e dispositivo. Os valores são gravados como padrão na implantação.

- **Limiar de confiança:** Critério para emitir uma predição final. Aumentar tende a reduzir falsos positivos; diminuir, falsos negativos.

- **Limiar IOU:** Em deteção, o IoU mede a sobreposição entre caixa predita e referência. Muito alto pode gerar caixas duplicadas no mesmo objeto; muito baixo pode fundir objetos próximos.

- **Modo de saída**

  - **Nenhum:** Após ligar, a inferência não inicia até outro gatilho; útil para baixo consumo.

  - **MQTT:** Inicia a inferência ao ligar e envia resultados por Wi‑Fi via MQTT.

    - **Serviço oficial SenseCraft (recomendado):** Selecione ou crie um Dev Kit para seu aplicativo e o MQTT é configurado automaticamente. Veja os dados na [plataforma SenseCraft Data](https://sensecap.seeed.cc).

    - **Serviço de terceiros:** Use um broker MQTT próprio ou externo e configure manualmente.

  - **GPIO:** Sinais de nível nos pinos.

    - **Condições de gatilho:** Regras com objeto, condição e limiar de confiança.

    - **Ações de gatilho:** Quando atendidas, o dispositivo pode fixar nível, gravar no cartão SD, acender LED etc.

  - **Serial:** Use a [biblioteca SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) para exportar dados por UART (GPIO), I2C ou SPI.

  ```text
    **UART (GPIO)**
    Baud Rate Value: 921600
    Data Format: 8N1
    TX: GPIO43
    RX: GPIO44

    **I2C**
    Slave Address: 0x62
    SDA: GPIO5 (PULLUP)
    SCL: GPIO6 (PULLUP)
    Protocol:
    - READ：0x10，0x01, LEN << 8, LEN & 0xff
    - WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06

    **SPI**
    Slave CPOL0 CPHA0
    MOSI GPIO9 (PULLUP)
    MISO GPIO8,
    SCLK GPIO7 (PULLUP)
    CS GPIO4 (PULLUP)
    Protocol:
    - READ：0x10，0x01, LEN << 8, LEN & 0xff
    - WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06
  ```

##### Áudio em IA

Implante modelos de reconhecimento de fala em hardware compatível. Os resultados podem ir por MQTT, GPIO ou serial.

**Dispositivos compatíveis:**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

**Modelo SenseCraft AI:** Modelos compartilhados na biblioteca.

**Meu modelo:** Da sua lista privada.

:::caution
Ao publicar, o modelo privado passa automaticamente a ser público.
:::

- **Enviar modelo:** Nome e categorias (Class ID e Class Name). Fica em **Meu modelo**.

- **Treinar modelo:** Como na visão: **Modelos históricos** → **Enviar para SenseCraft**.

**Selecionar dispositivo:** Por enquanto apenas XIAO ESP32S3 Sense.

**Ajustar parâmetros recomendados:** Afine conforme o cenário.

- **Limiar de confiança:** Mesmo equilíbrio que na visão.

- **Modo de saída:** Caminho de saída padrão do modelo de áudio.

##### Vibração em IA

Deteção de anomalias vibratórias aprendendo a vibração «normal».

**Dispositivos compatíveis:**

- XIAO ESP32S3 Sense (com [acelerómetro de 3 eixos](https://seeedstudio.feishu.cn/record/QFIprpQsmesStwcOpZWc98Ccn9n))

**Ajustar parâmetros recomendados:** Amostragem, inferência ao ligar, GPIO e saída.

- **Janela de amostragem:** Amostras por unidade de tempo; demasiado grande deixa lento, demasiado pequena pode não aprender bem.

- **Ativar inferência ao ligar por defeito:** Desativado exige gatilho externo (baixo consumo).

- **GPIO:** Ações ante vibração anómala (nível, LED etc.).

- **Modo de saída:** Saída padrão do modelo de vibração.

##### Node-RED

Construa fluxos visuais para reCamera.

**Preparar o fluxo:** Depois de adicionar o bloco Node-RED:

1. **Criar fluxo novo:** Ligue o reCamera (cabo ou Wi‑Fi), abra o Dashboard e edite online.

2. **Enviar arquivo local:** Envie um JSON já preparado; o sistema valida o tipo.

**Selecionar modelo de visão IA:** O JSON não inclui o binário do modelo; indique qual o fluxo utiliza.

1. **Incluído no dispositivo:** Modelos pré‑instalados no reCamera (família YOLO11n: classificação, deteção, segmentação, pose).

2. **Modelos públicos:** Catálogo SenseCraft para reCamera partilhado por outros.

3. **Meu modelo:** Da sua biblioteca privada.

:::caution
**Ao publicar:** Se usar um modelo privado em **Meu modelo** e publicar na comunidade, esse modelo também ficará público. Será avisado antes.
:::

##### Aily Blockly

Ambiente de programação visual. Permite gravar num passo os programas feitos no Aily Blockly em dispositivos edge.

**Produtos compatíveis:**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

**Associar ID do projeto:** Introduza o código que aponta para o seu modelo público no Aily Blockly.

- **Como obter o Project ID?** Abra o Aily Blockly no computador; em **CLOUD SPACE** à direita localize o cartão do projeto. A cadeia abaixo do cartão (ex.: `prj_be881f`) é o Project ID.

![](https://seeedstudio.feishu.cn/space/api/box/stream/download/asynccode/?code=YjczYzljYmQ3NjhlNDg4NzhlNDBiZmM1YjZlNTYzOWRfa1VaTU5hNEFRN2g3WFF6a1g1c0VMNGFkcDNxcWoyTjVfVG9rZW46WWFmSmJER09yb3JVaUh4RmZITGNueFlSbmNlXzE3NzQ4NTczMzg6MTc3NDg2MDkzOF9WNA)

**Dispositivo de implantação:** Escolha o hardware na lista suspensa.

##### Implantar aplicativo em contêiner (em breve)

##### Gravar firmware (em breve)

##### Configurar MQTT (em breve)

##### Ferramentas de depuração (em breve)

### Etapa 3: Lista de materiais (BOM)

Liste tudo o que é preciso para reproduzir o aplicativo.

#### Da Seeed Studio

Pesquise e adicione hardware oficial Seeed diretamente.

#### Outros materiais

Parafusos, cabos especiais, peças impressas em 3D etc.: nome, breve descrição e quantidade; links de compra ajudam.

#### Software e plataformas (em breve)

Por exemplo Arduino IDE, Home Assistant ou Edge Impulse.

### Etapa 4: Pré‑visualização e publicação

Revise como um utilizador final. Antes de **Publicar**, confirme campos obrigatórios, direitos sobre código e recursos e a ausência de conteúdo confidencial ou ilegal.

Depois de publicar, o app entra em revisão e não poderá continuar a editar esse rascunho até mudar o estado. Se ainda não quiser publicar, saia do editor: o progresso continua a ser guardado automaticamente.

## Publicar o aplicativo

:::caution
Se usar modelos ainda não públicos (por exemplo treinados por si), publicar o app também os tornará públicos. Será lembrado antes.
:::

:::caution
Se depender do modelo de outra pessoa e esse modelo for retirado, receberá uma notificação. O app pode permanecer publicado, mas já não poderá ser implantado com esse modelo.
:::

### Revisão do aplicativo

:::tip
Depois de enviar para revisão pode retirar o pedido a qualquer momento se precisar continuar a editar.
:::

Os administradores verificam principalmente:

1. **Conteúdo e segurança**

   - **Direitos de autor e licenças open source:** Deve possuir direitos sobre código, modelos, imagens e recursos ou cumprir licenças de origem (MIT, Apache, etc.).

   - **Privacidade e segurança de dados:** Não pode haver exfiltração oculta, carregamentos não autorizados nem portas traseiras, especialmente com câmara ou microfone.

   - **Legalidade e normas da comunidade:** Sem segredos comerciais, material ilegal, malware nem conteúdo violento, sexual ou de ódio.

2. **Qualidade do modelo e adequação ao hardware**

   - **Utilização:** Modelos personalizados devem carregar e analisar‑se corretamente.

   - **Precisão:** O desempenho real deve corresponder à descrição.

   - **Adequação ao hardware:** Tamanho do modelo e lógica coerentes com as placas indicadas.

3. **Documentação e reprodutibilidade**

   - **Informação básica clara:** Nome, resumo, etiquetas e imagem de capa corretos e não enganosos.

   - **BOM exata:** O hardware listado coincide com os passos de implantação.

   - **Implantação reprodutível:** Passos coerentes; ligações de pinos, limiares, MQTT etc. explícitos.

4. **Diretrizes da comunidade**

   - **Sem spam:** Não são admitidos duplicados sem sentido nem conteúdo só publicitário sem valor técnico.

:::caution
Para uma comunidade SenseCraft AI segura e de qualidade, a plataforma tem a palavra final na revisão. Projetos que violem leis, políticas ou segurança podem ser recusados ou removidos.
:::

## Gestão de aplicativos

### Gerir aplicativos públicos na loja

Ao abrir **o seu próprio aplicativo publicado** na loja pode gerir a **revisão publicada atualmente**.

- **Duplicar:** Copia a versão estável publicada como projeto novo.

- **Editar:** Abre o rascunho (igual a **Meus aplicativos** > **Editar**).

- **Anular publicação:** Oculta temporariamente o app do público; o estado passa a privado.

### Gerir em Meus aplicativos

- **Editar:** Abre o editor; as alterações aplicam‑se só ao **rascunho**, não à versão publicada.

- **Duplicar:** Copia o rascunho atual para um projeto novo.

- **Publicar / Publicar atualização:** Envia para revisão; após aprovação atualiza a página na loja e substitui a versão pública quando aplicável.

- **Anular publicação:** Se o app for público, pode voltar ao estado privado aqui.

:::tip
Se o rascunho e a versão publicada forem diferentes, ao anular a publicação pode perder acesso fácil ao estado publicado. **Duplique** a versão publicada antes se precisar continuar a partir dela.
:::

- **Eliminar:** Remove o aplicativo por completo.

:::caution
Se estiver publicado, a eliminação retira‑o da loja e depois apaga‑o permanentemente. Proceda com cuidado.
:::
