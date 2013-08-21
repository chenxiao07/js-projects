#!/usr/bin/env sh

GIT=$(which git)
SED=$(which sed)

REMOTES=("origin" "github")

CURRENT_BRANCH=$($GIT branch | $SED -n '/\* /s///p')
DEVELOP_BRANCH="dev"
DEPLOY_BRANCHES=("master", "gh-pages", $CURRENT_BRANCH, "dev")

function main {
    # first merge current chagnes into develop branch
    $GIT checkout $DEVELOP_BRANCH
    $GIT merge    $CURRENT_BRANCH

    # then deploy changes to targe branches
    for br in $DEPLOY_BRANCHES
    do
        $GIT checkout $br
        $GIT merge    $DEVELOP_BRANCH
        for remote in $REMOTES
        do
            $GIT push $remote $br
        done
    done
    echo "done deploying"
}

main
