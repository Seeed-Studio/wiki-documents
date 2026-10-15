---
description: Este wiki demonstra como configurar um programa para iniciar automaticamente na inicialização.
title: Fazer o programa C++ iniciar automaticamente na inicialização.
keywords:
  - reCamera
  - C++
  - Inicialização automática
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_the_cpp_program_auto_start_on_boot
last_update:
  date: 07/26/2025
  author: Liangyuxin
no_comments: false
createdAt: '2025-07-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/make_the_cpp_program_auto_start_on_boot/
---

# Fazer o programa C++ iniciar automaticamente na inicialização

Este documento demonstra como configurar um programa para iniciar automaticamente na inicialização.

## Método 1: Escrever um script de inicialização

A reCamera usa um **sistema SysVinit** leve e realiza a inicialização por meio de **/etc/inittab**. Quando a reCamera é ligada, ela lê o conteúdo de **inittab**, que inicia o **/etc/init.d/rcS** com o seguinte código:

```
# now run any rc scripts
::sysinit:/etc/init.d/rcS
```

O arquivo **rcS** define que o programa iniciará sequencialmente scripts que começam com "S??":

```
for i in /etc/init.d/S??* ;do

     # Ignore dangling symlinks (if any).
     [ ! -f "$i" ] && continue

     case "$i" in
 *.sh)
     # Source shell script for speed.
     (
  trap - INT QUIT TSTP
  set start
  . $i
     )
     ;;
 *)
     # No sh extension, so fork subprocess.
     $i start
     ;;
    esac
done
```

No diretório **/etc/init.d**, você pode adicionar o script de inicialização automática do seu programa. (Scripts prefixados com "S" seguidos por um número; o número determina sua ordem de execução na inicialização.)

Exemplo de nome:

- **S10network**: Inicia cedo (número menor = execução mais cedo)
- **S99myprogram**: Inicia tarde (número maior = execução mais tarde)

O conteúdo do script de inicialização automática deve incluir:

- Seção de Definição de Variáveis
  - Define parâmetros de configuração necessários para a operação do serviço.
  - Variáveis principais:
    - **DAEMON**: Caminho para o arquivo executável
    - **PIDFILE**: Local do arquivo de registro do ID de processo
    - **LD_LIBRARY_PATH**: Caminho de biblioteca personalizado
- Seção de Funções Funcionais
  - Inclui quatro funções principais:
    - **start()**: Inicia o serviço
    - **stop()**: Para o serviço
    - **restart()**: Reinicia o serviço
    - **status()**: Verifica o status do serviço
- Lógica Principal de Controle
  - Chama a função correspondente com base nos argumentos de entrada.

Você pode consultar scripts existentes para escrever o seu próprio script. Aqui está um exemplo de **sccma-node** para referência:

```
#!/bin/sh

### BEGIN INIT INFO
# Provides:          sscma-node
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start SSCMA Node at boot time
# Description:       Start SSCMA Node service.
### END INIT INFO

DAEMON=/usr/local/bin/sscma-node
DAEMON_OPTS="--start"
NAME=sscma-node
DESC="SSCMA Node Service"
PIDFILE=/var/run/$NAME.pid
LOGFILE=/var/log/$NAME.log
USER=root

# Set up the library path if necessary
LD_LIBRARY_PATH=/mnt/system/lib:/mnt/system/usr/lib:/mnt/system/usr/lib/3rd:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH

start() {
    echo "Starting $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is already running (PID: $PID)."
            return 1
        else
            echo "Removing stale PID file."
            rm -f $PIDFILE
        fi
    fi
    start-stop-daemon -S -q -m -b -p $PIDFILE --exec $DAEMON -- $DAEMON_OPTS
    [ $? = 0 ] && echo "OK" || echo "FAIL"
}

stop() {
    echo "Stopping $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            start-stop-daemon -K -q -p $PIDFILE
            rm -f $PIDFILE
            [ $? = 0 ] && echo "OK" || echo "FAIL"
        else
            echo "Process not running but PID file exists, cleaning up."
            rm -f $PIDFILE
        fi
    else
        echo "$NAME is not running."
    fi
}

restart() {
    stop
    start
}

status() {
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is running (PID: $PID)."
        else
            echo "$NAME PID file exists but process is not running."
        fi
    else
        echo "$NAME is not running."
    fi
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac

exit 0
```

