---
description: Expansão de memória
title: Expansão de memória
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Memory_Expansion
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Memory_Expansion/
---

# Expansão de Memória do reComputer para Jetson

O reComputer para Jetson é vendido com 16 GB de eMMC e vem com **ubuntu 18.04 LTS** e **NVIDIA JetPack 4.6** instalados, de modo que o espaço de usuário restante disponível é de cerca de 2 GB, o que é um obstáculo significativo para usar o reComputer para treinamento e implantação em alguns projetos. Este tutorial apresentará o processo de expansão para diferentes modelos de reComputer com base nessa situação e ajudará os desenvolvedores a expandir seus sistemas transferindo-os para dispositivos de armazenamento externos.

## Fundamentos da Expansão de Capacidade

O primeiro setor no disco onde o sistema está instalado é chamado de **Master Boot Record (MBR)**, que contém informações sobre o **BootLoader**, a tabela de partição e o identificador fixo **55AA**. Durante o processo de inicialização do Linux, o **BootLoader** e o **kernel** passam por duas fases importantes.

**Fase 1:** O BootLoader inicializa **(initrd)** um sistema de arquivos raiz temporário **(ramfs)**. O ramfs contém programas de configuração para drivers, sistemas de arquivos (fs), redes (net), etc. que são necessários na inicialização. Depois disso, o controle do BootLoader é transferido para o kernel, para que o kernel possa pegar esses programas, movê-los para a memória **(RAM)** e executá-los para carregar os vários módulos funcionais.

**Fase 2:** Depois que o kernel carrega os módulos necessários com o ramfs, ele libera o sistema e configura o sistema de arquivos raiz real **(rootfs)** para montar no diretório raiz real.

1. Nas duas fases acima, não precisamos modificar a parte do kernel que carrega os módulos funcionais com o ramfs (fase 1), portanto, mesmo que o reComputer tenha sido expandido, ele ainda precisará usar a eMMC.
2. O que precisamos modificar é a segunda fase, que monta o sistema de arquivos raiz na memória externa, possibilitando assim a expansão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## Observações Sobre a Expansão de Capacidade

1. O principal princípio da expansão via armazenamento externo é definir o rootfs para estar em um dispositivo de armazenamento externo.

2. Este método de expansão irá modificar arquivos de sistema em nível de kernel Linux e você pode se deparar com alguns problemas que não são fáceis de resolver. Você deve usar um reComputer novo e um dispositivo de armazenamento novo ao seguir este tutorial para concluir a expansão e **não tente armazenar arquivos valiosos no dispositivo**. Se algo não funcionar como esperado, talvez seja necessário formatar novamente o dispositivo de armazenamento ou até mesmo o reComputer e, como opção final de retenção, nós ofereceremos ajuda para restaurar o backup via porta serial, se possível, mas você é responsável por qualquer perda de dados.

3. Este processo de expansão não requer recompilar o kernel e economiza cerca de 40 minutos de tempo de instalação em comparação com outros métodos de expansão anteriores disponíveis on‑line.

## Expansão Via Slot M.2 na Placa Carrier e SSD

SSD, também conhecido como Solid State Drive, é frequentemente usado como dispositivo de armazenamento principal para laptops, desktops, etc. Com sua alta confiabilidade e taxas rápidas de leitura e gravação de dados, é a melhor escolha para a expansão do reComputer. A tabela a seguir lista os produtos da Série reComputer que atualmente estão disponíveis para soluções de expansão com SSD. A principal razão pela qual o reComputer J1010 não suporta expansão com SSD é porque a placa carrier não está equipada com um slot M.2 adequado.

<table align="center">
  <tbody><tr>
      <th align="center">Produto</th>
      <th align="center">reComputer J1020</th>  
      <th align="center">reComputer J2011</th>
      <th align="center">reComputer J2012</th>
      <th align="center">reComputer J2021</th>
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061361</td>
      <td align="center">110061363</td>
      <td align="center">110061401</td>
      <td align="center">110061381</td>
    </tr>
    <tr>
      <th align="center">Vista lateral</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
    </tr>
    <tr>
      <th align="center">Módulo equipado</th>
      <td align="center">Jetson Nano 4G</td>
      <td align="center">Jetson Xavier NX 8GB</td>
      <td align="center">Jetson Xavier NX 16GB</td>
      <td align="center">Jetson Xavier NX 8GB</td>
    </tr>
    <tr>
      <th align="center">Placa carrier em operação</th>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">J202</td>
    </tr>
  </tbody>
