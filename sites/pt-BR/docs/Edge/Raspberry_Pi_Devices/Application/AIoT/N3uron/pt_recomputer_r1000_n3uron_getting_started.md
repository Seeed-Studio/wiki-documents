---
description: N3uron é uma Plataforma Industrial de Borda completa para IIoT e DataOps, permitindo integração perfeita entre as linhas de produção industriais e aplicações de terceiros, tanto on‑premise quanto na nuvem. Em conjunto com o Computer R1000, melhora as capacidades de controle na borda e oferece integração robusta com a nuvem para disponibilização contínua de dados em toda a sua organização.
title: reComputer R1000 com N3uron
keywords:
  - Borda
  - reComputer R1000
  - N3uron
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_n3uron
last_update:
  date: 07/08/2023
  author: Kasun Thushara
createdAt: '2023-07-27'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron/
---

## O que é N3uron?

N3uron é uma Plataforma Industrial de Borda completa para IIoT & DataOps que permite integração perfeita entre o chão de fábrica industrial e aplicações de terceiros, seja on‑premise ou na nuvem.
Com o N3uron, você pode criar facilmente pipelines de dados bidirecionais entre sistemas OT e IT e desacoplar dispositivos de aplicações, consolidando, modelando, processando e visualizando todos os seus dados operacionais em uma única fonte de verdade e, por fim, disponibilizando todos esses dados em toda a organização.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **Modular**: É totalmente modular, com quase cinquenta módulos, que os usuários podem empilhar conforme necessário para atender às necessidades de seus projetos, adquirindo apenas aqueles estritamente necessários para suas aplicações.

- **Multiplataforma**: N3uron pode ser executado na maioria das versões do Windows e distribuições Linux, bem como em arquiteturas ARM como o Raspberry Pi.

- **Licença ilimitada**: N3uron conta com um modelo de licenciamento ilimitado, oferecendo uso sem restrições em termos de tags, usuários, dispositivos e conexões, tudo a um preço acessível.

- **Baseado na Web**: Depois de instalado, tudo o que você precisa para acessar o nó é um navegador web.

- **Implantação e desenvolvimento rápidos**: N3uron pode ser instalado em menos de um minuto, e seu ambiente de desenvolvimento facilita a criação rápida de modelos de dados, especialmente ao utilizar templates.

- **Extremamente eficiente**: Um único nó pode gerenciar facilmente várias centenas de milhares de tags, mantendo baixos requisitos de hardware.

- **Arquitetura escalável e versátil**: Desde o início, o N3uron foi concebido para implantar perfeitamente arquiteturas distribuídas com várias centenas ou milhares de nós. Os usuários podem conectar múltiplos nós rapidamente usando N3uron Links, escalando sua arquitetura sem esforço para atender às suas necessidades.

## Primeiros Passos

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a></div></td>
    </tr>
  </table>
</div>

## Instalação

N3uron pode ser facilmente instalado com nosso script de instalação automatizada em uma etapa; simplesmente execute o seguinte comando no terminal do seu reComputer R1000:

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_3.gif" alt="pir" width="600" height="auto" /></div>

Em poucos segundos você terá o N3uron instalado, em execução e pronto para uso.

Se você preferir uma instalação manual, consulte nossa [seção da Base de Conhecimento](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup) para mais informações.

## Uso

