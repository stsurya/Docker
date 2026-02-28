## What is docker swarm ?

Docker swarm is a container orchestration tool part of docker engine. With it developers and IT admins can deploy and manage a cluster of docker nodes as single virtual system.

!["Docker Swarm Architecutre"](./dockerSwarmArchitecture.png)

## Docker Swarm components

**Service:** Service defines a task that n eed to be executed on the managed or worker nodes.
**Task:** Tasks refer to the docker containers that execute the commands in the define service.
**Manager Node:** It's responsible for accepting commands and creating service objects, allocating IP addresses  to tasks, assigning tasks to nodes, instructing a worker to run a task.
**Worker Node:** Worker nodes are responsible for checking assigned tasks and executing containers.

## Docker SWARM

Below is the **complete Docker Swarm lifecycle**: create swarm → join nodes → verify → remove nodes → delete swarm.

Assume:

* Manager VM IP: `192.168.1.10`
* Worker VMs available
* Docker already installed on all machines

---

# 1. Create Docker Swarm (Initialize Manager)

Run **only on manager node**:

```
docker swarm init --advertise-addr 192.168.1.10
```

Output will show something like:

```
Swarm initialized

To add a worker to this swarm, run:

docker swarm join --token SWMTKN-1-xxxxx 192.168.1.10:2377
```

This command is important — copy it.

---

# 2. Get Join Tokens (if you missed them)

### Worker token

```
docker swarm join-token worker
```

### Manager token

```
docker swarm join-token manager
```

---

# 3. Join Worker Nodes to Swarm

Run on **each worker VM**:

```
docker swarm join --token <WORKER_TOKEN> 192.168.1.10:2377
```

Example:

```
docker swarm join --token SWMTKN-1-abc123 192.168.1.10:2377
```

You should see:

```
This node joined a swarm as a worker.
```

---

# 4. Check Nodes in Swarm

Run **on manager only**:

```
docker node ls
```

Example output:

```
ID        HOSTNAME   STATUS   AVAILABILITY   MANAGER STATUS
abc123    manager1   Ready    Active         Leader
def456    worker1    Ready    Active
ghi789    worker2    Ready    Active
```

Meaning:

* **Leader** → swarm manager
* **Ready** → node healthy

---

# 5. Check Swarm Info

On any node:

```
docker info
```

Look for:

```
Swarm: active
```

---

# 6. Remove a Node from Swarm

## Step 1 — Leave swarm on worker

Run on **worker node**:

```
docker swarm leave
```

---

## Step 2 — Remove node from manager

Run on **manager**:

```
docker node rm <NODE_ID>
```

Example:

```
docker node rm worker1
```

---

## Force remove (if node is down)

```
docker node rm --force <NODE_ID>
```

---

# 7. Remove Manager Node (Demote First)

If removing a manager:

### Demote manager → worker

```
docker node demote <NODE_NAME>
```

Then remove normally.

---

# 8. Delete Entire Swarm (Destroy Cluster)

## Workers leave first:

On all workers:

```
docker swarm leave
```

---

## Manager leaves (last step)

On manager:

```
docker swarm leave --force
```

Now swarm is deleted.

---

# 9. Quick Command Summary

| Action           | Command                          |
| ---------------- | -------------------------------- |
| Initialize swarm | `docker swarm init`              |
| Get join token   | `docker swarm join-token worker` |
| Join node        | `docker swarm join`              |
| List nodes       | `docker node ls`                 |
| Leave swarm      | `docker swarm leave`             |
| Remove node      | `docker node rm`                 |
| Delete swarm     | `docker swarm leave --force`     |

---

# 10. Real-World Flow (Typical)

```
Manager VM
   ↓ init swarm
Workers
   ↓ join using token
Manager
   ↓ deploy services
Manager
   ↓ monitor nodes
Remove worker
   ↓ leave + rm
Shutdown cluster
   ↓ swarm leave --force
```

---