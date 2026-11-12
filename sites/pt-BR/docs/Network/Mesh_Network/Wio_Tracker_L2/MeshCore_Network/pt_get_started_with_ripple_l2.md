---
description: Comece a usar o Ripple UI no Wio Tracker L2 Pro. Saiba como gravar o firmware, configurar redes MeshCore, enviar mensagens, usar mapas e trilhas de GPS e desbloquear recursos premium.
title: Introdução ao Ripple
keywords:
  - Ripple
  - Ripple UI
  - MeshCore
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png
slug: /get_started_with_ripple_l2_pro
sidebar_position: 2
last_update:
  date: 11/10/2026
  author: Michelle Huang
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## O que é o Ripple?

Ripple UI é um firmware com tela sensível ao toque para o L2 Pro. Ele permite adicionar contatos, enviar e receber mensagens, visualizar mapas e registrar suas trilhas de GPS diretamente no dispositivo, sem usar um telefone para essas tarefas.

### Como o Ripple se relaciona com o MeshCore?

MeshCore gerencia a comunicação em malha. Ripple UI permite usá-lo diretamente na tela sensível ao toque do L2 Pro.

| Nome | Finalidade |
| --- | --- |
| MeshCore | Comunicação em malha LoRa |
| Firmware Ripple UI | Operação autônoma com tela sensível ao toque |
| Firmware MeshCore Companion | Operação por meio de um telefone ou outro cliente |

Grave o Ripple UI diretamente; não é necessário instalar o Companion antes.

:::note

O firmware atualizado usa perfis MeshCore e não oferece mais Ripple na tela New Network.

:::

### Para quem é o Ripple?

- Usuários que desejam conversar diretamente no dispositivo sem manter um telefone conectado.

- Usuários ao ar livre que desejam mapas offline e um registro da própria rota.

- Usuários que desejam alternar entre diferentes perfis de rede MeshCore.

- Usuários avançados que precisam gerenciar repetidores MeshCore, Room Servers ou nós de sensores. Alguns recursos de gerenciamento exigem um código de desbloqueio pago.

## Recursos

- **Mensagens autônomas:** Envie mensagens diretas e em grupo pela tela sensível ao toque.

- **Vários perfis de rede:** Mantenha configurações de rádio, identidades, contatos e preferências separados.

- **Tela inicial personalizável:** Adicione atalhos para contatos, canais e configurações.

- **Mapas:** Carregue mapas a partir de um microSD, arraste para mover e toque nos botões para aplicar zoom.

- **Trilhas de GPS:** Registre sua posição e carimbos de data e hora e, em seguida, visualize sua rota no mapa.

- **Capturas de tela:** Pressione e segure o canto superior esquerdo da tela para capturar a visualização atual.

- **Administração remota:** Desbloqueie recursos de gerenciamento de nós com a autorização do nó de destino.

## Gravar o firmware

Se o seu dispositivo já tiver a versão do Ripple UI descrita aqui, pule para **Configuração inicial**.

Duas variantes de firmware estão disponíveis:

- **Ripple GUI: dados no cartão SD (-SD):** Armazena configuração e dados em um cartão microSD. Insira um cartão formatado em FAT32 de 32 GB ou menos antes de usar.

- **Ripple GUI (Interno):** Armazena configuração e dados na memória flash interna do dispositivo.

**Etapa 1: Abra o gravador web**