</table>

### Requisitos de Software e Hardware

As seguintes condições precisam ser atendidas para a solução de expansão usando SSDs, que são os requisitos básicos para que a expansão seja comprovadamente bem-sucedida.

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">requisitos de software e hardware</th>  
    </tr>
    <tr>
      <th align="center">reComputer para Jetson</th>
      <td align="left">Versões do JetPack 4.4 ~ 4.6 <br />
        A placa carrier deve conter slot M.2 M‑Key</td>
    </tr>
    <tr>
      <th align="center">SSD</th>
      <td align="left">O SSD precisa usar sistema de arquivos estendido de quarta geração (Ext4) <br />
        Interface M.2 M‑Key com protocolo NVMe <br />
        Capacidade recomendada ≤ 512 GB</td>
    </tr>
  </tbody>
</table>

!!!Attention
    A versão atualizada do JetPack não foi testada para expansão, portanto a estabilidade ou o sucesso da expansão não podem ser garantidos, siga este tutorial com atenção.

    O SSD precisa ser M.2 M‑Key, caso contrário não irá corresponder à interface na placa carrier.
    <div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg"/></div>

    Dispositivos de armazenamento com sistemas de arquivos que não sejam o sistema de arquivos estendido de quarta geração (Ext4) não conseguem concluir as operações de expansão.

### Etapas de expansão

**Passo 1.** Instalar o SSD

Siga as etapas nas [Instruções de Hardware](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Hardware_Layout/) para instalar o SSD no reComputer.

**Passo 2.** Preparar o SSD

Use o atalho `Ctrl+F` ou clique no ícone do Ubuntu no canto superior esquerdo para procurar por **Disks** e abrir a ferramenta Disks que vem com o Ubuntu 18.04.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

Selecione seu SSD no lado esquerdo e, em seguida, selecione **Format Disk** no canto superior direito, abaixo da barra de menu.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>

Formate seu SSD para o formato GPT. Uma janela pop‑up aparecerá pedindo para você confirmar e inserir a senha de usuário.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>

Em seguida, clicamos no **+** do meio para adicionar uma letra/unidade de disco.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>

Clique em "Next".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>

Dê um nome ao seu SSD e selecione **Ext4** no tipo e clique em "Create". Neste ponto concluímos a preparação do SSD de acordo com os requisitos de expansão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>

**Passo 3.** Construir o diretório raiz no SSD

Use o comando git para baixar para o reComputer os arquivos de script de que precisamos.

```sh
git clone https://github.com/limengdu/rootOnNVMe.git
cd rootOnNVMe/
```

Em seguida, execute o seguinte comando para construir no SSD os arquivos do diretório raiz da eMMC; o tempo de espera desta etapa depende do tamanho do diretório raiz que você está usando.

```sh
./copy-rootfs-ssd.sh
```

**Passo 4.** Configurar o ambiente e concluir a expansão

Execute o comando a seguir para concluir a configuração do rootfs.

