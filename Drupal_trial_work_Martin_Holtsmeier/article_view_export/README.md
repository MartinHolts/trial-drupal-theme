# Article View Export Module

This module provides a chronological list view for the Article content type. It was exported from the Drupal Views UI and imported as a configuration.

## Installation

1. Ensure that your Drupal 10 site has the Views module enabled.
2. Place this module in your `/modules/custom/` directory.
3. Enable the module from the **Extend** page in the Drupal admin interface.
4. The view will be automatically imported and available at the defined path (e.g., `/latest-articles`).

## Structure

-   **config/install/views.view.latest_articles.yml** - The exported view configuration file.
-   **article_view_export.info.yml** - Module metadata.
-   **README.md** - This documentation file.
