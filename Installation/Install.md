## on ubuntu vm

- sudo apt update
- sudo apt install docker.io -y
- sudo usermod -aG docker <username>
- logout and login

Got this issue while installing

```
failed to start daemon: Error initializing network controller: error obtaining controller instance: failed to register "bridge" driver: unable to add return rule in DOCKER-ISOLATION-STAGE-1 chain:  (iptables failed: iptables --wait -A DOCKER-ISOLATION-STAGE-1 -j RETURN: iptables v1.8.7 (nf_tables):  RULE_APPEND failed (No such file or directory): rule in chain DOCKER-ISOLATION-STAGE-1
 (exit status 4))
```

### Steps to Fix the Docker Network Issue

1. Check iptables Version
   First, check which backend your version of iptables is using. The nf_tables backend can cause issues with Docker networking.

Run this command:

```
sudo iptables --version
```

If the output mentions nf_tables, this means your system is using the newer backend.

2. Switch to the Legacy iptables Backend
   Docker works more reliably with the legacy iptables backend (xtables), so switching back to it may resolve the issue.

Run the following command to switch to the legacy backend:

```
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
```

Also, switch ip6tables (for IPv6 rules):

```
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

3. Restart Docker
   After switching to the legacy iptables, restart the Docker service:

```
sudo service docker restart
```

Then, check the status of Docker to confirm if the daemon has started:

sudo systemctl status docker 4. Test Docker
Try running a simple Docker container to verify if Docker networking is working:

```
sudo docker run hello-world
```
