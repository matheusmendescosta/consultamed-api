#!/usr/bin/env bash

script_root_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
project_dir="$(dirname $script_root_dir)"

source "$script_root_dir/utils.sh"

docker-compose -f "$project_dir/docker-compose.yml" down
docker-compose -f "$project_dir/docker-compose.yml" up -d

wait_for_container mysqldb
wait_for_container backend