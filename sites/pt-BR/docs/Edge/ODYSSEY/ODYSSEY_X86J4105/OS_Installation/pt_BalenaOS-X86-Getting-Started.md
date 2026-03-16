---
description: Primeiros passos com balenaOS no ODYSSEY-X86
title: Instalação do BalenaOS
keywords:
  - Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BalenaOS-X86-Getting-Started
sku: 102110399,102110398,102110397,102110319,114992152,110991412,110991465,102110477,102110478,102110479,110991484,110991405,110991565,102110539,102110540,102110541,102110548,102110549,102110550,110991564,B102110608,B102110611,B102110610,110991824,110991825
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BalenaOS-X86-Getting-Started/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/thumb.png" alt="pir" width="1000" height="auto"/></p>

## O que é o balenaOS?

[balenaOS](https://www.balena.io/os) é um sistema operacional otimizado para executar contêineres Docker em dispositivos embarcados, com ênfase na confiabilidade por longos períodos de operação, bem como em um fluxo de trabalho de desenvolvimento produtivo inspirado nas lições aprendidas durante a criação do balena.

O principal insight por trás do balenaOS é que os contêineres Linux oferecem, pela primeira vez, um caminho prático para usar virtualização em dispositivos embarcados. Máquinas virtuais e hipervisores proporcionaram enormes avanços em produtividade e automação para implantações em nuvem, mas sua abstração de hardware, bem como sua sobrecarga de recursos e falta de suporte a hardware, significam que eles não são adequados para cenários embarcados. Com a virtualização em nível de sistema operacional, como implementado para contêineres Linux, essas duas objeções são eliminadas para dispositivos Linux, dos quais existem muitos na Internet das Coisas.

## O que é o balenaCloud?

[balenaCloud](https://www.balena.io/cloud) é uma infraestrutura abrangente, baseada em nuvem, para implantação e gerenciamento de dispositivos, hospedada pela balena. Ela permite que mesmo o proprietário de frota mais iniciante crie aplicações em qualquer linguagem, faça o provisionamento de dispositivos de forma transparente, teste rapidamente novos recursos e gerencie facilmente sua frota de dispositivos. A tecnologia de contêineres Docker possibilita atualizações seguras, confiáveis e protegidas por meio de um único comando, enquanto os dispositivos permanecem online e totalmente funcionais. Os usuários podem visualizar e gerenciar toda a sua frota de dispositivos usando o painel do balenaCloud ou optar por interagir diretamente com a API.

## Início rápido com balenaOS no ODYSSEY - X86

A maneira mais fácil de instalar o balenaOS no ODYSSEY - X86, juntamente com o balenaCloud, envolve apenas algumas etapas:

- Criar uma frota de dispositivos no balenaCloud
- Gravar a imagem do balenaOS em uma unidade USB
- Conectar uma unidade USB ao ODYSSEY - X86 e inicializar a imagem live
- O ODYSSEY - X86 inicializado aparece no painel do balenaCloud

Agora vamos continuar!

### Pré-requisitos

Prepare o seguinte antes de começar:

- [Placa ODYSSEY - X86](https://www.seeedstudio.com/ODYSSEY-X86J4125864-p-4916.html)
- Unidade flash USB
- Cabo Ethernet ou conectividade WiFi
- [Conta balena](https://dashboard.balena-cloud.com/signup)
- [balenaEtcher](https://www.balena.io/etcher) ou qualquer outro software de gravação de imagens

### Criar uma frota de dispositivos no balenaCloud

- **Passo 1.** [Cadastre-se](https://dashboard.balena-cloud.com/signup) para obter uma conta balena e faça login

- **Passo 2.** Depois de fazer login, clique em **Create fleet** para criar sua primeira frota de dispositivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/5.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Uma frota é um grupo de dispositivos que compartilham a mesma arquitetura e executam o mesmo código. Quando você provisiona um dispositivo, ele é adicionado a uma frota específica, mas pode ser migrado para outra frota a qualquer momento.

- **Passo 3.** Digite um nome para a frota, selecione **Seeed ODYSSEY-X86** como o tipo de dispositivo padrão, mantenha **Starter** como o tipo de Fleet e, por fim, clique em **Create new fleet**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/6.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Para criar uma frota com múltiplos contêineres, você vai querer usar o tipo de frota Starter ou Microservices. As frotas Starter são completas em recursos e gratuitas para todos os usuários, com um limite de até 10 dispositivos no total em todas as frotas Starter.

- **Passo 4.** Clique em **+ Add device** para adicionar a placa ODYSSEY - X86 a esta frota e conectá-la ao balenaCloud

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/7.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 5.** Aqui o **device type** já estará selecionado e a **version** será selecionada como a mais recente disponível. Selecione **Development** como a **edition**, pois ela é recomendada para usuários iniciantes. Você também pode selecionar a conexão de rede como **Ethernet only** ou **Wifi + Ethernet**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/8.png" alt="pir" width="650" height="auto"/></p>

**Nota:** Quando você está começando, uma imagem de Development é a mais útil, pois permite muitos recursos de teste e solução de problemas. Para uso em produção, certifique-se de mudar para uma imagem de Production. Mais detalhes sobre as diferenças entre imagens de Development e de Production estão detalhados [aqui](https://www.balena.io/docs/reference/OS/overview/2.x/#development-vs-production-images).

- **Passo 6.** Clique em **+ Advanced** para selecionar a taxa na qual seu dispositivo verifica atualizações

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/9.png" alt="pir" width="350" height="auto"/></p>

### Gravar e executar a imagem do balenaOS a partir de uma unidade USB

- **Passo 1.** Quando a configuração da imagem estiver concluída, clique na seta ao lado de **Flash** e selecione **Download balenaOS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/10.jpg" alt="pir" width="300" height="auto"/></p>

Quando o download terminar, você deverá ter um arquivo de imagem compactado com um nome como **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img**, onde **ODYSSEY-fleet** é o nome que você deu à sua frota no painel. Como alternativa, ao clicar na seção de alternância do botão de download, você também tem a opção de baixar apenas um arquivo de configuração (config.json) em vez de uma imagem inteira.

- **Passo 2.** Abra o [balenaEtcher](https://www.balena.io/etcher), clique em **Flash from file** e selecione o arquivo **zip** que baixamos anteriormente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/etcher.png" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Conecte uma unidade flash USB ao PC, selecione o **target** como a unidade flash conectada e clique em **Flash**

Em seguida, iremos executar esta imagem no ODYSSEY - X86

- **Passo 4.** Conecte a unidade flash ao ODYSSEY - X86 e ligue a placa

- **Passo 5.** Ao ligar a placa, continue pressionando a **tecla DELETE** para entrar na **BIOS setup**

- **Passo 6.** Vá para a seção **Boot** e defina a **Boot Option #1** como **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 7.** Vá para **Save & Exit** e selecione **Save Changes and Reset**

Agora o sistema operacional será inicializado com sucesso a partir da unidade flash USB

### Gerenciar o ODYSSEY - X86 a partir do painel do balenaCloud

- **Passo 1.** Abra novamente o painel do balenaCloud e a placa ODYSSEY - X86 aparecerá após cerca de um minuto!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/11.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Clique no dispositivo na lista para acessar o painel do dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/12.png" alt="pir" width="1000" height="auto"/></p>

Se você não conseguir colocar o dispositivo online, visite o [canal de suporte da balena](https://www.balena.io/docs/learn/welcome/support)

## FAQ

### P1: Como posso executar a imagem do balenaOS a partir de um HDD/ SSD?

Se você quiser executar a imagem do balenaOS a partir de um HDD/ SSD em vez de executar a partir de uma unidade USB, você pode seguir as etapas abaixo

- **Passo 1.** Siga de **step 1 - step 7** na seção acima **Flash and run balenaOS image from a USB drive**

- **Passo 2.** Depois de inicializar com sucesso, desligue a placa a partir do painel do balenaCloud

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/13.png" alt="pir" width="700" height="auto"/></p>

**Nota:** Precisamos inicializar uma vez após a gravação porque a partição **resin-data** irá crescer para ocupar o espaço restante na unidade flash, e usaremos esse espaço para armazenar a imagem que precisamos gravar no HDD/SSD.

- **Passo 3.** Remova a unidade flash do ODYSSEY - X86 e conecte-a ao PC

- **Passo 4.** Extraia o **arquivo de imagem compactado** baixado anteriormente

- **Passo 5.** Abra uma janela de terminal e copie a imagem extraída **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** para a pasta **resin-data** dentro da partição **resin-data** da unidade flash

```sh
sudo cp balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img /media/username/resin-data/resin-data
```

**Nota:** Altere **username** para o nome de usuário do seu PC

- **Passo 6.** Remova a unidade flash do PC e conecte-a à placa ODYSSEY - X86. Conecte também um HDD/ SSD externo à placa ODYSSEY.

- **Passo 7.** Depois que a placa for inicializada, navegue até o painel do balenaCloud e acesse o **Terminal**. Aqui clique no menu suspenso **Select a target**, selecione **Host OS** e clique em **Start terminal session**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/15.jpg" alt="pir" width="10000" height="auto"/></p>

- **Passo 8.** Digite o seguinte comando no terminal

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/fdisk-l.png" alt="pir" width="620" height="auto"/></p>

Podemos ver que o HDD conectado é **/dev/sda**

- **Passo 9.** Grave o arquivo **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** que copiamos anteriormente no HDD/SSD conectado usando o utilitário **dd**

```sh
dd if=/resin-data/balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img of=/dev/sda
```

**Nota:** Substitua **/dev/sda** pelo nome correspondente ao HDD/SSD conectado

- **Passo 10.** Quando a gravação terminar, desligue o ODYSSEY - X86

- **Passo 11.** Remova a unidade flash USB e ligue o ODYSSEY - X86

- **Passo 12.** Ao ligar a placa, continue pressionando a **DELETE KEY** para entrar na configuração da BIOS

- **Passo 13.** Vá para a seção **BOOT** e defina a **Boot Option #1** como **UEFI OS xxxxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/bios.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 14.** Vá para **Save & Exit** e selecione **Save Changes and Reset**

Agora o sistema operacional será inicializado com sucesso a partir do HDD/SSD

### P2: Como posso acessar o ODYSSEY - X86 usando o terminal?

Você pode acessar o ODYSSEY - X86 via terminal, mas precisa ter o Balena CLI instalado no PC host. Balena CLI é uma Interface de Linha de Comando para balenaCloud ou openBalena. É uma ferramenta de software disponível para Windows, macOS e Linux, usada por meio de um prompt de comando / janela de terminal. Ela pode ser usada de forma interativa ou invocada em scripts.

- **Passo 1.** Siga [este link](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md) para instalar o Balena CLI de acordo com o seu sistema operacional.

**Nota:** Para este tutorial, usaremos o Balena CLI no Ubuntu. No entanto, as instruções serão semelhantes para outros sistemas.

- **Passo 2.** Conecte um cabo Ethernet na placa ODYSSEY - X86 a partir do seu roteador

**Nota:** Certifique-se de que o PC host e o ODYSSEY - X86 estejam na mesma rede

- **Passo 3.** Abra uma janela de terminal e faça uma varredura por dispositivos BalenaOS na rede local

```sh
sudo balena scan
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/scan.png" alt="pir" width="550" height="auto"/></p>

- **Passo 4.** Conecte via SSH à placa usando o endereço IP

```sh
balena ssh <ip address>
```

```sh
example:
balena ssh 192.168.1.78
```

Agora estamos dentro do ODYSSEY - X86 executando o BalenaOS!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/ssh.png" alt="pir" width="650" height="auto"/></p>

Saiba mais sobre o balena CLI [aqui](https://www.balena.io/docs/reference/balena-cli/)

### P3: Como posso compilar o balenaOS a partir do código-fonte

Embora possamos obter a imagem do balenaOS a partir do painel do balenaCloud, como explicado antes, se você se sentir aventureiro, pode ir em frente e compilar a imagem do balenaOS a partir do código-fonte!

#### Compilação Manual na Máquina Local

Agora vamos passar para a compilação manual da imagem de sistema do BalenaOS para o ODYSSEY - X86 usando Yocto via linha de comando.

**Nota:** Este guia foi escrito após testes em um PC host com Ubuntu 20.04 instalado. No entanto, ele funcionará para outros sistemas Linux.

- **Passo 1.** Prepare o ambiente de desenvolvimento no PC host instalando os seguintes pacotes

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Nota:** Se o PC host estiver executando uma distribuição Linux diferente, verifique [aqui](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Passo 2.** Clone o seguinte repositório e entre no repositório

```sh
git clone https://github.com/balena-os/balena-seeed-x86
cd balena-seeed-x86
```

- **Passo 3.** Baixe todas as dependências necessárias

```sh
git submodule update --init --recursive
```

- **Passo 4.** Execute o script de compilação

```sh
./balena-yocto-scripts/build/barys
```

Agora o processo de compilação será iniciado. Espere pacientemente até que a compilação seja concluída. O tempo de compilação dependerá das especificações de hardware da máquina de compilação.

#### Encontrar a Imagem Compilada

Depois que a compilação for concluída, execute o seguinte comando para verificar se a imagem do sistema foi gerada com sucesso

```sh
cd build/tmp/deploy/images/odyssey-x86/;ls -lh *balenaos-img
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/image-location.png" alt="pir" width="1000" height="auto"/></p>

- **balena-image-odyssey-x86** é usada para inicializar diretamente a partir de armazenamento externo (Unidade Flash, SSD, HDD) conectado ao ODYSSEY - X86.
- **balena-image-flasher-odyssey-x86** é usada para inicializar diretamente a partir do armazenamento eMMC interno no ODYSSEY - X86. Portanto, esta imagem flasher é gravada em uma Unidade Flash que é usada para a inicialização inicial. Quando inicializada, essa imagem flasher instalará automaticamente o BalenaOS no armazenamento eMMC interno.

#### Usando a Imagem Compilada

Por padrão, as imagens têm a extensão de arquivo **.balenaos-img**. Antes de prosseguir para gravar essas imagens, você precisa renomear a extensão do arquivo para **.img**.

Por exemplo:

- Renomeie **balena-image-odyssey-x86.balenaos-img** para **balena-image-odyssey-x86.img**.
- Renomeie **balena-image-flasher-odyssey-x86.balenaos-img** para **balena-image-flasher-odyssey-x86.img**

## Recursos

- **[Página Web]** [Documentação do Balena](https://www.balena.io/docs)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
