# Linux Console

The Linux Console is a web-based command-line interface that mimics the functionality of a Linux terminal. It allows users to execute various commands and perform tasks right from their browser.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Command Input Features](#command-input-features)
- [License](#license)

## Introduction

The Linux Console is a project aimed at providing a command-line experience within a web browser. It offers a familiar environment for running commands, executing scripts, and performing various operations. Whether you're a developer, system administrator, or just want to explore command-line interactions, the Linux Console has got you covered.

## Features

- Interactive command prompt with real-time output display.
- Support for a wide range of commands and utilities.
- Customizable appearance to mimic a native Linux terminal.
- Command history with navigation using arrow keys.
- Scrollable console output with automatic scrolling on new command execution.
- Command scripting capabilities to automate tasks.
- Support for various web browsers and platforms.

## Installation

To use the Linux Console, simply open the `index.html` file in a web browser. There is no need for any additional installation or setup.

## Usage

1. Open the `index.html` file in a web browser.
2. Type commands in the input field at the bottom of the page.
3. Press Enter to execute a command.
4. View the command output in the console output area.

## Available Commands

The Linux Console supports a variety of commands and utilities. Here are some of the available commands:

- `cal [expression]`: Performs a math calculation and displays the result.
- `clear`: Clears the console output.
- `color [n]`: Generates `n` complementary colors.
- `convString [string] [format]`: Converts a string to lowercase, uppercase, capitalize, snake_case, camelCase, Pascal-case, or kebab-case format.
- `convTobase [base_number] [number_to_convert]`: Convert a number to another base.
- `cookie delete [name]`: Deletes the specified cookie.
- `cookie get [name]`: Retrieves the value of the specified cookie.
- `cookie list`: Lists all cookies stored in the browser.
- `cookie set [name] [value]`: Sets the value of the specified cookie.
- `echo [message]`: Displays a message on the console.
- `genBic [countryCode]`: Generates a random BIC (Bank Identifier Code) for the specified country.
- `genIban [countryCode]`: Generates a random IBAN (International Bank Account Number) for the specified country.
- `genPhone [countryCode]`: Generates a random phone number for the specified country.
- `genPsw [length]`: Generates a random password of the specified length.
- `genQrCode [string]`: Generates and download a QR code for the provided string.
- `giveMe [choice]`: Generates a random outcome based on the specified choice.
- `hash [algorithm] [string]`: Generates a hash of the specified string using the specified algorithm.
- `help [command_name]`: Lists all available commands with their descriptions or get help from specific command.
- `hexToRgb [hexValue]`: Converts a hexadecimal color value to RGB.
- `keyCode [string]`: Gets the keycode for the provided key.
- `myIp`: Retrieves your IP address and additional IP information.
- `roll [n] [diceValue] [mathOperation]`: Rolls `n` dice with the specified value and performs a math operation on the results.
- `surprise`: Play a game to find a random number between 1 and 100.
- `time`: Displays the current date and time.
- `validReg [regex] [string]`: Validates a regular expression with a given string.
- `webInfo [url]`: Retrieves information about a given website, including the title, description, and keywords.

Refer to the individual command files in the `commands` directory for more information on each command.

## Command Input Features

The Linux Console supports the following additional command input features:

- **Arrow Up**: Pressing the Arrow Up key retrieves the previous command from history.
- **Arrow Down**: Pressing the Arrow Down key retrieves the next command from history.
- **Tab Completion**: Pressing the Tab key completes the command or lists all commands starting with the entered input.

These features make it easier to navigate through previous commands and provide command suggestions based on your input.

## License

The Linux Console is open-source software licensed under the [MIT License](LICENSE).
