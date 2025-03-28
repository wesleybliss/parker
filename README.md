# Parker - Chrome Extension

Parker is a Chrome extension that allows you to "park" a tab without losing its information.
It provides a simple way to save and revisit tabs with their metadata, such as title, URL, and debug information.

## Features

- **Park Tabs**: Save the current tab's information and replace it with a parked tab view.
- **Debug Information**: Optionally display debug information for parked tabs.
- **Customizable Options**: Enable or disable debug information through the options page.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the folder containing this extension.

## Usage

1. Click the extension icon in the Chrome toolbar to park the current tab.
2. The parked tab will display the tab's ID, title, URL, and optional debug information.
3. Use the options page to toggle debug information:
   - Open the options page by right-clicking the extension icon and selecting **Options**.
   - Check or uncheck the "Show debug information" option.

## File Structure

- **manifest.json**: Defines the extension's metadata and permissions.
- **background.js**: Handles the logic for parking tabs and managing their metadata.
- **parkedTab.html**: Displays the parked tab's information.
- **parkedTab.js**: Contains the logic for rendering parked tab data.
- **options.html**: Provides a UI for configuring extension options.
- **options.js**: Manages the options page logic.
- **global.css**: Shared styles across the extension.
- **parkedTab.css**: Styles specific to the parked tab view.
- **options.css**: Styles specific to the options page.
- **icons/**: Contains the extension's icons in various sizes.

## Permissions

This extension requires the following permissions:

- **activeTab**: To access the currently active tab's information.
- **storage**: To save and retrieve user options.

## Development

To modify or extend the extension:

1. Make changes to the source files.
2. Reload the extension in Chrome by navigating to `chrome://extensions/` and clicking the **Reload** button for this extension.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
