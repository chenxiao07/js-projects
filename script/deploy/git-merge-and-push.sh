#!/usr/bin/env sh

git=$(which git)
sed=$(which sed)

current_branch=$($git branch | $sed -n '/\* /s///p')
echo $current_branch
develop_branch='dev'
echo $develop_branch

remotes=(origin github)
echo ${remotes[@]}
deploy_branches=(master gh-pages $current_branch $develop_branch)
echo ${deploy_branches[@]}

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
            $git push $remote $branch 2&1>/dev/null
        done
    done
    echo 'DEBUG: done deploying'
}

main
