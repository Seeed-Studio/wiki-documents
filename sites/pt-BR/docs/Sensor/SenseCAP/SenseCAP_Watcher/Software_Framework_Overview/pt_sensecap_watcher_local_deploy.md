---
description: Este tutorial irá guiá-lo sobre como implantar o serviço de IA do Watcher localmente, sem o serviço SenseCraft, para usar o Watcher.
title: Implantar os recursos de IA do Watcher localmente
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.webp
slug: /watcher_local_deploy
sidebar_position: 3
last_update:
  date: 9/11/2025
  author: Twelve
createdAt: '2024-08-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_local_deploy/
---

# Implantar os recursos de IA do Watcher localmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/87.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Vídeo do Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositório no Github</font></span></strong>
    </a>
</div><br />

SenseCAP Watcher é um observador com IA que ajuda você a monitorar anomalias em um espaço e depois tomar ações. Embora o Watcher possa utilizar os serviços de IA do SenseCraft, ele também oferece a opção de implantar recursos de IA localmente em seus próprios dispositivos, proporcionando maior controle, privacidade e flexibilidade.

Neste guia abrangente, vamos guiá-lo pelo processo de configuração e implantação dos serviços de IA do Watcher em seus dispositivos locais. Esteja você usando um PC com Windows, uma máquina macOS ou um NVIDIA® Jetson AGX Orin, forneceremos instruções passo a passo para ajudá-lo a aproveitar o poder dos recursos de IA do Watcher em seu próprio ambiente.

Ao longo deste guia, abordaremos os preparativos necessários de software e hardware, o processo de implantação para cada plataforma compatível e como utilizar de forma eficaz os serviços locais de IA do Watcher para desbloquear novas possibilidades e aumentar sua produtividade. Ao final deste guia, você terá um entendimento sólido de como aproveitar os recursos de IA do Watcher em seus próprios dispositivos, permitindo que você crie soluções inteligentes e personalizadas para suas necessidades.

## Preparação de Software

Para utilizar os recursos de implantação local do Watcher, os usuários primeiro precisam baixar o software necessário. O pacote de software inclui o aplicativo Watcher e os componentes do Device AI Service, que permitem aos usuários configurar e ajustar seus serviços locais de IA.

Os usuários podem baixar o APP Watcher por meio dos seguintes links de download:

- Para **Windows**:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.exe" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Para Windows 🖱️</font></span></strong>
    </a>
</div>

- Para **macOS**:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.dmg" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Para macOS 🖱️</font></span></strong>
    </a>
</div>

- Para **Linux**:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_arm64_latest.deb" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Para Linux 🖱️</font></span></strong>
    </a>
</div><br />

Escolha o link de download apropriado com base no seu sistema operacional. O APP Watcher é compatível com Windows, macOS e as principais distribuições Linux, garantindo uma experiência perfeita em diferentes plataformas.

## Preparação de Hardware

Para garantir uma experiência suave e ideal ao implantar localmente os recursos de IA do Watcher, seu dispositivo deve atender aos requisitos mínimos de hardware. Esses requisitos variam dependendo do seu sistema operacional. Abaixo estão os requisitos de hardware para cada plataforma compatível:

<div class="table-center">
  <table align="center">
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Mac</th>
      <th>Linux (arm64)</th>
    </tr>
    <tr>
      <th>Placa Gráfica (Configuração Recomendada)</th>
      <td align="center">GeForece RTX2070</td>
      <td align="center">Apple M1 16 GB</td>
      <td align="center">GeForece RTX2070</td>
    </tr>
    <tr>
      <th>RAM (Configuração Mínima)</th>
      <td align="center">8 GB</td>
      <td align="center">16 GB</td>
      <td align="center">8 GB</td>
    </tr>
    <tr>
      <th>Armazenamento (Configuração Mínima)</th>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
    </tr>
  </table>
</div>

É importante observar que estes são os requisitos mínimos e que ter especificações superiores pode melhorar significativamente o desempenho e a capacidade de resposta dos serviços de IA do Watcher. Se você planeja implantar vários serviços de IA simultaneamente ou processar grandes quantidades de dados, recomendamos o uso de dispositivos com configurações de hardware mais avançadas.

### Considerações de Desempenho

O desempenho dos serviços de IA implantados localmente do Watcher pode variar com base nas especificações de hardware do seu dispositivo. Aqui estão algumas diretrizes gerais de desempenho:

