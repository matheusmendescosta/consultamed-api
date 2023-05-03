#!/usr/bin/env bash

script_root_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
project_dir="$(dirname $script_root_dir)"

source "$script_root_dir/utils.sh"

if [ ! "$1" ]; then
  echo "vc deve ter o caminho do arquivo de bkp"
  exit 1  
fi

if ! container_is_running mysqldb; then
  echo "conteiner não está rodando"
  read -p "Start the container? (Y/N): " confirm && [[ $confirm == [yY] ]] || exit 1
  docker-compose -f "$project_dir/docker-compose.yml" up -d
  wait_for_container backend
fi
docker exec -i mysqldb mysql agendamento_development < $1 -u root

#/home/matheusdev/matheusdev/projetos/consultamed-api/dump_agendamento_development