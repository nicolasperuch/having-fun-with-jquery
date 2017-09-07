$("#dropdownBranch").change(function (){

    var dropdownBranch = $("#dropdownBranch").val();

    console.log(dropdownBranch)

    if(dropdownBranch != "brasil"){
        displayChange($(".dropdownDiv"), "none")
        displayChange($(".textFieldDiv"), "inline")
    }else{
        console.log("here")
        displayChange($(".textFieldDiv"), "none")
        displayChange($(".dropdownDiv"), "inline") 
    }
})

function displayChange(cssClass, state){
    cssClass.css({
        "display": state
    })
}