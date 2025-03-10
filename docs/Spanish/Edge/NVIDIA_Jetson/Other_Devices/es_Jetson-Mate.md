---
description: Jetson Mate
title: Jetson Mate
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson-Mate
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Primeros pasos con la Jetson Mate

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png" /></div>

La **Jetson Mate** es una Carrier Board que puede instalar hasta **4 SoM Nvidia Jetson Nano/NX**. Hay un **conmutador gigabit de 5 puertos integrado que permite que los 4 SoM se comuniquen entre sí**. Los 3 SoM periféricos se pueden encender o apagar por separado. Con un cargador PD de 2 puertos de 65 W para Jetson Nano SoM o un cargador PD de 2 puertos de 90 W para SoM Jetson NX y un cable Ethernet, los desarrolladores pueden construir fácilmente su propio Jetson Cluster.

## Características

- Fácil de construir y configurar
- Potente y compacta
- Viene con una carcasa dedicada y ventilador

## Especificaciones

|Spec|--|
|--|--|
|Alimentación|65w PD|
|Dimensiones|110mm x 110mm|
|Switch en la placa|Microchip KSZ9896CTXC|

## Descripción general del Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate.png" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate-2.png" /></div>

## Primeros pasos

¡¡¡Nota!!!
        En esta guía, Ubuntu 18.04 LTS está instalado en la PC host. Actualmente, Ubuntu 20.04 no admite el flasheo del sistema operativo mediante NVIDIA SDK Manager. Así que asegúrate de utilizar Ubuntu 18.04 o 16.04. Además, si estás ejecutando Ubuntu en una máquina virtual, se recomienda utilizar [VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluación.html) como lo hemos probado. No se recomienda utilizar Oracle VM VirtualBox, ya que no flashea el sistema operativo.

### Hardware Requerido

- Jetson Mate
- Módulo(s) Jetson Nano/ NX
- Cable Micro - USB
- Adaptador de alimentación USB Tipo-C de 65W o 90W
- PC host con Ubuntu 18.04 o 16.04 instalado

### Configuración de Hardware

- **Paso 1.** Inserta un módulo **Jetson Nano/ NX** en el **Master Node**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-3.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 2.** Conecta un cable **micro-USB** de la Jetson Mate a la PC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/micro-usb.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Conecta un puente entre los **pines BOOT y GND** para entrar al **modo de recuperación**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/jumper.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 4.** Conecta la Jetson Mate a un adaptador de corriente y enciende la Jetson Mate presionando el botón **WAKE**

- **Paso 5.** Retira el puente después de que la Jetson Mate se encienda

- **Paso 6.** Abre una ventana de terminal en la PC host y ejecuta lo siguiente

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/1.png" alt="pir" width={800} height="auto" /></p>

Si el resultado incluye **0955:7f21 NVidia Corp.**, la Jetson Mate ha entrado en modo de recuperación

### Configuración de Software

