#!/usr/bin/env perl
use strict;
use utf8;
use warnings;
use Encode;
use JSON;
use YAML::Loader;

my $stdin;
while ( <STDIN> ) {
    $stdin .= $_;
}
$stdin = decode("utf8", $stdin);

my $yaml_loader = YAML::Loader->new;
my $yaml_data   = $yaml_loader->load($stdin);
my $json_text   = encode_json $yaml_data;

print "\n$json_text\n";

