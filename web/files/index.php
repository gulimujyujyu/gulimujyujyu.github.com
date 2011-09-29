<html>
    <head>
        <title>Xiaolong's Files</title>
    </head>
    <body>
        <h2>Upload file</h2>
        <form action="upload.php" method="post" enctype="multipart/form-data">
            <label for="file"> Filename:</label>
            <input type="file" name="file" id="file" />
            <br/>
            <label for="youknow"> You Know...</label>
            <input type="password" name="youknow" id="youknow" />
            <br/>
            <input type="submit" name="submit" value="Submit" />
        </form>
        <h2>File List</h2>
        <?php
            if($handle = opendir("./upload/")) {
                while (false !== ($file = readdir($handle))) {
                    if( $file != "." && $file != ".." && $file != ".svn") {
                        $theList .= '<li><a href="./upload/'.$file.'">'.$file.'</a></li>';
                    }
                }
                closedir($handle);
            }
        ?>
        <div>
            <ul>
                <?=$theList?>
            </ul>
        </div>
    </body>
</html>