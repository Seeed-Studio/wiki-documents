---
description: Jetson Mate
title: Jetson Mate
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson-Mate
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Jetson Mate 入門ガイド

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png" /></div>

**Jetson Mate**は、最大**4つのNvidia Jetson Nano/NX SoM**を搭載できるキャリアボードです。オンボードには**5ポートギガビットスイッチがあり、4つのSoMが相互に通信可能**です。3つの周辺SoMは個別に電源をオンまたはオフにすることができます。Jetson Nano SoMには65W 2ポートPD充電器、Jetson NX SoMには90W 2ポートPD充電器、そして1本のイーサネットケーブルを使用することで、開発者は簡単に独自のJetsonクラスターを構築できます。

## 特徴

- 簡単に構築および設定可能
- 強力かつコンパクト
- 専用ケースとファン付き

## 仕様

|仕様|--|
|--|--|
|電源|65W PD|
|寸法|110mm x 110mm|
|オンボードスイッチ|Microchip KSZ9896CTXC|

## ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate.png" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate-2.png" /></div>

## 入門ガイド

!!!注意
        このガイドでは、ホストPCにUbuntu 18.04 LTSがインストールされています。現在、NVIDIA SDK Managerを使用したOSのフラッシュはUbuntu 20.04ではサポートされていません。そのため、Ubuntu 18.04または16.04を使用してください。また、仮想マシン上でUbuntuを実行している場合は、[VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)を使用することをお勧めします。これはテスト済みです。Oracle VM VirtualBoxはOSのフラッシュに失敗するため、使用を推奨しません。

### 必要なハードウェア

- Jetson Mate
- Jetson Nano/ NX モジュール
- Micro - USB ケーブル
- 65Wまたは90Wの充電アダプターとUSB Type-Cケーブル
- Ubuntu 18.04または16.04がインストールされたホストPC

### ハードウェアセットアップ

- **ステップ1.** **Jetson Nano/ NX**モジュールを**マスターノード**に挿入します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-3.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ2.** Jetson MateからPCに**micro-USB**ケーブルを接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/micro-usb.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ3.** **リカバリモード**のために**BOOTとGNDピン**の間にジャンパーを接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/jumper.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ4.** Jetson Mateを電源アダプターに接続し、**WAKE**ボタンを押してJetson Mateをオンにします

- **ステップ5.** Jetson Mateがオンになった後、ジャンパーを取り外します

- **ステップ6.** ホストPCでターミナルウィンドウを開き、以下を実行します

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/1.png" alt="pir" width={800} height="auto" /></p>

出力に**0955:7f21 NVidia Corp.**が含まれている場合、Jetson Mateはリカバリモードに入っています

### ソフトウェアセットアップ

