#!/usr/bin/env perl
use utf8;
use strict;
use warnings;
use Encode;
use YAML::Loader;
use JSON;

my $loader = YAML::Loader->new;
my $stdin;
while ( <STDIN> ) {
    $stdin .= $_;
}
$stdin = decode("utf8", $stdin);

my $yaml = $loader->load($stdin);
my $json_text = encode_json $yaml;

print "\n$json_text\n";
