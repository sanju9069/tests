$(document).ready(function () {

  // label active and get value
  $(".payLabel").click(function () {
    $(".discountColor").removeClass("discountColorGreen");
    $(this).find(".discountColor").addClass("discountColorGreen");
    $(".payLabel").removeClass("borderGreen");
    $(this).addClass("borderGreen");
    let getVal = $(this).find("input").val();
    //console.log(getVal)
  });


  // tabs and filter function
  function tabOpenClose(className, dataAttr, divClassName, activeClass) {
    $('.'+className+'').click(function () {
      let getAttr = $(this).attr("data-"+dataAttr+"");
      $('.'+className+'').removeClass(activeClass);
      $(this).addClass(activeClass);
      $('.'+divClassName+'').hide();
      $('.'+divClassName+'[data-'+dataAttr+'="' + getAttr + '"]').fadeIn();
      if (getAttr === "all") {
        $('.'+divClassName+'').fadeIn();
      }
    });
  }

  tabOpenClose("faqTabBtn", "faq", "faqTabContent", "active");
  tabOpenClose("tablinks", "test", "tabcontent", "active");
  tabOpenClose("filterBtn", "filter", "testCards", "active");

  $(".accordion").click(function () {
    let getActive = $(this).find("h4").hasClass("active");
    let getAttr = $(this).attr("data-faq-accordion");
    if(getActive){
        $('.accContent'+'[data-faq-accordion="' + getAttr + '"]').slideUp(200);
        $(this).find("h4").removeClass("active");
        return
    }
    $(".accordion").find("h4").removeClass("active");
    $(this).find("h4").addClass("active");
    $(".accContent").slideUp(200);
    $('.accContent'+'[data-faq-accordion="' + getAttr + '"]').slideDown(200);
  });
  
  console.log("yes");
  console.log("yes");

});
