<?php
$files = scandir('./scripts/commands'); // Get the list of files in the directory
$files = scandir('./scripts/libraries'); // Get the list of files in the directory

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
        echo "<script src='scripts/commands/{$file}'></script>\n";
    }
}
?>
