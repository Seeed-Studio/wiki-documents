---
description: Estenda temporariamente o caminho de comunicação MeshCore com o SenseCAP Card Tracker T1000-E, compartilhando contatos pelo Canal Público e permitindo que um dispositivo Companion retransmita mensagens com o Modo Repeat.
title: Compartilhamento de Contatos e Companion Repeat
keywords:
  - MeshCore
  - Card Tracker T1000-E
  - Companion Repeat
  - Compartilhamento de Contatos
  - Public Channel
  - LoRa Mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png
slug: /t1000e_meshcore_contact_sharing_companion_repeat
sku: 114993369,114993649
sidebar_position: 3
last_update:
  date: 10/16/2026
  author: Advent Jiang
---

# Estenda sua rede MeshCore com o T1000-E: Compartilhamento de Contatos e Companion Repeat

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png" alt="Dispositivos SenseCAP T1000-E usados com o aplicativo MeshCore" width={900} height="auto" /></p>

## Introdução

Quando dois usuários MeshCore estão muito distantes ou quando prédios e terreno bloqueiam o caminho de rádio, eles podem não conseguir receber as mensagens um do outro. Se ambos os dispositivos conseguirem alcançar um SenseCAP Card Tracker T1000-E localizado entre eles, você pode ativar o Modo Companion Repeat nesse dispositivo intermediário e deixá‑lo encaminhar mensagens temporariamente.

Este guia usa três dispositivos T1000-E executando o firmware MeshCore. Ele mostra como compartilhar identidades de contato pelo Canal Público, como configurar uma retransmissão temporária com um dispositivo Companion e como os resultados de comunicação se comparam quando o dispositivo de retransmissão está desligado e ligado.

## Principais Recursos

- Tente estender temporariamente o caminho de comunicação em condições de rede adequadas, sem implantar antecipadamente um Repeater fixo dedicado.
- Faça toda a configuração — compartilhamento de contatos e alternância de repeat — no já conhecido aplicativo MeshCore, para que uma pequena equipe possa se configurar rapidamente.
- Veja diretamente o que o nó intermediário contribui para essa comunicação entre nós por meio de um teste comparativo com o dispositivo ligado e desligado.

## Como Funciona

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-relay-topology.png" alt="Topologia de três nós: Companion1 retransmite entre Companion2 e Companion3" width={900} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion1 opera com o Modo Repeat ativado, enquanto Companion2 e Companion3 permanecem no modo Companion normal.</i></p>

O compartilhamento de contatos e o encaminhamento de mensagens resolvem dois problemas diferentes:

- **Compartilhamento de contatos** permite que Companion2 e Companion3 obtenham a Identidade um do outro e a salvem como contato. Por si só, isso não cria nenhuma cobertura de rádio.
- **Modo Companion Repeat** permite que o dispositivo intermediário, Companion1, participe do encaminhamento de pacotes quando as condições permitirem.

O Canal Público pode transportar mensagens antes que qualquer informação de contato seja trocada; a troca de identidades serve principalmente para preparar os dispositivos para mensagens direcionadas posteriormente.

## Requisitos de Hardware e Software

| Item | Usado neste teste |
| --- | --- |
| Dispositivos | SenseCAP Card Tracker T1000-E × 3 |
| Firmware / App | Firmware MeshCore V1.17.1; aplicativo MeshCore V1.47.0 |
| Funções | Companion1: Repeat Mode ON; Companion2 / Companion3: Repeat Mode OFF |
| Configurações de rádio | 869,495 MHz, largura de banda 250 kHz, spreading factor 10, coding rate 5, potência de transmissão 22 dBm |

:::caution
Os parâmetros acima são apenas a configuração usada neste teste; eles não significam que essa frequência e potência sejam permitidas em todas as regiões. Escolha os parâmetros de rádio de acordo com as regulamentações locais de rádio. Para a configuração inicial, siga o guia [Get Started with MeshCore](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/) para o T1000-E.
:::

## Primeiros Passos

### Etapa 1: Configurar os Dispositivos e os Parâmetros LoRa

Configure os três dispositivos T1000-E como dispositivos Companion que podem se conectar ao aplicativo MeshCore e certifique‑se de que a versão do firmware e as configurações LoRa sejam idênticas em todos eles. Este exemplo usa parâmetros de rádio personalizados. Depois de salvar as configurações, confirme que cada dispositivo está operando com a nova configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-radio-settings.png" alt="Configurações de rádio LoRa usadas no teste" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>A configuração de rádio usada neste teste. A captura de tela foi feita a partir do Companion2, que opera com o Modo Repeat desativado.</i></p>

