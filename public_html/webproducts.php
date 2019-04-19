
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
            <div class="UI-message"></div>
            <!-- Content -->
            <h1>Vis eller redigere produkter</h1>
            <div id="product-output">
                <!--
                <div class="card" style="margin-top: 70px">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div class="row" style="margin-top: 1px; float: right">
                    <button type="button" class="btn btn-primary btn-sm">Rediger</button>
                    <button type="button" class="btn btn-primary btn-sm" style="margin-left: 1px">Gem</button>
                </div>

                <div class="card" style="margin-top: 70px">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div class="row" style="margin-top: 1px; float: right">
                    <button type="button" class="btn btn-primary btn-sm">Rediger</button>
                    <button type="button" class="btn btn-primary btn-sm" style="margin-left: 1px">Gem</button>
                </div>

                <div class="card" style="margin-top: 70px">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div class="row" style="margin-top: 1px; float: right">
                    <button type="button" class="btn btn-primary btn-sm">Rediger</button>
                    <button type="button" class="btn btn-primary btn-sm" style="margin-left: 1px">Gem</button>
                </div>
            -->
            </div>
        </div>
        <div class="col-md-2">
            <!-- Content -->
        </div>
    </div>
</div>

    <div class="modal fade" id="productsmodal" tabindex="-1" role="dialog" aria-labelledby="modaltitle"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modaltitle">Sletning</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="modalbody">
                    Er du sikker på du vil slette produktet?
                </div>
                <div class="modal-footer">
                    <button type="button" id="deleteproducts-yes" data-id="" class="btn btn-secondary" data-dismiss="modal">Ja</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Nej</button>
                </div>
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
<script src="/js/webproduct.js"></script>
<script src="/js/menu.js"></script>