- **RAM**: Quantidades maiores de RAM permitem uma multitarefa mais suave e podem lidar com modelos de IA mais complexos e conjuntos de dados maiores.
- **Placa Gráfica**: Uma placa gráfica dedicada como a RTX2070 pode acelerar enormemente os cálculos de IA, especialmente para tarefas que envolvem visão computacional e aprendizado profundo.
- **Armazenamento**: Espaço de armazenamento suficiente é essencial para armazenar modelos de IA, conjuntos de dados e resultados gerados. Os 20 GB de armazenamento recomendados garantem espaço de sobra para os serviços de IA do Watcher.

Ao implantar localmente os serviços de IA do Watcher, é crucial considerar seu caso de uso específico e a complexidade dos modelos de IA que você pretende utilizar. Se você precisar de processamento em tempo real ou planejar lidar com tarefas que consomem muitos recursos, é recomendável optar por configurações de hardware de nível mais alto para garantir um desempenho ideal.

Atendendo aos requisitos de hardware e considerando os fatores de desempenho mencionados acima, você pode garantir uma implantação suave e eficiente dos recursos de IA do Watcher em seu dispositivo local.

### Benchmark de Dispositivos

Aqui está nossa linha do tempo de resposta após implantar serviços de IA em alguns de nossos dispositivos.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Windows 10 32GB com Placa Gráfica GeForce RTX4060</th>
      <th>Windows 10 16GB sem Placa Gráfica</th>
      <th>Mac Mini M1 (16 GB)</th>
      <th>NVIDIA® Jetson AGX Orin 32GB</th>
    </tr>
    <tr>
      <th>Tempo de Análise da Tarefa</th>
      <td align="center">5s</td>
      <td align="center">17m14s</td>
      <td align="center">36s</td>
      <td align="center">18s</td>
    </tr>
    <tr>
      <th>Tempo de Análise de Imagem</th>
      <td align="center">4s</td>
      <td align="center">4m10s</td>
      <td align="center">8s</td>
      <td align="center">7s</td>
    </tr>
  </table>
</div>

Ao comparar os produtos da série NVIDIA Jetson AGX com placas gráficas de consumo como a RTX 4090 para tarefas relacionadas à IA, a série Jetson AGX oferece várias vantagens importantes:

1. Confiabilidade de nível industrial: os produtos da série Jetson AGX são projetados para aplicações industriais e comerciais, o que significa que possuem um maior Tempo Médio Entre Falhas (MTBF). Eles são construídos para operar continuamente, 24 horas por dia, 7 dias por semana, sem encontrar problemas. Em contraste, placas gráficas de consumo como a RTX 4090 não são projetadas para uma operação tão exigente e ininterrupta e podem não oferecer o mesmo nível de confiabilidade.

2. Tamanho compacto e baixo consumo de energia: os produtos da série Jetson AGX são projetados com aplicações embarcadas e de computação de borda em mente. Eles possuem um formato menor e consomem menos energia em comparação com placas gráficas de consumo de ponta. Isso os torna mais adequados para implantação em ambientes com espaço limitado e reduz os custos operacionais gerais. O menor consumo de energia também significa menos geração de calor, o que é crucial para sistemas embarcados e ajuda a minimizar os requisitos de refrigeração.

Além dessas vantagens, a série Jetson AGX oferece uma pilha de software abrangente e otimizada para cargas de trabalho de IA, facilitando para os desenvolvedores a criação e implantação eficiente de aplicações de IA. A combinação de confiabilidade de nível industrial, tamanho compacto, baixo consumo de energia e pilha de software otimizada torna a série Jetson AGX uma escolha atraente para projetos e aplicações relacionados à IA, especialmente quando comparada a placas gráficas de consumo como a RTX 4090.

## Implantação no Windows

Para implantar os recursos de IA do Watcher em um dispositivo Windows, siga estas etapas simples.

**Passo 1**. Localize o arquivo `.exe` baixado na pasta de downloads do seu computador ou no local especificado. Clique duas vezes no arquivo `.exe` para iniciar o processo de instalação. O assistente de instalação irá guiá-lo pelo processo de configuração. Você não precisa fazer seleções ou configurações adicionais durante a instalação.

