$('ul.tabs').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and it's associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');
  $content = $($active.attr('href'));

  // Hide the remaining content
  $links.not($active).each(function () {
    $($(this).attr('href')).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $($(this).attr('href'));

    // Make the tab active.
    $active.addClass('active');
    $content.fadeIn();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});

/*
     FILE ARCHIVED ON 16:33:34 Oct 24, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:47:34 Aug 21, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 102.982 (3)
  esindex: 0.014
  captures_list: 119.926
  CDXLines.iter: 11.401 (3)
  PetaboxLoader3.datanode: 113.893 (4)
  exclusion.robots: 0.171
  exclusion.robots.policy: 0.159
  RedisCDXSource: 1.804
  PetaboxLoader3.resolve: 231.966
  load_resource: 271.328
*/