---
description: Primeiros passos com N3uron
title: Primeiros passos com N3uron
keywords:
  - reTerminal DM
  - Primeiros passos
  - IIoT
  - Industrial
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalDM_N3uron_Get_Start
last_update:
  date: 2/27/2024
  author: Xabier Fernández and Kasun Thushara
createdAt: '2024-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminalDM_N3uron_Get_Start/
---

## O que é N3uron?

[N3uron](https://n3uron.com/) é uma **Plataforma Industrial de Borda completa para IIoT e DataOps** que permite integração perfeita entre o chão de fábrica industrial e aplicações de terceiros, tanto on‑premises quanto na nuvem.

Com o N3uron, você pode criar facilmente pipelines de dados bidirecionais entre sistemas OT e IT e desacoplar dispositivos de aplicações, consolidando, modelando, processando e visualizando todos os seus dados operacionais em uma única fonte de verdade e, por fim, tornando todos esses dados disponíveis em toda a organização.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **Modular**: É totalmente modular, com quase cinquenta módulos, os usuários podem empilhá-los conforme necessário para atender às necessidades de seus projetos, adquirindo apenas aqueles estritamente necessários para suas aplicações.
- **Multiplataforma**: O N3uron pode ser executado na maioria das versões do Windows e distribuições Linux, bem como em arquiteturas ARM como o Raspberry Pi.
- **Licença ilimitada**: O N3uron possui um modelo de licenciamento ilimitado, oferecendo uso irrestrito em termos de tags, usuários, dispositivos e conexões, tudo por um preço acessível.
- **Baseado na Web**: Depois de instalado, tudo o que você precisa para acessar o nó é um navegador web.
- **Implantação e desenvolvimento rápidos**: O N3uron pode ser instalado em menos de um minuto, e seu ambiente de desenvolvimento facilita a criação rápida de modelos de dados, especialmente ao utilizar templates.
- **Extremamente eficiente**: Um único nó pode gerenciar facilmente várias centenas de milhares de tags, mantendo baixos requisitos de hardware.
- **Arquitetura escalável e versátil**: Desde o início, o N3uron foi concebido para implantar perfeitamente arquiteturas distribuídas com várias centenas ou milhares de nós. Os usuários podem conectar múltiplos nós rapidamente usando N3uron Links, escalando sua arquitetura sem esforço para atender às suas necessidades.

## Pré‑requisitos

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos instalar a versão **Bullesye** do sistema operacional Raspberry Pi 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/)

## Instalação

O N3uron pode ser facilmente instalado com nosso script de instalação automatizada de uma etapa. Antes de prosseguir com as etapas a seguir, verifique se o seu reTerminal DM está conectado à internet. Além disso, presumimos que você esteja utilizando o Raspberry Pi OS padrão fornecido com o reTerminal.

 **Passo 1**: Primeiro você precisa obter acesso ao reTerminal DM.

- Desktop: Conecte o mouse e o teclado diretamente. Em seguida, abra o aplicativo Terminal no seu dispositivo reTerminal DM.

- VNC: Desktop remoto completo usando Virtual Network Computing (VNC).

- SSH: Conexão remota usando Secure Shell (SSH). Certifique‑se de que o seu reTerminal esteja acessível via rede e que o servidor SSH esteja habilitado.

