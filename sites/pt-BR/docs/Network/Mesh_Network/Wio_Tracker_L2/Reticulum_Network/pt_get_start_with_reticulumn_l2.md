---
description: Este guia explica a instalação do Reticulous, a fim de se conectar à rede mesh Reticulum usando o Seeed Studio L2 Pro.
title: Introdução ao Reticulous
keywords:
    - reticulum
    - L2 Pro
    - reticulous
    - mesh network
    - network stack
    - LoRa mesh
    - transport-agnostic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /reticulum_l2_pro_reticulous
sku: 100029766
sidebar_position: 1
last_update:
  date: 11/27/2026
  author: Michelle Huang
createdAt: '2026-11-27'
updatedAt: '2026-11-27'
url: https://wiki.seeedstudio.com/pt-br/reticulum_l2_pro_reticulous/
---

# Reticulum no L2 Pro com Reticulous

## O que é Reticulum?

[Reticulum](ihttps://reticulum.network/) é uma _network stack_ mesh independente do meio de transporte, permitindo redes mesh que vão muito além do uso exclusivo de LoRa: com o Reticulum, nós se interconectam via LoRa, Wi‑Fi, Bluetooth BLE, qualquer outro tipo disponível de rádio (FM, AM, UHF, etc.), mas também via internet, ou qualquer coisa que venha a existir no futuro, _tudo ao mesmo tempo_. 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/reticulumdescription.png" style={{width:900, height:'auto'}}/>
</div>

Reticulum também é diferente de tentativas anteriores de redes mesh somente com LoRa, pois é uma _network stack_ completa, não apenas um protocolo de mensagens. Protocolos e aplicativos podem ser construídos e usados sem limites _sobre_ o próprio Reticulum. Reticulum é verdadeiramente uma nova [filosofia](https://reticulum.network/manual/zen.html) para redes mesh e comunicações, para redes _pós‑internet_.

A Reticulum Network Stack (RNS) possui um conjunto imenso de possibilidades que agora está apenas começando a ser explorado. Sua [documentação](https://reticulum.network/manual/index.html) é extensa, e é o ponto de partida para qualquer pessoa que queira entendê‑la em profundidade e construir sobre ela. 

Qualquer pessoa disposta a explorar o Reticulum pode fazê‑lo usando qualquer computador rodando qualquer sistema operacional. Usar um gerenciador de pacotes (apt, pip, pipx) para instalar facilmente o pacote base _reticulum_ e seu aplicativo de terminal _nomadnet_ ou o programa gráfico _sideband_ é um bom começo. Alguns podem preferir formas mais modernas e integradas de se conectar ao Reticulum, como [ratspeak](https://ratspeak.org/) ou [meshchatX](https://meshchatx.com/). Muitos desses aplicativos existem para permitir que telefones e computadores se conectem à rede Reticulum, por exemplo via Wi‑Fi local ou internet.

## Reticulous.

Uma forma simples e integrada de se conectar ao Reticulum que exige pouco ou nenhum conhecimento técnico prévio é o [Reticulous](https://reticulous.net/), que é o objeto deste rápido tutorial. 

Reticulous é uma suíte totalmente integrada para a série de microcontroladores ESP32, executando uma stack completa do Reticulum, um sistema operacional gráfico (incluindo uma interface web) e numerosos aplicativos fáceis de usar para enviar mensagens, navegar em páginas nomadnet, fazer chamadas de voz, participar de conferências de voz e muito, muito mais, usando LoRa, Bluetooth e Wi‑Fi.

Reticulous é desenvolvido principalmente por Rop Gonggrijp, um pioneiro holandês da internet. Ele foi cuidadosamente projetado e exclusivamente programado por meio do uso de LLM.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/1_reticulous-website.png" style={{width:900, height:'auto'}}/>
</div>

### Instalando o Reticulous no L2 Pro


1. Use um navegador da web compatível com o protocolo _WebSerial_. Ou seja, o Firefox com uma versão mais recente que a v.151 (versões anteriores exigem a instalação de um [addon Webserial](https://addons.mozilla.org/en-US/firefox/addon/webserial-for-firefox/).), ou qualquer navegador baseado em Chrome.

2. Conecte seu navegador ao [site do Reticulous](https://reticulous.net), clique em _"flashing"_ e no link [open flashmon](https://reticulous.net/flashmon/), ou conecte‑se diretamente ao [flashmon](https://reticulous.net/flashmon/), o aplicativo de gravação do Reticulous.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_reticulous-flashing.png" style={{width:600, height:'auto'}}/>
</div>

3. Certifique‑se de que seu dispositivo esteja conectado via USB. Você talvez precise autorizar o navegador a _acessar a porta serial_ de diferentes maneiras, dependendo do navegador e do seu sistema operacional. 

Para usuários de sistemas operacionais baseados em Linux, seu usuário deve ser adicionado ao grupo _dialout_, executando o comando:

```
sudo adduser [name-of-your-user] dialout
``` 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_L2-usb-connect.jpg" style={{width:600, height:'auto'}}/>
</div>

4. O dispositivo precisa ser colocado em modo DFU para que a gravação seja possível. Pressione o botão _user_ ("U/B"), localizado no centro à direita do dispositivo, e mantenha‑o pressionado enquanto liga o dispositivo, ou enquanto pressiona o botão _reset_ se ele já estiver ligado. A tela ficará preta, o dispositivo agora está em modo DFU, pronto para a gravação.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/3_reticulous-flashing-detecting.png" style={{width:600, height:'auto'}}/>
</div>

5. O Reticulous Flashmon deve detectar o modelo correto de dispositivo e apresentar uma caixa de diálogo. Pressione _"Flash Reticulous to seeed-l2pro"_.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/4_reticulous-flashing-in-progress.png" style={{width:600, height:'auto'}}/>
</div>

6. Aguarde a conclusão da gravação, e o dispositivo será reiniciado.


### Configurando o Reticulous

Após a gravação bem‑sucedida, há várias maneiras de configurar o Reticulous:

#### Pelo aplicativo de onboarding na tela

A tela do dispositivo convidará você a configurar parâmetros básicos: conectar a uma rede Wi‑Fi, escolher uma senha mestra para o dispositivo, inserir alguns parâmetros de LoRa.

#### Pela WebUI

Um recurso útil do Reticulous é sua WebUI. A partir de um navegador da web é possível controlar todas as funções do Reticulous, com mais facilidade e mais espaço do que na própria tela do dispositivo. Isso também pode ser usado remotamente (no caso de dispositivos embarcados como um Xiao instalado em um gabinete em um telhado ou varanda) e para dispositivos (como o próprio Xiao) que nem sequer têm tela ou interface.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-webui-LXMF.png" style={{width:900, height:'auto'}}/>
</div>

Durante os primeiros 10 minutos após a inicialização, o Reticulous criará uma rede Wi‑Fi com um nome começando com _"reticulous_". Conecte‑se a ela e abra seu navegador em https://reticulous.local (ele pode reclamar sobre o certificado, isso é normal, apenas conecte‑se mesmo assim).

Aqui você verá as mesmas opções de onboarding como se estivesse no próprio dispositivo: senha mestra, configuração de Wi‑Fi, parâmetros de LoRa, etc. 


#### Interfaces

Um conceito chave no Reticulum é o conceito de _interfaces_. Como o Reticulum é independente do meio de transporte, isso significa que ele pode se conectar por qualquer meio possível. Cada _interface_ é um meio de conexão. Ela deve ser configurada corretamente, então o Reticulum irá rotear informações de forma transparente por todas as interfaces, dependendo de onde um destino está localizado. Quando uma interface cai, o tráfego continuará pelas interfaces restantes.

As interfaces podem ser configuradas no menu "settings" / "reticulum mesh" / "interfaces", e podem ser de muitos tipos diferentes:

- _TCP_: um tipo de interface que se conecta ao Reticulum pela Internet. É um bom ponto de partida se você quiser se conectar a uma parte maior da rede Reticulum. Encontre endereços para usar como interfaces TCP no [diretório de receitas RNS](https://directory.rns.recipes/)

- _auto_: a interface "auto" usa a conectividade disponível (Wi‑Fi, Bluetooth BLE) para se conectar automaticamente a outros dispositivos dentro do alcance que tenham uma interface "auto" conectada. É a forma mais simples de conectar dois dispositivos em uma rede local.

- _LoRa_: configurar parâmetros compartilhados para LoRa, como uma frequência base, largura de banda e um fator de espalhamento (SF), permite que vários dispositivos se conectem entre si a longas distâncias. Essas configurações devem ser objeto de um consenso local, dependendo das regulamentações locais, ocupação de frequência e de suas necessidades específicas.

- _Bluetooth_: se ativada, o dispositivo pode se conectar a outros dispositivos com interfaces Bluetooth ativadas. É bastante limitada em comparação com Wi‑Fi ou LoRa, mas pode ser útil em alguns casos (dispositivos baseados em nRF52, por exemplo, não têm conexão Bluetooth...)

- _rnode_: um tipo especial de interface que conecta um dispositivo com capacidade LoRa a outro dispositivo que NÃO tem capacidade LoRa, para fornecer a ele capacidade LoRa (como um tipo de "modem LoRa"). O Reticulous permite essa função, então seu dispositivo L2 Pro pode ser usado para fornecer uma interface _rnode_ a um laptop ou telefone, permitindo que ele se conecte ao Reticulum via LoRa, por meio de um cabo USB ou de uma conexão Bluetooth. Você pode fornecer conectividade a um dispositivo (laptop, telefone) usando uma interface rnode, enquanto ao mesmo tempo usa todas as outras funcionalidades do Reticulous. 


### Usando o Reticulous

#### Pela WebUI

Depois que sua rede Wi‑Fi tiver sido configurada, você pode retornar à tela de configuração de Wi‑Fi (indo ao menu _"settings"_, depois ao submenu _"wifi"_) para verificar o endereço IP do L2 Pro, e digitar esse endereço IP no seu navegador a partir de um computador conectado à mesma rede, para acessar a WebUI.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-wifi-settings.png" style={{width:300, height:'auto'}}/>
</div>

Depois de inserir sua _senha mestra_ você pode acessar todas as funcionalidades do Reticulous no seu navegador, em um ambiente com janelas.

#### No dispositivo usando a tela sensível ao toque

Reticulous apresenta uma interface "parecida com a de um telefone", com um conjunto de aplicativos dedicados para usar diferentes protocolos sobre a rede Reticulum. Clique em cada app para usá‑lo e use o botão _user_ (no meio à direita do dispositivo) para voltar ao _app drawer_ a qualquer momento. Aqui estão alguns exemplos de aplicativos:


<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-main-menu.png" style={{width:300, height:'auto'}}/>
</div>


##### LXMF

LXMF (Lightweight Extensible Message Format) é o protocolo usado para enviar mensagens criptografadas via Reticulum. Insira o endereço LXMF de alguém, ou aguarde até que o destino dessa pessoa seja anunciado e exibido na seção _"on the mesh"_ do app LXMF, e comece a conversar!

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-LXMF.png" style={{width:300, height:'auto'}}/>
</div>


##### Nomadnet

Alguns nós no Reticulum são Nós Nomadnet, servindo páginas muito simples baseadas em texto, usando a marcação _Micron_. Use o app Nomadnet para inserir manualmente o _destino_ de uma dessas páginas (por exemplo, a página Aleph Rngit é onde o código-fonte principal do Reticulum está sendo distribuído por seu autor, Mark Qvist, no seguinte destino: "a8d24177d946de4f1f0a0fe1af9a1338"), ou aguarde que alguns destinos apareçam como _announces_ na seção _on the mesh_ do app Nomadnet.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/6_reticulous-webui-Nomadnet.png" alt="Navegador Nomad exibindo uma sala de bate-papo na interface web Reticulous" style={{width:900, height:'auto'}} />
</div>

##### RRC

RRC é o Reticulum Relay Chat, um protocolo como o antigo protocolo IRC usado na internet, que permite bate-papos em grupo em salas. 

Adicione o destino de um _hub_ conhecido (por exemplo, o destino do popular hub _rnscommunity_ é "28c7c1a68c735693aa8e6b8193ed44b2"), ou aguarde que um seja anunciado na seção _on the mesh_ do app, depois conecte-se a ele e selecione uma sala para entrar, ou crie a sua própria.


##### O único limite é o céu!

Explore muitos outros aplicativos dentro da suíte Reticulous, aprenda mais sobre o Reticulum e suas infinitas possibilidades, junte-se a uma comunidade de milhares de usuários, convoque encontros locais públicos com seus amigos e testemunhe o nascimento da rede pós-internet! Você pode querer desenvolver seus próprios protocolos e aplicativos para o Reticulum... mas isso estaria além do escopo deste tutorial.


### Conectar a outros dispositivos

Para se conectar localmente a outros dispositivos, ou para construir uma rede mesh (esteja ela conectada ou não ao restante da rede Reticulum), você precisa garantir o seguinte:

1. O software original do Reticulum é tão mínimo e frugal que pode rodar em qualquer computador com menos de 20 anos. Use qualquer laptop antigo ou um Raspberry Pi antigo ou qualquer outro SBC como nó. Qualquer telefone serviria. Qualquer outro dispositivo baseado em microcontrolador, como outro L2 Pro ou um Xiao, também seria um nó Reticulum perfeito...

2. Instale o Reticulum no outro dispositivo (ou Reticulous se for um dispositivo baseado em ESP32);

3. Certifique-se de que ambos os dispositivos tenham parâmetros LoRa semelhantes se você quiser usar LoRa, ou que ambos estejam usando Wi-Fi em redes que estejam interconectadas, ou que ambos estejam usando a interface _"auto"_ e tenham o Wi-Fi ou Bluetooth ativado, ou que ambos tenham uma interface TCP conectando-os à internet;

4. Aguarde até que ambos os dispositivos tenham _announced_ seu _destination_ um ao outro e use o aplicativo LXMF em um dispositivo para clicar no destino do outro dispositivo, assim que ele aparecer na lista "on the mesh", para iniciar um bate-papo;

DICA: A pilha de rede Reticulum depende, para seu roteamento, de _announces_ feitos pelos nós de seu _destination_, e de _path requests_ enviados por um nó a seus vizinhos para tentar encontrar um _path_ para um destino específico. Para se conectar a outro dispositivo executando Reticulum, certifique-se de que ambos os dispositivos tenham _announced_ seu destino para seus vizinhos. Normalmente isso é feito automaticamente quando o Reticulous é inicializado e depois a cada 30 minutos.

## Suporte Técnico & Discussão sobre o Produto

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