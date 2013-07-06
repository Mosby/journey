 var destination = 'Canada';
$(document).ready( function ( ) {
// Get the XML data from your file
    $.get('datasheet.xml', function( data ) {
        // Look in the <document>
        $(data).find('document').each( function ( ) {
            // Looks for location
            var location = $(this).find('location').text().toUpperCase();
            var classification = $(this).find('classification').text();
            // get it into html
            if(destination == location) {
                $('.location').append(location + ' ');
                $('.create-link').append('<a href="http://www.rijksoverheid.nl/onderwerpen/reisadviezen/'+ location.toLowerCase() +'">'+location +'</a>');
                $('.classification').append(classification);

                var status = $('.classification').text();
                if (status.indexOf('ontraden') > -1 ) {
                    var newline = status.replace('ontraden', '<span style="color:#f00;font-weight:bold;">ontraden</span>');
                    $('.classification').empty().html(newline);
                }
                if (status.indexOf('Waakzaamheid') > -1) {
                    var newline = status.replace('Waakzaamheid', '<span style="color:#00f;font-weight:bold;">Waakzaamheid</span>');
                    $('.classification').empty().html(newline);
                }
            }
        }); // end of each
    }, 'xml'); // The 'xml' tells jQuery to expect XML back from the request
});