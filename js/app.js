const menuIcon = document.querySelector('.fa-bars');
const dragItems = document.querySelectorAll('.draggable-player');
const teamList = document.querySelector('.team-list');

const editTeamMember = (e) => {
  if(e.target.className === 'fas fa-edit') {
    e.target.className = 'fas fa-save';
    const teamMemberSpan = e.target.parentElement.previousElementSibling;
    const teamMemberDiv = teamMemberSpan.parentElement;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = teamMemberSpan.textContent;
    teamMemberDiv.insertBefore(input, teamMemberSpan);
    teamMemberDiv.removeChild(teamMemberSpan);
    input.focus();
    input.setSelectionRange(0, input.value.length);
  } else if (e.target.className === 'fas fa-save'){
    e.target.className = 'fas fa-edit';
    const input = e.target.parentElement.previousElementSibling;
    const teamMemberDiv = input.parentElement;
    const teamMemberSpan = document.createElement('span');
    teamMemberSpan.textContent = input.value;
    teamMemberDiv.insertBefore(teamMemberSpan, input);
    teamMemberDiv.removeChild(input);
  }
};

// toggle side bar on button click
const toggleSidebar = () => {
  document.querySelector('.side-nav').classList.toggle('active');
}
// toggle sidebar event listener
menuIcon.addEventListener('click', toggleSidebar);
// edit team list member event listener
teamList.addEventListener('click', editTeamMember);


// drag items for team formation
dragItems.forEach(dragItem => {
  dragItem.onmousedown = function(event) { // (1) start the process

    // (2) prepare to moving: make absolute and on top by z-index
    dragItem.style.position = 'absolute';
    dragItem.style.zIndex = 1000;
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(dragItem);
    // ...and put that absolutely positioned dragItem under the cursor

    moveAt(event.pageX, event.pageY);

    // centers the dragItem at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        dragItem.style.left = pageX - dragItem.offsetWidth / 2 + 'px';
        dragItem.style.top = pageY - dragItem.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // (3) move the dragItem on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the dragItem, remove unneeded handlers
    dragItem.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      dragItem.onmouseup = null;
    };

    dragItem.ondragstart = function() {
    return false;
  };

  };

});