```sh
./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

Quando você reiniciar o reComputer, verá que a eMMC se tornou um dispositivo de armazenamento externo na interface principal e verá que a pegada do sistema foi reduzida, então a expansão foi bem-sucedida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

!!!Attention
    O caminho padrão do SSD no arquivo de script é `/dev/nvme0n1p1`, que também é o caminho atribuído por padrão pelo reComputer. Se você descobrir que o caminho do seu SSD não coincide com esse ao usar o comando `sudo fdisk -l`, altere o caminho de todos os `/dev/nvme0n1p1` nos arquivos **copy-rootfs-ssd.sh**, **data/setssdroot.service** e **data/setssdroot.sh** em rootOnNVMe para o caminho em que o seu SSD está localizado.
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>

    A expansão acima não removerá o conteúdo original do diretório raiz da eMMC. Se você não quiser inicializar a partir do SSD, pode remover o SSD e o sistema ainda será inicializado a partir da eMMC.

## Expansão de capacidade via dispositivo de armazenamento USB

Dispositivos de armazenamento USB, como pendrives USB e discos rígidos portáteis, são amplamente usados como armazenamento externo em várias áreas da vida, e a expansão via USB também é aplicável ao reComputer. A tabela a seguir lista os produtos reComputer que atualmente estão disponíveis para soluções de expansão via USB.

<table align="center">
  <tbody><tr>
      <th align="center">Produto</th>
      <th align="center">reComputer J1010</th>  
    </tr>
    <tr>
      <th align="center">SKU</th>
      <td align="center">110061362</td>
    </tr>
    <tr>
      <th align="center">Vista lateral</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></div></td>
    </tr>
    <tr>
      <th align="center">Módulo equipado</th>
      <td align="center">Jetson Nano 4G</td>
    </tr>
    <tr>
      <th align="center">Placa carregadora em operação</th>
      <td align="center">placa carregadora J1010</td>
    </tr>
  </tbody>
</table>

A maior vantagem de fazer a expansão por meio de dispositivos de armazenamento USB em vez de SSDs é o alto grau de conveniência dos dispositivos USB e a simplicidade de removê‑los.
No entanto, mesmo com a interface USB 3.2 de alta velocidade, a taxa de transferência de dados é muito menor do que a do barramento PCIe padrão, portanto o método de expansão com SSD é superior em termos de estabilidade, confiabilidade e velocidade de transferência de dados.

### Requisitos de Software e Hardware

As seguintes condições precisam ser atendidas para a solução de expansão usando USB, que é o requisito básico para verificar se a expansão pode ser feita com sucesso.

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">requisitos de software e hardware</th>  
    </tr>
    <tr>
      <th align="center">reComputer para Jetson</th>
      <td align="left">Versões do JetPack 4.4 ~ 4.6 <br />
        O módulo equipado precisa ser Jetson Nano</td>
    </tr>
    <tr>
      <th align="center">Dispositivos de armazenamento USB</th>
      <td align="left">Os dispositivos de armazenamento USB precisam usar sistema de arquivos de quarta geração estendida (Ext4) <br />
        Corrente de alimentação do dispositivo de armazenamento USB ≤ 0,5 A</td>
    </tr>
  </tbody>
</table>

!!!Attention
    A versão atualizada do JetPack não foi testada para expansão, portanto a estabilidade ou o sucesso da expansão não podem ser garantidos, siga este tutorial com atenção.

    Dispositivos de armazenamento USB de grande capacidade exigem que o reComputer seja alimentado corretamente para manter o funcionamento adequado, e dispositivos de armazenamento USB com capacidade acima de 512 GB não são recomendados. Alimentação insuficiente pode fazer com que o reComputer desligue.

    Módulos equipados que não sejam Jetson Nano não suportam expansão usando este método no momento.

    Dispositivos de armazenamento com sistemas de arquivos que não sejam de quarta geração estendida (Ext4) não conseguem concluir as operações de expansão.

### Etapas de expansão

**Etapa 1.** Preparar os arquivos necessários

Use o comando git para baixar para o reComputer os arquivos de script de que precisamos.

```sh
git clone https://github.com/limengdu/bootFromUSB.git
cd bootFromUSB
```

**Etapa 2.** Preparar o dispositivo de armazenamento USB

Conecte um dispositivo de armazenamento USB ao reComputer e abra a ferramenta Disks que acompanha o Ubuntu 18.04 usando o atalho `Ctrl+F` ou clicando no ícone do Ubuntu no canto superior esquerdo e procurando por **Disks**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

Selecione seu dispositivo de armazenamento USB no lado esquerdo e, em seguida, selecione **Format Disk** no canto superior direito, abaixo da barra de menu.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>

Formate o seu dispositivo de armazenamento USB para o formato GPT. Uma janela pop‑up aparecerá pedindo para você confirmar e inserir a senha de usuário.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>

Em seguida, clicamos no **+** do meio para adicionar um caractere de disco.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>

Clique em "Next".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>

Dê um nome ao seu dispositivo de armazenamento USB e selecione **Ext4** em type e clique em "Create". Neste ponto, já concluímos a preparação do dispositivo de armazenamento USB de acordo com os requisitos de expansão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>

**Etapa 3.** Montar um dispositivo de armazenamento USB

O dispositivo de armazenamento USB preparado de acordo com a **etapa 2** pode ser visto no software Disks como não montado.

!!!Note
 Se você perceber que seu dispositivo USB foi montado automaticamente após a formatação, pule esta etapa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>

Usamos o seguinte comando para montar o dispositivo USB.

```sh
mkdir /media/USB/
sudo mount <USB Device Path> /media/USB/
```

Onde `<USB Device Path>` se refere ao caminho do dispositivo de armazenamento USB, esse parâmetro pode ser visto em Device no software Disks ou pode ser consultado com o comando `sudo fdisk -l`. Por exemplo, para o meu dispositivo USB, posso montar `/dev/sda1` em `/media/USB/` com o seguinte comando.

```sh
sudo mount /dev/sda1 /media/USB/
```

Use o seguinte comando para verificar o local de montagem do dispositivo.

```sh
sudo findmnt -rno TARGET <USB Device Path>
```

Para o meu dispositivo USB, os comandos que preciso usar são:

```sh
sudo findmnt -rno TARGET /dev/sda1
```

**Etapa 4.** Copiar o sistema para um dispositivo de armazenamento USB

O script **copyRootToUSB.sh** copia o conteúdo de todo o sistema eMMC para o dispositivo de armazenamento USB. Claro, o dispositivo de armazenamento USB deve ter mais espaço de armazenamento do que o eMMC.

O comando usado é o seguinte.

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     Directory path to parent of kernel

-v | --volume_label  Label of Volume to lookup

-p | --path          Device Path to USB drive (e.g. /dev/sda1)

-h | --help  This message
```

