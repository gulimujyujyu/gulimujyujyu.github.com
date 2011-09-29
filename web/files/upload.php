<?php
if( $_POST["youknow"] == "gulimujyujyu"){ 
    if( $_FILES["file"]["error"] > 0)
    {
        echo "Error:" . $_FILES["file"]["error"] . "<br/>";
    }
    else
    {
        echo "Upload:" . $_FILES["file"]["name"] . "<br/>";
        echo "Type:" .$_FILES["file"]["type"] . "<br/>";
        echo "Size:" . ($_FILES["file"]["size"]/1024). "Kb<br/>";
        echo "Stored in:" .$_FILES["file"]["tmp_name"]. "<br />";
        
        if( file_exists("upload/" . $_FILES["file"]["name"]))
        {
            echo $_FILES["file"]["name"] . " already exists in upload/ ." . "<br/>";
        }
        else
        {
            move_uploaded_file( $_FILES["file"]["tmp_name"],
                               "upload/" . $_FILES["file"]["name"]);
            echo "File stored in " . "upload/" . $_FILES["file"]["name"];
        }
    }   
}
else {
    echo "You don't know..";
}
echo '<h1><a href="index.php">Back</a></h1>';
?>
