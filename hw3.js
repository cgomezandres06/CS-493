document.addEventListener("DOMContentLoaded", init);

function init()
{
    document.getElementById("btn-add").addEventListener("click", addEmp );
    document.getElementById("btn-add").addEventListener("click", showAlert );
    document.getElementById("name").addEventListener("click", hideAlert );
    document.getElementById("last-name").addEventListener("click", hideAlert );
    document.getElementById("btn-clear").addEventListener("click", clearList );
    document.getElementById("txtInput").addEventListener("keypress",changingFont);

    var empList= document.getElementById("table-body");
    var name=document.getElementById("name").value;   
    var lastName=document.getElementById("last-name").value; 
    

    var count = 0;
    function addEmp()
    {
        var empList= document.getElementById("table-body");
        var name=document.getElementById("name").value;   
        var lastName=document.getElementById("last-name").value; 
        count++
        var newRow= document.createElement("tr");
        var newNum= document.createElement("td");
        var labelName= document.createElement("td");
        var labelLast= document.createElement("td");

        newNum.innerText = count;
        labelName.innerText=name;
        labelLast.innerText=lastName;
            
        newRow.appendChild(newNum);
        newRow.appendChild(labelName);
        newRow.appendChild(labelLast);
        empList.appendChild(newRow);

        document.getElementById("name").value = "";
        document.getElementById("last-name").value = "";
    }


    function clearList()
        {
            document.getElementById("table-body").innerText = "";
            count = 0;
        }
    function showAlert()
        {
            if (document.getElementById("name").value == '')
            {
            var alertString="<div class='alert alert-success'>";
            alertString += "First Name or Last Name Empty"+"</div";
            document.getElementById("alertbox").innerHTML=alertString;
            }

            if (document.getElementById("last-name").value == '')
            {
            var alertString="<div class='alert alert-success'>";
            alertString += "First Name or Last Name Empty"+"</div";
            document.getElementById("alertbox").innerHTML=alertString;
            }

        }

    function hideAlert()
        {
            if (!document.getElementById("name").value == '')
            {
                var alertString="";
                alertString += "";
                document.getElementById("alertbox").innerHTML=alertString;
            }

            if (!document.getElementById("last-name").value == '')
            {
                var alertString="";
                alertString += "";
                document.getElementById("alertbox").innerHTML=alertString;
            }
           
        }

    function changingFont()
        {
            var input=document.getElementById("txtInput").value

            document.getElementById("txtUC").innerHTML=input.toUpperCase();
            document.getElementById("txtLC").innerHTML=input.toLowerCase();
            document.getElementById("txtRed").innerHTML=input;
            document.getElementById("txtRed").style="color:red";
            document.getElementById("txtCursive").innerHTML=input;
            document.getElementById("txtCursive").style="font-family: cursive;";
    }
   

}