Em geral, para necessidades regulares de expansão, podemos simplesmente selecionar `-p` no parâmetro `[OPTIONS]` e, depois, precisamos adicionar o caminho do dispositivo USB (por exemplo, `/dev/sda1`), que obtivemos na **etapa 3**. Por exemplo, para o meu dispositivo USB, o comando completo que preciso usar é:

```sh
./copyRootToUSB.sh -p /dev/sda1
```

O tempo que esse comando leva para ser executado depende do tamanho dos arquivos armazenados no seu eMMC.

**Etapa 5.** Consultar o UUID dos dispositivos USB

Para garantir, precisamos procurar o UUID do dispositivo USB.

```sh
./partUUID.sh 
```

O caminho padrão para este comando é **sda1 (/dev/sda1)**, mas você também pode determinar o UUID de outros dispositivos USB. Especifique `/dev/ usando` a flag `-d`. Por exemplo, para o meu dispositivo USB seria:

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

!!!Attention
    Se o UUID retornado for diferente em formato e comprimento do exemplo acima, então o dispositivo provavelmente não foi formatado como Ext4, comece novamente a partir da **etapa 2**!

**Etapa 6.** Modificar a configuração de boot para concluir a expansão

Primeiro, precisamos fazer um backup do arquivo de configuração de boot.

```sh
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

Esta etapa é a mais importante e perigosa na operação de expansão do dispositivo USB. Edite o arquivo `/boot/extlinux/extlinux.conf` e `/media/nvidia/boot/extlinux/extlinux.conf`, depois adicione uma entrada para apontar para o novo rootfs, o local é o caminho do dispositivo USB, preencha‑o no parâmetro `<path>` abaixo. As informações de caminho são obtidas na **etapa 3**.

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

Para o dispositivo de armazenamento USB que estou usando, o arquivo `/boot/extlinux/extlinux.conf` e `/media/nvidia/boot/extlinux/extlinux.conf` modificados ficam da seguinte forma:

```sh
TIMEOUT 30
DEFAULT primary

