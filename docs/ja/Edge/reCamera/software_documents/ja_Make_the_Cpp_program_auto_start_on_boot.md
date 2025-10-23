---
description: このwikiでは、プログラムを起動時に自動的に起動するように設定する方法を説明します。
title: C++プログラムを起動時に自動開始させる
keywords:
  - reCamera
  - C++
  - Auto-start
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/make_the_cpp_program_auto_start_on_boot
last_update:
  date: 07/26/2025
  author: Liangyuxin

no_comments: false 

---

# C++プログラムを起動時に自動開始させる

このドキュメントでは、プログラムを起動時に自動的に起動するように設定する方法を説明します。

## 方法1：起動スクリプトを作成する

ReCameraは軽量な**SysVinitシステム**を使用し、**/etc/inittab**を介して初期化を実行します。recameraの電源が入ると、**inittab**の内容を読み取り、以下のコードで**/etc/init.d/rcS**を開始します：

```
# now run any rc scripts
::sysinit:/etc/init.d/rcS
```

**rcS** ファイルは、プログラムが "S??" で始まるスクリプトを順次開始することを定義しています：

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

**/etc/init.d** ディレクトリに、プログラムの自動起動スクリプトを追加できます。（「S」で始まり、その後に数字が続くスクリプト。数字は起動実行順序を決定します。）

名前の例：

- **S10network**：早期に開始（数字が小さい = 実行が早い）
- **S99myprogram**：遅く開始（数字が大きい = 実行が遅い）

自動起動スクリプトの内容には以下を含める必要があります：

- 変数定義セクション
  - サービス動作に必要な設定パラメータを定義します。
  - 主要な変数：
    - **DAEMON**：実行ファイルへのパス
    - **PIDFILE**：プロセスID記録ファイルの場所
    - **LD_LIBRARY_PATH**：カスタムライブラリパス
- 機能関数セクション
  - 4つの主要な関数を含みます：
    - **start()**：サービスを開始
    - **stop()**：サービスを停止
    - **restart()**：サービスを再起動
    - **status()**：サービス状態を確認
- メイン制御ロジック
  - 入力引数に基づいて対応する関数を呼び出します。

既存のスクリプトを参考にして独自のスクリプトを作成できます。以下は参考用の **sccma-node** の例です：

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

次に、スクリプトに実行権限を付与します：

```
sudo chmod +x {your script}
ls -l
```

プログラムの実行可能ファイルを指定されたパスに配置します。通常は **/usr/local/bin** です：

```
sudo scp {your program} /usr/local/bin
sudo chmod +x {your program}
ls -l
```

スクリプトとプログラムが正常に起動できるかテストします：

```
sudo /etc/init.d/{your script} start
cd /usr/local/bin
sudo {your program}
```

成功した場合は、reCamera を再起動してください。

## 方法 2: opkg を使用して C++ プロジェクトをインストールする

C++ プロジェクト内で自動起動スクリプトを事前設定し、それを reCamera にインストールすることもできます。

**Control ディレクトリの追加**

プロジェクトには、以下の **control** スクリプトを含める必要があります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/1.png" /></div>

- **preinst** (インストール前スクリプト)
  - パッケージがインストールされる前に実行されます。このスクリプトの機能は：
    - システムがインストール要件を満たしているかチェック
    - 置き換えられる旧バージョンのサービスを停止
    - 既存の設定ファイルをバックアップ
    - 依存関係が満たされているか確認
    - 必要なシステムユーザー/グループを作成
    - 実行タイミング: dpkg -i または apt install 中、ファイルが配置される前に実行されます。

例：

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

- **postinst** (インストール後スクリプト)
  - パッケージが完全にインストールされた後に実行されます。このスクリプトの機能は以下の通りです：
    - 新しくインストールされたサービスの開始
    - システムキャッシュやデータベースの更新（例：ldconfig、update-rc.d）
    - 初期設定手順の実行
    - ファイルの権限/所有権の設定
    - alternatives システムの更新（例：update-alternatives）
    - インストール後の指示の表示
    - 実行タイミング：dpkg -i または apt install 中に、すべてのファイルが配置された後に実行されます。

例：

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor start   
fi


exit 0
```

- **prerm** (削除前スクリプト)
  - パッケージがアンインストールされる前に実行されます。このスクリプトの機能は：
    - 関連サービスを適切に停止する
    - プロセスがソフトウェアを使用しているかチェックする（強制削除を防ぐ）
    - 削除前にユーザーデータをバックアップする
    - 一時ファイルやランタイムリソースをクリーンアップする
    - 実行タイミング：dpkg -r や apt remove の実行中、ファイルが削除される前に実行されます。

例：

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

**rootfsディレクトリを追加する**

次に、自動起動スクリプトを対応するパスに配置します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/2.png" /></div>

プロジェクト全体をLinuxクロスコンパイル環境に配置してコンパイルとパッケージ化を行います。パッケージ化前に、ファイルがLinux互換のLF改行形式になっているかを必ず確認してください。CRLF形式（Windows形式）が見つかった場合は、まず変換してください。

```
dos2unix {your files}
```

その後、

```
cd {your project}
cmake -B build -DCMAKE_BUILD_TYPE=Release .
cmake --build build
cd build && cpack
scp {your project.deb} recamera@192.168.42.1:/tmp/
```

recameraターミナルで、opkgを使用してインストールします：

```
sudo opkg install /tmp/{your project.deb}
```

プロジェクトが以前にインストールされていた場合は、まずアンインストールしてください。

```
sudo opkg remove {your program}

sudo opkg install /tmp/{your project.deb}
```

詳細については、[GitHub リポジトリ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)をご参照ください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
