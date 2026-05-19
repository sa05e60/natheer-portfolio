#!/bin/bash
set -e
npm ci
npm run --workspace=db push
