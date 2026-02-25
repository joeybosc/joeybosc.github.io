[Go Back](Hardware.md)
*May 2022*

# Laser Fluorescence Dental Cavities Detector

It's been a long time since I worked on this project, but it has a special place in my heart since it was kind of the first attempt I ever made at prototyping a complex hardware-software integration. The physics of why the dental fluorescence works is really interesting, and this project is inspired by [this paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC8677328/). Due to hardware prototyping constraints, we landed on using a Raspberry Pi 4 with a Camera, running a simple TensorFlow Image Classification Algorithm on full color images, but initial results indicate that this may be an unnecessarily complex approach. The algorithm overfits irrelevant information in the visual data, and a specialized camera able to detect only fluorescence at the wavelength of interest would be presumably better.  

I'll hopefully have time to go into more detail and flesh this out later but please find the summary from my CV below:

**Laser Fluorescence Dental Cavities Detector** 
*Device and Diagnostic Design, Boston University*
- Implemented a custom PCB design and system integration for a handheld cavity-detection device. 
- Built a TensorFlow-based statistical model achieving 90% stage 1 and 2 cavity detection accuracy.
- Led a four member team to build and test a functioning prototype comprising a 405nm laser, Raspberry Pi, and custom PCBs, ensuring reliable signal acquisition and processing.
