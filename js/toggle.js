function openTab(currentTab , currentContent){
    let allTabs = document.getElementsByClassName("tabs");
    let allContents = document.getElementsByClassName("contents");
    var currentContent = document.getElementById(currentContent);

    for(let i = 0; i < allTabs.length; i++){
        allTabs[i].classList.remove('active');
        allContents[i].classList.remove('active');
    }
    currentTab.classList.add('active');
    currentContent.classList.add('active');
}