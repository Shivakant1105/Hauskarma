"use strict";

$(document).ready(function () {
  $(".dashboard-sidebar").css("min-height", $(".content-wrapper").height());
});

if ($(window).width() > 767) {
  $(".CustomToogle").on("click", function () {
    var check_class = $(this).hasClass("head-toggle");
    if (check_class) {
      $(this).removeClass("head-toggle");
      $(".CustomShowHide").fadeOut("slow");
      $(".content-wrapper").css("margin-left", "0");
    } else {
      $(this).addClass("head-toggle");
      $(".content-wrapper").css("margin-left", "279px");
      $(".CustomShowHide").fadeIn("slow");
    }
  });
} else {
  $(".CustomToogle").on("click", function () {
    var check_class = $(this).hasClass("head-toggle");
    if (check_class) {
      $(this).removeClass("head-toggle");
      // $(".CustomShowHide").fadeOut("slow");
      $(".CustomShowHide").css({
        display: "none",
      });
      $(".content-wrapper").css("margin-left", "0px");
    } else {
      $(this).addClass("head-toggle");
      $(".CustomShowHide").css({
        top: "0",
        left: "0",
        width: "100%",
        right: " 0px",
        position: "relative",
        margin: "0px",
        border: "0px",
        "box-shadow": "none",
        display: "inline-block",
      });
      $(".CustomShowHide li").css("cssText", "padding-left:0px !important;");
      $(".CustomShowHide li a").css("cssText", "padding-left:0px !important;");

      $(".dashboard-custom-dropdown ul").css(
        "cssText",
        "margin-left:43px !important;"
      );

      $(".content-wrapper").css("margin-left", "0px");
      // $(".CustomShowHide").fadeIn("slow")
    }
  });
}

/* ==================================================== 
==== flag Dropdown with country pin Code Start ===== */
function setCountry(code) {
  if (code || code == "") {
    var text = jQuery('a[cunt_code="' + code + '"]').html();
    $(".dropdown dt a span").html(text);
  }
}

$(document).ready(function () {
  $(".dropdown img.flag").addClass("flagvisibility");

  $(".dropdown dt a").click(function () {
    $(".dropdown dd ul").toggle();
  });

  $(".dropdown dd ul li a").click(function () {
    var text = $(this).html();
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
    $("#result").html(
      "Selected value is: " + getSelectedValue("country-select")
    );
  });

  function getSelectedValue(id) {
    return $("#" + id)
      .find("dt a span.value")
      .html();
  }

  $(document).bind("click", function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
  });

  $("#flagSwitcher").click(function () {
    $(".dropdown img.flag").toggleClass("flagvisibility");
  });
});

/* ==================================================== 
==== flag Dropdown with country pin Code End ======= */
/* =========================================



/*==========================================
=========== Preloder Code Start ==========*/
$(window).on("load", function () {
  $(".loader").fadeOut();
  $("#preloder").delay(500).fadeOut("slow");
});
/* =========================================
=========== Preloder Code End ============*/

/* =======================================
 ============ Create Profile Start =====*/
$(document).ready(function () {
  var cur_steps = 0;
  var current_step_top;
  var next_step_top;
  var steps_top;

  var stepselemt = document.querySelectorAll(".CustomStep");
  var steps_top = stepselemt.length;

  $(".next").click(function () {
    var getparent1 = $(this).parent().parent();
    var getp = getparent1[0];
    var getsteps = getp.previousElementSibling.children;
    let getnextsteps = getsteps[cur_steps];
    if (getnextsteps?.classList.contains("active") === true) {
      getnextsteps.nextElementSibling?.classList?.add("active");
      getnextsteps.classList.remove("active");
      getnextsteps.classList.add("finish");
    } else {
      console.log("not Next Slider Exit");
    }
    cur_steps++;
  });

  $(".previous").click(function () {
    --cur_steps;
    var getparent1 = $(this).parent().parent();
    var getp = getparent1[0];
    var getsteps = getp.previousElementSibling.children;
    let getnextsteps = getsteps[cur_steps];
    if (getnextsteps?.classList.contains("finish") === true) {
      getnextsteps.classList.remove("finish");
      getnextsteps.classList.add("active");
      getnextsteps.nextElementSibling?.classList?.remove("active");
      getnextsteps.nextElementSibling?.classList?.remove("finish");
    } else {
      console.log("not Prev Slider Exit");
    }
  });
});

