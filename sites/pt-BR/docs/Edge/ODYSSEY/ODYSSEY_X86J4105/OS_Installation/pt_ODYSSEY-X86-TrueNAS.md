---
description: ODYSSEY - X86J4105
title: Instalação do TrueNAS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86-TrueNAS
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-TrueNAS/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/1.png" alt="pir" width={1000} height="auto" /></p>

Este guia explica como transformar seu ODYSSEY-X86 em um armazenamento conectado à rede (NAS) instalando o TruneNAS. Vamos começar!

## O que é TrueNAS?

[TrueNAS](https://www.truenas.com) é um sistema operacional de armazenamento conectado à rede (NAS) gratuito e de código aberto desenvolvido pela iXsystems. Ele é baseado em FreeBSD e Linux e usa o sistema de arquivos OpenZFS. Pode ser executado em praticamente todo hardware baseado em X86.

O TrueNAS possui várias edições e inclui TrueNAS CORE (anteriormente conhecido como FreeNAS), TrueNAS Enterprise (edição comercial) e TrueNAS SCALE (edição Linux). Você pode visitar [este link](https://www.truenas.com/compare-editions) para saber mais sobre as diferenças entre elas.

O TrueNAS oferece suporte a clientes executando múltiplos sistemas operacionais, como Windows, macOS e Linux. Ele também oferece vários hosts de virtualização, como XenServer e VMware, usando os protocolos SMB, AFP, NFS, iSCSI, SSH, rsync e FTP/TFTP. Também inclui recursos avançados como criptografia de disco completo e uma arquitetura de plug-ins para softwares de terceiros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/2.png" alt="pir" width={400} height="auto" /></p>

## Pré-requisitos

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- Unidade flash USB (>1GB)
- Cabo Ethernet e um roteador com uma porta livre
- Mídia de armazenamento externa (Se você usar o ODYSSEY-X86 com eMMC embutido, também pode utilizá-lo)

  - SSD NVMe ou
  - SSD SATA ou
  - HDD SATA ou
  - Cartão Micro-SD ou
  - Unidade flash USB (>1GB)

## Primeiros Passos

Agora vamos passar pelo processo de instalação do TrueNAS no ODYSSEY-X86. Aqui usaremos o TrueNAS Core como exemplo para percorrer as etapas de instalação.

### Gravar a imagem do TrueNAS em uma unidade flash USB

- **Passo 1.** Acesse [este link](https://www.truenas.com/download-truenas-core) para abrir a página de download do TrueNAS Core

**Nota:** Se você quiser baixar o TruneNAS scale, pode visitar [este link](https://www.truenas.com/download-truenas-scale)

- **Passo 2.** Você pode assinar a newsletter do TrueNAS ou optar por pular esta etapa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/3.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Baixe a versão **Stable**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/4.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Baixe e instale o **BalenaEtcher** de acordo com o seu sistema operacional acessando [este link](https://www.balena.io/etcher) e abra-o

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Conecte uma unidade flash USB ao seu PC, clique em **Flash from file**, selecione o arquivo baixado anteriormente, clique em **Select target**, escolha a unidade flash USB conectada e clique em **Flash**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/5.jpg" alt="pir" width={1000} height="auto" /></p>

### Inicializar o TrueNAS a partir da unidade flash e instalar na unidade externa

- **Passo 1.** Conecte a unidade flash USB na qual gravamos a imagem do TrueNAS anteriormente a uma das portas USB do ODYSSEY-X86

- **Passo 2.** Conecte uma unidade de armazenamento externa para instalar o TrueNAS. O ODYSSEY-X86 possui várias opções de armazenamento, tais como:

  - SSD NVMe
  - SSD SATA
  - HDD SATA
  - Cartão Micro-SD
  - Unidade flash USB (>1GB)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

**Nota:** Aqui recomendamos que você escolha um SSD M.2 para instalar o TrueNAS pela confiabilidade e use o M.2 restante e a porta SATA para conectar outras unidades para armazenamento de arquivos

- **Passo 3.** Conecte uma ponta de um cabo Ethernet a uma das portas Ethernet do ODYSSEY-X86 e a outra ponta do cabo a um roteador

- **Passo 4.** Ligue o ODYSSEY-X86 e pressione continuamente a tecla **DELETE** para entrar na BIOS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Vá até a aba **Boot**, selecione **Boot Option #1** e selecione **UEFI: USB, Partition 2**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 6.** Vá até a aba **Save & Exit**, selecione **Save Changes and Reset** e selecione **Yes** na janela pop-up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 7.** Assim que o ODYSSEY-X86 inicializar no TrueNAS com sucesso, pressione **ENTER** para prosseguir com a opção **Install/Upgrade**, que é destacada por padrão

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/7.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 8.** Escolha a unidade desejada para instalar o TrueNAS pressionando **ESPAÇO** após navegar usando as **setas direcionais**. Pressione **ENTER** para ir para o próximo passo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/8.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 9.** Pressione **ENTER** novamente para prosseguir

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/9.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 10.** Agora será solicitado que você altere a **root password**. Isto é **recomendado**. Insira uma senha e pressione **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/10.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 11.** Escolha **boot via UEFI** porque o ODYSSEY-X86 oferece suporte à inicialização UEFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/11.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 12.** Escolha **Create swap** para melhor desempenho

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/12.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 13.** Quando o TrueNAS terminar a instalação, pressione **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/13.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 14.** Selecione **Reboot System** e pressione **ENTER** novamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/14.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 15.** Quando o sistema começar a inicializar novamente, remova a unidade flash USB, entre na BIOS, selecione a unidade externa conectada como dispositivo de boot e inicialize novamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/15.png" alt="pir" width={1000} height="auto" /></p>

Agora o ODYSSEY-X86 irá inicializar a partir da unidade externa no TrueNAS e você verá a seguinte saída se a inicialização ocorrer com sucesso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/16.png" alt="pir" width={1000} height="auto" /></p>

### Configurar o TrueNAS

Agora vamos configurar o software TrueNAS

#### Acessar a GUI

- **Passo 1.** Digite o endereço IP mostrado em um navegador  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/17.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 2.** Insira o nome de usuário como **root** e a senha que você definiu anteriormente para **LOG IN**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/18.png" alt="pir" width={1000} height="auto" /></p>

Por fim, você será levado ao painel da GUI do TrueNAS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/19.png" alt="pir" width={1000} height="auto" /></p>

Aqui você pode configurar uma grande quantidade de ajustes e explorar muitos recursos. Você pode aprender mais acessando a [documentação oficial do TrueNAS](https://www.truenas.com/docs)

#### Configurar o pool de armazenamento

Para esta seção deste wiki, mostraremos como configurar um pool de armazenamento com o HDD conectado

- **Passo 1.** Primeiro precisamos criar um pool de armazenamento. Navegue até `Storage > Pools` e clique em **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/20.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Clique em **CREATE POOL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/21.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Digite um **name** para o pool

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/22.png" alt="pir" width={550} height="auto" /></p>

- **Passo 4.** Selecione todos os discos disponíveis e clique na **seta apontando para a direita** para adicionar os discos. Aqui conectamos apenas um HDD. No entanto, você pode conectar vários HDDs e todos eles serão mostrados aqui.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/23.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/24.png" alt="pir" width={1000} height="auto" /></p>

Como conectamos apenas um HDD, ele só permitirá a configuração **Stripe**. Entretanto, se vários discos estiverem conectados, haverá a opção de **RAID**, que é focada em redundância de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/25.png" alt="pir" width={500} height="auto" /></p>

- **Passo 5.** Ignore os avisos sobre **data loss** (por causa de apenas uma unidade) marcando **Force**, depois **Confirm** e, por fim, clique em **CONTINUE**. Se você tiver várias unidades conectadas, não verá este aviso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/26.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **CREATE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/27.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Marque **Confirm** e depois clique em **CREATE POOL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/28.jpg" alt="pir" width={350} height="auto" /></p>

Quando o pool for criado, você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/29.png" alt="pir" width={1000} height="auto" /></p>

#### Criar uma conta de usuário

Agora vamos criar uma nova conta de usuário e vinculá-la a um dataset

- **Passo 1.** Vá para `Accounts > Users` e clique em **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/30.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Digite **Full Name**, **Username** e **Password**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/31.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Marque **Microsoft Account** e clique em **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/32.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Vá para **Pools** novamente, clique nos **3-dots** ao lado do pool que criamos antes e clique em **Add Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/33.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Dê um nome para o Dataset e clique em **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/34.png" alt="pir" width={450} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/35.png" alt="pir" width={450} height="auto" /></p>

- **Passo 6.** Clique nos **3-dots** ao lado do dataset recém-criado e selecione **Edit Permissions**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/36.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 7.** Selecione o nome de usuário criado anteriormente como **User** e **Group** nos menus suspensos, marque **Apply User** e **Apply Group** e, por fim, clique em **SAVE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/37.png" alt="pir" width={1000} height="auto" /></p>

#### Configurar compartilhamento SMB e acessar a partir do PC

Em seguida, mostraremos como tornar esse espaço de armazenamento acessível a partir de um PC

- **Passo 1.** Vá para `Sharing > Windows Shares (SMB)**and click**ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/38.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Selecione, por último, o dataset que criamos antes e clique em **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/39.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Clique em **CONFIGURE NOW** na janela pop-up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/40.png" alt="pir" width={350} height="auto" /></p>

- **Passo 4.** Selecione **RESTRICTED** e clique em **CONTINUE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/41.png" alt="pir" width={350} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/42.png" alt="pir" width={350} height="auto" /></p>

- **Passo 5.** Clique em **SAVE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/43.png" alt="pir" width={1000} height="auto" /></p>

Agora configuramos com sucesso o compartilhamento SMB

- **Passo 6.** Vá para o **File Explorer** em um PC e selecione **Map network drive** no **menu de 3 pontos**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/44.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 7.** Ao lado de **Folder**, digite o seguinte

```sh
\\<IP_address_of_x86>\<dataset_name>
```

Depois marque as duas caixas abaixo e clique em **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/45.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Insira o nome de usuário e a senha que você especificou ao criar uma nova conta antes, marque a caixa **Remember my credentials** e clique em **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/46.png" alt="pir" width={450} height="auto" /></p>

Agora você poderá acessar essa unidade compartilhada diretamente do seu PC. Você pode começar a copiar arquivos diretamente do seu PC para essa unidade

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/47.png" alt="pir" width={400} height="auto" /></p>

## Recursos

- **[Página da Web]** [Documentação oficial do TrueNAS](https://www.truenas.com/docs)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