Para mais informações, visite: [Configuração de um servidor SSH no reTerminal DM](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

No seu terminal, digite o comando:

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```

No Raspberry Pi OS, o nome de usuário padrão é pi.
Por exemplo:

```sh
ssh pi@192.168.2.100
```

Você será solicitado a inserir a senha; no Raspberry Pi OS, a senha padrão é **raspberry**.

- Passo 2: Instalando o N3uron com o script de instalação automatizada de uma etapa.

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

Em poucos segundos, você terá o N3uron instalado, em execução e funcionando.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## Desinstalação

Para desinstalar o N3uron do reTerminal, execute os seguintes comandos no seu Terminal

**Passo 1:** Desinstalar o serviço N3uron.

```sh
sudo <n3uron folder>/bin/n3uron uninstall
```

Por exemplo, se o N3uron estiver instalado na pasta ‘/opt/n3uron’, o comando será:

```sh
sudo /opt/n3uron/bin/n3uron uninstall
```

**Passo 2:** Excluir a pasta N3uron (opcional).

```sh
sudo rm -r <n3uron folder>
```

Por exemplo, se a pasta N3uron for ‘/opt/n3uron’ o comando será:

```sh
sudo rm -r /opt/n3uron
```

## Acessando o WebUI do N3uron

Para acessar o WebUI do N3uron, siga estas etapas:

**Passo 1:** Abra um navegador web na sua máquina local.

**Passo 2:** Digite um dos seguintes endereços na barra de endereços do navegador:

- Para acesso local: http://localhost:8003 .
- Para acesso remoto dentro da rede local (LAN): http://reTerminal_IpAddress:8003.
- Para acesso local seguro: https://localhost:8443 .
- Para acesso remoto seguro dentro da rede local (LAN): https://reTerminal_IpAddress:8443.

**Passo 3:** Pressione Enter para navegar até a página de login do WebUI do N3uron.

**Passo 4:** Insira o nome de usuário padrão **admin** e a senha **n3uron** quando solicitado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## Uso

O N3uron foi projetado com uma arquitetura orientada a microsserviços na qual cada módulo é executado como um processo independente e o Bootstrap é o serviço central que gerencia o restante dos processos. Por padrão, o módulo **WebUI** é ativado automaticamente, tornando‑o acessível assim que a instalação é concluída; funcionalidades adicionais são habilitadas criando novas instâncias de módulo.

Cada módulo requer uma licença válida para ser executado em modo de produção. Se um módulo não encontrar uma licença válida, ele será executado em modo de demonstração por duas horas. Para reiniciar o período de demonstração, o módulo deve ser reiniciado.

Vamos utilizar o módulo WebVision para criar nossa primeira experiência de IHM, aprimorando os recursos de visualização do nosso reTerminal DM.

## Introduzindo o WebVision ao reTerminal DM

O WebVision é uma interface HMI/SCADA puramente web e autossuficiente, voltada para aplicações industriais. Construído inteiramente com tecnologias JavaScript, HTML5 e CSS, o WebVision oferece flexibilidade incomparável, permitindo que os usuários controlem suas aplicações de forma transparente em uma infinidade de dispositivos, como smartphones, tablets, telas sensíveis ao toque, laptops, computadores desktop e videowalls de salas de controle.

Projetado como uma solução tudo‑em‑um, o WebVision elimina a necessidade de aplicações externas — tudo o que você precisa vem pronto para uso. Desde monitoramento e controle até coleta e análise de dados, o WebVision estabelece o padrão de eficiência e conveniência.
Para mais informações, visite nosso site dedicado ao WebVision em nossa [Base de Conhecimento](https://docs.n3uron.com/docs/web-vision).

### Instanciar um módulo WebVision

**Passo 1:** Abra o N3uron e navegue até o menu Config.

**Passo 2:**  Clique em Modules e, em seguida, crie um novo módulo. Essa instância pode receber qualquer nome (exceto nomes com caracteres especiais como ‘.’, ‘/’, etc.), embora seja recomendado aos usuários nomear as instâncias de forma semelhante ao nome do módulo que está sendo instanciado para facilitar a identificação. Neste exemplo, o módulo WebVision foi selecionado e também recebeu o nome WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**Passo 3:** Navegue até a configuração principal do WebVision e escolha as configurações de servidor apropriadas. As configurações padrão devem ser suficientes para a maioria dos casos de uso. Para mais detalhes, consulte o seguinte link: [Configuração inicial do WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**Passo 4:** Depois que o módulo WebVision tiver sido instanciado, o primeiro passo é atribuir permissões aos papéis criados previamente na seção Roles do WebUI. Por padrão, existem dois papéis: Administrator para acesso administrativo e User para acesso comum. Você pode adicionar usuários a esses papéis ou criar novos conforme necessário. Uma vez definidos os papéis, configure as permissões para Designer e Viewer de acordo.
Além disso, estabeleça um caminho de filtro de Tag para cada papel. O acesso ao caminho de filtro de Tag determina quais tags do modelo de tags estarão acessíveis para visualização pelo respectivo papel. Neste caso, atribuiremos o caminho completo do modelo de tags a ambos os papéis.

- Administrator:
  - Designer: Edit
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*
- User:
  - Designer: None
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_7.gif" /></center>

- Links úteis

  - [Configuração de Usuários e Papéis](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [Configuração de Acesso](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Passo 5:** Para testar nossa tela inicial do WebVision, vamos criar uma tag. Vá para a WebUI, selecione **Config** e, em seguida, clique em **Tag**. Na seção **Model**, clique no menu e escolha **New Tag**. Dê a ela o nome **TestTag**, por exemplo, selecione o tipo como **Number**, conceda **permissão de Leitura-Escrita**, inicialize em 0 (opcional) e então salve as configurações.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**Passo 6:** Em seguida, navegue até o WebVision na seção Config e clique em **Open Designer**.
Faça login usando suas **credenciais de Administrador**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**Passo 7:** Na seção Templates, crie um novo Container chamado Main. Em seguida, defina este container como inicialização. Isso definirá Main como nossa tela inicial do WebVision. Ele aparecerá com um símbolo de asterisco (*) ao lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**Passo 8:** Altere a cor de fundo do container Main.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**Passo 9:** Dentro do container Main, navegue até Components e adicione um novo componente. Para este exemplo, selecione o componente Gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**Passo 10:** Dentro do componente Gauge, selecione a tag que fornecerá os valores exibidos no componente gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**Passo 11:** Em seguida, navegue até o WebVision na seção Config e clique em Open UI.
Faça login usando suas credenciais de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**Passo 12:** Para testar nosso design simples, navegue até a WebUI e selecione Data > Realtime. Altere o valor de TestTag. Depois, retorne à interface do WebVision e verifique se o valor exibido pelo componente Gauge foi atualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

Há muito o que explorar sobre o WebVision para aprimorar sua experiência com o reTerminal DM. Para mais detalhes, consulte nossa [Base de Conhecimento sobre o WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

O módulo WebVision da N3uron, combinado com o reTerminal DM da Seeed Studio, oferece um poderoso processamento visual para aplicações SCADA e HMI, exemplificado nesta imagem para fins ilustrativos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

O que você viu é apenas o começo. Aproveite as possibilidades ilimitadas oferecidas por seu impressionante conjunto de quase 50 módulos. Ouse sonhar grande, inovar e levar seus projetos a novos patamares com os recursos de ponta da N3uron. Para se aprofundar nesta poderosa plataforma, visite [https://n3uron.com/](https://n3uron.com/) e embarque em uma empolgante jornada de descoberta!

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Disponibilizamos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