$(document).ready(function () {
  var current = 1,
    current_step,
    next_step,
    steps;

  steps = $("fieldset").length;

  $(".next").click(function () {
    current_step = $(this).parent();
    // console.log(current_step)
    next_step = $(this).parent().next();

    // console.log(next_step)
    next_step.show();
    current_step.hide();
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_step = $(this).parent();
    next_step = $(this).parent().prev();
    next_step.show();
    current_step.hide();
    setProgressBar(--current);
  });
  setProgressBar(current);

  // Change progress bar action
  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
    // .html(percent + "%");
  }
});
/* =======================================
 ============ Create Profile End ====== */

/* ======================================= 
=========== All Owl Carousel Start =====*/
$(document).ready(function () {
  $(".banner-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      768: {
        items: 1,
      },

      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $("#similar-listings").owlCarousel({
    items: 3,
    navigation: true,
    nav: true,
    navText: ["", ""],
    pagination: true,
    autoPlay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },

      768: {
        items: 2,
        nav: false,
      },

      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });

  $("#HomePageCarousel").owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    navText: ["", ""],
    pagination: true,
    autoPlay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

/* ======================================= 
=========== All Owl Carousel End =======*/

// ========================================================
// ======= Search Results listing Details Chat  Start =====
// ========================================================
$(function () {
  $("#similer-graph").highcharts({
    title: {
      text: "",
      x: 0,
    },
    subtitle: {
      text: "",
      x: 0,
    },
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080",
        },
      ],
    },
    tooltip: {
      borderColor: "#FFDD90",
      borderRadius: "3",
      borderWidth: "1",
      backgroundColor: "#FFFAD3",
      formatter: function () {
        return "<strong>" + this.y + "</strong>";
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#0E5F99"],
            [1, Highcharts.color("#0E5F99").setOpacity(0).get("rgba")],
          ],
        },
        lineWidth: 0,
        marker: {
          enabled: true,
          fillColor: "#fff",
          lineColor: "#0E5F99",
          lineWidth: 0,
        },
        shadow: true,
        states: {
          hover: {
            lineWidth: 0,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: "areaspline",
        color: "#0E5F99",
        data: [200, 400, 200, 400, 500, 700, 400, 500, 450, 650, 790, 790],
      },
    ],
  });
});
// ========================================================
// ======= Search Results listing Details Chat  End =====
// ========================================================

// ====================================================================
// ======= Search Results listing Details Filter Model Chat Start =====
// ====================================================================
$(function () {
  $("#filter-model-graph").highcharts({
    title: {
      text: "",
      x: 0,
    },
    subtitle: {
      text: "",
      x: 0,
    },
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080",
        },
      ],
    },
    tooltip: {
      borderColor: "#FFDD90",
      borderRadius: "3",
      borderWidth: "1",
      backgroundColor: "#FFFAD3",
      useHTML: true,
      formatter: function () {
        return '<div class="card shadow border-0"><div class="card-body text-center p-2"> <span class="d-block mb-2">Average Price</span> <span class="d-block font-weight-600 font-15 ">$3700</span> </div></div>';
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#0E5F99"],
            [1, Highcharts.color("#0E5F99").setOpacity(0).get("rgba")],
          ],
        },
        lineWidth: 0,
        marker: {
          enabled: true,
          fillColor: "#fff",
          lineColor: "#0E5F99",
          lineWidth: 0,
        },
        shadow: true,
        states: {
          hover: {
            lineWidth: 0,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: "areaspline",
        color: "#0E5F99",
        data: [200, 400, 200, 400, 500, 700, 400, 500, 450, 650, 790, 790],
      },
    ],
  });
});
// ===================================================================
// ======= Search Results listing Details Filter Model Chat End ======
// ===================================================================

/* ======================================
==== File Upload Progress Bar Start ===*/
$(function () {
  var progressbar = $("#progressbar"),
    progressLabel = $(".progress-label");

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text(progressbar.progressbar("value") + "%");
    },
    // complete: function() {
    //     progressLabel.text("Complete!");
    // }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + 1);

    console.log(val);
    if (val < 40) {
      setTimeout(progress, 80);
    }
  }

  setTimeout(progress, 2000);
});

/* ======================================
==== File Upload Progress Bar End ===*/

