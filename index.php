<!DOCTYPE html>
<html>
	<head>
		<title>Linux Console</title>
		<style>
			/* CSS styling for the console */
			body {
				background: #000;
				color: #e0e0e0;
				font-family: monospace;
				padding: 16px;
			}

			.container {
				max-width: 800px;
				margin: 0 auto;
				border: 1px solid #303030;
				background-color: #212121;
				padding: 16px;
			}

			/* Welcome message styles */
			.welcome {
				font-size: 24px;
				font-weight: bold;
				text-align: center;
				margin: 20px auto;
			}

			input[type="text"] {
				background-color: #303030;
				color: #e0e0e0;
				border: none;
				padding: 8px;
				font-size: 16px;
				width: calc(100% - 16px);
			}

			#console-output {
				height: 400px;
				overflow-y: auto;
				padding: 10px;
				scrollbar-width: thin; /* Customize scrollbar width (Webkit browsers) */
				scrollbar-color: #9ccc65 #303030; /* Customize scrollbar color (Webkit browsers) */
			}

			/* Customize scrollbar */
			#console-output::-webkit-scrollbar {
				width: 8px; /* Set the width of the scrollbar */
			}

			#console-output::-webkit-scrollbar-track {
				background-color: #303030; /* Set the background color of the scrollbar track */
			}

			#console-output::-webkit-scrollbar-thumb {
				background-color: #9ccc65; /* Set the color of the scrollbar thumb */
				border-radius: 4px; /* Round the edges of the scrollbar thumb */
			}

			/* Additional styles to mimic Linux console appearance */
			::selection {
				background-color: #008000;
			}

			.console-line {
				margin-bottom: 4px;
			}

			.command-prompt {
				color: #9ccc65;
			}

			.output-message {
				color: #e0e0e0;
			}

			.error-message {
				color: #ef5350;
			}

			.success-message {
				color: #00ff00;
			}

			/* Responsive styles */
			@media (max-width: 600px) {
				.welcome {
					font-size: 20px;
				}

				#console-output {
					height: 300px;
				}
			}
		</style>
	</head>
	<body>
		<div class="welcome">Welcome to POWER.JS</div>
		<div class="container">
			<div id="console-output"></div>
			<input
				type="text"
				id="command-input"
				placeholder="Enter a command..."
				autofocus
			/>
		</div>

		<?php include 'generate_scripts.php'; ?> <!-- Include the generated script tags -->

		<script src="scripts/main.js"></script>
	</body>
</html>
