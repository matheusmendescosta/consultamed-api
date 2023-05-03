#!/usr/bin/env bash

script_root_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
project_dir="$(dirname $script_root_dir)"

docker-compose -f "$project_dir/docker-compose.yml" down