#!/usr/bin/env sh

git=$(which git)
sed=$(which sed)

current_branch=$($git branch | $sed -n '/\* /s///p')
develop_branch='dev'

remotes=(origin github)
deploy_branches=(master gh-pages $current_branch $develop_branch)

function main {
    echo "DEBUG: merge $current_branch into $develop_branch"
    $git checkout $develop_branch
    $git merge    $current_branch

    for branch in $deploy_branches; do
        echo "DEBUG: deploying $branch"
        $git checkout $branch
        $git merge    $develop_branch
        for remote in $remotes; do
            echo "DEBUG: deploying $branch to remote: $remote"
            command="$git push $remote $branch"
            $command 2&1>/dev/null
            if (( $? == 0 )); then
                echo "DEBUG: done deploying $branch to remote: $remote"
            else
                echo "DEBUG: failed deploying $branch to remote: $remote"
            fi
        done
    done
    echo 'DEBUG: done deploying'
}

main