N3uron foi projetado com uma arquitetura orientada a microsserviços na qual cada módulo é executado como um processo independente e o Bootstrap é o serviço principal que gerencia o restante dos processos. Por padrão, o [módulo WebUI](https://docs.n3uron.com/docs/platform-web-user-interface) é ativado automaticamente, tornando‑o acessível assim que a instalação é concluída; funcionalidades adicionais são habilitadas criando novas instâncias de módulos.

Cada módulo requer uma licença válida para ser executado em modo de produção. Se um módulo não encontrar uma licença válida, ele será executado em modo de demonstração por duas horas. Para reiniciar o período de demonstração, o módulo deve ser reiniciado.

Vamos ver um exemplo passo a passo de como o N3uron facilita a coleta de dados por meio do [OPC UA Client](https://docs.n3uron.com/docs/opc-ua-client) e como esses dados podem ser publicados perfeitamente em um Broker MQTT usando o [módulo MQTT Client](https://docs.n3uron.com/docs/mqtt), permitindo o envio contínuo de dados via MQTT.

### Configurar o OPC UA Client

- **Passo 1**: Abra o seu navegador favorito em outro dispositivo na rede local para acessar o N3uron WebUI, usando o endereço IP do reComputer R1000 e a porta que foi configurada para o WebUI (por padrão 8003 para HTTP ou 8443 para HTTPS).

Usuários padrão do N3uron WebUI.

<div class="table-center">

|            |   Acesso total |  Acesso somente leitura |  
|---         |     ---       |        ---              |
|  Usuário:  |    admin      |       user              |
|  Senha:    |    n3uron     |       n3uron            |

</div>

- **Passo 2**: Abra o N3uron WebUI e navegue até Config→Modules, clique no menu e então crie um **New Module**; vamos chamá‑lo de **OpcUaClient**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **Passo 3**: Selecione **OpcUaClient** como o tipo de módulo e, em seguida, clique no botão **Save** abaixo para instanciar o módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **Passo 4**: O módulo recém‑criado aparecerá em Modules; navegue até sua configuração e crie um **New Client**; vamos chamá‑lo de **DataSim**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **Passo 5**: Configure o OPC UA Client para se conectar ao nosso endpoint DataSim da seguinte forma:

```sh
Endpoint URL: opc.tcp://datasim.n3uron.com:4840
Security Mode: None
Security Policy: None

Authentication:
 Enabled: Yes
 User: sunn3rgy
 Password: n3uron

```

Clique em **Save** para aplicar as alterações e recarregar o módulo.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **Passo 5**: Navegue até a seção OPC Browser dentro do módulo e selecione o cliente DataSim criado anteriormente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### Criar uma tag

- **Passo 1**: Arraste e solte o objeto desejado do navegador para a seção de modelo de dados.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **Passo 2**: Agora você pode encontrar a tag recém‑criada em Config→Tags e visualizar seu valor na [seção Real Time](https://docs.n3uron.com/docs/platform-visualizing-real-time-values).

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### Criar um template

[Templates](https://docs.n3uron.com/docs/platform-templates) oferecem a capacidade de aproveitar princípios de design de dados orientados a objetos no N3uron, permitindo que os usuários reduzam drasticamente o tempo investido na implantação de um novo projeto.

Ao criar e usar [Templates](https://docs.n3uron.com/docs/platform-templates), os usuários podem gerar novas instâncias para construir rapidamente estruturas de dados complexas e configurações de comunicação. Quaisquer alterações na definição do template são então herdadas por todas as instâncias, economizando drasticamente tempo ao fazer alterações de roteamento.

Basta arrastar e soltar o objeto desejado na seção de templates e começar a construir seu template usando [propriedades personalizadas](https://docs.n3uron.com/docs/platform-templates-custom-properties), [herança](https://docs.n3uron.com/docs/platform-templates-inheritance) e [mais](https://docs.n3uron.com/docs/platform-templates-nesting).

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### Configurar o MQTT Client

**Passo 1**: Vá para Config→Modules, clique no menu e então crie um **New Module** chamado MqttClient.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **Passo 2**: Selecione MqttClient como o tipo de módulo e, em seguida, clique em Save.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **Passo 3**: Navegue até o novo módulo e crie uma **New Connection** chamada HiveMQ.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **Passo 4**: Configure a conexão para usar o broker público HiveMQ:

```sh
Broker URL: broker.hivemq.com
Port: 1883
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>

- **Passo 5**: Crie um New Publisher e defina um tópico de destino, por exemplo “/n3/recomputer”.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **Etapa 6**: Crie um **Tag Filter** para corresponder a todas as tags neste nó; o Tag Filter é como informamos ao módulo quais tags devem ser publicadas no broker. Clique em **Save** para aplicar todas as alterações e recarregar o módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>

- **Etapa 7**: Vá para Diagnostics e ative os logs em tempo real (Real-Time) para o módulo MqttClient, aguardando para ver os logs emitidos pelo módulo sempre que ele publicar novos dados no broker.

 <div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>

### Instanciar um módulo WebVision

**Etapa 1:** Abra o N3uron e navegue até o menu Config.

**Etapa 2:**  Clique em Modules e então crie um novo módulo. Essa instância pode receber qualquer nome (exceto nomes com caracteres especiais como ‘.’, ‘/’, etc.), embora seja recomendado nomear as instâncias de forma semelhante ao nome do módulo que está sendo instanciado, para facilitar a identificação. Neste exemplo, o módulo WebVision foi selecionado e também recebeu o nome WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_5.gif" /></center>

**Etapa 3:** Navegue até a configuração principal do WebVision e escolha as configurações de servidor apropriadas. As configurações padrão devem ser suficientes para a maioria dos casos de uso. Para mais detalhes, consulte o seguinte link: [WebVision Initial Configuration](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_6.png" /></center>

**Etapa 4:** Depois que o módulo WebVision tiver sido instanciado, o primeiro passo é atribuir permissões aos papéis (roles) criados anteriormente na seção Roles do WebUI. Por padrão, existem dois papéis: Administrator para acesso administrativo e User para acesso comum. Você pode adicionar usuários a esses papéis ou criar novos conforme necessário. Uma vez definidos os papéis, configure as permissões para os papéis de Designer e Viewer de forma adequada.
Além disso, defina um caminho de filtro de tags (Tag filter path) para cada papel. O acesso do Tag filter path determina quais tags do modelo de tags estarão acessíveis para visualização pelo respectivo papel. Neste caso, atribuiremos o caminho completo do modelo de tags a ambos os papéis.

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

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_7.gif" /></center>

- Links úteis

  - [Configuração de Usuários e Papéis](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [Configuração de Acesso](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Etapa 5:** Para testar nossa tela inicial do WebVision, vamos criar uma tag. Vá para o WebUI, selecione **Config** e clique em **Tag**. Na seção **Model**, clique no menu e escolha **New Tag**. Dê a ela o nome **TestTag**, por exemplo; selecione o tipo como **Number**, conceda **permissão de leitura e escrita (Read-Write)**, inicialize em 0 (opcional) e salve as configurações.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_8.gif" /></center>

**Etapa 6:** Em seguida, navegue até WebVision na seção Config e clique em **Open Designer**.
Faça login usando suas **credenciais de Administrator**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_9.png" /></center>

**Etapa 7:** Na seção Templates, crie um novo Container chamado Main. Em seguida, defina esse container como inicial (startup). Isso definirá Main como nossa tela inicial do WebVision. Ele aparecerá com um símbolo de asterisco (*) ao lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_10.gif" /></center>

**Etapa 8:** Altere a cor de fundo do container Main.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_11.gif" /></center>

**Etapa 9:** Dentro do container Main, navegue até Components e adicione um novo componente. Para este exemplo, selecione o componente Gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_12.gif" /></center>

**Etapa 10:** Dentro do componente Gauge, selecione a tag que fornecerá os valores exibidos pelo componente gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_13.gif" /></center>

**Etapa 11:** Em seguida, navegue até WebVision na seção Config e clique em Open UI.
Faça login usando suas credenciais de Administrator.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_14.png" /></center>

**Etapa 12:** Para testar nosso design simples, navegue até o WebUI e selecione Data > Realtime. Altere o valor de TestTag. Depois, retorne à interface do WebVision e verifique se o valor exibido pelo componente Gauge foi atualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_15.gif" /></center>

Há muito a explorar sobre o WebVision para aprimorar sua experiência com o reComputer R1000. Para mais detalhes, consulte nossa [Base de Conhecimento sobre WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

O que você viu é apenas o começo. Aproveite as possibilidades ilimitadas oferecidas por sua impressionante variedade de quase 50 módulos. Ouse sonhar alto, inove e leve seus projetos a novos patamares com os recursos de ponta do N3uron. Para se aprofundar nesta poderosa plataforma, visite [https://n3uron.com/](https://n3uron.com/) e embarque em uma empolgante jornada de descobertas!
