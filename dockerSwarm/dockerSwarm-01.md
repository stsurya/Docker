## What is docker swarm ?

Docker swarm is a container orchestration tool part of docker engine. With it developers and IT admins can deploy and manage a cluster of docker nodes as single virtual system.

!["Docker Swarm Architecutre"](./dockerSwarmArchitecture.png)

## Docker Swarm components

**Service:** Service defines a task that n eed to be executed on the managed or worker nodes.
**Task:** Tasks refer to the docker containers that execute the commands in the define service.
**Manager Node:** It's responsible for accepting commands and creating service objects, allocating IP addresses  to tasks, assigning tasks to nodes, instructing a worker to run a task.
**Worker Node:** Worker nodes are responsible for checking assigned tasks and executing containers.