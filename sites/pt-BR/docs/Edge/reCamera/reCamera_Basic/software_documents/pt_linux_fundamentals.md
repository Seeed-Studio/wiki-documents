---
description: Comandos básicos de Linux para reCamera
title: Fundamentos de Linux
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
createdAt: '2025-02-14'
updatedAt: '2025-04-08'
url: https://wiki.seeedstudio.com/pt-br/recamera_linux_fundamentals/
---
# Fundamentos de Linux

## **1. Introdução ao sistema Linux**

Linux é um sistema operacional de código aberto, semelhante ao Unix, que ganhou ampla adoção devido à sua confiabilidade, flexibilidade e desempenho. É amplamente utilizado em servidores, desktops, dispositivos móveis e sistemas embarcados.

### Principais recursos do Linux:

- **Gratuito e de código aberto**: O código-fonte do Linux está disponível gratuitamente, e os usuários podem modificá-lo conforme suas necessidades.
- **Multitarefa**: O Linux suporta a execução de vários aplicativos simultaneamente.
- **Segurança**: É conhecido por seus recursos de segurança robustos, como permissões de arquivos, gerenciamento de usuários e SELinux.
- **Portabilidade**: O Linux pode ser executado em uma variedade de arquiteturas de hardware.

## **2. Introdução ao sistema de arquivos Linux**

O Linux organiza seus arquivos e diretórios em uma estrutura hierárquica. No topo dessa estrutura está o diretório raiz `/`, e a partir dele, outros diretórios se ramificam.

### Diretórios principais no sistema de arquivos Linux:

- `/`: Diretório raiz. É o ponto de partida do sistema de arquivos Linux.
- `/home`: Diretórios pessoais dos usuários. Cada usuário tem um subdiretório aqui (por exemplo, `/home/user`).
- `/etc`: Arquivos de configuração do sistema.
- `/bin`: Arquivos binários e comandos essenciais.
- `/var`: Dados variáveis, como logs e bancos de dados.
- `/tmp`: Arquivos temporários.
- `/dev`: Arquivos de dispositivo que representam componentes de hardware.

## **3. Uso do terminal e da linha de comando**

O terminal é uma ferramenta poderosa para interagir com o sistema operacional Linux. Ele permite que os usuários emitam comandos para executar várias tarefas.

**Abrindo o terminal:**

- Endereço de acesso：http://192.168.42.1/#/terminal（Nome de usuário e senha padrão：`recamera`）
- Faça login remotamente via ssh usando a [ferramenta](https://mobaxterm.mobatek.net/).
Você pode acessar a reCamera remotamente usando o seguinte comando:
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

Em seguida, pressione ```Enter```, e você deverá conseguir controlar a reCamera remotamente.

### Estrutura básica da linha de comando:

Os comandos no Linux seguem uma estrutura geral:

```bash
command [options] [arguments]
```

Por exemplo, `ls -l /home/recamera` listará todos os arquivos no diretório `/home/recamera` em formato longo.

## **4.Usuário recamera && root**

Na primeira vez que você usa a recamera, você redefine a senha padrão da recamera, que também é a senha usada para fazer login no terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

Quando a senha é digitada no terminal, o conteúdo não será exibido. Pressione `Enter` para executar após inserir a senha.

:::

O problema de permissões insuficientes ocorre em algumas operações especiais. Para executar o comando, você precisa adicionar sudo antes de executar o comando. Ou mudar para o usuário `root` para executar todos os comandos no sistema.

O usuário root não tem uma senha definida por padrão; use este comando para definir uma senha.

- `sudo passwd root`:Alterar a senha de um usuário
- `su root`:Mudar para o usuário root.

:::note

O usuário root pode modificar arquivos relacionados ao sistema, o que pode levar a falhas no sistema. Por favor, opere com cautela.

:::

## **5. Comandos básicos de Linux**

Aqui estão alguns comandos básicos e seus usos:

### Gerenciamento de arquivos e diretórios:

- `pwd`: Exibe o diretório de trabalho atual.
- `ls`: Lista os arquivos e diretórios no diretório atual.
- `cd [directory]`: Altera o diretório atual.
- `mkdir [directory]`: Cria um novo diretório.
- `rm [file]`: Remove um arquivo.
- `rmdir [directory]`: Remove um diretório vazio.

### Permissões e propriedade de arquivos:

- `chmod [permissions] [file]`: Altera as permissões de um arquivo.
- `chown [owner] [file]`: Altera o proprietário de um arquivo.

### Operações com arquivos:

- `cp [source] [destination]`: Copia arquivos ou diretórios.
- `mv [source] [destination]`: Move ou renomeia arquivos ou diretórios.
- `cat [file]`: Exibe o conteúdo de um arquivo.
- `nano [file]`: Abre um arquivo em um editor de texto (Nano).

### Informações do sistema:

- `top`: Exibe em tempo real os processos do sistema e o uso de recursos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: Exibe o uso do espaço em disco.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: Mostra o uso de memória.
- `uname -r`: Exibe a versão do kernel.

## 6.Transferência de arquivos

O Linux oferece vários métodos para transferir arquivos entre sistemas, seja em uma rede local ou pela internet. Abaixo estão as ferramentas e protocolos comuns usados para transferência de arquivos no Linux.

### **Usando SCP (Secure Copy Protocol)**

SCP permite copiar arquivos com segurança entre uma máquina local e um host remoto ou entre dois hosts remotos.

#### Comandos básicos do SCP:

- Copiar um arquivo do local para o remoto:

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- Copiar um arquivo do remoto para o local:

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- Copiar um diretório (use a opção `-r` para cópia recursiva):

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### Exemplo:

Para copiar um arquivo da sua máquina local para um servidor remoto:

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **Usando SFTP (Secure File Transfer Protocol)**

SFTP é outro método seguro de transferência de arquivos e opera sobre SSH. Ele permite gerenciar arquivos de forma interativa em um servidor remoto.

#### Comandos básicos do SFTP:

1. Iniciar uma sessão SFTP:

   ```bash
   sftp username@remote_host
   ```

2. Depois de conectado, use os seguintes comandos:

   - `ls`: Lista arquivos no diretório remoto.
   - `cd [directory]`: Altera o diretório remoto.
   - `get [file]`: Baixa um arquivo do servidor remoto para a máquina local.
   - `put [file]`: Envia um arquivo da máquina local para o servidor remoto.
   - `exit`: Encerra a sessão SFTP.

#### Exemplo:

Para enviar um arquivo para um servidor remoto:

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7.Comando de hardware**

Você pode consultar esta [documentação](https://wiki.seeedstudio.com/pt-br/recamera_basicardware_and_specs/) para controlar o hardware no dispositivo recamera.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>