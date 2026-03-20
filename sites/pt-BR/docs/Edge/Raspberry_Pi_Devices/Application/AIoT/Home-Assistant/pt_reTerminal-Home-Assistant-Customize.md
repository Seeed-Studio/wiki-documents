---
description: Como personalizar o Home Assistant
title: Como personalizar o Home Assistant
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-Home-Assistant-Customize
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-Home-Assistant-Customize/
---

# Como personalizar o Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## Introdução

Em wikis anteriores, explicamos como instalar o Home Assistant no [reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant), [ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant) e exibir a interface do painel no PC, smartphones, tablets e no modo Kiosk na tela LCD do reTerminal.

Este wiki vai detalhar passo a passo como construir o painel fazendo as configurações necessárias e também como usar alguns dos add-ons importantes que vêm com o Home Assistant. Então vamos começar!

## Add-ons, HACS e Integrações

O Home Assistant oferece principalmente três maneiras de estender seus recursos:

- Add-ons
- Integrações
- HACS (Home Assistant Community Store)

[Addons](https://www.home-assistant.io/addons) permitem estender a funcionalidade em torno do Home Assistant instalando aplicativos adicionais. Por exemplo, conectar sensores inteligentes com ESPHome, backup automático do Home Assistant para o Google Drive e mais.

[Integrations](https://www.home-assistant.io/integrations) permitem conectar o Home Assistant com outros serviços. Por exemplo, conectar luzes inteligentes, câmeras CCTV e mais.

[HACS (Home Assistant Community Store)](https://hacs.xyz/) permite adicionar componentes para integrações personalizadas de Front-end dentro do Home Assistant. Por exemplo, novo suporte a hardware/sensores, novos temas.

Este wiki vai abordar brevemente as capacidades mencionadas acima. No entanto, se você quiser aprender mais, há muitos recursos online em torno do Home Assistant e aqui estão alguns dos canais do YouTube que podem te orientar bem.

- [EverythingSmartHome](https://www.youtube.com/c/EverythingSmartHome)
- [TheHookUp](https://www.youtube.com/c/TheHookUp)
- [PaulHibbert](https://www.youtube.com/c/PaulHibbert)
- [MakeItWorkTech](https://www.youtube.com/c/MakeItWorkTech)
- [MarkWattTech](https://www.youtube.com/c/MarkWattTech)
- [SmartHomeSolver](https://www.youtube.com/c/SmartHomeSolver)
- [mostlychris](https://www.youtube.com/c/mostlychris)
- [KPeyanski](https://www.youtube.com/c/KPeyanski)

## Addons

Por padrão, nem todos os Add-ons estarão habilitados. Portanto, para habilitar todos os add-ons, você precisa ativar o "Advanced Mode"

- **Passo 1.** Clique no **nome de usuário** e habilite o **Advanced Mode**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/17.png"/></div>

Agora precisamos acessar o painel de Add-ons

- **Passo 2.** Navegue até **Settings > Add-ons**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/18.png"/></div>

- **Passo 3.** Clique em **ADD-ON STORE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/20.png"/></div>

Além dos add-ons padrão do Home Assistant, você pode adicionar **add-ons de terceiros** desenvolvidos pela comunidade. No entanto, estes não são mantidos pelos desenvolvedores do Home Assistant. Mais adiante mostraremos como adicionar esses add-ons de terceiros.

### Primeiros passos com Addons

Agora vamos configurar alguns dos addons. Aqui vamos mostrar como configurar os seguintes add-ons.

- Terminal & SSH
- File editor
- Glances
- Google Drive Backup

Você também pode configurar add-ons como **Node-RED, ESPHome, Adguard Home, BitWarden, Samba Share, Mosquitto broker, BookStack, Uptime Kuma, Cloudflared Tunnel e mais**

#### Instalando um addon

O processo de instalação de um add-on é comum a todos os add-ons. Portanto, vamos explicá-lo aqui

- **Passo 1.** Acesse a **Add-on Store** como explicado antes

- **Passo 2.** Selecione um Add-on ou digite na barra de pesquisa. Por exemplo, aqui vamos selecionar o Add-on **Terminal & SSH**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/21.png"/></div>

- **Passo 3.** Clique em **INSTALL**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/22.png"/></div>

- **Passo 4.** Configure mais opções como **Start on boot, Watchdog, Auto update e Show in sidebar**. Você pode ativar todas se preferir e depois clicar em **START**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/23.png"/></div>

Você verá este **Ponto Verde** se o add-on for iniciado e estiver em execução

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/25.png"/></div>

- **Passo 5.** Depois que o Add-on for iniciado, clique na aba **Log** e verifique se o Add-on foi iniciado corretamente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/24.png"/></div>

#### Add-on File editor

Embora você possa configurar a maior parte do Home Assistant diretamente a partir da interface do usuário em **Settings**, algumas partes exigem que você edite alguns arquivos, como o **configuration.yaml**, que contém integrações a serem carregadas junto com suas configurações. Você pode adicionar trechos de código a este arquivo de configuração para habilitar funcionalidades específicas.

No entanto, para acessar esses arquivos de configuração, precisamos de um editor de arquivos. É aí que o add-on **File editor** entra em uso.

- **Passo 1.** Procure o add-on **File editor** dentro da **Add-on Store**, **INSTALL** e **START** nele.

- **Passo 2.** Você pode clicar em **OPEN WEB UI** ou em **File editor** no painel de navegação à esquerda para acessá-lo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/26.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/27.png"/></div>

#### Add-on Glances

Depois de instalar o Home Assistant, você talvez queira verificar o uso de recursos de hardware no dispositivo host. O add-on **Glances** oferece uma visão geral de todos os recursos de hardware em uso.

- **Passo 1.** Procure o add-on **Glances** dentro da **Add-on Store**, **INSTALL** e **START** nele.

- **Passo 2.** Você pode clicar em **OPEN WEB UI** ou em **Glances** no painel de navegação à esquerda para acessá-lo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/28.png"/></div>

**Nota:** Certifique-se de que o **Protection mode** esteja desativado, caso contrário o Glances não iniciará

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/29.png"/></div>

#### Add-on Google Drive Backup

Como mencionado anteriormente, você pode instalar add-ons de terceiros no Home Asssitant e o **Google Drive Backup** é um desses add-ons. Depois de investir muito tempo e esforço configurando o Home Assistant para atender às suas necessidades, se o sistema quebrar, tudo terá sido em vão. É aí que os backups podem te salvar.

Por padrão, o Home Assistant tem a capacidade de fazer backups e salvá-los offline no dispositivo host que está executando o Home Assistant. No entanto, se o dispositivo host estiver sem resposta e você não conseguir nem acessá-lo, como você vai restaurar a partir de um backup anterior?

O add-on Google Drive Backup permite configurar backups automáticos em que ele fará upload dos backups para o seu Google Drive diariamente. Assim, se você não conseguir acessar o dispositivo host, poderá baixar o backup salvo do Google Drive e restaurá-lo no dispositivo.

- **Passo 1.** Acesse a **Add-on Store**, clique nos **3 pontos** no canto superior direito e clique em **Repositories**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/30.png"/></div>

- **Passo 2.** Copie e cole **https://github.com/sabeechen/hassio-google-drive-backup** na coluna vazia e clique em **ADD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/31.png"/></div>

Você verá o seguinte se ele for adicionado com sucesso

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/32.png"/></div>

- **Passo 3.** Vá para **Settings > System** e clique em **RESTART** para reiniciar o Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/33.png"/></div>

- **Passo 4.** Acesse a **Add-on Store**, procure o add-on **Home Assistant Google Drive Backup**, **INSTALL** e **START** nele.

- **Passo 5.** Você pode clicar em **OPEN WEB UI** ou em **Backups** no painel de navegação à esquerda para acessá-lo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/34.png"/></div>

- **Passo 6.** Clique em **AUTHENTICATE WITH GOOGLE DRIVE** e uma nova janela será aberta. Entre com sua conta do Google e permita o acesso

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/36.png"/></div>

- **Passo 7.** Clique em **COPY** para copiar a Authorization String

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/37.png"/></div>

- **Passo 8.** Volte para a interface do Home Assistant e cole a string copiada e clique em **SAVE**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Home-Assistant/38.png"/></div>

Agora configuramos com sucesso os backups no Google Drive.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/39.png"/></div>

Se você quiser configurar opções adicionais, como frequência de backup, número de backups a manter, pode clicar em **Settings** para entrar na página de configuração

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/40.png"/></div>

## Integrações

Agora vamos explorar as integrações no Home Assistant! Aqui vamos mostrar como configurar as seguintes integrações.

- Controle de Luz Inteligente
- Transmissão de Câmera CCTV

Você também pode configurar integrações como **Philips Hue, Shelly, Tuya, Sonos, Z-Wave, HomeKit, WLED e mais**.

- **Passo 1.** Navegue até **Settings > Devices & Services**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/41.png"/></div>

- **Passo 2.** Clique em **+ ADD INTEGRATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/42.png"/></div>

Aqui você encontrará muitas integrações!

### Integração de luz inteligente

Vamos adicionar a **integração Xiaomi Smart Light** para que possamos ligar / desligar luzes inteligentes. Antes de prosseguir, certifique-se de que você tem acesso a uma Xiaomi Smart Light. Se você tiver uma luz inteligente diferente, como **Philips Hue**, você pode adicionar a **integração Philips Hue** e os passos serão quase semelhantes.

- **Passo 1.** Pesquise por **Yeelight** e selecione

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/43.png"/></div>

- **Passo 2.** Digite o endereço IP da luz inteligente e clique em **SUBMIT**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/44.png"/></div>

- **Passo 3.** Clique em **FINISH**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/45.png"/></div>

- **Passo 4.** Na página **Overview**, clique nos 3 pontos no canto superior esquerdo e clique em **Edit Dashboard**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/46.png"/></div>

- **Passo 5.** Aqui não precisamos do card com o nome de usuário. Então exclua-o clicando nos **3 pontos** e em **Delete card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/47.png"/></div>

- **Passo 6.** Confirme a exclusão

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/48.png"/></div>

- **Passo 7.** Clique em **+ ADD CARD** e clique no card **Light**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/49.png"/></div>

- **Passo 8.** Altere o **Name** e clique em **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/50.png"/></div>

- **Passo 9.** Clique em **DONE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/51.png"/></div>

- **Passo 9.** Agora você pode ligar a luz e controlar também o brilho

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/52.png"/></div>

- **Passo 10.** Se você clicar nos **3 pontos**, poderá ter mais controle da luz, como a capacidade de mudar a cor e a temperatura de cor.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/53.png"/></div>

### Integração de câmera IP CCTV

Aqui vamos adicionar uma integração de câmera para que possamos visualizar o stream de vídeo em tempo real de uma câmera CCTV via protocolo RTSP! Antes de prosseguir, certifique-se de que você tem acesso a uma câmera CCTV com função IP e capacidade de transmitir via RTSP.

- **Passo 1.** Na página **Integrations**, em **Set up a new integration**, pesquise por **generic camera** e selecione.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/54.png"/></div>

- **Passo 2.** Adicione a **RTSP stream URL**, insira **username, password** se necessário, altere o **framerate** e clique em **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/55.png"/></div>

- **Passo 3.** Na página **Overview**, vá para a página **+ ADD CARD** como antes e clique no card **Picture Entity**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/56.png"/></div]

- **Passo 4.** Digite **camera** em **Entity** e você verá a câmera que configuramos antes. Clique nela.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/57.png"/></div>

- **Passo 5.** Altere **Name**, mude **Camera View** para **live** e clique em **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/58.png"/></div>

Agora você verá o stream de vídeo ao vivo no dashboard!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/59.png"/></div>

## HACS (Home Assistant Community Store)

Agora vamos explorar o HACS no Home Assistant! O HACS oferece várias integrações e opções de personalização de front-end. Aqui vamos mostrar como configurar o seguinte

- Mudar o tema do Home Assistant
- Adicionar card de Clima ao dashboard

### Instalando o HACS

- **Passo 1.** Abra o add-on **Terminal & SSH** que instalamos antes

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/60.png"/></div>

- **Passo 2.** Digite o seguinte comando dentro da janela do terminal para instalar o HACS

```sh
wget -O - https://get.hacs.xyz | bash -
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/61.png"/></div>

- **Passo 3.** Quando a instalação do HACS terminar, reinicie o Home Assistant com o seguinte comando

```sh
ha ha restart
```

- **Passo 4.** Na página **Integrations**, em **Set up a new integration**, pesquise por **HACS** e selecione.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/62.png"/></div>

- **Passo 5.** Selecione todas as opções para concordar com tudo e clique em **SUBMIT**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/63.png"/></div>

- **Passo 6.** Copie o código de autorização e depois clique no link para fazer login no GitHub.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/70.jpg"/></div>

- **Passo 7.** Faça login no GitHub, cole o código copiado e clique em **Continue**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/71.jpg"/></div>

- **Passo 8.** Clique em **Authorize HACS**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/72.jpg"/></div>

- **Passo 9.** Clique em **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/68.png"/></div>

O HACS agora está instalado!

- **Passo 10.** É melhor reiniciar o sistema agora indo em **Settings > System > Hardware**, clique nos **3 pontos** no canto superior direito e clique em **Reboot Host**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/69.png"/></div>

- **Passo 11.** Após o sistema reiniciar, você verá **HACS** no painel de navegação à esquerda

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/73.png"/></div>

### Mudar o tema do Home Assistant

Agora vamos mudar o tema padrão usando o HACS! Pronto para uso, o Home Assistant virá apenas com um único tema em Dark-mode. Porém, se você quiser personalizar isso, precisa seguir os passos abaixo

- **Passo 1.** Antes de instalar um tema personalizado, precisamos adicionar alguns códigos no arquivo **configuration.yaml**. Abra o **File editor** e clique no **Folder icon** para navegar pelo sistema de arquivos

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/76.jpg"/></div>

- **Passo 2.** Clique em **configuration.yaml**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/77.png"/></div>

- **Passo 3.** Adicione o seguinte ao final deste arquivo

```sh
frontend:
  themes: !include_dir_merge_named themes
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/78.jpg"/></div>

- **Passo 4.** Clique no botão de salvar

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/79.png"/></div>

- **Passo 5.** É uma boa prática verificar se a configuração que fizemos é válida. Caso contrário, o Home Assistant não irá inicializar da próxima vez. Vá em **Developer Tools** e clique em **CHECK CONFIGURATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/80.png"/></div>

Se você vir a mensagem **Configuration valid!**, então está tudo certo!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/81.png"/></div>

- **Passo 6.** Clique em **RESTART** para reiniciar o Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/82.png"/></div>

- **Passo 7.** Dentro da janela **HACS**, clique em **Frontend**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/74.png"/></div>

- **Passo 8.** Clique em **+ EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/75.jpg"/></div>

- **Passo 9.** Aqui você verá muitos temas. Por exemplo, vamos instalar um tema iOS. Pesquise por **iOS** e selecione **iOS Themes - Dark Mode and Light Mode**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/85.png"/></div>

- **Passo 10.** Clique em **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/86.png"/></div>

- **Passo 11.** Clique em **DOWNLOAD** novamente na janela de confirmação

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/87.png"/></div>

- **Passo 12.** Quando terminar o download, clique no seu nome de usuário e, em **Theme**, selecione **ios-dark-mode-blue-red**. Você também pode selecionar todas as outras cores deste tema se preferir

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/88.jpg"/></div>

Agora a página **Overview** ficará assim com o novo tema carregado!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/89.png"/></div>

**Nota:** Se você não conseguir ver o tema carregado corretamente, por favor reinicie o Home Assistant.

### Adicionar card de Clima ao dashboard

Agora vamos instalar um card de clima usando o HACS e adicioná-lo ao dashboard!

Antes de instalar este card de clima, precisamos conectar com o **openweathermap** para obter as informações do clima. E antes de conectar com o openweathermap, precisamos obter uma chave de API do openweathermap.

- **Passo 1.** Visite [este link](https://home.openweathermap.org/users/sign_up) para criar uma conta no openweathermap

- **Passo 2.** Visite [este link](https://home.openweathermap.org/users/sign_in) para acessar a conta recém-criada

- **Passo 3.** Abaixo do nome da conta, clique em **My API keys**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/97.png"/></div>

- **Passo 4.** Digite um nome para a chave de API e clique em **Generate**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/98.png"/></div>

- **Passo 5.** Copie a chave de API gerada

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/99.png"/></div>

Agora vamos adicionar essa chave de API

- **Passo 6.** No Home Assistant, navegue até **Settings > Devices & Services > Integrations > + ADD INTEGRATION**, procure por **OpenWeathermap** e clique nele

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/96.png"/></div>

- **Passo 7.** Cole a **API key** copiada, altere a **Latitude and Logitude** de acordo com a sua localização (isso pode ser encontrado com uma simples pesquisa no Google), altere Mode para **hourly** e clique em **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/101.png"/></div>

- **Passo 8.** Clique em **Finish**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/102.png"/></div>

Agora vamos instalar o cartão de clima a partir do HACS

- **Passo 9.** Navegue até **HACS > Frontend > + EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/90.jpg"/></div>

- **Passo 10.** Digite **weather** e clique em **Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/91.png"/></div>

- **Passo 11.** Clique em **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/92.png"/></div>

- **Passo 12.** Clique em **DOWNLOAD** novamente na janela de confirmação

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/93.png"/></div>

- **Passo 13.** Na página **Overview**, vá para a página **+ ADD CARD** como antes e clique em **Custom: Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/103.png"/></div>

- **Passo 14.** Insira o **City Name** de acordo com a **Latitude and Logitude** que você inseriu antes e clique em **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/104.png"/></div>

Agora o dashboard finalizado ficará como abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## Recursos

- [Documentação do Home Assistant](https://www.home-assistant.io/docs)
