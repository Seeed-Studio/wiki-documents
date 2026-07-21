---
description: Este guia explica como migrar dados de usuário de um NVIDIA Jetson Orin Nano Developer Kit executando JetPack 6 para um reComputer da Seeed Studio fazendo backup e restaurando apenas o diretório /home. Ele usa o reComputer J4012 e o reComputer Super J4012 como exemplos de destino e evita copiar arquivos de boot específicos da placa, device trees, módulos de kernel e configuração de BSP do developer kit.
title: Migrar dados de /home do Jetson Orin Nano Developer Kit para o reComputer
keywords:
  - reComputer
  - reComputer Super
  - Orin Nano Developer Kit
  - Jetson
  - JetPack 6
  - Backup
  - Restauração
  - Migração
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer
sku: E2025021104, E2025032601
last_update:
  date: 06/05/2026
  author: Dayu
createdAt: '2026-06-04'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/pt-br/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/
---

# Migrar dados de /home do Jetson Orin Nano Developer Kit para o reComputer

## Introdução

Ao migrar de um NVIDIA Jetson Orin Nano Developer Kit para um reComputer da Seeed Studio, você pode querer manter seu espaço de trabalho de usuário, arquivos de projeto, ambientes Conda, scripts e dados de aplicativos. No entanto, restaurar diretamente uma imagem completa do sistema do developer kit em um reComputer não é recomendado porque a carrier board, o device tree, o bootloader e a configuração de BSP são diferentes.

