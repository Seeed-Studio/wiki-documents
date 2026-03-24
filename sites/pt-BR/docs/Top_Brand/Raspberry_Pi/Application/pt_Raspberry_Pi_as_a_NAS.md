---
description: Raspberry Pi como um NAS
title: Raspberry Pi como um NAS
keywords:
  - Aplicação
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_as_a_NAS
last_update:
  date: 8/5/2024
  author: Frank
createdAt: '2024-08-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_as_a_NAS/
---


# Use o Raspberry Pi como um NAS (Network-Attached Storage)

O Raspberry Pi é um microcomputador poderoso, popular entre entusiastas de tecnologia. Ele pode ser usado para vários projetos DIY, incluindo a configuração de um Network Attached Storage (NAS). Neste conteúdo, vamos explorar os seguintes aspectos:

- [O Raspberry Pi é bom para NAS?](#jump1)
- [Como converter o Raspberry Pi 5 em NAS?](#jump2)
- [Problemas comuns e soluções ao usar Raspberry Pi como um NAS](#jump3)

## <span id="jump1"> O Raspberry Pi é bom para NAS? </span>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Raspberry Pi.png" alt="pir" width={500} height="auto" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

O Raspberry Pi tem forte capacidade de processamento e opções de configuração flexíveis, o que o torna uma escolha ideal para construir um NAS. Aqui estão suas vantagens:

- Custo-benefício: o Raspberry Pi é relativamente barato em comparação com dispositivos NAS tradicionais.
-Baixo consumo de energia: o Raspberry Pi tem um consumo de energia muito baixo, tornando-o adequado para operação 24/7.
- Flexibilidade e capacidade de personalização: você pode instalar vários sistemas operacionais e softwares para configurar o NAS conforme necessário.
- Suporte da comunidade: o Raspberry Pi tem uma grande comunidade de usuários, fornecendo recursos abundantes e suporte técnico.

No entanto, há algumas limitações a serem consideradas:

- Limitações de desempenho: o Raspberry Pi pode ter restrições de desempenho em comparação com dispositivos NAS de alto nível, especialmente ao lidar com grandes quantidades de dados.
- Limitações de armazenamento: o próprio Raspberry Pi não possui armazenamento interno de grande capacidade e requer discos rígidos externos ou SSDs.

## <span id="jump2"> Como converter o Raspberry Pi 5 em NAS? </span>

Converter o Raspberry Pi 5 em um NAS não é complicado. Basta seguir estas etapas:

### Etapa 1: Prepare o hardware

- [Um Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)
- Um cartão microSD (recomendado 32GB ou maior)
- Um adaptador de energia estável
- Disco rígido externo ou SSD
- Conexão de rede (com fio ou sem fio)

### Etapa 2: Instale o sistema operacional

1. Use uma ferramenta como o [Raspberry Pi Imager](https://www.raspberrypi.com/software/) para gravar a imagem do sistema operacional no cartão microSD.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/imager.png" alt="pir" width={800} height="auto" /></div>

2. Selecione "Raspberry Pi 5" -> "Raspberry Pi OS (32-bit)" -> cartão SD (certifique-se de selecionar o dispositivo correto para evitar perda de dados se outros dispositivos USB estiverem conectados) e, em seguida, clique em "Next". Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn1.gif" alt="pir" width={800} height="auto" /></div>

3. Em seguida, edite as configurações. Aqui está um exemplo das configurações fornecidas:

- Insira o hostname escolhido nas (recomendado neste tutorial).
- Insira um nome de usuário e senha, que você precisará mais tarde para autenticação.
- Marque a caixa ao lado de "Configure WiFi" para que seu Pi possa se conectar automaticamente ao Wi-Fi.
- Insira o SSID (nome) e a senha da sua rede.
- Marque a caixa ao lado de "Enable SSH", para que possamos conectar ao Pi sem usar mouse e teclado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn2.gif" alt="pir" width={800} height="auto" /></div>

4. Após clicar em "Save", inicie a gravação da imagem. O processo pode levar algum tempo. Quando aparecer como mostrado na imagem abaixo, significa que a gravação foi concluída.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Burn completed.png" alt="pir" width={800} height="auto" /></div>

### Etapa 3: Conexão remota ao Pi

Após inserir o cartão SD, ligue o Raspberry Pi (se possível, conecte-o à rede por meio de um cabo Ethernet, mas neste tutorial usaremos o WiFi escolhido durante a criação da imagem).

Abra uma sessão de terminal em seu computador e acesse o Raspberry Pi via SSH executando o seguinte comando, substituindo **username** e **hostname** pelos definidos durante a criação da imagem:

```bash
ssh <username>@<hostname>.local
```

Por exemplo:

```bash
ssh seeed@nas.local
```

Você precisará inserir a senha criada durante a criação da imagem. Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Remote Connection.gif" alt="pir" width={800} height="auto" /></div>

Agora que concluímos a conexão SSH, é hora de transformá-lo em um NAS.

### Etapa 4: Instalar e configurar o NAS

#### 1.Localizar a unidade

Primeiro, conecte o dispositivo de armazenamento ao Raspberry Pi e, em seguida, verifique os dispositivos de armazenamento conectados com o seguinte comando:

```bash
lsblk
```

Você verá uma saída semelhante a esta:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/locate the drive.gif" alt="pir" width={800} height="auto" /></div>

:::tip
Nessa saída, mmcblk0 é o seu cartão microSD, e o primeiro dispositivo de armazenamento USB conectado aparece como sda (Storage Device A). Dispositivos adicionais serão sdb, sdc, etc.
:::

#### 2.Particionar a unidade

Em seguida, particione a unidade para que o Raspberry Pi OS possa reconhecê-la como um único dispositivo de armazenamento:

```bash
sudo fdisk /dev/sda
```

Aqui estão alguns comandos relevantes:

- Criar uma nova partição: n
- Listar as partições atuais: p
- Excluir uma partição: d
- Sair sem salvar alterações: q

Neste projeto, prosseguiremos para criar uma nova partição inserindo ‘**n**’ e, em seguida, pressionando a tecla **Enter**, e a designaremos como uma partição primária digitando ‘**p**’ e depois pressionando **Enter**. Para as demais opções, optaremos pelas configurações padrão, simplesmente pressionando **Enter**. Caso exista uma partição, iremos removê-la digitando ‘**d**’. Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive1.gif" alt="pir" width={800} height="auto" /></div>

:::tip
Se a mensagem "**All space for primary partitions is in use**" aparecer, isso significa que já existem quatro partições primárias ou três partições primárias e uma partição estendida no disco, e será necessário excluir uma partição (**d**).
:::

:::note
Se houver partições montadas no disco (como minha sda1), siga estas etapas para desmontá-las:

1. Saia do fdisk: Digite q e pressione Enter para sair do fdisk e evitar modificações acidentais.
2. Desmonte os sistemas de arquivos: Se houver partições montadas no disco, desmonte-as primeiro. Você pode visualizar as partições montadas com o seguinte comando:

```bash
mount | grep /dev/sda
```

3. Em seguida, desmonte-as usando o comando umount, por exemplo:

```bash
sudo umount /dev/sda1
```

4. Execute:

```bash
sudo fdisk /dev/sda 
```

Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive2.gif" alt="pir" width={800} height="auto" /></div>

Em seguida, volte à etapa de particionamento acima.
:::

#### 3.Format ar a unidade

Agora que a unidade foi particionada, é essencial formatá-la para garantir que o Raspberry Pi OS possa acessar e manipular dados nela. Para formatar sua unidade com o sistema de arquivos ext4, use o seguinte comando:

```bash
sudo mkfs.ext4 /dev/sda1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/format the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 4.Montar a unidade

Em seguida, monte a unidade para torná-la disponível no sistema de arquivos do Raspberry Pi:

```bash
sudo mount /dev/sda1 /mnt
```

E garanta que a unidade seja montada sempre que o sistema for iniciado:

```bash
sudo nano /etc/fstab
```

Adicione a seguinte linha ao final do arquivo:

```
/dev/sda1 /mnt/sda1/ ext4 defaults,noatime 0 1
```

Pressione **Ctrl**+**X**, depois **Y** e, por fim, **Enter** para salvar o arquivo editado no nano. Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/mount the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 5.Criar uma pasta compartilhada

Execute o seguinte comando para criar uma pasta compartilhada em sua unidade:

```bash
sudo mkdir /mnt/sda1/shared
```

Conceda permissões de leitura, gravação e execução a todos os usuários no Raspberry Pi com o seguinte comando:

```bash
sudo chmod -R 777 /mnt/sda1/shared
```

Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/create a shared folder.gif" alt="pir" width={800} height="auto" /></div>

### Etapa 5: Compartilhar a unidade na rede

Execute o seguinte comando para instalar o [Samba](https://www.samba.org/), uma ferramenta para compartilhar diretórios em uma rede:

```bash
sudo apt install samba samba-common-bin
```

Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network1.gif" alt="pir" width={800} height="auto" /></div>

Em seguida, configure o Samba para compartilhar o diretório na rede. Podemos instruir o Samba por meio do arquivo de configuração do Samba. Abra o arquivo de configuração em um editor: smb.conf

```bash
sudo nano /etc/samba/smb.conf
```

Adicione as seguintes linhas ao final do arquivo:

```
[shared]
path=/mnt/sda1/shared
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

Pressione **Ctrl**+**X**, depois **Y** e, por fim, **Enter** para salvar o arquivo editado no nano. Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network2.gif" alt="pir" width={800} height="auto" /></div>

Reinicie o Samba para aplicar as alterações de configuração:

```bash
sudo systemctl restart smbd
```

Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network3.gif" alt="pir" width={800} height="auto" /></div>

### Etapa 6: Conceder acesso à unidade

Por fim, você precisa conceder acesso ao compartilhamento Samba para que somente usuários autenticados possam acessar os arquivos pela rede. Execute o seguinte comando para criar um usuário para gerenciar o compartilhamento Samba, nomeando o nome de usuário como pinas neste exemplo:

```bash
sudo adduser <username>
```

Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive1.gif" alt="pir" width={800} height="auto" /></div>

Em seguida, adicione uma senha para esse usuário usando o seguinte comando:

```bash
sudo smbpasswd -a <username>
```

Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive2.gif" alt="pir" width={800} height="auto" /></div>

### Etapa 7: Acessar e usar o NAS

#### A partir do Windows

1. Abra o Explorador de Arquivos e selecione "Map network drive" no menu Computador.
2. Escolha uma letra de unidade e insira o caminho da pasta, usando um formato de nome de domínio para acessar o dispositivo facilmente mesmo se o endereço IP mudar (neste tutorial, o caminho é \\nas\pinas).
3. Digite o nome de usuário e a senha de login. Aqui está um exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS.gif" alt="pir" width={800} height="auto" /></div>

4. Depois de fazer login, você poderá acessar os arquivos no servidor.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS finished.png" alt="pir" width={800} height="auto" /></div>

### Próxima Etapa

Se você quiser deixar seu disco rígido e Raspberry Pi com uma aparência mais organizada e esteticamente agradável, pode usar uma impressora 3D para criar suportes e gabinetes para fixar o Raspberry Pi e o disco rígido externo e, em seguida, montá-los juntos.

## <span id="jump3"> Problemas Comuns e Soluções ao Usar o Raspberry Pi como um NAS </span>

Aqui estão alguns problemas comuns que você pode encontrar ao usar um Raspberry Pi como NAS e como solucioná-los:

### Pergunta 1: Como melhorar o desempenho do NAS com Raspberry Pi?

- Use um SSD em vez de um HDD para melhorar as velocidades de leitura de dados.
- Certifique-se de que o Raspberry Pi esteja conectado por uma rede cabeada para um desempenho mais estável.
- Otimize o arquivo de configuração do Samba ajustando as configurações de cache e o número máximo de conexões.

### Pergunta 2: Como proteger o NAS com Raspberry Pi?

- Atualize regularmente o sistema e o software para corrigir vulnerabilidades de segurança.
- Use senhas fortes e limite o acesso por SSH.
- Configure um firewall e use uma VPN para acesso remoto.

### Pergunta 3: Como automatizar backups para o NAS com Raspberry Pi?

- Use a ferramenta rsync para configurar tarefas de backup periódicas:

```bash
rsync -av --delete /source_directory /mnt/external_hdd/backup_directory
```

- Configure tarefas cron para backups automáticos.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
