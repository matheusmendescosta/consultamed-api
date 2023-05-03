#!/bin/bash
set -e

npm install

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"