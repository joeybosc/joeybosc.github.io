[Go Back](Hardware.md)

*Dec. 2025*
# 60GHz Wireless Receiver Design

I had the opportunity at Columbia to study under Harish Krishnaswamy, who is something of a legend in the RF IC design space. His research outfit, the Columbia High-Speed and Millimeter-Wave Integrated Circuits Lab (CoSMIC) has made some pretty astonishing advances in EHF IC design which enabled the 5G revolution in the early 2020s. 

Under his guidance my group painstakingly designed and tested in simulation a 60GHz wireless receiver in 90nm CMOS technology. While this was the smallest CMOS PDK we had available for our purposes, smaller devices are highly preferred for such high frequency carriers -- the parasitic capacitances and inductances seen even in minimum length 90nm devices correspond to an fmax (maximum frequency with power gain > 1) of around 120GHz. So we are already using a large fraction of available bandwidth, and intrinsic gain for each stage in the receiver will be low. This is mostly a problem in the Low-Noise Amplification stage, which was my focus in this project. Experimentation with different topologies for this amplifier led to the selection of a target power gain of 10dB, which is fine but not great. However, it's generally a good idea to spread gain out across multiple stages to avoid oscillation of any one stage, and we designed an active mixer with 10dB of power gain. The other key components are a voltage-controlled oscillator (for downconversion of the carrier signal by mixing) and baseband amplifier (for amplifying the downconverted signal at 1GHz bandwidth). 

![Receiver_Architecture_Diagram](/img/Receiver_Architecture.png "Architecture")


### The Future of mmWave
As natural as it seems that we should keep pushing wireless communication bands to higher frequencies, my experience on this project has made me wonder whether the technology is plateauing in terms of usefulness. 