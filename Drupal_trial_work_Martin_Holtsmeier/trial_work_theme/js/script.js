(function ($, Drupal) {
    Drupal.behaviors.acesoftechBehavior = {
        attach: function (context, settings) {
            console.log('trial_work_theme theme is active!');

            // Use the global once() utility provided by Drupal.
            once('modalOpen', '#open-modal', context).forEach(function (el) {
                $(el).on('click', function (e) {
                    e.preventDefault();
                    $('#modal').fadeIn();
                });
            });

            once('modalClose', '#close-modal', context).forEach(function (el) {
                $(el).on('click', function (e) {
                    e.preventDefault();
                    $('#modal').fadeOut();
                });
            });

            once('modalOutside', '#modal', context).forEach(function (el) {
                // Instead of attaching on window, attach on the modal element.
                $(el).on('click', function (e) {
                    // If clicking directly on the modal container (and not inside modal content).
                    if ($(e.target).is('#modal')) {
                        $('#modal').fadeOut();
                    }
                });
            });
        }
    };
})(jQuery, Drupal);
