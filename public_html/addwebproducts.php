
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
        <div class="col-md-4" style="margin-top: 100px; margin-bottom: 100px">
            <!-- Content -->
            <h1>Opret produkter</h1>

            <form>
                <div class="form-group" style="margin-top: 100px">
                    <label for="formGroupExampleInput">Produkt titel</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title">
                </div>
            </form>
            <label for="formGroupExampleInput">Beskrivelse</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" style"min-height: 350px"></textarea>

            <div class="row" style="margin-top: 1px; float: right">
                <button type="button" class="btn btn-primary btn-sm" style="margin-left: 1px">Gem</button>
            </div>
        </div>
        <div class="col-md-4">
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