Em seguida, conceda permissões de execução ao seu script:

```
sudo chmod +x {your script}
ls -l
```

Coloque o arquivo executável do seu programa no caminho especificado, normalmente: **/usr/local/bin**:

```
sudo scp {your program} /usr/local/bin
sudo chmod +x {your program}
ls -l
```

Teste se o script e o programa conseguem iniciar normalmente:

```
sudo /etc/init.d/{your script} start
cd /usr/local/bin
sudo {your program}
```

Se for bem-sucedido, reinicie sua reCamera.

## Método 2: Instalar o projeto C++ usando opkg

Você também pode pré-configurar o script de inicialização automática dentro do seu projeto C++ e, em seguida, instalá-lo na reCamera.

**Adicionar o diretório Control**

No seu projeto, você precisa incluir os seguintes scripts de **control**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/1.png" /></div>

- **preinst** (Script de pré-instalação)
  - Ele é executado antes de o pacote ser instalado. A função deste script é:
    - Verificar se o sistema atende aos requisitos de instalação
    - Parar serviços de versões antigas que serão substituídos
    - Fazer backup de arquivos de configuração existentes
    - Verificar se as dependências estão satisfeitas
    - Criar usuários/grupos de sistema necessários
    - Momento de execução: é executado durante `dpkg -i` ou `apt install`, antes de os arquivos serem implantados.

Por exemplo:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

- **postinst** (Script de pós-instalação)
  - Ele é executado após o pacote estar totalmente instalado. A função deste script é:
    - Iniciar serviços recém-instalados
    - Atualizar caches ou bancos de dados do sistema (por exemplo, `ldconfig`, `update-rc.d`)
    - Executar etapas de configuração inicial
    - Definir permissões/propriedades de arquivos
    - Atualizar o sistema de alternativas (por exemplo, `update-alternatives`)
    - Exibir instruções pós-instalação
    - Momento de execução: é executado durante `dpkg -i` ou `apt install`, depois que todos os arquivos são implantados.

Por exemplo:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor start   
fi


exit 0
```

- **prerm** (Script de pré-remoção)
  - Ele é executado antes de o pacote ser desinstalado. A função deste script é:
    - Parar graciosamente os serviços relacionados
    - Verificar se processos estão usando o software (evitar remoção forçada)
    - Fazer backup de dados do usuário antes da exclusão
    - Limpar arquivos temporários ou recursos de tempo de execução
    - Momento de execução: é executado durante `dpkg -r` ou `apt remove`, antes de os arquivos serem excluídos.

Por exemplo:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

**Adicionar o diretório rootfs**

Em seguida, coloque o script de inicialização automática no caminho correspondente:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/2.png" /></div>

Coloque todo o projeto em um ambiente Linux de compilação cruzada para compilação e empacotamento. Antes de empacotar, você deve verificar se os arquivos estão no formato de final de linha LF, compatível com Linux. Se o formato CRLF (estilo Windows) for encontrado, converta-os primeiro.

```
dos2unix {your files}
```

Então,

```
cd {your project}
cmake -B build -DCMAKE_BUILD_TYPE=Release .
cmake --build build
cd build && cpack
scp {your project.deb} recamera@192.168.42.1:/tmp/
```

No terminal da reCamera, use opkg para instalar:

```
sudo opkg install /tmp/{your project.deb}
```

Se o seu projeto já tiver sido instalado anteriormente, desinstale-o primeiro.

```
sudo opkg remove {your program}

sudo opkg install /tmp/{your project.deb}
```

Para mais detalhes, consulte nosso [repositório GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
