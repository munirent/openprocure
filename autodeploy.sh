#!/bin/bash

rm -rf build/
git config --global user.email "jvanier+openprocure@gmail.com"
git config --global user.name "Open Procure Autodeploy"
env ALLOW_DIRTY=yes bundle exec rake deploy
