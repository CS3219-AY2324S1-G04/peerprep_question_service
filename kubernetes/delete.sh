#!/usr/bin/env bash

kubectl delete -f ./config_maps/cache_database_client.yaml
kubectl delete -f ./secretes/main_database_client.yaml
kubectl delete -f ./secretes/cache_database_client.yaml

kubectl delete -f ./jobs/database_initialiser.yaml
kubectl delete -f ./cronjobs/scheduled_question_deleter.yaml

kubectl delete -f ./deployments/api.yaml
kubectl delete -f ./services/api.yaml
kubectl delete -f ./hpas/api.yaml