MENU TITLE L4T boot options

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=/dev/sda1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
#      APPEND ${cbootargs} quiet root=/dev/mmcblk0p1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1 

# When testing a custom kernel, it is recommended that you create a backup of
# the original kernel and add a new entry to this file so that the device can
# fallback to the original kernel. To do this:
#
# 1, Make a backup of the original kernel
#      sudo cp /boot/Image /boot/Image.backup
#
# 2, Copy your custom kernel into /boot/Image
#
# 3, Uncomment below menu setting lines for the original kernel
#
# 4, Reboot

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

Salve o arquivo e reinicie o reComputer, a raiz do sistema será alternada para o dispositivo de armazenamento USB e a expansão estará concluída.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>

## Restaurar backup do sistema via console serial

Quando o seu sistema não inicializa corretamente devido a um erro, ou por algum outro motivo (um cenário comum é que o ícone da Nvidia fique reaparecendo na inicialização), então o backup que você fez durante a expansão terá um papel importante. Entendemos sua ansiedade neste momento, mas tenha paciência e siga as etapas abaixo para colocar o reComputer no console serial e operaremos o U‑boot para restaurar o seu backup.

### Preparação de material

<table align="center">
  <tbody><tr>
      <th align="center">Preparação de material</th>
      <th align="center">Descrição</th>  
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/7.jpeg" /></div></th>
      <td align="left">Host Ubuntu x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div></th>
      <td align="left">Não é possível acessar o sistema reComputer Jetson x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/5.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?queryID=cb30ad1a9d75c9ef437912535186b130&objectID=1112&indexName=bazaar_retailer_products">Módulo UART para USB x1</a></td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/6.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html?queryID=a51c4491cb6b462a1e844c832c98c52a&objectID=2042&indexName=bazaar_retailer_products">Fio DuPont fêmea para fêmea x3</a></td>
    </tr>
  </tbody>
</table>

### Etapas para acessar o console serial

**Passo 1.** Conectando o módulo UART para USB ao reComputer

Conecte o reComputer ao módulo UART para USB de acordo com as instruções de fiação na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={3}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/8.jpeg" /></div></td>
    </tr>
    <tr>
      <td align="center">reComputer</td>
      <td align="center"> </td>
      <td align="center">Módulo UART para USB</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">UART TXD</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">UART RXD</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody>
</table>

!!!Tip
    A interface VCC entre o reComputer e o módulo UART para USB não precisa ser conectada.

    O reComputer não precisa ser ligado por enquanto depois que o cabo estiver conectado, então, por favor, deixe-o de lado por enquanto.

    Desconecte a memória externa expandida.

**Passo 2.** Instalar e iniciar o minicom no host Ubuntu

Se o seu host Ubuntu não tiver o minicom instalado, você pode instalar o minicom no seu computador com o seguinte comando.

```sh
sudo apt-get install minicom
```

Após aguardar a conclusão da instalação, insira o comando para iniciar o minicom.

