function doSearch() {
    const dist = document.getElementById("dist");
    
    if (dist.value == "" || dist.value == null) {
        console.log("null");
        return false;
    } else if (dist.value == "仙台") {
        window.location.href = "test.html";
    } else if (dist.value == "宮城") {
        window.location.href = "test.html";
    } else if (dist.value == "松島") {
        window.location.href = "test.html";
    } else {
        console.log("sorry");
        window.location.href = "error.html";
    }
}
