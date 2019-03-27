
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
            <h1>Opret nyheder</h1>

            <form method="post">
                <div class="form-group" style="margin-top: 100px">
                    <label for="formGroupExampleInput">Nyheds titel</label>
                    <input type="text" class="form-control" name="news-title" id="news-title" placeholder="Title">
                </div>

                <label for="formGroupExampleInput">Beskrivelse</label>
                <textarea class="form-control" name="news-desc" id="news-desc" rows="5" style"min-height: 350px"></textarea>

                <select required="required" class="form-control" name="selecter" id="exampleFormControlSelect2" style="max-height: 60px; margin-top: 2px; margin-bottom: 2px">
                    <option disabled selected="selected">Vælg noget</option>
                    <option value="0">External</option>
                    <option value="1">Internal</option>
                </select>

                <button type="submit" id="add-news" class="btn btn-primary btn-sm" style="margin-left: 1px margin-top: 1px; float: right;">Gem</button>

            </form>
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
<script src="/js/addnews.js"></script>