<!DOCTYPE html>
<html lang="dk">
<head>
    <meta charset="UTF-8">
    <title>Intra</title>
    <link rel="stylesheet" href="libs/bootstrap-4.3.1-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="libs/font-awesome/css/all.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>





<div class="">
    <div class="row">
        <div class="col-md-4">
            <?php require_once "../templates/navbar.html"; ?>
            <!-- Content -->
        </div>
        <div class="col-md-6" style="margin-top: 100px; margin-bottom: 100px">
            <!-- Content -->
            <h1>Brugeradministration</h1>

            <div class="input-group" style="margin-top: 70px">
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                <div class="input-group-append">
                    <button class="btn btn-success" id="searchbutton" data-id="" type="button">Søg</button>
                </div>
            </div>

            <!--<textarea disabled class="form-control" id="users-textbox" rows="5" style="margin-top: 100px; min-height: 300px" placeholder="Resultatet vises her"></textarea>-->
            <div class="usersbox" id="users-textbox"></div>
        </div>
        <div class="col-md-2">
            <!-- Content -->
        </div>
    </div>
</div>

</body>


<?php require_once "../templates/footer.html"; ?>

</html>

<script src="libs/jquery/jquery-3.3.1.min.js"></script>
<script src="libs/popper/popper.min.js"></script>
<script src="libs/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
<script src="/js/helper.js"></script>
<script src="/js/auth.js"></script>
<script src="/js/menu.js"></script>
<script src="/js/founduser.js"></script>