> 開発キットのmicro-SDカードを使用している場合は、[Jetson Nanoのこのガイド](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit)、[Jetson Nano 2GBのこのガイド](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit)、および[Jetson Xavier NXのこのガイド](https://developer.nvidia.com/embedded/learn/get-started-jetson-xavier-nx-devkit)に従ってシステムをインストールおよび設定することをお勧めします。

eMMCストレージを搭載したモジュールを使用している場合は、NVIDIAの公式SDK Managerを使用し、以下の手順に従ってください。

- **ステップ1.** [こちらをクリック](https://developer.nvidia.com/nvidia-sdk-manager)して**NVIDIA SDK Manager**をダウンロードします

**注意:** ホストPCのOSに応じて適切なバージョンを選択してください。このガイドではホストPCがUbuntu 18.04を使用しているため、Ubuntuを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/SDK-Manager.png" alt="pir" width={800} height="auto" /></p>

- **ステップ2.** **NVIDIA Developer Program Membership**にアカウントを作成するかログインします

- **ステップ3.** NVIDIA SDK Managerをインストールします

**注意:** ダウンロードしたファイルをダブルクリックしてインストールします

- **ステップ4.** NVIDIA SDK Managerを開くと、接続されたJetson Nano/ NXモジュールが自動的に検出されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ5.** 接続されたモジュールを選択します

- **ステップ6.** 設定ウィンドウで、**ホストマシン**を**チェック解除**します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/3.png" alt="pir" width={1000} height="auto" /></p>

**注意:** ここでは**DeepStream SDK**もチェック解除されています。ただし、これをインストールする予定がある場合はチェックすることができます。ただし、eMMCモジュールの**16GB**ではこのSDKをインストールするには十分ではありません。

- **ステップ7.** **CONTINUE TO STEP 02**をクリックします

- **ステップ8.** 必要なコンポーネントを確認し、**ライセンス契約の条件に同意します**をチェックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/5.png" alt="pir" width={1000} height="auto" /></p>

**注意:** **Jetson OS**のみをインストールしたい場合は、**Jetson SDK Components**をチェック解除することができます

- **ステップ9.** **CONTINUE TO STEP 03**をクリックします

- **ステップ10.** 以下のエラーメッセージが表示されたら、**Create**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/6.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ11.** ダウンロードとフラッシュを開始します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/7.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ12.** OSのダウンロードとフラッシュが完了すると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/8.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 13.** Jetson Mate を電源オフにします。

- **ステップ 14.** ホスト PC でターミナルウィンドウを開き、シリアルターミナルアプリケーションである **minicom** をインストールします。

```sh
sudo apt update
sudo apt install minicom
```

**注意:** このアプリケーションを使用して、ホスト PC と Jetson Mate の間でシリアル接続を確立します。

- **ステップ 15.** Jetson Mate を PC に micro-USB ケーブルで接続した状態で電源をオンにし、以下のコマンドを入力して接続されたシリアルポートを確認します。

```sh
dmesg | grep tty
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/grep_tty.png" alt="pir" width={1000} height="auto" /></p>

**注意:** ここでポート名は **ttyACM0** です。

- **ステップ 16.** minicom を使用して Jetson Mate に接続します。

```sh
sudo minicom -b 9600 -D /dev/ttyACM0
```

**注意:** -b はボーレート、-D はデバイスを指定します。

- **ステップ 17.** Jetson OS の **初期設定** を進めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/initial-config-minicom.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 18.** 設定が完了したら、SDK Manager ウィンドウに戻り、Jetson Mate 用に設定した **ユーザー名とパスワード** を入力して **Install** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/9.png" alt="pir" width={1000} height="auto" /></p>

**注意:** 初期設定で設定したユーザー名とパスワードを使用してください。

これで SDK コンポーネントのダウンロードとインストールが開始されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/10.png" alt="pir" width={1000} height="auto" /></p>

SDK Manager が必要なコンポーネントを正常にダウンロードおよびインストールすると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/11.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 19.** 残りの Jetson Nano/ NX モジュールをすべてフラッシュします。

**注意:** **すべてのモジュールはマスターノードにインストールされている場合のみフラッシュ可能です**。したがって、モジュールを一つずつマスターノードでフラッシュして設定する必要があります。

### クラスターを起動する

- **ステップ 1.** ルーターから Jetson Mate にイーサネットケーブルを接続します。

**注意:** PC と Jetson Mate が同じルーターに接続されていることを確認してください。

- **ステップ 2.** micro-USB をホスト PC に接続した状態で、前述の方法で **minicom** を使用して Jetson Mate にアクセスし、以下のコマンドを入力して Jetson Mate に接続されているモジュールの IP アドレスを取得します。

```sh
ifconfig
```

- **ステップ 3.** ホスト PC のターミナルで以下を入力して SSH 接続を確立します。

```sh
ssh user@192.xxx.xx.xx
```

**注意:** **user** を Jetson Nano/ NX のユーザー名に置き換え、**192.xxx.xx.xx** を Jetson Nano/ NX の IP アドレスに置き換えてください。

**注意:** IP アドレスの代わりにホスト名を使用してノードに接続することもできます。

## Jetson Mate を使用して Kubernetes クラスターを構築する

Kubernetes は、クラウドネイティブを前提として設計されたエンタープライズグレードのコンテナオーケストレーションシステムです。クラウドコンテナプラットフォームのデファクトスタンダードとして成長し、コンテナネイティブ仮想化やサーバーレスコンピューティングなどの新技術を取り入れながら拡大を続けています。

Kubernetes は、パブリッククラウドおよびプライベートクラウド環境で、エッジのマイクロスケールから大規模スケールまで、コンテナやその他を管理します。「自宅でのプライベートクラウド」プロジェクトに最適な選択肢であり、堅牢なコンテナオーケストレーションを提供するとともに、需要が高く、クラウドに統合された技術について学ぶ機会を提供します。その名前は「クラウドコンピューティング」とほぼ同義語と言えるほどです。

このチュートリアルでは、1つのマスターと3つのワーカーを使用します。以下の手順では、***master***、***worker***、または ***worker and master*** のいずれでソフトウェアが実行されるかを太字で示します。

### Docker の設定

***worker and master***、Docker ランタイムをデフォルトで "nvidia" を使用するように設定する必要があります。
ファイル `/etc/docker/daemon.json` を修正します。

```json
{
 "default-runtime" : "nvidia",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

Docker デーモンを再起動します。

```shell
sudo systemctl daemon-reload && sudo systemctl restart docker
```

Docker のデフォルトランタイムが NVIDIA であることを確認します。

```shell
sudo docker info | grep -i runtime
```

以下はサンプル出力です。

```
Runtimes: nvidia runc
Default Runtime: nvidia
```

### Kubernetes のインストール

***worker and master***、kubelet、kubeadm、kubectl をインストールします。

```shell
sudo apt-get update && sudo apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

# Kubernetes リポジトリを追加
cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
sudo apt update && sudo apt install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

スワップを無効化します。再起動するたびにこれをオフにする必要があります。

```
sudo swapoff -a
```

以下の手順で使用するために deviceQuery をコンパイルします。

```shell
cd /usr/local/cuda/samples/1_Utilities/deviceQuery && sudo make 
cd 
```

### Kubernetes の設定

***master***、クラスターを初期化します。

```shell
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
```

出力には、クラスターにポッドネットワークをデプロイするためのコマンドや、クラスターに参加するためのコマンドが表示されます。すべてが成功すると、出力の最後に以下のようなメッセージが表示されます。

```
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \
    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b
```

出力指示に従い、以下のコマンドを実行してください：

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

コントロールプレーンノードにポッドネットワークアドオンをインストールします。ポッドネットワークアドオンとして Calico を使用します：

```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

> 中国国内にいる場合は、以下を使用してください：
kubectl apply -f `<https://gitee.com/wj204811/wj204811/raw/master/kube-flannel.yml>`

すべてのポッドが起動していることを確認してください：

```shell
kubectl get pods --all-namespaces
```

以下はサンプル出力です：

```
NAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE
kube-system   kube-flannel-ds-arm64-gz28t                1/1     Running   0          2m8s
kube-system   coredns-5c98db65d4-d4kgh                   1/1     Running   0          9m8s
kube-system   coredns-5c98db65d4-h6x8m                   1/1     Running   0          9m8s
kube-system   etcd-#yourhost                             1/1     Running   0          8m25s
kube-system   kube-apiserver-#yourhost                   1/1     Running   0          8m7s
kube-system   kube-controller-manager-#yourhost          1/1     Running   0          8m3s
kube-system   kube-proxy-6sh42                           1/1     Running   0          9m7s
kube-system   kube-scheduler-#yourhost                   1/1     Running   0          8m26s
```

***ワーカー***、計算ノードをクラスターに参加させます。計算ノードを追加するには、コントロールプレーンノードを初期化するために実行した `kubeadm init` コマンドの最後に提供される `kubeadm join` コマンドを実行するだけです。他の Jetson Nano をクラスターに参加させるには、ホストにログインして以下のコマンドを実行してください：

```shell
クラスター - トークンと ca-cert-hash は異なります
$ sudo kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \
    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b
```

***マスター***、各ノードで参加プロセスを完了したら、以下のコマンドの出力で新しいノードを確認できるはずです：

```shell
kubectl get nodes
```

以下はサンプル出力です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture1.png" /></div>

ワーカー用にノードをタグ付けします。

```
kubectl label node se2 node-role.kubernetes.io/worker=worker
kubectl label node se3 node-role.kubernetes.io/worker=worker
kubectl label node se4 node-role.kubernetes.io/worker=worker
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture2.png" /></div>

## EGX 2.0 インストールの成功を検証する

***ワーカーとマスター***、EGX スタックが期待通りに動作することを検証するには、以下の手順に従ってポッド YAML ファイルを作成します。`kubectl get pods` コマンドがポッドのステータスを `Completed` と表示した場合、インストールは成功しています。また、`cuda-samples.yaml` ファイルの実行結果が `Result=PASS` と表示されることを確認してください。

ポッド YAML ファイルを作成し、以下の内容を追加して `samples.yaml` として保存します：

```
nano cuda-samples.yaml
```

以下の内容を追加し、`cuda-samples.yaml` として保存します：

```shell
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-l4t-base
spec:
  restartPolicy: OnFailure
  containers:
  - name: nvidia-l4t-base
    image: "nvcr.io/nvidia/l4t-base:r32.4.2"
    args:
       - /usr/local/cuda/samples/1_Utilities/deviceQuery/deviceQuery
```

サンプル GPU ポッドを作成します：

```shell
sudo kubectl apply -f cuda-samples.yaml
```

サンプルポッドが作成されたか確認します：

```
kubectl get pods
```

CUDA ライブラリをサポートするサンプルポッドのログを検証します：

```shell
kubectl logs nvidia-l4t-base
```

以下はサンプル出力です：

```
/usr/local/cuda/samples/1_Utilities/deviceQuery/deviceQuery Starting...
 CUDA Device Query (Runtime API) version (CUDART static linking)
Detected 1 CUDA Capable device(s)
 
Device 0: "Xavier"
  CUDA Driver Version / Runtime Version          10.2 / 10.2
  CUDA Capability Major/Minor version number:    7.2
  Total amount of global memory:                 7764 MBytes (8140709888 bytes)
  ( 6) Multiprocessors, ( 64) CUDA Cores/MP:     384 CUDA Cores
  GPU Max Clock rate:                            1109 MHz (1.11 GHz)
  Memory Clock rate:                             1109 Mhz
  Memory Bus Width:                              256-bit
  L2 Cache Size:                                 524288 bytes
  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)
  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers
  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers
  Total amount of constant memory:               65536 bytes
  Total amount of shared memory per block:       49152 bytes
  Total number of registers available per block: 65536
  Warp size:                                     32
  Maximum number of threads per multiprocessor:  2048
  Maximum number of threads per block:           1024
  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
  Maximum memory pitch:                          2147483647 bytes
  Texture alignment:                             512 bytes
  Concurrent copy and kernel execution:          Yes with 1 copy engine(s)
  Run time limit on kernels:                     No
  Integrated GPU sharing Host Memory:            Yes
  Support host page-locked memory mapping:       Yes
  Alignment requirement for Surfaces:            Yes
  Device has ECC support:                        Disabled
  Device supports Unified Addressing (UVA):      Yes
  Device supports Compute Preemption:            Yes
  Supports Cooperative Kernel Launch:            Yes
  Supports MultiDevice Co-op Kernel Launch:      Yes
  Device PCI Domain ID / Bus ID / location ID:   0 / 0 / 0
  Compute Mode:
     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >
 
deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.2, CUDA Runtime Version = 10.2, NumDevs = 1
Result = PASS
```

## Kubernetes 上で Jupyter を設定する

***worker と master***、以下の内容を追加し、`jupyter.yaml` として保存してください：

`nano jupyter.yaml`

```shell
apiVersion: apps/v1 # バージョン 1.9.0 より前の場合は apps/v1beta2 を使用
kind: Deployment
metadata:
  name: cluster-deployment
spec:
  selector:
    matchLabels:
      app: cluster
  replicas: 3 # デプロイメントにテンプレートに一致する 3 つのポッドを実行するよう指示
  template:
    metadata:
      labels:
        app: cluster
    spec:
      containers:
      - name: nginx
        image: helmuthva/jetson-nano-jupyter:latest
        ports:
        - containerPort: 8888
```

Jupyter GPU ポッドを作成します：

```
kubectl apply -f jupyter.yml
```

Jupyter ポッドが作成され、実行中であるか確認します：

```shell
kubectl get pod
```

外部ロードバランサーを作成します：

```
kubectl expose deployment cluster-deployment --port=8888 --type=LoadBalancer 
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture3.png" /></div>

ここで、Jupyter クラスターがポート 31262 で外部アクセス可能であることが確認できます。そのため、`http://se1.local:31262` を使用して Jupyter にアクセスします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture4.png" /></div>

以下のコードを使用して利用可能な GPU の数を確認できます。今回は 3 つのワーカーしかないため、利用可能な GPU の数は 3 です。

```python
from tensorflow.python.client import device_lib

def get_available_gpus():
    local_device_protos = device_lib.list_local_devices()
    return [x.name for x in local_device_protos if x.device_type == 'GPU']

get_available_gpus()
```

これで準備完了です。お楽しみください！

## リソース

- **[PDF]** [Jetson Mate 回路図](https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-Schematics-V1.0.pdf)
- **[PDF]** [Jetson Mate PCB トップ](https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-PCB-TOP-V1.0.pdf)
- **[PDF]** [Jetson Mate PCB ボトム](https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-PCB-BOTTOM-V1.0.pdf)

<iframe frameBorder={0} height={385} scrolling="no" src="https://www.hackster.io/WhoseAI/set-up-a-jetson-nano-nx-cluster-in-one-systerm-ac4235/embed" width={350} />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>