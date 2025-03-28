# Drupal Theme Package and Views Module Documentation

## Overview

This document provides installation and structural details for the custom Drupal 10 theme package and Views module developed as part of the Drupal Programmer Test Task.

## Installation Instructions

### Prerequisites

- Drupal 10 or 11 installed
- PHP 8.x
- Composer installed
- Administrator access to Drupal

### Installing the Theme

1. **Copy Theme Files**

   - Place the `trial_work_theme` folder in `themes/custom/` within your Drupal root directory.

2. **Enable the Theme**

   - Run the following Drush command:
     ```sh
     drush theme:enable trial_work_theme
     ```
   - Or enable it through the Drupal admin UI:
     - Navigate to `Appearance` (`/admin/appearance`).
     - Locate `Trial Work Theme` and set it as the default theme.

3. **Clear Cache**
   ```sh
   drush cache:rebuild
   ```

### Installing the Views Module

1. **Copy Module Files**

   - Place the `article_view_export` folder in `modules/custom/` within your Drupal root directory.

2. **Enable the Module**

   - Run:
     ```sh
     drush en article_view_export -y
     ```
   - Or enable it through the Drupal admin UI:
     - Navigate to `Extend` (`/admin/modules`).
     - Find `Latest Articles` and enable it.

3. **Clear Cache**
   ```sh
   drush cache:rebuild
   ```

## Theme Package Structure

```
themes/custom/trial_work_theme/
├── css/
│   ├── style.css  # Main styles
├── js/
│   ├── script.js  # Main javascript
│
├── templates/
│   ├── views/
│   │   ├── views-view--latest-articles.html.twig  # Custom Views template
│   ├── layout/
│   │   ├── footer.html.twig  # Custom footer template
│   │   ├── header.html.twig  # Custom header template
│   │   ├── html.html.twig  # Custom html template
│   │   ├── page--about.html.twig  # About Page content
│   │   ├── page--home.html.twig  # Home Page content
│   │   ├── page.html.twig  # Basic Page content layout
│
├── trial_work_theme.info.yml  # Theme metadata
├── trial_work_theme.libraries.yml  # CSS & JS definitions
├── trial_work_theme.theme  # PHP functions (adds body class based on role and shows right content based on the page)
```

## Views Module Structure

```
modules/custom/article_view_export/
├── config/install/
│   ├── views.view.latest_articles.yml  # Exported Views config.
│
├── latest_articles_view.info.yml  # Module metadata.
├── README.md  # Views documentation file.
```

## Features Implemented

- **Responsive theme** with two Google fonts.
- **Modal window** with sample content (JavaScript-based).
- **Custom styling** for Articles and Basic Pages.
- **Chronological Article list view** in Views module.
- **Menu with three sample pages**, including the Articles list view.
- **User role-based body class** added dynamically.
- **Footer with sample content.**

## Submission Instructions

1. **Archive the Theme and Module**
   ```sh
   tar -czvf drupal_test_task_Martin_Holtsmeier.tar.gz themes/custom/trial_work_theme modules/custom/latest_articles_view
   ```
   Or use a ZIP format:-
   ```sh
   zip -r drupal_test_task_Martin_Holtsmeier.zip themes/custom/trial_work_theme modules/custom/latest_articles_view
   ```
2. **Submit the archive** via email or upload it to a shared drive and provide the link.

## Time Spent

- Research & Setup: **14 hours**
- Theme Development: **6 hours**
- Views Configuration & Export: **6 hours**
- Debugging & Testing: **2 hours**
- Documentation: **1 hours**
- Styling the websites: **5 hours**
- **Total: 34 hours**

---

This documentation provides everything needed to install, understand, and use your Drupal theme and Views module.
