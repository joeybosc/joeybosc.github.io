Rapid/Toy Demo of a PID control loop in hard real-time using FreeRTOS ported to a POSIX simulator. 

The architecture is as follows:

![PID_Architecture_Diagram](/img/PIDarchitecture.png "Architecture")

The controller loop is fully modular, so any control algorithm, provided it is bounded and deterministic, can be inserted into the example. The criteria for bounded determinism are:
	No unbounded loops
	No recursion
	Bounded latency for memory accesses
	No blocking memory accesses (No mutex)

This last criterion is accomplished with the use of atomic types, which ensure that no memory accesses can be partially completed (indivisible tasks. The higher priority control task will always 