---
description: Primeiros passos com Home Assistant no ODYSSEY-X86
title: Primeiros passos com Home Assistant
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86-Home-Assistant
sku: E22011026
last_update:
  date: 03/16/2023
  author: Lakshantha
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/
---
# Primeiros passos com Home Assistant no ODYSSEY-X86

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/thumb.png" /></div>

## Introdução

Este wiki irá guiá-lo passo a passo sobre como você pode transformar sua casa comum em uma casa inteligente apenas usando um [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)! Ao final deste wiki, você poderá visualizar um belo painel no seu PC, tablet, smartphone, reTerminal e poderá controlar seus eletrodomésticos e visualizar outras informações, como dados de sensores, diretamente na ponta dos dedos. Então, vamos começar!

## O que é Home Assistant?

[Home Assistant](https://www.home-assistant.io) é um software gratuito e de código aberto para automação residencial, projetado para ser um sistema de controle central para dispositivos de casa inteligente, que pode ser chamado de hub de casa inteligente. Ele oferece automação residencial sem necessidade da nuvem, o que significa que seu sistema de automação residencial não depende de servidores remotos ou de uma conexão com a internet. Esse controle local significa que você pode ter uma segurança muito melhor do que com dispositivos conectados à nuvem. Além disso, oferece maior confiabilidade quando se trata de mantê-lo em funcionamento 24x7.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></div>

Ele é flexível de usar e muito fácil de começar, mesmo para iniciantes, graças à ótima documentação oferecida pelo Home Assistant. Além disso, há uma comunidade ativa no [Fórum do Home Assistant](https://community.home-assistant.io) com muitos membros que estarão lá para ajudá-lo se você encontrar qualquer problema ao construir e executar o Home Assistant.

Depois de configurar o Home Assistant, ele pode ser acessado por meio de uma interface de usuário baseada na web usando aplicativos complementares para Android e iOS, ou por comandos de voz via um assistente virtual compatível, como Google Assistant ou Amazon Alexa.

Se você quiser experimentar rapidamente uma demonstração no seu navegador, por favor [clique aqui](https://demo.home-assistant.io).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></div>

## Diferentes métodos de instalação

Home Assistant é compatível para rodar em diferentes hardwares, como um Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, PCs Windows/ Linux/ Mac. E com isso, vêm diferentes métodos de instalação em diferentes hardwares. Para saber mais sobre todos esses métodos de instalação, visite [esta página](https://www.home-assistant.io/installation).

Como você pode ver abaixo, existem 4 principais tipos de métodos de instalação e nem todos os recursos do Home Assistant são suportados por todos os métodos de instalação.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></div>

## Método de instalação para ODYSSEY - X86

De acordo com o Home Assistant, os dois métodos recomendados de instalação do Home Assistant são **OS e método Container**. Aqui usaremos o **método OS** porque ele dará acesso a todos os recursos do Home Assistant.

### Por que não Home Assistant Container?

Se instalarmos o Home Assistant Container no ODYSSEY-X86, perderemos vários recursos do Home Assistant. Portanto, vamos pular essa instalação. No entanto, se você quiser explorar esse método de instalação, pode seguir [este guia](https://www.home-assistant.io/installation/generic-x86-64#install-home-assistant-container).

## Vamos construí-lo

Agora vamos passar pelo processo de instalação do Home Assistant OS no ODYSSEY-X86.

Existem diferentes maneiras de instalar o Home Assistant OS no ODYSSEY-X86. A maneira mais simples seria gravar diretamente a imagem do Home Assistant OS em uma unidade flash USB, conectar a unidade USB ao ODYSSEY-X86 e executar o Home Assistant a partir dela.

A outra maneira seria instalar o Home Assistant OS em um dispositivo de armazenamento diferente, como um HDD externo, SSD, M.2 SSD e a eMMC onboard (para a versão ODYSSEY-X86 eMMC). Este método pode garantir que você tenha um dispositivo de armazenamento confiável em comparação com uma unidade USB.

Explicaremos como instalar o Home Assistant OS em ambos os métodos!

### Executar Home Assistant a partir de uma unidade flash USB

- **Passo 1.** Conecte uma unidade flash USB ao seu PC

**Nota:** Recomenda-se usar uma unidade flash com pelo menos 16GB de capacidade de armazenamento

- **Passo 2.** Baixe e instale o [Balena Etcher](https://www.balena.io/etcher) de acordo com o seu sistema operacional

- **Passo 3.** Abra o Balena Etcher e selecione **Flash from URL**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/20.png" /></div>

- **Passo 4.** Copie e cole a URL abaixo dentro da caixa vazia e clique em **OK**

```sh
https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/21.png" /></div>

- **Passo 5.** Quando a imagem for baixada, clique em **Select target** e selecione a unidade flash USB conectada

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/23.png" /></div>

- **Passo 6.** Clique em **Flash** para começar a gravar a imagem na unidade flash USB

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/24.png" /></div>

Se o processo de gravação for bem-sucedido, você verá a saída abaixo

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/25.png" /></div>

- **Passo 7.** Conecte esta unidade flash USB a uma das portas USB do ODYSSEY-X86 e ligue a placa

- **Passo 8.** Continue pressionando a tecla **DELETE** para entrar na BIOS

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **Passo 9.** Vá até a aba **Boot**, selecione **Boot Option #1** e selecione **UEFI: OS (USB)** e clique em **Yes** na janela pop-up

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/27.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

Agora o ODYSSEY-X86 será reiniciado e usará a unidade USB conectada como dispositivo de boot. Após inicializar com sucesso no Home Assistant OS, você verá a saída abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

### Executar Home Assistant a partir de HDD/ SSD externo, M.2 SSD, eMMC

Neste método, primeiro criaremos uma unidade USB bootável com Ubuntu Desktop e depois inicializaremos o ODYSSEY-X86 a partir dela. Depois disso, gravaremos o Home Assistant OS em uma unidade (HDD/ SSD externo, M.2 SSD, eMMC onboard) enquanto estivermos dentro do sistema Ubuntu e executaremos o Home Assistant a partir dessa unidade.

- **Passo 1.** Baixe a imagem mais recente do Ubuntu Desktop a partir [daqui](https://ubuntu.com/download/desktop)

- **Passo 2.** Conecte uma unidade flash USB ao seu PC

**Nota:** Recomenda-se usar uma unidade flash com pelo menos 8GB de capacidade de armazenamento

- **Passo 3.** Baixe e instale o [Balena Etcher](https://www.balena.io/etcher) de acordo com o seu sistema operacional

- **Passo 4.** Abra o Balena Etcher, selecione **Flash from file**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/2.png" /></div>

- **Passo 5.** Clique no **arquivo .iso** baixado e clique em **Open**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/3.png" /></div>

- **Passo 6.** Clique em **Select target**, selecione a unidade flash USB conectada e clique em **Select**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/4.png" /></div>

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/5.png" /></div>

- **Passo 7.** Clique em **Flash** para gravar o Ubuntu server na unidade flash USB

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/6.png" /></div>

Se o processo de gravação for bem-sucedido, você verá a saída abaixo

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/1.png" /></div>

- **Passo 8.** Conecte esta unidade flash USB a uma das portas USB do ODYSSEY-X86, conecte uma unidade de armazenamento (HDD/ SSD externo, M.2 SSD) e ligue a placa

**Nota:** Certifique-se de que um teclado, mouse e um monitor estejam conectados ao ODYSSEY-X86

- **Passo 9.** Continue pressionando a tecla **DELETE** para entrar na BIOS

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **Passo 10.** Vá até a aba **Boot**, selecione **Boot Option #1** e selecione **UEFI: USB, Partition 2**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/8.jpg" /></div>

- **Passo 11.** Vá até a aba **Save & Exit**, clique em **Save Changes and Reset** e clique em **Yes** na janela pop-up

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/9.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

Agora o ODYSSEY-X86 será reiniciado e usará a unidade USB conectada como dispositivo de boot.

- **Passo 12.** Selecione **Try or Install Ubuntu**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/11.jpg" /></div>

- **Passo 13.** Clique em **Try Ubuntu**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/12.jpg" /></div>

Após alguns segundos, ele iniciará no Ubuntu Desktop

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/13.png" /></div>

- **Passo 14.** Abra uma janela de terminal pressionando **Ctrl+Alt+T**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/14.png" /></div>

- **Passo 15.** Digite o seguinte comando para baixar a imagem do Home Assistant OS

```sh
wget https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

- **Etapa 16.** Extraia o arquivo usando o comando abaixo

```sh
unxz haos_generic-x86-64-9.0.img.xz
```

Isso irá extrair o **.img.xz** acima para **.img**

- **Etapa 17.** Digite **lsblk** para listar as unidades de armazenamento conectadas. Aqui conectamos um drive HDD via porta SATA.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/15.png" /></div>

Como você pode ver, a unidade que já está executando o Ubuntu OS (pen drive USB) é **sdb** com várias partições e pontos de montagem. Também podemos identificar essa unidade pelo **SIZE**. Isso significa que a unidade **sda** é o drive HDD conectado.

- **Etapa 18.** Digite o comando abaixo para gravar a imagem do Home Assistant OS na unidade HDD conectada. Neste caso, a unidade **sda**

```sh
sudo dd if=haos_generic-x86-64-9.0.img of=/dev/sda status=progress
```

Aguarde alguns minutos até que o processo seja concluído

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/16.png" /></div>

- **Etapa 19.** Digite o seguinte para reiniciar o ODYSSEY-X86

```sh
sudo reboot
```

- **Etapa 20.** Remova o pen drive USB e pressione **ENTER** quando você vir o prompt abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/17.png" /></div>

- **Etapa 21.** Entre na BIOS como explicado antes e altere a unidade de boot para o drive conectado

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/18.png" /></div>

Agora o ODYSSEY-X86 irá reiniciar e usar o drive conectado como dispositivo de boot. Após inicializar com sucesso no Home Assistant OS, você verá a saída abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

## Visualizar a interface do painel do Home Assistant no navegador web

- **Etapa 1.** Abra um navegador web em um PC, tablet, smartphone e digite a seguinte URL

```sh
homeassistant.local:8123
```

Levará algum tempo para finalizar o processo de inicialização

- **Etapa 2.** Quando terminar de iniciar, crie uma conta e siga as instruções de configuração inicial

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></div>

Depois disso, você verá seu painel de boas-vindas como a seguir

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></div>

## Visualizar a interface do painel do Home Assistant no modo quiosque no reTerminal

Para conseguir visualizar a interface do painel do Home Assistant na tela LCD do [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html), usaremos o navegador web Chromium que já vem com o Raspberry Pi OS. Vamos configurar o Chromium para que ele seja iniciado automaticamente em modo de tela cheia após o reTerminal ser ligado.

- **Etapa 1.** Ligue o reTerminal e certifique-se de que o Raspberry Pi OS já está instalado. Caso contrário, você pode seguir [este wiki](https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

- **Etapa 2.** Navegue até o seguinte diretório

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **Etapa 3.** Abra o arquivo **autostart** com o **editor de texto nano**

```sh
sudo nano autostart
```

- **Etapa 4.** Adicione a seguinte linha ao final do arquivo

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **Etapa 5.** Reinicie o reTerminal

```sh
sudo reboot 
```

Agora, quando o reTerminal for iniciado, a interface do painel do Home Assistant será aberta em janela de tela cheia!

## Bônus

Depois de integrar lâmpadas inteligentes, sensores de temperatura e umidade, CFTV e mais, um painel completo de Casa Inteligente no Home Assistant ficará como abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></div>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
