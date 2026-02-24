	Jan. 26
# Real-Time PID Control Demo

Rapid/Toy Demo of a PID control loop in hard real-time using FreeRTOS (simulated in Unix). 

The architecture is as follows:

![PID_Architecture_Diagram](/img/PID_Architecture.png "Architecture")

The controller loop is fully modular, so any control algorithm, provided it is bounded and deterministic, can be inserted into the example. The criteria for bounded determinism are:
	No unbounded loops
	No recursion
	Bounded latency for memory accesses
	No blocking memory accesses (No mutex)

This last criterion is accomplished with the use of atomic types, which ensure that no memory accesses can be partially completed (indivisible tasks). The higher priority control task will always supersede the lower priority server tasks, so priority inversion is avoided. 

The server connects via TCP/IP to an easily configurable Python client, so any POSIX-compliant service can theoretically control the system. 

Have a closer look at this example [here](https://github.com/joeybosc/RT_PID_Cruise_Controller.git).