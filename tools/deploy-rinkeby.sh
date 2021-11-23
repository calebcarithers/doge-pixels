#!/bin/bash
#
# deploy-rinkeby.sh
#
# Description:
# Deploy rinkeby(or hardhat). With IPFS handling.
#
set -eu
export SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
export ROOTPATH="$SCRIPTPATH/.."
source "$SCRIPTPATH/utils.sh"

#
# DEPLOYMENT CONFIG
#
export DEPLOY_ID=$(date '+%Y-%m-%d_%H_%M_%S')
#export DEPLOY_ID="2021-11-23_23_28_02"
# DOG_IPFS_KEY generally should be fixed, for testing purposes its dynamic
export DOG_IPFS_KEY="dog_deploy_$DEPLOY_ID"
export IPNS_DIR=$(get_ipns_dir)
export DEPLOY_DIR="$SCRIPTPATH/deploy/$DEPLOY_ID"
export CROP=0.02

if ! isHardhatRunning; then
  echo "Hardhat must be running: yarn chain"
  exit 1
fi

if ! isIpfsRunning; then
  echo "IPFS must be running: ipfs daemon"
  exit 1
fi

#
# DEPLOYMENT
#
pushd "$SCRIPTPATH"
  echo "============================================"
  echo "=========                          ========="
  echo "=========       💫 DEPLOY 💫       ========="
  echo "=========                          ========="
  echo "============================================"
  echo ""
  printf "%-20s %s\n" "CROP" "$CROP"
  printf "%-20s %s\n" "DEPLOY_ID" "$DEPLOY_ID"
  printf "%-20s %s\n" "IPNS_DIR" "$IPNS_DIR"
  printf "%-20s %s\n" "DOG_IPFS_KEY" "$DOG_IPFS_KEY"
  echo ""
  confirm
  # 1. generate tiles
  node ./generate-ipfs.js --deploy_dir="$DEPLOY_DIR" --ipns_dir="$IPNS_DIR" --crop="$CROP"
  # 2. deploy ipfs
  ./upload-ipfs.sh "$DEPLOY_DIR"
  # IPFS_DEPLOY_LOG_PATH="./deploy-logs/$DEPLOY_ID-ipfs.json"
  # 3. insert ipfs prefix to contract
  # 4. deploy conntract to rinkeby
  pushd "$ROOTPATH/packages/hardhat"
    export DOG_IPFS_DEPLOY_BASE_URI="https://ipfs.io/ipns/$IPNS_DIR"
    export DOG_IMG_WIDTH=`cat "$DEPLOY_DIR/config.json" | jq -r '.width'`
    export DOG_IMG_HEIGHT=`cat "$DEPLOY_DIR/config.json" | jq -r '.height'`
    # todo: if isProduction, run extra validation on sizes
    npx hardhat deploy --network hardhat --export-all ./hardhat_contracts.json
  popd
popd






