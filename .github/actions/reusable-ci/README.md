# Reusable CI Steps

Use this composite action to checkout, setup Node, cache npm and install dependencies.

Usage:

- name: Use reusable CI
  uses: ./.github/actions/reusable-ci
  with:
  node-version: 18
