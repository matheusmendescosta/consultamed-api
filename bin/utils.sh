function wait_for_container() {
  waiting_done="false"
  echo "Waiting for container: $1"
  while [[ "${waiting_done}" != "true" ]]; do
    container_state="$(docker inspect "$1" --format '{{ .State.Status }}')"
    if [[ "${container_state}" == "running" ]]; then
      health_status="$(docker inspect "$1" --format '{{ .State.Health.Status }}')"
      if [[ ${health_status} == "healthy" ]]; then
        waiting_done="true"
      fi
      if [[ ${health_status} == "unhealthy" ]]; then
        echo "The container "$1" failed to start successfully"
        exit 1
      fi
    else
      waiting_done="true"
    fi
    sleep 1;
  done;
}

function container_is_running() {
  if [ "$(docker ps -a -q -f name="$1" -f "status=running")" ]; then
    return 0
  else
    return 1
  fi
}