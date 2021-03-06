#### CPU(Central Processing Unit)中央处理器
1.概念
* 是一块超大规模的集成电路，是一台计算机的运算核心（Core）和控制核心（ Control Unit）。它的功能主要是解释计算机指令以及处理计算机软件中的数据

* 中央处理器主要包括运算器（算术逻辑运算单元，ALU，Arithmetic Logic Unit）和高速缓冲存储器（Cache）及实现它们之间联系的数据（Data）、控制及状态的总线（Bus）。它与内部存储器（Memory）和输入/输出（I/O）设备合称为电子计算机三大核心部件。

2.物理结构
* CPU包括运算逻辑部件、寄存器部件和控制部件等。

3.主要功能
* 处理指令，执行操作，控制时间，处理数据

4.工作过程
* 提取，解码，执行，写回

5.性能参数
* 计算机的性能在很大程度上由CPU的性能决定，而CPU的性能主要体现在其运行程序的速度上。影响运行速度的性能指标包括CPU的工作频率、Cache容量、指令系统和逻辑结构等参数。
    * 缓存：缓存大小也是CPU的重要指标之一，而且缓存的结构和大小对CPU速度的影响非常大，CPU内缓存的运行频率极高，一般是和处理器同频运作，工作效率远远大于系统内存和硬盘。实际工作时，CPU往往需要重复读取同样的数据块，而缓存容量的增大，可以大幅度提升CPU内部读取数据的命中率，而不用再到内存或者硬盘上寻找，以此提高系统性能。但是由于CPU芯片面积和成本的因素来考虑，缓存都很小。

6.处理技术
* 多线程：同时多线程Simultaneous Multithreading，简称SMT。
* 多核心：也指单芯片多处理器（Chip Multiprocessors，简称CMP）。
* SMP：（Symmetric Multi-Processing），对称多处理结构的简称，是指在一个计算机上汇集了一组处理器（多CPU），各CPU之间共享内存子系统以及总线结构。
* NUMA：即非一致访问分布共享存储技术，它是由若干通过高速专用网络连接起来的独立节点构成的系统，各个节点可以是单个的CPU或是SMP系统。
* 乱序执行：（out-of-orderexecution），是指CPU允许将多条指令不按程序规定的顺序分开发送给各相应电路单元处理的技术。
* 分枝技术：（branch）指令进行运算时需要等待结果，一般无条件分枝只需要按指令顺序执行，而条件分枝必须根据处理后的结果，再决定是否按原先顺序进行。
* 控制器

7.ICT的应用
* 在ICT的应用中，可以不考虑CPU的内部结构，把其简单地看成一个黑盒子，容易理解。其行为模型是，给它输入指令，经过其内部的运算和处理，就能输出想要的结果（数据或控制信号）。

> 参考文章地址：https://baike.baidu.com/item/%E4%B8%AD%E5%A4%AE%E5%A4%84%E7%90%86%E5%99%A8/284033?fr=aladdin
