# Jetson Mate Getting Started

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png"/></div>

**Jetson Mate** is a carrier board which can install up to **4 Nvidia Jetson Nano/NX SoMs**. There is an on board **5-port gigabit switch enabling the 4 SoMs to communicate with each other**. All the 3 peripheral SoMs can be powered on or off separately. With one 65w PD power adapter and 1 ethernet cable, developers can easily build their own Jetson Cluster.

## Feature

- Easy to build and config
- Powerful and Compact
- Comes with a dedicated case and fan

## Specification

|Spec|--|
|--|--|
|Power|65w PD|
|Dimensions|110mm x 110mm|
|Onboard Switch|Microchip KSZ9896CTXC|


## Hardware Overview

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate.png"/></div>

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate-2.png"/></div>

## Getting Started

### Step.1 Preparation

- **Power Supply**: A qualified Type-C power adapter (at least **65w**) with PD protocol (**Not included**).

- **Nvidia Jetson Nano / Xavier NX Compute Modules** x 4. Either eMMC version or SD card version from Dev Kit is supported.

### Step.2 Install and Configure Jetson OS

> If you are using Computer Modules form Dev Kit with SD card, we suggest you install and configure the system on the Dev Kit carrier board.

If you are using Compute Modules with eMMC storage, please use Nvidia’s official SDK manager.

- Choose the target hardware:

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/step-1.png"/></div>

- Choose the OS and Libraries you want to install:

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/step-2.png"/></div>

- Download and install the files.

**During this Process**

1.Insert the computer module to the main node.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-3.jpg"/></div>

2.Short the **2 GND pin** shown in the picture.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-1.jpg"/></div>

3.Connect Jetson Mate to your computer via micro USB port.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-2.jpg"/></div>

4.Power on the machine, press the **wake up button**.

5.Flash your compute module.

- When the installation of OS and software library is completed, you will see a window pop up. Select Manual Setup option. Then click flash. Wait until it’s finished.

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/step-3.png"/></div>

- Flash all the left compute modules you have.

**All the modules can only be flashed when installed on the main node**. Thus, you should flash and configure the modules one by one on the main node.

### Launch the Cluster

Install all the compute modules you have. **Power on**, then click **wake up button**. Now you can check the IP address through your router. You can also connect to the nodes via their hostname!

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-1.png"/></div>

## Build a Kubernetes cluster with Jetson Mate
Kubernetes is an enterprise-grade container-orchestration system designed from the start to be cloud-native. It has grown to be the de-facto cloud container platform, continuing to expand as it has embraced new technologies, including container-native virtualization and serverless computing.

Kubernetes manages containers and more, from micro-scale at the edge to massive scale, in both public and private cloud environments. It is a perfect choice for a "private cloud at home" project, providing both robust container orchestration and the opportunity to learn about a technology in such demand and so thoroughly integrated into the cloud that its name is practically synonymous with "cloud computing."

In this tutorial, we use one master and three workers. In the following steps, We will indicate in bold whether ，The software running in ***master*** or in the ***worker***, or in ***worker and master***.
###  configure Docker
***worker and master***, We need configure the docker runtime use "nvidia" as default.
modify the file `/etc/docker/daemon.json`
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
Restart the Docker daemon:
```shell
sudo systemctl daemon-reload && sudo systemctl restart docker
```
Validate the Docker default runtime as NVIDIA:
```shell
sudo docker info | grep -i runtime
```
Here’s the sample output:
```
Runtimes: nvidia runc
Default Runtime: nvidia
```
### Installing Kubernetes
***worker and master***, Install kubelet, kubeadm, and kubectl:
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
Disable the swap, You have to turn this off every time you reboot.
```
sudo swapoff -a
```
Compile deviceQuery, which we will use it in the following steps.
```shell
cd /usr/local/cuda/samples/1_Utilities/deviceQuery && sudo make 
cd 
```

### Configure Kubernetes
***master***, Initialize the cluster:
```shell
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
```
The output shows you commands to execute for deploying a pod network to the cluster, as well as commands to join the cluster. If everything is successful, you should see something similar to this at the end of the output:
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


Using the output instructions, run the following commands:

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

Install a pod-network add-on to the control plane node. Use calico as the pod-network add-on:
```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```
Make sure that all pods are up and running:
```shell
kubectl get pods --all-namespaces
```
Here’s the sample output:
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
***worker***, Join the compute nodes to the cluster, it is now time to add compute nodes to the cluster. Joining the compute nodes is just a matter of running the kubeadm join command provided at the end of the kube init command run to initialize the Control Plane node. For the other Jetson nano you want to join your cluster, log into the host, and run the command:
```shell
 the cluster - your tokens and ca-cert-hash will vary
$ sudo kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \
    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b
```

***master***,Once you have completed the join process on each node, you should be able to see the new nodes in the output of kubectl get nodes:
```shell
kubectl get nodes
```
Here’s the sample output:

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture1.png"/></div>
tag as node for the worker.

```
kubectl label node se2 node-role.kubernetes.io/worker=worker
kubectl label node se3 node-role.kubernetes.io/worker=worker
kubectl label node se4 node-role.kubernetes.io/worker=worker
```
<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture2.png"/></div>
## Validating a successful EGX 2.0 installation
***worker and master***, To validate that the EGX stack works as expected, follow these steps to create a pod yaml file. If the get pods command shows the pod status as completed, the installation has been successful. You can also verify the successful run of the cuda-samples.yaml file by verifying that the output shows Result=PASS.
Create a pod yaml file, add the following contents to it, and save it as samples.yaml:
```
nano cuda-samples.yaml
```

Add the following content and save it as cuda-samples.yaml:
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
Create a sample GPU pod:
```shell
sudo kubectl apply -f cuda-samples.yaml
```

Check whether the samples pod was created:
```
kubectl get pods
```

Validate the sample pod logs to support CUDA libraries:
```shell
kubectl logs nvidia-l4t-base
```

Here’s the sample output:
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

## Configure Jupyter on Kubernetes
***worker and master***,Add the following content and save it as jupyter.yaml:

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
Create a jupyter GPU pod:
 ```
 kubectl  apply -f jupyter.yml
 ```
 Check whether the jupyter pod was created and running:
 ```shell
 kubectl get pod
 ```
 Create an External Load Balancer
 ```
 kubectl expose deployment cluster-deployment --port=8888 --type=LoadBalancer 
 ```
<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture3.png"/></div>
 
 Here you can see that the jupyter cluster has external access on port 31262. So we use `http://se1.local:31262` to visit the jupyter.

<div align=center><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture4.png"/></div>

We can use the following code to check the number of GPUs available, we only have 3 workers, and the number of GPUs available is 3.

```python

from tensorflow.python.client import device_lib

def get_available_gpus():
    local_device_protos = device_lib.list_local_devices()
    return [x.name for x in local_device_protos if x.device_type == 'GPU']

get_available_gpus()
```

All right, here's your show.
## Resources

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