**Passo 2**. Quando a instalação terminar, inicie o aplicativo Watcher. Ao abrir o aplicativo pela primeira vez, será solicitado que você escolha os modelos de IA que deseja usar. O Watcher oferece duas opções.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/88.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: Se você selecionar esta opção, clique no botão Apply abaixo para começar a baixar os modelos de IA necessários e os arquivos associados. Esses downloads adicionais podem levar algum tempo, pois podem ter cerca de **10 GB** de tamanho. Certifique-se de ter uma conexão de internet estável e rápida durante o processo de download do modelo para evitar quaisquer interrupções ou downloads incompletos.

2. OpenAI: Se você preferir usar os modelos da OpenAI, será necessário preparar sua chave de API da OpenAI com antecedência. Certifique-se de ter uma chave de API válida e créditos suficientes para usar os modelos da OpenAI. Quando for solicitado, insira sua chave de API para configurar o Watcher para usar os serviços da OpenAI.

Escolha a opção que melhor atenda às suas necessidades e recursos. Se você tiver amplo espaço de armazenamento e uma conexão de internet confiável, a opção Llama 3.1 + LLaVA oferece uma solução autônoma. Se você preferir a flexibilidade e o poder dos modelos da OpenAI e já tiver uma chave de API pronta, selecione a opção OpenAI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Quando os arquivos do modelo forem baixados e instalados, o Watcher estará pronto para uso em seu dispositivo Windows.

## Implantação no macOS

Para implantar os recursos de IA do Watcher em um dispositivo macOS, siga estas etapas.

**Etapa 1**. Localize o arquivo `.dmg` baixado na pasta de downloads do seu computador ou no local especificado. Clique duas vezes no arquivo `.dmg` para abri-lo. Uma nova janela aparecerá mostrando o conteúdo do pacote de instalação.

**Etapa 2**. Na nova janela, você verá o ícone do aplicativo Watcher e um atalho para a pasta Applications. Clique e arraste o ícone do aplicativo Watcher para o atalho da pasta Applications dentro da janela. Esta ação copiará o aplicativo Watcher para a pasta Applications do seu computador.
Quando o processo de cópia estiver concluído, você poderá fechar a janela `.dmg`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/89.png" style={{width:600, height:'auto'}}/></div>

**Etapa 3**. Ao iniciar o aplicativo pela primeira vez, o Watcher começará automaticamente a baixar os modelos de IA necessários e os arquivos associados. Esses downloads adicionais podem levar algum tempo, pois podem ter cerca de 10 GB de tamanho. Certifique-se de ter uma conexão de internet estável e rápida durante o processo de download do modelo para evitar interrupções ou downloads incompletos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/90.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: Se você selecionar esta opção, clique no botão Apply abaixo para iniciar o download dos modelos de IA necessários e dos arquivos associados. Esses downloads adicionais podem levar algum tempo, pois podem ter cerca de **10 GB** de tamanho. Certifique-se de ter uma conexão de internet estável e rápida durante o processo de download do modelo para evitar interrupções ou downloads incompletos.

2. OpenAI: Se você preferir usar os modelos da OpenAI, será necessário preparar sua chave de API da OpenAI com antecedência. Certifique-se de ter uma chave de API válida e créditos suficientes para usar os modelos da OpenAI. Quando for solicitado, insira sua chave de API para configurar o Watcher para usar os serviços da OpenAI.

Escolha a opção que melhor atenda às suas necessidades e recursos. Se você tiver amplo espaço de armazenamento e uma conexão de internet confiável, a opção Llama 3.1 + LLaVA oferece uma solução autônoma. Se você preferir a flexibilidade e o poder dos modelos da OpenAI e já tiver uma chave de API pronta, selecione a opção OpenAI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Quando os arquivos do modelo forem baixados e instalados, o Watcher estará pronto para uso em seu dispositivo macOS.

## Implantação no NVIDIA® Jetson AGX Orin / Linux

Para implantar os recursos de IA do Watcher em um NVIDIA® Jetson AGX Orin ou em um dispositivo Linux, siga estas etapas.

**Etapa 1**. Abra uma janela de terminal no seu dispositivo Jetson AGX Orin ou Linux.

**Etapa 2**. Navegue até o diretório onde o arquivo `.deb` baixado está localizado usando o comando `cd`. Execute o seguinte comando para instalar o Watcher.

```
sudo dpkg -i watcher_service_x.x.x_arm64.deb
```

