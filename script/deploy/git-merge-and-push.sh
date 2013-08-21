#!/usr/bin/env sh

git=$(which git)
sed=$(which sed)

current_branch=$($git branch | $sed -n '/\* /s///p')
develop_branch='dev'

remotes=(
        'origin'
        'github'
    )
deploy_branches=(
        'master'
        'gh-pages'
        $current_branch
        $develop_branch
    )

function main {
    # first merge current chagnes into develop branch
    $git checkout $develop_branch
    $git merge    $current_branch

    # then deploy changes to targe branches
    for br in $deploy_branches
    do
        $git checkout $br
        $git merge    $develop_branch
        for remote in $remotes
        do
            $git push $remote $br
        done
    done
    echo 'done deploying'
}

main
