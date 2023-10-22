#!/bin/bash

image_tag="peerprep_question_service_database"
export_dir="./docker_build"
export_file="$export_dir/peerprep_question_service_database.tar"

echo "Building image ..."
echo

docker image build . --tag=$image_tag

if [[ $? -ne 0 ]]; then
    echo "Build failed!"
    exit 1
fi

echo
echo "Exporting image ..."

mkdir -p $export_dir
docker image save --output=$export_file $image_tag

echo "Exported image to $export_file"
