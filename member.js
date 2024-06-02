function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  if(memberValue == "Select a member") {
    member.style.border = "1px solid red";
    document.getElementById('memberError').innerHTML = "Please select a member";
    return false;
  }
  else {
    member.style.border = "";
    document.getElementById('memberError').innerHTML = "";
    return true;
  }
}