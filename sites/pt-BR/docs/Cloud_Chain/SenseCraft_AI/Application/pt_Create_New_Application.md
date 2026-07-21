---
description: Como criar um novo aplicativo no SenseCraft AI.
title: Criando um novo aplicativo
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
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/application/create-new-application/
---
# Criando um novo aplicativo no SenseCraft AI

## Criando o aplicativo

Vá para a página `My Applications` e clique em `Create App > Upload`.

<div style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/app_creation/creating-application.png" alt="Create application" style={{width: '100%'}} />
</div>

Para proteger seu trabalho, assim que você entrar na página de edição, suas alterações serão **salvas automaticamente**, e a barra de navegação mostrará o status de salvamento em tempo real.

## Construindo o aplicativo

O processo de criação do aplicativo é dividido em quatro etapas claras, entre as quais você pode alternar a qualquer momento usando a barra de navegação superior.

### Etapa 1: Informações do aplicativo

Esta é a primeira forma pela qual outras pessoas conhecerão seu aplicativo. Pense com cuidado para tornar seu app mais envolvente.

#### Nome e descrição do aplicativo

Dê ao seu aplicativo um nome claro para que outras pessoas entendam o que ele faz à primeira vista e resuma o cenário principal, tecnologias, dispositivos e assim por diante em uma linguagem concisa.

O nome do aplicativo é limitado a **60 caracteres**, e a descrição é limitada a **300 caracteres**.

#### Cena

Escolha a tag de categoria mais apropriada para o seu aplicativo. Isso é importante para descoberta e promoção.

Cenas disponíveis: `Maker/DIY`, `Smart Home`, `Industrial`, `Agriculture`, `Security`, `Education`, `Healthcare`, `Retail`, `Other`.

#### Licença

Defina sua licença aqui, incluindo se outras pessoas podem copiar e modificar seu trabalho e se o uso comercial é permitido.

- **Permitir que outros dupliquem e modifiquem seu app**: outras pessoas podem duplicar seu aplicativo em um novo projeto editável próprio, incluindo todas as imagens, documentação, modelos, código e configurações. Se desativado, outros ainda podem visualizar e implantar seu app, mas não podem criar sua própria cópia. Ative isso apenas se você tiver direitos para redistribuir todos os recursos do projeto.
- **Permitir que seu trabalho seja usado para fins comerciais**: outras pessoas podem usar seu aplicativo — e quaisquer trabalhos derivados que criarem a partir dele — em produtos comerciais, serviços pagos ou outros contextos que gerem receita, sem dever royalties ou permissão adicional a você.

:::caution
Se você alterar a licença depois, ações que já ocorreram antes da mudança (como duplicações) e seus resultados não serão afetados.
:::

#### Imagens

As imagens de exibição influenciam fortemente o quão atraente seu aplicativo parece. A primeira imagem é usada como capa por padrão. Você pode enviar até 16 imagens; cada arquivo deve ter 2 MB ou menos. Uma proporção de aspecto **4:3** é recomendada.

### Etapa 2: Documentação

Esta é a área central do seu aplicativo. Escreva uma **introdução do aplicativo** detalhada e um fluxo de trabalho de **implantação**. Use o botão no canto superior direito para mostrar ou ocultar a visualização em tempo real a qualquer momento, para que você possa revisar o fluxo de implantação e testar a implantação a partir da perspectiva de outro usuário.

#### Editar com Markdown

O editor de texto usa Markdown. Digite `/` enquanto edita para abrir um menu de atalho para inserir títulos ou blocos de ferramentas (disponível em uma atualização futura).

#### Introdução do aplicativo

Aqui você pode descrever o contexto, os princípios e o design do seu projeto em texto livre. Nesta seção você não pode adicionar Tool Blocks que chamem recursos do SenseCraft.

#### Implantação do aplicativo