/* ======================================
==== Rating Progress Bar Start ========*/
$(function () {
  var progressbar = $("#progressbar_rating"),
    progressLabel = $(".progress-label-rating");

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text(progressbar.progressbar("value") + "%");
    },
    // complete: function() {
    //     progressLabel.text("Complete!");
    // }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + 2);

    if (val < 68) {
      setTimeout(progress, 80);
    }
  }

  setTimeout(progress, 2000);
});
/* ======================================
====== Rating Progress Bar End ========*/

/* ====================================== 
==== Input Calender Open Start ========*/
$(function () {
  $("#basic_info_dob_input").datepicker();
  $("#lease-date-availability").datepicker({
    showOn: "button",
    buttonImage: "assets/img/icons/datecalender.png",
    buttonImageOnly: true,
    buttonText: "Select date",
  });
  $("#bid-valid-till-date").datepicker({
    showOn: "button",
    buttonImage: "assets/img/icons/datecalender.png",
    buttonImageOnly: true,
    buttonText: "Select date",
  });
  $("#Book-Visit-Date").datepicker({
    showOn: "button",
    buttonImage: "assets/img/icons/datecalender.png",
    buttonImageOnly: true,
    buttonText: "Select date",
  });
});
/* ================================== 
==== Input Calender Open End ======*/

/* ======================================
== Set Bid Price Range Slider Start ====*/
function numberWithCommas(x) {
  if (x !== null) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

$(function () {
  // Create Listing Code
  $("#set-bid-price-range-slider").slider({
    range: true,
    min: 0,
    max: 1100,
    values: [100, 1000],
    slide: function (event, ui) {
      $("#min").html(numberWithCommas(ui.values[0]));
      $("#max").html(numberWithCommas(ui.values[1]));
    },
  });

  var $handler = $("#set-bid-price-range-slider .ui-slider-handle");

  $handler
    .eq(0)
    .append(
      "<b class='amount'>$<span id='min'>" +
        numberWithCommas($("#set-bid-price-range-slider").slider("values", 0))
    );
  $handler
    .eq(1)
    .append(
      "<b class='amount'>$<span id='max'>" +
        numberWithCommas($("#set-bid-price-range-slider").slider("values", 1))
    );
});
/* ===================================
== Set Bid Price Range Slider End ==*/

/* =========================================
=========== Navigation Code Start ========*/
(function ($) {
  $(".responsive-bar").on("click", function (event) {
    $(".main-menu").slideToggle(400);
    event.preventDefault();
  });
})(jQuery);

/* =========================================
=========== Navigation Code End ==========*/
/* =============================================

//
====== Modal add Video Play Code Start ========*/
var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();
    // Update the button text to 'Pause'
    playButton.innerHTML = '<img src="assets/img/icons/video-play-btn.png">';
    playButton.innerHTML = '<img src="assets/img/icons/video-push-btn.png">';
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = '<img src="assets/img/icons/video-push-btn.png">';
    playButton.innerHTML = '<img src="assets/img/icons/video-play-btn.png">';
  }
});
/* =============================================
====== Modal add Video Play Code End ==========*/

/* =========================================
========= Bid confirm Modal Close Start===*/
function modalclose() {
  $("#BidconfirmModalLong").modal("hide");
  $("#BookVisitModalCenter").modal("hide");
  $("#BidderDetailsSelectModalCenter").modal("hide");
  $("#BidderDetailsModalCenter").modal("hide");
  $("#CounterOfferModalCenter").modal("hide");
  $("#BidderDetailsAnswerModalCenter").modal("hide");
}
/* =========================================
=========== Bid confirm Modal Close End ==*/

(function ($) {
  /* ============================================== 
    ======= Dashboard Sidebar Section Start ====== */
  // Toggle the side navigation
  $("#sidenavToggler").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(
      ".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level"
    ).removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").click(function (e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });

  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip();
  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  /* ============================================== 
    ======= Dashboard Sidebar Section End ======== */

  /* ============================================== 
    ======= Home video Section Css Start ========= */
  const video = document.getElementById("video");
  const circlePlayButton = document.getElementById("circle-play-b");
  const Name = document.getElementById("name");
  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
      $("#video").attr("controls", "foo");
    } else {
      video.pause();
    }
  }

  circlePlayButton.addEventListener("click", togglePlay);
  video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
    Name.style.opacity = 0;
  });
  video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
    Name.style.opacity = 1;
  });
  /* ============================================== 
    ======= Home video Section Css End =========== */
})(jQuery); // End of use strict
