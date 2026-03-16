---
description: reTerminal DM Ignition Edge Panel Builder Hello World
title: reTerminal DM Ignition Edge Panel Builder Hello World
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 09/29/2023
  author: Corey Thompson
createdAt: '2023-09-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Ignition-Edge-Panel-Builder/
---

:::note
Este documento pressupõe que você já tenha um Ignition Edge Gateway em execução e na sua rede. 
Antes de tentar seguir estas instruções, siga [Começando com Ignition Edge](/pt-br/reTerminal-DM-Getting-Started-with-Ignition-Edge) se você precisar de ajuda com isso.
:::

## Pré-requisitos de Hardware
- PC / Mac com capacidade de terminal SSH
- PC / Mac com capacidade de espaço em disco disponível para instalar os aplicativos Designer do Ignition
- Fonte de alimentação de 12-24V CC
- Cabo Ethernet
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

## Licenciamento
Este tutorial não exigirá a ativação de nenhum produto, embora isso possa causar alguma interrupção para você durante a série, dependendo do ritmo em que estiver trabalhando ao acompanhar. Os produtos Ignition Edge exigem uma licença para uso completo em produção. Há uma versão de avaliação do produto disponível que possui suporte completo a recursos; no entanto, ela apagará seus dados a cada duas horas. 

Para obter uma licença para o produto, você precisará entrar em contato com um representante de vendas da Inductive Automation ou poderá adquirir uma por conta própria na página de [preços do Ignition da Inductive Automation](https://inductiveautomation.com/pricing/ignition).

Para inserir a licença, basta seguir o banner verde solicitando que você ative o ignition na página inicial do seu Ignition Edge Gateway. Certifique-se de que seu dispositivo edge tenha conectividade com a internet e insira a sequência de 6 ou 8 caracteres; o dispositivo levará alguns segundos para ativar.

## Criando uma Visualização Hello World com o Panel Designer

Para demonstrar como criar uma página básica e exibi-la em um URL fixo, criaremos um projeto Perspective de “hello world” e o veremos no gateway usando um navegador web. 

Para carregar a página inicial do gateway, abra um navegador da web no próprio reTerminal em `localhost:8088` OU de outro dispositivo na rede em `{reterminalhostname}:8088` OU de qualquer lugar na rede com o endereço IP do próprio reTerminal em `{reterminalip}:8088`

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### Instalar e Configurar o Ignition Edge Panel Builder

Na tela inicial do gateway há um botão para baixar o Designer Launcher. O Designer Launcher é o software de design de IHM que é instalado no seu PC/Mac local e carrega remotamente os projetos no reTerminal DM. 

Comece baixando e executando este instalador. Ele detectará seu sistema operacional e instalará um aplicativo na sua máquina com um instalador bem básico. Após a conclusão da instalação, ele perguntará se você deseja importar suas configurações do gateway - clique em **yes**.

Inicie o recém-instalado Ignition Designer Launcher; ele deve mostrar a conexão com o seu dispositivo. Clique no seu dispositivo e depois clique no botão 'open designer' que agora está habilitado no canto inferior.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

Agora você deverá ver um prompt de login aparecer. Insira suas credenciais de administrador do Ignition que foram definidas durante a configuração do seu Edge Gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### Criar e Carregar um Painel

1. Na coluna da esquerda, expanda 'Perspectives' e clique com o botão direito em 'Views'
2. Crie uma nova view e dê a ela o nome 'hello-world'
3. Encontre a paleta de componentes, que às vezes fica em um contêiner de abas oculto à sua direita. Procure por um 'label' e arraste-o para a tela.
4. Dê um clique duplo no label e altere o texto para 'hello world'
5. Salve o arquivo e, na barra de menus superior, navegue até File -> Update Project para publicar o projeto atualizado (também chamado de 'Perspective session') no gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

Agora que você atualizou sua Perspective session, ela está ativa e você pode navegar até ela com um navegador web! 
Para obter ajuda para encontrar o URL da view que acabamos de criar, você pode retornar ao Edge Gateway Launcher e visualizar as Perspective sessions ativas. Isso abrirá um navegador no URL da página inicial da sua sessão.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## Expandindo Sua IHM
Agora você configurou o básico do módulo Perspective do Ignition para alimentar os visuais do seu ReTerminal. Para criar visuais mais poderosos aproveitando toda a plataforma Ignition, você provavelmente precisará configurar Tag Servers, bancos de dados Historian etc., que estão fora do escopo deste tutorial. Para saber mais sobre a plataforma Ignition, use a excelente documentação e instruções deles gratuitamente em [Inductive University.](https://inductiveuniversity.com/)

## Perspective vs Vision
O Ignition oferece dois softwares de criação de painéis e é uma dúvida comum decidir qual deles usar. Há muita sobreposição de funcionalidades entre os dois, mas existem alguns fatores-chave para tomar a decisão.

### Seus usuários serão mobile-first? Escolha Perspective.
Se você deseja usar pacotes nativos iOS ou Android, como serviços de localização ou câmeras, você só terá acesso a esses recursos por meio do Perspective.

### Você quer algo que pareça mais nativo do que um navegador? Escolha Vision.
Se você quiser evitar a sensação de muitos aplicativos web modernos (como Google Drive, Outlook para web, Zoom para web, etc.) e imergir totalmente sua experiência de usuário, então você deve escolher Vision.

### Seus usuários irão multitarefar neste dispositivo? Escolha Perspective
Perspective é uma pilha de tecnologia baseada em javascript e depende de um navegador web para exibir o aplicativo. Vision é um aplicativo baseado em Java e foi originalmente construído para painéis de IHM dedicados, partindo da premissa de que a máquina hospedeira será totalmente dedicada ao seu aplicativo. Se o seu usuário às vezes quiser minimizar a IHM para usar outro aplicativo no sistema operacional, você deve escolher Perspective.

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