Descreva seu processo de implantação passo a passo para que outros possam reproduzir seu aplicativo, incluindo pré-requisitos para cada etapa. Clique no controle `+` para adicionar etapas de implantação. Mantenha a ordem lógica e as instruções detalhadas. Alterne a visualização em tempo real para verificar se outra pessoa conseguiria seguir suas etapas com sucesso.

#### Usando Tool Blocks

No fluxo de implantação você pode inserir, com um clique, recursos integrados do SenseCraft AI. Eles simplificam tanto sua experiência de criação quanto a implantação para o usuário final.

Tool Blocks disponíveis:

- **[AI Vision](/sensecraft-ai/application/tool-blocks#visão-com-ia)** — Implante modelos de visão para reconhecimento, detecção e classificação de objetos em hardware compatível.
- **[AI Audio](/sensecraft-ai/application/tool-blocks#áudio-com-ia)** — Implante modelos de reconhecimento de fala em hardware compatível.
- **[AI Vibration](/sensecraft-ai/application/tool-blocks#vibração-com-ia)** — Detecte anomalias de vibração aprendendo padrões normais de vibração e sinalizando desvios.
- **[Node-RED](/sensecraft-ai/application/tool-blocks#node-red)** — Crie e implante fluxos lógicos visuais para reCamera.
- **[Aily Blockly](/sensecraft-ai/application/tool-blocks#aily-blockly)** — Grave em dispositivos de borda programas criados no ambiente visual Aily Blockly.
- **[Deploy container app](/sensecraft-ai/application/tool-blocks#implantar-aplicativo-em-contêiner)** — Implante aplicativos conteinerizados em hardware compatível.
- **[Flash firmware](/sensecraft-ai/application/tool-blocks#gravar-firmware)** — Grave imagens de firmware em dispositivos com um clique.
- **Ferramentas de depuração** *(em breve)* — Inspecione e solucione problemas de comportamento do dispositivo durante a implantação.

Consulte [Tool Blocks](/sensecraft-ai/application/tool-blocks) para detalhes completos de configuração de cada bloco.

### Etapa 3: Lista de materiais (BOM)

Liste tudo o que é necessário para reproduzir seu aplicativo.

#### Da Seeed Studio

Pesquise e adicione hardware oficial da Seeed diretamente.

#### Outros materiais

Para peças que não são da Seeed (fixadores, cabos especiais, peças impressas em 3D e assim por diante), forneça nome, breve descrição e quantidade. Links de compra são úteis.

#### Software e plataformas (em breve)

Liste o software ou as plataformas necessários — por exemplo, Arduino IDE, Home Assistant ou Edge Impulse.

### Etapa 4: Pré-visualizar e publicar

Revise o aplicativo completo como um usuário final faria. Antes de **Publish**, confirme que os campos obrigatórios estão completos e concorde com a [Declaration for Publishing](https://sensecraft.seeed.cc/legal/en/declaration), na qual você precisa confirmar que tem o direito de distribuir o código e os recursos e que nada confidencial ou ilegal está incluído.

Depois que você publicar, o rascunho do aplicativo será enviado para revisão. Você não poderá editar esse rascunho até que a revisão seja concluída. Se você não estiver pronto para publicar, saia do editor — o progresso ainda será salvo automaticamente. Saiba mais sobre o processo de publicação na seção a seguir.

## Publicando o aplicativo

:::caution
Se seu aplicativo usar modelos que ainda não são públicos (por exemplo, um modelo que você treinou/enviou por conta própria), publicar o app também tornará esses modelos publicamente disponíveis. Nós o lembraremos antes que isso aconteça.
:::

:::caution
Se seu aplicativo depender do modelo de outra pessoa e esse modelo for removido depois, você será notificado. Seu aplicativo pode permanecer publicado, mas o modelo não estará mais disponível durante as implantações.
:::

### Revisão do aplicativo

:::tip
Depois de enviar para revisão, você pode retirar a solicitação a qualquer momento se precisar continuar editando.
:::

Os administradores verificam as seguintes áreas:

1. **Conteúdo e segurança**

   - **Direitos autorais e licenças de código aberto:** você deve possuir ou ter direitos sobre todo o código, modelos, imagens e recursos, ou cumprir estritamente as licenças de origem (MIT, Apache e assim por diante).

   - **Privacidade e segurança de dados:** especialmente para uso de câmera ou microfone, não pode haver exfiltração oculta, envios não autorizados ou backdoors.

   - **Leis e padrões da comunidade:** nenhum segredo comercial, material ilegal, malware ou conteúdo violento, sexual ou de ódio.

2. **Qualidade do modelo e adequação ao hardware**

   - **Usabilidade do modelo:** modelos personalizados devem carregar e ser analisados corretamente na plataforma.

   - **Precisão:** o desempenho no mundo real deve corresponder ao que você descreve — sem afirmações exageradas.

   - **Compatibilidade com o hardware:** o tamanho do modelo e a lógica devem se adequar às placas que você afirma suportar.

3. **Documentação e reprodutibilidade**

   - **Noções básicas claras:** nome, resumo, tags e imagem de capa são precisos e não enganosos.

   - **BOM precisa:** o hardware listado corresponde ao que as etapas de implantação realmente usam.

   - **Implantação reprodutível:** as etapas seguem uma ordem lógica, e detalhes concretos como fiação de pinos, valores de limite e configurações de MQTT são explicados com clareza.

4. **Diretrizes da comunidade**

   - **Sem spam:** duplicatas sem sentido ou anúncios sem valor técnico não são permitidos.

:::caution
Para manter a comunidade do SenseCraft AI segura e confiável, todas as decisões de revisão são, em última instância, tomadas a critério da plataforma. Aplicativos que violem leis, políticas da plataforma ou padrões de segurança podem ser rejeitados ou removidos a qualquer momento.
:::

## Gerenciamento do app

Todo aplicativo tem dois estados que podem divergir ao longo do tempo:

- **Rascunho** — a cópia de trabalho que você edita. Sempre privada, visível apenas para você.
- **Versão publicada** — o instantâneo atualmente visível na Application Store. Atualizada apenas quando um novo rascunho é aprovado na revisão.

Você pode gerenciar um aplicativo de dois lugares, e as ações disponíveis dependem de em qual cópia você está atuando.

### A partir da Application Store

Quando você abre **seu próprio aplicativo publicado** na loja, as ações atuam sobre a **versão publicada**.

- **Duplicate:** crie um novo projeto independente a partir da versão publicada. Útil para ramificar a partir de uma versão estável conhecida.

- **Edit:** vá direto para o editor do rascunho deste app (o mesmo que abri-lo em **My Applications**).

- **Unpublish:** remova o app da loja e altere seu status de volta para privado. O rascunho não é afetado.

### A partir de My Applications

As ações aqui operam sobre o seu **rascunho**.

- **Edit:** abra o rascunho no editor. As alterações não afetam a versão publicada até que você publique novamente.

- **Duplicate:** crie um novo projeto independente a partir do rascunho atual.

- **Publish** / **Publish update:** envie o rascunho para revisão. O botão é rotulado como **Publish** na primeira vez e **Publish update** depois disso. Após a aprovação, a nova versão substitui o registro público existente na Application Store.

- **Unpublish:** retire um app público da loja e retorne-o ao status privado.

:::tip
Se o seu rascunho já avançou em relação à versão publicada, despublicar faz com que você perca o acesso fácil àquele snapshot público mais antigo. Se quiser continuar construindo a partir dele, **duplique** a versão publicada (na Application Store) antes de despublicar.
:::

- **Delete:** Remove permanentemente o aplicativo.

:::caution
Excluir um app atualmente publicado primeiro o despublica da loja e depois o exclui. Esta ação não pode ser desfeita.
:::