Substitua `watcher_service_x.x.x_arm64.deb` pelo nome real do arquivo `.deb` baixado. O processo de instalação será iniciado. Você pode ser solicitado a inserir a senha do sistema para autorizar a instalação. Aguarde a conclusão da instalação. O terminal exibirá o progresso e quaisquer informações adicionais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/91.png" style={{width:800, height:'auto'}}/></div>

**Etapa 3**. Quando a instalação terminar, você poderá iniciar o Watcher digitando watcher no terminal ou encontrando-o no iniciador de aplicativos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/92.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: Se você selecionar esta opção, clique no botão Apply abaixo para iniciar o download dos modelos de IA necessários e dos arquivos associados. Esses downloads adicionais podem levar algum tempo, pois podem ter cerca de **10 GB** de tamanho. Certifique-se de ter uma conexão de internet estável e rápida durante o processo de download do modelo para evitar interrupções ou downloads incompletos.

2. OpenAI: Se você preferir usar os modelos da OpenAI, será necessário preparar sua chave de API da OpenAI com antecedência. Certifique-se de ter uma chave de API válida e créditos suficientes para usar os modelos da OpenAI. Quando for solicitado, insira sua chave de API para configurar o Watcher para usar os serviços da OpenAI.

Escolha a opção que melhor atenda às suas necessidades e recursos. Se você tiver amplo espaço de armazenamento e uma conexão de internet confiável, a opção Llama 3.1 + LLaVA oferece uma solução autônoma. Se você preferir a flexibilidade e o poder dos modelos da OpenAI e já tiver uma chave de API pronta, selecione a opção OpenAI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Semelhante às instalações no Windows e macOS, o Watcher começará automaticamente a baixar os modelos de IA necessários e associados.

## Configurar o uso de serviços locais de IA no SenseCraft APP

Para usar os serviços locais de IA fornecidos pelo Watcher no SenseCraft APP, siga estas etapas concisas:

**Etapa 1**. Abra o Watcher APP em seu dispositivo e clique no botão **Start Service** na seção inferior esquerda. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/94.png" style={{width:800, height:'auto'}}/></div>

**Etapa 2**. No SenseCraft APP, navegue até a interface do Watcher e toque no botão de configurações no canto superior direito. Selecione **Device AI Service** no menu de configurações.

**Etapa 3**. Copie a URL e o Token da tela inicial do Watcher APP.

**Etapa 4**. Cole a URL e o Token em seus respectivos campos nas configurações de **Device AI Service** dentro do SenseCraft APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/93.png" style={{width:250, height:'auto'}}/></div><br />

**Etapa 5**. Agora você pode atribuir tarefas ao Watcher por meio do SenseCraft APP, e o Watcher irá processá-las usando seus recursos de IA implantados localmente.

:::caution
Observe que é importante garantir que seu computador atenda às configurações recomendadas em **[Preparação de Hardware](#Preparação-de-Hardware)**. Se estiver abaixo da configuração recomendada, você pode não receber os resultados de reconhecimento e as mensagens de alarme em tempo hábil, pois seu computador pode estar totalmente ocupado analisando uma de suas imagens, momento em que o Watcher parecerá estar em um estado constante de observação.
:::

Ao concluir essas etapas, você pode aproveitar o poder dos serviços de IA do Watcher diretamente em seu dispositivo, garantindo maior privacidade e a capacidade de personalizar convenientemente seu próprio sistema integrado. Com os recursos de IA do Watcher sendo executados localmente, você pode realizar tarefas avançadas, análises e automações de forma segura e eficiente, mantendo todos os seus dados sob seu controle.

Continuaremos adicionando tutoriais sobre o uso de **[HTTP Message Block](https://wiki.seeedstudio.com/pt-br/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)** para envio de mensagens após a implantação local no diretório de Aplicações, portanto, fique atento!

## FAQ

### Serviço SenseCap Watcher não funciona

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq1.png" style={{width:800, height:'auto'}}/></div>

O IP de Service Host deve ser o endereço IP do seu computador; caso contrário, o serviço SenseCAP Watcher não funcionará. Você precisa corrigir isso seguindo as etapas abaixo.

1. Pressione Win + R > digite "ncpa.cpl" > Enter.

2. Clique com o botão direito em "Wi-Fi" ou Ethernet > selecione "Properties."

3. Clique duas vezes em IPv4 ou IPv6 > Clique em "Advanced."

4. Desmarque Automatic Metric > Digite 1 (ou o número desejado) > Clique em OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq2.png" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
