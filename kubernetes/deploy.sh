#!/usr/bin/env bash

kubectl apply -f ./config_maps/cache_database_client.yaml
kubectl apply -f ./secrets/main_database_client.yaml
kubectl apply -f ./secrets/cache_database_client.yaml

kubectl apply -f ./jobs/database_initialiser.yaml
kubectl apply -f ./cronjobs/scheduled_question_deleter.yaml

kubectl apply -f ./deployments/api.yaml
kubectl apply -f ./services/api.yaml
kubectl apply -f ./hpas/api.yaml