```sh
sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**Passo 3.** Preparando-se para configurar o minicom

Na barra de menu do minicom, abrimos a porta serial e a configuramos para que possamos obter as informações de inicialização do reComputer por meio do minicom. Na barra de menu, pressione a tecla **o** do teclado para acessar a tela de configuração. Use as setas para cima e para baixo do teclado para mover o cursor até **Serial port setup**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**Passo 4.** Conectando o reComputer ao host Ubuntu

Neste momento, criamos uma nova janela de linha de comando e inserimos comandos na janela para monitorar o acesso do novo dispositivo.

```sh
dmesg --follow
```

Neste ponto, ligaremos o reComputer e conectaremos o módulo UART para USB com o reComputer conectado ao host Ubuntu via porta USB. A janela da linha de comando mostrará o nome do dispositivo recém-conectado, precisamos encontrar o fragmento começando com **tty** e anotá-lo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**Passo 5.** Operação U-boot

Volte ao minicom e preencha o nome do dispositivo obtido no **passo 4** em **Serial Device**. Além disso, verifique se a taxa de baud está configurada para **115200**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

Depois de modificar, pressione Enter para salvar. Selecione **Save setup as dfl** e saia da interface do minicom.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

Insira novamente o comando `sudo minicom` e, depois de entrar no minicom, veremos as informações de inicialização do reComputer na janela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

Podemos solucionar por que o reComputer falha ao inicializar usando as informações retornadas e usando a ajuda de comandos para ver todos os comandos disponíveis no sistema U-boot. Saber como usar esses comandos é necessário para resolver o problema, mas, é claro, pode ser difícil.

```sh
Tegra210 (P3450-0000) # help
?         - alias for 'help'
base      - print or set address offset
bdinfo    - print Board Info structure
blkcache  - block cache diagnostics and control
boot      - boot default, i.e., run 'bootcmd'
bootd     - boot default, i.e., run 'bootcmd'
bootefi   - Boots an EFI payload from memory
bootelf   - Boot from an ELF image in memory
booti     - boot Linux kernel 'Image' format from memory
bootm     - boot application image from memory
bootp     - boot image via network using BOOTP/TFTP protocol
bootvx    - Boot vxWorks from an ELF image
cmp       - memory compare
coninfo   - print console devices and information
cp        - memory copy
crc32     - checksum calculation
dcache    - enable or disable data cache
dfu       - Device Firmware Upgrade
dhcp      - boot image via network using DHCP/TFTP protocol
dm        - Driver model low level access
echo      - echo args to console
editenv   - edit environment variable
enterrcm  - reset Tegra and enter USB Recovery Mode
env       - environment handling commands
exit      - exit script
ext2load  - load binary file from a Ext2 filesystem
ext2ls    - list files in a directory (default /)
ext4load  - load binary file from a Ext4 filesystem
ext4ls    - list files in a directory (default /)
ext4size  - determine a file's size
ext4write - create a file in the root directory
false     - do nothing, unsuccessfully
fatinfo   - print information about filesystem
fatload   - load binary file from a dos filesystem
fatls     - list files in a directory (default /)
fatmkdir  - create a directory
fatrm     - delete a file
fatsize   - determine a file's size
fatwrite  - write file into a dos filesystem
fdt       - flattened device tree utility commands
fstype    - Look up a filesystem type
go        - start application at address 'addr'
gpio      - query and control gpio pins
gzwrite   - unzip and write memory to block device
help      - print command description/usage
i2c       - I2C sub-system
icache    - enable or disable instruction cache
imxtract  - extract a part of a multi-image
itest     - return true/false on integer compare
ln        - Create a symbolic link
load      - load binary file from a filesystem
loadb     - load binary file over serial line (kermit mode)
loads     - load S-Record file over serial line
loadx     - load binary file over serial line (xmodem mode)
loady     - load binary file over serial line (ymodem mode)
loop      - infinite loop on address range
ls        - list files in a directory (default /)
lzmadec   - lzma uncompress a memory region
md        - memory display
mii       - MII utility commands
mm        - memory modify (auto-incrementing address)
mmc       - MMC sub system
mmcinfo   - display MMC info
mw        - memory write (fill)
nm        - memory modify (constant address)
nvme      - NVM Express sub-system
part      - disk partition related commands
pci       - list and access PCI Configuration Space
ping      - send ICMP ECHO_REQUEST to network host
printenv  - print environment variables
pxe       - commands to get and boot from pxe files
reset     - Perform RESET of the CPU
run       - run commands in an environment variable
save      - save file to a filesystem
saveenv   - save environment variables to persistent storage
setenv    - set environment variables
sf        - SPI flash sub-system
showvar   - print local hushshell variables
size      - determine a file's size
sleep     - delay execution for some time
source    - run script from memory
sspi      - SPI utility command
sysboot   - command to get and boot from syslinux files
test      - minimal test like /bin/sh
tftpboot  - boot image via network using TFTP protocol
true      - do nothing, successfully
ums       - Use the UMS [USB Mass Storage]
unzip     - unzip a memory region
usb       - USB sub-system
usbboot   - boot from USB device
version   - print monitor, compiler and linker version
```

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