Este wiki mostra como usar o [projeto de migração de backup do reComputer Classic para Super](https://github.com/jjjadand/reComputer_classic-backup-to-super.git) para migrar apenas o `/home` do Jetson Orin Nano Developer Kit de origem para um reComputer de destino. Neste guia, o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) e o [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) são usados como exemplos de destino. Primeiro, grave o reComputer de destino com o BSP Seeed JetPack 6 correspondente e, em seguida, restaure o pacote `/home` sobre esse sistema limpo do reComputer.

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Obter J4012</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Obter Super J4012</font></span></strong>
  </a>
</div>

## Referência de hardware

Este guia usa o Jetson Orin Nano Developer Kit como dispositivo de origem e o reComputer J4012 / reComputer Super J4012 como exemplos de destino. A mesma ideia de migração apenas de `/home` também pode ser usada para outras combinações de Jetson para reComputer quando ambos os sistemas estiverem executando JetPack 6 / L4T R36 e o destino tiver sido gravado com o BSP Seeed correspondente.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>Dispositivo de origem</th>
      <th>Exemplo de destino 1</th>
      <th>Exemplo de destino 2</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp" />
        </div>
        <br />
        Jetson Orin Nano Developer Kit
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">reComputer J4012</a>
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">reComputer Super J4012</a>
      </td>
    </tr>
  </tbody>
</table>
</div>

## O que esta migração faz

O pacote de migração contém:

- `/home`
- metadados do sistema de origem
- metadados de usuários e grupos de `/home`
- lista de pacotes APT instalados manualmente, se disponível
- lista de pacotes instalados via dpkg, se disponível
- checksums dos pacotes

Ele intencionalmente não restaura:

- `/boot`
- `/boot/dtb`
- `/lib/modules`
- `/usr/lib/modules`
- `/etc/nv_boot_control.conf`
- `/etc/fstab`
- partições do bootloader
- arquivos de BSP específicos da placa

:::caution
Este fluxo de trabalho é para migração de dados de usuário, não clonagem completa do sistema. Aplicativos instalados em `/usr`, serviços configurados em `/etc`, imagens Docker em `/var/lib/docker` e alterações de BSP em nível de sistema não são migrados. Reinstale ou reconfigure esses componentes no reComputer de destino após a restauração de `/home`.
:::

## Pré-requisitos

- Jetson Orin Nano Developer Kit de origem executando JetPack 6 / L4T R36
- reComputer J4012 ou reComputer Super J4012 de destino executando o BSP Seeed JetPack 6 correspondente
- Acesso à rede ou armazenamento removível para transferir o pacote
- Espaço livre suficiente para um pacote compactado de backup de `/home`
- `git`, `tar`, `sha256sum`, `awk` e `find`

:::note
Antes de restaurar o pacote, grave o reComputer de destino com o firmware Seeed correto. Para o reComputer J4012, consulte [Gravar o sistema JetPack OS na placa carrier J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/). Para o reComputer Super J4012, consulte [Introdução ao reComputer Super](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_getting_started/#flash-jetpack-os).
:::

## Visão geral do fluxo de trabalho

1. Grave o reComputer de destino com o BSP Seeed JetPack 6 correspondente.
2. Clone o projeto de migração no Jetson Orin Nano Developer Kit de origem.
3. Crie um pacote de migração de `/home` no dispositivo de origem.
4. Copie o pacote para o reComputer de destino.
5. Inspecione ou faça um dry run da restauração no destino.
6. Restaure `/home` no destino e reinicie.
7. Reinstale quaisquer pacotes de sistema ou serviços necessários que estejam fora de `/home`.

## Backup no Jetson Orin Nano Developer Kit de origem

**Passo 1.** Instale `git` se ele ainda não estiver instalado.

```bash
sudo apt update
sudo apt install -y git
```

**Passo 2.** Clone o projeto de migração.

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

**Passo 3.** Crie um pacote de backup.

Substitua `/path/to/output` por um diretório que tenha espaço livre suficiente, como um drive USB, SSD externo ou uma pasta de rede compartilhada.

```bash
sudo ./backup_home_jp6.sh -o /path/to/output
```

Após a conclusão do backup, você verá dois arquivos:

```text
jetson-home-jp6-<hostname>-<timestamp>.tar.gz
jetson-home-jp6-<hostname>-<timestamp>.tar.gz.sha256
```

Por padrão, o script exclui diretórios de cache comuns para reduzir o tamanho do pacote:

```text
/home/*/.cache
/home/*/.ccache
/home/*/.nv/ComputeCache
/home/*/.npm/_cacache
/home/*/.local/share/Trash
/home/*/.local/share/gvfs-metadata
```

Se você precisar de uma cópia mais fiel dos dados de cache do usuário, adicione `--include-caches`:

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --include-caches
```

Se você precisar excluir dados adicionais, crie um arquivo de exclusão com padrões de exclusão do tar e passe-o para o script:

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --exclude-file /path/to/exclude-patterns.txt
```

:::info
O script de backup usa `--one-file-system` para `/home`. Se você montar armazenamento externo dentro de `/home`, faça backup desses dados montados separadamente.
:::

## Inspecionar o pacote de backup

Antes de restaurar, você pode inspecionar o pacote no dispositivo de origem ou no dispositivo de destino.

```bash
./inspect_home_package.sh /path/to/jetson-home-jp6-xxx.tar.gz
```

O comando de inspeção verifica o checksum do pacote e imprime o formato do pacote, metadados do sistema de origem, usuários de `/home` de origem e as primeiras entradas no arquivo `/home`.

## Copiar o pacote para o reComputer de destino

Copie o pacote `.tar.gz` para o reComputer de destino. Por exemplo, usando `scp`:

```bash
scp /path/to/jetson-home-jp6-xxx.tar.gz seeed@<recomputer-ip>:/home/seeed/
```

Você também pode copiar o pacote usando um drive USB ou SSD externo.

:::note
Mantenha o arquivo `.sha256` como um registro externo de checksum. O script de restauração também verifica os checksums incorporados dentro do pacote de migração.
:::

## Restaurar no reComputer de destino

**Passo 1.** Certifique-se de que o reComputer de destino já foi gravado com o BSP Seeed JetPack 6 correto e concluiu a configuração do primeiro boot.

**Passo 2.** Clone o projeto de migração no destino.

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

:::note
O nome do script de restauração contém `super` porque o projeto original foi criado para um cenário de migração para reComputer Super. Neste guia, ele ainda é usado apenas para verificar e sobrepor o pacote `/home` no reComputer de destino selecionado.
:::

**Passo 3.** Execute primeiro um dry run.

```bash
./restore_home_on_super_jp6.sh --dry-run /home/seeed/jetson-home-jp6-xxx.tar.gz
```

O dry run verifica o pacote e imprime um resumo sem restaurar arquivos.

**Passo 4.** Restaure o pacote.

```bash
sudo ./restore_home_on_super_jp6.sh --create-users /home/seeed/jetson-home-jp6-xxx.tar.gz
```

A opção `--create-users` cria usuários e grupos de origem ausentes por UID/GID antes de extrair o pacote. Isso ajuda a preservar a propriedade dos arquivos quando o usuário de origem ainda não existe no sistema reComputer de destino.

Por padrão, o script de restauração cria um arquivo de rollback do `/home` atual do destino antes de sobrepor o pacote de origem:

```text
/var/backups/jetson_home_migration/super-home-before-restore-<timestamp>.tar.gz
```

Se `/var/backups` não tiver espaço suficiente, use outro diretório de backup:

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --backup-dir /path/to/backup-dir /home/seeed/jetson-home-jp6-xxx.tar.gz
```

Use `--no-backup` somente se você já tiver um backup separado do `/home` do destino:

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --no-backup /home/seeed/jetson-home-jp6-xxx.tar.gz
```

:::caution
A operação de restauração sobrepõe arquivos em `/home`. Ela sobrescreve arquivos correspondentes a partir do pacote, mas não exclui arquivos que existam apenas no destino.
:::

**Passo 5.** Reinicie o destino.

```bash
sudo sync
sudo reboot
```

## Validar a migração

Após o reComputer de destino reiniciar, verifique os usuários e arquivos restaurados:

```bash
ls -lah /home
id <source-user>
du -sh /home/<source-user>
```

Em seguida, valide seus dados de aplicativos e ambientes de usuário:

```bash
ls -lah /home/<source-user>/projects
conda env list
python3 --version
```

Se você usar ferramentas Jetson como `jtop`, execute-as novamente no reComputer de destino:

```bash
jtop
```

:::info
Se um comando de aplicativo estiver faltando após a migração, provavelmente ele foi instalado fora de `/home`. Use os metadados no pacote para verificar a lista de pacotes de origem e, em seguida, reinstale o software necessário no sistema reComputer de destino.
:::

## Reverter o `/home` de destino

Se você precisar restaurar o estado do `/home` de destino que existia antes da migração, use o arquivo de reversão criado pelo script de restauração.

```bash
sudo tar --extract \
  --gzip \
  --file /var/backups/jetson_home_migration/super-home-before-restore-xxx.tar.gz \
  --directory / \
  --preserve-permissions \
  --same-owner \
  --acls \
  --xattrs \
  --xattrs-include='*' \
  --numeric-owner \
  --overwrite

sudo sync
sudo reboot
```

## Solução de problemas

### O script avisa que o sistema não parece ser JetPack 6

Os scripts verificam `/etc/nv_tegra_release` e esperam L4T R36. Confirme que tanto a origem quanto o destino estão executando JetPack 6.

```bash
cat /etc/nv_tegra_release
```

### A propriedade de arquivos aparece numérica após a restauração

Isso geralmente significa que o destino não possui os mesmos usuários de UID/GID que a origem. Execute o comando de restauração com `--create-users` ou crie manualmente usuários com UID/GID correspondentes antes de restaurar.

### O pacote é grande demais

Use as exclusões de cache padrão, remova arquivos desnecessários de `/home` ou forneça um arquivo de padrão de exclusão adicional com `--exclude-file`.

### Alguns arquivos foram alterados durante o backup

O script de backup aceita o status `1` do tar, que geralmente significa que arquivos ativos foram alterados durante o backup. Feche os aplicativos em execução e repita o backup se os arquivos alterados forem importantes.

### Imagens Docker ou serviços de sistema estão faltando

Esta migração restaura apenas `/home`. Imagens Docker, serviços de sistema, aplicativos instalados via APT e arquivos em `/etc`, `/usr` e `/var` precisam ser reinstalados ou reconfigurados no sistema reComputer de destino.

## Recursos

- [Projeto de migração de backup do reComputer Classic para Super](https://github.com/jjjadand/reComputer_classic-backup-to-super.git)
- [Criar backup e restauração no reComputer](https://wiki.seeedstudio.com/pt-br/create_backup_and_restore_on_recomputer/)
- [Como atualizar o Jetson Orin Nano Developer Kit para Super Kit](https://wiki.seeedstudio.com/pt-br/update_orin_nano_developer_kit_to_super_kit/)
- [Gravar o sistema JetPack na placa-carregadora J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/)
- [Primeiros passos com o reComputer Super](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_getting_started/)
- [Primeiros passos com reComputer J30/J40](https://wiki.seeedstudio.com/pt-br/reComputer_J30_40_with_Jetson_getting_start/)
- [Página única dos dispositivos Jetson da Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
