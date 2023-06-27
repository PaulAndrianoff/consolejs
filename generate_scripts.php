<?php
$directory = './scripts/commands'; // Specify the directory path where the command files are located

$files = scandir($directory); // Get the list of files in the directory

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
        echo "<script src='scripts/commands/{$file}'></script>\n";
    }
}
?>
