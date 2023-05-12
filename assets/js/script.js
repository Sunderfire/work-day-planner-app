$(function () {
  // Save Button event listener
  var saveButtonEl = $(".saveBtn");
  saveButtonEl.on("click", function () {
    var timeBlock = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlock, userInput)
  })

  //Past, Present, Future class addition and removal 
  var currentTime = dayjs().hour()
  $(".time-block").each(function () {
    var timeId = $(this).attr("id");
    if (parseInt(timeId) < currentTime) {
      $(this).addClass("past").removeClass("present future");
    } else if (parseInt(timeId) === currentTime) {
      $(this).addClass("present").removeClass("past future");
    } else {
      $(this).addClass("future").removeClass("past present");
    }
  })

  //Set time block text to saved user input
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id");
    var userSavedInfo = localStorage.getItem(timeBlock);
    $("textarea", this).val(userSavedInfo);
  })

  //Set current day in the header
  var currentDay = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(currentDay)
});