> Si estás utilizando módulos con tarjeta micro-SD del Developer Kit, te sugerimos instalar y configurar el sistema siguiendo [esta guía para Jetson Nano](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit), [esta guía para Jetson Nano 2GB](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit) y [esta guía para Jetson Xavier NX](https://developer.nvidia.com/embedded/learn/get-started-jetson-xavier-nx-devkit)

Si estás utilizando módulos con almacenamiento eMMC, utiliza el SDK Manager oficial de NVIDIA y sigue los pasos mostrados a continuación

- **Paso 1.** Descarga **NVIDIA SDK Manager** haciendo click [aquí](https://developer.nvidia.com/nvidia-sdk-manager)

**Nota:** Elige la versión relevante según el sistema operativo del PC host. Elegimos Ubuntu aquí porque la PC host utilizada en esta guía ejecuta Ubuntu 18.04.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/SDK-Manager.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2.** Crea una cuenta o inicia sesión en **Membresía del Programa para desarrolladores de NVIDIA**

- **Paso 3.** Instala NVIDIA SDK Manager

**Nota:** Haz doble click en el archivo descargado para instalarlo.

- **Paso 4.** Abre NVIDIA SDK Manager y notarás que detecta automáticamente el módulo Jetson Nano/NX conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/2.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Selecciona el módulo conectado

- **Paso 6.** En la ventana de configuración, **desmarca** Máquina host.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/3.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Aquí **DeepStream SDK** tampoco está marcado. Pero si planeas instalarlo también, puedes marcarlo. Sin embargo, los **16 GB** del módulo eMMC no serán suficientes para instalar este SDK.

- **Paso 7.** Haz click en **CONTINUAR CON EL PASO 02**

- **Paso 8.** Revisa los componentes requeridos y marca **Acepto los términos y condiciones de los acuerdos de licencia**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/5.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Si solo deseas instalar **Jetson OS**, puedes desmarcar **Jetson SDK Components**

- **Paso 9.** Haz click en **CONTINUAR CON EL PASO 03**

- **Paso 10.** Una vez que aparezca el siguiente mensaje de error, haz click en **Crear**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/6.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 11.** Comienza a descargar y flashear

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/7.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 12.** Una vez finalizada la descarga y flasheo del sistema operativo, verás el siguiente resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/8.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 13.** Apaga la Jetson Mate

- **Paso 14.** Abre una ventana de terminal en la PC host e instala **minicom**, que es una aplicación de terminal serie

```sh
sudo apt update
sudo apt install minicom
```

**Nota:** Usaremos esta aplicación para establecer una conexión en serie entre la PC host y la Jetson Mate

- **Paso 15.** Enciende la Jetson Mate mientras aún está conectado a la PC mediante un cable micro - USB, ingresa lo siguiente para identificar el puerto serie conectado

```sh
dmesg | grep tty
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/grep_tty.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Aquí el nombre del puerto es **ttyACM0**

- **Paso 16.** Conéctate a la Jetson Mate usando minicom

```sh
sudo minicom -b 9600 -D /dev/ttyACM0
```

**Nota:** -b es velocidad en baudios y -D es dispositivo

- **Paso 17.** Realiza la **configuración inicial** para Jetson OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/initial-config-minicom.png" alt="pir" width={800} height="auto" /></p>

- **Paso 18.** Una vez finalizada la configuración, regresa a la ventana de SDK Manager, ingresa el **nombre de usuario y contraseña** establecidos para Jetson Mate y haz click en **Instalar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/9.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Utiliza el nombre de usuario y la contraseña establecidos en la configuración inicial.

Ahora comenzará la descarga e instalación de los componentes del SDK.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/10.png" alt="pir" width={1000} height="auto" /></p>

Verás el siguiente resultado cuando el administrador de SDK haya descargado e instalado correctamente los componentes necesarios

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/11.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 19.** Actualiza todos los módulos Jetson Nano/NX restantes que tengas

**Nota:** **Todos los módulos solo se pueden actualizar cuando se instalan en el nodo maestro**. Por lo tanto, debes actualizar y configurar los módulos uno por uno en el nodo maestro.

### Ejecutar el Cluster

- **Paso 1.** Conecta un cable Ethernet desde el enrutador a la Jetson Mate

**Nota:** Asegúrate de que la PC y la Jetson Mate estén conectados al mismo enrutador

- **Paso 2.** Ingresa a la Jetson Mate usando **minicom** como se explicó anteriormente, mientras el micro-USB está conectado a la PC host y escribe lo siguiente para obtener las direcciones IP de los módulos conectados a la Jetson Mate

```sh
ifconfig
```

- **Paso 3.** Escribe lo siguiente en la terminal de la PC host para establecer una conexión SSH

```sh
ssh user@192.xxx.xx.xx
```

**Nota:** Reemplaza **usuario** con tu nombre de usuario de Jetson Nano/ NX y **192.xxx.xx.xx** con tu dirección IP de la Jetson Nano/ NX

**Nota:** También puedes conectarte a los nodos reemplazando la dirección IP por tu nombre de host.

## Crea un clúster de Kubernetes con Jetson Mate

Kubernetes es un sistema de orquestación de contenedores de nivel empresarial diseñado desde el principio para ser nativo en la nube. Ha crecido hasta convertirse en la plataforma de contenedores en la nube de facto y continúa expandiéndose a medida que adopta nuevas tecnologías, incluida la virtualización nativa de contenedores y la computación sin servidor.

Kubernetes gestiona contenedores y más, desde microescala en el borde hasta escala masiva, tanto en entornos de nube públicos como privados. Es una elección perfecta para un proyecto de "nube privada en casa", ya que proporciona tanto una sólida orquestación de contenedores como la oportunidad de aprender sobre una tecnología con tanta demanda y tan completamente integrada en la nube que su nombre es prácticamente sinónimo de "computación en la nube".

En este tutorial, utilizamos un maestro y tres trabajadores. En los siguientes pasos, indicaremos en negrita si el software se ejecuta en ***master*** o en ***worker***, o en ***worker y master***.

### Configuración de Docker

***trabajador y maestro***, necesitamos configurar el tiempo de ejecución de la ventana acoplable y usar "nvidia" de forma predeterminada.
modificar el archivo `/etc/docker/daemon.json`

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

Reiniciar el Docker daemon:

```shell
sudo systemctl daemon-reload && sudo systemctl restart docker
```

Valida el tiempo de ejecución predeterminado de Docker como NVIDIA:

```shell
sudo docker info | grep -i runtime
```

Aquí está el resultado de muestra:

```
Runtimes: nvidia runc
Default Runtime: nvidia
```

### Instalación de Kubernetes

***trabajador y maestro***, instala kubelet, kubeadm y kubectl:

```shell
sudo apt-get update && sudo apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

# Add the Kubernetes repo
cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
sudo apt update && sudo apt install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

Deshabilita el intercambio. Debes desactivarlo cada vez que reinicies.

```
sudo swapoff -a
```

Compila deviceQuery, que lo usaremos en los siguientes pasos.

```shell
cd /usr/local/cuda/samples/1_Utilities/deviceQuery && sudo make 
cd 
```

### Configuración de Kubernetes

***master***, inicializa el cluster:

```shell
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
```

El resultado muestra los comandos que debes ejecutar para implementar una red de pods en el cluster, así como comandos para unirse al cluster. Si todo es exitoso, deberías ver algo similar a esto al final:

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

Usando las instrucciones de salida, ejecuta los siguientes comandos:

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

Instala un complemento de red de pod en el nodo del plano de control. Utiliza calico como complemento de la red de pods:

```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

> Si estás en China, corre el siguiente comando:
kubectl apply -f <https://gitee.com/wj204811/wj204811/raw/master/kube-flannel.yml>

Asegúrate de que todos los pods estén en funcionamiento:

```shell
kubectl get pods --all-namespaces
```

Debería lucir como se muestra a continuación:

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

***trabajador***, une los nodos de computación al cluster. Ahora es el momento de agregar nodos de computación al cluster. Unirse a los nodos de cálculo es solo una cuestión de ejecutar el comando kubeadm join proporcionado al final de la ejecución del comando kube init para inicializar el nodo del Plano de control. Para la otra Jetson nano al que deseas unir a tu cluster, inicia sesión en el host y ejecuta el siguiente comando:

```shell
 the cluster - your tokens and ca-cert-hash will vary
$ sudo kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \
    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b
```

***master***, una vez que hayas completado el proceso de unión en cada nodo, deberías poder ver los nuevos nodos en la salida de kubectl get nodes:

```shell
kubectl get nodes
```

Debería lucir como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture1.png" /></div>

Etiqueta como nodo para el trabajador.

```
kubectl label node se2 node-role.kubernetes.io/worker=worker
kubectl label node se3 node-role.kubernetes.io/worker=worker
kubectl label node se4 node-role.kubernetes.io/worker=worker
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture2.png" /></div>

## Validar una instalación exitosa de EGX 2.0

***trabajador y maestro***. Para validar que la pila EGX funcione como se esperaba, sigue estos pasos para crear un archivo pod yaml. Si el comando get pods muestra el estado del pod como completado, la instalación se realizó correctamente. También puedes verificar la ejecución exitosa del archivo cuda-samples.yaml verificando que el resultado muestre Result=PASS.
Crea un archivo pod yaml, agrégale el siguiente contenido y guárdalo como samples.yaml:

```
nano cuda-samples.yaml
```

Agrega el siguiente contenido y guárdalo como cuda-samples.yaml:

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

Crea un pod de GPU de muestra:

```shell
sudo kubectl apply -f cuda-samples.yaml
```

Comprueba si se creó el pod de muestras:

```
kubectl get pods
```

Valida los registros del pod de muestra para admitir bibliotecas CUDA:

```shell
kubectl logs nvidia-l4t-base
```

Aquí está el resultado de muestra:

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

## Configurar Jupyter en Kubernetes

***trabajador y maestro***, agrega el siguiente contenido y guárdalo como jupyter.yaml:

`nano jupyter.yaml`

```shell

apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: cluster-deployment
spec:
  selector:
    matchLabels:
      app: cluster
  replicas: 3 # tells deployment to run 3 pods matching the template
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

 Crea un pod de GPU jupyter:

 ```
 kubectl  apply -f jupyter.yml
 ```

 Comprueba si el pod jupyter se creó y se está ejecutando:

 ```shell
 kubectl get pod
 ```

 Crear un equilibrador de carga externo

 ```
 kubectl expose deployment cluster-deployment --port=8888 --type=LoadBalancer 
 ```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture3.png" /></div>

 Aquí puedes ver que el cluster de Jupyter tiene acceso externo en el puerto 31262. Entonces usamos `http://se1.local:31262` para visitar jupyter.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture4.png" /></div>

Podemos usar el siguiente código para verificar la cantidad de GPU disponibles, solo tenemos 3 trabajadores y la cantidad de GPU disponibles es 3.

```python

from tensorflow.python.client import device_lib

def get_available_gpus():
    local_device_protos = device_lib.list_local_devices()
    return [x.name for x in local_device_protos if x.device_type == 'GPU']

get_available_gpus()
```

## Recursos

- **[PDF]** [Esquemáticos de la Jetson Mate](https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-Schematics-V1.0.pdf)
- **[PDF]** [Jetson Mate PCB parte superior](https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-PCB-TOP-V1.0.pdf)
- **[PDF]** [Jetson Mate PCB parte inferior](https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-PCB-BOTTOM-V1.0.pdf)

<iframe frameBorder={0} height={385} scrolling="no" src="https://www.hackster.io/WhoseAI/set-up-a-jetson-nano-nx-cluster-in-one-systerm-ac4235/embed" width={350} />

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
