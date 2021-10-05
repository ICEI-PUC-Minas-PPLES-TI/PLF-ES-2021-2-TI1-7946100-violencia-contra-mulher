function openNav() {
    document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}

function goBack() {
    window.history.back();
}

function openModal() {
    $("#modal").show();
}

function closeModal() {
    $("#modal").hide();
}


window.onclick = function(event) {
    if (event.target == modal) {
        $("#modal").hide();
    }
}

$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {

      var group = "input:checkbox[name='" + $box.attr("name") + "']";

      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });