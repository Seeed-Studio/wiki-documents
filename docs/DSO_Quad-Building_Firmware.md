---
name: DSO Quad:Building Firmware
category: MakerPro
bzurl:
oldwikiname:  DSO Quad:Building Firmware
prodimagename:
surveyurl: https://www.research.net/r/DSO_Quad-Building_Firmware
sku:
---

##   Building the DSO Quad firmware from source

This page currently only has information for GCC on Debian.  Please add information on more environments if you know how to set them up.

###   Using GCC and Debian

<pre> apt-get install --no-install-recommends  build-essential autoconf flex bison texinfo libncurses5-dev libgmp3-dev libmpfr-dev libmpc-dev libftdi-dev
 cd
 git clone [git://github.com/esden/summon-arm-toolchain.git](git://github.com/esden/summon-arm-toolchain.git)
 cd summon-arm-toolchain
 $EDITOR summon-arm-toolchain
</pre>

..and ensure that the following settings are in force:
```
 TARGET=arm-none-eabi
 USE_LINARO=1
 LIBSTM32_EN=1
 DEFAULT_TO_CORTEX_M3=1
```

..then:
```
 ./summon-arm-toolchain
```

The toolchain installs to <tt>~/sat/</tt>. Next:
```
cd
 git clone [https://github.com/tmbinc/dsoquad](https://github.com/tmbinc/dsoquad)
 cd dsoquad/src/app
 PATH=$PATH:~/sat/bin make
```

And then you should find <tt>.hex</tt> files in that directory ready for upload.

####   disc space usage
```
$ du -sh  summon-arm-toolchain/  sat/  dsoquad/
 117M    summon-arm-toolchain/
 229M    sat/
 1.9M    dsoquad/
```

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>