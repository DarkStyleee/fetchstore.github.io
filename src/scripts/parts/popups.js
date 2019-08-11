export default function initPopups() {
  $(document).ready(function() {
    $('.footer__copyright_personal_popup').magnificPopup({
      type: 'inline',
  
      fixedContentPos: true,
      fixedBgPos: true,
  
      overflowY: 'auto',
  
      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $('.item__left_options_table-size-link').magnificPopup({
      type: 'inline',
  
      fixedContentPos: true,
      fixedBgPos: true,
  
      overflowY: 'auto',
  
      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
  });
}