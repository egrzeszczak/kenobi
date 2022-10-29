# kenobi

Base Nuxt 3 application to run in a K8s pod

## K8s
To run in a K8s pod
```
kubectl apply -f k8s/kenobi-pod.yml
```

To run a deployment
```
kubectl apply -f k8s/kenobi-deployment.yml
```

To run a service
```
kubectl apply -f k8s/kenobi-svc.yml
```

## Docker
To run in a docker container
```
docker run --rm -d -p 3000:3000/tcp egrzeszczak/kenobi
```

