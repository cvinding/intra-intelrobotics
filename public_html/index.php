
<!DOCTYPE html>
<html lang="dk">
    <head>
        <meta charset="UTF-8">
        <title>Intra</title>
        <link rel="stylesheet" href="libs/bootstrap-4.3.1-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="libs/font-awesome/css/all.css">
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body style="background-color: #0c5460">

    <div class="container">

        <div class="loginbox media" style="border:1px solid black; border-radius: 5px; background-color: white">
            <img class="d-flex align-self-center mr-3" src="/assets/loginimg.jpg" alt="Generic placeholder image" height="450px" width="350px" style="margin-left: 15px">
            <div class="login media" style="border:1px solid black; border-radius: 5px; background-color: white">
                <div class="media-body login">
                    <h5 class="mt-0" style="text-align: center">Login</h5>
                    <form class="login">
                        <div class="ui-message"></div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Brugernavn</label>
                            <input type="text" class="form-control" name="username-input" id="username-input" placeholder="Brugernavn">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Kodeord</label>
                            <input type="password" class="form-control" name="password-input" id="password-input" placeholder="Kodeord">
                        </div>
                        <button type="button" id="submit-login" name="submit-login" class="btn btn-success container" style="margin-top: 20px">Login</button>
<!-- onclick="location.href='/news'"-->
                    </form>
                </div>
            </div>
        </div>

    </div>

    </body>


</html>

<script src="libs/jquery/jquery-3.3.1.min.js"></script>
<script src="libs/popper/popper.min.js"></script>
<script src="libs/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
<script src="js/helper.js"></script>
<script src="js/login.js"></script>