### Etapa 2: Ativar o Modo Companion Repeat no Dispositivo Intermediário

Em Radio Settings no Companion1, ative **Enable Repeat Mode** e salve. Deixe o Modo Repeat desativado em Companion2 e Companion3. Observe que a faixa de frequência em que o Modo Repeat pode ser ativado é limitada pelo firmware e pelo aplicativo. Se uma configuração for rejeitada, use uma configuração que seja ao mesmo tempo suportada e permitida pelas regulamentações locais.

### Etapa 3: Estabelecer Relacionamentos de Contato

Faça com que o Companion1 troque informações de identidade separadamente com o Companion2 e o Companion3. Quando isso for concluído, ambos os dispositivos de extremidade aparecerão na lista de contatos do Companion1, mas Companion2 e Companion3 ainda não terão um ao outro salvos como contatos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-list.png" alt="Lista de contatos do Companion1 mostrando Companion2 e Companion3" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>A lista de contatos do Companion1 contém tanto o Companion2 quanto o Companion3.</i></p>

### Etapa 4: Compartilhar Contatos pelo Canal Público

Compartilhe os cartões de contato do Companion2 e do Companion3 no Canal Público. No dispositivo receptor, toque em **Add Contact** para salvar a identidade do outro dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-sharing.png" alt="Cartão de contato compartilhado no Canal Público com uma confirmação de adição" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>O cartão de contato no canal e a confirmação de que ele foi adicionado.</i></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-before-after.png" alt="Companion3 antes e depois de adicionar o contato" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion3 antes e depois de adicionar o contato.</i></p>

### Etapa 5: Verificar a Retransmissão de Mensagens

Nesta implantação, os dois dispositivos de extremidade não conseguem se alcançar de forma confiável e direta. Primeiro desligue o Companion1 e envie uma mensagem Pública a partir do Companion2: o Companion3 não a recebe. Em seguida, ligue novamente o Companion1 e repita o mesmo teste de mensagem: a comunicação Pública entre nós é restaurada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-repeat-result.png" alt="Status do remetente mostrando Heard 1 Repeat no aplicativo MeshCore" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>O remetente mostra "Heard 1 Repeat". Se a mensagem foi realmente entregue deve sempre ser julgado pelo que o dispositivo receptor mostra.</i></p>

## Resultados do Teste

Neste ambiente de teste, depois que o Companion1 estabeleceu um relacionamento de contato com cada dispositivo de extremidade, os cartões de contato foram compartilhados por meio do Canal Público, e Companion2 e Companion3 salvaram com sucesso as identidades um do outro.

No teste comparativo:

- Com o Companion1 desligado, as mensagens Públicas enviadas pelo Companion2 não foram recebidas pelo Companion3.
- Depois que o Companion1 foi religado com o Modo Repeat ativado, o Companion3 recebeu as mensagens Públicas enviadas pelo Companion2, e o remetente exibiu o status "Heard 1 Repeat".

Observe que essa comparação foi feita alternando a alimentação do Companion1 entre desligado e ligado, não apenas alternando a caixa de seleção do Modo Repeat. Dentro desta implantação, o nó intermediário atuou de forma comprovada como um relay temporário.

## Cenários de Aplicação

- **Grupos temporários ao ar livre**: tente complementar o caminho de comunicação com um dispositivo que você já carrega, quando nenhuma infraestrutura de repetidores fixos estiver disponível.
- **Eventos temporários e implantações em campo**: compartilhe contatos rapidamente e ofereça aos membros distribuídos uma opção de comunicação de curto prazo.
- **Aprendizado e experimentação com MeshCore**: uma configuração mínima de três nós torna fácil ver a diferença entre compartilhamento de identidade e encaminhamento de pacotes.

## Limitações e Considerações

- Companion Repeat é um complemento, não um substituto, para um Repeater fixo dedicado.
- O desempenho de encaminhamento depende da posição dos nós, interferência, alimentação de energia e tamanho da rede.
- Não é recomendado ativar o Modo Repeat de forma casual em meshes públicas congestionadas.
- A adição bem-sucedida de um contato não garante um caminho de rádio funcional, e um status "Heard 1 Repeat" não é um reconhecimento de que o destino recebeu a mensagem.

## Recursos

- [Get Started with MeshCore on SenseCAP T1000-E](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/)

## Suporte Técnico e Discussão de Produto

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