Visite o [Wio Tracker L2 Web Flasher](https://flasher.meshcore.io/wio-tracker-l2/) e selecione o firmware Ripple UI e a variante de armazenamento para o L2. Use um navegador de desktop que ofereça suporte a acesso serial, como Chrome ou Edge.

Selecione `Seeed Studio Wio Tracker L2 Pro`, escolha uma variante Ripple GUI e selecione a versão do firmware. A captura de tela abaixo mostra a v12.3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_flasher.png" alt="Selecione o L2 Pro, a variante Ripple GUI e a versão do firmware no gravador web" width={1000} height="auto" /></p>

**Etapa 2: Entre manualmente no modo de download**

Mantenha pressionado o botão `U/B` enquanto conecta o cabo de dados USB e, em seguida, pressione `RST` para entrar no modo de download de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_enterdfu.gif" alt="Entrando no modo de download usando os botões U/B e RST" width={400} height="auto" /></p>

**Etapa 3: Selecione a porta e grave**

Clique em `Flash!`, selecione seu dispositivo na caixa de diálogo de porta serial e conecte. Siga as instruções na tela para concluir a gravação.

:::warning

A opção `Erase device` mostrada acima apaga dados e configurações na memória flash interna, incluindo o estado de desbloqueio. Faça backup de dados importantes e mantenha seu Unlock Code antes de apagar.

:::

**Etapa 4: Reinicie**

Após a conclusão da gravação, pressione `RST` para iniciar o Ripple UI.

:::tip

Se você não conseguir prosseguir após clicar em `Flash`, confirme se o dispositivo está no modo de download. Verifique também o cabo de dados USB, as permissões seriais do navegador e se outro aplicativo está usando a porta.

:::

## Configuração inicial

Siga os tutoriais de tela sensível ao toque e botões na primeira inicialização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png" alt="Telas de inicialização do Seeed Studio e MeshCore Ripple UI" width={700} height="auto" /></p>

### Botões de hardware

Ripple UI combina entrada por tela sensível ao toque com dois botões de hardware:

- **Tela ligar/desligar (botão superior):** Pressione para ativar a tela ou desligá-la. Desligar a tela não desliga o dispositivo.
- **ENTER (botão lateral U/B):** Pressione para confirmar uma seleção, salvar alterações ou enviar uma entrada quando solicitado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_Button_Indication.webp" alt="Botões de hardware do L2 Pro: botão superior para ligar/desligar a tela e botão lateral U/B para ENTER" width={700} height="auto" /></p>

### Criar um perfil de rede

1. Conclua os tutoriais de tela sensível ao toque e do botão Select exibidos na primeira inicialização.

2. Escolha um preset de rádio apropriado para sua região ou insira a frequência, o fator de espalhamento (SF) e outros parâmetros usados pela sua rede local.

3. Dê um nome ao perfil usando letras e números, sem espaços.

4. Salve o perfil. Se solicitado, reinicie o dispositivo para aplicar as configurações.

Para um teste com dois dispositivos, use configurações de rádio correspondentes em ambos os dispositivos. Selecionar o mesmo preset é a opção mais simples. Com configurações personalizadas, verifique também a largura de banda, a taxa de codificação e outros parâmetros, em vez de corresponder apenas frequência e SF.

### Defina seu nome

1. Toque em `L` à esquerda, abra o perfil de rede atual e selecione `Identity`.

2. Altere o nome padrão para algo reconhecível, como `micha` ou `michb`. Os nomes podem conter até 31 caracteres.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ChangeDeviceName.png" alt="Abra o perfil de rede, selecione Identity e altere o nome do dispositivo" width={1000} height="auto" /></p>

## Explore a interface

Toque em `G`, `L` ou `M` no lado esquerdo da tela para alternar entre as três telas iniciais.

<Tabs>

<TabItem value="grid" label="G: Grid" default>

`G` é uma tela inicial personalizável com uma grade de 3 × 4.

- Pressione e segure uma célula vazia para adicionar um atalho para um contato, canal de grupo ou configuração.

- Pressione e segure um atalho existente para removê-lo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_G.jpg" alt="Tela inicial Grid do Ripple UI" width={500} height="auto" /></p>

</TabItem>

<TabItem value="list" label="L: List">

`L` lista seus perfis de rede, contatos, canais de grupo e `Discover`. Use esta página para adicionar contatos, editar sua Identity e abrir conversas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_L.png" alt="Página List do Ripple UI" width={500} height="auto" /></p>

A captura de tela mostra nomes usados durante os testes. Sua lista dependerá de seus perfis e contatos.

</TabItem>

<TabItem value="map" label="M: Map">

`M` exibe o mapa, posições e qualquer trilha de GPS carregada.

- Arraste a tela para mover o mapa.

- Toque em `+` ou `−` para aplicar zoom. Pinçar para aplicar zoom não é suportado.

- Toque no botão de seguir localização para manter o mapa centralizado na sua posição. O botão fica laranja quando ativado e a tela permanece ligada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_M.jpg" alt="Mapa e controles de zoom do Ripple UI" width={500} height="auto" /></p>

</TabItem>

<TabItem value="extra" label="Extra">

Abra o menu da tela inicial no canto inferior esquerdo para acessar `Extra`, que contém configurações e ferramentas do dispositivo.

- **Display:** Ajuste o tamanho da fonte, tema, animações e cor de destaque.

- **Wi-Fi:** Configure sua conexão e downloads de mapas. O download de mapas requer um código de desbloqueio.

- **Networks:** Crie e gerencie perfis de rede.

- **GPS Config:** Configure as configurações de comunicação do GPS; os padrões normalmente funcionam para o L2 Pro.

- **Timezone:** Defina o deslocamento UTC local.

- **SX1262:** Verifique o status de inicialização do rádio LoRa. `code=0` significa sucesso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_Extra.jpg" alt="Configurações de sistema Extra do Ripple UI" width={500} height="auto" /></p>

</TabItem>

</Tabs>

### Barra de título e menu do sistema

| Área | Função |
| --- | --- |
| Toque no lado esquerdo da barra de título | Abre `Switch To` para alterar perfis de rede |
| Pressione e segure o canto superior esquerdo | Captura uma captura de tela |
| Meio da barra de título | Abre alternâncias rápidas |
| Lado direito da barra de título | Abre informações de GPS |
| Menu inferior esquerdo na tela inicial | Abre as configurações do sistema, incluindo Display, Wi-Fi, Networks e Timezone |

### Fazer uma captura de tela

**Pressione e segure o canto superior esquerdo da tela** para capturar a visualização atual. Você pode usar capturas de tela para compartilhar configurações ou relatar um problema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_screenshot.gif" alt="Pressionando e segurando o canto superior esquerdo para fazer uma captura de tela" width={500} height="auto" /></p>

As capturas de tela são arquivos BMP com nomes de arquivo contendo data e hora, como mostrado abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_bmp_screenshot.png" alt="Capturas de tela BMP com nomes de arquivo contendo data e hora" width={800} height="auto" /></p>

## Envie sua primeira mensagem

### Torne seus dispositivos detectáveis

1. Configure ambos os dispositivos com configurações de rádio MeshCore correspondentes.

2. Dê a cada dispositivo um nome de `Identity` diferente.

3. Defina `Advert` como `On` para permitir anúncios de identidade.

4. Abra `Discover` na página `L` e aguarde os nós próximos aparecerem.

Para enviar um anúncio de identidade imediatamente, abra o menu `Discover`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_discover.bmp" alt="Menu Discover com Scan Local, Send ID Local e Send ID Broadcast" width={400} height="auto" /></p>

| Opção | Função |
| --- | --- |
| `Send ID Local` | Envia um anúncio de identidade de zero salto para dispositivos próximos |
| `Send ID Broadcast` | Transmite sua identidade para a malha |
| `Scan Local` | Solicita respostas de nós próximos que oferecem suporte a respostas de descoberta; comumente usado para descobrir repetidores |

`Scan Local` não lista todos os dispositivos. Um nó deve estar dentro do alcance e configurado para responder.

### Adicionar contatos

1. Selecione o nó de destino em `Discover`.

2. Abra o menu no canto superior direito e selecione `Add to Contacts`.

3. Volte para `L` e confirme que o contato está listado.

4. Repita no outro dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_contact.png" alt="Descubra nós próximos, adicione um nó aos contatos e visualize-o na lista de contatos" width={1100} height="auto" /></p>

### Enviar uma mensagem direta

1. Abra o contato.

2. Toque no campo de entrada e digite uma mensagem.

3. Pressione `ENTER` para enviar e aguarde o reconhecimento.

4. Abra a conversa no outro dispositivo e responda.

Mensagens diretas aguardam um reconhecimento (ACK) do destinatário. Se o envio falhar, verifique as configurações de rádio e a distância, depois tente novamente. Se a rota anterior não puder mais ser usada, selecione `Flood (reset)` em `Path` para encontrar uma nova rota.

## Mapas e trilhas de GPS

### Preparar mapas offline

1. Prepare um cartão microSD formatado em FAT32 de 32 GB ou menos.

2. Salve os blocos de mapa raster usando esta estrutura de pastas no cartão:

```text

/tiles/{zoom}/{x}/{y}.png

```

3. Insira o cartão, ligue o dispositivo e abra `M`. O dispositivo precisará ser reiniciado se o cartão SD for montado ou desmontado.

4. Desloque o mapa até uma área coberta pelos seus blocos e selecione um nível de zoom disponível.

`zoom` é o nível de zoom; `x` e `y` são coordenadas dos blocos. Dispositivos bloqueados renderizam apenas **níveis de zoom 1–9**. Níveis de zoom mais detalhados exigem um código de desbloqueio.

### Baixar mapas via Wi-Fi (desbloqueio necessário)

1. Desbloqueie o dispositivo usando as instruções abaixo.

2. Abra `Wi-Fi` no menu do sistema da tela inicial.

3. Insira o nome e a senha da sua rede e ative o download de mapas.

4. Pressione `ENTER` para salvar e reinicie quando solicitado.

5. Confirme que o menu Wi-Fi mostra um indicador de conexão laranja.

6. Abra o mapa e desloque ou aplique zoom até a área desejada. Os blocos são baixados sob demanda e armazenados em cache no cartão SD.

### Definir a localização usada em anúncios

| Configuração de localização do anúncio | Localização usada |
| --- | --- |
| `GPS` | A posição obtida pelo GPS do dispositivo |
| `Manual` | Uma posição fixa selecionada com `Advert Loc` no mapa |

Para usar um ponto selecionado no mapa, primeiro defina `Advert Location` como `Manual`. No modo GPS, os anúncios continuam usando a posição do GPS.

## Desbloquear recursos premium

Você pode testar a troca de mensagens básica antes de comprar um código de desbloqueio. Desbloqueie o dispositivo quando precisar de mapas detalhados, downloads de mapas via Wi-Fi, trilhas mais longas ou recursos avançados de administração.

### Encontrar o número de série do seu dispositivo

Encontre e abra `Unlock` nos menus do dispositivo. Anote o **Serial number** exibido nessa tela. Use esse número de série completo para sua compra, em vez dos últimos caracteres de um endereço MAC ou de um PIN de Pair Device.

### Obter um código de desbloqueio

Abra a [página de código de desbloqueio do Ripple Ultra do Scott](https://buymeacoffee.com/ripplebiz/e/249834), siga as instruções de compra e forneça o número de série exibido no seu dispositivo. As licenças são emitidas por dispositivo; insira apenas um número de série de dispositivo para cada licença.

Se o seu dispositivo veio com um código de desbloqueio aplicável, prossiga para a próxima etapa.

### Inserir o código no seu dispositivo

1. Quando você receber o código de desbloqueio para o seu número de série, abra `Unlock` novamente.

2. Insira o código completo e envie.

3. Após a ativação bem-sucedida, a opção `Unlock` desaparece.

4. Abra o recurso premium que você deseja usar e confirme que ele está disponível.

Guarde o código junto com o número de série do dispositivo. Em nosso teste, apagar a flash com `erase_flash` e reinstalar o firmware exigiu inserir novamente o código de desbloqueio do dispositivo.

### Recursos premium

- **Telemetria automática:** Solicita telemetria quando você abre uma conversa com um caminho direto. Mostra localização, direção e distância se o outro nó permitir telemetria de GPS.

- **Room Admin CLI:** Acesse a linha de comando do Room Server com sua senha de administrador.

- **Repeater Admin:** Verifique o status do repetidor e gerencie o nó remotamente.

- **Sensor Admin:** Acesse comandos de sensor, telemetria e gerenciamento de permissões.

- **Zoom de mapa mais detalhado:** Exiba blocos de mapa acima do nível de zoom 9.

- **Download via Wi-Fi:** Baixe blocos de mapa sob demanda e armazene-os em cache no cartão SD.

- **Trilhas de GPS mais longas:** Registre mais do que os 64 pontos de GPS permitidos em dispositivos bloqueados.

## Uso avançado

### Criar e alternar perfis de rede

1. Abra o menu do sistema na tela inicial e selecione `Networks`.

2. Selecione `New Network`, configure as configurações de rádio e nomeie o perfil.

3. Salve e reinicie se solicitado.

4. Toque no lado esquerdo da barra de título e selecione um perfil em `Switch To`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_new_network.jpg" alt="Criando um perfil de rede MeshCore em Networks" width={500} height="auto" /></p>

Cada perfil tem sua própria identidade, contatos e preferências. Abrir um contato pertencente a outro perfil pode solicitar que você alterne de perfil. Esse aviso não indica que o dispositivo detectou qual rede o outro nó está usando no momento.

## FAQ

### Código de status SX1262

Esta tela mostra o código de retorno RadioLib da inicialização do rádio LoRa. `0` significa que a inicialização foi bem-sucedida. A tela é destinada a diagnósticos de rádio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_lora_normal.jpg" alt="Código de inicialização SX1262=0 indica sucesso" width={500} height="auto" /></p>

### Descobrir outro dispositivo

- Confirme que ambos os dispositivos usam perfis MeshCore compatíveis com configurações de rádio correspondentes.

- Ative Advert no outro dispositivo ou peça para ele enviar `Send ID Local`.

- Comece com um teste de curta distância em uma área aberta.

- `Scan Local` lista apenas nós que respondem a solicitações de descoberta; ele não substitui anúncios de identidade de todos os dispositivos.

### Por que o mapa está em branco

Verifique o formato do cartão SD, os caminhos dos blocos e se existem blocos para a área exibida. Em um dispositivo bloqueado, verifique também se o nível de zoom está entre 1–9. Uma posição de GPS válida não significa que os blocos de mapa foram baixados.

## Recursos

- [Ripple Project and Developer Updates](https://buymeacoffee.com/ripplebiz)

- [Ripple Ultra Unlock Code](https://buymeacoffee.com/ripplebiz/e/249834)

- [MeshCore Project and Documentation](https://github.com/meshcore-dev/MeshCore)

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

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
